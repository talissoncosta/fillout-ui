import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-BJTERTaT.js";import{M as a,A as o,b as r}from"./blocks-DOQgMVAi.js";import{P as l}from"./generate-id-C2elXaCD.js";import d,{Default as c,WithManyPages as h,WithLongTitles as g,MoreComplex as p,NoPages as x}from"./PageNavigator.stories-Idf3IDNA.js";import"./iframe-D6x9mQiR.js";import"./index-BI97jRDt.js";import"./index-BTRsfViy.js";import"./drag-handler-icon-Bf5aGXdl.js";import"./index-Xhpd0uI0.js";import"./index-CmGAO2Ew.js";import"./button-CrHCw52q.js";import"./dropdown-menu-separator-BbZOCf5S.js";import"./index-DYGYG7P0.js";import"./icon-button-D5IhRBW5.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:d}),`
`,e.jsx(n.h1,{id:"pagenavigator",children:"PageNavigator"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"PageNavigator"}),' component provides an interactive, horizontally scrollable UI for navigating between logical "pages" or steps. It supports keyboard and pointer navigation, dynamic page creation, reordering via drag-and-drop, and accessibility best practices.']}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Keyboard navigation"})," with arrow keys (looping and focusable)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dynamic page insertion"})," via inline ",e.jsx(n.code,{children:"+"})," buttons between pages"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Drag-and-drop reordering"})," using ",e.jsx(n.code,{children:"@dnd-kit/core"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Visual highlight"})," when reordering completes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Accessibility"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Uses ",e.jsx(n.code,{children:'aria-current="page"'})," for the active page"]}),`
`,e.jsx(n.li,{children:"Focus restoration and announcement-friendly labeling"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Handles long titles gracefully"})," with truncation and tooltips"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`interface PageNavigatorProps {
  pages: {
    title: string;
    icon: React.ReactElement;
    id: string;
  }[];
  activePageId: string;
  onSelectPage?: (id: string) => void;
  onAddNewPage?: (index: number) => void;
  onReorder?: (updatedPages: Page[]) => void;
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage-example",children:"Usage Example"}),`
`,e.jsx(n.p,{children:"Use PageNavigator to help users switch between steps or views in your app. Each page requires a unique id, an icon, and a title."}),`
`,e.jsx(n.p,{children:"You can:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Dynamically add new pages at the end or between pages"}),`
`,e.jsx(n.li,{children:"Reorder pages with drag-and-drop"}),`
`,e.jsx(n.li,{children:"Provide tooltips or accessible names for better UX"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"stories",children:"Stories"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"with-many-pages",children:"With Many Pages"}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"with-long-titles",children:"With Long Titles"}),`
`,e.jsx(r,{of:g}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"more-complex-with-dynamic-id-generation",children:"More Complex (with dynamic ID generation)"}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"no-pages",children:"No Pages"}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use concise page titles to avoid overflow."}),`
`,e.jsx(n.li,{children:"Combine icons + text for better recognition."}),`
`,e.jsx(n.li,{children:"Use the onReorder callback to persist page order after drag-and-drop."}),`
`,e.jsx(n.li,{children:"Use onAddNewPage with the index to control where new pages are inserted."}),`
`,e.jsx(n.li,{children:"Enhance accessibility with aria-label, tooltips, and visible focus styles."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tip",children:"Tip"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Press and hold a page to show the drag handle and initiate reordering."}),`
`,e.jsx(n.li,{children:"Try dragging pages to see how others adjust and animate space."}),`
`,e.jsx(n.li,{children:"Inline + buttons make inserting new pages intuitive and precise."}),`
`]})]})}function T(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{T as default};
