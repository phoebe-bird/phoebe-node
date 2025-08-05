// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type ClientOptions } from 'phoebe-ebird/client';

import { IncomingMessage } from 'node:http';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
  const apiKey =
    req.headers['X-eBirdApiToken'] instanceof Array ?
      req.headers['X-eBirdApiToken'][0]
    : req.headers['X-eBirdApiToken'];
  return { apiKey };
};
