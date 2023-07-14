
import root from '../root.svelte';
import { set_building } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	track_server_fetches: false,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width\" />\n\t\t" + head + "\n\t\t<style>\n\t\t\t/* http://meyerweb.com/eric/tools/css/reset/ \n\t\t\tv2.0 | 20110126\n\t\t\tLicense: none (public domain)\n\t\t\t*/\n\n\t\t\thtml, body, div, span, applet, object, iframe,\n\t\t\th1, h2, h3, h4, h5, h6, p, blockquote, pre,\n\t\t\ta, abbr, acronym, address, big, cite, code,\n\t\t\tdel, dfn, em, img, ins, kbd, q, s, samp,\n\t\t\tsmall, strike, strong, sub, sup, tt, var,\n\t\t\tb, u, i, center,\n\t\t\tdl, dt, dd, ol, ul, li,\n\t\t\tfieldset, form, label, legend,\n\t\t\ttable, caption, tbody, tfoot, thead, tr, th, td,\n\t\t\tarticle, aside, canvas, details, embed, \n\t\t\tfigure, figcaption, footer, header, hgroup, \n\t\t\tmenu, nav, output, ruby, section, summary,\n\t\t\ttime, mark, audio, video {\n\t\t\t\tmargin: 0;\n\t\t\t\tpadding: 0;\n\t\t\t\tborder: 0;\n\t\t\t\tfont-size: 100%;\n\t\t\t\tfont: inherit;\n\t\t\t\tvertical-align: baseline;\n\t\t\t\tfont-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\t\t\t}\n\t\t\t/* HTML5 display-role reset for older browsers */\n\t\t\tarticle, aside, details, figcaption, figure, \n\t\t\tfooter, header, hgroup, menu, nav, section {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\tbody {\n\t\t\t\tline-height: 1;\n\t\t\t}\n\t\t\tol, ul {\n\t\t\t\tlist-style: none;\n\t\t\t}\n\t\t\tblockquote, q {\n\t\t\t\tquotes: none;\n\t\t\t}\n\t\t\tblockquote:before, blockquote:after,\n\t\t\tq:before, q:after {\n\t\t\t\tcontent: '';\n\t\t\t\tcontent: none;\n\t\t\t}\n\t\t\ttable {\n\t\t\t\tborder-collapse: collapse;\n\t\t\t\tborder-spacing: 0;\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body data-sveltekit-preload-data=\"hover\">\n\t\t<div style=\"display: contents\">" + body + "</div>\n\t</body>\n</html>\n",
		error: ({ status, message }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n\t\t\t\t\tUbuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "1msn41g"
};

export function get_hooks() {
	return {};
}

export { set_assets, set_building, set_private_env, set_public_env };
