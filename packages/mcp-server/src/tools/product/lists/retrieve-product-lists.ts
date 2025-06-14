// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'phoebe-ebird-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Phoebe from 'phoebe-ebird';

export const metadata: Metadata = {
  resource: 'product.lists',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/product/lists/{regionCode}',
};

export const tool: Tool = {
  name: 'retrieve_product_lists',
  description: 'Get information on the most recently submitted checklists for a region.',
  inputSchema: {
    type: 'object',
    properties: {
      regionCode: {
        type: 'string',
      },
      maxResults: {
        type: 'integer',
        description: 'Only fetch this number of checklists.',
      },
    },
  },
};

export const handler = async (client: Phoebe, args: Record<string, unknown> | undefined) => {
  const { regionCode, ...body } = args as any;
  return asTextContentResult(await client.product.lists.retrieve(regionCode, body));
};

export default { metadata, tool, handler };
