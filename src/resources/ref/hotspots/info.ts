// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../core';
import { APIResource } from '../../../resource';
import * as InfoAPI from './info';

export class Info extends APIResource {
  /**
   * Get information on the location of a hotspot. #### Notes This API call only
   * works for hotspots. If you pass the location code for a private location or an
   * invalid location code then an HTTP 410 (Gone) error is returned.
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

  latitude?: number;

  locId?: string;

  longitude?: number;

  name?: string;

  subnational1Code?: string;

  subnational1Name?: string;

  subnational2Code?: string;

  subnational2Name?: string;
}

export namespace Info {
  export import InfoRetrieveResponse = InfoAPI.InfoRetrieveResponse;
}