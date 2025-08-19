// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type ClientOptions } from 'phoebe-ebird/client';

import { IncomingMessage } from 'node:http';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
  const apiKey =
    Array.isArray(req.headers['x-ebirdapitoken']) ?
      req.headers['x-ebirdapitoken'][0]
    : req.headers['x-ebirdapitoken'];
  return { apiKey };
};
