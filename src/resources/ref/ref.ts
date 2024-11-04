// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as HotspotAPI from './hotspot/hotspot';
import { Hotspot, HotspotListParams, HotspotListResponse } from './hotspot/hotspot';
import * as RegionAPI from './region/region';
import { Region } from './region/region';
import * as TaxonomyAPI from './taxonomy/taxonomy';
import { Taxonomy } from './taxonomy/taxonomy';

export class Ref extends APIResource {
  region: RegionAPI.Region = new RegionAPI.Region(this._client);
  hotspot: HotspotAPI.Hotspot = new HotspotAPI.Hotspot(this._client);
  taxonomy: TaxonomyAPI.Taxonomy = new TaxonomyAPI.Taxonomy(this._client);
}

Ref.Region = Region;
Ref.Hotspot = Hotspot;
Ref.Taxonomy = Taxonomy;

export declare namespace Ref {
  export { Region as Region };

  export {
    Hotspot as Hotspot,
    type HotspotListResponse as HotspotListResponse,
    type HotspotListParams as HotspotListParams,
  };

  export { Taxonomy as Taxonomy };
}
