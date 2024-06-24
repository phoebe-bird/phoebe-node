// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../core';
import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as RegionAPI from './region';

export class Region extends APIResource {
  /**
   * Get information on the most recently submitted checklists for a region.
   */
  retrieve(
    regionCode: string,
    query?: RegionRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  retrieve(regionCode: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  retrieve(
    regionCode: string,
    query: RegionRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(query)) {
      return this.retrieve(regionCode, {}, query);
    }
    return this._client.get(`/product/lists/${regionCode}`, {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface RegionRetrieveParams {
  /**
   * Only fetch this number of checklists.
   */
  maxResults?: number;
}

export namespace Region {
  export import RegionRetrieveParams = RegionAPI.RegionRetrieveParams;
}
