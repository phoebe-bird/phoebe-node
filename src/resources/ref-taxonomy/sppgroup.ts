// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as SppgroupAPI from './sppgroup';

export class Sppgroup extends APIResource {
  /**
   * Get the list of species groups, e.g. terns, finches, etc. #### Notes Merlin puts
   * like birds together, with Falcons next to Hawks, whereas eBird follows taxonomic
   * order.
   */
  retrieve(
    speciesGrouping: 'merlin' | 'ebird',
    query?: SppgroupRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SppgroupRetrieveResponse>;
  retrieve(
    speciesGrouping: 'merlin' | 'ebird',
    options?: Core.RequestOptions,
  ): Core.APIPromise<SppgroupRetrieveResponse>;
  retrieve(
    speciesGrouping: 'merlin' | 'ebird',
    query: SppgroupRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SppgroupRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(speciesGrouping, {}, query);
    }
    return this._client.get(`/ref/sppgroup/${speciesGrouping}`, { query, ...options });
  }
}

export type SppgroupRetrieveResponse = Array<SppgroupRetrieveResponse.SppgroupRetrieveResponseItem>;

export namespace SppgroupRetrieveResponse {
  export interface SppgroupRetrieveResponseItem {
    groupName?: string;

    groupOrder?: number;

    taxonOrderBounds?: Array<Array<number>>;
  }
}

export interface SppgroupRetrieveParams {
  /**
   * Locale for species group names. English names are returned for any non-listed
   * locale or any non-translated group name.
   */
  groupNameLocale?: string;
}

export namespace Sppgroup {
  export import SppgroupRetrieveResponse = SppgroupAPI.SppgroupRetrieveResponse;
  export import SppgroupRetrieveParams = SppgroupAPI.SppgroupRetrieveParams;
}
