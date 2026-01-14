// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ObservationsAPI from '../observations';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Historic extends APIResource {
  /**
   * Get a list of all taxa seen in a country, region or location on a specific date,
   * with the specific observations determined by the "rank" parameter (defaults to
   * latest observation on the date).
   *
   * #### Notes Responses may be cached for 30 minutes
   */
  list(d: number, params: HistoricListParams, options?: RequestOptions): APIPromise<HistoricListResponse> {
    const { regionCode, y, m, ...query } = params;
    return this._client.get(path`/data/obs/${regionCode}/historic/${y}/${m}/${d}`, { query, ...options });
  }
}

export type HistoricListResponse = Array<ObservationsAPI.Observation>;

export interface HistoricListParams {
  /**
   * Path param: The country, subnational1, subnational2 or location code.
   */
  regionCode: string;

  /**
   * Path param
   */
  y: number;

  /**
   * Path param
   */
  m: number;

  /**
   * Query param: Only fetch observations from these taxonomic categories
   */
  cat?: 'species' | 'slash' | 'issf' | 'spuh' | 'hybrid' | 'domestic' | 'form' | 'intergrade';

  /**
   * Query param: Include a subset (simple), or all (full), of the fields available.
   */
  detail?: 'simple' | 'full';

  /**
   * Query param: Only fetch observations from hotspots
   */
  hotspot?: boolean;

  /**
   * Query param: Include observations which have not yet been reviewed.
   */
  includeProvisional?: boolean;

  /**
   * Query param: Only fetch this number of observations
   */
  maxResults?: number;

  /**
   * Query param: Fetch observations from up to 50 locations
   */
  r?: Array<string>;

  /**
   * Query param: Include latest observation of the day, or the first added
   */
  rank?: 'mrec' | 'create';

  /**
   * Query param: Use this language for species common names
   */
  sppLocale?: string;
}

export declare namespace Historic {
  export { type HistoricListResponse as HistoricListResponse, type HistoricListParams as HistoricListParams };
}
