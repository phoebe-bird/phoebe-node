// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../../core';
import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as NotableAPI from './notable';

export class Notable extends APIResource {
  /**
   * Get the list of recent, notable observations (up to 30 days ago) of birds seen
   * in a country, region or location. Notable observations can be for locally or
   * nationally rare species or are otherwise unusual, e.g. over-wintering birds in a
   * species which is normally only a summer visitor.
   */
  list(
    regionCode: string,
    query?: NotableListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NotableListResponse>;
  list(regionCode: string, options?: Core.RequestOptions): Core.APIPromise<NotableListResponse>;
  list(
    regionCode: string,
    query: NotableListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<NotableListResponse> {
    if (isRequestOptions(query)) {
      return this.list(regionCode, {}, query);
    }
    return this._client.get(`/data/obs/${regionCode}/recent/notable`, { query, ...options });
  }
}

export type NotableListResponse = Array<NotableListResponse.NotableListResponseItem>;

export namespace NotableListResponse {
  export interface NotableListResponseItem {
    id?: number;

    comName?: string;

    firstname?: string;

    howMany?: number;

    lastname?: string;

    lat?: number;

    lng?: number;

    locationPrivate?: boolean;

    locId?: string;

    locName?: string;

    obsDt?: string;

    obsReviewed?: boolean;

    obsValid?: boolean;

    sciName?: string;

    speciesCode?: string;

    subId?: string;
  }
}

export interface NotableListParams {
  /**
   * The number of days back to fetch observations.
   */
  back?: number;

  /**
   * Include a subset (simple), or all (full), of the fields available.
   */
  detail?: 'simple' | 'full';

  /**
   * Only fetch observations from hotspots
   */
  hotspot?: boolean;

  /**
   * Only fetch this number of observations
   */
  maxResults?: number;

  /**
   * Fetch observations from up to 10 locations
   */
  r?: Array<string>;

  /**
   * Use this language for species common names
   */
  sppLocale?: string;
}

export namespace Notable {
  export import NotableListResponse = NotableAPI.NotableListResponse;
  export import NotableListParams = NotableAPI.NotableListParams;
}
