// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class List extends APIResource {
  /**
   * Get the list of sub-regions for a given country or region. #### Notes Not all
   * combinations of region type and region code are valid. You can fetch all the
   * subnational1 or subnational2 regions for a country however you can only specify
   * a region type of 'country' when using 'world' as a region code.
   *
   * @example
   * ```ts
   * const lists = await client.ref.region.list.list(
   *   'parentRegionCode',
   *   { regionType: 'regionType' },
   * );
   * ```
   */
  list(
    parentRegionCode: string,
    params: ListListParams,
    options?: RequestOptions,
  ): APIPromise<ListListResponse> {
    const { regionType, ...query } = params;
    return this._client.get(path`/ref/region/list/${regionType}/${parentRegionCode}`, { query, ...options });
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
   * Path param: The region type: 'country', 'subnational1' or 'subnational2'.
   */
  regionType: string;

  /**
   * Query param: Fetch the records in CSV or JSON format.
   */
  fmt?: 'csv' | 'json';
}

export declare namespace List {
  export { type ListListResponse as ListListResponse, type ListListParams as ListListParams };
}
