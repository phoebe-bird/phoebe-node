// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { IncomingMessage } from 'node:http';
import { ClientOptions } from 'phoebe-ebird';

export const parseAuthHeaders = (req: IncomingMessage, required?: boolean): Partial<ClientOptions> => {
  const apiKey =
    Array.isArray(req.headers['x-ebirdapitoken']) ?
      req.headers['x-ebirdapitoken'][0]
    : req.headers['x-ebirdapitoken'];
  return { apiKey };
};
