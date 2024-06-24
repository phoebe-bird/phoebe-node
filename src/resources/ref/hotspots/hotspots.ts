// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../core';
import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as HotspotsAPI from './hotspots';
import * as GeoAPI from './geo';
import * as InfoAPI from './info';

export class Hotspots extends APIResource {
  geo: GeoAPI.Geo = new GeoAPI.Geo(this._client);
  info: InfoAPI.Info = new InfoAPI.Info(this._client);

  /**
   * Hotspots in a region
   */
  list(regionCode: string, query?: HotspotListParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  list(regionCode: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  list(
    regionCode: string,
    query: HotspotListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(query)) {
      return this.list(regionCode, {}, query);
    }
    return this._client.get(`/ref/hotspot/${regionCode}`, {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
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

export namespace Hotspots {
  export import HotspotListParams = HotspotsAPI.HotspotListParams;
  export import Geo = GeoAPI.Geo;
  export import GeoRetrieveParams = GeoAPI.GeoRetrieveParams;
  export import Info = InfoAPI.Info;
  export import InfoRetrieveResponse = InfoAPI.InfoRetrieveResponse;
}