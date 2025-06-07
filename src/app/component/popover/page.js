"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Tag, Button, Popover, Segmented, Typography } from "sud-ui";
import { useLang } from "../../_lib/context/langContext";
import { tagRender } from "../../_lib/components/common/render";
import {
  borderTypeTags,
  defaultColorTypeTags,
  shadowTypeTags
} from "../../_lib/components/common/defaultType";
import { useState } from "react";

export default function PopoverPage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();
  const name = "Popover";
  const description =
    lang === "ko" ? (
      <>요소를 클릭하거나 호버하여 팝오버를 표시할 수 있습니다.</>
    ) : (
      <>
        A component that displays a popover when an element is clicked or
        hovered.
      </>
    );

  const IMPORT_COMMAND = "import { Popover } from 'sud-ui';";

  const whenToUse =
    lang === "ko"
      ? ["요소를 클릭하거나 호버하여 팝오버를 표시할 때"]
      : [
          "When you need to display a popover when an element is clicked or hovered."
        ];

  const [placement, setPlacement] = useState("bottom");

  const examples = [
    {
      title: "Basic Usage",
      description:
        lang === "ko" ? "기본 사용 예시입니다." : "Example of basic usage.",
      render: (
        <Popover title="Title" content="This is a popover">
          <Button>Hover me</Button>
        </Popover>
      ),
      jscode: `import { Button, Popover } from "sud-ui";

export default function App() {
  return (
    <Popover title="Title" content="This is a popover">
      <Button>Hover me</Button>
    </Popover>
  );
}`,
      tscode: `import { Button, Popover } from "sud-ui";
import React from "react";

export default function App(): React.ReactElement {
  return (
    <Popover title="Title" content="This is a popover">
      <Button>Hover me</Button>
    </Popover>
  );
}`
    },
    {
      title: "Trigger",
      description:
        lang === "ko" ? "트리거 방식 예시입니다." : "Example of trigger type.",
      render: (
        <div className="flex gap-20">
          <Popover title="Title" content="This is a popover">
            <Button>Hover me</Button>
          </Popover>
          <Popover
            title="Title"
            content="This is a popover"
            trigger="click"
            placement="bottom"
          >
            <Button>Click me</Button>
          </Popover>
          <Popover
            title="Title"
            content="This is a popover"
            trigger="contextMenu"
            placement="bottom"
          >
            <Button>Right click me</Button>
          </Popover>
        </div>
      ),
      jscode: `import { Button, Popover } from "sud-ui";

export default function App() {
  return (
    <div className="flex gap-20">
      <Popover title="Title" content="This is a popover">
        <Button>Hover me</Button>
      </Popover>
      <Popover
        title="Title"
        content="This is a popover"
        trigger="click"
        placement="bottom"
      >
        <Button>Click me</Button>
      </Popover>
    </div>
  );
}`,
      tscode: `import { Button, Popover } from "sud-ui";
import React from "react";

export default function App(): React.ReactElement {
  return (
    <div className="flex gap-20">
      <Popover title="Title" content="This is a popover">
        <Button>Hover me</Button>
      </Popover>
      <Popover
        title="Title"
        content="This is a popover"
        trigger="click"
        placement="bottom"
      >
        <Button>Click me</Button>
      </Popover>
    </div>
  );
}`
    },
    {
      title: "Placement",
      description: lang === "ko" ? "위치 예시입니다." : "Example of placement.",
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
          <Popover
            title="Title"
            content="This is a popover"
            placement={placement}
          >
            <Button>Hover me</Button>
          </Popover>
        </div>
      ),
      jscode: `import { Button, Popover, Segmented } from "sud-ui";
import { useState } from "react";

export default function App() {
  const [placement, setPlacement] = useState("bottom");

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
      <Popover
        title="Title"
        content="This is a popover"
        placement={placement}
      >
        <Button>Hover me</Button>
      </Popover>
    </div>
  );
}`,
      tscode: `import { Button, Popover, Segmented } from "sud-ui";
import React, { useState } from "react";

export default function App(): React.ReactElement {
  const [placement, setPlacement] = useState<"left" | "right" | "top" | "bottom">("bottom");

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
      <Popover
        title="Title"
        content="This is a popover"
        placement={placement}
      >
        <Button>Hover me</Button>
      </Popover>
    </div>
  );
}`
    },
    {
      title: "Disabled",
      description:
        lang === "ko" ? "비활성화 예시입니다." : "Example of disabled.",
      render: (
        <div className="flex gap-20">
          <Popover title="Title" content="This is a popover" disabled>
            <Button disabled>Hover me(disabled)</Button>
          </Popover>
        </div>
      ),
      jscode: `import { Button, Popover } from "sud-ui";

export default function App() {
  return (
    <div className="flex gap-20">
      <Popover title="Title" content="This is a popover" disabled>
        <Button disabled>Hover me(disabled)</Button>
      </Popover>
    </div>
  );
}`,
      tscode: `import { Button, Popover } from "sud-ui";
import React from "react";

export default function App(): React.ReactElement {
  return (
    <div className="flex gap-20">
      <Popover title="Title" content="This is a popover" disabled>
        <Button disabled>Hover me(disabled)</Button>
      </Popover>
    </div>
  );
}`
    },
    {
      title: "Close On Click",
      description:
        lang === "ko"
          ? "클릭 시 닫기 여부 예시입니다."
          : "Example of close on click.",
      render: (
        <div className="flex gap-20">
          <Popover
            title="Title"
            content={
              <div className="flex flex-col gap-20">
                <Typography>The popup will not close when clicked</Typography>
                <div>
                  <Button size="sm" colorType="danger">
                    Close
                  </Button>
                </div>
              </div>
            }
            closeOnClick={false}
            trigger="click"
          >
            <Button>Click me</Button>
          </Popover>
        </div>
      ),
      jscode: `import { Button, Popover, Typography } from "sud-ui";

export default function App() {
  return (
    <div className="flex gap-20">
      <Popover
        title="Title"
        content={
          <div className="flex flex-col gap-20">
            <Typography>The popup will not close when clicked</Typography>
            <div>
              <Button size="sm" colorType="danger">
                Close
              </Button>
            </div>
          </div>
        }
        closeOnClick={false}
        trigger="click"
      >
        <Button>Click me</Button>
      </Popover>
    </div>
  );
}`,
      tscode: `import { Button, Popover, Typography } from "sud-ui";
import React from "react";

export default function App(): React.ReactElement {
  return (
    <div className="flex gap-20">
      <Popover
        title="Title"
        content={
          <div className="flex flex-col gap-20">
            <Typography>The popup will not close when clicked</Typography>
            <div>
              <Button size="sm" colorType="danger">
                Close
              </Button>
            </div>
          </div>
        }
        closeOnClick={false}
        trigger="click"
      >
        <Button>Click me</Button>
      </Popover>
    </div>
  );
}`
    },
    {
      title: "Style Customization",
      description:
        lang === "ko"
          ? "스타일 커스터마이징 예시입니다."
          : "Example of style customization.",
      render: (
        <div className="flex gap-20">
          <Popover
            title="Title"
            content="This is a popover"
            open={true}
            background="sky-2"
            color="mint-8"
            borderColor="black-7"
            borderType="dashed"
            borderWeight={2}
            shadow="lg"
          >
            <Button>Hover me</Button>
          </Popover>
        </div>
      ),
      jscode: `import { Button, Popover } from "sud-ui";

export default function App() {
  return (
    <div className="flex gap-20">
      <Popover
        title="Title"
        content="This is a popover"
        open={true}
        background="sky-2"
        color="mint-8"
        borderColor="black-7"
        borderType="dashed"
        borderWeight={2}
        shadow="lg"
      >
        <Button>Hover me</Button>
      </Popover>
    </div>
  );
}`,
      tscode: `import { Button, Popover } from "sud-ui";
import React from "react";

export default function App(): React.ReactElement {
  return (
    <div className="flex gap-20">
      <Popover
        title="Title"
        content="This is a popover"
        open={true}
        background="sky-2"
        color="mint-8"
        borderColor="black-7"
        borderType="dashed"
        borderWeight={2}
        shadow="lg"
      >
        <Button>Hover me</Button>
      </Popover>
    </div>
  );
}`
    }
  ];

  const howToUseTableData = [
    {
      key: "children",
      name: "children",
      description:
        lang === "ko"
          ? "Popover 트리거 역할을 하는 요소"
          : "Element that triggers the Popover",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "title",
      name: "title",
      description: lang === "ko" ? "Popover 제목" : "Popover title",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "content",
      name: "content",
      description: lang === "ko" ? "Popover 내용" : "Popover content",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "trigger",
      name: "trigger",
      description: lang === "ko" ? "트리거 방식" : "Trigger type",
      type: tagRender(["click", "hover", "contextMenu"]),
      default: <Tag>hover</Tag>
    },
    {
      key: "placement",
      name: "placement",
      description: lang === "ko" ? "Popover 위치" : "Popover placement",
      type: tagRender(["top", "bottom", "left", "right"]),
      default: <Tag>bottom</Tag>
    },
    {
      key: "open",
      name: "open",
      description:
        lang === "ko" ? "Popover 열림 상태 (제어용)" : "Controlled open state",
      type: "boolean",
      default: "-"
    },
    {
      key: "defaultOpen",
      name: "defaultOpen",
      description:
        lang === "ko" ? "Popover 기본 열림 상태" : "Default open state",
      type: "boolean",
      default: "false"
    },
    {
      key: "onOpenChange",
      name: "onOpenChange",
      description:
        lang === "ko"
          ? "Popover 열림 상태 변경 콜백"
          : "Callback when open state changes",
      type: "(open: boolean) => void",
      default: "-"
    },
    {
      key: "closeOnClick",
      name: "closeOnClick",
      description:
        lang === "ko" ? "클릭 시 닫기 여부" : "Whether to close on click",
      type: "boolean",
      default: "true"
    },
    {
      key: "disabled",
      name: "disabled",
      description: lang === "ko" ? "비활성화 여부" : "Whether to disable",
      type: "boolean",
      default: "false"
    },
    {
      key: "divider",
      name: "divider",
      description:
        lang === "ko" ? "구분선 표시 여부" : "Whether to show divider",
      type: "boolean",
      default: "false"
    },
    {
      key: "background",
      name: "background",
      description:
        lang === "ko"
          ? "배경색(palette값 또는 HEX code)"
          : "Background color(palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "color",
      name: "color",
      description:
        lang === "ko"
          ? "텍스트 색상(palette값 또는 HEX code)"
          : "Text color(palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "border",
      name: "border",
      description:
        lang === "ko" ? "테두리 표시 여부" : "Whether to show border",
      type: "boolean",
      default: "true"
    },
    {
      key: "borderColor",
      name: "borderColor",
      description:
        lang === "ko" ? "테두리 색상(palette값 또는 HEX code)" : "Border color",
      type: "string",
      default: "-"
    },
    {
      key: "borderType",
      name: "borderType",
      description: lang === "ko" ? "테두리 스타일" : "Border style",
      type: borderTypeTags,
      default: <Tag>solid</Tag>
    },
    {
      key: "borderWeight",
      name: "borderWeight",
      description: lang === "ko" ? "테두리 두께" : "Border weight",
      type: "number",
      default: "1"
    },
    {
      key: "shadow",
      name: "shadow",
      description: lang === "ko" ? "그림자 효과" : "Shadow effect",
      type: shadowTypeTags,
      default: <Tag>sm</Tag>
    },
    {
      key: "colorType",
      name: "colorType",
      description: lang === "ko" ? "색상 타입" : "Color type",
      type: defaultColorTypeTags,
      default: <Tag>default</Tag>
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
      description: lang === "ko" ? "추가 스타일" : "Additional styles",
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
      lang={lang}
    />
  );
}
