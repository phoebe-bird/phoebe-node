// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Phoebe from 'phoebe-ebird';

export const metadata: Metadata = {
  resource: 'ref.hotspot',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ref/hotspot/{regionCode}',
};

export const tool: Tool = {
  name: 'list_ref_hotspot',
  description: 'Hotspots in a region',
  inputSchema: {
    type: 'object',
    properties: {
      regionCode: {
        type: 'string',
      },
      back: {
        type: 'integer',
        description: 'The number of days back to fetch hotspots.',
      },
      fmt: {
        type: 'string',
        description: 'Fetch the records in CSV or JSON format.',
        enum: ['csv', 'json'],
      },
    },
  },
};

export const handler = (client: Phoebe, args: Record<string, unknown> | undefined) => {
  const { regionCode, ...body } = args as any;
  return client.ref.hotspot.list(regionCode, body);
};

export default { metadata, tool, handler };
