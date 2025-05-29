// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Phoebe from 'phoebe-ebird';

export const metadata: Metadata = {
  resource: 'data.observations.recent',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/obs/{regionCode}/recent',
};

export const tool: Tool = {
  name: 'list_observations_data_recent',
  description:
    'Get the list of recent observations (up to 30 days ago) of birds seen\nin a country, state, county, or location. Results include only the most recent observation for each species in the region specified.',
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
      cat: {
        type: 'string',
        description: 'Only fetch observations from these taxonomic categories',
        enum: ['species', 'slash', 'issf', 'spuh', 'hybrid', 'domestic', 'form', 'intergrade'],
      },
      hotspot: {
        type: 'boolean',
        description: 'Only fetch observations from hotspots',
      },
      includeProvisional: {
        type: 'boolean',
        description: 'Include observations which have not yet been reviewed',
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

export const handler = (client: Phoebe, args: Record<string, unknown> | undefined) => {
  const { regionCode, ...body } = args as any;
  return client.data.observations.recent.list(regionCode, body);
};

export default { metadata, tool, handler };
