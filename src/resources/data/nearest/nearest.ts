// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as GeoAPI from './geo/geo';

export class Nearest extends APIResource {
  geo: GeoAPI.Geo = new GeoAPI.Geo(this._client);
}

export namespace Nearest {
  export import Geo = GeoAPI.Geo;
}
