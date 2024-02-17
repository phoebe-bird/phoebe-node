// File generated from our OpenAPI spec by Stainless.

import GitHub from '@stainless-api/github-internal';
import { Response } from 'node-fetch';

const github = new GitHub({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource repos', () => {
  test('list', async () => {
    const responsePromise = github.users.repos.list('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(github.users.repos.list('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      GitHub.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      github.users.repos.list(
        'string',
        { direction: 'asc', page: 0, per_page: 0, sort: 'created', type: 'all' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(GitHub.NotFoundError);
  });

  test('listStarred', async () => {
    const responsePromise = github.users.repos.listStarred('string');
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
    await expect(
      github.users.repos.listStarred('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(GitHub.NotFoundError);
  });

  test('listStarred: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      github.users.repos.listStarred(
        'string',
        { direction: 'asc', page: 0, per_page: 0, sort: 'created' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(GitHub.NotFoundError);
  });

  test('listWatched', async () => {
    const responsePromise = github.users.repos.listWatched('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listWatched: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      github.users.repos.listWatched('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(GitHub.NotFoundError);
  });

  test('listWatched: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      github.users.repos.listWatched(
        'string',
        { page: 0, per_page: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(GitHub.NotFoundError);
  });
});
