// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Locales extends APIResource {
  /**
   * Returns the list of supported locale codes and names for species common names,
   * with the last time they were updated. Use the accept-language header to get
   * translated language names when available.
   *
   * NOTE: The locale codes and names are stable but the other fields in this result
   * are not yet finalized and should be used with caution.
   */
  list(
    params: LocaleListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LocaleListResponse> {
    const { 'Accept-Language': acceptLanguage } = params ?? {};
    return this._client.get('/ref/taxa-locales/ebird', {
      ...options,
      headers: buildHeaders([
        { ...(acceptLanguage != null ? { 'Accept-Language': acceptLanguage } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export type LocaleListResponse = Array<LocaleListResponse.LocaleListResponseItem>;

export namespace LocaleListResponse {
  export interface LocaleListResponseItem {
    code?: string;

    lastUpdated?: string;

    name?: string;
  }
}

export interface LocaleListParams {
  'Accept-Language'?: string;
}

export declare namespace Locales {
  export { type LocaleListResponse as LocaleListResponse, type LocaleListParams as LocaleListParams };
}
