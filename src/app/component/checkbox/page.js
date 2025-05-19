"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Tag, Avatar, Checkbox } from "sud-ui";

import React, { useState } from "react";

export default function CheckboxPage() {
  const { isMobile } = useMobile();

  const name = "Checkbox";
  const description = (
    <>여러 옵션을 동시에 선택할 수 있는 체크박스 컴포넌트입니다.</>
  );

  const IMPORT_COMMAND = "import { Checkbox } from 'sud-ui';";

  const whenToUse = [
    "여러 옵션 중 하나를 선택할 때",
    "사용자의 선택이나 결정을 확인할 때"
  ];

  const basicOptions = [
    {
      label: <Avatar />,
      value: "checkbox1"
    },
    {
      label: <Avatar sample={2} />,
      value: "checkbox2"
    },
    {
      label: <Avatar sample={3} />,
      value: "checkbox3"
    },
    {
      label: <Avatar sample={4} />,
      value: "checkbox4"
    },
    {
      label: <Avatar sample={5} />,
      value: "checkbox5"
    }
  ];
  const [value, setValue] = useState([]);
  const [disableValue, setDisableValue] = useState([]);
  const disableOptions = [
    {
      label: "label 1",
      value: "checkbox1"
    },
    {
      label: "disable option",
      value: "checkbox2"
    },
    {
      label: "label 3",
      value: "checkbox3"
    }
  ];
  const disableOptions2 = [
    {
      label: "label 1",
      value: "checkbox1"
    },
    {
      label: "disable option",
      value: "checkbox2"
    },
    {
      label: "label 3",
      value: "checkbox3",
      disabled: true
    }
  ];
  const examples = [
    {
      title: "Basic Usage",
      description: "기본적인 버튼 컴포넌트입니다.",
      render: (
        <div>
          <Checkbox>Checkbox</Checkbox>
        </div>
      ),
      jscode: `import React, { useState } from "react";
import { Checkbox } from "sud-ui";

export default function Example() {

  return <Checkbox>Checkbox</Checkbox>;
}`,
      tscode: `import React, { useState } from "react";
import { Checkbox } from "sud-ui";

export default function Example(): JSX.Element {
  
  return <Checkbox>Checkbox</Checkbox>;
  );
}`
    },
    {
      title: "Disabled Checkbox",
      description: "비활성화된 체크박스입니다.",
      render: <Checkbox disabled>Disabled Checkbox</Checkbox>,
      jscode: `import React from "react";
import { Checkbox } from "sud-ui";

export default function Example() {
  return <Checkbox disabled>Disabled Checkbox</Checkbox>;
}`,
      tscode: `import React from "react";
import { Checkbox } from "sud-ui";

export default function Example(): JSX.Element {
  return <Checkbox disabled>Disabled Checkbox</Checkbox>;
}`
    },
    {
      title: "Default Checked Checkbox",
      description: "기본 선택된 라디오 버튼입니다.",
      render: (
        <div className="flex flex-col gap-10">
          <Checkbox defaultChecked>Default Checked Checkbox</Checkbox>
          <Checkbox>Unchecked Checkbox</Checkbox>
        </div>
      ),
      jscode: `import React, { useState } from "react";
import { Checkbox } from "sud-ui";

export default function Example() {
  return (
    <div className="flex flex-col gap-10">
      <Checkbox defaultChecked>Default Checked Checkbox</Checkbox>
      <Checkbox>Unchecked Checkbox</Checkbox>
    </div>
  );
}`,
      tscode: `import React, { useState } from "react";
import { Checkbox } from "sud-ui";

export default function Example(): JSX.Element {
  return (
    <div className="flex flex-col gap-10">
      <Checkbox defaultChecked>Default Checked Checkbox</Checkbox>
      <Checkbox>Unchecked Checkbox</Checkbox>
    </div>
  );
}`
    },
    {
      title: "Checkbox Group",
      description: "체크박스 그룹입니다.",
      render: (
        <div>
          <Checkbox.Group
            options={basicOptions}
            direction="horizontal"
            labelPosition="top"
            value={value}
            onChange={(val) => setValue(val)}
          />
        </div>
      ),
      jscode: `import React, { useState } from "react";
import { Checkbox, Avatar } from "sud-ui";

export default function Example() {
  const [value, setValue] = useState(null);
  
  const options = [
    {
      label: <Avatar />,
      value: "Checkbox1"
    },
    {
      label: <Avatar sample={2} />,
      value: "Checkbox2"
    },
    {
      label: <Avatar sample={3} />,
      value: "Checkbox3"
    },
    {
      label: <Avatar sample={4} />,
      value: "Checkbox4"
    },
    {
      label: <Avatar sample={5} />,
      value: "Checkbox5"
    }
  ];

  return (
    <div>
      <Checkbox.Group
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
import { Checkbox, Avatar } from "sud-ui";

interface CheckboxOption {
  label: React.ReactNode;
  value: string;
}

export default function Example(): JSX.Element {
  const [value, setValue] = useState<string | null>(null);
  
  const options: CheckboxOption[] = [
    {
      label: <Avatar />,
      value: "Checkbox1"
    },
    {
      label: <Avatar sample={2} />,
      value: "Checkbox2"
    },
    {
      label: <Avatar sample={3} />,
      value: "Checkbox3"
    },
    {
      label: <Avatar sample={4} />,
      value: "Checkbox4"
    },
    {
      label: <Avatar sample={5} />,
      value: "Checkbox5"
    }
  ];

  return (
    <div>
      <Checkbox.Group
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
      title: "disable option Checkbox",
      description: "비활성화된 옵션을 포함한 라디오 그룹입니다.",
      render: (
        <div className="flex flex-col gap-10">
          <Checkbox.Group
            options={disableOptions}
            direction="horizontal"
            value={disableValue}
            onChange={setDisableValue}
            itemDisabled={["checkbox2"]}
            layout="grid"
            cols={3}
          />
          <Checkbox.Group
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
import { Checkbox } from "sud-ui";

export default function Example() {
  const [value, setValue] = useState(null);

  const options1 = [
    {
      label: "label 1",
      value: "checkbox1"
    },
    {
      label: "disable option",
      value: "checkbox2"
    },
    {
      label: "label 3",
      value: "checkbox3"
    }
  ];

  const options2 = [
    {
      label: "label 1",
      value: "checkbox1"
    },
    {
      label: "disable option",
      value: "checkbox2"
    },
    {
      label: "label 3",
      value: "checkbox3",
      disabled: true
    }
  ];

  return (
    <div className="flex flex-col gap-10">
      <Checkbox.Group
        options={options1}
        direction="horizontal"
        value={value}
        onChange={setValue}
        itemDisabled={["Checkbox2"]}
        layout="grid"
        cols={3}
      />
      <Checkbox.Group
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
import { Checkbox } from "sud-ui";

interface CheckboxOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export default function Example(): JSX.Element {
  const [value, setValue] = useState<string[]>([]);

  const options1: CheckboxOption[] = [
    {
      label: "label 1",
      value: "checkbox1"
    },
    {
      label: "disable option",
      value: "checkbox2"
    },
    {
      label: "label 3",
      value: "checkbox3"
    }
  ];

  const options2: CheckboxOption[] = [
    {
      label: "label 1",
      value: "checkbox1"
    },
    {
      label: "disable option",
      value: "checkbox2"
    },
    {
      label: "label 3",
      value: "checkbox3",
      disabled: true
    }
  ];

  return (
    <div className="flex flex-col gap-10">
      <Checkbox.Group
        options={options1}
        direction="horizontal"
        value={value}
        onChange={setValue}
        itemDisabled={["checkbox2"]}
        layout="grid"
        cols={3}
      />
      <Checkbox.Group
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
      title: "Color Type Checkbox",
      description: "라디오 버튼의 색상 타입입니다.",
      render: (
        <div className="flex flex-col gap-10">
          <Checkbox colorType="primary" checked>
            Primary Checkbox
          </Checkbox>
          <Checkbox colorType="secondary" checked>
            Secondary Checkbox
          </Checkbox>
          <Checkbox colorType="success" checked>
            Success Checkbox
          </Checkbox>
          <Checkbox colorType="warning" checked>
            Warning Checkbox
          </Checkbox>
          <Checkbox colorType="danger" checked>
            Danger Checkbox
          </Checkbox>
          <Checkbox colorType="info" checked>
            Info Checkbox
          </Checkbox>
        </div>
      ),
      jscode: `import React from "react";
import { Checkbox } from "sud-ui";

export default function Example() {
  return (
    <div className="flex flex-col gap-10">
      <Checkbox colorType="primary" checked>
        Primary Checkbox
      </Checkbox>
      <Checkbox colorType="secondary" checked>
        Secondary Checkbox
      </Checkbox>
      <Checkbox colorType="success" checked>
        Success Checkbox
      </Checkbox>
      <Checkbox colorType="warning" checked>
        Warning Checkbox
      </Checkbox>
      <Checkbox colorType="danger" checked>
        Danger Checkbox
      </Checkbox>
      <Checkbox colorType="info" checked>
        Info Checkbox
      </Checkbox>
    </div>
  );
}`,
      tscode: `import React from "react";
import { Checkbox } from "sud-ui";

export default function Example(): JSX.Element {
  return (
    <div className="flex flex-col gap-10">
      <Checkbox colorType="primary" checked>
        Primary Checkbox
      </Checkbox>
      <Checkbox colorType="secondary" checked>
        Secondary Checkbox
      </Checkbox>
      <Checkbox colorType="success" checked>
        Success Checkbox
      </Checkbox>
      <Checkbox colorType="warning" checked>
        Warning Checkbox
      </Checkbox>
      <Checkbox colorType="danger" checked>
        Danger Checkbox
      </Checkbox>
      <Checkbox colorType="info" checked>
        Info Checkbox
      </Checkbox>
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
