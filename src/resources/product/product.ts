// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ChecklistAPI from './checklist';
import * as SpeciesAPI from './species';
import * as Top100API from './top100';
import * as ChecklistsAPI from './checklists/checklists';
import * as ListsAPI from './lists/lists';

export class Product extends APIResource {
  lists: ListsAPI.Lists = new ListsAPI.Lists(this._client);
  top100: Top100API.Top100 = new Top100API.Top100(this._client);
  checklists: ChecklistsAPI.Checklists = new ChecklistsAPI.Checklists(this._client);
  species: SpeciesAPI.Species = new SpeciesAPI.Species(this._client);
  checklist: ChecklistAPI.Checklist = new ChecklistAPI.Checklist(this._client);
}

export namespace Product {
  export import Lists = ListsAPI.Lists;
  export import Top100 = Top100API.Top100;
  export import Top100ListParams = Top100API.Top100ListParams;
  export import Checklists = ChecklistsAPI.Checklists;
  export import ChecklistRetrieveParams = ChecklistsAPI.ChecklistRetrieveParams;
  export import Species = SpeciesAPI.Species;
  export import Checklist = ChecklistAPI.Checklist;
  export import ChecklistRetrieveResponse = ChecklistAPI.ChecklistRetrieveResponse;
}
