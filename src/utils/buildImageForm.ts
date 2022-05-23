import FormData from 'form-data';
import { createReadStream } from 'fs';

/**
 * Builds a FormData object from an image file path
 *
 * @param imagePath An absolute path to an image file
 * @returns FormData object with the image file
 */
export const buildImageForm = (imagePath: string): FormData => {
  const imageForm = new FormData();
  imageForm.append('image', createReadStream(imagePath));

  return imageForm;
};
