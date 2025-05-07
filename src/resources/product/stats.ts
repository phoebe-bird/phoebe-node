// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Stats extends APIResource {
  /**
   * Get a summary of the number of checklist submitted, species seen and
   * contributors on a given date for a country or region.
   *
   * #### Notes The results are updated every 15 minutes.
   */
  retrieve(
    d: number,
    params: StatRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<StatRetrieveResponse> {
    const { regionCode, y, m } = params;
    return this._client.get(path`/product/stats/${regionCode}/${y}/${m}/${d}`, options);
  }
}

export interface StatRetrieveResponse {
  numChecklists?: number;

  numContributors?: number;

  numSpecies?: number;
}

export interface StatRetrieveParams {
  /**
   * The country, subnational1, subnational2 or location code.
   */
  regionCode: string;

  /**
   * The year, from 1800 to the present.
   */
  y: number;

  /**
   * The month, from 1-12.
   */
  m: number;
}

export declare namespace Stats {
  export { type StatRetrieveResponse as StatRetrieveResponse, type StatRetrieveParams as StatRetrieveParams };
}
