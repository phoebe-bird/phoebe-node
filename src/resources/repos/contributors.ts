// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@stainless-api/github-internal/core';
import { APIResource } from '@stainless-api/github-internal/resource';
import * as ContributorsAPI from '@stainless-api/github-internal/resources/repos/contributors';

export class Contributors extends APIResource {
  /**
   * Lists contributors to the specified repository and sorts them by the number of
   * commits per contributor in descending order. This endpoint may return
   * information that is a few hours old because the GitHub REST API v3 caches
   * contributor data to improve performance.
   *
   * GitHub identifies contributors by author email address. This endpoint groups
   * contribution counts by GitHub user, which includes all associated email
   * addresses. To improve performance, only the first 500 author email addresses in
   * the repository link to GitHub users. The rest will appear as anonymous
   * contributors without associated GitHub user information.
   */
  list(
    params: ContributorListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContributorListResponse> {
    const { owner, repo, ...query } = params;
    return this._client.get(`/repos/${owner}/${repo}/contributors`, { query, ...options });
  }
}

/**
 * Contributor
 */
export interface Contributor {
  contributions: number;

  type: string;

  id?: number;

  avatar_url?: string;

  email?: string;

  events_url?: string;

  followers_url?: string;

  following_url?: string;

  gists_url?: string;

  gravatar_id?: string | null;

  html_url?: string;

  login?: string;

  name?: string;

  node_id?: string;

  organizations_url?: string;

  received_events_url?: string;

  repos_url?: string;

  site_admin?: boolean;

  starred_url?: string;

  subscriptions_url?: string;

  url?: string;
}

export type ContributorListResponse = Array<Contributor>;

export interface ContributorListParams {
  /**
   * Path param: The account owner of the repository. The name is not case sensitive.
   */
  owner: string;

  /**
   * Path param: The name of the repository. The name is not case sensitive.
   */
  repo: string;

  /**
   * Query param: Set to `1` or `true` to include anonymous contributors in results.
   */
  anon?: string;

  /**
   * Query param: Page number of the results to fetch.
   */
  page?: number;

  /**
   * Query param: The number of results per page (max 100).
   */
  per_page?: number;
}

export namespace Contributors {
  export import Contributor = ContributorsAPI.Contributor;
  export import ContributorListResponse = ContributorsAPI.ContributorListResponse;
  export import ContributorListParams = ContributorsAPI.ContributorListParams;
}
