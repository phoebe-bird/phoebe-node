// File generated from our OpenAPI spec by Stainless.

import * as Core from '@stainless-api/github-internal/core';
import { APIResource } from '@stainless-api/github-internal/resource';
import * as TeamsAPI from '@stainless-api/github-internal/resources/repos/teams';

export class Teams extends APIResource {
  /**
   * List repository teams
   */
  list(params: TeamListParams, options?: Core.RequestOptions): Core.APIPromise<TeamListResponse> {
    const { owner, repo, ...query } = params;
    return this._client.get(`/repos/${owner}/${repo}/teams`, { query, ...options });
  }
}

/**
 * Groups of organization members that gives permissions on specified repositories.
 */
export interface Team {
  id: number;

  description: string | null;

  html_url: string;

  members_url: string;

  name: string;

  node_id: string;

  /**
   * Groups of organization members that gives permissions on specified repositories.
   */
  parent: Team.Parent | null;

  permission: string;

  repositories_url: string;

  slug: string;

  url: string;

  permissions?: Team.Permissions;

  privacy?: string;
}

export namespace Team {
  /**
   * Groups of organization members that gives permissions on specified repositories.
   */
  export interface Parent {
    /**
     * Unique identifier of the team
     */
    id: number;

    /**
     * Description of the team
     */
    description: string | null;

    html_url: string;

    members_url: string;

    /**
     * Name of the team
     */
    name: string;

    node_id: string;

    /**
     * Permission that the team will have for its repositories
     */
    permission: string;

    repositories_url: string;

    slug: string;

    /**
     * URL for the team
     */
    url: string;

    /**
     * Distinguished Name (DN) that team maps to within LDAP environment
     */
    ldap_dn?: string;

    /**
     * The level of privacy this team should have
     */
    privacy?: string;
  }

  export interface Permissions {
    admin: boolean;

    maintain: boolean;

    pull: boolean;

    push: boolean;

    triage: boolean;
  }
}

export type TeamListResponse = Array<Team>;

export interface TeamListParams {
  /**
   * Path param: The account owner of the repository. The name is not case sensitive.
   */
  owner: string;

  /**
   * Path param: The name of the repository. The name is not case sensitive.
   */
  repo: string;

  /**
   * Query param: Page number of the results to fetch.
   */
  page?: number;

  /**
   * Query param: The number of results per page (max 100).
   */
  per_page?: number;
}

export namespace Teams {
  export import Team = TeamsAPI.Team;
  export import TeamListResponse = TeamsAPI.TeamListResponse;
  export import TeamListParams = TeamsAPI.TeamListParams;
}
