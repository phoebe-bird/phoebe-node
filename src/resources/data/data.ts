// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ObservationsAPI from './observations/observations';

export class Data extends APIResource {
  observations: ObservationsAPI.Observations = new ObservationsAPI.Observations(this._client);
}

export namespace Data {
  export import Observations = ObservationsAPI.Observations;
  export import Observation = ObservationsAPI.Observation;
}
