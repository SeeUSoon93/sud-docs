"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Tag, Card, TimePicker, Radio } from "sud-ui";

import React, { useState } from "react";

export default function TimePickerPage() {
  const { isMobile } = useMobile();

  const name = "TimePicker";
  const description = <>날짜를 선택할 수 있는 컴포넌트입니다.</>;

  const IMPORT_COMMAND = "import { TimePicker } from 'sud-ui';";

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
      description: "기본적인 버튼 컴포넌트입니다.",
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
      description: "비활성화 상태의 버튼 컴포넌트입니다.",
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
      description: "읽기 전용 상태의 버튼 컴포넌트입니다.",
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
      description: "TimePicker 의 크기를 설정할 수 있습니다.",
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
      description: "TimePicker 의 모양을 설정할 수 있습니다.",
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
      description: "TimePicker 의 에러 상태를 설정할 수 있습니다.",
      render: (
        <>
          <TimePicker
            value={errorValue}
            onChange={setErrorValue}
            error
            errorText="에러 메시지"
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
      errorText="에러 메시지"
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
      errorText="에러 메시지"
    />
  );
}`
    },
    {
      title: "Range Usage",
      description: "TimePicker 의 범위 선택 상태를 설정할 수 있습니다.",
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
      description: "TimePicker 의 포맷을 설정할 수 있습니다.",
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
      description: "12시간제 사용 여부를 설정할 수 있습니다.",
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
      description: "분 단위 선택 단계를 설정할 수 있습니다.",
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
      description: "선택된 시간 값",
      type: "Date | { startTime: Date, endTime: Date }",
      default: "-"
    },
    {
      key: "onChange",
      name: "onChange",
      description: "시간이 변경될 때 호출되는 함수",
      type: "(value: Date | { startTime: Date, endTime: Date }, text: string) => void",
      default: "() => {}"
    },
    {
      key: "colorType",
      name: "colorType",
      description: "TimePicker의 색상 타입",
      type: "string",
      default: "default"
    },
    {
      key: "shape",
      name: "shape",
      description: "TimePicker의 모양",
      type: "string",
      default: "rounded"
    },
    {
      key: "shadow",
      name: "shadow",
      description: "TimePicker의 그림자 크기",
      type: "string",
      default: "sm"
    },
    {
      key: "size",
      name: "size",
      description: "TimePicker의 크기",
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
      default: "시간 선택"
    },
    {
      key: "format",
      name: "format",
      description: "시간 포맷",
      type: "string",
      default: "HH:mm:ss"
    },
    {
      key: "range",
      name: "range",
      description: "시간 범위 선택 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "placement",
      name: "placement",
      description: "시간 선택 팝업의 위치",
      type: "string",
      default: "top"
    },
    {
      key: "showSecond",
      name: "showSecond",
      description: "초 단위 표시 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "use12Hours",
      name: "use12Hours",
      description: "12시간제 사용 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "step",
      name: "step",
      description: "시간 선택 단계",
      type: "number",
      default: "1"
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
      key: "timePickerProps",
      name: "timePickerProps",
      description: "TimeSelector 컴포넌트에 전달되는 props",
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
