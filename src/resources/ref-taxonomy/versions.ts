// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as VersionsAPI from './versions';

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

export namespace Versions {
  export import VersionListResponse = VersionsAPI.VersionListResponse;
}
