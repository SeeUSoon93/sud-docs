"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Tag, Card, DatePicker, Radio } from "sud-ui";

import React, { useState } from "react";

export default function DatePickerPage() {
  const { isMobile } = useMobile();

  const name = "DatePicker";
  const description = <>날짜를 선택할 수 있는 컴포넌트입니다.</>;

  const IMPORT_COMMAND = "import { DatePicker } from 'sud-ui';";

  const whenToUse = ["날짜를 선택할 때"];

  const [size, setSize] = useState("md");
  const [shape, setShape] = useState("rounded");

  const [value, setValue] = useState(new Date());
  const [sizeValue, setSizeValue] = useState(new Date());
  const [disabledValue, setDisabledValue] = useState(new Date());
  const [readOnlyValue, setReadOnlyValue] = useState(new Date());
  const [errorValue, setErrorValue] = useState(new Date());
  const [shapeValue, setShapeValue] = useState(new Date());
  const [rangeValue, setRangeValue] = useState(new Date());
  const [localeValue, setLocaleValue] = useState(new Date());
  const [formatValue, setFormatValue] = useState(new Date());
  const sizeOptions = [
    {
      label: "sm",
      value: "sm"
    },
    {
      label: "md",
      value: "md"
    },
    {
      label: "lg",
      value: "lg"
    }
  ];
  const shapeOptions = [
    {
      label: "rounded",
      value: "rounded"
    },
    {
      label: "square",
      value: "square"
    },
    {
      label: "capsule",
      value: "capsule"
    }
  ];

  const examples = [
    {
      title: "Basic Usage",
      description: "기본적인 버튼 컴포넌트입니다.",
      render: (
        <>
          <DatePicker value={value} onChange={setValue} />
        </>
      ),
      jscode: `import React, { useState } from "react";
import { DatePicker } from "sud-ui";

export default function Example() {
  const [value, setValue] = useState(new Date());

  return <DatePicker value={value} onChange={setValue} />;
}`,
      tscode: `import React, { useState } from "react";
import { DatePicker } from "sud-ui";

export default function Example(): JSX.Element {
  const [value, setValue] = useState<Date>(new Date());

  return <DatePicker value={value} onChange={setValue} />;
}`
    },
    {
      title: "Disabled Usage",
      description: "비활성화 상태의 버튼 컴포넌트입니다.",
      render: (
        <>
          <DatePicker
            value={disabledValue}
            onChange={setDisabledValue}
            disabled
          />
        </>
      ),
      jscode: `import React, { useState } from "react";
import { DatePicker } from "sud-ui";

export default function Example() {
  const [value, setValue] = useState(new Date());

  return <DatePicker value={value} onChange={setValue} disabled />;
}`,
      tscode: `import React, { useState } from "react";
import { DatePicker } from "sud-ui";

export default function Example(): JSX.Element {
  const [value, setValue] = useState<Date>(new Date());

  return <DatePicker value={value} onChange={setValue} disabled />;
}`
    },
    {
      title: "ReadOnly Usage",
      description: "읽기 전용 상태의 버튼 컴포넌트입니다.",
      render: (
        <>
          <DatePicker
            value={readOnlyValue}
            onChange={setReadOnlyValue}
            readOnly
          />
        </>
      ),
      jscode: `import React, { useState } from "react";
import { DatePicker } from "sud-ui";

export default function Example() {
  const [value, setValue] = useState(new Date());

  return <DatePicker value={value} onChange={setValue} readOnly />;
}`,
      tscode: `import React, { useState } from "react";
import { DatePicker } from "sud-ui";

export default function Example(): JSX.Element {
  const [value, setValue] = useState<Date>(new Date());

  return <DatePicker value={value} onChange={setValue} readOnly />;
}`
    },
    {
      title: "Locale Usage",
      description: "언어 설정을 할 수 있습니다.",
      render: (
        <>
          <DatePicker
            value={localeValue}
            onChange={setLocaleValue}
            locale="ko"
          />
        </>
      ),
      jscode: `import React, { useState } from "react";
import { DatePicker } from "sud-ui";

export default function Example() {
  const [value, setValue] = useState(new Date());

  return <DatePicker value={value} onChange={setValue} locale="ko" />;
}`,
      tscode: `import React, { useState } from "react";
import { DatePicker } from "sud-ui";

export default function Example(): JSX.Element {
  const [value, setValue] = useState<Date>(new Date());

  return <DatePicker value={value} onChange={setValue} locale="ko" />;
}`
    },
    {
      title: "Size",
      description: "DatePicker 의 크기를 설정할 수 있습니다.",
      render: (
        <div className="flex flex-col gap-20">
          <Card style={{ width: "100%" }} shadow="none" colorType="sub">
            <div className="flex jus-cen w-100">
              <Radio.Group
                options={sizeOptions}
                direction="horizontal"
                value={size}
                onChange={setSize}
              />
            </div>
          </Card>
          <DatePicker size={size} value={sizeValue} onChange={setSizeValue} />
        </div>
      ),
      jscode: `import React, { useState } from "react";
import { DatePicker, Radio } from "sud-ui";

export default function Example() {
  const [value, setValue] = useState(new Date());
  const [size, setSize] = useState("md");

  const sizeOptions = [
    { label: "sm", value: "sm" },
    { label: "md", value: "md" },
    { label: "lg", value: "lg" }
  ];

  return (
    <div>
      <Radio.Group
        options={sizeOptions}
        direction="horizontal"
        value={size}
        onChange={setSize}
      />
      <DatePicker size={size} value={value} onChange={setValue} />
    </div>
  );
}`,
      tscode: `import React, { useState } from "react";
import { DatePicker, Radio } from "sud-ui";

export default function Example(): JSX.Element {
  const [value, setValue] = useState<Date>(new Date());
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");

  const sizeOptions = [
    { label: "sm", value: "sm" },
    { label: "md", value: "md" },
    { label: "lg", value: "lg" }
  ];

  return (
    <div>
      <Radio.Group
        options={sizeOptions}
        direction="horizontal"
        value={size}
        onChange={setSize}
      />
      <DatePicker size={size} value={value} onChange={setValue} />
    </div>
  );
}`
    },
    {
      title: "Shape ",
      description: "DatePicker 의 모양을 설정할 수 있습니다.",
      render: (
        <div className="flex flex-col gap-20">
          <Card style={{ width: "100%" }} shadow="none" colorType="sub">
            <div className="flex jus-cen w-100">
              <Radio.Group
                options={shapeOptions}
                direction="horizontal"
                value={shape}
                onChange={setShape}
              />
            </div>
          </Card>
          <DatePicker
            shape={shape}
            value={shapeValue}
            onChange={setShapeValue}
          />
        </div>
      ),
      jscode: `import React, { useState } from "react";
import { DatePicker, Radio } from "sud-ui";

export default function Example() {
  const [value, setValue] = useState(new Date());
  const [shape, setShape] = useState("rounded");

  const shapeOptions = [
    { label: "rounded", value: "rounded" },
    { label: "square", value: "square" },
    { label: "capsule", value: "capsule" }
  ];

  return (
    <div>
      <Radio.Group
        options={shapeOptions}
        direction="horizontal"
        value={shape}
        onChange={setShape}
      />
      <DatePicker shape={shape} value={value} onChange={setValue} />
    </div>
  );
}`,
      tscode: `import React, { useState } from "react";
import { DatePicker, Radio } from "sud-ui";

export default function Example(): JSX.Element {
  const [value, setValue] = useState<Date>(new Date());
  const [shape, setShape] = useState<"rounded" | "square" | "capsule">("rounded");

  const shapeOptions = [
    { label: "rounded", value: "rounded" },
    { label: "square", value: "square" },
    { label: "capsule", value: "capsule" }
  ];

  return (
    <div>
      <Radio.Group
        options={shapeOptions}
        direction="horizontal"
        value={shape}
        onChange={setShape}
      />
      <DatePicker shape={shape} value={value} onChange={setValue} />
    </div>
  );
}`
    },
    {
      title: "Error Usage",
      description: "DatePicker 의 에러 상태를 설정할 수 있습니다.",
      render: (
        <>
          <DatePicker
            value={errorValue}
            onChange={setErrorValue}
            error
            errorText="에러 메시지"
          />
        </>
      ),
      jscode: `import React, { useState } from "react";
import { DatePicker } from "sud-ui";

export default function Example() {
  const [value, setValue] = useState(new Date());

  return (
    <DatePicker
      value={value}
      onChange={setValue}
      error
      errorText="에러 메시지"
    />
  );
}`,
      tscode: `import React, { useState } from "react";
import { DatePicker } from "sud-ui";

export default function Example(): JSX.Element {
  const [value, setValue] = useState<Date>(new Date());

  return (
    <DatePicker
      value={value}
      onChange={setValue}
      error
      errorText="에러 메시지"
    />
  );
}`
    },
    {
      title: "Range Usage",
      description: "DatePicker 의 범위 선택 상태를 설정할 수 있습니다.",
      render: (
        <>
          <DatePicker value={rangeValue} onChange={setRangeValue} range />
        </>
      ),
      jscode: `import React, { useState } from "react";
import { DatePicker } from "sud-ui";

export default function Example() {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date()
  });

  return <DatePicker value={value} onChange={setValue} range />;
}`,
      tscode: `import React, { useState } from "react";
import { DatePicker } from "sud-ui";

interface DateRange {
  startDate: Date;
  endDate: Date;
}

export default function Example(): JSX.Element {
  const [value, setValue] = useState<DateRange>({
    startDate: new Date(),
    endDate: new Date()
  });

  return <DatePicker value={value} onChange={setValue} range />;
}`
    },
    {
      title: "Formatting",
      description: "DatePicker 의 포맷을 설정할 수 있습니다.",
      render: (
        <>
          <DatePicker
            value={formatValue}
            onChange={setFormatValue}
            format="YYYY/MM/DD"
          />
        </>
      ),
      jscode: `import React, { useState } from "react";
import { DatePicker } from "sud-ui";

export default function Example() {
  const [value, setValue] = useState(new Date());

  return <DatePicker value={value} onChange={setValue} format="YYYY/MM/DD" />;
}`,
      tscode: `import React, { useState } from "react";
import { DatePicker } from "sud-ui";

export default function Example(): JSX.Element {
  const [value, setValue] = useState<Date>(new Date());

  return <DatePicker value={value} onChange={setValue} format="YYYY/MM/DD" />;
}`
    }
  ];

  const howToUseTableData = [
    {
      key: "value",
      name: "value",
      description: "선택된 날짜 값",
      type: "Date | { startDate: Date, endDate: Date }",
      default: "-"
    },
    {
      key: "onChange",
      name: "onChange",
      description: "날짜가 변경될 때 호출되는 함수",
      type: "(value: Date | { startDate: Date, endDate: Date }, text: string) => void",
      default: "() => {}"
    },
    {
      key: "colorType",
      name: "colorType",
      description: "DatePicker의 색상 타입",
      type: "string",
      default: "default"
    },
    {
      key: "shape",
      name: "shape",
      description: "DatePicker의 모양",
      type: "string",
      default: "rounded"
    },
    {
      key: "shadow",
      name: "shadow",
      description: "DatePicker의 그림자 크기",
      type: "string",
      default: "sm"
    },
    {
      key: "size",
      name: "size",
      description: "DatePicker의 크기",
      type: (
        <>
          <Tag>sm</Tag> ｜ <Tag>md</Tag> ｜ <Tag>lg</Tag>
        </>
      ),
      default: "md"
    },
    {
      key: "disabled",
      name: "disabled",
      description: "비활성화 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "readOnly",
      name: "readOnly",
      description: "읽기 전용 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "error",
      name: "error",
      description: "에러 상태",
      type: "boolean",
      default: "false"
    },
    {
      key: "errorText",
      name: "errorText",
      description: "에러 메시지",
      type: "string",
      default: "-"
    },
    {
      key: "className",
      name: "className",
      description: "추가 클래스명",
      type: "string",
      default: '""'
    },
    {
      key: "placeholder",
      name: "placeholder",
      description: "플레이스홀더 텍스트",
      type: "string",
      default: "날짜 선택"
    },
    {
      key: "format",
      name: "format",
      description: "날짜 포맷",
      type: "string",
      default: "YYYY-MM-DD"
    },
    {
      key: "range",
      name: "range",
      description: "날짜 범위 선택 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "placement",
      name: "placement",
      description: "캘린더 팝업의 위치",
      type: "string",
      default: "top"
    },
    {
      key: "locale",
      name: "locale",
      description: "언어 설정",
      type: "string",
      default: "en"
    },
    {
      key: "popConfirmProps",
      name: "popConfirmProps",
      description: "PopConfirm 컴포넌트에 전달되는 props",
      type: "object",
      default: "{}"
    },
    {
      key: "inputProps",
      name: "inputProps",
      description: "Input 컴포넌트에 전달되는 props",
      type: "object",
      default: "{}"
    },
    {
      key: "calendarProps",
      name: "calendarProps",
      description: "Calendar 컴포넌트에 전달되는 props",
      type: "object",
      default: "{}"
    },
    {
      key: "id",
      name: "id",
      description: "HTML id 속성",
      type: "string",
      default: "-"
    },
    {
      key: "ariaLabel",
      name: "ariaLabel",
      description: "접근성을 위한 레이블",
      type: "string",
      default: "placeholder와 동일"
    },
    {
      key: "ariaRequired",
      name: "ariaRequired",
      description: "필수 입력 여부",
      type: "boolean",
      default: "-"
    },
    {
      key: "ariaInvalid",
      name: "ariaInvalid",
      description: "유효하지 않은 상태 여부",
      type: "boolean",
      default: "-"
    },
    {
      key: "ariaDescribedby",
      name: "ariaDescribedby",
      description: "설명을 제공하는 요소의 id",
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
    />
  );
}
