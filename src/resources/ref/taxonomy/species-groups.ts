// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class SpeciesGroups extends APIResource {
  /**
   * Get the list of species groups, e.g. terns, finches, etc. #### Notes Merlin puts
   * like birds together, with Falcons next to Hawks, whereas eBird follows taxonomic
   * order.
   */
  list(
    speciesGrouping: 'merlin' | 'ebird',
    query?: SpeciesGroupListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpeciesGroupListResponse>;
  list(
    speciesGrouping: 'merlin' | 'ebird',
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpeciesGroupListResponse>;
  list(
    speciesGrouping: 'merlin' | 'ebird',
    query: SpeciesGroupListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpeciesGroupListResponse> {
    if (isRequestOptions(query)) {
      return this.list(speciesGrouping, {}, query);
    }
    return this._client.get(`/ref/sppgroup/${speciesGrouping}`, { query, ...options });
  }
}

export type SpeciesGroupListResponse = Array<SpeciesGroupListResponse.SpeciesGroupListResponseItem>;

export namespace SpeciesGroupListResponse {
  export interface SpeciesGroupListResponseItem {
    groupName?: string;

    groupOrder?: number;

    taxonOrderBounds?: Array<Array<number>>;
  }
}

export interface SpeciesGroupListParams {
  /**
   * Locale for species group names. English names are returned for any non-listed
   * locale or any non-translated group name.
   */
  groupNameLocale?: string;
}

export declare namespace SpeciesGroups {
  export {
    type SpeciesGroupListResponse as SpeciesGroupListResponse,
    type SpeciesGroupListParams as SpeciesGroupListParams,
  };
}
