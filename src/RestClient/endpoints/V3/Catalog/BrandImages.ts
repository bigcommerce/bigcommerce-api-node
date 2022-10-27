import { AxiosInstance } from 'axios';

import { AxiosPromise } from '../../../../types';
import { buildMultipartBody } from '../../../../utils/buildMultipartBody';

import { getBrandsPath } from './Brands';
import type { BrandImage } from './types';

class BrandImages {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Creates a brand image
   *
   * @param id A valid Brand ID
   * @param imagePath An absolute path to an image file
   * @returns Promise resolving to a brand image object
   */
  create(id: number, imagePath: string): BrandImage['CreateResponse'] {
    const imageForm = buildMultipartBody('image', imagePath);

    return this.client.post(`${getBrandsPath(id)}/image`, imageForm, {
      headers: { ...imageForm.getHeaders() },
    });
  }

  /**
   * Deletes a brand image
   *
   * @param id A valid Brand ID
   * @returns Promise resolving to a 204 No Content response
   */
  delete(id: number): AxiosPromise<string> {
    return this.client.delete(`${getBrandsPath(id)}/image`);
  }
}

export default BrandImages;
