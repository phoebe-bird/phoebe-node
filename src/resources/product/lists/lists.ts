// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as ListsAPI from './lists';
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

export type ListRetrieveResponse = Array<ListRetrieveResponse.ListRetrieveResponseItem>;

export namespace ListRetrieveResponse {
  export interface ListRetrieveResponseItem {
    allObsReported?: boolean;

    checklistId?: string;

    creationDt?: string;

    durationHrs?: number;

    isoObsDate?: string;

    lastEditedDt?: string;

    loc?: ListRetrieveResponseItem.Loc;

    locId?: string;

    numObservers?: number;

    numSpecies?: number;

    obs?: Array<ListRetrieveResponseItem.Ob>;

    obsDt?: string;

    obsTime?: string;

    obsTimeValid?: boolean;

    projId?: string;

    protocolId?: string;

    subId?: string;

    submissionMethodCode?: string;

    subnational1Code?: string;

    userDisplayName?: string;
  }

  export namespace ListRetrieveResponseItem {
    export interface Loc {
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

    export interface Ob {
      obsAux?: Array<Ob.ObsAux>;

      obsDt?: string;

      obsId?: string;

      speciesCode?: string;
    }

    export namespace Ob {
      export interface ObsAux {
        auxCode?: string;

        entryMethodCode?: string;

        fieldName?: string;

        obsId?: string;

        speciesCode?: string;

        subId?: string;

        value?: string;
      }
    }
  }
}

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
  export import HistoricalRetrieveResponse = HistoricalAPI.HistoricalRetrieveResponse;
  export import HistoricalRetrieveParams = HistoricalAPI.HistoricalRetrieveParams;
}
