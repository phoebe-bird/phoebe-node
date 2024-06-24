// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as SpeciesAPI from './species';

export class Recent extends APIResource {
  species: SpeciesAPI.Species = new SpeciesAPI.Species(this._client);
}

export namespace Recent {
  export import Species = SpeciesAPI.Species;
  export import SpecieListParams = SpeciesAPI.SpecieListParams;
}
