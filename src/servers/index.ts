import { mande, type MandeInstance } from 'mande';
import { config } from '../configs';

export const useServer = (name: string): MandeInstance => mande(
  config.server + name, { headers: { Authorization: config.token }}
);