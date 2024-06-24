// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as EbirdAPI from './ebird';
import * as SubspeciesAPI from './subspecies';

export class Taxonomy extends APIResource {
  ebird: EbirdAPI.Ebird = new EbirdAPI.Ebird(this._client);
  subspecies: SubspeciesAPI.Subspecies = new SubspeciesAPI.Subspecies(this._client);
}

export namespace Taxonomy {
  export import Ebird = EbirdAPI.Ebird;
  export import EbirdRetrieveResponse = EbirdAPI.EbirdRetrieveResponse;
  export import EbirdRetrieveParams = EbirdAPI.EbirdRetrieveParams;
  export import Subspecies = SubspeciesAPI.Subspecies;
  export import SubspecieListResponse = SubspeciesAPI.SubspecieListResponse;
}
