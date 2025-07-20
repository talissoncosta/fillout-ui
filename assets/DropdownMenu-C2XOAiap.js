import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-cnOLenWC.js";import{M as s,b as r,A as l}from"./blocks-ChVWNz7o.js";import{D as d}from"./dropdown-menu-separator-DAtJh0_Q.js";import"./button-pM4moYP0.js";import"./drag-handler-icon-Bf5aGXdl.js";import c,{Default as a,CustomReference as p}from"./DropdownMenu.stories-DfuUhgKi.js";import"./iframe-C1KHkSHS.js";import"./index-C93_kJ5d.js";import"./index-Bx369HKm.js";import"./index-BwKmgDoq.js";import"./index-C6D4KHQS.js";import"./index-Q3B3-Be7.js";function t(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
`,e.jsx(n.h1,{id:"dropdownmenu",children:"DropdownMenu"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"DropdownMenu"})," component is a composable, accessible dropdown built using ",e.jsx(n.a,{href:"https://floating-ui.com/",rel:"nofollow",children:"Floating UI"})," primitives. It provides flexible placement, keyboard interactions, and full control over styling and structure."]}),`
`,e.jsx(n.p,{children:"Use it to render contextual action menus triggered by buttons, icons, or any interactive element."}),`
`,e.jsx(n.h2,{id:"composition",children:"Composition"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"DropdownMenu"})," is built from several composable parts:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"DropdownMenu"})}),": Provides context and handles positioning logic."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"DropdownMenuTrigger"})}),": Wraps the trigger element (e.g. a ",e.jsx(n.code,{children:"Button"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"DropdownMenuContent"})}),": Renders the floating panel containing the menu."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"DropdownMenuItem"})}),": Clickable actions or selectable options."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"DropdownMenuSeparator"})}),": Optional visual divider between sections."]}),`
`]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(n.h2,{id:"custom-reference-element",children:"Custom Reference Element"}),`
`,e.jsx(n.p,{children:"The DropdownMenu supports advanced positioning through the triggerRef prop. This enables decoupling the visual trigger from the element used for positioning."}),`
`,e.jsx(n.p,{children:"This is useful when:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"You want to use a floating icon, avatar, or custom area as the anchor"}),`
`,e.jsx(n.li,{children:"You want to show the dropdown relative to one element but trigger it from another"}),`
`]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const triggerRef = useRef(null);

return (
  <DropdownMenu
    isOpen={open}
    onOpenChange={setOpen}
    triggerRef={triggerRef}
    placement="bottom-end"
  >
    <MenuTrigger triggerRef={triggerRef} /> {/* Trigger can be elsewhere */}
    <DropdownMenuContent>
      <DropdownMenuItem onSelect={() => alert('Edit')}>Edit</DropdownMenuItem>
      <DropdownMenuItem onSelect={() => alert('Delete')}>Delete</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem onSelect={() => alert('Report')}>Report</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:"The DropdownMenu follows best practices for keyboard and screen reader support:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Keyboard navigation: ",e.jsx(n.code,{children:"ArrowDown"}),", ",e.jsx(n.code,{children:"ArrowUp"}),", ",e.jsx(n.code,{children:"Enter"}),", ",e.jsx(n.code,{children:"Escape"})]}),`
`,e.jsx(n.li,{children:"aria-haspopup, aria-expanded, and aria-controls attributes on trigger"}),`
`,e.jsx(n.li,{children:"Roles: menu, menuitem"}),`
`,e.jsx(n.li,{children:"Focus is correctly managed when the menu opens/closes"}),`
`,e.jsx(n.li,{children:"Screen reader-friendly structure"}),`
`]}),`
`,e.jsx(n.h2,{id:"behavior--features",children:"Behavior & Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Customizable placement (bottom-start, top-end, etc.)"}),`
`,e.jsx(n.li,{children:"Auto flips and shifts to fit viewport"}),`
`,e.jsx(n.li,{children:"Modal or non-modal focus management"}),`
`,e.jsx(n.li,{children:"Controlled or uncontrolled open state"}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(l,{of:d})]})}function R(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{R as default};
