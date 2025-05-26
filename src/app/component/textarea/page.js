"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { useLang } from "../../_lib/context/langContext";
import { Textarea, Tag, Radio, Card, Button } from "sud-ui";

import React, { useState } from "react";
import { PieChartOutline, Chat } from "sud-icons";

export default function TextareaPage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();
  const [size, setSize] = useState("md");
  const [value, setValue] = useState("");
  const [sizeValue, setSizeValue] = useState("");
  const [disabledValue, setDisabledValue] = useState("");
  const [readOnlyValue, setReadOnlyValue] = useState("");
  const [maxLengthValue, setMaxLengthValue] = useState("");
  const [labelValue, setLabelValue] = useState("");
  const [underlineValue, setUnderlineValue] = useState("");
  const [errorValue, setErrorValue] = useState("");
  const [shape, setShape] = useState("rounded");
  const [colorValue, setColorValue] = useState("");
  const [shapeValue, setShapeValue] = useState("");
  const [resizableValue, setResizableValue] = useState("");
  const [autoSizeValue, setAutoSizeValue] = useState("");
  const [bottomAddonValue, setBottomAddonValue] = useState("");

  const name = "Textarea";
  const description = (
    <>
      {lang === "ko"
        ? "텍스트를 입력할 수 있는 입력 컴포넌트입니다."
        : "A text input component that allows you to enter text."}
    </>
  );

  const IMPORT_COMMAND = "import { Textarea } from 'sud-ui';";

  const whenToUse =
    lang === "ko"
      ? ["긴 텍스트를 입력할 때."]
      : ["When you need to enter long text."];

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
    }
  ];

  const examples = [
    {
      title: "Basic Usage",
      description: lang === "ko" ? "기본적인 사용 방법입니다." : "Basic usage.",
      render: (
        <>
          <Textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter text here"
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Textarea } from 'sud-ui';

const BasicTextarea = () => {
  const [value, setValue] = useState("");

  return (
    <Textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter text here"
    />
  );
};

export default BasicTextarea;`,
      tscode: `import React, { useState } from 'react';
import { Textarea } from 'sud-ui';

const BasicTextarea: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter text here"
    />
  );
};

export default BasicTextarea;`
    },
    {
      title: "Size",
      description:
        lang === "ko"
          ? "Textarea 의 크기를 설정할 수 있습니다."
          : "You can set the size of the Textarea.",
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
          <Textarea
            size={size}
            value={sizeValue}
            onChange={(e) => setSizeValue(e.target.value)}
            placeholder={`${size} size Textarea`}
          />
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Textarea, Radio, Card } from 'sud-ui';

const SizeTextarea = () => {
  const [size, setSize] = useState('md');
  const [value, setValue] = useState('');
  
  const sizeOptions = [
    { label: 'sm', value: 'sm' },
    { label: 'md', value: 'md' },
    { label: 'lg', value: 'lg' }
  ];

  return (
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
      <Textarea
        size={size}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={\`\${size} size Textarea\`}  
      />
    </div>
  );
};

export default SizeTextarea;`,
      tscode: `import React, { useState } from 'react';
import { Textarea, Radio, Card } from 'sud-ui';

interface SizeOption {
  label: string;
  value: string;
}

const SizeTextarea: React.FC = () => {
  const [size, setSize] = useState<string>('md');
  const [value, setValue] = useState<string>('');
  
  const sizeOptions: SizeOption[] = [
    { label: 'sm', value: 'sm' },
    { label: 'md', value: 'md' },
    { label: 'lg', value: 'lg' }
  ];

  return (
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
      <Textarea
        size={size}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={\`\${size} size Textarea\`}
      />
    </div>
  );
};

export default SizeTextarea;`
    },
    {
      title: "Disabled",
      description:
        lang === "ko"
          ? "disabled 속성을 추가하면 입력 필드가 비활성화됩니다."
          : "When you add the disabled property, the input field is disabled.",
      render: (
        <>
          <Textarea
            value={disabledValue}
            onChange={(e) => setDisabledValue(e.target.value)}
            disabled
            placeholder="Disabled Textarea"
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Textarea } from 'sud-ui';

const DisabledTextarea = () => {
  const [value, setValue] = useState("");

  return (
    <Textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      disabled
      placeholder="Disabled Textarea"
    />
  );
};

export default DisabledTextarea;`,
      tscode: `import React, { useState } from 'react';
import { Textarea } from 'sud-ui';

const DisabledTextarea: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      disabled
      placeholder="Disabled Textarea"
    />
  );
};

export default DisabledTextarea;`
    },
    {
      title: "Read Only",
      description:
        lang === "ko"
          ? "readOnly 속성을 추가하면 입력 필드가 읽기 전용으로 변경됩니다."
          : "When you add the readOnly property, the input field becomes read-only.",
      render: (
        <>
          <Textarea
            value={readOnlyValue}
            onChange={(e) => setReadOnlyValue(e.target.value)}
            readOnly
            placeholder="Read Only Textarea"
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Textarea } from 'sud-ui';

const ReadOnlyTextarea = () => {
  const [value, setValue] = useState("");

  return (
    <Textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      readOnly
      placeholder="Read Only Textarea"
    />
  );
};

export default ReadOnlyTextarea;`,
      tscode: `import React, { useState } from 'react';
import { Textarea } from 'sud-ui';

const ReadOnlyTextarea: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      readOnly
      placeholder="Read Only Textarea"
    />
  );
};

export default ReadOnlyTextarea;`
    },
    {
      title: "Max Length",
      description:
        lang === "ko"
          ? "최대 입력 길이를 설정할 수 있습니다."
          : "You can set the maximum input length.",
      render: (
        <>
          <Textarea
            value={maxLengthValue}
            onChange={(e) => setMaxLengthValue(e.target.value)}
            maxLength={120}
            placeholder="Max Length Textarea"
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Textarea } from 'sud-ui';

const MaxLengthTextarea = () => {
  const [value, setValue] = useState("");

  return (
    <Textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      maxLength={120}
      placeholder="Max Length Textarea"
    />
  );
};

export default MaxLengthTextarea;`,
      tscode: `import React, { useState } from 'react';
import { Textarea } from 'sud-ui';

const MaxLengthTextarea: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      maxLength={120}
      placeholder="Max Length Textarea"
    />
  );
};

export default MaxLengthTextarea;`
    },
    {
      title: "Label",
      description:
        lang === "ko"
          ? "label 속성을 추가하면 입력 필드의 라벨을 설정할 수 있습니다."
          : "When you add the label property, you can set the label of the input field.",
      render: (
        <>
          <Textarea
            value={labelValue}
            onChange={(e) => setLabelValue(e.target.value)}
            label="Introduction"
            placeholder="Label Textarea"
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Textarea } from 'sud-ui';

const LabelTextarea = () => {
  const [value, setValue] = useState("");

  return (
    <Textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      label="name"
      placeholder="Label Textarea"
    />
  );
};

export default LabelTextarea;`,
      tscode: `import React, { useState } from 'react';
import { Textarea } from 'sud-ui';

const LabelTextarea: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      label="name"
      placeholder="Label Textarea"
    />
  );
};

export default LabelTextarea;`
    },
    {
      title: "Underline",
      description:
        lang === "ko"
          ? "밑줄 스타일의 입력 필드입니다."
          : "The input field with a line style.",
      render: (
        <>
          <Textarea
            value={underlineValue}
            onChange={(e) => setUnderlineValue(e.target.value)}
            underline
            placeholder="Underline Textarea"
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Textarea } from 'sud-ui';

const UnderlineTextarea = () => {
  const [value, setValue] = useState("");

  return (
    <Textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      underline
      placeholder="Underline Textarea"
    />
  );
};

export default UnderlineTextarea;`,
      tscode: `import React, { useState } from 'react';
import { Textarea } from 'sud-ui';

const UnderlineTextarea: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      underline
      placeholder="Underline Textarea"
    />
  );
};

export default UnderlineTextarea;`
    },
    {
      title: "Error State",
      description:
        lang === "ko"
          ? "에러 상태와 메시지를 표시할 수 있습니다."
          : "You can display the error state and message.",
      render: (
        <>
          <Textarea
            value={errorValue}
            onChange={(e) => setErrorValue(e.target.value)}
            error={errorValue.length > 0}
            errorText="Error Message"
            placeholder="Error Textarea"
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Textarea } from 'sud-ui';

const ErrorTextarea = () => {
  const [value, setValue] = useState("");

  return (
    <Textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      error={value.length > 0}
      errorText="Error Message"
      placeholder="Error Textarea"
    />
  );
};

export default ErrorTextarea;`,
      tscode: `import React, { useState } from 'react';
import { Textarea } from 'sud-ui';

const ErrorTextarea: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      error={value.length > 0}
      errorText="Error Message"
      placeholder="Error Textarea"
    />
  );
};

export default ErrorTextarea;`
    },
    {
      title: "Shape",
      description:
        lang === "ko"
          ? "입력 필드의 모서리 모양을 설정할 수 있습니다."
          : "You can set the shape of the input field.",
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
          <Textarea
            shape={shape}
            value={shapeValue}
            onChange={(e) => setShapeValue(e.target.value)}
            placeholder={`${shape} Shape Textarea`}
          />
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Textarea, Radio, Card } from 'sud-ui';

const ShapeTextarea = () => {
  const [shape, setShape] = useState('rounded');
  const [shapeValue, setShapeValue] = useState('');
  
  const shapeOptions = [
    { label: 'rounded', value: 'rounded' },
    { label: 'square', value: 'square' }
  ];

  return (
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
      <Textarea
        shape={shape}
        value={shapeValue}
        onChange={(e) => setShapeValue(e.target.value)}
        placeholder={\`\${shape} Shape Textarea\`}
      />
    </div>
  );
};

export default ShapeTextarea;`,
      tscode: `import React, { useState } from 'react';
import { Textarea, Radio, Card } from 'sud-ui';

interface ShapeOption {
  label: string;
  value: string;
}

const ShapeTextarea: React.FC = () => {
  const [shape, setShape] = useState<string>('rounded');
  const [shapeValue, setShapeValue] = useState<string>('');
  
  const shapeOptions: ShapeOption[] = [
    { label: 'rounded', value: 'rounded' },
    { label: 'square', value: 'square' }
  ];

  return (
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
      <Textarea
        shape={shape}
        value={shapeValue}
        onChange={(e) => setShapeValue(e.target.value)}
        placeholder={\`\${shape} Shape Textarea\`}
      />
    </div>
  );
};

export default ShapeTextarea;`
    },
    {
      title: "Color Customization",
      description:
        lang === "ko"
          ? "입력 필드의 색상을 커스텀할 수 있습니다."
          : "You can customize the color of the input field.",
      render: (
        <Textarea
          placeholder="Enter text here"
          value={colorValue}
          onChange={(e) => setColorValue(e.target.value)}
          color={"orange-8"}
          background={"orange-1"}
          borderColor={"orange-8"}
        />
      ),
      jscode: `import React, { useState } from 'react';
import { Textarea } from 'sud-ui';

const CustomColorTextarea = () => {
  const [value, setValue] = useState("");

  return (
    <Textarea
      placeholder="Enter text here"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      color="orange-8"
      background="orange-1"
      borderColor="orange-8"
    />
  );
};

export default CustomColorTextarea;`,
      tscode: `import React, { useState } from 'react';
import { Textarea } from 'sud-ui';

const CustomColorTextarea: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Textarea
      placeholder="Enter text here"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      color="orange-8"
      background="orange-1"
      borderColor="orange-8"
    />
  );
};

export default CustomColorTextarea;`
    },
    {
      title: "Resizable",
      description:
        lang === "ko"
          ? "크기 조절 가능한 입력 필드입니다."
          : "The input field with a resizable.",
      render: (
        <Textarea
          value={resizableValue}
          onChange={(e) => setResizableValue(e.target.value)}
          resizable
          placeholder="Resizable Textarea"
        />
      ),
      jscode: `import React, { useState } from 'react';
import { Textarea } from 'sud-ui';

const ResizableTextarea = () => {
  const [value, setValue] = useState("");

  return (
    <Textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      resizable
      placeholder="Resizable Textarea"
    />
  );
};

export default ResizableTextarea;`,
      tscode: `import React, { useState } from 'react';
import { Textarea } from 'sud-ui';

const ResizableTextarea: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      resizable
      placeholder="Resizable Textarea"
    />
  );
};

export default ResizableTextarea;`
    },
    {
      title: "Auto Size",
      description:
        lang === "ko"
          ? "자동 크기 조절 가능한 입력 필드입니다."
          : "The input field with a resizable.",
      render: (
        <Textarea
          value={autoSizeValue}
          onChange={(e) => setAutoSizeValue(e.target.value)}
          autoSize
          placeholder="Auto Size Textarea"
        />
      ),
      jscode: `import React, { useState } from 'react';
import { Textarea } from 'sud-ui';

const AutoSizeTextarea = () => {
  const [value, setValue] = useState("");

  return (
    <Textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      autoSize
      placeholder="Auto Size Textarea"
    />
  );
};

export default AutoSizeTextarea;`,
      tscode: `import React, { useState } from 'react';
import { Textarea } from 'sud-ui';

const AutoSizeTextarea: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      autoSize
      placeholder="Auto Size Textarea"
    />
  );
};

export default AutoSizeTextarea;`
    },
    {
      title: "Bottom Addon",
      description:
        lang === "ko"
          ? "하단에 추가 요소를 표시할 수 있습니다."
          : "You can display additional elements at the bottom.",
      render: (
        <Textarea
          placeholder="Bottom Button Area Textarea"
          value={bottomAddonValue}
          onChange={(e) => setBottomAddonValue(e.target.value)}
          autoSize
          bottomLeft={
            <Button size="sm" colorType="cool-gray">
              Cancel
            </Button>
          }
          bottomRight={
            <div style={{ display: "flex", gap: 6 }}>
              <Button size="sm" icon={<PieChartOutline size={16} />} />
              <Button size="sm" icon={<Chat size={16} />} colorType="primary">
                Send
              </Button>
            </div>
          }
        />
      ),
      jscode: `import React, { useState } from 'react';
import { Textarea, Button } from 'sud-ui';
import { PieChartOutline, Chat } from 'sud-icons';

const BottomAddonTextarea = () => {
  const [value, setValue] = useState("");

  return (
    <Textarea
      placeholder="Bottom Button Area Textarea"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      autoSize
      bottomLeft={
        <Button size="sm" colorType="cool-gray">
          Cancel
        </Button>
      }
      bottomRight={
        <div style={{ display: "flex", gap: 6 }}>
          <Button size="sm" icon={<PieChartOutline size={16} />} />
          <Button size="sm" icon={<Chat size={16} />} colorType="primary">
            Send
          </Button>
        </div>
      }
    />
  );
};

export default BottomAddonTextarea;`,
      tscode: `import React, { useState } from 'react';
import { Textarea, Button } from 'sud-ui';
import { PieChartOutline, Chat } from 'sud-icons';

const BottomAddonTextarea: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Textarea
      placeholder="Bottom Button Area Textarea"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      autoSize
      bottomLeft={
        <Button size="sm" colorType="cool-gray">
          Cancel
        </Button>
      }
      bottomRight={
        <div style={{ display: "flex", gap: 6 }}>
          <Button size="sm" icon={<PieChartOutline size={16} />} />
          <Button size="sm" icon={<Chat size={16} />} colorType="primary">
            Send
          </Button>
        </div>
      }
    />
  );
};

export default BottomAddonTextarea;`
    }
  ];
  const howToUseTableData = [
    {
      key: "value",
      name: "value",
      description:
        lang === "ko" ? "입력 필드의 값" : "The value of the input field.",
      type: "string",
      default: '""'
    },
    {
      key: "onChange",
      name: "onChange",
      description:
        lang === "ko"
          ? "값이 변경될 때 호출되는 함수"
          : "The function called when the value changes.",
      type: "(e: { target: { value: string } }) => void",
      default: "() => {}"
    },
    {
      key: "placeholder",
      name: "placeholder",
      description:
        lang === "ko"
          ? "입력 필드의 placeholder 텍스트"
          : "The placeholder text of the input field.",
      type: "string",
      default: "-"
    },
    {
      key: "size",
      name: "size",
      description:
        lang === "ko" ? "입력 필드의 크기" : "The size of the input field.",
      type: (
        <>
          <Tag>sm</Tag> ｜ <Tag>md</Tag> ｜ <Tag>lg</Tag>
        </>
      ),
      default: <Tag>md</Tag>
    },
    {
      key: "shape",
      name: "shape",
      description:
        lang === "ko"
          ? "입력 필드의 모서리 모양"
          : "The shape of the input field.",
      type: (
        <>
          <Tag>rounded</Tag> ｜ <Tag>square</Tag>
        </>
      ),
      default: <Tag>rounded</Tag>
    },
    {
      key: "disabled",
      name: "disabled",
      description:
        lang === "ko"
          ? "입력 필드 비활성화 여부"
          : "The disabled state of the input field.",
      type: "boolean",
      default: "false"
    },
    {
      key: "readOnly",
      name: "readOnly",
      description:
        lang === "ko"
          ? "읽기 전용 여부"
          : "The read-only state of the input field.",
      type: "boolean",
      default: "false"
    },
    {
      key: "maxLength",
      name: "maxLength",
      description:
        lang === "ko" ? "최대 입력 길이" : "The maximum input length.",
      type: "number",
      default: "-"
    },
    {
      key: "label",
      name: "label",
      description:
        lang === "ko" ? "입력 필드의 라벨" : "The label of the input field.",
      type: "string | ReactNode",
      default: "-"
    },
    {
      key: "underline",
      name: "underline",
      description:
        lang === "ko" ? "밑줄 스타일 여부" : "The underline style state.",
      type: "boolean",
      default: "false"
    },
    {
      key: "error",
      name: "error",
      description: lang === "ko" ? "에러 상태 여부" : "The error state state.",
      type: "boolean",
      default: "false"
    },
    {
      key: "errorText",
      name: "errorText",
      description: lang === "ko" ? "에러 메시지" : "The error message.",
      type: "string",
      default: "-"
    },
    {
      key: "rows",
      name: "rows",
      description: lang === "ko" ? "기본 행 수" : "The default number of rows.",
      type: "number",
      default: "4"
    },
    {
      key: "resizable",
      name: "resizable",
      description:
        lang === "ko" ? "크기 조절 가능 여부" : "The resizable state.",
      type: "boolean",
      default: "false"
    },
    {
      key: "autoSize",
      name: "autoSize",
      description:
        lang === "ko" ? "자동 크기 조절 여부" : "The auto-size state.",
      type: "boolean",
      default: "false"
    },
    {
      key: "bottomLeft",
      name: "bottomLeft",
      description:
        lang === "ko" ? "하단 왼쪽 요소" : "The bottom left element.",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "bottomRight",
      name: "bottomRight",
      description:
        lang === "ko" ? "하단 오른쪽 요소" : "The bottom right element.",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "background",
      name: "background",
      description: lang === "ko" ? "배경색" : "The background color.",
      type: "string",
      default: "-"
    },
    {
      key: "color",
      name: "color",
      description: lang === "ko" ? "텍스트 색상" : "The text color.",
      type: "string",
      default: "-"
    },
    {
      key: "border",
      name: "border",
      description:
        lang === "ko" ? "테두리 표시 여부" : "The display state of the border.",
      type: "boolean",
      default: "true"
    },
    {
      key: "borderColor",
      name: "borderColor",
      description: lang === "ko" ? "테두리 색상" : "The border color.",
      type: "string",
      default: "-"
    },
    {
      key: "borderType",
      name: "borderType",
      description: lang === "ko" ? "테두리 스타일" : "The border style.",
      type: (
        <>
          <Tag>solid</Tag> ｜ <Tag>dashed</Tag> ｜ <Tag>dotted</Tag>
        </>
      ),
      default: <Tag>solid</Tag>
    },
    {
      key: "borderWeight",
      name: "borderWeight",
      description: lang === "ko" ? "테두리 두께" : "The border weight.",
      type: "number",
      default: "1"
    },
    {
      key: "shadow",
      name: "shadow",
      description: lang === "ko" ? "그림자 크기" : "The shadow size.",
      type: (
        <>
          <Tag>none</Tag> ｜ <Tag>sm</Tag> ｜ <Tag>md</Tag> ｜ <Tag>lg</Tag> ｜{" "}
          <Tag>xl</Tag>
        </>
      ),
      default: <Tag>sm</Tag>
    },
    {
      key: "className",
      name: "className",
      description:
        lang === "ko" ? "추가 클래스명" : "The additional class name.",
      type: "string",
      default: '""'
    },
    {
      key: "style",
      name: "style",
      description: lang === "ko" ? "추가 스타일" : "The additional style.",
      type: "React.CSSProperties",
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
        howToUseTableData
      }}
      grid={true}
      isMobile={isMobile}
    />
  );
}
