// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Phoebe from 'phoebe-ebird';

export const metadata: Metadata = {
  resource: 'data.observations.nearest.geo_species',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/nearest/geo/recent/{speciesCode}',
};

export const tool: Tool = {
  name: 'list_nearest_observations_data_geo_species',
  description:
    'Find the nearest locations where a species has been seen recently. #### Notes The species code is typically a 6-letter code, e.g. barswa for Barn Swallow. You can get complete set of species code from the GET eBird Taxonomy end-point.',
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
        description: 'Only fetch observations within this distance of the provided lat/lng',
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
        description: 'Only fetch up to this number of observations',
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
  return client.data.observations.nearest.geoSpecies.list(speciesCode, body);
};

export default { metadata, tool, handler };
