// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Info extends APIResource {
  /**
   * Get information on the name and geographical area covered by a region.
   *
   * #### Notes
   *
   * Taking Madison County, New York, USA (location code US-NY-053) as an example the
   * various values for the regionNameFormat query parameter work as follows:
   *
   * | Value          | Description                                | Result                           |
   * | -------------- | ------------------------------------------ | -------------------------------- |
   * | detailed       | return a detailed description              | Madison County, New York, US     |
   * | detailednoqual | return the name to the subnational1 level  | Madison, New York                |
   * | full           | return the full description                | Madison, New York, United States |
   * | namequal       | return the qualified name                  | Madison County                   |
   * | nameonly       | return only the name of the region         | Madison                          |
   * | revdetailed    | return the detailed description in reverse | US, New York, Madison County     |
   */
  retrieve(
    regionCode: string,
    query: InfoRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InfoRetrieveResponse> {
    return this._client.get(path`/ref/region/info/${regionCode}`, { query, ...options });
  }
}

export interface InfoRetrieveResponse {
  bounds?: InfoRetrieveResponse.Bounds;

  result?: string;
}

export namespace InfoRetrieveResponse {
  export interface Bounds {
    maxX?: number;

    maxY?: number;

    minX?: number;

    minY?: number;
  }
}

export interface InfoRetrieveParams {
  /**
   * The characters used to separate elements in the name.
   */
  delim?: string;

  /**
   * Control how the name is displayed.
   */
  regionNameFormat?: 'detailed' | 'detailednoqual' | 'full' | 'namequal' | 'nameonly' | 'revdetailed';
}

export declare namespace Info {
  export { type InfoRetrieveResponse as InfoRetrieveResponse, type InfoRetrieveParams as InfoRetrieveParams };
}
