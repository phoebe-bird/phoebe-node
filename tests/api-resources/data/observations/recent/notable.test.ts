// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Phoebe from 'phoebe-ebird';

const client = new Phoebe({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource notable', () => {
  test('list', async () => {
    const responsePromise = client.data.observations.recent.notable.list('regionCode');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.data.observations.recent.notable.list(
        'regionCode',
        { back: 1, detail: 'simple', hotspot: true, maxResults: 1, r: ['string'], sppLocale: 'sppLocale' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Phoebe.NotFoundError);
  });
});
