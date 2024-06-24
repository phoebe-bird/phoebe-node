// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../../../core';
import { APIResource } from '../../../../../resource';
import * as SpeciesAPI from './species';

export class Species extends APIResource {
  /**
   * Find the nearest locations where a species has been seen recently. #### Notes
   * The species code is typically a 6-letter code, e.g. barswa for Barn Swallow. You
   * can get complete set of species code from the GET eBird Taxonomy end-point.
   */
  list(speciesCode: string, query: SpecieListParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/data/nearest/geo/recent/${speciesCode}`, {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface SpecieListParams {
  lat: number;

  lng: number;

  /**
   * The number of days back to fetch observations.
   */
  back?: number;

  /**
   * Only fetch observations within this distance of the provided lat/lng
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
   * Only fetch up to this number of observations
   */
  maxResults?: number;

  /**
   * Use this language for species common names
   */
  sppLocale?: string;
}

export namespace Species {
  export import SpecieListParams = SpeciesAPI.SpecieListParams;
}
