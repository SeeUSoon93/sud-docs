"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { useLang } from "../../_lib/context/langContext";
import { Rate } from "sud-ui";

import { MoodSadOutline, MoodSmileOutline, UserFill } from "sud-icons";

export default function RatePage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();

  const name = "Rate";
  const description = (
    <>
      {lang === "ko"
        ? "점수를 선택할 수 있는 컴포넌트입니다."
        : "A component that allows you to select a rating."}
    </>
  );

  const IMPORT_COMMAND = "import { Rate } from 'sud-ui';";

  const whenToUse =
    lang === "ko"
      ? ["점수를 선택할 때"]
      : ["When you need to select a rating."];

  const examples = [
    {
      title: "Basic Usage",
      description: lang === "ko" ? "기본적인 사용 방법입니다." : "Basic usage.",
      render: (
        <>
          <Rate />
        </>
      ),
      jscode: `import React, { useState } from "react";
import { Rate } from "sud-ui";

export default function Example() {
  const [value, setValue] = useState(0);

  return <Rate value={value} onChange={setValue} />;
}`,
      tscode: `import React, { useState } from "react";
import { Rate } from "sud-ui";

export default function Example(): JSX.Element {
  const [value, setValue] = useState<number>(0);

  return <Rate value={value} onChange={setValue} />;
}`
    },
    {
      title: "Disabled",
      description:
        lang === "ko" ? "비활성화 할 수 있습니다." : "Can be disabled.",
      render: (
        <>
          <Rate disabled defaultValue={3} />
        </>
      ),
      jscode: `import React from "react";
import { Rate } from "sud-ui";

export default function Example() {
  return <Rate disabled defaultValue={3} />;
}`,
      tscode: `import React from "react";
import { Rate } from "sud-ui";

export default function Example(): JSX.Element {
  return <Rate disabled defaultValue={3} />;
}`
    },
    {
      title: "Show Value",
      description:
        lang === "ko"
          ? "별점 값 표시 여부를 선택할 수 있습니다."
          : "Can select whether to display the rating value.",
      render: (
        <>
          <Rate showValue />
        </>
      ),
      jscode: `import React from "react";
import { Rate } from "sud-ui";

export default function Example() {
  return <Rate showValue />;
}`,
      tscode: `import React from "react";
import { Rate } from "sud-ui";

export default function Example(): JSX.Element {
  return <Rate showValue />;
}`
    },
    {
      title: "Heart Icon",
      description:
        lang === "ko" ? "하트 아이콘을 사용합니다." : "Use the heart icon.",
      render: (
        <>
          <Rate icon="heart" />
        </>
      ),
      jscode: `import React from "react";
import { Rate } from "sud-ui";

export default function Example() {
  return <Rate icon="heart" />;
}`,
      tscode: `import React from "react";
import { Rate } from "sud-ui";

export default function Example(): JSX.Element {
  return <Rate icon="heart" />;
}`
    },
    {
      title: "Count",
      description:
        lang === "ko"
          ? "별점의 개수를 설정합니다."
          : "Set the number of stars.",
      render: (
        <>
          <Rate count={100} showValue />
        </>
      ),
      jscode: `import React from "react";
import { Rate } from "sud-ui";

export default function Example() {
  return <Rate count={100} showValue />;
}`,
      tscode: `import React from "react";
import { Rate } from "sud-ui";

export default function Example(): JSX.Element {
  return <Rate count={100} showValue />;
}`
    },
    {
      title: "Customize",
      description:
        lang === "ko"
          ? "아이콘, 색상, 크기를 커스텀합니다."
          : "Customize the icon, color, and size.",
      render: (
        <div className="flex flex-col jus-cen gap-20">
          <Rate icon={<UserFill />} size={32} />
          <Rate
            icon={<MoodSmileOutline />}
            size={32}
            activeColor={"lime-7"}
            inactiveColor={"lime-3"}
          />
          <Rate
            icon={<MoodSadOutline />}
            size={32}
            activeColor={"plum-6"}
            inactiveColor={"plum-1"}
          />
        </div>
      ),
      jscode: `import React from "react";
import { Rate } from "sud-ui";
import { UserFill, MoodSmileOutline, MoodSadOutline } from "sud-icons";

export default function Example() {
  return (
    <div className="flex flex-col jus-cen gap-20">
      <Rate icon={<UserFill />} size={32} />
      <Rate
        icon={<MoodSmileOutline />}
        size={32}
        activeColor={"lime-7"}
        inactiveColor={"lime-3"}
      />
      <Rate
        icon={<MoodSadOutline />}
        size={32}
        activeColor={"plum-6"}
        inactiveColor={"plum-1"}
      />
    </div>
  );
}`,
      tscode: `import React from "react";
import { Rate } from "sud-ui";
import { UserFill, MoodSmileOutline, MoodSadOutline } from "sud-icons";

export default function Example(): JSX.Element {
  return (
    <div className="flex flex-col jus-cen gap-20">
      <Rate icon={<UserFill />} size={32} />
      <Rate
        icon={<MoodSmileOutline />}
        size={32}
        activeColor={"lime-7"}
        inactiveColor={"lime-3"}
      />
      <Rate
        icon={<MoodSadOutline />}
        size={32}
        activeColor={"plum-6"}
        inactiveColor={"plum-1"}
      />
    </div>
  );
}`
    }
  ];

  const howToUseTableData = [
    {
      key: "count",
      name: "count",
      description: lang === "ko" ? "별점의 개수" : "The number of stars.",
      type: "number",
      default: "5"
    },
    {
      key: "allowHalf",
      name: "allowHalf",
      description:
        lang === "ko" ? "반 별점 선택 가능 여부" : "Can select half stars.",
      type: "boolean",
      default: "true"
    },
    {
      key: "defaultValue",
      name: "defaultValue",
      description: lang === "ko" ? "기본 별점 값" : "The default rating value.",
      type: "number",
      default: "0"
    },
    {
      key: "value",
      name: "value",
      description:
        lang === "ko" ? "제어되는 별점 값" : "The controlled rating value.",
      type: "number",
      default: "-"
    },
    {
      key: "onChange",
      name: "onChange",
      description:
        lang === "ko"
          ? "별점이 변경될 때 호출되는 함수"
          : "The function called when the rating changes.",
      type: "(value: number) => void",
      default: "() => {}"
    },
    {
      key: "disabled",
      name: "disabled",
      description: lang === "ko" ? "비활성화 여부" : "Whether it is disabled.",
      type: "boolean",
      default: "false"
    },
    {
      key: "showValue",
      name: "showValue",
      description:
        lang === "ko"
          ? "별점 값 표시 여부"
          : "Whether to display the rating value.",
      type: "boolean",
      default: "false"
    },
    {
      key: "activeColor",
      name: "activeColor",
      description:
        lang === "ko"
          ? "활성화된 별점의 색상"
          : "The color of the active star.",
      type: "string",
      default: "-"
    },
    {
      key: "inactiveColor",
      name: "inactiveColor",
      description:
        lang === "ko"
          ? "비활성화된 별점의 색상"
          : "The color of the inactive star.",
      type: "string",
      default: "-"
    },
    {
      key: "size",
      name: "size",
      description: lang === "ko" ? "별점의 크기" : "The size of the star.",
      type: "number",
      default: "24"
    },
    {
      key: "className",
      name: "className",
      description: lang === "ko" ? "추가 클래스명" : "Additional class name.",
      type: "string",
      default: '""'
    },
    {
      key: "style",
      name: "style",
      description: lang === "ko" ? "추가 스타일" : "Additional style.",
      type: "object",
      default: "{}"
    },
    {
      key: "ariaLabel",
      name: "ariaLabel",
      description:
        lang === "ko" ? "접근성을 위한 레이블" : "The label for accessibility.",
      type: "string",
      default: "별점 평가"
    },
    {
      key: "icon",
      name: "icon",
      description:
        lang === "ko"
          ? "별점 아이콘 (star, heart 또는 JSX 요소)"
          : "The star icon (star, heart or JSX element).",
      type: "string | ReactElement",
      default: "star"
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
