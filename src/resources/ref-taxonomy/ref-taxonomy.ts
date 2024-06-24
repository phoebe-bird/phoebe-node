// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SppgroupAPI from './sppgroup';
import * as VersionsAPI from './versions';
import * as TaxaLocalesAPI from './taxa-locales/taxa-locales';

export class RefTaxonomy extends APIResource {
  taxaLocales: TaxaLocalesAPI.TaxaLocales = new TaxaLocalesAPI.TaxaLocales(this._client);
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);
  sppgroup: SppgroupAPI.Sppgroup = new SppgroupAPI.Sppgroup(this._client);
}

export namespace RefTaxonomy {
  export import TaxaLocales = TaxaLocalesAPI.TaxaLocales;
  export import Versions = VersionsAPI.Versions;
  export import VersionListResponse = VersionsAPI.VersionListResponse;
  export import Sppgroup = SppgroupAPI.Sppgroup;
  export import SppgroupRetrieveResponse = SppgroupAPI.SppgroupRetrieveResponse;
  export import SppgroupRetrieveParams = SppgroupAPI.SppgroupRetrieveParams;
}
