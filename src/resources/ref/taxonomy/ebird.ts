// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Ebird extends APIResource {
  /**
   * Get the taxonomy used by eBird. #### Notes Each entry in the taxonomy contains a
   * species code for example, barswa for Barn Swallow. You can download the taxonomy
   * for selected species using the _species_ query parameter with a comma separating
   * each code. Otherwise the full taxonomy is downloaded.
   *
   * @example
   * ```ts
   * const ebirds = await client.ref.taxonomy.ebird.retrieve();
   * ```
   */
  retrieve(
    query: EbirdRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EbirdRetrieveResponse> {
    return this._client.get('/ref/taxonomy/ebird', { query, ...options });
  }
}

export type EbirdRetrieveResponse = Array<EbirdRetrieveResponse.EbirdRetrieveResponseItem>;

export namespace EbirdRetrieveResponse {
  export interface EbirdRetrieveResponseItem {
    bandingCodes?: Array<string>;

    category?: string;

    comName?: string;

    comNameCodes?: Array<string>;

    familyCode?: string;

    familyComName?: string;

    familySciName?: string;

    order?: string;

    sciName?: string;

    sciNameCodes?: Array<string>;

    speciesCode?: string;

    taxonOrder?: number;
  }
}

export interface EbirdRetrieveParams {
  /**
   * Only fetch records from these taxonomic categories.
   */
  cat?: string;

  /**
   * Fetch the records in CSV or JSON format.
   */
  fmt?: 'csv' | 'json';

  /**
   * Use this language for common names.
   */
  locale?: string;

  /**
   * Only fetch records for these species.
   */
  species?: string;

  /**
   * Fetch a specific version of the taxonomy.
   */
  version?: string;
}

export declare namespace Ebird {
  export {
    type EbirdRetrieveResponse as EbirdRetrieveResponse,
    type EbirdRetrieveParams as EbirdRetrieveParams,
  };
}
