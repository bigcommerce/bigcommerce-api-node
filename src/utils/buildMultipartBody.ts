import FormData from 'form-data';
import { createReadStream } from 'fs';

/**
 * Builds a FormData object from an asset path to be sent in a multipart/form-data request
 *
 * @param key The name of the key/value pair appended to the FormData object
 * @param assetPath The path on your local machine of the data object to be appended to the multipart form
 * @returns Multipart data object with the asset path
 */
export const buildMultipartBody = (key: string, assetPath: string): FormData => {
  const multiPartForm = new FormData();
  multiPartForm.append(key, createReadStream(assetPath));

  return multiPartForm;
};
