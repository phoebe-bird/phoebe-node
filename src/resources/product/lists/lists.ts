// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../core';
import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as ListsAPI from './lists';
import * as ObservationsAPI from '../../data/observations/observations';
import * as HistoricalAPI from './historical';

export class Lists extends APIResource {
  historical: HistoricalAPI.Historical = new HistoricalAPI.Historical(this._client);

  /**
   * Get information on the most recently submitted checklists for a region.
   */
  retrieve(
    regionCode: string,
    query?: ListRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListRetrieveResponse>;
  retrieve(regionCode: string, options?: Core.RequestOptions): Core.APIPromise<ListRetrieveResponse>;
  retrieve(
    regionCode: string,
    query: ListRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(regionCode, {}, query);
    }
    return this._client.get(`/product/lists/${regionCode}`, { query, ...options });
  }
}

export type ListRetrieveResponse = Array<ObservationsAPI.Observation>;

export interface ListRetrieveParams {
  /**
   * Only fetch this number of checklists.
   */
  maxResults?: number;
}

export namespace Lists {
  export import ListRetrieveResponse = ListsAPI.ListRetrieveResponse;
  export import ListRetrieveParams = ListsAPI.ListRetrieveParams;
  export import Historical = HistoricalAPI.Historical;
  export import HistoricalRetrieveParams = HistoricalAPI.HistoricalRetrieveParams;
}
