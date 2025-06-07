"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Card, Div, Typography } from "sud-ui";
import { useLang } from "../../_lib/context/langContext";
import { defaultColorTypeTags } from "../../_lib/components/common/defaultType";
import { LogoSud, ShieldQuarterFill } from "sud-icons";

export default function DivPage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();
  const name = "Div";
  const description =
    lang === "ko"
      ? "외부 요소에 스타일, 클릭 이벤트를 쉽게 적용할 수 있는 컴포넌트입니다."
      : "Component to easily apply styles and click events to external elements.";

  const IMPORT_COMMAND = "import { Div } from 'sud-ui';";

  const whenToUse =
    lang === "ko"
      ? ["외부 요소에 스타일, 클릭 이벤트를 적용할 때"]
      : [
          "When you need to apply styles and click events to external elements."
        ];

  const examples = [
    {
      title: "Basic Usage",
      description:
        lang === "ko" ? "기본 사용 예시입니다." : "Example of basic usage.",
      render: (
        <div className="grid col-2 gap-10">
          <Card width="100%">
            <div className="flex flex-col jus-cen item-cen gap-10">
              <ShieldQuarterFill size={100} color="#d46b08" />
              <Typography color="primary">#d46b08</Typography>
            </div>
          </Card>
          <Card width="100%">
            <Div
              className="flex flex-col jus-cen item-cen gap-10"
              color="orange-7"
            >
              <ShieldQuarterFill size={100} />
              <Typography color="orange-7">orange-7</Typography>
            </Div>
          </Card>
        </div>
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
          ? "Div 내부에 표시될 자식 요소"
          : "Child elements to be displayed inside the Div",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "colorType",
      name: "colorType",
      description: lang === "ko" ? "테마 색상 타입" : "Theme color type",
      type: defaultColorTypeTags,
      default: "-"
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
      key: "onClick",
      name: "onClick",
      description: lang === "ko" ? "클릭 이벤트 핸들러" : "Click event handler",
      type: "(e: MouseEvent<HTMLDivElement>) => void",
      default: "-"
    },
    {
      key: "style",
      name: "style",
      description: lang === "ko" ? "추가 스타일" : "Additional styles",
      type: "React.CSSProperties",
      default: "{}"
    },
    {
      key: "className",
      name: "className",
      description: lang === "ko" ? "추가 클래스명" : "Additional class name",
      type: "string",
      default: "-"
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
