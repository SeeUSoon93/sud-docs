"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Textarea, Tag, Radio, Card, Button } from "sud-ui";

import React, { useState } from "react";
import { Search, PieChartOutline, Chat } from "sud-icons";

export default function TextareaPage() {
  const { isMobile } = useMobile();
  const [size, setSize] = useState("md");
  const [type, setType] = useState("text");
  const [value, setValue] = useState("");
  const [sizeValue, setSizeValue] = useState("");
  const [disabledValue, setDisabledValue] = useState("");
  const [readOnlyValue, setReadOnlyValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [maxLengthValue, setMaxLengthValue] = useState("");
  const [clearableValue, setClearableValue] = useState("지워보세요!");
  const [passwordValue, setPasswordValue] = useState("");
  const [labelValue, setLabelValue] = useState("");
  const [underlineValue, setUnderlineValue] = useState("");
  const [autoCompleteValue, setAutoCompleteValue] = useState("");
  const [errorValue, setErrorValue] = useState("");
  const [shape, setShape] = useState("rounded");
  const [iconPosition, setIconPosition] = useState("after");
  const [prefixSuffix, setPrefixSuffix] = useState("prefix");
  const [colorValue, setColorValue] = useState("");
  const [shapeValue, setShapeValue] = useState("");
  const [iconValue, setIconValue] = useState("");
  const [prefixSuffixValue, setPrefixSuffixValue] = useState("");
  const [thousandValue, setThousandValue] = useState("");
  const [resizableValue, setResizableValue] = useState("");
  const [autoSizeValue, setAutoSizeValue] = useState("");
  const [bottomAddonValue, setBottomAddonValue] = useState("");

  const name = "Textarea";
  const description = <>텍스트를 입력할 수 있는 입력 컴포넌트입니다.</>;

  const IMPORT_COMMAND = "import { Textarea } from 'sud-ui';";

  const whenToUse = ["텍스트를 입력할 때."];

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
  const typeOptions = [
    {
      label: "text",
      value: "text"
    },
    {
      label: "number",
      value: "number"
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

  const iconPositionOptions = [
    {
      label: "앞",
      value: "before"
    },
    {
      label: "뒤",
      value: "after"
    }
  ];

  const prefixSuffixOptions = [
    {
      label: "접두사",
      value: "prefix"
    },
    {
      label: "접미사",
      value: "suffix"
    }
  ];

  const examples = [
    {
      title: "Basic Usage",
      description: "기본적인 입력 컴포넌트입니다.",
      render: (
        <>
          <Textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="텍스트를 입력해주세요."
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
      placeholder="텍스트를 입력해주세요."
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
      placeholder="텍스트를 입력해주세요."
    />
  );
};

export default BasicTextarea;`
    },
    {
      title: "Size",
      description: "Textarea 의 크기를 설정할 수 있습니다.",
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
            placeholder={`${size} 크기의 Textarea 입니다.`}
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
        placeholder={\`\${size} 크기의 Textarea 입니다.\`}
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
        placeholder={\`\${size} 크기의 Textarea 입니다.\`}
      />
    </div>
  );
};

export default SizeTextarea;`
    },
    {
      title: "Disabled",
      description: "disabled 속성을 추가하면 입력 필드가 비활성화됩니다.",
      render: (
        <>
          <Textarea
            value={disabledValue}
            onChange={(e) => setDisabledValue(e.target.value)}
            disabled
            placeholder="비활성화된 Textarea 입니다."
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
      placeholder="비활성화된 Textarea 입니다."
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
      placeholder="비활성화된 Textarea 입니다."
    />
  );
};

export default DisabledTextarea;`
    },
    {
      title: "Read Only",
      description:
        "readOnly 속성을 추가하면 입력 필드가 읽기 전용으로 변경됩니다.",
      render: (
        <>
          <Textarea
            value={readOnlyValue}
            onChange={(e) => setReadOnlyValue(e.target.value)}
            readOnly
            placeholder="읽기 전용 Textarea 입니다."
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
      placeholder="읽기 전용 Textarea 입니다."
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
      placeholder="읽기 전용 Textarea 입니다."
    />
  );
};

export default ReadOnlyTextarea;`
    },
    {
      title: "Max Length",
      description: "최대 입력 길이를 설정할 수 있습니다.",
      render: (
        <>
          <Textarea
            value={maxLengthValue}
            onChange={(e) => setMaxLengthValue(e.target.value)}
            maxLength={120}
            placeholder="최대 길이를 설정한 Textarea 입니다."
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
      maxLength={12}
      placeholder="최대 길이를 설정한 Textarea 입니다."
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
      maxLength={12}
      placeholder="최대 길이를 설정한 Textarea 입니다."
    />
  );
};

export default MaxLengthTextarea;`
    },
    {
      title: "Label",
      description:
        "label 속성을 추가하면 입력 필드의 라벨을 설정할 수 있습니다.",
      render: (
        <>
          <Textarea
            value={labelValue}
            onChange={(e) => setLabelValue(e.target.value)}
            label="Introduction"
            placeholder="label 속성을 추가한 Textarea 입니다."
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
      placeholder="label 속성을 추가한 Textarea 입니다."
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
      placeholder="label 속성을 추가한 Textarea 입니다."
    />
  );
};

export default LabelTextarea;`
    },
    {
      title: "Underline",
      description: "밑줄 스타일의 입력 필드입니다.",
      render: (
        <>
          <Textarea
            value={underlineValue}
            onChange={(e) => setUnderlineValue(e.target.value)}
            underline
            placeholder="밑줄 스타일의 Textarea 입니다."
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
      placeholder="밑줄 스타일의 Textarea 입니다."
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
      placeholder="밑줄 스타일의 Textarea 입니다."
    />
  );
};

export default UnderlineTextarea;`
    },
    {
      title: "Error State",
      description: "에러 상태와 메시지를 표시할 수 있습니다.",
      render: (
        <>
          <Textarea
            value={errorValue}
            onChange={(e) => setErrorValue(e.target.value)}
            error={errorValue.length > 0}
            errorText="에러 메시지가 표시됩니다."
            placeholder="에러 상태의 Textarea 입니다."
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
      errorText="에러 메시지가 표시됩니다."
      placeholder="에러 상태의 Textarea 입니다."
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
      errorText="에러 메시지가 표시됩니다."
      placeholder="에러 상태의 Textarea 입니다."
    />
  );
};

export default ErrorTextarea;`
    },
    {
      title: "Shape",
      description: "입력 필드의 모서리 모양을 설정할 수 있습니다.",
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
            placeholder={`${shape} 모양의 Textarea 입니다.`}
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
        placeholder={\`\${shape} 모양의 Textarea 입니다.\`}
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
        placeholder={\`\${shape} 모양의 Textarea 입니다.\`}
      />
    </div>
  );
};

export default ShapeTextarea;`
    },
    {
      title: "Color Customization",
      description: "입력 필드의 색상을 커스텀할 수 있습니다.",
      render: (
        <Textarea
          placeholder="textColor를 입력하세요"
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
      placeholder="textColor를 입력하세요"
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
      placeholder="textColor를 입력하세요"
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
      description: "크기 조절 가능한 입력 필드입니다.",
      render: (
        <Textarea
          value={resizableValue}
          onChange={(e) => setResizableValue(e.target.value)}
          resizable
          placeholder="크기 조절 가능한 Textarea 입니다."
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
      placeholder="크기 조절 가능한 Textarea 입니다."
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
      placeholder="크기 조절 가능한 Textarea 입니다."
    />
  );
};

export default ResizableTextarea;`
    },
    {
      title: "Auto Size",
      description: "자동 크기 조절 가능한 입력 필드입니다.",
      render: (
        <Textarea
          value={autoSizeValue}
          onChange={(e) => setAutoSizeValue(e.target.value)}
          autoSize
          placeholder="자동 크기 조절 가능한 Textarea 입니다."
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
      placeholder="자동 크기 조절 가능한 Textarea 입니다."
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
      placeholder="자동 크기 조절 가능한 Textarea 입니다."
    />
  );
};

export default AutoSizeTextarea;`
    },
    {
      title: "Bottom Addon",
      description: "하단에 추가 요소를 표시할 수 있습니다.",
      render: (
        <Textarea
          placeholder="하단 버튼 영역이 있는 Textarea"
          value={bottomAddonValue}
          onChange={(e) => setBottomAddonValue(e.target.value)}
          autoSize
          bottomLeft={
            <Button size="sm" colorType="cool-gray">
              취소
            </Button>
          }
          bottomRight={
            <div style={{ display: "flex", gap: 6 }}>
              <Button size="sm" icon={<PieChartOutline size={16} />} />
              <Button size="sm" icon={<Chat size={16} />} colorType="primary">
                보내기
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
      placeholder="하단 버튼 영역이 있는 Textarea"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      autoSize
      bottomLeft={
        <Button size="sm" colorType="cool-gray">
          취소
        </Button>
      }
      bottomRight={
        <div style={{ display: "flex", gap: 6 }}>
          <Button size="sm" icon={<PieChartOutline size={16} />} />
          <Button size="sm" icon={<Chat size={16} />} colorType="primary">
            보내기
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
      placeholder="하단 버튼 영역이 있는 Textarea"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      autoSize
      bottomLeft={
        <Button size="sm" colorType="cool-gray">
          취소
        </Button>
      }
      bottomRight={
        <div style={{ display: "flex", gap: 6 }}>
          <Button size="sm" icon={<PieChartOutline size={16} />} />
          <Button size="sm" icon={<Chat size={16} />} colorType="primary">
            보내기
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
      description: "입력 필드의 값",
      type: "string",
      default: '""'
    },
    {
      key: "onChange",
      name: "onChange",
      description: "값이 변경될 때 호출되는 함수",
      type: "(e: { target: { value: string } }) => void",
      default: "() => {}"
    },
    {
      key: "placeholder",
      name: "placeholder",
      description: "입력 필드의 placeholder 텍스트",
      type: "string",
      default: "-"
    },
    {
      key: "size",
      name: "size",
      description: "입력 필드의 크기",
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
      description: "입력 필드의 모서리 모양",
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
      description: "입력 필드 비활성화 여부",
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
      key: "maxLength",
      name: "maxLength",
      description: "최대 입력 길이",
      type: "number",
      default: "-"
    },
    {
      key: "label",
      name: "label",
      description: "입력 필드의 라벨",
      type: "string | ReactNode",
      default: "-"
    },
    {
      key: "underline",
      name: "underline",
      description: "밑줄 스타일 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "error",
      name: "error",
      description: "에러 상태 여부",
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
      key: "rows",
      name: "rows",
      description: "기본 행 수",
      type: "number",
      default: "4"
    },
    {
      key: "resizable",
      name: "resizable",
      description: "크기 조절 가능 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "autoSize",
      name: "autoSize",
      description: "자동 크기 조절 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "bottomLeft",
      name: "bottomLeft",
      description: "하단 왼쪽 요소",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "bottomRight",
      name: "bottomRight",
      description: "하단 오른쪽 요소",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "background",
      name: "background",
      description: "배경색",
      type: "string",
      default: "-"
    },
    {
      key: "color",
      name: "color",
      description: "텍스트 색상",
      type: "string",
      default: "-"
    },
    {
      key: "border",
      name: "border",
      description: "테두리 표시 여부",
      type: "boolean",
      default: "true"
    },
    {
      key: "borderColor",
      name: "borderColor",
      description: "테두리 색상",
      type: "string",
      default: "-"
    },
    {
      key: "borderType",
      name: "borderType",
      description: "테두리 스타일",
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
      description: "테두리 두께",
      type: "number",
      default: "1"
    },
    {
      key: "shadow",
      name: "shadow",
      description: "그림자 크기",
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
      description: "추가 클래스명",
      type: "string",
      default: '""'
    },
    {
      key: "style",
      name: "style",
      description: "추가 스타일",
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
