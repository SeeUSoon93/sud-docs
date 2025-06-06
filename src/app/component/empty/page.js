"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { useLang } from "../../_lib/context/langContext";
import { Card, Empty, Tag } from "sud-ui";
import { DocumentOutline } from "sud-icons";
import {
  fontSizeTypeTags,
  fontWeightTypeTags,
  gmarketTypeTags,
  pretendardTypeTags,
  suiteTypeTags
} from "../../_lib/components/common/defaultType";
export default function EmptyPage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();

  const name = "Empty";
  const description = (
    <>
      {lang === "ko"
        ? "빈 상태를 표시할 수 있는 컴포넌트입니다."
        : "The component for displaying empty states."}
    </>
  );

  const IMPORT_COMMAND = "import { Empty } from 'sud-ui';";

  const whenToUse = [
    lang === "ko" ? "빈 상태를 표시할 때" : "When displaying empty states."
  ];

  const examples = [
    {
      title: "Basic Usage",
      description: lang === "ko" ? "기본적인 사용 방법입니다." : "Basic usage.",
      render: (
        <Card shadow="none" style={{ width: "100%" }}>
          <Empty />
        </Card>
      ),
      jscode: `import { Card, Empty } from "sud-ui";

export default function App() {
  return (
    <Card shadow="none" style={{ width: "100%" }}>
      <Empty />
    </Card>
  );
}`,
      tscode: `import { Card, Empty } from "sud-ui";
import type { ReactNode } from "react";

export default function App(): ReactNode {
  return (
    <Card shadow="none" style={{ width: "100%" }}>
      <Empty />
    </Card>
  );
}`
    },
    {
      title: "Description Customization",
      description:
        lang === "ko"
          ? "빈 상태에 표시할 텍스트와 스타일을 지정할 수 있습니다."
          : "You can specify the text and style to display in the empty state.",
      render: (
        <Card shadow="none" style={{ width: "100%" }}>
          <Empty
            description="Not Found Data"
            color="neutral-4"
            suite="EB"
            size="xl"
          />
        </Card>
      ),
      jscode: `import { Card, Empty } from "sud-ui";

export default function App() {
  return (
    <Card shadow="none" style={{ width: "100%" }}>
      <Empty
        description="Not Found Data"
        color="neutral-4"
        suite="EB"
        size="xl"
      />
    </Card>
  );
}`,
      tscode: `import { Card, Empty } from "sud-ui";

export default function App(): ReactNode {
  return (
    <Card shadow="none" style={{ width: "100%" }}>
      <Empty
        description="Not Found Data"
        color="neutral-4"
        suite="EB"
        size="xl"
      />
    </Card>
  );
}`
    },
    {
      title: "Icon Customization",
      description:
        lang === "ko"
          ? "빈 상태에 표시할 아이콘을 지정할 수 있습니다."
          : "You can specify the icon to display in the empty state.",
      render: (
        <Card shadow="none" style={{ width: "100%" }}>
          <Empty
            icon={<DocumentOutline />}
            iconSize="50"
            iconColor="volcano-3"
          />
        </Card>
      ),
      jscode: `import { Card, Empty } from "sud-ui";
import { DocumentOutline } from "sud-icons";

export default function App() {
  return (
    <Card shadow="none" style={{ width: "100%" }}>
      <Empty
        icon={<DocumentOutline />}
        iconSize="50"
        iconColor="volcano-3"
      />
    </Card>
  );
}`,
      tscode: `import { Card, Empty } from "sud-ui";
import { DocumentOutline } from "sud-icons";

export default function App(): ReactNode {
  return (
    <Card shadow="none" style={{ width: "100%" }}>
      <Empty
        icon={<DocumentOutline />}
        iconSize="50"
        iconColor="volcano-3"
      />
    </Card>
  );
}`
    }
  ];

  const howToUseTableData = [
    {
      key: "icon",
      name: "icon",
      description:
        lang === "ko"
          ? "커스텀 아이콘 (size prop을 받을 수 있는 ReactElement)"
          : "Custom icon (ReactElement that accepts size prop)",
      type: "ReactElement",
      default: "<FileTrayFill />"
    },
    {
      key: "iconSize",
      name: "iconSize",
      description: lang === "ko" ? "아이콘 크기" : "Size of the icon",
      type: "string",
      default: "30"
    },
    {
      key: "iconColor",
      name: "iconColor",
      description:
        lang === "ko"
          ? "아이콘 색상(palette값 또는 HEX code)"
          : "Color of the icon(palette value or HEX code)",
      type: "string",
      default: "neutral-6"
    },
    {
      key: "description",
      name: "description",
      description:
        lang === "ko"
          ? "빈 상태에 표시할 텍스트"
          : "Text to display in empty state",
      type: "string",
      default: '"No Data"'
    },
    {
      key: "pretendard",
      name: "pretendard",
      description:
        lang === "ko" ? "Pretendard 폰트 스타일" : "Pretendard font style",
      type: <>{pretendardTypeTags}</>,
      default: <Tag>R</Tag>
    },
    {
      key: "gmarket",
      name: "gmarket",
      description: lang === "ko" ? "Gmarket 폰트 스타일" : "Gmarket font style",
      type: <>{gmarketTypeTags}</>,
      default: "-"
    },
    {
      key: "suite",
      name: "suite",
      description: lang === "ko" ? "Suite 폰트 스타일" : "Suite font style",
      type: <>{suiteTypeTags}</>,
      default: "-"
    },
    {
      key: "fontFamily",
      name: "fontFamily",
      description: lang === "ko" ? "커스텀 폰트 패밀리" : "Custom font family",
      type: "string",
      default: "-"
    },
    {
      key: "size",
      name: "size",
      description: lang === "ko" ? "텍스트 크기" : "Text size",
      type: <>{fontSizeTypeTags}</>,
      default: <Tag>base</Tag>
    },
    {
      key: "weight",
      name: "weight",
      description: lang === "ko" ? "텍스트 굵기" : "Text weight",
      type: <>{fontWeightTypeTags}</>,
      default: <Tag>normal</Tag>
    },
    {
      key: "as",
      name: "as",
      description: lang === "ko" ? "HTML 태그" : "HTML tag",
      type: "string",
      default: "span"
    },
    {
      key: "color",
      name: "color",
      description:
        lang === "ko"
          ? "텍스트 색상(palette값 또는 HEX code)"
          : "Text color (palette value or HEX code)",
      type: "string",
      default: "neutral-8"
    },
    {
      key: "style",
      name: "style",
      description:
        lang === "ko"
          ? "컨테이너에 적용할 추가 스타일"
          : "Additional styles for the container",
      type: "CSSProperties",
      default: "{}"
    },
    {
      key: "className",
      name: "className",
      description:
        lang === "ko"
          ? "컨테이너에 적용할 추가 클래스명"
          : "Additional class name for the container",
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
