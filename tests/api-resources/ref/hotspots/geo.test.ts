// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Phoebe from 'phoebe';
import { Response } from 'node-fetch';

const phoebe = new Phoebe({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource geo', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = phoebe.ref.hotspots.geo.retrieve({ lat: -90, lng: -180 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await phoebe.ref.hotspots.geo.retrieve({
      lat: -90,
      lng: -180,
      back: 1,
      dist: 0,
      fmt: 'csv',
    });
  });
});