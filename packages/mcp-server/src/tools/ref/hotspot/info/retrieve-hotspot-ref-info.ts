// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'phoebe-ebird-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Phoebe from 'phoebe-ebird';

export const metadata: Metadata = {
  resource: 'ref.hotspot.info',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ref/hotspot/info/{locId}',
};

export const tool: Tool = {
  name: 'retrieve_hotspot_ref_info',
  description:
    'Get information on the location of a hotspot. #### Notes This API call only works for hotspots. If you pass the location code for a private location or an invalid location code then an HTTP 410 (Gone) error is returned.',
  inputSchema: {
    type: 'object',
    properties: {
      locId: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Phoebe, args: Record<string, unknown> | undefined) => {
  const { locId, ...body } = args as any;
  return asTextContentResult(await client.ref.hotspot.info.retrieve(locId));
};

export default { metadata, tool, handler };
