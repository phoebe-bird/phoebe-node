// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Top100 extends APIResource {
  /**
   * Get the top 100 contributors on a given date for a country or region.
   *
   * #### Notes
   *
   * The results are updated every 15 minutes.
   *
   * When ordering by the number of completed checklists, the number of species seen
   * will always be zero. Similarly when ordering by the number of species seen the
   * number of completed checklists will always be zero. <b>Selected Response Field
   * Notes</b>
   *
   * profileHandle - if a user has enabled their profile, this is the handle to reach
   * it via ebird.org/ebird/profile/{profileHandle}
   *
   * numSpecies - always zero when checklistSort parameter is true. Invalid
   * observations ARE included in this total numCompleteChecklists - always zero when
   * checklistSort parameter is false
   */
  retrieve(
    d: number,
    params: Top100RetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Top100RetrieveResponse> {
    const { regionCode, y, m, ...query } = params;
    return this._client.get(path`/product/top100/${regionCode}/${y}/${m}/${d}`, { query, ...options });
  }
}

export type Top100RetrieveResponse = Array<Top100RetrieveResponse.Top100RetrieveResponseItem>;

export namespace Top100RetrieveResponse {
  export interface Top100RetrieveResponseItem {
    numCompleteChecklists?: number;

    numSpecies?: number;

    profileHandle?: string;

    rowNum?: number;

    userDisplayName?: string;

    userId?: string;
  }
}

export interface Top100RetrieveParams {
  /**
   * Path param: The country, subnational1, or location code.
   */
  regionCode: string;

  /**
   * Path param: The year, from 1800 to the present.
   */
  y: number;

  /**
   * Path param: The month, from 1-12.
   */
  m: number;

  /**
   * Query param: Only fetch this number of contributors.
   */
  maxResults?: number;

  /**
   * Query param: Order by number of complete checklists (cl) or by number of species
   * seen (spp).
   */
  rankedBy?: 'spp' | 'cl';
}

export declare namespace Top100 {
  export {
    type Top100RetrieveResponse as Top100RetrieveResponse,
    type Top100RetrieveParams as Top100RetrieveParams,
  };
}
