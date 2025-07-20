import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as r}from"./icon-button-CLj4qtN-.js";import{P as s,I as l}from"./drag-handler-icon-Bf5aGXdl.js";import"./iframe-C1KHkSHS.js";import"./index-BwKmgDoq.js";import"./index-C93_kJ5d.js";import"./index-Bx369HKm.js";import"./index-C6D4KHQS.js";const h={title:"Components/IconButton",component:r,argTypes:{onClick:{action:"clicked"}}},t={args:{children:e.jsx(s,{size:"tiny"}),"aria-label":"Button label"}},a={args:{children:e.jsx(s,{size:"tiny"}),tooltip:"Test tooltip"}},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[e.jsx(r,{size:"small",children:e.jsx(s,{size:"tiny"})}),e.jsx(r,{size:"medium",children:e.jsx(s,{size:"small"})}),e.jsx(r,{size:"large",children:e.jsx(s,{size:"standard"})})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[e.jsx(r,{size:"large",shape:"rounded",children:e.jsx(l,{size:"small"})}),e.jsx(r,{size:"large",shape:"square",children:e.jsx(l,{size:"small"})})]})},i={render:()=>e.jsx(r,{size:"large",variant:"standard",children:e.jsx(l,{})})},c={render:()=>e.jsx(r,{size:"large",variant:"ghost",children:e.jsx(l,{})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: <PlusIcon size="tiny" />,
    'aria-label': 'Button label'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: <PlusIcon size="tiny" />,
    tooltip: 'Test tooltip'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'flex',
      gap: '10px',
      alignItems: 'center'
    }}>
        <IconButton size="small">
          <PlusIcon size="tiny" />
        </IconButton>
        <IconButton size="medium">
          <PlusIcon size="small" />
        </IconButton>
        <IconButton size="large">
          <PlusIcon size="standard" />
        </IconButton>
      </div>;
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'flex',
      gap: '10px',
      alignItems: 'center'
    }}>
        <IconButton size="large" shape="rounded">
          <InfoIcon size="small" />
        </IconButton>
        <IconButton size="large" shape="square">
          <InfoIcon size="small" />
        </IconButton>
      </div>;
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IconButton size="large" variant="standard">
        <InfoIcon />
      </IconButton>;
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IconButton size="large" variant="ghost">
        <InfoIcon />
      </IconButton>;
  }
}`,...c.parameters?.docs?.source}}};const j=["Default","WithTooltip","Sizes","Shapes","StandardVariant","GhostVariant"];export{t as Default,c as GhostVariant,o as Shapes,n as Sizes,i as StandardVariant,a as WithTooltip,j as __namedExportsOrder,h as default};
