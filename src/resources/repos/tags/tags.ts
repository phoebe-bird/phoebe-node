// File generated from our OpenAPI spec by Stainless.

import * as Core from '@stainless-api/github-internal/core';
import { APIResource } from '@stainless-api/github-internal/resource';
import * as TagsAPI from '@stainless-api/github-internal/resources/repos/tags/tags';
import * as ProtectionStatesAPI from '@stainless-api/github-internal/resources/repos/tags/protection-states';

export class Tags extends APIResource {
  protectionStates: ProtectionStatesAPI.ProtectionStates = new ProtectionStatesAPI.ProtectionStates(
    this._client,
  );

  /**
   * List repository tags
   */
  list(params: TagListParams, options?: Core.RequestOptions): Core.APIPromise<TagListResponse> {
    const { owner, repo, ...query } = params;
    return this._client.get(`/repos/${owner}/${repo}/tags`, { query, ...options });
  }
}

/**
 * Tag
 */
export interface Tag {
  commit: Tag.Commit;

  name: string;

  node_id: string;

  tarball_url: string;

  zipball_url: string;
}

export namespace Tag {
  export interface Commit {
    sha: string;

    url: string;
  }
}

export type TagListResponse = Array<Tag>;

export interface TagListParams {
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
}

export namespace Tags {
  export import Tag = TagsAPI.Tag;
  export import TagListResponse = TagsAPI.TagListResponse;
  export import TagListParams = TagsAPI.TagListParams;
  export import ProtectionStates = ProtectionStatesAPI.ProtectionStates;
  export import TagProtection = ProtectionStatesAPI.TagProtection;
  export import ProtectionStateCreateParams = ProtectionStatesAPI.ProtectionStateCreateParams;
  export import ProtectionStateDeleteParams = ProtectionStatesAPI.ProtectionStateDeleteParams;
}
