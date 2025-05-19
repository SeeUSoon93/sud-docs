"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Tag, Radio, Button, Card, Divider, Input } from "sud-ui";

import React, { useState } from "react";
import { Chat } from "sud-icons";

export default function ButtonPage() {
  const { isMobile } = useMobile();

  const name = "Button";
  const description = <>다양한 스타일과 상태를 지원하는 버튼 컴포넌트입니다.</>;

  const IMPORT_COMMAND = "import { Button } from 'sud-ui';";

  const whenToUse = [
    "사용자의 주요 행동을 유도할 때 (예: 제출, 저장, 확인)",
    "폼이나 다이얼로그에서 작업을 완료하거나 취소할 때",
    "사용자에게 추가 정보나 다음 단계로 이동할 수 있는 옵션을 제공할 때",
    "작업의 진행 상태를 표시할 때 (로딩 상태)",
    "사용자의 선택이나 결정을 확인할 때",
    "주요 기능이나 액션에 대한 접근성을 제공할 때"
  ];
  const [colorType, setColorType] = useState("default");
  const colorTypeOptions = [
    {
      label: "default",
      value: "default"
    },
    {
      label: "sub",
      value: "sub"
    },
    {
      label: "primary",
      value: "primary"
    },
    {
      label: "secondary",
      value: "secondary"
    },
    {
      label: "success",
      value: "success"
    },
    {
      label: "warning",
      value: "warning"
    },
    {
      label: "danger",
      value: "danger"
    },
    {
      label: "info",
      value: "info"
    },
    {
      label: "ghost",
      value: "ghost"
    },
    {
      label: "text",
      value: "text"
    }
  ];
  const [borderType, setBorderType] = useState("solid");
  const borderTypeOptions = [
    {
      label: "solid",
      value: "solid"
    },
    {
      label: "dashed",
      value: "dashed"
    },
    {
      label: "dotted",
      value: "dotted"
    },
    {
      label: "double",
      value: "double"
    },
    {
      label: "groove",
      value: "groove"
    },
    {
      label: "ridge",
      value: "ridge"
    },
    {
      label: "inset",
      value: "inset"
    },
    {
      label: "outset",
      value: "outset"
    }
  ];
  const [shape, setShape] = useState("rounded");
  const shapeOptions = [
    {
      label: "rounded",
      value: "rounded"
    },
    {
      label: "capsule",
      value: "capsule"
    },
    {
      label: "square",
      value: "square"
    },
    {
      label: "circle",
      value: "circle"
    }
  ];
  const [loadingType, setLoadingType] = useState("default");
  const [loadingPosition, setLoadingPosition] = useState("right");
  const loadingTypeOptions = [
    {
      label: "default",
      value: "default"
    },
    {
      label: "elastic",
      value: "elastic"
    },
    {
      label: "brush",
      value: "brush"
    }
  ];
  const loadingPositionOptions = [
    {
      label: "left",
      value: "left"
    },
    {
      label: "right",
      value: "right"
    }
  ];
  const [loadingText, setLoadingText] = useState("로딩 중...");
  const [iconPosition, setIconPosition] = useState("left");

  const iconPositionOptions = [
    {
      label: "left",
      value: "left"
    },
    {
      label: "right",
      value: "right"
    }
  ];

  const [size, setSize] = useState("md");
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

  const examples = [
    {
      title: "Basic Usage",
      description: "기본적인 버튼 컴포넌트입니다.",
      render: (
        <div className="flex flex-col gap-20 jus-cen item-cen">
          <Card style={{ width: "100%" }} shadow="none" colorType="sub">
            <div className="flex jus-cen">
              <Radio.Group
                options={colorTypeOptions}
                direction="horizontal"
                value={colorType}
                onChange={setColorType}
              />
            </div>
          </Card>
          <Button colorType={colorType}>{colorType} 버튼</Button>
        </div>
      ),
      jscode: `import React, { useState } from "react";
import { Button, Card, Radio } from "sud-ui";

const colorTypeOptions = [
  { label: "default", value: "default" },
  { label: "sub", value: "sub" },
  { label: "primary", value: "primary" },
  { label: "secondary", value: "secondary" },
  { label: "success", value: "success" },
  { label: "warning", value: "warning" },
  { label: "danger", value: "danger" },
  { label: "info", value: "info" },
  { label: "ghost", value: "ghost" },
  { label: "text", value: "text" }
];

export default function Example() {
  const [colorType, setColorType] = useState("default");
  
  return (
    <div className="flex flex-col gap-20 jus-cen item-cen">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen">
          <Radio.Group
            options={colorTypeOptions}
            direction="horizontal"
            value={colorType}
            onChange={setColorType}
          />
        </div>
      </Card>
      <Button colorType={colorType}>{colorType} 버튼</Button>
    </div>
  );
}`,
      tscode: `import React, { useState } from "react";
import { Button, Card, Radio } from "sud-ui";

interface ColorTypeOption {
  label: string;
  value: string;
}

const colorTypeOptions: ColorTypeOption[] = [
  { label: "default", value: "default" },
  { label: "sub", value: "sub" },
  { label: "primary", value: "primary" },
  { label: "secondary", value: "secondary" },
  { label: "success", value: "success" },
  { label: "warning", value: "warning" },
  { label: "danger", value: "danger" },
  { label: "info", value: "info" },
  { label: "ghost", value: "ghost" },
  { label: "text", value: "text" }
];

export default function Example(): JSX.Element {
  const [colorType, setColorType] = useState<string>("default");
  
  return (
    <div className="flex flex-col gap-20 jus-cen item-cen">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen">
          <Radio.Group
            options={colorTypeOptions}
            direction="horizontal"
            value={colorType}
            onChange={setColorType}
          />
        </div>
      </Card>
      <Button colorType={colorType}>{colorType} 버튼</Button>
    </div>
  );
}`
    },
    {
      title: "borderType",
      description: "버튼의 테두리 스타일을 설정할 수 있습니다.",
      render: (
        <div className="flex flex-col gap-20 jus-cen item-cen">
          <Card style={{ width: "100%" }} shadow="none" colorType="sub">
            <Radio.Group
              options={borderTypeOptions}
              direction="horizontal"
              value={borderType}
              onChange={setBorderType}
            />
          </Card>
          <Button shadow="none" borderType={borderType} borderWeight={3}>
            {borderType} 버튼
          </Button>
        </div>
      ),
      jscode: `import React, { useState } from "react";
import { Button, Card, Radio } from "sud-ui";

const borderTypeOptions = [
  { label: "solid", value: "solid" },
  { label: "dashed", value: "dashed" },
  { label: "dotted", value: "dotted" },
  { label: "double", value: "double" },
  { label: "groove", value: "groove" },
  { label: "ridge", value: "ridge" },
  { label: "inset", value: "inset" },
  { label: "outset", value: "outset" }
];

export default function Example() {
  const [borderType, setBorderType] = useState("solid");
  
  return (
    <div className="flex flex-col gap-20 jus-cen item-cen">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <Radio.Group
          options={borderTypeOptions}
          direction="horizontal"
          value={borderType}
          onChange={setBorderType}
        />
      </Card>
      <Button shadow="none" borderType={borderType} borderWeight={3}>
        {borderType} 버튼
      </Button>
    </div>
  );
}`,
      tscode: `import React, { useState } from "react";
import { Button, Card, Radio } from "sud-ui";

interface BorderTypeOption {
  label: string;
  value: string;
}

const borderTypeOptions: BorderTypeOption[] = [
  { label: "solid", value: "solid" },
  { label: "dashed", value: "dashed" },
  { label: "dotted", value: "dotted" },
  { label: "double", value: "double" },
  { label: "groove", value: "groove" },
  { label: "ridge", value: "ridge" },
  { label: "inset", value: "inset" },
  { label: "outset", value: "outset" }
];

export default function Example(): JSX.Element {
  const [borderType, setBorderType] = useState<string>("solid");
  
  return (
    <div className="flex flex-col gap-20 jus-cen item-cen">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <Radio.Group
          options={borderTypeOptions}
          direction="horizontal"
          value={borderType}
          onChange={setBorderType}
        />
      </Card>
      <Button shadow="none" borderType={borderType} borderWeight={3}>
        {borderType} 버튼
      </Button>
    </div>
  );
}`
    },
    {
      title: "shape",
      description: "버튼의 모양을 설정할 수 있습니다.",
      render: (
        <div className="flex flex-col gap-20 jus-cen item-cen">
          <Card style={{ width: "100%" }} shadow="none" colorType="sub">
            <Radio.Group
              options={shapeOptions}
              direction="horizontal"
              value={shape}
              onChange={setShape}
            />
          </Card>
          <Button shape={shape}>{shape} 버튼</Button>
        </div>
      ),
      jscode: `import React, { useState } from "react";
import { Button, Card, Radio } from "sud-ui";

const shapeOptions = [
  { label: "rounded", value: "rounded" },
  { label: "capsule", value: "capsule" },
  { label: "square", value: "square" },
  { label: "circle", value: "circle" }
];

export default function Example() {
  const [shape, setShape] = useState("rounded");
  
  return (
    <div className="flex flex-col gap-20 jus-cen item-cen">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <Radio.Group
          options={shapeOptions}
          direction="horizontal"
          value={shape}
          onChange={setShape}
        />
      </Card>
      <Button shape={shape}>{shape} 버튼</Button>
    </div>
  );
}`,
      tscode: `import React, { useState } from "react";
import { Button, Card, Radio } from "sud-ui";

interface ShapeOption {
  label: string;
  value: string;
}

const shapeOptions: ShapeOption[] = [
  { label: "rounded", value: "rounded" },
  { label: "capsule", value: "capsule" },
  { label: "square", value: "square" },
  { label: "circle", value: "circle" }
];

export default function Example(): JSX.Element {
  const [shape, setShape] = useState<string>("rounded");
  
  return (
    <div className="flex flex-col gap-20 jus-cen item-cen">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <Radio.Group
          options={shapeOptions}
          direction="horizontal"
          value={shape}
          onChange={setShape}
        />
      </Card>
      <Button shape={shape}>{shape} 버튼</Button>
    </div>
  );
}`
    },
    {
      title: "Loading",
      description: "버튼을 로딩 상태로 설정할 수 있습니다.",
      render: (
        <div className="flex flex-col gap-20 jus-cen item-cen">
          <Card style={{ width: "100%" }} shadow="none" colorType="sub">
            <div className="flex flex-col gap-10">
              <Radio.Group
                options={loadingTypeOptions}
                direction="horizontal"
                value={loadingType}
                onChange={setLoadingType}
              />
              <Divider />
              <Radio.Group
                options={loadingPositionOptions}
                direction="horizontal"
                value={loadingPosition}
                onChange={setLoadingPosition}
              />
              <Divider />
              <Input
                size="sm"
                value={loadingText}
                onChange={(e) => setLoadingText(e.target.value)}
              />
            </div>
          </Card>
          <Button
            loading
            loadingType={loadingType}
            loadingPosition={loadingPosition}
          >
            {loadingText}
          </Button>
        </div>
      ),
      jscode: `import React, { useState } from "react";
import { Button, Card, Radio, Divider, Input } from "sud-ui";

const loadingTypeOptions = [
  { label: "default", value: "default" },
  { label: "elastic", value: "elastic" },
  { label: "brush", value: "brush" }
];

const loadingPositionOptions = [
  { label: "left", value: "left" },
  { label: "right", value: "right" }
];

export default function Example() {
  const [loadingType, setLoadingType] = useState("default");
  const [loadingPosition, setLoadingPosition] = useState("right");
  const [loadingText, setLoadingText] = useState("로딩 중...");
  
  return (
    <div className="flex flex-col gap-20 jus-cen item-cen">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex flex-col gap-10">
          <Radio.Group
            options={loadingTypeOptions}
            direction="horizontal"
            value={loadingType}
            onChange={setLoadingType}
          />
          <Divider />
          <Radio.Group
            options={loadingPositionOptions}
            direction="horizontal"
            value={loadingPosition}
            onChange={setLoadingPosition}
          />
          <Divider />
          <Input
            size="sm"
            value={loadingText}
            onChange={(e) => setLoadingText(e.target.value)}
          />
        </div>
      </Card>
      <Button
        loading
        loadingType={loadingType}
        loadingPosition={loadingPosition}
      >
        {loadingText}
      </Button>
    </div>
  );
}`,
      tscode: `import React, { useState } from "react";
import { Button, Card, Radio, Divider, Input } from "sud-ui";

interface LoadingOption {
  label: string;
  value: string;
}

const loadingTypeOptions: LoadingOption[] = [
  { label: "default", value: "default" },
  { label: "elastic", value: "elastic" },
  { label: "brush", value: "brush" }
];

const loadingPositionOptions: LoadingOption[] = [
  { label: "left", value: "left" },
  { label: "right", value: "right" }
];

export default function Example(): JSX.Element {
  const [loadingType, setLoadingType] = useState<string>("default");
  const [loadingPosition, setLoadingPosition] = useState<string>("right");
  const [loadingText, setLoadingText] = useState<string>("로딩 중...");
  
  return (
    <div className="flex flex-col gap-20 jus-cen item-cen">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex flex-col gap-10">
          <Radio.Group
            options={loadingTypeOptions}
            direction="horizontal"
            value={loadingType}
            onChange={setLoadingType}
          />
          <Divider />
          <Radio.Group
            options={loadingPositionOptions}
            direction="horizontal"
            value={loadingPosition}
            onChange={setLoadingPosition}
          />
          <Divider />
          <Input
            size="sm"
            value={loadingText}
            onChange={(e) => setLoadingText(e.target.value)}
          />
        </div>
      </Card>
      <Button
        loading
        loadingType={loadingType}
        loadingPosition={loadingPosition}
      >
        {loadingText}
      </Button>
    </div>
  );
}`
    },
    {
      title: "Disabled",
      description: "버튼을 비활성화할 수 있습니다.",
      render: <Button disabled>비활성화 버튼</Button>,
      jscode: `import React from "react";
import { Button } from "sud-ui";

export default function Example() {
  return <Button disabled>비활성화 버튼</Button>;
}`,
      tscode: `import React from "react";
import { Button } from "sud-ui";

export default function Example(): JSX.Element {
  return <Button disabled>비활성화 버튼</Button>;
}`
    },
    {
      title: "Icon",
      description: "버튼에 아이콘을 추가할 수 있습니다.",
      render: (
        <div className="flex flex-col gap-20 jus-cen item-cen">
          <Card style={{ width: "100%" }} shadow="none" colorType="sub">
            <Radio.Group
              options={iconPositionOptions}
              direction="horizontal"
              value={iconPosition}
              onChange={setIconPosition}
            />
          </Card>
          <Button icon={<Chat size={16} />} iconPosition={iconPosition}>
            아이콘 버튼
          </Button>
        </div>
      ),
      jscode: `import React, { useState } from "react";
import { Button, Card, Radio } from "sud-ui";
import { Chat } from "sud-icons";

const iconPositionOptions = [
  { label: "left", value: "left" },
  { label: "right", value: "right" }
];

export default function Example() {
  const [iconPosition, setIconPosition] = useState("left");
  
  return (
    <div className="flex flex-col gap-20 jus-cen item-cen">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <Radio.Group
          options={iconPositionOptions}
          direction="horizontal"
          value={iconPosition}
          onChange={setIconPosition}
        />
      </Card>
      <Button icon={<Chat size={16} />} iconPosition={iconPosition}>
        아이콘 버튼
      </Button>
    </div>
  );
}`,
      tscode: `import React, { useState } from "react";
import { Button, Card, Radio } from "sud-ui";
import { Chat } from "sud-icons";

interface IconPositionOption {
  label: string;
  value: string;
}

const iconPositionOptions: IconPositionOption[] = [
  { label: "left", value: "left" },
  { label: "right", value: "right" }
];

export default function Example(): JSX.Element {
  const [iconPosition, setIconPosition] = useState<string>("left");
  
  return (
    <div className="flex flex-col gap-20 jus-cen item-cen">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <Radio.Group
          options={iconPositionOptions}
          direction="horizontal"
          value={iconPosition}
          onChange={setIconPosition}
        />
      </Card>
      <Button icon={<Chat size={16} />} iconPosition={iconPosition}>
        아이콘 버튼
      </Button>
    </div>
  );
}`
    },
    {
      title: "Color Custom",
      description: "버튼의 색상을 커스텀할 수 있습니다.",
      render: (
        <Button
          background="linear-gradient(100deg, #0958d9 0%, #69b1ff 100%)"
          color="#ffffff"
        >
          그라데이션 버튼
        </Button>
      ),
      jscode: `import React from "react";
import { Button } from "sud-ui";

export default function Example() {
  return (
    <Button
      background="linear-gradient(100deg, #0958d9 0%, #69b1ff 100%)"
      color="#ffffff"
    >
      그라데이션 버튼
    </Button>
  );
}`,
      tscode: `import React from "react";
import { Button } from "sud-ui";

export default function Example(): JSX.Element {
  return (
    <Button
      background="linear-gradient(100deg, #0958d9 0%, #69b1ff 100%)"
      color="#ffffff"
    >
      그라데이션 버튼
    </Button>
  );
}`
    },
    {
      title: "Size",
      description: "버튼의 크기를 조절할 수 있습니다.",
      render: (
        <div className="flex flex-col gap-20 jus-cen item-cen">
          <Card style={{ width: "100%" }} shadow="none" colorType="sub">
            <Radio.Group
              options={sizeOptions}
              direction="horizontal"
              value={size}
              onChange={setSize}
            />
          </Card>
          <Button size={size}>{size} 버튼</Button>
        </div>
      ),
      jscode: `import React, { useState } from "react";
import { Button, Card, Radio } from "sud-ui";

const sizeOptions = [
  { label: "sm", value: "sm" },
  { label: "md", value: "md" },
  { label: "lg", value: "lg" }
];

export default function Example() {
  const [size, setSize] = useState("md");
  
  return (
    <div className="flex flex-col gap-20 jus-cen item-cen">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <Radio.Group
          options={sizeOptions}
          direction="horizontal"
          value={size}
          onChange={setSize}
        />
      </Card>
      <Button size={size}>{size} 버튼</Button>
    </div>
  );
}`,
      tscode: `import React, { useState } from "react";
import { Button, Card, Radio } from "sud-ui";

interface SizeOption {
  label: string;
  value: string;
}

const sizeOptions: SizeOption[] = [
  { label: "sm", value: "sm" },
  { label: "md", value: "md" },
  { label: "lg", value: "lg" }
];

export default function Example(): JSX.Element {
  const [size, setSize] = useState<string>("md");
  
  return (
    <div className="flex flex-col gap-20 jus-cen item-cen">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <Radio.Group
          options={sizeOptions}
          direction="horizontal"
          value={size}
          onChange={setSize}
        />
      </Card>
      <Button size={size}>{size} 버튼</Button>
    </div>
  );
}`
    }
  ];
  const howToUseTableData = [
    {
      key: "colorType",
      name: "colorType",
      description: "버튼의 색상 타입",
      type: "string",
      default: "default"
    },
    {
      key: "background",
      name: "background",
      description: "버튼의 배경색",
      type: "string",
      default: "-"
    },
    {
      key: "color",
      name: "color",
      description: "버튼의 텍스트 색상",
      type: "string",
      default: "-"
    },
    {
      key: "borderColor",
      name: "borderColor",
      description: "버튼의 테두리 색상",
      type: "string",
      default: "-"
    },
    {
      key: "borderType",
      name: "borderType",
      description: "버튼의 테두리 스타일",
      type: "string",
      default: "solid"
    },
    {
      key: "borderWeight",
      name: "borderWeight",
      description: "버튼의 테두리 두께",
      type: "number",
      default: "1"
    },
    {
      key: "icon",
      name: "icon",
      description: "버튼에 표시할 아이콘",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "iconPosition",
      name: "iconPosition",
      description: "아이콘의 위치",
      type: (
        <>
          <Tag>left</Tag> ｜ <Tag>right</Tag>
        </>
      ),
      default: "left"
    },
    {
      key: "disabled",
      name: "disabled",
      description: "버튼 비활성화 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "loading",
      name: "loading",
      description: "로딩 상태 표시 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "loadingText",
      name: "loadingText",
      description: "로딩 상태일 때 표시할 텍스트",
      type: "string",
      default: "-"
    },
    {
      key: "loadingType",
      name: "loadingType",
      description: "로딩 스피너의 타입",
      type: "string",
      default: "-"
    },
    {
      key: "shape",
      name: "shape",
      description: "버튼의 모양",
      type: "string",
      default: "rounded"
    },
    {
      key: "shadow",
      name: "shadow",
      description: "버튼의 그림자 효과",
      type: "string",
      default: "sm"
    },
    {
      key: "border",
      name: "border",
      description: "테두리 표시 여부",
      type: "boolean",
      default: "true"
    },
    {
      key: "size",
      name: "size",
      description: "버튼의 크기",
      type: (
        <>
          <Tag>sm</Tag> ｜ <Tag>md</Tag> ｜ <Tag>lg</Tag>
        </>
      ),
      default: "-"
    },
    {
      key: "onClick",
      name: "onClick",
      description: "클릭 이벤트 핸들러",
      type: "(event: React.MouseEvent) => void",
      default: "-"
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
      type: "CSSProperties",
      default: "{}"
    },
    {
      key: "ariaLabel",
      name: "ariaLabel",
      description: "ARIA 라벨",
      type: "string",
      default: "-"
    },
    {
      key: "ariaPressed",
      name: "ariaPressed",
      description: "ARIA pressed 상태",
      type: "boolean",
      default: "-"
    },
    {
      key: "ariaExpanded",
      name: "ariaExpanded",
      description: "ARIA expanded 상태",
      type: "boolean",
      default: "-"
    },
    {
      key: "ariaControls",
      name: "ariaControls",
      description: "ARIA controls 속성",
      type: "string",
      default: "-"
    },
    {
      key: "role",
      name: "role",
      description: "ARIA 역할",
      type: "string",
      default: "button"
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
