"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Tag, Spinner, DotSpinner, Typography } from "sud-ui";
import { useLang } from "../../_lib/context/langContext";
import { tagRender } from "../../_lib/components/common/render";
import { tagColorTypeTags } from "../../_lib/components/common/defaultType";

export default function SpinPage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();
  const name = "Spinner & DotSpinner";
  const description =
    lang === "ko" ? (
      <>로딩 상태를 표시하는 스피너 컴포넌트입니다.</>
    ) : (
      <>A component that displays a spinner loading state.</>
    );

  const IMPORT_COMMAND = "import { Spinner, DotSpinner } from 'sud-ui';";

  const whenToUse =
    lang === "ko"
      ? ["페이지 또는 데이터의 로딩 상태를 표시할 때"]
      : ["When you need to display the loading state of a page or data."];

  const examples = [
    {
      title: "Basic Spinner Usage",
      render: (
        <div className="flex jus-cen">
          <Spinner />
        </div>
      ),
      description: lang === "ko" ? "기본적인 사용방법입니다." : "Basic usage.",
      jscode: `import { Spinner } from "sud-ui";

export default function Example() {
  return (
    <div className="flex jus-cen">
      <Spinner />
    </div>
  );
}`,
      tscode: `import { Spinner } from "sud-ui";

export default function Example() {
  return (
    <div className="flex jus-cen">
      <Spinner />
    </div>
  );
}`
    },
    {
      title: "Basic DotSpinner Usage",
      render: (
        <div className="flex jus-cen">
          <DotSpinner />
        </div>
      ),
      description: lang === "ko" ? "기본적인 사용방법입니다." : "Basic usage.",
      jscode: `import { DotSpinner } from "sud-ui";

export default function Example() {
  return (
    <div className="flex jus-cen">
      <DotSpinner />
    </div>
  );
}`,
      tscode: `import { DotSpinner } from "sud-ui";

export default function Example() {
  return (
    <div className="flex jus-cen">
      <DotSpinner />
    </div>
  );
}`
    },
    {
      title: "Loading Text",
      render: (
        <div className="flex jus-cen">
          <Spinner text={"Loading..."} />
        </div>
      ),
      description:
        lang === "ko" ? "로딩 텍스트를 설정합니다." : "Set the loading text.",
      jscode: `import { Spinner } from "sud-ui";

export default function Example() {
  return (
    <div className="flex jus-cen">
      <Spinner text={"Loading..."} />
    </div>
  );
}`,
      tscode: `import { Spinner } from "sud-ui";

export default function Example() {
  return (
    <div className="flex jus-cen">
      <Spinner text={"Loading..."} />
    </div>
  );
}`
    },
    {
      title: "Loading Text with ReactNode",
      render: (
        <div className="flex jus-cen">
          <DotSpinner
            text={<Typography gmarket={"Medium"}>Loading...</Typography>}
          />
        </div>
      ),
      description:
        lang === "ko"
          ? "로딩 텍스트를 ReactNode로 설정합니다."
          : "Set the loading text to ReactNode.",
      jscode: `import { DotSpinner, Typography } from "sud-ui";

export default function Example() {
  return (
    <div className="flex jus-cen">
      <DotSpinner
        text={<Typography gmarket={"Medium"}>Loading...</Typography>}
      />
    </div>
  );
}`,
      tscode: `import { DotSpinner, Typography } from "sud-ui";

export default function Example() {
  return (
    <div className="flex jus-cen">
      <DotSpinner
        text={<Typography gmarket={"Medium"}>Loading...</Typography>}
      />
    </div>
  );
}`
    },
    {
      title: "Spinner Type",
      render: (
        <div className="flex jus-cen">
          <Spinner spinnerType={"elastic"} />
        </div>
      ),
      description:
        lang === "ko" ? "스피너 타입을 설정합니다." : "Set the spinner type.",
      jscode: `import { Spinner } from "sud-ui";

export default function Example() {
  return (
    <div className="flex jus-cen">
      <Spinner spinnerType={"elastic"} />
    </div>
  );
}`,
      tscode: `import { Spinner } from "sud-ui";

export default function Example() {
  return (
    <div className="flex jus-cen">
      <Spinner spinnerType={"elastic"} />
    </div>
  );
}`
    },
    {
      title: "Size & Color",
      render: (
        <div className="flex jus-cen">
          <DotSpinner size={60} colorType={"volcano"} />
        </div>
      ),
      description:
        lang === "ko"
          ? "스피너 크기와 색상을 설정합니다."
          : "Set the size and color of the spinner.",
      jscode: `import { DotSpinner } from "sud-ui";

export default function Example() {
  return (
    <div className="flex jus-cen">
      <DotSpinner size={60} colorType={"volcano"} />
    </div>
  );
}`,
      tscode: `import { DotSpinner } from "sud-ui";

export default function Example() {
  return (
    <div className="flex jus-cen">
      <DotSpinner size={60} colorType={"volcano"} />
    </div>
  );
}`
    }
  ];

  const howToUseTableData = [
    {
      key: "size",
      name: "size",
      description: lang === "ko" ? "스피너 크기" : "Size of the spinner",
      type: "number",
      default: "40"
    },
    {
      key: "colorType",
      name: "colorType",
      description:
        lang === "ko" ? "스피너 색상 타입" : "Color type of the spinner",
      type: tagColorTypeTags,
      default: <Tag>cerulean</Tag>
    },
    {
      key: "spinnerType",
      name: "spinnerType",
      description:
        lang === "ko"
          ? "스피너 타입(DotSpinner 제외)"
          : "Type of the spinner(Not DotSpinner)",
      type: tagRender(["default", "elastic"]),
      default: <Tag>default</Tag>
    },
    {
      key: "text",
      name: "text",
      description:
        lang === "ko"
          ? "로딩 텍스트 (boolean 또는 string 또는 ReactNode)"
          : "Loading text (boolean or string or ReactNode)",
      type: "boolean | string | ReactNode",
      default: "false"
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
