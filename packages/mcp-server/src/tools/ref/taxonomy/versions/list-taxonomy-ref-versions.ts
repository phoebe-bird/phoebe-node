// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Phoebe from 'phoebe-ebird';

export const metadata: Metadata = {
  resource: 'ref.taxonomy.versions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ref/taxonomy/versions',
};

export const tool: Tool = {
  name: 'list_taxonomy_ref_versions',
  description: 'Returns a list of all versions of the taxonomy, with a flag indicating which is the latest.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Phoebe, args: Record<string, unknown> | undefined) => {
  return client.ref.taxonomy.versions.list();
};

export default { metadata, tool, handler };
