// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'phoebe-ebird-mcp/filtering';
import { Metadata, asTextContentResult } from 'phoebe-ebird-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Phoebe from 'phoebe-ebird';

export const metadata: Metadata = {
  resource: 'product.stats',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/product/stats/{regionCode}/{y}/{m}/{d}',
};

export const tool: Tool = {
  name: 'retrieve_product_stats',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a summary of the number of checklist submitted, species seen and contributors on a given date for a country or region.\n#### Notes The results are updated every 15 minutes.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    numChecklists: {\n      type: 'integer'\n    },\n    numContributors: {\n      type: 'integer'\n    },\n    numSpecies: {\n      type: 'integer'\n    }\n  },\n  required: []\n}\n```",
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
  return asTextContentResult(await maybeFilter(args, await client.product.stats.retrieve(d, body)));
};

export default { metadata, tool, handler };
