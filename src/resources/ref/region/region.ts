// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as AdjacentAPI from './adjacent';
import * as InfoAPI from './info';
import * as ListAPI from './list';

export class Region extends APIResource {
  adjacent: AdjacentAPI.Adjacent = new AdjacentAPI.Adjacent(this._client);
  info: InfoAPI.Info = new InfoAPI.Info(this._client);
  list: ListAPI.List = new ListAPI.List(this._client);
}

export namespace Region {
  export import Adjacent = AdjacentAPI.Adjacent;
  export import AdjacentListResponse = AdjacentAPI.AdjacentListResponse;
  export import Info = InfoAPI.Info;
  export import InfoRetrieveResponse = InfoAPI.InfoRetrieveResponse;
  export import InfoRetrieveParams = InfoAPI.InfoRetrieveParams;
  export import List = ListAPI.List;
  export import ListListResponse = ListAPI.ListListResponse;
  export import ListListParams = ListAPI.ListListParams;
}
