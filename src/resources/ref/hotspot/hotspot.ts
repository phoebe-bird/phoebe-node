// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as GeoAPI from './geo';
import { Geo, GeoRetrieveParams, GeoRetrieveResponse } from './geo';
import * as InfoAPI from './info';
import { Info, InfoRetrieveResponse } from './info';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Hotspot extends APIResource {
  geo: GeoAPI.Geo = new GeoAPI.Geo(this._client);
  info: InfoAPI.Info = new InfoAPI.Info(this._client);

  /**
   * Hotspots in a region
   */
  list(
    regionCode: string,
    query: HotspotListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HotspotListResponse> {
    return this._client.get(path`/ref/hotspot/${regionCode}`, { query, ...options });
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
