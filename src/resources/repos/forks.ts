// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@stainless-api/github-internal/core';
import { APIResource } from '@stainless-api/github-internal/resource';
import * as ForksAPI from '@stainless-api/github-internal/resources/repos/forks';
import * as ReposAPI from '@stainless-api/github-internal/resources/repos/repos';

export class Forks extends APIResource {
  /**
   * Create a fork for the authenticated user.
   *
   * **Note**: Forking a Repository happens asynchronously. You may have to wait a
   * short period of time before you can access the git objects. If this takes longer
   * than 5 minutes, be sure to contact
   * [GitHub Enterprise Server Support](https://support.github.com/contact?tags=dotcom-rest-api).
   */
  create(params: ForkCreateParams, options?: Core.RequestOptions): Core.APIPromise<ReposAPI.FullRepository> {
    const { owner, repo, ...body } = params;
    return this._client.post(`/repos/${owner}/${repo}/forks`, { body, ...options });
  }

  /**
   * List forks
   */
  list(params: ForkListParams, options?: Core.RequestOptions): Core.APIPromise<ForkListResponse> {
    const { owner, repo, ...query } = params;
    return this._client.get(`/repos/${owner}/${repo}/forks`, { query, ...options });
  }
}

export type ForkListResponse = Array<ReposAPI.MinimalRepository>;

export interface ForkCreateParams {
  /**
   * Path param: The account owner of the repository. The name is not case sensitive.
   */
  owner: string;

  /**
   * Path param: The name of the repository. The name is not case sensitive.
   */
  repo: string;

  /**
   * Body param: Optional parameter to specify the organization name if forking into
   * an organization.
   */
  organization?: string;
}

export interface ForkListParams {
  /**
   * Path param: The account owner of the repository. The name is not case sensitive.
   */
  owner: string;

  /**
   * Path param: The name of the repository. The name is not case sensitive.
   */
  repo: string;

  /**
   * Query param: Page number of the results to fetch.
   */
  page?: number;

  /**
   * Query param: The number of results per page (max 100).
   */
  per_page?: number;

  /**
   * Query param: The sort order. Can be either `newest`, `oldest`, or `stargazers`.
   */
  sort?: 'newest' | 'oldest' | 'stargazers' | 'watchers';
}

export namespace Forks {
  export import ForkListResponse = ForksAPI.ForkListResponse;
  export import ForkCreateParams = ForksAPI.ForkCreateParams;
  export import ForkListParams = ForksAPI.ForkListParams;
}
