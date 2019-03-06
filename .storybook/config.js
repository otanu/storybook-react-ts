import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories');
  const req = require.context("../src", true, /.stories.tsx$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
