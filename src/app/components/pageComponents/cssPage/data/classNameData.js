import { Tag } from "sud-ui";

export const classNameExamples = [
  {
    title: "Display",
    descriptionText: "hidden block flex grid inline inline-block",
    description: (
      <>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>hidden</Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>block</Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>flex</Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>grid</Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>inline</Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          inline-block
        </Tag>
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
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>relative</Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>absolute</Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>fixed</Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>static</Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>sticky</Tag>
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
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          overflow-auto
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          overflow-hidden
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          overflow-scroll
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          overflow-x-auto
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          overflow-y-auto
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          overflow-x-hidden
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          overflow-y-hidden
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          overflow-x-scroll
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          overflow-y-scroll
        </Tag>
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
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          scroll-smooth
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          scroll-auto
        </Tag>
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
      "w-px-{0-1000} min-w-px-{0-1000} max-w-px-{0-1000} w-{0-100}",
    description: (
      <>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          w-px-{`{0-1000}`}
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          min-w-px-{`{0-1000}`}
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          max-w-px-{`{0-1000}`}
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          w-{`{0-100}`}
        </Tag>
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

/* Usage */
<div className="w-px-100 w-50">width example</div>`
  },
  {
    title: "Height",
    descriptionText:
      "h-px-{0-1000} min-h-px-{0-1000} max-h-px-{0-1000} h-{0-100}",
    description: (
      <>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          h-px-{`{0-1000}`}
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          min-h-px-{`{0-1000}`}
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          max-h-px-{`{0-1000}`}
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          h-{`{0-100}`}
        </Tag>
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

/* Usage */
<div className="h-px-100 h-50">height example</div>`
  },
  {
    title: "Margin",
    descriptionText:
      "mg-{0-100} mg-t-{0-100} mg-r-{0-100} mg-b-{0-100} mg-l-{0-100}",
    description: (
      <>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          mg-{`{0-100}`}
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          mg-t-{`{0-100}`}
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          mg-r-{`{0-100}`}
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          mg-b-{`{0-100}`}
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          mg-l-{`{0-100}`}
        </Tag>
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

/* Usage */
<div className="mg-10 mg-t-20">margin example</div>`
  },
  {
    title: "Padding",
    descriptionText:
      "pd-{0-100} pd-t-{0-100} pd-r-{0-100} pd-b-{0-100} pd-l-{0-100}",
    description: (
      <>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          pd-{`{0-100}`}
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          pd-t-{`{0-100}`}
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          pd-r-{`{0-100}`}
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          pd-b-{`{0-100}`}
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          pd-l-{`{0-100}`}
        </Tag>
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

/* Usage */
<div className="pd-10 pd-t-20">padding example</div>`
  },
  {
    title: "Flexbox",
    descriptionText:
      "flex-row flex-col flex-wra flex-now item-cen item-sta item-end jus-cen jus-bet jus-aro jus-sta jus-end",
    description: (
      <>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>flex-row</Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>flex-col</Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>flex-wra</Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>flex-now</Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>item-cen</Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>item-sta</Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>item-end</Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>jus-cen</Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>jus-bet</Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>jus-aro</Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>jus-sta</Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>jus-end</Tag>
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
    descriptionText: "col-{1-20}",
    description: (
      <>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          col-{`{1-20}`}
        </Tag>
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
    descriptionText: "gap-{0-100}",
    description: (
      <>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          gap-{`{0-100}`}
        </Tag>
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
    descriptionText: "borw-{0-100}",
    description: (
      <>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          borw-{`{0-100}`}
        </Tag>
      </>
    ),
    sample: `/* CSS */
.borw-0 {
  border-width: 0px;
}
.borw-1 {
  border-width: 1px;
}
.borw-2 {
  border-width: 2px;
}
.borw-10 {
  border-width: 10px;
}

/* Usage */
<div className="borw-2">border width example</div>`
  },
  {
    title: "Border Style",
    descriptionText:
      "bors-solid bors-dashed bors-dotted bors-double bors-groove bors-ridge bors-inset bors-outset bors-none",
    description: (
      <>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          bors-solid
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          bors-dashed
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          bors-dotted
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          bors-double
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          bors-groove
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          bors-ridge
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          bors-inset
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          bors-outset
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          bors-none
        </Tag>
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
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          rad-{`{0-100}`}
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>rad-25p</Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>rad-50p</Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>rad-75p</Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>rad-100p</Tag>
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
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          shadow-sm
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          shadow-md
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          shadow-lg
        </Tag>
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
    descriptionText: "fs-{0-100}",
    description: (
      <>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          fs-{`{0-100}`}
        </Tag>
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
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          fw-{`{0,100,200,300,400,500,600,700,800,900,1000}`}
        </Tag>
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
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>lh-1</Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>lh-1-1</Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>lh-1-2</Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>lh-1-3</Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>lh-1-4</Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>lh-1-5</Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>lh-1-6</Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>lh-1-7</Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>lh-1-8</Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>lh-1-9</Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>lh-2</Tag>
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
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>ta-lef</Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>ta-cen</Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>ta-rig</Tag>
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
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          opa-{`{0-100}`}
        </Tag>
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
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          z-{`{0-1500}`}
        </Tag>
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
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          blur-{`{0-1000}`}
        </Tag>
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
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          cursor-pointer
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          cursor-default
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          cursor-text
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          cursor-move
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          cursor-not-allowed
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          cursor-wait
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          cursor-help
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          cursor-auto
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          cursor-crosshair
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          cursor-col-resize
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          cursor-row-resize
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          cursor-ew-resize
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          cursor-ns-resize
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          cursor-nwse-resize
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          cursor-nesw-resize
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          cursor-zoom-in
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          cursor-zoom-out
        </Tag>
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
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          visibility-visible
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          visibility-hidden
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          visibility-collapse
        </Tag>
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
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          align-baseline
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          align-top
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          align-middle
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          align-bottom
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          align-text-top
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          align-text-bottom
        </Tag>
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
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          whitespace-normal
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          whitespace-nowrap
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          whitespace-pre
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          whitespace-pre-line
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          whitespace-pre-wrap
        </Tag>
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
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          word-break-normal
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          word-break-break-word
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          word-break-keep-all
        </Tag>
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
