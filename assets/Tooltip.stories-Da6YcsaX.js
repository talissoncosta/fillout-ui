import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{T as r,I as l}from"./icon-button-D5IhRBW5.js";import{P as u}from"./drag-handler-icon-Bf5aGXdl.js";import{B as m}from"./button-CrHCw52q.js";import"./iframe-D6x9mQiR.js";import"./index-DYGYG7P0.js";import"./index-BI97jRDt.js";import"./index-BTRsfViy.js";import"./index-CmGAO2Ew.js";const{userEvent:i,within:c}=__STORYBOOK_MODULE_TEST__,T={title:"Components/Tooltip",component:r,args:{side:"top",sideOffset:5,content:"Tooltip text"}},s={render:t=>o.jsx(r,{...t,children:o.jsx(m,{children:"Button with tooltip"})}),args:{content:"Add item"},play:async({canvasElement:t})=>{const n=await c(t).getByRole("button");await i.hover(n)}},e={args:{content:"This tooltip shows below",side:"bottom"},render:t=>o.jsx(r,{...t,children:o.jsx(l,{children:o.jsx(u,{size:"tiny"})})}),play:async({canvasElement:t})=>{const n=await c(t).getByRole("button");await i.hover(n)}},a={args:{content:o.jsxs("span",{children:[o.jsx("strong",{children:"Bold text"})," inside tooltip"]})},render:t=>o.jsx(r,{...t,children:o.jsx(l,{children:o.jsx(u,{size:"tiny"})})}),play:async({canvasElement:t})=>{const n=await c(t).getByRole("button");await i.hover(n)}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
      <Button>Button with tooltip</Button>
    </Tooltip>,
  args: {
    content: 'Add item'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole('button');
    await userEvent.hover(button);
  }
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'This tooltip shows below',
    side: 'bottom'
  },
  render: (args: ComponentProps<typeof Tooltip>) => <Tooltip {...args}>
      <IconButton>
        <PlusIcon size="tiny" />
      </IconButton>
    </Tooltip>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole('button');
    await userEvent.hover(button);
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    content: <span>
        <strong>Bold text</strong> inside tooltip
      </span>
  },
  render: (args: ComponentProps<typeof Tooltip>) => <Tooltip {...args}>
      <IconButton>
        <PlusIcon size="tiny" />
      </IconButton>
    </Tooltip>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole('button');
    await userEvent.hover(button);
  }
}`,...a.parameters?.docs?.source}}};const E=["Default","BottomSide","WithCustomContent"];export{e as BottomSide,s as Default,a as WithCustomContent,E as __namedExportsOrder,T as default};
