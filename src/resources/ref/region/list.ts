// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as ListAPI from './list';

export class List extends APIResource {
  /**
   * Get the list of sub-regions for a given country or region. #### Notes Not all
   * combinations of region type and region code are valid. You can fetch all the
   * subnational1 or subnational2 regions for a country however you can only specify
   * a region type of 'country' when using 'world' as a region code.
   */
  list(
    regionType: string,
    parentRegionCode: string,
    query?: ListListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListListResponse>;
  list(
    regionType: string,
    parentRegionCode: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListListResponse>;
  list(
    regionType: string,
    parentRegionCode: string,
    query: ListListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListListResponse> {
    if (isRequestOptions(query)) {
      return this.list(regionType, parentRegionCode, {}, query);
    }
    return this._client.get(`/ref/region/list/${regionType}/${parentRegionCode}`, { query, ...options });
  }
}

export type ListListResponse = Array<ListListResponse.ListListResponseItem>;

export namespace ListListResponse {
  export interface ListListResponseItem {
    code?: string;

    name?: string;
  }
}

export interface ListListParams {
  /**
   * Fetch the records in CSV or JSON format.
   */
  fmt?: 'csv' | 'json';
}

export namespace List {
  export import ListListResponse = ListAPI.ListListResponse;
  export import ListListParams = ListAPI.ListListParams;
}
