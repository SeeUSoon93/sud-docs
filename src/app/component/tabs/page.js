"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Tabs, Tag, Radio, Card } from "sud-ui";

import React, { useState } from "react";

export default function TabsPage() {
  const { isMobile } = useMobile();
  const [align, setAlign] = useState("left");
  const [size, setSize] = useState("md");

  const name = "Tabs";
  const description = <>탭을 사용하여 여러 뷰를 전환할 수 있습니다.</>;

  const IMPORT_COMMAND = "import { Tabs } from 'sud-ui';";

  const whenToUse = ["여러 뷰를 전환할 때."];

  const options = [
    {
      key: "home",
      label: "홈",
      children: <div>홈 컨텐츠입니다.</div>
    },
    {
      key: "components",
      label: "컴포넌트",
      children: <div>컴포넌트 컨텐츠입니다.</div>
    },
    {
      key: "css",
      label: "CSS",
      children: <div>CSS 컨텐츠입니다.</div>
    }
  ];

  const alignOptions = [
    {
      label: "left",
      value: "left"
    },
    {
      label: "center",
      value: "center"
    },
    {
      label: "right",
      value: "right"
    }
  ];
  const sizeOptions = [
    {
      label: "xs",
      value: "xs"
    },
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
    },
    {
      label: "xl",
      value: "xl"
    },
    {
      label: "2xl",
      value: "2xl"
    }
  ];

  const examples = [
    {
      title: "Basic Usage",
      description: "기본적인 탭 컴포넌트입니다.",
      render: (
        <>
          <Tabs options={options} />
        </>
      ),
      jscode: `import React from 'react';
import { Tabs } from 'sud-ui';

const BasicTabs = () => {
  const options = [
    {
      key: "home",
      label: "홈",
      children: <div>홈 컨텐츠입니다.</div>
    },
    {
      key: "components",
      label: "컴포넌트",
      children: <div>컴포넌트 컨텐츠입니다.</div>
    },
    {
      key: "css",
      label: "CSS",
      children: <div>CSS 컨텐츠입니다.</div>
    }
  ];
  return <Tabs options={options} />;
};

export default BasicTabs;`,
      tscode: `import React from 'react';
import { Tabs } from 'sud-ui';

const BasicTabs: React.FC = () => {
  const options = [
    {
      key: "home",
      label: "홈",
      children: <div>홈 컨텐츠입니다.</div>
    },
    {
      key: "components",
      label: "컴포넌트",
      children: <div>컴포넌트 컨텐츠입니다.</div>
    },
    {
      key: "css",
      label: "CSS",
      children: <div>CSS 컨텐츠입니다.</div>
    }
  ];
  return <Tabs options={options} />;
};

export default BasicTabs;`
    },
    {
      title: "TabPane 사용",
      description: "TabPane 컴포넌트를 사용한 방식입니다.",
      render: (
        <>
          <Tabs>
            <Tabs.TabPane label="홈">
              <div>홈 컨텐츠입니다.</div>
            </Tabs.TabPane>
            <Tabs.TabPane label="컴포넌트">
              <div>컴포넌트 컨텐츠입니다.</div>
            </Tabs.TabPane>
            <Tabs.TabPane label="CSS">
              <div>CSS 컨텐츠입니다.</div>
            </Tabs.TabPane>
          </Tabs>
        </>
      ),
      jscode: `import React from 'react';
import { Tabs } from 'sud-ui';

const TabPaneExample = () => {
  return (
    <Tabs>
      <Tabs.TabPane label="홈">
        <div>홈 컨텐츠입니다.</div>
      </Tabs.TabPane>
      <Tabs.TabPane label="컴포넌트">
        <div>컴포넌트 컨텐츠입니다.</div>
      </Tabs.TabPane>
      <Tabs.TabPane label="CSS">
        <div>CSS 컨텐츠입니다.</div>
      </Tabs.TabPane>
    </Tabs>
  );
};

export default TabPaneExample;`,
      tscode: `import React from 'react';
import { Tabs } from 'sud-ui';

const TabPaneExample: React.FC = () => {
  return (
    <Tabs>
      <Tabs.TabPane label="홈">
        <div>홈 컨텐츠입니다.</div>
      </Tabs.TabPane>
      <Tabs.TabPane label="컴포넌트">
        <div>컴포넌트 컨텐츠입니다.</div>
      </Tabs.TabPane>
      <Tabs.TabPane label="CSS">
        <div>CSS 컨텐츠입니다.</div>
      </Tabs.TabPane>
    </Tabs>
  );
};

export default TabPaneExample;`
    },
    {
      title: "Disabled",
      description: "탭을 비활성화할 수 있습니다.",
      render: (
        <>
          <Tabs disabledKeys={["components"]} options={options} />
        </>
      ),
      jscode: `import React from 'react';
import { Tabs } from 'sud-ui';

const DisabledTabsExample = () => {
  const options = [
    {
      key: "home",
      label: "홈",
      children: <div>홈 컨텐츠입니다.</div>
    },
    {
      key: "components",
      label: "컴포넌트",
      children: <div>컴포넌트 컨텐츠입니다.</div>
    },
    {
      key: "css",
      label: "CSS",
      children: <div>CSS 컨텐츠입니다.</div>
    }
  ];
  return <Tabs disabledKeys={["components"]} options={options} />;
};

export default DisabledTabsExample;`,
      tscode: `import React from 'react';
import { Tabs } from 'sud-ui';

const DisabledTabsExample: React.FC = () => {
  const options = [
    {
      key: "home",
      label: "홈",
      children: <div>홈 컨텐츠입니다.</div>
    },
    {
      key: "components",
      label: "컴포넌트",
      children: <div>컴포넌트 컨텐츠입니다.</div>
    },
    {
      key: "css",
      label: "CSS",
      children: <div>CSS 컨텐츠입니다.</div>
    }
  ];
  return <Tabs disabledKeys={["components"]} options={options} />;
};

export default DisabledTabsExample;`
    },
    {
      title: "Position",
      description: "탭의 위치를 설정할 수 있습니다.",
      render: (
        <div className="flex flex-col gap-20">
          <Card style={{ width: "100%" }} shadow="none" colorType="sub">
            <div className="flex jus-cen">
              <Radio.Group
                options={alignOptions}
                direction="horizontal"
                value={align}
                onChange={setAlign}
              />
            </div>
          </Card>
          <Tabs align={align} options={options} />
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Tabs, Radio, Card } from 'sud-ui';

const AlignTabs = () => {
  const [align, setAlign] = useState('left');
  
  const alignOptions = [
    { label: 'left', value: 'left' },
    { label: 'center', value: 'center' },
    { label: 'right', value: 'right' }
  ];

  const options = [
    {
      key: "home",
      label: "홈",
      children: <div>홈 컨텐츠입니다.</div>
    },
    {
      key: "components",
      label: "컴포넌트",
      children: <div>컴포넌트 컨텐츠입니다.</div>
    },
    {
      key: "css",
      label: "CSS",
      children: <div>CSS 컨텐츠입니다.</div>
    }
  ];

  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen">
          <Radio.Group
            options={alignOptions}
            direction="horizontal"
            value={align}
            onChange={setAlign}
          />
        </div>
      </Card>
      <Tabs align={align} options={options} />
    </div>
  );
};

export default AlignTabs;`,
      tscode: `import React, { useState } from 'react';
import { Tabs, Radio, Card } from 'sud-ui';

interface Option {
  key: string;
  label: string;
  children: React.ReactNode;
}

interface AlignOption {
  label: string;
  value: string;
}

const AlignTabs: React.FC = () => {
  const [align, setAlign] = useState<string>('left');
  
  const alignOptions: AlignOption[] = [
    { label: 'left', value: 'left' },
    { label: 'center', value: 'center' },
    { label: 'right', value: 'right' }
  ];

  const options: Option[] = [
    {
      key: "home",
      label: "홈",
      children: <div>홈 컨텐츠입니다.</div>
    },
    {
      key: "components",
      label: "컴포넌트",
      children: <div>컴포넌트 컨텐츠입니다.</div>
    },
    {
      key: "css",
      label: "CSS",
      children: <div>CSS 컨텐츠입니다.</div>
    }
  ];

  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen">
          <Radio.Group
            options={alignOptions}
            direction="horizontal"
            value={align}
            onChange={setAlign}
          />
        </div>
      </Card>
      <Tabs align={align} options={options} />
    </div>
  );
};

export default AlignTabs;`
    },
    {
      title: "Size",
      description: "탭의 크기를 설정할 수 있습니다.",
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
          <Tabs size={size} options={options} />
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Tabs, Radio, Card } from 'sud-ui';

const SizeTabs = () => {
  const [size, setSize] = useState('md');
  
  const sizeOptions = [
    { label: 'xs', value: 'xs' },
    { label: 'sm', value: 'sm' },
    { label: 'md', value: 'md' },
    { label: 'lg', value: 'lg' },
    { label: 'xl', value: 'xl' },
    { label: '2xl', value: '2xl' }
  ];

  const options = [
    {
      key: "home",
      label: "홈",
      children: <div>홈 컨텐츠입니다.</div>
    },
    {
      key: "components",
      label: "컴포넌트",
      children: <div>컴포넌트 컨텐츠입니다.</div>
    },
    {
      key: "css",
      label: "CSS",
      children: <div>CSS 컨텐츠입니다.</div>
    }
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
      <Tabs size={size} options={options} />
    </div>
  );
};

export default SizeTabs;`,
      tscode: `import React, { useState } from 'react';
import { Tabs, Radio, Card } from 'sud-ui';

interface Option {
  key: string;
  label: string;
  children: React.ReactNode;
}

interface SizeOption {
  label: string;
  value: string;
}

const SizeTabs: React.FC = () => {
  const [size, setSize] = useState<string>('md');
  
  const sizeOptions: SizeOption[] = [
    { label: 'xs', value: 'xs' },
    { label: 'sm', value: 'sm' },
    { label: 'md', value: 'md' },
    { label: 'lg', value: 'lg' },
    { label: 'xl', value: 'xl' },
    { label: '2xl', value: '2xl' }
  ];

  const options: Option[] = [
    {
      key: "home",
      label: "홈",
      children: <div>홈 컨텐츠입니다.</div>
    },
    {
      key: "components",
      label: "컴포넌트",
      children: <div>컴포넌트 컨텐츠입니다.</div>
    },
    {
      key: "css",
      label: "CSS",
      children: <div>CSS 컨텐츠입니다.</div>
    }
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
      <Tabs size={size} options={options} />
    </div>
  );
};

export default SizeTabs;`
    },
    {
      title: "Type",
      description: "탭의 타입을 설정할 수 있습니다.",
      render: (
        <Tabs
          colorType={{ active: "primary", inactive: "info" }}
          options={options}
        />
      ),
      jscode: `import React from 'react';
import { Tabs } from 'sud-ui';

const CustomColorTabs = () => {
  const options = [
    {
      key: "home",
      label: "홈",
      children: <div>홈 컨텐츠입니다.</div>
    },
    {
      key: "components",
      label: "컴포넌트",
      children: <div>컴포넌트 컨텐츠입니다.</div>
    },
    {
      key: "css",
      label: "CSS",
      children: <div>CSS 컨텐츠입니다.</div>
    }
  ];

  return (
    <Tabs 
      colorType={{ active: "primary", inactive: "info" }}
      options={options} 
    />
  );
};

export default CustomColorTabs;`,
      tscode: `import React from 'react';
import { Tabs } from 'sud-ui';

interface Option {
  key: string;
  label: string;
  children: React.ReactNode;
}

const CustomColorTabs: React.FC = () => {
  const options: Option[] = [
    {
      key: "home",
      label: "홈",
      children: <div>홈 컨텐츠입니다.</div>
    },
    {
      key: "components",
      label: "컴포넌트",
      children: <div>컴포넌트 컨텐츠입니다.</div>
    },
    {
      key: "css",
      label: "CSS",
      children: <div>CSS 컨텐츠입니다.</div>
    }
  ];

  return (
    <Tabs 
      colorType={{ active: "primary", inactive: "info" }}
      options={options} 
    />
  );
};

export default CustomColorTabs;`
    },
    {
      title: "Icon",
      description: "탭에 아이콘을 추가할 수 있습니다.",
      render: (
        <>
          <Tabs
            colorType={{ active: "primary", inactive: "info" }}
            options={options}
          />
        </>
      ),
      jscode: `import React from 'react';
import { Tabs } from 'sud-ui';

const IconTabs = () => {
  const options = [
    {
      key: "home",
      label: "홈",
      children: <div>홈 컨텐츠입니다.</div>
    },
    {
      key: "components",
      label: "컴포넌트",
      children: <div>컴포넌트 컨텐츠입니다.</div>
    },
    {
      key: "css",
      label: "CSS",
      children: <div>CSS 컨텐츠입니다.</div>
    }
  ];

  return (
    <Tabs 
      colorType={{ active: "primary", inactive: "info" }}
      options={options} 
    />
  );
};

export default IconTabs;`,
      tscode: `import React from 'react';
import { Tabs } from 'sud-ui';

interface Option {
  key: string;
  label: string;
  children: React.ReactNode;
}

const IconTabs: React.FC = () => {
  const options: Option[] = [
    {
      key: "home",
      label: "홈",
      children: <div>홈 컨텐츠입니다.</div>
    },
    {
      key: "components",
      label: "컴포넌트",
      children: <div>컴포넌트 컨텐츠입니다.</div>
    },
    {
      key: "css",
      label: "CSS",
      children: <div>CSS 컨텐츠입니다.</div>
    }
  ];

  return (
    <Tabs 
      colorType={{ active: "primary", inactive: "info" }}
      options={options} 
    />
  );
};

export default IconTabs;`
    },
    {
      title: "Color Customization",
      description: "탭의 색상을 커스텀할 수 있습니다.",
      render: (
        <Tabs
          colorType={{ active: "primary", inactive: "info" }}
          options={options}
        />
      ),
      jscode: `import React from 'react';
import { Tabs } from 'sud-ui';

const CustomColorTabs = () => {
  const options = [
    {
      key: "home",
      label: "홈",
      children: <div>홈 컨텐츠입니다.</div>
    },
    {
      key: "components",
      label: "컴포넌트",
      children: <div>컴포넌트 컨텐츠입니다.</div>
    },
    {
      key: "css",
      label: "CSS",
      children: <div>CSS 컨텐츠입니다.</div>
    }
  ];

  return (
    <Tabs 
      colorType={{ active: "primary", inactive: "info" }}
      options={options} 
    />
  );
};

export default CustomColorTabs;`,
      tscode: `import React from 'react';
import { Tabs } from 'sud-ui';

interface Option {
  key: string;
  label: string;
  children: React.ReactNode;
}

const CustomColorTabs: React.FC = () => {
  const options: Option[] = [
    {
      key: "home",
      label: "홈",
      children: <div>홈 컨텐츠입니다.</div>
    },
    {
      key: "components",
      label: "컴포넌트",
      children: <div>컴포넌트 컨텐츠입니다.</div>
    },
    {
      key: "css",
      label: "CSS",
      children: <div>CSS 컨텐츠입니다.</div>
    }
  ];

  return (
    <Tabs 
      colorType={{ active: "primary", inactive: "info" }}
      options={options} 
    />
  );
};

export default CustomColorTabs;`
    }
  ];
  const howToUseTableData = [
    {
      key: "value",
      name: "value",
      description: "현재 선택된 탭의 키 값 (제어 컴포넌트)",
      type: "string | number",
      default: "undefined"
    },
    {
      key: "defaultValue",
      name: "defaultValue",
      description: "초기 선택된 탭의 키 값 (비제어 컴포넌트)",
      type: "string | number",
      default: "undefined"
    },
    {
      key: "onChange",
      name: "onChange",
      description: "탭 변경 시 호출되는 콜백 함수",
      type: "(key: string | number) => void",
      default: "undefined"
    },
    {
      key: "options",
      name: "options",
      description: "탭 옵션 배열 (선언적 방식 사용 시)",
      type: "Array<{ key: string | number, label: string | ReactNode, children?: ReactNode }>",
      default: "undefined"
    },
    {
      key: "children",
      name: "children",
      description: "TabPane 컴포넌트들 (선언적 방식 대신 사용)",
      type: "ReactNode",
      default: "undefined"
    },
    {
      key: "size",
      name: "size",
      description: "탭의 크기",
      type: (
        <>
          <Tag>xs</Tag> ｜ <Tag>sm</Tag> ｜ <Tag>md</Tag> ｜ <Tag>lg</Tag> ｜{" "}
          <Tag>xl</Tag> ｜ <Tag>2xl</Tag>
        </>
      ),
      default: <Tag>md</Tag>
    },
    {
      key: "colorType",
      name: "colorType",
      description: "탭의 색상 타입",
      type: (
        <>
          <Tag>
            {
              "{ active?: 'default' | 'primary' | 'success' | 'warning' | 'danger', inactive?: 'default' | 'primary' | 'success' | 'warning' | 'danger' }"
            }
          </Tag>
        </>
      ),
      default: <Tag>{"{ active: 'default', inactive: 'default' }"}</Tag>
    },
    {
      key: "background",
      name: "background",
      description: "탭의 배경색",
      type: (
        <>
          <Tag>{"{ active?: string, inactive?: string }"}</Tag>
        </>
      ),
      default: <Tag>{"{ active: undefined, inactive: undefined }"}</Tag>
    },
    {
      key: "color",
      name: "color",
      description: "탭의 텍스트 색상",
      type: (
        <>
          <Tag>{"{ active?: string, inactive?: string }"}</Tag>
        </>
      ),
      default: <Tag>{"{ active: undefined, inactive: undefined }"}</Tag>
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
      description: "탭의 테두리 색상",
      type: (
        <>
          <Tag>{"{ active?: string, inactive?: string }"}</Tag>
        </>
      ),
      default: <Tag>{"{ active: undefined, inactive: undefined }"}</Tag>
    },
    {
      key: "borderType",
      name: "borderType",
      description: "테두리 스타일",
      type: "string",
      default: "solid"
    },
    {
      key: "borderWeight",
      name: "borderWeight",
      description: "테두리 두께",
      type: "number",
      default: "1"
    },
    {
      key: "style",
      name: "style",
      description: "추가 스타일",
      type: "CSSProperties",
      default: "{}"
    },
    {
      key: "className",
      name: "className",
      description: "추가 클래스명",
      type: "string",
      default: "''"
    },
    {
      key: "disabledKeys",
      name: "disabledKeys",
      description: "비활성화할 탭의 키 배열",
      type: "Array<string | number>",
      default: "[]"
    },
    {
      key: "align",
      name: "align",
      description: "탭의 정렬 위치",
      type: (
        <>
          <Tag>left</Tag> ｜ <Tag>center</Tag> ｜ <Tag>right</Tag>
        </>
      ),
      default: <Tag>left</Tag>
    },
    {
      key: "underlineColor",
      name: "underlineColor",
      description: "탭 선택 시 하단 밑줄 색상",
      type: (
        <>
          <Tag>{"{ active?: string, inactive?: string }"}</Tag>
        </>
      ),
      default: "-"
    },
    {
      key: "activeStyle",
      name: "activeStyle",
      description: "선택된 탭의 스타일",
      type: (
        <>
          <Tag>
            {
              "{ background?: string, color?: string, borderColor?: string, [key: string]: any }"
            }
          </Tag>
        </>
      ),
      default: "-"
    },
    {
      key: "inactiveStyle",
      name: "inactiveStyle",
      description: "선택되지 않은 탭의 스타일",
      type: (
        <>
          <Tag>
            {
              "{ background?: string, color?: string, borderColor?: string, [key: string]: any }"
            }
          </Tag>
        </>
      ),
      default: "-"
    }
  ];

  const tabPaneProps = [
    {
      key: "label",
      name: "label",
      description: "탭의 레이블",
      type: "string | ReactNode",
      default: "undefined"
    },
    {
      key: "children",
      name: "children",
      description: "탭의 내용",
      type: "ReactNode",
      default: "undefined"
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
        howToUseTableData,
        tabPaneProps
      }}
      grid={true}
      isMobile={isMobile}
    />
  );
}
