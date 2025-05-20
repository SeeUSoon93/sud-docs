"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Tag, Card, DatePicker, Radio, Rate } from "sud-ui";

import React, { useState } from "react";
import { MoodSadOutline, MoodSmileOutline, UserFill } from "sud-icons";

export default function RatePage() {
  const { isMobile } = useMobile();

  const name = "Rate";
  const description = <>별점을 선택할 수 있는 컴포넌트입니다.</>;

  const IMPORT_COMMAND = "import { Rate } from 'sud-ui';";

  const whenToUse = ["별점을 선택할 때"];

  const examples = [
    {
      title: "Basic Usage",
      description: "기본적인 사용 방법입니다.",
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
      description: "비활성화 상태입니다.",
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
      description: "별점 값 표시 여부입니다.",
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
      description: "하트 아이콘을 사용합니다.",
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
      description: "별점의 개수를 설정합니다.",
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
      description: "아이콘, 색상, 크기를 커스텀합니다.",
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
      description: "별점의 개수",
      type: "number",
      default: "5"
    },
    {
      key: "allowHalf",
      name: "allowHalf",
      description: "반 별점 선택 가능 여부",
      type: "boolean",
      default: "true"
    },
    {
      key: "defaultValue",
      name: "defaultValue",
      description: "기본 별점 값",
      type: "number",
      default: "0"
    },
    {
      key: "value",
      name: "value",
      description: "제어되는 별점 값",
      type: "number",
      default: "-"
    },
    {
      key: "onChange",
      name: "onChange",
      description: "별점이 변경될 때 호출되는 함수",
      type: "(value: number) => void",
      default: "() => {}"
    },
    {
      key: "disabled",
      name: "disabled",
      description: "비활성화 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "showValue",
      name: "showValue",
      description: "별점 값 표시 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "activeColor",
      name: "activeColor",
      description: "활성화된 별점의 색상",
      type: "string",
      default: "-"
    },
    {
      key: "inactiveColor",
      name: "inactiveColor",
      description: "비활성화된 별점의 색상",
      type: "string",
      default: "-"
    },
    {
      key: "size",
      name: "size",
      description: "별점의 크기",
      type: "number",
      default: "24"
    },
    {
      key: "className",
      name: "className",
      description: "추가 클래스명",
      type: "string",
      default: '""'
    },
    {
      key: "style",
      name: "style",
      description: "추가 스타일",
      type: "object",
      default: "{}"
    },
    {
      key: "ariaLabel",
      name: "ariaLabel",
      description: "접근성을 위한 레이블",
      type: "string",
      default: "별점 평가"
    },
    {
      key: "testId",
      name: "testId",
      description: "테스트를 위한 식별자",
      type: "string",
      default: "rate"
    },
    {
      key: "icon",
      name: "icon",
      description: "별점 아이콘 (star, heart 또는 JSX 요소)",
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
