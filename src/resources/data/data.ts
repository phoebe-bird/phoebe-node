// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as NearestAPI from './nearest/nearest';
import * as ObsAPI from './obs/obs';

export class Data extends APIResource {
  obs: ObsAPI.Obs = new ObsAPI.Obs(this._client);
  nearest: NearestAPI.Nearest = new NearestAPI.Nearest(this._client);
}

export namespace Data {
  export import Obs = ObsAPI.Obs;
  export import Nearest = NearestAPI.Nearest;
}
