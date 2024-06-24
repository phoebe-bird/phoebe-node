// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as HistoricAPI from './historic';
import * as GeoAPI from './geo/geo';
import * as RecentAPI from './recent/recent';

export class Obs extends APIResource {
  recent: RecentAPI.Recent = new RecentAPI.Recent(this._client);
  geo: GeoAPI.Geo = new GeoAPI.Geo(this._client);
  historic: HistoricAPI.Historic = new HistoricAPI.Historic(this._client);
}

export namespace Obs {
  export import Recent = RecentAPI.Recent;
  export import RecentListResponse = RecentAPI.RecentListResponse;
  export import RecentListParams = RecentAPI.RecentListParams;
  export import Geo = GeoAPI.Geo;
  export import Historic = HistoricAPI.Historic;
  export import HistoricListParams = HistoricAPI.HistoricListParams;
}
