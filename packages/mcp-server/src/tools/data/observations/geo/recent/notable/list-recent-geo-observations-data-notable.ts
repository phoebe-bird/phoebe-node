// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import Phoebe from 'phoebe-ebird';

export const metadata: Metadata = {
  resource: 'data.observations.geo.recent.notable',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/obs/geo/recent/notable',
};

export const tool: Tool = {
  name: 'list_recent_geo_observations_data_notable',
  description:
    'Get the list of notable observations (up to 30 days ago) of birds seen at locations within a radius of up to 50 kilometers, from a given set of coordinates. Notable observations can be for locally or nationally rare species or are otherwise unusual, for example over-wintering birds in a species which is normally only a summer visitor.',
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
      detail: {
        type: 'string',
        description: 'Include a subset (simple), or all (full), of the fields available.',
        enum: ['simple', 'full'],
      },
      dist: {
        type: 'integer',
        description: 'The search radius from the given position, in kilometers.',
      },
      hotspot: {
        type: 'boolean',
        description: 'Only fetch observations from hotspots',
      },
      maxResults: {
        type: 'integer',
        description: 'Only fetch this number of observations',
      },
      sppLocale: {
        type: 'string',
        description: 'Use this language for species common names',
      },
    },
  },
};

export const handler = (client: Phoebe, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.data.observations.geo.recent.notable.list(body);
};

export default { metadata, tool, handler };
