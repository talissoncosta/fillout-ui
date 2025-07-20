import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as n}from"./button-pM4moYP0.js";import{b as m}from"./drag-handler-icon-Bf5aGXdl.js";import{a as d,b as v}from"./index-Q3B3-Be7.js";import{s as f}from"./index-C6D4KHQS.js";import{r as c}from"./iframe-C1KHkSHS.js";const C={title:"Components/Button",component:n,argTypes:{isActive:{control:"boolean",defaultValue:!1},onClick:{action:"clicked"}}},x=f("span")({name:"ContentWrapper",class:"c1ksa71p",propsAsIs:!1}),s={args:{children:"Text example"}},t={args:{children:"Text example",variant:"active"}},r={render:i=>{const[a,l]=c.useState(!1),[p,o]=c.useState(!1);return e.jsx(n,{...i,onKeyUp:()=>o(!0),onBlur:()=>o(!1),onClick:()=>l(u=>!u),variant:a?"active":"standard",children:e.jsx("span",{className:"flex",children:e.jsxs(x,{children:[e.jsx(m,{color:a||p?d:v}),"Other"]})})})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Text example'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Text example',
    variant: 'active'
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof Button>) => {
    const [isActive, setIsActive] = useState(false);
    const [isFocusVisible, setIsFocusVisible] = useState(false);
    return <Button {...args} onKeyUp={() => setIsFocusVisible(true)} onBlur={() => setIsFocusVisible(false)} onClick={() => setIsActive(prev => !prev)} variant={isActive ? 'active' : 'standard'}>
        <span className="flex">
          <ContentWrapper>
            <FileTextIcon color={isActive || isFocusVisible ? colorIconActive : colorIconStandard} />
            Other
          </ContentWrapper>
        </span>
      </Button>;
  }
}`,...r.parameters?.docs?.source}}};const F=["Default","Active","ToggleActiveState"];export{t as Active,s as Default,r as ToggleActiveState,F as __namedExportsOrder,C as default};
