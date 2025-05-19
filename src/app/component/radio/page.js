"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Tag, Radio, Avatar } from "sud-ui";

import React, { useState } from "react";

export default function RadioPage() {
  const { isMobile } = useMobile();

  const name = "Radio";
  const description = (
    <>여러 옵션 중 하나를 선택할 수 있는 라디오 버튼 컴포넌트입니다.</>
  );

  const IMPORT_COMMAND = "import { Radio } from 'sud-ui';";

  const whenToUse = [
    "여러 옵션 중 하나를 선택할 때",
    "사용자의 선택이나 결정을 확인할 때"
  ];

  const basicOptions = [
    {
      label: <Avatar />,
      value: "radio1"
    },
    {
      label: <Avatar sample={2} />,
      value: "radio2"
    },
    {
      label: <Avatar sample={3} />,
      value: "radio3"
    },
    {
      label: <Avatar sample={4} />,
      value: "radio4"
    },
    {
      label: <Avatar sample={5} />,
      value: "radio5"
    }
  ];
  const [value, setValue] = useState(null);
  const [disableValue, setDisableValue] = useState(null);
  const disableOptions = [
    {
      label: "label 1",
      value: "radio1"
    },
    {
      label: "disable option",
      value: "radio2"
    },
    {
      label: "label 3",
      value: "radio3"
    }
  ];
  const disableOptions2 = [
    {
      label: "label 1",
      value: "radio1"
    },
    {
      label: "disable option",
      value: "radio2"
    },
    {
      label: "label 3",
      value: "radio3",
      disabled: true
    }
  ];
  const examples = [
    {
      title: "Basic Usage",
      description: "기본적인 버튼 컴포넌트입니다.",
      render: (
        <div>
          <Radio>Radio</Radio>
        </div>
      ),
      jscode: `import React, { useState } from "react";
import { Radio } from "sud-ui";

export default function Example() {
  return (
    <div>
      <Radio>Radio</Radio>
    </div>
  );
}`,
      tscode: `import React, { useState } from "react";
import { Radio } from "sud-ui";

export default function Example(): JSX.Element {
  return (
    <div>
      <Radio>Radio</Radio>
    </div>
  );
}`
    },
    {
      title: "Disabled Radio",
      description: "비활성화된 라디오 버튼입니다.",
      render: (
        <div>
          <Radio disabled>Disabled Radio</Radio>
        </div>
      ),
      jscode: `import React from "react";
import { Radio } from "sud-ui";

export default function Example() {
  return (
    <div>
      <Radio disabled>Disabled Radio</Radio>
    </div>
  );
}`,
      tscode: `import React from "react";
import { Radio } from "sud-ui";

export default function Example(): JSX.Element {
  return (
    <div>
      <Radio disabled>Disabled Radio</Radio>
    </div>
  );
}`
    },
    {
      title: "Default Checked Radio",
      description: "기본 선택된 라디오 버튼입니다.",
      render: (
        <div className="flex flex-col gap-10">
          <Radio defaultChecked>Default Checked Radio</Radio>
          <Radio>Unchecked Radio</Radio>
        </div>
      ),
      jscode: `import React, { useState } from "react";
import { Radio } from "sud-ui";

export default function Example() {
  return (
    <div>
      <Radio defaultChecked>Default Checked Radio</Radio>
    </div>
  );
}`,
      tscode: `import React, { useState } from "react";
import { Radio } from "sud-ui";

export default function Example(): JSX.Element {
  return (
    <div>
      <Radio defaultChecked>Default Checked Radio</Radio>
    </div>
  );
}`
    },
    {
      title: "Radio Group",
      description: "라디오 그룹입니다.",
      render: (
        <div>
          <Radio.Group
            options={basicOptions}
            direction="horizontal"
            labelPosition="top"
            value={value}
            onChange={setValue}
          />
        </div>
      ),
      jscode: `import React, { useState } from "react";
import { Radio, Avatar } from "sud-ui";

export default function Example() {
  const [value, setValue] = useState(null);
  
  const options = [
    {
      label: <Avatar />,
      value: "radio1"
    },
    {
      label: <Avatar sample={2} />,
      value: "radio2"
    },
    {
      label: <Avatar sample={3} />,
      value: "radio3"
    },
    {
      label: <Avatar sample={4} />,
      value: "radio4"
    },
    {
      label: <Avatar sample={5} />,
      value: "radio5"
    }
  ];

  return (
    <div>
      <Radio.Group
        options={options}
        direction="horizontal"
        labelPosition="top"
        value={value}
        onChange={setValue}
      />
    </div>
  );
}`,
      tscode: `import React, { useState } from "react";
import { Radio, Avatar } from "sud-ui";

interface RadioOption {
  label: React.ReactNode;
  value: string;
}

export default function Example(): JSX.Element {
  const [value, setValue] = useState<string | null>(null);
  
  const options: RadioOption[] = [
    {
      label: <Avatar />,
      value: "radio1"
    },
    {
      label: <Avatar sample={2} />,
      value: "radio2"
    },
    {
      label: <Avatar sample={3} />,
      value: "radio3"
    },
    {
      label: <Avatar sample={4} />,
      value: "radio4"
    },
    {
      label: <Avatar sample={5} />,
      value: "radio5"
    }
  ];

  return (
    <div>
      <Radio.Group
        options={options}
        direction="horizontal"
        labelPosition="top"
        value={value}
        onChange={setValue}
      />
    </div>
  );
}`
    },
    {
      title: "disable option Radio",
      description: "비활성화된 옵션을 포함한 라디오 그룹입니다.",
      render: (
        <div className="flex flex-col gap-10">
          <Radio.Group
            options={disableOptions}
            direction="horizontal"
            value={disableValue}
            onChange={setDisableValue}
            itemDisabled={["radio2"]}
            layout="grid"
            cols={3}
          />
          <Radio.Group
            options={disableOptions2}
            direction="horizontal"
            value={disableValue}
            onChange={setDisableValue}
            layout="grid"
            cols={3}
          />
        </div>
      ),
      jscode: `import React, { useState } from "react";
import { Radio } from "sud-ui";

export default function Example() {
  const [value, setValue] = useState(null);

  const options1 = [
    {
      label: "label 1",
      value: "radio1"
    },
    {
      label: "disable option",
      value: "radio2"
    },
    {
      label: "label 3",
      value: "radio3"
    }
  ];

  const options2 = [
    {
      label: "label 1",
      value: "radio1"
    },
    {
      label: "disable option",
      value: "radio2"
    },
    {
      label: "label 3",
      value: "radio3",
      disabled: true
    }
  ];

  return (
    <div className="flex flex-col gap-10">
      <Radio.Group
        options={options1}
        direction="horizontal"
        value={value}
        onChange={setValue}
        itemDisabled={["radio2"]}
        layout="grid"
        cols={3}
      />
      <Radio.Group
        options={options2}
        direction="horizontal"
        value={value}
        onChange={setValue}
        layout="grid"
        cols={3}
      />
    </div>
  );
}`,
      tscode: `import React, { useState } from "react";
import { Radio } from "sud-ui";

interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export default function Example(): JSX.Element {
  const [value, setValue] = useState<string | null>(null);

  const options1: RadioOption[] = [
    {
      label: "label 1",
      value: "radio1"
    },
    {
      label: "disable option",
      value: "radio2"
    },
    {
      label: "label 3",
      value: "radio3"
    }
  ];

  const options2: RadioOption[] = [
    {
      label: "label 1",
      value: "radio1"
    },
    {
      label: "disable option",
      value: "radio2"
    },
    {
      label: "label 3",
      value: "radio3",
      disabled: true
    }
  ];

  return (
    <div className="flex flex-col gap-10">
      <Radio.Group
        options={options1}
        direction="horizontal"
        value={value}
        onChange={setValue}
        itemDisabled={["radio2"]}
        layout="grid"
        cols={3}
      />
      <Radio.Group
        options={options2}
        direction="horizontal"
        value={value}
        onChange={setValue}
        layout="grid"
        cols={3}
      />
    </div>
  );
}`
    },
    {
      title: "Color Type Radio",
      description: "라디오 버튼의 색상 타입입니다.",
      render: (
        <div className="flex flex-col gap-10">
          <Radio colorType="primary" checked>
            Primary Radio
          </Radio>
          <Radio colorType="secondary" checked>
            Secondary Radio
          </Radio>
          <Radio colorType="success" checked>
            Success Radio
          </Radio>
          <Radio colorType="warning" checked>
            Warning Radio
          </Radio>
          <Radio colorType="danger" checked>
            Danger Radio
          </Radio>
          <Radio colorType="info" checked>
            Info Radio
          </Radio>
        </div>
      ),
      jscode: `import React from "react";
import { Radio } from "sud-ui";

export default function Example() {
  return (
    <div className="flex flex-col gap-10">
      <Radio colorType="primary" checked>
        Primary Radio
      </Radio>
      <Radio colorType="secondary" checked>
        Secondary Radio
      </Radio>
      <Radio colorType="success" checked>
        Success Radio
      </Radio>
      <Radio colorType="warning" checked>
        Warning Radio
      </Radio>
      <Radio colorType="danger" checked>
        Danger Radio
      </Radio>
      <Radio colorType="info" checked>
        Info Radio
      </Radio>
    </div>
  );
}`,
      tscode: `import React from "react";
import { Radio } from "sud-ui";

export default function Example(): JSX.Element {
  return (
    <div className="flex flex-col gap-10">
      <Radio colorType="primary" checked>
        Primary Radio
      </Radio>
      <Radio colorType="secondary" checked>
        Secondary Radio
      </Radio>
      <Radio colorType="success" checked>
        Success Radio
      </Radio>
      <Radio colorType="warning" checked>
        Warning Radio
      </Radio>
      <Radio colorType="danger" checked>
        Danger Radio
      </Radio>
      <Radio colorType="info" checked>
        Info Radio
      </Radio>
    </div>
  );
}`
    }
  ];
  const howToUseTableData = [
    {
      key: "checked",
      name: "checked",
      description: "라디오 버튼의 선택 상태 (제어 컴포넌트)",
      type: "boolean",
      default: "-"
    },
    {
      key: "defaultChecked",
      name: "defaultChecked",
      description: "라디오 버튼의 초기 선택 상태 (비제어 컴포넌트)",
      type: "boolean",
      default: "false"
    },
    {
      key: "onChange",
      name: "onChange",
      description: "선택 상태가 변경될 때 호출되는 함수",
      type: "(checked: boolean) => void",
      default: "-"
    },
    {
      key: "labelPosition",
      name: "labelPosition",
      description: "라벨의 위치",
      type: (
        <>
          <Tag>left</Tag> ｜ <Tag>right</Tag> ｜ <Tag>top</Tag> ｜{" "}
          <Tag>bottom</Tag>
        </>
      ),
      default: "right"
    },
    {
      key: "color",
      name: "color",
      description: "라디오 버튼의 색상",
      type: "string",
      default: "-"
    },
    {
      key: "disabled",
      name: "disabled",
      description: "비활성화 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "colorType",
      name: "colorType",
      description: "라디오 버튼의 색상 타입",
      type: "string",
      default: "primary"
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
      type: "CSSProperties",
      default: "{}"
    },
    {
      key: "ariaLabel",
      name: "ariaLabel",
      description: "ARIA 라벨",
      type: "string",
      default: "-"
    },
    {
      key: "ariaRequired",
      name: "ariaRequired",
      description: "ARIA required 속성",
      type: "boolean",
      default: "-"
    },
    {
      key: "name",
      name: "name",
      description: "라디오 버튼 그룹의 이름",
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
