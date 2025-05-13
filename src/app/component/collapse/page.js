"use client";
import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Collapse, Divider, Tag, Typography } from "sud-ui";
export default function CollapsePage() {
  const { isMobile } = useMobile();
  const name = "Collapse";
  const description = <>콘텐츠를 접거나 열 수 있는 컴포넌트입니다.</>;
  const IMPORT_COMMAND = "import { Collapse } from 'sud-ui';";
  const whenToUse = [
    "콘텐츠를 접거나 열 수 있는 경우.",
    "사용자에게 콘텐츠를 접거나 열 수 있는 버튼을 제공할 때."
  ];

  const colorType = [
    "default",
    "sub",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "info",
    "text"
  ];

  const color = [
    "coral",
    "apricot",
    "mint",
    "sky",
    "navy",
    "plum",
    "forest",
    "warm-gray"
  ];

  const size = [
    { name: "Small", value: "sm" },
    { name: "Medium", value: "md" },
    { name: "Large", value: "lg" }
  ];

  const examples = [
    {
      title: "기본 사용",
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
      description: "가장 기본적인 Collapse 사용 예시입니다.",
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
      title: "사이즈별 Collapse",
      render: (
        <div className="flex flex-col gap-20">
          {size.map((size) => (
            <div className="flex flex-col gap-10" key={size.value}>
              <Typography as="span" suite="H" size="lg">
                {size.name}
              </Typography>
              <Collapse
                items={[
                  {
                    key: size.value,
                    label: size.name,
                    children: `size='${size.value}'`
                  }
                ]}
                size={size.value}
              />
            </div>
          ))}
        </div>
      ),
      description: "size prop으로 Collapse의 크기를 조절할 수 있습니다.",
      jscode: `import { Collapse } from "sud-ui";
import { Typography } from "sud-ui";

const size = [
  { name: "Small", value: "sm" },
  { name: "Medium", value: "md" },
  { name: "Large", value: "lg" }
];

export default function Example() {
  return (
    <div className="flex flex-col gap-20">
      {size.map((size) => (
        <div className="flex flex-col gap-10" key={size.value}>
          <Typography as="span" suite="H" size="lg">
            {size.name}
          </Typography>
          <Collapse
            items={[
              {
                key: size.value,
                label: size.name,
                children: \`size='\${size.value}'\`
              }
            ]}
            size={size.value}
          />
        </div>
      ))}
    </div>
  );
}`,
      tscode: `import { Collapse } from "sud-ui";
import { ReactNode } from "react";
import { Typography } from "sud-ui";

interface CollapseItem {
  key: string;
  label: ReactNode;
  children: ReactNode;
}

interface Size {
  name: string;
  value: string;
}

const size: Size[] = [
  { name: "Small", value: "sm" },
  { name: "Medium", value: "md" },
  { name: "Large", value: "lg" }
];

export default function Example() {
  return (
    <div className="flex flex-col gap-20">
      {size.map((size) => (
        <div className="flex flex-col gap-10" key={size.value}>
          <Typography as="span" suite="H" size="lg">
            {size.name}
          </Typography>
          <Collapse
            items={[
              {
                key: size.value,
                label: size.name,
                children: \`size='\${size.value}'\`
              }
            ]}
            size={size.value}
          />
        </div>
      ))}
    </div>
  );
}
`
    },
    {
      title: "그림자, 테두리 없는 Collapse",
      render: (
        <Collapse
          items={[
            {
              key: "1",
              label: "No Shadow & No Border",
              children: "shadow='none', border={false}"
            }
          ]}
          shadow="none"
          border={false}
        />
      ),
      description:
        "shadow와 border prop으로 그림자와 테두리 표시를 제어할 수 있습니다.",
      jscode: `import { Collapse } from "sud-ui";

const items = [
  { key: "1", label: "No Shadow & No Border", children: "shadow='none', border={false}" }
];

export default function Example() {
  return <Collapse items={items} shadow="none" border={false} />;
}`,
      tscode: `import { Collapse } from "sud-ui";
import { ReactNode } from "react";

interface CollapseItem {
  key: string;
  label: ReactNode;
  children: ReactNode;
}

const items: CollapseItem[] = [
  { key: "1", label: "No Shadow & No Border", children: "shadow='none', border={false}" }
];

export default function Example() {
  return <Collapse items={items} shadow="none" border={false} />;
}
`
    },
    {
      title: "headerColorType 커스텀",
      render: (
        <div className="flex flex-col gap-20">
          {colorType.map((color) => (
            <div key={color} className="flex flex-col gap-10">
              <Collapse
                items={[
                  {
                    key: color,
                    label: color,
                    children: "headerColorType='" + color + "'"
                  }
                ]}
                headerColorType={color}
              />
            </div>
          ))}
        </div>
      ),
      description:
        "headerColorType prop으로 헤더 색상 테마를 지정할 수 있습니다.",
      jscode: `import { Collapse } from "sud-ui";

const colorType = [
  "default",
  "sub",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "info",
  "text"
];

export default function Example() {
  return (
    <div className="flex flex-col gap-20">
      {colorType.map((color) => (
        <div key={color} className="flex flex-col gap-10">
          <Collapse
            items={[
              {
                key: color,
                label: color,
                children: "headerColorType='" + color + "'"
              }
            ]}
            headerColorType={color}
          />
        </div>
      ))}
    </div>
  );
}`,
      tscode: `import { Collapse } from "sud-ui";
import { ReactNode } from "react";

interface CollapseItem {
  key: string;
  label: ReactNode;
  children: ReactNode;
}

const colorType = [
  "default",
  "sub",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "info",
  "text"
];

export default function Example() {
  return (
    <div className="flex flex-col gap-20">
      {colorType.map((color) => (
        <div key={color} className="flex flex-col gap-10">
          <Collapse
            items={[
              {
                key: color,
                label: color,
                children: "headerColorType='" + color + "'"
              }
            ]}
            headerColorType={color}
          />
        </div>
      ))}
    </div>
  );
}
`
    },
    {
      title: "비활성화 아이템 포함",
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
      description: "disabledKeys prop으로 특정 패널을 비활성화할 수 있습니다.",
      jscode: `import { Collapse } from "sud-ui";

const items = [
  { key: "1", label: "활성화", children: "이 패널은 활성화되어 있습니다." },
  { key: "2", label: "비활성화", children: "이 패널은 비활성화되어 있습니다." }
];

export default function Example() {
  return <Collapse items={items} disabledKeys={["2"]} />;
}
`,
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
      title: "아코디언 모양",
      render: (
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-10">
            <Typography as="span" suite="H" size="lg">
              Rounded
            </Typography>
            <Collapse
              items={[
                { key: "1", label: "Rounded", children: "shape='rounded'" }
              ]}
              shape="rounded"
            />
          </div>
          <div className="flex flex-col gap-10">
            <Typography as="span" suite="H" size="lg">
              Square
            </Typography>
            <Collapse
              items={[
                { key: "2", label: "Square", children: "shape='square'" }
              ]}
              shape="square"
            />
          </div>
        </div>
      ),
      description: "shape prop으로 Collapse의 모양을 변경할 수 있습니다.",
      jscode: `import { Collapse } from "sud-ui";
import { Typography } from "sud-ui";

const items = [
  { key: "1", label: "Rounded", children: "shape='rounded'" },
  { key: "2", label: "Square", children: "shape='square'" }
];

export default function Example() {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-10">
        <Typography as="span" suite="H" size="lg">
          Rounded
        </Typography>
        <Collapse items={[items[0]]} shape="rounded" />
      </div>
      <div className="flex flex-col gap-10">
        <Typography as="span" suite="H" size="lg">
          Square
        </Typography>
        <Collapse items={[items[1]]} shape="square" />
      </div>
    </div>
  );
}`,
      tscode: `import { Collapse } from "sud-ui";
import { ReactNode } from "react";
import { Typography } from "sud-ui";

interface CollapseItem {
  key: string;
  label: ReactNode;
  children: ReactNode;
}

const items: CollapseItem[] = [
  { key: "1", label: "Rounded", children: "shape='rounded'" },
  { key: "2", label: "Square", children: "shape='square'" }
];

export default function Example() {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-10">
        <Typography as="span" suite="H" size="lg">
          Rounded
        </Typography>
        <Collapse items={[items[0]]} shape="rounded" />
      </div>
      <div className="flex flex-col gap-10">
        <Typography as="span" suite="H" size="lg">
          Square
        </Typography>
        <Collapse items={[items[1]]} shape="square" />
      </div>
    </div>
  );
}
`
    },
    {
      title: "openKeys vs defaultOpenKeys",
      render: (
        <div className="flex flex-col gap-20">
          {/* 제어형 */}
          <Collapse
            items={[
              {
                key: "1",
                label: "제어형(Controlled)",
                children: "openKeys로 제어"
              }
            ]}
            openKeys={["1"]}
            onChange={() => {}}
          />
          {/* 비제어형 */}
          <Collapse
            items={[
              {
                key: "2",
                label: "비제어형(Uncontrolled)",
                children: "defaultOpenKeys로 제어"
              }
            ]}
            defaultOpenKeys={["2"]}
          />
        </div>
      ),
      description:
        "openKeys와 defaultOpenKeys로 Collapse의 열림 상태를 제어할 수 있습니다.",
      jscode: `import { Collapse } from "sud-ui";
import { useState } from "react";

const items = [
  { key: "1", label: "제어형(Controlled)", children: "openKeys로 제어" },
  { key: "2", label: "비제어형(Uncontrolled)", children: "defaultOpenKeys로 제어" }
];

export default function Example() {
  const [openKeys, setOpenKeys] = useState(["1"]);
  return (
    <>
      <Collapse items={[items[0]]} openKeys={openKeys} onChange={setOpenKeys} />
      <Collapse items={[items[1]]} defaultOpenKeys={["2"]} />
    </>
  );
}
`,
      tscode: `import { Collapse } from "sud-ui";
import { useState, ReactNode } from "react";

interface CollapseItem {
  key: string;
  label: ReactNode;
  children: ReactNode;
}

const items: CollapseItem[] = [
  { key: "1", label: "제어형(Controlled)", children: "openKeys로 제어" },
  { key: "2", label: "비제어형(Uncontrolled)", children: "defaultOpenKeys로 제어" }
];

export default function Example() {
  const [openKeys, setOpenKeys] = useState<string[]>(["1"]);
  return (
    <>
      <Collapse items={[items[0]]} openKeys={openKeys} onChange={setOpenKeys} />
      <Collapse items={[items[1]]} defaultOpenKeys={["2"]} />
    </>
  );
}
`
    },
    {
      title: "onChange 콜백 활용",
      render: (
        <Collapse
          items={[
            {
              key: "1",
              label: "onChange 예시",
              children: "패널을 열거나 닫으면 콘솔에 openKeys가 출력됩니다."
            }
          ]}
          onChange={(openKeys) => {
            // eslint-disable-next-line no-console
            console.log("열린 패널:", openKeys);
          }}
        />
      ),
      description: "onChange 콜백으로 열린 패널의 key 배열을 알 수 있습니다.",
      jscode: `import { Collapse } from "sud-ui";

const items = [
  { key: "1", label: "onChange 예시", children: "패널을 열거나 닫으면 콘솔에 openKeys가 출력됩니다." }
];

export default function Example() {
  return (
    <Collapse
      items={items}
      onChange={(openKeys) => {
        console.log("열린 패널:", openKeys);
      }}
    />
  );
}
`,
      tscode: `import { Collapse } from "sud-ui";
import { ReactNode } from "react";

interface CollapseItem {
  key: string;
  label: ReactNode;
  children: ReactNode;
}

const items: CollapseItem[] = [
  { key: "1", label: "onChange 예시", children: "패널을 열거나 닫으면 콘솔에 openKeys가 출력됩니다." }
];

export default function Example() {
  return (
    <Collapse
      items={items}
      onChange={(openKeys: string[]) => {
        console.log("열린 패널:", openKeys);
      }}
    />
  );
}
`
    },
    {
      title: "개별 색상 커스텀",
      render: (
        <div className="flex flex-col gap-20">
          {color.map((color) => (
            <Collapse
              key={color}
              items={[
                {
                  key: color,
                  label: `커스텀 색상 [${color}]`,
                  children: `headerBackground='${color}-3'`
                }
              ]}
              headerBackground={`${color}-3`}
              headerColor={`${color}-10`}
              contentBackground={`${color}-1`}
              contentColor={`${color}-10`}
              borderColor={`${color}-7`}
            />
          ))}
        </div>
      ),
      description:
        "headerBackground, headerColor, contentBackground, contentColor prop으로 색상을 커스텀할 수 있습니다.",
      jscode: `import { Collapse } from "sud-ui";

const color = [
  "coral",
  "apricot",
  "mint",
  "sky",
  "navy",
  "plum",
  "forest",
  "warm-gray"
];

export default function Example() {
  return (
    <div className="flex flex-col gap-20">
      {color.map((color) => (
        <Collapse
          key={color}
          items={[
            {
              key: color,
              label: \`커스텀 색상 [\${color}]\`,
              children: \`headerBackground='\${color}-3'\`
            }
          ]}
          headerBackground={\`\${color}-3\`}
          headerColor={\`\${color}-10\`}
          contentBackground={\`\${color}-1\`}
          contentColor={\`\${color}-10\`}
          borderColor={\`\${color}-7\`}
        />
      ))}
    </div>
  );
}`,
      tscode: `import { Collapse } from "sud-ui";
import { ReactNode } from "react";

interface CollapseItem {
  key: string;
  label: ReactNode;
  children: ReactNode;
}

const color = [
  "coral",
  "apricot",
  "mint",
  "sky",
  "navy",
  "plum",
  "forest",
  "warm-gray"
];

export default function Example() {
  return (
    <div className="flex flex-col gap-20">
      {color.map((color) => (
        <Collapse
          key={color}
          items={[
            {
              key: color,
              label: \`커스텀 색상 [\${color}]\`,
              children: \`headerBackground='\${color}-3'\`
            }
          ]}
          headerBackground={\`\${color}-3\`}
          headerColor={\`\${color}-10\`}
          contentBackground={\`\${color}-1\`}
          contentColor={\`\${color}-10\`}
          borderColor={\`\${color}-7\`}
        />
      ))}
    </div>
  );
}
`
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
