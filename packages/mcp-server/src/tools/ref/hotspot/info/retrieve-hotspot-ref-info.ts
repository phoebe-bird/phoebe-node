// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'phoebe-ebird-mcp/filtering';
import { Metadata, asTextContentResult } from 'phoebe-ebird-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet information on the location of a hotspot. #### Notes This API call only works for hotspots. If you pass the location code for a private location or an invalid location code then an HTTP 410 (Gone) error is returned.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    countryCode: {\n      type: 'string'\n    },\n    countryName: {\n      type: 'string'\n    },\n    hierarchicalName: {\n      type: 'string'\n    },\n    isHotspot: {\n      type: 'boolean'\n    },\n    lat: {\n      type: 'number'\n    },\n    latitude: {\n      type: 'number'\n    },\n    lng: {\n      type: 'number'\n    },\n    locId: {\n      type: 'string'\n    },\n    locName: {\n      type: 'string'\n    },\n    longitude: {\n      type: 'number'\n    },\n    name: {\n      type: 'string'\n    },\n    subnational1Code: {\n      type: 'string'\n    },\n    subnational1Name: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      locId: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['locId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Phoebe, args: Record<string, unknown> | undefined) => {
  const { locId, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.ref.hotspot.info.retrieve(locId)));
};

export default { metadata, tool, handler };
