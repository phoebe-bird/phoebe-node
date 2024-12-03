// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as Core from '../../../../../core';
import * as ObservationsAPI from '../../observations';

export class Species extends APIResource {
  /**
   * Get all observations of a species, seen up to 30 days ago, at any location
   * within a radius of up to 50 kilometers, from a given set of coordinates. Results
   * include only the most recent observation from each location in the region
   * specified.
   *
   * #### URL parameters
   *
   * | Name        | Description             |
   * | ----------- | ----------------------- |
   * | speciesCode | The eBird species code. |
   *
   * #### Notes
   *
   * The species code is typically a 6-letter code, e.g. horlar for Horned Lark. You
   * can get complete set of species code from the GET eBird Taxonomy end-point.
   */
  list(
    speciesCode: string,
    query: SpecieListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpecieListResponse> {
    return this._client.get(`/data/obs/geo/recent/${speciesCode}`, { query, ...options });
  }
}

export type SpecieListResponse = Array<ObservationsAPI.Observation>;

export interface SpecieListParams {
  lat: number;

  lng: number;

  /**
   * The number of days back to fetch observations.
   */
  back?: number;

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
   * Use this language for species common names
   */
  sppLocale?: string;
}

export declare namespace Species {
  export { type SpecieListResponse as SpecieListResponse, type SpecieListParams as SpecieListParams };
}
