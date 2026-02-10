import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.data.observations.recent.list',
    fullyQualifiedName: 'data.observations.recent.list',
    httpMethod: 'get',
    httpPath: '/data/obs/{regionCode}/recent',
  },
  {
    clientCallName: 'client.data.observations.recent.notable.list',
    fullyQualifiedName: 'data.observations.recent.notable.list',
    httpMethod: 'get',
    httpPath: '/data/obs/{regionCode}/recent/notable',
  },
  {
    clientCallName: 'client.data.observations.recent.species.retrieve',
    fullyQualifiedName: 'data.observations.recent.species.retrieve',
    httpMethod: 'get',
    httpPath: '/data/obs/{regionCode}/recent/{speciesCode}',
  },
  {
    clientCallName: 'client.data.observations.recent.historic.list',
    fullyQualifiedName: 'data.observations.recent.historic.list',
    httpMethod: 'get',
    httpPath: '/data/obs/{regionCode}/historic/{y}/{m}/{d}',
  },
  {
    clientCallName: 'client.data.observations.geo.recent.list',
    fullyQualifiedName: 'data.observations.geo.recent.list',
    httpMethod: 'get',
    httpPath: '/data/obs/geo/recent',
  },
  {
    clientCallName: 'client.data.observations.geo.recent.species.list',
    fullyQualifiedName: 'data.observations.geo.recent.species.list',
    httpMethod: 'get',
    httpPath: '/data/obs/geo/recent/{speciesCode}',
  },
  {
    clientCallName: 'client.data.observations.geo.recent.notable.list',
    fullyQualifiedName: 'data.observations.geo.recent.notable.list',
    httpMethod: 'get',
    httpPath: '/data/obs/geo/recent/notable',
  },
  {
    clientCallName: 'client.data.observations.nearest.geoSpecies.list',
    fullyQualifiedName: 'data.observations.nearest.geoSpecies.list',
    httpMethod: 'get',
    httpPath: '/data/nearest/geo/recent/{speciesCode}',
  },
  {
    clientCallName: 'client.product.lists.retrieve',
    fullyQualifiedName: 'product.lists.retrieve',
    httpMethod: 'get',
    httpPath: '/product/lists/{regionCode}',
  },
  {
    clientCallName: 'client.product.lists.historical.retrieve',
    fullyQualifiedName: 'product.lists.historical.retrieve',
    httpMethod: 'get',
    httpPath: '/product/lists/{regionCode}/{y}/{m}/{d}',
  },
  {
    clientCallName: 'client.product.top100.retrieve',
    fullyQualifiedName: 'product.top100.retrieve',
    httpMethod: 'get',
    httpPath: '/product/top100/{regionCode}/{y}/{m}/{d}',
  },
  {
    clientCallName: 'client.product.stats.retrieve',
    fullyQualifiedName: 'product.stats.retrieve',
    httpMethod: 'get',
    httpPath: '/product/stats/{regionCode}/{y}/{m}/{d}',
  },
  {
    clientCallName: 'client.product.speciesList.list',
    fullyQualifiedName: 'product.speciesList.list',
    httpMethod: 'get',
    httpPath: '/product/spplist/{regionCode}',
  },
  {
    clientCallName: 'client.product.checklist.view',
    fullyQualifiedName: 'product.checklist.view',
    httpMethod: 'get',
    httpPath: '/product/checklist/view/{subId}',
  },
  {
    clientCallName: 'client.ref.region.adjacent.list',
    fullyQualifiedName: 'ref.region.adjacent.list',
    httpMethod: 'get',
    httpPath: '/ref/adjacent/{regionCode}',
  },
  {
    clientCallName: 'client.ref.region.info.retrieve',
    fullyQualifiedName: 'ref.region.info.retrieve',
    httpMethod: 'get',
    httpPath: '/ref/region/info/{regionCode}',
  },
  {
    clientCallName: 'client.ref.region.list.list',
    fullyQualifiedName: 'ref.region.list.list',
    httpMethod: 'get',
    httpPath: '/ref/region/list/{regionType}/{parentRegionCode}',
  },
  {
    clientCallName: 'client.ref.hotspot.list',
    fullyQualifiedName: 'ref.hotspot.list',
    httpMethod: 'get',
    httpPath: '/ref/hotspot/{regionCode}',
  },
  {
    clientCallName: 'client.ref.hotspot.geo.retrieve',
    fullyQualifiedName: 'ref.hotspot.geo.retrieve',
    httpMethod: 'get',
    httpPath: '/ref/hotspot/geo',
  },
  {
    clientCallName: 'client.ref.hotspot.info.retrieve',
    fullyQualifiedName: 'ref.hotspot.info.retrieve',
    httpMethod: 'get',
    httpPath: '/ref/hotspot/info/{locId}',
  },
  {
    clientCallName: 'client.ref.taxonomy.ebird.retrieve',
    fullyQualifiedName: 'ref.taxonomy.ebird.retrieve',
    httpMethod: 'get',
    httpPath: '/ref/taxonomy/ebird',
  },
  {
    clientCallName: 'client.ref.taxonomy.forms.list',
    fullyQualifiedName: 'ref.taxonomy.forms.list',
    httpMethod: 'get',
    httpPath: '/ref/taxon/forms/{speciesCode}',
  },
  {
    clientCallName: 'client.ref.taxonomy.locales.list',
    fullyQualifiedName: 'ref.taxonomy.locales.list',
    httpMethod: 'get',
    httpPath: '/ref/taxa-locales/ebird',
  },
  {
    clientCallName: 'client.ref.taxonomy.versions.list',
    fullyQualifiedName: 'ref.taxonomy.versions.list',
    httpMethod: 'get',
    httpPath: '/ref/taxonomy/versions',
  },
  {
    clientCallName: 'client.ref.taxonomy.speciesGroups.list',
    fullyQualifiedName: 'ref.taxonomy.speciesGroups.list',
    httpMethod: 'get',
    httpPath: '/ref/sppgroup/{speciesGrouping}',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
