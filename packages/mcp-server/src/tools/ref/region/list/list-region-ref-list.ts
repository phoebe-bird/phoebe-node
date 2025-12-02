// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'phoebe-ebird-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'phoebe-ebird-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Phoebe from 'phoebe-ebird';

export const metadata: Metadata = {
  resource: 'ref.region.list',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ref/region/list/{regionType}/{parentRegionCode}',
};

export const tool: Tool = {
  name: 'list_region_ref_list',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the list of sub-regions for a given country or region. #### Notes Not all combinations of region type and region code are valid. You can fetch all the subnational1 or subnational2 regions for a country however you can only specify a region type of 'country' when using 'world' as a region code.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/list_list_response',\n  $defs: {\n    list_list_response: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'string'\n          },\n          name: {\n            type: 'string'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      regionType: {
        type: 'string',
      },
      parentRegionCode: {
        type: 'string',
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
    required: ['regionType', 'parentRegionCode'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Phoebe, args: Record<string, unknown> | undefined) => {
  const { parentRegionCode, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.ref.region.list.list(parentRegionCode, body)),
    );
  } catch (error) {
    if (error instanceof Phoebe.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
