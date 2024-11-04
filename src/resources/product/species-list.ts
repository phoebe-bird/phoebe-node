// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class SpeciesList extends APIResource {
  /**
   * Get a list of species codes ever seen in a region, in taxonomic order (species
   * taxa only)
   *
   * #### Notes The results are usually updated every 10 seconds for locations, every day for larger regions.
   */
  list(regionCode: string, options?: Core.RequestOptions): Core.APIPromise<SpeciesListListResponse> {
    return this._client.get(`/product/spplist/${regionCode}`, options);
  }
}

export type SpeciesListListResponse = Array<string>;

export declare namespace SpeciesList {
  export { type SpeciesListListResponse as SpeciesListListResponse };
}
