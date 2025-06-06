// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'phoebe-ebird-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Phoebe from 'phoebe-ebird';

export const metadata: Metadata = {
  resource: 'ref.region.info',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ref/region/info/{regionCode}',
};

export const tool: Tool = {
  name: 'retrieve_region_ref_info',
  description:
    'Get information on the name and geographical area covered by a region.\n#### Notes\n\nTaking Madison County, New York, USA (location code US-NY-053) as an example\nthe various values for the regionNameFormat query parameter work as follows:\n\n| Value | Description | Result |\n| ------| ----------- | ------ |\n| detailed | return a detailed description | Madison County, New York, US |\n| detailednoqual | return the name to the subnational1 level | Madison, New York |\n| full | return the full description | Madison, New York, United States |\n| namequal | return the qualified name | Madison County |\n| nameonly | return only the name of the region | Madison |\n| revdetailed | return the detailed description in reverse | US, New York, Madison County |',
  inputSchema: {
    type: 'object',
    properties: {
      regionCode: {
        type: 'string',
      },
      delim: {
        type: 'string',
        description: 'The characters used to separate elements in the name.',
      },
      regionNameFormat: {
        type: 'string',
        description: 'Control how the name is displayed.',
        enum: ['detailed', 'detailednoqual', 'full', 'namequal', 'nameonly', 'revdetailed'],
      },
    },
  },
};

export const handler = async (client: Phoebe, args: Record<string, unknown> | undefined) => {
  const { regionCode, ...body } = args as any;
  return asTextContentResult(await client.ref.region.info.retrieve(regionCode, body));
};

export default { metadata, tool, handler };
