// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as InfoAPI from './info';

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
    query?: InfoRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InfoRetrieveResponse>;
  retrieve(regionCode: string, options?: Core.RequestOptions): Core.APIPromise<InfoRetrieveResponse>;
  retrieve(
    regionCode: string,
    query: InfoRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<InfoRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(regionCode, {}, query);
    }
    return this._client.get(`/ref/region/info/${regionCode}`, { query, ...options });
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

export namespace Info {
  export import InfoRetrieveResponse = InfoAPI.InfoRetrieveResponse;
  export import InfoRetrieveParams = InfoAPI.InfoRetrieveParams;
}
