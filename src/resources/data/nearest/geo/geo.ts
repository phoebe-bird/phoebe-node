// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as RecentAPI from './recent/recent';

export class Geo extends APIResource {
  recent: RecentAPI.Recent = new RecentAPI.Recent(this._client);
}

export namespace Geo {
  export import Recent = RecentAPI.Recent;
}
