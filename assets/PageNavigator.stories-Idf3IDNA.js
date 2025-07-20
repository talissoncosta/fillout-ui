import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as h,g as r}from"./generate-id-C2elXaCD.js";import{I as a,b as i,C as o}from"./drag-handler-icon-Bf5aGXdl.js";import{r as j}from"./iframe-D6x9mQiR.js";import{s as T}from"./index-CmGAO2Ew.js";import"./index-Xhpd0uI0.js";import"./button-CrHCw52q.js";import"./dropdown-menu-separator-BbZOCf5S.js";import"./index-DYGYG7P0.js";import"./index-BI97jRDt.js";import"./index-BTRsfViy.js";import"./icon-button-D5IhRBW5.js";const b={title:"Components/PageNavigator",component:h,decorators:[n=>e.jsx("div",{style:{height:"200px"},children:e.jsx(n,{})})],parameters:{layout:"fullscreen"}},s=({pages:n,activePageId:v})=>{const[f,P]=j.useState(v),[I,m]=j.useState(n),u=t=>{console.log({id:t}),P(t)},N=t=>{const C={id:r(),title:"New page",icon:e.jsx(i,{})},E=I.slice(0,t+1),F=I.slice(t+1);m([...E,C,...F])};return e.jsx(h,{pages:I,activePageId:f,onSelectPage:u,onAddNewPage:N,onReorder:t=>m(t)})},l={render:n=>e.jsx(c,{children:e.jsx(s,{...n})}),args:{pages:[{id:"1",title:"Info",icon:e.jsx(a,{})},{id:"2",title:"Details",icon:e.jsx(i,{})},{id:"3",title:"Other",icon:e.jsx(i,{})},{id:"4",title:"Ending",icon:e.jsx(o,{})}],activePageId:"1",onSelectPage:()=>{},onAddNewPage:()=>{}}},c=T("div")({name:"NavWrapper",class:"n1hqdoat",propsAsIs:!1}),d={render:n=>e.jsx(c,{children:e.jsx(s,{...n})}),args:{pages:[{id:"1",title:"Info",icon:e.jsx(a,{})},{id:"2",title:"Details",icon:e.jsx(i,{})},{id:"3",title:"Other",icon:e.jsx(i,{})},{id:"4",title:"Ending",icon:e.jsx(o,{})},{id:"5",title:"Info",icon:e.jsx(a,{})},{id:"6",title:"Details",icon:e.jsx(i,{})},{id:"7",title:"Other",icon:e.jsx(i,{})},{id:"8",title:"Ending",icon:e.jsx(o,{})},{id:"9",title:"Info",icon:e.jsx(a,{})},{id:"10",title:"Details",icon:e.jsx(i,{})},{id:"11",title:"Other",icon:e.jsx(i,{})},{id:"12",title:"Ending",icon:e.jsx(o,{})}],activePageId:"1"}},g={render:n=>e.jsx(c,{children:e.jsx(s,{...n})}),args:{pages:[{id:"1",title:"User Information Overview That Might Be Very Long",icon:e.jsx(a,{})},{id:"2",title:"Detailed Financial Breakdown and Analysis Report",icon:e.jsx(i,{})},{id:"3",title:"Final Review & Completion Step for Submission",icon:e.jsx(o,{})}],activePageId:"1"}},p={render:n=>e.jsx(c,{children:e.jsx(s,{...n})}),args:{pages:[{id:r(),title:"Info",icon:e.jsx(a,{})},{id:r(),title:"Details",icon:e.jsx(i,{})},{id:r(),title:"Other",icon:e.jsx(i,{})},{id:r(),title:"Ending",icon:e.jsx(o,{})}]}},x={render:n=>e.jsx(c,{children:e.jsx(s,{...n})}),args:{pages:[]}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <NavWrapper>
      <PageNavigatorExample {...args} />
    </NavWrapper>,
  args: {
    pages: [{
      id: '1',
      title: 'Info',
      icon: <InfoIcon />
    }, {
      id: '2',
      title: 'Details',
      icon: <FileTextIcon />
    }, {
      id: '3',
      title: 'Other',
      icon: <FileTextIcon />
    }, {
      id: '4',
      title: 'Ending',
      icon: <CircleCheckIcon />
    }],
    activePageId: '1',
    onSelectPage: () => {},
    onAddNewPage: () => {}
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <NavWrapper>
      <PageNavigatorExample {...args} />
    </NavWrapper>,
  args: {
    pages: [{
      id: '1',
      title: 'Info',
      icon: <InfoIcon />
    }, {
      id: '2',
      title: 'Details',
      icon: <FileTextIcon />
    }, {
      id: '3',
      title: 'Other',
      icon: <FileTextIcon />
    }, {
      id: '4',
      title: 'Ending',
      icon: <CircleCheckIcon />
    }, {
      id: '5',
      title: 'Info',
      icon: <InfoIcon />
    }, {
      id: '6',
      title: 'Details',
      icon: <FileTextIcon />
    }, {
      id: '7',
      title: 'Other',
      icon: <FileTextIcon />
    }, {
      id: '8',
      title: 'Ending',
      icon: <CircleCheckIcon />
    }, {
      id: '9',
      title: 'Info',
      icon: <InfoIcon />
    }, {
      id: '10',
      title: 'Details',
      icon: <FileTextIcon />
    }, {
      id: '11',
      title: 'Other',
      icon: <FileTextIcon />
    }, {
      id: '12',
      title: 'Ending',
      icon: <CircleCheckIcon />
    }],
    activePageId: '1'
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <NavWrapper>
      <PageNavigatorExample {...args} />
    </NavWrapper>,
  args: {
    pages: [{
      id: '1',
      title: 'User Information Overview That Might Be Very Long',
      icon: <InfoIcon />
    }, {
      id: '2',
      title: 'Detailed Financial Breakdown and Analysis Report',
      icon: <FileTextIcon />
    }, {
      id: '3',
      title: 'Final Review & Completion Step for Submission',
      icon: <CircleCheckIcon />
    }],
    activePageId: '1'
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <NavWrapper>
      <PageNavigatorExample {...args} />
    </NavWrapper>,
  args: {
    pages: [{
      id: generateId(),
      title: 'Info',
      icon: <InfoIcon />
    }, {
      id: generateId(),
      title: 'Details',
      icon: <FileTextIcon />
    }, {
      id: generateId(),
      title: 'Other',
      icon: <FileTextIcon />
    }, {
      id: generateId(),
      title: 'Ending',
      icon: <CircleCheckIcon />
    }]
  }
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <NavWrapper>
      <PageNavigatorExample {...args} />
    </NavWrapper>,
  args: {
    pages: []
  }
}`,...x.parameters?.docs?.source}}};const _=["Default","WithManyPages","WithLongTitles","MoreComplex","NoPages"];export{l as Default,p as MoreComplex,x as NoPages,g as WithLongTitles,d as WithManyPages,_ as __namedExportsOrder,b as default};
