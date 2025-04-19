// Filename: app.config.ts
// basic configuration parameters for the application

import getIPv4 from '../utils/get-ipv4.js';

const PORT = 3000;

const config = {
  name: 'Visa Application System',
  abbreviation: '[VAS]',
  port: PORT,
  url: `http://${getIPv4()}:${PORT}`,
};

export default config;
