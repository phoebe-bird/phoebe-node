# Data

## Observations

Types:

- <code><a href="./src/resources/data/observations/observations.ts">Observation</a></code>

### Recent

Types:

- <code><a href="./src/resources/data/observations/recent/recent.ts">RecentListResponse</a></code>

Methods:

- <code title="get /data/obs/{regionCode}/recent">client.data.observations.recent.<a href="./src/resources/data/observations/recent/recent.ts">list</a>(regionCode, { ...params }) -> RecentListResponse</code>

#### Notable

Types:

- <code><a href="./src/resources/data/observations/recent/notable.ts">NotableListResponse</a></code>

Methods:

- <code title="get /data/obs/{regionCode}/recent/notable">client.data.observations.recent.notable.<a href="./src/resources/data/observations/recent/notable.ts">list</a>(regionCode, { ...params }) -> NotableListResponse</code>

#### Species

Types:

- <code><a href="./src/resources/data/observations/recent/species.ts">SpecieRetrieveResponse</a></code>

Methods:

- <code title="get /data/obs/{regionCode}/recent/{speciesCode}">client.data.observations.recent.species.<a href="./src/resources/data/observations/recent/species.ts">retrieve</a>(speciesCode, { ...params }) -> SpecieRetrieveResponse</code>

#### Historic

Types:

- <code><a href="./src/resources/data/observations/recent/historic.ts">HistoricListResponse</a></code>

Methods:

- <code title="get /data/obs/{regionCode}/historic/{y}/{m}/{d}">client.data.observations.recent.historic.<a href="./src/resources/data/observations/recent/historic.ts">list</a>(d, { ...params }) -> HistoricListResponse</code>

### Geo

#### Recent

Types:

- <code><a href="./src/resources/data/observations/geo/recent/recent.ts">RecentListResponse</a></code>

Methods:

- <code title="get /data/obs/geo/recent">client.data.observations.geo.recent.<a href="./src/resources/data/observations/geo/recent/recent.ts">list</a>({ ...params }) -> RecentListResponse</code>

##### Species

Types:

- <code><a href="./src/resources/data/observations/geo/recent/species.ts">SpecieListResponse</a></code>

Methods:

- <code title="get /data/obs/geo/recent/{speciesCode}">client.data.observations.geo.recent.species.<a href="./src/resources/data/observations/geo/recent/species.ts">list</a>(speciesCode, { ...params }) -> SpecieListResponse</code>

##### Notable

Types:

- <code><a href="./src/resources/data/observations/geo/recent/notable.ts">NotableListResponse</a></code>

Methods:

- <code title="get /data/obs/geo/recent/notable">client.data.observations.geo.recent.notable.<a href="./src/resources/data/observations/geo/recent/notable.ts">list</a>({ ...params }) -> NotableListResponse</code>

### Nearest

#### GeoSpecies

Types:

- <code><a href="./src/resources/data/observations/nearest/geo-species.ts">GeoSpecieListResponse</a></code>

Methods:

- <code title="get /data/nearest/geo/recent/{speciesCode}">client.data.observations.nearest.geoSpecies.<a href="./src/resources/data/observations/nearest/geo-species.ts">list</a>(speciesCode, { ...params }) -> GeoSpecieListResponse</code>

# Product

## Lists

Types:

- <code><a href="./src/resources/product/lists/lists.ts">ListRetrieveResponse</a></code>

Methods:

- <code title="get /product/lists/{regionCode}">client.product.lists.<a href="./src/resources/product/lists/lists.ts">retrieve</a>(regionCode, { ...params }) -> ListRetrieveResponse</code>

### Historical

Types:

- <code><a href="./src/resources/product/lists/historical.ts">HistoricalRetrieveResponse</a></code>

Methods:

- <code title="get /product/lists/{regionCode}/{y}/{m}/{d}">client.product.lists.historical.<a href="./src/resources/product/lists/historical.ts">retrieve</a>(d, { ...params }) -> HistoricalRetrieveResponse</code>

## Top100

Types:

- <code><a href="./src/resources/product/top100.ts">Top100RetrieveResponse</a></code>

Methods:

- <code title="get /product/top100/{regionCode}/{y}/{m}/{d}">client.product.top100.<a href="./src/resources/product/top100.ts">retrieve</a>(d, { ...params }) -> Top100RetrieveResponse</code>

## Stats

Types:

- <code><a href="./src/resources/product/stats.ts">StatRetrieveResponse</a></code>

Methods:

- <code title="get /product/stats/{regionCode}/{y}/{m}/{d}">client.product.stats.<a href="./src/resources/product/stats.ts">retrieve</a>(d, { ...params }) -> StatRetrieveResponse</code>

## SpeciesList

Types:

- <code><a href="./src/resources/product/species-list.ts">SpeciesListListResponse</a></code>

Methods:

- <code title="get /product/spplist/{regionCode}">client.product.speciesList.<a href="./src/resources/product/species-list.ts">list</a>(regionCode) -> SpeciesListListResponse</code>

## Checklist

Types:

- <code><a href="./src/resources/product/checklist.ts">ChecklistViewResponse</a></code>

Methods:

- <code title="get /product/checklist/view/{subId}">client.product.checklist.<a href="./src/resources/product/checklist.ts">view</a>(subID) -> ChecklistViewResponse</code>

# Ref

## Region

### Adjacent

Types:

- <code><a href="./src/resources/ref/region/adjacent.ts">AdjacentListResponse</a></code>

Methods:

- <code title="get /ref/adjacent/{regionCode}">client.ref.region.adjacent.<a href="./src/resources/ref/region/adjacent.ts">list</a>(regionCode) -> AdjacentListResponse</code>

### Info

Types:

- <code><a href="./src/resources/ref/region/info.ts">InfoRetrieveResponse</a></code>

Methods:

- <code title="get /ref/region/info/{regionCode}">client.ref.region.info.<a href="./src/resources/ref/region/info.ts">retrieve</a>(regionCode, { ...params }) -> InfoRetrieveResponse</code>

### List

Types:

- <code><a href="./src/resources/ref/region/list.ts">ListListResponse</a></code>

Methods:

- <code title="get /ref/region/list/{regionType}/{parentRegionCode}">client.ref.region.list.<a href="./src/resources/ref/region/list.ts">list</a>(parentRegionCode, { ...params }) -> ListListResponse</code>

## Hotspot

Types:

- <code><a href="./src/resources/ref/hotspot/hotspot.ts">HotspotListResponse</a></code>

Methods:

- <code title="get /ref/hotspot/{regionCode}">client.ref.hotspot.<a href="./src/resources/ref/hotspot/hotspot.ts">list</a>(regionCode, { ...params }) -> HotspotListResponse</code>

### Geo

Types:

- <code><a href="./src/resources/ref/hotspot/geo.ts">GeoRetrieveResponse</a></code>

Methods:

- <code title="get /ref/hotspot/geo">client.ref.hotspot.geo.<a href="./src/resources/ref/hotspot/geo.ts">retrieve</a>({ ...params }) -> GeoRetrieveResponse</code>

### Info

Types:

- <code><a href="./src/resources/ref/hotspot/info.ts">InfoRetrieveResponse</a></code>

Methods:

- <code title="get /ref/hotspot/info/{locId}">client.ref.hotspot.info.<a href="./src/resources/ref/hotspot/info.ts">retrieve</a>(locID) -> InfoRetrieveResponse</code>

## Taxonomy

### Ebird

Types:

- <code><a href="./src/resources/ref/taxonomy/ebird.ts">EbirdRetrieveResponse</a></code>

Methods:

- <code title="get /ref/taxonomy/ebird">client.ref.taxonomy.ebird.<a href="./src/resources/ref/taxonomy/ebird.ts">retrieve</a>({ ...params }) -> EbirdRetrieveResponse</code>

### Forms

Types:

- <code><a href="./src/resources/ref/taxonomy/forms.ts">FormListResponse</a></code>

Methods:

- <code title="get /ref/taxon/forms/{speciesCode}">client.ref.taxonomy.forms.<a href="./src/resources/ref/taxonomy/forms.ts">list</a>(speciesCode) -> FormListResponse</code>

### Locales

Types:

- <code><a href="./src/resources/ref/taxonomy/locales.ts">LocaleListResponse</a></code>

Methods:

- <code title="get /ref/taxa-locales/ebird">client.ref.taxonomy.locales.<a href="./src/resources/ref/taxonomy/locales.ts">list</a>({ ...params }) -> LocaleListResponse</code>

### Versions

Types:

- <code><a href="./src/resources/ref/taxonomy/versions.ts">VersionListResponse</a></code>

Methods:

- <code title="get /ref/taxonomy/versions">client.ref.taxonomy.versions.<a href="./src/resources/ref/taxonomy/versions.ts">list</a>() -> VersionListResponse</code>

### SpeciesGroups

Types:

- <code><a href="./src/resources/ref/taxonomy/species-groups.ts">SpeciesGroupListResponse</a></code>

Methods:

- <code title="get /ref/sppgroup/{speciesGrouping}">client.ref.taxonomy.speciesGroups.<a href="./src/resources/ref/taxonomy/species-groups.ts">list</a>(speciesGrouping, { ...params }) -> SpeciesGroupListResponse</code>
