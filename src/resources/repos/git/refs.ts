// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@stainless-api/github-internal/core';
import { APIResource } from '@stainless-api/github-internal/resource';
import * as RefsAPI from '@stainless-api/github-internal/resources/repos/git/refs';

export class Refs extends APIResource {
  /**
   * Returns a single reference from your Git database. The `:ref` in the URL must be
   * formatted as `heads/<branch name>` for branches and `tags/<tag name>` for tags.
   * If the `:ref` doesn't match an existing ref, a `404` is returned.
   *
   * **Note:** You need to explicitly
   * [request a pull request](https://docs.github.com/enterprise-server@3.6/rest/reference/pulls#get-a-pull-request)
   * to trigger a test merge commit, which checks the mergeability of pull requests.
   * For more information, see
   * "[Checking mergeability of pull requests](https://docs.github.com/enterprise-server@3.6/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".
   */
  retrieve(ref: string, params: RefRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<GitRef> {
    const { owner, repo } = params;
    return this._client.get(`/repos/${owner}/${repo}/git/ref/${ref}`, options);
  }

  /**
   * Delete a reference
   */
  delete(ref: string, params: RefDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { owner, repo } = params;
    return this._client.delete(`/repos/${owner}/${repo}/git/refs/${ref}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

/**
 * Git references within a repository
 */
export interface GitRef {
  node_id: string;

  object: GitRef.Object;

  ref: string;

  url: string;
}

export namespace GitRef {
  export interface Object {
    /**
     * SHA for the reference
     */
    sha: string;

    type: string;

    url: string;
  }
}

export interface RefRetrieveParams {
  /**
   * The account owner of the repository. The name is not case sensitive.
   */
  owner: string;

  /**
   * The name of the repository. The name is not case sensitive.
   */
  repo: string;
}

export interface RefDeleteParams {
  /**
   * The account owner of the repository. The name is not case sensitive.
   */
  owner: string;

  /**
   * The name of the repository. The name is not case sensitive.
   */
  repo: string;
}

export namespace Refs {
  export import GitRef = RefsAPI.GitRef;
  export import RefRetrieveParams = RefsAPI.RefRetrieveParams;
  export import RefDeleteParams = RefsAPI.RefDeleteParams;
}
