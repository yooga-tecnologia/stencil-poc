"use strict";(self.webpackChunk_yooga_mantra=self.webpackChunk_yooga_mantra||[]).push([[967],{"./src/components/my-button/my-button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Disabled:()=>Disabled,Primary:()=>Primary,Secondary:()=>Secondary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/MyButton",component:"my-button",argTypes:{label:{control:"text"},variant:{control:{type:"select",options:["primary","secondary"]}},disabled:{control:"boolean"}}},Template=args=>`\n  <my-button label="${args.label}" variant="${args.variant}" disabled="${args.disabled}"></my-button>\n`,Primary=Template.bind({});Primary.args={label:"Primary",variant:"primary",disabled:!1};const Secondary=Template.bind({});Secondary.args={label:"Secondary",variant:"secondary",disabled:!1};const Disabled=Template.bind({});Disabled.args={label:"Disabled",variant:"primary",disabled:!0};const __namedExportsOrder=["Primary","Secondary","Disabled"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'args => `\n  <my-button label="${args.label}" variant="${args.variant}" disabled="${args.disabled}"></my-button>\n`',...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:'args => `\n  <my-button label="${args.label}" variant="${args.variant}" disabled="${args.disabled}"></my-button>\n`',...Secondary.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'args => `\n  <my-button label="${args.label}" variant="${args.variant}" disabled="${args.disabled}"></my-button>\n`',...Disabled.parameters?.docs?.source}}}}}]);