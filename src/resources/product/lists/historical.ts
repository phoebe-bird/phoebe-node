// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Historical extends APIResource {
  /**
   * Get information on the checklists submitted on a given date for a country or
   * region.
   */
  retrieve(
    d: number,
    params: HistoricalRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<HistoricalRetrieveResponse> {
    const { regionCode, y, m, ...query } = params;
    return this._client.get(path`/product/lists/${regionCode}/${y}/${m}/${d}`, { query, ...options });
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
   * Path param: The country, subnational1, subnational2 or location code.
   */
  regionCode: string;

  /**
   * Path param: The year, from 1800 to the present.
   */
  y: number;

  /**
   * Path param: The month, from 1-12.
   */
  m: number;

  /**
   * Query param: Only fetch this number of checklists.
   */
  maxResults?: number;

  /**
   * Query param: Order the results by the date of the checklist or by the date it
   * was submitted.
   */
  sortKey?: 'obs_dt' | 'creation_dt';
}

export declare namespace Historical {
  export {
    type HistoricalRetrieveResponse as HistoricalRetrieveResponse,
    type HistoricalRetrieveParams as HistoricalRetrieveParams,
  };
}
