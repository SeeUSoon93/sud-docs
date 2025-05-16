"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Input, Tag, Radio, Card } from "sud-ui";

import React, { useState } from "react";

export default function TextareaPage() {
  const { isMobile } = useMobile();
  const [size, setSize] = useState("md");
  const [value, setValue] = useState("");
  const [sizeValue, setSizeValue] = useState("");
  const [disabledValue, setDisabledValue] = useState("");
  const [readOnlyValue, setReadOnlyValue] = useState("");
  const [maxLengthValue, setMaxLengthValue] = useState("");
  const [labelValue, setLabelValue] = useState("");
  const [errorValue, setErrorValue] = useState("");
  const [shape, setShape] = useState("rounded");
  const [rows, setRows] = useState(4);
  const [resizable, setResizable] = useState(false);
  const [autoSize, setAutoSize] = useState(false);

  const name = "Input.Textarea";
  const description = (
    <>여러 줄의 텍스트를 입력할 수 있는 입력 컴포넌트입니다.</>
  );

  const IMPORT_COMMAND = "import { Input } from 'sud-ui';";

  const whenToUse = ["여러 줄의 텍스트를 입력할 때."];

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
    },
    {
      label: "capsule",
      value: "capsule"
    }
  ];

  const examples = [
    {
      title: "Basic Usage",
      description: "기본적인 텍스트 영역 컴포넌트입니다.",
      render: (
        <>
          <Input.Textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="텍스트를 입력해주세요."
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const BasicTextarea = () => {
  const [value, setValue] = useState("");

  return (
    <Input.Textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="텍스트를 입력해주세요."
    />
  );
};

export default BasicTextarea;`,
      tscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const BasicTextarea: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Input.Textarea
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
          <Input.Textarea
            size={size}
            value={sizeValue}
            onChange={(e) => setSizeValue(e.target.value)}
            placeholder={`${size} 크기의 Textarea 입니다.`}
          />
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Input, Radio, Card } from 'sud-ui';

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
      <Input.Textarea
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
import { Input, Radio, Card } from 'sud-ui';

const SizeTextarea: React.FC = () => {
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
      <Input.Textarea
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
      title: "Rows",
      description: "Textarea 의 행 수를 설정할 수 있습니다.",
      render: (
        <div className="flex flex-col gap-20">
          <Card style={{ width: "100%" }} shadow="none" colorType="sub">
            <div className="flex jus-cen w-100">
              <Radio.Group
                options={[
                  { label: "2", value: 2 },
                  { label: "4", value: 4 },
                  { label: "6", value: 6 }
                ]}
                direction="horizontal"
                value={rows}
                onChange={setRows}
              />
            </div>
          </Card>
          <Input.Textarea
            rows={rows}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={`${rows}행의 Textarea 입니다.`}
          />
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Input, Radio, Card } from 'sud-ui';

const RowsTextarea = () => {
  const [rows, setRows] = useState(4);
  const [value, setValue] = useState('');
  
  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen w-100">
          <Radio.Group
            options={[
              { label: "2", value: 2 },
              { label: "4", value: 4 },
              { label: "6", value: 6 }
            ]}
            direction="horizontal"
            value={rows}
            onChange={setRows}
          />
        </div>
      </Card>
      <Input.Textarea
        rows={rows}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={\`\${rows}행의 Textarea 입니다.\`}
      />
    </div>
  );
};

export default RowsTextarea;`,
      tscode: `import React, { useState } from 'react';
import { Input, Radio, Card } from 'sud-ui';

const RowsTextarea: React.FC = () => {
  const [rows, setRows] = useState(4);
  const [value, setValue] = useState('');
  
  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen w-100">
          <Radio.Group
            options={[
              { label: "2", value: 2 },
              { label: "4", value: 4 },
              { label: "6", value: 6 }
            ]}
            direction="horizontal"
            value={rows}
            onChange={setRows}
          />
        </div>
      </Card>
      <Input.Textarea
        rows={rows}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={\`\${rows}행의 Textarea 입니다.\`}
      />
    </div>
  );
};

export default RowsTextarea;`
    },
    {
      title: "Max Length",
      description: "Textarea 의 최대 글자 수를 설정할 수 있습니다.",
      render: (
        <>
          <Input.Textarea
            maxLength={100}
            value={maxLengthValue}
            onChange={(e) => setMaxLengthValue(e.target.value)}
            placeholder="최대 100자까지 입력할 수 있습니다."
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const MaxLengthTextarea = () => {
  const [value, setValue] = useState("");

  return (
    <Input.Textarea
      maxLength={100}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="최대 100자까지 입력할 수 있습니다."
    />
  );
};

export default MaxLengthTextarea;`,
      tscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const MaxLengthTextarea: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Input.Textarea
      maxLength={100}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="최대 100자까지 입력할 수 있습니다."
    />
  );
};

export default MaxLengthTextarea;`
    },
    {
      title: "Disabled",
      description: "Textarea 를 비활성화할 수 있습니다.",
      render: (
        <>
          <Input.Textarea
            disabled
            value={disabledValue}
            onChange={(e) => setDisabledValue(e.target.value)}
            placeholder="비활성화된 Textarea 입니다."
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const DisabledTextarea = () => {
  const [value, setValue] = useState("");

  return (
    <Input.Textarea
      disabled
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="비활성화된 Textarea 입니다."
    />
  );
};

export default DisabledTextarea;`,
      tscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const DisabledTextarea: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Input.Textarea
      disabled
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="비활성화된 Textarea 입니다."
    />
  );
};

export default DisabledTextarea;`
    },
    {
      title: "Read Only",
      description: "Textarea 를 읽기 전용으로 설정할 수 있습니다.",
      render: (
        <>
          <Input.Textarea
            readOnly
            value={readOnlyValue}
            onChange={(e) => setReadOnlyValue(e.target.value)}
            placeholder="읽기 전용 Textarea 입니다."
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const ReadOnlyTextarea = () => {
  const [value, setValue] = useState("");

  return (
    <Input.Textarea
      readOnly
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="읽기 전용 Textarea 입니다."
    />
  );
};

export default ReadOnlyTextarea;`,
      tscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const ReadOnlyTextarea: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Input.Textarea
      readOnly
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="읽기 전용 Textarea 입니다."
    />
  );
};

export default ReadOnlyTextarea;`
    },
    {
      title: "Error",
      description: "Textarea 에 에러 상태를 표시할 수 있습니다.",
      render: (
        <>
          <Input.Textarea
            error
            errorText="에러가 발생했습니다."
            value={errorValue}
            onChange={(e) => setErrorValue(e.target.value)}
            placeholder="에러 상태의 Textarea 입니다."
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const ErrorTextarea = () => {
  const [value, setValue] = useState("");

  return (
    <Input.Textarea
      error
      errorText="에러가 발생했습니다."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="에러 상태의 Textarea 입니다."
    />
  );
};

export default ErrorTextarea;`,
      tscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const ErrorTextarea: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Input.Textarea
      error
      errorText="에러가 발생했습니다."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="에러 상태의 Textarea 입니다."
    />
  );
};

export default ErrorTextarea;`
    },
    {
      title: "Label",
      description: "Textarea 에 라벨을 추가할 수 있습니다.",
      render: (
        <>
          <Input.Textarea
            label="라벨"
            value={labelValue}
            onChange={(e) => setLabelValue(e.target.value)}
            placeholder="라벨이 있는 Textarea 입니다."
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const LabelTextarea = () => {
  const [value, setValue] = useState("");

  return (
    <Input.Textarea
      label="라벨"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="라벨이 있는 Textarea 입니다."
    />
  );
};

export default LabelTextarea;`,
      tscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const LabelTextarea: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Input.Textarea
      label="라벨"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="라벨이 있는 Textarea 입니다."
    />
  );
};

export default LabelTextarea;`
    },
    {
      title: "Shape",
      description: "Textarea 의 모양을 설정할 수 있습니다.",
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
          <Input.Textarea
            shape={shape}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={`${shape} 모양의 Textarea 입니다.`}
          />
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Input, Radio, Card } from 'sud-ui';

const ShapeTextarea = () => {
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
      <Input.Textarea
        shape={shape}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={\`\${shape} 모양의 Textarea 입니다.\`}
      />
    </div>
  );
};

export default ShapeTextarea;`,
      tscode: `import React, { useState } from 'react';
import { Input, Radio, Card } from 'sud-ui';

const ShapeTextarea: React.FC = () => {
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
      <Input.Textarea
        shape={shape}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={\`\${shape} 모양의 Textarea 입니다.\`}
      />
    </div>
  );
};

export default ShapeTextarea;`
    },
    {
      title: "Resizable",
      description: "Textarea 의 크기를 조절할 수 있습니다.",
      render: (
        <>
          <Input.Textarea
            resizable
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="크기를 조절할 수 있는 Textarea 입니다."
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const ResizableTextarea = () => {
  const [value, setValue] = useState("");

  return (
    <Input.Textarea
      resizable
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="크기를 조절할 수 있는 Textarea 입니다."
    />
  );
};

export default ResizableTextarea;`,
      tscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const ResizableTextarea: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Input.Textarea
      resizable
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="크기를 조절할 수 있는 Textarea 입니다."
    />
  );
};

export default ResizableTextarea;`
    },
    {
      title: "Auto Size",
      description:
        "Textarea 의 크기를 내용에 따라 자동으로 조절할 수 있습니다.",
      render: (
        <>
          <Input.Textarea
            autoSize
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="내용에 따라 크기가 자동으로 조절되는 Textarea 입니다."
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const AutoSizeTextarea = () => {
  const [value, setValue] = useState("");

  return (
    <Input.Textarea
      autoSize
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="내용에 따라 크기가 자동으로 조절되는 Textarea 입니다."
    />
  );
};

export default AutoSizeTextarea;`,
      tscode: `import React, { useState } from 'react';
import { Input } from 'sud-ui';

const AutoSizeTextarea: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Input.Textarea
      autoSize
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="내용에 따라 크기가 자동으로 조절되는 Textarea 입니다."
    />
  );
};

export default AutoSizeTextarea;`
    }
  ];

  return (
    <Frame
      component={{
        name,
        description,
        IMPORT_COMMAND,
        whenToUse,
        examples
      }}
      grid={true}
      isMobile={isMobile}
    />
  );
}
