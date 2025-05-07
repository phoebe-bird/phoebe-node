// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as HistoricalAPI from './historical';
import { Historical, HistoricalRetrieveParams, HistoricalRetrieveResponse } from './historical';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Lists extends APIResource {
  historical: HistoricalAPI.Historical = new HistoricalAPI.Historical(this._client);

  /**
   * Get information on the most recently submitted checklists for a region.
   */
  retrieve(
    regionCode: string,
    query: ListRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListRetrieveResponse> {
    return this._client.get(path`/product/lists/${regionCode}`, { query, ...options });
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

Lists.Historical = Historical;

export declare namespace Lists {
  export { type ListRetrieveResponse as ListRetrieveResponse, type ListRetrieveParams as ListRetrieveParams };

  export {
    Historical as Historical,
    type HistoricalRetrieveResponse as HistoricalRetrieveResponse,
    type HistoricalRetrieveParams as HistoricalRetrieveParams,
  };
}
