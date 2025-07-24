// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'phoebe-ebird-mcp/filtering';
import { Metadata, asTextContentResult } from 'phoebe-ebird-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Phoebe from 'phoebe-ebird';

export const metadata: Metadata = {
  resource: 'product.top100',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/product/top100/{regionCode}/{y}/{m}/{d}',
};

export const tool: Tool = {
  name: 'retrieve_product_top100',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the top 100 contributors on a given date for a country or region.\n\n\n#### Notes\n\nThe results are updated every 15 minutes.\n\nWhen ordering by the number of completed checklists, the number of species seen will always be zero. Similarly when ordering by the number of species seen the number of completed checklists will always be zero.\n<b>Selected Response Field Notes</b>\n\nprofileHandle - if a user has enabled their profile, this is the handle to reach it via ebird.org/ebird/profile/{profileHandle}\n\nnumSpecies - always zero when checklistSort parameter is true. Invalid observations ARE included in this total\nnumCompleteChecklists - always zero when checklistSort parameter is false\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'object',\n    properties: {\n      numCompleteChecklists: {\n        type: 'integer'\n      },\n      numSpecies: {\n        type: 'integer'\n      },\n      profileHandle: {\n        type: 'string'\n      },\n      rowNum: {\n        type: 'integer'\n      },\n      userDisplayName: {\n        type: 'string'\n      },\n      userId: {\n        type: 'string'\n      }\n    }\n  }\n}\n```",
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
      maxResults: {
        type: 'integer',
        description: 'Only fetch this number of contributors.',
      },
      rankedBy: {
        type: 'string',
        description: 'Order by number of complete checklists (cl) or by number of species seen (spp).',
        enum: ['spp', 'cl'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['regionCode', 'y', 'm', 'd'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Phoebe, args: Record<string, unknown> | undefined) => {
  const { d, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.product.top100.retrieve(d, body)));
};

export default { metadata, tool, handler };
