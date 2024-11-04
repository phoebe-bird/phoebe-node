// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Historical extends APIResource {
  /**
   * Get information on the checklists submitted on a given date for a country or
   * region.
   */
  retrieve(
    regionCode: string,
    y: number,
    m: number,
    d: number,
    query?: HistoricalRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HistoricalRetrieveResponse>;
  retrieve(
    regionCode: string,
    y: number,
    m: number,
    d: number,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HistoricalRetrieveResponse>;
  retrieve(
    regionCode: string,
    y: number,
    m: number,
    d: number,
    query: HistoricalRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HistoricalRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(regionCode, y, m, d, {}, query);
    }
    return this._client.get(`/product/lists/${regionCode}/${y}/${m}/${d}`, { query, ...options });
  }
}

export type HistoricalRetrieveResponse = Array<HistoricalRetrieveResponse.HistoricalRetrieveResponseItem>;

export namespace HistoricalRetrieveResponse {
  export interface HistoricalRetrieveResponseItem {
    allObsReported?: boolean;

    checklistId?: string;

    creationDt?: string;

    durationHrs?: number;

    isoObsDate?: string;

    lastEditedDt?: string;

    loc?: HistoricalRetrieveResponseItem.Loc;

    locId?: string;

    numObservers?: number;

    numSpecies?: number;

    obs?: Array<HistoricalRetrieveResponseItem.Ob>;

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

  export namespace HistoricalRetrieveResponseItem {
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

export interface HistoricalRetrieveParams {
  /**
   * Only fetch this number of checklists.
   */
  maxResults?: number;

  /**
   * Order the results by the date of the checklist or by the date it was submitted.
   */
  sortKey?: 'obs_dt' | 'creation_dt';
}

export declare namespace Historical {
  export {
    type HistoricalRetrieveResponse as HistoricalRetrieveResponse,
    type HistoricalRetrieveParams as HistoricalRetrieveParams,
  };
}
