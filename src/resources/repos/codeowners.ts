// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@stainless-api/github-internal/core';
import { APIResource } from '@stainless-api/github-internal/resource';
import * as CodeownersAPI from '@stainless-api/github-internal/resources/repos/codeowners';
import { ErrorsPage } from '@stainless-api/github-internal/pagination';

export class Codeowners extends APIResource {
  /**
   * List any syntax errors that are detected in the CODEOWNERS file.
   *
   * For more information about the correct CODEOWNERS syntax, see
   * "[About code owners](https://docs.github.com/enterprise-server@3.6/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)."
   */
  listErrors(
    params: CodeownerListErrorsParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CodeownerErrorsErrorsPage, CodeownerError> {
    const { owner, repo, ...query } = params;
    return this._client.getAPIList(`/repos/${owner}/${repo}/codeowners/errors`, CodeownerErrorsErrorsPage, {
      query,
      ...options,
    });
  }
}

export class CodeownerErrorsErrorsPage extends ErrorsPage<CodeownerError> {}

export interface CodeownerError {
  /**
   * The column number where this errors occurs.
   */
  column: number;

  /**
   * The type of error.
   */
  kind: string;

  /**
   * The line number where this errors occurs.
   */
  line: number;

  /**
   * A human-readable description of the error, combining information from multiple
   * fields, laid out for display in a monospaced typeface (for example, a
   * command-line setting).
   */
  message: string;

  /**
   * The path of the file where the error occured.
   */
  path: string;

  /**
   * The contents of the line where the error occurs.
   */
  source?: string;

  /**
   * Suggested action to fix the error. This will usually be `null`, but is provided
   * for some common errors.
   */
  suggestion?: string | null;
}

export interface CodeownerListErrorsParams {
  /**
   * Path param: The account owner of the repository. The name is not case sensitive.
   */
  owner: string;

  /**
   * Path param: The name of the repository. The name is not case sensitive.
   */
  repo: string;

  /**
   * Query param: A branch, tag or commit name used to determine which version of the
   * CODEOWNERS file to use. Default: the repository's default branch (e.g. `main`)
   */
  ref?: string;
}

export namespace Codeowners {
  export import CodeownerError = CodeownersAPI.CodeownerError;
  export import CodeownerErrorsErrorsPage = CodeownersAPI.CodeownerErrorsErrorsPage;
  export import CodeownerListErrorsParams = CodeownersAPI.CodeownerListErrorsParams;
}
