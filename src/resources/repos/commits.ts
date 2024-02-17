// File generated from our OpenAPI spec by Stainless.

import * as Core from '@stainless-api/github-internal/core';
import { APIResource } from '@stainless-api/github-internal/resource';
import * as CommitsAPI from '@stainless-api/github-internal/resources/repos/commits';

export class Commits extends APIResource {
  /**
   * **Signature verification object**
   *
   * The response will include a `verification` object that describes the result of
   * verifying the commit's signature. The following fields are included in the
   * `verification` object:
   *
   * | Name        | Type      | Description                                                                                      |
   * | ----------- | --------- | ------------------------------------------------------------------------------------------------ |
   * | `verified`  | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified.                  |
   * | `reason`    | `string`  | The reason for verified value. Possible values and their meanings are enumerated in table below. |
   * | `signature` | `string`  | The signature that was extracted from the commit.                                                |
   * | `payload`   | `string`  | The value that was signed.                                                                       |
   *
   * These are the possible values for `reason` in the `verification` object:
   *
   * | Value                    | Description                                                                                                                       |
   * | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
   * | `expired_key`            | The key that made the signature is expired.                                                                                       |
   * | `not_signing_key`        | The "signing" flag is not among the usage flags in the GPG key that made the signature.                                           |
   * | `gpgverify_error`        | There was an error communicating with the signature verification service.                                                         |
   * | `gpgverify_unavailable`  | The signature verification service is currently unavailable.                                                                      |
   * | `unsigned`               | The object does not include a signature.                                                                                          |
   * | `unknown_signature_type` | A non-PGP signature was found in the commit.                                                                                      |
   * | `no_user`                | No user was associated with the `committer` email address in the commit.                                                          |
   * | `unverified_email`       | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
   * | `bad_email`              | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature.             |
   * | `unknown_key`            | The key that made the signature has not been registered with any user's account.                                                  |
   * | `malformed_signature`    | There was an error parsing the signature.                                                                                         |
   * | `invalid`                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      |
   * | `valid`                  | None of the above errors applied, so the signature is considered to be verified.                                                  |
   */
  list(params: CommitListParams, options?: Core.RequestOptions): Core.APIPromise<CommitListResponse> {
    const { owner, repo, ...query } = params;
    return this._client.get(`/repos/${owner}/${repo}/commits`, { query, ...options });
  }
}

/**
 * Commit
 */
export interface Commit {
  /**
   * Simple User
   */
  author: Commit.Author | null;

  comments_url: string;

  commit: GitCommit;

  /**
   * Simple User
   */
  committer: Commit.Committer | null;

  html_url: string;

  node_id: string;

  parents: Array<Commit.Parent>;

  sha: string;

  url: string;

  files?: Array<Commit.File>;

  stats?: Commit.Stats;
}

export namespace Commit {
  /**
   * Simple User
   */
  export interface Author {
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
  export interface Committer {
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

  export interface Parent {
    sha: string;

    url: string;

    html_url?: string;
  }

  /**
   * Diff Entry
   */
  export interface File {
    additions: number;

    blob_url: string;

    changes: number;

    contents_url: string;

    deletions: number;

    filename: string;

    raw_url: string;

    sha: string;

    status: 'added' | 'removed' | 'modified' | 'renamed' | 'copied' | 'changed' | 'unchanged';

    patch?: string;

    previous_filename?: string;
  }

  export interface Stats {
    additions?: number;

    deletions?: number;

    total?: number;
  }
}

export interface GitCommit {
  /**
   * Metaproperties for Git author/committer information.
   */
  author: GitCommit.Author | null;

  comment_count: number;

  /**
   * Metaproperties for Git author/committer information.
   */
  committer: GitCommit.Committer | null;

  message: string;

  tree: GitCommit.Tree;

  url: string;

  verification?: GitCommit.Verification;
}

export namespace GitCommit {
  /**
   * Metaproperties for Git author/committer information.
   */
  export interface Author {
    date?: string;

    email?: string;

    name?: string;
  }

  /**
   * Metaproperties for Git author/committer information.
   */
  export interface Committer {
    date?: string;

    email?: string;

    name?: string;
  }

  export interface Tree {
    sha: string;

    url: string;
  }

  export interface Verification {
    payload: string | null;

    reason: string;

    signature: string | null;

    verified: boolean;
  }
}

export type CommitListResponse = Array<Commit>;

export interface CommitListParams {
  /**
   * Path param: The account owner of the repository. The name is not case sensitive.
   */
  owner: string;

  /**
   * Path param: The name of the repository. The name is not case sensitive.
   */
  repo: string;

  /**
   * Query param: GitHub login or email address by which to filter by commit author.
   */
  author?: string;

  /**
   * Query param: Page number of the results to fetch.
   */
  page?: number;

  /**
   * Query param: Only commits containing this file path will be returned.
   */
  path?: string;

  /**
   * Query param: The number of results per page (max 100).
   */
  per_page?: number;

  /**
   * Query param: SHA or branch to start listing commits from. Default: the
   * repository’s default branch (usually `master`).
   */
  sha?: string;

  /**
   * Query param: Only show notifications updated after the given time. This is a
   * timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format:
   * `YYYY-MM-DDTHH:MM:SSZ`.
   */
  since?: string;

  /**
   * Query param: Only commits before this date will be returned. This is a timestamp
   * in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format:
   * `YYYY-MM-DDTHH:MM:SSZ`.
   */
  until?: string;
}

export namespace Commits {
  export import Commit = CommitsAPI.Commit;
  export import GitCommit = CommitsAPI.GitCommit;
  export import CommitListResponse = CommitsAPI.CommitListResponse;
  export import CommitListParams = CommitsAPI.CommitListParams;
}
