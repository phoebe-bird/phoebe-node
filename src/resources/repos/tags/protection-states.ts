// File generated from our OpenAPI spec by Stainless.

import * as Core from '@stainless-api/github-internal/core';
import { APIResource } from '@stainless-api/github-internal/resource';
import * as ProtectionStatesAPI from '@stainless-api/github-internal/resources/repos/tags/protection-states';

export class ProtectionStates extends APIResource {
  /**
   * This creates a tag protection state for a repository. This endpoint is only
   * available to repository administrators.
   */
  create(params: ProtectionStateCreateParams, options?: Core.RequestOptions): Core.APIPromise<TagProtection> {
    const { owner, repo, ...body } = params;
    return this._client.post(`/repos/${owner}/${repo}/tags/protection`, { body, ...options });
  }

  /**
   * This deletes a tag protection state for a repository. This endpoint is only
   * available to repository administrators.
   */
  delete(
    tagProtectionId: number,
    params: ProtectionStateDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { owner, repo } = params;
    return this._client.delete(`/repos/${owner}/${repo}/tags/protection/${tagProtectionId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

/**
 * Tag protection
 */
export interface TagProtection {
  pattern: string;

  id?: number;

  created_at?: string;

  enabled?: boolean;

  updated_at?: string;
}

export interface ProtectionStateCreateParams {
  /**
   * Path param: The account owner of the repository. The name is not case sensitive.
   */
  owner: string;

  /**
   * Path param: The name of the repository. The name is not case sensitive.
   */
  repo: string;

  /**
   * Body param: An optional glob pattern to match against when enforcing tag
   * protection.
   */
  pattern: string;
}

export interface ProtectionStateDeleteParams {
  /**
   * The account owner of the repository. The name is not case sensitive.
   */
  owner: string;

  /**
   * The name of the repository. The name is not case sensitive.
   */
  repo: string;
}

export namespace ProtectionStates {
  export import TagProtection = ProtectionStatesAPI.TagProtection;
  export import ProtectionStateCreateParams = ProtectionStatesAPI.ProtectionStateCreateParams;
  export import ProtectionStateDeleteParams = ProtectionStatesAPI.ProtectionStateDeleteParams;
}
