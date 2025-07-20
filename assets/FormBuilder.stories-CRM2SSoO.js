import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as w}from"./iframe-D6x9mQiR.js";import{I as E,b as l,C as v}from"./drag-handler-icon-Bf5aGXdl.js";import{g as i,P as x}from"./generate-id-C2elXaCD.js";import"./index-Xhpd0uI0.js";import"./index-CmGAO2Ew.js";import"./button-CrHCw52q.js";import"./dropdown-menu-separator-BbZOCf5S.js";import"./index-DYGYG7P0.js";import"./index-BI97jRDt.js";import"./index-BTRsfViy.js";import"./icon-button-D5IhRBW5.js";const g=()=>{const s=[{id:i(),title:"Info",icon:t.jsx(E,{})},{id:i(),title:"Details",icon:t.jsx(l,{})},{id:i(),title:"Other",icon:t.jsx(l,{})},{id:i(),title:"Ending",icon:t.jsx(v,{})}],[e,d]=w.useState(s[0]),[a,u]=w.useState(s),p=o=>{d(a.find(m=>m.id===o)??a[0])},h=o=>{const m={id:i(),title:"New page",icon:t.jsx(l,{})},B=a.slice(0,o+1),y=a.slice(o+1);u([...B,m,...y])};return t.jsxs("div",{children:[t.jsx("h1",{className:"text-center",children:e?.title}),t.jsx(x,{pages:a,activePageId:e?.id,onSelectPage:p,onAddNewPage:h,onReorder:o=>u(o)})]})};g.__docgenInfo={description:"",methods:[],displayName:"FormBuilder"};const{expect:r,userEvent:n,waitFor:R,within:b}=__STORYBOOK_MODULE_TEST__,S={title:"Examples/FormBuilder",component:g,parameters:{layout:"fullscreen"}},c={render:()=>t.jsx(g,{}),play:async({canvasElement:s})=>{const e=b(s);await r(e.getByRole("heading",{name:/info/i})).toBeInTheDocument();const d=e.getByRole("button",{name:/details/i});await n.click(d),await R(()=>{r(e.getByRole("heading",{name:/details/i})).toBeInTheDocument()}),await n.keyboard("[ArrowRight]"),await n.keyboard("[ArrowRight]"),await n.keyboard("[Enter]"),await r(e.getByRole("heading",{name:/ending/i})).toBeInTheDocument(),await n.keyboard("[ArrowRight]"),await n.keyboard("[Enter]");const a=e.getByRole("button",{name:"New page"});r(a).toBeInTheDocument(),await n.keyboard("[ArrowRight]"),await n.keyboard("[Enter]"),await r(e.getByRole("heading",{name:/info/i})).toBeInTheDocument()}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <FormBuilder />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('heading', {
      name: /info/i
    })).toBeInTheDocument();
    const detailsButton = canvas.getByRole('button', {
      name: /details/i
    });
    await userEvent.click(detailsButton);
    await waitFor(() => {
      expect(canvas.getByRole('heading', {
        name: /details/i
      })).toBeInTheDocument();
    });
    await userEvent.keyboard('[ArrowRight]');
    await userEvent.keyboard('[ArrowRight]');
    await userEvent.keyboard('[Enter]');
    await expect(canvas.getByRole('heading', {
      name: /ending/i
    })).toBeInTheDocument();
    await userEvent.keyboard('[ArrowRight]');
    await userEvent.keyboard('[Enter]');
    const newPageButton = canvas.getByRole('button', {
      name: 'New page'
    });
    expect(newPageButton).toBeInTheDocument();
    await userEvent.keyboard('[ArrowRight]');
    await userEvent.keyboard('[Enter]');
    await expect(canvas.getByRole('heading', {
      name: /info/i
    })).toBeInTheDocument();
  }
}`,...c.parameters?.docs?.source}}};const C=["FormBuilderExample"];export{c as FormBuilderExample,C as __namedExportsOrder,S as default};
