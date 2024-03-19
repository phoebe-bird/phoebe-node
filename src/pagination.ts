// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';

export interface ErrorsPageResponse<Item> {
  errors: Array<Item>;
}

export class ErrorsPage<Item> extends AbstractPage<Item> implements ErrorsPageResponse<Item> {
  errors: Array<Item>;

  constructor(
    client: APIClient,
    response: Response,
    body: ErrorsPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.errors = body.errors || [];
  }

  getPaginatedItems(): Item[] {
    return this.errors ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  /**
   * This page represents a response that isn't actually paginated at the API level
   * so there will never be any next page params.
   */
  nextPageParams(): null {
    return null;
  }

  nextPageInfo(): null {
    return null;
  }
}

export type NumberedPageResponse<Item> = Item[];

export interface NumberedPageParams {
  page?: number;

  /**
   * The number of results per page (max 100).
   */
  'per-page'?: number;
}

export class NumberedPage<Item> extends AbstractPage<Item> {
  data: Array<Item>;

  constructor(
    client: APIClient,
    response: Response,
    body: NumberedPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.data = body || [];
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<NumberedPageParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const query = this.options.query as NumberedPageParams;
    const currentPage = query?.page ?? 1;

    return { params: { page: currentPage + 1 } };
  }
}
