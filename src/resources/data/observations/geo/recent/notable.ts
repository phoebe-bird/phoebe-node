// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as ObservationsAPI from '../../observations';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';

export class Notable extends APIResource {
  /**
   * Get the list of notable observations (up to 30 days ago) of birds seen at
   * locations within a radius of up to 50 kilometers, from a given set of
   * coordinates. Notable observations can be for locally or nationally rare species
   * or are otherwise unusual, for example over-wintering birds in a species which is
   * normally only a summer visitor.
   */
  list(query: NotableListParams, options?: RequestOptions): APIPromise<NotableListResponse> {
    return this._client.get('/data/obs/geo/recent/notable', { query, ...options });
  }
}

export type NotableListResponse = Array<ObservationsAPI.Observation>;

export interface NotableListParams {
  lat: number;

  lng: number;

  /**
   * The number of days back to fetch observations.
   */
  back?: number;

  /**
   * Include a subset (simple), or all (full), of the fields available.
   */
  detail?: 'simple' | 'full';

  /**
   * The search radius from the given position, in kilometers.
   */
  dist?: number;

  /**
   * Only fetch observations from hotspots
   */
  hotspot?: boolean;

  /**
   * Only fetch this number of observations
   */
  maxResults?: number;

  /**
   * Use this language for species common names
   */
  sppLocale?: string;
}

export declare namespace Notable {
  export { type NotableListResponse as NotableListResponse, type NotableListParams as NotableListParams };
}
