// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'list',
    endpoint: '/data/obs/{regionCode}/recent',
    httpMethod: 'get',
    summary: 'Recent observations in a region',
    description:
      'Get the list of recent observations (up to 30 days ago) of birds seen\nin a country, state, county, or location. Results include only the most recent observation for each species in the region specified.',
    stainlessPath: '(resource) data.observations.recent > (method) list',
    qualified: 'client.data.observations.recent.list',
    params: [
      'regionCode: string;',
      'back?: number;',
      "cat?: 'species' | 'slash' | 'issf' | 'spuh' | 'hybrid' | 'domestic' | 'form' | 'intergrade';",
      'hotspot?: boolean;',
      'includeProvisional?: boolean;',
      'maxResults?: number;',
      'r?: string[];',
      'sppLocale?: string;',
    ],
    response:
      '{ id?: number; comName?: string; firstname?: string; howMany?: number; lastname?: string; lat?: number; lng?: number; locationPrivate?: boolean; locId?: string; locName?: string; obsDt?: string; obsReviewed?: boolean; obsValid?: boolean; sciName?: string; speciesCode?: string; subId?: string; }[]',
    markdown:
      "## list\n\n`client.data.observations.recent.list(regionCode: string, back?: number, cat?: 'species' | 'slash' | 'issf' | 'spuh' | 'hybrid' | 'domestic' | 'form' | 'intergrade', hotspot?: boolean, includeProvisional?: boolean, maxResults?: number, r?: string[], sppLocale?: string): object[]`\n\n**get** `/data/obs/{regionCode}/recent`\n\nGet the list of recent observations (up to 30 days ago) of birds seen\nin a country, state, county, or location. Results include only the most recent observation for each species in the region specified.\n\n### Parameters\n\n- `regionCode: string`\n\n- `back?: number`\n  The number of days back to fetch observations.\n\n- `cat?: 'species' | 'slash' | 'issf' | 'spuh' | 'hybrid' | 'domestic' | 'form' | 'intergrade'`\n  Only fetch observations from these taxonomic categories\n\n- `hotspot?: boolean`\n  Only fetch observations from hotspots\n\n- `includeProvisional?: boolean`\n  Include observations which have not yet been reviewed\n\n- `maxResults?: number`\n  Only fetch this number of observations\n\n- `r?: string[]`\n  Fetch observations from up to 10 locations\n\n- `sppLocale?: string`\n  Use this language for species common names\n\n### Returns\n\n- `{ id?: number; comName?: string; firstname?: string; howMany?: number; lastname?: string; lat?: number; lng?: number; locationPrivate?: boolean; locId?: string; locName?: string; obsDt?: string; obsReviewed?: boolean; obsValid?: boolean; sciName?: string; speciesCode?: string; subId?: string; }[]`\n\n### Example\n\n```typescript\nimport Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe();\n\nconst observations = await client.data.observations.recent.list('regionCode');\n\nconsole.log(observations);\n```",
  },
  {
    name: 'list',
    endpoint: '/data/obs/{regionCode}/recent/notable',
    httpMethod: 'get',
    summary: 'Recent notable observations in a region',
    description:
      'Get the list of recent, notable observations (up to 30 days ago) of birds seen in a country, region or location. Notable observations can be for locally or nationally rare species or are otherwise unusual, e.g. over-wintering birds in a species which is normally only a summer visitor.',
    stainlessPath: '(resource) data.observations.recent.notable > (method) list',
    qualified: 'client.data.observations.recent.notable.list',
    params: [
      'regionCode: string;',
      'back?: number;',
      "detail?: 'simple' | 'full';",
      'hotspot?: boolean;',
      'maxResults?: number;',
      'r?: string[];',
      'sppLocale?: string;',
    ],
    response:
      '{ id?: number; comName?: string; firstname?: string; howMany?: number; lastname?: string; lat?: number; lng?: number; locationPrivate?: boolean; locId?: string; locName?: string; obsDt?: string; obsReviewed?: boolean; obsValid?: boolean; sciName?: string; speciesCode?: string; subId?: string; }[]',
    markdown:
      "## list\n\n`client.data.observations.recent.notable.list(regionCode: string, back?: number, detail?: 'simple' | 'full', hotspot?: boolean, maxResults?: number, r?: string[], sppLocale?: string): object[]`\n\n**get** `/data/obs/{regionCode}/recent/notable`\n\nGet the list of recent, notable observations (up to 30 days ago) of birds seen in a country, region or location. Notable observations can be for locally or nationally rare species or are otherwise unusual, e.g. over-wintering birds in a species which is normally only a summer visitor.\n\n### Parameters\n\n- `regionCode: string`\n\n- `back?: number`\n  The number of days back to fetch observations.\n\n- `detail?: 'simple' | 'full'`\n  Include a subset (simple), or all (full), of the fields available.\n\n- `hotspot?: boolean`\n  Only fetch observations from hotspots\n\n- `maxResults?: number`\n  Only fetch this number of observations\n\n- `r?: string[]`\n  Fetch observations from up to 10 locations\n\n- `sppLocale?: string`\n  Use this language for species common names\n\n### Returns\n\n- `{ id?: number; comName?: string; firstname?: string; howMany?: number; lastname?: string; lat?: number; lng?: number; locationPrivate?: boolean; locId?: string; locName?: string; obsDt?: string; obsReviewed?: boolean; obsValid?: boolean; sciName?: string; speciesCode?: string; subId?: string; }[]`\n\n### Example\n\n```typescript\nimport Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe();\n\nconst observations = await client.data.observations.recent.notable.list('regionCode');\n\nconsole.log(observations);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/data/obs/{regionCode}/recent/{speciesCode}',
    httpMethod: 'get',
    summary: 'Recent observations of a species in a region',
    description:
      'Get the recent observations, up to 30 days ago, of a particular species\nin a country, region or location. Results include only the most recent observation from each location in the region specified.\n#### Notes\n\nThe species code is typically a 6-letter code, e.g. cangoo for Canada Goose. You can\nget complete set of species code from the GET eBird Taxonomy end-point.\n\nWhen using the *r* query parameter set the *regionCode* URL parameter to an empty string.',
    stainlessPath: '(resource) data.observations.recent.species > (method) retrieve',
    qualified: 'client.data.observations.recent.species.retrieve',
    params: [
      'regionCode: string;',
      'speciesCode: string;',
      'back?: number;',
      'hotspot?: boolean;',
      'includeProvisional?: boolean;',
      'maxResults?: number;',
      'r?: string[];',
      'sppLocale?: string;',
    ],
    response:
      '{ id?: number; comName?: string; firstname?: string; howMany?: number; lastname?: string; lat?: number; lng?: number; locationPrivate?: boolean; locId?: string; locName?: string; obsDt?: string; obsReviewed?: boolean; obsValid?: boolean; sciName?: string; speciesCode?: string; subId?: string; }[]',
    markdown:
      "## retrieve\n\n`client.data.observations.recent.species.retrieve(regionCode: string, speciesCode: string, back?: number, hotspot?: boolean, includeProvisional?: boolean, maxResults?: number, r?: string[], sppLocale?: string): object[]`\n\n**get** `/data/obs/{regionCode}/recent/{speciesCode}`\n\nGet the recent observations, up to 30 days ago, of a particular species\nin a country, region or location. Results include only the most recent observation from each location in the region specified.\n#### Notes\n\nThe species code is typically a 6-letter code, e.g. cangoo for Canada Goose. You can\nget complete set of species code from the GET eBird Taxonomy end-point.\n\nWhen using the *r* query parameter set the *regionCode* URL parameter to an empty string.\n\n### Parameters\n\n- `regionCode: string`\n\n- `speciesCode: string`\n\n- `back?: number`\n  The number of days back to fetch observations.\n\n- `hotspot?: boolean`\n  Only fetch observations from hotspots\n\n- `includeProvisional?: boolean`\n  Include observations which have not yet been reviewed.\n\n- `maxResults?: number`\n  Only fetch this number of observations\n\n- `r?: string[]`\n  Fetch observations from up to 10 locations\n\n- `sppLocale?: string`\n  Use this language for species common names\n\n### Returns\n\n- `{ id?: number; comName?: string; firstname?: string; howMany?: number; lastname?: string; lat?: number; lng?: number; locationPrivate?: boolean; locId?: string; locName?: string; obsDt?: string; obsReviewed?: boolean; obsValid?: boolean; sciName?: string; speciesCode?: string; subId?: string; }[]`\n\n### Example\n\n```typescript\nimport Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe();\n\nconst observations = await client.data.observations.recent.species.retrieve('speciesCode', { regionCode: 'regionCode' });\n\nconsole.log(observations);\n```",
  },
  {
    name: 'list',
    endpoint: '/data/obs/{regionCode}/historic/{y}/{m}/{d}',
    httpMethod: 'get',
    summary: 'Historic observations on a date',
    description:
      'Get a list of all taxa seen in a country, region or location on a specific date, with the specific observations determined by the "rank" parameter (defaults to latest observation on the date).\n#### Notes Responses may be cached for 30 minutes',
    stainlessPath: '(resource) data.observations.recent.historic > (method) list',
    qualified: 'client.data.observations.recent.historic.list',
    params: [
      'regionCode: string;',
      'y: number;',
      'm: number;',
      'd: number;',
      "cat?: 'species' | 'slash' | 'issf' | 'spuh' | 'hybrid' | 'domestic' | 'form' | 'intergrade';",
      "detail?: 'simple' | 'full';",
      'hotspot?: boolean;',
      'includeProvisional?: boolean;',
      'maxResults?: number;',
      'r?: string[];',
      "rank?: 'mrec' | 'create';",
      'sppLocale?: string;',
    ],
    response:
      '{ id?: number; comName?: string; firstname?: string; howMany?: number; lastname?: string; lat?: number; lng?: number; locationPrivate?: boolean; locId?: string; locName?: string; obsDt?: string; obsReviewed?: boolean; obsValid?: boolean; sciName?: string; speciesCode?: string; subId?: string; }[]',
    markdown:
      "## list\n\n`client.data.observations.recent.historic.list(regionCode: string, y: number, m: number, d: number, cat?: 'species' | 'slash' | 'issf' | 'spuh' | 'hybrid' | 'domestic' | 'form' | 'intergrade', detail?: 'simple' | 'full', hotspot?: boolean, includeProvisional?: boolean, maxResults?: number, r?: string[], rank?: 'mrec' | 'create', sppLocale?: string): object[]`\n\n**get** `/data/obs/{regionCode}/historic/{y}/{m}/{d}`\n\nGet a list of all taxa seen in a country, region or location on a specific date, with the specific observations determined by the \"rank\" parameter (defaults to latest observation on the date).\n#### Notes Responses may be cached for 30 minutes\n\n### Parameters\n\n- `regionCode: string`\n\n- `y: number`\n\n- `m: number`\n\n- `d: number`\n\n- `cat?: 'species' | 'slash' | 'issf' | 'spuh' | 'hybrid' | 'domestic' | 'form' | 'intergrade'`\n  Only fetch observations from these taxonomic categories\n\n- `detail?: 'simple' | 'full'`\n  Include a subset (simple), or all (full), of the fields available.\n\n- `hotspot?: boolean`\n  Only fetch observations from hotspots\n\n- `includeProvisional?: boolean`\n  Include observations which have not yet been reviewed.\n\n- `maxResults?: number`\n  Only fetch this number of observations\n\n- `r?: string[]`\n  Fetch observations from up to 50 locations\n\n- `rank?: 'mrec' | 'create'`\n  Include latest observation of the day, or the first added\n\n- `sppLocale?: string`\n  Use this language for species common names\n\n### Returns\n\n- `{ id?: number; comName?: string; firstname?: string; howMany?: number; lastname?: string; lat?: number; lng?: number; locationPrivate?: boolean; locId?: string; locName?: string; obsDt?: string; obsReviewed?: boolean; obsValid?: boolean; sciName?: string; speciesCode?: string; subId?: string; }[]`\n\n### Example\n\n```typescript\nimport Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe();\n\nconst observations = await client.data.observations.recent.historic.list(1, {\n  regionCode: 'regionCode',\n  y: 0,\n  m: 1,\n});\n\nconsole.log(observations);\n```",
  },
  {
    name: 'list',
    endpoint: '/data/obs/geo/recent',
    httpMethod: 'get',
    summary: 'Recent nearby observations',
    description:
      'Get the list of recent observations (up to 30 days ago) of birds seen\nat locations within a radius of up to 50 kilometers, from a given set\nof coordinates. Results include only the most recent observation for each species in the region specified.',
    stainlessPath: '(resource) data.observations.geo.recent > (method) list',
    qualified: 'client.data.observations.geo.recent.list',
    params: [
      'lat: number;',
      'lng: number;',
      'back?: number;',
      "cat?: 'species' | 'slash' | 'issf' | 'spuh' | 'hybrid' | 'domestic' | 'form' | 'intergrade';",
      'dist?: number;',
      'hotspot?: boolean;',
      'includeProvisional?: boolean;',
      'maxResults?: number;',
      "sort?: 'date' | 'species';",
      'sppLocale?: string;',
    ],
    response:
      '{ id?: number; comName?: string; firstname?: string; howMany?: number; lastname?: string; lat?: number; lng?: number; locationPrivate?: boolean; locId?: string; locName?: string; obsDt?: string; obsReviewed?: boolean; obsValid?: boolean; sciName?: string; speciesCode?: string; subId?: string; }[]',
    markdown:
      "## list\n\n`client.data.observations.geo.recent.list(lat: number, lng: number, back?: number, cat?: 'species' | 'slash' | 'issf' | 'spuh' | 'hybrid' | 'domestic' | 'form' | 'intergrade', dist?: number, hotspot?: boolean, includeProvisional?: boolean, maxResults?: number, sort?: 'date' | 'species', sppLocale?: string): object[]`\n\n**get** `/data/obs/geo/recent`\n\nGet the list of recent observations (up to 30 days ago) of birds seen\nat locations within a radius of up to 50 kilometers, from a given set\nof coordinates. Results include only the most recent observation for each species in the region specified.\n\n### Parameters\n\n- `lat: number`\n\n- `lng: number`\n\n- `back?: number`\n  The number of days back to fetch observations.\n\n- `cat?: 'species' | 'slash' | 'issf' | 'spuh' | 'hybrid' | 'domestic' | 'form' | 'intergrade'`\n  Only fetch observations from these taxonomic categories\n\n- `dist?: number`\n  The search radius from the given position, in kilometers.\n\n- `hotspot?: boolean`\n  Only fetch observations from hotspots\n\n- `includeProvisional?: boolean`\n  Include observations which have not yet been reviewed.\n\n- `maxResults?: number`\n  Only fetch this number of observations\n\n- `sort?: 'date' | 'species'`\n  Sort observations by taxonomy or by date, most recent first.\n\n- `sppLocale?: string`\n  Use this language for species common names\n\n### Returns\n\n- `{ id?: number; comName?: string; firstname?: string; howMany?: number; lastname?: string; lat?: number; lng?: number; locationPrivate?: boolean; locId?: string; locName?: string; obsDt?: string; obsReviewed?: boolean; obsValid?: boolean; sciName?: string; speciesCode?: string; subId?: string; }[]`\n\n### Example\n\n```typescript\nimport Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe();\n\nconst observations = await client.data.observations.geo.recent.list({ lat: -90, lng: -180 });\n\nconsole.log(observations);\n```",
  },
  {
    name: 'list',
    endpoint: '/data/obs/geo/recent/{speciesCode}',
    httpMethod: 'get',
    summary: 'Recent nearby observations of a species',
    description:
      'Get all observations of a species, seen up to 30 days ago, at any location within a radius of up to 50 kilometers, from a given set of coordinates. Results include only the most recent observation from each location in the region specified.\n\n#### URL parameters\n\n| Name | Description |\n| ---------- | ----------- |\n| speciesCode | The eBird species code. |\n#### Notes\nThe species code is typically a 6-letter code, e.g. horlar for Horned Lark. You can get complete set of species code from the GET eBird Taxonomy end-point.',
    stainlessPath: '(resource) data.observations.geo.recent.species > (method) list',
    qualified: 'client.data.observations.geo.recent.species.list',
    params: [
      'speciesCode: string;',
      'lat: number;',
      'lng: number;',
      'back?: number;',
      'dist?: number;',
      'hotspot?: boolean;',
      'includeProvisional?: boolean;',
      'maxResults?: number;',
      'sppLocale?: string;',
    ],
    response:
      '{ id?: number; comName?: string; firstname?: string; howMany?: number; lastname?: string; lat?: number; lng?: number; locationPrivate?: boolean; locId?: string; locName?: string; obsDt?: string; obsReviewed?: boolean; obsValid?: boolean; sciName?: string; speciesCode?: string; subId?: string; }[]',
    markdown:
      "## list\n\n`client.data.observations.geo.recent.species.list(speciesCode: string, lat: number, lng: number, back?: number, dist?: number, hotspot?: boolean, includeProvisional?: boolean, maxResults?: number, sppLocale?: string): object[]`\n\n**get** `/data/obs/geo/recent/{speciesCode}`\n\nGet all observations of a species, seen up to 30 days ago, at any location within a radius of up to 50 kilometers, from a given set of coordinates. Results include only the most recent observation from each location in the region specified.\n\n#### URL parameters\n\n| Name | Description |\n| ---------- | ----------- |\n| speciesCode | The eBird species code. |\n#### Notes\nThe species code is typically a 6-letter code, e.g. horlar for Horned Lark. You can get complete set of species code from the GET eBird Taxonomy end-point.\n\n### Parameters\n\n- `speciesCode: string`\n\n- `lat: number`\n\n- `lng: number`\n\n- `back?: number`\n  The number of days back to fetch observations.\n\n- `dist?: number`\n  The search radius from the given position, in kilometers.\n\n- `hotspot?: boolean`\n  Only fetch observations from hotspots\n\n- `includeProvisional?: boolean`\n  Include observations which have not yet been reviewed.\n\n- `maxResults?: number`\n  Only fetch this number of observations\n\n- `sppLocale?: string`\n  Use this language for species common names\n\n### Returns\n\n- `{ id?: number; comName?: string; firstname?: string; howMany?: number; lastname?: string; lat?: number; lng?: number; locationPrivate?: boolean; locId?: string; locName?: string; obsDt?: string; obsReviewed?: boolean; obsValid?: boolean; sciName?: string; speciesCode?: string; subId?: string; }[]`\n\n### Example\n\n```typescript\nimport Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe();\n\nconst observations = await client.data.observations.geo.recent.species.list('speciesCode', { lat: -90, lng: -180 });\n\nconsole.log(observations);\n```",
  },
  {
    name: 'list',
    endpoint: '/data/obs/geo/recent/notable',
    httpMethod: 'get',
    summary: 'Recent nearby notable observations',
    description:
      'Get the list of notable observations (up to 30 days ago) of birds seen at locations within a radius of up to 50 kilometers, from a given set of coordinates. Notable observations can be for locally or nationally rare species or are otherwise unusual, for example over-wintering birds in a species which is normally only a summer visitor.',
    stainlessPath: '(resource) data.observations.geo.recent.notable > (method) list',
    qualified: 'client.data.observations.geo.recent.notable.list',
    params: [
      'lat: number;',
      'lng: number;',
      'back?: number;',
      "detail?: 'simple' | 'full';",
      'dist?: number;',
      'hotspot?: boolean;',
      'maxResults?: number;',
      'sppLocale?: string;',
    ],
    response:
      '{ id?: number; comName?: string; firstname?: string; howMany?: number; lastname?: string; lat?: number; lng?: number; locationPrivate?: boolean; locId?: string; locName?: string; obsDt?: string; obsReviewed?: boolean; obsValid?: boolean; sciName?: string; speciesCode?: string; subId?: string; }[]',
    markdown:
      "## list\n\n`client.data.observations.geo.recent.notable.list(lat: number, lng: number, back?: number, detail?: 'simple' | 'full', dist?: number, hotspot?: boolean, maxResults?: number, sppLocale?: string): object[]`\n\n**get** `/data/obs/geo/recent/notable`\n\nGet the list of notable observations (up to 30 days ago) of birds seen at locations within a radius of up to 50 kilometers, from a given set of coordinates. Notable observations can be for locally or nationally rare species or are otherwise unusual, for example over-wintering birds in a species which is normally only a summer visitor.\n\n### Parameters\n\n- `lat: number`\n\n- `lng: number`\n\n- `back?: number`\n  The number of days back to fetch observations.\n\n- `detail?: 'simple' | 'full'`\n  Include a subset (simple), or all (full), of the fields available.\n\n- `dist?: number`\n  The search radius from the given position, in kilometers.\n\n- `hotspot?: boolean`\n  Only fetch observations from hotspots\n\n- `maxResults?: number`\n  Only fetch this number of observations\n\n- `sppLocale?: string`\n  Use this language for species common names\n\n### Returns\n\n- `{ id?: number; comName?: string; firstname?: string; howMany?: number; lastname?: string; lat?: number; lng?: number; locationPrivate?: boolean; locId?: string; locName?: string; obsDt?: string; obsReviewed?: boolean; obsValid?: boolean; sciName?: string; speciesCode?: string; subId?: string; }[]`\n\n### Example\n\n```typescript\nimport Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe();\n\nconst observations = await client.data.observations.geo.recent.notable.list({ lat: -90, lng: -180 });\n\nconsole.log(observations);\n```",
  },
  {
    name: 'list',
    endpoint: '/data/nearest/geo/recent/{speciesCode}',
    httpMethod: 'get',
    summary: 'Nearest observations of a species',
    description:
      'Find the nearest locations where a species has been seen recently. #### Notes The species code is typically a 6-letter code, e.g. barswa for Barn Swallow. You can get complete set of species code from the GET eBird Taxonomy end-point.',
    stainlessPath: '(resource) data.observations.nearest.geo_species > (method) list',
    qualified: 'client.data.observations.nearest.geoSpecies.list',
    params: [
      'speciesCode: string;',
      'lat: number;',
      'lng: number;',
      'back?: number;',
      'dist?: number;',
      'hotspot?: boolean;',
      'includeProvisional?: boolean;',
      'maxResults?: number;',
      'sppLocale?: string;',
    ],
    response:
      '{ id?: number; comName?: string; firstname?: string; howMany?: number; lastname?: string; lat?: number; lng?: number; locationPrivate?: boolean; locId?: string; locName?: string; obsDt?: string; obsReviewed?: boolean; obsValid?: boolean; sciName?: string; speciesCode?: string; subId?: string; }[]',
    markdown:
      "## list\n\n`client.data.observations.nearest.geoSpecies.list(speciesCode: string, lat: number, lng: number, back?: number, dist?: number, hotspot?: boolean, includeProvisional?: boolean, maxResults?: number, sppLocale?: string): object[]`\n\n**get** `/data/nearest/geo/recent/{speciesCode}`\n\nFind the nearest locations where a species has been seen recently. #### Notes The species code is typically a 6-letter code, e.g. barswa for Barn Swallow. You can get complete set of species code from the GET eBird Taxonomy end-point.\n\n### Parameters\n\n- `speciesCode: string`\n\n- `lat: number`\n\n- `lng: number`\n\n- `back?: number`\n  The number of days back to fetch observations.\n\n- `dist?: number`\n  Only fetch observations within this distance of the provided lat/lng\n\n- `hotspot?: boolean`\n  Only fetch observations from hotspots\n\n- `includeProvisional?: boolean`\n  Include observations which have not yet been reviewed.\n\n- `maxResults?: number`\n  Only fetch up to this number of observations\n\n- `sppLocale?: string`\n  Use this language for species common names\n\n### Returns\n\n- `{ id?: number; comName?: string; firstname?: string; howMany?: number; lastname?: string; lat?: number; lng?: number; locationPrivate?: boolean; locId?: string; locName?: string; obsDt?: string; obsReviewed?: boolean; obsValid?: boolean; sciName?: string; speciesCode?: string; subId?: string; }[]`\n\n### Example\n\n```typescript\nimport Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe();\n\nconst observations = await client.data.observations.nearest.geoSpecies.list('speciesCode', { lat: -90, lng: -180 });\n\nconsole.log(observations);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/product/lists/{regionCode}',
    httpMethod: 'get',
    summary: 'Recent checklists feed',
    description: 'Get information on the most recently submitted checklists for a region.',
    stainlessPath: '(resource) product.lists > (method) retrieve',
    qualified: 'client.product.lists.retrieve',
    params: ['regionCode: string;', 'maxResults?: number;'],
    response:
      '{ allObsReported?: boolean; checklistId?: string; creationDt?: string; durationHrs?: number; isoObsDate?: string; lastEditedDt?: string; loc?: { countryCode?: string; countryName?: string; hierarchicalName?: string; isHotspot?: boolean; lat?: number; latitude?: number; lng?: number; locId?: string; locName?: string; longitude?: number; name?: string; subnational1Code?: string; subnational1Name?: string; }; locId?: string; numObservers?: number; numSpecies?: number; obs?: { obsAux?: { auxCode?: string; entryMethodCode?: string; fieldName?: string; obsId?: string; speciesCode?: string; subId?: string; value?: string; }[]; obsDt?: string; obsId?: string; speciesCode?: string; }[]; obsDt?: string; obsTime?: string; obsTimeValid?: boolean; projId?: string; protocolId?: string; subId?: string; submissionMethodCode?: string; subnational1Code?: string; userDisplayName?: string; }[]',
    markdown:
      "## retrieve\n\n`client.product.lists.retrieve(regionCode: string, maxResults?: number): { allObsReported?: boolean; checklistId?: string; creationDt?: string; durationHrs?: number; isoObsDate?: string; lastEditedDt?: string; loc?: object; locId?: string; numObservers?: number; numSpecies?: number; obs?: object[]; obsDt?: string; obsTime?: string; obsTimeValid?: boolean; projId?: string; protocolId?: string; subId?: string; submissionMethodCode?: string; subnational1Code?: string; userDisplayName?: string; }[]`\n\n**get** `/product/lists/{regionCode}`\n\nGet information on the most recently submitted checklists for a region.\n\n### Parameters\n\n- `regionCode: string`\n\n- `maxResults?: number`\n  Only fetch this number of checklists.\n\n### Returns\n\n- `{ allObsReported?: boolean; checklistId?: string; creationDt?: string; durationHrs?: number; isoObsDate?: string; lastEditedDt?: string; loc?: { countryCode?: string; countryName?: string; hierarchicalName?: string; isHotspot?: boolean; lat?: number; latitude?: number; lng?: number; locId?: string; locName?: string; longitude?: number; name?: string; subnational1Code?: string; subnational1Name?: string; }; locId?: string; numObservers?: number; numSpecies?: number; obs?: { obsAux?: { auxCode?: string; entryMethodCode?: string; fieldName?: string; obsId?: string; speciesCode?: string; subId?: string; value?: string; }[]; obsDt?: string; obsId?: string; speciesCode?: string; }[]; obsDt?: string; obsTime?: string; obsTimeValid?: boolean; projId?: string; protocolId?: string; subId?: string; submissionMethodCode?: string; subnational1Code?: string; userDisplayName?: string; }[]`\n\n### Example\n\n```typescript\nimport Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe();\n\nconst lists = await client.product.lists.retrieve('regionCode');\n\nconsole.log(lists);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/product/lists/{regionCode}/{y}/{m}/{d}',
    httpMethod: 'get',
    summary: 'Checklist feed on a date',
    description: 'Get information on the checklists submitted on a given date for a country or region.',
    stainlessPath: '(resource) product.lists.historical > (method) retrieve',
    qualified: 'client.product.lists.historical.retrieve',
    params: [
      'regionCode: string;',
      'y: number;',
      'm: number;',
      'd: number;',
      'maxResults?: number;',
      "sortKey?: 'obs_dt' | 'creation_dt';",
    ],
    response:
      '{ allObsReported?: boolean; checklistId?: string; creationDt?: string; durationHrs?: number; isoObsDate?: string; lastEditedDt?: string; loc?: { countryCode?: string; countryName?: string; hierarchicalName?: string; isHotspot?: boolean; lat?: number; latitude?: number; lng?: number; locId?: string; locName?: string; longitude?: number; name?: string; subnational1Code?: string; subnational1Name?: string; }; locId?: string; numObservers?: number; numSpecies?: number; obs?: { obsAux?: { auxCode?: string; entryMethodCode?: string; fieldName?: string; obsId?: string; speciesCode?: string; subId?: string; value?: string; }[]; obsDt?: string; obsId?: string; speciesCode?: string; }[]; obsDt?: string; obsTime?: string; obsTimeValid?: boolean; projId?: string; protocolId?: string; subId?: string; submissionMethodCode?: string; subnational1Code?: string; userDisplayName?: string; }[]',
    markdown:
      "## retrieve\n\n`client.product.lists.historical.retrieve(regionCode: string, y: number, m: number, d: number, maxResults?: number, sortKey?: 'obs_dt' | 'creation_dt'): { allObsReported?: boolean; checklistId?: string; creationDt?: string; durationHrs?: number; isoObsDate?: string; lastEditedDt?: string; loc?: object; locId?: string; numObservers?: number; numSpecies?: number; obs?: object[]; obsDt?: string; obsTime?: string; obsTimeValid?: boolean; projId?: string; protocolId?: string; subId?: string; submissionMethodCode?: string; subnational1Code?: string; userDisplayName?: string; }[]`\n\n**get** `/product/lists/{regionCode}/{y}/{m}/{d}`\n\nGet information on the checklists submitted on a given date for a country or region.\n\n### Parameters\n\n- `regionCode: string`\n\n- `y: number`\n\n- `m: number`\n\n- `d: number`\n\n- `maxResults?: number`\n  Only fetch this number of checklists.\n\n- `sortKey?: 'obs_dt' | 'creation_dt'`\n  Order the results by the date of the checklist or by the date it was submitted.\n\n### Returns\n\n- `{ allObsReported?: boolean; checklistId?: string; creationDt?: string; durationHrs?: number; isoObsDate?: string; lastEditedDt?: string; loc?: { countryCode?: string; countryName?: string; hierarchicalName?: string; isHotspot?: boolean; lat?: number; latitude?: number; lng?: number; locId?: string; locName?: string; longitude?: number; name?: string; subnational1Code?: string; subnational1Name?: string; }; locId?: string; numObservers?: number; numSpecies?: number; obs?: { obsAux?: { auxCode?: string; entryMethodCode?: string; fieldName?: string; obsId?: string; speciesCode?: string; subId?: string; value?: string; }[]; obsDt?: string; obsId?: string; speciesCode?: string; }[]; obsDt?: string; obsTime?: string; obsTimeValid?: boolean; projId?: string; protocolId?: string; subId?: string; submissionMethodCode?: string; subnational1Code?: string; userDisplayName?: string; }[]`\n\n### Example\n\n```typescript\nimport Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe();\n\nconst historicals = await client.product.lists.historical.retrieve(1, {\n  regionCode: 'regionCode',\n  y: 0,\n  m: 1,\n});\n\nconsole.log(historicals);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/product/top100/{regionCode}/{y}/{m}/{d}',
    httpMethod: 'get',
    summary: 'Top 100',
    description:
      'Get the top 100 contributors on a given date for a country or region.\n\n\n#### Notes\n\nThe results are updated every 15 minutes.\n\nWhen ordering by the number of completed checklists, the number of species seen will always be zero. Similarly when ordering by the number of species seen the number of completed checklists will always be zero.\n<b>Selected Response Field Notes</b>\n\nprofileHandle - if a user has enabled their profile, this is the handle to reach it via ebird.org/ebird/profile/{profileHandle}\n\nnumSpecies - always zero when checklistSort parameter is true. Invalid observations ARE included in this total\nnumCompleteChecklists - always zero when checklistSort parameter is false',
    stainlessPath: '(resource) product.top100 > (method) retrieve',
    qualified: 'client.product.top100.retrieve',
    params: [
      'regionCode: string;',
      'y: number;',
      'm: number;',
      'd: number;',
      'maxResults?: number;',
      "rankedBy?: 'spp' | 'cl';",
    ],
    response:
      '{ numCompleteChecklists?: number; numSpecies?: number; profileHandle?: string; rowNum?: number; userDisplayName?: string; userId?: string; }[]',
    markdown:
      "## retrieve\n\n`client.product.top100.retrieve(regionCode: string, y: number, m: number, d: number, maxResults?: number, rankedBy?: 'spp' | 'cl'): { numCompleteChecklists?: number; numSpecies?: number; profileHandle?: string; rowNum?: number; userDisplayName?: string; userId?: string; }[]`\n\n**get** `/product/top100/{regionCode}/{y}/{m}/{d}`\n\nGet the top 100 contributors on a given date for a country or region.\n\n\n#### Notes\n\nThe results are updated every 15 minutes.\n\nWhen ordering by the number of completed checklists, the number of species seen will always be zero. Similarly when ordering by the number of species seen the number of completed checklists will always be zero.\n<b>Selected Response Field Notes</b>\n\nprofileHandle - if a user has enabled their profile, this is the handle to reach it via ebird.org/ebird/profile/{profileHandle}\n\nnumSpecies - always zero when checklistSort parameter is true. Invalid observations ARE included in this total\nnumCompleteChecklists - always zero when checklistSort parameter is false\n\n### Parameters\n\n- `regionCode: string`\n\n- `y: number`\n\n- `m: number`\n\n- `d: number`\n\n- `maxResults?: number`\n  Only fetch this number of contributors.\n\n- `rankedBy?: 'spp' | 'cl'`\n  Order by number of complete checklists (cl) or by number of species seen (spp).\n\n### Returns\n\n- `{ numCompleteChecklists?: number; numSpecies?: number; profileHandle?: string; rowNum?: number; userDisplayName?: string; userId?: string; }[]`\n\n### Example\n\n```typescript\nimport Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe();\n\nconst top100s = await client.product.top100.retrieve(1, {\n  regionCode: 'regionCode',\n  y: 0,\n  m: 1,\n});\n\nconsole.log(top100s);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/product/stats/{regionCode}/{y}/{m}/{d}',
    httpMethod: 'get',
    summary: 'Regional statistics on a date',
    description:
      'Get a summary of the number of checklist submitted, species seen and contributors on a given date for a country or region.\n#### Notes The results are updated every 15 minutes.',
    stainlessPath: '(resource) product.stats > (method) retrieve',
    qualified: 'client.product.stats.retrieve',
    params: ['regionCode: string;', 'y: number;', 'm: number;', 'd: number;'],
    response: '{ numChecklists?: number; numContributors?: number; numSpecies?: number; }',
    markdown:
      "## retrieve\n\n`client.product.stats.retrieve(regionCode: string, y: number, m: number, d: number): { numChecklists?: number; numContributors?: number; numSpecies?: number; }`\n\n**get** `/product/stats/{regionCode}/{y}/{m}/{d}`\n\nGet a summary of the number of checklist submitted, species seen and contributors on a given date for a country or region.\n#### Notes The results are updated every 15 minutes.\n\n### Parameters\n\n- `regionCode: string`\n\n- `y: number`\n\n- `m: number`\n\n- `d: number`\n\n### Returns\n\n- `{ numChecklists?: number; numContributors?: number; numSpecies?: number; }`\n\n  - `numChecklists?: number`\n  - `numContributors?: number`\n  - `numSpecies?: number`\n\n### Example\n\n```typescript\nimport Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe();\n\nconst stat = await client.product.stats.retrieve(1, {\n  regionCode: 'regionCode',\n  y: 0,\n  m: 1,\n});\n\nconsole.log(stat);\n```",
  },
  {
    name: 'list',
    endpoint: '/product/spplist/{regionCode}',
    httpMethod: 'get',
    summary: 'Species List for a Region',
    description:
      'Get a list of species codes ever seen in a region, in taxonomic order (species taxa only)\n#### Notes The results are usually updated every 10 seconds for locations, every day for larger regions.',
    stainlessPath: '(resource) product.speciesList > (method) list',
    qualified: 'client.product.speciesList.list',
    params: ['regionCode: string;'],
    response: 'string[]',
    markdown:
      "## list\n\n`client.product.speciesList.list(regionCode: string): string[]`\n\n**get** `/product/spplist/{regionCode}`\n\nGet a list of species codes ever seen in a region, in taxonomic order (species taxa only)\n#### Notes The results are usually updated every 10 seconds for locations, every day for larger regions.\n\n### Parameters\n\n- `regionCode: string`\n\n### Returns\n\n- `string[]`\n\n### Example\n\n```typescript\nimport Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe();\n\nconst speciesLists = await client.product.speciesList.list('regionCode');\n\nconsole.log(speciesLists);\n```",
  },
  {
    name: 'view',
    endpoint: '/product/checklist/view/{subId}',
    httpMethod: 'get',
    summary: 'View Checklist',
    description:
      'Get the details and observations of a checklist.\n#### Notes Do NOT use this to download large amounts of data. You will be banned if you do. In the fields for each observation, the following fields are duplicates or obsolete and will be removed at a future date: *howManyAtleast*, *howManyAtmost*, *hideFlags*, *projId*, *subId*, *subnational1Code* and *present*.',
    stainlessPath: '(resource) product.checklist > (method) view',
    qualified: 'client.product.checklist.view',
    params: ['subId: string;'],
    response:
      '{ allObsReported?: boolean; checklistId?: string; creationDt?: string; durationHrs?: number; isoObsDate?: string; lastEditedDt?: string; loc?: { countryCode?: string; countryName?: string; hierarchicalName?: string; isHotspot?: boolean; lat?: number; latitude?: number; lng?: number; locId?: string; locName?: string; longitude?: number; name?: string; subnational1Code?: string; subnational1Name?: string; }; locId?: string; numObservers?: number; numSpecies?: number; obs?: { obsAux?: { auxCode?: string; entryMethodCode?: string; fieldName?: string; obsId?: string; speciesCode?: string; subId?: string; value?: string; }[]; obsDt?: string; obsId?: string; speciesCode?: string; }[]; obsDt?: string; obsTime?: string; obsTimeValid?: boolean; projId?: string; protocolId?: string; subId?: string; submissionMethodCode?: string; subnational1Code?: string; userDisplayName?: string; }',
    markdown:
      "## view\n\n`client.product.checklist.view(subId: string): { allObsReported?: boolean; checklistId?: string; creationDt?: string; durationHrs?: number; isoObsDate?: string; lastEditedDt?: string; loc?: object; locId?: string; numObservers?: number; numSpecies?: number; obs?: object[]; obsDt?: string; obsTime?: string; obsTimeValid?: boolean; projId?: string; protocolId?: string; subId?: string; submissionMethodCode?: string; subnational1Code?: string; userDisplayName?: string; }`\n\n**get** `/product/checklist/view/{subId}`\n\nGet the details and observations of a checklist.\n#### Notes Do NOT use this to download large amounts of data. You will be banned if you do. In the fields for each observation, the following fields are duplicates or obsolete and will be removed at a future date: *howManyAtleast*, *howManyAtmost*, *hideFlags*, *projId*, *subId*, *subnational1Code* and *present*.\n\n### Parameters\n\n- `subId: string`\n\n### Returns\n\n- `{ allObsReported?: boolean; checklistId?: string; creationDt?: string; durationHrs?: number; isoObsDate?: string; lastEditedDt?: string; loc?: { countryCode?: string; countryName?: string; hierarchicalName?: string; isHotspot?: boolean; lat?: number; latitude?: number; lng?: number; locId?: string; locName?: string; longitude?: number; name?: string; subnational1Code?: string; subnational1Name?: string; }; locId?: string; numObservers?: number; numSpecies?: number; obs?: { obsAux?: { auxCode?: string; entryMethodCode?: string; fieldName?: string; obsId?: string; speciesCode?: string; subId?: string; value?: string; }[]; obsDt?: string; obsId?: string; speciesCode?: string; }[]; obsDt?: string; obsTime?: string; obsTimeValid?: boolean; projId?: string; protocolId?: string; subId?: string; submissionMethodCode?: string; subnational1Code?: string; userDisplayName?: string; }`\n\n  - `allObsReported?: boolean`\n  - `checklistId?: string`\n  - `creationDt?: string`\n  - `durationHrs?: number`\n  - `isoObsDate?: string`\n  - `lastEditedDt?: string`\n  - `loc?: { countryCode?: string; countryName?: string; hierarchicalName?: string; isHotspot?: boolean; lat?: number; latitude?: number; lng?: number; locId?: string; locName?: string; longitude?: number; name?: string; subnational1Code?: string; subnational1Name?: string; }`\n  - `locId?: string`\n  - `numObservers?: number`\n  - `numSpecies?: number`\n  - `obs?: { obsAux?: { auxCode?: string; entryMethodCode?: string; fieldName?: string; obsId?: string; speciesCode?: string; subId?: string; value?: string; }[]; obsDt?: string; obsId?: string; speciesCode?: string; }[]`\n  - `obsDt?: string`\n  - `obsTime?: string`\n  - `obsTimeValid?: boolean`\n  - `projId?: string`\n  - `protocolId?: string`\n  - `subId?: string`\n  - `submissionMethodCode?: string`\n  - `subnational1Code?: string`\n  - `userDisplayName?: string`\n\n### Example\n\n```typescript\nimport Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe();\n\nconst response = await client.product.checklist.view('subId');\n\nconsole.log(response);\n```",
  },
  {
    name: 'list',
    endpoint: '/ref/adjacent/{regionCode}',
    httpMethod: 'get',
    summary: 'Adjacent Regions',
    description:
      'Get the list of countries or regions that share a border with this one. #### Notes Only subnational2 codes in the United States, New Zealand, or Mexico are currently supported',
    stainlessPath: '(resource) ref.region.adjacent > (method) list',
    qualified: 'client.ref.region.adjacent.list',
    params: ['regionCode: string;'],
    response: '{ code?: string; name?: string; }[]',
    markdown:
      "## list\n\n`client.ref.region.adjacent.list(regionCode: string): { code?: string; name?: string; }[]`\n\n**get** `/ref/adjacent/{regionCode}`\n\nGet the list of countries or regions that share a border with this one. #### Notes Only subnational2 codes in the United States, New Zealand, or Mexico are currently supported\n\n### Parameters\n\n- `regionCode: string`\n\n### Returns\n\n- `{ code?: string; name?: string; }[]`\n\n### Example\n\n```typescript\nimport Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe();\n\nconst adjacents = await client.ref.region.adjacent.list('regionCode');\n\nconsole.log(adjacents);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/ref/region/info/{regionCode}',
    httpMethod: 'get',
    summary: 'Region Info',
    description:
      'Get information on the name and geographical area covered by a region.\n#### Notes\n\nTaking Madison County, New York, USA (location code US-NY-053) as an example\nthe various values for the regionNameFormat query parameter work as follows:\n\n| Value | Description | Result |\n| ------| ----------- | ------ |\n| detailed | return a detailed description | Madison County, New York, US |\n| detailednoqual | return the name to the subnational1 level | Madison, New York |\n| full | return the full description | Madison, New York, United States |\n| namequal | return the qualified name | Madison County |\n| nameonly | return only the name of the region | Madison |\n| revdetailed | return the detailed description in reverse | US, New York, Madison County |',
    stainlessPath: '(resource) ref.region.info > (method) retrieve',
    qualified: 'client.ref.region.info.retrieve',
    params: [
      'regionCode: string;',
      'delim?: string;',
      "regionNameFormat?: 'detailed' | 'detailednoqual' | 'full' | 'namequal' | 'nameonly' | 'revdetailed';",
    ],
    response:
      '{ bounds?: { maxX?: number; maxY?: number; minX?: number; minY?: number; }; result?: string; }',
    markdown:
      "## retrieve\n\n`client.ref.region.info.retrieve(regionCode: string, delim?: string, regionNameFormat?: 'detailed' | 'detailednoqual' | 'full' | 'namequal' | 'nameonly' | 'revdetailed'): { bounds?: object; result?: string; }`\n\n**get** `/ref/region/info/{regionCode}`\n\nGet information on the name and geographical area covered by a region.\n#### Notes\n\nTaking Madison County, New York, USA (location code US-NY-053) as an example\nthe various values for the regionNameFormat query parameter work as follows:\n\n| Value | Description | Result |\n| ------| ----------- | ------ |\n| detailed | return a detailed description | Madison County, New York, US |\n| detailednoqual | return the name to the subnational1 level | Madison, New York |\n| full | return the full description | Madison, New York, United States |\n| namequal | return the qualified name | Madison County |\n| nameonly | return only the name of the region | Madison |\n| revdetailed | return the detailed description in reverse | US, New York, Madison County |\n\n### Parameters\n\n- `regionCode: string`\n\n- `delim?: string`\n  The characters used to separate elements in the name.\n\n- `regionNameFormat?: 'detailed' | 'detailednoqual' | 'full' | 'namequal' | 'nameonly' | 'revdetailed'`\n  Control how the name is displayed.\n\n### Returns\n\n- `{ bounds?: { maxX?: number; maxY?: number; minX?: number; minY?: number; }; result?: string; }`\n\n  - `bounds?: { maxX?: number; maxY?: number; minX?: number; minY?: number; }`\n  - `result?: string`\n\n### Example\n\n```typescript\nimport Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe();\n\nconst info = await client.ref.region.info.retrieve('regionCode');\n\nconsole.log(info);\n```",
  },
  {
    name: 'list',
    endpoint: '/ref/region/list/{regionType}/{parentRegionCode}',
    httpMethod: 'get',
    summary: 'Sub Region List',
    description:
      "Get the list of sub-regions for a given country or region. #### Notes Not all combinations of region type and region code are valid. You can fetch all the subnational1 or subnational2 regions for a country however you can only specify a region type of 'country' when using 'world' as a region code.",
    stainlessPath: '(resource) ref.region.list > (method) list',
    qualified: 'client.ref.region.list.list',
    params: ['regionType: string;', 'parentRegionCode: string;', "fmt?: 'csv' | 'json';"],
    response: '{ code?: string; name?: string; }[]',
    markdown:
      "## list\n\n`client.ref.region.list.list(regionType: string, parentRegionCode: string, fmt?: 'csv' | 'json'): { code?: string; name?: string; }[]`\n\n**get** `/ref/region/list/{regionType}/{parentRegionCode}`\n\nGet the list of sub-regions for a given country or region. #### Notes Not all combinations of region type and region code are valid. You can fetch all the subnational1 or subnational2 regions for a country however you can only specify a region type of 'country' when using 'world' as a region code.\n\n### Parameters\n\n- `regionType: string`\n\n- `parentRegionCode: string`\n\n- `fmt?: 'csv' | 'json'`\n  Fetch the records in CSV or JSON format.\n\n### Returns\n\n- `{ code?: string; name?: string; }[]`\n\n### Example\n\n```typescript\nimport Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe();\n\nconst lists = await client.ref.region.list.list('parentRegionCode', { regionType: 'regionType' });\n\nconsole.log(lists);\n```",
  },
  {
    name: 'list',
    endpoint: '/ref/hotspot/{regionCode}',
    httpMethod: 'get',
    summary: 'Hotspots in a region',
    description: 'Hotspots in a region',
    stainlessPath: '(resource) ref.hotspot > (method) list',
    qualified: 'client.ref.hotspot.list',
    params: ['regionCode: string;', 'back?: number;', "fmt?: 'csv' | 'json';"],
    response:
      '{ countryCode?: string; lat?: number; latestObsDt?: string; lng?: number; locId?: string; locName?: string; numSpeciesAllTime?: number; subnational1Code?: string; subnational2Code?: string; }[]',
    markdown:
      "## list\n\n`client.ref.hotspot.list(regionCode: string, back?: number, fmt?: 'csv' | 'json'): { countryCode?: string; lat?: number; latestObsDt?: string; lng?: number; locId?: string; locName?: string; numSpeciesAllTime?: number; subnational1Code?: string; subnational2Code?: string; }[]`\n\n**get** `/ref/hotspot/{regionCode}`\n\nHotspots in a region\n\n### Parameters\n\n- `regionCode: string`\n\n- `back?: number`\n  The number of days back to fetch hotspots.\n\n- `fmt?: 'csv' | 'json'`\n  Fetch the records in CSV or JSON format.\n\n### Returns\n\n- `{ countryCode?: string; lat?: number; latestObsDt?: string; lng?: number; locId?: string; locName?: string; numSpeciesAllTime?: number; subnational1Code?: string; subnational2Code?: string; }[]`\n\n### Example\n\n```typescript\nimport Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe();\n\nconst hotspots = await client.ref.hotspot.list('regionCode');\n\nconsole.log(hotspots);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/ref/hotspot/geo',
    httpMethod: 'get',
    summary: 'Nearby hotspots',
    description:
      'Get the list of hotspots, within a radius of up to 50 kilometers, from a given set of coordinates.',
    stainlessPath: '(resource) ref.hotspot.geo > (method) retrieve',
    qualified: 'client.ref.hotspot.geo.retrieve',
    params: ['lat: number;', 'lng: number;', 'back?: number;', 'dist?: number;', "fmt?: 'csv' | 'json';"],
    response:
      '{ countryCode?: string; lat?: number; latestObsDt?: string; lng?: number; locId?: string; locName?: string; numSpeciesAllTime?: number; subnational1Code?: string; subnational2Code?: string; }[]',
    markdown:
      "## retrieve\n\n`client.ref.hotspot.geo.retrieve(lat: number, lng: number, back?: number, dist?: number, fmt?: 'csv' | 'json'): { countryCode?: string; lat?: number; latestObsDt?: string; lng?: number; locId?: string; locName?: string; numSpeciesAllTime?: number; subnational1Code?: string; subnational2Code?: string; }[]`\n\n**get** `/ref/hotspot/geo`\n\nGet the list of hotspots, within a radius of up to 50 kilometers, from a given set of coordinates.\n\n### Parameters\n\n- `lat: number`\n\n- `lng: number`\n\n- `back?: number`\n  The number of days back to fetch hotspots.\n\n- `dist?: number`\n  The search radius from the given position, in kilometers.\n\n- `fmt?: 'csv' | 'json'`\n  Fetch the records in CSV or JSON format.\n\n### Returns\n\n- `{ countryCode?: string; lat?: number; latestObsDt?: string; lng?: number; locId?: string; locName?: string; numSpeciesAllTime?: number; subnational1Code?: string; subnational2Code?: string; }[]`\n\n### Example\n\n```typescript\nimport Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe();\n\nconst geos = await client.ref.hotspot.geo.retrieve({ lat: -90, lng: -180 });\n\nconsole.log(geos);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/ref/hotspot/info/{locId}',
    httpMethod: 'get',
    summary: 'Hotspot Info',
    description:
      'Get information on the location of a hotspot. #### Notes This API call only works for hotspots. If you pass the location code for a private location or an invalid location code then an HTTP 410 (Gone) error is returned.',
    stainlessPath: '(resource) ref.hotspot.info > (method) retrieve',
    qualified: 'client.ref.hotspot.info.retrieve',
    params: ['locId: string;'],
    response:
      '{ countryCode?: string; countryName?: string; hierarchicalName?: string; isHotspot?: boolean; lat?: number; latitude?: number; lng?: number; locId?: string; locName?: string; longitude?: number; name?: string; subnational1Code?: string; subnational1Name?: string; }',
    markdown:
      "## retrieve\n\n`client.ref.hotspot.info.retrieve(locId: string): { countryCode?: string; countryName?: string; hierarchicalName?: string; isHotspot?: boolean; lat?: number; latitude?: number; lng?: number; locId?: string; locName?: string; longitude?: number; name?: string; subnational1Code?: string; subnational1Name?: string; }`\n\n**get** `/ref/hotspot/info/{locId}`\n\nGet information on the location of a hotspot. #### Notes This API call only works for hotspots. If you pass the location code for a private location or an invalid location code then an HTTP 410 (Gone) error is returned.\n\n### Parameters\n\n- `locId: string`\n\n### Returns\n\n- `{ countryCode?: string; countryName?: string; hierarchicalName?: string; isHotspot?: boolean; lat?: number; latitude?: number; lng?: number; locId?: string; locName?: string; longitude?: number; name?: string; subnational1Code?: string; subnational1Name?: string; }`\n\n  - `countryCode?: string`\n  - `countryName?: string`\n  - `hierarchicalName?: string`\n  - `isHotspot?: boolean`\n  - `lat?: number`\n  - `latitude?: number`\n  - `lng?: number`\n  - `locId?: string`\n  - `locName?: string`\n  - `longitude?: number`\n  - `name?: string`\n  - `subnational1Code?: string`\n  - `subnational1Name?: string`\n\n### Example\n\n```typescript\nimport Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe();\n\nconst info = await client.ref.hotspot.info.retrieve('locId');\n\nconsole.log(info);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/ref/taxonomy/ebird',
    httpMethod: 'get',
    summary: 'eBird Taxonomy',
    description:
      'Get the taxonomy used by eBird. #### Notes Each entry in the taxonomy contains a species code for example, barswa for Barn Swallow. You can download the taxonomy for selected species using the *species* query parameter with a comma separating each code. Otherwise the full taxonomy is downloaded.',
    stainlessPath: '(resource) ref.taxonomy.ebird > (method) retrieve',
    qualified: 'client.ref.taxonomy.ebird.retrieve',
    params: [
      'cat?: string;',
      "fmt?: 'csv' | 'json';",
      'locale?: string;',
      'species?: string;',
      'version?: string;',
    ],
    response:
      '{ bandingCodes?: string[]; category?: string; comName?: string; comNameCodes?: string[]; familyCode?: string; familyComName?: string; familySciName?: string; order?: string; sciName?: string; sciNameCodes?: string[]; speciesCode?: string; taxonOrder?: number; }[]',
    markdown:
      "## retrieve\n\n`client.ref.taxonomy.ebird.retrieve(cat?: string, fmt?: 'csv' | 'json', locale?: string, species?: string, version?: string): { bandingCodes?: string[]; category?: string; comName?: string; comNameCodes?: string[]; familyCode?: string; familyComName?: string; familySciName?: string; order?: string; sciName?: string; sciNameCodes?: string[]; speciesCode?: string; taxonOrder?: number; }[]`\n\n**get** `/ref/taxonomy/ebird`\n\nGet the taxonomy used by eBird. #### Notes Each entry in the taxonomy contains a species code for example, barswa for Barn Swallow. You can download the taxonomy for selected species using the *species* query parameter with a comma separating each code. Otherwise the full taxonomy is downloaded.\n\n### Parameters\n\n- `cat?: string`\n  Only fetch records from these taxonomic categories.\n\n- `fmt?: 'csv' | 'json'`\n  Fetch the records in CSV or JSON format.\n\n- `locale?: string`\n  Use this language for common names.\n\n- `species?: string`\n  Only fetch records for these species.\n\n- `version?: string`\n  Fetch a specific version of the taxonomy.\n\n### Returns\n\n- `{ bandingCodes?: string[]; category?: string; comName?: string; comNameCodes?: string[]; familyCode?: string; familyComName?: string; familySciName?: string; order?: string; sciName?: string; sciNameCodes?: string[]; speciesCode?: string; taxonOrder?: number; }[]`\n\n### Example\n\n```typescript\nimport Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe();\n\nconst ebirds = await client.ref.taxonomy.ebird.retrieve();\n\nconsole.log(ebirds);\n```",
  },
  {
    name: 'list',
    endpoint: '/ref/taxon/forms/{speciesCode}',
    httpMethod: 'get',
    summary: 'Taxonomic Forms',
    description:
      'For a species, get the list of subspecies recognised in the taxonomy. The results include the species that was passed in.',
    stainlessPath: '(resource) ref.taxonomy.forms > (method) list',
    qualified: 'client.ref.taxonomy.forms.list',
    params: ['speciesCode: string;'],
    response: 'string[]',
    markdown:
      "## list\n\n`client.ref.taxonomy.forms.list(speciesCode: string): string[]`\n\n**get** `/ref/taxon/forms/{speciesCode}`\n\nFor a species, get the list of subspecies recognised in the taxonomy. The results include the species that was passed in.\n\n### Parameters\n\n- `speciesCode: string`\n\n### Returns\n\n- `string[]`\n\n### Example\n\n```typescript\nimport Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe();\n\nconst forms = await client.ref.taxonomy.forms.list('speciesCode');\n\nconsole.log(forms);\n```",
  },
  {
    name: 'list',
    endpoint: '/ref/taxa-locales/ebird',
    httpMethod: 'get',
    summary: 'Taxa Locale Codes',
    description:
      'Returns the list of supported locale codes and names for species common names, with the last time they were updated. Use the accept-language header to get translated language names when available.\n\nNOTE: The locale codes and names are stable but the other fields in this result are not yet finalized and should be used with caution.',
    stainlessPath: '(resource) ref.taxonomy.locales > (method) list',
    qualified: 'client.ref.taxonomy.locales.list',
    params: ['Accept-Language?: string;'],
    response: '{ code?: string; lastUpdated?: string; name?: string; }[]',
    markdown:
      "## list\n\n`client.ref.taxonomy.locales.list(Accept-Language?: string): { code?: string; lastUpdated?: string; name?: string; }[]`\n\n**get** `/ref/taxa-locales/ebird`\n\nReturns the list of supported locale codes and names for species common names, with the last time they were updated. Use the accept-language header to get translated language names when available.\n\nNOTE: The locale codes and names are stable but the other fields in this result are not yet finalized and should be used with caution.\n\n### Parameters\n\n- `Accept-Language?: string`\n\n### Returns\n\n- `{ code?: string; lastUpdated?: string; name?: string; }[]`\n\n### Example\n\n```typescript\nimport Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe();\n\nconst locales = await client.ref.taxonomy.locales.list();\n\nconsole.log(locales);\n```",
  },
  {
    name: 'list',
    endpoint: '/ref/taxonomy/versions',
    httpMethod: 'get',
    summary: 'Taxonomy Versions',
    description:
      'Returns a list of all versions of the taxonomy, with a flag indicating which is the latest.',
    stainlessPath: '(resource) ref.taxonomy.versions > (method) list',
    qualified: 'client.ref.taxonomy.versions.list',
    response: '{ authorityVer?: number; latest?: boolean; }[]',
    markdown:
      "## list\n\n`client.ref.taxonomy.versions.list(): { authorityVer?: number; latest?: boolean; }[]`\n\n**get** `/ref/taxonomy/versions`\n\nReturns a list of all versions of the taxonomy, with a flag indicating which is the latest.\n\n### Returns\n\n- `{ authorityVer?: number; latest?: boolean; }[]`\n\n### Example\n\n```typescript\nimport Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe();\n\nconst versions = await client.ref.taxonomy.versions.list();\n\nconsole.log(versions);\n```",
  },
  {
    name: 'list',
    endpoint: '/ref/sppgroup/{speciesGrouping}',
    httpMethod: 'get',
    summary: 'Taxonomic Groups',
    description:
      'Get the list of species groups, e.g. terns, finches, etc. #### Notes Merlin puts like birds together, with Falcons next to Hawks, whereas eBird follows taxonomic order.',
    stainlessPath: '(resource) ref.taxonomy.speciesGroups > (method) list',
    qualified: 'client.ref.taxonomy.speciesGroups.list',
    params: ["speciesGrouping: 'merlin' | 'ebird';", 'groupNameLocale?: string;'],
    response: '{ groupName?: string; groupOrder?: number; taxonOrderBounds?: number[][]; }[]',
    markdown:
      "## list\n\n`client.ref.taxonomy.speciesGroups.list(speciesGrouping: 'merlin' | 'ebird', groupNameLocale?: string): { groupName?: string; groupOrder?: number; taxonOrderBounds?: number[][]; }[]`\n\n**get** `/ref/sppgroup/{speciesGrouping}`\n\nGet the list of species groups, e.g. terns, finches, etc. #### Notes Merlin puts like birds together, with Falcons next to Hawks, whereas eBird follows taxonomic order.\n\n### Parameters\n\n- `speciesGrouping: 'merlin' | 'ebird'`\n  The order in which groups are returned.\n\n- `groupNameLocale?: string`\n  Locale for species group names. English names are returned for any non-listed locale or any non-translated group name.\n\n### Returns\n\n- `{ groupName?: string; groupOrder?: number; taxonOrderBounds?: number[][]; }[]`\n\n### Example\n\n```typescript\nimport Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe();\n\nconst speciesGroups = await client.ref.taxonomy.speciesGroups.list('merlin');\n\nconsole.log(speciesGroups);\n```",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
    boost: {
      name: 3,
      endpoint: 2,
      summary: 2,
      qualified: 2,
      content: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  // Note: Language is accepted for interface consistency with remote search, but currently has no
  // effect since this local search only supports TypeScript docs.
  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex.search(query).map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          fullResults.push({
            method: m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          this.indexProse(content, file.name);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}
