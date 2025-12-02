// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'phoebe-ebird-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'phoebe-ebird-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Phoebe from 'phoebe-ebird';

export const metadata: Metadata = {
  resource: 'data.observations.recent.notable',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/obs/{regionCode}/recent/notable',
};

export const tool: Tool = {
  name: 'list_recent_observations_data_notable',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the list of recent, notable observations (up to 30 days ago) of birds seen in a country, region or location. Notable observations can be for locally or nationally rare species or are otherwise unusual, e.g. over-wintering birds in a species which is normally only a summer visitor.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/notable_list_response',\n  $defs: {\n    notable_list_response: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/observation'\n      }\n    },\n    observation: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'integer'\n        },\n        comName: {\n          type: 'string'\n        },\n        firstname: {\n          type: 'string'\n        },\n        howMany: {\n          type: 'integer'\n        },\n        lastname: {\n          type: 'string'\n        },\n        lat: {\n          type: 'number'\n        },\n        lng: {\n          type: 'number'\n        },\n        locationPrivate: {\n          type: 'boolean'\n        },\n        locId: {\n          type: 'string'\n        },\n        locName: {\n          type: 'string'\n        },\n        obsDt: {\n          type: 'string'\n        },\n        obsReviewed: {\n          type: 'boolean'\n        },\n        obsValid: {\n          type: 'boolean'\n        },\n        sciName: {\n          type: 'string'\n        },\n        speciesCode: {\n          type: 'string'\n        },\n        subId: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      regionCode: {
        type: 'string',
      },
      back: {
        type: 'integer',
        description: 'The number of days back to fetch observations.',
      },
      detail: {
        type: 'string',
        description: 'Include a subset (simple), or all (full), of the fields available.',
        enum: ['simple', 'full'],
      },
      hotspot: {
        type: 'boolean',
        description: 'Only fetch observations from hotspots',
      },
      maxResults: {
        type: 'integer',
        description: 'Only fetch this number of observations',
      },
      r: {
        type: 'array',
        description: 'Fetch observations from up to 10 locations',
        items: {
          type: 'string',
        },
      },
      sppLocale: {
        type: 'string',
        description: 'Use this language for species common names',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['regionCode'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Phoebe, args: Record<string, unknown> | undefined) => {
  const { regionCode, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.data.observations.recent.notable.list(regionCode, body)),
    );
  } catch (error) {
    if (error instanceof Phoebe.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
