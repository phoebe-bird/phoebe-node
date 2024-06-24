// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ChecklistAPI from './checklist';
import * as SpeciesListAPI from './species-list';
import * as StatsAPI from './stats';
import * as Top100API from './top100';
import * as ListsAPI from './lists/lists';

export class Product extends APIResource {
  lists: ListsAPI.Lists = new ListsAPI.Lists(this._client);
  top100: Top100API.Top100 = new Top100API.Top100(this._client);
  stats: StatsAPI.Stats = new StatsAPI.Stats(this._client);
  speciesList: SpeciesListAPI.SpeciesList = new SpeciesListAPI.SpeciesList(this._client);
  checklist: ChecklistAPI.Checklist = new ChecklistAPI.Checklist(this._client);
}

export namespace Product {
  export import Lists = ListsAPI.Lists;
  export import ListRetrieveResponse = ListsAPI.ListRetrieveResponse;
  export import ListRetrieveParams = ListsAPI.ListRetrieveParams;
  export import Top100 = Top100API.Top100;
  export import Top100RetrieveParams = Top100API.Top100RetrieveParams;
  export import Stats = StatsAPI.Stats;
  export import SpeciesList = SpeciesListAPI.SpeciesList;
  export import Checklist = ChecklistAPI.Checklist;
  export import ChecklistViewResponse = ChecklistAPI.ChecklistViewResponse;
}
