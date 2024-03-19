// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@stainless-api/github-internal/core';
import { APIResource } from '@stainless-api/github-internal/resource';
import { isRequestOptions } from '@stainless-api/github-internal/core';
import * as UsersAPI from '@stainless-api/github-internal/resources/users/users';
import * as ReposAPI from '@stainless-api/github-internal/resources/users/repos';

export class Users extends APIResource {
  repos: ReposAPI.Repos = new ReposAPI.Repos(this._client);

  /**
   * Lists all users, in the order that they signed up on GitHub Enterprise Server.
   * This list includes personal user accounts and organization accounts.
   *
   * Note: Pagination is powered exclusively by the `since` parameter. Use the
   * [Link header](https://docs.github.com/enterprise-server@3.6/rest/overview/resources-in-the-rest-api#link-header)
   * to get the URL for the next page of users.
   */
  list(query?: UserListParams, options?: Core.RequestOptions): Core.APIPromise<UserListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<UserListResponse>;
  list(
    query: UserListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/users', { query, ...options });
  }
}

/**
 * Public User
 */
export interface PublicUser {
  id: number;

  avatar_url: string;

  bio: string | null;

  blog: string | null;

  company: string | null;

  created_at: string;

  email: string | null;

  events_url: string;

  followers: number;

  followers_url: string;

  following: number;

  following_url: string;

  gists_url: string;

  gravatar_id: string | null;

  hireable: boolean | null;

  html_url: string;

  location: string | null;

  login: string;

  name: string | null;

  node_id: string;

  organizations_url: string;

  public_gists: number;

  public_repos: number;

  received_events_url: string;

  repos_url: string;

  site_admin: boolean;

  starred_url: string;

  subscriptions_url: string;

  type: string;

  updated_at: string;

  url: string;

  collaborators?: number;

  disk_usage?: number;

  owned_private_repos?: number;

  plan?: PublicUser.Plan;

  private_gists?: number;

  suspended_at?: string | null;

  total_private_repos?: number;

  twitter_username?: string | null;
}

export namespace PublicUser {
  export interface Plan {
    collaborators: number;

    name: string;

    private_repos: number;

    space: number;
  }
}

/**
 * Simple User
 */
export interface SimpleUser {
  id: number;

  avatar_url: string;

  events_url: string;

  followers_url: string;

  following_url: string;

  gists_url: string;

  gravatar_id: string | null;

  html_url: string;

  login: string;

  node_id: string;

  organizations_url: string;

  received_events_url: string;

  repos_url: string;

  site_admin: boolean;

  starred_url: string;

  subscriptions_url: string;

  type: string;

  url: string;

  email?: string | null;

  name?: string | null;

  starred_at?: string;
}

export type UserListResponse = Array<SimpleUser>;

export interface UserListParams {
  /**
   * The number of results per page (max 100).
   */
  per_page?: number;

  /**
   * A user ID. Only return users with an ID greater than this ID.
   */
  since?: number;
}

export namespace Users {
  export import PublicUser = UsersAPI.PublicUser;
  export import SimpleUser = UsersAPI.SimpleUser;
  export import UserListResponse = UsersAPI.UserListResponse;
  export import UserListParams = UsersAPI.UserListParams;
  export import Repos = ReposAPI.Repos;
  export import RepoListResponse = ReposAPI.RepoListResponse;
  export import RepoListStarredResponse = ReposAPI.RepoListStarredResponse;
  export import RepoListWatchedResponse = ReposAPI.RepoListWatchedResponse;
  export import RepoListParams = ReposAPI.RepoListParams;
  export import RepoListStarredParams = ReposAPI.RepoListStarredParams;
  export import RepoListWatchedParams = ReposAPI.RepoListWatchedParams;
}
