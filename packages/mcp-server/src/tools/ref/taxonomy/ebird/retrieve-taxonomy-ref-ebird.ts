// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'phoebe-ebird-mcp/filtering';
import { Metadata, asTextContentResult } from 'phoebe-ebird-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the taxonomy used by eBird. #### Notes Each entry in the taxonomy contains a species code for example, barswa for Barn Swallow. You can download the taxonomy for selected species using the *species* query parameter with a comma separating each code. Otherwise the full taxonomy is downloaded.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'object',\n    properties: {\n      bandingCodes: {\n        type: 'array',\n        items: {\n          type: 'string'\n        }\n      },\n      category: {\n        type: 'string'\n      },\n      comName: {\n        type: 'string'\n      },\n      comNameCodes: {\n        type: 'array',\n        items: {\n          type: 'string'\n        }\n      },\n      familyCode: {\n        type: 'string'\n      },\n      familyComName: {\n        type: 'string'\n      },\n      familySciName: {\n        type: 'string'\n      },\n      order: {\n        type: 'string'\n      },\n      sciName: {\n        type: 'string'\n      },\n      sciNameCodes: {\n        type: 'array',\n        items: {\n          type: 'string'\n        }\n      },\n      speciesCode: {\n        type: 'string'\n      },\n      taxonOrder: {\n        type: 'integer'\n      }\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Phoebe, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.ref.taxonomy.ebird.retrieve(body)));
};

export default { metadata, tool, handler };
