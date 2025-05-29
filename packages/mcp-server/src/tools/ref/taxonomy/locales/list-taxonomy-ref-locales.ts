// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Phoebe from 'phoebe-ebird';

export const metadata: Metadata = {
  resource: 'ref.taxonomy.locales',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ref/taxa-locales/ebird',
};

export const tool: Tool = {
  name: 'list_taxonomy_ref_locales',
  description:
    'Returns the list of supported locale codes and names for species common names, with the last time they were updated. Use the accept-language header to get translated language names when available.\n\nNOTE: The locale codes and names are stable but the other fields in this result are not yet finalized and should be used with caution.',
  inputSchema: {
    type: 'object',
    properties: {
      'Accept-Language': {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Phoebe, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.ref.taxonomy.locales.list(body);
};

export default { metadata, tool, handler };
