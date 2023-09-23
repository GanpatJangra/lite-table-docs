import { useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { c as cn } from "./cn.19876bdb.js";
const __pageData = JSON.parse('{"title":"首页","description":"","frontmatter":{},"headers":[],"relativePath":"cn/getting-started.md","filePath":"cn/getting-started.md"}');
const __default__ = { name: "cn/getting-started.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="首页" tabindex="-1">首页 <a class="header-anchor" href="#首页" aria-label="Permalink to &quot;首页&quot;">​</a></h1><p>${ssrInterpolate(unref(cn).component_description)}</p><h2 id="cn-install" tabindex="-1">${ssrInterpolate(unref(cn).install)} <a class="header-anchor" href="#cn-install" aria-label="Permalink to &quot;{{cn.install}}&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-DecUM" id="tab-W9YBhNl" checked="checked"><label for="tab-W9YBhNl">npm</label><input type="radio" name="group-DecUM" id="tab-rfayhG-"><label for="tab-rfayhG-">yarn</label><input type="radio" name="group-DecUM" id="tab-qkH1ys5"><label for="tab-qkH1ys5">pnpm</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#62E884" })}">$</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}"> </span><span style="${ssrRenderStyle({ "color": "#E7EE98" })}">npm</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}"> </span><span style="${ssrRenderStyle({ "color": "#E7EE98" })}">install</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}"> </span><span style="${ssrRenderStyle({ "color": "#E7EE98" })}">vue3-table-lite</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}"> </span><span style="${ssrRenderStyle({ "color": "#BF9EEE" })}">--save</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#59873A" })}">$</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">npm</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">install</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">vue3-table-lite</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}">--save</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#62E884" })}">$</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}"> </span><span style="${ssrRenderStyle({ "color": "#E7EE98" })}">yarn</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}"> </span><span style="${ssrRenderStyle({ "color": "#E7EE98" })}">add</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}"> </span><span style="${ssrRenderStyle({ "color": "#E7EE98" })}">vue3-table-lite</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#59873A" })}">$</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">yarn</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">add</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">vue3-table-lite</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#62E884" })}">$</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}"> </span><span style="${ssrRenderStyle({ "color": "#E7EE98" })}">pnpm</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}"> </span><span style="${ssrRenderStyle({ "color": "#E7EE98" })}">add</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}"> </span><span style="${ssrRenderStyle({ "color": "#E7EE98" })}">vue3-table-lite</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#59873A" })}">$</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">pnpm</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">add</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">vue3-table-lite</span></span></code></pre></div></div></div><h2 id="cn-include" tabindex="-1">${ssrInterpolate(unref(cn).include)} <a class="header-anchor" href="#cn-include" aria-label="Permalink to &quot;{{cn.include}}&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-hKna9" id="tab-H_am2wd" checked="checked"><label for="tab-H_am2wd">JavaScript</label><input type="radio" name="group-hKna9" id="tab-aKbStEC"><label for="tab-aKbStEC">TypeScript</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#F286C4" })}">import</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}"> VueTableLite </span><span style="${ssrRenderStyle({ "color": "#F286C4" })}">from</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}"> </span><span style="${ssrRenderStyle({ "color": "#DEE492" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#E7EE98" })}">vue3-table-lite</span><span style="${ssrRenderStyle({ "color": "#DEE492" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#1E754F" })}">import</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}">VueTableLite</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#1E754F" })}">from</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#B56959" })}">vue3-table-lite</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}">;</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#F286C4" })}">import</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}"> VueTableLite </span><span style="${ssrRenderStyle({ "color": "#F286C4" })}">from</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}"> </span><span style="${ssrRenderStyle({ "color": "#DEE492" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#E7EE98" })}">vue3-table-lite/ts</span><span style="${ssrRenderStyle({ "color": "#DEE492" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#1E754F" })}">import</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}">VueTableLite</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#1E754F" })}">from</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#B56959" })}">vue3-table-lite/ts</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}">;</span></span></code></pre></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("cn/getting-started.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
