"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { useLang } from "../../_lib/context/langContext";
import { Tag, Radio, Avatar } from "sud-ui";

import React, { useState } from "react";

export default function RadioPage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();

  const name = "Radio";
  const description = (
    <>
      {lang === "ko"
        ? "여러 옵션 중 하나를 선택할 수 있는 라디오 버튼 컴포넌트입니다."
        : "A radio button component that allows you to select one option from multiple options."}
    </>
  );

  const IMPORT_COMMAND = "import { Radio } from 'sud-ui';";

  const whenToUse =
    lang === "ko"
      ? ["여러 옵션 중 하나를 선택할 때", "사용자의 선택이나 결정을 확인할 때"]
      : [
          "When you need to select one option from multiple options.",
          "When you need to confirm the user's choice or decision."
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
      description: lang === "ko" ? "기본적인 사용 방법입니다." : "Basic usage.",
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
      description:
        lang === "ko"
          ? "비활성화된 라디오 버튼입니다."
          : "Disabled radio button.",
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
      description:
        lang === "ko"
          ? "기본 선택된 라디오 버튼입니다."
          : "Default checked radio button.",
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
      description: lang === "ko" ? "라디오 그룹입니다." : "Radio group.",
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
      description:
        lang === "ko"
          ? "비활성화된 옵션을 포함한 라디오 그룹입니다."
          : "Radio group with disabled options.",
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
      description:
        lang === "ko"
          ? "라디오 버튼의 색상 타입입니다."
          : "The color type of the radio button.",
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
      description:
        lang === "ko"
          ? "라디오 버튼의 선택 상태 (제어 컴포넌트)"
          : "The selected state of the radio button (controlled component)",
      type: "boolean",
      default: "-"
    },
    {
      key: "defaultChecked",
      name: "defaultChecked",
      description:
        lang === "ko"
          ? "라디오 버튼의 초기 선택 상태 (비제어 컴포넌트)"
          : "The initial selected state of the radio button (uncontrolled component)",
      type: "boolean",
      default: "false"
    },
    {
      key: "onChange",
      name: "onChange",
      description:
        lang === "ko"
          ? "선택 상태가 변경될 때 호출되는 함수"
          : "The function called when the selection state changes.",
      type: "(checked: boolean) => void",
      default: "-"
    },
    {
      key: "labelPosition",
      name: "labelPosition",
      description: lang === "ko" ? "라벨의 위치" : "The position of the label.",
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
      description:
        lang === "ko" ? "라디오 버튼의 색상" : "The color of the radio button.",
      type: "string",
      default: "-"
    },
    {
      key: "disabled",
      name: "disabled",
      description:
        lang === "ko"
          ? "비활성화 여부"
          : "The disabled state of the radio button.",
      type: "boolean",
      default: "false"
    },
    {
      key: "colorType",
      name: "colorType",
      description:
        lang === "ko"
          ? "라디오 버튼의 색상 타입"
          : "The color type of the radio button.",
      type: "string",
      default: "primary"
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
      type: "CSSProperties",
      default: "{}"
    },
    {
      key: "ariaLabel",
      name: "ariaLabel",
      description: lang === "ko" ? "ARIA 라벨" : "ARIA label.",
      type: "string",
      default: "-"
    },
    {
      key: "ariaRequired",
      name: "ariaRequired",
      description:
        lang === "ko" ? "ARIA required 속성" : "ARIA required property.",
      type: "boolean",
      default: "-"
    },
    {
      key: "name",
      name: "name",
      description:
        lang === "ko"
          ? "라디오 버튼 그룹의 이름"
          : "The name of the radio button group.",
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
