// File generated from our OpenAPI spec by Stainless.

import * as Core from '@stainless-api/github-internal/core';
import { APIResource } from '@stainless-api/github-internal/resource';
import * as PullsAPI from '@stainless-api/github-internal/resources/repos/pulls';
import * as ReposAPI from '@stainless-api/github-internal/resources/repos/repos';
import * as TeamsAPI from '@stainless-api/github-internal/resources/repos/teams';
import * as UsersAPI from '@stainless-api/github-internal/resources/users/users';

export class Pulls extends APIResource {
  /**
   * Draft pull requests are available in public repositories with GitHub Free and
   * GitHub Free for organizations, GitHub Pro, and legacy per-repository billing
   * plans, and in public and private repositories with GitHub Team and GitHub
   * Enterprise Cloud. For more information, see
   * [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)
   * in the GitHub Help documentation.
   *
   * To open or update a pull request in a public repository, you must have write
   * access to the head or the source branch. For organization-owned repositories,
   * you must be a member of the organization that owns the repository to open or
   * update a pull request.
   *
   * This endpoint triggers
   * [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications).
   * Creating content too quickly using this endpoint may result in secondary rate
   * limiting. See
   * "[Secondary rate limits](https://docs.github.com/enterprise-server@3.6/rest/overview/resources-in-the-rest-api#secondary-rate-limits)"
   * and
   * "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.6/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)"
   * for details.
   */
  create(params: PullCreateParams, options?: Core.RequestOptions): Core.APIPromise<PullRequest> {
    const { owner, repo, ...body } = params;
    return this._client.post(`/repos/${owner}/${repo}/pulls`, { body, ...options });
  }

  /**
   * Draft pull requests are available in public repositories with GitHub Free and
   * GitHub Free for organizations, GitHub Pro, and legacy per-repository billing
   * plans, and in public and private repositories with GitHub Team and GitHub
   * Enterprise Cloud. For more information, see
   * [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)
   * in the GitHub Help documentation.
   *
   * Lists details of a pull request by providing its number.
   *
   * When you get,
   * [create](https://docs.github.com/enterprise-server@3.6/rest/reference/pulls/#create-a-pull-request),
   * or
   * [edit](https://docs.github.com/enterprise-server@3.6/rest/reference/pulls#update-a-pull-request)
   * a pull request, GitHub Enterprise Server creates a merge commit to test whether
   * the pull request can be automatically merged into the base branch. This test
   * commit is not added to the base branch or the head branch. You can review the
   * status of the test commit using the `mergeable` key. For more information, see
   * "[Checking mergeability of pull requests](https://docs.github.com/enterprise-server@3.6/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".
   *
   * The value of the `mergeable` attribute can be `true`, `false`, or `null`. If the
   * value is `null`, then GitHub Enterprise Server has started a background job to
   * compute the mergeability. After giving the job time to complete, resubmit the
   * request. When the job finishes, you will see a non-`null` value for the
   * `mergeable` attribute in the response. If `mergeable` is `true`, then
   * `merge_commit_sha` will be the SHA of the _test_ merge commit.
   *
   * The value of the `merge_commit_sha` attribute changes depending on the state of
   * the pull request. Before merging a pull request, the `merge_commit_sha`
   * attribute holds the SHA of the _test_ merge commit. After merging a pull
   * request, the `merge_commit_sha` attribute changes depending on how you merged
   * the pull request:
   *
   * - If merged as a
   *   [merge commit](https://docs.github.com/articles/about-merge-methods-on-github/),
   *   `merge_commit_sha` represents the SHA of the merge commit.
   * - If merged via a
   *   [squash](https://docs.github.com/articles/about-merge-methods-on-github/#squashing-your-merge-commits),
   *   `merge_commit_sha` represents the SHA of the squashed commit on the base
   *   branch.
   * - If
   *   [rebased](https://docs.github.com/articles/about-merge-methods-on-github/#rebasing-and-merging-your-commits),
   *   `merge_commit_sha` represents the commit that the base branch was updated to.
   *
   * Pass the appropriate
   * [media type](https://docs.github.com/enterprise-server@3.6/rest/overview/media-types/#commits-commit-comparison-and-pull-requests)
   * to fetch diff and patch formats.
   */
  retrieve(
    pullNumber: number,
    params: PullRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PullRequest> {
    const { owner, repo } = params;
    return this._client.get(`/repos/${owner}/${repo}/pulls/${pullNumber}`, options);
  }

  /**
   * Draft pull requests are available in public repositories with GitHub Free and
   * GitHub Free for organizations, GitHub Pro, and legacy per-repository billing
   * plans, and in public and private repositories with GitHub Team and GitHub
   * Enterprise Cloud. For more information, see
   * [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)
   * in the GitHub Help documentation.
   *
   * To open or update a pull request in a public repository, you must have write
   * access to the head or the source branch. For organization-owned repositories,
   * you must be a member of the organization that owns the repository to open or
   * update a pull request.
   */
  update(
    pullNumber: number,
    params: PullUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PullRequest> {
    const { owner, repo, ...body } = params;
    return this._client.patch(`/repos/${owner}/${repo}/pulls/${pullNumber}`, { body, ...options });
  }

  /**
   * Draft pull requests are available in public repositories with GitHub Free and
   * GitHub Free for organizations, GitHub Pro, and legacy per-repository billing
   * plans, and in public and private repositories with GitHub Team and GitHub
   * Enterprise Cloud. For more information, see
   * [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)
   * in the GitHub Help documentation.
   */
  list(params: PullListParams, options?: Core.RequestOptions): Core.APIPromise<PullListResponse> {
    const { owner, repo, ...query } = params;
    return this._client.get(`/repos/${owner}/${repo}/pulls`, { query, ...options });
  }
}

/**
 * Pull requests let you tell others about changes you've pushed to a repository on
 * GitHub. Once a pull request is sent, interested parties can review the set of
 * changes, discuss potential modifications, and even push follow-up commits if
 * necessary.
 */
export interface PullRequest {
  id: number;

  _links: PullRequest._Links;

  additions: number;

  /**
   * Simple User
   */
  assignee: PullRequest.Assignee | null;

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

  /**
   * The status of auto merging a pull request.
   */
  auto_merge: PullRequest.AutoMerge | null;

  base: PullRequest.Base;

  body: string | null;

  changed_files: number;

  closed_at: string | null;

  comments: number;

  comments_url: string;

  commits: number;

  commits_url: string;

  created_at: string;

  deletions: number;

  diff_url: string;

  head: PullRequest.Head;

  html_url: string;

  issue_url: string;

  labels: Array<PullRequest.Label>;

  locked: boolean;

  /**
   * Indicates whether maintainers can modify the pull request.
   */
  maintainer_can_modify: boolean;

  merge_commit_sha: string | null;

  mergeable: boolean | null;

  mergeable_state: string;

  merged: boolean;

  merged_at: string | null;

  /**
   * Simple User
   */
  merged_by: PullRequest.MergedBy | null;

  /**
   * A collection of related issues and pull requests.
   */
  milestone: PullRequest.Milestone | null;

  node_id: string;

  /**
   * Number uniquely identifying the pull request within its repository.
   */
  number: number;

  patch_url: string;

  review_comment_url: string;

  review_comments: number;

  review_comments_url: string;

  /**
   * State of this Pull Request. Either `open` or `closed`.
   */
  state: 'open' | 'closed';

  statuses_url: string;

  /**
   * The title of the pull request.
   */
  title: string;

  updated_at: string;

  url: string;

  /**
   * Simple User
   */
  user: PullRequest.User | null;

  active_lock_reason?: string | null;

  assignees?: Array<UsersAPI.SimpleUser> | null;

  /**
   * Indicates whether or not the pull request is a draft.
   */
  draft?: boolean;

  rebaseable?: boolean | null;

  requested_reviewers?: Array<UsersAPI.SimpleUser> | null;

  requested_teams?: Array<PullRequest.RequestedTeam> | null;
}

export namespace PullRequest {
  export interface _Links {
    /**
     * Hypermedia Link
     */
    comments: _Links.Comments;

    /**
     * Hypermedia Link
     */
    commits: _Links.Commits;

    /**
     * Hypermedia Link
     */
    html: _Links.HTML;

    /**
     * Hypermedia Link
     */
    issue: _Links.Issue;

    /**
     * Hypermedia Link
     */
    review_comment: _Links.ReviewComment;

    /**
     * Hypermedia Link
     */
    review_comments: _Links.ReviewComments;

    /**
     * Hypermedia Link
     */
    self: _Links.Self;

    /**
     * Hypermedia Link
     */
    statuses: _Links.Statuses;
  }

  export namespace _Links {
    /**
     * Hypermedia Link
     */
    export interface Comments {
      href: string;
    }

    /**
     * Hypermedia Link
     */
    export interface Commits {
      href: string;
    }

    /**
     * Hypermedia Link
     */
    export interface HTML {
      href: string;
    }

    /**
     * Hypermedia Link
     */
    export interface Issue {
      href: string;
    }

    /**
     * Hypermedia Link
     */
    export interface ReviewComment {
      href: string;
    }

    /**
     * Hypermedia Link
     */
    export interface ReviewComments {
      href: string;
    }

    /**
     * Hypermedia Link
     */
    export interface Self {
      href: string;
    }

    /**
     * Hypermedia Link
     */
    export interface Statuses {
      href: string;
    }
  }

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
   * The status of auto merging a pull request.
   */
  export interface AutoMerge {
    /**
     * Commit message for the merge commit.
     */
    commit_message: string;

    /**
     * Title for the merge commit message.
     */
    commit_title: string;

    /**
     * Simple User
     */
    enabled_by: UsersAPI.SimpleUser;

    /**
     * The merge method to use.
     */
    merge_method: 'merge' | 'squash' | 'rebase';
  }

  export interface Base {
    label: string;

    ref: string;

    repo: Base.Repo;

    sha: string;

    user: Base.User;
  }

  export namespace Base {
    export interface Repo {
      id: number;

      archive_url: string;

      archived: boolean;

      assignees_url: string;

      blobs_url: string;

      branches_url: string;

      clone_url: string;

      collaborators_url: string;

      comments_url: string;

      commits_url: string;

      compare_url: string;

      contents_url: string;

      contributors_url: string;

      created_at: string;

      default_branch: string;

      deployments_url: string;

      description: string | null;

      disabled: boolean;

      downloads_url: string;

      events_url: string;

      fork: boolean;

      forks: number;

      forks_count: number;

      forks_url: string;

      full_name: string;

      git_commits_url: string;

      git_refs_url: string;

      git_tags_url: string;

      git_url: string;

      has_downloads: boolean;

      has_issues: boolean;

      has_pages: boolean;

      has_projects: boolean;

      has_wiki: boolean;

      homepage: string | null;

      hooks_url: string;

      html_url: string;

      issue_comment_url: string;

      issue_events_url: string;

      issues_url: string;

      keys_url: string;

      labels_url: string;

      language: string | null;

      languages_url: string;

      /**
       * License Simple
       */
      license: Repo.License | null;

      merges_url: string;

      milestones_url: string;

      mirror_url: string | null;

      name: string;

      node_id: string;

      notifications_url: string;

      open_issues: number;

      open_issues_count: number;

      owner: Repo.Owner;

      private: boolean;

      pulls_url: string;

      pushed_at: string;

      releases_url: string;

      size: number;

      ssh_url: string;

      stargazers_count: number;

      stargazers_url: string;

      statuses_url: string;

      subscribers_url: string;

      subscription_url: string;

      svn_url: string;

      tags_url: string;

      teams_url: string;

      trees_url: string;

      updated_at: string;

      url: string;

      watchers: number;

      watchers_count: number;

      allow_forking?: boolean;

      allow_merge_commit?: boolean;

      allow_rebase_merge?: boolean;

      allow_squash_merge?: boolean;

      is_template?: boolean;

      master_branch?: string;

      permissions?: Repo.Permissions;

      temp_clone_token?: string;

      topics?: Array<string>;

      /**
       * The repository visibility: public, private, or internal.
       */
      visibility?: string;
    }

    export namespace Repo {
      /**
       * License Simple
       */
      export interface License {
        key: string;

        name: string;

        node_id: string;

        spdx_id: string | null;

        url: string | null;

        html_url?: string;
      }

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
      }

      export interface Permissions {
        admin: boolean;

        pull: boolean;

        push: boolean;

        maintain?: boolean;

        triage?: boolean;
      }
    }

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
    }
  }

  export interface Head {
    label: string;

    ref: string;

    repo: Head.Repo | null;

    sha: string;

    user: Head.User;
  }

  export namespace Head {
    export interface Repo {
      id: number;

      archive_url: string;

      archived: boolean;

      assignees_url: string;

      blobs_url: string;

      branches_url: string;

      clone_url: string;

      collaborators_url: string;

      comments_url: string;

      commits_url: string;

      compare_url: string;

      contents_url: string;

      contributors_url: string;

      created_at: string;

      default_branch: string;

      deployments_url: string;

      description: string | null;

      disabled: boolean;

      downloads_url: string;

      events_url: string;

      fork: boolean;

      forks: number;

      forks_count: number;

      forks_url: string;

      full_name: string;

      git_commits_url: string;

      git_refs_url: string;

      git_tags_url: string;

      git_url: string;

      has_downloads: boolean;

      has_issues: boolean;

      has_pages: boolean;

      has_projects: boolean;

      has_wiki: boolean;

      homepage: string | null;

      hooks_url: string;

      html_url: string;

      issue_comment_url: string;

      issue_events_url: string;

      issues_url: string;

      keys_url: string;

      labels_url: string;

      language: string | null;

      languages_url: string;

      license: Repo.License | null;

      merges_url: string;

      milestones_url: string;

      mirror_url: string | null;

      name: string;

      node_id: string;

      notifications_url: string;

      open_issues: number;

      open_issues_count: number;

      owner: Repo.Owner;

      private: boolean;

      pulls_url: string;

      pushed_at: string;

      releases_url: string;

      size: number;

      ssh_url: string;

      stargazers_count: number;

      stargazers_url: string;

      statuses_url: string;

      subscribers_url: string;

      subscription_url: string;

      svn_url: string;

      tags_url: string;

      teams_url: string;

      trees_url: string;

      updated_at: string;

      url: string;

      watchers: number;

      watchers_count: number;

      allow_forking?: boolean;

      allow_merge_commit?: boolean;

      allow_rebase_merge?: boolean;

      allow_squash_merge?: boolean;

      is_template?: boolean;

      master_branch?: string;

      permissions?: Repo.Permissions;

      temp_clone_token?: string;

      topics?: Array<string>;

      /**
       * The repository visibility: public, private, or internal.
       */
      visibility?: string;
    }

    export namespace Repo {
      export interface License {
        key: string;

        name: string;

        node_id: string;

        spdx_id: string | null;

        url: string | null;
      }

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
      }

      export interface Permissions {
        admin: boolean;

        pull: boolean;

        push: boolean;

        maintain?: boolean;

        triage?: boolean;
      }
    }

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
    }
  }

  export interface Label {
    id: number;

    color: string;

    default: boolean;

    description: string | null;

    name: string;

    node_id: string;

    url: string;
  }

  /**
   * Simple User
   */
  export interface MergedBy {
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
   * Groups of organization members that gives permissions on specified repositories.
   */
  export interface RequestedTeam {
    /**
     * Unique identifier of the team
     */
    id: number;

    /**
     * Description of the team
     */
    description: string | null;

    html_url: string;

    members_url: string;

    /**
     * Name of the team
     */
    name: string;

    node_id: string;

    /**
     * Permission that the team will have for its repositories
     */
    permission: string;

    repositories_url: string;

    slug: string;

    /**
     * URL for the team
     */
    url: string;

    /**
     * Distinguished Name (DN) that team maps to within LDAP environment
     */
    ldap_dn?: string;

    /**
     * The level of privacy this team should have
     */
    privacy?: string;
  }
}

/**
 * Pull Request Simple
 */
export interface PullRequestSimple {
  id: number;

  _links: PullRequestSimple._Links;

  /**
   * Simple User
   */
  assignee: PullRequestSimple.Assignee | null;

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

  /**
   * The status of auto merging a pull request.
   */
  auto_merge: PullRequestSimple.AutoMerge | null;

  base: PullRequestSimple.Base;

  body: string | null;

  closed_at: string | null;

  comments_url: string;

  commits_url: string;

  created_at: string;

  diff_url: string;

  head: PullRequestSimple.Head;

  html_url: string;

  issue_url: string;

  labels: Array<PullRequestSimple.Label>;

  locked: boolean;

  merge_commit_sha: string | null;

  merged_at: string | null;

  /**
   * A collection of related issues and pull requests.
   */
  milestone: PullRequestSimple.Milestone | null;

  node_id: string;

  number: number;

  patch_url: string;

  review_comment_url: string;

  review_comments_url: string;

  state: string;

  statuses_url: string;

  title: string;

  updated_at: string;

  url: string;

  /**
   * Simple User
   */
  user: PullRequestSimple.User | null;

  active_lock_reason?: string | null;

  assignees?: Array<UsersAPI.SimpleUser> | null;

  /**
   * Indicates whether or not the pull request is a draft.
   */
  draft?: boolean;

  requested_reviewers?: Array<UsersAPI.SimpleUser> | null;

  requested_teams?: Array<TeamsAPI.Team> | null;
}

export namespace PullRequestSimple {
  export interface _Links {
    /**
     * Hypermedia Link
     */
    comments: _Links.Comments;

    /**
     * Hypermedia Link
     */
    commits: _Links.Commits;

    /**
     * Hypermedia Link
     */
    html: _Links.HTML;

    /**
     * Hypermedia Link
     */
    issue: _Links.Issue;

    /**
     * Hypermedia Link
     */
    review_comment: _Links.ReviewComment;

    /**
     * Hypermedia Link
     */
    review_comments: _Links.ReviewComments;

    /**
     * Hypermedia Link
     */
    self: _Links.Self;

    /**
     * Hypermedia Link
     */
    statuses: _Links.Statuses;
  }

  export namespace _Links {
    /**
     * Hypermedia Link
     */
    export interface Comments {
      href: string;
    }

    /**
     * Hypermedia Link
     */
    export interface Commits {
      href: string;
    }

    /**
     * Hypermedia Link
     */
    export interface HTML {
      href: string;
    }

    /**
     * Hypermedia Link
     */
    export interface Issue {
      href: string;
    }

    /**
     * Hypermedia Link
     */
    export interface ReviewComment {
      href: string;
    }

    /**
     * Hypermedia Link
     */
    export interface ReviewComments {
      href: string;
    }

    /**
     * Hypermedia Link
     */
    export interface Self {
      href: string;
    }

    /**
     * Hypermedia Link
     */
    export interface Statuses {
      href: string;
    }
  }

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
   * The status of auto merging a pull request.
   */
  export interface AutoMerge {
    /**
     * Commit message for the merge commit.
     */
    commit_message: string;

    /**
     * Title for the merge commit message.
     */
    commit_title: string;

    /**
     * Simple User
     */
    enabled_by: UsersAPI.SimpleUser;

    /**
     * The merge method to use.
     */
    merge_method: 'merge' | 'squash' | 'rebase';
  }

  export interface Base {
    label: string;

    ref: string;

    /**
     * A git repository
     */
    repo: ReposAPI.Repository;

    sha: string;

    /**
     * Simple User
     */
    user: Base.User | null;
  }

  export namespace Base {
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
  }

  export interface Head {
    label: string;

    ref: string;

    /**
     * A git repository
     */
    repo: ReposAPI.Repository;

    sha: string;

    /**
     * Simple User
     */
    user: Head.User | null;
  }

  export namespace Head {
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
  }

  export interface Label {
    id: number;

    color: string;

    default: boolean;

    description: string;

    name: string;

    node_id: string;

    url: string;
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
}

export type PullListResponse = Array<PullRequestSimple>;

export interface PullCreateParams {
  /**
   * Path param: The account owner of the repository. The name is not case sensitive.
   */
  owner: string;

  /**
   * Path param: The name of the repository. The name is not case sensitive.
   */
  repo: string;

  /**
   * Body param: The name of the branch you want the changes pulled into. This should
   * be an existing branch on the current repository. You cannot submit a pull
   * request to one repository that requests a merge to a base of another repository.
   */
  base: string;

  /**
   * Body param: The name of the branch where your changes are implemented. For
   * cross-repository pull requests in the same network, namespace `head` with a user
   * like this: `username:branch`.
   */
  head: string;

  /**
   * Body param: The contents of the pull request.
   */
  body?: string;

  /**
   * Body param: Indicates whether the pull request is a draft. See
   * "[Draft Pull Requests](https://docs.github.com/en/articles/about-pull-requests#draft-pull-requests)"
   * in the GitHub Help documentation to learn more.
   */
  draft?: boolean;

  /**
   * Body param: An issue in the repository to convert to a pull request. The issue
   * title, body, and comments will become the title, body, and comments on the new
   * pull request. Required unless `title` is specified.
   */
  issue?: number;

  /**
   * Body param: Indicates whether
   * [maintainers can modify](https://docs.github.com/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork/)
   * the pull request.
   */
  maintainer_can_modify?: boolean;

  /**
   * Body param: The title of the new pull request. Required unless `issue` is
   * specified.
   */
  title?: string;
}

export interface PullRetrieveParams {
  /**
   * The account owner of the repository. The name is not case sensitive.
   */
  owner: string;

  /**
   * The name of the repository. The name is not case sensitive.
   */
  repo: string;
}

export interface PullUpdateParams {
  /**
   * Path param: The account owner of the repository. The name is not case sensitive.
   */
  owner: string;

  /**
   * Path param: The name of the repository. The name is not case sensitive.
   */
  repo: string;

  /**
   * Body param: The name of the branch you want your changes pulled into. This
   * should be an existing branch on the current repository. You cannot update the
   * base branch on a pull request to point to another repository.
   */
  base?: string;

  /**
   * Body param: The contents of the pull request.
   */
  body?: string;

  /**
   * Body param: Indicates whether
   * [maintainers can modify](https://docs.github.com/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork/)
   * the pull request.
   */
  maintainer_can_modify?: boolean;

  /**
   * Body param: State of this Pull Request. Either `open` or `closed`.
   */
  state?: 'open' | 'closed';

  /**
   * Body param: The title of the pull request.
   */
  title?: string;
}

export interface PullListParams {
  /**
   * Path param: The account owner of the repository. The name is not case sensitive.
   */
  owner: string;

  /**
   * Path param: The name of the repository. The name is not case sensitive.
   */
  repo: string;

  /**
   * Query param: Filter pulls by base branch name. Example: `gh-pages`.
   */
  base?: string;

  /**
   * Query param: The direction of the sort. Can be either `asc` or `desc`. Default:
   * `desc` when sort is `created` or sort is not specified, otherwise `asc`.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Filter pulls by head user or head organization and branch name in
   * the format of `user:ref-name` or `organization:ref-name`. For example:
   * `github:new-script-format` or `octocat:test-branch`.
   */
  head?: string;

  /**
   * Query param: Page number of the results to fetch.
   */
  page?: number;

  /**
   * Query param: The number of results per page (max 100).
   */
  per_page?: number;

  /**
   * Query param: What to sort results by. Can be either `created`, `updated`,
   * `popularity` (comment count) or `long-running` (age, filtering by pulls updated
   * in the last month).
   */
  sort?: 'created' | 'updated' | 'popularity' | 'long-running';

  /**
   * Query param: Either `open`, `closed`, or `all` to filter by state.
   */
  state?: 'open' | 'closed' | 'all';
}

export namespace Pulls {
  export import PullRequest = PullsAPI.PullRequest;
  export import PullRequestSimple = PullsAPI.PullRequestSimple;
  export import PullListResponse = PullsAPI.PullListResponse;
  export import PullCreateParams = PullsAPI.PullCreateParams;
  export import PullRetrieveParams = PullsAPI.PullRetrieveParams;
  export import PullUpdateParams = PullsAPI.PullUpdateParams;
  export import PullListParams = PullsAPI.PullListParams;
}
