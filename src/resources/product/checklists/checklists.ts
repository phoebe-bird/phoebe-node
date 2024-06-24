// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../core';
import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as ChecklistsAPI from './checklists';
import * as SummaryAPI from './summary';

export class Checklists extends APIResource {
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);

  /**
   * Get information on the checklists submitted on a given date for a country or
   * region.
   */
  retrieve(
    regionCode: string,
    y: number,
    m: number,
    d: number,
    query?: ChecklistRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  retrieve(
    regionCode: string,
    y: number,
    m: number,
    d: number,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  retrieve(
    regionCode: string,
    y: number,
    m: number,
    d: number,
    query: ChecklistRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(query)) {
      return this.retrieve(regionCode, y, m, d, {}, query);
    }
    return this._client.get(`/product/lists/${regionCode}/${y}/${m}/${d}`, {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ChecklistRetrieveParams {
  /**
   * Only fetch this number of checklists.
   */
  maxResults?: number;

  /**
   * Order the results by the date of the checklist or by the date it was submitted.
   */
  sortKey?: 'obs_dt' | 'creation_dt';
}

export namespace Checklists {
  export import ChecklistRetrieveParams = ChecklistsAPI.ChecklistRetrieveParams;
  export import Summary = SummaryAPI.Summary;
}
