"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Button, Drawer, Segmented, Tag } from "sud-ui";
import { useState } from "react";

export default function DrawerPage() {
  const { isMobile } = useMobile();

  const name = "Drawer";
  const description = (
    <>화면 가장자리에서 슬라이드되어 나오는 패널 컴포넌트입니다.</>
  );

  const IMPORT_COMMAND = "import { Drawer } from 'sud-ui';";

  const whenToUse = [
    "사이드 메뉴나 네비게이션을 표시할 때.",
    "추가 정보나 세부 내용을 보여줄 때.",
    "모달보다 덜 방해되는 방식으로 콘텐츠를 표시할 때."
  ];

  const [openBasic, setOpenBasic] = useState(false);
  const [openPlacement, setOpenPlacement] = useState(false);
  const [placement, setPlacement] = useState("right");
  const [openWidth, setOpenWidth] = useState(false);
  const [openShape, setOpenShape] = useState(false);

  const examples = [
    {
      title: "Basic Usage",
      render: (
        <div>
          <Button colorType="primary" onClick={() => setOpenBasic(true)}>
            Open Drawer
          </Button>
          <Drawer
            open={openBasic}
            onClose={() => setOpenBasic(false)}
            title={"Drawer"}
          >
            <div>Drawer Content</div>
          </Drawer>
        </div>
      ),
      description: "기본적인 드로어 컴포넌트입니다.",
      jscode: `import { useState } from "react";\nimport { Drawer, Button } from "sud-ui";\n\nexport default function Example() {\n  const [open, setOpen] = useState(false);\n  return (\n    <div>\n      <Button colorType="primary" onClick={() => setOpen(true)}>Open Drawer</Button>\n      <Drawer open={open} onClose={() => setOpen(false)} title=\"Drawer\">\n        <div>Drawer Content</div>\n      </Drawer>\n    </div>\n  );\n}`,
      tscode: `import { useState } from "react";\nimport { Drawer, Button } from "sud-ui";\n\nexport default function Example() {\n  const [open, setOpen] = useState(false);\n  return (\n    <div>\n      <Button colorType="primary" onClick={() => setOpen(true)}>Open Drawer</Button>\n      <Drawer open={open} onClose={() => setOpen(false)} title=\"Drawer\">\n        <div>Drawer Content</div>\n      </Drawer>\n    </div>\n  );\n}`
    },
    {
      title: "Size",
      render: (
        <div>
          <Button colorType="primary" onClick={() => setOpenWidth(true)}>
            Open 50% Drawer
          </Button>
          <Drawer
            open={openWidth}
            onClose={() => setOpenWidth(false)}
            title={"Wide Drawer"}
            width={"50%"}
          >
            <div>width=50%로 지정된 Drawer</div>
          </Drawer>
        </div>
      ),
      description: "드로어의 크기를 설정할 수 있습니다.",
      jscode: `import { useState } from "react";\nimport { Drawer, Button } from "sud-ui";\n\nexport default function Example() {\n  const [open, setOpen] = useState(false);\n  return (\n    <div>\n      <Button colorType="primary" onClick={() => setOpen(true)}>Open 50% Drawer</Button>\n      <Drawer open={open} onClose={() => setOpen(false)} title=\"Wide Drawer\" width={"50%"}>\n        <div>width=50%로 지정된 Drawer</div>\n      </Drawer>\n    </div>\n  );\n}`,
      tscode: `import { useState } from "react";\nimport { Drawer, Button } from "sud-ui";\n\nexport default function Example() {\n  const [open, setOpen] = useState(false);\n  return (\n    <div>\n      <Button colorType="primary" onClick={() => setOpen(true)}>Open 50% Drawer</Button>\n      <Drawer open={open} onClose={() => setOpen(false)} title=\"Wide Drawer\" width={"50%"}>\n        <div>width=50%로 지정된 Drawer</div>\n      </Drawer>\n    </div>\n  );\n}`
    },
    {
      title: "Position",
      render: (
        <div>
          <Segmented
            options={["left", "right", "top", "bottom"]}
            value={placement}
            onChange={(value) => setPlacement(value)}
            style={{ marginBottom: "20px" }}
          />
          <Button colorType="primary" onClick={() => setOpenPlacement(true)}>
            Open Drawer
          </Button>
          <Drawer
            open={openPlacement}
            onClose={() => setOpenPlacement(false)}
            title={"Drawer"}
            placement={placement}
          >
            <div>Drawer Content</div>
          </Drawer>
        </div>
      ),
      description: "드로어의 위치를 설정할 수 있습니다.",
      jscode: `import { useState } from "react";\nimport { Drawer, Button, Segmented } from "sud-ui";\n\nexport default function Example() {\n  const [open, setOpen] = useState(false);\n  const [placement, setPlacement] = useState(\"right\");\n  return (\n    <div>\n      <Segmented options={[\"left\", \"right\", \"top\", \"bottom\"]} value={placement} onChange={setPlacement} style={{ marginBottom: \"20px\" }} />\n      <Button colorType="primary" onClick={() => setOpen(true)}>Open Drawer</Button>\n      <Drawer open={open} onClose={() => setOpen(false)} placement={placement} title=\"Drawer\">\n        <div>Drawer Content</div>\n      </Drawer>\n    </div>\n  );\n}`,
      tscode: `import { useState } from "react";\nimport { Drawer, Button, Segmented } from "sud-ui";\n\nexport default function Example() {\n  const [open, setOpen] = useState(false);\n  const [placement, setPlacement] = useState<\"left\" | \"right\" | \"top\" | \"bottom\">(\"right\");\n  return (\n    <div>\n      <Segmented options={[\"left\", \"right\", \"top\", \"bottom\"]} value={placement} onChange={setPlacement} style={{ marginBottom: \"20px\" }} />\n      <Button colorType="primary" onClick={() => setOpen(true)}>Open Drawer</Button>\n      <Drawer open={open} onClose={() => setOpen(false)} placement={placement} title=\"Drawer\">\n        <div>Drawer Content</div>\n      </Drawer>\n    </div>\n  );\n}`
    },
    {
      title: "Color Customization",
      render: (
        <div>
          <Button colorType="primary" onClick={() => setOpenShape(true)}>
            Open Drawer
          </Button>
          <Drawer
            open={openShape}
            onClose={() => setOpenShape(false)}
            title={"Drawer"}
            shape="square"
          >
            <div>shape=square로 지정된 Drawer</div>
          </Drawer>
        </div>
      ),
      description: "드로어의 색상을 커스텀할 수 있습니다.",
      jscode: `import { useState } from "react";\nimport { Drawer, Button } from "sud-ui";\n\nexport default function Example() {\n  const [open, setOpen] = useState(false);\n  return (\n    <div>\n      <Button colorType="primary" onClick={() => setOpen(true)}>Open Drawer</Button>\n      <Drawer open={open} onClose={() => setOpen(false)} title=\"Drawer\" shape=\"square\">\n        <div>shape=square로 지정된 Drawer</div>\n      </Drawer>\n    </div>\n  );\n}`,
      tscode: `import { useState } from "react";\nimport { Drawer, Button } from "sud-ui";\n\nexport default function Example() {\n  const [open, setOpen] = useState(false);\n  return (\n    <div>\n      <Button colorType="primary" onClick={() => setOpen(true)}>Open Drawer</Button>\n      <Drawer open={open} onClose={() => setOpen(false)} title=\"Drawer\" shape=\"square\">\n        <div>shape=square로 지정된 Drawer</div>\n      </Drawer>\n    </div>\n  );\n}`
    }
  ];

  const howToUseTableData = [
    {
      key: "open",
      name: "open*",
      description: "Drawer의 열림/닫힘 상태 (true/false)",
      type: "boolean",
      default: "false"
    },
    {
      key: "onClose",
      name: "onClose*",
      description: "Drawer를 닫는 콜백 함수",
      type: "() => void",
      default: ""
    },
    {
      key: "title",
      name: "title",
      description: "Drawer 상단에 표시되는 제목",
      type: "ReactNode",
      default: ""
    },
    {
      key: "children",
      name: "children",
      description: "Drawer 내부에 표시할 내용",
      type: "ReactNode",
      default: ""
    },
    {
      key: "footer",
      name: "footer",
      description: "Drawer 하단에 표시할 내용",
      type: "ReactNode",
      default: ""
    },
    {
      key: "placement",
      name: "placement",
      description: "Drawer가 나타나는 위치 (left, right, top, bottom)",
      type: (
        <>
          <Tag>left</Tag> ｜ <Tag>right</Tag> ｜ <Tag>top</Tag> ｜{" "}
          <Tag>bottom</Tag>
        </>
      ),
      default: <Tag>right</Tag>
    },
    {
      key: "width",
      name: "width",
      description: "Drawer의 너비 (px 또는 %)",
      type: "number | string",
      default: "300"
    },
    {
      key: "height",
      name: "height",
      description: "Drawer의 높이 (placement가 top/bottom일 때)",
      type: "number | string",
      default: "300"
    },
    {
      key: "divider",
      name: "divider",
      description: "타이틀/푸터 구분선 표시 여부",
      type: "boolean",
      default: "true"
    },
    {
      key: "colorType",
      name: "colorType",
      description: "색상 타입",
      type: (
        <>
          <Tag>default</Tag> ｜ <Tag>primary</Tag> ｜ <Tag>secondary</Tag> ｜{" "}
          <Tag>success</Tag> ｜ <Tag>warning</Tag> ｜ <Tag>danger</Tag> ｜{" "}
          <Tag>info</Tag> ｜ <Tag>text</Tag>
        </>
      ),
      default: <Tag>default</Tag>
    },
    {
      key: "background",
      name: "background",
      description: "Drawer 배경색",
      type: "string",
      default: ""
    },
    {
      key: "color",
      name: "color",
      description: "Drawer 텍스트 색상",
      type: "string",
      default: ""
    },
    {
      key: "border",
      name: "border",
      description: "테두리 표시 여부",
      type: "boolean",
      default: "true"
    },
    {
      key: "borderColor",
      name: "borderColor",
      description: "테두리 색상",
      type: "string",
      default: ""
    },
    {
      key: "borderType",
      name: "borderType",
      description: "테두리 스타일",
      type: (
        <>
          <Tag>solid</Tag> ｜ <Tag>dashed</Tag> ｜ <Tag>dotted</Tag>
        </>
      ),
      default: <Tag>solid</Tag>
    },
    {
      key: "borderWeight",
      name: "borderWeight",
      description: "테두리 두께",
      type: "number",
      default: "1"
    },
    {
      key: "shape",
      name: "shape",
      description: "모서리 형태",
      type: (
        <>
          <Tag>rounded</Tag> ｜ <Tag>square</Tag>
        </>
      ),
      default: <Tag>rounded</Tag>
    },
    {
      key: "shadow",
      name: "shadow",
      description: "그림자 크기",
      type: (
        <>
          <Tag>none</Tag> ｜ <Tag>sm</Tag> ｜ <Tag>md</Tag> ｜ <Tag>lg</Tag> ｜{" "}
          <Tag>xl</Tag>
        </>
      ),
      default: <Tag>sm</Tag>
    },
    {
      key: "className",
      name: "className",
      description: "추가 클래스명",
      type: "string",
      default: ""
    },
    {
      key: "style",
      name: "style",
      description: "추가 스타일",
      type: "React.CSSProperties",
      default: ""
    }
  ];

  return (
    <Frame
      component={{
        name,
        description,
        IMPORT_COMMAND,
        whenToUse,
        examples,
        howToUseTableData
      }}
      grid={true}
      isMobile={isMobile}
    />
  );
}
