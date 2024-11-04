// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as GeoSpeciesAPI from './geo-species';
import { GeoSpecieListParams, GeoSpecieListResponse, GeoSpecies } from './geo-species';

export class Nearest extends APIResource {
  geoSpecies: GeoSpeciesAPI.GeoSpecies = new GeoSpeciesAPI.GeoSpecies(this._client);
}

Nearest.GeoSpecies = GeoSpecies;

export declare namespace Nearest {
  export {
    GeoSpecies as GeoSpecies,
    type GeoSpecieListResponse as GeoSpecieListResponse,
    type GeoSpecieListParams as GeoSpecieListParams,
  };
}
