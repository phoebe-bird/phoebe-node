// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ChecklistAPI from './checklist';
import { Checklist, ChecklistViewResponse } from './checklist';
import * as SpeciesListAPI from './species-list';
import { SpeciesList, SpeciesListListResponse } from './species-list';
import * as StatsAPI from './stats';
import { StatRetrieveResponse, Stats } from './stats';
import * as Top100API from './top100';
import { Top100, Top100RetrieveParams, Top100RetrieveResponse } from './top100';
import * as ListsAPI from './lists/lists';
import { ListRetrieveParams, ListRetrieveResponse, Lists } from './lists/lists';

export class Product extends APIResource {
  lists: ListsAPI.Lists = new ListsAPI.Lists(this._client);
  top100: Top100API.Top100 = new Top100API.Top100(this._client);
  stats: StatsAPI.Stats = new StatsAPI.Stats(this._client);
  speciesList: SpeciesListAPI.SpeciesList = new SpeciesListAPI.SpeciesList(this._client);
  checklist: ChecklistAPI.Checklist = new ChecklistAPI.Checklist(this._client);
}

Product.Lists = Lists;
Product.Top100 = Top100;
Product.Stats = Stats;
Product.SpeciesList = SpeciesList;
Product.Checklist = Checklist;

export declare namespace Product {
  export {
    Lists as Lists,
    type ListRetrieveResponse as ListRetrieveResponse,
    type ListRetrieveParams as ListRetrieveParams,
  };

  export {
    Top100 as Top100,
    type Top100RetrieveResponse as Top100RetrieveResponse,
    type Top100RetrieveParams as Top100RetrieveParams,
  };

  export { Stats as Stats, type StatRetrieveResponse as StatRetrieveResponse };

  export { SpeciesList as SpeciesList, type SpeciesListListResponse as SpeciesListListResponse };

  export { Checklist as Checklist, type ChecklistViewResponse as ChecklistViewResponse };
}
