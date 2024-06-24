// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as HotspotAPI from './hotspot/hotspot';
import * as RegionAPI from './region/region';
import * as TaxonomyAPI from './taxonomy/taxonomy';

export class Ref extends APIResource {
  region: RegionAPI.Region = new RegionAPI.Region(this._client);
  hotspot: HotspotAPI.Hotspot = new HotspotAPI.Hotspot(this._client);
  taxonomy: TaxonomyAPI.Taxonomy = new TaxonomyAPI.Taxonomy(this._client);
}

export namespace Ref {
  export import Region = RegionAPI.Region;
  export import Hotspot = HotspotAPI.Hotspot;
  export import HotspotListParams = HotspotAPI.HotspotListParams;
  export import Taxonomy = TaxonomyAPI.Taxonomy;
}
