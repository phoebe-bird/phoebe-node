// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'phoebe-ebird-mcp/filtering';
import { Metadata, asTextContentResult } from 'phoebe-ebird-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Phoebe from 'phoebe-ebird';

export const metadata: Metadata = {
  resource: 'product.speciesList',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/product/spplist/{regionCode}',
};

export const tool: Tool = {
  name: 'list_product_species_list',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of species codes ever seen in a region, in taxonomic order (species taxa only)\n#### Notes The results are usually updated every 10 seconds for locations, every day for larger regions.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'string'\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      regionCode: {
        type: 'string',
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
};

export const handler = async (client: Phoebe, args: Record<string, unknown> | undefined) => {
  const { regionCode, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.product.speciesList.list(regionCode)));
};

export default { metadata, tool, handler };
