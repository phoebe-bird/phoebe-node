// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'phoebe-ebird-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Phoebe from 'phoebe-ebird';

export const metadata: Metadata = {
  resource: 'data.observations.recent.species',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/obs/{regionCode}/recent/{speciesCode}',
};

export const tool: Tool = {
  name: 'retrieve_recent_observations_data_species',
  description:
    'Get the recent observations, up to 30 days ago, of a particular species\nin a country, region or location. Results include only the most recent observation from each location in the region specified.\n#### Notes\n\nThe species code is typically a 6-letter code, e.g. cangoo for Canada Goose. You can\nget complete set of species code from the GET eBird Taxonomy end-point.\n\nWhen using the *r* query parameter set the *regionCode* URL parameter to an empty string.',
  inputSchema: {
    type: 'object',
    properties: {
      regionCode: {
        type: 'string',
      },
      speciesCode: {
        type: 'string',
      },
      back: {
        type: 'integer',
        description: 'The number of days back to fetch observations.',
      },
      hotspot: {
        type: 'boolean',
        description: 'Only fetch observations from hotspots',
      },
      includeProvisional: {
        type: 'boolean',
        description: 'Include observations which have not yet been reviewed.',
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
    },
  },
};

export const handler = async (client: Phoebe, args: Record<string, unknown> | undefined) => {
  const { speciesCode, ...body } = args as any;
  return asTextContentResult(await client.data.observations.recent.species.retrieve(speciesCode, body));
};

export default { metadata, tool, handler };
