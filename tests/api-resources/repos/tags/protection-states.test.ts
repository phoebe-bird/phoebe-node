// File generated from our OpenAPI spec by Stainless.

import GitHub from '@stainless-api/github-internal';
import { Response } from 'node-fetch';

const github = new GitHub({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource protectionStates', () => {
  // Mock server is returning incorrect data
  test.skip('create: only required params', async () => {
    const responsePromise = github.repos.tags.protectionStates.create({
      owner: 'string',
      repo: 'string',
      pattern: 'v1.*',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server is returning incorrect data
  test.skip('create: required and optional params', async () => {
    const response = await github.repos.tags.protectionStates.create({
      owner: 'string',
      repo: 'string',
      pattern: 'v1.*',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = github.repos.tags.protectionStates.delete(0, { owner: 'string', repo: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await github.repos.tags.protectionStates.delete(0, { owner: 'string', repo: 'string' });
  });
});
