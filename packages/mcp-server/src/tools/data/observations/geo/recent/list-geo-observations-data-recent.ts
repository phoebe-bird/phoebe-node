// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'phoebe-ebird-mcp/filtering';
import { Metadata, asTextContentResult } from 'phoebe-ebird-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Phoebe from 'phoebe-ebird';

export const metadata: Metadata = {
  resource: 'data.observations.geo.recent',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/obs/geo/recent',
};

export const tool: Tool = {
  name: 'list_geo_observations_data_recent',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the list of recent observations (up to 30 days ago) of birds seen\nat locations within a radius of up to 50 kilometers, from a given set\nof coordinates. Results include only the most recent observation for each species in the region specified.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/observation'\n  },\n  $defs: {\n    observation: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'integer'\n        },\n        comName: {\n          type: 'string'\n        },\n        firstname: {\n          type: 'string'\n        },\n        howMany: {\n          type: 'integer'\n        },\n        lastname: {\n          type: 'string'\n        },\n        lat: {\n          type: 'number'\n        },\n        lng: {\n          type: 'number'\n        },\n        locationPrivate: {\n          type: 'boolean'\n        },\n        locId: {\n          type: 'string'\n        },\n        locName: {\n          type: 'string'\n        },\n        obsDt: {\n          type: 'string'\n        },\n        obsReviewed: {\n          type: 'boolean'\n        },\n        obsValid: {\n          type: 'boolean'\n        },\n        sciName: {\n          type: 'string'\n        },\n        speciesCode: {\n          type: 'string'\n        },\n        subId: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
      cat: {
        type: 'string',
        description: 'Only fetch observations from these taxonomic categories',
        enum: ['species', 'slash', 'issf', 'spuh', 'hybrid', 'domestic', 'form', 'intergrade'],
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
      sort: {
        type: 'string',
        description: 'Sort observations by taxonomy or by date, most recent first.',
        enum: ['date', 'species'],
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
    required: ['lat', 'lng'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Phoebe, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.data.observations.geo.recent.list(body)));
};

export default { metadata, tool, handler };
