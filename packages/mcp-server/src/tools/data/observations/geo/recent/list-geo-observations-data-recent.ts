// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'phoebe-ebird-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Phoebe from 'phoebe-ebird';

export const metadata: Metadata = {
  resource: 'data.observations.geo.recent',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/obs/geo/recent',
};

export const tool: Tool = {
  name: 'list_geo_observations_data_recent',
  description:
    'Get the list of recent observations (up to 30 days ago) of birds seen\nat locations within a radius of up to 50 kilometers, from a given set\nof coordinates. Results include only the most recent observation for each species in the region specified.',
  inputSchema: {
    type: 'object',
    properties: {
      lat: {
        type: 'number',
      },
      lng: {
        type: 'number',
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
      dist: {
        type: 'integer',
        description: 'The search radius from the given position, in kilometers.',
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
      sort: {
        type: 'string',
        description: 'Sort observations by taxonomy or by date, most recent first.',
        enum: ['date', 'species'],
      },
      sppLocale: {
        type: 'string',
        description: 'Use this language for species common names',
      },
    },
  },
};

export const handler = async (client: Phoebe, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.data.observations.geo.recent.list(body));
};

export default { metadata, tool, handler };
