// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ChecklistAPI from './checklist';

export class Checklist extends APIResource {
  /**
   * Get the details and observations of a checklist.
   *
   * #### Notes Do NOT use this to download large amounts of data. You will be banned if you do. In the fields for each observation, the following fields are duplicates or obsolete and will be removed at a future date: _howManyAtleast_, _howManyAtmost_, _hideFlags_, _projId_, _subId_, _subnational1Code_ and _present_.
   */
  view(subId: string, options?: Core.RequestOptions): Core.APIPromise<ChecklistViewResponse> {
    return this._client.get(`/product/checklist/view/${subId}`, options);
  }
}

export interface ChecklistViewResponse {
  allObsReported?: boolean;

  checklistId?: string;

  creationDt?: string;

  durationHrs?: number;

  isoObsDate?: string;

  lastEditedDt?: string;

  loc?: ChecklistViewResponse.Loc;

  locId?: string;

  numObservers?: number;

  numSpecies?: number;

  obs?: Array<ChecklistViewResponse.Ob>;

  obsDt?: string;

  obsTime?: string;

  obsTimeValid?: boolean;

  projId?: string;

  protocolId?: string;

  subId?: string;

  subID?: string;

  submissionMethodCode?: string;

  subnational1Code?: string;

  userDisplayName?: string;
}

export namespace ChecklistViewResponse {
  export interface Loc {
    countryCode?: string;

    countryName?: string;

    hierarchicalName?: string;

    isHotspot?: boolean;

    lat?: number;

    latitude?: number;

    lng?: number;

    locId?: string;

    locID?: string;

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

export namespace Checklist {
  export import ChecklistViewResponse = ChecklistAPI.ChecklistViewResponse;
}
