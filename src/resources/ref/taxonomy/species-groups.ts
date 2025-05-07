// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class SpeciesGroups extends APIResource {
  /**
   * Get the list of species groups, e.g. terns, finches, etc. #### Notes Merlin puts
   * like birds together, with Falcons next to Hawks, whereas eBird follows taxonomic
   * order.
   */
  list(
    speciesGrouping: 'merlin' | 'ebird',
    query: SpeciesGroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SpeciesGroupListResponse> {
    return this._client.get(path`/ref/sppgroup/${speciesGrouping}`, { query, ...options });
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
