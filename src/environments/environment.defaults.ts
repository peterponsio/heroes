// environment.defaults.ts

import { DataSources } from "./data-source";

export const environment = {
  production: false,
  log: true,
  baseUrl: DataSources.DATA_URL,
  publicEndpoints: DataSources.publicEndpoints// contiene los public endpoint para controlar los header enviados
};
