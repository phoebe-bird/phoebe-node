// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type ClientOptions } from 'phoebe-ebird/client';

import { IncomingMessage } from 'node:http';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
  const apiKey =
    req.headers['x-ebirdapitoken'] instanceof Array ?
      req.headers['x-ebirdapitoken'][0]
    : req.headers['x-ebirdapitoken'];
  return { apiKey };
};
