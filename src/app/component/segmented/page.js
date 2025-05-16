"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Tag, Typography, Segmented, Avatar, Card, Radio } from "sud-ui";
import { MoonOutline, SunOutline } from "sud-icons";
import React, { useState } from "react";

export default function SegmentedPage() {
  const { isMobile } = useMobile();
  const [basicSelected, setBasicSelected] = React.useState("home");
  const [iconSelected, setIconSelected] = React.useState("light");
  const [avatarSelected, setAvatarSelected] = React.useState(1);

  const name = "Segmented";
  const description = (
    <>
      여러 옵션을 표시하고 사용자가 단일 옵션을 선택할 수 있는 컴포넌트입니다.
    </>
  );

  const IMPORT_COMMAND = "import { Segmented } from 'sud-ui';";

  const whenToUse = [
    "여러 옵션을 표시하고 사용자가 단일 옵션을 선택할 때.",
    "옵션을 선택하여 조건을 충족하는 데이터를 필터링할 때."
  ];

  const basicItems = [
    {
      value: "home",
      label: "Home"
    },
    {
      value: "components",
      label: "Components"
    },
    {
      value: "css",
      label: "CSS"
    },
    {
      value: "icons",
      label: "Icons"
    }
  ];

  const handleBasicSelected = (value) => {
    setBasicSelected(value);
  };

  const [shape, setShape] = useState("rounded");

  const shapeOptions = [
    { value: "rounded", label: "rounded" },
    { value: "square", label: "square" },
    { value: "capsule", label: "capsule" }
  ];

  const [size, setSize] = useState("md");

  const sizeOptions = [
    { value: "sm", label: "sm" },
    { value: "md", label: "md" },
    { value: "lg", label: "lg" }
  ];

  const examples = [
    {
      title: "Basic Usage",
      description: "기본적인 세그먼트 컴포넌트입니다.",
      render: (
        <>
          <Segmented
            options={basicItems}
            value={basicSelected}
            onChange={handleBasicSelected}
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Segmented } from 'sud-ui';

const BasicSegmented = () => {
  const [selected, setSelected] = useState('home');
  
  const options = [
    { value: 'home', label: 'Home' },
    { value: 'components', label: 'Components' },
    { value: 'css', label: 'CSS' },
    { value: 'icons', label: 'Icons' }
  ];

  return (
    <Segmented 
      options={options}
      value={selected}
      onChange={setSelected}
    />
  );
};

export default BasicSegmented;`,
      tscode: `import React, { useState } from 'react';
import { Segmented } from 'sud-ui';

interface Option {
  value: string;
  label: string;
}

const BasicSegmented: React.FC = () => {
  const [selected, setSelected] = useState<string>('home');
  
  const options: Option[] = [
    { value: 'home', label: 'Home' },
    { value: 'components', label: 'Components' },
    { value: 'css', label: 'CSS' },
    { value: 'icons', label: 'Icons' }
  ];

  return (
    <Segmented 
      options={options}
      value={selected}
      onChange={setSelected}
    />
  );
};

export default BasicSegmented;`
    },
    {
      title: "Size",
      description: "세그먼트의 크기를 설정할 수 있습니다.",
      render: (
        <div className="flex flex-col gap-20">
          <Card style={{ width: "100%" }} shadow="none" colorType="sub">
            <div className="flex jus-cen">
              <Radio.Group
                direction="horizontal"
                options={sizeOptions}
                value={size}
                onChange={setSize}
              />
            </div>
          </Card>
          <Segmented
            options={basicItems}
            value={basicSelected}
            onChange={handleBasicSelected}
            size={size}
          />
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Segmented, Radio, Card } from 'sud-ui';

const SizeSegmented = () => {
  const [size, setSize] = useState('md');
  const [selected, setSelected] = useState('home');
  
  const sizeOptions = [
    { value: 'sm', label: 'sm' },
    { value: 'md', label: 'md' },
    { value: 'lg', label: 'lg' }
  ];

  const options = [
    { value: 'home', label: 'Home' },
    { value: 'components', label: 'Components' },
    { value: 'css', label: 'CSS' },
    { value: 'icons', label: 'Icons' }
  ];

  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen">
          <Radio.Group
            direction="horizontal"
            options={sizeOptions}
            value={size}
            onChange={setSize}
          />
        </div>
      </Card>
      <Segmented
        options={options}
        value={selected}
        onChange={setSelected}
        size={size}
      />
    </div>
  );
};

export default SizeSegmented;`,
      tscode: `import React, { useState } from 'react';
import { Segmented, Radio, Card } from 'sud-ui';

interface Option {
  value: string;
  label: string;
}

const SizeSegmented: React.FC = () => {
  const [size, setSize] = useState<string>('md');
  const [selected, setSelected] = useState<string>('home');
  
  const sizeOptions: Option[] = [
    { value: 'sm', label: 'sm' },
    { value: 'md', label: 'md' },
    { value: 'lg', label: 'lg' }
  ];

  const options: Option[] = [
    { value: 'home', label: 'Home' },
    { value: 'components', label: 'Components' },
    { value: 'css', label: 'CSS' },
    { value: 'icons', label: 'Icons' }
  ];

  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen">
          <Radio.Group
            direction="horizontal"
            options={sizeOptions}
            value={size}
            onChange={setSize}
          />
        </div>
      </Card>
      <Segmented
        options={options}
        value={selected}
        onChange={setSelected}
        size={size}
      />
    </div>
  );
};

export default SizeSegmented;`
    },
    {
      title: "Disabled",
      description: "세그먼트를 비활성화할 수 있습니다.",
      render: (
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-10">
            <Typography pretendard="SB">전체 disabled</Typography>
            <Segmented
              options={basicItems}
              value={basicSelected}
              onChange={handleBasicSelected}
              disabled
            />
          </div>
          <div className="flex flex-col gap-10">
            <Typography pretendard="SB">일부 disabled</Typography>
            <Segmented
              options={[
                { value: "home", label: "Home" },
                { value: "components", label: "Components", disabled: true },
                { value: "css", label: "CSS" },
                { value: "icons", label: "Icons" }
              ]}
              value={basicSelected}
              onChange={handleBasicSelected}
            />
          </div>
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Segmented, Typography } from 'sud-ui';

const DisabledSegmented = () => {
  const [selected, setSelected] = useState('home');
  
  const options = [
    { value: 'home', label: 'Home' },
    { value: 'components', label: 'Components' },
    { value: 'css', label: 'CSS' },
    { value: 'icons', label: 'Icons' }
  ];

  const disabledOptions = [
    { value: 'home', label: 'Home' },
    { value: 'components', label: 'Components', disabled: true },
    { value: 'css', label: 'CSS' },
    { value: 'icons', label: 'Icons' }
  ];

  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-10">
        <Typography pretendard="SB">전체 disabled</Typography>
        <Segmented
          options={options}
          value={selected}
          onChange={setSelected}
          disabled
        />
      </div>
      <div className="flex flex-col gap-10">
        <Typography pretendard="SB">일부 disabled</Typography>
        <Segmented
          options={disabledOptions}
          value={selected}
          onChange={setSelected}
        />
      </div>
    </div>
  );
};

export default DisabledSegmented;`,
      tscode: `import React, { useState } from 'react';
import { Segmented, Typography } from 'sud-ui';

interface Option {
  value: string;
  label: string;
  disabled?: boolean;
}

const DisabledSegmented: React.FC = () => {
  const [selected, setSelected] = useState<string>('home');
  
  const options: Option[] = [
    { value: 'home', label: 'Home' },
    { value: 'components', label: 'Components' },
    { value: 'css', label: 'CSS' },
    { value: 'icons', label: 'Icons' }
  ];

  const disabledOptions: Option[] = [
    { value: 'home', label: 'Home' },
    { value: 'components', label: 'Components', disabled: true },
    { value: 'css', label: 'CSS' },
    { value: 'icons', label: 'Icons' }
  ];

  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-10">
        <Typography pretendard="SB">전체 disabled</Typography>
        <Segmented
          options={options}
          value={selected}
          onChange={setSelected}
          disabled
        />
      </div>
      <div className="flex flex-col gap-10">
        <Typography pretendard="SB">일부 disabled</Typography>
        <Segmented
          options={disabledOptions}
          value={selected}
          onChange={setSelected}
        />
      </div>
    </div>
  );
};

export default DisabledSegmented;`
    },
    {
      title: "Color Customization",
      description: "세그먼트의 색상을 커스텀할 수 있습니다.",
      render: (
        <Segmented
          options={basicItems}
          value={basicSelected}
          onChange={handleBasicSelected}
          colorType="primary"
        />
      ),
      jscode: `import React, { useState } from 'react';
import { Segmented } from 'sud-ui';

const ColorSegmented = () => {
  const [selected, setSelected] = useState('home');
  
  const options = [
    { value: 'home', label: 'Home' },
    { value: 'components', label: 'Components' },
    { value: 'css', label: 'CSS' },
    { value: 'icons', label: 'Icons' }
  ];

  return (
    <Segmented
      options={options}
      value={selected}
      onChange={setSelected}
      colorType="primary"
    />
  );
};

export default ColorSegmented;`,
      tscode: `import React, { useState } from 'react';
import { Segmented } from 'sud-ui';

interface Option {
  value: string;
  label: string;
}

const ColorSegmented: React.FC = () => {
  const [selected, setSelected] = useState<string>('home');
  
  const options: Option[] = [
    { value: 'home', label: 'Home' },
    { value: 'components', label: 'Components' },
    { value: 'css', label: 'CSS' },
    { value: 'icons', label: 'Icons' }
  ];

  return (
    <Segmented
      options={options}
      value={selected}
      onChange={setSelected}
      colorType="primary"
    />
  );
};

export default ColorSegmented;`
    }
  ];

  const howToUseTableData = [
    {
      key: "options",
      name: "options *",
      description: "선택 옵션 배열",
      type: "Array<{ value: string | number, label: string, disabled?: boolean }>",
      default: "[]"
    },
    {
      key: "value",
      name: "value",
      description: "현재 선택된 값",
      type: "string | number",
      default: "undefined"
    },
    {
      key: "onChange",
      name: "onChange",
      description: "값 변경 시 호출되는 콜백 함수",
      type: "(value: string | number) => void",
      default: "undefined"
    },
    {
      key: "disabled",
      name: "disabled",
      description: "비활성화 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "size",
      name: "size",
      description: "크기",
      type: (
        <>
          <Tag>sm</Tag> ｜ <Tag>md</Tag> ｜ <Tag>lg</Tag>
        </>
      ),
      default: <Tag>md</Tag>
    },
    {
      key: "block",
      name: "block",
      description: "전체 너비 사용 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "colorType",
      name: "colorType",
      description: "색상 타입",
      type: (
        <>
          <Tag>default</Tag> ｜ <Tag>primary</Tag> ｜ <Tag>success</Tag> ｜{" "}
          <Tag>warning</Tag> ｜ <Tag>danger</Tag>
        </>
      ),
      default: <Tag>default</Tag>
    },
    {
      key: "shape",
      name: "shape",
      description: "모양",
      type: (
        <>
          <Tag>rounded</Tag> ｜ <Tag>square</Tag> ｜ <Tag>circle</Tag> ｜{" "}
          <Tag>capsule</Tag>
        </>
      ),
      default: <Tag>rounded</Tag>
    },
    {
      key: "background",
      name: "background",
      description: "배경색",
      type: "string",
      default: ""
    },
    {
      key: "color",
      name: "color",
      description: "텍스트 색상",
      type: "string",
      default: ""
    },
    {
      key: "border",
      name: "border",
      description: "테두리 표시 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "borderColor",
      name: "borderColor",
      description: "테두리 색상",
      type: "string",
      default: ""
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
      description: "그림자 효과",
      type: (
        <>
          <Tag>none</Tag> ｜ <Tag>sm</Tag> ｜ <Tag>md</Tag> ｜ <Tag>lg</Tag> ｜{" "}
          <Tag>xl</Tag>
        </>
      ),
      default: <Tag>none</Tag>
    },
    {
      key: "style",
      name: "style",
      description: "추가 스타일",
      type: "React.CSSProperties",
      default: ""
    },
    {
      key: "className",
      name: "className",
      description: "추가 클래스명",
      type: "string",
      default: ""
    },
    {
      key: "name",
      name: "name",
      description: "접근성 이름",
      type: "string",
      default: "segmented-control"
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
