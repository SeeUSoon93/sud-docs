"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { useLang } from "../../_lib/context/langContext";
import { Tabs, Tag, Radio, Card } from "sud-ui";

import React, { useState } from "react";
import { tagRender } from "../../_lib/components/common/render";
import {
  borderTypeTags,
  defaultColorTypeTags,
  defaultSizeTypeTags
} from "../../_lib/components/common/defaultType";

export default function TabsPage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();
  const [align, setAlign] = useState("left");
  const [size, setSize] = useState("md");

  const name = "Tabs";
  const description = (
    <>
      {lang === "ko"
        ? "탭을 사용하여 여러 뷰를 전환할 수 있습니다."
        : "Use tabs to switch between multiple views."}
    </>
  );

  const IMPORT_COMMAND = "import { Tabs } from 'sud-ui';";

  const whenToUse =
    lang === "ko"
      ? ["여러 뷰를 전환할 때."]
      : ["When you need to switch between multiple views."];

  const options = [
    {
      key: "home",
      label: "Home",
      children: <div>Home Content</div>
    },
    {
      key: "components",
      label: "Components",
      children: <div>Components Content</div>
    },
    {
      key: "css",
      label: "CSS",
      children: <div>CSS Content</div>
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
      description: lang === "ko" ? "기본적인 사용 방법입니다." : "Basic usage.",
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
      label: "Home",
      children: <div>Home Content</div>
    },
    {
      key: "components",
      label: "Components",
      children: <div>Components Content</div>
    },
    {
      key: "css",
      label: "CSS",
      children: <div>CSS Content</div>
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
      label: "Home",
      children: <div>Home Content</div>
    },
    {
      key: "components",
      label: "Components",
      children: <div>Components Content</div>
    },
    {
      key: "css",
      label: "CSS",
      children: <div>CSS Content</div>
    }
  ];
  return <Tabs options={options} />;
};

export default BasicTabs;`
    },
    {
      title: "TabPane 사용",
      description:
        lang === "ko"
          ? "TabPane 컴포넌트를 사용한 방식입니다."
          : "Using the TabPane component.",
      render: (
        <>
          <Tabs>
            <Tabs.TabPane label="Home">
              <div>Home Content</div>
            </Tabs.TabPane>
            <Tabs.TabPane label="Components">
              <div>Components Content</div>
            </Tabs.TabPane>
            <Tabs.TabPane label="CSS">
              <div>CSS Content</div>
            </Tabs.TabPane>
          </Tabs>
        </>
      ),
      jscode: `import React from 'react';
import { Tabs } from 'sud-ui';

const TabPaneExample = () => {
  return (
    <Tabs>
      <Tabs.TabPane label="Home">
        <div>Home Content</div>
      </Tabs.TabPane>
      <Tabs.TabPane label="Components">
        <div>Components Content</div>
      </Tabs.TabPane>
      <Tabs.TabPane label="CSS">
        <div>CSS Content</div>
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
      <Tabs.TabPane label="Home">
        <div>Home Content</div>
      </Tabs.TabPane>
      <Tabs.TabPane label="Components">
        <div>Components Content</div>
      </Tabs.TabPane>
      <Tabs.TabPane label="CSS">
        <div>CSS Content</div>
      </Tabs.TabPane>
    </Tabs>
  );
};

export default TabPaneExample;`
    },
    {
      title: "Disabled",
      description:
        lang === "ko"
          ? "탭을 비활성화할 수 있습니다."
          : "You can disable the tab.",
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
      label: "Home",
      children: <div>Home Content</div>
    },
    {
      key: "components",
      label: "Components",
      children: <div>Components Content</div>
    },
    {
      key: "css",
      label: "CSS",
      children: <div>CSS Content</div>
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
      label: "Home",
      children: <div>Home Content</div>
    },
    {
      key: "components",
      label: "Components",
      children: <div>Components Content</div>
    },
    {
      key: "css",
      label: "CSS",
      children: <div>CSS Content</div>
    }
  ];
  return <Tabs disabledKeys={["components"]} options={options} />;
};

export default DisabledTabsExample;`
    },
    {
      title: "Align",
      description:
        lang === "ko"
          ? "탭의 정렬 위치를 설정할 수 있습니다."
          : "You can set the alignment of the tab.",
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
      label: "Home",
      children: <div>Home Content</div>
    },
    {
      key: "components",
      label: "Components",
      children: <div>Components Content</div>
    },
    {
      key: "css",
      label: "CSS",
      children: <div>CSS Content</div>
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
      label: "Home",
      children: <div>Home Content</div>
    },
    {
      key: "components",
      label: "Components",
      children: <div>Components Content</div>
    },
    {
      key: "css",
      label: "CSS",
      children: <div>CSS Content</div>
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
      description:
        lang === "ko"
          ? "탭의 크기를 설정할 수 있습니다."
          : "You can set the size of the tab.",
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
      label: "Home",
      children: <div>Home Content</div>
    },
    {
      key: "components",
      label: "Components",
      children: <div>Components Content</div>
    },
    {
      key: "css",
      label: "CSS",
      children: <div>CSS Content</div>
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
      label: "Home",
      children: <div>Home Content</div>
    },
    {
      key: "components",
      label: "Components",
      children: <div>Components Content</div>
    },
    {
      key: "css",
      label: "CSS",
      children: <div>CSS Content</div>
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
      title: "Custom Color",
      description:
        lang === "ko"
          ? "탭의 색상을 커스텀할 수 있습니다."
          : "You can customize the color of the tab.",
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
      label: "Home",
      children: <div>Home Content</div>
    },
    {
      key: "components",
      label: "Components",
      children: <div>Components Content</div>
    },
    {
      key: "css",
      label: "CSS",
      children: <div>CSS Content</div>
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
      label: "Home",
      children: <div>Home Content</div>
    },
    {
      key: "components",
      label: "Components",
      children: <div>Components Content</div>
    },
    {
      key: "css",
      label: "CSS",
      children: <div>CSS Content</div>
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
      description:
        lang === "ko"
          ? "현재 선택된 탭의 키 값 (제어 컴포넌트)"
          : "The key value of the currently selected tab (controlled component)",
      type: "string | number",
      default: "-"
    },
    {
      key: "defaultValue",
      name: "defaultValue",
      description:
        lang === "ko"
          ? "초기 선택된 탭의 키 값 (비제어 컴포넌트)"
          : "The key value of the initially selected tab (uncontrolled component)",
      type: "string | number",
      default: "-"
    },
    {
      key: "onChange",
      name: "onChange",
      description:
        lang === "ko"
          ? "탭 변경 시 호출되는 콜백 함수"
          : "The callback function called when the tab changes",
      type: "(key: string | number) => void",
      default: "-"
    },
    {
      key: "options",
      name: "options",
      description:
        lang === "ko"
          ? "탭 옵션 배열 (선언적 방식 사용 시)"
          : "The array of tab options (when using the declarative method)",
      type: "Array<{ key: string | number, label: string | ReactNode, children?: ReactNode }>",
      default: "-"
    },
    {
      key: "children",
      name: "children",
      description:
        lang === "ko"
          ? "TabPane 컴포넌트들 (선언적 방식 대신 사용)"
          : "TabPane components (used instead of the declarative method)",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "size",
      name: "size",
      description: lang === "ko" ? "탭의 크기" : "The size of the tab",
      type: (
        <>
          {defaultSizeTypeTags}｜ <Tag>2xl</Tag>
        </>
      ),
      default: <Tag>md</Tag>
    },
    {
      key: "colorType",
      name: "colorType",
      description:
        lang === "ko" ? "탭의 색상 타입" : "The color type of the tab",
      type: (
        <>
          {`{ active?: "color-type", inactive?: "color-type" }`}
          <br />
          {defaultColorTypeTags}
        </>
      ),
      default: "{ active: 'default', inactive: 'default' }"
    },
    {
      key: "background",
      name: "background",
      description:
        lang === "ko"
          ? "탭의 배경색(palette값 또는 HEX code)"
          : "The background color of the tab (palette value or HEX code)",
      type: "{ active?: string, inactive?: string }",
      default: "-"
    },
    {
      key: "color",
      name: "color",
      description:
        lang === "ko"
          ? "탭의 텍스트 색상(palette값 또는 HEX code)"
          : "The text color of the tab (palette value or HEX code)",
      type: "{ active?: string, inactive?: string }",
      default: "-"
    },
    {
      key: "border",
      name: "border",
      description:
        lang === "ko" ? "테두리 표시 여부" : "Whether to display the border",
      type: "boolean",
      default: "true"
    },
    {
      key: "borderColor",
      name: "borderColor",
      description:
        lang === "ko"
          ? "탭의 테두리 색상(palette값 또는 HEX code)"
          : "The border color of the tab (palette value or HEX code)",
      type: "{ active?: string, inactive?: string }",
      default: "-"
    },
    {
      key: "borderType",
      name: "borderType",
      description: lang === "ko" ? "테두리 스타일" : "The border style",
      type: borderTypeTags,
      default: <Tag>solid</Tag>
    },
    {
      key: "borderWeight",
      name: "borderWeight",
      description: lang === "ko" ? "테두리 두께" : "The border weight",
      type: "number",
      default: "1"
    },
    {
      key: "style",
      name: "style",
      description: lang === "ko" ? "추가 스타일" : "Additional style",
      type: "CSSProperties",
      default: "{}"
    },
    {
      key: "className",
      name: "className",
      description: lang === "ko" ? "추가 클래스명" : "Additional class name",
      type: "string",
      default: "-"
    },
    {
      key: "disabledKeys",
      name: "disabledKeys",
      description:
        lang === "ko"
          ? "비활성화할 탭의 키 배열"
          : "The array of keys of the disabled tabs",
      type: "Array<string | number>",
      default: "[]"
    },
    {
      key: "align",
      name: "align",
      description:
        lang === "ko" ? "탭의 정렬 위치" : "The alignment of the tab",
      type: tagRender(["left", "center", "right"]),
      default: <Tag>left</Tag>
    }
  ];
  const groupTableData = [
    {
      key: "label",
      name: "label",
      description: lang === "ko" ? "탭의 레이블" : "The label of the tab",
      type: "string | ReactNode",
      default: "-"
    },
    {
      key: "children",
      name: "children",
      description: lang === "ko" ? "탭의 내용" : "The content of the tab",
      type: "ReactNode",
      default: "-"
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
        group: "Tabs.TabPane",
        groupTableData
      }}
      grid={true}
      isMobile={isMobile}
    />
  );
}
