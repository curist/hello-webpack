import m from 'mithril';
import B from 'app/broker';
import db from 'app/db';

import {syncLocalStorage} from 'app/utils';

import Home from 'app/views/Home';

function mountApplication() {
  m.mount(document.getElementById('app'), Home);
}

function init() {
  require('app/style.css');
  require('app/actions');

  syncLocalStorage();
  mountApplication();
}

window.onload = init;

if(module.hot) {
  module.hot.accept();
  init();
}

