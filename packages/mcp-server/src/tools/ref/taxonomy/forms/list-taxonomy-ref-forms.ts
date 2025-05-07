// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Phoebe from 'phoebe-ebird';

export const metadata: Metadata = {
  resource: 'ref.taxonomy.forms',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_taxonomy_ref_forms',
  description:
    'For a species, get the list of subspecies recognised in the taxonomy. The results include the species that was passed in.',
  inputSchema: {
    type: 'object',
    properties: {
      speciesCode: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Phoebe, args: Record<string, unknown> | undefined) => {
  const { speciesCode, ...body } = args as any;
  return client.ref.taxonomy.forms.list(speciesCode);
};

export default { metadata, tool, handler };
