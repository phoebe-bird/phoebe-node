// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../core';
import { APIResource } from '../../../resource';

export class Summary extends APIResource {
  /**
   * Get a summary of the number of checklist submitted, species seen and
   * contributors on a given date for a country or region.
   *
   * #### Notes The results are updated every 15 minutes.
   */
  retrieve(
    regionCode: string,
    y: number,
    m: number,
    d: number,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.get(`/product/stats/${regionCode}/${y}/${m}/${d}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}