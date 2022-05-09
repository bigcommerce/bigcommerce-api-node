import FormData from 'form-data';

import { buildImageForm } from './buildImageForm';

describe('buildImageForm', () => {
  it('should return a FormData object', () => {
    const imagePath = './__fixtures__/test.png';
    const imageForm = buildImageForm(imagePath);

    expect(imageForm).toBeInstanceOf(FormData);
  });
});
