// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Checklist extends APIResource {
  /**
   * Get the details and observations of a checklist.
   *
   * #### Notes Do NOT use this to download large amounts of data. You will be banned if you do. In the fields for each observation, the following fields are duplicates or obsolete and will be removed at a future date: _howManyAtleast_, _howManyAtmost_, _hideFlags_, _projId_, _subId_, _subnational1Code_ and _present_.
   */
  view(subID: string, options?: RequestOptions): APIPromise<ChecklistViewResponse> {
    return this._client.get(path`/product/checklist/view/${subID}`, options);
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

export declare namespace Checklist {
  export { type ChecklistViewResponse as ChecklistViewResponse };
}
