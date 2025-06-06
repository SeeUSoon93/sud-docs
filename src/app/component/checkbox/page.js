"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { useLang } from "../../_lib/context/langContext";
import { Tag, Avatar, Checkbox } from "sud-ui";

import React, { useState } from "react";
import { tagRender } from "../../_lib/components/common/render";
import { defaultColorTypeTags } from "../../_lib/components/common/defaultType";

export default function CheckboxPage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();

  const name = "Checkbox";
  const description = (
    <>
      {lang === "ko"
        ? "여러 옵션 중 하나 이상을 선택할 수 있는 체크박스 컴포넌트입니다."
        : "A checkbox component that allows one or more options to be selected at the same time."}
    </>
  );

  const IMPORT_COMMAND = "import { Checkbox } from 'sud-ui';";

  const whenToUse =
    lang === "ko"
      ? [
          "여러 옵션 중 하나 이상을 선택할 때",
          "사용자의 선택이나 결정을 확인할 때"
        ]
      : [
          "When you need to select one or more options from multiple options.",
          "When you need to confirm the user's choice or decision."
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
      description: lang === "ko" ? "기본적인 사용 방법입니다." : "Basic usage.",
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
      description:
        lang === "ko" ? "비활성화된 체크박스입니다." : "Disabled checkbox.",
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
      description:
        lang === "ko"
          ? "기본 선택된 체크박스입니다."
          : "Default checked checkbox.",
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
      description: lang === "ko" ? "체크박스 그룹입니다." : "Checkbox group.",
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
      description:
        lang === "ko"
          ? "비활성화된 옵션을 포함한 체크박스 그룹입니다."
          : "Checkbox group with disabled options.",
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
      description:
        lang === "ko"
          ? "체크박스 버튼의 색상 타입입니다."
          : "The color type of the Ceckbox button.",
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
      description:
        lang === "ko"
          ? "체크박스의 선택 상태 (제어 컴포넌트)"
          : "The selected state of the checkbox (controlled component)",
      type: "boolean",
      default: "-"
    },
    {
      key: "defaultChecked",
      name: "defaultChecked",
      description:
        lang === "ko"
          ? "체크박스의 초기 선택 상태 (비제어 컴포넌트)"
          : "The initial selected state of the checkbox (uncontrolled component)",
      type: "boolean",
      default: "false"
    },
    {
      key: "onChange",
      name: "onChange",
      description:
        lang === "ko"
          ? "선택 상태가 변경될 때 호출되는 함수"
          : "The function called when the selection state changes",
      type: "(checked: boolean) => void",
      default: "-"
    },
    {
      key: "labelPosition",
      name: "labelPosition",
      description: lang === "ko" ? "라벨의 위치" : "The position of the label",
      type: <>{tagRender(["left", "right", "top", "bottom"])}</>,
      default: <Tag>right</Tag>
    },
    {
      key: "color",
      name: "color",
      description:
        lang === "ko"
          ? "체크박스의 색상(palette값 또는 HEX code)"
          : "The color of the checkbox (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "disabled",
      name: "disabled",
      description:
        lang === "ko" ? "비활성화 여부" : "Whether the checkbox is disabled",
      type: "boolean",
      default: "false"
    },
    {
      key: "colorType",
      name: "colorType",
      description:
        lang === "ko"
          ? "체크박스의 색상 타입"
          : "The color type of the checkbox",
      type: <>{defaultColorTypeTags}</>,
      default: <Tag>primary</Tag>
    },
    {
      key: "className",
      name: "className",
      description: lang === "ko" ? "추가 클래스명" : "Additional class name",
      type: "string",
      default: "-"
    },
    {
      key: "style",
      name: "style",
      description: lang === "ko" ? "추가 스타일" : "Additional style",
      type: "CSSProperties",
      default: "{}"
    },
    {
      key: "ariaLabel",
      name: "ariaLabel",
      description: lang === "ko" ? "ARIA 라벨" : "ARIA label",
      type: "string",
      default: "-"
    },
    {
      key: "ariaRequired",
      name: "ariaRequired",
      description:
        lang === "ko" ? "ARIA required 속성" : "ARIA required property",
      type: "boolean",
      default: "-"
    },
    {
      key: "ariaInvalid",
      name: "ariaInvalid",
      description:
        lang === "ko" ? "ARIA invalid 속성" : "ARIA invalid property",
      type: "boolean",
      default: "-"
    },
    {
      key: "ariaDescribedby",
      name: "ariaDescribedby",
      description:
        lang === "ko" ? "ARIA describedby 속성" : "ARIA describedby property",
      type: "string",
      default: "-"
    }
  ];

  const groupTableData = [
    {
      key: "options",
      name: "options",
      description:
        lang === "ko"
          ? "체크박스 그룹의 옵션 배열"
          : "Array of checkbox group options",
      type: "Array<{label: ReactNode, value: string, disabled?: boolean}>",
      default: "[]"
    },
    {
      key: "value",
      name: "value",
      description:
        lang === "ko" ? "선택된 값들의 배열" : "Array of selected values",
      type: "string[]",
      default: "[]"
    },
    {
      key: "onChange",
      name: "onChange",
      description:
        lang === "ko"
          ? "선택 상태가 변경될 때 호출되는 함수"
          : "The function called when the selection state changes",
      type: "(values: string[]) => void",
      default: "-"
    },
    {
      key: "layout",
      name: "layout",
      description: lang === "ko" ? "레이아웃 타입" : "Layout type",
      type: <>{tagRender(["flex", "grid"])}</>,
      default: <Tag>flex</Tag>
    },
    {
      key: "direction",
      name: "direction",
      description: lang === "ko" ? "배치 방향" : "Direction of arrangement",
      type: <>{tagRender(["horizontal", "vertical"])}</>,
      default: <Tag>vertical</Tag>
    },
    {
      key: "cols",
      name: "cols",
      description:
        lang === "ko"
          ? "그리드 레이아웃의 열 수"
          : "Number of columns in grid layout",
      type: "number",
      default: "1"
    },
    {
      key: "gap",
      name: "gap",
      description:
        lang === "ko" ? "체크박스 간의 간격" : "Gap between checkboxes",
      type: "number",
      default: "8"
    },
    {
      key: "disabled",
      name: "disabled",
      description:
        lang === "ko"
          ? "전체 그룹 비활성화 여부"
          : "Whether the entire group is disabled",
      type: "boolean",
      default: "false"
    },
    {
      key: "itemDisabled",
      name: "itemDisabled",
      description:
        lang === "ko"
          ? "비활성화할 체크박스 값들의 배열"
          : "Array of checkbox values to disable",
      type: "string[]",
      default: "[]"
    },
    {
      key: "color",
      name: "color",
      description:
        lang === "ko"
          ? "체크박스의 색상(palette값 또는 HEX code)"
          : "The color of the checkboxes (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "colorType",
      name: "colorType",
      description:
        lang === "ko"
          ? "체크박스의 색상 타입"
          : "The color type of the checkboxes",
      type: <>{defaultColorTypeTags}</>,
      default: <Tag>primary</Tag>
    },
    {
      key: "labelPosition",
      name: "labelPosition",
      description: lang === "ko" ? "라벨의 위치" : "The position of the labels",
      type: <>{tagRender(["left", "right", "top", "bottom"])}</>,
      default: <Tag>right</Tag>
    },
    {
      key: "ariaLabel",
      name: "ariaLabel",
      description: lang === "ko" ? "ARIA 라벨" : "ARIA label",
      type: "string",
      default: "-"
    },
    {
      key: "ariaRequired",
      name: "ariaRequired",
      description:
        lang === "ko" ? "ARIA required 속성" : "ARIA required property",
      type: "boolean",
      default: "-"
    },
    {
      key: "name",
      name: "name",
      description:
        lang === "ko"
          ? "체크박스 그룹의 이름"
          : "The name of the checkbox group",
      type: "string",
      default: "-"
    },
    {
      key: "role",
      name: "role",
      description: lang === "ko" ? "ARIA role" : "ARIA role",
      type: "string",
      default: "checkboxgroup"
    },
    {
      key: "className",
      name: "className",
      description: lang === "ko" ? "추가 클래스명" : "Additional class name",
      type: "string",
      default: "-"
    },
    {
      key: "style",
      name: "style",
      description: lang === "ko" ? "추가 스타일" : "Additional style",
      type: "CSSProperties",
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
        howToUseTableData,
        group: "Checkbox.Group",
        groupTableData
      }}
      grid={true}
      isMobile={isMobile}
      lang={lang}
    />
  );
}
