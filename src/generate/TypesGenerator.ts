import axios, { AxiosInstance } from 'axios';
import { promises } from 'fs';
import openapiTS from 'openapi-typescript';
import path from 'path';

import { assertIsError } from '../utils/assertIsError';

import { GitHubRepoTree, NestedTree } from './types';

const { writeFile } = promises;

class TypesGenerator {
  private client: AxiosInstance;

  private REPO_URL = 'https://api.github.com/repos/bigcommerce/api-specs/git/trees/main';
  private CONTENT_URL = 'https://raw.githubusercontent.com/bigcommerce/api-specs/main/reference/';
  // private CONTENT_URL = 'https://raw.githubusercontent.com/bigcommerce/api-specs/main';

  private OUTPUT_DIRECTORY_PATH = path.join(process.cwd(), 'src/generate/generated');
  private PRETTIER_CONFIG_PATH = path.join(process.cwd(), '.prettierrc');

  constructor() {
    this.client = axios.create({
      headers: {
        accept: 'application/vnd.github.v3+json',
      },
    });
  }

  /**
   * Generates a TypeScript file for each Open API Spec file provided as input,
   * and writes each file to the output directory defined above.
   */
  public async generate(): Promise<void> {
    const sourceFiles = await this.getSourceFiles();

    // console.log(sourceFiles, 'here the source files');

    for (const sourceFile of sourceFiles) {
      const outputPath = path.join(
        this.OUTPUT_DIRECTORY_PATH,
        path.basename(sourceFile.replace(path.extname(sourceFile), '.ts')),
      );

      try {
        const output = await openapiTS(sourceFile, { prettierConfig: this.PRETTIER_CONFIG_PATH, silent: false });
        await writeFile(outputPath, output);
      } catch (err) {
        assertIsError(err);
        process.stderr.write(`${sourceFile}: ${err.name}: ${err.message}}\n`);
      }
    }
  }

  /**
   * Returns a list of valid Open API Spec files URLs that can be used as input to
   * the openapi-typescript module.
   *
   * All spec source files for the public BigCommerce API are stored in the
   * bigcommerce/api-specs repository in a directory called 'reference'. The method
   * below uses the Git Trees API (https://docs.github.com/en/rest/git/trees) to
   * fetch the files in that directory and then returns a list of each source file
   * formatted as an absolute URL.
   *
   * @returns Array of Open API Spec file URLs as strings
   */
  private async getSourceFiles(): Promise<string[]> {
    const sourceRepo = await this.client.get<GitHubRepoTree>(this.REPO_URL);
    // console.log(sourceRepo, 'here the source repo');

    // console.log(sourceRepo.data.tree, 'here the tree');
    const targetDir = sourceRepo.data.tree.find(file => file.path === 'reference');
    // // console.log(targetDir, 'here teh targetDir');
    // const targetDir = sourceRepo.data.tree.
    // console.log(targetDir, 'here the target DIR');

    if (!targetDir) {
      throw new Error('Unable to find a directory containing Open API spec files in provided repo');
    }

    const specFileNames = await this.getSpecFileNames(targetDir);

    // const remoteSourceDir = await this.client.get<GitHubRepoTree>(targetDir.url);
    // const specFileNames = remoteSourceDir.data.tree.map(file => `${this.CONTENT_URL}${file.path}`);

    return specFileNames;
  }

  private async getSpecFileNames(targetDir?: NestedTree): Promise<string[]> {
    if (!targetDir) {
      return [];
    }

    const remoteSourceDir = await this.client.get<GitHubRepoTree>(targetDir.url);

    const specFileNames = await remoteSourceDir.data.tree.reduce(
      async (accPromise: Promise<string[]>, node: NestedTree): Promise<string[]> => {
        const acc = await accPromise;

        if (node.type === 'blob') {
          return targetDir.path === 'reference'
            ? [...acc, `${this.CONTENT_URL}${node.path}`]
            : [...acc, `${this.CONTENT_URL}${targetDir.path}/${node.path}`];
        } else {
          const nestedSpecFileNames: string[] = await this.getSpecFileNames(node);

          return [...acc, ...nestedSpecFileNames];
        }
      },
      Promise.resolve([]),
    );

    return specFileNames;
  }
}

export const tg = new TypesGenerator();
void tg.generate();
