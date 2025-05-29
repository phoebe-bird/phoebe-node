// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Phoebe from 'phoebe-ebird';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

import list_observations_data_recent from './data/observations/recent/list-observations-data-recent';
import list_recent_observations_data_notable from './data/observations/recent/notable/list-recent-observations-data-notable';
import retrieve_recent_observations_data_species from './data/observations/recent/species/retrieve-recent-observations-data-species';
import list_recent_observations_data_historic from './data/observations/recent/historic/list-recent-observations-data-historic';
import list_geo_observations_data_recent from './data/observations/geo/recent/list-geo-observations-data-recent';
import list_recent_geo_observations_data_species from './data/observations/geo/recent/species/list-recent-geo-observations-data-species';
import list_recent_geo_observations_data_notable from './data/observations/geo/recent/notable/list-recent-geo-observations-data-notable';
import list_nearest_observations_data_geo_species from './data/observations/nearest/geo-species/list-nearest-observations-data-geo-species';
import retrieve_product_lists from './product/lists/retrieve-product-lists';
import retrieve_lists_product_historical from './product/lists/historical/retrieve-lists-product-historical';
import retrieve_product_top100 from './product/top100/retrieve-product-top100';
import retrieve_product_stats from './product/stats/retrieve-product-stats';
import list_product_species_list from './product/species-list/list-product-species-list';
import view_product_checklist from './product/checklist/view-product-checklist';
import list_region_ref_adjacent from './ref/region/adjacent/list-region-ref-adjacent';
import retrieve_region_ref_info from './ref/region/info/retrieve-region-ref-info';
import list_region_ref_list from './ref/region/list/list-region-ref-list';
import list_ref_hotspot from './ref/hotspot/list-ref-hotspot';
import retrieve_hotspot_ref_geo from './ref/hotspot/geo/retrieve-hotspot-ref-geo';
import retrieve_hotspot_ref_info from './ref/hotspot/info/retrieve-hotspot-ref-info';
import retrieve_taxonomy_ref_ebird from './ref/taxonomy/ebird/retrieve-taxonomy-ref-ebird';
import list_taxonomy_ref_forms from './ref/taxonomy/forms/list-taxonomy-ref-forms';
import list_taxonomy_ref_locales from './ref/taxonomy/locales/list-taxonomy-ref-locales';
import list_taxonomy_ref_versions from './ref/taxonomy/versions/list-taxonomy-ref-versions';
import list_taxonomy_ref_species_groups from './ref/taxonomy/species-groups/list-taxonomy-ref-species-groups';

export type HandlerFunction = (client: Phoebe, args: Record<string, unknown> | undefined) => Promise<any>;

export type Metadata = {
  resource: string;
  operation: 'read' | 'write';
  tags: string[];

  httpMethod?: string;
  httpPath?: string;
  operationId?: string;
};

export type Endpoint = {
  metadata: Metadata;
  tool: Tool;
  handler: HandlerFunction;
};

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(list_observations_data_recent);
addEndpoint(list_recent_observations_data_notable);
addEndpoint(retrieve_recent_observations_data_species);
addEndpoint(list_recent_observations_data_historic);
addEndpoint(list_geo_observations_data_recent);
addEndpoint(list_recent_geo_observations_data_species);
addEndpoint(list_recent_geo_observations_data_notable);
addEndpoint(list_nearest_observations_data_geo_species);
addEndpoint(retrieve_product_lists);
addEndpoint(retrieve_lists_product_historical);
addEndpoint(retrieve_product_top100);
addEndpoint(retrieve_product_stats);
addEndpoint(list_product_species_list);
addEndpoint(view_product_checklist);
addEndpoint(list_region_ref_adjacent);
addEndpoint(retrieve_region_ref_info);
addEndpoint(list_region_ref_list);
addEndpoint(list_ref_hotspot);
addEndpoint(retrieve_hotspot_ref_geo);
addEndpoint(retrieve_hotspot_ref_info);
addEndpoint(retrieve_taxonomy_ref_ebird);
addEndpoint(list_taxonomy_ref_forms);
addEndpoint(list_taxonomy_ref_locales);
addEndpoint(list_taxonomy_ref_versions);
addEndpoint(list_taxonomy_ref_species_groups);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  if (unmatchedFilters.size > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${[...unmatchedFilters]
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
