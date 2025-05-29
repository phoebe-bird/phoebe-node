// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
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
    'Get a summary of the number of checklist submitted, species seen and contributors on a given date for a country or region.\n#### Notes The results are updated every 15 minutes.',
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
    },
  },
};

export const handler = (client: Phoebe, args: Record<string, unknown> | undefined) => {
  const { d, ...body } = args as any;
  return client.product.stats.retrieve(d, body);
};

export default { metadata, tool, handler };
