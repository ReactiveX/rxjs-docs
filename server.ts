import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import * as fs from 'fs';
import * as path from 'path';

import { enableProdMode } from '@angular/core';
import { renderModuleFactory } from '@angular/platform-server';

const {
  AppServerModuleNgFactory,
  LAZY_MODULE_MAP
} = require('./dist/server/main.bundle');
const {
  provideModuleMap
} = require('@nguniversal/module-map-ngfactory-loader');

enableProdMode();

renderModuleFactory(AppServerModuleNgFactory, {
  url: '/',
  document: fs.readFileSync('dist/browser/index.html', 'utf8'),
  extraProviders: [provideModuleMap(LAZY_MODULE_MAP)]
}).then(html => {
  fs.writeFileSync('dist/gen/index.html', html);
});
