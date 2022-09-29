import FormData from 'form-data';

import { buildMultipartBody } from './buildMultipartBody';

describe('buildMultipartBody', () => {
  it('should return a Form data object', () => {
    const assetPath = './__fixtures__/test.png';
    const key = 'key';
    const multiPartForm = buildMultipartBody(key, assetPath);

    expect(multiPartForm).toBeInstanceOf(FormData);
  });
});
