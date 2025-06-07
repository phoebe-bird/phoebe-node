// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'phoebe-ebird-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Phoebe from 'phoebe-ebird';

export const metadata: Metadata = {
  resource: 'ref.taxonomy.speciesGroups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ref/sppgroup/{speciesGrouping}',
};

export const tool: Tool = {
  name: 'list_taxonomy_ref_species_groups',
  description:
    'Get the list of species groups, e.g. terns, finches, etc. #### Notes Merlin puts like birds together, with Falcons next to Hawks, whereas eBird follows taxonomic order.',
  inputSchema: {
    type: 'object',
    properties: {
      speciesGrouping: {
        type: 'string',
        description: 'The order in which groups are returned.',
        enum: ['merlin', 'ebird'],
      },
      groupNameLocale: {
        type: 'string',
        description:
          'Locale for species group names. English names are returned for any non-listed locale or any non-translated group name.',
      },
    },
  },
};

export const handler = async (client: Phoebe, args: Record<string, unknown> | undefined) => {
  const { speciesGrouping, ...body } = args as any;
  return asTextContentResult(await client.ref.taxonomy.speciesGroups.list(speciesGrouping, body));
};

export default { metadata, tool, handler };
