// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as ObservationsAPI from './observations';
import * as GeoAPI from './geo/geo';
import * as NearestAPI from './nearest/nearest';
import * as RecentAPI from './recent/recent';

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

export namespace Observations {
  export import Observation = ObservationsAPI.Observation;
  export import Recent = RecentAPI.Recent;
  export import RecentListResponse = RecentAPI.RecentListResponse;
  export import RecentListParams = RecentAPI.RecentListParams;
  export import Geo = GeoAPI.Geo;
  export import Nearest = NearestAPI.Nearest;
}
