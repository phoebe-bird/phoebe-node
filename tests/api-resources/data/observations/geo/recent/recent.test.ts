// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Phoebe from 'phoebe-ebird';
import { Response } from 'node-fetch';

const client = new Phoebe({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource recent', () => {
  test('list: only required params', async () => {
    const responsePromise = client.data.observations.geo.recent.list({ lat: -90, lng: -180 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.data.observations.geo.recent.list({
      lat: -90,
      lng: -180,
      back: 1,
      cat: 'species',
      dist: 0,
      hotspot: true,
      includeProvisional: true,
      maxResults: 1,
      sort: 'date',
      sppLocale: 'sppLocale',
    });
  });
});
