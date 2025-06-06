"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { useLang } from "../../_lib/context/langContext";
import { Tag, Radio, Button, Card, Divider, Input } from "sud-ui";

import React, { useState } from "react";
import { Chat } from "sud-icons";
import {
  borderTypeTags,
  defaultColorTypeTags,
  shadowTypeTags,
  shapeTypeTags
} from "../../_lib/components/common/defaultType";
import { tagRender } from "../../_lib/components/common/render";

export default function ButtonPage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();

  const name = "Button";
  const description =
    lang === "ko"
      ? "다양한 스타일과 상태를 지원하는 버튼 컴포넌트입니다."
      : "A button component with various styles and states.";

  const IMPORT_COMMAND = "import { Button } from 'sud-ui';";

  const whenToUse =
    lang === "ko"
      ? [
          "사용자의 주요 행동을 유도할 때 (예: 제출, 저장, 확인)",
          "폼이나 다이얼로그에서 작업을 완료하거나 취소할 때",
          "사용자에게 추가 정보나 다음 단계로 이동할 수 있는 옵션을 제공할 때",
          "작업의 진행 상태를 표시할 때 (로딩 상태)",
          "사용자의 선택이나 결정을 확인할 때",
          "주요 기능이나 액션에 대한 접근성을 제공할 때"
        ]
      : [
          "When you want to guide the user's main action (e.g. submit, save, confirm)",
          "When the form or dialog is completed or canceled",
          "When you provide additional information or options for the user to move to the next step",
          "When displaying the progress of an operation (loading state)",
          "When confirming the user's choice or decision",
          "When providing accessibility to the main feature or action"
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
  const [loadingText, setLoadingText] = useState("Loading...");
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
      description: lang === "ko" ? "기본적인 사용 방법입니다." : "Basic usage.",
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
          <Button colorType={colorType}>{colorType} Button</Button>
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
      <Button colorType={colorType}>{colorType} Button</Button>
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
      <Button colorType={colorType}>{colorType} Button</Button>
    </div>
  );
}`
    },
    {
      title: "borderType",
      description:
        lang === "ko"
          ? "버튼의 테두리 스타일을 설정할 수 있습니다."
          : "You can set the border style of the button.",
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
            {borderType} Button
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
        {borderType} Button
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
        {borderType} Button
      </Button>
    </div>
  );
}`
    },
    {
      title: "shape",
      description:
        lang === "ko"
          ? "버튼의 모양을 설정할 수 있습니다."
          : "You can set the shape of the button.",
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
          <Button shape={shape}>{shape} Button</Button>
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
      <Button shape={shape}>{shape} Button</Button>
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
      <Button shape={shape}>{shape} Button</Button>
    </div>
  );
}`
    },
    {
      title: "Loading",
      description:
        lang === "ko"
          ? "버튼을 로딩 상태로 설정할 수 있습니다."
          : "You can set the button to a loading state.",
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
  const [loadingText, setLoadingText] = useState("Loading...");
  
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
  const [loadingText, setLoadingText] = useState<string>("Loading...");
  
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
      description:
        lang === "ko"
          ? "버튼을 비활성화할 수 있습니다."
          : "You can disable the button.",
      render: <Button disabled>Disable Button</Button>,
      jscode: `import React from "react";
import { Button } from "sud-ui";

export default function Example() {
  return <Button disabled>Disable Button</Button>;
}`,
      tscode: `import React from "react";
import { Button } from "sud-ui";

export default function Example(): JSX.Element {
  return <Button disabled>Disable Button</Button>;
}`
    },
    {
      title: "Icon",
      description:
        lang === "ko"
          ? "버튼에 아이콘을 추가할 수 있습니다."
          : "You can add an icon to the button.",
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
            Icon Button
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
        Icon Button
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
        Icon Button
      </Button>
    </div>
  );
}`
    },
    {
      title: "Color Custom",
      description:
        lang === "ko"
          ? "버튼의 색상을 커스텀할 수 있습니다."
          : "You can customize the color of the button.",
      render: (
        <Button
          background="linear-gradient(100deg, #0958d9 0%, #69b1ff 100%)"
          color="#ffffff"
        >
          Gradient Button
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
      Gradient Button
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
      Gradient Button
    </Button>
  );
}`
    },
    {
      title: "Size",
      description:
        lang === "ko"
          ? "버튼의 크기를 조절할 수 있습니다."
          : "You can adjust the size of the button.",
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
          <Button size={size}>{size} size Button</Button>
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
      <Button size={size}>{size} size Button</Button>
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
      <Button size={size}>{size} size Button</Button>
    </div>
  );
}`
    }
  ];
  const howToUseTableData = [
    {
      key: "children",
      name: "children",
      description: "버튼의 내용",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "colorType",
      name: "colorType",
      description:
        lang === "ko" ? "버튼의 색상 타입" : "The color type of the button.",
      type: <>{defaultColorTypeTags}</>,
      default: <Tag>default</Tag>
    },
    {
      key: "background",
      name: "background",
      description:
        lang === "ko"
          ? "배경색(palette값 또는 HEX code)"
          : "Background color (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "color",
      name: "color",
      description:
        lang === "ko"
          ? "텍스트 색상(palette값 또는 HEX code)"
          : "Text color (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "border",
      name: "border",
      description:
        lang === "ko" ? "테두리 표시 여부" : "Whether to show border",
      type: "boolean",
      default: "true"
    },
    {
      key: "borderColor",
      name: "borderColor",
      description:
        lang === "ko"
          ? "테두리 색상(palette값 또는 HEX code)"
          : "Border color (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "borderType",
      name: "borderType",
      description: lang === "ko" ? "테두리 스타일" : "Border style",
      type: <>{borderTypeTags}</>,
      default: <Tag>solid</Tag>
    },
    {
      key: "borderWeight",
      name: "borderWeight",
      description: lang === "ko" ? "테두리 두께" : "Border weight",
      type: "number",
      default: "1"
    },
    {
      key: "icon",
      name: "icon",
      description:
        lang === "ko"
          ? "버튼에 표시할 아이콘"
          : "The icon to display on the button.",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "iconPosition",
      name: "iconPosition",
      description:
        lang === "ko" ? "아이콘의 위치" : "The position of the icon.",
      type: <>{tagRender(["left", "right"])}</>,
      default: <Tag>left</Tag>
    },
    {
      key: "disabled",
      name: "disabled",
      description:
        lang === "ko"
          ? "버튼 비활성화 여부"
          : "The disabled state of the button.",
      type: "boolean",
      default: "false"
    },
    {
      key: "loading",
      name: "loading",
      description:
        lang === "ko"
          ? "로딩 상태 표시 여부"
          : "The loading state of the button.",
      type: "boolean",
      default: "false"
    },
    {
      key: "loadingText",
      name: "loadingText",
      description:
        lang === "ko"
          ? "로딩 상태일 때 표시할 텍스트"
          : "The text to display when the button is in a loading state.",
      type: "string",
      default: "-"
    },
    {
      key: "loadingType",
      name: "loadingType",
      description:
        lang === "ko"
          ? "로딩 스피너의 타입"
          : "The type of the loading spinner.",
      type: <>{tagRender(["default", "elastic", "brush"])}</>,
      default: <Tag>default</Tag>
    },
    {
      key: "shape",
      name: "shape",
      description: lang === "ko" ? "버튼의 모양" : "The shape of the button.",
      type: <>{shapeTypeTags}</>,
      default: <Tag>rounded</Tag>
    },
    {
      key: "shadow",
      name: "shadow",
      description:
        lang === "ko"
          ? "버튼의 그림자 효과"
          : "The shadow effect of the button.",
      type: <>{shadowTypeTags}</>,
      default: <Tag>sm</Tag>
    },
    {
      key: "onClick",
      name: "onClick",
      description:
        lang === "ko" ? "클릭 이벤트 핸들러" : "The click event handler.",
      type: "(event: React.MouseEvent) => void",
      default: "-"
    },
    {
      key: "className",
      name: "className",
      description: lang === "ko" ? "추가 클래스명" : "Additional class name.",
      type: "string",
      default: "-"
    },
    {
      key: "style",
      name: "style",
      description: lang === "ko" ? "추가 스타일" : "Additional style.",
      type: "CSSProperties",
      default: "{}"
    },
    {
      key: "ariaLabel",
      name: "ariaLabel",
      description: lang === "ko" ? "ARIA 라벨" : "ARIA label.",
      type: "string",
      default: "-"
    },
    {
      key: "ariaPressed",
      name: "ariaPressed",
      description: lang === "ko" ? "ARIA pressed 상태" : "ARIA pressed state.",
      type: "boolean",
      default: "-"
    },
    {
      key: "ariaExpanded",
      name: "ariaExpanded",
      description:
        lang === "ko" ? "ARIA expanded 상태" : "ARIA expanded state.",
      type: "boolean",
      default: "-"
    },
    {
      key: "ariaControls",
      name: "ariaControls",
      description:
        lang === "ko" ? "ARIA controls 속성" : "ARIA controls property.",
      type: "string",
      default: "-"
    },
    {
      key: "role",
      name: "role",
      description: lang === "ko" ? "ARIA 역할" : "ARIA role.",
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
      lang={lang}
    />
  );
}
