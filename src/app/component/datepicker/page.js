"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { useLang } from "../../_lib/context/langContext";
import { Tag, Card, DatePicker, Radio } from "sud-ui";

import React, { useState } from "react";
import {
  borderTypeTags,
  defaultColorTypeTags,
  shadowTypeTags,
  shapeTypeTags
} from "../../_lib/components/common/defaultType";
import { tagRender } from "../../_lib/components/common/render";

export default function DatePickerPage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();

  const name = "DatePicker";
  const description = (
    <>
      {lang === "ko"
        ? "날짜를 선택할 수 있는 컴포넌트입니다."
        : "A component that allows you to select a date."}
    </>
  );

  const IMPORT_COMMAND = "import { DatePicker } from 'sud-ui';";

  const whenToUse = [
    lang === "ko" ? "날짜를 선택할 때" : "When you need to select a date."
  ];

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
      description: lang === "ko" ? "기본적인 사용 방법입니다." : "Basic usage.",
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
      description:
        lang === "ko"
          ? "비활성화 상태의 버튼 컴포넌트입니다."
          : "A disabled button component.",
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
      description:
        lang === "ko"
          ? "읽기 전용 상태의 버튼 컴포넌트입니다."
          : "A read-only button component.",
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
            locale="en"
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
      description:
        lang === "ko"
          ? "DatePicker 의 크기를 설정할 수 있습니다."
          : "You can set the size of the DatePicker.",
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
      description:
        lang === "ko"
          ? "DatePicker 의 모양을 설정할 수 있습니다."
          : "You can set the shape of the DatePicker.",
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
      description:
        lang === "ko"
          ? "DatePicker 의 에러 상태를 설정할 수 있습니다."
          : "You can set the error state of the DatePicker.",
      render: (
        <>
          <DatePicker
            value={errorValue}
            onChange={setErrorValue}
            error
            errorText="Error message"
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
      errorText="Error message"
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
      errorText="Error message"
    />
  );
}`
    },
    {
      title: "Range Usage",
      description:
        lang === "ko"
          ? "DatePicker 의 범위 선택 상태를 설정할 수 있습니다."
          : "You can set the range selection state of the DatePicker.",
      render: (
        <>
          <DatePicker
            value={rangeValue}
            onChange={setRangeValue}
            range
            placeholder="Range Select"
          />
        </>
      ),
      jscode: `import React, { useState } from "react";
import { DatePicker } from "sud-ui";

export default function Example() {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date()
  });

  return (
    <DatePicker
      value={value}
      onChange={setValue}
      range
      placeholder="Range Select"
    />
  );
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

  return (
    <DatePicker
      value={value}
      onChange={setValue}
      range
      placeholder="Range Select"
    />
  );
}`
    },
    {
      title: "Formatting",
      description:
        lang === "ko"
          ? "DatePicker 의 포맷을 설정할 수 있습니다."
          : "You can set the format of the DatePicker.",
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
      description:
        lang === "ko" ? "선택된 날짜 값" : "The selected date value.",
      type: "Date | { startDate: Date, endDate: Date }",
      default: "-"
    },
    {
      key: "onChange",
      name: "onChange",
      description:
        lang === "ko"
          ? "날짜가 변경될 때 호출되는 함수"
          : "The function called when the date changes.",
      type: "(value: Date | { startDate: Date, endDate: Date }, text: string) => void",
      default: "() => {}"
    },
    {
      key: "colorType",
      name: "colorType",
      description:
        lang === "ko"
          ? "DatePicker의 색상 타입"
          : "The color type of the DatePicker.",
      type: <>{defaultColorTypeTags}</>,
      default: <Tag>default</Tag>
    },
    ,
    {
      key: "background",
      name: "background",
      description:
        lang === "ko"
          ? "DatePicker의 배경색(palette값 또는 HEX code)"
          : "The background color of the DatePicker(palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "color",
      name: "color",
      description:
        lang === "ko"
          ? "DatePicker의 텍스트 색상(palette값 또는 HEX code)"
          : "The text color of the DatePicker(palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "border",
      name: "border",
      description:
        lang === "ko"
          ? "DatePicker의 테두리 표시 여부"
          : "The display of the DatePicker border",
      type: "boolean",
      default: "true"
    },
    {
      key: "borderColor",
      name: "borderColor",
      description:
        lang === "ko"
          ? "DatePicker의 테두리 색상(palette값 또는 HEX code)"
          : "The color of the DatePicker border(palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "borderType",
      name: "borderType",
      description:
        lang === "ko"
          ? "DatePicker의 테두리 스타일"
          : "The style of the DatePicker border",
      type: borderTypeTags,
      default: <Tag>solid</Tag>
    },
    {
      key: "borderWeight",
      name: "borderWeight",
      description:
        lang === "ko"
          ? "DatePicker의 테두리 두께"
          : "The thickness of the DatePicker border",
      type: "number",
      default: "1"
    },
    {
      key: "underline",
      name: "underline",
      description:
        lang === "ko"
          ? "DatePicker의 밑줄 표시 여부"
          : "The display of the DatePicker underline",
      type: "boolean",
      default: "false"
    },
    {
      key: "shape",
      name: "shape",
      description:
        lang === "ko" ? "DatePicker의 모양" : "The shape of the DatePicker.",
      type: <>{shapeTypeTags}</>,
      default: <Tag>rounded</Tag>
    },
    {
      key: "shadow",
      name: "shadow",
      description:
        lang === "ko"
          ? "DatePicker의 그림자 크기"
          : "The shadow size of the DatePicker.",
      type: <>{shadowTypeTags}</>,
      default: <Tag>sm</Tag>
    },
    {
      key: "size",
      name: "size",
      description:
        lang === "ko" ? "DatePicker의 크기" : "The size of the DatePicker.",
      type: <>{tagRender(["sm", "md", "lg"])}</>,
      default: <Tag>md</Tag>
    },
    {
      key: "disabled",
      name: "disabled",
      description:
        lang === "ko"
          ? "비활성화 여부"
          : "The disabled state of the DatePicker.",
      type: "boolean",
      default: "false"
    },
    {
      key: "readOnly",
      name: "readOnly",
      description:
        lang === "ko"
          ? "읽기 전용 여부"
          : "The read-only state of the DatePicker.",
      type: "boolean",
      default: "false"
    },
    {
      key: "error",
      name: "error",
      description:
        lang === "ko" ? "에러 상태" : "The error state of the DatePicker.",
      type: "boolean",
      default: "false"
    },
    {
      key: "errorText",
      name: "errorText",
      description:
        lang === "ko" ? "에러 메시지" : "The error message of the DatePicker.",
      type: "string",
      default: "-"
    },
    {
      key: "className",
      name: "className",
      description: lang === "ko" ? "추가 클래스명" : "Additional class name.",
      type: "string",
      default: '""'
    },
    {
      key: "placeholder",
      name: "placeholder",
      description:
        lang === "ko"
          ? "플레이스홀더 텍스트"
          : "The placeholder text of the DatePicker.",
      type: "string",
      default: "날짜 선택"
    },
    {
      key: "format",
      name: "format",
      description:
        lang === "ko" ? "날짜 포맷" : "The date format of the DatePicker.",
      type: "string",
      default: "YYYY-MM-DD"
    },
    {
      key: "range",
      name: "range",
      description:
        lang === "ko"
          ? "날짜 범위 선택 여부"
          : "The range selection state of the DatePicker.",
      type: "boolean",
      default: "false"
    },
    {
      key: "placement",
      name: "placement",
      description:
        lang === "ko"
          ? "캘린더 팝업의 위치"
          : "The placement of the calendar popup.",
      type: <>{tagRender(["top", "bottom", "left", "right"])}</>,
      default: <Tag>top</Tag>
    },
    {
      key: "locale",
      name: "locale",
      description:
        lang === "ko" ? "언어 설정" : "The language setting of the DatePicker.",
      type: <>{tagRender(["en", "ko"])}</>,
      default: <Tag>en</Tag>
    },
    {
      key: "popConfirmProps",
      name: "popConfirmProps",
      description:
        lang === "ko"
          ? "PopConfirm 컴포넌트에 전달되는 props"
          : "The props passed to the PopConfirm component.",
      type: "object",
      default: "{}"
    },
    {
      key: "inputProps",
      name: "inputProps",
      description:
        lang === "ko"
          ? "Input 컴포넌트에 전달되는 props"
          : "The props passed to the Input component.",
      type: "object",
      default: "{}"
    },
    {
      key: "calendarProps",
      name: "calendarProps",
      description:
        lang === "ko"
          ? "Calendar 컴포넌트에 전달되는 props"
          : "The props passed to the Calendar component.",
      type: "object",
      default: "{}"
    },
    {
      key: "id",
      name: "id",
      description: lang === "ko" ? "HTML id 속성" : "The HTML id attribute.",
      type: "string",
      default: "-"
    },
    {
      key: "ariaLabel",
      name: "ariaLabel",
      description:
        lang === "ko"
          ? "접근성을 위한 레이블"
          : "The aria label for accessibility.",
      type: "string",
      default: "-"
    },
    {
      key: "ariaRequired",
      name: "ariaRequired",
      description:
        lang === "ko" ? "필수 입력 여부" : "The required input state.",
      type: "boolean",
      default: "-"
    },
    {
      key: "ariaInvalid",
      name: "ariaInvalid",
      description:
        lang === "ko"
          ? "유효하지 않은 상태 여부"
          : "The invalid state of the DatePicker.",
      type: "boolean",
      default: "-"
    },
    {
      key: "ariaDescribedby",
      name: "ariaDescribedby",
      description:
        lang === "ko"
          ? "설명을 제공하는 요소의 id"
          : "The id of the element providing the description.",
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
