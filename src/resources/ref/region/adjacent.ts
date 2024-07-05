// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as AdjacentAPI from './adjacent';

export class Adjacent extends APIResource {
  /**
   * Get the list of countries or regions that share a border with this one. ####
   * Notes Only subnational2 codes in the United States, New Zealand, or Mexico are
   * currently supported
   */
  list(regionCode: string, options?: Core.RequestOptions): Core.APIPromise<AdjacentListResponse> {
    return this._client.get(`/ref/adjacent/${regionCode}`, options);
  }
}

export interface AdjacentListResponse {
  adjacentRegions?: Array<AdjacentListResponse.AdjacentRegion>;
}

export namespace AdjacentListResponse {
  export interface AdjacentRegion {
    code?: string;

    name?: string;
  }
}

export namespace Adjacent {
  export import AdjacentListResponse = AdjacentAPI.AdjacentListResponse;
}
