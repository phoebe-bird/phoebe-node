// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@stainless-api/github-internal/core';
import { APIResource } from '@stainless-api/github-internal/resource';
import * as IssuesAPI from '@stainless-api/github-internal/resources/repos/issues';
import * as ReposAPI from '@stainless-api/github-internal/resources/repos/repos';
import * as UsersAPI from '@stainless-api/github-internal/resources/users/users';

export class Issues extends APIResource {
  /**
   * Any user with pull access to a repository can create an issue. If
   * [issues are disabled in the repository](https://docs.github.com/articles/disabling-issues/),
   * the API returns a `410 Gone` status.
   *
   * This endpoint triggers
   * [notifications](https://docs.github.com/enterprise-server@3.6/github/managing-subscriptions-and-notifications-on-github/about-notifications).
   * Creating content too quickly using this endpoint may result in secondary rate
   * limiting. See
   * "[Secondary rate limits](https://docs.github.com/enterprise-server@3.6/rest/overview/resources-in-the-rest-api#secondary-rate-limits)"
   * and
   * "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.6/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)"
   * for details.
   */
  create(params: IssueCreateParams, options?: Core.RequestOptions): Core.APIPromise<Issue> {
    const { owner, repo, ...body } = params;
    return this._client.post(`/repos/${owner}/${repo}/issues`, { body, ...options });
  }
}

/**
 * Issues are a great way to keep track of tasks, enhancements, and bugs for your
 * projects.
 */
export interface Issue {
  id: number;

  /**
   * Simple User
   */
  assignee: Issue.Assignee | null;

  /**
   * How the author is associated with the repository.
   */
  author_association:
    | 'COLLABORATOR'
    | 'CONTRIBUTOR'
    | 'FIRST_TIMER'
    | 'FIRST_TIME_CONTRIBUTOR'
    | 'MANNEQUIN'
    | 'MEMBER'
    | 'NONE'
    | 'OWNER';

  closed_at: string | null;

  comments: number;

  comments_url: string;

  created_at: string;

  events_url: string;

  html_url: string;

  /**
   * Labels to associate with this issue; pass one or more label names to replace the
   * set of labels on this issue; send an empty array to clear all labels from the
   * issue; note that the labels are silently dropped for users without push access
   * to the repository
   */
  labels: Array<string>;

  labels_url: string;

  locked: boolean;

  /**
   * A collection of related issues and pull requests.
   */
  milestone: Issue.Milestone | null;

  node_id: string;

  /**
   * Number uniquely identifying the issue within its repository
   */
  number: number;

  repository_url: string;

  /**
   * State of the issue; either 'open' or 'closed'
   */
  state: string;

  /**
   * Title of the issue
   */
  title: string;

  updated_at: string;

  /**
   * URL for the issue
   */
  url: string;

  /**
   * Simple User
   */
  user: Issue.User | null;

  active_lock_reason?: string | null;

  assignees?: Array<UsersAPI.SimpleUser> | null;

  /**
   * Contents of the issue
   */
  body?: string | null;

  body_html?: string;

  body_text?: string;

  /**
   * Simple User
   */
  closed_by?: Issue.ClosedBy | null;

  draft?: boolean;

  /**
   * GitHub apps are a new way to extend GitHub. They can be installed directly on
   * organizations and user accounts and granted access to specific repositories.
   * They come with granular permissions and built-in webhooks. GitHub apps are first
   * class actors within GitHub.
   */
  performed_via_github_app?: Issue.PerformedViaGitHubApp | null;

  pull_request?: Issue.PullRequest;

  reactions?: Issue.Reactions;

  /**
   * A git repository
   */
  repository?: ReposAPI.Repository;

  /**
   * The reason for the current state
   */
  state_reason?: string | null;

  timeline_url?: string;
}

export namespace Issue {
  /**
   * Simple User
   */
  export interface Assignee {
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

  /**
   * A collection of related issues and pull requests.
   */
  export interface Milestone {
    id: number;

    closed_at: string | null;

    closed_issues: number;

    created_at: string;

    /**
     * Simple User
     */
    creator: Milestone.Creator | null;

    description: string | null;

    due_on: string | null;

    html_url: string;

    labels_url: string;

    node_id: string;

    /**
     * The number of the milestone.
     */
    number: number;

    open_issues: number;

    /**
     * The state of the milestone.
     */
    state: 'open' | 'closed';

    /**
     * The title of the milestone.
     */
    title: string;

    updated_at: string;

    url: string;
  }

  export namespace Milestone {
    /**
     * Simple User
     */
    export interface Creator {
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
  }

  /**
   * Simple User
   */
  export interface User {
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

  /**
   * Simple User
   */
  export interface ClosedBy {
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

  /**
   * GitHub apps are a new way to extend GitHub. They can be installed directly on
   * organizations and user accounts and granted access to specific repositories.
   * They come with granular permissions and built-in webhooks. GitHub apps are first
   * class actors within GitHub.
   */
  export interface PerformedViaGitHubApp {
    /**
     * Unique identifier of the GitHub app
     */
    id: number;

    created_at: string;

    description: string | null;

    /**
     * The list of events for the GitHub app
     */
    events: Array<string>;

    external_url: string;

    html_url: string;

    /**
     * The name of the GitHub app
     */
    name: string;

    node_id: string;

    /**
     * Simple User
     */
    owner: PerformedViaGitHubApp.Owner | null;

    /**
     * The set of permissions for the GitHub app
     */
    permissions: PerformedViaGitHubApp.Permissions;

    updated_at: string;

    client_id?: string;

    client_secret?: string;

    /**
     * The number of installations associated with the GitHub app
     */
    installations_count?: number;

    pem?: string;

    /**
     * The slug name of the GitHub app
     */
    slug?: string;

    webhook_secret?: string | null;
  }

  export namespace PerformedViaGitHubApp {
    /**
     * Simple User
     */
    export interface Owner {
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

    /**
     * The set of permissions for the GitHub app
     */
    export interface Permissions {
      checks?: string;

      contents?: string;

      deployments?: string;

      issues?: string;

      metadata?: string;
      [k: string]: string | undefined;
    }
  }

  export interface PullRequest {
    diff_url: string | null;

    html_url: string | null;

    patch_url: string | null;

    url: string | null;

    merged_at?: string | null;
  }

  export interface Reactions {
    '-1': number;

    '+1': number;

    confused: number;

    eyes: number;

    heart: number;

    hooray: number;

    laugh: number;

    rocket: number;

    total_count: number;

    url: string;
  }
}

export interface IssueCreateParams {
  /**
   * Path param: The account owner of the repository. The name is not case sensitive.
   */
  owner: string;

  /**
   * Path param: The name of the repository. The name is not case sensitive.
   */
  repo: string;

  /**
   * Body param: The title of the issue.
   */
  title: string | number;

  /**
   * Body param: Login for the user that this issue should be assigned to. _NOTE:
   * Only users with push access can set the assignee for new issues. The assignee is
   * silently dropped otherwise. **This field is deprecated.**_
   */
  assignee?: string | null;

  /**
   * Body param: Logins for Users to assign to this issue. _NOTE: Only users with
   * push access can set assignees for new issues. Assignees are silently dropped
   * otherwise._
   */
  assignees?: Array<string>;

  /**
   * Body param: The contents of the issue.
   */
  body?: string;

  /**
   * Body param: Labels to associate with this issue. _NOTE: Only users with push
   * access can set labels for new issues. Labels are silently dropped otherwise._
   */
  labels?: Array<string>;

  /**
   * Body param: The `number` of the milestone to associate this issue with. _NOTE:
   * Only users with push access can set the milestone for new issues. The milestone
   * is silently dropped otherwise._
   */
  milestone?: string | number | null;
}

export namespace Issues {
  export import Issue = IssuesAPI.Issue;
  export import IssueCreateParams = IssuesAPI.IssueCreateParams;
}
