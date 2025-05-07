// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ObservationsAPI from '../observations';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Species extends APIResource {
  /**
   * Get the recent observations, up to 30 days ago, of a particular species in a
   * country, region or location. Results include only the most recent observation
   * from each location in the region specified.
   *
   * #### Notes
   *
   * The species code is typically a 6-letter code, e.g. cangoo for Canada Goose. You
   * can get complete set of species code from the GET eBird Taxonomy end-point.
   *
   * When using the _r_ query parameter set the _regionCode_ URL parameter to an
   * empty string.
   */
  retrieve(
    speciesCode: string,
    params: SpecieRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<SpecieRetrieveResponse> {
    const { regionCode, ...query } = params;
    return this._client.get(path`/data/obs/${regionCode}/recent/${speciesCode}`, { query, ...options });
  }
}

export type SpecieRetrieveResponse = Array<ObservationsAPI.Observation>;

export interface SpecieRetrieveParams {
  /**
   * Path param: The country, subnational1, subnational2 or location code.
   */
  regionCode: string;

  /**
   * Query param: The number of days back to fetch observations.
   */
  back?: number;

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
   * Query param: Fetch observations from up to 10 locations
   */
  r?: Array<string>;

  /**
   * Query param: Use this language for species common names
   */
  sppLocale?: string;
}

export declare namespace Species {
  export {
    type SpecieRetrieveResponse as SpecieRetrieveResponse,
    type SpecieRetrieveParams as SpecieRetrieveParams,
  };
}
