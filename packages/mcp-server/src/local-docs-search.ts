// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

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
  perLanguage?: Record<string, PerLanguageData>;
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
    perLanguage: {
      csharp: {
        method: 'Data.Observations.Recent.List',
        example:
          'RecentListParams parameters = new() { RegionCode = "regionCode" };\n\nvar observations = await client.Data.Observations.Recent.List(parameters);\n\nConsole.WriteLine(observations);',
      },
      go: {
        method: 'client.Data.Observations.Recent.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/phoebe-bird/phoebe-go"\n\t"github.com/phoebe-bird/phoebe-go/option"\n)\n\nfunc main() {\n\tclient := phoebe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tobservations, err := client.Data.Observations.Recent.List(\n\t\tcontext.TODO(),\n\t\t"regionCode",\n\t\tphoebe.DataObservationRecentListParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", observations)\n}\n',
      },
      http: {
        example:
          'curl https://api.ebird.org/v2/data/obs/$REGION_CODE/recent \\\n    -H "X-eBirdApiToken: $EBIRD_API_KEY"',
      },
      java: {
        method: 'data().observations().recent().list',
        example:
          'package com.phoebe.api.example;\n\nimport com.phoebe.api.client.PhoebeClient;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient;\nimport com.phoebe.api.models.data.observations.Observation;\nimport com.phoebe.api.models.data.observations.recent.RecentListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        PhoebeClient client = PhoebeOkHttpClient.fromEnv();\n\n        List<Observation> observations = client.data().observations().recent().list("regionCode");\n    }\n}',
      },
      kotlin: {
        method: 'data().observations().recent().list',
        example:
          'package com.phoebe.api.example\n\nimport com.phoebe.api.client.PhoebeClient\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient\nimport com.phoebe.api.models.data.observations.Observation\nimport com.phoebe.api.models.data.observations.recent.RecentListParams\n\nfun main() {\n    val client: PhoebeClient = PhoebeOkHttpClient.fromEnv()\n\n    val observations: List<Observation> = client.data().observations().recent().list("regionCode")\n}',
      },
      php: {
        method: 'data->observations->recent->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$observations = $client->data->observations->recent->list(\n  'regionCode',\n  back: 1,\n  cat: 'species',\n  hotspot: true,\n  includeProvisional: true,\n  maxResults: 1,\n  r: ['string'],\n  sppLocale: 'sppLocale',\n);\n\nvar_dump($observations);",
      },
      python: {
        method: 'data.observations.recent.list',
        example:
          'import os\nfrom phoebe_bird import Phoebe\n\nclient = Phoebe(\n    api_key=os.environ.get("EBIRD_API_KEY"),  # This is the default and can be omitted\n)\nobservations = client.data.observations.recent.list(\n    region_code="regionCode",\n)\nprint(observations)',
      },
      ruby: {
        method: 'data.observations.recent.list',
        example:
          'require "phoebe"\n\nphoebe = Phoebe::Client.new(api_key: "My API Key")\n\nobservations = phoebe.data.observations.recent.list("regionCode")\n\nputs(observations)',
      },
      typescript: {
        method: 'client.data.observations.recent.list',
        example:
          "import Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe({\n  apiKey: process.env['EBIRD_API_KEY'], // This is the default and can be omitted\n});\n\nconst observations = await client.data.observations.recent.list('regionCode');\n\nconsole.log(observations);",
      },
    },
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
    perLanguage: {
      csharp: {
        method: 'Data.Observations.Recent.Notable.List',
        example:
          'NotableListParams parameters = new() { RegionCode = "regionCode" };\n\nvar observations = await client.Data.Observations.Recent.Notable.List(parameters);\n\nConsole.WriteLine(observations);',
      },
      go: {
        method: 'client.Data.Observations.Recent.Notable.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/phoebe-bird/phoebe-go"\n\t"github.com/phoebe-bird/phoebe-go/option"\n)\n\nfunc main() {\n\tclient := phoebe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tobservations, err := client.Data.Observations.Recent.Notable.List(\n\t\tcontext.TODO(),\n\t\t"regionCode",\n\t\tphoebe.DataObservationRecentNotableListParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", observations)\n}\n',
      },
      http: {
        example:
          'curl https://api.ebird.org/v2/data/obs/$REGION_CODE/recent/notable \\\n    -H "X-eBirdApiToken: $EBIRD_API_KEY"',
      },
      java: {
        method: 'data().observations().recent().notable().list',
        example:
          'package com.phoebe.api.example;\n\nimport com.phoebe.api.client.PhoebeClient;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient;\nimport com.phoebe.api.models.data.observations.Observation;\nimport com.phoebe.api.models.data.observations.recent.notable.NotableListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        PhoebeClient client = PhoebeOkHttpClient.fromEnv();\n\n        List<Observation> observations = client.data().observations().recent().notable().list("regionCode");\n    }\n}',
      },
      kotlin: {
        method: 'data().observations().recent().notable().list',
        example:
          'package com.phoebe.api.example\n\nimport com.phoebe.api.client.PhoebeClient\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient\nimport com.phoebe.api.models.data.observations.Observation\nimport com.phoebe.api.models.data.observations.recent.notable.NotableListParams\n\nfun main() {\n    val client: PhoebeClient = PhoebeOkHttpClient.fromEnv()\n\n    val observations: List<Observation> = client.data().observations().recent().notable().list("regionCode")\n}',
      },
      php: {
        method: 'data->observations->recent->notable->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$observations = $client->data->observations->recent->notable->list(\n  'regionCode',\n  back: 1,\n  detail: 'simple',\n  hotspot: true,\n  maxResults: 1,\n  r: ['string'],\n  sppLocale: 'sppLocale',\n);\n\nvar_dump($observations);",
      },
      python: {
        method: 'data.observations.recent.notable.list',
        example:
          'import os\nfrom phoebe_bird import Phoebe\n\nclient = Phoebe(\n    api_key=os.environ.get("EBIRD_API_KEY"),  # This is the default and can be omitted\n)\nobservations = client.data.observations.recent.notable.list(\n    region_code="regionCode",\n)\nprint(observations)',
      },
      ruby: {
        method: 'data.observations.recent.notable.list',
        example:
          'require "phoebe"\n\nphoebe = Phoebe::Client.new(api_key: "My API Key")\n\nobservations = phoebe.data.observations.recent.notable.list("regionCode")\n\nputs(observations)',
      },
      typescript: {
        method: 'client.data.observations.recent.notable.list',
        example:
          "import Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe({\n  apiKey: process.env['EBIRD_API_KEY'], // This is the default and can be omitted\n});\n\nconst observations = await client.data.observations.recent.notable.list('regionCode');\n\nconsole.log(observations);",
      },
    },
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
    perLanguage: {
      csharp: {
        method: 'Data.Observations.Recent.Species.Retrieve',
        example:
          'SpecieRetrieveParams parameters = new()\n{\n    RegionCode = "regionCode",\n    SpeciesCode = "speciesCode",\n};\n\nvar observations = await client.Data.Observations.Recent.Species.Retrieve(parameters);\n\nConsole.WriteLine(observations);',
      },
      go: {
        method: 'client.Data.Observations.Recent.Species.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/phoebe-bird/phoebe-go"\n\t"github.com/phoebe-bird/phoebe-go/option"\n)\n\nfunc main() {\n\tclient := phoebe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tobservations, err := client.Data.Observations.Recent.Species.Get(\n\t\tcontext.TODO(),\n\t\t"regionCode",\n\t\t"speciesCode",\n\t\tphoebe.DataObservationRecentSpecieGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", observations)\n}\n',
      },
      http: {
        example:
          'curl https://api.ebird.org/v2/data/obs/$REGION_CODE/recent/$SPECIES_CODE \\\n    -H "X-eBirdApiToken: $EBIRD_API_KEY"',
      },
      java: {
        method: 'data().observations().recent().species().retrieve',
        example:
          'package com.phoebe.api.example;\n\nimport com.phoebe.api.client.PhoebeClient;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient;\nimport com.phoebe.api.models.data.observations.Observation;\nimport com.phoebe.api.models.data.observations.recent.species.SpecieRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        PhoebeClient client = PhoebeOkHttpClient.fromEnv();\n\n        SpecieRetrieveParams params = SpecieRetrieveParams.builder()\n            .regionCode("regionCode")\n            .speciesCode("speciesCode")\n            .build();\n        List<Observation> observations = client.data().observations().recent().species().retrieve(params);\n    }\n}',
      },
      kotlin: {
        method: 'data().observations().recent().species().retrieve',
        example:
          'package com.phoebe.api.example\n\nimport com.phoebe.api.client.PhoebeClient\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient\nimport com.phoebe.api.models.data.observations.Observation\nimport com.phoebe.api.models.data.observations.recent.species.SpecieRetrieveParams\n\nfun main() {\n    val client: PhoebeClient = PhoebeOkHttpClient.fromEnv()\n\n    val params: SpecieRetrieveParams = SpecieRetrieveParams.builder()\n        .regionCode("regionCode")\n        .speciesCode("speciesCode")\n        .build()\n    val observations: List<Observation> = client.data().observations().recent().species().retrieve(params)\n}',
      },
      php: {
        method: 'data->observations->recent->species->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$observations = $client->data->observations->recent->species->retrieve(\n  'speciesCode',\n  regionCode: 'regionCode',\n  back: 1,\n  hotspot: true,\n  includeProvisional: true,\n  maxResults: 1,\n  r: ['string'],\n  sppLocale: 'sppLocale',\n);\n\nvar_dump($observations);",
      },
      python: {
        method: 'data.observations.recent.species.retrieve',
        example:
          'import os\nfrom phoebe_bird import Phoebe\n\nclient = Phoebe(\n    api_key=os.environ.get("EBIRD_API_KEY"),  # This is the default and can be omitted\n)\nobservations = client.data.observations.recent.species.retrieve(\n    species_code="speciesCode",\n    region_code="regionCode",\n)\nprint(observations)',
      },
      ruby: {
        method: 'data.observations.recent.species.retrieve',
        example:
          'require "phoebe"\n\nphoebe = Phoebe::Client.new(api_key: "My API Key")\n\nobservations = phoebe.data.observations.recent.species.retrieve("speciesCode", region_code: "regionCode")\n\nputs(observations)',
      },
      typescript: {
        method: 'client.data.observations.recent.species.retrieve',
        example:
          "import Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe({\n  apiKey: process.env['EBIRD_API_KEY'], // This is the default and can be omitted\n});\n\nconst observations = await client.data.observations.recent.species.retrieve('speciesCode', {\n  regionCode: 'regionCode',\n});\n\nconsole.log(observations);",
      },
    },
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
    perLanguage: {
      csharp: {
        method: 'Data.Observations.Recent.Historic.List',
        example:
          'HistoricListParams parameters = new()\n{\n    RegionCode = "regionCode",\n    Y = 0,\n    M = 1,\n    D = 1,\n};\n\nvar observations = await client.Data.Observations.Recent.Historic.List(parameters);\n\nConsole.WriteLine(observations);',
      },
      go: {
        method: 'client.Data.Observations.Recent.Historic.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/phoebe-bird/phoebe-go"\n\t"github.com/phoebe-bird/phoebe-go/option"\n)\n\nfunc main() {\n\tclient := phoebe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tobservations, err := client.Data.Observations.Recent.Historic.List(\n\t\tcontext.TODO(),\n\t\t"regionCode",\n\t\tint64(0),\n\t\tint64(1),\n\t\tint64(1),\n\t\tphoebe.DataObservationRecentHistoricListParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", observations)\n}\n',
      },
      http: {
        example:
          'curl https://api.ebird.org/v2/data/obs/$REGION_CODE/historic/$Y/$M/$D \\\n    -H "X-eBirdApiToken: $EBIRD_API_KEY"',
      },
      java: {
        method: 'data().observations().recent().historic().list',
        example:
          'package com.phoebe.api.example;\n\nimport com.phoebe.api.client.PhoebeClient;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient;\nimport com.phoebe.api.models.data.observations.Observation;\nimport com.phoebe.api.models.data.observations.recent.historic.HistoricListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        PhoebeClient client = PhoebeOkHttpClient.fromEnv();\n\n        HistoricListParams params = HistoricListParams.builder()\n            .regionCode("regionCode")\n            .y(0L)\n            .m(1L)\n            .d(1L)\n            .build();\n        List<Observation> observations = client.data().observations().recent().historic().list(params);\n    }\n}',
      },
      kotlin: {
        method: 'data().observations().recent().historic().list',
        example:
          'package com.phoebe.api.example\n\nimport com.phoebe.api.client.PhoebeClient\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient\nimport com.phoebe.api.models.data.observations.Observation\nimport com.phoebe.api.models.data.observations.recent.historic.HistoricListParams\n\nfun main() {\n    val client: PhoebeClient = PhoebeOkHttpClient.fromEnv()\n\n    val params: HistoricListParams = HistoricListParams.builder()\n        .regionCode("regionCode")\n        .y(0L)\n        .m(1L)\n        .d(1L)\n        .build()\n    val observations: List<Observation> = client.data().observations().recent().historic().list(params)\n}',
      },
      php: {
        method: 'data->observations->recent->historic->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$observations = $client->data->observations->recent->historic->list(\n  1,\n  regionCode: 'regionCode',\n  y: 0,\n  m: 1,\n  cat: 'species',\n  detail: 'simple',\n  hotspot: true,\n  includeProvisional: true,\n  maxResults: 1,\n  r: ['string'],\n  rank: 'mrec',\n  sppLocale: 'sppLocale',\n);\n\nvar_dump($observations);",
      },
      python: {
        method: 'data.observations.recent.historic.list',
        example:
          'import os\nfrom phoebe_bird import Phoebe\n\nclient = Phoebe(\n    api_key=os.environ.get("EBIRD_API_KEY"),  # This is the default and can be omitted\n)\nobservations = client.data.observations.recent.historic.list(\n    d=1,\n    region_code="regionCode",\n    y=0,\n    m=1,\n)\nprint(observations)',
      },
      ruby: {
        method: 'data.observations.recent.historic.list',
        example:
          'require "phoebe"\n\nphoebe = Phoebe::Client.new(api_key: "My API Key")\n\nobservations = phoebe.data.observations.recent.historic.list(1, region_code: "regionCode", y_: 0, m: 1)\n\nputs(observations)',
      },
      typescript: {
        method: 'client.data.observations.recent.historic.list',
        example:
          "import Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe({\n  apiKey: process.env['EBIRD_API_KEY'], // This is the default and can be omitted\n});\n\nconst observations = await client.data.observations.recent.historic.list(1, {\n  regionCode: 'regionCode',\n  y: 0,\n  m: 1,\n});\n\nconsole.log(observations);",
      },
    },
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
    perLanguage: {
      csharp: {
        method: 'Data.Observations.Geo.Recent.List',
        example:
          'RecentListParams parameters = new()\n{\n    Lat = -90,\n    Lng = -180,\n};\n\nvar observations = await client.Data.Observations.Geo.Recent.List(parameters);\n\nConsole.WriteLine(observations);',
      },
      go: {
        method: 'client.Data.Observations.Geo.Recent.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/phoebe-bird/phoebe-go"\n\t"github.com/phoebe-bird/phoebe-go/option"\n)\n\nfunc main() {\n\tclient := phoebe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tobservations, err := client.Data.Observations.Geo.Recent.List(context.TODO(), phoebe.DataObservationGeoRecentListParams{\n\t\tLat: phoebe.F(-90.000000),\n\t\tLng: phoebe.F(-180.000000),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", observations)\n}\n',
      },
      http: {
        example:
          'curl https://api.ebird.org/v2/data/obs/geo/recent \\\n    -H "X-eBirdApiToken: $EBIRD_API_KEY"',
      },
      java: {
        method: 'data().observations().geo().recent().list',
        example:
          'package com.phoebe.api.example;\n\nimport com.phoebe.api.client.PhoebeClient;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient;\nimport com.phoebe.api.models.data.observations.Observation;\nimport com.phoebe.api.models.data.observations.geo.recent.RecentListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        PhoebeClient client = PhoebeOkHttpClient.fromEnv();\n\n        RecentListParams params = RecentListParams.builder()\n            .lat(-90.0f)\n            .lng(-180.0f)\n            .build();\n        List<Observation> observations = client.data().observations().geo().recent().list(params);\n    }\n}',
      },
      kotlin: {
        method: 'data().observations().geo().recent().list',
        example:
          'package com.phoebe.api.example\n\nimport com.phoebe.api.client.PhoebeClient\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient\nimport com.phoebe.api.models.data.observations.Observation\nimport com.phoebe.api.models.data.observations.geo.recent.RecentListParams\n\nfun main() {\n    val client: PhoebeClient = PhoebeOkHttpClient.fromEnv()\n\n    val params: RecentListParams = RecentListParams.builder()\n        .lat(-90.0f)\n        .lng(-180.0f)\n        .build()\n    val observations: List<Observation> = client.data().observations().geo().recent().list(params)\n}',
      },
      php: {
        method: 'data->observations->geo->recent->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$observations = $client->data->observations->geo->recent->list(\n  lat: -90,\n  lng: -180,\n  back: 1,\n  cat: 'species',\n  dist: 0,\n  hotspot: true,\n  includeProvisional: true,\n  maxResults: 1,\n  sort: 'date',\n  sppLocale: 'sppLocale',\n);\n\nvar_dump($observations);",
      },
      python: {
        method: 'data.observations.geo.recent.list',
        example:
          'import os\nfrom phoebe_bird import Phoebe\n\nclient = Phoebe(\n    api_key=os.environ.get("EBIRD_API_KEY"),  # This is the default and can be omitted\n)\nobservations = client.data.observations.geo.recent.list(\n    lat=-90,\n    lng=-180,\n)\nprint(observations)',
      },
      ruby: {
        method: 'data.observations.geo.recent.list',
        example:
          'require "phoebe"\n\nphoebe = Phoebe::Client.new(api_key: "My API Key")\n\nobservations = phoebe.data.observations.geo.recent.list(lat: -90, lng: -180)\n\nputs(observations)',
      },
      typescript: {
        method: 'client.data.observations.geo.recent.list',
        example:
          "import Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe({\n  apiKey: process.env['EBIRD_API_KEY'], // This is the default and can be omitted\n});\n\nconst observations = await client.data.observations.geo.recent.list({ lat: -90, lng: -180 });\n\nconsole.log(observations);",
      },
    },
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
    perLanguage: {
      csharp: {
        method: 'Data.Observations.Geo.Recent.Species.List',
        example:
          'SpecieListParams parameters = new()\n{\n    SpeciesCode = "speciesCode",\n    Lat = -90,\n    Lng = -180,\n};\n\nvar observations = await client.Data.Observations.Geo.Recent.Species.List(parameters);\n\nConsole.WriteLine(observations);',
      },
      go: {
        method: 'client.Data.Observations.Geo.Recent.Species.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/phoebe-bird/phoebe-go"\n\t"github.com/phoebe-bird/phoebe-go/option"\n)\n\nfunc main() {\n\tclient := phoebe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tobservations, err := client.Data.Observations.Geo.Recent.Species.List(\n\t\tcontext.TODO(),\n\t\t"speciesCode",\n\t\tphoebe.DataObservationGeoRecentSpecieListParams{\n\t\t\tLat: phoebe.F(-90.000000),\n\t\t\tLng: phoebe.F(-180.000000),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", observations)\n}\n',
      },
      http: {
        example:
          'curl https://api.ebird.org/v2/data/obs/geo/recent/$SPECIES_CODE \\\n    -H "X-eBirdApiToken: $EBIRD_API_KEY"',
      },
      java: {
        method: 'data().observations().geo().recent().species().list',
        example:
          'package com.phoebe.api.example;\n\nimport com.phoebe.api.client.PhoebeClient;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient;\nimport com.phoebe.api.models.data.observations.Observation;\nimport com.phoebe.api.models.data.observations.geo.recent.species.SpecieListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        PhoebeClient client = PhoebeOkHttpClient.fromEnv();\n\n        SpecieListParams params = SpecieListParams.builder()\n            .speciesCode("speciesCode")\n            .lat(-90.0f)\n            .lng(-180.0f)\n            .build();\n        List<Observation> observations = client.data().observations().geo().recent().species().list(params);\n    }\n}',
      },
      kotlin: {
        method: 'data().observations().geo().recent().species().list',
        example:
          'package com.phoebe.api.example\n\nimport com.phoebe.api.client.PhoebeClient\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient\nimport com.phoebe.api.models.data.observations.Observation\nimport com.phoebe.api.models.data.observations.geo.recent.species.SpecieListParams\n\nfun main() {\n    val client: PhoebeClient = PhoebeOkHttpClient.fromEnv()\n\n    val params: SpecieListParams = SpecieListParams.builder()\n        .speciesCode("speciesCode")\n        .lat(-90.0f)\n        .lng(-180.0f)\n        .build()\n    val observations: List<Observation> = client.data().observations().geo().recent().species().list(params)\n}',
      },
      php: {
        method: 'data->observations->geo->recent->species->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$observations = $client->data->observations->geo->recent->species->list(\n  'speciesCode',\n  lat: -90,\n  lng: -180,\n  back: 1,\n  dist: 0,\n  hotspot: true,\n  includeProvisional: true,\n  maxResults: 1,\n  sppLocale: 'sppLocale',\n);\n\nvar_dump($observations);",
      },
      python: {
        method: 'data.observations.geo.recent.species.list',
        example:
          'import os\nfrom phoebe_bird import Phoebe\n\nclient = Phoebe(\n    api_key=os.environ.get("EBIRD_API_KEY"),  # This is the default and can be omitted\n)\nobservations = client.data.observations.geo.recent.species.list(\n    species_code="speciesCode",\n    lat=-90,\n    lng=-180,\n)\nprint(observations)',
      },
      ruby: {
        method: 'data.observations.geo.recent.species.list',
        example:
          'require "phoebe"\n\nphoebe = Phoebe::Client.new(api_key: "My API Key")\n\nobservations = phoebe.data.observations.geo.recent.species.list("speciesCode", lat: -90, lng: -180)\n\nputs(observations)',
      },
      typescript: {
        method: 'client.data.observations.geo.recent.species.list',
        example:
          "import Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe({\n  apiKey: process.env['EBIRD_API_KEY'], // This is the default and can be omitted\n});\n\nconst observations = await client.data.observations.geo.recent.species.list('speciesCode', {\n  lat: -90,\n  lng: -180,\n});\n\nconsole.log(observations);",
      },
    },
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
    perLanguage: {
      csharp: {
        method: 'Data.Observations.Geo.Recent.Notable.List',
        example:
          'NotableListParams parameters = new()\n{\n    Lat = -90,\n    Lng = -180,\n};\n\nvar observations = await client.Data.Observations.Geo.Recent.Notable.List(parameters);\n\nConsole.WriteLine(observations);',
      },
      go: {
        method: 'client.Data.Observations.Geo.Recent.Notable.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/phoebe-bird/phoebe-go"\n\t"github.com/phoebe-bird/phoebe-go/option"\n)\n\nfunc main() {\n\tclient := phoebe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tobservations, err := client.Data.Observations.Geo.Recent.Notable.List(context.TODO(), phoebe.DataObservationGeoRecentNotableListParams{\n\t\tLat: phoebe.F(-90.000000),\n\t\tLng: phoebe.F(-180.000000),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", observations)\n}\n',
      },
      http: {
        example:
          'curl https://api.ebird.org/v2/data/obs/geo/recent/notable \\\n    -H "X-eBirdApiToken: $EBIRD_API_KEY"',
      },
      java: {
        method: 'data().observations().geo().recent().notable().list',
        example:
          'package com.phoebe.api.example;\n\nimport com.phoebe.api.client.PhoebeClient;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient;\nimport com.phoebe.api.models.data.observations.Observation;\nimport com.phoebe.api.models.data.observations.geo.recent.notable.NotableListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        PhoebeClient client = PhoebeOkHttpClient.fromEnv();\n\n        NotableListParams params = NotableListParams.builder()\n            .lat(-90.0f)\n            .lng(-180.0f)\n            .build();\n        List<Observation> observations = client.data().observations().geo().recent().notable().list(params);\n    }\n}',
      },
      kotlin: {
        method: 'data().observations().geo().recent().notable().list',
        example:
          'package com.phoebe.api.example\n\nimport com.phoebe.api.client.PhoebeClient\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient\nimport com.phoebe.api.models.data.observations.Observation\nimport com.phoebe.api.models.data.observations.geo.recent.notable.NotableListParams\n\nfun main() {\n    val client: PhoebeClient = PhoebeOkHttpClient.fromEnv()\n\n    val params: NotableListParams = NotableListParams.builder()\n        .lat(-90.0f)\n        .lng(-180.0f)\n        .build()\n    val observations: List<Observation> = client.data().observations().geo().recent().notable().list(params)\n}',
      },
      php: {
        method: 'data->observations->geo->recent->notable->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$observations = $client->data->observations->geo->recent->notable->list(\n  lat: -90,\n  lng: -180,\n  back: 1,\n  detail: 'simple',\n  dist: 0,\n  hotspot: true,\n  maxResults: 1,\n  sppLocale: 'sppLocale',\n);\n\nvar_dump($observations);",
      },
      python: {
        method: 'data.observations.geo.recent.notable.list',
        example:
          'import os\nfrom phoebe_bird import Phoebe\n\nclient = Phoebe(\n    api_key=os.environ.get("EBIRD_API_KEY"),  # This is the default and can be omitted\n)\nobservations = client.data.observations.geo.recent.notable.list(\n    lat=-90,\n    lng=-180,\n)\nprint(observations)',
      },
      ruby: {
        method: 'data.observations.geo.recent.notable.list',
        example:
          'require "phoebe"\n\nphoebe = Phoebe::Client.new(api_key: "My API Key")\n\nobservations = phoebe.data.observations.geo.recent.notable.list(lat: -90, lng: -180)\n\nputs(observations)',
      },
      typescript: {
        method: 'client.data.observations.geo.recent.notable.list',
        example:
          "import Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe({\n  apiKey: process.env['EBIRD_API_KEY'], // This is the default and can be omitted\n});\n\nconst observations = await client.data.observations.geo.recent.notable.list({\n  lat: -90,\n  lng: -180,\n});\n\nconsole.log(observations);",
      },
    },
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
    perLanguage: {
      csharp: {
        method: 'Data.Observations.Nearest.GeoSpecies.List',
        example:
          'GeoSpecieListParams parameters = new()\n{\n    SpeciesCode = "speciesCode",\n    Lat = -90,\n    Lng = -180,\n};\n\nvar observations = await client.Data.Observations.Nearest.GeoSpecies.List(parameters);\n\nConsole.WriteLine(observations);',
      },
      go: {
        method: 'client.Data.Observations.Nearest.GeoSpecies.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/phoebe-bird/phoebe-go"\n\t"github.com/phoebe-bird/phoebe-go/option"\n)\n\nfunc main() {\n\tclient := phoebe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tobservations, err := client.Data.Observations.Nearest.GeoSpecies.List(\n\t\tcontext.TODO(),\n\t\t"speciesCode",\n\t\tphoebe.DataObservationNearestGeoSpecieListParams{\n\t\t\tLat: phoebe.F(-90.000000),\n\t\t\tLng: phoebe.F(-180.000000),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", observations)\n}\n',
      },
      http: {
        example:
          'curl https://api.ebird.org/v2/data/nearest/geo/recent/$SPECIES_CODE \\\n    -H "X-eBirdApiToken: $EBIRD_API_KEY"',
      },
      java: {
        method: 'data().observations().nearest().geoSpecies().list',
        example:
          'package com.phoebe.api.example;\n\nimport com.phoebe.api.client.PhoebeClient;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient;\nimport com.phoebe.api.models.data.observations.Observation;\nimport com.phoebe.api.models.data.observations.nearest.geospecies.GeoSpecieListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        PhoebeClient client = PhoebeOkHttpClient.fromEnv();\n\n        GeoSpecieListParams params = GeoSpecieListParams.builder()\n            .speciesCode("speciesCode")\n            .lat(-90.0f)\n            .lng(-180.0f)\n            .build();\n        List<Observation> observations = client.data().observations().nearest().geoSpecies().list(params);\n    }\n}',
      },
      kotlin: {
        method: 'data().observations().nearest().geoSpecies().list',
        example:
          'package com.phoebe.api.example\n\nimport com.phoebe.api.client.PhoebeClient\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient\nimport com.phoebe.api.models.data.observations.Observation\nimport com.phoebe.api.models.data.observations.nearest.geospecies.GeoSpecieListParams\n\nfun main() {\n    val client: PhoebeClient = PhoebeOkHttpClient.fromEnv()\n\n    val params: GeoSpecieListParams = GeoSpecieListParams.builder()\n        .speciesCode("speciesCode")\n        .lat(-90.0f)\n        .lng(-180.0f)\n        .build()\n    val observations: List<Observation> = client.data().observations().nearest().geoSpecies().list(params)\n}',
      },
      php: {
        method: 'data->observations->nearest->geoSpecies->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$observations = $client->data->observations->nearest->geoSpecies->list(\n  'speciesCode',\n  lat: -90,\n  lng: -180,\n  back: 1,\n  dist: 0,\n  hotspot: true,\n  includeProvisional: true,\n  maxResults: 1,\n  sppLocale: 'sppLocale',\n);\n\nvar_dump($observations);",
      },
      python: {
        method: 'data.observations.nearest.geo_species.list',
        example:
          'import os\nfrom phoebe_bird import Phoebe\n\nclient = Phoebe(\n    api_key=os.environ.get("EBIRD_API_KEY"),  # This is the default and can be omitted\n)\nobservations = client.data.observations.nearest.geo_species.list(\n    species_code="speciesCode",\n    lat=-90,\n    lng=-180,\n)\nprint(observations)',
      },
      ruby: {
        method: 'data.observations.nearest.geo_species.list',
        example:
          'require "phoebe"\n\nphoebe = Phoebe::Client.new(api_key: "My API Key")\n\nobservations = phoebe.data.observations.nearest.geo_species.list("speciesCode", lat: -90, lng: -180)\n\nputs(observations)',
      },
      typescript: {
        method: 'client.data.observations.nearest.geoSpecies.list',
        example:
          "import Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe({\n  apiKey: process.env['EBIRD_API_KEY'], // This is the default and can be omitted\n});\n\nconst observations = await client.data.observations.nearest.geoSpecies.list('speciesCode', {\n  lat: -90,\n  lng: -180,\n});\n\nconsole.log(observations);",
      },
    },
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
    perLanguage: {
      csharp: {
        method: 'Product.Lists.Retrieve',
        example:
          'ListRetrieveParams parameters = new() { RegionCode = "regionCode" };\n\nvar lists = await client.Product.Lists.Retrieve(parameters);\n\nConsole.WriteLine(lists);',
      },
      go: {
        method: 'client.Product.Lists.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/phoebe-bird/phoebe-go"\n\t"github.com/phoebe-bird/phoebe-go/option"\n)\n\nfunc main() {\n\tclient := phoebe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tlists, err := client.Product.Lists.Get(\n\t\tcontext.TODO(),\n\t\t"regionCode",\n\t\tphoebe.ProductListGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", lists)\n}\n',
      },
      http: {
        example:
          'curl https://api.ebird.org/v2/product/lists/$REGION_CODE \\\n    -H "X-eBirdApiToken: $EBIRD_API_KEY"',
      },
      java: {
        method: 'product().lists().retrieve',
        example:
          'package com.phoebe.api.example;\n\nimport com.phoebe.api.client.PhoebeClient;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient;\nimport com.phoebe.api.models.product.lists.ListRetrieveParams;\nimport com.phoebe.api.models.product.lists.ListRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        PhoebeClient client = PhoebeOkHttpClient.fromEnv();\n\n        List<ListRetrieveResponse> lists = client.product().lists().retrieve("regionCode");\n    }\n}',
      },
      kotlin: {
        method: 'product().lists().retrieve',
        example:
          'package com.phoebe.api.example\n\nimport com.phoebe.api.client.PhoebeClient\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient\nimport com.phoebe.api.models.product.lists.ListRetrieveParams\nimport com.phoebe.api.models.product.lists.ListRetrieveResponse\n\nfun main() {\n    val client: PhoebeClient = PhoebeOkHttpClient.fromEnv()\n\n    val lists: List<ListRetrieveResponse> = client.product().lists().retrieve("regionCode")\n}',
      },
      php: {
        method: 'product->lists->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$lists = $client->product->lists->retrieve('regionCode', maxResults: 1);\n\nvar_dump($lists);",
      },
      python: {
        method: 'product.lists.retrieve',
        example:
          'import os\nfrom phoebe_bird import Phoebe\n\nclient = Phoebe(\n    api_key=os.environ.get("EBIRD_API_KEY"),  # This is the default and can be omitted\n)\nlists = client.product.lists.retrieve(\n    region_code="regionCode",\n)\nprint(lists)',
      },
      ruby: {
        method: 'product.lists.retrieve',
        example:
          'require "phoebe"\n\nphoebe = Phoebe::Client.new(api_key: "My API Key")\n\nlists = phoebe.product.lists.retrieve("regionCode")\n\nputs(lists)',
      },
      typescript: {
        method: 'client.product.lists.retrieve',
        example:
          "import Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe({\n  apiKey: process.env['EBIRD_API_KEY'], // This is the default and can be omitted\n});\n\nconst lists = await client.product.lists.retrieve('regionCode');\n\nconsole.log(lists);",
      },
    },
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
    perLanguage: {
      csharp: {
        method: 'Product.Lists.Historical.Retrieve',
        example:
          'HistoricalRetrieveParams parameters = new()\n{\n    RegionCode = "regionCode",\n    Y = 0,\n    M = 1,\n    D = 1,\n};\n\nvar historicals = await client.Product.Lists.Historical.Retrieve(parameters);\n\nConsole.WriteLine(historicals);',
      },
      go: {
        method: 'client.Product.Lists.Historical.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/phoebe-bird/phoebe-go"\n\t"github.com/phoebe-bird/phoebe-go/option"\n)\n\nfunc main() {\n\tclient := phoebe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\thistoricals, err := client.Product.Lists.Historical.Get(\n\t\tcontext.TODO(),\n\t\t"regionCode",\n\t\tint64(0),\n\t\tint64(1),\n\t\tint64(1),\n\t\tphoebe.ProductListHistoricalGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", historicals)\n}\n',
      },
      http: {
        example:
          'curl https://api.ebird.org/v2/product/lists/$REGION_CODE/$Y/$M/$D \\\n    -H "X-eBirdApiToken: $EBIRD_API_KEY"',
      },
      java: {
        method: 'product().lists().historical().retrieve',
        example:
          'package com.phoebe.api.example;\n\nimport com.phoebe.api.client.PhoebeClient;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient;\nimport com.phoebe.api.models.product.lists.historical.HistoricalRetrieveParams;\nimport com.phoebe.api.models.product.lists.historical.HistoricalRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        PhoebeClient client = PhoebeOkHttpClient.fromEnv();\n\n        HistoricalRetrieveParams params = HistoricalRetrieveParams.builder()\n            .regionCode("regionCode")\n            .y(0L)\n            .m(1L)\n            .d(1L)\n            .build();\n        List<HistoricalRetrieveResponse> historicals = client.product().lists().historical().retrieve(params);\n    }\n}',
      },
      kotlin: {
        method: 'product().lists().historical().retrieve',
        example:
          'package com.phoebe.api.example\n\nimport com.phoebe.api.client.PhoebeClient\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient\nimport com.phoebe.api.models.product.lists.historical.HistoricalRetrieveParams\nimport com.phoebe.api.models.product.lists.historical.HistoricalRetrieveResponse\n\nfun main() {\n    val client: PhoebeClient = PhoebeOkHttpClient.fromEnv()\n\n    val params: HistoricalRetrieveParams = HistoricalRetrieveParams.builder()\n        .regionCode("regionCode")\n        .y(0L)\n        .m(1L)\n        .d(1L)\n        .build()\n    val historicals: List<HistoricalRetrieveResponse> = client.product().lists().historical().retrieve(params)\n}',
      },
      php: {
        method: 'product->lists->historical->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$historicals = $client->product->lists->historical->retrieve(\n  1, regionCode: 'regionCode', y: 0, m: 1, maxResults: 1, sortKey: 'obs_dt'\n);\n\nvar_dump($historicals);",
      },
      python: {
        method: 'product.lists.historical.retrieve',
        example:
          'import os\nfrom phoebe_bird import Phoebe\n\nclient = Phoebe(\n    api_key=os.environ.get("EBIRD_API_KEY"),  # This is the default and can be omitted\n)\nhistoricals = client.product.lists.historical.retrieve(\n    d=1,\n    region_code="regionCode",\n    y=0,\n    m=1,\n)\nprint(historicals)',
      },
      ruby: {
        method: 'product.lists.historical.retrieve',
        example:
          'require "phoebe"\n\nphoebe = Phoebe::Client.new(api_key: "My API Key")\n\nhistoricals = phoebe.product.lists.historical.retrieve(1, region_code: "regionCode", y_: 0, m: 1)\n\nputs(historicals)',
      },
      typescript: {
        method: 'client.product.lists.historical.retrieve',
        example:
          "import Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe({\n  apiKey: process.env['EBIRD_API_KEY'], // This is the default and can be omitted\n});\n\nconst historicals = await client.product.lists.historical.retrieve(1, {\n  regionCode: 'regionCode',\n  y: 0,\n  m: 1,\n});\n\nconsole.log(historicals);",
      },
    },
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
    perLanguage: {
      csharp: {
        method: 'Product.Top100.Retrieve',
        example:
          'Top100RetrieveParams parameters = new()\n{\n    RegionCode = "regionCode",\n    Y = 0,\n    M = 1,\n    D = 1,\n};\n\nvar top100s = await client.Product.Top100.Retrieve(parameters);\n\nConsole.WriteLine(top100s);',
      },
      go: {
        method: 'client.Product.Top100.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/phoebe-bird/phoebe-go"\n\t"github.com/phoebe-bird/phoebe-go/option"\n)\n\nfunc main() {\n\tclient := phoebe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\ttop100s, err := client.Product.Top100.Get(\n\t\tcontext.TODO(),\n\t\t"regionCode",\n\t\tint64(0),\n\t\tint64(1),\n\t\tint64(1),\n\t\tphoebe.ProductTop100GetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", top100s)\n}\n',
      },
      http: {
        example:
          'curl https://api.ebird.org/v2/product/top100/$REGION_CODE/$Y/$M/$D \\\n    -H "X-eBirdApiToken: $EBIRD_API_KEY"',
      },
      java: {
        method: 'product().top100().retrieve',
        example:
          'package com.phoebe.api.example;\n\nimport com.phoebe.api.client.PhoebeClient;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient;\nimport com.phoebe.api.models.product.top100.Top100RetrieveParams;\nimport com.phoebe.api.models.product.top100.Top100RetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        PhoebeClient client = PhoebeOkHttpClient.fromEnv();\n\n        Top100RetrieveParams params = Top100RetrieveParams.builder()\n            .regionCode("regionCode")\n            .y(0L)\n            .m(1L)\n            .d(1L)\n            .build();\n        List<Top100RetrieveResponse> top100s = client.product().top100().retrieve(params);\n    }\n}',
      },
      kotlin: {
        method: 'product().top100().retrieve',
        example:
          'package com.phoebe.api.example\n\nimport com.phoebe.api.client.PhoebeClient\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient\nimport com.phoebe.api.models.product.top100.Top100RetrieveParams\nimport com.phoebe.api.models.product.top100.Top100RetrieveResponse\n\nfun main() {\n    val client: PhoebeClient = PhoebeOkHttpClient.fromEnv()\n\n    val params: Top100RetrieveParams = Top100RetrieveParams.builder()\n        .regionCode("regionCode")\n        .y(0L)\n        .m(1L)\n        .d(1L)\n        .build()\n    val top100s: List<Top100RetrieveResponse> = client.product().top100().retrieve(params)\n}',
      },
      php: {
        method: 'product->top100->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$top100s = $client->product->top100->retrieve(\n  1, regionCode: 'regionCode', y: 0, m: 1, maxResults: 1, rankedBy: 'spp'\n);\n\nvar_dump($top100s);",
      },
      python: {
        method: 'product.top100.retrieve',
        example:
          'import os\nfrom phoebe_bird import Phoebe\n\nclient = Phoebe(\n    api_key=os.environ.get("EBIRD_API_KEY"),  # This is the default and can be omitted\n)\ntop100s = client.product.top100.retrieve(\n    d=1,\n    region_code="regionCode",\n    y=0,\n    m=1,\n)\nprint(top100s)',
      },
      ruby: {
        method: 'product.top100.retrieve',
        example:
          'require "phoebe"\n\nphoebe = Phoebe::Client.new(api_key: "My API Key")\n\ntop100s = phoebe.product.top100.retrieve(1, region_code: "regionCode", y_: 0, m: 1)\n\nputs(top100s)',
      },
      typescript: {
        method: 'client.product.top100.retrieve',
        example:
          "import Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe({\n  apiKey: process.env['EBIRD_API_KEY'], // This is the default and can be omitted\n});\n\nconst top100s = await client.product.top100.retrieve(1, {\n  regionCode: 'regionCode',\n  y: 0,\n  m: 1,\n});\n\nconsole.log(top100s);",
      },
    },
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
    perLanguage: {
      csharp: {
        method: 'Product.Stats.Retrieve',
        example:
          'StatRetrieveParams parameters = new()\n{\n    RegionCode = "regionCode",\n    Y = 0,\n    M = 1,\n    D = 1,\n};\n\nvar stat = await client.Product.Stats.Retrieve(parameters);\n\nConsole.WriteLine(stat);',
      },
      go: {
        method: 'client.Product.Stats.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/phoebe-bird/phoebe-go"\n\t"github.com/phoebe-bird/phoebe-go/option"\n)\n\nfunc main() {\n\tclient := phoebe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tstat, err := client.Product.Stats.Get(\n\t\tcontext.TODO(),\n\t\t"regionCode",\n\t\tint64(0),\n\t\tint64(1),\n\t\tint64(1),\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", stat.NumChecklists)\n}\n',
      },
      http: {
        example:
          'curl https://api.ebird.org/v2/product/stats/$REGION_CODE/$Y/$M/$D \\\n    -H "X-eBirdApiToken: $EBIRD_API_KEY"',
      },
      java: {
        method: 'product().stats().retrieve',
        example:
          'package com.phoebe.api.example;\n\nimport com.phoebe.api.client.PhoebeClient;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient;\nimport com.phoebe.api.models.product.stats.StatRetrieveParams;\nimport com.phoebe.api.models.product.stats.StatRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        PhoebeClient client = PhoebeOkHttpClient.fromEnv();\n\n        StatRetrieveParams params = StatRetrieveParams.builder()\n            .regionCode("regionCode")\n            .y(0L)\n            .m(1L)\n            .d(1L)\n            .build();\n        StatRetrieveResponse stat = client.product().stats().retrieve(params);\n    }\n}',
      },
      kotlin: {
        method: 'product().stats().retrieve',
        example:
          'package com.phoebe.api.example\n\nimport com.phoebe.api.client.PhoebeClient\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient\nimport com.phoebe.api.models.product.stats.StatRetrieveParams\nimport com.phoebe.api.models.product.stats.StatRetrieveResponse\n\nfun main() {\n    val client: PhoebeClient = PhoebeOkHttpClient.fromEnv()\n\n    val params: StatRetrieveParams = StatRetrieveParams.builder()\n        .regionCode("regionCode")\n        .y(0L)\n        .m(1L)\n        .d(1L)\n        .build()\n    val stat: StatRetrieveResponse = client.product().stats().retrieve(params)\n}',
      },
      php: {
        method: 'product->stats->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$stat = $client->product->stats->retrieve(\n  1, regionCode: 'regionCode', y: 0, m: 1\n);\n\nvar_dump($stat);",
      },
      python: {
        method: 'product.stats.retrieve',
        example:
          'import os\nfrom phoebe_bird import Phoebe\n\nclient = Phoebe(\n    api_key=os.environ.get("EBIRD_API_KEY"),  # This is the default and can be omitted\n)\nstat = client.product.stats.retrieve(\n    d=1,\n    region_code="regionCode",\n    y=0,\n    m=1,\n)\nprint(stat.num_checklists)',
      },
      ruby: {
        method: 'product.stats.retrieve',
        example:
          'require "phoebe"\n\nphoebe = Phoebe::Client.new(api_key: "My API Key")\n\nstat = phoebe.product.stats.retrieve(1, region_code: "regionCode", y_: 0, m: 1)\n\nputs(stat)',
      },
      typescript: {
        method: 'client.product.stats.retrieve',
        example:
          "import Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe({\n  apiKey: process.env['EBIRD_API_KEY'], // This is the default and can be omitted\n});\n\nconst stat = await client.product.stats.retrieve(1, {\n  regionCode: 'regionCode',\n  y: 0,\n  m: 1,\n});\n\nconsole.log(stat.numChecklists);",
      },
    },
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
    perLanguage: {
      csharp: {
        method: 'Product.SpeciesList.List',
        example:
          'SpeciesListListParams parameters = new() { RegionCode = "regionCode" };\n\nvar speciesLists = await client.Product.SpeciesList.List(parameters);\n\nConsole.WriteLine(speciesLists);',
      },
      go: {
        method: 'client.Product.SpeciesList.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/phoebe-bird/phoebe-go"\n\t"github.com/phoebe-bird/phoebe-go/option"\n)\n\nfunc main() {\n\tclient := phoebe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tspeciesLists, err := client.Product.SpeciesList.List(context.TODO(), "regionCode")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", speciesLists)\n}\n',
      },
      http: {
        example:
          'curl https://api.ebird.org/v2/product/spplist/$REGION_CODE \\\n    -H "X-eBirdApiToken: $EBIRD_API_KEY"',
      },
      java: {
        method: 'product().speciesList().list',
        example:
          'package com.phoebe.api.example;\n\nimport com.phoebe.api.client.PhoebeClient;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient;\nimport com.phoebe.api.models.product.specieslist.SpeciesListListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        PhoebeClient client = PhoebeOkHttpClient.fromEnv();\n\n        List<String> speciesLists = client.product().speciesList().list("regionCode");\n    }\n}',
      },
      kotlin: {
        method: 'product().speciesList().list',
        example:
          'package com.phoebe.api.example\n\nimport com.phoebe.api.client.PhoebeClient\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient\nimport com.phoebe.api.models.product.specieslist.SpeciesListListParams\n\nfun main() {\n    val client: PhoebeClient = PhoebeOkHttpClient.fromEnv()\n\n    val speciesLists: List<String> = client.product().speciesList().list("regionCode")\n}',
      },
      php: {
        method: 'product->speciesList->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$speciesLists = $client->product->speciesList->list('regionCode');\n\nvar_dump($speciesLists);",
      },
      python: {
        method: 'product.species_list.list',
        example:
          'import os\nfrom phoebe_bird import Phoebe\n\nclient = Phoebe(\n    api_key=os.environ.get("EBIRD_API_KEY"),  # This is the default and can be omitted\n)\nspecies_lists = client.product.species_list.list(\n    "regionCode",\n)\nprint(species_lists)',
      },
      ruby: {
        method: 'product.species_list.list',
        example:
          'require "phoebe"\n\nphoebe = Phoebe::Client.new(api_key: "My API Key")\n\nspecies_lists = phoebe.product.species_list.list("regionCode")\n\nputs(species_lists)',
      },
      typescript: {
        method: 'client.product.speciesList.list',
        example:
          "import Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe({\n  apiKey: process.env['EBIRD_API_KEY'], // This is the default and can be omitted\n});\n\nconst speciesLists = await client.product.speciesList.list('regionCode');\n\nconsole.log(speciesLists);",
      },
    },
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
    perLanguage: {
      csharp: {
        method: 'Product.Checklist.View',
        example:
          'ChecklistViewParams parameters = new() { SubID = "subId" };\n\nvar response = await client.Product.Checklist.View(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.Product.Checklist.View',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/phoebe-bird/phoebe-go"\n\t"github.com/phoebe-bird/phoebe-go/option"\n)\n\nfunc main() {\n\tclient := phoebe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Product.Checklist.View(context.TODO(), "subId")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ObsTimeValid)\n}\n',
      },
      http: {
        example:
          'curl https://api.ebird.org/v2/product/checklist/view/$SUB_ID \\\n    -H "X-eBirdApiToken: $EBIRD_API_KEY"',
      },
      java: {
        method: 'product().checklist().view',
        example:
          'package com.phoebe.api.example;\n\nimport com.phoebe.api.client.PhoebeClient;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient;\nimport com.phoebe.api.models.product.checklist.ChecklistViewParams;\nimport com.phoebe.api.models.product.checklist.ChecklistViewResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        PhoebeClient client = PhoebeOkHttpClient.fromEnv();\n\n        ChecklistViewResponse response = client.product().checklist().view("subId");\n    }\n}',
      },
      kotlin: {
        method: 'product().checklist().view',
        example:
          'package com.phoebe.api.example\n\nimport com.phoebe.api.client.PhoebeClient\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient\nimport com.phoebe.api.models.product.checklist.ChecklistViewParams\nimport com.phoebe.api.models.product.checklist.ChecklistViewResponse\n\nfun main() {\n    val client: PhoebeClient = PhoebeOkHttpClient.fromEnv()\n\n    val response: ChecklistViewResponse = client.product().checklist().view("subId")\n}',
      },
      php: {
        method: 'product->checklist->view',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$response = $client->product->checklist->view('subId');\n\nvar_dump($response);",
      },
      python: {
        method: 'product.checklist.view',
        example:
          'import os\nfrom phoebe_bird import Phoebe\n\nclient = Phoebe(\n    api_key=os.environ.get("EBIRD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.product.checklist.view(\n    "subId",\n)\nprint(response.obs_time_valid)',
      },
      ruby: {
        method: 'product.checklist.view',
        example:
          'require "phoebe"\n\nphoebe = Phoebe::Client.new(api_key: "My API Key")\n\nresponse = phoebe.product.checklist.view("subId")\n\nputs(response)',
      },
      typescript: {
        method: 'client.product.checklist.view',
        example:
          "import Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe({\n  apiKey: process.env['EBIRD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.product.checklist.view('subId');\n\nconsole.log(response.obsTimeValid);",
      },
    },
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
    perLanguage: {
      csharp: {
        method: 'Ref.Region.Adjacent.List',
        example:
          'AdjacentListParams parameters = new() { RegionCode = "regionCode" };\n\nvar adjacents = await client.Ref.Region.Adjacent.List(parameters);\n\nConsole.WriteLine(adjacents);',
      },
      go: {
        method: 'client.Ref.Region.Adjacent.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/phoebe-bird/phoebe-go"\n\t"github.com/phoebe-bird/phoebe-go/option"\n)\n\nfunc main() {\n\tclient := phoebe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tadjacents, err := client.Ref.Region.Adjacent.List(context.TODO(), "regionCode")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", adjacents)\n}\n',
      },
      http: {
        example:
          'curl https://api.ebird.org/v2/ref/adjacent/$REGION_CODE \\\n    -H "X-eBirdApiToken: $EBIRD_API_KEY"',
      },
      java: {
        method: 'ref().region().adjacent().list',
        example:
          'package com.phoebe.api.example;\n\nimport com.phoebe.api.client.PhoebeClient;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient;\nimport com.phoebe.api.models.ref.region.adjacent.AdjacentListParams;\nimport com.phoebe.api.models.ref.region.adjacent.AdjacentListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        PhoebeClient client = PhoebeOkHttpClient.fromEnv();\n\n        List<AdjacentListResponse> adjacents = client.ref().region().adjacent().list("regionCode");\n    }\n}',
      },
      kotlin: {
        method: 'ref().region().adjacent().list',
        example:
          'package com.phoebe.api.example\n\nimport com.phoebe.api.client.PhoebeClient\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient\nimport com.phoebe.api.models.ref.region.adjacent.AdjacentListParams\nimport com.phoebe.api.models.ref.region.adjacent.AdjacentListResponse\n\nfun main() {\n    val client: PhoebeClient = PhoebeOkHttpClient.fromEnv()\n\n    val adjacents: List<AdjacentListResponse> = client.ref().region().adjacent().list("regionCode")\n}',
      },
      php: {
        method: 'ref->region->adjacent->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$adjacents = $client->ref->region->adjacent->list('regionCode');\n\nvar_dump($adjacents);",
      },
      python: {
        method: 'ref.region.adjacent.list',
        example:
          'import os\nfrom phoebe_bird import Phoebe\n\nclient = Phoebe(\n    api_key=os.environ.get("EBIRD_API_KEY"),  # This is the default and can be omitted\n)\nadjacents = client.ref.region.adjacent.list(\n    "regionCode",\n)\nprint(adjacents)',
      },
      ruby: {
        method: 'ref.region.adjacent.list',
        example:
          'require "phoebe"\n\nphoebe = Phoebe::Client.new(api_key: "My API Key")\n\nadjacents = phoebe.ref.region.adjacent.list("regionCode")\n\nputs(adjacents)',
      },
      typescript: {
        method: 'client.ref.region.adjacent.list',
        example:
          "import Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe({\n  apiKey: process.env['EBIRD_API_KEY'], // This is the default and can be omitted\n});\n\nconst adjacents = await client.ref.region.adjacent.list('regionCode');\n\nconsole.log(adjacents);",
      },
    },
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
    perLanguage: {
      csharp: {
        method: 'Ref.Region.Info.Retrieve',
        example:
          'InfoRetrieveParams parameters = new() { RegionCode = "regionCode" };\n\nvar info = await client.Ref.Region.Info.Retrieve(parameters);\n\nConsole.WriteLine(info);',
      },
      go: {
        method: 'client.Ref.Region.Info.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/phoebe-bird/phoebe-go"\n\t"github.com/phoebe-bird/phoebe-go/option"\n)\n\nfunc main() {\n\tclient := phoebe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tinfo, err := client.Ref.Region.Info.Get(\n\t\tcontext.TODO(),\n\t\t"regionCode",\n\t\tphoebe.RefRegionInfoGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", info.Bounds)\n}\n',
      },
      http: {
        example:
          'curl https://api.ebird.org/v2/ref/region/info/$REGION_CODE \\\n    -H "X-eBirdApiToken: $EBIRD_API_KEY"',
      },
      java: {
        method: 'ref().region().info().retrieve',
        example:
          'package com.phoebe.api.example;\n\nimport com.phoebe.api.client.PhoebeClient;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient;\nimport com.phoebe.api.models.ref.region.info.InfoRetrieveParams;\nimport com.phoebe.api.models.ref.region.info.InfoRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        PhoebeClient client = PhoebeOkHttpClient.fromEnv();\n\n        InfoRetrieveResponse info = client.ref().region().info().retrieve("regionCode");\n    }\n}',
      },
      kotlin: {
        method: 'ref().region().info().retrieve',
        example:
          'package com.phoebe.api.example\n\nimport com.phoebe.api.client.PhoebeClient\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient\nimport com.phoebe.api.models.ref.region.info.InfoRetrieveParams\nimport com.phoebe.api.models.ref.region.info.InfoRetrieveResponse\n\nfun main() {\n    val client: PhoebeClient = PhoebeOkHttpClient.fromEnv()\n\n    val info: InfoRetrieveResponse = client.ref().region().info().retrieve("regionCode")\n}',
      },
      php: {
        method: 'ref->region->info->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$info = $client->ref->region->info->retrieve(\n  'regionCode', delim: 'delim', regionNameFormat: 'detailed'\n);\n\nvar_dump($info);",
      },
      python: {
        method: 'ref.region.info.retrieve',
        example:
          'import os\nfrom phoebe_bird import Phoebe\n\nclient = Phoebe(\n    api_key=os.environ.get("EBIRD_API_KEY"),  # This is the default and can be omitted\n)\ninfo = client.ref.region.info.retrieve(\n    region_code="regionCode",\n)\nprint(info.bounds)',
      },
      ruby: {
        method: 'ref.region.info.retrieve',
        example:
          'require "phoebe"\n\nphoebe = Phoebe::Client.new(api_key: "My API Key")\n\ninfo = phoebe.ref.region.info.retrieve("regionCode")\n\nputs(info)',
      },
      typescript: {
        method: 'client.ref.region.info.retrieve',
        example:
          "import Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe({\n  apiKey: process.env['EBIRD_API_KEY'], // This is the default and can be omitted\n});\n\nconst info = await client.ref.region.info.retrieve('regionCode');\n\nconsole.log(info.bounds);",
      },
    },
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
    perLanguage: {
      csharp: {
        method: 'Ref.Region.List.List',
        example:
          'ListListParams parameters = new()\n{\n    RegionType = "regionType",\n    ParentRegionCode = "parentRegionCode",\n};\n\nvar lists = await client.Ref.Region.List.List(parameters);\n\nConsole.WriteLine(lists);',
      },
      go: {
        method: 'client.Ref.Region.List.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/phoebe-bird/phoebe-go"\n\t"github.com/phoebe-bird/phoebe-go/option"\n)\n\nfunc main() {\n\tclient := phoebe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tlists, err := client.Ref.Region.List.List(\n\t\tcontext.TODO(),\n\t\t"regionType",\n\t\t"parentRegionCode",\n\t\tphoebe.RefRegionListListParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", lists)\n}\n',
      },
      http: {
        example:
          'curl https://api.ebird.org/v2/ref/region/list/$REGION_TYPE/$PARENT_REGION_CODE \\\n    -H "X-eBirdApiToken: $EBIRD_API_KEY"',
      },
      java: {
        method: 'ref().region().list().list',
        example:
          'package com.phoebe.api.example;\n\nimport com.phoebe.api.client.PhoebeClient;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient;\nimport com.phoebe.api.models.ref.region.list.ListListParams;\nimport com.phoebe.api.models.ref.region.list.ListListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        PhoebeClient client = PhoebeOkHttpClient.fromEnv();\n\n        ListListParams params = ListListParams.builder()\n            .regionType("regionType")\n            .parentRegionCode("parentRegionCode")\n            .build();\n        List<ListListResponse> lists = client.ref().region().list().list(params);\n    }\n}',
      },
      kotlin: {
        method: 'ref().region().list().list',
        example:
          'package com.phoebe.api.example\n\nimport com.phoebe.api.client.PhoebeClient\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient\nimport com.phoebe.api.models.ref.region.list.ListListParams\nimport com.phoebe.api.models.ref.region.list.ListListResponse\n\nfun main() {\n    val client: PhoebeClient = PhoebeOkHttpClient.fromEnv()\n\n    val params: ListListParams = ListListParams.builder()\n        .regionType("regionType")\n        .parentRegionCode("parentRegionCode")\n        .build()\n    val lists: List<ListListResponse> = client.ref().region().list().list(params)\n}',
      },
      php: {
        method: 'ref->region->list->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$lists = $client->ref->region->list->list(\n  'parentRegionCode', regionType: 'regionType', fmt: 'csv'\n);\n\nvar_dump($lists);",
      },
      python: {
        method: 'ref.region.list.list',
        example:
          'import os\nfrom phoebe_bird import Phoebe\n\nclient = Phoebe(\n    api_key=os.environ.get("EBIRD_API_KEY"),  # This is the default and can be omitted\n)\nlists = client.ref.region.list.list(\n    parent_region_code="parentRegionCode",\n    region_type="regionType",\n)\nprint(lists)',
      },
      ruby: {
        method: 'ref.region.list.list',
        example:
          'require "phoebe"\n\nphoebe = Phoebe::Client.new(api_key: "My API Key")\n\nlists = phoebe.ref.region.list.list("parentRegionCode", region_type: "regionType")\n\nputs(lists)',
      },
      typescript: {
        method: 'client.ref.region.list.list',
        example:
          "import Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe({\n  apiKey: process.env['EBIRD_API_KEY'], // This is the default and can be omitted\n});\n\nconst lists = await client.ref.region.list.list('parentRegionCode', { regionType: 'regionType' });\n\nconsole.log(lists);",
      },
    },
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
    perLanguage: {
      csharp: {
        method: 'Ref.Hotspot.List',
        example:
          'HotspotListParams parameters = new() { RegionCode = "regionCode" };\n\nvar hotspots = await client.Ref.Hotspot.List(parameters);\n\nConsole.WriteLine(hotspots);',
      },
      go: {
        method: 'client.Ref.Hotspot.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/phoebe-bird/phoebe-go"\n\t"github.com/phoebe-bird/phoebe-go/option"\n)\n\nfunc main() {\n\tclient := phoebe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\thotspots, err := client.Ref.Hotspot.List(\n\t\tcontext.TODO(),\n\t\t"regionCode",\n\t\tphoebe.RefHotspotListParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", hotspots)\n}\n',
      },
      http: {
        example:
          'curl https://api.ebird.org/v2/ref/hotspot/$REGION_CODE \\\n    -H "X-eBirdApiToken: $EBIRD_API_KEY"',
      },
      java: {
        method: 'ref().hotspot().list',
        example:
          'package com.phoebe.api.example;\n\nimport com.phoebe.api.client.PhoebeClient;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient;\nimport com.phoebe.api.models.ref.hotspot.HotspotListParams;\nimport com.phoebe.api.models.ref.hotspot.HotspotListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        PhoebeClient client = PhoebeOkHttpClient.fromEnv();\n\n        List<HotspotListResponse> hotspots = client.ref().hotspot().list("regionCode");\n    }\n}',
      },
      kotlin: {
        method: 'ref().hotspot().list',
        example:
          'package com.phoebe.api.example\n\nimport com.phoebe.api.client.PhoebeClient\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient\nimport com.phoebe.api.models.ref.hotspot.HotspotListParams\nimport com.phoebe.api.models.ref.hotspot.HotspotListResponse\n\nfun main() {\n    val client: PhoebeClient = PhoebeOkHttpClient.fromEnv()\n\n    val hotspots: List<HotspotListResponse> = client.ref().hotspot().list("regionCode")\n}',
      },
      php: {
        method: 'ref->hotspot->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$hotspots = $client->ref->hotspot->list('regionCode', back: 1, fmt: 'csv');\n\nvar_dump($hotspots);",
      },
      python: {
        method: 'ref.hotspot.list',
        example:
          'import os\nfrom phoebe_bird import Phoebe\n\nclient = Phoebe(\n    api_key=os.environ.get("EBIRD_API_KEY"),  # This is the default and can be omitted\n)\nhotspots = client.ref.hotspot.list(\n    region_code="regionCode",\n)\nprint(hotspots)',
      },
      ruby: {
        method: 'ref.hotspot.list',
        example:
          'require "phoebe"\n\nphoebe = Phoebe::Client.new(api_key: "My API Key")\n\nhotspots = phoebe.ref.hotspot.list("regionCode")\n\nputs(hotspots)',
      },
      typescript: {
        method: 'client.ref.hotspot.list',
        example:
          "import Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe({\n  apiKey: process.env['EBIRD_API_KEY'], // This is the default and can be omitted\n});\n\nconst hotspots = await client.ref.hotspot.list('regionCode');\n\nconsole.log(hotspots);",
      },
    },
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
    perLanguage: {
      csharp: {
        method: 'Ref.Hotspot.Geo.Retrieve',
        example:
          'GeoRetrieveParams parameters = new()\n{\n    Lat = -90,\n    Lng = -180,\n};\n\nvar geos = await client.Ref.Hotspot.Geo.Retrieve(parameters);\n\nConsole.WriteLine(geos);',
      },
      go: {
        method: 'client.Ref.Hotspot.Geo.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/phoebe-bird/phoebe-go"\n\t"github.com/phoebe-bird/phoebe-go/option"\n)\n\nfunc main() {\n\tclient := phoebe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tgeos, err := client.Ref.Hotspot.Geo.Get(context.TODO(), phoebe.RefHotspotGeoGetParams{\n\t\tLat: phoebe.F(-90.000000),\n\t\tLng: phoebe.F(-180.000000),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", geos)\n}\n',
      },
      http: {
        example: 'curl https://api.ebird.org/v2/ref/hotspot/geo \\\n    -H "X-eBirdApiToken: $EBIRD_API_KEY"',
      },
      java: {
        method: 'ref().hotspot().geo().retrieve',
        example:
          'package com.phoebe.api.example;\n\nimport com.phoebe.api.client.PhoebeClient;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient;\nimport com.phoebe.api.models.ref.hotspot.geo.GeoRetrieveParams;\nimport com.phoebe.api.models.ref.hotspot.geo.GeoRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        PhoebeClient client = PhoebeOkHttpClient.fromEnv();\n\n        GeoRetrieveParams params = GeoRetrieveParams.builder()\n            .lat(-90.0f)\n            .lng(-180.0f)\n            .build();\n        List<GeoRetrieveResponse> geos = client.ref().hotspot().geo().retrieve(params);\n    }\n}',
      },
      kotlin: {
        method: 'ref().hotspot().geo().retrieve',
        example:
          'package com.phoebe.api.example\n\nimport com.phoebe.api.client.PhoebeClient\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient\nimport com.phoebe.api.models.ref.hotspot.geo.GeoRetrieveParams\nimport com.phoebe.api.models.ref.hotspot.geo.GeoRetrieveResponse\n\nfun main() {\n    val client: PhoebeClient = PhoebeOkHttpClient.fromEnv()\n\n    val params: GeoRetrieveParams = GeoRetrieveParams.builder()\n        .lat(-90.0f)\n        .lng(-180.0f)\n        .build()\n    val geos: List<GeoRetrieveResponse> = client.ref().hotspot().geo().retrieve(params)\n}',
      },
      php: {
        method: 'ref->hotspot->geo->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$geos = $client->ref->hotspot->geo->retrieve(\n  lat: -90, lng: -180, back: 1, dist: 0, fmt: 'csv'\n);\n\nvar_dump($geos);",
      },
      python: {
        method: 'ref.hotspot.geo.retrieve',
        example:
          'import os\nfrom phoebe_bird import Phoebe\n\nclient = Phoebe(\n    api_key=os.environ.get("EBIRD_API_KEY"),  # This is the default and can be omitted\n)\ngeos = client.ref.hotspot.geo.retrieve(\n    lat=-90,\n    lng=-180,\n)\nprint(geos)',
      },
      ruby: {
        method: 'ref.hotspot.geo.retrieve',
        example:
          'require "phoebe"\n\nphoebe = Phoebe::Client.new(api_key: "My API Key")\n\ngeos = phoebe.ref.hotspot.geo.retrieve(lat: -90, lng: -180)\n\nputs(geos)',
      },
      typescript: {
        method: 'client.ref.hotspot.geo.retrieve',
        example:
          "import Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe({\n  apiKey: process.env['EBIRD_API_KEY'], // This is the default and can be omitted\n});\n\nconst geos = await client.ref.hotspot.geo.retrieve({ lat: -90, lng: -180 });\n\nconsole.log(geos);",
      },
    },
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
    perLanguage: {
      csharp: {
        method: 'Ref.Hotspot.Info.Retrieve',
        example:
          'InfoRetrieveParams parameters = new() { LocID = "locId" };\n\nvar info = await client.Ref.Hotspot.Info.Retrieve(parameters);\n\nConsole.WriteLine(info);',
      },
      go: {
        method: 'client.Ref.Hotspot.Info.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/phoebe-bird/phoebe-go"\n\t"github.com/phoebe-bird/phoebe-go/option"\n)\n\nfunc main() {\n\tclient := phoebe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tinfo, err := client.Ref.Hotspot.Info.Get(context.TODO(), "locId")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", info.CountryCode)\n}\n',
      },
      http: {
        example:
          'curl https://api.ebird.org/v2/ref/hotspot/info/$LOC_ID \\\n    -H "X-eBirdApiToken: $EBIRD_API_KEY"',
      },
      java: {
        method: 'ref().hotspot().info().retrieve',
        example:
          'package com.phoebe.api.example;\n\nimport com.phoebe.api.client.PhoebeClient;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient;\nimport com.phoebe.api.models.ref.hotspot.info.InfoRetrieveParams;\nimport com.phoebe.api.models.ref.hotspot.info.InfoRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        PhoebeClient client = PhoebeOkHttpClient.fromEnv();\n\n        InfoRetrieveResponse info = client.ref().hotspot().info().retrieve("locId");\n    }\n}',
      },
      kotlin: {
        method: 'ref().hotspot().info().retrieve',
        example:
          'package com.phoebe.api.example\n\nimport com.phoebe.api.client.PhoebeClient\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient\nimport com.phoebe.api.models.ref.hotspot.info.InfoRetrieveParams\nimport com.phoebe.api.models.ref.hotspot.info.InfoRetrieveResponse\n\nfun main() {\n    val client: PhoebeClient = PhoebeOkHttpClient.fromEnv()\n\n    val info: InfoRetrieveResponse = client.ref().hotspot().info().retrieve("locId")\n}',
      },
      php: {
        method: 'ref->hotspot->info->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$info = $client->ref->hotspot->info->retrieve('locId');\n\nvar_dump($info);",
      },
      python: {
        method: 'ref.hotspot.info.retrieve',
        example:
          'import os\nfrom phoebe_bird import Phoebe\n\nclient = Phoebe(\n    api_key=os.environ.get("EBIRD_API_KEY"),  # This is the default and can be omitted\n)\ninfo = client.ref.hotspot.info.retrieve(\n    "locId",\n)\nprint(info.country_code)',
      },
      ruby: {
        method: 'ref.hotspot.info.retrieve',
        example:
          'require "phoebe"\n\nphoebe = Phoebe::Client.new(api_key: "My API Key")\n\ninfo = phoebe.ref.hotspot.info.retrieve("locId")\n\nputs(info)',
      },
      typescript: {
        method: 'client.ref.hotspot.info.retrieve',
        example:
          "import Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe({\n  apiKey: process.env['EBIRD_API_KEY'], // This is the default and can be omitted\n});\n\nconst info = await client.ref.hotspot.info.retrieve('locId');\n\nconsole.log(info.countryCode);",
      },
    },
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
    perLanguage: {
      csharp: {
        method: 'Ref.Taxonomy.Ebird.Retrieve',
        example:
          'EbirdRetrieveParams parameters = new();\n\nvar ebirds = await client.Ref.Taxonomy.Ebird.Retrieve(parameters);\n\nConsole.WriteLine(ebirds);',
      },
      go: {
        method: 'client.Ref.Taxonomy.Ebird.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/phoebe-bird/phoebe-go"\n\t"github.com/phoebe-bird/phoebe-go/option"\n)\n\nfunc main() {\n\tclient := phoebe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tebirds, err := client.Ref.Taxonomy.Ebird.Get(context.TODO(), phoebe.RefTaxonomyEbirdGetParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", ebirds)\n}\n',
      },
      http: {
        example:
          'curl https://api.ebird.org/v2/ref/taxonomy/ebird \\\n    -H "X-eBirdApiToken: $EBIRD_API_KEY"',
      },
      java: {
        method: 'ref().taxonomy().ebird().retrieve',
        example:
          'package com.phoebe.api.example;\n\nimport com.phoebe.api.client.PhoebeClient;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient;\nimport com.phoebe.api.models.ref.taxonomy.ebird.EbirdRetrieveParams;\nimport com.phoebe.api.models.ref.taxonomy.ebird.EbirdRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        PhoebeClient client = PhoebeOkHttpClient.fromEnv();\n\n        List<EbirdRetrieveResponse> ebirds = client.ref().taxonomy().ebird().retrieve();\n    }\n}',
      },
      kotlin: {
        method: 'ref().taxonomy().ebird().retrieve',
        example:
          'package com.phoebe.api.example\n\nimport com.phoebe.api.client.PhoebeClient\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient\nimport com.phoebe.api.models.ref.taxonomy.ebird.EbirdRetrieveParams\nimport com.phoebe.api.models.ref.taxonomy.ebird.EbirdRetrieveResponse\n\nfun main() {\n    val client: PhoebeClient = PhoebeOkHttpClient.fromEnv()\n\n    val ebirds: List<EbirdRetrieveResponse> = client.ref().taxonomy().ebird().retrieve()\n}',
      },
      php: {
        method: 'ref->taxonomy->ebird->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$ebirds = $client->ref->taxonomy->ebird->retrieve(\n  cat: 'cat',\n  fmt: 'csv',\n  locale: 'locale',\n  species: 'species',\n  version: 'version',\n);\n\nvar_dump($ebirds);",
      },
      python: {
        method: 'ref.taxonomy.ebird.retrieve',
        example:
          'import os\nfrom phoebe_bird import Phoebe\n\nclient = Phoebe(\n    api_key=os.environ.get("EBIRD_API_KEY"),  # This is the default and can be omitted\n)\nebirds = client.ref.taxonomy.ebird.retrieve()\nprint(ebirds)',
      },
      ruby: {
        method: 'ref.taxonomy.ebird.retrieve',
        example:
          'require "phoebe"\n\nphoebe = Phoebe::Client.new(api_key: "My API Key")\n\nebirds = phoebe.ref.taxonomy.ebird.retrieve\n\nputs(ebirds)',
      },
      typescript: {
        method: 'client.ref.taxonomy.ebird.retrieve',
        example:
          "import Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe({\n  apiKey: process.env['EBIRD_API_KEY'], // This is the default and can be omitted\n});\n\nconst ebirds = await client.ref.taxonomy.ebird.retrieve();\n\nconsole.log(ebirds);",
      },
    },
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
    perLanguage: {
      csharp: {
        method: 'Ref.Taxonomy.Forms.List',
        example:
          'FormListParams parameters = new() { SpeciesCode = "speciesCode" };\n\nvar forms = await client.Ref.Taxonomy.Forms.List(parameters);\n\nConsole.WriteLine(forms);',
      },
      go: {
        method: 'client.Ref.Taxonomy.Forms.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/phoebe-bird/phoebe-go"\n\t"github.com/phoebe-bird/phoebe-go/option"\n)\n\nfunc main() {\n\tclient := phoebe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tforms, err := client.Ref.Taxonomy.Forms.List(context.TODO(), "speciesCode")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", forms)\n}\n',
      },
      http: {
        example:
          'curl https://api.ebird.org/v2/ref/taxon/forms/$SPECIES_CODE \\\n    -H "X-eBirdApiToken: $EBIRD_API_KEY"',
      },
      java: {
        method: 'ref().taxonomy().forms().list',
        example:
          'package com.phoebe.api.example;\n\nimport com.phoebe.api.client.PhoebeClient;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient;\nimport com.phoebe.api.models.ref.taxonomy.forms.FormListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        PhoebeClient client = PhoebeOkHttpClient.fromEnv();\n\n        List<String> forms = client.ref().taxonomy().forms().list("speciesCode");\n    }\n}',
      },
      kotlin: {
        method: 'ref().taxonomy().forms().list',
        example:
          'package com.phoebe.api.example\n\nimport com.phoebe.api.client.PhoebeClient\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient\nimport com.phoebe.api.models.ref.taxonomy.forms.FormListParams\n\nfun main() {\n    val client: PhoebeClient = PhoebeOkHttpClient.fromEnv()\n\n    val forms: List<String> = client.ref().taxonomy().forms().list("speciesCode")\n}',
      },
      php: {
        method: 'ref->taxonomy->forms->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$forms = $client->ref->taxonomy->forms->list('speciesCode');\n\nvar_dump($forms);",
      },
      python: {
        method: 'ref.taxonomy.forms.list',
        example:
          'import os\nfrom phoebe_bird import Phoebe\n\nclient = Phoebe(\n    api_key=os.environ.get("EBIRD_API_KEY"),  # This is the default and can be omitted\n)\nforms = client.ref.taxonomy.forms.list(\n    "speciesCode",\n)\nprint(forms)',
      },
      ruby: {
        method: 'ref.taxonomy.forms.list',
        example:
          'require "phoebe"\n\nphoebe = Phoebe::Client.new(api_key: "My API Key")\n\nforms = phoebe.ref.taxonomy.forms.list("speciesCode")\n\nputs(forms)',
      },
      typescript: {
        method: 'client.ref.taxonomy.forms.list',
        example:
          "import Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe({\n  apiKey: process.env['EBIRD_API_KEY'], // This is the default and can be omitted\n});\n\nconst forms = await client.ref.taxonomy.forms.list('speciesCode');\n\nconsole.log(forms);",
      },
    },
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
    perLanguage: {
      csharp: {
        method: 'Ref.Taxonomy.Locales.List',
        example:
          'LocaleListParams parameters = new();\n\nvar locales = await client.Ref.Taxonomy.Locales.List(parameters);\n\nConsole.WriteLine(locales);',
      },
      go: {
        method: 'client.Ref.Taxonomy.Locales.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/phoebe-bird/phoebe-go"\n\t"github.com/phoebe-bird/phoebe-go/option"\n)\n\nfunc main() {\n\tclient := phoebe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tlocales, err := client.Ref.Taxonomy.Locales.List(context.TODO(), phoebe.RefTaxonomyLocaleListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", locales)\n}\n',
      },
      http: {
        example:
          'curl https://api.ebird.org/v2/ref/taxa-locales/ebird \\\n    -H "X-eBirdApiToken: $EBIRD_API_KEY"',
      },
      java: {
        method: 'ref().taxonomy().locales().list',
        example:
          'package com.phoebe.api.example;\n\nimport com.phoebe.api.client.PhoebeClient;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient;\nimport com.phoebe.api.models.ref.taxonomy.locales.LocaleListParams;\nimport com.phoebe.api.models.ref.taxonomy.locales.LocaleListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        PhoebeClient client = PhoebeOkHttpClient.fromEnv();\n\n        List<LocaleListResponse> locales = client.ref().taxonomy().locales().list();\n    }\n}',
      },
      kotlin: {
        method: 'ref().taxonomy().locales().list',
        example:
          'package com.phoebe.api.example\n\nimport com.phoebe.api.client.PhoebeClient\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient\nimport com.phoebe.api.models.ref.taxonomy.locales.LocaleListParams\nimport com.phoebe.api.models.ref.taxonomy.locales.LocaleListResponse\n\nfun main() {\n    val client: PhoebeClient = PhoebeOkHttpClient.fromEnv()\n\n    val locales: List<LocaleListResponse> = client.ref().taxonomy().locales().list()\n}',
      },
      php: {
        method: 'ref->taxonomy->locales->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$locales = $client->ref->taxonomy->locales->list(acceptLanguage: 'en');\n\nvar_dump($locales);",
      },
      python: {
        method: 'ref.taxonomy.locales.list',
        example:
          'import os\nfrom phoebe_bird import Phoebe\n\nclient = Phoebe(\n    api_key=os.environ.get("EBIRD_API_KEY"),  # This is the default and can be omitted\n)\nlocales = client.ref.taxonomy.locales.list()\nprint(locales)',
      },
      ruby: {
        method: 'ref.taxonomy.locales.list',
        example:
          'require "phoebe"\n\nphoebe = Phoebe::Client.new(api_key: "My API Key")\n\nlocales = phoebe.ref.taxonomy.locales.list\n\nputs(locales)',
      },
      typescript: {
        method: 'client.ref.taxonomy.locales.list',
        example:
          "import Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe({\n  apiKey: process.env['EBIRD_API_KEY'], // This is the default and can be omitted\n});\n\nconst locales = await client.ref.taxonomy.locales.list();\n\nconsole.log(locales);",
      },
    },
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
    perLanguage: {
      csharp: {
        method: 'Ref.Taxonomy.Versions.List',
        example:
          'VersionListParams parameters = new();\n\nvar versions = await client.Ref.Taxonomy.Versions.List(parameters);\n\nConsole.WriteLine(versions);',
      },
      go: {
        method: 'client.Ref.Taxonomy.Versions.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/phoebe-bird/phoebe-go"\n\t"github.com/phoebe-bird/phoebe-go/option"\n)\n\nfunc main() {\n\tclient := phoebe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tversions, err := client.Ref.Taxonomy.Versions.List(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", versions)\n}\n',
      },
      http: {
        example:
          'curl https://api.ebird.org/v2/ref/taxonomy/versions \\\n    -H "X-eBirdApiToken: $EBIRD_API_KEY"',
      },
      java: {
        method: 'ref().taxonomy().versions().list',
        example:
          'package com.phoebe.api.example;\n\nimport com.phoebe.api.client.PhoebeClient;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient;\nimport com.phoebe.api.models.ref.taxonomy.versions.VersionListParams;\nimport com.phoebe.api.models.ref.taxonomy.versions.VersionListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        PhoebeClient client = PhoebeOkHttpClient.fromEnv();\n\n        List<VersionListResponse> versions = client.ref().taxonomy().versions().list();\n    }\n}',
      },
      kotlin: {
        method: 'ref().taxonomy().versions().list',
        example:
          'package com.phoebe.api.example\n\nimport com.phoebe.api.client.PhoebeClient\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient\nimport com.phoebe.api.models.ref.taxonomy.versions.VersionListParams\nimport com.phoebe.api.models.ref.taxonomy.versions.VersionListResponse\n\nfun main() {\n    val client: PhoebeClient = PhoebeOkHttpClient.fromEnv()\n\n    val versions: List<VersionListResponse> = client.ref().taxonomy().versions().list()\n}',
      },
      php: {
        method: 'ref->taxonomy->versions->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$versions = $client->ref->taxonomy->versions->list();\n\nvar_dump($versions);",
      },
      python: {
        method: 'ref.taxonomy.versions.list',
        example:
          'import os\nfrom phoebe_bird import Phoebe\n\nclient = Phoebe(\n    api_key=os.environ.get("EBIRD_API_KEY"),  # This is the default and can be omitted\n)\nversions = client.ref.taxonomy.versions.list()\nprint(versions)',
      },
      ruby: {
        method: 'ref.taxonomy.versions.list',
        example:
          'require "phoebe"\n\nphoebe = Phoebe::Client.new(api_key: "My API Key")\n\nversions = phoebe.ref.taxonomy.versions.list\n\nputs(versions)',
      },
      typescript: {
        method: 'client.ref.taxonomy.versions.list',
        example:
          "import Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe({\n  apiKey: process.env['EBIRD_API_KEY'], // This is the default and can be omitted\n});\n\nconst versions = await client.ref.taxonomy.versions.list();\n\nconsole.log(versions);",
      },
    },
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
    perLanguage: {
      csharp: {
        method: 'Ref.Taxonomy.SpeciesGroups.List',
        example:
          'SpeciesGroupListParams parameters = new()\n{\n    SpeciesGrouping = SpeciesGrouping.Merlin\n};\n\nvar speciesGroups = await client.Ref.Taxonomy.SpeciesGroups.List(parameters);\n\nConsole.WriteLine(speciesGroups);',
      },
      go: {
        method: 'client.Ref.Taxonomy.SpeciesGroups.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/phoebe-bird/phoebe-go"\n\t"github.com/phoebe-bird/phoebe-go/option"\n)\n\nfunc main() {\n\tclient := phoebe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tspeciesGroups, err := client.Ref.Taxonomy.SpeciesGroups.List(\n\t\tcontext.TODO(),\n\t\tphoebe.RefTaxonomySpeciesGroupListParamsSpeciesGroupingMerlin,\n\t\tphoebe.RefTaxonomySpeciesGroupListParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", speciesGroups)\n}\n',
      },
      http: {
        example:
          'curl https://api.ebird.org/v2/ref/sppgroup/$SPECIES_GROUPING \\\n    -H "X-eBirdApiToken: $EBIRD_API_KEY"',
      },
      java: {
        method: 'ref().taxonomy().speciesGroups().list',
        example:
          'package com.phoebe.api.example;\n\nimport com.phoebe.api.client.PhoebeClient;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient;\nimport com.phoebe.api.models.ref.taxonomy.speciesgroups.SpeciesGroupListParams;\nimport com.phoebe.api.models.ref.taxonomy.speciesgroups.SpeciesGroupListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        PhoebeClient client = PhoebeOkHttpClient.fromEnv();\n\n        List<SpeciesGroupListResponse> speciesGroups = client.ref().taxonomy().speciesGroups().list(SpeciesGroupListParams.SpeciesGrouping.MERLIN);\n    }\n}',
      },
      kotlin: {
        method: 'ref().taxonomy().speciesGroups().list',
        example:
          'package com.phoebe.api.example\n\nimport com.phoebe.api.client.PhoebeClient\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient\nimport com.phoebe.api.models.ref.taxonomy.speciesgroups.SpeciesGroupListParams\nimport com.phoebe.api.models.ref.taxonomy.speciesgroups.SpeciesGroupListResponse\n\nfun main() {\n    val client: PhoebeClient = PhoebeOkHttpClient.fromEnv()\n\n    val speciesGroups: List<SpeciesGroupListResponse> = client.ref().taxonomy().speciesGroups().list(SpeciesGroupListParams.SpeciesGrouping.MERLIN)\n}',
      },
      php: {
        method: 'ref->taxonomy->speciesGroups->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$speciesGroups = $client->ref->taxonomy->speciesGroups->list(\n  'merlin', groupNameLocale: 'groupNameLocale'\n);\n\nvar_dump($speciesGroups);",
      },
      python: {
        method: 'ref.taxonomy.species_groups.list',
        example:
          'import os\nfrom phoebe_bird import Phoebe\n\nclient = Phoebe(\n    api_key=os.environ.get("EBIRD_API_KEY"),  # This is the default and can be omitted\n)\nspecies_groups = client.ref.taxonomy.species_groups.list(\n    species_grouping="merlin",\n)\nprint(species_groups)',
      },
      ruby: {
        method: 'ref.taxonomy.species_groups.list',
        example:
          'require "phoebe"\n\nphoebe = Phoebe::Client.new(api_key: "My API Key")\n\nspecies_groups = phoebe.ref.taxonomy.species_groups.list(:merlin)\n\nputs(species_groups)',
      },
      typescript: {
        method: 'client.ref.taxonomy.speciesGroups.list',
        example:
          "import Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe({\n  apiKey: process.env['EBIRD_API_KEY'], // This is the default and can be omitted\n});\n\nconst speciesGroups = await client.ref.taxonomy.speciesGroups.list('merlin');\n\nconsole.log(speciesGroups);",
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'csharp',
    content:
      '# Phoebe C# API Library\n\nThe Phoebe C# SDK provides convenient access to the [Phoebe REST API](https://science.ebird.org/en/use-ebird-data/download-ebird-data-products) from applications written in   C#.\n\n## Installation\n\n```bash\ngit clone git@github.com:phoebe-bird/phoebe-csharp.git\ndotnet add reference phoebe-csharp/src/Phoebe\n```\n\n## Requirements\n\nThis library requires .NET Standard 2.0 or later.\n\n## Usage\n\nSee the [`examples`](examples) directory for complete and runnable examples.\n\n```csharp\nPhoebeClient client = new();\n\nInfoRetrieveParams parameters = new() { LocID = "L99381" };\n\nvar info = await client.Ref.Hotspot.Info.Retrieve(parameters);\n\nConsole.WriteLine(info);\n```',
  },
  {
    language: 'go',
    content:
      '# Phoebe Go API Library\n\n<a href="https://pkg.go.dev/github.com/phoebe-bird/phoebe-go"><img src="https://pkg.go.dev/badge/github.com/phoebe-bird/phoebe-go.svg" alt="Go Reference"></a>\n\nThe Phoebe Go library provides convenient access to the [Phoebe REST API](https://science.ebird.org/en/use-ebird-data/download-ebird-data-products)\nfrom applications written in Go.\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Phoebe MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=phoebe-ebird-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsInBob2ViZS1lYmlyZC1tY3AiXSwiZW52Ijp7IkVCSVJEX0FQSV9LRVkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22phoebe-ebird-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22phoebe-ebird-mcp%22%5D%2C%22env%22%3A%7B%22EBIRD_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n```go\nimport (\n\t"github.com/phoebe-bird/phoebe-go" // imported as SDK_PackageName\n)\n```\n\n<!-- x-release-please-end -->\n\nOr to pin the version:\n\n<!-- x-release-please-start-version -->\n\n```sh\ngo get -u \'github.com/phoebe-bird/phoebe-go@v0.0.1\'\n```\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Go 1.22+.\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```go\npackage main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/phoebe-bird/phoebe-go"\n\t"github.com/phoebe-bird/phoebe-go/option"\n)\n\nfunc main() {\n\tclient := phoebe.NewClient(\n\t\toption.WithAPIKey("My API Key"), // defaults to os.LookupEnv("EBIRD_API_KEY")\n\t)\n\tinfo, err := client.Ref.Hotspot.Info.Get(context.TODO(), "L99381")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", info.CountryCode)\n}\n\n```\n\n### Request fields\n\nAll request parameters are wrapped in a generic `Field` type,\nwhich we use to distinguish zero values from null or omitted fields.\n\nThis prevents accidentally sending a zero value if you forget a required parameter,\nand enables explicitly sending `null`, `false`, `\'\'`, or `0` on optional parameters.\nAny field not specified is not sent.\n\nTo construct fields with values, use the helpers `String()`, `Int()`, `Float()`, or most commonly, the generic `F[T]()`.\nTo send a null, use `Null[T]()`, and to send a nonconforming value, use `Raw[T](any)`. For example:\n\n```go\nparams := FooParams{\n\tName: SDK_PackageName.F("hello"),\n\n\t// Explicitly send `"description": null`\n\tDescription: SDK_PackageName.Null[string](),\n\n\tPoint: SDK_PackageName.F(SDK_PackageName.Point{\n\t\tX: SDK_PackageName.Int(0),\n\t\tY: SDK_PackageName.Int(1),\n\n\t\t// In cases where the API specifies a given type,\n\t\t// but you want to send something else, use `Raw`:\n\t\tZ: SDK_PackageName.Raw[int64](0.01), // sends a float\n\t}),\n}\n```\n\n### Response objects\n\nAll fields in response structs are value types (not pointers or wrappers).\n\nIf a given field is `null`, not present, or invalid, the corresponding field\nwill simply be its zero value.\n\nAll response structs also include a special `JSON` field, containing more detailed\ninformation about each property, which you can use like so:\n\n```go\nif res.Name == "" {\n\t// true if `"name"` is either not present or explicitly null\n\tres.JSON.Name.IsNull()\n\n\t// true if the `"name"` key was not present in the response JSON at all\n\tres.JSON.Name.IsMissing()\n\n\t// When the API returns data that cannot be coerced to the expected type:\n\tif res.JSON.Name.IsInvalid() {\n\t\traw := res.JSON.Name.Raw()\n\n\t\tlegacyName := struct{\n\t\t\tFirst string `json:"first"`\n\t\t\tLast  string `json:"last"`\n\t\t}{}\n\t\tjson.Unmarshal([]byte(raw), &legacyName)\n\t\tname = legacyName.First + " " + legacyName.Last\n\t}\n}\n```\n\nThese `.JSON` structs also include an `Extras` map containing\nany properties in the json response that were not specified\nin the struct. This can be useful for API features not yet\npresent in the SDK.\n\n```go\nbody := res.JSON.ExtraFields["my_unexpected_field"].Raw()\n```\n\n### RequestOptions\n\nThis library uses the functional options pattern. Functions defined in the\n`SDK_PackageOptionName` package return a `RequestOption`, which is a closure that mutates a\n`RequestConfig`. These options can be supplied to the client or at individual\nrequests. For example:\n\n```go\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\t// Adds a header to every request made by the client\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "custom_header_info"),\n)\n\nclient.Ref.Hotspot.Info.Get(context.TODO(), ...,\n\t// Override the header\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "some_other_custom_header_info"),\n\t// Add an undocumented field to the request body, using sjson syntax\n\tSDK_PackageOptionName.WithJSONSet("some.json.path", map[string]string{"my": "object"}),\n)\n```\n\nSee the [full list of request options](https://pkg.go.dev/github.com/phoebe-bird/phoebe-go/SDK_PackageOptionName).\n\n### Pagination\n\nThis library provides some conveniences for working with paginated list endpoints.\n\nYou can use `.ListAutoPaging()` methods to iterate through items across all pages:\n\n\n\nOr you can use simple `.List()` methods to fetch a single page and receive a standard response object\nwith additional helper methods like `.GetNextPage()`, e.g.:\n\n\n\n### Errors\n\nWhen the API returns a non-success status code, we return an error with type\n`*SDK_PackageName.Error`. This contains the `StatusCode`, `*http.Request`, and\n`*http.Response` values of the request, as well as the JSON of the error body\n(much like other response objects in the SDK).\n\nTo handle errors, we recommend that you use the `errors.As` pattern:\n\n```go\n_, err := client.Ref.Hotspot.Info.Get(context.TODO(), "L99381")\nif err != nil {\n\tvar apierr *phoebe.Error\n\tif errors.As(err, &apierr) {\n\t\tprintln(string(apierr.DumpRequest(true)))  // Prints the serialized HTTP request\n\t\tprintln(string(apierr.DumpResponse(true))) // Prints the serialized HTTP response\n\t}\n\tpanic(err.Error()) // GET "/ref/hotspot/info/{locId}": 400 Bad Request { ... }\n}\n```\n\nWhen other errors occur, they are returned unwrapped; for example,\nif HTTP transport fails, you might receive `*url.Error` wrapping `*net.OpError`.\n\n### Timeouts\n\nRequests do not time out by default; use context to configure a timeout for a request lifecycle.\n\nNote that if a request is [retried](#retries), the context timeout does not start over.\nTo set a per-retry timeout, use `SDK_PackageOptionName.WithRequestTimeout()`.\n\n```go\n// This sets the timeout for the request, including all the retries.\nctx, cancel := context.WithTimeout(context.Background(), 5*time.Minute)\ndefer cancel()\nclient.Ref.Hotspot.Info.Get(\n\tctx,\n\t"L99381",\n\t// This sets the per-retry timeout\n\toption.WithRequestTimeout(20*time.Second),\n)\n```\n\n### File uploads\n\nRequest parameters that correspond to file uploads in multipart requests are typed as\n`param.Field[io.Reader]`. The contents of the `io.Reader` will by default be sent as a multipart form\npart with the file name of "anonymous_file" and content-type of "application/octet-stream".\n\nThe file name and content-type can be customized by implementing `Name() string` or `ContentType()\nstring` on the run-time type of `io.Reader`. Note that `os.File` implements `Name() string`, so a\nfile returned by `os.Open` will be sent with the file name on disk.\n\nWe also provide a helper `SDK_PackageName.FileParam(reader io.Reader, filename string, contentType string)`\nwhich can be used to wrap any `io.Reader` with the appropriate file name and content type.\n\n\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nWe retry by default all connection errors, 408 Request Timeout, 409 Conflict, 429 Rate Limit,\nand >=500 Internal errors.\n\nYou can use the `WithMaxRetries` option to configure or disable this:\n\n```go\n// Configure the default for all requests:\nclient := phoebe.NewClient(\n\toption.WithMaxRetries(0), // default is 2\n)\n\n// Override per-request:\nclient.Ref.Hotspot.Info.Get(\n\tcontext.TODO(),\n\t"L99381",\n\toption.WithMaxRetries(5),\n)\n```\n\n\n### Accessing raw response data (e.g. response headers)\n\nYou can access the raw HTTP response data by using the `option.WithResponseInto()` request option. This is useful when\nyou need to examine response headers, status codes, or other details.\n\n```go\n// Create a variable to store the HTTP response\nvar response *http.Response\ninfo, err := client.Ref.Hotspot.Info.Get(\n\tcontext.TODO(),\n\t"L99381",\n\toption.WithResponseInto(&response),\n)\nif err != nil {\n\t// handle error\n}\nfmt.Printf("%+v\\n", info)\n\nfmt.Printf("Status Code: %d\\n", response.StatusCode)\nfmt.Printf("Headers: %+#v\\n", response.Header)\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.Get`, `client.Post`, and other HTTP verbs.\n`RequestOptions` on the client, such as retries, will be respected when making these requests.\n\n```go\nvar (\n    // params can be an io.Reader, a []byte, an encoding/json serializable object,\n    // or a "…Params" struct defined in this library.\n    params map[string]interface{}\n\n    // result can be an []byte, *http.Response, a encoding/json deserializable object,\n    // or a model defined in this library.\n    result *http.Response\n)\nerr := client.Post(context.Background(), "/unspecified", params, &result)\nif err != nil {\n    …\n}\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use either the `SDK_PackageOptionName.WithQuerySet()`\nor the `SDK_PackageOptionName.WithJSONSet()` methods.\n\n```go\nparams := FooNewParams{\n    ID:   SDK_PackageName.F("id_xxxx"),\n    Data: SDK_PackageName.F(FooNewParamsData{\n        FirstName: SDK_PackageName.F("John"),\n    }),\n}\nclient.Foo.New(context.Background(), params, SDK_PackageOptionName.WithJSONSet("data.last_name", "Doe"))\n```\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may either access the raw JSON of the response as a string\nwith `result.JSON.RawJSON()`, or get the raw JSON of a particular field on the result with\n`result.JSON.Foo.Raw()`.\n\nAny fields that are not present on the response struct will be saved and can be accessed by `result.JSON.ExtraFields()` which returns the extra fields as a `map[string]Field`.\n\n### Middleware\n\nWe provide `SDK_PackageOptionName.WithMiddleware` which applies the given\nmiddleware to requests.\n\n```go\nfunc Logger(req *http.Request, next SDK_PackageOptionName.MiddlewareNext) (res *http.Response, err error) {\n\t// Before the request\n\tstart := time.Now()\n\tLogReq(req)\n\n\t// Forward the request to the next handler\n\tres, err = next(req)\n\n\t// Handle stuff after the request\n\tend := time.Now()\n\tLogRes(res, err, start - end)\n\n    return res, err\n}\n\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\tSDK_PackageOptionName.WithMiddleware(Logger),\n)\n```\n\nWhen multiple middlewares are provided as variadic arguments, the middlewares\nare applied left to right. If `SDK_PackageOptionName.WithMiddleware` is given\nmultiple times, for example first in the client then the method, the\nmiddleware in the client will run first and the middleware given in the method\nwill run next.\n\nYou may also replace the default `http.Client` with\n`SDK_PackageOptionName.WithHTTPClient(client)`. Only one http client is\naccepted (this overwrites any previous client) and receives requests after any\nmiddleware has been applied.\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/phoebe-bird/phoebe-go/issues) with questions, bugs, or suggestions.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'java',
    content:
      '# Phoebe Java API Library\n\n<!-- x-release-please-start-version -->\n[![Maven Central](https://img.shields.io/maven-central/v/com.phoebe.api/phoebe-java)](https://central.sonatype.com/artifact/com.phoebe.api/phoebe-java/0.0.1)\n[![javadoc](https://javadoc.io/badge2/com.phoebe.api/phoebe-java/0.0.1/javadoc.svg)](https://javadoc.io/doc/com.phoebe.api/phoebe-java/0.0.1)\n<!-- x-release-please-end -->\n\nThe Phoebe Java SDK provides convenient access to the [Phoebe REST API](https://science.ebird.org/en/use-ebird-data/download-ebird-data-products)   from applications written in Java.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Phoebe MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=phoebe-ebird-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsInBob2ViZS1lYmlyZC1tY3AiXSwiZW52Ijp7IkVCSVJEX0FQSV9LRVkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22phoebe-ebird-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22phoebe-ebird-mcp%22%5D%2C%22env%22%3A%7B%22EBIRD_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n<!-- x-release-please-start-version -->\n\nThe REST API documentation can be found on [science.ebird.org](https://science.ebird.org/en/use-ebird-data/download-ebird-data-products). Javadocs are available on [javadoc.io](https://javadoc.io/doc/com.phoebe.api/phoebe-java/0.0.1).\n\n<!-- x-release-please-end -->\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n### Gradle\n\n~~~kotlin\nimplementation("com.phoebe.api:phoebe-java:0.0.1")\n~~~\n\n### Maven\n\n~~~xml\n<dependency>\n  <groupId>com.phoebe.api</groupId>\n  <artifactId>phoebe-java</artifactId>\n  <version>0.0.1</version>\n</dependency>\n~~~\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Java 8 or later.\n\n## Usage\n\n```java\nimport com.phoebe.api.client.PhoebeClient;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient;\nimport com.phoebe.api.models.ref.hotspot.info.InfoRetrieveParams;\nimport com.phoebe.api.models.ref.hotspot.info.InfoRetrieveResponse;\n\n// Configures using the `phoebe.ebirdApiKey` and `phoebe.baseUrl` system properties\n// Or configures using the `EBIRD_API_KEY` and `PHOEBE_BASE_URL` environment variables\nPhoebeClient client = PhoebeOkHttpClient.fromEnv();\n\nInfoRetrieveResponse info = client.ref().hotspot().info().retrieve("L99381");\n```\n\n## Client configuration\n\nConfigure the client using system properties or environment variables:\n\n```java\nimport com.phoebe.api.client.PhoebeClient;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient;\n\n// Configures using the `phoebe.ebirdApiKey` and `phoebe.baseUrl` system properties\n// Or configures using the `EBIRD_API_KEY` and `PHOEBE_BASE_URL` environment variables\nPhoebeClient client = PhoebeOkHttpClient.fromEnv();\n```\n\nOr manually:\n\n```java\nimport com.phoebe.api.client.PhoebeClient;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient;\n\nPhoebeClient client = PhoebeOkHttpClient.builder()\n    .apiKey("My API Key")\n    .build();\n```\n\nOr using a combination of the two approaches:\n\n```java\nimport com.phoebe.api.client.PhoebeClient;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient;\n\nPhoebeClient client = PhoebeOkHttpClient.builder()\n    // Configures using the `phoebe.ebirdApiKey` and `phoebe.baseUrl` system properties\n    // Or configures using the `EBIRD_API_KEY` and `PHOEBE_BASE_URL` environment variables\n    .fromEnv()\n    .apiKey("My API Key")\n    .build();\n```\n\nSee this table for the available options:\n\n| Setter    | System property      | Environment variable | Required | Default value                |\n| --------- | -------------------- | -------------------- | -------- | ---------------------------- |\n| `apiKey`  | `phoebe.ebirdApiKey` | `EBIRD_API_KEY`      | true     | -                            |\n| `baseUrl` | `phoebe.baseUrl`     | `PHOEBE_BASE_URL`    | true     | `"https://api.ebird.org/v2"` |\n\nSystem properties take precedence over environment variables.\n\n> [!TIP]\n> Don\'t create more than one client in the same application. Each client has a connection pool and\n> thread pools, which are more efficient to share between requests.\n\n### Modifying configuration\n\nTo temporarily use a modified client configuration, while reusing the same connection and thread       pools, call `withOptions()` on any client or service:\n\n```java\nimport com.phoebe.api.client.PhoebeClient;\n\nPhoebeClient clientWithOptions = client.withOptions(optionsBuilder -> {\n    optionsBuilder.baseUrl("https://example.com");\n    optionsBuilder.maxRetries(42);\n});\n```\n\nThe `withOptions()` method does not affect the original client or service.\n\n## Requests and responses\n\nTo send a request to the Phoebe API, build an instance of some `Params` class and pass it to the     corresponding client method. When the response is received, it will be deserialized into an instance of     a Java class.\n\nFor example, `client.ref().hotspot().info().retrieve(...)` should be called with an instance of `InfoRetrieveParams`, and it     will return an instance of `InfoRetrieveResponse`.\n\n## Immutability\n\nEach class in the SDK has an associated   [builder](https://blogs.oracle.com/javamagazine/post/exploring-joshua-blochs-builder-design-pattern-in-java)   or factory method for constructing it.\n\nEach class is [immutable](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html)   once constructed. If the class has an associated builder, then it has a `toBuilder()` method, which can   be used to convert it back to a builder for making a modified copy.\n\nBecause each class is immutable, builder modification will _never_ affect already built class instances.\n\n## Asynchronous execution\n\nThe default client is synchronous. To switch to asynchronous execution, call the `async()` method:\n\n```java\nimport com.phoebe.api.client.PhoebeClient;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient;\nimport com.phoebe.api.models.ref.hotspot.info.InfoRetrieveParams;\nimport com.phoebe.api.models.ref.hotspot.info.InfoRetrieveResponse;\nimport java.util.concurrent.CompletableFuture;\n\n// Configures using the `phoebe.ebirdApiKey` and `phoebe.baseUrl` system properties\n// Or configures using the `EBIRD_API_KEY` and `PHOEBE_BASE_URL` environment variables\nPhoebeClient client = PhoebeOkHttpClient.fromEnv();\n\nCompletableFuture<InfoRetrieveResponse> info = client.async().ref().hotspot().info().retrieve("L99381");\n```\n\nOr create an asynchronous client from the beginning:\n\n```java\nimport com.phoebe.api.client.PhoebeClientAsync;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClientAsync;\nimport com.phoebe.api.models.ref.hotspot.info.InfoRetrieveParams;\nimport com.phoebe.api.models.ref.hotspot.info.InfoRetrieveResponse;\nimport java.util.concurrent.CompletableFuture;\n\n// Configures using the `phoebe.ebirdApiKey` and `phoebe.baseUrl` system properties\n// Or configures using the `EBIRD_API_KEY` and `PHOEBE_BASE_URL` environment variables\nPhoebeClientAsync client = PhoebeOkHttpClientAsync.fromEnv();\n\nCompletableFuture<InfoRetrieveResponse> info = client.ref().hotspot().info().retrieve("L99381");\n```\n\nThe asynchronous client supports the same options as the synchronous one, except most methods return `CompletableFuture`s.\n\n\n\n\n\n\n\n## Raw responses\n\nThe SDK defines methods that deserialize responses into instances of Java classes.       However, these methods don\'t provide access to the response headers, status code, or the raw response       body.\n\nTo access this data, prefix any HTTP method call on a client or service with `withRawResponse()`:\n\n```java\nimport com.phoebe.api.core.http.Headers;\nimport com.phoebe.api.core.http.HttpResponseFor;\nimport com.phoebe.api.models.ref.hotspot.info.InfoRetrieveParams;\nimport com.phoebe.api.models.ref.hotspot.info.InfoRetrieveResponse;\n\nHttpResponseFor<InfoRetrieveResponse> info = client.ref().hotspot().info().withRawResponse().retrieve("L99381");\n\nint statusCode = info.statusCode();\nHeaders headers = info.headers();\n```\n\nYou can still deserialize the response into an instance of a Java class if needed:\n\n```java\nimport com.phoebe.api.models.ref.hotspot.info.InfoRetrieveResponse;\n\nInfoRetrieveResponse parsedInfo = info.parse();\n```\n\n## Error handling\n\nThe SDK throws custom unchecked exception types:\n\n- [`PhoebeServiceException`](phoebe-java-core/src/main/kotlin/com/phoebe/api/errors/PhoebeServiceException.kt): Base class for HTTP errors. See this table for which exception       subclass is thrown for each HTTP status code:\n\n  | Status | Exception                                          |\n  | ------ | -------------------------------------------------- |\n  | 400    | [`BadRequestException`](phoebe-java-core/src/main/kotlin/com/phoebe/api/errors/BadRequestException.kt)           |\n  | 401    | [`UnauthorizedException`](phoebe-java-core/src/main/kotlin/com/phoebe/api/errors/UnauthorizedException.kt)         |\n  | 403    | [`PermissionDeniedException`](phoebe-java-core/src/main/kotlin/com/phoebe/api/errors/PermissionDeniedException.kt)     |\n  | 404    | [`NotFoundException`](phoebe-java-core/src/main/kotlin/com/phoebe/api/errors/NotFoundException.kt)             |\n  | 422    | [`UnprocessableEntityException`](phoebe-java-core/src/main/kotlin/com/phoebe/api/errors/UnprocessableEntityException.kt)  |\n  | 429    | [`RateLimitException`](phoebe-java-core/src/main/kotlin/com/phoebe/api/errors/RateLimitException.kt)            |\n  | 5xx    | [`InternalServerException`](phoebe-java-core/src/main/kotlin/com/phoebe/api/errors/InternalServerException.kt)       |\n  | others | [`UnexpectedStatusCodeException`](phoebe-java-core/src/main/kotlin/com/phoebe/api/errors/UnexpectedStatusCodeException.kt) |\n\n- [`PhoebeIoException`](phoebe-java-core/src/main/kotlin/com/phoebe/api/errors/PhoebeIoException.kt): I/O networking errors.\n\n- [`PhoebeRetryableException`](phoebe-java-core/src/main/kotlin/com/phoebe/api/errors/PhoebeRetryableException.kt): Generic error indicating a failure that could be retried by the client.\n\n- [`PhoebeInvalidDataException`](phoebe-java-core/src/main/kotlin/com/phoebe/api/errors/PhoebeInvalidDataException.kt): Failure to interpret successfully parsed data. For example,       when accessing a property that\'s supposed to be required, but the API unexpectedly omitted it from the       response.\n\n- [`PhoebeException`](phoebe-java-core/src/main/kotlin/com/phoebe/api/errors/PhoebeException.kt): Base class for all exceptions. Most errors will result in one of the       previously mentioned ones, but completely generic errors may be thrown using the base class.\n\n\n\n## Logging\n\nThe SDK uses the standard   [OkHttp logging interceptor](https://github.com/square/okhttp/tree/master/okhttp-logging-interceptor).\n\nEnable logging by setting the `PHOEBE_LOG` environment variable to   `info`:\n\n```sh\nexport PHOEBE_LOG=info\n```\n\nOr to `debug` for more verbose logging:\n\n```sh\nexport PHOEBE_LOG=debug\n```\n\n## ProGuard and R8\n\nAlthough the SDK uses reflection, it is still usable with     [ProGuard](https://github.com/Guardsquare/proguard) and     [R8](https://developer.android.com/topic/performance/app-optimization/enable-app-optimization) because     `phoebe-java-core` is published with a     [configuration file](phoebe-java-core/src/main/resources/META-INF/proguard/phoebe-java-core.pro) containing     [keep rules](https://www.guardsquare.com/manual/configuration/usage).\n\nProGuard and R8 should automatically detect and use the published rules, but you can also manually copy     the keep rules if necessary.\n\n\n\n\n\n## Jackson\n\nThe SDK depends on [Jackson](https://github.com/FasterXML/jackson) for JSON     serialization/deserialization. It is compatible with version 2.13.4 or higher,     but depends on version 2.18.2 by default.\n\nThe SDK throws an exception if it detects an incompatible Jackson version at runtime (e.g. if the     default version was overridden in your Maven or Gradle config).\n\nIf the SDK threw an exception, but you\'re _certain_ the version is compatible, then disable the version     check using the `checkJacksonVersionCompatibility` on [`PhoebeOkHttpClient`](phoebe-java-client-okhttp/src/main/kotlin/com/phoebe/api/client/okhttp/PhoebeOkHttpClient.kt) or     [`PhoebeOkHttpClientAsync`](phoebe-java-client-okhttp/src/main/kotlin/com/phoebe/api/client/okhttp/PhoebeOkHttpClientAsync.kt).\n\n> [!CAUTION]\n> We make no guarantee that the SDK works correctly when the Jackson version check is disabled.\n\nAlso note that there are bugs in older Jackson versions that can affect the SDK. We don\'t work around all     Jackson bugs ([example](https://github.com/FasterXML/jackson-databind/issues/3240)) and expect users to     upgrade Jackson for those instead.\n\n## Network options\n\n### Retries\n\nThe SDK automatically retries 2 times by default, with a short exponential backoff between requests.\n\nOnly the following error types are retried:\n- Connection errors (for example, due to a network connectivity problem)\n- 408 Request Timeout\n- 409 Conflict\n- 429 Rate Limit\n- 5xx Internal\n\nThe API may also explicitly instruct the SDK to retry or not retry a request.\n\nTo set a custom number of retries, configure the client using the `maxRetries` method:\n\n```java\nimport com.phoebe.api.client.PhoebeClient;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient;\n\nPhoebeClient client = PhoebeOkHttpClient.builder()\n    .fromEnv()\n    .maxRetries(4)\n    .build();\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default.\n\nTo set a custom timeout, configure the method call using the `timeout` method:\n\n```java\nimport com.phoebe.api.models.ref.hotspot.info.InfoRetrieveResponse;\n\nInfoRetrieveResponse info = client.ref().hotspot().info().retrieve(RequestOptions.builder().timeout(Duration.ofSeconds(30)).build());\n```\n\nOr configure the default for all method calls at the client level:\n\n```java\nimport com.phoebe.api.client.PhoebeClient;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient;\nimport java.time.Duration;\n\nPhoebeClient client = PhoebeOkHttpClient.builder()\n    .fromEnv()\n    .timeout(Duration.ofSeconds(30))\n    .build();\n```\n\n### Proxies\n\nTo route requests through a proxy, configure the client using the `proxy` method:\n\n```java\nimport com.phoebe.api.client.PhoebeClient;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient;\nimport java.net.InetSocketAddress;\nimport java.net.Proxy;\n\nPhoebeClient client = PhoebeOkHttpClient.builder()\n    .fromEnv()\n    .proxy(new Proxy(\n      Proxy.Type.HTTP, new InetSocketAddress(\n        "https://example.com", 8080\n      )\n    ))\n    .build();\n```\n\n### Connection pooling\n\nTo customize the underlying OkHttp connection pool, configure the client using the   `maxIdleConnections` and `keepAliveDuration` methods:\n\n```java\nimport com.phoebe.api.client.PhoebeClient;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient;\nimport java.time.Duration;\n\nPhoebeClient client = PhoebeOkHttpClient.builder()\n    .fromEnv()\n    // If `maxIdleConnections` is set, then `keepAliveDuration` must be set, and vice versa.\n    .maxIdleConnections(10)\n    .keepAliveDuration(Duration.ofMinutes(2))\n    .build();\n```\n\nIf both options are unset, OkHttp\'s default connection pool settings are used.\n\n### HTTPS\n\n> [!NOTE]\n> Most applications should not call these methods, and instead use the system defaults. The defaults include\n> special optimizations that can be lost if the implementations are modified.\n\nTo configure how HTTPS connections are secured, configure the client using the `sslSocketFactory`,   `trustManager`, and `hostnameVerifier` methods:\n\n```java\nimport com.phoebe.api.client.PhoebeClient;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient;\n\nPhoebeClient client = PhoebeOkHttpClient.builder()\n    .fromEnv()\n    // If `sslSocketFactory` is set, then `trustManager` must be set, and vice versa.\n    .sslSocketFactory(yourSSLSocketFactory)\n    .trustManager(yourTrustManager)\n    .hostnameVerifier(yourHostnameVerifier)\n    .build();\n```\n\n\n\n### Custom HTTP client\n\nThe SDK consists of three artifacts:\n- `phoebe-java-core`\n  - Contains core SDK logic\n  - Does not depend on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`PhoebeClient`](phoebe-java-core/src/main/kotlin/com/phoebe/api/client/PhoebeClient.kt), [`PhoebeClientAsync`](phoebe-java-core/src/main/kotlin/com/phoebe/api/client/PhoebeClientAsync.kt),             [`PhoebeClientImpl`](phoebe-java-core/src/main/kotlin/com/phoebe/api/client/PhoebeClientImpl.kt), and [`PhoebeClientAsyncImpl`](phoebe-java-core/src/main/kotlin/com/phoebe/api/client/PhoebeClientAsyncImpl.kt), all of which can             work with any HTTP client\n- `phoebe-java-client-okhttp`\n  - Depends on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`PhoebeOkHttpClient`](phoebe-java-client-okhttp/src/main/kotlin/com/phoebe/api/client/okhttp/PhoebeOkHttpClient.kt) and [`PhoebeOkHttpClientAsync`](phoebe-java-client-okhttp/src/main/kotlin/com/phoebe/api/client/okhttp/PhoebeOkHttpClientAsync.kt), which             provide a way to construct [`PhoebeClientImpl`](phoebe-java-core/src/main/kotlin/com/phoebe/api/client/PhoebeClientImpl.kt) and             [`PhoebeClientAsyncImpl`](phoebe-java-core/src/main/kotlin/com/phoebe/api/client/PhoebeClientAsyncImpl.kt), respectively, using OkHttp\n- `phoebe-java`\n  - Depends on and exposes the APIs of both `phoebe-java-core` and `phoebe-java-client-okhttp`\n  - Does not have its own logic\n\nThis structure allows replacing the SDK\'s default HTTP client without pulling in unnecessary dependencies.\n\n#### Customized [`OkHttpClient`](https://square.github.io/okhttp/3.x/okhttp/okhttp3/OkHttpClient.html)\n\n> [!TIP]\n> Try the available [network options](#network-options) before replacing the default client.\n\nTo use a customized `OkHttpClient`:\n\n1. Replace your [`phoebe-java` dependency](#installation) with `phoebe-java-core`\n2. Copy `phoebe-java-client-okhttp`\'s [`OkHttpClient`](phoebe-java-client-okhttp/src/main/kotlin/com/phoebe/api/client/okhttp/OkHttpClient.kt) class into your code and        customize it\n3. Construct [`PhoebeClientImpl`](phoebe-java-core/src/main/kotlin/com/phoebe/api/client/PhoebeClientImpl.kt) or [`PhoebeClientAsyncImpl`](phoebe-java-core/src/main/kotlin/com/phoebe/api/client/PhoebeClientAsyncImpl.kt), similarly to        [`PhoebeOkHttpClient`](phoebe-java-client-okhttp/src/main/kotlin/com/phoebe/api/client/okhttp/PhoebeOkHttpClient.kt) or [`PhoebeOkHttpClientAsync`](phoebe-java-client-okhttp/src/main/kotlin/com/phoebe/api/client/okhttp/PhoebeOkHttpClientAsync.kt), using your        customized client\n\n### Completely custom HTTP client\n\nTo use a completely custom HTTP client:\n\n1. Replace your [`phoebe-java` dependency](#installation) with `phoebe-java-core`\n2. Write a class that implements the [`HttpClient`](phoebe-java-core/src/main/kotlin/com/phoebe/api/core/http/HttpClient.kt) interface\n3. Construct [`PhoebeClientImpl`](phoebe-java-core/src/main/kotlin/com/phoebe/api/client/PhoebeClientImpl.kt) or [`PhoebeClientAsyncImpl`](phoebe-java-core/src/main/kotlin/com/phoebe/api/client/PhoebeClientAsyncImpl.kt), similarly to        [`PhoebeOkHttpClient`](phoebe-java-client-okhttp/src/main/kotlin/com/phoebe/api/client/okhttp/PhoebeOkHttpClient.kt) or [`PhoebeOkHttpClientAsync`](phoebe-java-client-okhttp/src/main/kotlin/com/phoebe/api/client/okhttp/PhoebeOkHttpClientAsync.kt), using your new        client class\n\n## Undocumented API functionality\n\nThe SDK is typed for convenient usage of the documented API. However, it also supports working with undocumented or not yet supported parts of the API.\n\n### Parameters\n\nTo set undocumented parameters, call the `putAdditionalHeader`, `putAdditionalQueryParam`, or       `putAdditionalBodyProperty` methods on any `Params` class:\n\n```java\nimport com.phoebe.api.core.JsonValue;\nimport com.phoebe.api.models.ref.hotspot.info.InfoRetrieveParams;\n\nInfoRetrieveParams params = InfoRetrieveParams.builder()\n    .putAdditionalHeader("Secret-Header", "42")\n    .putAdditionalQueryParam("secret_query_param", "42")\n    .putAdditionalBodyProperty("secretProperty", JsonValue.from("42"))\n    .build();\n```\n\nThese can be accessed on the built object later using the `_additionalHeaders()`,       `_additionalQueryParams()`, and `_additionalBodyProperties()` methods.\n\nTo set a documented parameter or property to an undocumented or not yet supported _value_, pass a       [`JsonValue`](phoebe-java-core/src/main/kotlin/com/phoebe/api/core/Values.kt) object to its setter:\n\n```java\nimport com.phoebe.api.models.ref.hotspot.info.InfoRetrieveParams;\n\nInfoRetrieveParams params = InfoRetrieveParams.builder().build();\n```\n\nThe most straightforward way to create a [`JsonValue`](phoebe-java-core/src/main/kotlin/com/phoebe/api/core/Values.kt) is using its       `from(...)` method:\n\n```java\nimport com.phoebe.api.core.JsonValue;\nimport java.util.List;\nimport java.util.Map;\n\n// Create primitive JSON values\nJsonValue nullValue = JsonValue.from(null);\nJsonValue booleanValue = JsonValue.from(true);\nJsonValue numberValue = JsonValue.from(42);\nJsonValue stringValue = JsonValue.from("Hello World!");\n\n// Create a JSON array value equivalent to `["Hello", "World"]`\nJsonValue arrayValue = JsonValue.from(List.of(\n  "Hello", "World"\n));\n\n// Create a JSON object value equivalent to `{ "a": 1, "b": 2 }`\nJsonValue objectValue = JsonValue.from(Map.of(\n  "a", 1,\n  "b", 2\n));\n\n// Create an arbitrarily nested JSON equivalent to:\n// {\n//   "a": [1, 2],\n//   "b": [3, 4]\n// }\nJsonValue complexValue = JsonValue.from(Map.of(\n  "a", List.of(\n    1, 2\n  ),\n  "b", List.of(\n    3, 4\n  )\n));\n```\n\nNormally a `Builder` class\'s `build` method will throw         [`IllegalStateException`](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalStateException.html)         if any required parameter or property is unset.\n\nTo forcibly omit a required parameter or property, pass [`JsonMissing`](phoebe-java-core/src/main/kotlin/com/phoebe/api/core/Values.kt):\n\n```java\nimport com.phoebe.api.core.JsonMissing;\nimport com.phoebe.api.models.ref.hotspot.info.InfoRetrieveParams;\n\nInfoRetrieveParams params = InfoRetrieveParams.builder()\n    .locId(JsonMissing.of())\n    .build();\n```\n\n### Response properties\n\nTo access undocumented response properties, call the `_additionalProperties()` method:\n\n```java\nimport com.phoebe.api.core.JsonValue;\nimport java.util.Map;\n\nMap<String, JsonValue> additionalProperties = client.ref().hotspot().info().retrieve(params)._additionalProperties();\nJsonValue secretPropertyValue = additionalProperties.get("secretProperty");\n\nString result = secretPropertyValue.accept(new JsonValue.Visitor<>() {\n    @Override\n    public String visitNull() {\n        return "It\'s null!";\n    }\n\n    @Override\n    public String visitBoolean(boolean value) {\n        return "It\'s a boolean!";\n    }\n\n    @Override\n    public String visitNumber(Number value) {\n        return "It\'s a number!";\n    }\n\n    // Other methods include `visitMissing`, `visitString`, `visitArray`, and `visitObject`\n    // The default implementation of each unimplemented method delegates to `visitDefault`, which throws by default, but can also be overridden\n});\n```\n\nTo access a property\'s raw JSON value, which may be undocumented, call its `_` prefixed method:\n\n```java\nimport com.phoebe.api.core.JsonField;\nimport java.util.Optional;\n\nJsonField<Object> field = client.ref().hotspot().info().retrieve(params)._field();\n\nif (field.isMissing()) {\n  // The property is absent from the JSON response\n} else if (field.isNull()) {\n  // The property was set to literal null\n} else {\n  // Check if value was provided as a string\n  // Other methods include `asNumber()`, `asBoolean()`, etc.\n  Optional<String> jsonString = field.asString();\n\n  // Try to deserialize into a custom type\n  MyClass myObject = field.asUnknown().orElseThrow().convert(MyClass.class);\n}\n```\n\n### Response validation\n\nIn rare cases, the API may return a response that doesn\'t match the expected type. For example, the SDK     may expect a property to contain a `String`, but the API could return something else.\n\nBy default, the SDK will not throw an exception in this case. It will throw     [`PhoebeInvalidDataException`](phoebe-java-core/src/main/kotlin/com/phoebe/api/errors/PhoebeInvalidDataException.kt) only if you directly access the property.\n\nIf you would prefer to check that the response is completely well-typed upfront, then either call     `validate()`:\n\n```java\nimport com.phoebe.api.models.ref.hotspot.info.InfoRetrieveResponse;\n\nInfoRetrieveResponse info = client.ref().hotspot().info().retrieve(params).validate();\n```\n\nOr configure the method call to validate the response using the `responseValidation` method:\n\n```java\nimport com.phoebe.api.models.ref.hotspot.info.InfoRetrieveResponse;\n\nInfoRetrieveResponse info = client.ref().hotspot().info().retrieve(RequestOptions.builder().responseValidation(true).build());\n```\n\nOr configure the default for all method calls at the client level:\n\n```java\nimport com.phoebe.api.client.PhoebeClient;\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient;\n\nPhoebeClient client = PhoebeOkHttpClient.builder()\n    .fromEnv()\n    .responseValidation(true)\n    .build();\n```\n\n## FAQ\n\n### Why don\'t you use plain `enum` classes?\n\nJava `enum` classes are not trivially   [forwards compatible](https://www.stainless.com/blog/making-java-enums-forwards-compatible). Using them in   the SDK could cause runtime exceptions if the API is updated to respond with a new enum value.\n\n### Why do you represent fields using `JsonField<T>` instead of just plain `T`?\n\nUsing `JsonField<T>` enables a few features:\n\n- Allowing usage of [undocumented API functionality](#undocumented-api-functionality)\n- Lazily [validating the API response against the expected shape](#response-validation)\n- Representing absent vs explicitly null values\n\n### Why don\'t you use [`data` classes](https://kotlinlang.org/docs/data-classes.html)?\n\nIt is not [backwards compatible to add new fields to a data class](https://kotlinlang.org/docs/api-guidelines-backward-compatibility.html#avoid-using-data-classes-in-your-api)   and we don\'t want to introduce a breaking change every time we add a field to a class.\n\n### Why don\'t you use checked exceptions?\n\nChecked exceptions are widely considered a mistake in the Java programming language. In fact, they were   omitted from Kotlin for this reason.\n\nChecked exceptions:\n\n- Are verbose to handle\n- Encourage error handling at the wrong level of abstraction, where nothing can be done about the error\n- Are tedious to propagate due to the [function coloring problem](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function)\n- Don\'t play well with lambdas (also due to the function coloring problem)\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/phoebe-bird/phoebe-java/issues) with questions, bugs, or suggestions.\n',
  },
  {
    language: 'kotlin',
    content:
      '# Phoebe Kotlin API Library\n\n<!-- x-release-please-start-version -->\n[![Maven Central](https://img.shields.io/maven-central/v/com.phoebe.api/phoebe-kotlin)](https://central.sonatype.com/artifact/com.phoebe.api/phoebe-kotlin/0.0.1)\n[![javadoc](https://javadoc.io/badge2/com.phoebe.api/phoebe-kotlin/0.0.1/javadoc.svg)](https://javadoc.io/doc/com.phoebe.api/phoebe-kotlin/0.0.1)\n<!-- x-release-please-end -->\n\nThe Phoebe Kotlin SDK provides convenient access to the [Phoebe REST API](https://science.ebird.org/en/use-ebird-data/download-ebird-data-products)   from applications written in Kotlin.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Phoebe MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=phoebe-ebird-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsInBob2ViZS1lYmlyZC1tY3AiXSwiZW52Ijp7IkVCSVJEX0FQSV9LRVkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22phoebe-ebird-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22phoebe-ebird-mcp%22%5D%2C%22env%22%3A%7B%22EBIRD_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n<!-- x-release-please-start-version -->\n\nThe REST API documentation can be found on [science.ebird.org](https://science.ebird.org/en/use-ebird-data/download-ebird-data-products). KDocs are available on [javadoc.io](https://javadoc.io/doc/com.phoebe.api/phoebe-kotlin/0.0.1).\n\n<!-- x-release-please-end -->\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n### Gradle\n\n~~~kotlin\nimplementation("com.phoebe.api:phoebe-kotlin:0.0.1")\n~~~\n\n### Maven\n\n~~~xml\n<dependency>\n  <groupId>com.phoebe.api</groupId>\n  <artifactId>phoebe-kotlin</artifactId>\n  <version>0.0.1</version>\n</dependency>\n~~~\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Java 8 or later.\n\n## Usage\n\n```kotlin\nimport com.phoebe.api.client.PhoebeClient\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient\nimport com.phoebe.api.models.ref.hotspot.info.InfoRetrieveParams\nimport com.phoebe.api.models.ref.hotspot.info.InfoRetrieveResponse\n\n// Configures using the `phoebe.ebirdApiKey` and `phoebe.baseUrl` system properties\n// Or configures using the `EBIRD_API_KEY` and `PHOEBE_BASE_URL` environment variables\nval client: PhoebeClient = PhoebeOkHttpClient.fromEnv()\n\nval info: InfoRetrieveResponse = client.ref().hotspot().info().retrieve("L99381")\n```\n\n## Client configuration\n\nConfigure the client using system properties or environment variables:\n\n```kotlin\nimport com.phoebe.api.client.PhoebeClient\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient\n\n// Configures using the `phoebe.ebirdApiKey` and `phoebe.baseUrl` system properties\n// Or configures using the `EBIRD_API_KEY` and `PHOEBE_BASE_URL` environment variables\nval client: PhoebeClient = PhoebeOkHttpClient.fromEnv()\n```\n\nOr manually:\n\n```kotlin\nimport com.phoebe.api.client.PhoebeClient\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient\n\nval client: PhoebeClient = PhoebeOkHttpClient.builder()\n    .apiKey("My API Key")\n    .build()\n```\n\nOr using a combination of the two approaches:\n\n```kotlin\nimport com.phoebe.api.client.PhoebeClient\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient\n\nval client: PhoebeClient = PhoebeOkHttpClient.builder()\n    // Configures using the `phoebe.ebirdApiKey` and `phoebe.baseUrl` system properties\n    // Or configures using the `EBIRD_API_KEY` and `PHOEBE_BASE_URL` environment variables\n    .fromEnv()\n    .apiKey("My API Key")\n    .build()\n```\n\nSee this table for the available options:\n\n| Setter    | System property      | Environment variable | Required | Default value                |\n| --------- | -------------------- | -------------------- | -------- | ---------------------------- |\n| `apiKey`  | `phoebe.ebirdApiKey` | `EBIRD_API_KEY`      | true     | -                            |\n| `baseUrl` | `phoebe.baseUrl`     | `PHOEBE_BASE_URL`    | true     | `"https://api.ebird.org/v2"` |\n\nSystem properties take precedence over environment variables.\n\n> [!TIP]\n> Don\'t create more than one client in the same application. Each client has a connection pool and\n> thread pools, which are more efficient to share between requests.\n\n### Modifying configuration\n\nTo temporarily use a modified client configuration, while reusing the same connection and thread       pools, call `withOptions()` on any client or service:\n\n```kotlin\nimport com.phoebe.api.client.PhoebeClient\n\nval clientWithOptions: PhoebeClient = client.withOptions {\n    it.baseUrl("https://example.com")\n    it.maxRetries(42)\n}\n```\n\nThe `withOptions()` method does not affect the original client or service.\n\n## Requests and responses\n\nTo send a request to the Phoebe API, build an instance of some `Params` class and pass it to the     corresponding client method. When the response is received, it will be deserialized into an instance of     a Kotlin class.\n\nFor example, `client.ref().hotspot().info().retrieve(...)` should be called with an instance of `InfoRetrieveParams`, and it     will return an instance of `InfoRetrieveResponse`.\n\n## Immutability\n\nEach class in the SDK has an associated   [builder](https://blogs.oracle.com/javamagazine/post/exploring-joshua-blochs-builder-design-pattern-in-java)   or factory method for constructing it.\n\nEach class is [immutable](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html)   once constructed. If the class has an associated builder, then it has a `toBuilder()` method, which can   be used to convert it back to a builder for making a modified copy.\n\nBecause each class is immutable, builder modification will _never_ affect already built class instances.\n\n## Asynchronous execution\n\nThe default client is synchronous. To switch to asynchronous execution, call the `async()` method:\n\n```kotlin\nimport com.phoebe.api.client.PhoebeClient\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient\nimport com.phoebe.api.models.ref.hotspot.info.InfoRetrieveParams\nimport com.phoebe.api.models.ref.hotspot.info.InfoRetrieveResponse\n\n// Configures using the `phoebe.ebirdApiKey` and `phoebe.baseUrl` system properties\n// Or configures using the `EBIRD_API_KEY` and `PHOEBE_BASE_URL` environment variables\nval client: PhoebeClient = PhoebeOkHttpClient.fromEnv()\n\nval info: InfoRetrieveResponse = client.async().ref().hotspot().info().retrieve("L99381")\n```\n\nOr create an asynchronous client from the beginning:\n\n```kotlin\nimport com.phoebe.api.client.PhoebeClientAsync\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClientAsync\nimport com.phoebe.api.models.ref.hotspot.info.InfoRetrieveParams\nimport com.phoebe.api.models.ref.hotspot.info.InfoRetrieveResponse\n\n// Configures using the `phoebe.ebirdApiKey` and `phoebe.baseUrl` system properties\n// Or configures using the `EBIRD_API_KEY` and `PHOEBE_BASE_URL` environment variables\nval client: PhoebeClientAsync = PhoebeOkHttpClientAsync.fromEnv()\n\nval info: InfoRetrieveResponse = client.ref().hotspot().info().retrieve("L99381")\n```\n\nThe asynchronous client supports the same options as the synchronous one, except most methods are [suspending](https://kotlinlang.org/docs/coroutines-guide.html).\n\n\n\n\n\n\n\n## Raw responses\n\nThe SDK defines methods that deserialize responses into instances of Kotlin classes.       However, these methods don\'t provide access to the response headers, status code, or the raw response       body.\n\nTo access this data, prefix any HTTP method call on a client or service with `withRawResponse()`:\n\n```kotlin\nimport com.phoebe.api.core.http.Headers\nimport com.phoebe.api.core.http.HttpResponseFor\nimport com.phoebe.api.models.ref.hotspot.info.InfoRetrieveParams\nimport com.phoebe.api.models.ref.hotspot.info.InfoRetrieveResponse\n\nval info: HttpResponseFor<InfoRetrieveResponse> = client.ref().hotspot().info().withRawResponse().retrieve("L99381")\n\nval statusCode: Int = info.statusCode()\nval headers: Headers = info.headers()\n```\n\nYou can still deserialize the response into an instance of a Kotlin class if needed:\n\n```kotlin\nimport com.phoebe.api.models.ref.hotspot.info.InfoRetrieveResponse\n\nval parsedInfo: InfoRetrieveResponse = info.parse()\n```\n\n## Error handling\n\nThe SDK throws custom unchecked exception types:\n\n- [`PhoebeServiceException`](phoebe-kotlin-core/src/main/kotlin/com/phoebe/api/errors/PhoebeServiceException.kt): Base class for HTTP errors. See this table for which exception       subclass is thrown for each HTTP status code:\n\n  | Status | Exception                                          |\n  | ------ | -------------------------------------------------- |\n  | 400    | [`BadRequestException`](phoebe-kotlin-core/src/main/kotlin/com/phoebe/api/errors/BadRequestException.kt)           |\n  | 401    | [`UnauthorizedException`](phoebe-kotlin-core/src/main/kotlin/com/phoebe/api/errors/UnauthorizedException.kt)         |\n  | 403    | [`PermissionDeniedException`](phoebe-kotlin-core/src/main/kotlin/com/phoebe/api/errors/PermissionDeniedException.kt)     |\n  | 404    | [`NotFoundException`](phoebe-kotlin-core/src/main/kotlin/com/phoebe/api/errors/NotFoundException.kt)             |\n  | 422    | [`UnprocessableEntityException`](phoebe-kotlin-core/src/main/kotlin/com/phoebe/api/errors/UnprocessableEntityException.kt)  |\n  | 429    | [`RateLimitException`](phoebe-kotlin-core/src/main/kotlin/com/phoebe/api/errors/RateLimitException.kt)            |\n  | 5xx    | [`InternalServerException`](phoebe-kotlin-core/src/main/kotlin/com/phoebe/api/errors/InternalServerException.kt)       |\n  | others | [`UnexpectedStatusCodeException`](phoebe-kotlin-core/src/main/kotlin/com/phoebe/api/errors/UnexpectedStatusCodeException.kt) |\n\n- [`PhoebeIoException`](phoebe-kotlin-core/src/main/kotlin/com/phoebe/api/errors/PhoebeIoException.kt): I/O networking errors.\n\n- [`PhoebeRetryableException`](phoebe-kotlin-core/src/main/kotlin/com/phoebe/api/errors/PhoebeRetryableException.kt): Generic error indicating a failure that could be retried by the client.\n\n- [`PhoebeInvalidDataException`](phoebe-kotlin-core/src/main/kotlin/com/phoebe/api/errors/PhoebeInvalidDataException.kt): Failure to interpret successfully parsed data. For example,       when accessing a property that\'s supposed to be required, but the API unexpectedly omitted it from the       response.\n\n- [`PhoebeException`](phoebe-kotlin-core/src/main/kotlin/com/phoebe/api/errors/PhoebeException.kt): Base class for all exceptions. Most errors will result in one of the       previously mentioned ones, but completely generic errors may be thrown using the base class.\n\n\n\n## Logging\n\nThe SDK uses the standard   [OkHttp logging interceptor](https://github.com/square/okhttp/tree/master/okhttp-logging-interceptor).\n\nEnable logging by setting the `PHOEBE_LOG` environment variable to   `info`:\n\n```sh\nexport PHOEBE_LOG=info\n```\n\nOr to `debug` for more verbose logging:\n\n```sh\nexport PHOEBE_LOG=debug\n```\n\n## ProGuard and R8\n\nAlthough the SDK uses reflection, it is still usable with     [ProGuard](https://github.com/Guardsquare/proguard) and     [R8](https://developer.android.com/topic/performance/app-optimization/enable-app-optimization) because     `phoebe-kotlin-core` is published with a     [configuration file](phoebe-kotlin-core/src/main/resources/META-INF/proguard/phoebe-kotlin-core.pro) containing     [keep rules](https://www.guardsquare.com/manual/configuration/usage).\n\nProGuard and R8 should automatically detect and use the published rules, but you can also manually copy     the keep rules if necessary.\n\n\n\n\n\n## Jackson\n\nThe SDK depends on [Jackson](https://github.com/FasterXML/jackson) for JSON     serialization/deserialization. It is compatible with version 2.13.4 or higher,     but depends on version 2.18.2 by default.\n\nThe SDK throws an exception if it detects an incompatible Jackson version at runtime (e.g. if the     default version was overridden in your Maven or Gradle config).\n\nIf the SDK threw an exception, but you\'re _certain_ the version is compatible, then disable the version     check using the `checkJacksonVersionCompatibility` on [`PhoebeOkHttpClient`](phoebe-kotlin-client-okhttp/src/main/kotlin/com/phoebe/api/client/okhttp/PhoebeOkHttpClient.kt) or     [`PhoebeOkHttpClientAsync`](phoebe-kotlin-client-okhttp/src/main/kotlin/com/phoebe/api/client/okhttp/PhoebeOkHttpClientAsync.kt).\n\n> [!CAUTION]\n> We make no guarantee that the SDK works correctly when the Jackson version check is disabled.\n\nAlso note that there are bugs in older Jackson versions that can affect the SDK. We don\'t work around all     Jackson bugs ([example](https://github.com/FasterXML/jackson-databind/issues/3240)) and expect users to     upgrade Jackson for those instead.\n\n## Network options\n\n### Retries\n\nThe SDK automatically retries 2 times by default, with a short exponential backoff between requests.\n\nOnly the following error types are retried:\n- Connection errors (for example, due to a network connectivity problem)\n- 408 Request Timeout\n- 409 Conflict\n- 429 Rate Limit\n- 5xx Internal\n\nThe API may also explicitly instruct the SDK to retry or not retry a request.\n\nTo set a custom number of retries, configure the client using the `maxRetries` method:\n\n```kotlin\nimport com.phoebe.api.client.PhoebeClient\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient\n\nval client: PhoebeClient = PhoebeOkHttpClient.builder()\n    .fromEnv()\n    .maxRetries(4)\n    .build()\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default.\n\nTo set a custom timeout, configure the method call using the `timeout` method:\n\n```kotlin\nimport com.phoebe.api.models.ref.hotspot.info.InfoRetrieveResponse\n\nval info: InfoRetrieveResponse = client.ref().hotspot().info().retrieve(RequestOptions.builder().timeout(Duration.ofSeconds(30)).build())\n```\n\nOr configure the default for all method calls at the client level:\n\n```kotlin\nimport com.phoebe.api.client.PhoebeClient\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient\nimport java.time.Duration\n\nval client: PhoebeClient = PhoebeOkHttpClient.builder()\n    .fromEnv()\n    .timeout(Duration.ofSeconds(30))\n    .build()\n```\n\n### Proxies\n\nTo route requests through a proxy, configure the client using the `proxy` method:\n\n```kotlin\nimport com.phoebe.api.client.PhoebeClient\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient\nimport java.net.InetSocketAddress\nimport java.net.Proxy\n\nval client: PhoebeClient = PhoebeOkHttpClient.builder()\n    .fromEnv()\n    .proxy(Proxy(\n      Proxy.Type.HTTP, InetSocketAddress(\n        "https://example.com", 8080\n      )\n    ))\n    .build()\n```\n\n### Connection pooling\n\nTo customize the underlying OkHttp connection pool, configure the client using the   `maxIdleConnections` and `keepAliveDuration` methods:\n\n```kotlin\nimport com.phoebe.api.client.PhoebeClient\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient\nimport java.time.Duration\n\nval client: PhoebeClient = PhoebeOkHttpClient.builder()\n    .fromEnv()\n    // If `maxIdleConnections` is set, then `keepAliveDuration` must be set, and vice versa.\n    .maxIdleConnections(10)\n    .keepAliveDuration(Duration.ofMinutes(2))\n    .build()\n```\n\nIf both options are unset, OkHttp\'s default connection pool settings are used.\n\n### HTTPS\n\n> [!NOTE]\n> Most applications should not call these methods, and instead use the system defaults. The defaults include\n> special optimizations that can be lost if the implementations are modified.\n\nTo configure how HTTPS connections are secured, configure the client using the `sslSocketFactory`,   `trustManager`, and `hostnameVerifier` methods:\n\n```kotlin\nimport com.phoebe.api.client.PhoebeClient\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient\n\nval client: PhoebeClient = PhoebeOkHttpClient.builder()\n    .fromEnv()\n    // If `sslSocketFactory` is set, then `trustManager` must be set, and vice versa.\n    .sslSocketFactory(yourSSLSocketFactory)\n    .trustManager(yourTrustManager)\n    .hostnameVerifier(yourHostnameVerifier)\n    .build()\n```\n\n\n\n### Custom HTTP client\n\nThe SDK consists of three artifacts:\n- `phoebe-kotlin-core`\n  - Contains core SDK logic\n  - Does not depend on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`PhoebeClient`](phoebe-kotlin-core/src/main/kotlin/com/phoebe/api/client/PhoebeClient.kt), [`PhoebeClientAsync`](phoebe-kotlin-core/src/main/kotlin/com/phoebe/api/client/PhoebeClientAsync.kt),             [`PhoebeClientImpl`](phoebe-kotlin-core/src/main/kotlin/com/phoebe/api/client/PhoebeClientImpl.kt), and [`PhoebeClientAsyncImpl`](phoebe-kotlin-core/src/main/kotlin/com/phoebe/api/client/PhoebeClientAsyncImpl.kt), all of which can             work with any HTTP client\n- `phoebe-kotlin-client-okhttp`\n  - Depends on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`PhoebeOkHttpClient`](phoebe-kotlin-client-okhttp/src/main/kotlin/com/phoebe/api/client/okhttp/PhoebeOkHttpClient.kt) and [`PhoebeOkHttpClientAsync`](phoebe-kotlin-client-okhttp/src/main/kotlin/com/phoebe/api/client/okhttp/PhoebeOkHttpClientAsync.kt), which             provide a way to construct [`PhoebeClientImpl`](phoebe-kotlin-core/src/main/kotlin/com/phoebe/api/client/PhoebeClientImpl.kt) and             [`PhoebeClientAsyncImpl`](phoebe-kotlin-core/src/main/kotlin/com/phoebe/api/client/PhoebeClientAsyncImpl.kt), respectively, using OkHttp\n- `phoebe-kotlin`\n  - Depends on and exposes the APIs of both `phoebe-kotlin-core` and `phoebe-kotlin-client-okhttp`\n  - Does not have its own logic\n\nThis structure allows replacing the SDK\'s default HTTP client without pulling in unnecessary dependencies.\n\n#### Customized [`OkHttpClient`](https://square.github.io/okhttp/3.x/okhttp/okhttp3/OkHttpClient.html)\n\n> [!TIP]\n> Try the available [network options](#network-options) before replacing the default client.\n\nTo use a customized `OkHttpClient`:\n\n1. Replace your [`phoebe-kotlin` dependency](#installation) with `phoebe-kotlin-core`\n2. Copy `phoebe-kotlin-client-okhttp`\'s [`OkHttpClient`](phoebe-kotlin-client-okhttp/src/main/kotlin/com/phoebe/api/client/okhttp/OkHttpClient.kt) class into your code and        customize it\n3. Construct [`PhoebeClientImpl`](phoebe-kotlin-core/src/main/kotlin/com/phoebe/api/client/PhoebeClientImpl.kt) or [`PhoebeClientAsyncImpl`](phoebe-kotlin-core/src/main/kotlin/com/phoebe/api/client/PhoebeClientAsyncImpl.kt), similarly to        [`PhoebeOkHttpClient`](phoebe-kotlin-client-okhttp/src/main/kotlin/com/phoebe/api/client/okhttp/PhoebeOkHttpClient.kt) or [`PhoebeOkHttpClientAsync`](phoebe-kotlin-client-okhttp/src/main/kotlin/com/phoebe/api/client/okhttp/PhoebeOkHttpClientAsync.kt), using your        customized client\n\n### Completely custom HTTP client\n\nTo use a completely custom HTTP client:\n\n1. Replace your [`phoebe-kotlin` dependency](#installation) with `phoebe-kotlin-core`\n2. Write a class that implements the [`HttpClient`](phoebe-kotlin-core/src/main/kotlin/com/phoebe/api/core/http/HttpClient.kt) interface\n3. Construct [`PhoebeClientImpl`](phoebe-kotlin-core/src/main/kotlin/com/phoebe/api/client/PhoebeClientImpl.kt) or [`PhoebeClientAsyncImpl`](phoebe-kotlin-core/src/main/kotlin/com/phoebe/api/client/PhoebeClientAsyncImpl.kt), similarly to        [`PhoebeOkHttpClient`](phoebe-kotlin-client-okhttp/src/main/kotlin/com/phoebe/api/client/okhttp/PhoebeOkHttpClient.kt) or [`PhoebeOkHttpClientAsync`](phoebe-kotlin-client-okhttp/src/main/kotlin/com/phoebe/api/client/okhttp/PhoebeOkHttpClientAsync.kt), using your new        client class\n\n## Undocumented API functionality\n\nThe SDK is typed for convenient usage of the documented API. However, it also supports working with undocumented or not yet supported parts of the API.\n\n### Parameters\n\nTo set undocumented parameters, call the `putAdditionalHeader`, `putAdditionalQueryParam`, or       `putAdditionalBodyProperty` methods on any `Params` class:\n\n```kotlin\nimport com.phoebe.api.core.JsonValue\nimport com.phoebe.api.models.ref.hotspot.info.InfoRetrieveParams\n\nval params: InfoRetrieveParams = InfoRetrieveParams.builder()\n    .putAdditionalHeader("Secret-Header", "42")\n    .putAdditionalQueryParam("secret_query_param", "42")\n    .putAdditionalBodyProperty("secretProperty", JsonValue.from("42"))\n    .build()\n```\n\nThese can be accessed on the built object later using the `_additionalHeaders()`,       `_additionalQueryParams()`, and `_additionalBodyProperties()` methods.\n\nTo set a documented parameter or property to an undocumented or not yet supported _value_, pass a       [`JsonValue`](phoebe-kotlin-core/src/main/kotlin/com/phoebe/api/core/Values.kt) object to its setter:\n\n```kotlin\nimport com.phoebe.api.models.ref.hotspot.info.InfoRetrieveParams\n\nval params: InfoRetrieveParams = InfoRetrieveParams.builder().build()\n```\n\nThe most straightforward way to create a [`JsonValue`](phoebe-kotlin-core/src/main/kotlin/com/phoebe/api/core/Values.kt) is using its       `from(...)` method:\n\n```kotlin\nimport com.phoebe.api.core.JsonValue\n\n// Create primitive JSON values\nval nullValue: JsonValue = JsonValue.from(null)\nval booleanValue: JsonValue = JsonValue.from(true)\nval numberValue: JsonValue = JsonValue.from(42)\nval stringValue: JsonValue = JsonValue.from("Hello World!")\n\n// Create a JSON array value equivalent to `["Hello", "World"]`\nval arrayValue: JsonValue = JsonValue.from(listOf(\n  "Hello", "World"\n))\n\n// Create a JSON object value equivalent to `{ "a": 1, "b": 2 }`\nval objectValue: JsonValue = JsonValue.from(mapOf(\n  "a" to 1, "b" to 2\n))\n\n// Create an arbitrarily nested JSON equivalent to:\n// {\n//   "a": [1, 2],\n//   "b": [3, 4]\n// }\nval complexValue: JsonValue = JsonValue.from(mapOf(\n  "a" to listOf(\n    1, 2\n  ), "b" to listOf(\n    3, 4\n  )\n))\n```\n\nNormally a `Builder` class\'s `build` method will throw         [`IllegalStateException`](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalStateException.html)         if any required parameter or property is unset.\n\nTo forcibly omit a required parameter or property, pass [`JsonMissing`](phoebe-kotlin-core/src/main/kotlin/com/phoebe/api/core/Values.kt):\n\n```kotlin\nimport com.phoebe.api.core.JsonMissing\nimport com.phoebe.api.models.ref.hotspot.info.InfoRetrieveParams\n\nval params: InfoRetrieveParams = InfoRetrieveParams.builder()\n    .locId(JsonMissing.of())\n    .build()\n```\n\n### Response properties\n\nTo access undocumented response properties, call the `_additionalProperties()` method:\n\n```kotlin\nimport com.phoebe.api.core.JsonBoolean\nimport com.phoebe.api.core.JsonNull\nimport com.phoebe.api.core.JsonNumber\nimport com.phoebe.api.core.JsonValue\n\nval additionalProperties: Map<String, JsonValue> = client.ref().hotspot().info().retrieve(params)._additionalProperties()\nval secretPropertyValue: JsonValue = additionalProperties.get("secretProperty")\n\nval result = when (secretPropertyValue) {\n    is JsonNull -> "It\'s null!"\n    is JsonBoolean -> "It\'s a boolean!"\n    is JsonNumber -> "It\'s a number!"\n    // Other types include `JsonMissing`, `JsonString`, `JsonArray`, and `JsonObject`\n    else -> "It\'s something else!"\n}\n```\n\nTo access a property\'s raw JSON value, which may be undocumented, call its `_` prefixed method:\n\n```kotlin\nimport com.phoebe.api.core.JsonField\n\nval field: JsonField<Any> = client.ref().hotspot().info().retrieve(params)._field()\n\nif (field.isMissing()) {\n  // The property is absent from the JSON response\n} else if (field.isNull()) {\n  // The property was set to literal null\n} else {\n  // Check if value was provided as a string\n  // Other methods include `asNumber()`, `asBoolean()`, etc.\n  val jsonString: String? = field.asString();\n\n  // Try to deserialize into a custom type\n  val myObject: MyClass = field.asUnknown()!!.convert(MyClass::class.java)\n}\n```\n\n### Response validation\n\nIn rare cases, the API may return a response that doesn\'t match the expected type. For example, the SDK     may expect a property to contain a `String`, but the API could return something else.\n\nBy default, the SDK will not throw an exception in this case. It will throw     [`PhoebeInvalidDataException`](phoebe-kotlin-core/src/main/kotlin/com/phoebe/api/errors/PhoebeInvalidDataException.kt) only if you directly access the property.\n\nIf you would prefer to check that the response is completely well-typed upfront, then either call     `validate()`:\n\n```kotlin\nimport com.phoebe.api.models.ref.hotspot.info.InfoRetrieveResponse\n\nval info: InfoRetrieveResponse = client.ref().hotspot().info().retrieve(params).validate()\n```\n\nOr configure the method call to validate the response using the `responseValidation` method:\n\n```kotlin\nimport com.phoebe.api.models.ref.hotspot.info.InfoRetrieveResponse\n\nval info: InfoRetrieveResponse = client.ref().hotspot().info().retrieve(RequestOptions.builder().responseValidation(true).build())\n```\n\nOr configure the default for all method calls at the client level:\n\n```kotlin\nimport com.phoebe.api.client.PhoebeClient\nimport com.phoebe.api.client.okhttp.PhoebeOkHttpClient\n\nval client: PhoebeClient = PhoebeOkHttpClient.builder()\n    .fromEnv()\n    .responseValidation(true)\n    .build()\n```\n\n## FAQ\n\n### Why don\'t you use plain `enum` classes?\n\nKotlin `enum` classes are not trivially   [forwards compatible](https://www.stainless.com/blog/making-java-enums-forwards-compatible). Using them in   the SDK could cause runtime exceptions if the API is updated to respond with a new enum value.\n\n### Why do you represent fields using `JsonField<T>` instead of just plain `T`?\n\nUsing `JsonField<T>` enables a few features:\n\n- Allowing usage of [undocumented API functionality](#undocumented-api-functionality)\n- Lazily [validating the API response against the expected shape](#response-validation)\n- Representing absent vs explicitly null values\n\n### Why don\'t you use [`data` classes](https://kotlinlang.org/docs/data-classes.html)?\n\nIt is not [backwards compatible to add new fields to a data class](https://kotlinlang.org/docs/api-guidelines-backward-compatibility.html#avoid-using-data-classes-in-your-api)   and we don\'t want to introduce a breaking change every time we add a field to a class.\n\n### Why don\'t you use checked exceptions?\n\nChecked exceptions are widely considered a mistake in the Java programming language. In fact, they were   omitted from Kotlin for this reason.\n\nChecked exceptions:\n\n- Are verbose to handle\n- Encourage error handling at the wrong level of abstraction, where nothing can be done about the error\n- Are tedious to propagate due to the [function coloring problem](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function)\n- Don\'t play well with lambdas (also due to the function coloring problem)\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/phoebe-bird/phoebe-kotlin/issues) with questions, bugs, or suggestions.\n',
  },
  {
    language: 'php',
    content:
      '# Phoebe PHP API Library\n\nThe Phoebe PHP library provides convenient access to the Phoebe REST API from any PHP 8.1.0+ application.\n\n## Installation\n\nTo use this package, install via Composer by adding the following to your application\'s `composer.json`:\n\n<!-- x-release-please-start-version -->\n```json\n{\n  "repositories": [\n    {\n      "type": "vcs",\n      "url": "git@github.com:phoebe-bird/phoebe-php.git"\n    }\n  ],\n  "require": {\n    "phoebe-bird/phoebe": "dev-main"\n  }\n}\n```\n<!-- x-release-please-end -->\n\n## Usage\n\n```php\n<?php\n\n$client = new Client(apiKey: getenv(\'EBIRD_API_KEY\') ?: \'My API Key\');\n\n$info = $client->ref->hotspot->info->retrieve(\'L99381\');\n\nvar_dump($info->countryCode);\n```',
  },
  {
    language: 'python',
    content:
      '# Phoebe Python API library\n\n<!-- prettier-ignore -->\n[![PyPI version](https://img.shields.io/pypi/v/phoebe_bird.svg?label=pypi%20(stable))](https://pypi.org/project/phoebe_bird/)\n\nThe Phoebe Python library provides convenient access to the Phoebe REST API from any Python 3.9+\napplication. The library includes type definitions for all request params and response fields,\nand offers both synchronous and asynchronous clients powered by [httpx](https://github.com/encode/httpx).\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Phoebe MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=phoebe-ebird-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsInBob2ViZS1lYmlyZC1tY3AiXSwiZW52Ijp7IkVCSVJEX0FQSV9LRVkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22phoebe-ebird-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22phoebe-ebird-mcp%22%5D%2C%22env%22%3A%7B%22EBIRD_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nThe REST API documentation can be found on [science.ebird.org](https://science.ebird.org/en/use-ebird-data/download-ebird-data-products). The full API of this library can be found in [api.md](api.md).\n\n## Installation\n\n```sh\n# install from PyPI\npip install phoebe_bird\n```\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```python\nimport os\nfrom phoebe_bird import Phoebe\n\nclient = Phoebe(\n    api_key=os.environ.get("EBIRD_API_KEY"),  # This is the default and can be omitted\n)\n\ninfo = client.ref.hotspot.info.retrieve(\n    "L99381",\n)\nprint(info.country_code)\n```\n\nWhile you can provide an `api_key` keyword argument,\nwe recommend using [python-dotenv](https://pypi.org/project/python-dotenv/)\nto add `EBIRD_API_KEY="My API Key"` to your `.env` file\nso that your API Key is not stored in source control.\n\n## Async usage\n\nSimply import `AsyncPhoebe` instead of `Phoebe` and use `await` with each API call:\n\n```python\nimport os\nimport asyncio\nfrom phoebe_bird import AsyncPhoebe\n\nclient = AsyncPhoebe(\n    api_key=os.environ.get("EBIRD_API_KEY"),  # This is the default and can be omitted\n)\n\nasync def main() -> None:\n  info = await client.ref.hotspot.info.retrieve(\n      "L99381",\n  )\n  print(info.country_code)\n\nasyncio.run(main())\n```\n\nFunctionality between the synchronous and asynchronous clients is otherwise identical.\n\n### With aiohttp\n\nBy default, the async client uses `httpx` for HTTP requests. However, for improved concurrency performance you may also use `aiohttp` as the HTTP backend.\n\nYou can enable this by installing `aiohttp`:\n\n```sh\n# install from PyPI\npip install phoebe_bird[aiohttp]\n```\n\nThen you can enable it by instantiating the client with `http_client=DefaultAioHttpClient()`:\n\n```python\nimport os\nimport asyncio\nfrom phoebe_bird import DefaultAioHttpClient\nfrom phoebe_bird import AsyncPhoebe\n\nasync def main() -> None:\n  async with AsyncPhoebe(\n    api_key=os.environ.get("EBIRD_API_KEY"),  # This is the default and can be omitted\n    http_client=DefaultAioHttpClient(),\n) as client:\n    info = await client.ref.hotspot.info.retrieve(\n        "L99381",\n    )\n    print(info.country_code)\n\nasyncio.run(main())\n```\n\n\n\n## Using types\n\nNested request parameters are [TypedDicts](https://docs.python.org/3/library/typing.html#typing.TypedDict). Responses are [Pydantic models](https://docs.pydantic.dev) which also provide helper methods for things like:\n\n- Serializing back into JSON, `model.to_json()`\n- Converting to a dictionary, `model.to_dict()`\n\nTyped requests and responses provide autocomplete and documentation within your editor. If you would like to see type errors in VS Code to help catch bugs earlier, set `python.analysis.typeCheckingMode` to `basic`.\n\n\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API (for example, due to network connection problems or a timeout), a subclass of `phoebe_bird.APIConnectionError` is raised.\n\nWhen the API returns a non-success status code (that is, 4xx or 5xx\nresponse), a subclass of `phoebe_bird.APIStatusError` is raised, containing `status_code` and `response` properties.\n\nAll errors inherit from `phoebe_bird.APIError`.\n\n```python\nimport phoebe_bird\nfrom phoebe_bird import Phoebe\n\nclient = Phoebe()\n\ntry:\n    client.ref.hotspot.info.retrieve(\n        "L99381",\n    )\nexcept phoebe_bird.APIConnectionError as e:\n    print("The server could not be reached")\n    print(e.__cause__) # an underlying Exception, likely raised within httpx.\nexcept phoebe_bird.RateLimitError as e:\n    print("A 429 status code was received; we should back off a bit.")\nexcept phoebe_bird.APIStatusError as e:\n    print("Another non-200-range status code was received")\n    print(e.status_code)\n    print(e.response)\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors are automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors are all retried by default.\n\nYou can use the `max_retries` option to configure or disable retry settings:\n\n```python\nfrom phoebe_bird import Phoebe\n\n# Configure the default for all requests:\nclient = Phoebe(\n    # default is 2\n    max_retries=0,\n)\n\n# Or, configure per-request:\nclient.with_options(max_retries = 5).ref.hotspot.info.retrieve(\n    "L99381",\n)\n```\n\n### Timeouts\n\nBy default requests time out after 1 minute. You can configure this with a `timeout` option,\nwhich accepts a float or an [`httpx.Timeout`](https://www.python-httpx.org/advanced/timeouts/#fine-tuning-the-configuration) object:\n\n```python\nfrom phoebe_bird import Phoebe\n\n# Configure the default for all requests:\nclient = Phoebe(\n    # 20 seconds (default is 1 minute)\n    timeout=20.0,\n)\n\n# More granular control:\nclient = Phoebe(\n    timeout=httpx.Timeout(60.0, read=5.0, write=10.0, connect=2.0),\n)\n\n# Override per-request:\nclient.with_options(timeout = 5.0).ref.hotspot.info.retrieve(\n    "L99381",\n)\n```\n\nOn timeout, an `APITimeoutError` is thrown.\n\nNote that requests that time out are [retried twice by default](#retries).\n\n\n\n## Advanced\n\n### Logging\n\nWe use the standard library [`logging`](https://docs.python.org/3/library/logging.html) module.\n\nYou can enable logging by setting the environment variable `PHOEBE_LOG` to `info`.\n\n```shell\n$ export PHOEBE_LOG=info\n```\n\nOr to `debug` for more verbose logging.\n\n### How to tell whether `None` means `null` or missing\n\nIn an API response, a field may be explicitly `null`, or missing entirely; in either case, its value is `None` in this library. You can differentiate the two cases with `.model_fields_set`:\n\n```py\nif response.my_field is None:\n  if \'my_field\' not in response.model_fields_set:\n    print(\'Got json like {}, without a "my_field" key present at all.\')\n  else:\n    print(\'Got json like {"my_field": null}.\')\n```\n\n### Accessing raw response data (e.g. headers)\n\nThe "raw" Response object can be accessed by prefixing `.with_raw_response.` to any HTTP method call, e.g.,\n\n```py\nfrom phoebe_bird import Phoebe\n\nclient = Phoebe()\nresponse = client.ref.hotspot.info.with_raw_response.retrieve(\n    "L99381",\n)\nprint(response.headers.get(\'X-My-Header\'))\n\ninfo = response.parse()  # get the object that `ref.hotspot.info.retrieve()` would have returned\nprint(info.country_code)\n```\n\nThese methods return an [`APIResponse`](https://github.com/phoebe-bird/phoebe-python/tree/main/src/phoebe_bird/_response.py) object.\n\nThe async client returns an [`AsyncAPIResponse`](https://github.com/phoebe-bird/phoebe-python/tree/main/src/phoebe_bird/_response.py) with the same structure, the only difference being `await`able methods for reading the response content.\n\n#### `.with_streaming_response`\n\nThe above interface eagerly reads the full response body when you make the request, which may not always be what you want.\n\nTo stream the response body, use `.with_streaming_response` instead, which requires a context manager and only reads the response body once you call `.read()`, `.text()`, `.json()`, `.iter_bytes()`, `.iter_text()`, `.iter_lines()` or `.parse()`. In the async client, these are async methods.\n\n```python\nwith client.ref.hotspot.info.with_streaming_response.retrieve(\n    "L99381",\n) as response :\n    print(response.headers.get(\'X-My-Header\'))\n\n    for line in response.iter_lines():\n      print(line)\n```\n\nThe context manager is required so that the response will reliably be closed.\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API.\n\nIf you need to access undocumented endpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can make requests using `client.get`, `client.post`, and other\nhttp verbs. Options on the client will be respected (such as retries) when making this request.\n\n```py\nimport httpx\n\nresponse = client.post(\n    "/foo",\n    cast_to=httpx.Response,\n    body={"my_param": True},\n)\n\nprint(response.headers.get("x-foo"))\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you can access the extra fields like `response.unknown_prop`. You\ncan also get all the extra fields on the Pydantic model as a dict with\n[`response.model_extra`](https://docs.pydantic.dev/latest/api/base_model/#pydantic.BaseModel.model_extra).\n\n### Configuring the HTTP client\n\nYou can directly override the [httpx client](https://www.python-httpx.org/api/#client) to customize it for your use case, including:\n\n- Support for [proxies](https://www.python-httpx.org/advanced/proxies/)\n- Custom [transports](https://www.python-httpx.org/advanced/transports/)\n- Additional [advanced](https://www.python-httpx.org/advanced/clients/) functionality\n\n```python\nimport httpx\nfrom phoebe_bird import Phoebe, DefaultHttpxClient\n\nclient = Phoebe(\n    # Or use the `PHOEBE_BASE_URL` env var\n    base_url="http://my.test.server.example.com:8083",\n    http_client=DefaultHttpxClient(proxy="http://my.test.proxy.example.com", transport=httpx.HTTPTransport(local_address="0.0.0.0")),\n)\n```\n\nYou can also customize the client on a per-request basis by using `with_options()`:\n\n```python\nclient.with_options(http_client=DefaultHttpxClient(...))\n```\n\n### Managing HTTP resources\n\nBy default the library closes underlying HTTP connections whenever the client is [garbage collected](https://docs.python.org/3/reference/datamodel.html#object.__del__). You can manually close the client using the `.close()` method if desired, or with a context manager that closes when exiting.\n\n```py\nfrom phoebe_bird import Phoebe\n\nwith Phoebe() as client:\n  # make requests here\n  ...\n\n# HTTP client is now closed\n```\n\n## Versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/phoebe-bird/phoebe-python/issues) with questions, bugs, or suggestions.\n\n### Determining the installed version\n\nIf you\'ve upgraded to the latest version but aren\'t seeing any new features you were expecting then your python environment is likely still using an older version.\n\nYou can determine the version that is being used at runtime with:\n\n```py\nimport phoebe_bird\nprint(phoebe_bird.__version__)\n```\n\n## Requirements\n\nPython 3.9 or higher.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'ruby',
    content:
      '# Phoebe Ruby API library\n\nThe Phoebe Ruby library provides convenient access to the Phoebe REST API from any Ruby 3.2.0+ application. It ships with comprehensive types & docstrings in Yard, RBS, and RBI – [see below](https://github.com/phoebe-bird/phoebe-ruby#Sorbet) for usage with Sorbet. The standard library\'s `net/http` is used as the HTTP transport, with connection pooling via the `connection_pool` gem.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Phoebe MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=phoebe-ebird-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsInBob2ViZS1lYmlyZC1tY3AiXSwiZW52Ijp7IkVCSVJEX0FQSV9LRVkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22phoebe-ebird-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22phoebe-ebird-mcp%22%5D%2C%22env%22%3A%7B%22EBIRD_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nDocumentation for releases of this gem can be found [on RubyDoc](https://gemdocs.org/gems/phoebe).\n\nThe REST API documentation can be found on [science.ebird.org](https://science.ebird.org/en/use-ebird-data/download-ebird-data-products).\n\n## Installation\n\nTo use this gem, install via Bundler by adding the following to your application\'s `Gemfile`:\n\n<!-- x-release-please-start-version -->\n\n```ruby\ngem "phoebe", "~> 0.0.1"\n```\n\n<!-- x-release-please-end -->\n\n## Usage\n\n```ruby\nrequire "bundler/setup"\nrequire "phoebe"\n\nphoebe = Phoebe::Client.new(\n  api_key: ENV["EBIRD_API_KEY"] # This is the default and can be omitted\n)\n\ninfo = phoebe.ref.hotspot.info.retrieve("L99381")\n\nputs(info.countryCode)\n```\n\n\n\n\n\n\n\n### Handling errors\n\nWhen the library is unable to connect to the API, or if the API returns a non-success status code (i.e., 4xx or 5xx response), a subclass of `Phoebe::Errors::APIError` will be thrown:\n\n```ruby\nbegin\n  info = phoebe.ref.hotspot.info.retrieve("L99381")\nrescue Phoebe::Errors::APIConnectionError => e\n  puts("The server could not be reached")\n  puts(e.cause)  # an underlying Exception, likely raised within `net/http`\nrescue Phoebe::Errors::RateLimitError => e\n  puts("A 429 status code was received; we should back off a bit.")\nrescue Phoebe::Errors::APIStatusError => e\n  puts("Another non-200-range status code was received")\n  puts(e.status)\nend\n```\n\nError codes are as follows:\n\n| Cause            | Error Type                 |\n| ---------------- | -------------------------- |\n| HTTP 400         | `BadRequestError`          |\n| HTTP 401         | `AuthenticationError`      |\n| HTTP 403         | `PermissionDeniedError`    |\n| HTTP 404         | `NotFoundError`            |\n| HTTP 409         | `ConflictError`            |\n| HTTP 422         | `UnprocessableEntityError` |\n| HTTP 429         | `RateLimitError`           |\n| HTTP >= 500      | `InternalServerError`      |\n| Other HTTP error | `APIStatusError`           |\n| Timeout          | `APITimeoutError`          |\n| Network error    | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\n\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict, 429 Rate Limit, >=500 Internal errors, and timeouts will all be retried by default.\n\nYou can use the `max_retries` option to configure or disable this:\n\n```ruby\n# Configure the default for all requests:\nphoebe = Phoebe::Client.new(\n  max_retries: 0 # default is 2\n)\n\n# Or, configure per-request:\nphoebe.ref.hotspot.info.retrieve("L99381", request_options: {max_retries: 5})\n```\n\n### Timeouts\n\nBy default, requests will time out after 60 seconds. You can use the timeout option to configure or disable this:\n\n```ruby\n# Configure the default for all requests:\nphoebe = Phoebe::Client.new(\n  timeout: nil # default is 60\n)\n\n# Or, configure per-request:\nphoebe.ref.hotspot.info.retrieve("L99381", request_options: {timeout: 5})\n```\n\nOn timeout, `Phoebe::Errors::APITimeoutError` is raised.\n\nNote that requests that time out are retried by default.\n\n## Advanced concepts\n\n### BaseModel\n\nAll parameter and response objects inherit from `Phoebe::Internal::Type::BaseModel`, which provides several conveniences, including:\n\n1. All fields, including unknown ones, are accessible with `obj[:prop]` syntax, and can be destructured with `obj => {prop: prop}` or pattern-matching syntax.\n\n2. Structural equivalence for equality; if two API calls return the same values, comparing the responses with == will return true.\n\n3. Both instances and the classes themselves can be pretty-printed.\n\n4. Helpers such as `#to_h`, `#deep_to_h`, `#to_json`, and `#to_yaml`.\n\n### Making custom or undocumented requests\n\n#### Undocumented properties\n\nYou can send undocumented parameters to any endpoint, and read undocumented response properties, like so:\n\nNote: the `extra_` parameters of the same name overrides the documented parameters.\n\n```ruby\ninfo =\n  phoebe.ref.hotspot.info.retrieve(\n    "L99381",\n    request_options: {\n      extra_query: {my_query_parameter: value},\n      extra_body: {my_body_parameter: value},\n      extra_headers: {"my-header": value}\n    }\n  )\n\nputs(info[:my_undocumented_property])\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` under the `request_options:` parameter when making a request, as seen in the examples above.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints while retaining the benefit of auth, retries, and so on, you can make requests using `client.request`, like so:\n\n```ruby\nresponse = client.request(\n  method: :post,\n  path: \'/undocumented/endpoint\',\n  query: {"dog": "woof"},\n  headers: {"useful-header": "interesting-value"},\n  body: {"hello": "world"}\n)\n```\n\n### Concurrency & connection pooling\n\nThe `Phoebe::Client` instances are threadsafe, but are only are fork-safe when there are no in-flight HTTP requests.\n\nEach instance of `Phoebe::Client` has its own HTTP connection pool with a default size of 99. As such, we recommend instantiating the client once per application in most settings.\n\nWhen all available connections from the pool are checked out, requests wait for a new connection to become available, with queue time counting towards the request timeout.\n\nUnless otherwise specified, other classes in the SDK do not have locks protecting their underlying data structure.\n\n## Sorbet\n\nThis library provides comprehensive [RBI](https://sorbet.org/docs/rbi) definitions, and has no dependency on sorbet-runtime.\n\nYou can provide typesafe request parameters like so:\n\n```ruby\nphoebe.ref.hotspot.info.retrieve("L99381")\n```\n\nOr, equivalently:\n\n```ruby\n# Hashes work, but are not typesafe:\nphoebe.ref.hotspot.info.retrieve("L99381")\n\n# You can also splat a full Params class:\nparams = Phoebe::Ref::Hotspot::InfoRetrieveParams.new\nphoebe.ref.hotspot.info.retrieve("L99381", **params)\n```\n\n### Enums\n\nSince this library does not depend on `sorbet-runtime`, it cannot provide [`T::Enum`](https://sorbet.org/docs/tenum) instances. Instead, we provide "tagged symbols" instead, which is always a primitive at runtime:\n\n```ruby\n# :species\nputs(Phoebe::Data::Observations::RecentListParams::Cat::SPECIES)\n\n# Revealed type: `T.all(Phoebe::Data::Observations::RecentListParams::Cat, Symbol)`\nT.reveal_type(Phoebe::Data::Observations::RecentListParams::Cat::SPECIES)\n```\n\nEnum parameters have a "relaxed" type, so you can either pass in enum constants or their literal value:\n\n```ruby\n# Using the enum constants preserves the tagged type information:\nphoebe.data.observations.recent.list(\n  cat: Phoebe::Data::Observations::RecentListParams::Cat::SPECIES,\n  # …\n)\n\n# Literal values are also permissible:\nphoebe.data.observations.recent.list(\n  cat: :species,\n  # …\n)\n```\n\n## Versioning\n\nThis package follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions. As the library is in initial development and has a major version of `0`, APIs may change at any time.\n\nThis package considers improvements to the (non-runtime) `*.rbi` and `*.rbs` type definitions to be non-breaking changes.\n\n## Requirements\n\nRuby 3.2.0 or higher.\n\n## Contributing\n\nSee [the contributing documentation](https://github.com/phoebe-bird/phoebe-ruby/tree/main/CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# Phoebe TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/phoebe-ebird.svg?label=npm%20(stable))](https://npmjs.org/package/phoebe-ebird) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/phoebe-ebird)\n\nThis library provides convenient access to the Phoebe REST API from server-side TypeScript or JavaScript.\n\n\n\nThe REST API documentation can be found on [science.ebird.org](https://science.ebird.org/en/use-ebird-data/download-ebird-data-products). The full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Phoebe MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=phoebe-ebird-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsInBob2ViZS1lYmlyZC1tY3AiXSwiZW52Ijp7IkVCSVJEX0FQSV9LRVkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22phoebe-ebird-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22phoebe-ebird-mcp%22%5D%2C%22env%22%3A%7B%22EBIRD_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install phoebe-ebird\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe({\n  apiKey: process.env['EBIRD_API_KEY'], // This is the default and can be omitted\n});\n\nconst info = await client.ref.hotspot.info.retrieve('L99381');\n\nconsole.log(info.countryCode);\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe({\n  apiKey: process.env['EBIRD_API_KEY'], // This is the default and can be omitted\n});\n\nconst info: Phoebe.Ref.Hotspot.InfoRetrieveResponse = await client.ref.hotspot.info.retrieve(\n  'L99381',\n);\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst info = await client.ref.hotspot.info.retrieve('L99381').catch(async (err) => {\n  if (err instanceof Phoebe.APIError) {\n    console.log(err.status); // 400\n    console.log(err.name); // BadRequestError\n    console.log(err.headers); // {server: 'nginx', ...}\n  } else {\n    throw err;\n  }\n});\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new Phoebe({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.ref.hotspot.info.retrieve('L99381', {\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new Phoebe({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.ref.hotspot.info.retrieve('L99381', {\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new Phoebe();\n\nconst response = await client.ref.hotspot.info.retrieve('L99381').asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: info, response: raw } = await client.ref.hotspot.info\n  .retrieve('L99381')\n  .withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(info.countryCode);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `PHOEBE_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport Phoebe from 'phoebe-ebird';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new Phoebe({\n  logger: logger.child({ name: 'Phoebe' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.ref.hotspot.info.retrieve({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport Phoebe from 'phoebe-ebird';\nimport fetch from 'my-fetch';\n\nconst client = new Phoebe({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport Phoebe from 'phoebe-ebird';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new Phoebe({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport Phoebe from 'phoebe-ebird';\n\nconst client = new Phoebe({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport Phoebe from 'npm:phoebe-ebird';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new Phoebe({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/phoebe-bird/phoebe-node/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
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
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
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
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
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
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
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
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
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

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
