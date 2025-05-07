// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Geo extends APIResource {
  /**
   * Get the list of hotspots, within a radius of up to 50 kilometers, from a given
   * set of coordinates.
   *
   * @example
   * ```ts
   * const geos = await client.ref.hotspot.geo.retrieve({
   *   lat: -90,
   *   lng: -180,
   * });
   * ```
   */
  retrieve(query: GeoRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<GeoRetrieveResponse> {
    return this._client.get('/ref/hotspot/geo', { query, ...options });
  }
}

export type GeoRetrieveResponse = Array<GeoRetrieveResponse.GeoRetrieveResponseItem>;

export namespace GeoRetrieveResponse {
  export interface GeoRetrieveResponseItem {
    countryCode?: string;

    lat?: number;

    latestObsDt?: string;

    lng?: number;

    locId?: string;

    locName?: string;

    numSpeciesAllTime?: number;

    subnational1Code?: string;

    subnational2Code?: string;
  }
}

export interface GeoRetrieveParams {
  lat: number;

  lng: number;

  /**
   * The number of days back to fetch hotspots.
   */
  back?: number;

  /**
   * The search radius from the given position, in kilometers.
   */
  dist?: number;

  /**
   * Fetch the records in CSV or JSON format.
   */
  fmt?: 'csv' | 'json';
}

export declare namespace Geo {
  export { type GeoRetrieveResponse as GeoRetrieveResponse, type GeoRetrieveParams as GeoRetrieveParams };
}
