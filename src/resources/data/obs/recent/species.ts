// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../../core';
import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as SpeciesAPI from './species';

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
    regionCode: string,
    speciesCode: string,
    query?: SpecieRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpecieRetrieveResponse>;
  retrieve(
    regionCode: string,
    speciesCode: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpecieRetrieveResponse>;
  retrieve(
    regionCode: string,
    speciesCode: string,
    query: SpecieRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpecieRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(regionCode, speciesCode, {}, query);
    }
    return this._client.get(`/data/obs/${regionCode}/recent/${speciesCode}`, { query, ...options });
  }
}

export type SpecieRetrieveResponse = Array<SpecieRetrieveResponse.SpecieRetrieveResponseItem>;

export namespace SpecieRetrieveResponse {
  export interface SpecieRetrieveResponseItem {
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

export interface SpecieRetrieveParams {
  /**
   * The number of days back to fetch observations.
   */
  back?: number;

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
   * Fetch observations from up to 10 locations
   */
  r?: Array<string>;

  /**
   * Use this language for species common names
   */
  sppLocale?: string;
}

export namespace Species {
  export import SpecieRetrieveResponse = SpeciesAPI.SpecieRetrieveResponse;
  export import SpecieRetrieveParams = SpeciesAPI.SpecieRetrieveParams;
}