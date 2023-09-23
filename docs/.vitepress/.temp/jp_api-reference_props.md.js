import { useSSRContext, resolveComponent, withCtx, createTextVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
const __pageData = JSON.parse('{"title":"{{jp.props}}","description":"","frontmatter":{},"headers":[],"relativePath":"jp/api-reference/props.md","filePath":"jp/api-reference/props.md"}');
const __default__ = { name: "jp/api-reference/props.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Badge = resolveComponent("Badge");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jp-props" tabindex="-1">${ssrInterpolate(void 0)} <a class="header-anchor" href="#jp-props" aria-label="Permalink to &quot;{{jp.props}}&quot;">​</a></h1><h2 id="title" tabindex="-1">title <a class="header-anchor" href="#title" aria-label="Permalink to &quot;title&quot;">​</a></h2><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">title</td><td style="${ssrRenderStyle({ "text-align": "left" })}">String</td><td style="${ssrRenderStyle({ "text-align": "left" })}">&quot;&quot;</td><td style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</td></tr></tbody></table><h2 id="is-slot-mode" tabindex="-1">is-slot-mode <a class="header-anchor" href="#is-slot-mode" aria-label="Permalink to &quot;is-slot-mode&quot;">​</a></h2><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">is-slot-mode</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Boolean</td><td style="${ssrRenderStyle({ "text-align": "left" })}">false</td><td style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</td></tr></tbody></table><h2 id="is-static-mode" tabindex="-1">is-static-mode <a class="header-anchor" href="#is-static-mode" aria-label="Permalink to &quot;is-static-mode&quot;">​</a></h2><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">is-static-mode</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Boolean</td><td style="${ssrRenderStyle({ "text-align": "left" })}">false</td><td style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</td></tr></tbody></table><h2 id="has-checkbox" tabindex="-1">has-checkbox <a class="header-anchor" href="#has-checkbox" aria-label="Permalink to &quot;has-checkbox&quot;">​</a></h2><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">has-checkbox</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Boolean</td><td style="${ssrRenderStyle({ "text-align": "left" })}">false</td><td style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</td></tr></tbody></table><h2 id="checked-return-type" tabindex="-1">checked-return-type <a class="header-anchor" href="#checked-return-type" aria-label="Permalink to &quot;checked-return-type&quot;">​</a></h2><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">checked-return-type</td><td style="${ssrRenderStyle({ "text-align": "left" })}">String</td><td style="${ssrRenderStyle({ "text-align": "left" })}">&quot;key&quot;</td><td style="${ssrRenderStyle({ "text-align": "left" })}">key/row</td><td style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</td></tr></tbody></table><h2 id="is-loading" tabindex="-1">is-loading <a class="header-anchor" href="#is-loading" aria-label="Permalink to &quot;is-loading&quot;">​</a></h2><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">is-loading</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Boolean</td><td style="${ssrRenderStyle({ "text-align": "left" })}">false</td><td style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</td></tr></tbody></table><h2 id="is-re-search" tabindex="-1">is-re-search <a class="header-anchor" href="#is-re-search" aria-label="Permalink to &quot;is-re-search&quot;">​</a></h2><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">is-re-search</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Boolean</td><td style="${ssrRenderStyle({ "text-align": "left" })}">false</td><td style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</td></tr></tbody></table><h2 id="is-fixed-first-column" tabindex="-1">is-fixed-first-column <a class="header-anchor" href="#is-fixed-first-column" aria-label="Permalink to &quot;is-fixed-first-column&quot;">​</a></h2><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">is-fixed-first-column</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Boolean</td><td style="${ssrRenderStyle({ "text-align": "left" })}">false</td><td style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</td></tr></tbody></table><h2 id="max-height" tabindex="-1">max-height <a class="header-anchor" href="#max-height" aria-label="Permalink to &quot;max-height&quot;">​</a></h2><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">max-height</td><td style="${ssrRenderStyle({ "text-align": "left" })}">String</td><td style="${ssrRenderStyle({ "text-align": "left" })}">&quot;auto&quot;</td><td style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}.</td></tr></tbody></table><h2 id="columns-jp-required" tabindex="-1">columns `);
      _push(ssrRenderComponent(_component_Badge, { type: "danger" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(void 0)}`);
          } else {
            return [
              createTextVNode(toDisplayString(void 0), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` <a class="header-anchor" href="#columns-jp-required" aria-label="Permalink to &quot;columns &lt;Badge type=&quot;danger&quot; &gt;{{jp.required}}&lt;/Badge&gt;&quot;">​</a></h2><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">columns</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Array</td><td style="${ssrRenderStyle({ "text-align": "left" })}">null</td><td style="${ssrRenderStyle({ "text-align": "left" })}">The columns</td></tr></tbody></table><details class="details custom-block"><summary>More Options</summary><p>Some more options related to columns.</p><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">isKey</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Boolean</td><td style="${ssrRenderStyle({ "text-align": "left" })}">false</td><td style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">label</td><td style="${ssrRenderStyle({ "text-align": "left" })}">String</td><td style="${ssrRenderStyle({ "text-align": "left" })}">null</td><td style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">field</td><td style="${ssrRenderStyle({ "text-align": "left" })}">String</td><td style="${ssrRenderStyle({ "text-align": "left" })}">null</td><td style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">width</td><td style="${ssrRenderStyle({ "text-align": "left" })}">String</td><td style="${ssrRenderStyle({ "text-align": "left" })}">null</td><td style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">sortable</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Boolean</td><td style="${ssrRenderStyle({ "text-align": "left" })}">false</td><td style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">display</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Function</td><td style="${ssrRenderStyle({ "text-align": "left" })}">null</td><td style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">headerClasses</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Array</td><td style="${ssrRenderStyle({ "text-align": "left" })}">null</td><td style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">columnClasses</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Array</td><td style="${ssrRenderStyle({ "text-align": "left" })}">null</td><td style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">headerStyles</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Object</td><td style="${ssrRenderStyle({ "text-align": "left" })}">null</td><td style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">columnStyles</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Object</td><td style="${ssrRenderStyle({ "text-align": "left" })}">null</td><td style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</td></tr></tbody></table></details><h2 id="rows-jp-required" tabindex="-1">rows `);
      _push(ssrRenderComponent(_component_Badge, { type: "danger" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(void 0)}`);
          } else {
            return [
              createTextVNode(toDisplayString(void 0), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` <a class="header-anchor" href="#rows-jp-required" aria-label="Permalink to &quot;rows &lt;Badge type=&quot;danger&quot; &gt;{{jp.required}}&lt;/Badge&gt;&quot;">​</a></h2><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">rows</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Array</td><td style="${ssrRenderStyle({ "text-align": "left" })}">null</td><td style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</td></tr></tbody></table><h2 id="rowclasses" tabindex="-1">rowClasses <a class="header-anchor" href="#rowclasses" aria-label="Permalink to &quot;rowClasses&quot;">​</a></h2><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">rowClasses</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Array/Function</td><td style="${ssrRenderStyle({ "text-align": "left" })}">null</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>&lt;tr/&gt;</code> ${ssrInterpolate(void 0)}</td></tr></tbody></table><h2 id="total-jp-required" tabindex="-1">total `);
      _push(ssrRenderComponent(_component_Badge, { type: "danger" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(void 0)}`);
          } else {
            return [
              createTextVNode(toDisplayString(void 0), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` <a class="header-anchor" href="#total-jp-required" aria-label="Permalink to &quot;total &lt;Badge type=&quot;danger&quot; &gt;{{jp.required}}&lt;/Badge&gt;&quot;">​</a></h2><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th><th style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">total</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Number</td><td style="${ssrRenderStyle({ "text-align": "left" })}">null</td><td style="${ssrRenderStyle({ "text-align": "left" })}">${ssrInterpolate(void 0)}</td></tr></tbody></table><h2 id="sortable-jp-required" tabindex="-1">sortable `);
      _push(ssrRenderComponent(_component_Badge, { type: "danger" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(void 0)}`);
          } else {
            return [
              createTextVNode(toDisplayString(void 0), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` <a class="header-anchor" href="#sortable-jp-required" aria-label="Permalink to &quot;sortable &lt;Badge type=&quot;danger&quot; &gt;{{jp.required}}&lt;/Badge&gt;&quot;">​</a></h2><table><thead><tr><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th><th>`);
      _push(ssrRenderComponent(_component_Badge, { type: "danger" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(void 0)}`);
          } else {
            return [
              createTextVNode(toDisplayString(void 0), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</th><th>${ssrInterpolate(void 0)}</th></tr></thead><tbody><tr><td>order</td><td>${ssrInterpolate(void 0)}</td><td>Yes</td><td>string</td></tr></tbody></table><details class="details custom-block"><summary>More Options</summary><p>Some more options related to sortable.</p><table><thead><tr><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th><th>`);
      _push(ssrRenderComponent(_component_Badge, { type: "danger" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(void 0)}`);
          } else {
            return [
              createTextVNode(toDisplayString(void 0), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</th><th>${ssrInterpolate(void 0)}</th></tr></thead><tbody><tr><td>order</td><td>${ssrInterpolate(void 0)}</td><td>Yes</td><td>string</td></tr><tr><td>sort</td><td>${ssrInterpolate(void 0)}</td><td>Yes</td><td>string</td></tr></tbody></table></details><h2 id="messages" tabindex="-1">messages <a class="header-anchor" href="#messages" aria-label="Permalink to &quot;messages&quot;">​</a></h2><table><thead><tr><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th></tr></thead><tbody><tr><td>messages</td><td>${ssrInterpolate(void 0)}</td><td>No</td><td>Object</td></tr></tbody></table><details class="details custom-block"><summary>More Options</summary><p>Some more options related to messages.</p><table><thead><tr><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th></tr></thead><tbody><tr><td>pagingInfo</td><td>${ssrInterpolate(void 0)}</td><td>No</td><td>string</td><td>&quot;Showing {0}-{1} of {2}&quot;</td></tr><tr><td>pageSizeChangeLabel</td><td>${ssrInterpolate(void 0)}</td><td>No</td><td>string</td><td>&quot;Row count:&quot;</td></tr><tr><td>gotoPageLabel</td><td>${ssrInterpolate(void 0)}</td><td>No</td><td>string</td><td>&quot;Go to page:&quot;</td></tr><tr><td>noDataAvailable</td><td>${ssrInterpolate(void 0)}</td><td>No</td><td>string</td><td>&quot;No data&quot;</td></tr></tbody></table></details><h2 id="is-hide-paging" tabindex="-1">is-hide-paging <a class="header-anchor" href="#is-hide-paging" aria-label="Permalink to &quot;is-hide-paging&quot;">​</a></h2><table><thead><tr><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th></tr></thead><tbody><tr><td>is-hide-paging</td><td>${ssrInterpolate(void 0)}</td><td>No</td><td>Boolean</td><td>false</td></tr></tbody></table><h2 id="page" tabindex="-1">page <a class="header-anchor" href="#page" aria-label="Permalink to &quot;page&quot;">​</a></h2><table><thead><tr><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th></tr></thead><tbody><tr><td>page</td><td>${ssrInterpolate(void 0)} the page number yourself, use this to change the page number.</td><td>No</td><td>Number</td><td>1</td></tr></tbody></table><h2 id="page-size" tabindex="-1">page-size <a class="header-anchor" href="#page-size" aria-label="Permalink to &quot;page-size&quot;">​</a></h2><table><thead><tr><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th></tr></thead><tbody><tr><td>page-size</td><td>${ssrInterpolate(void 0)} ${ssrInterpolate(void 0)}</td><td>No</td><td>Number</td><td>10</td></tr></tbody></table><h2 id="pageoptions" tabindex="-1">pageOptions <a class="header-anchor" href="#pageoptions" aria-label="Permalink to &quot;pageOptions&quot;">​</a></h2><table><thead><tr><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th></tr></thead><tbody><tr><td>pageOptions</td><td>${ssrInterpolate(void 0)}</td><td>No</td><td>Array</td><td><code>[ { value: 10, text: 10 }, { value: 25, text: 25 }, { value: 50, text: 50 } ]</code></td></tr></tbody></table><details class="details custom-block"><summary>More Options</summary><p>Some more options related to pageOptions.</p><table><thead><tr><th>Field</th><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th></tr></thead><tbody><tr><td>value</td><td>Yes</td><td>Number</td></tr><tr><td>text</td><td>Yes</td><td>Number | string</td></tr></tbody></table></details><h2 id="grouping-key" tabindex="-1">grouping-key <a class="header-anchor" href="#grouping-key" aria-label="Permalink to &quot;grouping-key&quot;">​</a></h2><table><thead><tr><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th></tr></thead><tbody><tr><td>grouping-key</td><td>${ssrInterpolate(void 0)}</td><td>No</td><td>string</td><td>null</td></tr></tbody></table><h2 id="has-group-toggle" tabindex="-1">has-group-toggle <a class="header-anchor" href="#has-group-toggle" aria-label="Permalink to &quot;has-group-toggle&quot;">​</a></h2><table><thead><tr><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th></tr></thead><tbody><tr><td>has-group-toggle</td><td>${ssrInterpolate(void 0)}</td><td>No</td><td>Boolean</td><td>false</td></tr></tbody></table><h2 id="grouping-display" tabindex="-1">grouping-display <a class="header-anchor" href="#grouping-display" aria-label="Permalink to &quot;grouping-display&quot;">​</a></h2><table><thead><tr><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th></tr></thead><tbody><tr><td>grouping-display</td><td>${ssrInterpolate(void 0)}</td><td>No</td><td>Function</td><td>null</td></tr></tbody></table><h2 id="start-collapsed" tabindex="-1">start-collapsed <a class="header-anchor" href="#start-collapsed" aria-label="Permalink to &quot;start-collapsed&quot;">​</a></h2><table><thead><tr><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th></tr></thead><tbody><tr><td>start-collapsed</td><td>${ssrInterpolate(void 0)}</td><td>No</td><td>Boolean</td><td>false</td></tr></tbody></table><h2 id="is-keep-collapsed" tabindex="-1">is-keep-collapsed <a class="header-anchor" href="#is-keep-collapsed" aria-label="Permalink to &quot;is-keep-collapsed&quot;">​</a></h2><table><thead><tr><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th><th>${ssrInterpolate(void 0)}</th></tr></thead><tbody><tr><td>is-keep-collapsed</td><td>${ssrInterpolate(void 0)}</td><td>No</td><td>Boolean</td><td>false</td></tr></tbody></table></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("jp/api-reference/props.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
