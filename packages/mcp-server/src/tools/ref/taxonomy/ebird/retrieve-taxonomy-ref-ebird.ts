// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'phoebe-ebird-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Phoebe from 'phoebe-ebird';

export const metadata: Metadata = {
  resource: 'ref.taxonomy.ebird',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ref/taxonomy/ebird',
};

export const tool: Tool = {
  name: 'retrieve_taxonomy_ref_ebird',
  description:
    'Get the taxonomy used by eBird. #### Notes Each entry in the taxonomy contains a species code for example, barswa for Barn Swallow. You can download the taxonomy for selected species using the *species* query parameter with a comma separating each code. Otherwise the full taxonomy is downloaded.',
  inputSchema: {
    type: 'object',
    properties: {
      cat: {
        type: 'string',
        description: 'Only fetch records from these taxonomic categories.',
      },
      fmt: {
        type: 'string',
        description: 'Fetch the records in CSV or JSON format.',
        enum: ['csv', 'json'],
      },
      locale: {
        type: 'string',
        description: 'Use this language for common names.',
      },
      species: {
        type: 'string',
        description: 'Only fetch records for these species.',
      },
      version: {
        type: 'string',
        description: 'Fetch a specific version of the taxonomy.',
      },
    },
  },
};

export const handler = async (client: Phoebe, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.ref.taxonomy.ebird.retrieve(body));
};

export default { metadata, tool, handler };
