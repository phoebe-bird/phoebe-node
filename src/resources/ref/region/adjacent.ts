// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Adjacent extends APIResource {
  /**
   * Get the list of countries or regions that share a border with this one. ####
   * Notes Only subnational2 codes in the United States, New Zealand, or Mexico are
   * currently supported
   */
  list(regionCode: string, options?: RequestOptions): APIPromise<AdjacentListResponse> {
    return this._client.get(path`/ref/adjacent/${regionCode}`, options);
  }
}

export type AdjacentListResponse = Array<AdjacentListResponse.AdjacentListResponseItem>;

export namespace AdjacentListResponse {
  export interface AdjacentListResponseItem {
    code?: string;

    name?: string;
  }
}

export declare namespace Adjacent {
  export { type AdjacentListResponse as AdjacentListResponse };
}
