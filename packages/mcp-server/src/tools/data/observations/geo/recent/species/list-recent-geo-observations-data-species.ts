// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import Phoebe from 'phoebe-ebird';

export const metadata: Metadata = {
  resource: 'data.observations.geo.recent.species',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/obs/geo/recent/{speciesCode}',
};

export const tool: Tool = {
  name: 'list_recent_geo_observations_data_species',
  description:
    'Get all observations of a species, seen up to 30 days ago, at any location within a radius of up to 50 kilometers, from a given set of coordinates. Results include only the most recent observation from each location in the region specified.\n\n#### URL parameters\n\n| Name | Description |\n| ---------- | ----------- |\n| speciesCode | The eBird species code. |\n#### Notes\nThe species code is typically a 6-letter code, e.g. horlar for Horned Lark. You can get complete set of species code from the GET eBird Taxonomy end-point.',
  inputSchema: {
    type: 'object',
    properties: {
      speciesCode: {
        type: 'string',
      },
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
      sppLocale: {
        type: 'string',
        description: 'Use this language for species common names',
      },
    },
  },
};

export const handler = (client: Phoebe, args: Record<string, unknown> | undefined) => {
  const { speciesCode, ...body } = args as any;
  return client.data.observations.geo.recent.species.list(speciesCode, body);
};

export default { metadata, tool, handler };
