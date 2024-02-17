// File generated from our OpenAPI spec by Stainless.

import GitHub from '@stainless-api/github-internal';
import { Response } from 'node-fetch';

const github = new GitHub({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource repos', () => {
  test('create: only required params', async () => {
    const responsePromise = github.repos.create({ name: 'Team Environment' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await github.repos.create({
      name: 'Team Environment',
      allow_auto_merge: false,
      allow_merge_commit: true,
      allow_rebase_merge: true,
      allow_squash_merge: true,
      auto_init: true,
      delete_branch_on_merge: false,
      description: 'string',
      gitignore_template: 'Haskell',
      has_downloads: true,
      has_issues: true,
      has_projects: true,
      has_wiki: true,
      homepage: 'string',
      is_template: true,
      license_template: 'mit',
      private: true,
      team_id: 0,
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = github.repos.retrieve({ owner: 'string', repo: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await github.repos.retrieve({ owner: 'string', repo: 'string' });
  });

  test('update: only required params', async () => {
    const responsePromise = github.repos.update({ owner: 'string', repo: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await github.repos.update({
      owner: 'string',
      repo: 'string',
      allow_auto_merge: true,
      allow_forking: true,
      allow_merge_commit: true,
      allow_rebase_merge: true,
      allow_squash_merge: true,
      allow_update_branch: true,
      archived: true,
      default_branch: 'string',
      delete_branch_on_merge: true,
      description: 'This is your first repository',
      has_issues: true,
      has_projects: true,
      has_wiki: true,
      homepage: 'https://github.com',
      is_template: true,
      name: 'Hello-World',
      private: true,
      security_and_analysis: {
        advanced_security: { status: 'string' },
        secret_scanning: { status: 'string' },
        secret_scanning_push_protection: { status: 'string' },
      },
      use_squash_pr_title_as_default: true,
      visibility: 'public',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = github.repos.delete({ owner: 'string', repo: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await github.repos.delete({ owner: 'string', repo: 'string' });
  });

  test('checkStarred: only required params', async () => {
    const responsePromise = github.repos.checkStarred({ owner: 'string', repo: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('checkStarred: required and optional params', async () => {
    const response = await github.repos.checkStarred({ owner: 'string', repo: 'string' });
  });

  test('createForOrg: only required params', async () => {
    const responsePromise = github.repos.createForOrg('string', { name: 'Hello-World' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createForOrg: required and optional params', async () => {
    const response = await github.repos.createForOrg('string', {
      name: 'Hello-World',
      allow_auto_merge: true,
      allow_merge_commit: true,
      allow_rebase_merge: true,
      allow_squash_merge: true,
      auto_init: true,
      delete_branch_on_merge: true,
      description: 'This is your first repository',
      gitignore_template: 'string',
      has_issues: true,
      has_projects: true,
      has_wiki: true,
      homepage: 'https://github.com',
      is_template: true,
      license_template: 'string',
      private: false,
      team_id: 0,
      use_squash_pr_title_as_default: true,
      visibility: 'public',
    });
  });

  test('createFromTemplate: only required params', async () => {
    const responsePromise = github.repos.createFromTemplate('string', 'string', { name: 'Hello-World' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createFromTemplate: required and optional params', async () => {
    const response = await github.repos.createFromTemplate('string', 'string', {
      name: 'Hello-World',
      description: 'This is your first repository',
      include_all_branches: false,
      owner: 'octocat',
      private: false,
    });
  });

  test('listForCurrentUser', async () => {
    const responsePromise = github.repos.listForCurrentUser();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listForCurrentUser: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(github.repos.listForCurrentUser({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      GitHub.NotFoundError,
    );
  });

  test('listForCurrentUser: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      github.repos.listForCurrentUser(
        {
          affiliation: 'string',
          before: '2019-12-27T18:11:19.117Z',
          direction: 'asc',
          page: 0,
          per_page: 0,
          since: '2019-12-27T18:11:19.117Z',
          sort: 'created',
          type: 'all',
          visibility: 'all',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(GitHub.NotFoundError);
  });

  test('listForOrg', async () => {
    const responsePromise = github.repos.listForOrg('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listForOrg: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(github.repos.listForOrg('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      GitHub.NotFoundError,
    );
  });

  test('listForOrg: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      github.repos.listForOrg(
        'string',
        { direction: 'asc', page: 0, per_page: 0, sort: 'created', type: 'all' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(GitHub.NotFoundError);
  });

  test('listForUser', async () => {
    const responsePromise = github.repos.listForUser('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listForUser: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(github.repos.listForUser('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      GitHub.NotFoundError,
    );
  });

  test('listForUser: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      github.repos.listForUser(
        'string',
        { direction: 'asc', page: 0, per_page: 0, sort: 'created', type: 'all' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(GitHub.NotFoundError);
  });

  test('listPublic', async () => {
    const responsePromise = github.repos.listPublic();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listPublic: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(github.repos.listPublic({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      GitHub.NotFoundError,
    );
  });

  test('listPublic: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      github.repos.listPublic({ since: 0, visibility: 'all' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(GitHub.NotFoundError);
  });

  test('listStarred', async () => {
    const responsePromise = github.repos.listStarred();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listStarred: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(github.repos.listStarred({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      GitHub.NotFoundError,
    );
  });

  test('listStarred: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      github.repos.listStarred(
        { direction: 'asc', page: 0, per_page: 0, sort: 'created' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(GitHub.NotFoundError);
  });

  test('star: only required params', async () => {
    const responsePromise = github.repos.star({ owner: 'string', repo: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('star: required and optional params', async () => {
    const response = await github.repos.star({ owner: 'string', repo: 'string' });
  });

  test('transfer: only required params', async () => {
    const responsePromise = github.repos.transfer({ owner: 'string', repo: 'string', new_owner: 'github' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('transfer: required and optional params', async () => {
    const response = await github.repos.transfer({
      owner: 'string',
      repo: 'string',
      new_owner: 'github',
      team_ids: [12, 345],
    });
  });

  test('unstar: only required params', async () => {
    const responsePromise = github.repos.unstar({ owner: 'string', repo: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unstar: required and optional params', async () => {
    const response = await github.repos.unstar({ owner: 'string', repo: 'string' });
  });
});
