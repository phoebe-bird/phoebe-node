// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Forms extends APIResource {
  /**
   * For a species, get the list of subspecies recognised in the taxonomy. The
   * results include the species that was passed in.
   *
   * @example
   * ```ts
   * const forms = await client.ref.taxonomy.forms.list(
   *   'speciesCode',
   * );
   * ```
   */
  list(speciesCode: string, options?: RequestOptions): APIPromise<FormListResponse> {
    return this._client.get(path`/ref/taxon/forms/${speciesCode}`, options);
  }
}

export type FormListResponse = Array<string>;

export declare namespace Forms {
  export { type FormListResponse as FormListResponse };
}
