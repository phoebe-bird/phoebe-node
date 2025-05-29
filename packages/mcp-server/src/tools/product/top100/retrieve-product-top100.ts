// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
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
    'Get the top 100 contributors on a given date for a country or region.\n\n\n#### Notes\n\nThe results are updated every 15 minutes.\n\nWhen ordering by the number of completed checklists, the number of species seen will always be zero. Similarly when ordering by the number of species seen the number of completed checklists will always be zero.\n<b>Selected Response Field Notes</b>\n\nprofileHandle - if a user has enabled their profile, this is the handle to reach it via ebird.org/ebird/profile/{profileHandle}\n\nnumSpecies - always zero when checklistSort parameter is true. Invalid observations ARE included in this total\nnumCompleteChecklists - always zero when checklistSort parameter is false',
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
    },
  },
};

export const handler = (client: Phoebe, args: Record<string, unknown> | undefined) => {
  const { d, ...body } = args as any;
  return client.product.top100.retrieve(d, body);
};

export default { metadata, tool, handler };
