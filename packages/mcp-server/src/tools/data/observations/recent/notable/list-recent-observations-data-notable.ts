// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
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
    'Get the list of recent, notable observations (up to 30 days ago) of birds seen in a country, region or location. Notable observations can be for locally or nationally rare species or are otherwise unusual, e.g. over-wintering birds in a species which is normally only a summer visitor.',
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
    },
  },
};

export const handler = (client: Phoebe, args: Record<string, unknown> | undefined) => {
  const { regionCode, ...body } = args as any;
  return client.data.observations.recent.notable.list(regionCode, body);
};

export default { metadata, tool, handler };
