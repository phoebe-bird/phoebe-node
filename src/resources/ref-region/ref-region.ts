// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as InfoAPI from './info';
import * as ListAPI from './list';

export class RefRegion extends APIResource {
  info: InfoAPI.Info = new InfoAPI.Info(this._client);
  list: ListAPI.List = new ListAPI.List(this._client);
}

export namespace RefRegion {
  export import Info = InfoAPI.Info;
  export import InfoRetrieveResponse = InfoAPI.InfoRetrieveResponse;
  export import InfoRetrieveParams = InfoAPI.InfoRetrieveParams;
  export import List = ListAPI.List;
  export import ListRetrieveResponse = ListAPI.ListRetrieveResponse;
  export import ListRetrieveParams = ListAPI.ListRetrieveParams;
}
