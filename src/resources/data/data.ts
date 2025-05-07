// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ObservationsAPI from './observations/observations';
import { Observation, Observations } from './observations/observations';

export class Data extends APIResource {
  observations: ObservationsAPI.Observations = new ObservationsAPI.Observations(this._client);
}

Data.Observations = Observations;

export declare namespace Data {
  export { Observations as Observations, type Observation as Observation };
}
