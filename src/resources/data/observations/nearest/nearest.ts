// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as GeoSpeciesAPI from './geo-species';

export class Nearest extends APIResource {
  geoSpecies: GeoSpeciesAPI.GeoSpecies = new GeoSpeciesAPI.GeoSpecies(this._client);
}

export namespace Nearest {
  export import GeoSpecies = GeoSpeciesAPI.GeoSpecies;
  export import GeoSpecieListResponse = GeoSpeciesAPI.GeoSpecieListResponse;
  export import GeoSpecieListParams = GeoSpeciesAPI.GeoSpecieListParams;
}
