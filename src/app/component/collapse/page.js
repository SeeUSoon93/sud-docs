"use client";
import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Card, Collapse, Radio, Tag } from "sud-ui";
import { useState } from "react";
import { useLang } from "../../_lib/context/langContext";
import {
  borderTypeTags,
  defaultColorTypeTags,
  shadowTypeTags,
  shapeTypeTags
} from "../../_lib/components/common/defaultType";
import { tagRender } from "../../_lib/components/common/render";

export default function CollapsePage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();
  const name = "Collapse";
  const description = (
    <>
      {lang === "ko" ? (
        <>콘텐츠를 접거나 열 수 있는 컴포넌트입니다.</>
      ) : (
        <>A component that allows content to be collapsed or expanded.</>
      )}
    </>
  );
  const IMPORT_COMMAND = "import { Collapse } from 'sud-ui';";
  const whenToUse =
    lang === "ko"
      ? [
          "콘텐츠를 접거나 열 수 있는 경우.",
          "사용자에게 콘텐츠를 접거나 열 수 있는 버튼을 제공할 때."
        ]
      : [
          "When content can be collapsed or expanded.",
          "When you need to provide users with a button to collapse or expand content."
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
              label: "Panel 1",
              children: "Content of Panel 1"
            },
            { key: "base-2", label: "Panel 2", children: "Content of Panel 2" }
          ]}
        />
      ),
      description:
        lang === "ko"
          ? "기본적인 아코디언 컴포넌트입니다."
          : "Basic accordion component.",
      jscode: `import { Collapse } from "sud-ui";

const items = [
  { key: "base-1", label: "Panel 1", children: "Content of Panel 1" },
  { key: "base-2", label: "Panel 2", children: "Content of Panel 2" }
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
  { key: "base-1", label: "Panel 1", children: "Content of Panel 1" },
  { key: "base-2", label: "Panel 2", children: "Content of Panel 2" }
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
      description:
        lang === "ko"
          ? "아코디언의 크기를 설정할 수 있습니다."
          : "You can set the size of the accordion.",
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
              label: "Enabled",
              children: "This panel is enabled."
            },
            {
              key: "2",
              label: "Disabled",
              children: "This panel is disabled."
            }
          ]}
          disabledKeys={["2"]}
        />
      ),
      description:
        lang === "ko"
          ? "아코디언을 비활성화할 수 있습니다."
          : "You can disable the accordion.",
      jscode: `import { Collapse } from "sud-ui";

const items = [
  { key: "1", label: "Enabled", children: "This panel is enabled." },
  { key: "2", label: "Disabled", children: "This panel is disabled." }
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
  { key: "1", label: "Enabled", children: "This panel is enabled." },
  { key: "2", label: "Disabled", children: "This panel is disabled." }
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
                label: "Custom Color [" + color + "]",
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
      description:
        lang === "ko"
          ? "아코디언의 색상을 커스텀할 수 있습니다."
          : "You can customize the colors of the accordion.",
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
            label: "Custom Color [" + color + "]",
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
            label: "Custom Color [" + color + "]",
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
      description:
        lang === "ko" ? "아코디언 아이템 배열" : "Array of accordion items",
      type: "CollapseItem[]",
      default: "[]"
    },
    {
      key: "openKeys",
      name: "openKeys",
      description:
        lang === "ko"
          ? "열린 아이템의 key 배열 (제어 컴포넌트)"
          : "Array of keys for open items (controlled component)",
      type: "string[]",
      default: "-"
    },
    {
      key: "defaultOpenKeys",
      name: "defaultOpenKeys",
      description:
        lang === "ko"
          ? "기본으로 열린 아이템의 key 배열 (비제어 컴포넌트)"
          : "Array of keys for items open by default (uncontrolled component)",
      type: "string[]",
      default: "-"
    },
    {
      key: "onChange",
      name: "onChange",
      description:
        lang === "ko"
          ? "아이템 열림/닫힘 시 호출되는 콜백"
          : "Callback called when items are opened/closed",
      type: "(openKeys: string[]) => void",
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
      key: "headerColorType",
      name: "headerColorType",
      description: lang === "ko" ? "헤더 색상 타입" : "Header color type",
      type: <>{defaultColorTypeTags}</>,
      default: <Tag>sub</Tag>
    },
    {
      key: "headerBackground",
      name: "headerBackground",
      description:
        lang === "ko"
          ? "헤더 배경색(palette값 또는 HEX code)"
          : "Header background color (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "headerColor",
      name: "headerColor",
      description:
        lang === "ko"
          ? "헤더 텍스트 색상(palette값 또는 HEX code)"
          : "Header text color (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "contentColorType",
      name: "contentColorType",
      description: lang === "ko" ? "내용 색상 타입" : "Content color type",
      type: <>{defaultColorTypeTags}</>,
      default: <Tag>default</Tag>
    },
    {
      key: "contentBackground",
      name: "contentBackground",
      description:
        lang === "ko"
          ? "내용 배경색(palette값 또는 HEX code)"
          : "Content background color (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "contentColor",
      name: "contentColor",
      description:
        lang === "ko"
          ? "내용 텍스트 색상(palette값 또는 HEX code)"
          : "Content text color (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "shadow",
      name: "shadow",
      description: lang === "ko" ? "그림자 효과" : "Shadow effect",
      type: <>{shadowTypeTags}</>,
      default: <Tag>sm</Tag>
    },
    {
      key: "disabledKeys",
      name: "disabledKeys",
      description:
        lang === "ko"
          ? "비활성화된 아이템의 key 배열"
          : "Array of keys for disabled items",
      type: "string[]",
      default: "-"
    },
    {
      key: "className",
      name: "className",
      description: lang === "ko" ? "추가 클래스명" : "Additional class name",
      type: "string",
      default: "-"
    },
    {
      key: "size",
      name: "size",
      description: lang === "ko" ? "아코디언 크기" : "Accordion size",
      type: <>{tagRender(["sm", "md", "lg"])}</>,
      default: <Tag>md</Tag>
    },
    {
      key: "shape",
      name: "shape",
      description: lang === "ko" ? "아코디언 모양" : "Accordion shape",
      type: <>{shapeTypeTags}</>,
      default: <Tag>rounded</Tag>
    },
    {
      key: "style",
      name: "style",
      description: lang === "ko" ? "추가 스타일" : "Additional style",
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
      lang={lang}
    />
  );
}
