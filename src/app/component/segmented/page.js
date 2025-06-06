"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { useLang } from "../../_lib/context/langContext";
import { Tag, Typography, Segmented, Card, Radio } from "sud-ui";
import React, { useState } from "react";
import { tagRender } from "../../_lib/components/common/render";
import {
  borderTypeTags,
  defaultColorTypeTags,
  shadowTypeTags,
  shapeTypeTags
} from "../../_lib/components/common/defaultType";

export default function SegmentedPage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();
  const [basicSelected, setBasicSelected] = React.useState("home");

  const name = "Segmented";
  const description = (
    <>
      {lang === "ko"
        ? "여러 옵션을 표시하고 사용자가 단일 옵션을 선택할 수 있는 컴포넌트입니다."
        : "A component that displays multiple options and allows the user to select a single option."}
    </>
  );

  const IMPORT_COMMAND = "import { Segmented } from 'sud-ui';";

  const whenToUse =
    lang === "ko"
      ? [
          "여러 옵션을 표시하고 사용자가 단일 옵션을 선택할 때.",
          "옵션을 선택하여 조건을 충족하는 데이터를 필터링할 때."
        ]
      : [
          "When you need to display multiple options and allow the user to select a single option.",
          "When you select an option to filter data that meets a condition."
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
      description: lang === "ko" ? "기본적인 사용 방법입니다." : "Basic usage.",
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
      description:
        lang === "ko"
          ? "세그먼트의 크기를 설정할 수 있습니다."
          : "You can set the size of the segmented.",
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
      title: "Shape",
      description:
        lang === "ko"
          ? "세그먼트의 모양을 설정할 수 있습니다."
          : "You can set the shape of the segmented.",
      render: (
        <div className="flex flex-col gap-20">
          <Card style={{ width: "100%" }} shadow="none" colorType="sub">
            <div className="flex jus-cen">
              <Radio.Group
                direction="horizontal"
                options={shapeOptions}
                value={shape}
                onChange={setShape}
              />
            </div>
          </Card>
          <Segmented
            options={basicItems}
            value={basicSelected}
            onChange={handleBasicSelected}
            shape={shape}
          />
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Segmented, Radio, Card } from 'sud-ui';

const ShapeSegmented = () => {
  const [shape, setShape] = useState('rounded');
  const [selected, setSelected] = useState('home');
  
  const shapeOptions = [
    { value: 'rounded', label: 'rounded' },
    { value: 'square', label: 'square' },
    { value: 'capsule', label: 'capsule' }
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
            options={shapeOptions}
            value={shape}
            onChange={setShape}
          />
        </div>
      </Card>
      <Segmented
        options={options}
        value={selected}
        onChange={setSelected}
        shape={shape}
      />
    </div>
  );
};

export default ShapeSegmented;`,
      tscode: `import React, { useState } from 'react';
import { Segmented, Radio, Card } from 'sud-ui';

interface Option {
  value: string;
  label: string;
}

const ShapeSegmented: React.FC = () => {
  const [shape, setShape] = useState<string>('rounded');
  const [selected, setSelected] = useState<string>('home');
  
  const shapeOptions: Option[] = [
    { value: 'rounded', label: 'rounded' },
    { value: 'square', label: 'square' },
    { value: 'capsule', label: 'capsule' }
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
            options={shapeOptions}
            value={shape}
            onChange={setShape}
          />
        </div>
      </Card>
      <Segmented
        options={options}
        value={selected}
        onChange={setSelected}
        shape={shape}
      />
    </div>
  );
};

export default ShapeSegmented;`
    },
    {
      title: "Disabled",
      description:
        lang === "ko"
          ? "세그먼트를 비활성화할 수 있습니다."
          : "You can disable the segmented.",
      render: (
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-10">
            <Typography pretendard="SB">All disabled</Typography>
            <Segmented
              options={basicItems}
              value={basicSelected}
              onChange={handleBasicSelected}
              disabled
            />
          </div>
          <div className="flex flex-col gap-10">
            <Typography pretendard="SB">Partially disabled</Typography>
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
        <Typography pretendard="SB">All disabled</Typography>
        <Segmented
          options={options}
          value={selected}
          onChange={setSelected}
          disabled
        />
      </div>
      <div className="flex flex-col gap-10">
        <Typography pretendard="SB">Partially disabled</Typography>
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
        <Typography pretendard="SB">All disabled</Typography>
        <Segmented
          options={options}
          value={selected}
          onChange={setSelected}
          disabled
        />
      </div>
      <div className="flex flex-col gap-10">
        <Typography pretendard="SB">Partially disabled</Typography>
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
      description:
        lang === "ko"
          ? "세그먼트의 색상을 커스텀할 수 있습니다."
          : "You can customize the color of the segmented.",
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
      description:
        lang === "ko" ? "선택 옵션 배열" : "An array of selectable options.",
      type: "Array<{ value: string | number, label: string, disabled?: boolean }>",
      default: "[]"
    },
    {
      key: "value",
      name: "value",
      description:
        lang === "ko" ? "현재 선택된 값" : "The currently selected value.",
      type: "string | number",
      default: "-"
    },
    {
      key: "onChange",
      name: "onChange",
      description:
        lang === "ko"
          ? "값 변경 시 호출되는 콜백 함수"
          : "A callback function that is called when the value changes.",
      type: "(value: string | number) => void",
      default: "-"
    },
    {
      key: "disabled",
      name: "disabled",
      description:
        lang === "ko" ? "비활성화 여부" : "Whether the segmented is disabled.",
      type: "boolean",
      default: "false"
    },
    {
      key: "size",
      name: "size",
      description: lang === "ko" ? "크기" : "The size of the segmented.",
      type: <>{tagRender(["sm", "md", "lg"])}</>,
      default: <Tag>md</Tag>
    },
    {
      key: "block",
      name: "block",
      description:
        lang === "ko"
          ? "전체 너비 사용 여부"
          : "Whether the segmented uses the full width.",
      type: "boolean",
      default: "false"
    },
    {
      key: "colorType",
      name: "colorType",
      description:
        lang === "ko" ? "색상 타입" : "The color type of the segmented.",
      type: <>{defaultColorTypeTags}</>,
      default: <Tag>default</Tag>
    },
    {
      key: "shape",
      name: "shape",
      description: lang === "ko" ? "모양" : "The shape of the segmented.",
      type: <>{shapeTypeTags}</>,
      default: <Tag>rounded</Tag>
    },
    {
      key: "background",
      name: "background",
      description:
        lang === "ko"
          ? "배경색(palette값 또는 HEX code)"
          : "The background color of the segmented (palette value or HEX code).",
      type: "string",
      default: "-"
    },
    {
      key: "color",
      name: "color",
      description:
        lang === "ko"
          ? "텍스트 색상(palette값 또는 HEX code)"
          : "The text color of the segmented (palette value or HEX code).",
      type: "string",
      default: "-"
    },
    {
      key: "border",
      name: "border",
      description:
        lang === "ko" ? "테두리 표시 여부" : "Whether the border is displayed.",
      type: "boolean",
      default: "false"
    },
    {
      key: "borderColor",
      name: "borderColor",
      description:
        lang === "ko"
          ? "테두리 색상(palette값 또는 HEX code)"
          : "The border color of the segmented (palette value or HEX code).",
      type: "string",
      default: "-"
    },
    {
      key: "borderType",
      name: "borderType",
      description:
        lang === "ko" ? "테두리 스타일" : "The border style of the segmented.",
      type: <>{borderTypeTags}</>,
      default: <Tag>solid</Tag>
    },
    {
      key: "borderWeight",
      name: "borderWeight",
      description:
        lang === "ko" ? "테두리 두께" : "The border weight of the segmented.",
      type: "number",
      default: "1"
    },
    {
      key: "shadow",
      name: "shadow",
      description:
        lang === "ko" ? "그림자 효과" : "The shadow effect of the segmented.",
      type: <>{shadowTypeTags}</>,
      default: <Tag>none</Tag>
    },
    {
      key: "style",
      name: "style",
      description: lang === "ko" ? "추가 스타일" : "Additional styles.",
      type: "React.CSSProperties",
      default: "{}"
    },
    {
      key: "className",
      name: "className",
      description: lang === "ko" ? "추가 클래스명" : "Additional class name.",
      type: "string",
      default: ""
    },
    {
      key: "name",
      name: "name",
      description: lang === "ko" ? "접근성 이름" : "The accessibility name.",
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
      lang={lang}
    />
  );
}
