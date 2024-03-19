// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@stainless-api/github-internal/core';
import { APIResource } from '@stainless-api/github-internal/resource';
import { isRequestOptions } from '@stainless-api/github-internal/core';
import * as ReposAPI from '@stainless-api/github-internal/resources/repos/repos';
import * as CodeownersAPI from '@stainless-api/github-internal/resources/repos/codeowners';
import * as CommitsAPI from '@stainless-api/github-internal/resources/repos/commits';
import * as ContributorsAPI from '@stainless-api/github-internal/resources/repos/contributors';
import * as ForksAPI from '@stainless-api/github-internal/resources/repos/forks';
import * as IssuesAPI from '@stainless-api/github-internal/resources/repos/issues';
import * as LanguagesAPI from '@stainless-api/github-internal/resources/repos/languages';
import * as LFSAPI from '@stainless-api/github-internal/resources/repos/lfs';
import * as PullsAPI from '@stainless-api/github-internal/resources/repos/pulls';
import * as TeamsAPI from '@stainless-api/github-internal/resources/repos/teams';
import * as TopicsAPI from '@stainless-api/github-internal/resources/repos/topics';
import * as UsersAPI from '@stainless-api/github-internal/resources/users/users';
import * as GitAPI from '@stainless-api/github-internal/resources/repos/git/git';
import * as TagsAPI from '@stainless-api/github-internal/resources/repos/tags/tags';

export class Repos extends APIResource {
  issues: IssuesAPI.Issues = new IssuesAPI.Issues(this._client);
  commits: CommitsAPI.Commits = new CommitsAPI.Commits(this._client);
  forks: ForksAPI.Forks = new ForksAPI.Forks(this._client);
  contributors: ContributorsAPI.Contributors = new ContributorsAPI.Contributors(this._client);
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);
  topics: TopicsAPI.Topics = new TopicsAPI.Topics(this._client);
  teams: TeamsAPI.Teams = new TeamsAPI.Teams(this._client);
  languages: LanguagesAPI.Languages = new LanguagesAPI.Languages(this._client);
  lfs: LFSAPI.LFS = new LFSAPI.LFS(this._client);
  codeowners: CodeownersAPI.Codeowners = new CodeownersAPI.Codeowners(this._client);
  pulls: PullsAPI.Pulls = new PullsAPI.Pulls(this._client);
  git: GitAPI.Git = new GitAPI.Git(this._client);

  /**
   * Creates a new repository for the authenticated user.
   *
   * **OAuth scope requirements**
   *
   * When using
   * [OAuth](https://docs.github.com/enterprise-server@3.6/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/),
   * authorizations must include:
   *
   * - `public_repo` scope or `repo` scope to create a public repository. Note: For
   *   GitHub AE, use `repo` scope to create an internal repository.
   * - `repo` scope to create a private repository.
   */
  create(body: RepoCreateParams, options?: Core.RequestOptions): Core.APIPromise<Repository> {
    return this._client.post('/user/repos', { body, ...options });
  }

  /**
   * The `parent` and `source` objects are present when the repository is a fork.
   * `parent` is the repository this repository was forked from, `source` is the
   * ultimate source for the network.
   */
  retrieve(params: RepoRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<FullRepository> {
    const { owner, repo } = params;
    return this._client.get(`/repos/${owner}/${repo}`, options);
  }

  /**
   * **Note**: To edit a repository's topics, use the
   * [Replace all repository topics](https://docs.github.com/enterprise-server@3.6/rest/reference/repos#replace-all-repository-topics)
   * endpoint.
   */
  update(params: RepoUpdateParams, options?: Core.RequestOptions): Core.APIPromise<FullRepository> {
    const { owner, repo, ...body } = params;
    return this._client.patch(`/repos/${owner}/${repo}`, { body, ...options });
  }

  /**
   * Deleting a repository requires admin access. If OAuth is used, the `delete_repo`
   * scope is required.
   *
   * If an organization owner has configured the organization to prevent members from
   * deleting organization-owned repositories, you will get a `403 Forbidden`
   * response.
   */
  delete(params: RepoDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { owner, repo } = params;
    return this._client.delete(`/repos/${owner}/${repo}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Check if a repository is starred by the authenticated user
   */
  checkStarred(params: RepoCheckStarredParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { owner, repo } = params;
    return this._client.get(`/user/starred/${owner}/${repo}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Creates a new repository in the specified organization. The authenticated user
   * must be a member of the organization.
   *
   * **OAuth scope requirements**
   *
   * When using
   * [OAuth](https://docs.github.com/enterprise-server@3.6/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/),
   * authorizations must include:
   *
   * - `public_repo` scope or `repo` scope to create a public repository. Note: For
   *   GitHub AE, use `repo` scope to create an internal repository.
   * - `repo` scope to create a private repository
   */
  createForOrg(
    org: string,
    body: RepoCreateForOrgParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Repository> {
    return this._client.post(`/orgs/${org}/repos`, { body, ...options });
  }

  /**
   * Creates a new repository using a repository template. Use the `template_owner`
   * and `template_repo` route parameters to specify the repository to use as the
   * template. The authenticated user must own or be a member of an organization that
   * owns the repository. To check if a repository is available to use as a template,
   * get the repository's information using the
   * [Get a repository](https://docs.github.com/enterprise-server@3.6/rest/reference/repos#get-a-repository)
   * endpoint and check that the `is_template` key is `true`.
   *
   * **OAuth scope requirements**
   *
   * When using
   * [OAuth](https://docs.github.com/enterprise-server@3.6/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/),
   * authorizations must include:
   *
   * - `public_repo` scope or `repo` scope to create a public repository. Note: For
   *   GitHub AE, use `repo` scope to create an internal repository.
   * - `repo` scope to create a private repository
   */
  createFromTemplate(
    templateOwner: string,
    templateRepo: string,
    body: RepoCreateFromTemplateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Repository> {
    return this._client.post(`/repos/${templateOwner}/${templateRepo}/generate`, { body, ...options });
  }

  /**
   * Lists repositories that the authenticated user has explicit permission (`:read`,
   * `:write`, or `:admin`) to access.
   *
   * The authenticated user has explicit permission to access repositories they own,
   * repositories where they are a collaborator, and repositories that they can
   * access through an organization membership.
   */
  listForCurrentUser(
    query?: RepoListForCurrentUserParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RepoListForCurrentUserResponse>;
  listForCurrentUser(options?: Core.RequestOptions): Core.APIPromise<RepoListForCurrentUserResponse>;
  listForCurrentUser(
    query: RepoListForCurrentUserParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RepoListForCurrentUserResponse> {
    if (isRequestOptions(query)) {
      return this.listForCurrentUser({}, query);
    }
    return this._client.get('/user/repos', { query, ...options });
  }

  /**
   * Lists repositories for the specified organization.
   */
  listForOrg(
    org: string,
    query?: RepoListForOrgParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RepoListForOrgResponse>;
  listForOrg(org: string, options?: Core.RequestOptions): Core.APIPromise<RepoListForOrgResponse>;
  listForOrg(
    org: string,
    query: RepoListForOrgParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RepoListForOrgResponse> {
    if (isRequestOptions(query)) {
      return this.listForOrg(org, {}, query);
    }
    return this._client.get(`/orgs/${org}/repos`, { query, ...options });
  }

  /**
   * Lists public repositories for the specified user. Note: For GitHub AE, this
   * endpoint will list internal repositories for the specified user.
   */
  listForUser(
    username: string,
    query?: RepoListForUserParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RepoListForUserResponse>;
  listForUser(username: string, options?: Core.RequestOptions): Core.APIPromise<RepoListForUserResponse>;
  listForUser(
    username: string,
    query: RepoListForUserParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RepoListForUserResponse> {
    if (isRequestOptions(query)) {
      return this.listForUser(username, {}, query);
    }
    return this._client.get(`/users/${username}/repos`, { query, ...options });
  }

  /**
   * Lists all public repositories in the order that they were created.
   *
   * Note:
   *
   * - For GitHub Enterprise Server, this endpoint will only list repositories
   *   available to all users on the enterprise.
   * - Pagination is powered exclusively by the `since` parameter. Use the
   *   [Link header](https://docs.github.com/enterprise-server@3.6/rest/overview/resources-in-the-rest-api#link-header)
   *   to get the URL for the next page of repositories.
   */
  listPublic(
    query?: RepoListPublicParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RepoListPublicResponse>;
  listPublic(options?: Core.RequestOptions): Core.APIPromise<RepoListPublicResponse>;
  listPublic(
    query: RepoListPublicParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RepoListPublicResponse> {
    if (isRequestOptions(query)) {
      return this.listPublic({}, query);
    }
    return this._client.get('/repositories', { query, ...options });
  }

  /**
   * Lists repositories the authenticated user has starred.
   *
   * You can also find out _when_ stars were created by passing the following custom
   * [media type](https://docs.github.com/enterprise-server@3.6/rest/overview/media-types/)
   * via the `Accept` header:
   */
  listStarred(
    query?: RepoListStarredParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RepoListStarredResponse>;
  listStarred(options?: Core.RequestOptions): Core.APIPromise<RepoListStarredResponse>;
  listStarred(
    query: RepoListStarredParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RepoListStarredResponse> {
    if (isRequestOptions(query)) {
      return this.listStarred({}, query);
    }
    return this._client.get('/user/starred', { query, ...options });
  }

  /**
   * Note that you'll need to set `Content-Length` to zero when calling out to this
   * endpoint. For more information, see
   * "[HTTP verbs](https://docs.github.com/enterprise-server@3.6/rest/overview/resources-in-the-rest-api#http-verbs)."
   */
  star(params: RepoStarParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { owner, repo } = params;
    return this._client.put(`/user/starred/${owner}/${repo}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * A transfer request will need to be accepted by the new owner when transferring a
   * personal repository to another user. The response will contain the original
   * `owner`, and the transfer will continue asynchronously. For more details on the
   * requirements to transfer personal and organization-owned repositories, see
   * [about repository transfers](https://docs.github.com/articles/about-repository-transfers/).
   */
  transfer(params: RepoTransferParams, options?: Core.RequestOptions): Core.APIPromise<MinimalRepository> {
    const { owner, repo, ...body } = params;
    return this._client.post(`/repos/${owner}/${repo}/transfer`, { body, ...options });
  }

  /**
   * Unstar a repository for the authenticated user
   */
  unstar(params: RepoUnstarParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { owner, repo } = params;
    return this._client.delete(`/user/starred/${owner}/${repo}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

/**
 * Full Repository
 */
export interface FullRepository {
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

  /**
   * Returns whether or not this repository disabled.
   */
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
  license: FullRepository.License | null;

  merges_url: string;

  milestones_url: string;

  mirror_url: string | null;

  name: string;

  network_count: number;

  node_id: string;

  notifications_url: string;

  open_issues: number;

  open_issues_count: number;

  /**
   * Simple User
   */
  owner: UsersAPI.SimpleUser;

  private: boolean;

  pulls_url: string;

  pushed_at: string;

  releases_url: string;

  size: number;

  ssh_url: string;

  stargazers_count: number;

  stargazers_url: string;

  statuses_url: string;

  subscribers_count: number;

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

  allow_auto_merge?: boolean;

  allow_forking?: boolean;

  allow_merge_commit?: boolean;

  allow_rebase_merge?: boolean;

  allow_squash_merge?: boolean;

  allow_update_branch?: boolean;

  /**
   * Whether anonymous git access is allowed.
   */
  anonymous_access_enabled?: boolean;

  /**
   * Code of Conduct Simple
   */
  code_of_conduct?: FullRepository.CodeOfConduct;

  delete_branch_on_merge?: boolean;

  is_template?: boolean;

  master_branch?: string;

  /**
   * Simple User
   */
  organization?: FullRepository.Organization | null;

  /**
   * A git repository
   */
  parent?: Repository;

  permissions?: FullRepository.Permissions;

  security_and_analysis?: FullRepository.SecurityAndAnalysis | null;

  /**
   * A git repository
   */
  source?: Repository;

  temp_clone_token?: string | null;

  /**
   * A git repository
   */
  template_repository?: NullableRepository | null;

  topics?: Array<string>;

  use_squash_pr_title_as_default?: boolean;

  /**
   * The repository visibility: public, private, or internal.
   */
  visibility?: string;
}

export namespace FullRepository {
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

  /**
   * Code of Conduct Simple
   */
  export interface CodeOfConduct {
    html_url: string | null;

    key: string;

    name: string;

    url: string;
  }

  /**
   * Simple User
   */
  export interface Organization {
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

  export interface Permissions {
    admin: boolean;

    pull: boolean;

    push: boolean;

    maintain?: boolean;

    triage?: boolean;
  }

  export interface SecurityAndAnalysis {
    advanced_security?: SecurityAndAnalysis.AdvancedSecurity;

    secret_scanning?: SecurityAndAnalysis.SecretScanning;

    secret_scanning_push_protection?: SecurityAndAnalysis.SecretScanningPushProtection;
  }

  export namespace SecurityAndAnalysis {
    export interface AdvancedSecurity {
      status?: 'enabled' | 'disabled';
    }

    export interface SecretScanning {
      status?: 'enabled' | 'disabled';
    }

    export interface SecretScanningPushProtection {
      status?: 'enabled' | 'disabled';
    }
  }
}

/**
 * Minimal Repository
 */
export interface MinimalRepository {
  id: number;

  archive_url: string;

  assignees_url: string;

  blobs_url: string;

  branches_url: string;

  collaborators_url: string;

  comments_url: string;

  commits_url: string;

  compare_url: string;

  contents_url: string;

  contributors_url: string;

  deployments_url: string;

  description: string | null;

  downloads_url: string;

  events_url: string;

  fork: boolean;

  forks_url: string;

  full_name: string;

  git_commits_url: string;

  git_refs_url: string;

  git_tags_url: string;

  hooks_url: string;

  html_url: string;

  issue_comment_url: string;

  issue_events_url: string;

  issues_url: string;

  keys_url: string;

  labels_url: string;

  languages_url: string;

  merges_url: string;

  milestones_url: string;

  name: string;

  node_id: string;

  notifications_url: string;

  /**
   * Simple User
   */
  owner: UsersAPI.SimpleUser;

  private: boolean;

  pulls_url: string;

  releases_url: string;

  stargazers_url: string;

  statuses_url: string;

  subscribers_url: string;

  subscription_url: string;

  tags_url: string;

  teams_url: string;

  trees_url: string;

  url: string;

  allow_forking?: boolean;

  archived?: boolean;

  clone_url?: string;

  /**
   * Code Of Conduct
   */
  code_of_conduct?: MinimalRepository.CodeOfConduct;

  created_at?: string | null;

  default_branch?: string;

  delete_branch_on_merge?: boolean;

  disabled?: boolean;

  forks?: number;

  forks_count?: number;

  git_url?: string;

  has_downloads?: boolean;

  has_issues?: boolean;

  has_pages?: boolean;

  has_projects?: boolean;

  has_wiki?: boolean;

  homepage?: string | null;

  is_template?: boolean;

  language?: string | null;

  license?: MinimalRepository.License | null;

  mirror_url?: string | null;

  network_count?: number;

  open_issues?: number;

  open_issues_count?: number;

  permissions?: MinimalRepository.Permissions;

  pushed_at?: string | null;

  role_name?: string;

  size?: number;

  ssh_url?: string;

  stargazers_count?: number;

  subscribers_count?: number;

  svn_url?: string;

  temp_clone_token?: string;

  /**
   * A git repository
   */
  template_repository?: NullableRepository | null;

  topics?: Array<string>;

  updated_at?: string | null;

  visibility?: string;

  watchers?: number;

  watchers_count?: number;
}

export namespace MinimalRepository {
  /**
   * Code Of Conduct
   */
  export interface CodeOfConduct {
    html_url: string | null;

    key: string;

    name: string;

    url: string;

    body?: string;
  }

  export interface License {
    key?: string;

    name?: string;

    node_id?: string;

    spdx_id?: string;

    url?: string;
  }

  export interface Permissions {
    admin?: boolean;

    maintain?: boolean;

    pull?: boolean;

    push?: boolean;

    triage?: boolean;
  }
}

/**
 * A git repository
 */
export interface NullableRepository {
  /**
   * Unique identifier of the repository
   */
  id: number;

  archive_url: string;

  /**
   * Whether the repository is archived.
   */
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

  created_at: string | null;

  /**
   * The default branch of the repository.
   */
  default_branch: string;

  deployments_url: string;

  description: string | null;

  /**
   * Returns whether or not this repository disabled.
   */
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

  /**
   * Whether downloads are enabled.
   */
  has_downloads: boolean;

  /**
   * Whether issues are enabled.
   */
  has_issues: boolean;

  has_pages: boolean;

  /**
   * Whether projects are enabled.
   */
  has_projects: boolean;

  /**
   * Whether the wiki is enabled.
   */
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
  license: NullableRepository.License | null;

  merges_url: string;

  milestones_url: string;

  mirror_url: string | null;

  /**
   * The name of the repository.
   */
  name: string;

  node_id: string;

  notifications_url: string;

  open_issues: number;

  open_issues_count: number;

  /**
   * Simple User
   */
  owner: UsersAPI.SimpleUser;

  /**
   * Whether the repository is private or public.
   */
  private: boolean;

  pulls_url: string;

  pushed_at: string | null;

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

  updated_at: string | null;

  url: string;

  watchers: number;

  watchers_count: number;

  /**
   * Whether to allow Auto-merge to be used on pull requests.
   */
  allow_auto_merge?: boolean;

  /**
   * Whether to allow forking this repo
   */
  allow_forking?: boolean;

  /**
   * Whether to allow merge commits for pull requests.
   */
  allow_merge_commit?: boolean;

  /**
   * Whether to allow rebase merges for pull requests.
   */
  allow_rebase_merge?: boolean;

  /**
   * Whether to allow squash merges for pull requests.
   */
  allow_squash_merge?: boolean;

  /**
   * Whether or not a pull request head branch that is behind its base branch can
   * always be updated even if it is not required to be up to date before merging.
   */
  allow_update_branch?: boolean;

  /**
   * Whether to delete head branches when pull requests are merged
   */
  delete_branch_on_merge?: boolean;

  /**
   * Whether this repository acts as a template that can be used to generate new
   * repositories.
   */
  is_template?: boolean;

  master_branch?: string;

  network_count?: number;

  /**
   * Simple User
   */
  organization?: NullableRepository.Organization | null;

  permissions?: NullableRepository.Permissions;

  starred_at?: string;

  subscribers_count?: number;

  temp_clone_token?: string;

  template_repository?: NullableRepository.TemplateRepository | null;

  topics?: Array<string>;

  /**
   * Whether a squash merge commit can use the pull request title as default.
   */
  use_squash_pr_title_as_default?: boolean;

  /**
   * The repository visibility: public, private, or internal.
   */
  visibility?: string;
}

export namespace NullableRepository {
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

  /**
   * Simple User
   */
  export interface Organization {
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

  export interface Permissions {
    admin: boolean;

    pull: boolean;

    push: boolean;

    maintain?: boolean;

    triage?: boolean;
  }

  export interface TemplateRepository {
    id?: number;

    allow_auto_merge?: boolean;

    allow_merge_commit?: boolean;

    allow_rebase_merge?: boolean;

    allow_squash_merge?: boolean;

    allow_update_branch?: boolean;

    archive_url?: string;

    archived?: boolean;

    assignees_url?: string;

    blobs_url?: string;

    branches_url?: string;

    clone_url?: string;

    collaborators_url?: string;

    comments_url?: string;

    commits_url?: string;

    compare_url?: string;

    contents_url?: string;

    contributors_url?: string;

    created_at?: string;

    default_branch?: string;

    delete_branch_on_merge?: boolean;

    deployments_url?: string;

    description?: string;

    disabled?: boolean;

    downloads_url?: string;

    events_url?: string;

    fork?: boolean;

    forks_count?: number;

    forks_url?: string;

    full_name?: string;

    git_commits_url?: string;

    git_refs_url?: string;

    git_tags_url?: string;

    git_url?: string;

    has_downloads?: boolean;

    has_issues?: boolean;

    has_pages?: boolean;

    has_projects?: boolean;

    has_wiki?: boolean;

    homepage?: string;

    hooks_url?: string;

    html_url?: string;

    is_template?: boolean;

    issue_comment_url?: string;

    issue_events_url?: string;

    issues_url?: string;

    keys_url?: string;

    labels_url?: string;

    language?: string;

    languages_url?: string;

    merges_url?: string;

    milestones_url?: string;

    mirror_url?: string;

    name?: string;

    network_count?: number;

    node_id?: string;

    notifications_url?: string;

    open_issues_count?: number;

    owner?: TemplateRepository.Owner;

    permissions?: TemplateRepository.Permissions;

    private?: boolean;

    pulls_url?: string;

    pushed_at?: string;

    releases_url?: string;

    size?: number;

    ssh_url?: string;

    stargazers_count?: number;

    stargazers_url?: string;

    statuses_url?: string;

    subscribers_count?: number;

    subscribers_url?: string;

    subscription_url?: string;

    svn_url?: string;

    tags_url?: string;

    teams_url?: string;

    temp_clone_token?: string;

    topics?: Array<string>;

    trees_url?: string;

    updated_at?: string;

    url?: string;

    use_squash_pr_title_as_default?: boolean;

    visibility?: string;

    watchers_count?: number;
  }

  export namespace TemplateRepository {
    export interface Owner {
      id?: number;

      avatar_url?: string;

      events_url?: string;

      followers_url?: string;

      following_url?: string;

      gists_url?: string;

      gravatar_id?: string;

      html_url?: string;

      login?: string;

      node_id?: string;

      organizations_url?: string;

      received_events_url?: string;

      repos_url?: string;

      site_admin?: boolean;

      starred_url?: string;

      subscriptions_url?: string;

      type?: string;

      url?: string;
    }

    export interface Permissions {
      admin?: boolean;

      maintain?: boolean;

      pull?: boolean;

      push?: boolean;

      triage?: boolean;
    }
  }
}

/**
 * A git repository
 */
export interface Repository {
  /**
   * Unique identifier of the repository
   */
  id: number;

  archive_url: string;

  /**
   * Whether the repository is archived.
   */
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

  created_at: string | null;

  /**
   * The default branch of the repository.
   */
  default_branch: string;

  deployments_url: string;

  description: string | null;

  /**
   * Returns whether or not this repository disabled.
   */
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

  /**
   * Whether downloads are enabled.
   */
  has_downloads: boolean;

  /**
   * Whether issues are enabled.
   */
  has_issues: boolean;

  has_pages: boolean;

  /**
   * Whether projects are enabled.
   */
  has_projects: boolean;

  /**
   * Whether the wiki is enabled.
   */
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
  license: Repository.License | null;

  merges_url: string;

  milestones_url: string;

  mirror_url: string | null;

  /**
   * The name of the repository.
   */
  name: string;

  node_id: string;

  notifications_url: string;

  open_issues: number;

  open_issues_count: number;

  /**
   * Simple User
   */
  owner: UsersAPI.SimpleUser;

  /**
   * Whether the repository is private or public.
   */
  private: boolean;

  pulls_url: string;

  pushed_at: string | null;

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

  updated_at: string | null;

  url: string;

  watchers: number;

  watchers_count: number;

  /**
   * Whether to allow Auto-merge to be used on pull requests.
   */
  allow_auto_merge?: boolean;

  /**
   * Whether to allow forking this repo
   */
  allow_forking?: boolean;

  /**
   * Whether to allow merge commits for pull requests.
   */
  allow_merge_commit?: boolean;

  /**
   * Whether to allow rebase merges for pull requests.
   */
  allow_rebase_merge?: boolean;

  /**
   * Whether to allow squash merges for pull requests.
   */
  allow_squash_merge?: boolean;

  /**
   * Whether or not a pull request head branch that is behind its base branch can
   * always be updated even if it is not required to be up to date before merging.
   */
  allow_update_branch?: boolean;

  /**
   * Whether to delete head branches when pull requests are merged
   */
  delete_branch_on_merge?: boolean;

  /**
   * Whether this repository acts as a template that can be used to generate new
   * repositories.
   */
  is_template?: boolean;

  master_branch?: string;

  network_count?: number;

  /**
   * Simple User
   */
  organization?: Repository.Organization | null;

  permissions?: Repository.Permissions;

  starred_at?: string;

  subscribers_count?: number;

  temp_clone_token?: string;

  template_repository?: Repository.TemplateRepository | null;

  topics?: Array<string>;

  /**
   * Whether a squash merge commit can use the pull request title as default.
   */
  use_squash_pr_title_as_default?: boolean;

  /**
   * The repository visibility: public, private, or internal.
   */
  visibility?: string;
}

export namespace Repository {
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

  /**
   * Simple User
   */
  export interface Organization {
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

  export interface Permissions {
    admin: boolean;

    pull: boolean;

    push: boolean;

    maintain?: boolean;

    triage?: boolean;
  }

  export interface TemplateRepository {
    id?: number;

    allow_auto_merge?: boolean;

    allow_merge_commit?: boolean;

    allow_rebase_merge?: boolean;

    allow_squash_merge?: boolean;

    allow_update_branch?: boolean;

    archive_url?: string;

    archived?: boolean;

    assignees_url?: string;

    blobs_url?: string;

    branches_url?: string;

    clone_url?: string;

    collaborators_url?: string;

    comments_url?: string;

    commits_url?: string;

    compare_url?: string;

    contents_url?: string;

    contributors_url?: string;

    created_at?: string;

    default_branch?: string;

    delete_branch_on_merge?: boolean;

    deployments_url?: string;

    description?: string;

    disabled?: boolean;

    downloads_url?: string;

    events_url?: string;

    fork?: boolean;

    forks_count?: number;

    forks_url?: string;

    full_name?: string;

    git_commits_url?: string;

    git_refs_url?: string;

    git_tags_url?: string;

    git_url?: string;

    has_downloads?: boolean;

    has_issues?: boolean;

    has_pages?: boolean;

    has_projects?: boolean;

    has_wiki?: boolean;

    homepage?: string;

    hooks_url?: string;

    html_url?: string;

    is_template?: boolean;

    issue_comment_url?: string;

    issue_events_url?: string;

    issues_url?: string;

    keys_url?: string;

    labels_url?: string;

    language?: string;

    languages_url?: string;

    merges_url?: string;

    milestones_url?: string;

    mirror_url?: string;

    name?: string;

    network_count?: number;

    node_id?: string;

    notifications_url?: string;

    open_issues_count?: number;

    owner?: TemplateRepository.Owner;

    permissions?: TemplateRepository.Permissions;

    private?: boolean;

    pulls_url?: string;

    pushed_at?: string;

    releases_url?: string;

    size?: number;

    ssh_url?: string;

    stargazers_count?: number;

    stargazers_url?: string;

    statuses_url?: string;

    subscribers_count?: number;

    subscribers_url?: string;

    subscription_url?: string;

    svn_url?: string;

    tags_url?: string;

    teams_url?: string;

    temp_clone_token?: string;

    topics?: Array<string>;

    trees_url?: string;

    updated_at?: string;

    url?: string;

    use_squash_pr_title_as_default?: boolean;

    visibility?: string;

    watchers_count?: number;
  }

  export namespace TemplateRepository {
    export interface Owner {
      id?: number;

      avatar_url?: string;

      events_url?: string;

      followers_url?: string;

      following_url?: string;

      gists_url?: string;

      gravatar_id?: string;

      html_url?: string;

      login?: string;

      node_id?: string;

      organizations_url?: string;

      received_events_url?: string;

      repos_url?: string;

      site_admin?: boolean;

      starred_url?: string;

      subscriptions_url?: string;

      type?: string;

      url?: string;
    }

    export interface Permissions {
      admin?: boolean;

      maintain?: boolean;

      pull?: boolean;

      push?: boolean;

      triage?: boolean;
    }
  }
}

/**
 * Starred Repository
 */
export interface StarredRepository {
  /**
   * A git repository
   */
  repo: Repository;

  starred_at: string;
}

export type RepoListForCurrentUserResponse = Array<Repository>;

export type RepoListForOrgResponse = Array<MinimalRepository>;

export type RepoListForUserResponse = Array<MinimalRepository>;

export type RepoListPublicResponse = Array<MinimalRepository>;

export type RepoListStarredResponse = Array<Repository>;

export interface RepoCreateParams {
  /**
   * The name of the repository.
   */
  name: string;

  /**
   * Whether to allow Auto-merge to be used on pull requests.
   */
  allow_auto_merge?: boolean;

  /**
   * Whether to allow merge commits for pull requests.
   */
  allow_merge_commit?: boolean;

  /**
   * Whether to allow rebase merges for pull requests.
   */
  allow_rebase_merge?: boolean;

  /**
   * Whether to allow squash merges for pull requests.
   */
  allow_squash_merge?: boolean;

  /**
   * Whether the repository is initialized with a minimal README.
   */
  auto_init?: boolean;

  /**
   * Whether to delete head branches when pull requests are merged
   */
  delete_branch_on_merge?: boolean;

  /**
   * A short description of the repository.
   */
  description?: string;

  /**
   * The desired language or platform to apply to the .gitignore.
   */
  gitignore_template?: string;

  /**
   * Whether downloads are enabled.
   */
  has_downloads?: boolean;

  /**
   * Whether issues are enabled.
   */
  has_issues?: boolean;

  /**
   * Whether projects are enabled.
   */
  has_projects?: boolean;

  /**
   * Whether the wiki is enabled.
   */
  has_wiki?: boolean;

  /**
   * A URL with more information about the repository.
   */
  homepage?: string;

  /**
   * Whether this repository acts as a template that can be used to generate new
   * repositories.
   */
  is_template?: boolean;

  /**
   * The license keyword of the open source license for this repository.
   */
  license_template?: string;

  /**
   * Whether the repository is private.
   */
  private?: boolean;

  /**
   * The id of the team that will be granted access to this repository. This is only
   * valid when creating a repository in an organization.
   */
  team_id?: number;
}

export interface RepoRetrieveParams {
  /**
   * The account owner of the repository. The name is not case sensitive.
   */
  owner: string;

  /**
   * The name of the repository. The name is not case sensitive.
   */
  repo: string;
}

export interface RepoUpdateParams {
  /**
   * Path param: The account owner of the repository. The name is not case sensitive.
   */
  owner: string;

  /**
   * Path param: The name of the repository. The name is not case sensitive.
   */
  repo: string;

  /**
   * Body param: Either `true` to allow auto-merge on pull requests, or `false` to
   * disallow auto-merge.
   */
  allow_auto_merge?: boolean;

  /**
   * Body param: Either `true` to allow private forks, or `false` to prevent private
   * forks.
   */
  allow_forking?: boolean;

  /**
   * Body param: Either `true` to allow merging pull requests with a merge commit, or
   * `false` to prevent merging pull requests with merge commits.
   */
  allow_merge_commit?: boolean;

  /**
   * Body param: Either `true` to allow rebase-merging pull requests, or `false` to
   * prevent rebase-merging.
   */
  allow_rebase_merge?: boolean;

  /**
   * Body param: Either `true` to allow squash-merging pull requests, or `false` to
   * prevent squash-merging.
   */
  allow_squash_merge?: boolean;

  /**
   * Body param: Either `true` to always allow a pull request head branch that is
   * behind its base branch to be updated even if it is not required to be up to date
   * before merging, or false otherwise.
   */
  allow_update_branch?: boolean;

  /**
   * Body param: `true` to archive this repository. **Note**: You cannot unarchive
   * repositories through the API.
   */
  archived?: boolean;

  /**
   * Body param: Updates the default branch for this repository.
   */
  default_branch?: string;

  /**
   * Body param: Either `true` to allow automatically deleting head branches when
   * pull requests are merged, or `false` to prevent automatic deletion.
   */
  delete_branch_on_merge?: boolean;

  /**
   * Body param: A short description of the repository.
   */
  description?: string;

  /**
   * Body param: Either `true` to enable issues for this repository or `false` to
   * disable them.
   */
  has_issues?: boolean;

  /**
   * Body param: Either `true` to enable projects for this repository or `false` to
   * disable them. **Note:** If you're creating a repository in an organization that
   * has disabled repository projects, the default is `false`, and if you pass
   * `true`, the API returns an error.
   */
  has_projects?: boolean;

  /**
   * Body param: Either `true` to enable the wiki for this repository or `false` to
   * disable it.
   */
  has_wiki?: boolean;

  /**
   * Body param: A URL with more information about the repository.
   */
  homepage?: string;

  /**
   * Body param: Either `true` to make this repo available as a template repository
   * or `false` to prevent it.
   */
  is_template?: boolean;

  /**
   * Body param: The name of the repository.
   */
  name?: string;

  /**
   * Body param: Either `true` to make the repository private or `false` to make it
   * public. Default: `false`.
   * **Note**: You will get a `422` error if the organization restricts
   * [changing repository visibility](https://docs.github.com/articles/repository-permission-levels-for-an-organization#changing-the-visibility-of-repositories)
   * to organization owners and a non-owner tries to change the value of private.
   */
  private?: boolean;

  /**
   * Body param: Specify which security and analysis features to enable or disable
   * for the repository.
   *
   * To use this parameter, you must have admin permissions for the repository or be
   * an owner or security manager for the organization that owns the repository. For
   * more information, see
   * "[Managing security managers in your organization](https://docs.github.com/enterprise-server@3.6/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
   *
   * For example, to enable GitHub Advanced Security, use this data in the body of
   * the `PATCH` request:
   * `{ "security_and_analysis": {"advanced_security": { "status": "enabled" } } }`.
   *
   * You can check which security and analysis features are currently enabled by
   * using a `GET /repos/{owner}/{repo}` request.
   */
  security_and_analysis?: RepoUpdateParams.SecurityAndAnalysis | null;

  /**
   * Body param: Either `true` to allow squash-merge commits to use pull request
   * title, or `false` to use commit message.
   */
  use_squash_pr_title_as_default?: boolean;

  /**
   * Body param: Can be `public` or `private`. If your organization is associated
   * with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise
   * Server 2.20+, `visibility` can also be `internal`."
   */
  visibility?: 'public' | 'private' | 'internal';
}

export namespace RepoUpdateParams {
  /**
   * Specify which security and analysis features to enable or disable for the
   * repository.
   *
   * To use this parameter, you must have admin permissions for the repository or be
   * an owner or security manager for the organization that owns the repository. For
   * more information, see
   * "[Managing security managers in your organization](https://docs.github.com/enterprise-server@3.6/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
   *
   * For example, to enable GitHub Advanced Security, use this data in the body of
   * the `PATCH` request:
   * `{ "security_and_analysis": {"advanced_security": { "status": "enabled" } } }`.
   *
   * You can check which security and analysis features are currently enabled by
   * using a `GET /repos/{owner}/{repo}` request.
   */
  export interface SecurityAndAnalysis {
    /**
     * Use the `status` property to enable or disable GitHub Advanced Security for this
     * repository. For more information, see
     * "[About GitHub Advanced Security](/github/getting-started-with-github/learning-about-github/about-github-advanced-security)."
     */
    advanced_security?: SecurityAndAnalysis.AdvancedSecurity;

    /**
     * Use the `status` property to enable or disable secret scanning for this
     * repository. For more information, see
     * "[About secret scanning](/code-security/secret-security/about-secret-scanning)."
     */
    secret_scanning?: SecurityAndAnalysis.SecretScanning;

    /**
     * Use the `status` property to enable or disable secret scanning push protection
     * for this repository. For more information, see
     * "[Protecting pushes with secret scanning](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)."
     */
    secret_scanning_push_protection?: SecurityAndAnalysis.SecretScanningPushProtection;
  }

  export namespace SecurityAndAnalysis {
    /**
     * Use the `status` property to enable or disable GitHub Advanced Security for this
     * repository. For more information, see
     * "[About GitHub Advanced Security](/github/getting-started-with-github/learning-about-github/about-github-advanced-security)."
     */
    export interface AdvancedSecurity {
      /**
       * Can be `enabled` or `disabled`.
       */
      status?: string;
    }

    /**
     * Use the `status` property to enable or disable secret scanning for this
     * repository. For more information, see
     * "[About secret scanning](/code-security/secret-security/about-secret-scanning)."
     */
    export interface SecretScanning {
      /**
       * Can be `enabled` or `disabled`.
       */
      status?: string;
    }

    /**
     * Use the `status` property to enable or disable secret scanning push protection
     * for this repository. For more information, see
     * "[Protecting pushes with secret scanning](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)."
     */
    export interface SecretScanningPushProtection {
      /**
       * Can be `enabled` or `disabled`.
       */
      status?: string;
    }
  }
}

export interface RepoDeleteParams {
  /**
   * The account owner of the repository. The name is not case sensitive.
   */
  owner: string;

  /**
   * The name of the repository. The name is not case sensitive.
   */
  repo: string;
}

export interface RepoCheckStarredParams {
  /**
   * The account owner of the repository. The name is not case sensitive.
   */
  owner: string;

  /**
   * The name of the repository. The name is not case sensitive.
   */
  repo: string;
}

export interface RepoCreateForOrgParams {
  /**
   * The name of the repository.
   */
  name: string;

  /**
   * Either `true` to allow auto-merge on pull requests, or `false` to disallow
   * auto-merge.
   */
  allow_auto_merge?: boolean;

  /**
   * Either `true` to allow merging pull requests with a merge commit, or `false` to
   * prevent merging pull requests with merge commits.
   */
  allow_merge_commit?: boolean;

  /**
   * Either `true` to allow rebase-merging pull requests, or `false` to prevent
   * rebase-merging.
   */
  allow_rebase_merge?: boolean;

  /**
   * Either `true` to allow squash-merging pull requests, or `false` to prevent
   * squash-merging.
   */
  allow_squash_merge?: boolean;

  /**
   * Pass `true` to create an initial commit with empty README.
   */
  auto_init?: boolean;

  /**
   * Either `true` to allow automatically deleting head branches when pull requests
   * are merged, or `false` to prevent automatic deletion.
   */
  delete_branch_on_merge?: boolean;

  /**
   * A short description of the repository.
   */
  description?: string;

  /**
   * Desired language or platform
   * [.gitignore template](https://github.com/github/gitignore) to apply. Use the
   * name of the template without the extension. For example, "Haskell".
   */
  gitignore_template?: string;

  /**
   * Either `true` to enable issues for this repository or `false` to disable them.
   */
  has_issues?: boolean;

  /**
   * Either `true` to enable projects for this repository or `false` to disable them.
   * **Note:** If you're creating a repository in an organization that has disabled
   * repository projects, the default is `false`, and if you pass `true`, the API
   * returns an error.
   */
  has_projects?: boolean;

  /**
   * Either `true` to enable the wiki for this repository or `false` to disable it.
   */
  has_wiki?: boolean;

  /**
   * A URL with more information about the repository.
   */
  homepage?: string;

  /**
   * Either `true` to make this repo available as a template repository or `false` to
   * prevent it.
   */
  is_template?: boolean;

  /**
   * Choose an [open source license template](https://choosealicense.com/) that best
   * suits your needs, and then use the
   * [license keyword](https://docs.github.com/articles/licensing-a-repository/#searching-github-by-license-type)
   * as the `license_template` string. For example, "mit" or "mpl-2.0".
   */
  license_template?: string;

  /**
   * Whether the repository is private.
   */
  private?: boolean;

  /**
   * The id of the team that will be granted access to this repository. This is only
   * valid when creating a repository in an organization.
   */
  team_id?: number;

  /**
   * Either `true` to allow squash-merge commits to use pull request title, or
   * `false` to use commit message.
   */
  use_squash_pr_title_as_default?: boolean;

  /**
   * Can be `public` or `private`. If your organization is associated with an
   * enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server
   * 2.20+, `visibility` can also be `internal`. Note: For GitHub Enterprise Server
   * and GitHub AE, this endpoint will only list repositories available to all users
   * on the enterprise. For more information, see
   * "[Creating an internal repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/about-repository-visibility#about-internal-repositories)"
   * in the GitHub Help documentation.
   */
  visibility?: 'public' | 'private' | 'internal';
}

export interface RepoCreateFromTemplateParams {
  /**
   * The name of the new repository.
   */
  name: string;

  /**
   * A short description of the new repository.
   */
  description?: string;

  /**
   * Set to `true` to include the directory structure and files from all branches in
   * the template repository, and not just the default branch. Default: `false`.
   */
  include_all_branches?: boolean;

  /**
   * The organization or person who will own the new repository. To create a new
   * repository in an organization, the authenticated user must be a member of the
   * specified organization.
   */
  owner?: string;

  /**
   * Either `true` to create a new private repository or `false` to create a new
   * public one.
   */
  private?: boolean;
}

export interface RepoListForCurrentUserParams {
  /**
   * Comma-separated list of values. Can include:
   *
   * - `owner`: Repositories that are owned by the authenticated user.
   * - `collaborator`: Repositories that the user has been added to as a
   *   collaborator.
   * - `organization_member`: Repositories that the user has access to through being
   *   a member of an organization. This includes every repository on every team that
   *   the user is on.
   */
  affiliation?: string;

  /**
   * Only show notifications updated before the given time. This is a timestamp in
   * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format:
   * `YYYY-MM-DDTHH:MM:SSZ`.
   */
  before?: string;

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
   * Only show notifications updated after the given time. This is a timestamp in
   * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format:
   * `YYYY-MM-DDTHH:MM:SSZ`.
   */
  since?: string;

  /**
   * The property to sort the results by.
   */
  sort?: 'created' | 'updated' | 'pushed' | 'full_name';

  /**
   * Limit results to repositories of the specified type. Will cause a `422` error if
   * used in the same request as **visibility** or **affiliation**.
   */
  type?: 'all' | 'owner' | 'public' | 'private' | 'member';

  /**
   * Limit results to repositories with the specified visibility.
   */
  visibility?: 'all' | 'public' | 'private';
}

export interface RepoListForOrgParams {
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
   * Specifies the types of repositories you want returned. If your organization is
   * associated with an enterprise account using GitHub Enterprise Cloud or GitHub
   * Enterprise Server 2.20+, `type` can also be `internal`. However, the `internal`
   * value is not yet supported when a GitHub App calls this API with an installation
   * access token.
   */
  type?: 'all' | 'public' | 'private' | 'forks' | 'sources' | 'member' | 'internal';
}

export interface RepoListForUserParams {
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

export interface RepoListPublicParams {
  /**
   * A repository ID. Only return repositories with an ID greater than this ID.
   */
  since?: number;

  /**
   * Specifies the types of repositories to return. This endpoint will only list
   * repositories available to all users on the enterprise.
   */
  visibility?: 'all' | 'public';
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

export interface RepoStarParams {
  /**
   * The account owner of the repository. The name is not case sensitive.
   */
  owner: string;

  /**
   * The name of the repository. The name is not case sensitive.
   */
  repo: string;
}

export interface RepoTransferParams {
  /**
   * Path param: The account owner of the repository. The name is not case sensitive.
   */
  owner: string;

  /**
   * Path param: The name of the repository. The name is not case sensitive.
   */
  repo: string;

  /**
   * Body param: The username or organization name the repository will be transferred
   * to.
   */
  new_owner: string;

  /**
   * Body param: ID of the team or teams to add to the repository. Teams can only be
   * added to organization-owned repositories.
   */
  team_ids?: Array<number>;
}

export interface RepoUnstarParams {
  /**
   * The account owner of the repository. The name is not case sensitive.
   */
  owner: string;

  /**
   * The name of the repository. The name is not case sensitive.
   */
  repo: string;
}

export namespace Repos {
  export import FullRepository = ReposAPI.FullRepository;
  export import MinimalRepository = ReposAPI.MinimalRepository;
  export import NullableRepository = ReposAPI.NullableRepository;
  export import Repository = ReposAPI.Repository;
  export import StarredRepository = ReposAPI.StarredRepository;
  export import RepoListForCurrentUserResponse = ReposAPI.RepoListForCurrentUserResponse;
  export import RepoListForOrgResponse = ReposAPI.RepoListForOrgResponse;
  export import RepoListForUserResponse = ReposAPI.RepoListForUserResponse;
  export import RepoListPublicResponse = ReposAPI.RepoListPublicResponse;
  export import RepoListStarredResponse = ReposAPI.RepoListStarredResponse;
  export import RepoCreateParams = ReposAPI.RepoCreateParams;
  export import RepoRetrieveParams = ReposAPI.RepoRetrieveParams;
  export import RepoUpdateParams = ReposAPI.RepoUpdateParams;
  export import RepoDeleteParams = ReposAPI.RepoDeleteParams;
  export import RepoCheckStarredParams = ReposAPI.RepoCheckStarredParams;
  export import RepoCreateForOrgParams = ReposAPI.RepoCreateForOrgParams;
  export import RepoCreateFromTemplateParams = ReposAPI.RepoCreateFromTemplateParams;
  export import RepoListForCurrentUserParams = ReposAPI.RepoListForCurrentUserParams;
  export import RepoListForOrgParams = ReposAPI.RepoListForOrgParams;
  export import RepoListForUserParams = ReposAPI.RepoListForUserParams;
  export import RepoListPublicParams = ReposAPI.RepoListPublicParams;
  export import RepoListStarredParams = ReposAPI.RepoListStarredParams;
  export import RepoStarParams = ReposAPI.RepoStarParams;
  export import RepoTransferParams = ReposAPI.RepoTransferParams;
  export import RepoUnstarParams = ReposAPI.RepoUnstarParams;
  export import Issues = IssuesAPI.Issues;
  export import Issue = IssuesAPI.Issue;
  export import IssueCreateParams = IssuesAPI.IssueCreateParams;
  export import Commits = CommitsAPI.Commits;
  export import Commit = CommitsAPI.Commit;
  export import GitCommit = CommitsAPI.GitCommit;
  export import CommitListResponse = CommitsAPI.CommitListResponse;
  export import CommitListParams = CommitsAPI.CommitListParams;
  export import Forks = ForksAPI.Forks;
  export import ForkListResponse = ForksAPI.ForkListResponse;
  export import ForkCreateParams = ForksAPI.ForkCreateParams;
  export import ForkListParams = ForksAPI.ForkListParams;
  export import Contributors = ContributorsAPI.Contributors;
  export import Contributor = ContributorsAPI.Contributor;
  export import ContributorListResponse = ContributorsAPI.ContributorListResponse;
  export import ContributorListParams = ContributorsAPI.ContributorListParams;
  export import Tags = TagsAPI.Tags;
  export import Tag = TagsAPI.Tag;
  export import TagListResponse = TagsAPI.TagListResponse;
  export import TagListParams = TagsAPI.TagListParams;
  export import Topics = TopicsAPI.Topics;
  export import Topic = TopicsAPI.Topic;
  export import TopicListParams = TopicsAPI.TopicListParams;
  export import TopicReplaceParams = TopicsAPI.TopicReplaceParams;
  export import Teams = TeamsAPI.Teams;
  export import Team = TeamsAPI.Team;
  export import TeamListResponse = TeamsAPI.TeamListResponse;
  export import TeamListParams = TeamsAPI.TeamListParams;
  export import Languages = LanguagesAPI.Languages;
  export import Language = LanguagesAPI.Language;
  export import LanguageListParams = LanguagesAPI.LanguageListParams;
  export import LFS = LFSAPI.LFS;
  export import LFSEnableResponse = LFSAPI.LFSEnableResponse;
  export import LFSDisableParams = LFSAPI.LFSDisableParams;
  export import LFSEnableParams = LFSAPI.LFSEnableParams;
  export import Codeowners = CodeownersAPI.Codeowners;
  export import CodeownerError = CodeownersAPI.CodeownerError;
  export import CodeownerErrorsErrorsPage = CodeownersAPI.CodeownerErrorsErrorsPage;
  export import CodeownerListErrorsParams = CodeownersAPI.CodeownerListErrorsParams;
  export import Pulls = PullsAPI.Pulls;
  export import PullRequest = PullsAPI.PullRequest;
  export import PullRequestSimple = PullsAPI.PullRequestSimple;
  export import PullListResponse = PullsAPI.PullListResponse;
  export import PullCreateParams = PullsAPI.PullCreateParams;
  export import PullRetrieveParams = PullsAPI.PullRetrieveParams;
  export import PullUpdateParams = PullsAPI.PullUpdateParams;
  export import PullListParams = PullsAPI.PullListParams;
  export import Git = GitAPI.Git;
}
