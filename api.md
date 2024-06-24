# Data

## Obs

### Recent

Types:

- <code><a href="./src/resources/data/obs/recent/recent.ts">RecentListResponse</a></code>

Methods:

- <code title="get /data/obs/{regionCode}/recent">client.data.obs.recent.<a href="./src/resources/data/obs/recent/recent.ts">list</a>(regionCode, { ...params }) -> RecentListResponse</code>

#### Notable

Types:

- <code><a href="./src/resources/data/obs/recent/notable.ts">NotableListResponse</a></code>

Methods:

- <code title="get /data/obs/{regionCode}/recent/notable">client.data.obs.recent.notable.<a href="./src/resources/data/obs/recent/notable.ts">list</a>(regionCode, { ...params }) -> NotableListResponse</code>

#### Species

Types:

- <code><a href="./src/resources/data/obs/recent/species.ts">SpecieRetrieveResponse</a></code>

Methods:

- <code title="get /data/obs/{regionCode}/recent/{speciesCode}">client.data.obs.recent.species.<a href="./src/resources/data/obs/recent/species.ts">retrieve</a>(regionCode, speciesCode, { ...params }) -> SpecieRetrieveResponse</code>

### Geo

#### Recent

Types:

- <code><a href="./src/resources/data/obs/geo/recent/recent.ts">RecentListResponse</a></code>

Methods:

- <code title="get /data/obs/geo/recent">client.data.obs.geo.recent.<a href="./src/resources/data/obs/geo/recent/recent.ts">list</a>({ ...params }) -> RecentListResponse</code>

##### Species

Types:

- <code><a href="./src/resources/data/obs/geo/recent/species.ts">SpecieListResponse</a></code>

Methods:

- <code title="get /data/obs/geo/recent/{speciesCode}">client.data.obs.geo.recent.species.<a href="./src/resources/data/obs/geo/recent/species.ts">list</a>(speciesCode, { ...params }) -> SpecieListResponse</code>

##### Notable

Methods:

- <code title="get /data/obs/geo/recent/notable">client.data.obs.geo.recent.notable.<a href="./src/resources/data/obs/geo/recent/notable.ts">list</a>({ ...params }) -> void</code>

### Historic

Methods:

- <code title="get /data/obs/{regionCode}/historic/{y}/{m}/{d}">client.data.obs.historic.<a href="./src/resources/data/obs/historic.ts">list</a>(regionCode, y, m, d, { ...params }) -> void</code>

## Nearest

### Geo

#### Recent

##### Species

Methods:

- <code title="get /data/nearest/geo/recent/{speciesCode}">client.data.nearest.geo.recent.species.<a href="./src/resources/data/nearest/geo/recent/species.ts">list</a>(speciesCode, { ...params }) -> void</code>

# Product

## Lists

### Region

Methods:

- <code title="get /product/lists/{regionCode}">client.product.lists.region.<a href="./src/resources/product/lists/region.ts">retrieve</a>(regionCode, { ...params }) -> void</code>

## Top100

Methods:

- <code title="get /product/top100/{regionCode}/{y}/{m}/{d}">client.product.top100.<a href="./src/resources/product/top100.ts">list</a>(regionCode, y, m, d, { ...params }) -> void</code>

## Checklists

Methods:

- <code title="get /product/lists/{regionCode}/{y}/{m}/{d}">client.product.checklists.<a href="./src/resources/product/checklists/checklists.ts">retrieve</a>(regionCode, y, m, d, { ...params }) -> void</code>

### Summary

Methods:

- <code title="get /product/stats/{regionCode}/{y}/{m}/{d}">client.product.checklists.summary.<a href="./src/resources/product/checklists/summary.ts">retrieve</a>(regionCode, y, m, d) -> void</code>

## Species

Methods:

- <code title="get /product/spplist/{regionCode}">client.product.species.<a href="./src/resources/product/species.ts">list</a>(regionCode) -> void</code>

## Checklist

Types:

- <code><a href="./src/resources/product/checklist.ts">ChecklistRetrieveResponse</a></code>

Methods:

- <code title="get /product/checklist/view/{subId}">client.product.checklist.<a href="./src/resources/product/checklist.ts">retrieve</a>(subId) -> ChecklistRetrieveResponse</code>

# Ref

## Geo

### Adjacent

Types:

- <code><a href="./src/resources/ref/geo/adjacent.ts">AdjacentRetrieveResponse</a></code>

Methods:

- <code title="get /ref/adjacent/{regionCode}">client.ref.geo.adjacent.<a href="./src/resources/ref/geo/adjacent.ts">retrieve</a>(regionCode) -> AdjacentRetrieveResponse</code>

## Hotspots

Methods:

- <code title="get /ref/hotspot/{regionCode}">client.ref.hotspots.<a href="./src/resources/ref/hotspots/hotspots.ts">list</a>(regionCode, { ...params }) -> void</code>

### Geo

Methods:

- <code title="get /ref/hotspot/geo">client.ref.hotspots.geo.<a href="./src/resources/ref/hotspots/geo.ts">retrieve</a>({ ...params }) -> void</code>

### Info

Types:

- <code><a href="./src/resources/ref/hotspots/info.ts">InfoRetrieveResponse</a></code>

Methods:

- <code title="get /ref/hotspot/info/{locId}">client.ref.hotspots.info.<a href="./src/resources/ref/hotspots/info.ts">retrieve</a>(locId) -> InfoRetrieveResponse</code>

## Taxonomy

### Ebird

Types:

- <code><a href="./src/resources/ref/taxonomy/ebird.ts">EbirdRetrieveResponse</a></code>

Methods:

- <code title="get /ref/taxonomy/ebird">client.ref.taxonomy.ebird.<a href="./src/resources/ref/taxonomy/ebird.ts">retrieve</a>({ ...params }) -> string</code>

### Subspecies

Types:

- <code><a href="./src/resources/ref/taxonomy/subspecies.ts">SubspecieListResponse</a></code>

Methods:

- <code title="get /ref/taxon/forms/{speciesCode}">client.ref.taxonomy.subspecies.<a href="./src/resources/ref/taxonomy/subspecies.ts">list</a>(speciesCode) -> SubspecieListResponse</code>

# RefTaxonomy

## TaxaLocales

### Ebird

Types:

- <code><a href="./src/resources/ref-taxonomy/taxa-locales/ebird.ts">EbirdListResponse</a></code>

Methods:

- <code title="get /ref/taxa-locales/ebird">client.refTaxonomy.taxaLocales.ebird.<a href="./src/resources/ref-taxonomy/taxa-locales/ebird.ts">list</a>({ ...params }) -> EbirdListResponse</code>

## Versions

Types:

- <code><a href="./src/resources/ref-taxonomy/versions.ts">VersionListResponse</a></code>

Methods:

- <code title="get /ref/taxonomy/versions">client.refTaxonomy.versions.<a href="./src/resources/ref-taxonomy/versions.ts">list</a>() -> VersionListResponse</code>

## Sppgroup

Types:

- <code><a href="./src/resources/ref-taxonomy/sppgroup.ts">SppgroupRetrieveResponse</a></code>

Methods:

- <code title="get /ref/sppgroup/{speciesGrouping}">client.refTaxonomy.sppgroup.<a href="./src/resources/ref-taxonomy/sppgroup.ts">retrieve</a>(speciesGrouping, { ...params }) -> SppgroupRetrieveResponse</code>

# RefRegion

## Info

Types:

- <code><a href="./src/resources/ref-region/info.ts">InfoRetrieveResponse</a></code>

Methods:

- <code title="get /ref/region/info/{regionCode}">client.refRegion.info.<a href="./src/resources/ref-region/info.ts">retrieve</a>(regionCode, { ...params }) -> InfoRetrieveResponse</code>

## List

Types:

- <code><a href="./src/resources/ref-region/list.ts">ListRetrieveResponse</a></code>

Methods:

- <code title="get /ref/region/list/{regionType}/{parentRegionCode}">client.refRegion.list.<a href="./src/resources/ref-region/list.ts">retrieve</a>(regionType, parentRegionCode, { ...params }) -> ListRetrieveResponse</code>
