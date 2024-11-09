import lume from "lume/mod.ts";
import base_path from "lume/plugins/base_path.ts";
import lightningcss from "lume/plugins/lightningcss.ts";
import inline from "lume/plugins/inline.ts";
import date from "lume/plugins/date.ts";
import favicon from "lume/plugins/favicon.ts";

import heroicons from "https://deno.land/x/lume_icon_plugins@v0.2.3/heroicons.ts";
import simpleicons from "https://deno.land/x/lume_icon_plugins@v0.2.3/simpleicons.ts";

const site = lume();

site.use(base_path());
site.use(lightningcss());
site.use(inline());
site.use(date());
site.use(favicon());
site.copy("img");
site.copy("fonts");
site.use(simpleicons());
site.use(heroicons({
  defaultType: "outline",
}));
site.copy("javascript");

export default site;
