// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Phoebe from 'phoebe-ebird';

export const metadata: Metadata = {
  resource: 'ref.region.adjacent',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_region_ref_adjacent',
  description:
    'Get the list of countries or regions that share a border with this one. #### Notes Only subnational2 codes in the United States, New Zealand, or Mexico are currently supported',
  inputSchema: {
    type: 'object',
    properties: {
      regionCode: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Phoebe, args: Record<string, unknown> | undefined) => {
  const { regionCode, ...body } = args as any;
  return client.ref.region.adjacent.list(regionCode);
};

export default { metadata, tool, handler };
