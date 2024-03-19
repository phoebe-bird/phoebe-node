// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import GitHub from '@stainless-api/github-internal';
import { Response } from 'node-fetch';

const github = new GitHub({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource contributors', () => {
  test('list: only required params', async () => {
    const responsePromise = github.repos.contributors.list({ owner: 'string', repo: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await github.repos.contributors.list({
      owner: 'string',
      repo: 'string',
      anon: 'string',
      page: 0,
      per_page: 0,
    });
  });
});
