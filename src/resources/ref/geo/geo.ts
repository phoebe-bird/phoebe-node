// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as AdjacentAPI from './adjacent';

export class Geo extends APIResource {
  adjacent: AdjacentAPI.Adjacent = new AdjacentAPI.Adjacent(this._client);
}

export namespace Geo {
  export import Adjacent = AdjacentAPI.Adjacent;
  export import AdjacentRetrieveResponse = AdjacentAPI.AdjacentRetrieveResponse;
}
