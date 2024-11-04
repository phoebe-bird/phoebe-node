// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Versions extends APIResource {
  /**
   * Returns a list of all versions of the taxonomy, with a flag indicating which is
   * the latest.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<VersionListResponse> {
    return this._client.get('/ref/taxonomy/versions', options);
  }
}

export type VersionListResponse = Array<VersionListResponse.VersionListResponseItem>;

export namespace VersionListResponse {
  export interface VersionListResponseItem {
    authorityVer?: number;

    latest?: boolean;
  }
}

export declare namespace Versions {
  export { type VersionListResponse as VersionListResponse };
}
