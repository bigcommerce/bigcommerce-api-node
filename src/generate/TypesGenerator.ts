import axios, { AxiosInstance } from 'axios';
import { writeFile } from 'fs/promises';
import openapiTS from 'openapi-typescript';
import path from 'path';

import { assertIsError } from '../utils/assertIsError';

import { GitHubRepoTree } from './types';

class TypesGenerator {
  private client: AxiosInstance;

  private REPO_URL = 'https://api.github.com/repos/bigcommerce/api-specs/git/trees/master';
  private CONTENT_URL = 'https://raw.githubusercontent.com/bigcommerce/api-specs/master/reference/';

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
        process.stderr.write(`${sourceFile}: ${err.name}: ${err.message}\n`);
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
    const targetDir = sourceRepo.data.tree.find(file => file.path === 'reference');

    if (!targetDir) {
      throw new Error('Unable to find a directory containing Open API spec files in provided repo');
    }

    const remoteSourceDir = await this.client.get<GitHubRepoTree>(targetDir.url);
    const specFileNames = remoteSourceDir.data.tree.map(file => `${this.CONTENT_URL}${file.path}`);

    return specFileNames;
  }
}

export const tg = new TypesGenerator();
void tg.generate();
