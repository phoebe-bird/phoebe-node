// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as GeoAPI from './geo/geo';
import * as HotspotsAPI from './hotspots/hotspots';
import * as TaxonomyAPI from './taxonomy/taxonomy';

export class Ref extends APIResource {
  geo: GeoAPI.Geo = new GeoAPI.Geo(this._client);
  hotspots: HotspotsAPI.Hotspots = new HotspotsAPI.Hotspots(this._client);
  taxonomy: TaxonomyAPI.Taxonomy = new TaxonomyAPI.Taxonomy(this._client);
}

export namespace Ref {
  export import Geo = GeoAPI.Geo;
  export import Hotspots = HotspotsAPI.Hotspots;
  export import HotspotListParams = HotspotsAPI.HotspotListParams;
  export import Taxonomy = TaxonomyAPI.Taxonomy;
}
