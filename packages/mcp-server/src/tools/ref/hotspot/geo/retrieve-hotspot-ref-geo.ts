// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'phoebe-ebird-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'phoebe-ebird-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Phoebe from 'phoebe-ebird';

export const metadata: Metadata = {
  resource: 'ref.hotspot.geo',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ref/hotspot/geo',
};

export const tool: Tool = {
  name: 'retrieve_hotspot_ref_geo',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the list of hotspots, within a radius of up to 50 kilometers, from a given set of coordinates.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/geo_retrieve_response',\n  $defs: {\n    geo_retrieve_response: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          countryCode: {\n            type: 'string'\n          },\n          lat: {\n            type: 'number'\n          },\n          latestObsDt: {\n            type: 'string'\n          },\n          lng: {\n            type: 'number'\n          },\n          locId: {\n            type: 'string'\n          },\n          locName: {\n            type: 'string'\n          },\n          numSpeciesAllTime: {\n            type: 'integer'\n          },\n          subnational1Code: {\n            type: 'string'\n          },\n          subnational2Code: {\n            type: 'string'\n          }\n        }\n      }\n    }\n  }\n}\n```",
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
        description: 'The number of days back to fetch hotspots.',
      },
      dist: {
        type: 'integer',
        description: 'The search radius from the given position, in kilometers.',
      },
      fmt: {
        type: 'string',
        description: 'Fetch the records in CSV or JSON format.',
        enum: ['csv', 'json'],
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
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.ref.hotspot.geo.retrieve(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
