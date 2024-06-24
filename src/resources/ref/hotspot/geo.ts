// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../core';
import { APIResource } from '../../../resource';
import * as GeoAPI from './geo';

export class Geo extends APIResource {
  /**
   * Get the list of hotspots, within a radius of up to 50 kilometers, from a given
   * set of coordinates.
   */
  retrieve(query: GeoRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/ref/hotspot/geo', {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
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

export namespace Geo {
  export import GeoRetrieveParams = GeoAPI.GeoRetrieveParams;
}
