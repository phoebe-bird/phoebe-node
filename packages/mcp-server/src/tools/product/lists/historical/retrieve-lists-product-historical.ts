// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'phoebe-ebird-mcp/filtering';
import { Metadata, asTextContentResult } from 'phoebe-ebird-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Phoebe from 'phoebe-ebird';

export const metadata: Metadata = {
  resource: 'product.lists.historical',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/product/lists/{regionCode}/{y}/{m}/{d}',
};

export const tool: Tool = {
  name: 'retrieve_lists_product_historical',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet information on the checklists submitted on a given date for a country or region.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'object',\n    properties: {\n      allObsReported: {\n        type: 'boolean'\n      },\n      checklistId: {\n        type: 'string'\n      },\n      creationDt: {\n        type: 'string'\n      },\n      durationHrs: {\n        type: 'number'\n      },\n      isoObsDate: {\n        type: 'string'\n      },\n      lastEditedDt: {\n        type: 'string'\n      },\n      loc: {\n        type: 'object',\n        properties: {\n          countryCode: {\n            type: 'string'\n          },\n          countryName: {\n            type: 'string'\n          },\n          hierarchicalName: {\n            type: 'string'\n          },\n          isHotspot: {\n            type: 'boolean'\n          },\n          lat: {\n            type: 'number'\n          },\n          latitude: {\n            type: 'number'\n          },\n          lng: {\n            type: 'number'\n          },\n          locId: {\n            type: 'string'\n          },\n          locName: {\n            type: 'string'\n          },\n          longitude: {\n            type: 'number'\n          },\n          name: {\n            type: 'string'\n          },\n          subnational1Code: {\n            type: 'string'\n          },\n          subnational1Name: {\n            type: 'string'\n          }\n        }\n      },\n      locId: {\n        type: 'string'\n      },\n      numObservers: {\n        type: 'integer'\n      },\n      numSpecies: {\n        type: 'integer'\n      },\n      obs: {\n        type: 'array',\n        items: {\n          type: 'object',\n          properties: {\n            obsAux: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  auxCode: {\n                    type: 'string'\n                  },\n                  entryMethodCode: {\n                    type: 'string'\n                  },\n                  fieldName: {\n                    type: 'string'\n                  },\n                  obsId: {\n                    type: 'string'\n                  },\n                  speciesCode: {\n                    type: 'string'\n                  },\n                  subId: {\n                    type: 'string'\n                  },\n                  value: {\n                    type: 'string'\n                  }\n                }\n              }\n            },\n            obsDt: {\n              type: 'string'\n            },\n            obsId: {\n              type: 'string'\n            },\n            speciesCode: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      obsDt: {\n        type: 'string'\n      },\n      obsTime: {\n        type: 'string'\n      },\n      obsTimeValid: {\n        type: 'boolean'\n      },\n      projId: {\n        type: 'string'\n      },\n      protocolId: {\n        type: 'string'\n      },\n      subId: {\n        type: 'string'\n      },\n      submissionMethodCode: {\n        type: 'string'\n      },\n      subnational1Code: {\n        type: 'string'\n      },\n      userDisplayName: {\n        type: 'string'\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      regionCode: {
        type: 'string',
      },
      y: {
        type: 'integer',
      },
      m: {
        type: 'integer',
      },
      d: {
        type: 'integer',
      },
      maxResults: {
        type: 'integer',
        description: 'Only fetch this number of checklists.',
      },
      sortKey: {
        type: 'string',
        description: 'Order the results by the date of the checklist or by the date it was submitted.',
        enum: ['obs_dt', 'creation_dt'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['regionCode', 'y', 'm', 'd'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Phoebe, args: Record<string, unknown> | undefined) => {
  const { d, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.product.lists.historical.retrieve(d, body)),
  );
};

export default { metadata, tool, handler };
