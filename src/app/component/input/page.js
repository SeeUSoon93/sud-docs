"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { useLang } from "../../_lib/context/langContext";
import { Input, Tag, Radio, Card, Button } from "sud-ui";

import React, { useState } from "react";
import { Search } from "sud-icons";
import {
  borderTypeTags,
  inputTypeTags,
  shadowTypeTags,
  shapeTypeTags
} from "../../_lib/components/common/defaultType";
import { tagRender } from "../../_lib/components/common/render";

export default function InputPage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();
  const [size, setSize] = useState("md");
  const [type, setType] = useState("text");
  const [value, setValue] = useState("");
  const [sizeValue, setSizeValue] = useState("");
  const [disabledValue, setDisabledValue] = useState("");
  const [readOnlyValue, setReadOnlyValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [maxLengthValue, setMaxLengthValue] = useState("");
  const [clearableValue, setClearableValue] = useState("Try to clear!");
  const [passwordValue, setPasswordValue] = useState("");
  const [labelValue, setLabelValue] = useState("");
  const [underlineValue, setUnderlineValue] = useState("");
  const [autoCompleteValue, setAutoCompleteValue] = useState("");
  const [errorValue, setErrorValue] = useState("");
  const [shape, setShape] = useState("rounded");
  const [iconPosition, setIconPosition] = useState("after");
  const [prefixSuffix, setPrefixSuffix] = useState("prefix");
  const [colorValue, setColorValue] = useState("orange");
  const [shapeValue, setShapeValue] = useState("");
  const [iconValue, setIconValue] = useState("");
  const [prefixSuffixValue, setPrefixSuffixValue] = useState("");
  const [thousandValue, setThousandValue] = useState("");

  const name = "Input";
  const description =
    lang === "ko"
      ? "텍스트를 입력할 수 있는 입력 컴포넌트입니다."
      : "A text input component that allows you to enter text.";

  const IMPORT_COMMAND = "import { Input } from 'sud-ui';";

  const whenToUse = [
    lang === "ko" ? "텍스트를 입력할 때." : "When you need to enter text."
  ];

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
      label: "before",
      value: "before"
    },
    {
      label: "after",
      value: "after"
    }
  ];

  const prefixSuffixOptions = [
    {
      label: "prefix",
      value: "prefix"
    },
    {
      label: "suffix",
      value: "suffix"
    }
  ];

  const examples = [
    {
      title: "Basic Usage",
      description: lang === "ko" ? "기본적인 사용 방법입니다." : "Basic usage.",
      render: (
        <>
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter text."
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
      placeholder="Enter text."
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
      placeholder="Enter text."
    />
  );
};

export default BasicInput;`
    },
    {
      title: "Size",
      description:
        lang === "ko"
          ? "Input 의 크기를 설정할 수 있습니다."
          : "You can set the size of the Input.",
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
            placeholder={`${size} size Input`}
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
        placeholder={\`\${size} size Input\`}
      />
    </div>
  );
};

export default SizeInput;`
    },
    {
      title: "Disabled",
      description:
        lang === "ko"
          ? "disabled 속성을 추가하면 입력 필드가 비활성화됩니다."
          : "When you add the disabled property, the input field is disabled.",
      render: (
        <>
          <Input
            value={disabledValue}
            onChange={(e) => setDisabledValue(e.target.value)}
            disabled
            placeholder="Disabled Input"
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
      placeholder="Disabled Input"
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
      placeholder="Disabled Input"
    />
  );
};

export default DisabledInput;`
    },
    {
      title: "Read Only",
      description:
        lang === "ko"
          ? "readOnly 속성을 추가하면 입력 필드가 읽기 전용으로 변경됩니다."
          : "When you add the readOnly property, the input field is read-only.",
      render: (
        <>
          <Input
            value={readOnlyValue}
            onChange={(e) => setReadOnlyValue(e.target.value)}
            readOnly
            placeholder="Read Only Input"
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
      placeholder="Read Only Input"
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
      placeholder="Read Only Input"
    />
  );
};

export default ReadOnlyInput;`
    },
    {
      title: "Input Type",
      description:
        lang === "ko"
          ? "입력 필드의 타입을 설정할 수 있습니다."
          : "You can set the type of the input field.",
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
            placeholder={`${type} type Input`}
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
        placeholder={\`\${type} type Input\`}
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
        placeholder={\`\${type} type Input\`}
      />
    </div>
  );
};

export default TypeInput;`
    },
    {
      title: "Max Length",
      description:
        lang === "ko"
          ? "최대 입력 길이를 설정할 수 있습니다."
          : "You can set the maximum input length.",
      render: (
        <>
          <Input
            value={maxLengthValue}
            onChange={(e) => setMaxLengthValue(e.target.value)}
            maxLength={12}
            placeholder="Max Length Input"
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
        placeholder="Max Length Input"
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
      placeholder="Max Length Input"
    />
  );
};

export default MaxLengthInput;`
    },
    {
      title: "Clearable",
      description:
        lang === "ko"
          ? "clearable 속성을 추가하면 입력 필드의 값을 지울 수 있습니다."
          : "When you add the clearable property, you can clear the value of the input field.",
      render: (
        <>
          <Input
            value={clearableValue}
            onChange={(e) => setClearableValue(e.target.value)}
            clearable
            placeholder="Clearable Input"
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const ClearableInput = () => {
  const [value, setValue] = useState("Try to clear!");

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      clearable
      placeholder="Clearable Input"
    />
  );
};

export default ClearableInput;`,
      tscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const ClearableInput: React.FC = () => {
  const [value, setValue] = useState("Try to clear!");

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      clearable
      placeholder="Clearable Input"
    />
  );
};

export default ClearableInput;`
    },
    {
      title: "Password",
      description:
        lang === "ko"
          ? "password 속성을 추가하면 입력 필드가 비밀번호 입력 필드로 변경됩니다."
          : "When you add the password property, the input field is changed to a password input field.",
      render: (
        <>
          <Input
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            password
            placeholder="Password Input"
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
      placeholder="Password Input"
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
      placeholder="Password Input"
    />
  );
};

export default PasswordInput;`
    },
    {
      title: "Label",
      description:
        lang === "ko"
          ? "label 속성을 추가하면 입력 필드의 라벨을 설정할 수 있습니다."
          : "When you add the label property, you can set the label of the input field.",
      render: (
        <>
          <Input
            value={labelValue}
            onChange={(e) => setLabelValue(e.target.value)}
            label="name"
            placeholder="Label Input"
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
      placeholder="Label Input"
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
      placeholder="Label Input"
    />
  );
};

export default LabelInput;`
    },
    {
      title: "Underline",
      description:
        lang === "ko"
          ? "밑줄 스타일의 입력 필드입니다."
          : "An input field with a line style.",
      render: (
        <>
          <Input
            value={underlineValue}
            onChange={(e) => setUnderlineValue(e.target.value)}
            underline
            placeholder="Underline Input"
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
      placeholder="Underline Input"
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
      placeholder="Underline Input"
    />
  );
};

export default UnderlineInput;`
    },
    {
      title: "Auto Complete",
      description:
        lang === "ko"
          ? "자동 완성 기능이 있는 입력 필드입니다."
          : "An input field with auto-completion functionality.",
      render: (
        <>
          <Input
            value={autoCompleteValue}
            onChange={(e) => setAutoCompleteValue(e.target.value)}
            autoComplete="email"
            placeholder="Auto Complete Input"
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
      placeholder="Auto Complete Input"
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
      placeholder="Auto Complete Input"
    />
  );
};

export default AutoCompleteInput;`
    },
    {
      title: "Error State",
      description:
        lang === "ko"
          ? "에러 상태와 메시지를 표시할 수 있습니다."
          : "You can display an error state and message.",
      render: (
        <>
          <Input
            value={errorValue}
            onChange={(e) => setErrorValue(e.target.value)}
            error={errorValue.length > 0}
            errorText="Error Message"
            placeholder="Error Input"
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
      errorText="Error Message"
      placeholder="Error Input"
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
      errorText="Error Message"
      placeholder="Error Input"
    />
  );
};

export default ErrorInput;`
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
          <Input
            shape={shape}
            value={shapeValue}
            onChange={(e) => setShapeValue(e.target.value)}
            placeholder={`${shape} Shape Input`}
          />
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Input, Radio, Card } from 'sud-ui';

const ShapeInput = () => {
  const [shape, setShape] = useState('rounded');
  const [shapeValue, setShapeValue] = useState('');
  
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
      <Input
        shape={shape}
        value={shapeValue}
        onChange={(e) => setShapeValue(e.target.value)}
        placeholder={\`\${shape} Shape Input\`}
      />
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
  const [shapeValue, setShapeValue] = useState<string>('');
  
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
      <Input
        shape={shape}
        value={shapeValue}
        onChange={(e) => setShapeValue(e.target.value)}
        placeholder={\`\${shape} Shape Input\`}
      />
    </div>
  );
};

export default ShapeInput;`
    },
    {
      title: "Icon",
      description:
        lang === "ko"
          ? "입력 필드 앞뒤에 아이콘을 추가할 수 있습니다."
          : "You can add an icon before and after the input field.",
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
              ? { beforeIcon: <Search /> }
              : { afterIcon: <Search /> })}
            value={iconValue}
            onChange={(e) => setIconValue(e.target.value)}
            placeholder="Icon Input"
          />
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Input, Radio, Card } from 'sud-ui';

const IconInput = () => {
  const [iconPosition, setIconPosition] = useState('after');
  const [iconValue, setIconValue] = useState('');
  
  const iconPositionOptions = [
    { label: 'before', value: 'before' },
    { label: 'after', value: 'after' }
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
          ? { beforeIcon: <Search /> }
          : { afterIcon: <Search /> })}
        value={iconValue}
        onChange={(e) => setIconValue(e.target.value)}
        placeholder="Icon Input"
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
  const [iconValue, setIconValue] = useState<string>('');
  
  const iconPositionOptions: IconPositionOption[] = [
    { label: 'before', value: 'before' },
    { label: 'after', value: 'after' }
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
          ? { beforeIcon: <Search /> }
          : { afterIcon: <Search /> })}
        value={iconValue}
        onChange={(e) => setIconValue(e.target.value)}
        placeholder="Icon Input"
      />
    </div>
  );
};

export default IconInput;`
    },
    {
      title: "Prefix/Suffix",
      description:
        lang === "ko"
          ? "입력 필드 앞뒤에 텍스트를 추가할 수 있습니다."
          : "You can add text before and after the input field.",
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
          <div className="flex flex-col gap-20">
            <Input
              {...(prefixSuffix === "prefix"
                ? { prefix: "₩" }
                : { suffix: "KRW" })}
              value={prefixSuffixValue}
              onChange={(e) => setPrefixSuffixValue(e.target.value)}
              placeholder="Prefix/Suffix Input"
            />

            <Input
              {...(prefixSuffix === "prefix"
                ? {
                    prefix: (
                      <Button size="sm" colorType="primary" shadow="none">
                        Search
                      </Button>
                    )
                  }
                : {
                    suffix: (
                      <Button size="sm" colorType="primary">
                        Confirm
                      </Button>
                    )
                  })}
              value={prefixSuffixValue}
              onChange={(e) => setPrefixSuffixValue(e.target.value)}
              placeholder="Prefix/Suffix Input"
            />
          </div>
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Input, Radio, Card, Button } from 'sud-ui';

const PrefixSuffixInput = () => {
  const [prefixSuffix, setPrefixSuffix] = useState('prefix');
  
  const prefixSuffixOptions = [
    { label: 'prefix', value: 'prefix' },
    { label: 'suffix', value: 'suffix' }
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
      <div className="flex flex-col gap-20">
        <Input
          {...(prefixSuffix === "prefix"
            ? { prefix: "₩" }
            : { suffix: "KRW" })}
        value={prefixSuffixValue}
        onChange={(e) => setPrefixSuffixValue(e.target.value)}
          placeholder="Prefix/Suffix Input"
        />

        <Input
          {...(prefixSuffix === "prefix"
            ? { prefix: <Button size="sm" colorType="primary" shadow="none">Search</Button> }
            : { suffix: <Button size="sm" colorType="primary">Confirm</Button> })}
          value={prefixSuffixValue}
          onChange={(e) => setPrefixSuffixValue(e.target.value)}
          placeholder="Prefix/Suffix Input"
        />
      </div>
    </div>
  );
};

export default PrefixSuffixInput;`,
      tscode: `import React, { useState } from 'react';
import { Input, Radio, Card, Button } from 'sud-ui';

interface PrefixSuffixOption {
  label: string;
  value: string;
}

const PrefixSuffixInput: React.FC = () => {
  const [prefixSuffix, setPrefixSuffix] = useState<string>('prefix');
  
  const prefixSuffixOptions: PrefixSuffixOption[] = [
    { label: 'prefix', value: 'prefix' },
    { label: 'suffix', value: 'suffix' }
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
      <div className="flex flex-col gap-20">
        <Input
        {...(prefixSuffix === "prefix"
          ? { prefix: "₩" }
          : { suffix: "KRW" })}
        value={prefixSuffixValue}
        onChange={(e) => setPrefixSuffixValue(e.target.value)}
          placeholder="Prefix/Suffix Input"
        />

        <Input
          {...(prefixSuffix === "prefix"
            ? { prefix: <Button size="sm" colorType="primary" shadow="none">Search</Button> }
            : { suffix: <Button size="sm" colorType="primary">Confirm</Button> })}
          value={prefixSuffixValue}
          onChange={(e) => setPrefixSuffixValue(e.target.value)}
          placeholder="Prefix/Suffix Input"
        />
      </div>
  );
};

export default PrefixSuffixInput;`
    },
    {
      title: "Color Customization",
      description:
        lang === "ko"
          ? "입력 필드의 색상을 커스텀할 수 있습니다."
          : "You can customize the color of the input field.",
      render: (
        <div className="flex flex-col gap-20">
          <Input
            placeholder="Enter textColor"
            value={colorValue}
            onChange={(e) => setColorValue(e.target.value)}
            color={`${colorValue}-8`}
            background={`${colorValue}-1`}
            borderColor={`${colorValue}-8`}
          />
          <div className="flex flex-wra gap-10">
            <Tag colorType="blue">blue</Tag>
            <Tag colorType="green">green</Tag>
            <Tag colorType="orange">orange</Tag>
            <Tag colorType="red">red</Tag>s<Tag colorType="forest">forest</Tag>
            <Tag colorType="purple">purple</Tag>
            <Tag colorType="volcano">volcano</Tag>
            <Tag colorType="lime">lime</Tag>
            ...
          </div>
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const CustomColorInput = () => {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col gap-20">
      <Input
        placeholder="Enter textColor"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        color={\`\${value}-8\`\}
        background={\`\${value}-1\`\}
        borderColor={\`\${value}-8\`\}
      />
      <div className="flex flex-wra gap-10">
        <Tag colorType="blue">blue</Tag>
        <Tag colorType="green">green</Tag>
        <Tag colorType="orange">orange</Tag>
        <Tag colorType="red">red</Tag>
        <Tag colorType="forest">forest</Tag>
        <Tag colorType="purple">purple</Tag>
        <Tag colorType="volcano">volcano</Tag>
        <Tag colorType="lime">lime</Tag>
        ...
      </div>
    </div>
  );
};

export default CustomColorInput;`,
      tscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const CustomColorInput: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col gap-20">
      <Input
        placeholder="Enter textColor"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        color={\`\${value}-8\`\}
        background={\`\${value}-1\`\}
        borderColor={\`\${value}-8\`\}
      />
      <div className="flex flex-wra gap-10">
        <Tag colorType="blue">blue</Tag>
        <Tag colorType="green">green</Tag>
        <Tag colorType="orange">orange</Tag>
        <Tag colorType="red">red</Tag>
        <Tag colorType="forest">forest</Tag>
        <Tag colorType="purple">purple</Tag>
        <Tag colorType="volcano">volcano</Tag>
        <Tag colorType="lime">lime</Tag>
        ...
      </div>
    </div>
  );
};

export default CustomColorInput;`
    },
    {
      title: "Thousand Separator",
      description:
        lang === "ko"
          ? "숫자 입력 시 3자리마다 콤마를 추가합니다."
          : "Add a comma every three digits when entering a number.",
      render: (
        <Input
          thousandSeparator
          value={thousandValue}
          onChange={(e) => setThousandValue(e.target.value)}
          placeholder="Enter number"
        />
      ),
      jscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const ThousandSeparatorInput = () => {
  const [value, setValue] = useState("");

  return (
    <Input
      type="number"
      thousandSeparator
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter number"
    />
  );
};

export default ThousandSeparatorInput;`,
      tscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const ThousandSeparatorInput: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Input
      type="number"
      thousandSeparator
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter number"
    />
  );
};

export default ThousandSeparatorInput;`
    }
  ];
  const howToUseTableData = [
    {
      key: "value",
      name: "value",
      description:
        lang === "ko" ? "입력 필드의 값" : "The value of the input field",
      type: "string",
      default: "-"
    },
    {
      key: "onChange",
      name: "onChange",
      description:
        lang === "ko"
          ? "값이 변경될 때 호출되는 함수"
          : "The function called when the value changes",
      type: "(e: { target: { value: string } }) => void",
      default: "() => {}"
    },
    {
      key: "placeholder",
      name: "placeholder",
      description:
        lang === "ko"
          ? "입력 필드의 placeholder 텍스트"
          : "The placeholder text of the input field",
      type: "string",
      default: "-"
    },
    {
      key: "type",
      name: "type",
      description:
        lang === "ko"
          ? "입력 필드의 타입 (HTML input의 모든 type 지원)"
          : "The type of the input field (All HTML input types are supported)",
      type: <>{inputTypeTags}</>,
      default: <Tag>text</Tag>
    },
    {
      key: "size",
      name: "size",
      description:
        lang === "ko" ? "입력 필드의 크기" : "The size of the input field",
      type: <>{tagRender(["sm", "md", "lg"])}</>,
      default: <Tag>md</Tag>
    },
    {
      key: "shape",
      name: "shape",
      description:
        lang === "ko"
          ? "입력 필드의 모서리 모양"
          : "The shape of the input field",
      type: <>{shapeTypeTags}</>,
      default: <Tag>rounded</Tag>
    },
    {
      key: "disabled",
      name: "disabled",
      description:
        lang === "ko"
          ? "입력 필드 비활성화 여부"
          : "The disabled state of the input field",
      type: "boolean",
      default: "false"
    },
    {
      key: "readOnly",
      name: "readOnly",
      description:
        lang === "ko"
          ? "읽기 전용 여부"
          : "The read-only state of the input field",
      type: "boolean",
      default: "false"
    },
    {
      key: "password",
      name: "password",
      description:
        lang === "ko"
          ? "비밀번호 입력 필드 여부"
          : "The password input field state",
      type: "boolean",
      default: "false"
    },
    {
      key: "maxLength",
      name: "maxLength",
      description:
        lang === "ko" ? "최대 입력 길이" : "The maximum input length",
      type: "number",
      default: "-"
    },
    {
      key: "clearable",
      name: "clearable",
      description:
        lang === "ko"
          ? "값을 지울 수 있는 버튼 표시 여부"
          : "The display state of the button to clear the value",
      type: "boolean",
      default: "false"
    },
    {
      key: "label",
      name: "label",
      description:
        lang === "ko" ? "입력 필드의 라벨" : "The label of the input field",
      type: "string | ReactNode",
      default: "-"
    },
    {
      key: "underline",
      name: "underline",
      description:
        lang === "ko" ? "밑줄 스타일 여부" : "The underline style state",
      type: "boolean",
      default: "false"
    },
    {
      key: "autoComplete",
      name: "autoComplete",
      description:
        lang === "ko" ? "자동 완성 속성" : "The auto-complete attribute",
      type: "string",
      default: "-"
    },
    {
      key: "error",
      name: "error",
      description: lang === "ko" ? "에러 상태 여부" : "The error state",
      type: "boolean",
      default: "false"
    },
    {
      key: "errorText",
      name: "errorText",
      description: lang === "ko" ? "에러 메시지" : "The error message",
      type: "string",
      default: "-"
    },
    {
      key: "beforeIcon",
      name: "beforeIcon",
      description:
        lang === "ko"
          ? "입력 필드 앞에 표시될 아이콘"
          : "The icon displayed before the input field",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "afterIcon",
      name: "afterIcon",
      description:
        lang === "ko"
          ? "입력 필드 뒤에 표시될 아이콘"
          : "The icon displayed after the input field",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "prefix",
      name: "prefix",
      description:
        lang === "ko"
          ? "입력 필드 앞에 표시될 텍스트"
          : "The text displayed before the input field",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "suffix",
      name: "suffix",
      description:
        lang === "ko"
          ? "입력 필드 뒤에 표시될 텍스트"
          : "The text displayed after the input field",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "background",
      name: "background",
      description:
        lang === "ko"
          ? "배경색(palette값 또는 HEX code)"
          : "The background color (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "color",
      name: "color",
      description:
        lang === "ko"
          ? "텍스트 색상(palette값 또는 HEX code)"
          : "The text color (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "border",
      name: "border",
      description:
        lang === "ko" ? "테두리 표시 여부" : "The display state of the border",
      type: "boolean",
      default: "true"
    },
    {
      key: "borderColor",
      name: "borderColor",
      description:
        lang === "ko"
          ? "테두리 색상(palette값 또는 HEX code)"
          : "The border color (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "borderType",
      name: "borderType",
      description: lang === "ko" ? "테두리 스타일" : "The border style",
      type: <>{borderTypeTags}</>,
      default: <Tag>solid</Tag>
    },
    {
      key: "borderWeight",
      name: "borderWeight",
      description: lang === "ko" ? "테두리 두께" : "The border weight",
      type: "number",
      default: "1"
    },
    {
      key: "shadow",
      name: "shadow",
      description: lang === "ko" ? "그림자 크기" : "The shadow size",
      type: <>{shadowTypeTags}</>,
      default: <Tag>sm</Tag>
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
      key: "style",
      name: "style",
      description: lang === "ko" ? "추가 스타일" : "The additional style",
      type: "React.CSSProperties",
      default: "{}"
    },
    {
      key: "thousandSeparator",
      name: "thousandSeparator",
      description:
        lang === "ko"
          ? "숫자 입력 시 3자리마다 콤마 추가 여부"
          : "The display state of the comma every three digits when entering a number",
      type: "boolean",
      default: "false"
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
