// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Phoebe from 'phoebe-ebird';

export const metadata: Metadata = {
  resource: 'data.observations.recent.historic',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_recent_observations_data_historic',
  description:
    'Get a list of all taxa seen in a country, region or location on a specific date, with the specific observations determined by the "rank" parameter (defaults to latest observation on the date).\n#### Notes Responses may be cached for 30 minutes',
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
      cat: {
        type: 'string',
        description: 'Only fetch observations from these taxonomic categories',
        enum: ['species', 'slash', 'issf', 'spuh', 'hybrid', 'domestic', 'form', 'intergrade'],
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
        description: 'Fetch observations from up to 50 locations',
        items: {
          type: 'string',
        },
      },
      rank: {
        type: 'string',
        description: 'Include latest observation of the day, or the first added',
        enum: ['mrec', 'create'],
      },
      sppLocale: {
        type: 'string',
        description: 'Use this language for species common names',
      },
    },
  },
};

export const handler = (client: Phoebe, args: Record<string, unknown> | undefined) => {
  const { d, ...body } = args as any;
  return client.data.observations.recent.historic.list(d, body);
};

export default { metadata, tool, handler };
