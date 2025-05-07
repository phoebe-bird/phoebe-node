// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as GeoAPI from './geo';
import { Geo, GeoRetrieveParams, GeoRetrieveResponse } from './geo';
import * as InfoAPI from './info';
import { Info, InfoRetrieveResponse } from './info';

export class Hotspot extends APIResource {
  geo: GeoAPI.Geo = new GeoAPI.Geo(this._client);
  info: InfoAPI.Info = new InfoAPI.Info(this._client);

  /**
   * Hotspots in a region
   *
   * @example
   * ```ts
   * const hotspots = await client.ref.hotspot.list(
   *   'regionCode',
   * );
   * ```
   */
  list(
    regionCode: string,
    query?: HotspotListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HotspotListResponse>;
  list(regionCode: string, options?: Core.RequestOptions): Core.APIPromise<HotspotListResponse>;
  list(
    regionCode: string,
    query: HotspotListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HotspotListResponse> {
    if (isRequestOptions(query)) {
      return this.list(regionCode, {}, query);
    }
    return this._client.get(`/ref/hotspot/${regionCode}`, { query, ...options });
  }
}

export type HotspotListResponse = Array<HotspotListResponse.HotspotListResponseItem>;

export namespace HotspotListResponse {
  export interface HotspotListResponseItem {
    countryCode?: string;

    lat?: number;

    latestObsDt?: string;

    lng?: number;

    locId?: string;

    locName?: string;

    numSpeciesAllTime?: number;

    subnational1Code?: string;

    subnational2Code?: string;
  }
}

export interface HotspotListParams {
  /**
   * The number of days back to fetch hotspots.
   */
  back?: number;

  /**
   * Fetch the records in CSV or JSON format.
   */
  fmt?: 'csv' | 'json';
}

Hotspot.Geo = Geo;
Hotspot.Info = Info;

export declare namespace Hotspot {
  export { type HotspotListResponse as HotspotListResponse, type HotspotListParams as HotspotListParams };

  export {
    Geo as Geo,
    type GeoRetrieveResponse as GeoRetrieveResponse,
    type GeoRetrieveParams as GeoRetrieveParams,
  };

  export { Info as Info, type InfoRetrieveResponse as InfoRetrieveResponse };
}
