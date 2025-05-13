import { Tag } from "sud-ui";

export const classNameExamples = [
  {
    title: "Display",
    descriptionText: "hidden block flex grid inline inline-block",
    description: (
      <>
        <Tag>hidden</Tag> <Tag>block</Tag> <Tag>flex</Tag> <Tag>grid</Tag>
        <Tag>inline</Tag> <Tag>inline-block</Tag>
      </>
    ),
    sample: `/* CSS */
.block {
  display: block;
}

/* Usage */
<div className="block">block div</div>`
  },
  {
    title: "Position",
    descriptionText: "relative absolute fixed static sticky",
    description: (
      <>
        <Tag>relative</Tag> <Tag>absolute</Tag> <Tag>fixed</Tag>{" "}
        <Tag>static</Tag>
        <Tag>sticky</Tag>
      </>
    ),
    sample: `/* CSS */
.relative {
  position: relative;
}

/* Usage */
<div className="relative">relative div</div>`
  },
  {
    title: "Overflow",
    descriptionText:
      "overflow-auto overflow-hidden overflow-scroll overflow-x-auto overflow-y-auto overflow-x-hidden overflow-y-hidden overflow-x-scroll overflow-y-scroll",
    description: (
      <>
        <Tag>overflow-auto</Tag> <Tag>overflow-hidden</Tag>{" "}
        <Tag>overflow-scroll</Tag> <Tag>overflow-x-auto</Tag>{" "}
        <Tag>overflow-y-auto</Tag>
        <Tag>overflow-x-hidden</Tag> <Tag>overflow-y-hidden</Tag>
        <Tag>overflow-x-scroll</Tag> <Tag>overflow-y-scroll</Tag>
      </>
    ),
    sample: `/* CSS */
.overflow-auto {
  overflow: auto;
}
.overflow-hidden {
  overflow: hidden;
}
.overflow-scroll {
  overflow: scroll;
}
.overflow-x-auto {
  overflow-x: auto;
}
.overflow-y-auto {
  overflow-y: auto;
}
.overflow-x-hidden {
  overflow-x: hidden;
}
.overflow-y-hidden {
  overflow-y: hidden;
}
.overflow-x-scroll {
  overflow-x: scroll;
}
.overflow-y-scroll {
  overflow-y: scroll;
}

/* Usage */
<div className="overflow-auto">overflow example</div>`
  },
  {
    title: "Scroll Behavior",
    descriptionText: "scroll-smooth scroll-auto",
    description: (
      <>
        <Tag>scroll-smooth</Tag> <Tag>scroll-auto</Tag>
      </>
    ),
    sample: `/* CSS */
.scroll-smooth {
  scroll-behavior: smooth;
}
.scroll-auto {
  scroll-behavior: auto;
}

/* Usage */
<div className="scroll-smooth">scroll behavior example</div>`
  },
  {
    title: "Width",
    descriptionText:
      "w-px-{0-1000} min-w-px-{0-1000} max-w-px-{0-1000} w-{0-100} min-w-{0-100} max-w-{0-100} w-auto",
    description: (
      <>
        <Tag>w-px-{`{0-1000}`}</Tag> <Tag>min-w-px-{`{0-1000}`}</Tag>{" "}
        <Tag>max-w-px-{`{0-1000}`}</Tag> <Tag>w-{`{0-100}`}</Tag>{" "}
        <Tag>min-w-{`{0-100}`}</Tag> <Tag>max-w-{`{0-100}`}</Tag>{" "}
        <Tag>w-auto</Tag>
      </>
    ),
    sample: `/* CSS */
.w-px-0 {
  width: 0px;
}
.min-w-px-0 {
  min-width: 0px;
}
.max-w-px-0 {
  max-width: 0px;
}
.w-0 {
  width: 0%;
}
.min-w-0 {
  min-width: 0%;
}
.max-w-0 {
  max-width: 0%;
}
.w-auto {
  width: auto;
}

/* Usage */
<div className="w-px-100 w-50">width example</div>`
  },
  {
    title: "Height",
    descriptionText:
      "h-px-{0-1000} min-h-px-{0-1000} max-h-px-{0-1000} h-{0-100} min-h-{0-100} max-h-{0-100} h-auto",
    description: (
      <>
        <Tag>h-px-{`{0-1000}`}</Tag> <Tag>min-h-px-{`{0-1000}`}</Tag>{" "}
        <Tag>max-h-px-{`{0-1000}`}</Tag> <Tag>h-{`{0-100}`}</Tag>{" "}
        <Tag>min-h-{`{0-100}`}</Tag> <Tag>max-h-{`{0-100}`}</Tag>{" "}
        <Tag>h-auto</Tag>
      </>
    ),
    sample: `/* CSS */
.h-px-0 {
  height: 0px;
}
.min-h-px-0 {
  min-height: 0px;
}
.max-h-px-0 {
  max-height: 0px;
}
.h-0 {
  height: 0%;
}
.min-h-0 {
  min-height: 0%;
}
.max-h-0 {
  max-height: 0%;
}
.h-auto {
  height: auto;
}

/* Usage */
<div className="h-px-100 h-50">height example</div>`
  },
  {
    title: "Margin",
    descriptionText:
      "mg-{0-1000} mg-t-{0-1000} mg-r-{0-1000} mg-b-{0-1000} mg-l-{0-1000} mg-x-{0-1000} mg-y-{0-1000}",
    description: (
      <>
        <Tag>mg-{`{0-1000}`}</Tag> <Tag>mg-t-{`{0-1000}`}</Tag>{" "}
        <Tag>mg-r-{`{0-1000}`}</Tag> <Tag>mg-b-{`{0-1000}`}</Tag>{" "}
        <Tag>mg-x-{`{0-1000}`}</Tag> <Tag>mg-y-{`{0-1000}`}</Tag>
      </>
    ),
    sample: `/* CSS */
.mg-0 {
  margin: 0px;
}
.mg-t-0 {
  margin-top: 0px;
}
.mg-r-0 {
  margin-right: 0px;
}
.mg-b-0 {
  margin-bottom: 0px;
}
.mg-l-0 {
  margin-left: 0px;
}
.mg-x-0 {
  margin-left: 0px;
  margin-right: 0px;
}
.mg-y-0 {
  margin-top: 0px;
  margin-bottom: 0px;
}

/* Usage */
<div className="mg-10 mg-t-20">margin example</div>`
  },
  {
    title: "Padding",
    descriptionText:
      "pd-{0-1000} pd-t-{0-1000} pd-r-{0-1000} pd-b-{0-1000} pd-l-{0-1000} pd-x-{0-1000} pd-y-{0-1000}",
    description: (
      <>
        <Tag>pd-{`{0-1000}`}</Tag> <Tag>pd-t-{`{0-1000}`}</Tag>{" "}
        <Tag>pd-r-{`{0-1000}`}</Tag> <Tag>pd-b-{`{0-1000}`}</Tag>{" "}
        <Tag>pd-l-{`{0-1000}`}</Tag> <Tag>pd-x-{`{0-1000}`}</Tag>{" "}
        <Tag>pd-y-{`{0-1000}`}</Tag>
      </>
    ),
    sample: `/* CSS */
.pd-0 {
  padding: 0px;
}
.pd-t-0 {
  padding-top: 0px;
}
.pd-r-0 {
  padding-right: 0px;
}
.pd-b-0 {
  padding-bottom: 0px;
}
.pd-l-0 {
  padding-left: 0px;
}
.pd-x-0 {
  padding-left: 0px;
  padding-right: 0px;
}
.pd-y-0 {
  padding-top: 0px;
  padding-bottom: 0px;
}

/* Usage */
<div className="pd-10 pd-t-20">padding example</div>`
  },
  {
    title: "Top Bottom Left Right",
    descriptionText:
      "t-px-{0-1000} t-{0-100} b-px-{0-1000} b-{0-100} l-px-{0-1000} l-{0-100} r-px-{0-1000} r-{0-100}",
    description: (
      <>
        <Tag>t-px-{`{0-1000}`}</Tag> <Tag>t-{`{0-100}`}</Tag>{" "}
        <Tag>b-px-{`{0-1000}`}</Tag> <Tag>b-{`{0-100}`}</Tag>{" "}
        <Tag>l-px-{`{0-1000}`}</Tag> <Tag>l-{`{0-100}`}</Tag>{" "}
        <Tag>r-px-{`{0-1000}`}</Tag> <Tag>r-{`{0-100}`}</Tag>
      </>
    ),
    sample: `/* CSS */
.t-px-0 {
  top: 0px;
}
.t-0 {
  top: 0%;
}
.b-px-0 {
  bottom: 0px;
}
.b-0 {
  bottom: 0%;
}
.l-px-0 {
  left: 0px;
}
.l-0 {
  left: 0%;
}
.r-px-0 {
  right: 0px;
}
.r-0 {
  right: 0%;
}

/* Usage */
<div className="t-px-10 b-px-20 l-px-30 r-px-40">top bottom left right example</div>`
  },
  {
    title: "Flexbox",
    descriptionText:
      "flex-row flex-col flex-wra flex-now item-cen item-sta item-end jus-cen jus-bet jus-aro jus-sta jus-end",
    description: (
      <>
        <Tag>flex-row</Tag> <Tag>flex-col</Tag> <Tag>flex-wra</Tag>{" "}
        <Tag>flex-now</Tag> <Tag>item-cen</Tag> <Tag>item-sta</Tag>{" "}
        <Tag>item-end</Tag> <Tag>jus-cen</Tag> <Tag>jus-bet</Tag>{" "}
        <Tag>jus-aro</Tag> <Tag>jus-sta</Tag> <Tag>jus-end</Tag>
      </>
    ),
    sample: `/* CSS */
.flex-row {
  flex-direction: row;
}
.flex-col {
  flex-direction: column;
}
.flex-wra {
  flex-wrap: wrap;
}
.flex-now {
  flex-wrap: nowrap;
}
.item-cen {
  align-items: center;
}
.item-sta {
  align-items: flex-start;
}
.item-end {
  align-items: flex-end;
}
.jus-cen {
  justify-content: center;
}
.jus-bet {
  justify-content: space-between;
}
.jus-aro {
  justify-content: space-around;
}
.jus-sta {
  justify-content: flex-start;
}
.jus-end {
  justify-content: flex-end;
}

/* Usage */
<div className="flex-row item-cen jus-bet">flexbox example</div>`
  },
  {
    title: "Grid Columns",
    descriptionText: "col-{1-100}",
    description: (
      <>
        <Tag>col-{`{1-100}`}</Tag>
      </>
    ),
    sample: `/* CSS */
.col-1 {
  grid-template-columns: repeat(1, 1fr);
}
.col-2 {
  grid-template-columns: repeat(2, 1fr);
}
.col-3 {
  grid-template-columns: repeat(3, 1fr);
}

/* Usage */
<div className="col-3">3 columns grid</div>`
  },
  {
    title: "Gap",
    descriptionText: "gap-{0-1000}",
    description: (
      <>
        <Tag>gap-{`{0-1000}`}</Tag>
      </>
    ),
    sample: `/* CSS */
.gap-0 {
  gap: 0px;
}
.gap-10 {
  gap: 10px;
}
.gap-20 {
  gap: 20px;
}

/* Usage */
<div className="gap-10">gap example</div>`
  },
  {
    title: "Border Width",
    descriptionText: "bor-w-{0-100}",
    description: (
      <>
        <Tag>bor-w-{`{0-100}`}</Tag>
      </>
    ),
    sample: `/* CSS */
.bor-w-0 {
  border-width: 0px;
}
.bor-w-1 {
  border-width: 1px;
}
.bor-w-2 {
  border-width: 2px;
}
.bor-w-10 {
  border-width: 10px;
}

/* Usage */
<div className="bor-w-2">border width example</div>`
  },
  {
    title: "Border Style",
    descriptionText:
      "bors-solid bors-dashed bors-dotted bors-double bors-groove bors-ridge bors-inset bors-outset bors-none",
    description: (
      <>
        <Tag>bors-solid</Tag> <Tag>bors-dashed</Tag> <Tag>bors-dotted</Tag>
        <Tag>bors-double</Tag> <Tag>bors-groove</Tag> <Tag>bors-ridge</Tag>
        <Tag>bors-inset</Tag> <Tag>bors-outset</Tag> <Tag>bors-none</Tag>
      </>
    ),
    sample: `/* CSS */
.bors-solid {
  border-style: solid;
}
.bors-dashed {
  border-style: dashed;
}
.bors-dotted {
  border-style: dotted;
}
.bors-double {
  border-style: double;
}
.bors-groove {
  border-style: groove;
}
.bors-ridge {
  border-style: ridge;
}
.bors-inset {
  border-style: inset;
}
.bors-outset {
  border-style: outset;
}
.bors-none {
  border-style: none;
}

/* Usage */
<div className="bors-dashed">border style example</div>`
  },
  {
    title: "Border Radius",
    descriptionText: "rad-{0-100} rad-25p rad-50p rad-75p rad-100p",
    description: (
      <>
        <Tag>rad-{`{0-100}`}</Tag> <Tag>rad-25p</Tag> <Tag>rad-50p</Tag>{" "}
        <Tag>rad-75p</Tag> <Tag>rad-100p</Tag>
      </>
    ),
    sample: `/* CSS */
.rad-0 {
  border-radius: 0px;
}
.rad-1 {
  border-radius: 1px;
}
.rad-50 {
  border-radius: 50px;
}
.rad-25p {
  border-radius: 25%;
}
.rad-50p {
  border-radius: 50%;
}
.rad-75p {
  border-radius: 75%;
}
.rad-100p {
  border-radius: 100%;
}

/* Usage */
<div className="rad-10">border radius example (px)</div>
<div className="rad-50p">border radius example (%)</div>`
  },
  {
    title: "Box Shadow",
    descriptionText: "shadow-sm shadow-md shadow-lg",
    description: (
      <>
        <Tag>shadow-sm</Tag> <Tag>shadow-md</Tag> <Tag>shadow-lg</Tag>
      </>
    ),
    sample: `/* CSS */
.shadow-sm {
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
}
.shadow-md {
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
}
.shadow-lg {
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.3);
}

/* Usage */
<div className="shadow-md">box shadow example</div>`
  },
  {
    title: "Font Size",
    descriptionText: "fs-{0-1000}",
    description: (
      <>
        <Tag>fs-{`{0-1000}`}</Tag>
      </>
    ),
    sample: `/* CSS */
.fs-0 {
  font-size: 0px;
}
.fs-1 {
  font-size: 1px;
}
.fs-2 {
  font-size: 2px;
}
.fs-3 {
  font-size: 3px;
}
.fs-50 {
  font-size: 50px;
}

/* Usage */
<div className="fs-16">font size example</div>`
  },
  {
    title: "Font Weight",
    descriptionText: "fw-{0,100,200,300,400,500,600,700,800,900,1000}",
    description: (
      <>
        <Tag>fw-{`{0,100,200,300,400,500,600,700,800,900,1000}`}</Tag>
      </>
    ),
    sample: `/* CSS */
.fw-0 {
  font-weight: 0;
}
.fw-100 {
  font-weight: 100;
}
.fw-200 {
  font-weight: 200;
}
.fw-300 {
  font-weight: 300;
}
.fw-400 {
  font-weight: 400;
}
.fw-500 {
  font-weight: 500;
}
.fw-600 {
  font-weight: 600;
}
.fw-700 {
  font-weight: 700;
}
.fw-800 {
  font-weight: 800;
}
.fw-900 {
  font-weight: 900;
}
.fw-1000 {
  font-weight: 1000;
}

/* Usage */
<div className="fw-500">font weight example</div>`
  },
  {
    title: "Line Height",
    descriptionText:
      "lh-1 lh-1-1 lh-1-2 lh-1-3 lh-1-4 lh-1-5 lh-1-6 lh-1-7 lh-1-8 lh-1-9 lh-2",
    description: (
      <>
        <Tag>lh-1</Tag> <Tag>lh-1-1</Tag> <Tag>lh-1-2</Tag> <Tag>lh-1-3</Tag>
        <Tag>lh-1-4</Tag> <Tag>lh-1-5</Tag> <Tag>lh-1-6</Tag> <Tag>lh-1-7</Tag>
        <Tag>lh-1-8</Tag> <Tag>lh-1-9</Tag> <Tag>lh-2</Tag>
      </>
    ),
    sample: `/* CSS */
.lh-1 {
  line-height: 1;
}
.lh-1-1 {
  line-height: 1.1;
}
.lh-1-2 {
  line-height: 1.2;
}
.lh-1-3 {
  line-height: 1.3;
}
.lh-1-4 {
  line-height: 1.4;
}
.lh-1-5 {
  line-height: 1.5;
}
.lh-1-6 {
  line-height: 1.6;
}
.lh-1-7 {
  line-height: 1.7;
}
.lh-1-8 {
  line-height: 1.8;
}
.lh-1-9 {
  line-height: 1.9;
}
.lh-2 {
  line-height: 2;
}

/* Usage */
<div className="lh-1-5">line height example</div>`
  },
  {
    title: "Text Align",
    descriptionText: "ta-lef ta-cen ta-rig",
    description: (
      <>
        <Tag>ta-lef</Tag> <Tag>ta-cen</Tag> <Tag>ta-rig</Tag>
      </>
    ),
    sample: `/* CSS */
.ta-lef {
  text-align: left;
}
.ta-cen {
  text-align: center;
}
.ta-rig {
  text-align: right;
}

/* Usage */
<div className="ta-cen">text align example</div>`
  },
  {
    title: "Opacity",
    descriptionText: "opa-{0-100}",
    description: (
      <>
        <Tag>opa-{`{0-100}`}</Tag>
      </>
    ),
    sample: `/* CSS */
.opa-0 {
  opacity: 0;
}
.opa-1 {
  opacity: 0.01;
}
.opa-2 {
  opacity: 0.02;
}
.opa-50 {
  opacity: 0.5;
}
.opa-100 {
  opacity: 1;
}

/* Usage */
<div className="opa-50">opacity example</div>`
  },
  {
    title: "Z-Index",
    descriptionText: "z-{0-1500}",
    description: (
      <>
        <Tag>z-{`{0-1500}`}</Tag>
      </>
    ),
    sample: `/* CSS */
.z-0 {
  z-index: 0;
}
.z-10 {
  z-index: 10;
}

/* Usage */
<div className="z-10">z-index example</div>`
  },
  {
    title: "Blur",
    descriptionText: "blur-{0-1000}",
    description: (
      <>
        <Tag>blur-{`{0-1000}`}</Tag>
      </>
    ),
    sample: `/* CSS */
.blur-0 {
  backdrop-filter: blur(0px);
}
.blur-10 {
  backdrop-filter: blur(10px);
}

/* Usage */
<div className="blur-10">blur example</div>`
  },
  {
    title: "Cursor",
    descriptionText:
      "cursor-pointer cursor-default cursor-text cursor-move cursor-not-allowed cursor-wait cursor-help cursor-auto cursor-crosshair cursor-col-resize cursor-row-resize cursor-ew-resize cursor-ns-resize cursor-nwse-resize cursor-nesw-resize cursor-zoom-in cursor-zoom-out",
    description: (
      <>
        <Tag>cursor-pointer</Tag> <Tag>cursor-default</Tag>{" "}
        <Tag>cursor-text</Tag> <Tag>cursor-move</Tag>{" "}
        <Tag>cursor-not-allowed</Tag> <Tag>cursor-wait</Tag>{" "}
        <Tag>cursor-help</Tag> <Tag>cursor-auto</Tag>{" "}
        <Tag>cursor-crosshair</Tag> <Tag>cursor-col-resize</Tag>{" "}
        <Tag>cursor-row-resize</Tag> <Tag>cursor-ew-resize</Tag>{" "}
        <Tag>cursor-ns-resize</Tag> <Tag>cursor-nwse-resize</Tag>{" "}
        <Tag>cursor-nesw-resize</Tag> <Tag>cursor-zoom-in</Tag>{" "}
        <Tag>cursor-zoom-out</Tag>
      </>
    ),
    sample: `/* CSS */
.cursor-pointer {
  cursor: pointer;
}
.cursor-default {
  cursor: default;
}
.cursor-text {
  cursor: text;
}
.cursor-move {
  cursor: move;
}
.cursor-not-allowed {
  cursor: not-allowed;
}
.cursor-wait {
  cursor: wait;
}
.cursor-help {
  cursor: help;
}
.cursor-auto {
  cursor: auto;
}
.cursor-crosshair {
  cursor: crosshair;
}
.cursor-col-resize {
  cursor: col-resize;
}
.cursor-row-resize {
  cursor: row-resize;
}
.cursor-ew-resize {
  cursor: ew-resize;
}
.cursor-ns-resize {
  cursor: ns-resize;
}
.cursor-nwse-resize {
  cursor: nwse-resize;
}
.cursor-nesw-resize {
  cursor: nesw-resize;
}
.cursor-zoom-in {
  cursor: zoom-in;
}
.cursor-zoom-out {
  cursor: zoom-out;
}

/* Usage */
<div className="cursor-pointer">cursor example</div>`
  },
  {
    title: "Visibility",
    descriptionText: "visibility-visible visibility-hidden visibility-collapse",
    description: (
      <>
        <Tag>visibility-visible</Tag> <Tag>visibility-hidden</Tag>{" "}
        <Tag>visibility-collapse</Tag>
      </>
    ),
    sample: `/* CSS */
.visibility-visible {
  visibility: visible;
}
.visibility-hidden {
  visibility: hidden;
}
.visibility-collapse {
  visibility: collapse;
}

/* Usage */
<div className="visibility-visible">visibility example</div>`
  },
  {
    title: "Vertical Align",
    descriptionText:
      "align-baseline align-top align-middle align-bottom align-text-top align-text-bottom",
    description: (
      <>
        <Tag>align-baseline</Tag> <Tag>align-top</Tag> <Tag>align-middle</Tag>{" "}
        <Tag>align-bottom</Tag> <Tag>align-text-top</Tag>{" "}
        <Tag>align-text-bottom</Tag>
      </>
    ),
    sample: `/* CSS */
.align-baseline {
  vertical-align: baseline;
}
.align-top {
  vertical-align: top;
}
.align-middle {
  vertical-align: middle;
}
.align-bottom {
  vertical-align: bottom;
}
.align-text-top {
  vertical-align: text-top;
}
.align-text-bottom {
  vertical-align: text-bottom;
}

/* Usage */
<div className="align-middle">vertical align example</div>`
  },
  {
    title: "White Space",
    descriptionText:
      "whitespace-normal whitespace-nowrap whitespace-pre whitespace-pre-line whitespace-pre-wrap",
    description: (
      <>
        <Tag>whitespace-normal</Tag> <Tag>whitespace-nowrap</Tag>{" "}
        <Tag>whitespace-pre</Tag> <Tag>whitespace-pre-line</Tag>{" "}
        <Tag>whitespace-pre-wrap</Tag>
      </>
    ),
    sample: `/* CSS */
.whitespace-normal {
  white-space: normal;
}
.whitespace-nowrap {
  white-space: nowrap;
}
.whitespace-pre {
  white-space: pre;
}
.whitespace-pre-line {
  white-space: pre-line;
}
.whitespace-pre-wrap {
  white-space: pre-wrap;
}

/* Usage */
<div className="whitespace-nowrap">white space example</div>`
  },
  {
    title: "Word Break",
    descriptionText:
      "word-break-normal word-break-break-word word-break-keep-all",
    description: (
      <>
        <Tag>word-break-normal</Tag> <Tag>word-break-break-word</Tag>{" "}
        <Tag>word-break-keep-all</Tag>
      </>
    ),
    sample: `/* CSS */
.word-break-normal {
  word-break: normal;
}
.word-break-break-word {
  word-break: break-word;
}
.word-break-keep-all {
  word-break: keep-all;
}

/* Usage */
<div className="word-break-break-word">word break example</div>`
  }
];
