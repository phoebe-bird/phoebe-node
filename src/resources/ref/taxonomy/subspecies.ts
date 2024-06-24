// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../core';
import { APIResource } from '../../../resource';
import * as SubspeciesAPI from './subspecies';

export class Subspecies extends APIResource {
  /**
   * For a species, get the list of subspecies recognised in the taxonomy. The
   * results include the species that was passed in.
   */
  list(speciesCode: string, options?: Core.RequestOptions): Core.APIPromise<SubspecieListResponse> {
    return this._client.get(`/ref/taxon/forms/${speciesCode}`, options);
  }
}

export type SubspecieListResponse = Array<string>;

export namespace Subspecies {
  export import SubspecieListResponse = SubspeciesAPI.SubspecieListResponse;
}
