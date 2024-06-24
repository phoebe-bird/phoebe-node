// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Phoebe from 'phoebe';
import { Response } from 'node-fetch';

const phoebe = new Phoebe({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource ebird', () => {
  test('list', async () => {
    const responsePromise = phoebe.refTaxonomy.taxaLocales.ebird.list();
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
    await expect(
      phoebe.refTaxonomy.taxaLocales.ebird.list({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Phoebe.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      phoebe.refTaxonomy.taxaLocales.ebird.list(
        { 'Accept-Language': 'en' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Phoebe.NotFoundError);
  });
});
