// File generated from our OpenAPI spec by Stainless.

import GitHub from '@stainless-api/github-internal';
import { Response } from 'node-fetch';

const github = new GitHub({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('top level methods', () => {
  test('zen', async () => {
    const responsePromise = github.zen();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('zen: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(github.zen({ path: '/_stainless_unknown_path' })).rejects.toThrow(GitHub.NotFoundError);
  });
});