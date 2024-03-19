// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@stainless-api/github-internal/resource';
import * as RefsAPI from '@stainless-api/github-internal/resources/repos/git/refs';

export class Git extends APIResource {
  refs: RefsAPI.Refs = new RefsAPI.Refs(this._client);
}

export namespace Git {
  export import Refs = RefsAPI.Refs;
  export import GitRef = RefsAPI.GitRef;
  export import RefRetrieveParams = RefsAPI.RefRetrieveParams;
  export import RefDeleteParams = RefsAPI.RefDeleteParams;
}
