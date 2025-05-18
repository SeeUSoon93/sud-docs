"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { OTP, Tag, Radio, Card } from "sud-ui";

import React, { useState } from "react";

export default function OTPPage() {
  const { isMobile } = useMobile();
  const [size, setSize] = useState("md");
  const [type, setType] = useState("int");
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

  const name = "OTP";
  const description = <>OTP 입력 컴포넌트입니다.</>;

  const IMPORT_COMMAND = "import { OTP } from 'sud-ui';";

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
      label: "int",
      value: "int"
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
      description: "기본적인 OTP 입력 컴포넌트입니다.",
      render: (
        <>
          <OTP value={value} onChange={(e) => setValue(e.target.value)} />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { OTP } from 'sud-ui';

const BasicOTP = () => {
  const [value, setValue] = useState("");

  return (
    <OTP
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default BasicOTP;`,
      tscode: `import React, { useState } from 'react';
import { OTP } from 'sud-ui';

const BasicOTP: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <OTP
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default BasicOTP;`
    },
    {
      title: "Size",
      description: "OTP 입력 필드의 크기를 설정할 수 있습니다.",
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
          <OTP
            size={size}
            value={sizeValue}
            onChange={(e) => setSizeValue(e.target.value)}
          />
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { OTP, Radio, Card } from 'sud-ui';

const SizeOTP = () => {
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
      <OTP
        size={size}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default SizeOTP;`,
      tscode: `import React, { useState } from 'react';
import { OTP, Radio, Card } from 'sud-ui';

interface SizeOption {
  label: string;
  value: string;
}

const SizeOTP: React.FC = () => {
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
      <OTP
        size={size}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default SizeOTP;`
    },
    {
      title: "Disabled",
      description: "disabled 속성을 추가하면 OTP 입력 필드가 비활성화됩니다.",
      render: (
        <>
          <OTP
            value={disabledValue}
            onChange={(e) => setDisabledValue(e.target.value)}
            disabled
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { OTP } from 'sud-ui';

const DisabledOTP = () => {
  const [value, setValue] = useState("");

  return (
    <OTP
      value={value}
      onChange={(e) => setValue(e.target.value)}
      disabled
    />
  );
};

export default DisabledOTP;`,
      tscode: `import React, { useState } from 'react';
import { OTP } from 'sud-ui';

const DisabledOTP: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <OTP
      value={value}
      onChange={(e) => setValue(e.target.value)}
      disabled
    />
  );
};

export default DisabledOTP;`
    },
    {
      title: "Read Only",
      description:
        "readOnly 속성을 추가하면 OTP 입력 필드가 읽기 전용으로 변경됩니다.",
      render: (
        <>
          <OTP
            value={readOnlyValue}
            onChange={(e) => setReadOnlyValue(e.target.value)}
            readOnly
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { OTP } from 'sud-ui';

const ReadOnlyOTP = () => {
  const [value, setValue] = useState("");

  return (
    <OTP
      value={value}
      onChange={(e) => setValue(e.target.value)}
      readOnly
    />
  );
};

export default ReadOnlyOTP;`,
      tscode: `import React, { useState } from 'react';
import { OTP } from 'sud-ui';

const ReadOnlyOTP: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <OTP
      value={value}
      onChange={(e) => setValue(e.target.value)}
      readOnly
    />
  );
};

export default ReadOnlyOTP;`
    },
    {
      title: "OTP Type",
      description: "OTP 입력 필드의 타입을 설정할 수 있습니다.",
      render: (
        <div className="flex flex-col gap-20">
          <Card style={{ width: "100%" }} shadow="none" colorType="sub">
            <div className="flex jus-cen w-100">
              <Radio.Group
                options={typeOptions}
                direction="horizontal"
                value={type}
                onChange={setType}
              />
            </div>
          </Card>
          <OTP
            type={type}
            value={type === "text" ? textValue : numberValue}
            onChange={(e) =>
              type === "text"
                ? setTextValue(e.target.value)
                : setNumberValue(e.target.value)
            }
          />
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { OTP, Radio, Card } from 'sud-ui';

const TypeOTP = () => {
  const [type, setType] = useState('text');
  const [textValue, setTextValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  
  const typeOptions = [
    { label: 'text', value: 'text' },
    { label: 'int', value: 'int' },
  ];

  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen w-100">
          <Radio.Group
            options={typeOptions}
            direction="horizontal"
            value={type}
            onChange={setType}
          />
        </div>
      </Card>
      <OTP
        type={type}
        value={type === "text" ? textValue : numberValue}
        onChange={(e) =>
          type === "text"
            ? setTextValue(e.target.value)
            : setNumberValue(e.target.value)
        }
      />
    </div>
  );
};

export default TypeOTP;`,
      tscode: `import React, { useState } from 'react';
import { OTP, Radio, Card } from 'sud-ui';

interface TypeOption {
  label: string;
  value: string;
}

const TypeOTP: React.FC = () => {
  const [type, setType] = useState<string>('text');
  const [textValue, setTextValue] = useState<string>('');
  const [numberValue, setNumberValue] = useState<string>('');
  
  const typeOptions: TypeOption[] = [
    { label: 'text', value: 'text' },
    { label: 'int', value: 'int' },
  ];

  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen w-100">
          <Radio.Group
            options={typeOptions}
            direction="horizontal"
            value={type}
            onChange={setType}
          />
        </div>
      </Card>
      <OTP
        type={type}
        value={type === "text" ? textValue : numberValue}
        onChange={(e) =>
          type === "text"
            ? setTextValue(e.target.value)
            : setNumberValue(e.target.value)
        }
      />
    </div>
  );
};

export default TypeOTP;`
    },
    {
      title: "Length",
      description: "OTP 입력 필드의 길이를 설정할 수 있습니다.",
      render: (
        <>
          <OTP
            value={maxLengthValue}
            onChange={(e) => setMaxLengthValue(e.target.value)}
            length={4}
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { OTP } from 'sud-ui';

const LengthOTP = () => {
  const [value, setValue] = useState("");

  return (
    <OTP
      value={value}
      onChange={(e) => setValue(e.target.value)}
      length={4}
    />
  );
};

export default LengthOTP;`,
      tscode: `import React, { useState } from 'react';
import { OTP } from 'sud-ui';

const LengthOTP: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <OTP
      value={value}
      onChange={(e) => setValue(e.target.value)}
      length={4}
    />
  );
};

export default LengthOTP;`
    },
    {
      title: "Password",
      description:
        "password 속성을 추가하면 OTP 입력 필드가 비밀번호 입력 필드로 변경됩니다.",
      render: (
        <>
          <OTP
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            password
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { OTP } from 'sud-ui';

const PasswordOTP = () => {
  const [value, setValue] = useState("");

  return (
    <OTP
      value={value}
      onChange={(e) => setValue(e.target.value)}
      password
    />
  );
};

export default PasswordOTP;`,
      tscode: `import React, { useState } from 'react';
import { OTP } from 'sud-ui';

const PasswordOTP: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <OTP
      value={value}
      onChange={(e) => setValue(e.target.value)}
      password
    />
  );
};

export default PasswordOTP;`
    },
    {
      title: "Label",
      description:
        "label 속성을 추가하면 OTP 입력 필드의 라벨을 설정할 수 있습니다.",
      render: (
        <>
          <OTP
            value={labelValue}
            onChange={(e) => setLabelValue(e.target.value)}
            label="OTP 입력"
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { OTP } from 'sud-ui';

const LabelOTP = () => {
  const [value, setValue] = useState("");

  return (
    <OTP
      value={value}
      onChange={(e) => setValue(e.target.value)}
      label="OTP 입력"
    />
  );
};

export default LabelOTP;`,
      tscode: `import React, { useState } from 'react';
import { OTP } from 'sud-ui';

const LabelOTP: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <OTP
      value={value}
      onChange={(e) => setValue(e.target.value)}
      label="OTP 입력"
    />
  );
};

export default LabelOTP;`
    },
    {
      title: "Error State",
      description: "에러 상태와 메시지를 표시할 수 있습니다.",
      render: (
        <>
          <OTP
            value={errorValue}
            onChange={(e) => setErrorValue(e.target.value)}
            error={errorValue.length > 0}
            errorText="에러 메시지가 표시됩니다."
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { OTP } from 'sud-ui';

const ErrorOTP = () => {
  const [value, setValue] = useState("");

  return (
    <OTP
      value={value}
      onChange={(e) => setValue(e.target.value)}
      error={value.length > 0}
      errorText="에러 메시지가 표시됩니다."
    />
  );
};

export default ErrorOTP;`,
      tscode: `import React, { useState } from 'react';
import { OTP } from 'sud-ui';

const ErrorOTP: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <OTP
      value={value}
      onChange={(e) => setValue(e.target.value)}
      error={value.length > 0}
      errorText="에러 메시지가 표시됩니다."
    />
  );
};

export default ErrorOTP;`
    },
    {
      title: "Shape",
      description: "OTP 입력 필드의 모서리 모양을 설정할 수 있습니다.",
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
          <OTP shape={shape} />
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { OTP, Radio, Card } from 'sud-ui';

const ShapeOTP = () => {
  const [shape, setShape] = useState('rounded');
  
  const shapeOptions = [
    { label: 'rounded', value: 'rounded' },
    { label: 'square', value: 'square' },
    { label: 'capsule', value: 'capsule' }
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
      <OTP shape={shape} />
    </div>
  );
};

export default ShapeOTP;`,
      tscode: `import React, { useState } from 'react';
import { OTP, Radio, Card } from 'sud-ui';

interface ShapeOption {
  label: string;
  value: string;
}

const ShapeOTP: React.FC = () => {
  const [shape, setShape] = useState<string>('rounded');
  
  const shapeOptions: ShapeOption[] = [
    { label: 'rounded', value: 'rounded' },
    { label: 'square', value: 'square' },
    { label: 'capsule', value: 'capsule' }
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
      <OTP shape={shape} />
    </div>
  );
};

export default ShapeOTP;`
    },
    {
      title: "Color Customization",
      description: "OTP 입력 필드의 색상을 커스텀할 수 있습니다.",
      render: (
        <OTP
          value={colorValue}
          onChange={(e) => setColorValue(e.target.value)}
          color={"orange-8"}
          background={"orange-1"}
          borderColor={"orange-8"}
        />
      ),
      jscode: `import React, { useState } from 'react';
import { OTP } from 'sud-ui';

const CustomColorOTP = () => {
  const [value, setValue] = useState("");

  return (
    <OTP
      value={value}
      onChange={(e) => setValue(e.target.value)}
      color="orange-8"
      background="orange-1"
      borderColor="orange-8"
    />
  );
};

export default CustomColorOTP;`,
      tscode: `import React, { useState } from 'react';
import { OTP } from 'sud-ui';

const CustomColorOTP: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <OTP
      value={value}
      onChange={(e) => setValue(e.target.value)}
      color="orange-8"
      background="orange-1"
      borderColor="orange-8"
    />
  );
};

export default CustomColorOTP;`
    },
    {
      title: "Alphanumeric Type",
      description: "영문자와 숫자를 모두 입력할 수 있는 OTP 입력 필드입니다.",
      render: (
        <div className="flex flex-col gap-20">
          <Card style={{ width: "100%" }} shadow="none" colorType="sub">
            <div className="flex jus-cen w-100">
              <Radio.Group
                options={typeOptions}
                direction="horizontal"
                value={type}
                onChange={setType}
              />
            </div>
          </Card>
          <OTP
            type={type}
            value={type === "alphanumeric" ? textValue : numberValue}
            onChange={(e) =>
              type === "alphanumeric"
                ? setTextValue(e.target.value)
                : setNumberValue(e.target.value)
            }
          />
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { OTP, Radio, Card } from 'sud-ui';

const AlphanumericOTP = () => {
  const [type, setType] = useState('alphanumeric');
  const [textValue, setTextValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  
  const typeOptions = [
    { label: 'text', value: 'text' },
    { label: 'int', value: 'int' },
  ];

  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen w-100">
          <Radio.Group
            options={typeOptions}
            direction="horizontal"
            value={type}
            onChange={setType}
          />
        </div>
      </Card>
      <OTP
        type={type}
        value={type === "alphanumeric" ? textValue : numberValue}
        onChange={(e) =>
          type === "alphanumeric"
            ? setTextValue(e.target.value)
            : setNumberValue(e.target.value)
        }
      />
    </div>
  );
};

export default AlphanumericOTP;`,
      tscode: `import React, { useState } from 'react';
import { OTP, Radio, Card } from 'sud-ui';

interface TypeOption {
  label: string;
  value: string;
}

const AlphanumericOTP: React.FC = () => {
  const [type, setType] = useState<string>('alphanumeric');
  const [textValue, setTextValue] = useState<string>('');
  const [numberValue, setNumberValue] = useState<string>('');
  
  const typeOptions: TypeOption[] = [
    { label: 'text', value: 'text' },
    { label: 'int', value: 'int' },
  ];

  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen w-100">
          <Radio.Group
            options={typeOptions}
            direction="horizontal"
            value={type}
            onChange={setType}
          />
        </div>
      </Card>
      <OTP
        type={type}
        value={type === "alphanumeric" ? textValue : numberValue}
        onChange={(e) =>
          type === "alphanumeric"
            ? setTextValue(e.target.value)
            : setNumberValue(e.target.value)
        }
      />
    </div>
  );
};

export default AlphanumericOTP;`
    }
  ];

  const howToUseTableData = [
    {
      key: "value",
      name: "value",
      description: "OTP 입력 필드의 값",
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
      key: "length",
      name: "length",
      description: "OTP 입력 필드의 개수",
      type: "number",
      default: "6"
    },
    {
      key: "type",
      name: "type",
      description: "OTP 입력 필드의 타입",
      type: (
        <>
          <Tag>text</Tag> ｜ <Tag>int</Tag>
        </>
      ),
      default: <Tag>int</Tag>
    },
    {
      key: "size",
      name: "size",
      description: "OTP 입력 필드의 크기",
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
      description: "OTP 입력 필드의 모서리 모양",
      type: (
        <>
          <Tag>rounded</Tag> ｜ <Tag>square</Tag> ｜ <Tag>capsule</Tag>
        </>
      ),
      default: <Tag>rounded</Tag>
    },
    {
      key: "disabled",
      name: "disabled",
      description: "OTP 입력 필드 비활성화 여부",
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
      key: "password",
      name: "password",
      description: "비밀번호 입력 필드 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "label",
      name: "label",
      description: "OTP 입력 필드의 라벨",
      type: "string | ReactNode",
      default: "-"
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
