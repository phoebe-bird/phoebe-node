// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'phoebe-ebird-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Phoebe from 'phoebe-ebird';

export const metadata: Metadata = {
  resource: 'product.checklist',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/product/checklist/view/{subId}',
};

export const tool: Tool = {
  name: 'view_product_checklist',
  description:
    'Get the details and observations of a checklist.\n#### Notes Do NOT use this to download large amounts of data. You will be banned if you do. In the fields for each observation, the following fields are duplicates or obsolete and will be removed at a future date: *howManyAtleast*, *howManyAtmost*, *hideFlags*, *projId*, *subId*, *subnational1Code* and *present*.',
  inputSchema: {
    type: 'object',
    properties: {
      subId: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Phoebe, args: Record<string, unknown> | undefined) => {
  const { subId, ...body } = args as any;
  return asTextContentResult(await client.product.checklist.view(subId));
};

export default { metadata, tool, handler };
