// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as HotspotAPI from './hotspot';
import * as GeoAPI from './geo';
import * as InfoAPI from './info';

export class Hotspot extends APIResource {
  geo: GeoAPI.Geo = new GeoAPI.Geo(this._client);
  info: InfoAPI.Info = new InfoAPI.Info(this._client);

  /**
   * Hotspots in a region
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

export namespace Hotspot {
  export import HotspotListResponse = HotspotAPI.HotspotListResponse;
  export import HotspotListParams = HotspotAPI.HotspotListParams;
  export import Geo = GeoAPI.Geo;
  export import GeoRetrieveResponse = GeoAPI.GeoRetrieveResponse;
  export import GeoRetrieveParams = GeoAPI.GeoRetrieveParams;
  export import Info = InfoAPI.Info;
  export import InfoRetrieveResponse = InfoAPI.InfoRetrieveResponse;
}
