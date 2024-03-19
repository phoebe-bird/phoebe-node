// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import GitHub from '@stainless-api/github-internal';
import { Response } from 'node-fetch';

const github = new GitHub({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource issues', () => {
  test('create: only required params', async () => {
    const responsePromise = github.repos.issues.create({
      owner: 'string',
      repo: 'string',
      title: 'Found a bug',
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
    const response = await github.repos.issues.create({
      owner: 'string',
      repo: 'string',
      title: 'Found a bug',
      assignee: 'string',
      assignees: ['octocat'],
      body: "I'm having a problem with this.",
      labels: ['bug'],
      milestone: 1,
    });
  });
});
