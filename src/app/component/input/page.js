"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Input, Tag, Radio, Card, Select } from "sud-ui";

import React, { useEffect, useState } from "react";
import { Search } from "sud-icons";

export default function InputPage() {
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

  const name = "Input";
  const description = <>텍스트를 입력할 수 있는 입력 컴포넌트입니다.</>;

  const IMPORT_COMMAND = "import { Input } from 'sud-ui';";

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
      description: "기본적인 입력 컴포넌트입니다.",
      render: (
        <>
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="텍스트를 입력해주세요."
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const BasicInput = () => {
  const [value, setValue] = useState("");

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="텍스트를 입력해주세요."
    />
  );
};

export default BasicInput;`,
      tscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const BasicInput: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="텍스트를 입력해주세요."
    />
  );
};

export default BasicInput;`
    },
    {
      title: "Size",
      description: "Input 의 크기를 설정할 수 있습니다.",
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
          <Input
            size={size}
            value={sizeValue}
            onChange={(e) => setSizeValue(e.target.value)}
            placeholder={`${size} 크기의 Input 입니다.`}
          />
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Input, Radio, Card } from 'sud-ui';

const SizeInput = () => {
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
      <Input
        size={size}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={\`\${size} 크기의 Input 입니다.\`}
      />
    </div>
  );
};

export default SizeInput;`,
      tscode: `import React, { useState } from 'react';
import { Input, Radio, Card } from 'sud-ui';

interface SizeOption {
  label: string;
  value: string;
}

const SizeInput: React.FC = () => {
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
      <Input
        size={size}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={\`\${size} 크기의 Input 입니다.\`}
      />
    </div>
  );
};

export default SizeInput;`
    },
    {
      title: "Disabled",
      description: "disabled 속성을 추가하면 입력 필드가 비활성화됩니다.",
      render: (
        <>
          <Input
            value={disabledValue}
            onChange={(e) => setDisabledValue(e.target.value)}
            disabled
            placeholder="비활성화된 Input 입니다."
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const DisabledInput = () => {
  const [value, setValue] = useState("");

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      disabled
      placeholder="비활성화된 Input 입니다."
    />
  );
};

export default DisabledInput;`,
      tscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const DisabledInput: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      disabled
      placeholder="비활성화된 Input 입니다."
    />
  );
};

export default DisabledInput;`
    },
    {
      title: "Read Only",
      description:
        "readOnly 속성을 추가하면 입력 필드가 읽기 전용으로 변경됩니다.",
      render: (
        <>
          <Input
            value={readOnlyValue}
            onChange={(e) => setReadOnlyValue(e.target.value)}
            readOnly
            placeholder="읽기 전용 Input 입니다."
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const ReadOnlyInput = () => {
  const [value, setValue] = useState("");

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      readOnly
      placeholder="읽기 전용 Input 입니다."
    />
  );
};

export default ReadOnlyInput;`,
      tscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const ReadOnlyInput: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      readOnly
      placeholder="읽기 전용 Input 입니다."
    />
  );
};

export default ReadOnlyInput;`
    },
    {
      title: "Input Type",
      description: "입력 필드의 타입을 설정할 수 있습니다.",
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
          <Input
            type={type}
            value={type === "text" ? textValue : numberValue}
            onChange={(e) =>
              type === "text"
                ? setTextValue(e.target.value)
                : setNumberValue(e.target.value)
            }
            placeholder={`${type} 타입의 Input 입니다.`}
          />
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Input, Radio, Card } from 'sud-ui';

const TypeInput = () => {
  const [type, setType] = useState('text');
  const [textValue, setTextValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  
  const typeOptions = [
    { label: 'text', value: 'text' },
    { label: 'number', value: 'number' }
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
      <Input
        type={type}
        value={type === "text" ? textValue : numberValue}
        onChange={(e) =>
          type === "text"
            ? setTextValue(e.target.value)
            : setNumberValue(e.target.value)
        }
        placeholder={\`\${type} 타입의 Input 입니다.\`}
      />
    </div>
  );
};

export default TypeInput;`,
      tscode: `import React, { useState } from 'react';
import { Input, Radio, Card } from 'sud-ui';

interface TypeOption {
  label: string;
  value: string;
}

const TypeInput: React.FC = () => {
  const [type, setType] = useState<string>('text');
  const [textValue, setTextValue] = useState<string>('');
  const [numberValue, setNumberValue] = useState<string>('');
  
  const typeOptions: TypeOption[] = [
    { label: 'text', value: 'text' },
    { label: 'number', value: 'number' }
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
      <Input
        type={type}
        value={type === "text" ? textValue : numberValue}
        onChange={(e) =>
          type === "text"
            ? setTextValue(e.target.value)
            : setNumberValue(e.target.value)
        }
        placeholder={\`\${type} 타입의 Input 입니다.\`}
      />
    </div>
  );
};

export default TypeInput;`
    },
    {
      title: "Max Length",
      description: "최대 입력 길이를 설정할 수 있습니다.",
      render: (
        <>
          <Input
            value={maxLengthValue}
            onChange={(e) => setMaxLengthValue(e.target.value)}
            maxLength={12}
            placeholder="최대 길이를 설정한 Input 입니다."
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const MaxLengthInput = () => {
  const [value, setValue] = useState("");

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      maxLength={12}
      placeholder="최대 길이를 설정한 Input 입니다."
    />
  );
};

export default MaxLengthInput;`,
      tscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const MaxLengthInput: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      maxLength={12}
      placeholder="최대 길이를 설정한 Input 입니다."
    />
  );
};

export default MaxLengthInput;`
    },
    {
      title: "Clearable",
      description:
        "clearable 속성을 추가하면 입력 필드의 값을 지울 수 있습니다.",
      render: (
        <>
          <Input
            value={clearableValue}
            onChange={(e) => setClearableValue(e.target.value)}
            clearable
            placeholder="clearable 속성을 추가한 Input 입니다."
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const ClearableInput = () => {
  const [value, setValue] = useState("지워보세요!");

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      clearable
      placeholder="clearable 속성을 추가한 Input 입니다."
    />
  );
};

export default ClearableInput;`,
      tscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const ClearableInput: React.FC = () => {
  const [value, setValue] = useState("지워보세요!");

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      clearable
      placeholder="clearable 속성을 추가한 Input 입니다."
    />
  );
};

export default ClearableInput;`
    },
    {
      title: "Password",
      description:
        "password 속성을 추가하면 입력 필드가 비밀번호 입력 필드로 변경됩니다.",
      render: (
        <>
          <Input
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            password
            placeholder="password 속성을 추가한 Input 입니다."
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const PasswordInput = () => {
  const [value, setValue] = useState("");

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      password
      placeholder="password 속성을 추가한 Input 입니다."
    />
  );
};

export default PasswordInput;`,
      tscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const PasswordInput: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      password
      placeholder="password 속성을 추가한 Input 입니다."
    />
  );
};

export default PasswordInput;`
    },
    {
      title: "Label",
      description:
        "label 속성을 추가하면 입력 필드의 라벨을 설정할 수 있습니다.",
      render: (
        <>
          <Input
            value={labelValue}
            onChange={(e) => setLabelValue(e.target.value)}
            label="name"
            placeholder="label 속성을 추가한 Input 입니다."
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const LabelInput = () => {
  const [value, setValue] = useState("");

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      label="name"
      placeholder="label 속성을 추가한 Input 입니다."
    />
  );
};

export default LabelInput;`,
      tscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const LabelInput: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      label="name"
      placeholder="label 속성을 추가한 Input 입니다."
    />
  );
};

export default LabelInput;`
    },
    {
      title: "Underline",
      description: "밑줄 스타일의 입력 필드입니다.",
      render: (
        <>
          <Input
            value={underlineValue}
            onChange={(e) => setUnderlineValue(e.target.value)}
            underline
            placeholder="밑줄 스타일의 Input 입니다."
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const UnderlineInput = () => {
  const [value, setValue] = useState("");

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      underline
      placeholder="밑줄 스타일의 Input 입니다."
    />
  );
};

export default UnderlineInput;`,
      tscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const UnderlineInput: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      underline
      placeholder="밑줄 스타일의 Input 입니다."
    />
  );
};

export default UnderlineInput;`
    },
    {
      title: "Auto Complete",
      description: "자동 완성 기능이 있는 입력 필드입니다.",
      render: (
        <>
          <Input
            value={autoCompleteValue}
            onChange={(e) => setAutoCompleteValue(e.target.value)}
            autoComplete="email"
            placeholder="이메일을 입력해주세요."
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const AutoCompleteInput = () => {
  const [value, setValue] = useState("");

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      autoComplete="email"
      placeholder="이메일을 입력해주세요."
    />
  );
};

export default AutoCompleteInput;`,
      tscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const AutoCompleteInput: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      autoComplete="email"
      placeholder="이메일을 입력해주세요."
    />
  );
};

export default AutoCompleteInput;`
    },
    {
      title: "Error State",
      description: "에러 상태와 메시지를 표시할 수 있습니다.",
      render: (
        <>
          <Input
            value={errorValue}
            onChange={(e) => setErrorValue(e.target.value)}
            error={errorValue.length > 0}
            errorText="에러 메시지가 표시됩니다."
            placeholder="에러 상태의 Input 입니다."
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const ErrorInput = () => {
  const [value, setValue] = useState("");

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      error={value.length > 0}
      errorText="에러 메시지가 표시됩니다."
      placeholder="에러 상태의 Input 입니다."
    />
  );
};

export default ErrorInput;`,
      tscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const ErrorInput: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      error={value.length > 0}
      errorText="에러 메시지가 표시됩니다."
      placeholder="에러 상태의 Input 입니다."
    />
  );
};

export default ErrorInput;`
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
          <Input shape={shape} placeholder={`${shape} 모양의 Input 입니다.`} />
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Input, Radio, Card } from 'sud-ui';

const ShapeInput = () => {
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
      <Input shape={shape} placeholder={\`\${shape} 모양의 Input 입니다.\`} />
    </div>
  );
};

export default ShapeInput;`,
      tscode: `import React, { useState } from 'react';
import { Input, Radio, Card } from 'sud-ui';

interface ShapeOption {
  label: string;
  value: string;
}

const ShapeInput: React.FC = () => {
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
      <Input shape={shape} placeholder={\`\${shape} 모양의 Input 입니다.\`} />
    </div>
  );
};

export default ShapeInput;`
    },
    {
      title: "Icon",
      description: "입력 필드 앞뒤에 아이콘을 추가할 수 있습니다.",
      render: (
        <div className="flex flex-col gap-20">
          <Card style={{ width: "100%" }} shadow="none" colorType="sub">
            <div className="flex jus-cen w-100">
              <Radio.Group
                options={iconPositionOptions}
                direction="horizontal"
                value={iconPosition}
                onChange={setIconPosition}
              />
            </div>
          </Card>
          <Input
            {...(iconPosition === "before"
              ? { beforeIcon: "🔍" }
              : { afterIcon: "🔍" })}
            placeholder="아이콘이 있는 Input 입니다."
          />
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Input, Radio, Card } from 'sud-ui';

const IconInput = () => {
  const [iconPosition, setIconPosition] = useState('after');
  
  const iconPositionOptions = [
    { label: '앞', value: 'before' },
    { label: '뒤', value: 'after' }
  ];

  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen w-100">
          <Radio.Group
            options={iconPositionOptions}
            direction="horizontal"
            value={iconPosition}
            onChange={setIconPosition}
          />
        </div>
      </Card>
      <Input
        {...(iconPosition === "before"
          ? { beforeIcon: "🔍" }
          : { afterIcon: "🔍" })}
        placeholder="아이콘이 있는 Input 입니다."
      />
    </div>
  );
};

export default IconInput;`,
      tscode: `import React, { useState } from 'react';
import { Input, Radio, Card } from 'sud-ui';

interface IconPositionOption {
  label: string;
  value: string;
}

const IconInput: React.FC = () => {
  const [iconPosition, setIconPosition] = useState<string>('after');
  
  const iconPositionOptions: IconPositionOption[] = [
    { label: '앞', value: 'before' },
    { label: '뒤', value: 'after' }
  ];

  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen w-100">
          <Radio.Group
            options={iconPositionOptions}
            direction="horizontal"
            value={iconPosition}
            onChange={setIconPosition}
          />
        </div>
      </Card>
      <Input
        {...(iconPosition === "before"
          ? { beforeIcon: "🔍" }
          : { afterIcon: "🔍" })}
        placeholder="아이콘이 있는 Input 입니다."
      />
    </div>
  );
};

export default IconInput;`
    },
    {
      title: "Prefix/Suffix",
      description: "입력 필드 앞뒤에 텍스트를 추가할 수 있습니다.",
      render: (
        <div className="flex flex-col gap-20">
          <Card style={{ width: "100%" }} shadow="none" colorType="sub">
            <div className="flex jus-cen w-100">
              <Radio.Group
                options={prefixSuffixOptions}
                direction="horizontal"
                value={prefixSuffix}
                onChange={setPrefixSuffix}
              />
            </div>
          </Card>
          <Input
            {...(prefixSuffix === "prefix"
              ? { prefix: "₩" }
              : { suffix: "원" })}
            placeholder="접두사/접미사가 있는 Input 입니다."
          />
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Input, Radio, Card } from 'sud-ui';

const PrefixSuffixInput = () => {
  const [prefixSuffix, setPrefixSuffix] = useState('prefix');
  
  const prefixSuffixOptions = [
    { label: '접두사', value: 'prefix' },
    { label: '접미사', value: 'suffix' }
  ];

  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen w-100">
          <Radio.Group
            options={prefixSuffixOptions}
            direction="horizontal"
            value={prefixSuffix}
            onChange={setPrefixSuffix}
          />
        </div>
      </Card>
      <Input
        {...(prefixSuffix === "prefix"
          ? { prefix: "₩" }
          : { suffix: "원" })}
        placeholder="접두사/접미사가 있는 Input 입니다."
      />
    </div>
  );
};

export default PrefixSuffixInput;`,
      tscode: `import React, { useState } from 'react';
import { Input, Radio, Card } from 'sud-ui';

interface PrefixSuffixOption {
  label: string;
  value: string;
}

const PrefixSuffixInput: React.FC = () => {
  const [prefixSuffix, setPrefixSuffix] = useState<string>('prefix');
  
  const prefixSuffixOptions: PrefixSuffixOption[] = [
    { label: '접두사', value: 'prefix' },
    { label: '접미사', value: 'suffix' }
  ];

  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen w-100">
          <Radio.Group
            options={prefixSuffixOptions}
            direction="horizontal"
            value={prefixSuffix}
            onChange={setPrefixSuffix}
          />
        </div>
      </Card>
      <Input
        {...(prefixSuffix === "prefix"
          ? { prefix: "₩" }
          : { suffix: "원" })}
        placeholder="접두사/접미사가 있는 Input 입니다."
      />
    </div>
  );
};

export default PrefixSuffixInput;`
    },
    {
      title: "Color Customization",
      description: "입력 필드의 색상을 커스텀할 수 있습니다.",
      render: (
        <Input
          placeholder="textColor를 입력하세요"
          value={colorValue}
          onChange={(e) => setColorValue(e.target.value)}
          color={"orange-8"}
          background={"orange-1"}
          borderColor={"orange-8"}
        />
      ),
      jscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const CustomColorInput = () => {
  const [value, setValue] = useState("");

  return (
    <Input
      placeholder="textColor를 입력하세요"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      color="orange-8"
      background="orange-1"
      borderColor="orange-8"
    />
  );
};

export default CustomColorInput;`,
      tscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const CustomColorInput: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Input
      placeholder="textColor를 입력하세요"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      color="orange-8"
      background="orange-1"
      borderColor="orange-8"
    />
  );
};

export default CustomColorInput;`
    }
  ];
  const howToUseTableData = [
    {
      key: "value",
      name: "value",
      description: "입력 필드의 값",
      type: "string",
      default: "''"
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
      key: "type",
      name: "type",
      description: "입력 필드의 타입",
      type: "string",
      default: "text"
    },
    {
      key: "maxLength",
      name: "maxLength",
      description: "최대 입력 길이",
      type: "number",
      default: "-"
    },
    {
      key: "clearable",
      name: "clearable",
      description: "지우기 버튼 표시 여부",
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
      description: "입력 필드의 라벨",
      type: "string | ReactNode",
      default: "-"
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
      key: "shape",
      name: "shape",
      description: "입력 필드의 모서리 모양",
      type: (
        <>
          <Tag>rounded</Tag> ｜ <Tag>square</Tag> ｜ <Tag>capsule</Tag>
        </>
      ),
      default: "rounded"
    },
    {
      key: "shadow",
      name: "shadow",
      description: "입력 필드의 그림자 스타일",
      type: (
        <>
          <Tag>none</Tag> ｜ <Tag>sm</Tag> ｜ <Tag>md</Tag> ｜ <Tag>lg</Tag>
        </>
      ),
      default: "sm"
    },
    {
      key: "background",
      name: "background",
      description: "입력 필드의 배경색",
      type: "string",
      default: "-"
    },
    {
      key: "border",
      name: "border",
      description: "입력 필드의 테두리 표시 여부",
      type: "boolean",
      default: "true"
    },
    {
      key: "borderColor",
      name: "borderColor",
      description: "입력 필드의 테두리 색상",
      type: "string",
      default: "-"
    },
    {
      key: "borderType",
      name: "borderType",
      description: "입력 필드의 테두리 스타일",
      type: "string",
      default: "solid"
    },
    {
      key: "borderWeight",
      name: "borderWeight",
      description: "입력 필드의 테두리 두께",
      type: "number",
      default: "1"
    },
    {
      key: "underline",
      name: "underline",
      description: "밑줄 스타일 적용 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "afterIcon",
      name: "afterIcon",
      description: "입력 필드 뒤에 표시할 아이콘",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "beforeIcon",
      name: "beforeIcon",
      description: "입력 필드 앞에 표시할 아이콘",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "prefix",
      name: "prefix",
      description: "입력 필드 앞에 표시할 접두사",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "suffix",
      name: "suffix",
      description: "입력 필드 뒤에 표시할 접미사",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "autoFocus",
      name: "autoFocus",
      description: "자동 포커스 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "id",
      name: "id",
      description: "입력 필드의 고유 식별자",
      type: "string",
      default: "-"
    },
    {
      key: "name",
      name: "name",
      description: "입력 필드의 이름",
      type: "string",
      default: "-"
    },
    {
      key: "autoComplete",
      name: "autoComplete",
      description: "자동 완성 기능",
      type: "string",
      default: "-"
    },
    {
      key: "ariaLabel",
      name: "ariaLabel",
      description: "접근성을 위한 레이블",
      type: "string",
      default: "-"
    },
    {
      key: "ariaRequired",
      name: "ariaRequired",
      description: "접근성을 위한 필수 입력 여부",
      type: "boolean",
      default: "-"
    },
    {
      key: "ariaInvalid",
      name: "ariaInvalid",
      description: "접근성을 위한 유효성 상태",
      type: "boolean",
      default: "-"
    },
    {
      key: "ariaDescribedby",
      name: "ariaDescribedby",
      description: "접근성을 위한 설명 ID",
      type: "string",
      default: "-"
    },
    {
      key: "color",
      name: "color",
      description: "입력 필드의 텍스트 색상",
      type: "string",
      default: "-"
    },
    {
      key: "className",
      name: "className",
      description: "추가 클래스명",
      type: "string",
      default: "''"
    },
    {
      key: "style",
      name: "style",
      description: "추가 스타일",
      type: "React.CSSProperties",
      default: "{}"
    },
    {
      key: "required",
      name: "required",
      description: "필수 입력 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "onClick",
      name: "onClick",
      description: "클릭 시 호출되는 콜백",
      type: "(e: MouseEvent) => void",
      default: "-"
    }
  ];

  const tabPaneProps = [
    {
      key: "label",
      name: "label",
      description: "탭의 레이블",
      type: "string | ReactNode",
      default: "undefined"
    },
    {
      key: "children",
      name: "children",
      description: "탭의 내용",
      type: "ReactNode",
      default: "undefined"
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
        tabPaneProps
      }}
      grid={true}
      isMobile={isMobile}
    />
  );
}
