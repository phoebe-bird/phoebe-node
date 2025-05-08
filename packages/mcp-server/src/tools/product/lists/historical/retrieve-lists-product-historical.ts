// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Phoebe from 'phoebe-ebird';

export const metadata: Metadata = {
  resource: 'product.lists.historical',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_lists_product_historical',
  description: 'Get information on the checklists submitted on a given date for a country or region.',
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
        description: 'Only fetch this number of checklists.',
      },
      sortKey: {
        type: 'string',
        description: 'Order the results by the date of the checklist or by the date it was submitted.',
        enum: ['obs_dt', 'creation_dt'],
      },
    },
  },
};

export const handler = (client: Phoebe, args: Record<string, unknown> | undefined) => {
  const { d, ...body } = args as any;
  return client.product.lists.historical.retrieve(d, body);
};

export default { metadata, tool, handler };
