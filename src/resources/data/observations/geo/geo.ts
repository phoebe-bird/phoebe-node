// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as RecentAPI from './recent/recent';
import { Recent, RecentListParams, RecentListResponse } from './recent/recent';

export class Geo extends APIResource {
  recent: RecentAPI.Recent = new RecentAPI.Recent(this._client);
}

Geo.Recent = Recent;

export declare namespace Geo {
  export {
    Recent as Recent,
    type RecentListResponse as RecentListResponse,
    type RecentListParams as RecentListParams,
  };
}
