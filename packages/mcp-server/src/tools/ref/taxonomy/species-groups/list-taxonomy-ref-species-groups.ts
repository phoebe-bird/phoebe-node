// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'phoebe-ebird-mcp/filtering';
import { Metadata, asTextContentResult } from 'phoebe-ebird-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the list of species groups, e.g. terns, finches, etc. #### Notes Merlin puts like birds together, with Falcons next to Hawks, whereas eBird follows taxonomic order.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'object',\n    properties: {\n      groupName: {\n        type: 'string'\n      },\n      groupOrder: {\n        type: 'integer'\n      },\n      taxonOrderBounds: {\n        type: 'array',\n        items: {\n          type: 'array',\n          items: {\n            type: 'number'\n          }\n        }\n      }\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['speciesGrouping'],
  },
};

export const handler = async (client: Phoebe, args: Record<string, unknown> | undefined) => {
  const { speciesGrouping, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.ref.taxonomy.speciesGroups.list(speciesGrouping, body)),
  );
};

export default { metadata, tool, handler };
