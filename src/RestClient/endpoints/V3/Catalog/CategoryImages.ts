import { AxiosInstance } from 'axios';

import { AxiosPromise } from '../../../../types';
import { buildImageForm } from '../../../../utils/buildImageForm';

import { getCategoryPath } from './Category';
import type { CategoryImage } from './types';

class CategoryImages {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Creates a category image
   *
   * @param id A valid Category ID
   * @param imagePath An absolute path to an image file
   * @returns Promise resllving to a category image object
   */
  create(id: number, imagePath: string): CategoryImage['CreateResponse'] {
    const imageForm = buildImageForm(imagePath);

    return this.client.post(`${getCategoryPath(id)}/image`, imageForm, {
      headers: { ...imageForm.getHeaders() },
    });
  }

  /**
   * Deletes a category image
   *
   * @param id A valid Category ID
   * @returns Promise resolving to a 204 No Content response
   */
  delete(id: number): AxiosPromise<string> {
    return this.client.delete(`${getCategoryPath(id)}/image`);
  }
}

export default CategoryImages;
