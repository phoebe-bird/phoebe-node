// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ObservationsAPI from '../observations';
import * as HistoricAPI from './historic';
import { Historic, HistoricListParams, HistoricListResponse } from './historic';
import * as NotableAPI from './notable';
import { Notable, NotableListParams, NotableListResponse } from './notable';
import * as SpeciesAPI from './species';
import { SpecieRetrieveParams, SpecieRetrieveResponse, Species } from './species';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Recent extends APIResource {
  notable: NotableAPI.Notable = new NotableAPI.Notable(this._client);
  species: SpeciesAPI.Species = new SpeciesAPI.Species(this._client);
  historic: HistoricAPI.Historic = new HistoricAPI.Historic(this._client);

  /**
   * Get the list of recent observations (up to 30 days ago) of birds seen in a
   * country, state, county, or location. Results include only the most recent
   * observation for each species in the region specified.
   */
  list(
    regionCode: string,
    query: RecentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RecentListResponse> {
    return this._client.get(path`/data/obs/${regionCode}/recent`, { query, ...options });
  }
}

export type RecentListResponse = Array<ObservationsAPI.Observation>;

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

Recent.Notable = Notable;
Recent.Species = Species;
Recent.Historic = Historic;

export declare namespace Recent {
  export { type RecentListResponse as RecentListResponse, type RecentListParams as RecentListParams };

  export {
    Notable as Notable,
    type NotableListResponse as NotableListResponse,
    type NotableListParams as NotableListParams,
  };

  export {
    Species as Species,
    type SpecieRetrieveResponse as SpecieRetrieveResponse,
    type SpecieRetrieveParams as SpecieRetrieveParams,
  };

  export {
    Historic as Historic,
    type HistoricListResponse as HistoricListResponse,
    type HistoricListParams as HistoricListParams,
  };
}
