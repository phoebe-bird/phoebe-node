// File generated from our OpenAPI spec by Stainless.

import * as Core from '@stainless-api/github-internal/core';
import { APIResource } from '@stainless-api/github-internal/resource';
import * as LFSAPI from '@stainless-api/github-internal/resources/repos/lfs';

export class LFS extends APIResource {
  /**
   * Disable Git LFS for a repository
   */
  disable(params: LFSDisableParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { owner, repo } = params;
    return this._client.delete(`/repos/${owner}/${repo}/lfs`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Enable Git LFS for a repository
   */
  enable(params: LFSEnableParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    const { owner, repo } = params;
    return this._client.put(`/repos/${owner}/${repo}/lfs`, options);
  }
}

export type LFSEnableResponse = unknown;

export interface LFSDisableParams {
  /**
   * The account owner of the repository. The name is not case sensitive.
   */
  owner: string;

  /**
   * The name of the repository. The name is not case sensitive.
   */
  repo: string;
}

export interface LFSEnableParams {
  /**
   * The account owner of the repository. The name is not case sensitive.
   */
  owner: string;

  /**
   * The name of the repository. The name is not case sensitive.
   */
  repo: string;
}

export namespace LFS {
  export import LFSEnableResponse = LFSAPI.LFSEnableResponse;
  export import LFSDisableParams = LFSAPI.LFSDisableParams;
  export import LFSEnableParams = LFSAPI.LFSEnableParams;
}
