// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as GeoAPI from './geo/geo';
import { Geo } from './geo/geo';
import * as NearestAPI from './nearest/nearest';
import { Nearest } from './nearest/nearest';
import * as RecentAPI from './recent/recent';
import { Recent, RecentListParams, RecentListResponse } from './recent/recent';

export class Observations extends APIResource {
  recent: RecentAPI.Recent = new RecentAPI.Recent(this._client);
  geo: GeoAPI.Geo = new GeoAPI.Geo(this._client);
  nearest: NearestAPI.Nearest = new NearestAPI.Nearest(this._client);
}

export interface Observation {
  id?: number;

  comName?: string;

  firstname?: string;

  howMany?: number;

  lastname?: string;

  lat?: number;

  lng?: number;

  locationPrivate?: boolean;

  locId?: string;

  locName?: string;

  obsDt?: string;

  obsReviewed?: boolean;

  obsValid?: boolean;

  sciName?: string;

  speciesCode?: string;

  subId?: string;
}

Observations.Recent = Recent;
Observations.Geo = Geo;
Observations.Nearest = Nearest;

export declare namespace Observations {
  export { type Observation as Observation };

  export {
    Recent as Recent,
    type RecentListResponse as RecentListResponse,
    type RecentListParams as RecentListParams,
  };

  export { Geo as Geo };

  export { Nearest as Nearest };
}
