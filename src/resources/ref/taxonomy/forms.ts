// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../core';
import { APIResource } from '../../../resource';
import * as FormsAPI from './forms';

export class Forms extends APIResource {
  /**
   * For a species, get the list of subspecies recognised in the taxonomy. The
   * results include the species that was passed in.
   */
  list(speciesCode: string, options?: Core.RequestOptions): Core.APIPromise<FormListResponse> {
    return this._client.get(`/ref/taxon/forms/${speciesCode}`, options);
  }
}

export type FormListResponse = Array<string>;

export namespace Forms {
  export import FormListResponse = FormsAPI.FormListResponse;
}
