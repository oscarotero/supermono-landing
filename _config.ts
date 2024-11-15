import lume from "lume/mod.ts";
import base_path from "lume/plugins/base_path.ts";
import lightningcss from "lume/plugins/lightningcss.ts";
import inline from "lume/plugins/inline.ts";
import date from "lume/plugins/date.ts";
import favicon from "lume/plugins/favicon.ts";
import icons from "lume/plugins/icons.ts";
import metas from "lume/plugins/metas.ts";

const site = lume({
  location: new URL("https://supermo.no"),
});

site.use(base_path());
site.use(lightningcss());
site.use(inline());
site.use(date());
site.use(favicon());
site.use(icons());
site.use(metas());
site.copy("img");
site.copy("fonts");

export default site;
