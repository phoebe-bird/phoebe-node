// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@stainless-api/github-internal/core';
import { APIResource } from '@stainless-api/github-internal/resource';
import { isRequestOptions } from '@stainless-api/github-internal/core';
import * as UsersReposAPI from '@stainless-api/github-internal/resources/users/repos';
import * as ReposAPI from '@stainless-api/github-internal/resources/repos/repos';

export class Repos extends APIResource {
  /**
   * Lists public repositories for the specified user. Note: For GitHub AE, this
   * endpoint will list internal repositories for the specified user.
   */
  list(
    username: string,
    query?: RepoListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RepoListResponse>;
  list(username: string, options?: Core.RequestOptions): Core.APIPromise<RepoListResponse>;
  list(
    username: string,
    query: RepoListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RepoListResponse> {
    if (isRequestOptions(query)) {
      return this.list(username, {}, query);
    }
    return this._client.get(`/users/${username}/repos`, { query, ...options });
  }

  /**
   * Lists repositories a user has starred.
   *
   * You can also find out _when_ stars were created by passing the following custom
   * [media type](https://docs.github.com/enterprise-server@3.6/rest/overview/media-types/)
   * via the `Accept` header:
   */
  listStarred(
    username: string,
    query?: RepoListStarredParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RepoListStarredResponse>;
  listStarred(username: string, options?: Core.RequestOptions): Core.APIPromise<RepoListStarredResponse>;
  listStarred(
    username: string,
    query: RepoListStarredParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RepoListStarredResponse> {
    if (isRequestOptions(query)) {
      return this.listStarred(username, {}, query);
    }
    return this._client.get(`/users/${username}/starred`, { query, ...options });
  }

  /**
   * Lists repositories a user is watching.
   */
  listWatched(
    username: string,
    query?: RepoListWatchedParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RepoListWatchedResponse>;
  listWatched(username: string, options?: Core.RequestOptions): Core.APIPromise<RepoListWatchedResponse>;
  listWatched(
    username: string,
    query: RepoListWatchedParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RepoListWatchedResponse> {
    if (isRequestOptions(query)) {
      return this.listWatched(username, {}, query);
    }
    return this._client.get(`/users/${username}/subscriptions`, { query, ...options });
  }
}

export type RepoListResponse = Array<ReposAPI.MinimalRepository>;

export type RepoListStarredResponse = Array<ReposAPI.Repository>;

export type RepoListWatchedResponse = Array<ReposAPI.MinimalRepository>;

export interface RepoListParams {
  /**
   * The order to sort by. Default: `asc` when using `full_name`, otherwise `desc`.
   */
  direction?: 'asc' | 'desc';

  /**
   * Page number of the results to fetch.
   */
  page?: number;

  /**
   * The number of results per page (max 100).
   */
  per_page?: number;

  /**
   * The property to sort the results by.
   */
  sort?: 'created' | 'updated' | 'pushed' | 'full_name';

  /**
   * Limit results to repositories of the specified type.
   */
  type?: 'all' | 'owner' | 'member';
}

export interface RepoListStarredParams {
  /**
   * The direction to sort the results by.
   */
  direction?: 'asc' | 'desc';

  /**
   * Page number of the results to fetch.
   */
  page?: number;

  /**
   * The number of results per page (max 100).
   */
  per_page?: number;

  /**
   * The property to sort the results by. `created` means when the repository was
   * starred. `updated` means when the repository was last pushed to.
   */
  sort?: 'created' | 'updated';
}

export interface RepoListWatchedParams {
  /**
   * Page number of the results to fetch.
   */
  page?: number;

  /**
   * The number of results per page (max 100).
   */
  per_page?: number;
}

export namespace Repos {
  export import RepoListResponse = UsersReposAPI.RepoListResponse;
  export import RepoListStarredResponse = UsersReposAPI.RepoListStarredResponse;
  export import RepoListWatchedResponse = UsersReposAPI.RepoListWatchedResponse;
  export import RepoListParams = UsersReposAPI.RepoListParams;
  export import RepoListStarredParams = UsersReposAPI.RepoListStarredParams;
  export import RepoListWatchedParams = UsersReposAPI.RepoListWatchedParams;
}
