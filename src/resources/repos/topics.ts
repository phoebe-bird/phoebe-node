// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@stainless-api/github-internal/core';
import { APIResource } from '@stainless-api/github-internal/resource';
import * as TopicsAPI from '@stainless-api/github-internal/resources/repos/topics';

export class Topics extends APIResource {
  /**
   * Get all repository topics
   */
  list(params: TopicListParams, options?: Core.RequestOptions): Core.APIPromise<Topic> {
    const { owner, repo, ...query } = params;
    return this._client.get(`/repos/${owner}/${repo}/topics`, { query, ...options });
  }

  /**
   * Replace all repository topics
   */
  replace(params: TopicReplaceParams, options?: Core.RequestOptions): Core.APIPromise<Topic> {
    const { owner, repo, ...body } = params;
    return this._client.put(`/repos/${owner}/${repo}/topics`, { body, ...options });
  }
}

/**
 * A topic aggregates entities that are related to a subject.
 */
export interface Topic {
  names: Array<string>;
}

export interface TopicListParams {
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

export interface TopicReplaceParams {
  /**
   * Path param: The account owner of the repository. The name is not case sensitive.
   */
  owner: string;

  /**
   * Path param: The name of the repository. The name is not case sensitive.
   */
  repo: string;

  /**
   * Body param: An array of topics to add to the repository. Pass one or more topics
   * to _replace_ the set of existing topics. Send an empty array (`[]`) to clear all
   * topics from the repository. **Note:** Topic `names` cannot contain uppercase
   * letters.
   */
  names: Array<string>;
}

export namespace Topics {
  export import Topic = TopicsAPI.Topic;
  export import TopicListParams = TopicsAPI.TopicListParams;
  export import TopicReplaceParams = TopicsAPI.TopicReplaceParams;
}
