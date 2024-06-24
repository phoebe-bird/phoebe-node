// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../../core';
import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as RecentAPI from './recent';
import * as NotableAPI from './notable';
import * as SpeciesAPI from './species';

export class Recent extends APIResource {
  notable: NotableAPI.Notable = new NotableAPI.Notable(this._client);
  species: SpeciesAPI.Species = new SpeciesAPI.Species(this._client);

  /**
   * Get the list of recent observations (up to 30 days ago) of birds seen in a
   * country, state, county, or location. Results include only the most recent
   * observation for each species in the region specified.
   */
  list(
    regionCode: string,
    query?: RecentListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RecentListResponse>;
  list(regionCode: string, options?: Core.RequestOptions): Core.APIPromise<RecentListResponse>;
  list(
    regionCode: string,
    query: RecentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RecentListResponse> {
    if (isRequestOptions(query)) {
      return this.list(regionCode, {}, query);
    }
    return this._client.get(`/data/obs/${regionCode}/recent`, { query, ...options });
  }
}

export type RecentListResponse = Array<RecentListResponse.RecentListResponseItem>;

export namespace RecentListResponse {
  export interface RecentListResponseItem {
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

export interface RecentListParams {
  /**
   * The number of days back to fetch observations.
   */
  back?: number;

  /**
   * Only fetch observations from these taxonomic categories
   */
  cat?: 'species' | 'slash' | 'issf' | 'spuh' | 'hybrid' | 'domestic' | 'form' | 'intergrade';

  /**
   * Only fetch observations from hotspots
   */
  hotspot?: boolean;

  /**
   * Include observations which have not yet been reviewed
   */
  includeProvisional?: boolean;

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

export namespace Recent {
  export import RecentListResponse = RecentAPI.RecentListResponse;
  export import RecentListParams = RecentAPI.RecentListParams;
  export import Notable = NotableAPI.Notable;
  export import NotableListResponse = NotableAPI.NotableListResponse;
  export import NotableListParams = NotableAPI.NotableListParams;
  export import Species = SpeciesAPI.Species;
  export import SpecieRetrieveResponse = SpeciesAPI.SpecieRetrieveResponse;
  export import SpecieRetrieveParams = SpeciesAPI.SpecieRetrieveParams;
}
