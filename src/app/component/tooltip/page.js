"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Tag, Button, PopConfirm, toast, Typography, Tooltip } from "sud-ui";
import { useLang } from "../../_lib/context/langContext";
import { tagRender } from "../../_lib/components/common/render";
import {
  borderTypeTags,
  defaultColorTypeTags,
  shadowTypeTags
} from "../../_lib/components/common/defaultType";
import {
  CheckCircleFill,
  LogoReact,
  LogoSud,
  XMarkCircleFill
} from "sud-icons";

export default function TooltipPage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();
  const name = "Tooltip";
  const description =
    lang === "ko" ? (
      <>
        요소에 마우스를 올리면 간단한 툴팁이 표시되는 컴포넌트입니다.
        <br />더 자세한 예제는{" "}
        <Tag>
          <a href="/component/popover">Popover</a>
        </Tag>{" "}
        컴포넌트를 참고하세요. Tooltip은 Popover에서 title과 footer 기능을
        제거한 기본 컴포넌트입니다.
      </>
    ) : (
      <>
        You can provide confirmation or cancel options to users by clicking or
        hovering over an element.
        <br />
        For more examples, please refer to the{" "}
        <Tag>
          <a href="/component/popover">Popover</a>
        </Tag>{" "}
        component. PopConfirm provides title and footer by default, which can be
        customized.
      </>
    );

  const IMPORT_COMMAND = "import { PopConfirm } from 'sud-ui';";

  const whenToUse =
    lang === "ko"
      ? ["요소에 마우스를 올리면 간단한 툴팁이 표시되는 경우"]
      : [
          "When you need to provide a simple tooltip by hovering over an element."
        ];

  const examples = [
    {
      title: "Basic Usage",
      description:
        lang === "ko" ? "기본 사용 예시입니다." : "Example of basic usage.",
      render: (
        <Tooltip content="SUD is React UI Library">Soon UI Design</Tooltip>
      ),
      jscode: `import { Tooltip } from "sud-ui";

export default function App() {
  return (
    <Tooltip content="SUD is React UI Library">Soon UI Design</Tooltip>
  );
}`,
      tscode: `import { Tooltip } from "sud-ui";
import React from "react";

export default function App(): React.ReactElement {
  return (
    <Tooltip content="SUD is React UI Library">Soon UI Design</Tooltip>
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
          ? "Tooltip 트리거 역할을 하는 요소"
          : "Element that triggers the Tooltip",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "content",
      name: "content",
      description: lang === "ko" ? "Tooltip 내용" : "Tooltip content",
      type: "string | ReactNode",
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
      description: lang === "ko" ? "Tooltip 위치" : "Tooltip placement",
      type: tagRender(["top", "bottom", "left", "right"]),
      default: <Tag>top</Tag>
    },
    {
      key: "open",
      name: "open",
      description:
        lang === "ko" ? "Tooltip 열림 상태 (제어용)" : "Controlled open state",
      type: "boolean",
      default: "-"
    },
    {
      key: "defaultOpen",
      name: "defaultOpen",
      description:
        lang === "ko" ? "Tooltip 기본 열림 상태" : "Default open state",
      type: "boolean",
      default: "false"
    },
    {
      key: "onOpenChange",
      name: "onOpenChange",
      description:
        lang === "ko"
          ? "Tooltip 열림 상태 변경 콜백"
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
      key: "shape",
      name: "shape",
      description: lang === "ko" ? "Tooltip 모양" : "Tooltip shape",
      type: tagRender(["square", "round", "circle"]),
      default: <Tag>round</Tag>
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
      default: <Tag>sub</Tag>
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
