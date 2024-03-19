// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import GitHub from '@stainless-api/github-internal';
import { Response } from 'node-fetch';

const github = new GitHub({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pulls', () => {
  test('create: only required params', async () => {
    const responsePromise = github.repos.pulls.create({
      owner: 'string',
      repo: 'string',
      base: 'master',
      head: 'octocat:new-feature',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await github.repos.pulls.create({
      owner: 'string',
      repo: 'string',
      base: 'master',
      head: 'octocat:new-feature',
      body: 'Please pull these awesome changes in!',
      draft: true,
      issue: 1,
      maintainer_can_modify: true,
      title: 'Amazing new feature',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = github.repos.pulls.retrieve(0, { owner: 'string', repo: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await github.repos.pulls.retrieve(0, { owner: 'string', repo: 'string' });
  });

  test('update: only required params', async () => {
    const responsePromise = github.repos.pulls.update(0, { owner: 'string', repo: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await github.repos.pulls.update(0, {
      owner: 'string',
      repo: 'string',
      base: 'master',
      body: 'updated body',
      maintainer_can_modify: true,
      state: 'open',
      title: 'new title',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = github.repos.pulls.list({ owner: 'string', repo: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await github.repos.pulls.list({
      owner: 'string',
      repo: 'string',
      base: 'string',
      direction: 'asc',
      head: 'string',
      page: 0,
      per_page: 0,
      sort: 'created',
      state: 'open',
    });
  });
});
