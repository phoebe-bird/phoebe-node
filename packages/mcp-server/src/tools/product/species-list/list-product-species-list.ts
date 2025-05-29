// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Phoebe from 'phoebe-ebird';

export const metadata: Metadata = {
  resource: 'product.speciesList',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/product/spplist/{regionCode}',
};

export const tool: Tool = {
  name: 'list_product_species_list',
  description:
    'Get a list of species codes ever seen in a region, in taxonomic order (species taxa only)\n#### Notes The results are usually updated every 10 seconds for locations, every day for larger regions.',
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
  return client.product.speciesList.list(regionCode);
};

export default { metadata, tool, handler };
