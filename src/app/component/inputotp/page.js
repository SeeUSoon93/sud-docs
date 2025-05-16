"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Input, Tag, Radio, Card } from "sud-ui";

import React, { useState } from "react";

export default function InputOTPPage() {
  const { isMobile } = useMobile();
  const [size, setSize] = useState("md");
  const [type, setType] = useState("int");
  const [value, setValue] = useState("");
  const [length, setLength] = useState(6);
  const [password, setPassword] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const [error, setError] = useState(false);
  const [label, setLabel] = useState("");
  const [shape, setShape] = useState("rounded");
  const [color, setColor] = useState("");
  const [background, setBackground] = useState("");
  const [borderColor, setBorderColor] = useState("");

  const name = "Input.OTP";
  const description = <>OTP(One-Time Password) 입력을 위한 컴포넌트입니다.</>;

  const IMPORT_COMMAND = "import { Input } from 'sud-ui';";

  const whenToUse = ["OTP 인증 코드를 입력할 때."];

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
      label: "int",
      value: "int"
    },
    {
      label: "text",
      value: "text"
    }
  ];

  const lengthOptions = [
    {
      label: "4",
      value: 4
    },
    {
      label: "6",
      value: 6
    },
    {
      label: "8",
      value: 8
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
      description: "기본적인 OTP 입력 컴포넌트입니다.",
      render: (
        <>
          <Input.OTP
            value={value}
            onChange={(e) => setValue(e.target.value)}
            length={6}
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const BasicOTP = () => {
  const [value, setValue] = useState("");

  return (
    <Input.OTP
      value={value}
      onChange={(e) => setValue(e.target.value)}
      length={6}
    />
  );
};

export default BasicOTP;`,
      tscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const BasicOTP: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Input.OTP
      value={value}
      onChange={(e) => setValue(e.target.value)}
      length={6}
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
          <Input.OTP
            size={size}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            length={6}
          />
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Input, Radio, Card } from 'sud-ui';

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
      <Input.OTP
        size={size}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        length={6}
      />
    </div>
  );
};

export default SizeOTP;`,
      tscode: `import React, { useState } from 'react';
import { Input, Radio, Card } from 'sud-ui';

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
      <Input.OTP
        size={size}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        length={6}
      />
    </div>
  );
};

export default SizeOTP;`
    },
    {
      title: "Input Type",
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
          <Input.OTP
            type={type}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            length={6}
          />
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Input, Radio, Card } from 'sud-ui';

const TypeOTP = () => {
  const [type, setType] = useState('int');
  const [value, setValue] = useState('');
  
  const typeOptions = [
    { label: 'int', value: 'int' },
    { label: 'text', value: 'text' }
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
      <Input.OTP
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        length={6}
      />
    </div>
  );
};

export default TypeOTP;`,
      tscode: `import React, { useState } from 'react';
import { Input, Radio, Card } from 'sud-ui';

interface TypeOption {
  label: string;
  value: string;
}

const TypeOTP: React.FC = () => {
  const [type, setType] = useState<string>('int');
  const [value, setValue] = useState<string>('');
  
  const typeOptions: TypeOption[] = [
    { label: 'int', value: 'int' },
    { label: 'text', value: 'text' }
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
      <Input.OTP
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        length={6}
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
        <div className="flex flex-col gap-20">
          <Card style={{ width: "100%" }} shadow="none" colorType="sub">
            <div className="flex jus-cen w-100">
              <Radio.Group
                options={lengthOptions}
                direction="horizontal"
                value={length}
                onChange={setLength}
              />
            </div>
          </Card>
          <Input.OTP
            value={value}
            onChange={(e) => setValue(e.target.value)}
            length={length}
          />
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Input, Radio, Card } from 'sud-ui';

const LengthOTP = () => {
  const [length, setLength] = useState(6);
  const [value, setValue] = useState('');
  
  const lengthOptions = [
    { label: '4', value: 4 },
    { label: '6', value: 6 },
    { label: '8', value: 8 }
  ];

  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen w-100">
          <Radio.Group
            options={lengthOptions}
            direction="horizontal"
            value={length}
            onChange={setLength}
          />
        </div>
      </Card>
      <Input.OTP
        value={value}
        onChange={(e) => setValue(e.target.value)}
        length={length}
      />
    </div>
  );
};

export default LengthOTP;`,
      tscode: `import React, { useState } from 'react';
import { Input, Radio, Card } from 'sud-ui';

interface LengthOption {
  label: string;
  value: number;
}

const LengthOTP: React.FC = () => {
  const [length, setLength] = useState<number>(6);
  const [value, setValue] = useState<string>('');
  
  const lengthOptions: LengthOption[] = [
    { label: '4', value: 4 },
    { label: '6', value: 6 },
    { label: '8', value: 8 }
  ];

  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen w-100">
          <Radio.Group
            options={lengthOptions}
            direction="horizontal"
            value={length}
            onChange={setLength}
          />
        </div>
      </Card>
      <Input.OTP
        value={value}
        onChange={(e) => setValue(e.target.value)}
        length={length}
      />
    </div>
  );
};

export default LengthOTP;`
    },
    {
      title: "Password",
      description: "OTP 입력 필드를 비밀번호 형식으로 표시할 수 있습니다.",
      render: (
        <>
          <Input.OTP
            value={value}
            onChange={(e) => setValue(e.target.value)}
            length={6}
            password
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const PasswordOTP = () => {
  const [value, setValue] = useState('');

  return (
    <Input.OTP
      value={value}
      onChange={(e) => setValue(e.target.value)}
      length={6}
      password
    />
  );
};

export default PasswordOTP;`,
      tscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const PasswordOTP: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <Input.OTP
      value={value}
      onChange={(e) => setValue(e.target.value)}
      length={6}
      password
    />
  );
};

export default PasswordOTP;`
    },
    {
      title: "Disabled",
      description: "OTP 입력 필드를 비활성화할 수 있습니다.",
      render: (
        <>
          <Input.OTP
            value={value}
            onChange={(e) => setValue(e.target.value)}
            length={6}
            disabled
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const DisabledOTP = () => {
  const [value, setValue] = useState('');

  return (
    <Input.OTP
      value={value}
      onChange={(e) => setValue(e.target.value)}
      length={6}
      disabled
    />
  );
};

export default DisabledOTP;`,
      tscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const DisabledOTP: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <Input.OTP
      value={value}
      onChange={(e) => setValue(e.target.value)}
      length={6}
      disabled
    />
  );
};

export default DisabledOTP;`
    },
    {
      title: "Read Only",
      description: "OTP 입력 필드를 읽기 전용으로 설정할 수 있습니다.",
      render: (
        <>
          <Input.OTP
            value={value}
            onChange={(e) => setValue(e.target.value)}
            length={6}
            readOnly
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const ReadOnlyOTP = () => {
  const [value, setValue] = useState('');

  return (
    <Input.OTP
      value={value}
      onChange={(e) => setValue(e.target.value)}
      length={6}
      readOnly
    />
  );
};

export default ReadOnlyOTP;`,
      tscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const ReadOnlyOTP: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <Input.OTP
      value={value}
      onChange={(e) => setValue(e.target.value)}
      length={6}
      readOnly
    />
  );
};

export default ReadOnlyOTP;`
    },
    {
      title: "Error State",
      description: "OTP 입력 필드의 에러 상태와 메시지를 표시할 수 있습니다.",
      render: (
        <>
          <Input.OTP
            value={value}
            onChange={(e) => setValue(e.target.value)}
            length={6}
            error
            errorText="에러 메시지가 표시됩니다."
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const ErrorOTP = () => {
  const [value, setValue] = useState('');

  return (
    <Input.OTP
      value={value}
      onChange={(e) => setValue(e.target.value)}
      length={6}
      error
      errorText="에러 메시지가 표시됩니다."
    />
  );
};

export default ErrorOTP;`,
      tscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const ErrorOTP: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <Input.OTP
      value={value}
      onChange={(e) => setValue(e.target.value)}
      length={6}
      error
      errorText="에러 메시지가 표시됩니다."
    />
  );
};

export default ErrorOTP;`
    },
    {
      title: "Label",
      description: "OTP 입력 필드의 라벨을 설정할 수 있습니다.",
      render: (
        <>
          <Input.OTP
            value={value}
            onChange={(e) => setValue(e.target.value)}
            length={6}
            label="OTP"
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const LabelOTP = () => {
  const [value, setValue] = useState('');

  return (
    <Input.OTP
      value={value}
      onChange={(e) => setValue(e.target.value)}
      length={6}
      label="OTP"
    />
  );
};

export default LabelOTP;`,
      tscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const LabelOTP: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <Input.OTP
      value={value}
      onChange={(e) => setValue(e.target.value)}
      length={6}
      label="OTP"
    />
  );
};

export default LabelOTP;`
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
          <Input.OTP
            value={value}
            onChange={(e) => setValue(e.target.value)}
            length={6}
            shape={shape}
          />
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Input, Radio, Card } from 'sud-ui';

const ShapeOTP = () => {
  const [shape, setShape] = useState('rounded');
  const [value, setValue] = useState('');
  
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
      <Input.OTP
        value={value}
        onChange={(e) => setValue(e.target.value)}
        length={6}
        shape={shape}
      />
    </div>
  );
};

export default ShapeOTP;`,
      tscode: `import React, { useState } from 'react';
import { Input, Radio, Card } from 'sud-ui';

interface ShapeOption {
  label: string;
  value: string;
}

const ShapeOTP: React.FC = () => {
  const [shape, setShape] = useState<string>('rounded');
  const [value, setValue] = useState<string>('');
  
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
      <Input.OTP
        value={value}
        onChange={(e) => setValue(e.target.value)}
        length={6}
        shape={shape}
      />
    </div>
  );
};

export default ShapeOTP;`
    },
    {
      title: "Color Customization",
      description: "OTP 입력 필드의 색상을 커스텀할 수 있습니다.",
      render: (
        <>
          <Input.OTP
            value={value}
            onChange={(e) => setValue(e.target.value)}
            length={6}
            color="orange-8"
            background="orange-1"
            borderColor="orange-8"
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const CustomColorOTP = () => {
  const [value, setValue] = useState('');

  return (
    <Input.OTP
      value={value}
      onChange={(e) => setValue(e.target.value)}
      length={6}
      color="orange-8"
      background="orange-1"
      borderColor="orange-8"
    />
  );
};

export default CustomColorOTP;`,
      tscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const CustomColorOTP: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <Input.OTP
      value={value}
      onChange={(e) => setValue(e.target.value)}
      length={6}
      color="orange-8"
      background="orange-1"
      borderColor="orange-8"
    />
  );
};

export default CustomColorOTP;`
    }
  ];

  const howToUseTableData = [
    {
      key: "value",
      name: "value",
      description: "OTP 입력 필드의 값",
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
      key: "length",
      name: "length",
      description: "OTP 입력 필드의 길이",
      type: "number",
      default: "6"
    },
    {
      key: "type",
      name: "type",
      description: "OTP 입력 필드의 타입",
      type: (
        <>
          <Tag>int</Tag> ｜ <Tag>text</Tag>
        </>
      ),
      default: "int"
    },
    {
      key: "password",
      name: "password",
      description: "비밀번호 형식으로 표시 여부",
      type: "boolean",
      default: "false"
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
      default: "md"
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
      key: "color",
      name: "color",
      description: "입력 필드의 텍스트 색상",
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
