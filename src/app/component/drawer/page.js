"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Button, Drawer, Segmented, Tag } from "sud-ui";
import { useState } from "react";
import { useLang } from "../../_lib/context/langContext";
import { tagRender } from "../../_lib/components/common/render";
import {
  borderTypeTags,
  defaultColorTypeTags,
  shadowTypeTags,
  shapeTypeTags
} from "../../_lib/components/common/defaultType";

export default function DrawerPage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();
  const name = "Drawer";
  const description =
    lang === "ko" ? (
      <>화면 가장자리에서 슬라이드되어 나오는 패널 컴포넌트입니다.</>
    ) : (
      <>A component that slides out from the edge of the screen.</>
    );

  const IMPORT_COMMAND = "import { Drawer } from 'sud-ui';";

  const whenToUse =
    lang === "ko"
      ? [
          "사이드 메뉴나 네비게이션을 표시할 때.",
          "추가 정보나 세부 내용을 보여줄 때.",
          "모달보다 덜 방해되는 방식으로 콘텐츠를 표시할 때."
        ]
      : [
          "When displaying a side menu or navigation.",
          "When displaying additional information or detailed content.",
          "When you need to display content in a way that is less intrusive than a modal."
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
      description: lang === "ko" ? "기본적인 사용방법입니다." : "Basic usage.",
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
            <div>width=50% Drawer</div>
          </Drawer>
        </div>
      ),
      description:
        lang === "ko"
          ? "드로어의 크기를 설정할 수 있습니다."
          : "You can set the size of the drawer.",
      jscode: `import { useState } from "react";\nimport { Drawer, Button } from "sud-ui";\n\nexport default function Example() {\n  const [open, setOpen] = useState(false);\n  return (\n    <div>\n      <Button colorType="primary" onClick={() => setOpen(true)}>Open 50% Drawer</Button>\n      <Drawer open={open} onClose={() => setOpen(false)} title=\"Wide Drawer\" width={"50%"}>\n        <div>width=50% Drawer</div>\n      </Drawer>\n    </div>\n  );\n}`,
      tscode: `import { useState } from "react";\nimport { Drawer, Button } from "sud-ui";\n\nexport default function Example() {\n  const [open, setOpen] = useState(false);\n  return (\n    <div>\n      <Button colorType="primary" onClick={() => setOpen(true)}>Open 50% Drawer</Button>\n      <Drawer open={open} onClose={() => setOpen(false)} title=\"Wide Drawer\" width={"50%"}>\n        <div>width=50% Drawer</div>\n      </Drawer>\n    </div>\n  );\n}`
    },
    {
      title: "Position",
      render: (
        <div>
          <div>
            <Segmented
              options={["left", "right", "top", "bottom"]}
              value={placement}
              onChange={(value) => setPlacement(value)}
              style={{ marginBottom: "20px" }}
            />
          </div>
          <Button colorType="primary" onClick={() => setOpenPlacement(true)}>
            Open Drawer
          </Button>
          <Drawer
            open={openPlacement}
            onClose={() => setOpenPlacement(false)}
            title="Drawer"
            placement={placement}
          >
            <div>Drawer Content</div>
          </Drawer>
        </div>
      ),
      description:
        lang === "ko"
          ? "드로어의 위치를 설정할 수 있습니다."
          : "You can set the position of the drawer.",
      jscode: `import { useState } from "react";
import { Drawer, Button, Segmented } from "sud-ui";

export default function Example() {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");
  return (
    <div>
      <div>
        <Segmented
          options={["left", "right", "top", "bottom"]}
          value={placement}
          onChange={(value) => setPlacement(value)}
          style={{ marginBottom: "20px" }}
        />
      </div>
      <Button colorType="primary" onClick={() => setOpen(true)}>
        Open Drawer
      </Button>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="Drawer"
        placement={placement}
      >
        <div>Drawer Content</div>
      </Drawer>
    </div>
  );
}`,
      tscode: `import { useState } from "react";
import { Drawer, Button, Segmented } from "sud-ui";

export default function Example() {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<"left" | "right" | "top" | "bottom">("right");
  return (
    <div>
      <div>
        <Segmented
          options={["left", "right", "top", "bottom"]}
          value={placement}
          onChange={(value) => setPlacement(value)}
          style={{ marginBottom: "20px" }}
        />
      </div>
      <Button colorType="primary" onClick={() => setOpen(true)}>
        Open Drawer
      </Button>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="Drawer"
        placement={placement}
      >
        <div>Drawer Content</div>
      </Drawer>
    </div>
  );
}`
    },
    {
      title: "Shape",
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
            <div>shape=square Drawer</div>
          </Drawer>
        </div>
      ),
      description:
        lang === "ko"
          ? "드로어의 모서리 형태를 설정할 수 있습니다."
          : "You can set the shape of the drawer.",
      jscode: `import { useState } from "react";\nimport { Drawer, Button } from "sud-ui";\n\nexport default function Example() {\n  const [open, setOpen] = useState(false);\n  return (\n    <div>\n      <Button colorType="primary" onClick={() => setOpen(true)}>Open Drawer</Button>\n      <Drawer open={open} onClose={() => setOpen(false)} title=\"Drawer\" shape=\"square\">\n        <div>shape=square Drawer</div>\n      </Drawer>\n    </div>\n  );\n}`,
      tscode: `import { useState } from "react";\nimport { Drawer, Button } from "sud-ui";\n\nexport default function Example() {\n  const [open, setOpen] = useState(false);\n  return (\n    <div>\n      <Button colorType="primary" onClick={() => setOpen(true)}>Open Drawer</Button>\n      <Drawer open={open} onClose={() => setOpen(false)} title=\"Drawer\" shape=\"square\">\n        <div>shape=square Drawer</div>\n      </Drawer>\n    </div>\n  );\n}`
    }
  ];

  const howToUseTableData = [
    {
      key: "open",
      name: "open*",
      description:
        lang === "ko"
          ? "Drawer의 열림/닫힘 상태 (true/false)"
          : "The open/close state of the drawer (true/false)",
      type: "boolean",
      default: "false"
    },
    {
      key: "onClose",
      name: "onClose*",
      description:
        lang === "ko"
          ? "Drawer를 닫는 콜백 함수"
          : "The callback function to close the drawer",
      type: "() => void",
      default: "-"
    },
    {
      key: "title",
      name: "title",
      description:
        lang === "ko"
          ? "Drawer 상단에 표시되는 제목"
          : "The title displayed at the top of the drawer",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "children",
      name: "children",
      description:
        lang === "ko"
          ? "Drawer 내부에 표시할 내용"
          : "The content to display inside the drawer",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "footer",
      name: "footer",
      description:
        lang === "ko"
          ? "Drawer 하단에 표시할 내용"
          : "The content to display at the bottom of the drawer",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "placement",
      name: "placement",
      description:
        lang === "ko"
          ? "Drawer가 나타나는 위치 (left, right, top, bottom)"
          : "The position where the drawer appears (left, right, top, bottom)",
      type: <>{tagRender(["left", "right", "top", "bottom"])}</>,
      default: <Tag>right</Tag>
    },
    {
      key: "width",
      name: "width",
      description:
        lang === "ko"
          ? "Drawer의 너비 (px 또는 %)"
          : "The width of the drawer (px or %)",
      type: "number | string",
      default: "300"
    },
    {
      key: "height",
      name: "height",
      description:
        lang === "ko"
          ? "Drawer의 높이 (placement가 top/bottom일 때)"
          : "The height of the drawer (when placement is top/bottom)",
      type: "number | string",
      default: "300"
    },
    {
      key: "divider",
      name: "divider",
      description:
        lang === "ko"
          ? "타이틀/푸터 구분선 표시 여부"
          : "Whether to display a divider between the title/footer",
      type: "boolean",
      default: "true"
    },
    {
      key: "colorType",
      name: "colorType",
      description: lang === "ko" ? "색상 타입" : "The color type",
      type: <>{defaultColorTypeTags}</>,
      default: <Tag>default</Tag>
    },
    {
      key: "background",
      name: "background",
      description:
        lang === "ko"
          ? "Drawer 배경색(palette값 또는 HEX code)"
          : "The background color of the drawer (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "color",
      name: "color",
      description:
        lang === "ko"
          ? "Drawer 텍스트 색상(palette값 또는 HEX code)"
          : "The text color of the drawer (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "border",
      name: "border",
      description:
        lang === "ko" ? "테두리 표시 여부" : "Whether to display a border",
      type: "boolean",
      default: "true"
    },
    {
      key: "borderColor",
      name: "borderColor",
      description:
        lang === "ko"
          ? "테두리 색상(palette값 또는 HEX code)"
          : "The border color (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "borderType",
      name: "borderType",
      description: lang === "ko" ? "테두리 스타일" : "The border style",
      type: <>{borderTypeTags}</>,
      default: <Tag>solid</Tag>
    },
    {
      key: "borderWeight",
      name: "borderWeight",
      description: lang === "ko" ? "테두리 두께" : "The border weight",
      type: "number",
      default: "1"
    },
    {
      key: "shape",
      name: "shape",
      description: lang === "ko" ? "모서리 형태" : "The shape of the corners",
      type: <>{shapeTypeTags}</>,
      default: <Tag>rounded</Tag>
    },
    {
      key: "shadow",
      name: "shadow",
      description: lang === "ko" ? "그림자 크기" : "The size of the shadow",
      type: <>{shadowTypeTags}</>,
      default: <Tag>sm</Tag>
    },
    {
      key: "className",
      name: "className",
      description: lang === "ko" ? "추가 클래스명" : "Additional class name",
      type: "string",
      default: "-"
    },
    {
      key: "style",
      name: "style",
      description: lang === "ko" ? "추가 스타일" : "Additional style",
      type: "React.CSSProperties",
      default: "{}"
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
