// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'phoebe-ebird-mcp/filtering';
import { Metadata, asTextContentResult } from 'phoebe-ebird-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Phoebe from 'phoebe-ebird';

export const metadata: Metadata = {
  resource: 'data.observations.recent.historic',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/obs/{regionCode}/historic/{y}/{m}/{d}',
};

export const tool: Tool = {
  name: 'list_recent_observations_data_historic',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of all taxa seen in a country, region or location on a specific date, with the specific observations determined by the \"rank\" parameter (defaults to latest observation on the date).\n#### Notes Responses may be cached for 30 minutes\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/observation'\n  },\n  $defs: {\n    observation: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'integer'\n        },\n        comName: {\n          type: 'string'\n        },\n        firstname: {\n          type: 'string'\n        },\n        howMany: {\n          type: 'integer'\n        },\n        lastname: {\n          type: 'string'\n        },\n        lat: {\n          type: 'number'\n        },\n        lng: {\n          type: 'number'\n        },\n        locationPrivate: {\n          type: 'boolean'\n        },\n        locId: {\n          type: 'string'\n        },\n        locName: {\n          type: 'string'\n        },\n        obsDt: {\n          type: 'string'\n        },\n        obsReviewed: {\n          type: 'boolean'\n        },\n        obsValid: {\n          type: 'boolean'\n        },\n        sciName: {\n          type: 'string'\n        },\n        speciesCode: {\n          type: 'string'\n        },\n        subId: {\n          type: 'string'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      regionCode: {
        type: 'string',
      },
      y: {
        type: 'integer',
      },
      m: {
        type: 'integer',
      },
      d: {
        type: 'integer',
      },
      cat: {
        type: 'string',
        description: 'Only fetch observations from these taxonomic categories',
        enum: ['species', 'slash', 'issf', 'spuh', 'hybrid', 'domestic', 'form', 'intergrade'],
      },
      detail: {
        type: 'string',
        description: 'Include a subset (simple), or all (full), of the fields available.',
        enum: ['simple', 'full'],
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
      r: {
        type: 'array',
        description: 'Fetch observations from up to 50 locations',
        items: {
          type: 'string',
        },
      },
      rank: {
        type: 'string',
        description: 'Include latest observation of the day, or the first added',
        enum: ['mrec', 'create'],
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
  },
};

export const handler = async (client: Phoebe, args: Record<string, unknown> | undefined) => {
  const { d, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.data.observations.recent.historic.list(d, body)),
  );
};

export default { metadata, tool, handler };
