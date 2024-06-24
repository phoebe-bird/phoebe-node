// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as ListAPI from './list';

export class List extends APIResource {
  /**
   * Get the list of sub-regions for a given country or region. #### Notes Not all
   * combinations of region type and region code are valid. You can fetch all the
   * subnational1 or subnational2 regions for a country however you can only specify
   * a region type of 'country' when using 'world' as a region code.
   */
  retrieve(
    regionType: string,
    parentRegionCode: string,
    query?: ListRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListRetrieveResponse>;
  retrieve(
    regionType: string,
    parentRegionCode: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListRetrieveResponse>;
  retrieve(
    regionType: string,
    parentRegionCode: string,
    query: ListRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(regionType, parentRegionCode, {}, query);
    }
    return this._client.get(`/ref/region/list/${regionType}/${parentRegionCode}`, { query, ...options });
  }
}

export type ListRetrieveResponse = Array<ListRetrieveResponse.ListRetrieveResponseItem>;

export namespace ListRetrieveResponse {
  export interface ListRetrieveResponseItem {
    code?: string;

    name?: string;
  }
}

export interface ListRetrieveParams {
  /**
   * Fetch the records in CSV or JSON format.
   */
  fmt?: 'csv' | 'json';
}

export namespace List {
  export import ListRetrieveResponse = ListAPI.ListRetrieveResponse;
  export import ListRetrieveParams = ListAPI.ListRetrieveParams;
}