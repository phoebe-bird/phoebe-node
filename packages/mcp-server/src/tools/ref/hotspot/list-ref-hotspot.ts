// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'phoebe-ebird-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'phoebe-ebird-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Phoebe from 'phoebe-ebird';

export const metadata: Metadata = {
  resource: 'ref.hotspot',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ref/hotspot/{regionCode}',
};

export const tool: Tool = {
  name: 'list_ref_hotspot',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nHotspots in a region\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/hotspot_list_response',\n  $defs: {\n    hotspot_list_response: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          countryCode: {\n            type: 'string'\n          },\n          lat: {\n            type: 'number'\n          },\n          latestObsDt: {\n            type: 'string'\n          },\n          lng: {\n            type: 'number'\n          },\n          locId: {\n            type: 'string'\n          },\n          locName: {\n            type: 'string'\n          },\n          numSpeciesAllTime: {\n            type: 'integer'\n          },\n          subnational1Code: {\n            type: 'string'\n          },\n          subnational2Code: {\n            type: 'string'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      regionCode: {
        type: 'string',
      },
      back: {
        type: 'integer',
        description: 'The number of days back to fetch hotspots.',
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
    required: ['regionCode'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Phoebe, args: Record<string, unknown> | undefined) => {
  const { regionCode, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.ref.hotspot.list(regionCode, body)));
  } catch (error) {
    if (error instanceof Phoebe.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
