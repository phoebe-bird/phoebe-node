// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../../../core';
import { APIResource } from '../../../../../resource';
import * as RecentAPI from './recent';
import * as NotableAPI from './notable';
import * as SpeciesAPI from './species';

export class Recent extends APIResource {
  species: SpeciesAPI.Species = new SpeciesAPI.Species(this._client);
  notable: NotableAPI.Notable = new NotableAPI.Notable(this._client);

  /**
   * Get the list of recent observations (up to 30 days ago) of birds seen at
   * locations within a radius of up to 50 kilometers, from a given set of
   * coordinates. Results include only the most recent observation for each species
   * in the region specified.
   */
  list(query: RecentListParams, options?: Core.RequestOptions): Core.APIPromise<RecentListResponse> {
    return this._client.get('/data/obs/geo/recent', { query, ...options });
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
  lat: number;

  lng: number;

  /**
   * The number of days back to fetch observations.
   */
  back?: number;

  /**
   * Only fetch observations from these taxonomic categories
   */
  cat?: 'species' | 'slash' | 'issf' | 'spuh' | 'hybrid' | 'domestic' | 'form' | 'intergrade';

  /**
   * The search radius from the given position, in kilometers.
   */
  dist?: number;

  /**
   * Only fetch observations from hotspots
   */
  hotspot?: boolean;

  /**
   * Include observations which have not yet been reviewed.
   */
  includeProvisional?: boolean;

  /**
   * Only fetch this number of observations
   */
  maxResults?: number;

  /**
   * Sort observations by taxonomy or by date, most recent first.
   */
  sort?: 'date' | 'species';

  /**
   * Use this language for species common names
   */
  sppLocale?: string;
}

export namespace Recent {
  export import RecentListResponse = RecentAPI.RecentListResponse;
  export import RecentListParams = RecentAPI.RecentListParams;
  export import Species = SpeciesAPI.Species;
  export import SpecieListResponse = SpeciesAPI.SpecieListResponse;
  export import SpecieListParams = SpeciesAPI.SpecieListParams;
  export import Notable = NotableAPI.Notable;
  export import NotableListParams = NotableAPI.NotableListParams;
}
