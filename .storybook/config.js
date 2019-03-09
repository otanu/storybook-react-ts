import { configure } from "@storybook/react";
import { setConsoleOptions } from "@storybook/addon-console";

setConsoleOptions({
  panelExclude: []
});

function loadStories() {
  require("../src/stories");
  const req = require.context("../src", true, /.stories.(tsx|js)$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
