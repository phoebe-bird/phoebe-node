// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as RegionAPI from './region';

export class Lists extends APIResource {
  region: RegionAPI.Region = new RegionAPI.Region(this._client);
}

export namespace Lists {
  export import Region = RegionAPI.Region;
  export import RegionRetrieveParams = RegionAPI.RegionRetrieveParams;
}
