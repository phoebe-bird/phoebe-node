// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Phoebe from 'phoebe-ebird';

export const metadata: Metadata = {
  resource: 'ref.region.list',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ref/region/list/{regionType}/{parentRegionCode}',
};

export const tool: Tool = {
  name: 'list_region_ref_list',
  description:
    "Get the list of sub-regions for a given country or region. #### Notes Not all combinations of region type and region code are valid. You can fetch all the subnational1 or subnational2 regions for a country however you can only specify a region type of 'country' when using 'world' as a region code.",
  inputSchema: {
    type: 'object',
    properties: {
      regionType: {
        type: 'string',
      },
      parentRegionCode: {
        type: 'string',
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
  const { parentRegionCode, ...body } = args as any;
  return client.ref.region.list.list(parentRegionCode, body);
};

export default { metadata, tool, handler };
