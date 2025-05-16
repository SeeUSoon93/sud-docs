"use client";
import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Card, Collapse, Radio, Tag, Typography } from "sud-ui";
import { useState } from "react";

export default function CollapsePage() {
  const { isMobile } = useMobile();
  const name = "Collapse";
  const description = <>콘텐츠를 접거나 열 수 있는 컴포넌트입니다.</>;
  const IMPORT_COMMAND = "import { Collapse } from 'sud-ui';";
  const whenToUse = [
    "콘텐츠를 접거나 열 수 있는 경우.",
    "사용자에게 콘텐츠를 접거나 열 수 있는 버튼을 제공할 때."
  ];

  const [shape, setShape] = useState("rounded");
  const shapeOptions = [
    { label: "rounded", value: "rounded" },
    { label: "square", value: "square" }
  ];

  const [colorType, setColorType] = useState("default");
  const colorTypeOptions = [
    { label: "default", value: "default" },
    { label: "sub", value: "sub" },
    { label: "primary", value: "primary" },
    { label: "secondary", value: "secondary" },
    { label: "success", value: "success" },
    { label: "warning", value: "warning" },
    { label: "danger", value: "danger" },
    { label: "info", value: "info" },
    { label: "text", value: "text" }
  ];

  const [color, setColor] = useState("coral");
  const colorOptions = [
    { label: "coral", value: "coral" },
    { label: "apricot", value: "apricot" },
    { label: "mint", value: "mint" },
    { label: "sky", value: "sky" },
    { label: "navy", value: "navy" },
    { label: "plum", value: "plum" },
    { label: "forest", value: "forest" },
    { label: "warm-gray", value: "warm-gray" }
  ];

  const [size, setSize] = useState("md");
  const sizeOptions = [
    { label: "Small", value: "sm" },
    { label: "Medium", value: "md" },
    { label: "Large", value: "lg" }
  ];

  const examples = [
    {
      title: "Basic Usage",
      render: (
        <Collapse
          items={[
            {
              key: "base-1",
              label: "패널 1",
              children: "패널 1의 내용입니다."
            },
            { key: "base-2", label: "패널 2", children: "패널 2의 내용입니다." }
          ]}
        />
      ),
      description: "기본적인 아코디언 컴포넌트입니다.",
      jscode: `import { Collapse } from "sud-ui";

const items = [
  { key: "base-1", label: "패널 1", children: "패널 1의 내용입니다." },
  { key: "base-2", label: "패널 2", children: "패널 2의 내용입니다." }
];

export default function Example() {
  return <Collapse items={items} />;
}`,
      tscode: `import { Collapse } from "sud-ui";
import { ReactNode } from "react";

interface CollapseItem {
  key: string;
  label: ReactNode;
  children: ReactNode;
}

const items: CollapseItem[] = [
  { key: "base-1", label: "패널 1", children: "패널 1의 내용입니다." },
  { key: "base-2", label: "패널 2", children: "패널 2의 내용입니다." }
];

export default function Example() {
  return <Collapse items={items} />;
}`
    },
    {
      title: "Size",
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
          <Collapse
            items={[
              {
                key: size,
                label: size,
                children: `size='${size}'`
              }
            ]}
            size={size}
          />
        </div>
      ),
      description: "아코디언의 크기를 설정할 수 있습니다.",
      jscode: `import { Collapse, Radio, Card } from "sud-ui";
import { useState } from "react";

const sizeOptions = [
  { label: "Small", value: "sm" },
  { label: "Medium", value: "md" },
  { label: "Large", value: "lg" }
];

export default function Example() {
  const [size, setSize] = useState("md");

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
      <Collapse
        items={[
          {
            key: size,
            label: size,
            children: \`size='\${size}'\`
          }
        ]}
        size={size}
      />
    </div>
  );
}`,
      tscode: `import { Collapse, Radio, Card } from "sud-ui";
import { useState, ReactNode } from "react";

interface CollapseItem {
  key: string;
  label: ReactNode;
  children: ReactNode;
}

interface SizeOption {
  label: string;
  value: string;
}

const sizeOptions: SizeOption[] = [
  { label: "Small", value: "sm" },
  { label: "Medium", value: "md" },
  { label: "Large", value: "lg" }
];

export default function Example() {
  const [size, setSize] = useState<string>("md");

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
      <Collapse
        items={[
          {
            key: size,
            label: size,
            children: \`size='\${size}'\`
          }
        ]}
        size={size}
      />
    </div>
  );
}`
    },
    {
      title: "Disabled",
      render: (
        <Collapse
          items={[
            {
              key: "1",
              label: "활성화",
              children: "이 패널은 활성화되어 있습니다."
            },
            {
              key: "2",
              label: "비활성화",
              children: "이 패널은 비활성화되어 있습니다."
            }
          ]}
          disabledKeys={["2"]}
        />
      ),
      description: "아코디언을 비활성화할 수 있습니다.",
      jscode: `import { Collapse } from "sud-ui";

const items = [
  { key: "1", label: "활성화", children: "이 패널은 활성화되어 있습니다." },
  { key: "2", label: "비활성화", children: "이 패널은 비활성화되어 있습니다." }
];

export default function Example() {
  return <Collapse items={items} disabledKeys={["2"]} />;
}`,
      tscode: `import { Collapse } from "sud-ui";
import { ReactNode } from "react";

interface CollapseItem {
  key: string;
  label: ReactNode;
  children: ReactNode;
}

const items: CollapseItem[] = [
  { key: "1", label: "활성화", children: "이 패널은 활성화되어 있습니다." },
  { key: "2", label: "비활성화", children: "이 패널은 비활성화되어 있습니다." }
];

export default function Example() {
  return <Collapse items={items} disabledKeys={["2"]} />;
}
`
    },
    {
      title: "Color Customization",
      render: (
        <div className="flex flex-col gap-20">
          <Card style={{ width: "100%" }} shadow="none" colorType="sub">
            <div className="flex jus-cen">
              <Radio.Group
                direction="horizontal"
                options={colorOptions}
                value={color}
                onChange={setColor}
                cols={2}
              />
            </div>
          </Card>
          <Collapse
            items={[
              {
                key: color,
                label: "커스텀 색상 [" + color + "]",
                children: "headerBackground='" + color + "-3'"
              }
            ]}
            headerBackground={color + "-3"}
            headerColor={color + "-10"}
            contentBackground={color + "-1"}
            contentColor={color + "-10"}
            borderColor={color + "-7"}
          />
        </div>
      ),
      description: "아코디언의 색상을 커스텀할 수 있습니다.",
      jscode: `import { Collapse, Radio, Card } from "sud-ui";
import { useState } from "react";

const colorOptions = [
  { label: "coral", value: "coral" },
  { label: "apricot", value: "apricot" },
  { label: "mint", value: "mint" },
  { label: "sky", value: "sky" },
  { label: "navy", value: "navy" },
  { label: "plum", value: "plum" },
  { label: "forest", value: "forest" },
  { label: "warm-gray", value: "warm-gray" }
];

export default function Example() {
  const [color, setColor] = useState("coral");

  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen">
          <Radio.Group
            direction="horizontal"
            options={colorOptions}
            value={color}
            onChange={setColor}
            cols={2}
          />
        </div>
      </Card>
      <Collapse
        items={[
          {
            key: color,
            label: "커스텀 색상 [" + color + "]",
            children: "headerBackground='" + color + "-3'"
          }
        ]}
        headerBackground={color + "-3"}
        headerColor={color + "-10"}
        contentBackground={color + "-1"}
        contentColor={color + "-10"}
        borderColor={color + "-7"}
      />
    </div>
  );
}`,
      tscode: `import { Collapse, Radio, Card } from "sud-ui";
import { useState, ReactNode } from "react";

interface CollapseItem {
  key: string;
  label: ReactNode;
  children: ReactNode;
}

interface ColorOption {
  label: string;
  value: string;
}

const colorOptions: ColorOption[] = [
  { label: "coral", value: "coral" },
  { label: "apricot", value: "apricot" },
  { label: "mint", value: "mint" },
  { label: "sky", value: "sky" },
  { label: "navy", value: "navy" },
  { label: "plum", value: "plum" },
  { label: "forest", value: "forest" },
  { label: "warm-gray", value: "warm-gray" }
];

export default function Example() {
  const [color, setColor] = useState<string>("coral");

  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen">
          <Radio.Group
            direction="horizontal"
            options={colorOptions}
            value={color}
            onChange={setColor}
            cols={2}
          />
        </div>
      </Card>
      <Collapse
        items={[
          {
            key: color,
            label: "커스텀 색상 [" + color + "]",
            children: "headerBackground='" + color + "-3'"
          }
        ]}
        headerBackground={color + "-3"}
        headerColor={color + "-10"}
        contentBackground={color + "-1"}
        contentColor={color + "-10"}
        borderColor={color + "-7"}
      />
    </div>
  );
}`
    }
  ];

  const howToUseTableData = [
    {
      key: "items",
      name: "items*",
      description: "아코디언 아이템 배열",
      type: "CollapseItem[]",
      default: "[]"
    },
    {
      key: "openKeys",
      name: "openKeys",
      description: "열린 아이템의 key 배열 (제어 컴포넌트)",
      type: "string[]",
      default: ""
    },
    {
      key: "defaultOpenKeys",
      name: "defaultOpenKeys",
      description: "기본으로 열린 아이템의 key 배열 (비제어 컴포넌트)",
      type: "string[]",
      default: ""
    },
    {
      key: "onChange",
      name: "onChange",
      description: "아이템 열림/닫힘 시 호출되는 콜백",
      type: "(openKeys: string[]) => void",
      default: ""
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
      default: ""
    },
    {
      key: "borderType",
      name: "borderType",
      description: "테두리 스타일",
      type: "string",
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
      key: "headerColorType",
      name: "headerColorType",
      description: "헤더 색상 타입",
      type: (
        <>
          <Tag>default</Tag> ｜ <Tag>primary</Tag> ｜ <Tag>secondary</Tag> ｜{" "}
          <Tag>success</Tag> ｜ <Tag>warning</Tag> ｜ <Tag>danger</Tag> ｜{" "}
          <Tag>info</Tag> ｜ <Tag>text</Tag> ｜ <Tag>sub</Tag>
        </>
      ),
      default: <Tag>sub</Tag>
    },
    {
      key: "headerBackground",
      name: "headerBackground",
      description: "헤더 배경색",
      type: "string",
      default: ""
    },
    {
      key: "headerColor",
      name: "headerColor",
      description: "헤더 텍스트 색상",
      type: "string",
      default: ""
    },
    {
      key: "contentColorType",
      name: "contentColorType",
      description: "내용 색상 타입",
      type: (
        <>
          <Tag>default</Tag> ｜ <Tag>primary</Tag> ｜ <Tag>secondary</Tag> ｜{" "}
          <Tag>success</Tag> ｜ <Tag>warning</Tag> ｜ <Tag>danger</Tag> ｜{" "}
          <Tag>info</Tag> ｜ <Tag>text</Tag> ｜ <Tag>sub</Tag>
        </>
      ),
      default: <Tag>default</Tag>
    },
    {
      key: "contentBackground",
      name: "contentBackground",
      description: "내용 배경색",
      type: "string",
      default: ""
    },
    {
      key: "contentColor",
      name: "contentColor",
      description: "내용 텍스트 색상",
      type: "string",
      default: ""
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
      default: <Tag>sm</Tag>
    },
    {
      key: "disabledKeys",
      name: "disabledKeys",
      description: "비활성화된 아이템의 key 배열",
      type: "string[]",
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
      key: "size",
      name: "size",
      description: "아코디언 크기",
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
      description: "아코디언 모양",
      type: (
        <>
          <Tag>rounded</Tag> ｜ <Tag>square</Tag>
        </>
      ),
      default: <Tag>rounded</Tag>
    },
    {
      key: "style",
      name: "style",
      description: "추가 스타일",
      type: "React.CSSProperties",
      default: ""
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
