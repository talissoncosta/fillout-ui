import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as d,b as m,c as t,D as u,d as D,u as M}from"./dropdown-menu-separator-BbZOCf5S.js";import{B as I}from"./button-CrHCw52q.js";import{s as l}from"./index-CmGAO2Ew.js";import{c as g,b as a,d as T,e as C}from"./index-Xhpd0uI0.js";import{b as f,V as h,F as v,c as R,a as y,S as O,T as B}from"./drag-handler-icon-Bf5aGXdl.js";import{r as p}from"./iframe-D6x9mQiR.js";import"./index-DYGYG7P0.js";import"./index-BI97jRDt.js";import"./index-BTRsfViy.js";const G={title:"Components/DropdownMenu",component:u,subcomponents:[d,m,t],parameters:{layout:"centered"},argTypes:{onClick:{action:"clicked"},placement:{control:"radio",options:["top","top-start","top-end","bottom","bottom-start","bottom-end"]}},args:{placement:"bottom-start"}},b=l("div")({name:"TitleContainer",class:"t1idtf27",propsAsIs:!1}),z=l("span")({name:"TitleText",class:"t1pb9pe4",propsAsIs:!1}),w=l("span")({name:"InnerText",class:"i163v67c",propsAsIs:!1}),S=l("span")({name:"ButtonWrapper",class:"bq8m3qu",propsAsIs:!1}),j=l("div")({name:"Container",class:"c1atb5dv",propsAsIs:!1}),c={play:async({canvas:n,userEvent:o})=>{await o.click(await n.findByText("Text example"))},render:({placement:n,...o})=>{const[s,r]=p.useState(!1);return e.jsxs(u,{isOpen:s,onOpenChange:r,placement:n,children:[e.jsx(m,{asChild:!0,children:e.jsx(I,{variant:"active",children:e.jsxs(S,{children:[e.jsxs(w,{children:[e.jsx(f,{color:g})," Text example"]}),e.jsx(h,{size:"small",color:a})]})})}),e.jsxs(d,{...o,children:[e.jsx(b,{children:e.jsx(z,{children:"Settings"})}),e.jsxs(j,{children:[e.jsxs(t,{index:1,onSelect:()=>alert("Set as first page"),children:[e.jsx(v,{size:"small",color:T}),e.jsx("span",{children:"Set as first page"})]}),e.jsxs(t,{index:2,onSelect:()=>alert("Rename"),children:[e.jsx(R,{size:"small",color:a}),e.jsx("span",{children:"Rename"})]}),e.jsxs(t,{index:3,onSelect:()=>alert("Copy"),children:[e.jsx(y,{size:"small",color:a}),e.jsx("span",{children:"Copy"})]}),e.jsxs(t,{index:4,onSelect:()=>alert("Duplicate"),children:[e.jsx(O,{size:"small",color:a}),e.jsx("span",{children:"Duplicate"})]}),e.jsx(D,{}),e.jsxs(t,{index:5,onSelect:()=>alert("Delete"),children:[e.jsx(B,{size:"small",color:C}),"Delete"]})]})]})]})}},E=({triggerRef:n})=>{const{refs:o}=M(),s=r=>{r.preventDefault(),r.stopPropagation()};return e.jsx(I,{variant:"active",ref:o.setReference,children:e.jsxs(S,{children:[e.jsxs(w,{children:[e.jsx(f,{color:g})," Text example"]}),e.jsx(m,{role:"menu",children:e.jsx(h,{ref:n,onMouseDown:s,size:"small",color:a})})]})})},i={play:async({canvas:n,userEvent:o})=>{await o.click(await n.findByRole("menu"))},render:({placement:n,...o})=>{const[s,r]=p.useState(!1),x=p.useRef(null);return e.jsxs(u,{isOpen:s,onOpenChange:r,triggerRef:x,placement:n,children:[e.jsx(E,{triggerRef:x}),e.jsx(d,{...o,children:e.jsxs(j,{children:[e.jsx(t,{index:1,onSelect:()=>alert("Edit"),children:"Edit"}),e.jsx(t,{index:2,onSelect:()=>alert("Delete"),children:"Delete"}),e.jsx(D,{}),e.jsx(t,{index:3,onSelect:()=>alert("Report"),children:"Report"})]})})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(await canvas.findByText('Text example'));
  },
  render: ({
    placement,
    ...args
  }) => {
    const [open, setOpen] = useState(false);
    return <DropdownMenu isOpen={open} onOpenChange={setOpen} placement={placement}>
        <DropdownMenuTrigger asChild>
          <Button variant="active">
            <ButtonWrapper>
              <InnerText>
                <FileTextIcon color={colorIconActive} /> Text example
              </InnerText>
              <VerticalDotsIcon size="small" color={colorIconStandardLighter} />
            </ButtonWrapper>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent {...args}>
          <TitleContainer>
            <TitleText>Settings</TitleText>
          </TitleContainer>
          <Container>
            <DropdownMenuItem index={1} onSelect={() => alert('Set as first page')}>
              <FlagIcon size="small" color={colorIconContrast} />
              <span>Set as first page</span>
            </DropdownMenuItem>
            <DropdownMenuItem index={2} onSelect={() => alert('Rename')}>
              <PencilIcon size="small" color={colorIconStandardLighter} />
              <span>Rename</span>
            </DropdownMenuItem>
            <DropdownMenuItem index={3} onSelect={() => alert('Copy')}>
              <ClipboardIcon size="small" color={colorIconStandardLighter} />
              <span>Copy</span>
            </DropdownMenuItem>
            <DropdownMenuItem index={4} onSelect={() => alert('Duplicate')}>
              <SquareBehindSquareIcon size="small" color={colorIconStandardLighter} />
              <span>Duplicate</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem index={5} onSelect={() => alert('Delete')}>
              <TrashIcon size="small" color={colorIconDestructive} />
              Delete
            </DropdownMenuItem>
          </Container>
        </DropdownMenuContent>
      </DropdownMenu>;
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(await canvas.findByRole('menu'));
  },
  render: ({
    placement,
    ...args
  }) => {
    const [open, setOpen] = useState(false);
    const triggerRef = useRef<HTMLSpanElement>(null);
    return <DropdownMenu isOpen={open} onOpenChange={setOpen} triggerRef={triggerRef} placement={placement}>
        <MenuTrigger triggerRef={triggerRef} />
        <DropdownMenuContent {...args}>
          <Container>
            <DropdownMenuItem index={1} onSelect={() => alert('Edit')}>
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem index={2} onSelect={() => alert('Delete')}>
              Delete
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem index={3} onSelect={() => alert('Report')}>
              Report
            </DropdownMenuItem>
          </Container>
        </DropdownMenuContent>
      </DropdownMenu>;
  }
}`,...i.parameters?.docs?.source}}};const J=["Default","CustomReference"];export{i as CustomReference,c as Default,J as __namedExportsOrder,G as default};
