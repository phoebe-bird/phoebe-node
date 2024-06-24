// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../core';
import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as EbirdAPI from './ebird';

export class Ebird extends APIResource {
  /**
   * Returns the list of supported locale codes and names for species common names,
   * with the last time they were updated. Use the accept-language header to get
   * translated language names when available.
   *
   * NOTE: The locale codes and names are stable but the other fields in this result
   * are not yet finalized and should be used with caution.
   */
  list(params?: EbirdListParams, options?: Core.RequestOptions): Core.APIPromise<EbirdListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<EbirdListResponse>;
  list(
    params: EbirdListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<EbirdListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { 'Accept-Language': acceptLanguage } = params;
    return this._client.get('/ref/taxa-locales/ebird', {
      ...options,
      headers: {
        ...(acceptLanguage != null ? { 'Accept-Language': acceptLanguage } : undefined),
        ...options?.headers,
      },
    });
  }
}

export type EbirdListResponse = Array<EbirdListResponse.EbirdListResponseItem>;

export namespace EbirdListResponse {
  export interface EbirdListResponseItem {
    code?: string;

    lastUpdated?: string;

    name?: string;
  }
}

export interface EbirdListParams {
  'Accept-Language'?: string;
}

export namespace Ebird {
  export import EbirdListResponse = EbirdAPI.EbirdListResponse;
  export import EbirdListParams = EbirdAPI.EbirdListParams;
}
