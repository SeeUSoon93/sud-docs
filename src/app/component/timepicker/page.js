"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { useLang } from "../../_lib/context/langContext";
import { Tag, Card, TimePicker, Radio } from "sud-ui";

import React, { useState } from "react";
import {
  borderTypeTags,
  defaultColorTypeTags,
  shadowTypeTags,
  shapeTypeTags
} from "../../_lib/components/common/defaultType";
import { tagRender } from "../../_lib/components/common/render";

export default function TimePickerPage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();
  const name = "TimePicker";
  const description = (
    <>
      {lang === "ko"
        ? "날짜를 선택할 수 있는 컴포넌트입니다."
        : "A component that allows you to select a date."}
    </>
  );

  const IMPORT_COMMAND = "import { TimePicker } from 'sud-ui';";

  const whenToUse =
    lang === "ko" ? ["날짜를 선택할 때"] : ["When selecting a date"];

  const [size, setSize] = useState("md");
  const [shape, setShape] = useState("rounded");

  const [value, setValue] = useState(new Date());
  const [sizeValue, setSizeValue] = useState(new Date());
  const [disabledValue, setDisabledValue] = useState(new Date());
  const [readOnlyValue, setReadOnlyValue] = useState(new Date());
  const [errorValue, setErrorValue] = useState(new Date());
  const [shapeValue, setShapeValue] = useState(new Date());
  const [rangeValue, setRangeValue] = useState(new Date());
  const [formatValue, setFormatValue] = useState(new Date());
  const [use12HoursValue, setUse12HoursValue] = useState(false);
  const [stepValue, setStepValue] = useState(1);

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
          <TimePicker value={value} onChange={setValue} />
        </>
      ),
      jscode: `import React, { useState } from "react";
import { TimePicker } from "sud-ui";

export default function Example() {
  const [value, setValue] = useState(new Date());

  return <TimePicker value={value} onChange={setValue} />;
}`,
      tscode: `import React, { useState } from "react";
import { TimePicker } from "sud-ui";

export default function Example(): JSX.Element {
  const [value, setValue] = useState<Date>(new Date());

  return <TimePicker value={value} onChange={setValue} />;
}`
    },
    {
      title: "Disabled Usage",
      description:
        lang === "ko"
          ? "비활성화 상태의 버튼 컴포넌트입니다."
          : "Disabled button component.",
      render: (
        <>
          <TimePicker
            value={disabledValue}
            onChange={setDisabledValue}
            disabled
          />
        </>
      ),
      jscode: `import React, { useState } from "react";
import { TimePicker } from "sud-ui";

export default function Example() {
  const [value, setValue] = useState(new Date());

  return <TimePicker value={value} onChange={setValue} disabled />;
}`,
      tscode: `import React, { useState } from "react";
import { TimePicker } from "sud-ui";

export default function Example(): JSX.Element {
  const [value, setValue] = useState<Date>(new Date());

  return <TimePicker value={value} onChange={setValue} disabled />;
}`
    },
    {
      title: "ReadOnly Usage",
      description:
        lang === "ko"
          ? "읽기 전용 상태의 버튼 컴포넌트입니다."
          : "Read-only button component.",
      render: (
        <>
          <TimePicker
            value={readOnlyValue}
            onChange={setReadOnlyValue}
            readOnly
          />
        </>
      ),
      jscode: `import React, { useState } from "react";
import { TimePicker } from "sud-ui";

export default function Example() {
  const [value, setValue] = useState(new Date());

  return <TimePicker value={value} onChange={setValue} readOnly />;
}`,
      tscode: `import React, { useState } from "react";
import { TimePicker } from "sud-ui";

export default function Example(): JSX.Element {
  const [value, setValue] = useState<Date>(new Date());

  return <TimePicker value={value} onChange={setValue} readOnly />;
}`
    },

    {
      title: "Size",
      description:
        lang === "ko"
          ? "TimePicker 의 크기를 설정할 수 있습니다."
          : "Set the size of the TimePicker.",
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
          <TimePicker size={size} value={sizeValue} onChange={setSizeValue} />
        </div>
      ),
      jscode: `import React, { useState } from "react";
import { TimePicker, Radio } from "sud-ui";

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
      <TimePicker size={size} value={value} onChange={setValue} />
    </div>
  );
}`,
      tscode: `import React, { useState } from "react";
import { TimePicker, Radio } from "sud-ui";

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
      <TimePicker size={size} value={value} onChange={setValue} />
    </div>
  );
}`
    },
    {
      title: "Shape ",
      description:
        lang === "ko"
          ? "TimePicker 의 모양을 설정할 수 있습니다."
          : "Set the shape of the TimePicker.",
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
          <TimePicker
            shape={shape}
            value={shapeValue}
            onChange={setShapeValue}
          />
        </div>
      ),
      jscode: `import React, { useState } from "react";
import { TimePicker, Radio } from "sud-ui";

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
      <TimePicker shape={shape} value={value} onChange={setValue} />
    </div>
  );
}`,
      tscode: `import React, { useState } from "react";
import { TimePicker, Radio } from "sud-ui";

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
      <TimePicker shape={shape} value={value} onChange={setValue} />
    </div>
  );
}`
    },
    {
      title: "Error Usage",
      description:
        lang === "ko"
          ? "TimePicker 의 에러 상태를 설정할 수 있습니다."
          : "Set the error state of the TimePicker.",
      render: (
        <>
          <TimePicker
            value={errorValue}
            onChange={setErrorValue}
            error
            errorText="error message"
          />
        </>
      ),
      jscode: `import React, { useState } from "react";
import { TimePicker } from "sud-ui";

export default function Example() {
  const [value, setValue] = useState(new Date());

  return (
    <TimePicker
      value={value}
      onChange={setValue}
      error
      errorText="error message"
    />
  );
}`,
      tscode: `import React, { useState } from "react";
import { TimePicker } from "sud-ui";

export default function Example(): JSX.Element {
  const [value, setValue] = useState<Date>(new Date());

  return (
    <TimePicker
      value={value}
      onChange={setValue}
      error
      errorText="error message"
    />
  );
}`
    },
    {
      title: "Range Usage",
      description:
        lang === "ko"
          ? "TimePicker 의 범위 선택 상태를 설정할 수 있습니다."
          : "Set the range selection state of the TimePicker.",
      render: (
        <>
          <TimePicker value={rangeValue} onChange={setRangeValue} range />
        </>
      ),
      jscode: `import React, { useState } from "react";
import { TimePicker } from "sud-ui";

export default function Example() {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date()
  });

  return <TimePicker value={value} onChange={setValue} range />;
}`,
      tscode: `import React, { useState } from "react";
import { TimePicker } from "sud-ui";

interface DateRange {
  startDate: Date;
  endDate: Date;
}

export default function Example(): JSX.Element {
  const [value, setValue] = useState<DateRange>({
    startDate: new Date(),
    endDate: new Date()
  });

  return <TimePicker value={value} onChange={setValue} range />;
}`
    },
    {
      title: "Formatting",
      description:
        lang === "ko"
          ? "TimePicker 의 포맷을 설정할 수 있습니다."
          : "Set the format of the TimePicker.",
      render: (
        <>
          <TimePicker
            value={formatValue}
            onChange={setFormatValue}
            format="HH시mm분ss초"
          />
        </>
      ),
      jscode: `import React, { useState } from "react";
import { TimePicker } from "sud-ui";

export default function Example() {
  const [value, setValue] = useState(new Date());

  return <TimePicker value={value} onChange={setValue} format="YYYY/MM/DD" />;
}`,
      tscode: `import React, { useState } from "react";
import { TimePicker } from "sud-ui";

export default function Example(): JSX.Element {
  const [value, setValue] = useState<Date>(new Date());

  return <TimePicker value={value} onChange={setValue} format="YYYY/MM/DD" />;
}`
    },
    {
      title: "12Hours Usage",
      description:
        lang === "ko"
          ? "12시간제 사용 여부를 설정할 수 있습니다."
          : "Set the 12-hour format usage.",
      render: (
        <>
          <TimePicker
            value={use12HoursValue}
            onChange={setUse12HoursValue}
            use12Hours
          />
        </>
      ),
      jscode: `import React, { useState } from "react";
import { TimePicker } from "sud-ui";

export default function Example() {
  const [value, setValue] = useState(new Date());

  return <TimePicker value={value} onChange={setValue} use12Hours />;
}`,
      tscode: `import React, { useState } from "react";
import { TimePicker } from "sud-ui";

export default function Example(): JSX.Element {
  const [value, setValue] = useState<Date>(new Date());

  return <TimePicker value={value} onChange={setValue} use12Hours />;
}`
    },
    {
      title: "Step Usage",
      description:
        lang === "ko"
          ? "분 단위 선택 단계를 설정할 수 있습니다."
          : "Set the minute unit selection step.",
      render: (
        <>
          <TimePicker value={stepValue} onChange={setStepValue} step={10} />
        </>
      ),
      jscode: `import React, { useState } from "react";
import { TimePicker } from "sud-ui";

export default function Example() {
  const [value, setValue] = useState(new Date());

  return <TimePicker value={value} onChange={setValue} step={10} />;
}`,
      tscode: `import React, { useState } from "react";
import { TimePicker } from "sud-ui";

export default function Example(): JSX.Element {
  const [value, setValue] = useState<Date>(new Date());

  return <TimePicker value={value} onChange={setValue} step={10} />;
}`
    }
  ];

  const howToUseTableData = [
    {
      key: "value",
      name: "value",
      description: lang === "ko" ? "선택된 시간 값" : "The selected time value",
      type: "Date | { startTime: Date, endTime: Date }",
      default: "-"
    },
    {
      key: "onChange",
      name: "onChange",
      description:
        lang === "ko"
          ? "시간이 변경될 때 호출되는 함수"
          : "The function called when the time changes",
      type: "(value: Date | { startTime: Date, endTime: Date }, text: string) => void",
      default: "() => {}"
    },
    {
      key: "colorType",
      name: "colorType",
      description:
        lang === "ko"
          ? "TimePicker의 색상 타입"
          : "The color type of the TimePicker",
      type: defaultColorTypeTags,
      default: <Tag>default</Tag>
    },
    {
      key: "background",
      name: "background",
      description:
        lang === "ko"
          ? "TimePicker의 배경색(palette값 또는 HEX code)"
          : "The background color of the TimePicker(palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "color",
      name: "color",
      description:
        lang === "ko"
          ? "TimePicker의 텍스트 색상(palette값 또는 HEX code)"
          : "The text color of the TimePicker(palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "border",
      name: "border",
      description:
        lang === "ko"
          ? "TimePicker의 테두리 표시 여부"
          : "The display of the TimePicker border",
      type: "boolean",
      default: "true"
    },
    {
      key: "borderColor",
      name: "borderColor",
      description:
        lang === "ko"
          ? "TimePicker의 테두리 색상(palette값 또는 HEX code)"
          : "The color of the TimePicker border(palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "borderType",
      name: "borderType",
      description:
        lang === "ko"
          ? "TimePicker의 테두리 스타일"
          : "The style of the TimePicker border",
      type: borderTypeTags,
      default: <Tag>solid</Tag>
    },
    {
      key: "borderWeight",
      name: "borderWeight",
      description:
        lang === "ko"
          ? "TimePicker의 테두리 두께"
          : "The thickness of the TimePicker border",
      type: "number",
      default: "1"
    },
    {
      key: "underline",
      name: "underline",
      description:
        lang === "ko"
          ? "TimePicker의 밑줄 표시 여부"
          : "The display of the TimePicker underline",
      type: "boolean",
      default: "false"
    },

    {
      key: "shape",
      name: "shape",
      description:
        lang === "ko" ? "TimePicker의 모양" : "The shape of the TimePicker",
      type: shapeTypeTags,
      default: <Tag>rounded</Tag>
    },
    {
      key: "shadow",
      name: "shadow",
      description:
        lang === "ko"
          ? "TimePicker의 그림자 크기"
          : "The shadow size of the TimePicker",
      type: shadowTypeTags,
      default: <Tag>sm</Tag>
    },
    {
      key: "size",
      name: "size",
      description:
        lang === "ko" ? "TimePicker의 크기" : "The size of the TimePicker",
      type: tagRender(["sm", "md", "lg"]),
      default: <Tag>md</Tag>
    },
    {
      key: "disabled",
      name: "disabled",
      description:
        lang === "ko"
          ? "비활성화 여부"
          : "The disabled state of the TimePicker",
      type: "boolean",
      default: "false"
    },
    {
      key: "readOnly",
      name: "readOnly",
      description:
        lang === "ko"
          ? "읽기 전용 여부"
          : "The read-only state of the TimePicker",
      type: "boolean",
      default: "false"
    },
    {
      key: "error",
      name: "error",
      description:
        lang === "ko" ? "에러 상태" : "The error state of the TimePicker",
      type: "boolean",
      default: "false"
    },
    {
      key: "errorText",
      name: "errorText",
      description:
        lang === "ko" ? "에러 메시지" : "The error message of the TimePicker",
      type: "string",
      default: "-"
    },
    {
      key: "className",
      name: "className",
      description:
        lang === "ko" ? "추가 클래스명" : "The additional class name",
      type: "string",
      default: "-"
    },
    {
      key: "placeholder",
      name: "placeholder",
      description:
        lang === "ko" ? "플레이스홀더 텍스트" : "The placeholder text",
      type: "string",
      default: "시간 선택"
    },
    {
      key: "format",
      name: "format",
      description: lang === "ko" ? "시간 포맷" : "The time format",
      type: "string",
      default: "HH:mm:ss"
    },
    {
      key: "range",
      name: "range",
      description:
        lang === "ko" ? "시간 범위 선택 여부" : "The range selection state",
      type: "boolean",
      default: "false"
    },
    {
      key: "placement",
      name: "placement",
      description:
        lang === "ko"
          ? "시간 선택 팝업의 위치"
          : "The position of the time selection popup",
      type: "string",
      default: "top"
    },
    {
      key: "showSecond",
      name: "showSecond",
      description:
        lang === "ko" ? "초 단위 표시 여부" : "The display of the second unit",
      type: "boolean",
      default: "false"
    },
    {
      key: "use12Hours",
      name: "use12Hours",
      description:
        lang === "ko" ? "12시간제 사용 여부" : "The 12-hour format usage",
      type: "boolean",
      default: "false"
    },
    {
      key: "step",
      name: "step",
      description: lang === "ko" ? "시간 선택 단계" : "The time selection step",
      type: "number",
      default: "1"
    },
    {
      key: "popConfirmProps",
      name: "popConfirmProps",
      description:
        lang === "ko"
          ? "PopConfirm 컴포넌트에 전달되는 props"
          : "The props passed to the PopConfirm component",
      type: "object",
      default: "{}"
    },
    {
      key: "inputProps",
      name: "inputProps",
      description:
        lang === "ko"
          ? "Input 컴포넌트에 전달되는 props"
          : "The props passed to the Input component",
      type: "object",
      default: "{}"
    },
    {
      key: "timePickerProps",
      name: "timePickerProps",
      description:
        lang === "ko"
          ? "TimeSelector 컴포넌트에 전달되는 props"
          : "The props passed to the TimeSelector component",
      type: "object",
      default: "{}"
    },
    {
      key: "id",
      name: "id",
      description: lang === "ko" ? "HTML id 속성" : "The HTML id attribute",
      type: "string",
      default: "-"
    },
    {
      key: "ariaLabel",
      name: "ariaLabel",
      description:
        lang === "ko" ? "접근성을 위한 레이블" : "The accessibility label",
      type: "string",
      default: "placeholder와 동일"
    },
    {
      key: "ariaRequired",
      name: "ariaRequired",
      description:
        lang === "ko" ? "필수 입력 여부" : "The required input state",
      type: "boolean",
      default: "-"
    },
    {
      key: "ariaInvalid",
      name: "ariaInvalid",
      description:
        lang === "ko" ? "유효하지 않은 상태 여부" : "The invalid state",
      type: "boolean",
      default: "-"
    },
    {
      key: "ariaDescribedby",
      name: "ariaDescribedby",
      description:
        lang === "ko"
          ? "설명을 제공하는 요소의 id"
          : "The id of the element providing the description",
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
