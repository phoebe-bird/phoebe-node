// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as EbirdAPI from './ebird';

export class TaxaLocales extends APIResource {
  ebird: EbirdAPI.Ebird = new EbirdAPI.Ebird(this._client);
}

export namespace TaxaLocales {
  export import Ebird = EbirdAPI.Ebird;
  export import EbirdListResponse = EbirdAPI.EbirdListResponse;
  export import EbirdListParams = EbirdAPI.EbirdListParams;
}
