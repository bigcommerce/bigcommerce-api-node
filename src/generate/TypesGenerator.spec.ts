import { writeFile } from 'fs/promises';
import mockAxios from 'jest-mock-axios';
import openapiTS from 'openapi-typescript';

import { tg } from './TypesGenerator';

jest.mock('fs/promises');
jest.mock('openapi-typescript');

describe('TypesGenerator', () => {
  afterEach(() => {
    jest.clearAllMocks();
    mockAxios.reset();
  });

  describe('getSourceFiles', () => {
    it('should throw error if the source repo cannot be found', () => {
      const mockError = new Error('Request failed with status code 404');

      mockAxios.get.mockRejectedValueOnce(mockError);

      void expect(tg.generate()).rejects.toThrow(mockError.message);
    });

    it('should throw error if the spec files directory cannot be found', () => {
      const mockResponse = {
        data: {
          tree: [{ path: 'missing' }],
        },
      };

      mockAxios.get.mockResolvedValueOnce(mockResponse);

      void expect(tg.generate()).rejects.toThrow(
        'Unable to find a directory containing Open API spec files in provided repo',
      );
    });

    it('should throw error if the spec files directory URL returns a 404', () => {
      const mockResponse = {
        data: {
          tree: [
            {
              path: 'reference',
              url: 'https://api.github.com/contents/missing',
            },
          ],
        },
      };

      const mockError = new Error('Request failed with status code 404');

      mockAxios.get.mockResolvedValueOnce(mockResponse).mockRejectedValueOnce(mockError);

      void expect(tg.generate()).rejects.toThrow(mockError.message);
    });
  });

  describe('generate', () => {
    it('should log error if openapiTS is unable to generate types for a spec file', async () => {
      const mockStderr = jest.spyOn(process.stderr, 'write');

      const mockFirstResponse = {
        data: {
          tree: [
            {
              path: 'reference',
              url: 'https://api.github.com/repos/bigcommerce/api-specs/trees/12345',
            },
          ],
        },
      };

      const mockSecondResponse = {
        data: {
          tree: [
            {
              path: 'foo-spec.yaml',
            },
            {
              path: 'bar-spec.yml',
            },
          ],
        },
      };

      mockAxios.get.mockResolvedValueOnce(mockFirstResponse).mockResolvedValueOnce(mockSecondResponse);

      (openapiTS as jest.Mock).mockRejectedValueOnce(new Error('Unable to generate types'));

      void (await tg.generate());

      expect(mockStderr).toBeCalled();
    });

    it('should generate a Typescript file for each spec file', async () => {
      const mockFirstResponse = {
        data: {
          tree: [
            {
              path: 'reference',
              url: 'https://api.github.com/repos/bigcommerce/api-specs/trees/12345',
            },
          ],
        },
      };

      const mockSecondResponse = {
        data: {
          tree: [
            {
              path: 'foo-spec.yaml',
            },
            {
              path: 'bar-spec.yml',
            },
          ],
        },
      };

      mockAxios.get.mockResolvedValueOnce(mockFirstResponse).mockResolvedValueOnce(mockSecondResponse);

      void (await tg.generate());

      void expect(openapiTS).toBeCalledTimes(2);
      void expect(writeFile).toBeCalledTimes(2);
    });
  });
});
