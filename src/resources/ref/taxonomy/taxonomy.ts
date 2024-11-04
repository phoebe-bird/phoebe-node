// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as EbirdAPI from './ebird';
import { Ebird, EbirdRetrieveParams, EbirdRetrieveResponse } from './ebird';
import * as FormsAPI from './forms';
import { FormListResponse, Forms } from './forms';
import * as LocalesAPI from './locales';
import { LocaleListParams, LocaleListResponse, Locales } from './locales';
import * as SpeciesGroupsAPI from './species-groups';
import { SpeciesGroupListParams, SpeciesGroupListResponse, SpeciesGroups } from './species-groups';
import * as VersionsAPI from './versions';
import { VersionListResponse, Versions } from './versions';

export class Taxonomy extends APIResource {
  ebird: EbirdAPI.Ebird = new EbirdAPI.Ebird(this._client);
  forms: FormsAPI.Forms = new FormsAPI.Forms(this._client);
  locales: LocalesAPI.Locales = new LocalesAPI.Locales(this._client);
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);
  speciesGroups: SpeciesGroupsAPI.SpeciesGroups = new SpeciesGroupsAPI.SpeciesGroups(this._client);
}

Taxonomy.Ebird = Ebird;
Taxonomy.Forms = Forms;
Taxonomy.Locales = Locales;
Taxonomy.Versions = Versions;
Taxonomy.SpeciesGroups = SpeciesGroups;

export declare namespace Taxonomy {
  export {
    Ebird as Ebird,
    type EbirdRetrieveResponse as EbirdRetrieveResponse,
    type EbirdRetrieveParams as EbirdRetrieveParams,
  };

  export { Forms as Forms, type FormListResponse as FormListResponse };

  export {
    Locales as Locales,
    type LocaleListResponse as LocaleListResponse,
    type LocaleListParams as LocaleListParams,
  };

  export { Versions as Versions, type VersionListResponse as VersionListResponse };

  export {
    SpeciesGroups as SpeciesGroups,
    type SpeciesGroupListResponse as SpeciesGroupListResponse,
    type SpeciesGroupListParams as SpeciesGroupListParams,
  };
}
