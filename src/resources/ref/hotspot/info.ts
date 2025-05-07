// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Info extends APIResource {
  /**
   * Get information on the location of a hotspot. #### Notes This API call only
   * works for hotspots. If you pass the location code for a private location or an
   * invalid location code then an HTTP 410 (Gone) error is returned.
   *
   * @example
   * ```ts
   * const info = await client.ref.hotspot.info.retrieve(
   *   'locId',
   * );
   * ```
   */
  retrieve(locId: string, options?: Core.RequestOptions): Core.APIPromise<InfoRetrieveResponse> {
    return this._client.get(`/ref/hotspot/info/${locId}`, options);
  }
}

export interface InfoRetrieveResponse {
  countryCode?: string;

  countryName?: string;

  hierarchicalName?: string;

  isHotspot?: boolean;

  lat?: number;

  latitude?: number;

  lng?: number;

  locId?: string;

  locName?: string;

  longitude?: number;

  name?: string;

  subnational1Code?: string;

  subnational1Name?: string;
}

export declare namespace Info {
  export { type InfoRetrieveResponse as InfoRetrieveResponse };
}
