import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-cnOLenWC.js";import{M as r,b as i,A as l}from"./blocks-ChVWNz7o.js";import c,{Default as h,BottomSide as d,WithCustomContent as a}from"./Tooltip.stories-KJOVi1c0.js";import{T as p}from"./icon-button-CLj4qtN-.js";import"./iframe-C1KHkSHS.js";import"./index-C93_kJ5d.js";import"./index-Bx369HKm.js";import"./drag-handler-icon-Bf5aGXdl.js";import"./button-pM4moYP0.js";import"./index-BwKmgDoq.js";import"./index-C6D4KHQS.js";function t(e){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:c}),`
`,n.jsx(o.h1,{id:"tooltip",children:"Tooltip"}),`
`,n.jsxs(o.p,{children:["The ",n.jsx(o.code,{children:"Tooltip"})," component provides contextual information on hover or focus."]}),`
`,n.jsxs(o.blockquote,{children:[`
`,n.jsxs(o.p,{children:["This component is built on top of ",n.jsx(o.a,{href:"https://www.radix-ui.com/primitives/docs/components/tooltip",rel:"nofollow",children:n.jsx(o.code,{children:"@radix-ui/tooltip"})}),", a low-level, accessible primitive from the ",n.jsx(o.a,{href:"https://www.radix-ui.com",rel:"nofollow",children:"Radix UI"})," library."]}),`
`]}),`
`,n.jsx(o.hr,{}),`
`,n.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,n.jsxs(o.p,{children:["Wrap any interactive element with ",n.jsx(o.code,{children:"Tooltip"})," to show a small, non-interactive message."]}),`
`,n.jsx(i,{of:h}),`
`,n.jsx(o.hr,{}),`
`,n.jsx(o.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(o.h3,{id:"placement-options",children:"Placement Options"}),`
`,n.jsxs(o.p,{children:["You can control the tooltip’s position using Radix’s ",n.jsx(o.code,{children:"side"})," prop internally:"]}),`
`,n.jsx(i,{of:d}),`
`,n.jsx(o.hr,{}),`
`,n.jsx(o.h3,{id:"custom-content",children:"Custom Content"}),`
`,n.jsx(o.p,{children:"You can render any JSX as tooltip content:"}),`
`,n.jsx(i,{of:a}),`
`,n.jsx(o.hr,{}),`
`,n.jsx(o.h2,{id:"props",children:"Props"}),`
`,n.jsxs(o.p,{children:["Although this wrapper component has a minimal API, it encapsulates ",n.jsx(o.code,{children:"Tooltip.Trigger"}),", ",n.jsx(o.code,{children:"Tooltip.Content"}),", and ",n.jsx(o.code,{children:"Tooltip.Portal"})," from Radix."]}),`
`,n.jsx(l,{of:p}),`
`,n.jsx(o.hr,{}),`
`,n.jsx(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsx(o.li,{children:"Built-in support for keyboard navigation and screen readers."}),`
`,n.jsxs(o.li,{children:["It uses ",n.jsx(o.code,{children:"aria-describedby"})," to link tooltip content to the trigger element."]}),`
`,n.jsx(o.li,{children:"Triggered on both hover and focus (including keyboard focus)."}),`
`]}),`
`,n.jsx(o.hr,{}),`
`,n.jsx(o.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsx(o.li,{children:"Use for brief helper messages"}),`
`,n.jsx(o.li,{children:"Don’t use for critical information or interactions"}),`
`,n.jsx(o.li,{children:"Keep it short and clear"}),`
`]})]})}function k(e={}){const{wrapper:o}={...s(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(t,{...e})}):t(e)}export{k as default};
