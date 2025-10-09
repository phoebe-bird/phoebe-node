// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'phoebe-ebird-mcp/filtering';
import { Metadata, asTextContentResult } from 'phoebe-ebird-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Phoebe from 'phoebe-ebird';

export const metadata: Metadata = {
  resource: 'data.observations.geo.recent.species',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/obs/geo/recent/{speciesCode}',
};

export const tool: Tool = {
  name: 'list_recent_geo_observations_data_species',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet all observations of a species, seen up to 30 days ago, at any location within a radius of up to 50 kilometers, from a given set of coordinates. Results include only the most recent observation from each location in the region specified.\n\n#### URL parameters\n\n| Name | Description |\n| ---------- | ----------- |\n| speciesCode | The eBird species code. |\n#### Notes\nThe species code is typically a 6-letter code, e.g. horlar for Horned Lark. You can get complete set of species code from the GET eBird Taxonomy end-point.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/specie_list_response',\n  $defs: {\n    specie_list_response: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/observation'\n      }\n    },\n    observation: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'integer'\n        },\n        comName: {\n          type: 'string'\n        },\n        firstname: {\n          type: 'string'\n        },\n        howMany: {\n          type: 'integer'\n        },\n        lastname: {\n          type: 'string'\n        },\n        lat: {\n          type: 'number'\n        },\n        lng: {\n          type: 'number'\n        },\n        locationPrivate: {\n          type: 'boolean'\n        },\n        locId: {\n          type: 'string'\n        },\n        locName: {\n          type: 'string'\n        },\n        obsDt: {\n          type: 'string'\n        },\n        obsReviewed: {\n          type: 'boolean'\n        },\n        obsValid: {\n          type: 'boolean'\n        },\n        sciName: {\n          type: 'string'\n        },\n        speciesCode: {\n          type: 'string'\n        },\n        subId: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      speciesCode: {
        type: 'string',
      },
      lat: {
        type: 'number',
      },
      lng: {
        type: 'number',
      },
      back: {
        type: 'integer',
        description: 'The number of days back to fetch observations.',
      },
      dist: {
        type: 'integer',
        description: 'The search radius from the given position, in kilometers.',
      },
      hotspot: {
        type: 'boolean',
        description: 'Only fetch observations from hotspots',
      },
      includeProvisional: {
        type: 'boolean',
        description: 'Include observations which have not yet been reviewed.',
      },
      maxResults: {
        type: 'integer',
        description: 'Only fetch this number of observations',
      },
      sppLocale: {
        type: 'string',
        description: 'Use this language for species common names',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['speciesCode', 'lat', 'lng'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Phoebe, args: Record<string, unknown> | undefined) => {
  const { speciesCode, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.data.observations.geo.recent.species.list(speciesCode, body)),
  );
};

export default { metadata, tool, handler };
