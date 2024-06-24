// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as EbirdAPI from './ebird';
import * as FormsAPI from './forms';
import * as LocalesAPI from './locales';
import * as SpeciesGroupsAPI from './species-groups';
import * as VersionsAPI from './versions';

export class Taxonomy extends APIResource {
  ebird: EbirdAPI.Ebird = new EbirdAPI.Ebird(this._client);
  forms: FormsAPI.Forms = new FormsAPI.Forms(this._client);
  locales: LocalesAPI.Locales = new LocalesAPI.Locales(this._client);
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);
  speciesGroups: SpeciesGroupsAPI.SpeciesGroups = new SpeciesGroupsAPI.SpeciesGroups(this._client);
}

export namespace Taxonomy {
  export import Ebird = EbirdAPI.Ebird;
  export import EbirdRetrieveResponse = EbirdAPI.EbirdRetrieveResponse;
  export import EbirdRetrieveParams = EbirdAPI.EbirdRetrieveParams;
  export import Forms = FormsAPI.Forms;
  export import FormListResponse = FormsAPI.FormListResponse;
  export import Locales = LocalesAPI.Locales;
  export import LocaleListResponse = LocalesAPI.LocaleListResponse;
  export import LocaleListParams = LocalesAPI.LocaleListParams;
  export import Versions = VersionsAPI.Versions;
  export import VersionListResponse = VersionsAPI.VersionListResponse;
  export import SpeciesGroups = SpeciesGroupsAPI.SpeciesGroups;
  export import SpeciesGroupListResponse = SpeciesGroupsAPI.SpeciesGroupListResponse;
  export import SpeciesGroupListParams = SpeciesGroupsAPI.SpeciesGroupListParams;
}
