// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../core';
import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as HistoricAPI from './historic';

export class Historic extends APIResource {
  /**
   * Get a list of all taxa seen in a country, region or location on a specific date,
   * with the specific observations determined by the "rank" parameter (defaults to
   * latest observation on the date).
   *
   * #### Notes Responses may be cached for 30 minutes
   */
  list(
    regionCode: string,
    y: number,
    m: number,
    d: number,
    query?: HistoricListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  list(
    regionCode: string,
    y: number,
    m: number,
    d: number,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  list(
    regionCode: string,
    y: number,
    m: number,
    d: number,
    query: HistoricListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(query)) {
      return this.list(regionCode, y, m, d, {}, query);
    }
    return this._client.get(`/data/obs/${regionCode}/historic/${y}/${m}/${d}`, {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface HistoricListParams {
  /**
   * Only fetch observations from these taxonomic categories
   */
  cat?: 'species' | 'slash' | 'issf' | 'spuh' | 'hybrid' | 'domestic' | 'form' | 'intergrade';

  /**
   * Include a subset (simple), or all (full), of the fields available.
   */
  detail?: 'simple' | 'full';

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
   * Fetch observations from up to 50 locations
   */
  r?: Array<string>;

  /**
   * Include latest observation of the day, or the first added
   */
  rank?: 'mrec' | 'create';

  /**
   * Use this language for species common names
   */
  sppLocale?: string;
}

export namespace Historic {
  export import HistoricListParams = HistoricAPI.HistoricListParams;
}
