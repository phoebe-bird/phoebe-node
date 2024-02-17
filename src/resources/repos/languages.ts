// File generated from our OpenAPI spec by Stainless.

import * as Core from '@stainless-api/github-internal/core';
import { APIResource } from '@stainless-api/github-internal/resource';
import * as LanguagesAPI from '@stainless-api/github-internal/resources/repos/languages';

export class Languages extends APIResource {
  /**
   * Lists languages for the specified repository. The value shown for each language
   * is the number of bytes of code written in that language.
   */
  list(params: LanguageListParams, options?: Core.RequestOptions): Core.APIPromise<Language> {
    const { owner, repo } = params;
    return this._client.get(`/repos/${owner}/${repo}/languages`, options);
  }
}

/**
 * Language
 */
export type Language = Record<string, number>;

export interface LanguageListParams {
  /**
   * The account owner of the repository. The name is not case sensitive.
   */
  owner: string;

  /**
   * The name of the repository. The name is not case sensitive.
   */
  repo: string;
}

export namespace Languages {
  export import Language = LanguagesAPI.Language;
  export import LanguageListParams = LanguagesAPI.LanguageListParams;
}
