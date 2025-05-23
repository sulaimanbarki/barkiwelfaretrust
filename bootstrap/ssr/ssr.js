import { Head, Link, router, createInertiaApp } from "@inertiajs/vue3";
import { useSSRContext, mergeProps, resolveComponent, withCtx, createTextVNode, createVNode, openBlock, createBlock, toDisplayString, renderSlot, withDirectives, vModelSelect, createCommentVNode, Fragment, renderList, nextTick, vModelText, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderSlot, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderTeleport, ssrRenderStyle, ssrRenderClass, ssrRenderList, ssrLooseEqual } from "vue/server-renderer";
import { v4 } from "uuid";
import { createPopper } from "@popperjs/core";
import pickBy from "lodash/pickBy.js";
import throttle from "lodash/throttle.js";
import mapValues from "lodash/mapValues.js";
import axios from "axios";
import "jspdf";
import "jspdf-autotable";
import { renderToString } from "@vue/server-renderer";
import createServer from "@inertiajs/vue3/server";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$13 = {};
function _sfc_ssrRender$13(_ctx, _push, _parent, _attrs) {
  _push(`<img${ssrRenderAttrs(mergeProps({
    src: "/logo.png",
    alt: "Logo"
  }, _attrs))}>`);
}
const _sfc_setup$13 = _sfc_main$13.setup;
_sfc_main$13.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Logo.vue");
  return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
const Logo = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["ssrRender", _sfc_ssrRender$13]]);
const _sfc_main$12 = {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default() {
        return `text-input-${v4()}`;
      }
    },
    type: {
      type: String,
      default: "text"
    },
    error: String,
    label: String,
    modelValue: String
  },
  emits: ["update:modelValue"],
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    select() {
      this.$refs.input.select();
    },
    setSelectionRange(start, end) {
      this.$refs.input.setSelectionRange(start, end);
    }
  }
};
function _sfc_ssrRender$12(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.$attrs.class
  }, _attrs))}>`);
  if ($props.label) {
    _push(`<label class="form-label"${ssrRenderAttr("for", $props.id)}>${ssrInterpolate($props.label)}:</label>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<input${ssrRenderAttrs(mergeProps({
    id: $props.id,
    ref: "input"
  }, { ..._ctx.$attrs, class: null }, {
    class: ["form-input", { error: $props.error }],
    type: $props.type,
    value: $props.modelValue
  }))}>`);
  if ($props.error) {
    _push(`<div class="form-error">${ssrInterpolate($props.error)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/TextInput.vue");
  return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
const TextInput = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["ssrRender", _sfc_ssrRender$12]]);
const _sfc_main$11 = {
  props: {
    loading: Boolean
  }
};
function _sfc_ssrRender$11(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    disabled: $props.loading,
    class: "flex items-center"
  }, _attrs))}>`);
  if ($props.loading) {
    _push(`<div class="btn-spinner mr-2"></div>`);
  } else {
    _push(`<!---->`);
  }
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/LoadingButton.vue");
  return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
const LoadingButton = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["ssrRender", _sfc_ssrRender$11]]);
const _sfc_main$10 = {
  components: {
    Head,
    LoadingButton,
    Logo,
    TextInput
  },
  data() {
    return {
      form: this.$inertia.form({
        email: "admin@admin.com",
        password: "admin@admin.com",
        remember: false
      })
    };
  },
  methods: {
    login() {
      this.form.post("/login");
    }
  }
};
function _sfc_ssrRender$10(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_logo = resolveComponent("logo");
  const _component_text_input = resolveComponent("text-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Login" }, null, _parent));
  _push(`<div class="flex items-center justify-center p-6 min-h-screen bg-indigo-800"><div class="w-full max-w-md">`);
  _push(ssrRenderComponent(_component_logo, {
    class: "block mx-auto fill-white",
    height: "20",
    width: "150"
  }, null, _parent));
  _push(`<form class="mt-8 bg-white rounded-lg shadow-xl overflow-hidden"><div class="px-10 py-12"><h1 class="text-center text-3xl font-bold">Welcome Back!</h1><div class="mt-6 mx-auto w-24 border-b-2"></div>`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    error: $data.form.errors.email,
    class: "mt-10",
    label: "Email",
    type: "email",
    autofocus: "",
    autocapitalize: "off"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.password,
    "onUpdate:modelValue": ($event) => $data.form.password = $event,
    error: $data.form.errors.password,
    class: "mt-6",
    label: "Password",
    type: "password"
  }, null, _parent));
  _push(`<label class="flex items-center mt-6 select-none" for="remember"><input id="remember"${ssrIncludeBooleanAttr(Array.isArray($data.form.remember) ? ssrLooseContain($data.form.remember, null) : $data.form.remember) ? " checked" : ""} class="mr-1" type="checkbox"><span class="text-sm">Remember Me</span></label></div><div class="flex px-10 py-4 bg-gray-100 border-t border-gray-100">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo ml-auto",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Login`);
      } else {
        return [
          createTextVNode("Login")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div><!--]-->`);
}
const _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["ssrRender", _sfc_ssrRender$10]]);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Login
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$$ = {
  props: {
    name: String
  }
};
function _sfc_ssrRender$$(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.name === "cheveron-down") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>`);
  } else if ($props.name === "cheveron-right") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><polygon points="12.95 10.707 13.657 10 8 4.343 6.586 5.757 10.828 10 6.586 14.243 8 15.657 12.95 10.707"></polygon></svg>`);
  } else if ($props.name === "dashboard") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"></path></svg>`);
  } else if ($props.name === "office") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      width: "100",
      height: "100",
      viewBox: "0 0 100 100"
    }, _attrs))}><path fill-rule="evenodd" d="M7 0h86v100H57.108V88.418H42.892V100H7V0zm9 64h11v15H16V64zm57 0h11v15H73V64zm-19 0h11v15H54V64zm-19 0h11v15H35V64zM16 37h11v15H16V37zm57 0h11v15H73V37zm-19 0h11v15H54V37zm-19 0h11v15H35V37zM16 11h11v15H16V11zm57 0h11v15H73V11zm-19 0h11v15H54V11zm-19 0h11v15H35V11z"></path></svg>`);
  } else if ($props.name === "printer") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M4 16H0V6h20v10h-4v4H4v-4zm2-4v6h8v-6H6zM4 0h12v5H4V0zM2 8v2h2V8H2zm4 0v2h2V8H6z"></path></svg>`);
  } else if ($props.name === "trash") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"></path></svg>`);
  } else if ($props.name === "users") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z"></path></svg>`);
  } else if ($props.name === "heart") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M10 18s-8-4.5-8-10a4 4 0 0 1 8-2.5A4 4 0 0 1 18 8c0 5.5-8 10-8 10z"></path></svg>`);
  } else if ($props.name === "shield") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M10 0l6 4v6c0 5.25-4.5 10-6 10S4 11.25 4 6V4l6-4zm0 2.5L5.5 5v1.5c0 3.25 2.75 7.25 4.5 7.25s4.5-4 4.5-7.25V5L10 2.5z"></path></svg>`);
  } else if ($props.name === "flag") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M2 2h2v16H2V2zm4 0h12v2H6V2zm0 4h12v2H6V6zm0 4h12v2H6v-2zm0 4h12v2H6v-2z"></path></svg>`);
  } else if ($props.name === "money") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M10 0a10 10 0 1 1 0 20A10 10 0 0 1 10 0zm-2.5 7.5h5v5h-5v-5zm2.5-2.5a2.5 2.5 0 1 1-.001-4.999A2.5 2.5 0 0 1 10 5zM7.5 12h5v2.5h-5V12z"></path></svg>`);
  } else if ($props.name === "clipboard-list") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M4 0h12v2H4V0zm0 4h12v2H4V4zm0 4h12v2H4V8zm0 4h12v2H4v-2zm0 4h12v2H4v-2zM2 2h1.5v16H2V2zm3.5 0H7v16H5.5V2z"></path></svg>`);
  } else if ($props.name === "credit-card") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M2 4h16v12H2V4zm0-2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm3.5 6h9v1.5h-9V8zm0-3h9v1.5h-9V5z"></path></svg>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$$ = _sfc_main$$.setup;
_sfc_main$$.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Icon.vue");
  return _sfc_setup$$ ? _sfc_setup$$(props, ctx) : void 0;
};
const Icon = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["ssrRender", _sfc_ssrRender$$]]);
const _sfc_main$_ = {
  props: {
    placement: {
      type: String,
      default: "bottom-end"
    },
    autoClose: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      show: false
    };
  },
  watch: {
    show(show) {
      if (show) {
        this.$nextTick(() => {
          this.popper = createPopper(this.$el, this.$refs.dropdown, {
            placement: this.placement,
            modifiers: [
              {
                name: "preventOverflow",
                options: {
                  altBoundary: true
                }
              }
            ]
          });
        });
      } else if (this.popper) {
        setTimeout(() => this.popper.destroy(), 100);
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.show = false;
      }
    });
  }
};
function _sfc_ssrRender$_(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({ type: "button" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  if ($data.show) {
    ssrRenderTeleport(_push, (_push2) => {
      _push2(`<div><div style="${ssrRenderStyle({ "position": "fixed", "top": "0", "right": "0", "left": "0", "bottom": "0", "z-index": "99998", "background": "black", "opacity": "0.2" })}"></div><div style="${ssrRenderStyle({ "position": "absolute", "z-index": "99999" })}">`);
      ssrRenderSlot(_ctx.$slots, "dropdown", {}, null, _push2, _parent);
      _push2(`</div></div>`);
    }, "#dropdown", false, _parent);
  } else {
    _push(`<!---->`);
  }
  _push(`</button>`);
}
const _sfc_setup$_ = _sfc_main$_.setup;
_sfc_main$_.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Dropdown.vue");
  return _sfc_setup$_ ? _sfc_setup$_(props, ctx) : void 0;
};
const Dropdown = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["ssrRender", _sfc_ssrRender$_]]);
const _sfc_main$Z = {
  components: {
    Icon,
    Link
  },
  methods: {
    isUrl(...urls) {
      let currentUrl = this.$page.url.substr(1);
      if (urls[0] === "") {
        return currentUrl === "";
      }
      return urls.filter((url) => currentUrl.startsWith(url)).length;
    }
  }
};
function _sfc_ssrRender$Z(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-4">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "group flex items-center py-3",
    href: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_icon, {
          name: "dashboard",
          class: ["mr-2 w-4 h-4", $options.isUrl("") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
        }, null, _parent2, _scopeId));
        _push2(`<div class="${ssrRenderClass($options.isUrl("") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}>Dashboard</div>`);
      } else {
        return [
          createVNode(_component_icon, {
            name: "dashboard",
            class: ["mr-2 w-4 h-4", $options.isUrl("") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
          }, null, 8, ["class"]),
          createVNode("div", {
            class: $options.isUrl("") ? "text-white" : "text-indigo-300 group-hover:text-white"
          }, "Dashboard", 2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  if (_ctx.$can("view-report")) {
    _push(`<div class="mb-4">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "group flex items-center py-3",
      href: "/reports"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "printer",
            class: ["mr-2 w-4 h-4", $options.isUrl("reports") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
          }, null, _parent2, _scopeId));
          _push2(`<div class="${ssrRenderClass($options.isUrl("reports") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}>Reports</div>`);
        } else {
          return [
            createVNode(_component_icon, {
              name: "printer",
              class: ["mr-2 w-4 h-4", $options.isUrl("reports") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
            }, null, 8, ["class"]),
            createVNode("div", {
              class: $options.isUrl("reports") ? "text-white" : "text-indigo-300 group-hover:text-white"
            }, "Reports", 2)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.$can("view-donor")) {
    _push(`<div class="mb-4">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "group flex items-center py-3",
      href: "/donors"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "heart",
            class: ["mr-2 w-4 h-4", $options.isUrl("donors") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
          }, null, _parent2, _scopeId));
          _push2(`<div class="${ssrRenderClass($options.isUrl("donors") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}>Donors</div>`);
        } else {
          return [
            createVNode(_component_icon, {
              name: "heart",
              class: ["mr-2 w-4 h-4", $options.isUrl("donors") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
            }, null, 8, ["class"]),
            createVNode("div", {
              class: $options.isUrl("donors") ? "text-white" : "text-indigo-300 group-hover:text-white"
            }, "Donors", 2)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.$can("view-campaign")) {
    _push(`<div class="mb-4">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "group flex items-center py-3",
      href: "/campaigns"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "flag",
            class: ["mr-2 w-4 h-4", $options.isUrl("campaigns") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
          }, null, _parent2, _scopeId));
          _push2(`<div class="${ssrRenderClass($options.isUrl("campaigns") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}>Campaigns</div>`);
        } else {
          return [
            createVNode(_component_icon, {
              name: "flag",
              class: ["mr-2 w-4 h-4", $options.isUrl("campaigns") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
            }, null, 8, ["class"]),
            createVNode("div", {
              class: $options.isUrl("campaigns") ? "text-white" : "text-indigo-300 group-hover:text-white"
            }, "Campaigns", 2)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.$can("view-donation")) {
    _push(`<div class="mb-4">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "group flex items-center py-3",
      href: "/donations"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "money",
            class: ["mr-2 w-4 h-4", $options.isUrl("donations") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
          }, null, _parent2, _scopeId));
          _push2(`<div class="${ssrRenderClass($options.isUrl("donations") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}>Donations</div>`);
        } else {
          return [
            createVNode(_component_icon, {
              name: "money",
              class: ["mr-2 w-4 h-4", $options.isUrl("donations") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
            }, null, 8, ["class"]),
            createVNode("div", {
              class: $options.isUrl("donations") ? "text-white" : "text-indigo-300 group-hover:text-white"
            }, "Donations", 2)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.$can("view-beneficiary")) {
    _push(`<div class="mb-4">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "group flex items-center py-3",
      href: "/beneficiaries"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "users",
            class: ["mr-2 w-4 h-4", $options.isUrl("beneficiaries") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
          }, null, _parent2, _scopeId));
          _push2(`<div class="${ssrRenderClass($options.isUrl("beneficiaries") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}>Beneficiaries</div>`);
        } else {
          return [
            createVNode(_component_icon, {
              name: "users",
              class: ["mr-2 w-4 h-4", $options.isUrl("beneficiaries") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
            }, null, 8, ["class"]),
            createVNode("div", {
              class: $options.isUrl("beneficiaries") ? "text-white" : "text-indigo-300 group-hover:text-white"
            }, "Beneficiaries", 2)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.$can("view-program")) {
    _push(`<div class="mb-4">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "group flex items-center py-3",
      href: "/programs"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "clipboard-list",
            class: ["mr-2 w-4 h-4", $options.isUrl("programs") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
          }, null, _parent2, _scopeId));
          _push2(`<div class="${ssrRenderClass($options.isUrl("programs") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}>Programs</div>`);
        } else {
          return [
            createVNode(_component_icon, {
              name: "clipboard-list",
              class: ["mr-2 w-4 h-4", $options.isUrl("programs") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
            }, null, 8, ["class"]),
            createVNode("div", {
              class: $options.isUrl("programs") ? "text-white" : "text-indigo-300 group-hover:text-white"
            }, "Programs", 2)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.$can("view-expense")) {
    _push(`<div class="mb-4">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "group flex items-center py-3",
      href: "/expenses"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "money",
            class: ["mr-2 w-4 h-4", $options.isUrl("expenses") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
          }, null, _parent2, _scopeId));
          _push2(`<div class="${ssrRenderClass($options.isUrl("expenses") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}>Expenses</div>`);
        } else {
          return [
            createVNode(_component_icon, {
              name: "money",
              class: ["mr-2 w-4 h-4", $options.isUrl("expenses") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
            }, null, 8, ["class"]),
            createVNode("div", {
              class: $options.isUrl("expenses") ? "text-white" : "text-indigo-300 group-hover:text-white"
            }, "Expenses", 2)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.$can("view-role")) {
    _push(`<div class="mb-4">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "group flex items-center py-3",
      href: "/roles"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "shield",
            class: ["mr-2 w-4 h-4", $options.isUrl("roles") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
          }, null, _parent2, _scopeId));
          _push2(`<div class="${ssrRenderClass($options.isUrl("roles") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}>Roles</div>`);
        } else {
          return [
            createVNode(_component_icon, {
              name: "shield",
              class: ["mr-2 w-4 h-4", $options.isUrl("roles") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
            }, null, 8, ["class"]),
            createVNode("div", {
              class: $options.isUrl("roles") ? "text-white" : "text-indigo-300 group-hover:text-white"
            }, "Roles", 2)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.$can("view-payment-method")) {
    _push(`<div class="mb-4">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "group flex items-center py-3",
      href: "/payment-methods"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "credit-card",
            class: ["mr-2 w-4 h-4", $options.isUrl("payment-methods") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
          }, null, _parent2, _scopeId));
          _push2(`<div class="${ssrRenderClass($options.isUrl("payment-methods") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}>Pay Methods</div>`);
        } else {
          return [
            createVNode(_component_icon, {
              name: "credit-card",
              class: ["mr-2 w-4 h-4", $options.isUrl("payment-methods") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
            }, null, 8, ["class"]),
            createVNode("div", {
              class: $options.isUrl("payment-methods") ? "text-white" : "text-indigo-300 group-hover:text-white"
            }, "Pay Methods", 2)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.$can("view-expensehead")) {
    _push(`<div class="mb-4">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "group flex items-center py-3",
      href: "/expenseheads"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "clipboard-list",
            class: ["mr-2 w-4 h-4", $options.isUrl("expenseheads") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
          }, null, _parent2, _scopeId));
          _push2(`<div class="${ssrRenderClass($options.isUrl("expenseheads") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}>Ex Heads</div>`);
        } else {
          return [
            createVNode(_component_icon, {
              name: "clipboard-list",
              class: ["mr-2 w-4 h-4", $options.isUrl("expenseheads") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
            }, null, 8, ["class"]),
            createVNode("div", {
              class: $options.isUrl("expenseheads") ? "text-white" : "text-indigo-300 group-hover:text-white"
            }, "Ex Heads", 2)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$Z = _sfc_main$Z.setup;
_sfc_main$Z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/MainMenu.vue");
  return _sfc_setup$Z ? _sfc_setup$Z(props, ctx) : void 0;
};
const MainMenu = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["ssrRender", _sfc_ssrRender$Z]]);
const _sfc_main$Y = {
  data() {
    return {
      show: true
    };
  },
  watch: {
    "$page.props.flash": {
      handler() {
        this.show = true;
      },
      deep: true
    }
  }
};
function _sfc_ssrRender$Y(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if (_ctx.$page.props.flash.success && $data.show) {
    _push(`<div class="flex items-center justify-between mb-8 max-w-3xl bg-green-500 rounded"><div class="flex items-center"><svg class="shrink-0 ml-4 mr-2 w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><polygon points="0 11 2 9 7 14 18 3 20 5 7 18"></polygon></svg><div class="py-4 text-white text-sm font-medium">${ssrInterpolate(_ctx.$page.props.flash.success)}</div></div><button type="button" class="group mr-2 p-2"><svg class="block w-2 h-2 fill-green-800 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="235.908" height="235.908" viewBox="278.046 126.846 235.908 235.908"><path d="M506.784 134.017c-9.56-9.56-25.06-9.56-34.62 0L396 210.18l-76.164-76.164c-9.56-9.56-25.06-9.56-34.62 0-9.56 9.56-9.56 25.06 0 34.62L361.38 244.8l-76.164 76.165c-9.56 9.56-9.56 25.06 0 34.62 9.56 9.56 25.06 9.56 34.62 0L396 279.42l76.164 76.165c9.56 9.56 25.06 9.56 34.62 0 9.56-9.56 9.56-25.06 0-34.62L430.62 244.8l76.164-76.163c9.56-9.56 9.56-25.06 0-34.62z"></path></svg></button></div>`);
  } else {
    _push(`<!---->`);
  }
  if ((_ctx.$page.props.flash.error || Object.keys(_ctx.$page.props.errors).length > 0) && $data.show) {
    _push(`<div class="flex items-center justify-between mb-8 max-w-3xl bg-red-500 rounded"><div class="flex items-center"><svg class="shrink-0 ml-4 mr-2 w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z"></path></svg>`);
    if (_ctx.$page.props.flash.error) {
      _push(`<div class="py-4 text-white text-sm font-medium">${ssrInterpolate(_ctx.$page.props.flash.error)}</div>`);
    } else {
      _push(`<div class="py-4 text-white text-sm font-medium">`);
      if (Object.keys(_ctx.$page.props.errors).length === 1) {
        _push(`<span>There is one form error.</span>`);
      } else {
        _push(`<span>There are ${ssrInterpolate(Object.keys(_ctx.$page.props.errors).length)} form errors.</span>`);
      }
      _push(`</div>`);
    }
    _push(`</div><button type="button" class="group mr-2 p-2"><svg class="block w-2 h-2 fill-red-800 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="235.908" height="235.908" viewBox="278.046 126.846 235.908 235.908"><path d="M506.784 134.017c-9.56-9.56-25.06-9.56-34.62 0L396 210.18l-76.164-76.164c-9.56-9.56-25.06-9.56-34.62 0-9.56 9.56-9.56 25.06 0 34.62L361.38 244.8l-76.164 76.165c-9.56 9.56-9.56 25.06 0 34.62 9.56 9.56 25.06 9.56 34.62 0L396 279.42l76.164 76.165c9.56 9.56 25.06 9.56 34.62 0 9.56-9.56 9.56-25.06 0-34.62L430.62 244.8l76.164-76.163c9.56-9.56 9.56-25.06 0-34.62z"></path></svg></button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/FlashMessages.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
const FlashMessages = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["ssrRender", _sfc_ssrRender$Y]]);
const _sfc_main$X = {
  components: {
    Dropdown,
    FlashMessages,
    Icon,
    Link,
    Logo,
    MainMenu
  },
  props: {
    auth: Object
  }
};
function _sfc_ssrRender$X(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_logo = resolveComponent("logo");
  const _component_dropdown = resolveComponent("dropdown");
  const _component_main_menu = resolveComponent("main-menu");
  const _component_icon = resolveComponent("icon");
  const _component_flash_messages = resolveComponent("flash-messages");
  _push(`<div${ssrRenderAttrs(_attrs)}><div id="dropdown"></div><div class="md:flex md:flex-col"><div class="md:flex md:flex-col md:h-screen"><div class="md:flex md:shrink-0"><div class="flex items-center justify-between px-6 py-4 bg-indigo-900 md:shrink-0 md:justify-center md:w-56">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "",
    href: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_logo, {
          class: "fill-white",
          width: "40",
          height: ""
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_logo, {
            class: "fill-white",
            width: "40",
            height: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_dropdown, {
    class: "md:hidden",
    placement: "bottom-end"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg class="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"${_scopeId}><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"${_scopeId}></path></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            class: "w-6 h-6 fill-white",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20"
          }, [
            createVNode("path", { d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" })
          ]))
        ];
      }
    }),
    dropdown: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="mt-2 px-8 py-4 bg-indigo-800 rounded shadow-lg"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_main_menu, null, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "mt-2 px-8 py-4 bg-indigo-800 rounded shadow-lg" }, [
            createVNode(_component_main_menu)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="md:text-md flex items-center justify-between p-4 w-full text-sm bg-white border-b md:px-12 md:py-0"><div class="mr-4 mt-1">Barki Welfare Society Urmar</div>`);
  _push(ssrRenderComponent(_component_dropdown, {
    class: "mt-1",
    placement: "bottom-end"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="group flex items-center cursor-pointer select-none"${_scopeId}><div class="mr-1 text-gray-700 group-hover:text-indigo-600 focus:text-indigo-600 whitespace-nowrap"${_scopeId}><span${_scopeId}>${ssrInterpolate($props.auth.user.first_name)}</span><span class="hidden md:inline"${_scopeId}> ${ssrInterpolate($props.auth.user.last_name)}</span></div>`);
        _push2(ssrRenderComponent(_component_icon, {
          class: "w-5 h-5 fill-gray-700 group-hover:fill-indigo-600 focus:fill-indigo-600",
          name: "cheveron-down"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "group flex items-center cursor-pointer select-none" }, [
            createVNode("div", { class: "mr-1 text-gray-700 group-hover:text-indigo-600 focus:text-indigo-600 whitespace-nowrap" }, [
              createVNode("span", null, toDisplayString($props.auth.user.first_name), 1),
              createVNode("span", { class: "hidden md:inline" }, " " + toDisplayString($props.auth.user.last_name), 1)
            ]),
            createVNode(_component_icon, {
              class: "w-5 h-5 fill-gray-700 group-hover:fill-indigo-600 focus:fill-indigo-600",
              name: "cheveron-down"
            })
          ])
        ];
      }
    }),
    dropdown: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="mt-2 py-2 text-sm bg-white rounded shadow-xl"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          class: "block px-6 py-2 hover:text-white hover:bg-indigo-500",
          href: `/users/${$props.auth.user.id}/edit`
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`My Profile`);
            } else {
              return [
                createTextVNode("My Profile")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Link, {
          class: "block px-6 py-2 hover:text-white hover:bg-indigo-500",
          href: "/users"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Manage Users`);
            } else {
              return [
                createTextVNode("Manage Users")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Link, {
          class: "block px-6 py-2 w-full text-left hover:text-white hover:bg-indigo-500",
          href: "/logout",
          method: "delete",
          as: "button"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Logout`);
            } else {
              return [
                createTextVNode("Logout")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "mt-2 py-2 text-sm bg-white rounded shadow-xl" }, [
            createVNode(_component_Link, {
              class: "block px-6 py-2 hover:text-white hover:bg-indigo-500",
              href: `/users/${$props.auth.user.id}/edit`
            }, {
              default: withCtx(() => [
                createTextVNode("My Profile")
              ]),
              _: 1
            }, 8, ["href"]),
            createVNode(_component_Link, {
              class: "block px-6 py-2 hover:text-white hover:bg-indigo-500",
              href: "/users"
            }, {
              default: withCtx(() => [
                createTextVNode("Manage Users")
              ]),
              _: 1
            }),
            createVNode(_component_Link, {
              class: "block px-6 py-2 w-full text-left hover:text-white hover:bg-indigo-500",
              href: "/logout",
              method: "delete",
              as: "button"
            }, {
              default: withCtx(() => [
                createTextVNode("Logout")
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="md:flex md:grow md:overflow-hidden">`);
  _push(ssrRenderComponent(_component_main_menu, { class: "hidden shrink-0 p-12 w-56 bg-indigo-800 overflow-y-auto md:block" }, null, _parent));
  _push(`<div class="px-4 py-8 md:flex-1 md:p-12 md:overflow-y-auto" scroll-region>`);
  _push(ssrRenderComponent(_component_flash_messages, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Layout.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["ssrRender", _sfc_ssrRender$X]]);
const _sfc_main$W = {
  components: { Head, Link, TextInput, LoadingButton },
  layout: Layout,
  data() {
    return {
      form: this.$inertia.form({
        full_name: "",
        phone: "",
        email: "",
        address: "",
        permanent_address: "",
        cnic_num: "",
        // ✅ Add CNIC to form data
        notes: ""
      })
    };
  },
  methods: {
    store() {
      this.form.post("/beneficiaries");
    }
  }
};
function _sfc_ssrRender$W(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 sm:px-6 lg:px-8" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Create Beneficiary" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: "/beneficiaries"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Beneficiaries`);
      } else {
        return [
          createTextVNode("Beneficiaries")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="text-indigo-400 font-medium">/</span> Create </h1><div class="bg-white rounded-md shadow overflow-hidden"><form><div class="flex flex-wrap -mb-8 -mr-6 p-8">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.full_name,
    "onUpdate:modelValue": ($event) => $data.form.full_name = $event,
    error: $data.form.errors.full_name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Full Name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.phone,
    "onUpdate:modelValue": ($event) => $data.form.phone = $event,
    error: $data.form.errors.phone,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Phone"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    error: $data.form.errors.email,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Email"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.cnic_num,
    "onUpdate:modelValue": ($event) => $data.form.cnic_num = $event,
    error: $data.form.errors.cnic_num,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "CNIC"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.address,
    "onUpdate:modelValue": ($event) => $data.form.address = $event,
    error: $data.form.errors.address,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Address"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.permanent_address,
    "onUpdate:modelValue": ($event) => $data.form.permanent_address = $event,
    error: $data.form.errors.permanent_address,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Permanent Address"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.notes,
    "onUpdate:modelValue": ($event) => $data.form.notes = $event,
    error: $data.form.errors.notes,
    class: "pb-8 pr-6 w-full",
    label: "Notes",
    type: "textarea"
  }, null, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Create Beneficiary `);
      } else {
        return [
          createTextVNode(" Create Beneficiary ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Beneficiaries/Create.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
const Create$c = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["ssrRender", _sfc_ssrRender$W]]);
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create$c
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$V = {
  components: { Head, Link, TextInput, LoadingButton },
  layout: Layout,
  props: {
    beneficiary: Object
  },
  data() {
    return {
      form: this.$inertia.form({
        full_name: this.beneficiary.full_name,
        phone: this.beneficiary.phone,
        email: this.beneficiary.email,
        address: this.beneficiary.address,
        permanent_address: this.beneficiary.permanent_address,
        notes: this.beneficiary.notes,
        cnic_num: this.beneficiary.cnic_num
      })
    };
  },
  methods: {
    update() {
      this.form.put(`/beneficiaries/${this.beneficiary.id}`);
    },
    destroy() {
      if (confirm("Are you sure you want to delete this beneficiary?")) {
        this.$inertia.delete(`/beneficiaries/${this.beneficiary.id}`);
      }
    }
  }
};
function _sfc_ssrRender$V(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 sm:px-6 lg:px-8" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: `Edit Beneficiary - ${$data.form.full_name}`
  }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: "/beneficiaries"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Beneficiaries`);
      } else {
        return [
          createTextVNode("Beneficiaries")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="text-indigo-400 font-medium">/</span> Edit </h1><div class="bg-white rounded-md shadow overflow-hidden"><form><div class="flex flex-wrap -mb-8 -mr-6 p-8">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.full_name,
    "onUpdate:modelValue": ($event) => $data.form.full_name = $event,
    error: $data.form.errors.full_name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Full Name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.phone,
    "onUpdate:modelValue": ($event) => $data.form.phone = $event,
    error: $data.form.errors.phone,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Phone"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    error: $data.form.errors.email,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Email"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.cnic_num,
    "onUpdate:modelValue": ($event) => $data.form.cnic_num = $event,
    error: $data.form.errors.cnic_num,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "CNIC Number"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.address,
    "onUpdate:modelValue": ($event) => $data.form.address = $event,
    error: $data.form.errors.address,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Address"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.permanent_address,
    "onUpdate:modelValue": ($event) => $data.form.permanent_address = $event,
    error: $data.form.errors.permanent_address,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Permanent Address"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.notes,
    "onUpdate:modelValue": ($event) => $data.form.notes = $event,
    error: $data.form.errors.notes,
    class: "pb-8 pr-6 w-full",
    label: "Notes",
    type: "textarea"
  }, null, _parent));
  _push(`</div><div class="flex items-center justify-between px-8 py-4 bg-gray-50 border-t border-gray-100">`);
  if (!$data.form.processing) {
    _push(`<button type="button" class="text-red-600 hover:text-red-900">Delete Beneficiary</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Update Beneficiary`);
      } else {
        return [
          createTextVNode("Update Beneficiary")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Beneficiaries/Edit.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
const Edit$c = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["ssrRender", _sfc_ssrRender$V]]);
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$c
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$U = {
  components: {
    Link
  },
  props: {
    links: Array
  }
};
function _sfc_ssrRender$U(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  if ($props.links.length > 3) {
    _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-wrap -mb-1"><!--[-->`);
    ssrRenderList($props.links, (link, key) => {
      _push(`<!--[-->`);
      if (link.url === null) {
        _push(`<div class="mb-1 mr-1 px-4 py-3 text-gray-400 text-sm leading-4 border rounded">${link.label}</div>`);
      } else {
        _push(ssrRenderComponent(_component_Link, {
          key: `link-${key}`,
          class: ["mb-1 mr-1 px-4 py-3 focus:text-indigo-500 text-sm leading-4 hover:bg-white border focus:border-indigo-500 rounded", { "bg-white": link.active }],
          href: link.url
        }, null, _parent));
      }
      _push(`<!--]-->`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Pagination.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["ssrRender", _sfc_ssrRender$U]]);
const _sfc_main$T = {
  components: {
    Dropdown
  },
  props: {
    modelValue: String,
    maxWidth: {
      type: Number,
      default: 300
    }
  },
  emits: ["update:modelValue", "reset"]
};
function _sfc_ssrRender$T(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_dropdown = resolveComponent("dropdown");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center" }, _attrs))}><div class="flex w-full bg-white rounded shadow">`);
  _push(ssrRenderComponent(_component_dropdown, {
    "auto-close": false,
    class: "focus:z-10 px-4 hover:bg-gray-100 border-r focus:border-white rounded-l focus:ring md:px-6",
    placement: "bottom-start"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-baseline"${_scopeId}><span class="hidden text-gray-700 md:inline"${_scopeId}>Filter</span><svg class="w-2 h-2 fill-gray-700 md:ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 961.243 599.998"${_scopeId}><path d="M239.998 239.999L0 0h961.243L721.246 240c-131.999 132-240.28 240-240.624 239.999-.345-.001-108.625-108.001-240.624-240z"${_scopeId}></path></svg></div>`);
      } else {
        return [
          createVNode("div", { class: "flex items-baseline" }, [
            createVNode("span", { class: "hidden text-gray-700 md:inline" }, "Filter"),
            (openBlock(), createBlock("svg", {
              class: "w-2 h-2 fill-gray-700 md:ml-2",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 961.243 599.998"
            }, [
              createVNode("path", { d: "M239.998 239.999L0 0h961.243L721.246 240c-131.999 132-240.28 240-240.624 239.999-.345-.001-108.625-108.001-240.624-240z" })
            ]))
          ])
        ];
      }
    }),
    dropdown: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="mt-2 px-4 py-6 w-screen bg-white rounded shadow-xl" style="${ssrRenderStyle({ maxWidth: `${$props.maxWidth}px` })}"${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", {
            class: "mt-2 px-4 py-6 w-screen bg-white rounded shadow-xl",
            style: { maxWidth: `${$props.maxWidth}px` }
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 4)
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`<input class="relative px-6 py-3 w-full rounded-r focus:shadow-outline" autocomplete="off" type="text" name="search" placeholder="Search…"${ssrRenderAttr("value", $props.modelValue)}></div><button class="ml-3 text-gray-500 hover:text-gray-700 focus:text-indigo-500 text-sm" type="button">Reset</button></div>`);
}
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/SearchFilter.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
const SearchFilter = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["ssrRender", _sfc_ssrRender$T]]);
const _sfc_main$S = {
  components: { Head, Link, Icon, Pagination, SearchFilter },
  layout: Layout,
  props: { filters: Object, beneficiaries: Object },
  data() {
    return {
      form: {
        search: this.filters.search,
        trashed: this.filters.trashed
      }
    };
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function() {
        this.$inertia.get("/beneficiaries", pickBy(this.form), { preserveState: true });
      }, 150)
    }
  },
  methods: {
    reset() {
      this.form = mapValues(this.form, () => null);
    }
  }
};
function _sfc_ssrRender$S(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_search_filter = resolveComponent("search-filter");
  const _component_Link = resolveComponent("Link");
  const _component_icon = resolveComponent("icon");
  const _component_pagination = resolveComponent("pagination");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Beneficiaries" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Beneficiaries</h1><div class="flex items-center justify-between mb-6">`);
  _push(ssrRenderComponent(_component_search_filter, {
    modelValue: $data.form.search,
    "onUpdate:modelValue": ($event) => $data.form.search = $event,
    class: "mr-4 w-full max-w-md",
    onReset: $options.reset
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<label class="block text-gray-700"${_scopeId}>Trashed:</label><select class="form-select mt-1 w-full"${_scopeId}><option${ssrRenderAttr("value", null)}${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, null) : ssrLooseEqual($data.form.trashed, null)) ? " selected" : ""}${_scopeId}></option><option value="with"${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, "with") : ssrLooseEqual($data.form.trashed, "with")) ? " selected" : ""}${_scopeId}>With Trashed</option><option value="only"${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, "only") : ssrLooseEqual($data.form.trashed, "only")) ? " selected" : ""}${_scopeId}>Only Trashed</option></select>`);
      } else {
        return [
          createVNode("label", { class: "block text-gray-700" }, "Trashed:"),
          withDirectives(createVNode("select", {
            "onUpdate:modelValue": ($event) => $data.form.trashed = $event,
            class: "form-select mt-1 w-full"
          }, [
            createVNode("option", { value: null }),
            createVNode("option", { value: "with" }, "With Trashed"),
            createVNode("option", { value: "only" }, "Only Trashed")
          ], 8, ["onUpdate:modelValue"]), [
            [vModelSelect, $data.form.trashed]
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    class: "btn-indigo",
    href: "/beneficiaries/create"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Create</span><span class="hidden md:inline"${_scopeId}> Beneficiary</span>`);
      } else {
        return [
          createVNode("span", null, "Create"),
          createVNode("span", { class: "hidden md:inline" }, " Beneficiary")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="bg-white rounded-md shadow overflow-x-auto"><table class="w-full whitespace-nowrap"><thead><tr class="text-left font-bold"><th class="pb-4 pt-6 px-6">Full Name</th><th class="pb-4 pt-6 px-6">Phone</th><th class="pb-4 pt-6 px-6">CNIC</th><th class="pb-4 pt-6 px-6">Address</th><th class="pb-4 pt-6 px-6">Res. Address</th><th class="pb-4 pt-6 px-6" colspan="2">Action</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($props.beneficiaries.data, (b) => {
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: `/beneficiaries/${b.id}/edit`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(b.full_name)}`);
        } else {
          return [
            createTextVNode(toDisplayString(b.full_name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t px-6 py-4">${ssrInterpolate(b.phone)}</td><td class="border-t px-6 py-4">${ssrInterpolate(b.cnic_num)}</td><td class="border-t px-6 py-4">${ssrInterpolate(b.address)}</td><td class="border-t px-6 py-4">${ssrInterpolate(b.permanent_address)}</td><td class="w-px border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-4",
      href: `/beneficiaries/${b.id}/edit`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "cheveron-right",
            class: "block w-6 h-6 fill-gray-400"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_icon, {
              name: "cheveron-right",
              class: "block w-6 h-6 fill-gray-400"
            })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.beneficiaries.data.length === 0) {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="4">No beneficiaries found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</tbody></table></div>`);
  _push(ssrRenderComponent(_component_pagination, {
    class: "mt-6",
    links: $props.beneficiaries.links
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Beneficiaries/Index.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
const Index$e = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["ssrRender", _sfc_ssrRender$S]]);
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$e
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$R = {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default() {
        return `select-input-${v4()}`;
      }
    },
    error: String,
    label: String,
    modelValue: [String, Number, Boolean]
  },
  emits: ["update:modelValue"],
  data() {
    return {
      selected: this.modelValue
    };
  },
  watch: {
    selected(selected) {
      this.$emit("update:modelValue", selected);
    }
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    select() {
      this.$refs.input.select();
    }
  }
};
function _sfc_ssrRender$R(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.$attrs.class
  }, _attrs))}>`);
  if ($props.label) {
    _push(`<label class="form-label"${ssrRenderAttr("for", $props.id)}>${ssrInterpolate($props.label)}:</label>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<select${ssrRenderAttrs(mergeProps({
    id: $props.id,
    ref: "input"
  }, { ..._ctx.$attrs, class: null }, {
    class: ["form-select", { error: $props.error }]
  }))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</select>`);
  if ($props.error) {
    _push(`<div class="form-error">${ssrInterpolate($props.error)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/SelectInput.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
const SelectInput = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["ssrRender", _sfc_ssrRender$R]]);
const _sfc_main$Q = {
  components: {
    Head,
    Link,
    TextInput,
    SelectInput,
    LoadingButton
  },
  layout: Layout,
  remember: "form",
  data() {
    return {
      form: this.$inertia.form({
        title: "",
        description: "",
        start_date: "",
        end_date: "",
        target_amount: 0,
        status: "active"
      })
    };
  },
  methods: {
    store() {
      this.form.post("/campaigns");
    }
  }
};
function _sfc_ssrRender$Q(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_select_input = resolveComponent("select-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 sm:px-6 lg:px-8" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Create Campaign" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: "/campaigns"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Campaigns`);
      } else {
        return [
          createTextVNode("Campaigns")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="text-indigo-400 font-medium">/</span> Create </h1><div class="bg-white rounded-md shadow overflow-hidden"><form><div class="flex flex-wrap -mb-8 -mr-6 p-8">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.title,
    "onUpdate:modelValue": ($event) => $data.form.title = $event,
    error: $data.form.errors.title,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Title"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.description,
    "onUpdate:modelValue": ($event) => $data.form.description = $event,
    error: $data.form.errors.description,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Description"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.start_date,
    "onUpdate:modelValue": ($event) => $data.form.start_date = $event,
    error: $data.form.errors.start_date,
    type: "date",
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Start Date"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.end_date,
    "onUpdate:modelValue": ($event) => $data.form.end_date = $event,
    error: $data.form.errors.end_date,
    type: "date",
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "End Date"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.target_amount,
    "onUpdate:modelValue": ($event) => $data.form.target_amount = $event,
    error: $data.form.errors.target_amount,
    type: "number",
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Target Amount (PKR)"
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.status,
    "onUpdate:modelValue": ($event) => $data.form.status = $event,
    error: $data.form.errors.status,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Status"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option value="active"${_scopeId}>Active</option><option value="inactive"${_scopeId}>Inactive</option>`);
      } else {
        return [
          createVNode("option", { value: "active" }, "Active"),
          createVNode("option", { value: "inactive" }, "Inactive")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Create Campaign`);
      } else {
        return [
          createTextVNode("Create Campaign")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Campaigns/Create.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
const Create$b = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["ssrRender", _sfc_ssrRender$Q]]);
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create$b
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$P = {
  components: {
    Head,
    Link,
    TextInput,
    SelectInput,
    LoadingButton
  },
  layout: Layout,
  props: {
    campaign: Object
  },
  data() {
    return {
      form: this.$inertia.form({
        title: this.campaign.title,
        description: this.campaign.description,
        start_date: this.campaign.start_date,
        end_date: this.campaign.end_date,
        target_amount: this.campaign.target_amount,
        status: this.campaign.status
      })
    };
  },
  methods: {
    update() {
      this.form.put(`/campaigns/${this.campaign.id}`);
    },
    destroy() {
      if (confirm("Are you sure you want to delete this campaign?")) {
        this.$inertia.delete(`/campaigns/${this.campaign.id}`);
      }
    }
  }
};
function _sfc_ssrRender$P(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_select_input = resolveComponent("select-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 sm:px-6 lg:px-8" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: `Edit Campaign - ${$data.form.title}`
  }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: "/campaigns"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Campaigns`);
      } else {
        return [
          createTextVNode("Campaigns")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="text-indigo-400 font-medium">/</span> Edit </h1><div class="bg-white rounded-md shadow overflow-hidden"><form><div class="flex flex-wrap -mb-8 -mr-6 p-8">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.title,
    "onUpdate:modelValue": ($event) => $data.form.title = $event,
    error: $data.form.errors.title,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Title"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.description,
    "onUpdate:modelValue": ($event) => $data.form.description = $event,
    error: $data.form.errors.description,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Description"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.start_date,
    "onUpdate:modelValue": ($event) => $data.form.start_date = $event,
    error: $data.form.errors.start_date,
    type: "date",
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Start Date"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.end_date,
    "onUpdate:modelValue": ($event) => $data.form.end_date = $event,
    error: $data.form.errors.end_date,
    type: "date",
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "End Date"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.target_amount,
    "onUpdate:modelValue": ($event) => $data.form.target_amount = $event,
    error: $data.form.errors.target_amount,
    type: "number",
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Target Amount (PKR)"
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.status,
    "onUpdate:modelValue": ($event) => $data.form.status = $event,
    error: $data.form.errors.status,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Status"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option value="active"${_scopeId}>Active</option><option value="inactive"${_scopeId}>Inactive</option>`);
      } else {
        return [
          createVNode("option", { value: "active" }, "Active"),
          createVNode("option", { value: "inactive" }, "Inactive")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex items-center justify-between px-8 py-4 bg-gray-50 border-t border-gray-100">`);
  if (!$data.form.processing && _ctx.$can("delete-campaign")) {
    _push(`<button type="button" class="text-red-600 hover:text-red-900">Delete Campaign</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Update Campaign`);
      } else {
        return [
          createTextVNode("Update Campaign")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Campaigns/Edit.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const Edit$b = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["ssrRender", _sfc_ssrRender$P]]);
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$b
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$O = {
  components: {
    Head,
    Link,
    Icon,
    Pagination,
    SearchFilter
  },
  layout: Layout,
  props: {
    filters: Object,
    campaigns: Object
  },
  data() {
    return {
      form: {
        search: this.filters.search,
        trashed: this.filters.trashed
      }
    };
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function() {
        this.$inertia.get("/campaigns", pickBy(this.form), { preserveState: true });
      }, 150)
    }
  },
  methods: {
    reset() {
      this.form = mapValues(this.form, () => null);
    }
  }
};
function _sfc_ssrRender$O(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_search_filter = resolveComponent("search-filter");
  const _component_Link = resolveComponent("Link");
  const _component_icon = resolveComponent("icon");
  const _component_pagination = resolveComponent("pagination");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Campaigns" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Campaigns</h1><div class="flex items-center justify-between mb-6">`);
  _push(ssrRenderComponent(_component_search_filter, {
    modelValue: $data.form.search,
    "onUpdate:modelValue": ($event) => $data.form.search = $event,
    class: "mr-4 w-full max-w-md",
    onReset: $options.reset
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<label class="block text-gray-700"${_scopeId}>Trashed:</label><select class="form-select mt-1 w-full"${_scopeId}><option${ssrRenderAttr("value", null)}${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, null) : ssrLooseEqual($data.form.trashed, null)) ? " selected" : ""}${_scopeId}></option><option value="with"${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, "with") : ssrLooseEqual($data.form.trashed, "with")) ? " selected" : ""}${_scopeId}>With Trashed</option><option value="only"${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, "only") : ssrLooseEqual($data.form.trashed, "only")) ? " selected" : ""}${_scopeId}>Only Trashed</option></select>`);
      } else {
        return [
          createVNode("label", { class: "block text-gray-700" }, "Trashed:"),
          withDirectives(createVNode("select", {
            "onUpdate:modelValue": ($event) => $data.form.trashed = $event,
            class: "form-select mt-1 w-full"
          }, [
            createVNode("option", { value: null }),
            createVNode("option", { value: "with" }, "With Trashed"),
            createVNode("option", { value: "only" }, "Only Trashed")
          ], 8, ["onUpdate:modelValue"]), [
            [vModelSelect, $data.form.trashed]
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  if (_ctx.$can("create-campaign")) {
    _push(ssrRenderComponent(_component_Link, {
      class: "btn-indigo",
      href: "/campaigns/create"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span${_scopeId}>Create</span><span class="hidden md:inline"${_scopeId}> Campaign</span>`);
        } else {
          return [
            createVNode("span", null, "Create"),
            createVNode("span", { class: "hidden md:inline" }, " Campaign")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="bg-white rounded-md shadow overflow-x-auto"><table class="w-full whitespace-nowrap"><thead><tr class="text-left font-bold"><th class="pb-4 pt-6 px-6">Title</th><th class="pb-4 pt-6 px-6">Start Date</th><th class="pb-4 pt-6 px-6">End Date</th><th class="pb-4 pt-6 px-6">Target</th><th class="pb-4 pt-6 px-6" colspan="2">Status</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($props.campaigns.data, (campaign) => {
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: `/campaigns/${campaign.id}/edit`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(campaign.title)} `);
          if (campaign.deleted_at) {
            _push2(ssrRenderComponent(_component_icon, {
              name: "trash",
              class: "shrink-0 ml-2 w-3 h-3 fill-gray-400"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        } else {
          return [
            createTextVNode(toDisplayString(campaign.title) + " ", 1),
            campaign.deleted_at ? (openBlock(), createBlock(_component_icon, {
              key: 0,
              name: "trash",
              class: "shrink-0 ml-2 w-3 h-3 fill-gray-400"
            })) : createCommentVNode("", true)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t px-6 py-4">${ssrInterpolate(campaign.start_date)}</td><td class="border-t px-6 py-4">${ssrInterpolate(campaign.end_date)}</td><td class="border-t px-6 py-4">Rs. ${ssrInterpolate(campaign.target_amount)}</td><td class="border-t px-6 py-4 capitalize">${ssrInterpolate(campaign.status)}</td><td class="w-px border-t">`);
    if (_ctx.$can("edit-campaign")) {
      _push(ssrRenderComponent(_component_Link, {
        class: "flex items-center px-4",
        href: `/campaigns/${campaign.id}/edit`,
        tabindex: "-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_icon, {
              name: "cheveron-right",
              class: "block w-6 h-6 fill-gray-400"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_icon, {
                name: "cheveron-right",
                class: "block w-6 h-6 fill-gray-400"
              })
            ];
          }
        }),
        _: 2
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.campaigns.data.length === 0) {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="6">No campaigns found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</tbody></table></div>`);
  _push(ssrRenderComponent(_component_pagination, {
    class: "mt-6",
    links: $props.campaigns.links
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Campaigns/Index.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const Index$d = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["ssrRender", _sfc_ssrRender$O]]);
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$d
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$N = {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput
  },
  layout: Layout,
  props: {
    organizations: Array
  },
  remember: "form",
  data() {
    return {
      form: this.$inertia.form({
        first_name: "",
        last_name: "",
        organization_id: null,
        email: "",
        phone: "",
        address: "",
        city: "",
        region: "",
        country: "",
        postal_code: ""
      })
    };
  },
  methods: {
    store() {
      this.form.post("/contacts");
    }
  }
};
function _sfc_ssrRender$N(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_select_input = resolveComponent("select-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Create Contact" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: "/contacts"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contacts`);
      } else {
        return [
          createTextVNode("Contacts")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="text-indigo-400 font-medium">/</span> Create </h1><div class="max-w-3xl bg-white rounded-md shadow overflow-hidden"><form><div class="flex flex-wrap -mb-8 -mr-6 p-8">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.first_name,
    "onUpdate:modelValue": ($event) => $data.form.first_name = $event,
    error: $data.form.errors.first_name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "First name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.last_name,
    "onUpdate:modelValue": ($event) => $data.form.last_name = $event,
    error: $data.form.errors.last_name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Last name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.organization_id,
    "onUpdate:modelValue": ($event) => $data.form.organization_id = $event,
    error: $data.form.errors.organization_id,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Organization"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}></option><!--[-->`);
        ssrRenderList($props.organizations, (organization) => {
          _push2(`<option${ssrRenderAttr("value", organization.id)}${_scopeId}>${ssrInterpolate(organization.name)}</option>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          createVNode("option", { value: null }),
          (openBlock(true), createBlock(Fragment, null, renderList($props.organizations, (organization) => {
            return openBlock(), createBlock("option", {
              key: organization.id,
              value: organization.id
            }, toDisplayString(organization.name), 9, ["value"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    error: $data.form.errors.email,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Email"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.phone,
    "onUpdate:modelValue": ($event) => $data.form.phone = $event,
    error: $data.form.errors.phone,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Phone"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.address,
    "onUpdate:modelValue": ($event) => $data.form.address = $event,
    error: $data.form.errors.address,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Address"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.city,
    "onUpdate:modelValue": ($event) => $data.form.city = $event,
    error: $data.form.errors.city,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "City"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.region,
    "onUpdate:modelValue": ($event) => $data.form.region = $event,
    error: $data.form.errors.region,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Province/State"
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.country,
    "onUpdate:modelValue": ($event) => $data.form.country = $event,
    error: $data.form.errors.country,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Country"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}></option><option value="CA"${_scopeId}>Canada</option><option value="US"${_scopeId}>United States</option>`);
      } else {
        return [
          createVNode("option", { value: null }),
          createVNode("option", { value: "CA" }, "Canada"),
          createVNode("option", { value: "US" }, "United States")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.postal_code,
    "onUpdate:modelValue": ($event) => $data.form.postal_code = $event,
    error: $data.form.errors.postal_code,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Postal code"
  }, null, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Create Contact`);
      } else {
        return [
          createTextVNode("Create Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Contacts/Create.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const Create$a = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["ssrRender", _sfc_ssrRender$N]]);
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create$a
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$M = {
  components: {
    Icon
  },
  emits: ["restore"]
};
function _sfc_ssrRender$M(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between p-4 max-w-3xl bg-yellow-400 rounded" }, _attrs))}><div class="flex items-center">`);
  _push(ssrRenderComponent(_component_icon, {
    name: "trash",
    class: "shrink-0 mr-2 w-4 h-4 fill-yellow-800"
  }, null, _parent));
  _push(`<div class="text-yellow-800 text-sm font-medium">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div><button class="text-yellow-800 hover:underline text-sm" tabindex="-1" type="button">Restore</button></div>`);
}
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/TrashedMessage.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const TrashedMessage = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["ssrRender", _sfc_ssrRender$M]]);
const _sfc_main$L = {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    TrashedMessage
  },
  layout: Layout,
  props: {
    contact: Object,
    organizations: Array
  },
  remember: "form",
  data() {
    return {
      form: this.$inertia.form({
        first_name: this.contact.first_name,
        last_name: this.contact.last_name,
        organization_id: this.contact.organization_id,
        email: this.contact.email,
        phone: this.contact.phone,
        address: this.contact.address,
        city: this.contact.city,
        region: this.contact.region,
        country: this.contact.country,
        postal_code: this.contact.postal_code
      })
    };
  },
  methods: {
    update() {
      this.form.put(`/contacts/${this.contact.id}`);
    },
    destroy() {
      if (confirm("Are you sure you want to delete this contact?")) {
        this.$inertia.delete(`/contacts/${this.contact.id}`);
      }
    },
    restore() {
      if (confirm("Are you sure you want to restore this contact?")) {
        this.$inertia.put(`/contacts/${this.contact.id}/restore`);
      }
    }
  }
};
function _sfc_ssrRender$L(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_trashed_message = resolveComponent("trashed-message");
  const _component_text_input = resolveComponent("text-input");
  const _component_select_input = resolveComponent("select-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: `${$data.form.first_name} ${$data.form.last_name}`
  }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: "/contacts"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contacts`);
      } else {
        return [
          createTextVNode("Contacts")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="text-indigo-400 font-medium">/</span> ${ssrInterpolate($data.form.first_name)} ${ssrInterpolate($data.form.last_name)}</h1>`);
  if ($props.contact.deleted_at) {
    _push(ssrRenderComponent(_component_trashed_message, {
      class: "mb-6",
      onRestore: $options.restore
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` This contact has been deleted. `);
        } else {
          return [
            createTextVNode(" This contact has been deleted. ")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="max-w-3xl bg-white rounded-md shadow overflow-hidden"><form><div class="flex flex-wrap -mb-8 -mr-6 p-8">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.first_name,
    "onUpdate:modelValue": ($event) => $data.form.first_name = $event,
    error: $data.form.errors.first_name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "First name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.last_name,
    "onUpdate:modelValue": ($event) => $data.form.last_name = $event,
    error: $data.form.errors.last_name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Last name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.organization_id,
    "onUpdate:modelValue": ($event) => $data.form.organization_id = $event,
    error: $data.form.errors.organization_id,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Organization"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}></option><!--[-->`);
        ssrRenderList($props.organizations, (organization) => {
          _push2(`<option${ssrRenderAttr("value", organization.id)}${_scopeId}>${ssrInterpolate(organization.name)}</option>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          createVNode("option", { value: null }),
          (openBlock(true), createBlock(Fragment, null, renderList($props.organizations, (organization) => {
            return openBlock(), createBlock("option", {
              key: organization.id,
              value: organization.id
            }, toDisplayString(organization.name), 9, ["value"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    error: $data.form.errors.email,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Email"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.phone,
    "onUpdate:modelValue": ($event) => $data.form.phone = $event,
    error: $data.form.errors.phone,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Phone"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.address,
    "onUpdate:modelValue": ($event) => $data.form.address = $event,
    error: $data.form.errors.address,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Address"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.city,
    "onUpdate:modelValue": ($event) => $data.form.city = $event,
    error: $data.form.errors.city,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "City"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.region,
    "onUpdate:modelValue": ($event) => $data.form.region = $event,
    error: $data.form.errors.region,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Province/State"
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.country,
    "onUpdate:modelValue": ($event) => $data.form.country = $event,
    error: $data.form.errors.country,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Country"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}></option><option value="CA"${_scopeId}>Canada</option><option value="US"${_scopeId}>United States</option>`);
      } else {
        return [
          createVNode("option", { value: null }),
          createVNode("option", { value: "CA" }, "Canada"),
          createVNode("option", { value: "US" }, "United States")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.postal_code,
    "onUpdate:modelValue": ($event) => $data.form.postal_code = $event,
    error: $data.form.errors.postal_code,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Postal code"
  }, null, _parent));
  _push(`</div><div class="flex items-center px-8 py-4 bg-gray-50 border-t border-gray-100">`);
  if (!$props.contact.deleted_at) {
    _push(`<button class="text-red-600 hover:underline" tabindex="-1" type="button">Delete Contact</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo ml-auto",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Update Contact`);
      } else {
        return [
          createTextVNode("Update Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Contacts/Edit.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const Edit$a = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["ssrRender", _sfc_ssrRender$L]]);
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$a
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$K = {
  components: {
    Head,
    Icon,
    Link,
    Pagination,
    SearchFilter
  },
  layout: Layout,
  props: {
    filters: Object,
    contacts: Object
  },
  data() {
    return {
      form: {
        search: this.filters.search,
        trashed: this.filters.trashed
      }
    };
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function() {
        this.$inertia.get("/contacts", pickBy(this.form), { preserveState: true });
      }, 150)
    }
  },
  methods: {
    reset() {
      this.form = mapValues(this.form, () => null);
    }
  }
};
function _sfc_ssrRender$K(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_search_filter = resolveComponent("search-filter");
  const _component_Link = resolveComponent("Link");
  const _component_icon = resolveComponent("icon");
  const _component_pagination = resolveComponent("pagination");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Contacts" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Contacts</h1><div class="flex items-center justify-between mb-6">`);
  _push(ssrRenderComponent(_component_search_filter, {
    modelValue: $data.form.search,
    "onUpdate:modelValue": ($event) => $data.form.search = $event,
    class: "mr-4 w-full max-w-md",
    onReset: $options.reset
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<label class="block text-gray-700"${_scopeId}>Trashed:</label><select class="form-select mt-1 w-full"${_scopeId}><option${ssrRenderAttr("value", null)}${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, null) : ssrLooseEqual($data.form.trashed, null)) ? " selected" : ""}${_scopeId}></option><option value="with"${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, "with") : ssrLooseEqual($data.form.trashed, "with")) ? " selected" : ""}${_scopeId}>With Trashed</option><option value="only"${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, "only") : ssrLooseEqual($data.form.trashed, "only")) ? " selected" : ""}${_scopeId}>Only Trashed</option></select>`);
      } else {
        return [
          createVNode("label", { class: "block text-gray-700" }, "Trashed:"),
          withDirectives(createVNode("select", {
            "onUpdate:modelValue": ($event) => $data.form.trashed = $event,
            class: "form-select mt-1 w-full"
          }, [
            createVNode("option", { value: null }),
            createVNode("option", { value: "with" }, "With Trashed"),
            createVNode("option", { value: "only" }, "Only Trashed")
          ], 8, ["onUpdate:modelValue"]), [
            [vModelSelect, $data.form.trashed]
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    class: "btn-indigo",
    href: "/contacts/create"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Create</span><span class="hidden md:inline"${_scopeId}> Contact</span>`);
      } else {
        return [
          createVNode("span", null, "Create"),
          createVNode("span", { class: "hidden md:inline" }, " Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="bg-white rounded-md shadow overflow-x-auto"><table class="w-full whitespace-nowrap"><tr class="text-left font-bold"><th class="pb-4 pt-6 px-6">Name</th><th class="pb-4 pt-6 px-6">Organization</th><th class="pb-4 pt-6 px-6">City</th><th class="pb-4 pt-6 px-6" colspan="2">Phone</th></tr><!--[-->`);
  ssrRenderList($props.contacts.data, (contact) => {
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: `/contacts/${contact.id}/edit`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(contact.name)} `);
          if (contact.deleted_at) {
            _push2(ssrRenderComponent(_component_icon, {
              name: "trash",
              class: "shrink-0 ml-2 w-3 h-3 fill-gray-400"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        } else {
          return [
            createTextVNode(toDisplayString(contact.name) + " ", 1),
            contact.deleted_at ? (openBlock(), createBlock(_component_icon, {
              key: 0,
              name: "trash",
              class: "shrink-0 ml-2 w-3 h-3 fill-gray-400"
            })) : createCommentVNode("", true)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: `/contacts/${contact.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          if (contact.organization) {
            _push2(`<div${_scopeId}>${ssrInterpolate(contact.organization.name)}</div>`);
          } else {
            _push2(`<!---->`);
          }
        } else {
          return [
            contact.organization ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(contact.organization.name), 1)) : createCommentVNode("", true)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: `/contacts/${contact.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(contact.city)}`);
        } else {
          return [
            createTextVNode(toDisplayString(contact.city), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: `/contacts/${contact.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(contact.phone)}`);
        } else {
          return [
            createTextVNode(toDisplayString(contact.phone), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="w-px border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-4",
      href: `/contacts/${contact.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "cheveron-right",
            class: "block w-6 h-6 fill-gray-400"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_icon, {
              name: "cheveron-right",
              class: "block w-6 h-6 fill-gray-400"
            })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.contacts.data.length === 0) {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="4">No contacts found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</table></div>`);
  _push(ssrRenderComponent(_component_pagination, {
    class: "mt-6",
    links: $props.contacts.links
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Contacts/Index.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const Index$c = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["ssrRender", _sfc_ssrRender$K]]);
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$c
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$J = {
  props: {
    stats: Object
  },
  components: {
    Head,
    Link
  },
  layout: Layout
};
function _sfc_ssrRender$J(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Dashboard" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Dashboard</h1><div class="grid grid-cols-1 md:grid-cols-4 gap-6">`);
  _push(ssrRenderComponent(_component_Link, {
    href: "/donors",
    class: "block"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="bg-white p-6 rounded-lg shadow text-center hover:shadow-md transition"${_scopeId}><h2 class="text-xl font-semibold"${_scopeId}>Total Donors</h2><p class="text-3xl mt-2"${_scopeId}>${ssrInterpolate($props.stats.donors)}</p></div>`);
      } else {
        return [
          createVNode("div", { class: "bg-white p-6 rounded-lg shadow text-center hover:shadow-md transition" }, [
            createVNode("h2", { class: "text-xl font-semibold" }, "Total Donors"),
            createVNode("p", { class: "text-3xl mt-2" }, toDisplayString($props.stats.donors), 1)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="bg-white p-6 rounded-lg shadow text-center">`);
  _push(ssrRenderComponent(_component_Link, {
    href: "/beneficiaries",
    class: "block"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="text-xl font-semibold"${_scopeId}>Total Beneficiaries</h2><p class="text-3xl mt-2"${_scopeId}>${ssrInterpolate($props.stats.beneficiaries)}</p>`);
      } else {
        return [
          createVNode("h2", { class: "text-xl font-semibold" }, "Total Beneficiaries"),
          createVNode("p", { class: "text-3xl mt-2" }, toDisplayString($props.stats.beneficiaries), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="bg-white p-6 rounded-lg shadow text-center">`);
  _push(ssrRenderComponent(_component_Link, {
    href: "/campaigns",
    class: "no-underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="text-xl font-semibold"${_scopeId}>Total Campaigns</h2><p class="text-3xl mt-2"${_scopeId}>${ssrInterpolate($props.stats.campaigns)}</p>`);
      } else {
        return [
          createVNode("h2", { class: "text-xl font-semibold" }, "Total Campaigns"),
          createVNode("p", { class: "text-3xl mt-2" }, toDisplayString($props.stats.campaigns), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="bg-white p-6 rounded-lg shadow text-center">`);
  _push(ssrRenderComponent(_component_Link, {
    href: "/programs",
    class: "block"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="text-xl font-semibold"${_scopeId}>Total Programs</h2><p class="text-3xl mt-2"${_scopeId}>${ssrInterpolate($props.stats.programs)}</p>`);
      } else {
        return [
          createVNode("h2", { class: "text-xl font-semibold" }, "Total Programs"),
          createVNode("p", { class: "text-3xl mt-2" }, toDisplayString($props.stats.programs), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="p-6 bg-white rounded-lg shadow text-center">`);
  _push(ssrRenderComponent(_component_Link, {
    href: "/donations",
    class: "no-underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="text-lg font-semibold"${_scopeId}>Total Donations</h2><p class="text-2xl text-green-600 mt-2"${_scopeId}>${ssrInterpolate($props.stats.donations.toLocaleString())}</p>`);
      } else {
        return [
          createVNode("h2", { class: "text-lg font-semibold" }, "Total Donations"),
          createVNode("p", { class: "text-2xl text-green-600 mt-2" }, toDisplayString($props.stats.donations.toLocaleString()), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="p-6 bg-white rounded-lg shadow text-center">`);
  _push(ssrRenderComponent(_component_Link, {
    href: "/expenses",
    class: "no-underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="text-lg font-semibold"${_scopeId}>Total Expenses</h2><p class="text-2xl text-red-600 mt-2"${_scopeId}>${ssrInterpolate($props.stats.expenses.toLocaleString())}</p>`);
      } else {
        return [
          createVNode("h2", { class: "text-lg font-semibold" }, "Total Expenses"),
          createVNode("p", { class: "text-2xl text-red-600 mt-2" }, toDisplayString($props.stats.expenses.toLocaleString()), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="p-6 bg-white rounded-lg shadow text-center">`);
  _push(ssrRenderComponent(_component_Link, {
    href: "/donations",
    class: "no-underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="text-lg font-semibold"${_scopeId}>Today&#39;s Donations</h2><p class="text-2xl text-green-600 mt-2"${_scopeId}>${ssrInterpolate($props.stats.today_donations.toLocaleString())}</p>`);
      } else {
        return [
          createVNode("h2", { class: "text-lg font-semibold" }, "Today's Donations"),
          createVNode("p", { class: "text-2xl text-green-600 mt-2" }, toDisplayString($props.stats.today_donations.toLocaleString()), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="p-6 bg-white rounded-lg shadow text-center">`);
  _push(ssrRenderComponent(_component_Link, {
    href: "/expenses",
    class: "no-underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="text-lg font-semibold"${_scopeId}>Today&#39;s Expenses</h2><p class="text-2xl text-red-600 mt-2"${_scopeId}>${ssrInterpolate($props.stats.today_expenses.toLocaleString())}</p>`);
      } else {
        return [
          createVNode("h2", { class: "text-lg font-semibold" }, "Today's Expenses"),
          createVNode("p", { class: "text-2xl text-red-600 mt-2" }, toDisplayString($props.stats.today_expenses.toLocaleString()), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="p-6 bg-white rounded-lg shadow text-center">`);
  _push(ssrRenderComponent(_component_Link, {
    href: "/reports/current-balance",
    class: "no-underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="text-lg font-semibold"${_scopeId}>Cash in Hand</h2><p class="text-2xl text-red-600 mt-2"${_scopeId}>${ssrInterpolate($props.stats.cash_in_hand.toLocaleString())}</p>`);
      } else {
        return [
          createVNode("h2", { class: "text-lg font-semibold" }, "Cash in Hand"),
          createVNode("p", { class: "text-2xl text-red-600 mt-2" }, toDisplayString($props.stats.cash_in_hand.toLocaleString()), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Index.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const Index$b = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["ssrRender", _sfc_ssrRender$J]]);
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$b
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$I = {
  props: {
    modelValue: [String, Number, null],
    options: {
      type: Array,
      default: () => []
    },
    label: String,
    error: String
  },
  emits: ["update:modelValue"],
  mounted() {
    this.initSelect2();
  },
  watch: {
    modelValue(newVal) {
      $(this.$refs.select).val(newVal).trigger("change");
    },
    options() {
      this.$nextTick(() => {
        $(this.$refs.select).select2("destroy");
        this.initSelect2();
      });
    }
  },
  beforeUnmount() {
    $(this.$refs.select).select2("destroy");
  },
  methods: {
    initSelect2() {
      $(this.$refs.select).select2({
        width: "100%",
        placeholder: this.label ? `Select ${this.label}` : "Select an option"
      }).on("change", () => {
        this.$emit("update:modelValue", $(this.$refs.select).val());
      });
      if (this.modelValue !== null) {
        $(this.$refs.select).val(this.modelValue).trigger("change");
      }
    }
  }
};
function _sfc_ssrRender$I(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if ($props.label) {
    _push(`<label class="form-label">${ssrInterpolate($props.label)}</label>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<select${ssrRenderAttr("value", $props.modelValue)} class="form-select w-full"><option${ssrRenderAttr("value", null)}>Select ${ssrInterpolate($props.label)}</option><!--[-->`);
  ssrRenderList($props.options, (option) => {
    _push(`<option${ssrRenderAttr("value", option.id)}>${ssrInterpolate(option.name)}</option>`);
  });
  _push(`<!--]--></select>`);
  if ($props.error) {
    _push(`<div class="form-error">${ssrInterpolate($props.error)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Select2Input.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const Select2Input = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["ssrRender", _sfc_ssrRender$I]]);
const _sfc_main$H = {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    Select2Input
  },
  layout: Layout,
  remember: "form",
  // Accept donors, campaigns, and dynamic payment methods from backend
  props: {
    donors: Array,
    campaigns: Array,
    paymentMethods: Array
  },
  data() {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    return {
      form: this.$inertia.form({
        type: "donor",
        type_id: null,
        amount: "",
        donation_date: today,
        payment_method: this.paymentMethods.length > 0 ? this.paymentMethods[0].id : null,
        reference_no: "",
        purpose: ""
      }),
      entitySelectKey: 0
      // used to re-render donor/campaign select on type change
    };
  },
  computed: {
    // Compute donor/campaign options based on selected type
    typeOptions() {
      return this.form.type === "donor" ? this.donors.map((d) => ({ id: d.id, name: d.full_name })) : this.campaigns.map((c) => ({ id: c.id, name: c.title }));
    }
  },
  watch: {
    // Reset type_id when type changes (donor <-> campaign)
    "form.type"(newVal) {
      this.form.type_id = null;
      this.entitySelectKey += 1;
    },
    "form.type_id"(newVal) {
      if (this.form.type === "donor" && newVal) {
        this.fetchDonorDefaults(newVal);
      }
    }
  },
  methods: {
    // Submit form
    store() {
      this.form.post("/donations");
    },
    async fetchDonorDefaults(donorId) {
      try {
        const response = await axios.get(`/donors/${donorId}/defaults`);
        if (response.data.monthly_donation !== void 0) {
          this.form.amount = response.data.monthly_donation;
        }
        if (response.data.payment_method) {
          this.form.payment_method = parseInt(response.data.payment_method);
        }
      } catch (error) {
        console.error("Failed to fetch donor defaults:", error);
      }
    }
  }
};
function _sfc_ssrRender$H(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_select_input = resolveComponent("select-input");
  const _component_select2_input = resolveComponent("select2-input");
  const _component_text_input = resolveComponent("text-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 sm:px-6 lg:px-8" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Create Donation" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: "/donations"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Donations`);
      } else {
        return [
          createTextVNode("Donations")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="text-indigo-400 font-medium">/</span> Create </h1><div class="bg-white rounded-md shadow overflow-hidden"><form><div class="flex flex-wrap -mb-8 -mr-6 p-8">`);
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.type,
    "onUpdate:modelValue": ($event) => $data.form.type = $event,
    error: $data.form.errors.type,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Donation Type"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option value="donor"${_scopeId}>Donor</option><option value="campaign"${_scopeId}>Campaign</option>`);
      } else {
        return [
          createVNode("option", { value: "donor" }, "Donor"),
          createVNode("option", { value: "campaign" }, "Campaign")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_select2_input, {
    modelValue: $data.form.type_id,
    "onUpdate:modelValue": ($event) => $data.form.type_id = $event,
    options: $options.typeOptions,
    error: $data.form.errors.type_id,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Select Donor or Campaign",
    key: $data.entitySelectKey
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.amount,
    "onUpdate:modelValue": ($event) => $data.form.amount = $event,
    error: $data.form.errors.amount,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Amount (PKR)",
    type: "number"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.donation_date,
    "onUpdate:modelValue": ($event) => $data.form.donation_date = $event,
    error: $data.form.errors.donation_date,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Donation Date",
    type: "date"
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.payment_method,
    "onUpdate:modelValue": ($event) => $data.form.payment_method = $event,
    error: $data.form.errors.payment_method,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Payment Method"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($props.paymentMethods, (method) => {
          _push2(`<option${ssrRenderAttr("value", method.id)}${_scopeId}>${ssrInterpolate(method.name)}</option>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($props.paymentMethods, (method) => {
            return openBlock(), createBlock("option", {
              key: method.id,
              value: method.id
            }, toDisplayString(method.name), 9, ["value"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.reference_no,
    "onUpdate:modelValue": ($event) => $data.form.reference_no = $event,
    error: $data.form.errors.reference_no,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Reference No"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.purpose,
    "onUpdate:modelValue": ($event) => $data.form.purpose = $event,
    error: $data.form.errors.purpose,
    class: "pb-8 pr-6 w-full lg:w-full",
    label: "Purpose"
  }, null, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Create Donation `);
      } else {
        return [
          createTextVNode(" Create Donation ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Donations/Create.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const Create$9 = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["ssrRender", _sfc_ssrRender$H]]);
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create$9
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$G = {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    Select2Input
  },
  layout: Layout,
  props: {
    donors: Array,
    campaigns: Array,
    donation: Object,
    paymentMethods: Array
  },
  data() {
    return {
      form: this.$inertia.form({
        type: this.donation.type,
        type_id: this.donation.type_id,
        amount: this.donation.amount,
        donation_date: this.donation.transaction_date,
        payment_method: this.donation.payment_method,
        reference_no: this.donation.reference_no,
        purpose: this.donation.description
      }),
      entitySelectKey: 0
    };
  },
  computed: {
    typeOptions() {
      return this.form.type === "donor" ? this.donors.map((d) => ({ id: d.id, name: d.full_name })) : this.campaigns.map((c) => ({ id: c.id, name: c.title }));
    }
  },
  watch: {
    // Reset type_id when type changes (donor <-> campaign)
    "form.type"(newVal) {
      this.form.type_id = null;
      this.entitySelectKey += 1;
    },
    "form.type_id"(newVal) {
      if (this.form.type === "donor" && newVal) {
        this.fetchDonorDefaults(newVal);
      }
    }
  },
  methods: {
    update() {
      this.form.put(`/donations/${this.donation.id}`);
    },
    async fetchDonorDefaults(donorId) {
      try {
        const response = await axios.get(`/donors/${donorId}/defaults`);
        if (response.data.monthly_donation !== void 0) {
          this.form.amount = response.data.monthly_donation;
        }
        if (response.data.payment_method_id !== void 0) {
          this.form.payment_method = response.data.payment_method;
        }
      } catch (error) {
        console.error("Failed to fetch donor defaults:", error);
      }
    },
    destroy() {
      if (confirm("Are you sure you want to delete this donation?")) {
        this.$inertia.delete(`/donations/${this.donation.id}`);
      }
    }
  }
};
function _sfc_ssrRender$G(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_select_input = resolveComponent("select-input");
  const _component_select2_input = resolveComponent("select2-input");
  const _component_text_input = resolveComponent("text-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 sm:px-6 lg:px-8" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Edit Donation" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: "/donations"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Donations`);
      } else {
        return [
          createTextVNode("Donations")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="text-indigo-400 font-medium">/</span> Edit </h1><div class="bg-white rounded-md shadow overflow-hidden"><form><div class="flex flex-wrap -mb-8 -mr-6 p-8">`);
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.type,
    "onUpdate:modelValue": ($event) => $data.form.type = $event,
    error: $data.form.errors.type,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Donation Type",
    disabled: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option value="donor"${_scopeId}>Donor</option><option value="campaign"${_scopeId}>Campaign</option>`);
      } else {
        return [
          createVNode("option", { value: "donor" }, "Donor"),
          createVNode("option", { value: "campaign" }, "Campaign")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_select2_input, {
    modelValue: $data.form.type_id,
    "onUpdate:modelValue": ($event) => $data.form.type_id = $event,
    options: $options.typeOptions,
    error: $data.form.errors.type_id,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Select Donor or Campaign",
    key: $data.entitySelectKey
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.amount,
    "onUpdate:modelValue": ($event) => $data.form.amount = $event,
    error: $data.form.errors.amount,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Amount (PKR)",
    type: "number"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.donation_date,
    "onUpdate:modelValue": ($event) => $data.form.donation_date = $event,
    error: $data.form.errors.donation_date,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Donation Date",
    type: "date"
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.payment_method,
    "onUpdate:modelValue": ($event) => $data.form.payment_method = $event,
    error: $data.form.errors.payment_method,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Payment Method"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($props.paymentMethods, (method) => {
          _push2(`<option${ssrRenderAttr("value", method.id)}${_scopeId}>${ssrInterpolate(method.name)}</option>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($props.paymentMethods, (method) => {
            return openBlock(), createBlock("option", {
              key: method.id,
              value: method.id
            }, toDisplayString(method.name), 9, ["value"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.reference_no,
    "onUpdate:modelValue": ($event) => $data.form.reference_no = $event,
    error: $data.form.errors.reference_no,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Reference No"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.purpose,
    "onUpdate:modelValue": ($event) => $data.form.purpose = $event,
    error: $data.form.errors.purpose,
    class: "pb-8 pr-6 w-full lg:w-full",
    label: "Purpose"
  }, null, _parent));
  _push(`</div><div class="flex items-center justify-between px-8 py-4 bg-gray-50 border-t border-gray-100">`);
  if (!$data.form.processing && _ctx.$can("delete-donation")) {
    _push(`<button type="button" class="text-red-600 hover:text-red-900">Delete Donation</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Update Donation `);
      } else {
        return [
          createTextVNode(" Update Donation ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Donations/Edit.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const Edit$9 = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["ssrRender", _sfc_ssrRender$G]]);
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$9
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$F = {
  components: {
    Head,
    Icon,
    Link,
    Pagination,
    SearchFilter
  },
  layout: Layout,
  props: {
    filters: Object,
    donations: Object
  },
  data() {
    return {
      form: {
        search: this.filters.search,
        trashed: this.filters.trashed
      }
    };
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function() {
        this.$inertia.get("/donations", pickBy(this.form), { preserveState: true });
      }, 150)
    }
  },
  methods: {
    reset() {
      this.form = mapValues(this.form, () => null);
    }
  }
};
function _sfc_ssrRender$F(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_search_filter = resolveComponent("search-filter");
  const _component_Link = resolveComponent("Link");
  const _component_icon = resolveComponent("icon");
  const _component_pagination = resolveComponent("pagination");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Donations" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Donations</h1><div class="flex items-center justify-between mb-6">`);
  _push(ssrRenderComponent(_component_search_filter, {
    modelValue: $data.form.search,
    "onUpdate:modelValue": ($event) => $data.form.search = $event,
    class: "mr-4 w-full max-w-md",
    onReset: $options.reset
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<label class="block text-gray-700"${_scopeId}>Trashed:</label><select class="form-select mt-1 w-full"${_scopeId}><option${ssrRenderAttr("value", null)}${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, null) : ssrLooseEqual($data.form.trashed, null)) ? " selected" : ""}${_scopeId}></option><option value="with"${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, "with") : ssrLooseEqual($data.form.trashed, "with")) ? " selected" : ""}${_scopeId}>With Trashed</option><option value="only"${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, "only") : ssrLooseEqual($data.form.trashed, "only")) ? " selected" : ""}${_scopeId}>Only Trashed</option></select>`);
      } else {
        return [
          createVNode("label", { class: "block text-gray-700" }, "Trashed:"),
          withDirectives(createVNode("select", {
            "onUpdate:modelValue": ($event) => $data.form.trashed = $event,
            class: "form-select mt-1 w-full"
          }, [
            createVNode("option", { value: null }),
            createVNode("option", { value: "with" }, "With Trashed"),
            createVNode("option", { value: "only" }, "Only Trashed")
          ], 8, ["onUpdate:modelValue"]), [
            [vModelSelect, $data.form.trashed]
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  if (_ctx.$can("create-donation")) {
    _push(ssrRenderComponent(_component_Link, {
      class: "btn-indigo",
      href: "/donations/create"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span${_scopeId}>Create</span><span class="hidden md:inline"${_scopeId}> Donation</span>`);
        } else {
          return [
            createVNode("span", null, "Create"),
            createVNode("span", { class: "hidden md:inline" }, " Donation")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="bg-white rounded-md shadow overflow-x-auto"><table class="w-full whitespace-nowrap"><thead><tr class="text-left font-bold"><th class="pb-4 pt-6 px-6">Amount</th><th class="pb-4 pt-6 px-6">Date</th><th class="pb-4 pt-6 px-6">Payment Method</th><th class="pb-4 pt-6 px-6">Purpose</th><th class="pb-4 pt-6 px-6">Type</th><th class="pb-4 pt-6 px-6">Type Name</th><th class="pb-4 pt-6 px-6" colspan="2"></th></tr></thead><tbody><!--[-->`);
  ssrRenderList($props.donations.data, (donation) => {
    var _a;
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t px-6 py-4">${ssrInterpolate(donation.amount)}</td><td class="border-t px-6 py-4">${ssrInterpolate(donation.donation_date)}</td><td class="border-t px-6 py-4">${ssrInterpolate(donation.payment_method)}</td><td class="border-t px-6 py-4">${ssrInterpolate(donation.purpose || "-")}</td><td class="border-t px-6 py-4 capitalize">${ssrInterpolate(((_a = donation.type) == null ? void 0 : _a.split("\\").pop()) || "-")}</td><td class="border-t px-6 py-4">${ssrInterpolate(donation.type_name || "-")}</td><td class="w-px border-t">`);
    if (_ctx.$can("edit-donation")) {
      _push(ssrRenderComponent(_component_Link, {
        class: "flex items-center px-4",
        href: `/donations/${donation.id}/edit`,
        tabindex: "-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_icon, {
              name: "cheveron-right",
              class: "block w-6 h-6 fill-gray-400"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_icon, {
                name: "cheveron-right",
                class: "block w-6 h-6 fill-gray-400"
              })
            ];
          }
        }),
        _: 2
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.donations.data.length === 0) {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="7">No donations found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</tbody></table></div>`);
  _push(ssrRenderComponent(_component_pagination, {
    class: "mt-6",
    links: $props.donations.links
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Donations/Index.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const Index$a = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["ssrRender", _sfc_ssrRender$F]]);
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$a
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$E = {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    Select2Input
  },
  layout: Layout,
  remember: "form",
  props: {
    cities: Array,
    countries: Array,
    paymentMethods: Array
  },
  data() {
    const pakistan = this.countries.find((c) => c.name === "Pakistan");
    const pakistaniCities = pakistan ? this.cities.filter((city) => city.country_id === pakistan.id) : [];
    const peshawar = pakistaniCities.find((city) => city.name === "Peshawar");
    return {
      form: this.$inertia.form({
        full_name: null,
        email: null,
        phone: null,
        address: null,
        country_id: pakistan ? pakistan.id : null,
        city_id: peshawar ? peshawar.id : null,
        donor_type: "Individual",
        monthly_donation: 0,
        payment_method: this.paymentMethods.length > 0 ? this.paymentMethods[0].id : null
      }),
      filteredCities: [],
      citySelectKey: 0
    };
  },
  mounted() {
    const pakistan = this.countries.find((c) => c.name === "Pakistan");
    if (pakistan) {
      this.form.country_id = pakistan.id;
      this.filteredCities = this.cities.filter((city) => city.country_id === pakistan.id);
      const peshawar = this.filteredCities.find((city) => city.name === "Peshawar");
      if (peshawar) {
        this.form.city_id = peshawar.id;
      }
      this.citySelectKey++;
    }
  },
  methods: {
    store() {
      this.form.post("/donors");
    },
    initializeDefaultCity() {
      if (this.form.country_id && !this.form.city_id) {
        const pakistan = this.countries.find((c) => c.id === this.form.country_id);
        if (pakistan && pakistan.name === "Pakistan") {
          const pakistaniCities = this.cities.filter((city) => city.country_id === pakistan.id);
          this.filteredCities = pakistaniCities;
          const peshawar = pakistaniCities.find((city) => city.name === "Peshawar");
          if (peshawar) {
            this.form.city_id = peshawar.id;
            this.citySelectKey++;
          }
        }
      }
    }
  },
  watch: {
    async "form.country_id"(newVal) {
      if (!newVal) {
        this.filteredCities = [];
        this.form.city_id = null;
        this.citySelectKey += 1;
        return;
      }
      try {
        const response = await axios.get(`/countries/${newVal}/cities`);
        this.filteredCities = response.data;
        const selectedCountry = this.countries.find((c) => c.id === newVal);
        if ((selectedCountry == null ? void 0 : selectedCountry.name) === "Pakistan") {
          const peshawar = this.filteredCities.find((city) => city.name === "Peshawar");
          this.form.city_id = peshawar ? peshawar.id : null;
        } else {
          this.form.city_id = null;
        }
        this.citySelectKey += 1;
      } catch (error) {
        console.error("Error fetching cities:", error);
        this.filteredCities = [];
        this.form.city_id = null;
        this.citySelectKey += 1;
      }
    }
  }
};
function _sfc_ssrRender$E(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_select2_input = resolveComponent("select2-input");
  const _component_select_input = resolveComponent("select-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 sm:px-6 lg:px-8" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Create Donor" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: "/donors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Donors`);
      } else {
        return [
          createTextVNode("Donors")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="text-indigo-400 font-medium">/</span> Create </h1><div class="bg-white rounded-md shadow overflow-hidden"><form><div class="flex flex-wrap -mb-8 -mr-6 p-8">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.full_name,
    "onUpdate:modelValue": ($event) => $data.form.full_name = $event,
    error: $data.form.errors.full_name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Full Name(required)"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    error: $data.form.errors.email,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Email (optional)"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.phone,
    "onUpdate:modelValue": ($event) => $data.form.phone = $event,
    error: $data.form.errors.phone,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Phone (optional)"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.address,
    "onUpdate:modelValue": ($event) => $data.form.address = $event,
    error: $data.form.errors.address,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Address (optional)"
  }, null, _parent));
  _push(ssrRenderComponent(_component_select2_input, {
    modelValue: $data.form.country_id,
    "onUpdate:modelValue": ($event) => $data.form.country_id = $event,
    options: $props.countries,
    error: $data.form.errors.country_id,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Country"
  }, null, _parent));
  _push(ssrRenderComponent(_component_select2_input, {
    modelValue: $data.form.city_id,
    "onUpdate:modelValue": ($event) => $data.form.city_id = $event,
    options: $data.filteredCities,
    error: $data.form.errors.city_id,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "City",
    disabled: !$data.form.country_id,
    key: $data.citySelectKey
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.payment_method,
    "onUpdate:modelValue": ($event) => $data.form.payment_method = $event,
    error: $data.form.errors.payment_method,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Payment Method"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($props.paymentMethods, (method) => {
          _push2(`<option${ssrRenderAttr("value", method.id)}${_scopeId}>${ssrInterpolate(method.name)}</option>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($props.paymentMethods, (method) => {
            return openBlock(), createBlock("option", {
              key: method.id,
              value: method.id
            }, toDisplayString(method.name), 9, ["value"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.donor_type,
    "onUpdate:modelValue": ($event) => $data.form.donor_type = $event,
    error: $data.form.errors.donor_type,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Donor Type"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option value="Individual"${_scopeId}>Individual</option><option value="Organization"${_scopeId}>Organization</option>`);
      } else {
        return [
          createVNode("option", { value: "Individual" }, "Individual"),
          createVNode("option", { value: "Organization" }, "Organization")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.monthly_donation,
    "onUpdate:modelValue": ($event) => $data.form.monthly_donation = $event,
    error: $data.form.errors.monthly_donation,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Monthly Donation (PKR) (required)",
    type: "number"
  }, null, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Create Donor `);
      } else {
        return [
          createTextVNode(" Create Donor ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Donors/Create.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const Create$8 = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["ssrRender", _sfc_ssrRender$E]]);
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create$8
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$D = {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    Select2Input
  },
  layout: Layout,
  remember: "form",
  props: {
    donor: Object,
    countries: Array,
    cities: Array,
    paymentMethods: Array
  },
  data() {
    return {
      form: this.$inertia.form({
        full_name: this.donor.full_name,
        email: this.donor.email,
        phone: this.donor.phone,
        address: this.donor.address,
        country_id: this.donor.country_id,
        city_id: this.donor.city_id,
        donor_type: this.donor.donor_type,
        monthly_donation: this.donor.monthly_donation,
        payment_method: this.donor.payment_method ?? (this.paymentMethods.length > 0 ? this.paymentMethods[0].id : null)
      }),
      filteredCities: [],
      citySelectKey: 0
    };
  },
  async mounted() {
    if (this.form.country_id) {
      await this.fetchCities(this.form.country_id);
    }
  },
  methods: {
    update() {
      this.form.put(`/donors/${this.donor.id}`);
    },
    destroy() {
      if (confirm("Are you sure you want to delete this donor?")) {
        this.$inertia.delete(`/donors/${this.donor.id}`);
      }
    },
    async fetchCities(countryId) {
      if (!countryId) {
        this.filteredCities = [];
        this.form.city_id = null;
        this.citySelectKey += 1;
        return;
      }
      try {
        const response = await axios.get(`/countries/${countryId}/cities`);
        this.filteredCities = response.data;
        await nextTick();
        const validCity = this.filteredCities.find((city) => city.id === this.form.city_id);
        if (!validCity) {
          this.form.city_id = null;
        }
        this.citySelectKey += 1;
      } catch (error) {
        console.error("Error fetching cities:", error);
        this.filteredCities = [];
        this.form.city_id = null;
        this.citySelectKey += 1;
      }
    }
  },
  watch: {
    "form.country_id"(newVal) {
      this.fetchCities(newVal);
    }
  }
};
function _sfc_ssrRender$D(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_select2_input = resolveComponent("select2-input");
  const _component_select_input = resolveComponent("select-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 sm:px-6 lg:px-8" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: `Edit Donor - ${$data.form.full_name}`
  }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: "/donors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Donors`);
      } else {
        return [
          createTextVNode("Donors")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="text-indigo-400 font-medium">/</span> Edit </h1><div class="bg-white rounded-md shadow overflow-hidden"><form><div class="flex flex-wrap -mb-8 -mr-6 p-8">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.full_name,
    "onUpdate:modelValue": ($event) => $data.form.full_name = $event,
    error: $data.form.errors.full_name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Full Name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    error: $data.form.errors.email,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Email"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.phone,
    "onUpdate:modelValue": ($event) => $data.form.phone = $event,
    error: $data.form.errors.phone,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Phone"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.address,
    "onUpdate:modelValue": ($event) => $data.form.address = $event,
    error: $data.form.errors.address,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Address"
  }, null, _parent));
  _push(ssrRenderComponent(_component_select2_input, {
    modelValue: $data.form.country_id,
    "onUpdate:modelValue": ($event) => $data.form.country_id = $event,
    options: $props.countries,
    error: $data.form.errors.country_id,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Country",
    onChange: $options.fetchCities
  }, null, _parent));
  _push(ssrRenderComponent(_component_select2_input, {
    modelValue: $data.form.city_id,
    "onUpdate:modelValue": ($event) => $data.form.city_id = $event,
    options: $data.filteredCities,
    error: $data.form.errors.city_id,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "City",
    disabled: !$data.form.country_id,
    key: $data.citySelectKey
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.payment_method,
    "onUpdate:modelValue": ($event) => $data.form.payment_method = $event,
    error: $data.form.errors.payment_method,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Payment Method"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($props.paymentMethods, (method) => {
          _push2(`<option${ssrRenderAttr("value", method.id)}${_scopeId}>${ssrInterpolate(method.name)}</option>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($props.paymentMethods, (method) => {
            return openBlock(), createBlock("option", {
              key: method.id,
              value: method.id
            }, toDisplayString(method.name), 9, ["value"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.donor_type,
    "onUpdate:modelValue": ($event) => $data.form.donor_type = $event,
    error: $data.form.errors.donor_type,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Donor Type"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option value="Individual"${_scopeId}>Individual</option><option value="Organization"${_scopeId}>Organization</option>`);
      } else {
        return [
          createVNode("option", { value: "Individual" }, "Individual"),
          createVNode("option", { value: "Organization" }, "Organization")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.monthly_donation,
    "onUpdate:modelValue": ($event) => $data.form.monthly_donation = $event,
    error: $data.form.errors.monthly_donation,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Monthly Donation (PKR)",
    type: "number"
  }, null, _parent));
  _push(`</div><div class="flex items-center justify-between px-8 py-4 bg-gray-50 border-t border-gray-100">`);
  if (!$data.form.processing && _ctx.$can("delete-donor")) {
    _push(`<button type="button" class="text-red-600 hover:text-red-900">Delete Donor</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Update Donor`);
      } else {
        return [
          createTextVNode("Update Donor")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Donors/Edit.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const Edit$8 = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["ssrRender", _sfc_ssrRender$D]]);
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$8
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$C = {
  components: {
    Head,
    Icon,
    Link,
    Pagination,
    SearchFilter
  },
  layout: Layout,
  props: {
    filters: Object,
    donors: Object
  },
  data() {
    return {
      form: {
        search: this.filters.search,
        trashed: this.filters.trashed
      }
    };
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function() {
        this.$inertia.get("/donors", pickBy(this.form), { preserveState: true });
      }, 150)
    }
  },
  methods: {
    reset() {
      this.form = mapValues(this.form, () => null);
    }
  }
};
function _sfc_ssrRender$C(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_search_filter = resolveComponent("search-filter");
  const _component_Link = resolveComponent("Link");
  const _component_icon = resolveComponent("icon");
  const _component_pagination = resolveComponent("pagination");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Donors" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Donors</h1><div class="flex items-center justify-between mb-6">`);
  _push(ssrRenderComponent(_component_search_filter, {
    modelValue: $data.form.search,
    "onUpdate:modelValue": ($event) => $data.form.search = $event,
    class: "mr-4 w-full max-w-md",
    onReset: $options.reset
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<label class="block text-gray-700"${_scopeId}>Trashed:</label><select class="form-select mt-1 w-full"${_scopeId}><option${ssrRenderAttr("value", null)}${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, null) : ssrLooseEqual($data.form.trashed, null)) ? " selected" : ""}${_scopeId}></option><option value="with"${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, "with") : ssrLooseEqual($data.form.trashed, "with")) ? " selected" : ""}${_scopeId}>With Trashed</option><option value="only"${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, "only") : ssrLooseEqual($data.form.trashed, "only")) ? " selected" : ""}${_scopeId}>Only Trashed</option></select>`);
      } else {
        return [
          createVNode("label", { class: "block text-gray-700" }, "Trashed:"),
          withDirectives(createVNode("select", {
            "onUpdate:modelValue": ($event) => $data.form.trashed = $event,
            class: "form-select mt-1 w-full"
          }, [
            createVNode("option", { value: null }),
            createVNode("option", { value: "with" }, "With Trashed"),
            createVNode("option", { value: "only" }, "Only Trashed")
          ], 8, ["onUpdate:modelValue"]), [
            [vModelSelect, $data.form.trashed]
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  if (_ctx.$can("create-donor")) {
    _push(ssrRenderComponent(_component_Link, {
      class: "btn-indigo",
      href: "/donors/create"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span${_scopeId}>Create</span><span class="hidden md:inline"${_scopeId}> Donor</span>`);
        } else {
          return [
            createVNode("span", null, "Create"),
            createVNode("span", { class: "hidden md:inline" }, " Donor")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="bg-white rounded-md shadow overflow-x-auto"><table class="w-full whitespace-nowrap"><thead><tr class="text-left font-bold"><th class="pb-4 pt-6 px-6">Full Name</th><th class="pb-4 pt-6 px-6">City</th><th class="pb-4 pt-6 px-6">Payment Method</th><th class="pb-4 pt-6 px-6" colspan="2">Phone</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($props.donors.data, (donor) => {
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: `/donors/${donor.id}/edit`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(donor.full_name)} `);
          if (donor.deleted_at) {
            _push2(ssrRenderComponent(_component_icon, {
              name: "trash",
              class: "shrink-0 ml-2 w-3 h-3 fill-gray-400"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        } else {
          return [
            createTextVNode(toDisplayString(donor.full_name) + " ", 1),
            donor.deleted_at ? (openBlock(), createBlock(_component_icon, {
              key: 0,
              name: "trash",
              class: "shrink-0 ml-2 w-3 h-3 fill-gray-400"
            })) : createCommentVNode("", true)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: `/donors/${donor.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(donor.city)}`);
        } else {
          return [
            createTextVNode(toDisplayString(donor.city), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: `/donors/${donor.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(donor.payment_method)}`);
        } else {
          return [
            createTextVNode(toDisplayString(donor.payment_method), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: `/donors/${donor.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(donor.phone)}`);
        } else {
          return [
            createTextVNode(toDisplayString(donor.phone), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td>`);
    if (_ctx.$can("edit-donor")) {
      _push(`<td class="w-px border-t">`);
      _push(ssrRenderComponent(_component_Link, {
        class: "flex items-center px-4",
        href: `/donors/${donor.id}/edit`,
        tabindex: "-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_icon, {
              name: "cheveron-right",
              class: "block w-6 h-6 fill-gray-400"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_icon, {
                name: "cheveron-right",
                class: "block w-6 h-6 fill-gray-400"
              })
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</td>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</tr>`);
  });
  _push(`<!--]-->`);
  if ($props.donors.data.length === 0) {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="5">No donors found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</tbody></table></div>`);
  _push(ssrRenderComponent(_component_pagination, {
    class: "mt-6",
    links: $props.donors.links
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Donors/Index.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const Index$9 = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["ssrRender", _sfc_ssrRender$C]]);
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$9
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$B = {
  components: {
    Head,
    Link,
    LoadingButton
  },
  layout: Layout,
  remember: "form",
  data() {
    return {
      form: this.$inertia.form({
        name: "",
        description: ""
      })
    };
  },
  methods: {
    store() {
      this.form.post("/expenseheads");
    }
  }
};
function _sfc_ssrRender$B(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 sm:px-6 lg:px-8" }, _attrs))} data-v-f34f033a>`);
  _push(ssrRenderComponent(_component_Head, { title: "Create Expense Head" }, null, _parent));
  _push(`<div class="flex items-center mb-8" data-v-f34f033a>`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-500 hover:text-indigo-700 font-medium",
    href: "/expenseheads"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="inline-flex items-center" data-v-f34f033a${_scopeId}><svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-f34f033a${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-v-f34f033a${_scopeId}></path></svg> Back to Expense Heads </span>`);
      } else {
        return [
          createVNode("span", { class: "inline-flex items-center" }, [
            (openBlock(), createBlock("svg", {
              class: "w-5 h-5 mr-1",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              createVNode("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M10 19l-7-7m0 0l7-7m-7 7h18"
              })
            ])),
            createTextVNode(" Back to Expense Heads ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><h1 class="mb-6 text-3xl font-bold text-gray-800" data-v-f34f033a>Create Expense Head</h1><div class="bg-white rounded-lg shadow overflow-hidden" data-v-f34f033a><form data-v-f34f033a><div class="p-8 space-y-6" data-v-f34f033a><div class="grid grid-cols-1 gap-6" data-v-f34f033a><div data-v-f34f033a><label for="name" class="block text-sm font-medium text-gray-700 mb-1" data-v-f34f033a>Name</label><input type="text" id="name"${ssrRenderAttr("value", $data.form.name)} class="form-input w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter expense head name (e.g. Salaries, Utilities, Rent)" data-v-f34f033a>`);
  if ($data.form.errors.name) {
    _push(`<p class="mt-1 text-sm text-red-600" data-v-f34f033a>${ssrInterpolate($data.form.errors.name)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div data-v-f34f033a><label for="description" class="block text-sm font-medium text-gray-700 mb-1" data-v-f34f033a>Description</label><textarea id="description" rows="4" class="form-textarea w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter description (optional)" data-v-f34f033a>${ssrInterpolate($data.form.description)}</textarea>`);
  if ($data.form.errors.description) {
    _push(`<p class="mt-1 text-sm text-red-600" data-v-f34f033a>${ssrInterpolate($data.form.errors.description)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div><div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-200" data-v-f34f033a>`);
  _push(ssrRenderComponent(_component_Link, {
    href: "/expenseheads",
    class: "inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-4"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Cancel `);
      } else {
        return [
          createTextVNode(" Cancel ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Create Expense Head `);
      } else {
        return [
          createTextVNode(" Create Expense Head ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/ExpenseHeads/Create.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const Create$7 = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["ssrRender", _sfc_ssrRender$B], ["__scopeId", "data-v-f34f033a"]]);
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create$7
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$A = {
  components: {
    Head,
    Link,
    LoadingButton
  },
  layout: Layout,
  props: {
    expenseHead: Object
  },
  data() {
    return {
      form: this.$inertia.form({
        name: this.expenseHead.name,
        description: this.expenseHead.description
      })
    };
  },
  methods: {
    update() {
      this.form.put(`/expenseheads/${this.expenseHead.id}`);
    },
    destroy() {
      if (confirm("Are you sure you want to delete this expense head?")) {
        this.$inertia.delete(`/expenseheads/${this.expenseHead.id}`);
      }
    }
  }
};
function _sfc_ssrRender$A(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 sm:px-6 lg:px-8" }, _attrs))} data-v-099c6835>`);
  _push(ssrRenderComponent(_component_Head, {
    title: `Edit Expense Head - ${$data.form.name}`
  }, null, _parent));
  _push(`<div class="flex items-center mb-8" data-v-099c6835>`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-500 hover:text-indigo-700 font-medium",
    href: "/expenseheads"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="inline-flex items-center" data-v-099c6835${_scopeId}><svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-099c6835${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-v-099c6835${_scopeId}></path></svg> Back to Expense Heads </span>`);
      } else {
        return [
          createVNode("span", { class: "inline-flex items-center" }, [
            (openBlock(), createBlock("svg", {
              class: "w-5 h-5 mr-1",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              createVNode("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M10 19l-7-7m0 0l7-7m-7 7h18"
              })
            ])),
            createTextVNode(" Back to Expense Heads ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><h1 class="mb-6 text-3xl font-bold text-gray-800" data-v-099c6835>Edit Expense Head: ${ssrInterpolate($data.form.name)}</h1><div class="bg-white rounded-lg shadow overflow-hidden" data-v-099c6835><form data-v-099c6835><div class="p-8 space-y-6" data-v-099c6835><div class="grid grid-cols-1 gap-6" data-v-099c6835><div data-v-099c6835><label for="name" class="block text-sm font-medium text-gray-700 mb-1" data-v-099c6835>Name</label><input type="text" id="name"${ssrRenderAttr("value", $data.form.name)} class="form-input w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter expense head name (e.g. Salaries, Utilities, Rent)" data-v-099c6835>`);
  if ($data.form.errors.name) {
    _push(`<p class="mt-1 text-sm text-red-600" data-v-099c6835>${ssrInterpolate($data.form.errors.name)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div data-v-099c6835><label for="description" class="block text-sm font-medium text-gray-700 mb-1" data-v-099c6835>Description</label><textarea id="description" rows="4" class="form-textarea w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter description (optional)" data-v-099c6835>${ssrInterpolate($data.form.description)}</textarea>`);
  if ($data.form.errors.description) {
    _push(`<p class="mt-1 text-sm text-red-600" data-v-099c6835>${ssrInterpolate($data.form.errors.description)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div><div class="flex items-center justify-between px-8 py-4 bg-gray-50 border-t border-gray-200" data-v-099c6835>`);
  if (!$data.form.processing) {
    _push(`<button type="button" class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" data-v-099c6835>Delete Expense Head</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="flex space-x-3" data-v-099c6835>`);
  _push(ssrRenderComponent(_component_Link, {
    href: "/expenseheads",
    class: "inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Cancel `);
      } else {
        return [
          createTextVNode(" Cancel ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Update Expense Head `);
      } else {
        return [
          createTextVNode(" Update Expense Head ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></form></div></div>`);
}
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/ExpenseHeads/Edit.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const Edit$7 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["ssrRender", _sfc_ssrRender$A], ["__scopeId", "data-v-099c6835"]]);
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$7
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$z = {
  components: {
    Head,
    Link,
    Pagination,
    SearchFilter
  },
  layout: Layout,
  props: {
    filters: Object,
    expense_heads: Object
  },
  data() {
    return {
      form: {
        search: this.filters.search,
        trashed: this.filters.trashed
      }
    };
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function() {
        this.$inertia.get("/expenseheads", pickBy(this.form), { preserveState: true });
      }, 150)
    }
  },
  methods: {
    reset() {
      this.form = mapValues(this.form, () => null);
    },
    destroy(head) {
      if (confirm(`Are you sure you want to delete "${head.name}"?`)) {
        this.$inertia.delete(`/expenseheads/${head.id}`);
      }
    },
    restore(head) {
      this.$inertia.put(`/expenseheads/${head.id}/restore`);
    }
  }
};
function _sfc_ssrRender$z(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_search_filter = resolveComponent("search-filter");
  const _component_pagination = resolveComponent("pagination");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Expense Heads" }, null, _parent));
  _push(`<div class="flex justify-between items-center mb-6"><h1 class="text-3xl font-bold text-gray-800">Expense Heads</h1>`);
  _push(ssrRenderComponent(_component_Link, {
    class: "btn-indigo",
    href: "/expenseheads/create"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Create Expense Head</span>`);
      } else {
        return [
          createVNode("span", null, "Create Expense Head")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="bg-white rounded-lg shadow mb-6"><div class="p-4 border-b border-gray-200">`);
  _push(ssrRenderComponent(_component_search_filter, {
    modelValue: $data.form.search,
    "onUpdate:modelValue": ($event) => $data.form.search = $event,
    class: "w-full",
    onReset: $options.reset
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0"${_scopeId}><div class="flex-1"${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Search</label><input type="text"${ssrRenderAttr("value", $data.form.search)} class="form-input w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Search by name or description..."${_scopeId}></div><div class="w-full md:w-1/4"${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Status</label><select class="form-select w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"${_scopeId}><option${ssrRenderAttr("value", null)}${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, null) : ssrLooseEqual($data.form.trashed, null)) ? " selected" : ""}${_scopeId}>Active</option><option value="with"${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, "with") : ssrLooseEqual($data.form.trashed, "with")) ? " selected" : ""}${_scopeId}>All</option><option value="only"${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, "only") : ssrLooseEqual($data.form.trashed, "only")) ? " selected" : ""}${_scopeId}>Deleted</option></select></div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0" }, [
            createVNode("div", { class: "flex-1" }, [
              createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Search"),
              withDirectives(createVNode("input", {
                type: "text",
                "onUpdate:modelValue": ($event) => $data.form.search = $event,
                class: "form-input w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",
                placeholder: "Search by name or description..."
              }, null, 8, ["onUpdate:modelValue"]), [
                [vModelText, $data.form.search]
              ])
            ]),
            createVNode("div", { class: "w-full md:w-1/4" }, [
              createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Status"),
              withDirectives(createVNode("select", {
                "onUpdate:modelValue": ($event) => $data.form.trashed = $event,
                class: "form-select w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              }, [
                createVNode("option", { value: null }, "Active"),
                createVNode("option", { value: "with" }, "All"),
                createVNode("option", { value: "only" }, "Deleted")
              ], 8, ["onUpdate:modelValue"]), [
                [vModelSelect, $data.form.trashed]
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="bg-white rounded-lg shadow overflow-hidden"><table class="min-w-full divide-y divide-gray-200"><thead class="bg-gray-50"><tr><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th><th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th></tr></thead><tbody class="bg-white divide-y divide-gray-200"><!--[-->`);
  ssrRenderList($props.expense_heads.data, (head) => {
    _push(`<tr class="hover:bg-gray-50 transition-colors"><td class="px-6 py-4 text-sm text-gray-500">${ssrInterpolate(head.id)}</td><td class="px-6 py-4 text-sm font-medium text-gray-900">${ssrInterpolate(head.name)}</td><td class="px-6 py-4 text-sm text-gray-900 max-w-md truncate">${ssrInterpolate(head.description || "No description")}</td><td class="px-6 py-4 text-right text-sm font-medium space-x-2"><div class="flex justify-end space-x-2">`);
    _push(ssrRenderComponent(_component_Link, {
      href: `/expenseheads/${head.id}`,
      class: "text-indigo-600 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-md"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` View `);
        } else {
          return [
            createTextVNode(" View ")
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(ssrRenderComponent(_component_Link, {
      href: `/expenseheads/${head.id}/edit`,
      class: "text-blue-600 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-md"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Edit `);
        } else {
          return [
            createTextVNode(" Edit ")
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`<button class="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-md"> Delete </button>`);
    if (head.deleted_at) {
      _push(`<button class="text-green-600 hover:text-green-900 bg-green-50 hover:bg-green-100 px-3 py-1 rounded-md"> Restore </button>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.expense_heads.data.length === 0) {
    _push(`<tr><td class="px-6 py-4 text-center text-gray-500" colspan="4"><div class="py-8"><svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path></svg><h3 class="mt-2 text-sm font-medium text-gray-900">No expense heads found</h3><p class="mt-1 text-sm text-gray-500">Get started by creating a new expense head.</p><div class="mt-6">`);
    _push(ssrRenderComponent(_component_Link, {
      href: "/expenseheads/create",
      class: "inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Create Expense Head `);
        } else {
          return [
            createTextVNode(" Create Expense Head ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div></td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</tbody></table><div class="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">`);
  _push(ssrRenderComponent(_component_pagination, {
    class: "mt-2",
    links: $props.expense_heads.links
  }, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/ExpenseHeads/Index.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const Index$8 = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["ssrRender", _sfc_ssrRender$z]]);
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$8
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$y = {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    Select2Input
  },
  layout: Layout,
  remember: "form",
  props: {
    beneficiaries: Array,
    programs: Array,
    paymentMethods: Array,
    expenseHeads: Array
  },
  data() {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    return {
      form: this.$inertia.form({
        type: "beneficiary",
        type_id: null,
        amount: "",
        transaction_date: today,
        payment_method: this.paymentMethods.length > 0 ? this.paymentMethods[0].id : null,
        reference_no: "",
        description: ""
      }),
      entitySelectKey: 0
    };
  },
  computed: {
    typeOptions() {
      if (this.form.type === "beneficiary") {
        return this.beneficiaries.map((b) => ({ id: b.id, name: b.full_name }));
      } else if (this.form.type === "program") {
        return this.programs.map((p) => ({ id: p.id, name: p.name }));
      } else if (this.form.type === "general_expense") {
        return this.expenseHeads.map((e) => ({ id: e.id, name: e.name }));
      }
    }
  },
  watch: {
    "form.type"(newVal) {
      this.form.type_id = null;
      this.entitySelectKey += 1;
    }
  },
  methods: {
    store() {
      this.form.post("/expenses");
    }
  }
};
function _sfc_ssrRender$y(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_select_input = resolveComponent("select-input");
  const _component_select2_input = resolveComponent("select2-input");
  const _component_text_input = resolveComponent("text-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 sm:px-6 lg:px-8" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Create Expense" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: "/expenses"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Expenses`);
      } else {
        return [
          createTextVNode("Expenses")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="text-indigo-400 font-medium">/</span> Create </h1><div class="bg-white rounded-md shadow overflow-hidden"><form><div class="flex flex-wrap -mb-8 -mr-6 p-8">`);
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.type,
    "onUpdate:modelValue": ($event) => $data.form.type = $event,
    error: $data.form.errors.type,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Expense Type"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option value="beneficiary"${_scopeId}>Beneficiary</option><option value="program"${_scopeId}>Program</option><option value="general_expense"${_scopeId}>General Expense</option>`);
      } else {
        return [
          createVNode("option", { value: "beneficiary" }, "Beneficiary"),
          createVNode("option", { value: "program" }, "Program"),
          createVNode("option", { value: "general_expense" }, "General Expense")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_select2_input, {
    modelValue: $data.form.type_id,
    "onUpdate:modelValue": ($event) => $data.form.type_id = $event,
    options: $options.typeOptions,
    error: $data.form.errors.type_id,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Select Beneficiary, Program OR General Expense",
    key: $data.entitySelectKey
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.amount,
    "onUpdate:modelValue": ($event) => $data.form.amount = $event,
    error: $data.form.errors.amount,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Amount (PKR)",
    type: "number"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.transaction_date,
    "onUpdate:modelValue": ($event) => $data.form.transaction_date = $event,
    error: $data.form.errors.transaction_date,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Expense Date",
    type: "date"
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.payment_method,
    "onUpdate:modelValue": ($event) => $data.form.payment_method = $event,
    error: $data.form.errors.payment_method,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Payment Method"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($props.paymentMethods, (method) => {
          _push2(`<option${ssrRenderAttr("value", method.id)}${_scopeId}>${ssrInterpolate(method.name)}</option>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($props.paymentMethods, (method) => {
            return openBlock(), createBlock("option", {
              key: method.id,
              value: method.id
            }, toDisplayString(method.name), 9, ["value"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.reference_no,
    "onUpdate:modelValue": ($event) => $data.form.reference_no = $event,
    error: $data.form.errors.reference_no,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Reference No"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.description,
    "onUpdate:modelValue": ($event) => $data.form.description = $event,
    error: $data.form.errors.description,
    class: "pb-8 pr-6 w-full lg:w-full",
    label: "Description"
  }, null, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Create Expense `);
      } else {
        return [
          createTextVNode(" Create Expense ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Expenses/Create.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const Create$6 = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$y]]);
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create$6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$x = {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    Select2Input
  },
  layout: Layout,
  props: {
    beneficiaries: Array,
    programs: Array,
    expense: Object,
    paymentMethods: Array,
    "expenseHeads": Array
  },
  data() {
    return {
      form: this.$inertia.form({
        type: this.expense.type,
        type_id: this.expense.type_id,
        amount: this.expense.amount,
        transaction_date: this.expense.transaction_date,
        payment_method: this.expense.payment_method,
        reference_no: this.expense.reference_no,
        description: this.expense.description
      }),
      entitySelectKey: 0
    };
  },
  computed: {
    typeOptions() {
      if (this.form.type === "beneficiary") {
        return this.beneficiaries.map((b) => ({ id: b.id, name: b.full_name }));
      } else if (this.form.type === "program") {
        return this.programs.map((p) => ({ id: p.id, name: p.name }));
      } else if (this.form.type === "general_expense") {
        return this.expenseHeads.map((e) => ({ id: e.id, name: e.name }));
      }
    }
  },
  methods: {
    update() {
      this.form.put(`/expenses/${this.expense.id}`);
    }
  }
};
function _sfc_ssrRender$x(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_select_input = resolveComponent("select-input");
  const _component_select2_input = resolveComponent("select2-input");
  const _component_text_input = resolveComponent("text-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 sm:px-6 lg:px-8" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Edit Expense" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: "/expenses"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Expenses`);
      } else {
        return [
          createTextVNode("Expenses")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="text-indigo-400 font-medium">/</span> Edit </h1><div class="bg-white rounded-md shadow overflow-hidden"><form><div class="flex flex-wrap -mb-8 -mr-6 p-8">`);
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.type,
    "onUpdate:modelValue": ($event) => $data.form.type = $event,
    error: $data.form.errors.type,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Expense Type",
    disabled: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option value="beneficiary"${_scopeId}>Beneficiary</option><option value="program"${_scopeId}>Program</option><option value="general_expense"${_scopeId}>General Expense</option>`);
      } else {
        return [
          createVNode("option", { value: "beneficiary" }, "Beneficiary"),
          createVNode("option", { value: "program" }, "Program"),
          createVNode("option", { value: "general_expense" }, "General Expense")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_select2_input, {
    modelValue: $data.form.type_id,
    "onUpdate:modelValue": ($event) => $data.form.type_id = $event,
    options: $options.typeOptions,
    error: $data.form.errors.type_id,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Select Beneficiary or Program",
    key: $data.entitySelectKey
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.amount,
    "onUpdate:modelValue": ($event) => $data.form.amount = $event,
    error: $data.form.errors.amount,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Amount (PKR)",
    type: "number"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.transaction_date,
    "onUpdate:modelValue": ($event) => $data.form.transaction_date = $event,
    error: $data.form.errors.transaction_date,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Expense Date",
    type: "date"
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.payment_method,
    "onUpdate:modelValue": ($event) => $data.form.payment_method = $event,
    error: $data.form.errors.payment_method,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Payment Method"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($props.paymentMethods, (method) => {
          _push2(`<option${ssrRenderAttr("value", method.id)}${_scopeId}>${ssrInterpolate(method.name)}</option>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($props.paymentMethods, (method) => {
            return openBlock(), createBlock("option", {
              key: method.id,
              value: method.id
            }, toDisplayString(method.name), 9, ["value"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.reference_no,
    "onUpdate:modelValue": ($event) => $data.form.reference_no = $event,
    error: $data.form.errors.reference_no,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Reference No"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.description,
    "onUpdate:modelValue": ($event) => $data.form.description = $event,
    error: $data.form.errors.description,
    class: "pb-8 pr-6 w-full lg:w-full",
    label: "description"
  }, null, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Update Expense `);
      } else {
        return [
          createTextVNode(" Update Expense ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Expenses/Edit.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const Edit$6 = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["ssrRender", _sfc_ssrRender$x]]);
const __vite_glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$w = {
  components: {
    Head,
    Icon,
    Link,
    Pagination,
    SearchFilter
  },
  layout: Layout,
  props: {
    filters: Object,
    expenses: Object
  },
  data() {
    return {
      form: {
        search: this.filters.search,
        trashed: this.filters.trashed
      }
    };
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function() {
        this.$inertia.get("/expenses", pickBy(this.form), { preserveState: true });
      }, 150)
    }
  },
  methods: {
    reset() {
      this.form = mapValues(this.form, () => null);
    }
  }
};
function _sfc_ssrRender$w(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_search_filter = resolveComponent("search-filter");
  const _component_Link = resolveComponent("Link");
  const _component_icon = resolveComponent("icon");
  const _component_pagination = resolveComponent("pagination");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Expenses" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Expenses</h1><div class="flex items-center justify-between mb-6">`);
  _push(ssrRenderComponent(_component_search_filter, {
    modelValue: $data.form.search,
    "onUpdate:modelValue": ($event) => $data.form.search = $event,
    class: "mr-4 w-full max-w-md",
    onReset: $options.reset
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<label class="block text-gray-700"${_scopeId}>Trashed:</label><select class="form-select mt-1 w-full"${_scopeId}><option${ssrRenderAttr("value", null)}${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, null) : ssrLooseEqual($data.form.trashed, null)) ? " selected" : ""}${_scopeId}></option><option value="with"${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, "with") : ssrLooseEqual($data.form.trashed, "with")) ? " selected" : ""}${_scopeId}>With Trashed</option><option value="only"${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, "only") : ssrLooseEqual($data.form.trashed, "only")) ? " selected" : ""}${_scopeId}>Only Trashed</option></select>`);
      } else {
        return [
          createVNode("label", { class: "block text-gray-700" }, "Trashed:"),
          withDirectives(createVNode("select", {
            "onUpdate:modelValue": ($event) => $data.form.trashed = $event,
            class: "form-select mt-1 w-full"
          }, [
            createVNode("option", { value: null }),
            createVNode("option", { value: "with" }, "With Trashed"),
            createVNode("option", { value: "only" }, "Only Trashed")
          ], 8, ["onUpdate:modelValue"]), [
            [vModelSelect, $data.form.trashed]
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    class: "btn-indigo",
    href: "/expenses/create"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Create</span><span class="hidden md:inline"${_scopeId}> Expense</span>`);
      } else {
        return [
          createVNode("span", null, "Create"),
          createVNode("span", { class: "hidden md:inline" }, " Expense")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="bg-white rounded-md shadow overflow-x-auto"><table class="w-full whitespace-nowrap"><thead><tr class="text-left font-bold"><th class="pb-4 pt-6 px-6">Amount</th><th class="pb-4 pt-6 px-6">Date</th><th class="pb-4 pt-6 px-6">Payment Method</th><th class="pb-4 pt-6 px-6">Purpose</th><th class="pb-4 pt-6 px-6">Type</th><th class="pb-4 pt-6 px-6">Type Name</th><th class="pb-4 pt-6 px-6" colspan="2">Actions</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($props.expenses.data, (expense) => {
    var _a;
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t px-6 py-4">${ssrInterpolate(expense.amount)}</td><td class="border-t px-6 py-4">${ssrInterpolate(expense.transaction_date)}</td><td class="border-t px-6 py-4">${ssrInterpolate(expense.payment_method)}</td><td class="border-t px-6 py-4">${ssrInterpolate(expense.description || "-")}</td><td class="border-t px-6 py-4 capitalize">${ssrInterpolate(((_a = expense.type) == null ? void 0 : _a.split("\\").pop()) || "-")}</td><td class="border-t px-6 py-4">${ssrInterpolate(expense.type_name || "-")}</td><td class="w-px border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-4",
      href: `/expenses/${expense.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "cheveron-right",
            class: "block w-6 h-6 fill-gray-400"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_icon, {
              name: "cheveron-right",
              class: "block w-6 h-6 fill-gray-400"
            })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.expenses.data.length === 0) {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="7">No expenses found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</tbody></table></div>`);
  _push(ssrRenderComponent(_component_pagination, {
    class: "mt-6",
    links: $props.expenses.links
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Expenses/Index.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const Index$7 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$w]]);
const __vite_glob_0_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$7
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$v = {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput
  },
  layout: Layout,
  remember: "form",
  data() {
    return {
      form: this.$inertia.form({
        name: null,
        email: null,
        phone: null,
        address: null,
        city: null,
        region: null,
        country: null,
        postal_code: null
      })
    };
  },
  methods: {
    store() {
      this.form.post("/organizations");
    }
  }
};
function _sfc_ssrRender$v(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_select_input = resolveComponent("select-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Create Organization" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: "/organizations"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Organizations`);
      } else {
        return [
          createTextVNode("Organizations")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="text-indigo-400 font-medium">/</span> Create </h1><div class="max-w-3xl bg-white rounded-md shadow overflow-hidden"><form><div class="flex flex-wrap -mb-8 -mr-6 p-8">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.name,
    "onUpdate:modelValue": ($event) => $data.form.name = $event,
    error: $data.form.errors.name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    error: $data.form.errors.email,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Email"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.phone,
    "onUpdate:modelValue": ($event) => $data.form.phone = $event,
    error: $data.form.errors.phone,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Phone"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.address,
    "onUpdate:modelValue": ($event) => $data.form.address = $event,
    error: $data.form.errors.address,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Address"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.city,
    "onUpdate:modelValue": ($event) => $data.form.city = $event,
    error: $data.form.errors.city,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "City"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.region,
    "onUpdate:modelValue": ($event) => $data.form.region = $event,
    error: $data.form.errors.region,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Province/State"
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.country,
    "onUpdate:modelValue": ($event) => $data.form.country = $event,
    error: $data.form.errors.country,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Country"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}></option><option value="CA"${_scopeId}>Canada</option><option value="US"${_scopeId}>United States</option>`);
      } else {
        return [
          createVNode("option", { value: null }),
          createVNode("option", { value: "CA" }, "Canada"),
          createVNode("option", { value: "US" }, "United States")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.postal_code,
    "onUpdate:modelValue": ($event) => $data.form.postal_code = $event,
    error: $data.form.errors.postal_code,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Postal code"
  }, null, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Create Organization`);
      } else {
        return [
          createTextVNode("Create Organization")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Organizations/Create.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const Create$5 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$v]]);
const __vite_glob_0_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$u = {
  components: {
    Head,
    Icon,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    TrashedMessage
  },
  layout: Layout,
  props: {
    organization: Object
  },
  remember: "form",
  data() {
    return {
      form: this.$inertia.form({
        name: this.organization.name,
        email: this.organization.email,
        phone: this.organization.phone,
        address: this.organization.address,
        city: this.organization.city,
        region: this.organization.region,
        country: this.organization.country,
        postal_code: this.organization.postal_code
      })
    };
  },
  methods: {
    update() {
      this.form.put(`/organizations/${this.organization.id}`);
    },
    destroy() {
      if (confirm("Are you sure you want to delete this organization?")) {
        this.$inertia.delete(`/organizations/${this.organization.id}`);
      }
    },
    restore() {
      if (confirm("Are you sure you want to restore this organization?")) {
        this.$inertia.put(`/organizations/${this.organization.id}/restore`);
      }
    }
  }
};
function _sfc_ssrRender$u(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_trashed_message = resolveComponent("trashed-message");
  const _component_text_input = resolveComponent("text-input");
  const _component_select_input = resolveComponent("select-input");
  const _component_loading_button = resolveComponent("loading-button");
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: $data.form.name
  }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: "/organizations"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Organizations`);
      } else {
        return [
          createTextVNode("Organizations")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="text-indigo-400 font-medium">/</span> ${ssrInterpolate($data.form.name)}</h1>`);
  if ($props.organization.deleted_at) {
    _push(ssrRenderComponent(_component_trashed_message, {
      class: "mb-6",
      onRestore: $options.restore
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` This organization has been deleted. `);
        } else {
          return [
            createTextVNode(" This organization has been deleted. ")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="max-w-3xl bg-white rounded-md shadow overflow-hidden"><form><div class="flex flex-wrap -mb-8 -mr-6 p-8">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.name,
    "onUpdate:modelValue": ($event) => $data.form.name = $event,
    error: $data.form.errors.name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    error: $data.form.errors.email,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Email"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.phone,
    "onUpdate:modelValue": ($event) => $data.form.phone = $event,
    error: $data.form.errors.phone,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Phone"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.address,
    "onUpdate:modelValue": ($event) => $data.form.address = $event,
    error: $data.form.errors.address,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Address"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.city,
    "onUpdate:modelValue": ($event) => $data.form.city = $event,
    error: $data.form.errors.city,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "City"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.region,
    "onUpdate:modelValue": ($event) => $data.form.region = $event,
    error: $data.form.errors.region,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Province/State"
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.country,
    "onUpdate:modelValue": ($event) => $data.form.country = $event,
    error: $data.form.errors.country,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Country"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}></option><option value="CA"${_scopeId}>Canada</option><option value="US"${_scopeId}>United States</option>`);
      } else {
        return [
          createVNode("option", { value: null }),
          createVNode("option", { value: "CA" }, "Canada"),
          createVNode("option", { value: "US" }, "United States")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.postal_code,
    "onUpdate:modelValue": ($event) => $data.form.postal_code = $event,
    error: $data.form.errors.postal_code,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Postal code"
  }, null, _parent));
  _push(`</div><div class="flex items-center px-8 py-4 bg-gray-50 border-t border-gray-100">`);
  if (!$props.organization.deleted_at) {
    _push(`<button class="text-red-600 hover:underline" tabindex="-1" type="button">Delete Organization</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo ml-auto",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Update Organization`);
      } else {
        return [
          createTextVNode("Update Organization")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div><h2 class="mt-12 text-2xl font-bold">Contacts</h2><div class="mt-6 bg-white rounded shadow overflow-x-auto"><table class="w-full whitespace-nowrap"><tr class="text-left font-bold"><th class="pb-4 pt-6 px-6">Name</th><th class="pb-4 pt-6 px-6">City</th><th class="pb-4 pt-6 px-6" colspan="2">Phone</th></tr><!--[-->`);
  ssrRenderList($props.organization.contacts, (contact) => {
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: `/contacts/${contact.id}/edit`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(contact.name)} `);
          if (contact.deleted_at) {
            _push2(ssrRenderComponent(_component_icon, {
              name: "trash",
              class: "shrink-0 ml-2 w-3 h-3 fill-gray-400"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        } else {
          return [
            createTextVNode(toDisplayString(contact.name) + " ", 1),
            contact.deleted_at ? (openBlock(), createBlock(_component_icon, {
              key: 0,
              name: "trash",
              class: "shrink-0 ml-2 w-3 h-3 fill-gray-400"
            })) : createCommentVNode("", true)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: `/contacts/${contact.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(contact.city)}`);
        } else {
          return [
            createTextVNode(toDisplayString(contact.city), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: `/contacts/${contact.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(contact.phone)}`);
        } else {
          return [
            createTextVNode(toDisplayString(contact.phone), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="w-px border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-4",
      href: `/contacts/${contact.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "cheveron-right",
            class: "block w-6 h-6 fill-gray-400"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_icon, {
              name: "cheveron-right",
              class: "block w-6 h-6 fill-gray-400"
            })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.organization.contacts.length === 0) {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="4">No contacts found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</table></div></div>`);
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Organizations/Edit.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const Edit$5 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$u]]);
const __vite_glob_0_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$t = {
  components: {
    Head,
    Icon,
    Link,
    Pagination,
    SearchFilter
  },
  layout: Layout,
  props: {
    filters: Object,
    organizations: Object
  },
  data() {
    return {
      form: {
        search: this.filters.search,
        trashed: this.filters.trashed
      }
    };
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function() {
        this.$inertia.get("/organizations", pickBy(this.form), { preserveState: true });
      }, 150)
    }
  },
  methods: {
    reset() {
      this.form = mapValues(this.form, () => null);
    }
  }
};
function _sfc_ssrRender$t(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_search_filter = resolveComponent("search-filter");
  const _component_Link = resolveComponent("Link");
  const _component_icon = resolveComponent("icon");
  const _component_pagination = resolveComponent("pagination");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Organizations" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Organizations</h1><div class="flex items-center justify-between mb-6">`);
  _push(ssrRenderComponent(_component_search_filter, {
    modelValue: $data.form.search,
    "onUpdate:modelValue": ($event) => $data.form.search = $event,
    class: "mr-4 w-full max-w-md",
    onReset: $options.reset
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<label class="block text-gray-700"${_scopeId}>Trashed:</label><select class="form-select mt-1 w-full"${_scopeId}><option${ssrRenderAttr("value", null)}${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, null) : ssrLooseEqual($data.form.trashed, null)) ? " selected" : ""}${_scopeId}></option><option value="with"${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, "with") : ssrLooseEqual($data.form.trashed, "with")) ? " selected" : ""}${_scopeId}>With Trashed</option><option value="only"${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, "only") : ssrLooseEqual($data.form.trashed, "only")) ? " selected" : ""}${_scopeId}>Only Trashed</option></select>`);
      } else {
        return [
          createVNode("label", { class: "block text-gray-700" }, "Trashed:"),
          withDirectives(createVNode("select", {
            "onUpdate:modelValue": ($event) => $data.form.trashed = $event,
            class: "form-select mt-1 w-full"
          }, [
            createVNode("option", { value: null }),
            createVNode("option", { value: "with" }, "With Trashed"),
            createVNode("option", { value: "only" }, "Only Trashed")
          ], 8, ["onUpdate:modelValue"]), [
            [vModelSelect, $data.form.trashed]
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    class: "btn-indigo",
    href: "/organizations/create"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Create</span><span class="hidden md:inline"${_scopeId}> Organization</span>`);
      } else {
        return [
          createVNode("span", null, "Create"),
          createVNode("span", { class: "hidden md:inline" }, " Organization")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="bg-white rounded-md shadow overflow-x-auto"><table class="w-full whitespace-nowrap"><thead><tr class="text-left font-bold"><th class="pb-4 pt-6 px-6">Name</th><th class="pb-4 pt-6 px-6">City</th><th class="pb-4 pt-6 px-6" colspan="2">Phone</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($props.organizations.data, (organization) => {
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: `/organizations/${organization.id}/edit`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(organization.name)} `);
          if (organization.deleted_at) {
            _push2(ssrRenderComponent(_component_icon, {
              name: "trash",
              class: "shrink-0 ml-2 w-3 h-3 fill-gray-400"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        } else {
          return [
            createTextVNode(toDisplayString(organization.name) + " ", 1),
            organization.deleted_at ? (openBlock(), createBlock(_component_icon, {
              key: 0,
              name: "trash",
              class: "shrink-0 ml-2 w-3 h-3 fill-gray-400"
            })) : createCommentVNode("", true)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: `/organizations/${organization.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(organization.city)}`);
        } else {
          return [
            createTextVNode(toDisplayString(organization.city), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: `/organizations/${organization.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(organization.phone)}`);
        } else {
          return [
            createTextVNode(toDisplayString(organization.phone), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="w-px border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-4",
      href: `/organizations/${organization.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "cheveron-right",
            class: "block w-6 h-6 fill-gray-400"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_icon, {
              name: "cheveron-right",
              class: "block w-6 h-6 fill-gray-400"
            })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.organizations.data.length === 0) {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="4">No organizations found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</tbody></table></div>`);
  _push(ssrRenderComponent(_component_pagination, {
    class: "mt-6",
    links: $props.organizations.links
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Organizations/Index.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const Index$6 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$t]]);
const __vite_glob_0_25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$s = {
  components: {
    Head,
    Link,
    LoadingButton
  },
  layout: Layout,
  remember: "form",
  data() {
    return {
      form: this.$inertia.form({
        name: "",
        is_active: true
      })
    };
  },
  methods: {
    store() {
      this.form.post("/payment-methods");
    }
  }
};
function _sfc_ssrRender$s(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 sm:px-6 lg:px-8" }, _attrs))} data-v-17072ad6>`);
  _push(ssrRenderComponent(_component_Head, { title: "Create Payment Method" }, null, _parent));
  _push(`<div class="flex items-center mb-8" data-v-17072ad6>`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-500 hover:text-indigo-700 font-medium",
    href: "/payment-methods"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="inline-flex items-center" data-v-17072ad6${_scopeId}><svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-17072ad6${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-v-17072ad6${_scopeId}></path></svg> Back to Payment Methods </span>`);
      } else {
        return [
          createVNode("span", { class: "inline-flex items-center" }, [
            (openBlock(), createBlock("svg", {
              class: "w-5 h-5 mr-1",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg"
            }, [
              createVNode("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M10 19l-7-7m0 0l7-7m-7 7h18"
              })
            ])),
            createTextVNode(" Back to Payment Methods ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><h1 class="mb-6 text-3xl font-bold text-gray-800" data-v-17072ad6>Create Payment Method</h1><div class="bg-white rounded-lg shadow overflow-hidden" data-v-17072ad6><form data-v-17072ad6><div class="p-8 space-y-6" data-v-17072ad6><div class="grid grid-cols-1 gap-6" data-v-17072ad6><div data-v-17072ad6><label for="name" class="block text-sm font-medium text-gray-700 mb-1" data-v-17072ad6>Payment Method</label><input type="text" id="name"${ssrRenderAttr("value", $data.form.name)} class="form-input w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter payment method" data-v-17072ad6>`);
  if ($data.form.errors.name) {
    _push(`<p class="mt-1 text-sm text-red-600" data-v-17072ad6>${ssrInterpolate($data.form.errors.name)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="flex items-center" data-v-17072ad6><input id="is_active" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray($data.form.is_active) ? ssrLooseContain($data.form.is_active, null) : $data.form.is_active) ? " checked" : ""} class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" data-v-17072ad6><label for="is_active" class="ml-2 block text-sm text-gray-900" data-v-17072ad6>Active</label>`);
  if ($data.form.errors.is_active) {
    _push(`<p class="mt-1 text-sm text-red-600" data-v-17072ad6>${ssrInterpolate($data.form.errors.is_active)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div><div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-200" data-v-17072ad6>`);
  _push(ssrRenderComponent(_component_Link, {
    href: "/payment-methods",
    class: "inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-4"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Cancel `);
      } else {
        return [
          createTextVNode(" Cancel ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Create Payment `);
      } else {
        return [
          createTextVNode(" Create Payment ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/PaymentMethod/Create.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const Create$4 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$s], ["__scopeId", "data-v-17072ad6"]]);
const __vite_glob_0_26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$r = {
  components: {
    Head,
    Link,
    LoadingButton
  },
  layout: Layout,
  props: {
    paymentMethod: Object
  },
  data() {
    return {
      form: this.$inertia.form({
        name: this.paymentMethod.name,
        is_active: this.paymentMethod.is_active
      })
    };
  },
  methods: {
    update() {
      this.form.put(`/payment-methods/${this.paymentMethod.id}`);
    },
    destroy() {
      if (confirm("Are you sure you want to delete this payment method?")) {
        this.$inertia.delete(`/payment-methods/${this.paymentMethod.id}`);
      }
    }
  }
};
function _sfc_ssrRender$r(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 sm:px-6 lg:px-8" }, _attrs))} data-v-98b28817>`);
  _push(ssrRenderComponent(_component_Head, {
    title: `Edit Payment Method - ${$data.form.name}`
  }, null, _parent));
  _push(`<div class="flex items-center mb-8" data-v-98b28817>`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-500 hover:text-indigo-700 font-medium",
    href: "/payment-methods"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="inline-flex items-center" data-v-98b28817${_scopeId}><svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-98b28817${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-v-98b28817${_scopeId}></path></svg> Back to Payment Methods </span>`);
      } else {
        return [
          createVNode("span", { class: "inline-flex items-center" }, [
            (openBlock(), createBlock("svg", {
              class: "w-5 h-5 mr-1",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg"
            }, [
              createVNode("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M10 19l-7-7m0 0l7-7m-7 7h18"
              })
            ])),
            createTextVNode(" Back to Payment Methods ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><h1 class="mb-6 text-3xl font-bold text-gray-800" data-v-98b28817>Edit Payment Method: ${ssrInterpolate($data.form.name)}</h1><div class="bg-white rounded-lg shadow overflow-hidden" data-v-98b28817><form data-v-98b28817><div class="p-8 space-y-6" data-v-98b28817><div class="grid grid-cols-1 gap-6" data-v-98b28817><div data-v-98b28817><label for="name" class="block text-sm font-medium text-gray-700 mb-1" data-v-98b28817>Payment Method</label><input type="text" id="name"${ssrRenderAttr("value", $data.form.name)} class="form-input w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter payment method name" data-v-98b28817>`);
  if ($data.form.errors.name) {
    _push(`<p class="mt-1 text-sm text-red-600" data-v-98b28817>${ssrInterpolate($data.form.errors.name)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="flex items-center" data-v-98b28817><input id="is_active" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray($data.form.is_active) ? ssrLooseContain($data.form.is_active, null) : $data.form.is_active) ? " checked" : ""} class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" data-v-98b28817><label for="is_active" class="ml-2 block text-sm text-gray-900" data-v-98b28817>Active</label>`);
  if ($data.form.errors.is_active) {
    _push(`<p class="mt-1 text-sm text-red-600" data-v-98b28817>${ssrInterpolate($data.form.errors.is_active)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div><div class="flex items-center justify-between px-8 py-4 bg-gray-50 border-t border-gray-200" data-v-98b28817>`);
  if (!$data.form.processing) {
    _push(`<button type="button" class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" data-v-98b28817> Delete Payment </button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="flex space-x-3" data-v-98b28817>`);
  _push(ssrRenderComponent(_component_Link, {
    href: "/payment-methods",
    class: "inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Cancel `);
      } else {
        return [
          createTextVNode(" Cancel ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Update Payment Method `);
      } else {
        return [
          createTextVNode(" Update Payment Method ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></form></div></div>`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/PaymentMethod/Edit.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const Edit$4 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$r], ["__scopeId", "data-v-98b28817"]]);
const __vite_glob_0_27 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$q = {
  components: {
    Head,
    Link,
    Pagination,
    SearchFilter
  },
  layout: Layout,
  props: {
    filters: Object,
    paymentMethods: Object
  },
  data() {
    return {
      form: {
        search: this.filters.search,
        trashed: this.filters.trashed
      }
    };
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function() {
        this.$inertia.get("/payment-methods", pickBy(this.form), { preserveState: true });
      }, 150)
    }
  },
  methods: {
    reset() {
      this.form = mapValues(this.form, () => null);
    },
    destroy(method) {
      if (confirm(`Are you sure you want to delete ${method.name}?`)) {
        this.$inertia.delete(`/payment-methods/${method.id}`);
      }
    },
    restore(method) {
      this.$inertia.put(`/payment-methods/${method.id}/restore`);
    }
  }
};
function _sfc_ssrRender$q(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_search_filter = resolveComponent("search-filter");
  const _component_pagination = resolveComponent("pagination");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-af8ca5eb>`);
  _push(ssrRenderComponent(_component_Head, { title: "Payment Methods" }, null, _parent));
  _push(`<div class="flex justify-between items-center mb-6" data-v-af8ca5eb><h1 class="text-3xl font-bold text-gray-800" data-v-af8ca5eb>Payment Methods</h1>`);
  _push(ssrRenderComponent(_component_Link, {
    class: "btn-indigo",
    href: "/payment-methods/create"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span data-v-af8ca5eb${_scopeId}>Create Payment</span>`);
      } else {
        return [
          createVNode("span", null, "Create Payment")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="bg-white rounded-lg shadow mb-6" data-v-af8ca5eb><div class="p-4 border-b border-gray-200" data-v-af8ca5eb>`);
  _push(ssrRenderComponent(_component_search_filter, {
    modelValue: $data.form.search,
    "onUpdate:modelValue": ($event) => $data.form.search = $event,
    class: "w-full",
    onReset: $options.reset
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0" data-v-af8ca5eb${_scopeId}><div class="flex-1" data-v-af8ca5eb${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1" data-v-af8ca5eb${_scopeId}>Search</label><input type="text"${ssrRenderAttr("value", $data.form.search)} class="form-input w-full" placeholder="Search by name..." data-v-af8ca5eb${_scopeId}></div><div class="w-full md:w-1/4" data-v-af8ca5eb${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1" data-v-af8ca5eb${_scopeId}>Status</label><select class="form-select w-full" data-v-af8ca5eb${_scopeId}><option${ssrRenderAttr("value", null)} data-v-af8ca5eb${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, null) : ssrLooseEqual($data.form.trashed, null)) ? " selected" : ""}${_scopeId}>Active</option><option value="with" data-v-af8ca5eb${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, "with") : ssrLooseEqual($data.form.trashed, "with")) ? " selected" : ""}${_scopeId}>All</option><option value="only" data-v-af8ca5eb${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, "only") : ssrLooseEqual($data.form.trashed, "only")) ? " selected" : ""}${_scopeId}>Deleted</option></select></div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0" }, [
            createVNode("div", { class: "flex-1" }, [
              createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Search"),
              withDirectives(createVNode("input", {
                type: "text",
                "onUpdate:modelValue": ($event) => $data.form.search = $event,
                class: "form-input w-full",
                placeholder: "Search by name..."
              }, null, 8, ["onUpdate:modelValue"]), [
                [vModelText, $data.form.search]
              ])
            ]),
            createVNode("div", { class: "w-full md:w-1/4" }, [
              createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Status"),
              withDirectives(createVNode("select", {
                "onUpdate:modelValue": ($event) => $data.form.trashed = $event,
                class: "form-select w-full"
              }, [
                createVNode("option", { value: null }, "Active"),
                createVNode("option", { value: "with" }, "All"),
                createVNode("option", { value: "only" }, "Deleted")
              ], 8, ["onUpdate:modelValue"]), [
                [vModelSelect, $data.form.trashed]
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="bg-white rounded-lg shadow overflow-hidden" data-v-af8ca5eb><table class="min-w-full divide-y divide-gray-200" data-v-af8ca5eb><thead class="bg-gray-50" data-v-af8ca5eb><tr data-v-af8ca5eb><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-af8ca5eb>ID</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-af8ca5eb>Name</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-af8ca5eb>Status</th><th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-af8ca5eb>Actions</th></tr></thead><tbody class="bg-white divide-y divide-gray-200" data-v-af8ca5eb><!--[-->`);
  ssrRenderList($props.paymentMethods.data, (method) => {
    _push(`<tr class="hover:bg-gray-50" data-v-af8ca5eb><td class="px-6 py-4 text-sm text-gray-500" data-v-af8ca5eb>${ssrInterpolate(method.id)}</td><td class="px-6 py-4 text-sm font-medium text-gray-900" data-v-af8ca5eb>${ssrInterpolate(method.name)}</td><td class="px-6 py-4 text-sm" data-v-af8ca5eb><span class="${ssrRenderClass(method.is_active ? "text-green-600" : "text-gray-400")}" data-v-af8ca5eb>${ssrInterpolate(method.is_active ? "Active" : "Inactive")}</span></td><td class="px-6 py-4 text-right space-x-2" data-v-af8ca5eb>`);
    _push(ssrRenderComponent(_component_Link, {
      href: `/payment-methods/${method.id}`,
      class: "btn-view"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`View`);
        } else {
          return [
            createTextVNode("View")
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(ssrRenderComponent(_component_Link, {
      href: `/payment-methods/${method.id}/edit`,
      class: "btn-blue"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Edit`);
        } else {
          return [
            createTextVNode("Edit")
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`<button class="btn-red" data-v-af8ca5eb>Delete</button>`);
    if (method.deleted_at) {
      _push(`<button class="btn-green" data-v-af8ca5eb>Restore</button>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.paymentMethods.data.length === 0) {
    _push(`<tr data-v-af8ca5eb><td colspan="4" class="text-center text-gray-500 py-10" data-v-af8ca5eb>No payment methods found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</tbody></table><div class="bg-white px-4 py-3 border-t border-gray-200" data-v-af8ca5eb>`);
  _push(ssrRenderComponent(_component_pagination, {
    links: $props.paymentMethods.links
  }, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/PaymentMethod/Index.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const Index$5 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$q], ["__scopeId", "data-v-af8ca5eb"]]);
const __vite_glob_0_28 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$p = {
  components: {
    Head,
    Link
  },
  layout: Layout,
  props: {
    paymentMethod: Object
  },
  methods: {
    destroy() {
      if (confirm("Are you sure you want to delete this payment method?")) {
        this.$inertia.delete(`/payment-methods/${this.paymentMethod.id}`);
      }
    }
  }
};
function _sfc_ssrRender$p(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 sm:px-6 lg:px-8" }, _attrs))} data-v-76c53784>`);
  _push(ssrRenderComponent(_component_Head, {
    title: `Payment Method - ${$props.paymentMethod.name}`
  }, null, _parent));
  _push(`<div class="flex items-center mb-8" data-v-76c53784>`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-500 hover:text-indigo-700 font-medium",
    href: "/payment-methods"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="inline-flex items-center" data-v-76c53784${_scopeId}><svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-76c53784${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-v-76c53784${_scopeId}></path></svg> Back to Payment Methods </span>`);
      } else {
        return [
          createVNode("span", { class: "inline-flex items-center" }, [
            (openBlock(), createBlock("svg", {
              class: "w-5 h-5 mr-1",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg"
            }, [
              createVNode("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M10 19l-7-7m0 0l7-7m-7 7h18"
              })
            ])),
            createTextVNode(" Back to Payment Methods ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex justify-between items-center mb-6" data-v-76c53784><h1 class="text-3xl font-bold text-gray-800" data-v-76c53784>${ssrInterpolate($props.paymentMethod.name)}</h1><div class="flex space-x-2" data-v-76c53784>`);
  _push(ssrRenderComponent(_component_Link, {
    href: `/payment-methods/${$props.paymentMethod.id}/edit`,
    class: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-76c53784${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" data-v-76c53784${_scopeId}></path></svg> Edit `);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            class: "w-4 h-4 mr-1.5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            })
          ])),
          createTextVNode(" Edit ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<button class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" data-v-76c53784><svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-76c53784><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" data-v-76c53784></path></svg> Delete </button></div></div><div class="bg-white rounded-lg shadow overflow-hidden" data-v-76c53784><div class="border-b border-gray-200" data-v-76c53784><dl data-v-76c53784><div class="bg-gray-50 px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4" data-v-76c53784><dt class="text-sm font-medium text-gray-500" data-v-76c53784>Payment Method ID</dt><dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" data-v-76c53784>${ssrInterpolate($props.paymentMethod.id)}</dd></div><div class="bg-white px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4" data-v-76c53784><dt class="text-sm font-medium text-gray-500" data-v-76c53784>Name</dt><dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" data-v-76c53784>${ssrInterpolate($props.paymentMethod.name)}</dd></div><div class="bg-gray-50 px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4" data-v-76c53784><dt class="text-sm font-medium text-gray-500" data-v-76c53784>Status</dt><dd class="mt-1 sm:mt-0 sm:col-span-2" data-v-76c53784><span class="${ssrRenderClass([$props.paymentMethod.is_active ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800", "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"])}" data-v-76c53784>${ssrInterpolate($props.paymentMethod.is_active ? "Active" : "Inactive")}</span></dd></div>`);
  if ($props.paymentMethod.deleted_at) {
    _push(`<div class="bg-white px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4" data-v-76c53784><dt class="text-sm font-medium text-gray-500" data-v-76c53784>Status</dt><dd class="mt-1 sm:mt-0 sm:col-span-2" data-v-76c53784><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800" data-v-76c53784> Deleted </span></dd></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</dl></div></div></div>`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/PaymentMethod/Show.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const Show$1 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$p], ["__scopeId", "data-v-76c53784"]]);
const __vite_glob_0_29 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Show$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$o = {
  components: {
    Head,
    Link,
    TextInput,
    LoadingButton
  },
  layout: Layout,
  remember: "form",
  data() {
    return {
      form: this.$inertia.form({
        name: "",
        description: ""
      })
    };
  },
  methods: {
    store() {
      this.form.post("/programs");
    }
  }
};
function _sfc_ssrRender$o(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 sm:px-6 lg:px-8" }, _attrs))} data-v-1717e741>`);
  _push(ssrRenderComponent(_component_Head, { title: "Create Program" }, null, _parent));
  _push(`<div class="flex items-center mb-8" data-v-1717e741>`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-500 hover:text-indigo-700 font-medium",
    href: "/programs"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="inline-flex items-center" data-v-1717e741${_scopeId}><svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-1717e741${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-v-1717e741${_scopeId}></path></svg> Back to Programs </span>`);
      } else {
        return [
          createVNode("span", { class: "inline-flex items-center" }, [
            (openBlock(), createBlock("svg", {
              class: "w-5 h-5 mr-1",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg"
            }, [
              createVNode("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M10 19l-7-7m0 0l7-7m-7 7h18"
              })
            ])),
            createTextVNode(" Back to Programs ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><h1 class="mb-6 text-3xl font-bold text-gray-800" data-v-1717e741>Create Program</h1><div class="bg-white rounded-lg shadow overflow-hidden" data-v-1717e741><form data-v-1717e741><div class="p-8 space-y-6" data-v-1717e741><div class="grid grid-cols-1 gap-6" data-v-1717e741><div data-v-1717e741><label for="name" class="block text-sm font-medium text-gray-700 mb-1" data-v-1717e741>Program Name</label><input type="text" id="name"${ssrRenderAttr("value", $data.form.name)} class="form-input w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter program name (e.g. Ramazan Package, Eid Gift, Qurbani, etc.)" data-v-1717e741>`);
  if ($data.form.errors.name) {
    _push(`<p class="mt-1 text-sm text-red-600" data-v-1717e741>${ssrInterpolate($data.form.errors.name)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div data-v-1717e741><label for="description" class="block text-sm font-medium text-gray-700 mb-1" data-v-1717e741>Description</label><textarea id="description" rows="4" class="form-textarea w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter program description" data-v-1717e741>${ssrInterpolate($data.form.description)}</textarea>`);
  if ($data.form.errors.description) {
    _push(`<p class="mt-1 text-sm text-red-600" data-v-1717e741>${ssrInterpolate($data.form.errors.description)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div><div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-200" data-v-1717e741>`);
  _push(ssrRenderComponent(_component_Link, {
    href: "/programs",
    class: "inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-4"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Cancel `);
      } else {
        return [
          createTextVNode(" Cancel ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Create Program `);
      } else {
        return [
          createTextVNode(" Create Program ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Programs/Create.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const Create$3 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$o], ["__scopeId", "data-v-1717e741"]]);
const __vite_glob_0_30 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$n = {
  components: {
    Head,
    Link,
    TextInput,
    LoadingButton
  },
  layout: Layout,
  props: {
    program: Object
  },
  data() {
    return {
      form: this.$inertia.form({
        name: this.program.name,
        description: this.program.description
      })
    };
  },
  methods: {
    update() {
      this.form.put(`/programs/${this.program.id}`);
    },
    destroy() {
      if (confirm("Are you sure you want to delete this program?")) {
        this.$inertia.delete(`/programs/${this.program.id}`);
      }
    }
  }
};
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 sm:px-6 lg:px-8" }, _attrs))} data-v-b9859a25>`);
  _push(ssrRenderComponent(_component_Head, {
    title: `Edit Program - ${$data.form.name}`
  }, null, _parent));
  _push(`<div class="flex items-center mb-8" data-v-b9859a25>`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-500 hover:text-indigo-700 font-medium",
    href: "/programs"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="inline-flex items-center" data-v-b9859a25${_scopeId}><svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-b9859a25${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-v-b9859a25${_scopeId}></path></svg> Back to Programs </span>`);
      } else {
        return [
          createVNode("span", { class: "inline-flex items-center" }, [
            (openBlock(), createBlock("svg", {
              class: "w-5 h-5 mr-1",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg"
            }, [
              createVNode("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M10 19l-7-7m0 0l7-7m-7 7h18"
              })
            ])),
            createTextVNode(" Back to Programs ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><h1 class="mb-6 text-3xl font-bold text-gray-800" data-v-b9859a25>Edit Program: ${ssrInterpolate($data.form.name)}</h1><div class="bg-white rounded-lg shadow overflow-hidden" data-v-b9859a25><form data-v-b9859a25><div class="p-8 space-y-6" data-v-b9859a25><div class="grid grid-cols-1 gap-6" data-v-b9859a25><div data-v-b9859a25><label for="name" class="block text-sm font-medium text-gray-700 mb-1" data-v-b9859a25>Program Name</label><input type="text" id="name"${ssrRenderAttr("value", $data.form.name)} class="form-input w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter program name (e.g. Ramazan Package, Eid Gift, Qurbani, etc.)" data-v-b9859a25>`);
  if ($data.form.errors.name) {
    _push(`<p class="mt-1 text-sm text-red-600" data-v-b9859a25>${ssrInterpolate($data.form.errors.name)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div data-v-b9859a25><label for="description" class="block text-sm font-medium text-gray-700 mb-1" data-v-b9859a25>Description</label><textarea id="description" rows="4" class="form-textarea w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter program description" data-v-b9859a25>${ssrInterpolate($data.form.description)}</textarea>`);
  if ($data.form.errors.description) {
    _push(`<p class="mt-1 text-sm text-red-600" data-v-b9859a25>${ssrInterpolate($data.form.errors.description)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div><div class="flex items-center justify-between px-8 py-4 bg-gray-50 border-t border-gray-200" data-v-b9859a25>`);
  if (!$data.form.processing) {
    _push(`<button type="button" class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" data-v-b9859a25> Delete Program </button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="flex space-x-3" data-v-b9859a25>`);
  _push(ssrRenderComponent(_component_Link, {
    href: "/programs",
    class: "inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Cancel `);
      } else {
        return [
          createTextVNode(" Cancel ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Update Program `);
      } else {
        return [
          createTextVNode(" Update Program ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></form></div></div>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Programs/Edit.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const Edit$3 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$n], ["__scopeId", "data-v-b9859a25"]]);
const __vite_glob_0_31 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$m = {
  components: {
    Head,
    Link,
    Pagination,
    SearchFilter
  },
  layout: Layout,
  props: {
    filters: Object,
    programs: Object
  },
  data() {
    return {
      form: {
        search: this.filters.search,
        trashed: this.filters.trashed
      }
    };
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function() {
        this.$inertia.get("/programs", pickBy(this.form), { preserveState: true });
      }, 150)
    }
  },
  methods: {
    reset() {
      this.form = mapValues(this.form, () => null);
    },
    destroy(program) {
      if (confirm(`Are you sure you want to delete ${program.name}?`)) {
        this.$inertia.delete(`/programs/${program.id}`);
      }
    },
    restore(program) {
      this.$inertia.put(`/programs/${program.id}/restore`);
    }
  }
};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_search_filter = resolveComponent("search-filter");
  const _component_pagination = resolveComponent("pagination");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Programs" }, null, _parent));
  _push(`<div class="flex justify-between items-center mb-6"><h1 class="text-3xl font-bold text-gray-800">Programs</h1>`);
  _push(ssrRenderComponent(_component_Link, {
    class: "btn-indigo",
    href: "/programs/create"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Create Program</span>`);
      } else {
        return [
          createVNode("span", null, "Create Program")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="bg-white rounded-lg shadow mb-6"><div class="p-4 border-b border-gray-200">`);
  _push(ssrRenderComponent(_component_search_filter, {
    modelValue: $data.form.search,
    "onUpdate:modelValue": ($event) => $data.form.search = $event,
    class: "w-full",
    onReset: $options.reset
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0"${_scopeId}><div class="flex-1"${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Search</label><input type="text"${ssrRenderAttr("value", $data.form.search)} class="form-input w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Search by name or description..."${_scopeId}></div><div class="w-full md:w-1/4"${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Status</label><select class="form-select w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"${_scopeId}><option${ssrRenderAttr("value", null)}${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, null) : ssrLooseEqual($data.form.trashed, null)) ? " selected" : ""}${_scopeId}>Active</option><option value="with"${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, "with") : ssrLooseEqual($data.form.trashed, "with")) ? " selected" : ""}${_scopeId}>All Programs</option><option value="only"${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, "only") : ssrLooseEqual($data.form.trashed, "only")) ? " selected" : ""}${_scopeId}>Deleted Programs</option></select></div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0" }, [
            createVNode("div", { class: "flex-1" }, [
              createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Search"),
              withDirectives(createVNode("input", {
                type: "text",
                "onUpdate:modelValue": ($event) => $data.form.search = $event,
                class: "form-input w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",
                placeholder: "Search by name or description..."
              }, null, 8, ["onUpdate:modelValue"]), [
                [vModelText, $data.form.search]
              ])
            ]),
            createVNode("div", { class: "w-full md:w-1/4" }, [
              createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Status"),
              withDirectives(createVNode("select", {
                "onUpdate:modelValue": ($event) => $data.form.trashed = $event,
                class: "form-select w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              }, [
                createVNode("option", { value: null }, "Active"),
                createVNode("option", { value: "with" }, "All Programs"),
                createVNode("option", { value: "only" }, "Deleted Programs")
              ], 8, ["onUpdate:modelValue"]), [
                [vModelSelect, $data.form.trashed]
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="bg-white rounded-lg shadow overflow-hidden"><table class="min-w-full divide-y divide-gray-200"><thead class="bg-gray-50"><tr><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th><th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th></tr></thead><tbody class="bg-white divide-y divide-gray-200"><!--[-->`);
  ssrRenderList($props.programs.data, (program) => {
    _push(`<tr class="hover:bg-gray-50 transition-colors"><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${ssrInterpolate(program.id)}</td><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm font-medium text-gray-900">${ssrInterpolate(program.name)}</div></td><td class="px-6 py-4"><div class="text-sm text-gray-900 max-w-md truncate">${ssrInterpolate(program.description || "No description")}</div></td><td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2"><div class="flex justify-end space-x-2">`);
    _push(ssrRenderComponent(_component_Link, {
      href: `/programs/${program.id}`,
      class: "text-indigo-600 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-md transition-colors"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` View `);
        } else {
          return [
            createTextVNode(" View ")
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(ssrRenderComponent(_component_Link, {
      href: `/programs/${program.id}/edit`,
      class: "text-blue-600 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-md transition-colors"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Edit `);
        } else {
          return [
            createTextVNode(" Edit ")
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`<button class="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-md transition-colors"> Delete </button>`);
    if (program.deleted_at) {
      _push(`<button class="text-green-600 hover:text-green-900 bg-green-50 hover:bg-green-100 px-3 py-1 rounded-md transition-colors"> Restore </button>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.programs.data.length === 0) {
    _push(`<tr><td class="px-6 py-4 text-center text-gray-500" colspan="4"><div class="py-8"><svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path></svg><h3 class="mt-2 text-sm font-medium text-gray-900">No programs found</h3><p class="mt-1 text-sm text-gray-500">Get started by creating a new program.</p><div class="mt-6">`);
    _push(ssrRenderComponent(_component_Link, {
      href: "/programs/create",
      class: "inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span${_scopeId}>Create a program</span>`);
        } else {
          return [
            createVNode("span", null, "Create a program")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div></td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</tbody></table><div class="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">`);
  _push(ssrRenderComponent(_component_pagination, {
    class: "mt-2",
    links: $props.programs.links
  }, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Programs/Index.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const Index$4 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$m]]);
const __vite_glob_0_32 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$l = {
  components: { Head, Link, SearchFilter, Pagination, Select2Input },
  layout: Layout,
  props: {
    program: Object,
    filters: Object,
    transactions: Object,
    beneficiaries: Array
  },
  data() {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    return {
      form: {
        search: this.filters.search || ""
      },
      showModal: false,
      newTransaction: {
        date: today,
        amount: "",
        beneficiary: "",
        reference_no: "",
        description: ""
      }
    };
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function() {
        this.$inertia.get(`/programs/${this.program.id}`, pickBy(this.form), { preserveState: true });
      }, 150)
    }
  },
  methods: {
    destroy() {
      if (confirm("Are you sure you want to delete this program?")) {
        this.$inertia.delete(`/programs/${this.program.id}`);
      }
    },
    reset() {
      this.form = mapValues(this.form, () => "");
    },
    submitTransaction() {
      this.$inertia.post(`/programs/${this.program.id}/transactions`, this.newTransaction, {
        onSuccess: () => {
          this.showModal = false;
          this.newTransaction = {
            date: "",
            amount: "",
            beneficiary: "",
            reference_no: "",
            description: ""
          };
        }
      });
    }
  }
};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_search_filter = resolveComponent("search-filter");
  const _component_pagination = resolveComponent("pagination");
  const _component_select2_input = resolveComponent("select2-input");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: `Program - ${$props.program.name}`
  }, null, _parent));
  _push(`<div class="flex items-center mb-8">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-500 hover:text-indigo-700 font-medium",
    href: "/programs"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="inline-flex items-center"${_scopeId}><svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"${_scopeId}></path></svg> Back to Programs </span>`);
      } else {
        return [
          createVNode("span", { class: "inline-flex items-center" }, [
            (openBlock(), createBlock("svg", {
              class: "w-5 h-5 mr-1",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              createVNode("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M10 19l-7-7m0 0l7-7m-7 7h18"
              })
            ])),
            createTextVNode(" Back to Programs ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex justify-between items-center mb-6"><h1 class="text-3xl font-bold text-gray-800">${ssrInterpolate($props.program.name)}</h1><div class="flex space-x-2">`);
  _push(ssrRenderComponent(_component_Link, {
    href: `/programs/${$props.program.id}/edit`,
    class: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"${_scopeId}></path></svg> Edit `);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            class: "w-4 h-4 mr-1.5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            })
          ])),
          createTextVNode(" Edit ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<button class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"><svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg> Delete </button></div></div><div class="bg-white rounded-lg shadow overflow-hidden mb-10"><div class="border-b border-gray-200"><dl><div class="bg-white px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4"><dt class="text-sm font-medium text-gray-500">Name</dt><dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${ssrInterpolate($props.program.name)}</dd></div><div class="bg-gray-50 px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4"><dt class="text-sm font-medium text-gray-500">Description</dt><dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${ssrInterpolate($props.program.description || "No description provided")}</dd></div><div class="bg-white px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4"><dt class="text-sm font-medium text-gray-500">Money Spent</dt><dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${ssrInterpolate($props.program.total_amount || "No money spent")}</dd></div>`);
  if ($props.program.deleted_at) {
    _push(`<div class="bg-white px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4"><dt class="text-sm font-medium text-gray-500">Status</dt><dd class="mt-1 sm:mt-0 sm:col-span-2"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800"> Deleted </span></dd></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</dl></div></div><div class="flex items-center justify-between mb-6">`);
  _push(ssrRenderComponent(_component_search_filter, {
    modelValue: $data.form.search,
    "onUpdate:modelValue": ($event) => $data.form.search = $event,
    class: "mr-4 w-full max-w-md",
    onReset: $options.reset
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<label class="block text-gray-700"${_scopeId}>Search:</label><input${ssrRenderAttr("value", $data.form.search)} class="form-input mt-1 w-full" placeholder="Search transactions..."${_scopeId}>`);
      } else {
        return [
          createVNode("label", { class: "block text-gray-700" }, "Search:"),
          withDirectives(createVNode("input", {
            "onUpdate:modelValue": ($event) => $data.form.search = $event,
            class: "form-input mt-1 w-full",
            placeholder: "Search transactions..."
          }, null, 8, ["onUpdate:modelValue"]), [
            [vModelText, $data.form.search]
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<button class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg> Add Transaction </button></div><div class="bg-white rounded-md shadow overflow-x-auto"><table class="w-full whitespace-nowrap"><thead><tr class="text-left font-bold"><th class="pb-4 pt-6 px-6">Date</th><th class="pb-4 pt-6 px-6">Amount</th><th class="pb-4 pt-6 px-6">Beneficiary</th><th class="pb-4 pt-6 px-6">Reference</th><th class="pb-4 pt-6 px-6">Description</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($props.transactions.data, (tx) => {
    var _a2;
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t px-6 py-4">${ssrInterpolate(tx.transaction_date)}</td><td class="border-t px-6 py-4">${ssrInterpolate(tx.amount)}</td><td class="border-t px-6 py-4">${ssrInterpolate(((_a2 = tx.beneficiary) == null ? void 0 : _a2.full_name) || "")}</td><td class="border-t px-6 py-4">${ssrInterpolate(tx.reference_no)}</td><td class="border-t px-6 py-4">${ssrInterpolate(tx.description)}</td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.transactions.data.length === 0) {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="4">No transactions found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</tbody></table></div>`);
  _push(ssrRenderComponent(_component_pagination, {
    class: "mt-6",
    links: $props.transactions.links
  }, null, _parent));
  if ($data.showModal) {
    _push(`<div class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"><div class="bg-white rounded-lg shadow-lg w-full max-w-lg p-6"><div class="flex justify-between items-center mb-4"><h2 class="text-lg font-semibold">New Transaction</h2><button class="text-gray-500 hover:text-gray-700 text-xl">×</button></div><form><div class="mb-4"><label class="block text-sm font-medium text-gray-700">Date</label><input${ssrRenderAttr("value", $data.newTransaction.date)} type="date" class="form-input mt-1 w-full" required></div><div class="mb-4"><label class="block text-sm font-medium text-gray-700">Amount</label><input${ssrRenderAttr("value", $data.newTransaction.amount)} type="number" step="0.01" class="form-input mt-1 w-full" required></div><div class="mb-4">`);
    _push(ssrRenderComponent(_component_select2_input, {
      modelValue: $data.newTransaction.beneficiary,
      "onUpdate:modelValue": ($event) => $data.newTransaction.beneficiary = $event,
      options: $props.beneficiaries,
      error: (_a = $data.form.errors) == null ? void 0 : _a.beneficiary,
      class: "w-full",
      label: "Beneficiary"
    }, null, _parent));
    _push(`</div><div class="mb-4"><label class="block text-sm font-medium text-gray-700">Reference No</label><input${ssrRenderAttr("value", $data.newTransaction.reference_no)} class="form-input mt-1 w-full"></div><div class="mb-4"><label class="block text-sm font-medium text-gray-700">Description</label><textarea class="form-input mt-1 w-full" rows="3">${ssrInterpolate($data.newTransaction.description)}</textarea></div><div class="flex justify-end"><button type="button" class="mr-2 px-4 py-2 text-sm rounded bg-gray-200 hover:bg-gray-300">Cancel</button><button type="submit" class="px-4 py-2 text-sm text-white bg-green-600 hover:bg-green-700 rounded">Save</button></div></form></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Programs/Show.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const Show = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$l]]);
const __vite_glob_0_33 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Show
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$k = {
  props: {
    beneficiaries: Array,
    from: String,
    to: String
  },
  components: {
    Head,
    Link
  },
  data() {
    const now = /* @__PURE__ */ new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), 1);
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    const format = (d) => d.toISOString().split("T")[0];
    return {
      filters: {
        from: this.from || format(start),
        to: this.to || format(end)
      }
    };
  },
  computed: {
    totalBeneficiaries() {
      return this.beneficiaries.reduce((sum, b) => sum + Number(b.total), 0);
    }
  },
  methods: {
    applyFilter() {
      router.get("/reports/beneficiaries-by-program", this.filters, {
        preserveScroll: true,
        preserveState: true
      });
    }
  },
  layout: Layout
};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Beneficiaries by Program" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Beneficiaries by Program</h1><form class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"><div><label class="block text-sm font-medium mb-1">From</label><input type="date"${ssrRenderAttr("value", $data.filters.from)} class="border rounded px-3 py-2 w-full"></div><div><label class="block text-sm font-medium mb-1">To</label><input type="date"${ssrRenderAttr("value", $data.filters.to)} class="border rounded px-3 py-2 w-full"></div><div class="md:col-span-1 flex items-end"><button type="submit" class="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Apply</button></div></form><div class="overflow-x-auto bg-white rounded-lg shadow"><table class="min-w-full text-sm text-left"><thead class="bg-gray-100 text-gray-700 uppercase text-xs"><tr><th class="px-4 py-3">Program</th><th class="px-4 py-3">Total Beneficiaries</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($props.beneficiaries, (item, index) => {
    _push(`<tr class="border-t"><td class="px-4 py-2">`);
    _push(ssrRenderComponent(_component_Link, {
      href: `/reports/beneficiaries-by-program/${item.program_id}/details`,
      class: "text-blue-600 hover:underline"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(item.program)}`);
        } else {
          return [
            createTextVNode(toDisplayString(item.program), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="px-4 py-2 text-green-700 font-semibold">`);
    _push(ssrRenderComponent(_component_Link, {
      href: `/reports/beneficiaries-by-program/${item.program_id}/details`,
      class: "hover:underline"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(item.total)}`);
        } else {
          return [
            createTextVNode(toDisplayString(item.total), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td></tr>`);
  });
  _push(`<!--]-->`);
  if (!$props.beneficiaries.length) {
    _push(`<tr><td colspan="2" class="px-4 py-4 text-center text-gray-500">No data available for this period.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</tbody>`);
  if ($props.beneficiaries.length) {
    _push(`<tfoot><tr class="bg-gray-50 font-semibold border-t"><td class="px-4 py-3">Total</td><td class="px-4 py-3 text-green-800">${ssrInterpolate($options.totalBeneficiaries)}</td></tr></tfoot>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</table></div></div>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Reports/BeneficiariesByProgram.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const BeneficiariesByProgram = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$k]]);
const __vite_glob_0_34 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: BeneficiariesByProgram
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$j = {
  props: {
    program: Object,
    transactions: Object
  },
  components: {
    Head,
    Pagination
  },
  layout: Layout
};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Pagination = resolveComponent("Pagination");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: `Beneficiaries - ${$props.program.name}`
  }, null, _parent));
  _push(`<h1 class="mb-6 text-3xl font-bold">Beneficiaries – ${ssrInterpolate($props.program.name)}</h1><div class="overflow-x-auto bg-white rounded-lg shadow"><table class="min-w-full text-sm text-left"><thead class="bg-gray-100 text-gray-700 uppercase text-xs"><tr><th class="px-4 py-3">Date</th><th class="px-4 py-3">Beneficiary</th><th class="px-4 py-3">Amount</th><th class="px-4 py-3">Description</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($props.transactions.data, (transaction) => {
    var _a;
    _push(`<tr class="border-t"><td class="px-4 py-2">${ssrInterpolate(transaction.transaction_date)}</td><td class="px-4 py-2">${ssrInterpolate(((_a = transaction.beneficiary) == null ? void 0 : _a.full_name) || "N/A")}</td><td class="px-4 py-2 text-green-700 font-semibold">${ssrInterpolate(Number(transaction.amount).toLocaleString())}</td><td class="px-4 py-2">${ssrInterpolate(transaction.description)}</td></tr>`);
  });
  _push(`<!--]-->`);
  if (!$props.transactions.data.length) {
    _push(`<tr><td colspan="4" class="px-4 py-4 text-center text-gray-500">No transactions found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</tbody></table></div><div class="mt-6 flex justify-center">`);
  _push(ssrRenderComponent(_component_Pagination, {
    links: $props.transactions.links
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Reports/BeneficiariesByProgramDetail.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const BeneficiariesByProgramDetail = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$j]]);
const __vite_glob_0_35 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: BeneficiariesByProgramDetail
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$i = {
  props: {
    in: Number,
    out: Number,
    balance: Number
  },
  components: {
    Head
  },
  computed: {
    formattedIn() {
      return this.in.toLocaleString();
    },
    formattedOut() {
      return this.out.toLocaleString();
    },
    formattedBalance() {
      return this.balance.toLocaleString();
    }
  },
  layout: Layout
};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Current Balance" }, null, _parent));
  _push(`<h1 class="text-3xl font-bold mb-6">Current Balance</h1><div class="bg-white p-6 rounded shadow-md"><div class="text-lg mb-2"> Total Inflows (Donations): <strong class="text-green-600">${ssrInterpolate($options.formattedIn)}</strong></div><div class="text-lg mb-2"> Total Outflows (Expenses): <strong class="text-red-600">${ssrInterpolate($options.formattedOut)}</strong></div><hr class="my-4"><div class="text-xl font-bold"> Net Balance: <span class="text-blue-700">${ssrInterpolate($options.formattedBalance)}</span></div></div></div>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Reports/CurrentBalance.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const CurrentBalance = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$i]]);
const __vite_glob_0_36 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CurrentBalance
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$h = {
  props: {
    donations: Array,
    from: String,
    to: String
  },
  components: {
    Head
  },
  data() {
    return {
      filters: {
        from: this.from,
        to: this.to
      }
    };
  },
  computed: {
    totalDonations() {
      return this.donations.reduce((sum, d) => sum + Number(d.total), 0);
    }
  },
  methods: {
    applyFilter() {
      router.get("/reports/donations-by-campaign", this.filters, {
        preserveScroll: true,
        preserveState: true
      });
    }
  },
  layout: Layout
};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Donations by Campaign" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Donations by Campaign</h1><form class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"><div><label class="block text-sm font-medium mb-1">From</label><input type="date"${ssrRenderAttr("value", $data.filters.from)} class="border rounded px-3 py-2 w-full"></div><div><label class="block text-sm font-medium mb-1">To</label><input type="date"${ssrRenderAttr("value", $data.filters.to)} class="border rounded px-3 py-2 w-full"></div><div class="md:col-span-1 flex items-end"><button type="submit" class="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"> Apply </button></div></form><div class="overflow-x-auto bg-white rounded-lg shadow"><table class="min-w-full text-sm text-left"><thead class="bg-gray-100 text-gray-700 uppercase text-xs"><tr><th class="px-4 py-3">Campaign</th><th class="px-4 py-3">Total Donations</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($props.donations, (donation, index) => {
    _push(`<tr class="border-t"><td class="px-4 py-2">${ssrInterpolate(donation.campaign)}</td><td class="px-4 py-2 text-green-700 font-semibold">${ssrInterpolate(Number(donation.total).toLocaleString())}</td></tr>`);
  });
  _push(`<!--]-->`);
  if (!$props.donations.length) {
    _push(`<tr><td colspan="2" class="px-4 py-4 text-center text-gray-500">No data available for this period.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</tbody>`);
  if ($props.donations.length) {
    _push(`<tfoot><tr class="bg-gray-50 font-semibold border-t"><td class="px-4 py-3">Total</td><td class="px-4 py-3 text-green-800">${ssrInterpolate($options.totalDonations.toLocaleString())}</td></tr></tfoot>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</table></div></div>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Reports/DonationsByCampaign.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const DonationsByCampaign = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$h]]);
const __vite_glob_0_37 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DonationsByCampaign
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$g = {
  props: {
    donations: Array,
    from: String,
    to: String
  },
  components: {
    Head
  },
  data() {
    return {
      filters: {
        from: this.from,
        to: this.to
      }
    };
  },
  computed: {
    totalDonations() {
      return this.donations.reduce((sum, d) => sum + Number(d.total), 0);
    }
  },
  methods: {
    applyFilter() {
      router.get("/reports/donations-by-date", this.filters, {
        preserveScroll: true,
        preserveState: true
      });
    }
  },
  layout: Layout
};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Donations by Date" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Donations by Date</h1><form class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"><div><label class="block text-sm font-medium mb-1">From</label><input type="date"${ssrRenderAttr("value", $data.filters.from)} class="border rounded px-3 py-2 w-full"></div><div><label class="block text-sm font-medium mb-1">To</label><input type="date"${ssrRenderAttr("value", $data.filters.to)} class="border rounded px-3 py-2 w-full"></div><div class="md:col-span-1 flex items-end"><button type="submit" class="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Apply</button></div></form><div class="overflow-x-auto bg-white rounded-lg shadow"><table class="min-w-full text-sm text-left"><thead class="bg-gray-100 text-gray-700 uppercase text-xs"><tr><th class="px-4 py-3">Date</th><th class="px-4 py-3">Total Donations</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($props.donations, (donation) => {
    _push(`<tr class="border-t"><td class="px-4 py-2">${ssrInterpolate(donation.date)}</td><td class="px-4 py-2 text-green-700 font-semibold">${ssrInterpolate(donation.total)}</td></tr>`);
  });
  _push(`<!--]-->`);
  if (!$props.donations.length) {
    _push(`<tr><td colspan="2" class="px-4 py-4 text-center text-gray-500">No data available for this period.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</tbody>`);
  if ($props.donations.length) {
    _push(`<tfoot><tr class="bg-gray-50 font-semibold border-t"><td class="px-4 py-3">Total</td><td class="px-4 py-3 text-green-800">${ssrInterpolate($options.totalDonations.toLocaleString())}</td></tr></tfoot>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</table></div></div>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Reports/DonationsByDate.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const DonationsByDate = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$g]]);
const __vite_glob_0_38 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DonationsByDate
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$f = {
  components: {
    Head,
    Pagination,
    Select2Input
    // Register the component
  },
  layout: Layout,
  props: {
    transactions: Object,
    donors: Array,
    from: String,
    to: String,
    selectedDonors: Array
  },
  data() {
    const now = /* @__PURE__ */ new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), 1);
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    const format = (d) => d.toISOString().split("T")[0];
    return {
      filters: {
        from: this.from || format(start),
        to: this.to || format(end),
        donor_ids: this.selectedDonors || []
      }
    };
  },
  computed: {
    donorOptions() {
      return this.donors.map((d) => ({
        id: d.id,
        name: d.full_name
      }));
    }
  },
  methods: {
    applyFilter() {
      router.get("/reports/donors-donations", this.filters, {
        preserveScroll: true,
        preserveState: true
      });
    },
    formatAmount(value) {
      return Number(value).toLocaleString();
    },
    // exportToPDF() {
    //   const doc = new jsPDF('landscape')
    //   doc.setFontSize(16)
    //   doc.text('Donations Report', 14, 20)
    //   const headers = [['Date', 'Donor', 'Amount', 'Description']]
    //   const rows = this.transactions.data.map((item) => [item.transaction_date, item.donor?.full_name || 'N/A', this.formatAmount(item.amount), item.description])
    //   autoTable(doc, {
    //     head: headers,
    //     body: rows,
    //     startY: 30,
    //     theme: 'striped',
    //     styles: { fontSize: 10 },
    //     headStyles: { fillColor: [52, 152, 219] }, // optional blue header
    //   })
    //   doc.save('donations-report.pdf')
    // },
    exportToPDF() {
      var params = new URLSearchParams(this.filters).toString();
      console.log(params);
      const filteredParams = Object.fromEntries(
        Object.entries(this.filters).filter(([_, v]) => v != null && v !== "")
      );
      params = new URLSearchParams(filteredParams).toString();
      console.log(params);
      window.open(`/reports/donors-donations/export?${params}`, "_blank");
    }
  }
};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_select2_input = resolveComponent("select2-input");
  const _component_Pagination = resolveComponent("Pagination");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Donors and Donations" }, null, _parent));
  _push(`<h1 class="text-3xl font-bold mb-6">Donors and Donations</h1><form class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"><div><label class="block text-sm font-medium mb-1">From</label><input type="date"${ssrRenderAttr("value", $data.filters.from)} class="border px-3 py-2 rounded w-full"></div><div><label class="block text-sm font-medium mb-1">To</label><input type="date"${ssrRenderAttr("value", $data.filters.to)} class="border px-3 py-2 rounded w-full"></div><div class="md:col-span-1">`);
  _push(ssrRenderComponent(_component_select2_input, {
    modelValue: $data.filters.donor_ids,
    "onUpdate:modelValue": ($event) => $data.filters.donor_ids = $event,
    options: $options.donorOptions,
    multiple: true,
    class: "pb-8 pr-6 w-full",
    label: "Select Donor(s)",
    placeholder: "All Donors"
  }, null, _parent));
  _push(`</div><div class="md:col-span-1"><label class="block text-sm font-medium mb-1"> </label><button class="bg-green-600 text-white px-4 py-3 rounded hover:bg-green-700 w-full">Search</button></div></form><div class="bg-white rounded shadow overflow-x-auto"><table class="min-w-full text-sm text-left"><thead class="bg-gray-100 text-gray-700 uppercase text-xs"><tr><th class="px-4 py-3">Date</th><th class="px-4 py-3">Donor</th><th class="px-4 py-3">Amount</th><th class="px-4 py-3">Description</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($props.transactions.data, (item, index) => {
    var _a;
    _push(`<tr class="border-t"><td class="px-4 py-2">${ssrInterpolate(item.transaction_date)}</td><td class="px-4 py-2">${ssrInterpolate(((_a = item.donor) == null ? void 0 : _a.full_name) ?? "N/A")}</td><td class="px-4 py-2 text-green-600 font-semibold">${ssrInterpolate($options.formatAmount(item.amount))}</td><td class="px-4 py-2">${ssrInterpolate(item.description)}</td></tr>`);
  });
  _push(`<!--]-->`);
  if (!$props.transactions.data.length) {
    _push(`<tr><td colspan="4" class="px-4 py-4 text-center text-gray-500">No donations found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</tbody></table>`);
  _push(ssrRenderComponent(_component_Pagination, {
    links: $props.transactions.links,
    class: "mt-4"
  }, null, _parent));
  _push(`</div><div class="flex justify-end my-4"><button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Export to PDF</button></div></div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Reports/DonorsDonations.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const DonorsDonations = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$f]]);
const __vite_glob_0_39 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DonorsDonations
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$e = {
  props: {
    expenses: Array,
    from: String,
    to: String
  },
  components: {
    Head
  },
  data() {
    const now = /* @__PURE__ */ new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), 1);
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    const formatDate = (date) => date.toISOString().split("T")[0];
    return {
      filters: {
        from: this.from || formatDate(start),
        to: this.to || formatDate(end)
      }
    };
  },
  computed: {
    totalExpenses() {
      return this.expenses.reduce((sum, e) => sum + Number(e.total), 0);
    }
  },
  methods: {
    applyFilter() {
      router.get("/reports/expenses-by-program", this.filters, {
        preserveScroll: true,
        preserveState: true
      });
    }
  },
  layout: Layout
};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Expenses by Program" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Expenses by Program</h1><form class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"><div><label class="block text-sm font-medium mb-1">From</label><input type="date"${ssrRenderAttr("value", $data.filters.from)} class="border rounded px-3 py-2 w-full"></div><div><label class="block text-sm font-medium mb-1">To</label><input type="date"${ssrRenderAttr("value", $data.filters.to)} class="border rounded px-3 py-2 w-full"></div><div class="md:col-span-1 flex items-end"><button type="submit" class="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"> Apply </button></div></form><div class="overflow-x-auto bg-white rounded-lg shadow"><table class="min-w-full text-sm text-left"><thead class="bg-gray-100 text-gray-700 uppercase text-xs"><tr><th class="px-4 py-3">Program</th><th class="px-4 py-3">Total Expenses</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($props.expenses, (expense, index) => {
    _push(`<tr class="border-t"><td class="px-4 py-2">${ssrInterpolate(expense.program)}</td><td class="px-4 py-2 text-red-700 font-semibold">${ssrInterpolate(Number(expense.total).toLocaleString())}</td></tr>`);
  });
  _push(`<!--]-->`);
  if (!$props.expenses.length) {
    _push(`<tr><td colspan="2" class="px-4 py-4 text-center text-gray-500">No data available for this period.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</tbody>`);
  if ($props.expenses.length) {
    _push(`<tfoot><tr class="bg-gray-50 font-semibold border-t"><td class="px-4 py-3">Total</td><td class="px-4 py-3 text-red-800">${ssrInterpolate($options.totalExpenses.toLocaleString())}</td></tr></tfoot>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</table></div></div>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Reports/ExpensesByProgram.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const ExpensesByProgram = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$e]]);
const __vite_glob_0_40 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ExpensesByProgram
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$d = {
  props: {
    summary: Object,
    from: String,
    to: String
  },
  components: {
    Head
  },
  data() {
    const now = /* @__PURE__ */ new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), 1);
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    const format = (d) => d.toISOString().split("T")[0];
    return {
      filters: {
        from: this.from || format(start),
        to: this.to || format(end)
      }
    };
  },
  methods: {
    applyFilter() {
      router.get("/reports/financial-summary", this.filters, {
        preserveScroll: true,
        preserveState: true
      });
    }
  },
  layout: Layout
};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Financial Summary" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Financial Summary</h1><form class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"><div><label class="block text-sm font-medium mb-1">From</label><input type="date"${ssrRenderAttr("value", $data.filters.from)} class="border rounded px-3 py-2 w-full"></div><div><label class="block text-sm font-medium mb-1">To</label><input type="date"${ssrRenderAttr("value", $data.filters.to)} class="border rounded px-3 py-2 w-full"></div><div class="md:col-span-1 flex items-end"><button type="submit" class="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"> Apply </button></div></form><div class="overflow-x-auto bg-white rounded-lg shadow"><table class="min-w-full text-sm text-left"><thead class="bg-gray-100 text-gray-700 uppercase text-xs"><tr><th class="px-4 py-3">Category</th><th class="px-4 py-3">Amount</th></tr></thead><tbody><tr><td class="px-4 py-2 font-medium">Total Donations</td><td class="px-4 py-2 text-green-700 font-semibold">${ssrInterpolate($props.summary.donations.toLocaleString())}</td></tr><tr><td class="px-4 py-2 font-medium">Total Expenses</td><td class="px-4 py-2 text-red-700 font-semibold">${ssrInterpolate($props.summary.expenses.toLocaleString())}</td></tr><tr class="bg-gray-50 font-bold border-t"><td class="px-4 py-3">Net Balance</td><td class="${ssrRenderClass([$props.summary.net >= 0 ? "text-green-800" : "text-red-800", "px-4 py-3"])}">${ssrInterpolate($props.summary.net.toLocaleString())}</td></tr></tbody></table></div></div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Reports/FinancialSummary.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const FinancialSummary = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$d]]);
const __vite_glob_0_41 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: FinancialSummary
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$c = {
  components: {
    Head,
    Link
  },
  layout: Layout
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Reports" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Reports</h1><div class="grid grid-cols-1 md:grid-cols-2 gap-6">`);
  _push(ssrRenderComponent(_component_Link, {
    href: "/reports/donations-by-date",
    class: "block p-6 bg-white rounded-lg shadow hover:shadow-md transition text-lg font-semibold text-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Donations by Date `);
      } else {
        return [
          createTextVNode(" Donations by Date ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    href: "/reports/donations-by-campaign",
    class: "block p-6 bg-white rounded-lg shadow hover:shadow-md transition text-lg font-semibold text-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Donations by Campaign `);
      } else {
        return [
          createTextVNode(" Donations by Campaign ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    href: "/reports/expenses-by-program",
    class: "block p-6 bg-white rounded-lg shadow hover:shadow-md transition text-lg font-semibold text-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Expenses by Program `);
      } else {
        return [
          createTextVNode(" Expenses by Program ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    href: "/reports/financial-summary",
    class: "block p-6 bg-white rounded-lg shadow hover:shadow-md transition text-lg font-semibold text-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Financial Summary `);
      } else {
        return [
          createTextVNode(" Financial Summary ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    href: "/reports/campaign-progress",
    class: "block p-6 bg-white rounded-lg shadow hover:shadow-md transition text-lg font-semibold text-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Campaign Progress `);
      } else {
        return [
          createTextVNode(" Campaign Progress ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    href: "/reports/beneficiaries-by-program",
    class: "block p-6 bg-white rounded-lg shadow hover:shadow-md transition text-lg font-semibold text-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Beneficiaries by Program `);
      } else {
        return [
          createTextVNode(" Beneficiaries by Program ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    href: "/reports/top-donors",
    class: "block p-6 bg-white rounded-lg shadow hover:shadow-md transition text-lg font-semibold text-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Top Donors `);
      } else {
        return [
          createTextVNode(" Top Donors ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    href: "/reports/current-balance",
    class: "block p-6 bg-white rounded-lg shadow hover:shadow-md transition text-lg font-semibold text-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Current Balance `);
      } else {
        return [
          createTextVNode(" Current Balance ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    href: "/reports/donors-donations",
    class: "block p-6 bg-white rounded-lg shadow hover:shadow-md transition text-lg font-semibold text-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Donors and Donations `);
      } else {
        return [
          createTextVNode(" Donors and Donations ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Reports/Index.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const Index$3 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c]]);
const __vite_glob_0_42 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$b = {
  props: {
    donors: Array,
    from: String,
    to: String
  },
  components: {
    Head
  },
  data() {
    const now = /* @__PURE__ */ new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), 1);
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    const format = (d) => d.toISOString().split("T")[0];
    return {
      filters: {
        from: this.from || format(start),
        to: this.to || format(end)
      }
    };
  },
  methods: {
    applyFilter() {
      router.get("/reports/top-donors", this.filters, {
        preserveScroll: true,
        preserveState: true
      });
    }
  },
  layout: Layout
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Top Donors" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Top Donors</h1><form class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"><div><label class="block text-sm font-medium mb-1">From</label><input type="date"${ssrRenderAttr("value", $data.filters.from)} class="border rounded px-3 py-2 w-full"></div><div><label class="block text-sm font-medium mb-1">To</label><input type="date"${ssrRenderAttr("value", $data.filters.to)} class="border rounded px-3 py-2 w-full"></div><div class="md:col-span-1 flex items-end"><button type="submit" class="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"> Apply </button></div></form><div class="overflow-x-auto bg-white rounded-lg shadow"><table class="min-w-full text-sm text-left"><thead class="bg-gray-100 text-gray-700 uppercase text-xs"><tr><th class="px-4 py-3">Donor</th><th class="px-4 py-3">Total Donations</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($props.donors, (donor, index) => {
    _push(`<tr class="border-t"><td class="px-4 py-2">${ssrInterpolate(donor.donor)}</td><td class="px-4 py-2 text-green-700 font-semibold">${ssrInterpolate(Number(donor.total).toLocaleString())}</td></tr>`);
  });
  _push(`<!--]-->`);
  if (!$props.donors.length) {
    _push(`<tr><td colspan="2" class="px-4 py-4 text-center text-gray-500">No donors found in this period.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</tbody></table></div></div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Reports/TopDonors.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const TopDonors = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b]]);
const __vite_glob_0_43 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: TopDonors
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$a = {
  layout: Layout,
  components: {
    Head,
    Link,
    TextInput,
    LoadingButton
  },
  props: {
    menus: Array
  },
  data() {
    return {
      form: this.$inertia.form({
        name: "",
        permissions: []
      })
    };
  },
  computed: {
    allPermissions() {
      return this.menus.flatMap((menu) => menu.permissions);
    }
  },
  methods: {
    submit() {
      this.form.post("/roles");
    }
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 sm:px-6 lg:px-8" }, _attrs))} data-v-2fc3b350>`);
  _push(ssrRenderComponent(_component_Head, { title: "Create Role" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold" data-v-2fc3b350>`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: "/roles"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Roles`);
      } else {
        return [
          createTextVNode("Roles")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="text-indigo-400 font-medium" data-v-2fc3b350>/</span> Create </h1><div class="bg-white rounded-md shadow overflow-hidden" data-v-2fc3b350><form data-v-2fc3b350><div class="flex flex-wrap -mb-8 -mr-6 p-8" data-v-2fc3b350>`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.name,
    "onUpdate:modelValue": ($event) => $data.form.name = $event,
    error: $data.form.errors.name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Role Name"
  }, null, _parent));
  _push(`<div class="pb-8 pr-6 w-full" data-v-2fc3b350><label class="block text-gray-700 font-bold mb-2" data-v-2fc3b350>Permissions</label><div class="grid grid-cols-2 md:grid-cols-4 gap-4" data-v-2fc3b350><!--[-->`);
  ssrRenderList($options.allPermissions, (permission) => {
    _push(`<div class="flex items-center space-x-2" data-v-2fc3b350><input${ssrIncludeBooleanAttr(Array.isArray($data.form.permissions) ? ssrLooseContain($data.form.permissions, permission.id) : $data.form.permissions) ? " checked" : ""} type="checkbox"${ssrRenderAttr("value", permission.id)} class="form-checkbox h-5 w-5 text-indigo-600"${ssrRenderAttr("id", `permission-${permission.id}`)} data-v-2fc3b350><label${ssrRenderAttr("for", `permission-${permission.id}`)} class="text-sm text-gray-600" data-v-2fc3b350>${ssrInterpolate(permission.name)}</label></div>`);
  });
  _push(`<!--]--></div>`);
  if ($data.form.errors.permissions) {
    _push(`<div class="text-red-600 text-sm mt-2" data-v-2fc3b350>${ssrInterpolate($data.form.errors.permissions)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100" data-v-2fc3b350>`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Create Role `);
      } else {
        return [
          createTextVNode(" Create Role ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/Create.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Create$2 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a], ["__scopeId", "data-v-2fc3b350"]]);
const __vite_glob_0_44 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = {
  layout: Layout,
  components: {
    Head,
    Link,
    TextInput,
    LoadingButton
  },
  props: {
    role: Object,
    // 👈 must pass role object
    menus: Array
    // 👈 must pass menus array
  },
  data() {
    return {
      form: this.$inertia.form({
        name: this.role.name || "",
        permissions: this.role.permissions ? this.role.permissions.map((p) => p.id) : []
        // map to array of IDs
      })
    };
  },
  computed: {
    allPermissions() {
      return this.menus.flatMap((menu) => menu.permissions);
    }
  },
  methods: {
    submit() {
      this.form.put(`/roles/${this.role.id}`);
    }
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 sm:px-6 lg:px-8" }, _attrs))} data-v-3c37e94b>`);
  _push(ssrRenderComponent(_component_Head, { title: "Edit Role" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold" data-v-3c37e94b>`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: "/roles"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Roles`);
      } else {
        return [
          createTextVNode("Roles")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="text-indigo-400 font-medium" data-v-3c37e94b>/</span> Edit </h1><div class="bg-white rounded-md shadow overflow-hidden" data-v-3c37e94b><form data-v-3c37e94b><div class="flex flex-wrap -mb-8 -mr-6 p-8" data-v-3c37e94b>`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.name,
    "onUpdate:modelValue": ($event) => $data.form.name = $event,
    error: $data.form.errors.name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Role Name"
  }, null, _parent));
  _push(`<div class="pb-8 pr-6 w-full" data-v-3c37e94b><label class="block text-gray-700 font-bold mb-2" data-v-3c37e94b>Permissions</label><div class="grid grid-cols-2 md:grid-cols-4 gap-4" data-v-3c37e94b><!--[-->`);
  ssrRenderList($options.allPermissions, (permission) => {
    _push(`<div class="flex items-center space-x-2" data-v-3c37e94b><input${ssrIncludeBooleanAttr(Array.isArray($data.form.permissions) ? ssrLooseContain($data.form.permissions, permission.id) : $data.form.permissions) ? " checked" : ""} type="checkbox"${ssrRenderAttr("value", permission.id)} class="form-checkbox h-5 w-5 text-indigo-600"${ssrRenderAttr("id", `permission-${permission.id}`)} data-v-3c37e94b><label${ssrRenderAttr("for", `permission-${permission.id}`)} class="text-sm text-gray-600" data-v-3c37e94b>${ssrInterpolate(permission.name)}</label></div>`);
  });
  _push(`<!--]--></div>`);
  if ($data.form.errors.permissions) {
    _push(`<div class="text-red-600 text-sm mt-2" data-v-3c37e94b>${ssrInterpolate($data.form.errors.permissions)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100" data-v-3c37e94b>`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Update Role `);
      } else {
        return [
          createTextVNode(" Update Role ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/Edit.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Edit$2 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9], ["__scopeId", "data-v-3c37e94b"]]);
const __vite_glob_0_45 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = {
  components: {
    Head,
    Icon,
    Link,
    Pagination,
    SearchFilter
  },
  layout: Layout,
  props: {
    filters: Object,
    roles: Object
  },
  data() {
    return {
      form: {
        search: this.filters.search,
        trashed: this.filters.trashed,
        type: this.filters.type
      }
    };
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function() {
        this.$inertia.get("/roles", pickBy(this.form), { preserveState: true });
      }, 150)
    }
  },
  methods: {
    reset() {
      this.form = mapValues(this.form, () => null);
    }
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_search_filter = resolveComponent("search-filter");
  const _component_Link = resolveComponent("Link");
  const _component_icon = resolveComponent("icon");
  const _component_pagination = resolveComponent("pagination");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Roles" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Roles</h1><div class="flex items-center justify-between mb-6">`);
  _push(ssrRenderComponent(_component_search_filter, {
    modelValue: $data.form.search,
    "onUpdate:modelValue": ($event) => $data.form.search = $event,
    class: "mr-4 w-full max-w-md",
    onReset: $options.reset
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<label class="block text-gray-700"${_scopeId}>Trashed:</label><select class="form-select mt-1 w-full"${_scopeId}><option${ssrRenderAttr("value", null)}${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, null) : ssrLooseEqual($data.form.trashed, null)) ? " selected" : ""}${_scopeId}></option><option value="with"${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, "with") : ssrLooseEqual($data.form.trashed, "with")) ? " selected" : ""}${_scopeId}>With Trashed</option><option value="only"${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, "only") : ssrLooseEqual($data.form.trashed, "only")) ? " selected" : ""}${_scopeId}>Only Trashed</option></select><label class="block mt-4 text-gray-700"${_scopeId}>Type:</label><select class="form-select mt-1 w-full"${_scopeId}><option${ssrRenderAttr("value", null)}${ssrIncludeBooleanAttr(Array.isArray($data.form.type) ? ssrLooseContain($data.form.type, null) : ssrLooseEqual($data.form.type, null)) ? " selected" : ""}${_scopeId}>All</option><option value="generic"${ssrIncludeBooleanAttr(Array.isArray($data.form.type) ? ssrLooseContain($data.form.type, "generic") : ssrLooseEqual($data.form.type, "generic")) ? " selected" : ""}${_scopeId}>Generic</option><option value="non-generic"${ssrIncludeBooleanAttr(Array.isArray($data.form.type) ? ssrLooseContain($data.form.type, "non-generic") : ssrLooseEqual($data.form.type, "non-generic")) ? " selected" : ""}${_scopeId}>Non-Generic</option></select>`);
      } else {
        return [
          createVNode("label", { class: "block text-gray-700" }, "Trashed:"),
          withDirectives(createVNode("select", {
            "onUpdate:modelValue": ($event) => $data.form.trashed = $event,
            class: "form-select mt-1 w-full"
          }, [
            createVNode("option", { value: null }),
            createVNode("option", { value: "with" }, "With Trashed"),
            createVNode("option", { value: "only" }, "Only Trashed")
          ], 8, ["onUpdate:modelValue"]), [
            [vModelSelect, $data.form.trashed]
          ]),
          createVNode("label", { class: "block mt-4 text-gray-700" }, "Type:"),
          withDirectives(createVNode("select", {
            "onUpdate:modelValue": ($event) => $data.form.type = $event,
            class: "form-select mt-1 w-full"
          }, [
            createVNode("option", { value: null }, "All"),
            createVNode("option", { value: "generic" }, "Generic"),
            createVNode("option", { value: "non-generic" }, "Non-Generic")
          ], 8, ["onUpdate:modelValue"]), [
            [vModelSelect, $data.form.type]
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    class: "btn-indigo",
    href: "/roles/create"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Create</span><span class="hidden md:inline"${_scopeId}> Role</span>`);
      } else {
        return [
          createVNode("span", null, "Create"),
          createVNode("span", { class: "hidden md:inline" }, " Role")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="bg-white rounded-md shadow overflow-x-auto"><table class="w-full whitespace-nowrap"><thead><tr class="text-left font-bold"><th class="pb-4 pt-6 px-6">Name</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($props.roles.data, (role) => {
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: `/roles/${role.id}/edit`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(role.name)} `);
          if (role.deleted_at) {
            _push2(ssrRenderComponent(_component_icon, {
              name: "trash",
              class: "shrink-0 ml-2 w-3 h-3 fill-gray-400"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        } else {
          return [
            createTextVNode(toDisplayString(role.name) + " ", 1),
            role.deleted_at ? (openBlock(), createBlock(_component_icon, {
              key: 0,
              name: "trash",
              class: "shrink-0 ml-2 w-3 h-3 fill-gray-400"
            })) : createCommentVNode("", true)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="w-px border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-4",
      href: `/roles/${role.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "cheveron-right",
            class: "block w-6 h-6 fill-gray-400"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_icon, {
              name: "cheveron-right",
              class: "block w-6 h-6 fill-gray-400"
            })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.roles.data.length === 0) {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="6">No roles found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</tbody></table></div>`);
  _push(ssrRenderComponent(_component_pagination, {
    class: "mt-6",
    links: $props.roles.links
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/Index.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Index$2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const __vite_glob_0_46 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = {
  props: {
    modelValue: File,
    label: String,
    accept: String,
    errors: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue"],
  watch: {
    modelValue(value) {
      if (!value) {
        this.$refs.file.value = "";
      }
    }
  },
  methods: {
    filesize(size) {
      var i = Math.floor(Math.log(size) / Math.log(1024));
      return (size / Math.pow(1024, i)).toFixed(2) * 1 + " " + ["B", "kB", "MB", "GB", "TB"][i];
    },
    browse() {
      this.$refs.file.click();
    },
    change(e) {
      this.$emit("update:modelValue", e.target.files[0]);
    },
    remove() {
      this.$emit("update:modelValue", null);
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if ($props.label) {
    _push(`<label class="form-label">${ssrInterpolate($props.label)}:</label>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass([{ error: $props.errors.length }, "form-input p-0"])}"><input type="file"${ssrRenderAttr("accept", $props.accept)} class="hidden">`);
  if (!$props.modelValue) {
    _push(`<div class="p-2"><button type="button" class="px-4 py-1 text-white text-xs font-medium bg-gray-500 hover:bg-gray-700 rounded-sm">Browse</button></div>`);
  } else {
    _push(`<div class="flex items-center justify-between p-2"><div class="flex-1 pr-1">${ssrInterpolate($props.modelValue.name)} <span class="text-gray-500 text-xs">(${ssrInterpolate($options.filesize($props.modelValue.size))})</span></div><button type="button" class="px-4 py-1 text-white text-xs font-medium bg-gray-500 hover:bg-gray-700 rounded-sm">Remove</button></div>`);
  }
  _push(`</div>`);
  if ($props.errors.length) {
    _push(`<div class="form-error">${ssrInterpolate($props.errors[0])}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/FileInput.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const FileInput = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = {
  components: {
    Head,
    TextInput,
    FileInput,
    LoadingButton
  },
  layout: Layout,
  props: {
    config: Object
  },
  data() {
    return {
      form: this.$inertia.form({
        site_name: this.config.site_name || "",
        contact_email: this.config.contact_email || "",
        contact_number: this.config.contact_number || "",
        logo: null,
        favicon: null
      })
    };
  },
  methods: {
    submit() {
      this.form.post("/settings/website", {
        preserveScroll: true
      });
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_text_input = resolveComponent("text-input");
  const _component_file_input = resolveComponent("file-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Website Configuration" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Website Configuration</h1><div class="bg-white rounded-md shadow overflow-hidden"><form enctype="multipart/form-data"><div class="flex flex-wrap -mb-8 -mr-6 p-8">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.site_name,
    "onUpdate:modelValue": ($event) => $data.form.site_name = $event,
    error: $data.form.errors.site_name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Site Name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.contact_email,
    "onUpdate:modelValue": ($event) => $data.form.contact_email = $event,
    error: $data.form.errors.contact_email,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Contact Email"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.contact_number,
    "onUpdate:modelValue": ($event) => $data.form.contact_number = $event,
    error: $data.form.errors.contact_number,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Contact Number"
  }, null, _parent));
  _push(ssrRenderComponent(_component_file_input, {
    modelValue: $data.form.logo,
    "onUpdate:modelValue": ($event) => $data.form.logo = $event,
    error: $data.form.errors.logo,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Logo"
  }, null, _parent));
  _push(ssrRenderComponent(_component_file_input, {
    modelValue: $data.form.favicon,
    "onUpdate:modelValue": ($event) => $data.form.favicon = $event,
    error: $data.form.errors.favicon,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Favicon"
  }, null, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Save Configuration `);
      } else {
        return [
          createTextVNode(" Save Configuration ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Settings/WebsiteConfiguration.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const WebsiteConfiguration = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const __vite_glob_0_47 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: WebsiteConfiguration
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    Select2Input
  },
  layout: Layout,
  remember: "form",
  props: {
    cities: Array,
    // All cities from backend
    countries: Array
  },
  data() {
    return {
      form: this.$inertia.form({
        full_name: null,
        email: null,
        phone: null,
        address: null,
        city_id: null,
        country_id: null,
        donor_type: "Individual",
        monthly_donation: 0
      }),
      filteredCities: [],
      citySelectKey: 0
      // Used to force re-render
    };
  },
  methods: {
    store() {
      this.form.post("/donors");
    },
    async fetchCities(countryId) {
      if (!countryId) {
        this.filteredCities = [];
        this.form.city_id = null;
        this.citySelectKey += 1;
        return;
      }
      try {
        const response = await axios.get(`/countries/${countryId}/cities`);
        this.filteredCities = response.data;
        this.form.city_id = null;
        this.citySelectKey += 1;
      } catch (error) {
        console.error("Error fetching cities:", error);
        this.filteredCities = [];
      }
    }
  },
  watch: {
    "form.country_id"(newVal) {
      this.fetchCities(newVal);
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_select2_input = resolveComponent("select2-input");
  const _component_select_input = resolveComponent("select-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 sm:px-6 lg:px-8" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Create Donor" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: "/donors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Donors`);
      } else {
        return [
          createTextVNode("Donors")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="text-indigo-400 font-medium">/</span> Create </h1><div class="bg-white rounded-md shadow overflow-hidden"><form><div class="flex flex-wrap -mb-8 -mr-6 p-8">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.full_name,
    "onUpdate:modelValue": ($event) => $data.form.full_name = $event,
    error: $data.form.errors.full_name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Full Name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    error: $data.form.errors.email,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Email"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.phone,
    "onUpdate:modelValue": ($event) => $data.form.phone = $event,
    error: $data.form.errors.phone,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Phone"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.address,
    "onUpdate:modelValue": ($event) => $data.form.address = $event,
    error: $data.form.errors.address,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Address"
  }, null, _parent));
  _push(ssrRenderComponent(_component_select2_input, {
    modelValue: $data.form.country_id,
    "onUpdate:modelValue": ($event) => $data.form.country_id = $event,
    options: $props.countries,
    error: $data.form.errors.country_id,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Country",
    onChange: $options.fetchCities
  }, null, _parent));
  _push(ssrRenderComponent(_component_select2_input, {
    modelValue: $data.form.city_id,
    "onUpdate:modelValue": ($event) => $data.form.city_id = $event,
    options: $data.filteredCities,
    error: $data.form.errors.city_id,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "City",
    disabled: !$data.form.country_id,
    key: $data.citySelectKey
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.donor_type,
    "onUpdate:modelValue": ($event) => $data.form.donor_type = $event,
    error: $data.form.errors.donor_type,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Donor Type"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option value="Individual"${_scopeId}>Individual</option><option value="Organization"${_scopeId}>Organization</option>`);
      } else {
        return [
          createVNode("option", { value: "Individual" }, "Individual"),
          createVNode("option", { value: "Organization" }, "Organization")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.monthly_donation,
    "onUpdate:modelValue": ($event) => $data.form.monthly_donation = $event,
    error: $data.form.errors.monthly_donation,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Monthly Donation (PKR)",
    type: "number"
  }, null, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Create Donor`);
      } else {
        return [
          createTextVNode("Create Donor")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Transactions/Create.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Create$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const __vite_glob_0_48 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    Select2Input
  },
  layout: Layout,
  remember: "form",
  props: {
    donor: Object,
    countries: Array,
    cities: Array
  },
  data() {
    return {
      form: this.$inertia.form({
        full_name: this.donor.full_name,
        email: this.donor.email,
        phone: this.donor.phone,
        address: this.donor.address,
        country_id: this.donor.country_id,
        city_id: this.donor.city_id,
        donor_type: this.donor.donor_type,
        monthly_donation: this.donor.monthly_donation
      }),
      filteredCities: this.cities,
      citySelectKey: 0
    };
  },
  mounted() {
    if (this.donor.country_id) {
      this.fetchCities(this.donor.country_id);
    }
  },
  methods: {
    update() {
      this.form.put(`/donors/${this.donor.id}`);
    },
    destroy() {
      if (confirm("Are you sure you want to delete this donor?")) {
        this.$inertia.delete(`/donors/${this.donor.id}`);
      }
    },
    async fetchCities(countryId) {
      if (!countryId) {
        this.filteredCities = [];
        this.form.city_id = null;
        this.citySelectKey += 1;
        return;
      }
      try {
        const response = await axios.get(`/countries/${countryId}/cities`);
        this.filteredCities = response.data;
        const currentCityValid = response.data.some((city) => city.id === this.form.city_id);
        if (!currentCityValid) {
          this.form.city_id = null;
        }
        this.citySelectKey += 1;
      } catch (error) {
        console.error("Error fetching cities:", error);
        this.filteredCities = [];
      }
    }
  },
  watch: {
    "form.country_id"(newVal) {
      this.fetchCities(newVal);
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_select2_input = resolveComponent("select2-input");
  const _component_select_input = resolveComponent("select-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 sm:px-6 lg:px-8" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: `Edit Donor - ${$data.form.full_name}`
  }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: "/donors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Donors`);
      } else {
        return [
          createTextVNode("Donors")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="text-indigo-400 font-medium">/</span> Edit </h1><div class="bg-white rounded-md shadow overflow-hidden"><form><div class="flex flex-wrap -mb-8 -mr-6 p-8">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.full_name,
    "onUpdate:modelValue": ($event) => $data.form.full_name = $event,
    error: $data.form.errors.full_name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Full Name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    error: $data.form.errors.email,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Email"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.phone,
    "onUpdate:modelValue": ($event) => $data.form.phone = $event,
    error: $data.form.errors.phone,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Phone"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.address,
    "onUpdate:modelValue": ($event) => $data.form.address = $event,
    error: $data.form.errors.address,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Address"
  }, null, _parent));
  _push(ssrRenderComponent(_component_select2_input, {
    modelValue: $data.form.country_id,
    "onUpdate:modelValue": ($event) => $data.form.country_id = $event,
    options: $props.countries,
    error: $data.form.errors.country_id,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Country",
    onChange: $options.fetchCities
  }, null, _parent));
  _push(ssrRenderComponent(_component_select2_input, {
    modelValue: $data.form.city_id,
    "onUpdate:modelValue": ($event) => $data.form.city_id = $event,
    options: $data.filteredCities,
    error: $data.form.errors.city_id,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "City",
    disabled: !$data.form.country_id,
    key: $data.citySelectKey
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.donor_type,
    "onUpdate:modelValue": ($event) => $data.form.donor_type = $event,
    error: $data.form.errors.donor_type,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Donor Type"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option value="Individual"${_scopeId}>Individual</option><option value="Organization"${_scopeId}>Organization</option>`);
      } else {
        return [
          createVNode("option", { value: "Individual" }, "Individual"),
          createVNode("option", { value: "Organization" }, "Organization")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.monthly_donation,
    "onUpdate:modelValue": ($event) => $data.form.monthly_donation = $event,
    error: $data.form.errors.monthly_donation,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Monthly Donation (PKR)",
    type: "number"
  }, null, _parent));
  _push(`</div><div class="flex items-center justify-between px-8 py-4 bg-gray-50 border-t border-gray-100">`);
  if (!$data.form.processing) {
    _push(`<button type="button" class="text-red-600 hover:text-red-900">Delete Donor</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Update Donor`);
      } else {
        return [
          createTextVNode("Update Donor")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Transactions/Edit.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Edit$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const __vite_glob_0_49 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  components: {
    Head,
    Icon,
    Link,
    Pagination,
    SearchFilter
  },
  layout: Layout,
  props: {
    filters: Object,
    donors: Object
  },
  data() {
    return {
      form: {
        search: this.filters.search,
        trashed: this.filters.trashed
      }
    };
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function() {
        this.$inertia.get("/donors", pickBy(this.form), { preserveState: true });
      }, 150)
    }
  },
  methods: {
    reset() {
      this.form = mapValues(this.form, () => null);
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_search_filter = resolveComponent("search-filter");
  const _component_Link = resolveComponent("Link");
  const _component_icon = resolveComponent("icon");
  const _component_pagination = resolveComponent("pagination");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Donors" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Donors</h1><div class="flex items-center justify-between mb-6">`);
  _push(ssrRenderComponent(_component_search_filter, {
    modelValue: $data.form.search,
    "onUpdate:modelValue": ($event) => $data.form.search = $event,
    class: "mr-4 w-full max-w-md",
    onReset: $options.reset
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<label class="block text-gray-700"${_scopeId}>Trashed:</label><select class="form-select mt-1 w-full"${_scopeId}><option${ssrRenderAttr("value", null)}${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, null) : ssrLooseEqual($data.form.trashed, null)) ? " selected" : ""}${_scopeId}></option><option value="with"${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, "with") : ssrLooseEqual($data.form.trashed, "with")) ? " selected" : ""}${_scopeId}>With Trashed</option><option value="only"${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, "only") : ssrLooseEqual($data.form.trashed, "only")) ? " selected" : ""}${_scopeId}>Only Trashed</option></select>`);
      } else {
        return [
          createVNode("label", { class: "block text-gray-700" }, "Trashed:"),
          withDirectives(createVNode("select", {
            "onUpdate:modelValue": ($event) => $data.form.trashed = $event,
            class: "form-select mt-1 w-full"
          }, [
            createVNode("option", { value: null }),
            createVNode("option", { value: "with" }, "With Trashed"),
            createVNode("option", { value: "only" }, "Only Trashed")
          ], 8, ["onUpdate:modelValue"]), [
            [vModelSelect, $data.form.trashed]
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    class: "btn-indigo",
    href: "/donors/create"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Create</span><span class="hidden md:inline"${_scopeId}> Donor</span>`);
      } else {
        return [
          createVNode("span", null, "Create"),
          createVNode("span", { class: "hidden md:inline" }, " Donor")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="bg-white rounded-md shadow overflow-x-auto"><table class="w-full whitespace-nowrap"><thead><tr class="text-left font-bold"><th class="pb-4 pt-6 px-6">Full Name</th><th class="pb-4 pt-6 px-6">City</th><th class="pb-4 pt-6 px-6" colspan="2">Phone</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($props.donors.data, (donor) => {
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: `/donors/${donor.id}/edit`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(donor.full_name)} `);
          if (donor.deleted_at) {
            _push2(ssrRenderComponent(_component_icon, {
              name: "trash",
              class: "shrink-0 ml-2 w-3 h-3 fill-gray-400"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        } else {
          return [
            createTextVNode(toDisplayString(donor.full_name) + " ", 1),
            donor.deleted_at ? (openBlock(), createBlock(_component_icon, {
              key: 0,
              name: "trash",
              class: "shrink-0 ml-2 w-3 h-3 fill-gray-400"
            })) : createCommentVNode("", true)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: `/donors/${donor.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(donor.city)}`);
        } else {
          return [
            createTextVNode(toDisplayString(donor.city), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: `/donors/${donor.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(donor.phone)}`);
        } else {
          return [
            createTextVNode(toDisplayString(donor.phone), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="w-px border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-4",
      href: `/donors/${donor.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "cheveron-right",
            class: "block w-6 h-6 fill-gray-400"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_icon, {
              name: "cheveron-right",
              class: "block w-6 h-6 fill-gray-400"
            })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.donors.data.length === 0) {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="4">No donors found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</tbody></table></div>`);
  _push(ssrRenderComponent(_component_pagination, {
    class: "mt-6",
    links: $props.donors.links
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Transactions/Index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Index$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const __vite_glob_0_50 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  components: {
    FileInput,
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    Select2Input
  },
  layout: Layout,
  remember: "form",
  data() {
    return {
      form: this.$inertia.form({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        // owner: false,
        photo: null,
        role: null
      })
    };
  },
  props: {
    roles: Array
  },
  methods: {
    store() {
      this.form.post("/users");
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_select2_input = resolveComponent("select2-input");
  const _component_file_input = resolveComponent("file-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Create User" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: "/users"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Users`);
      } else {
        return [
          createTextVNode("Users")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="text-indigo-400 font-medium">/</span> Create </h1><div class="max-w-3xl bg-white rounded-md shadow overflow-hidden"><form><div class="flex flex-wrap -mb-8 -mr-6 p-8">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.first_name,
    "onUpdate:modelValue": ($event) => $data.form.first_name = $event,
    error: $data.form.errors.first_name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "First name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.last_name,
    "onUpdate:modelValue": ($event) => $data.form.last_name = $event,
    error: $data.form.errors.last_name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Last name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    error: $data.form.errors.email,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Email"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.password,
    "onUpdate:modelValue": ($event) => $data.form.password = $event,
    error: $data.form.errors.password,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    type: "password",
    autocomplete: "new-password",
    label: "Password"
  }, null, _parent));
  _push(ssrRenderComponent(_component_select2_input, {
    modelValue: $data.form.role,
    "onUpdate:modelValue": ($event) => $data.form.role = $event,
    options: $props.roles,
    error: $data.form.errors.role,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Role"
  }, null, _parent));
  _push(ssrRenderComponent(_component_file_input, {
    modelValue: $data.form.photo,
    "onUpdate:modelValue": ($event) => $data.form.photo = $event,
    error: $data.form.errors.photo,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    type: "file",
    accept: "image/*",
    label: "Photo"
  }, null, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Create User`);
      } else {
        return [
          createTextVNode("Create User")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Create.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Create = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const __vite_glob_0_51 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  components: {
    FileInput,
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    TrashedMessage,
    Select2Input
  },
  layout: Layout,
  props: {
    user: Object,
    roles: Array
  },
  remember: "form",
  data() {
    return {
      form: this.$inertia.form({
        _method: "put",
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        email: this.user.email,
        password: "",
        // owner: this.user.owner,
        photo: null,
        role: this.user.role
      })
    };
  },
  methods: {
    update() {
      this.form.post(`/users/${this.user.id}`, {
        onSuccess: () => this.form.reset("password", "photo")
      });
    },
    destroy() {
      if (confirm("Are you sure you want to delete this user?")) {
        this.$inertia.delete(`/users/${this.user.id}`);
      }
    },
    restore() {
      if (confirm("Are you sure you want to restore this user?")) {
        this.$inertia.put(`/users/${this.user.id}/restore`);
      }
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_trashed_message = resolveComponent("trashed-message");
  const _component_text_input = resolveComponent("text-input");
  const _component_select2_input = resolveComponent("select2-input");
  const _component_file_input = resolveComponent("file-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: `${$data.form.first_name} ${$data.form.last_name}`
  }, null, _parent));
  _push(`<div class="flex justify-start mb-8 max-w-3xl"><h1 class="text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: "/users"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Users`);
      } else {
        return [
          createTextVNode("Users")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="text-indigo-400 font-medium">/</span> ${ssrInterpolate($data.form.first_name)} ${ssrInterpolate($data.form.last_name)}</h1>`);
  if ($props.user.photo) {
    _push(`<img class="block ml-4 w-8 h-8 rounded-full"${ssrRenderAttr("src", $props.user.photo)}>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if ($props.user.deleted_at) {
    _push(ssrRenderComponent(_component_trashed_message, {
      class: "mb-6",
      onRestore: $options.restore
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` This user has been deleted. `);
        } else {
          return [
            createTextVNode(" This user has been deleted. ")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="max-w-3xl bg-white rounded-md shadow overflow-hidden"><form><div class="flex flex-wrap -mb-8 -mr-6 p-8">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.first_name,
    "onUpdate:modelValue": ($event) => $data.form.first_name = $event,
    error: $data.form.errors.first_name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "First name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.last_name,
    "onUpdate:modelValue": ($event) => $data.form.last_name = $event,
    error: $data.form.errors.last_name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Last name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    error: $data.form.errors.email,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Email"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.password,
    "onUpdate:modelValue": ($event) => $data.form.password = $event,
    error: $data.form.errors.password,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    type: "password",
    autocomplete: "new-password",
    label: "Password"
  }, null, _parent));
  _push(ssrRenderComponent(_component_select2_input, {
    modelValue: $data.form.role,
    "onUpdate:modelValue": ($event) => $data.form.role = $event,
    options: $props.roles,
    error: $data.form.errors.role,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Role"
  }, null, _parent));
  _push(ssrRenderComponent(_component_file_input, {
    modelValue: $data.form.photo,
    "onUpdate:modelValue": ($event) => $data.form.photo = $event,
    error: $data.form.errors.photo,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    type: "file",
    accept: "image/*",
    label: "Photo"
  }, null, _parent));
  _push(`</div><div class="flex items-center px-8 py-4 bg-gray-50 border-t border-gray-100">`);
  if (!$props.user.deleted_at) {
    _push(`<button class="text-red-600 hover:underline" tabindex="-1" type="button">Delete User</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo ml-auto",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Update User`);
      } else {
        return [
          createTextVNode("Update User")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Edit.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Edit = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const __vite_glob_0_52 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  components: {
    Head,
    Icon,
    Link,
    SearchFilter
  },
  layout: Layout,
  props: {
    filters: Object,
    users: Array
  },
  data() {
    return {
      form: {
        search: this.filters.search,
        role: this.filters.role,
        trashed: this.filters.trashed
      }
    };
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function() {
        this.$inertia.get("/users", pickBy(this.form), { preserveState: true });
      }, 150)
    }
  },
  methods: {
    reset() {
      this.form = mapValues(this.form, () => null);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_search_filter = resolveComponent("search-filter");
  const _component_Link = resolveComponent("Link");
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Users" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Users</h1><div class="flex items-center justify-between mb-6">`);
  _push(ssrRenderComponent(_component_search_filter, {
    modelValue: $data.form.search,
    "onUpdate:modelValue": ($event) => $data.form.search = $event,
    class: "mr-4 w-full max-w-md",
    onReset: $options.reset
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<label class="block text-gray-700"${_scopeId}>Role:</label><select class="form-select mt-1 w-full"${_scopeId}><option${ssrRenderAttr("value", null)}${ssrIncludeBooleanAttr(Array.isArray($data.form.role) ? ssrLooseContain($data.form.role, null) : ssrLooseEqual($data.form.role, null)) ? " selected" : ""}${_scopeId}></option><option value="user"${ssrIncludeBooleanAttr(Array.isArray($data.form.role) ? ssrLooseContain($data.form.role, "user") : ssrLooseEqual($data.form.role, "user")) ? " selected" : ""}${_scopeId}>User</option><option value="owner"${ssrIncludeBooleanAttr(Array.isArray($data.form.role) ? ssrLooseContain($data.form.role, "owner") : ssrLooseEqual($data.form.role, "owner")) ? " selected" : ""}${_scopeId}>Owner</option></select><label class="block mt-4 text-gray-700"${_scopeId}>Trashed:</label><select class="form-select mt-1 w-full"${_scopeId}><option${ssrRenderAttr("value", null)}${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, null) : ssrLooseEqual($data.form.trashed, null)) ? " selected" : ""}${_scopeId}></option><option value="with"${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, "with") : ssrLooseEqual($data.form.trashed, "with")) ? " selected" : ""}${_scopeId}>With Trashed</option><option value="only"${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, "only") : ssrLooseEqual($data.form.trashed, "only")) ? " selected" : ""}${_scopeId}>Only Trashed</option></select>`);
      } else {
        return [
          createVNode("label", { class: "block text-gray-700" }, "Role:"),
          withDirectives(createVNode("select", {
            "onUpdate:modelValue": ($event) => $data.form.role = $event,
            class: "form-select mt-1 w-full"
          }, [
            createVNode("option", { value: null }),
            createVNode("option", { value: "user" }, "User"),
            createVNode("option", { value: "owner" }, "Owner")
          ], 8, ["onUpdate:modelValue"]), [
            [vModelSelect, $data.form.role]
          ]),
          createVNode("label", { class: "block mt-4 text-gray-700" }, "Trashed:"),
          withDirectives(createVNode("select", {
            "onUpdate:modelValue": ($event) => $data.form.trashed = $event,
            class: "form-select mt-1 w-full"
          }, [
            createVNode("option", { value: null }),
            createVNode("option", { value: "with" }, "With Trashed"),
            createVNode("option", { value: "only" }, "Only Trashed")
          ], 8, ["onUpdate:modelValue"]), [
            [vModelSelect, $data.form.trashed]
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    class: "btn-indigo",
    href: "/users/create"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Create</span><span class="hidden md:inline"${_scopeId}> User</span>`);
      } else {
        return [
          createVNode("span", null, "Create"),
          createVNode("span", { class: "hidden md:inline" }, " User")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="bg-white rounded-md shadow overflow-x-auto"><table class="w-full whitespace-nowrap"><tr class="text-left font-bold"><th class="pb-4 pt-6 px-6">Name</th><th class="pb-4 pt-6 px-6">Email</th><th class="pb-4 pt-6 px-6" colspan="2">Role</th></tr><!--[-->`);
  ssrRenderList($props.users, (user) => {
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: `/users/${user.id}/edit`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          if (user.photo) {
            _push2(`<img class="block -my-2 mr-2 w-5 h-5 rounded-full"${ssrRenderAttr("src", user.photo)}${_scopeId}>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(` ${ssrInterpolate(user.name)} `);
          if (user.deleted_at) {
            _push2(ssrRenderComponent(_component_icon, {
              name: "trash",
              class: "shrink-0 ml-2 w-3 h-3 fill-gray-400"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        } else {
          return [
            user.photo ? (openBlock(), createBlock("img", {
              key: 0,
              class: "block -my-2 mr-2 w-5 h-5 rounded-full",
              src: user.photo
            }, null, 8, ["src"])) : createCommentVNode("", true),
            createTextVNode(" " + toDisplayString(user.name) + " ", 1),
            user.deleted_at ? (openBlock(), createBlock(_component_icon, {
              key: 1,
              name: "trash",
              class: "shrink-0 ml-2 w-3 h-3 fill-gray-400"
            })) : createCommentVNode("", true)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: `/users/${user.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(user.email)}`);
        } else {
          return [
            createTextVNode(toDisplayString(user.email), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: `/users/${user.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(user.role_name)}`);
        } else {
          return [
            createTextVNode(toDisplayString(user.role_name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="w-px border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-4",
      href: `/users/${user.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "cheveron-right",
            class: "block w-6 h-6 fill-gray-400"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_icon, {
              name: "cheveron-right",
              class: "block w-6 h-6 fill-gray-400"
            })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.users.length === 0) {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="4">No users found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</table></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const __vite_glob_0_53 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
createServer((page) => createInertiaApp({
  page,
  render: renderToString,
  resolve: (name) => {
    const pages = /* @__PURE__ */ Object.assign({ "./Pages/Auth/Login.vue": __vite_glob_0_0, "./Pages/Beneficiaries/Create.vue": __vite_glob_0_1, "./Pages/Beneficiaries/Edit.vue": __vite_glob_0_2, "./Pages/Beneficiaries/Index.vue": __vite_glob_0_3, "./Pages/Campaigns/Create.vue": __vite_glob_0_4, "./Pages/Campaigns/Edit.vue": __vite_glob_0_5, "./Pages/Campaigns/Index.vue": __vite_glob_0_6, "./Pages/Contacts/Create.vue": __vite_glob_0_7, "./Pages/Contacts/Edit.vue": __vite_glob_0_8, "./Pages/Contacts/Index.vue": __vite_glob_0_9, "./Pages/Dashboard/Index.vue": __vite_glob_0_10, "./Pages/Donations/Create.vue": __vite_glob_0_11, "./Pages/Donations/Edit.vue": __vite_glob_0_12, "./Pages/Donations/Index.vue": __vite_glob_0_13, "./Pages/Donors/Create.vue": __vite_glob_0_14, "./Pages/Donors/Edit.vue": __vite_glob_0_15, "./Pages/Donors/Index.vue": __vite_glob_0_16, "./Pages/ExpenseHeads/Create.vue": __vite_glob_0_17, "./Pages/ExpenseHeads/Edit.vue": __vite_glob_0_18, "./Pages/ExpenseHeads/Index.vue": __vite_glob_0_19, "./Pages/Expenses/Create.vue": __vite_glob_0_20, "./Pages/Expenses/Edit.vue": __vite_glob_0_21, "./Pages/Expenses/Index.vue": __vite_glob_0_22, "./Pages/Organizations/Create.vue": __vite_glob_0_23, "./Pages/Organizations/Edit.vue": __vite_glob_0_24, "./Pages/Organizations/Index.vue": __vite_glob_0_25, "./Pages/PaymentMethod/Create.vue": __vite_glob_0_26, "./Pages/PaymentMethod/Edit.vue": __vite_glob_0_27, "./Pages/PaymentMethod/Index.vue": __vite_glob_0_28, "./Pages/PaymentMethod/Show.vue": __vite_glob_0_29, "./Pages/Programs/Create.vue": __vite_glob_0_30, "./Pages/Programs/Edit.vue": __vite_glob_0_31, "./Pages/Programs/Index.vue": __vite_glob_0_32, "./Pages/Programs/Show.vue": __vite_glob_0_33, "./Pages/Reports/BeneficiariesByProgram.vue": __vite_glob_0_34, "./Pages/Reports/BeneficiariesByProgramDetail.vue": __vite_glob_0_35, "./Pages/Reports/CurrentBalance.vue": __vite_glob_0_36, "./Pages/Reports/DonationsByCampaign.vue": __vite_glob_0_37, "./Pages/Reports/DonationsByDate.vue": __vite_glob_0_38, "./Pages/Reports/DonorsDonations.vue": __vite_glob_0_39, "./Pages/Reports/ExpensesByProgram.vue": __vite_glob_0_40, "./Pages/Reports/FinancialSummary.vue": __vite_glob_0_41, "./Pages/Reports/Index.vue": __vite_glob_0_42, "./Pages/Reports/TopDonors.vue": __vite_glob_0_43, "./Pages/Roles/Create.vue": __vite_glob_0_44, "./Pages/Roles/Edit.vue": __vite_glob_0_45, "./Pages/Roles/Index.vue": __vite_glob_0_46, "./Pages/Settings/WebsiteConfiguration.vue": __vite_glob_0_47, "./Pages/Transactions/Create.vue": __vite_glob_0_48, "./Pages/Transactions/Edit.vue": __vite_glob_0_49, "./Pages/Transactions/Index.vue": __vite_glob_0_50, "./Pages/Users/Create.vue": __vite_glob_0_51, "./Pages/Users/Edit.vue": __vite_glob_0_52, "./Pages/Users/Index.vue": __vite_glob_0_53 });
    return pages[`./Pages/${name}.vue`];
  },
  title: (title) => title ? `${title} - Ping CRM` : "Ping CRM",
  setup({ app, props, plugin }) {
    return createSSRApp({
      render: () => h(app, props)
    }).use(plugin);
  }
}));
