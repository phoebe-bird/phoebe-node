// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * The product end-points make it easy to get the information shown in various pages on the eBird web site: 1. The Top 100 contributors on a given date. 2. The checklists submitted on a given date. 3. The most recent checklists submitted. 4. A summary of the checklists submitted on a given date. 5. The details and all the observations of a checklist.
 */
export class SpeciesList extends APIResource {
  /**
   * Get a list of species codes ever seen in a region, in taxonomic order (species
   * taxa only)
   *
   * #### Notes The results are usually updated every 10 seconds for locations, every day for larger regions.
   */
  list(regionCode: string, options?: RequestOptions): APIPromise<SpeciesListListResponse> {
    return this._client.get(path`/product/spplist/${regionCode}`, options);
  }
}

export type SpeciesListListResponse = Array<string>;

export declare namespace SpeciesList {
  export { type SpeciesListListResponse as SpeciesListListResponse };
}
