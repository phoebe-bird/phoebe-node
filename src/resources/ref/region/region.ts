// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as AdjacentAPI from './adjacent';
import { Adjacent, AdjacentListResponse } from './adjacent';
import * as InfoAPI from './info';
import { Info, InfoRetrieveParams, InfoRetrieveResponse } from './info';
import * as ListAPI from './list';
import { List, ListListParams, ListListResponse } from './list';

export class Region extends APIResource {
  adjacent: AdjacentAPI.Adjacent = new AdjacentAPI.Adjacent(this._client);
  info: InfoAPI.Info = new InfoAPI.Info(this._client);
  list: ListAPI.List = new ListAPI.List(this._client);
}

Region.Adjacent = Adjacent;
Region.Info = Info;
Region.List = List;

export declare namespace Region {
  export { Adjacent as Adjacent, type AdjacentListResponse as AdjacentListResponse };

  export {
    Info as Info,
    type InfoRetrieveResponse as InfoRetrieveResponse,
    type InfoRetrieveParams as InfoRetrieveParams,
  };

  export { List as List, type ListListResponse as ListListResponse, type ListListParams as ListListParams };
}
