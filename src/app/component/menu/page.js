"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Menu, Tag } from "sud-ui";

export default function MenuPage() {
  const { isMobile } = useMobile();

  const name = "Menu";
  const description = <>메뉴 목록을 표시하고 선택할 수 있습니다.</>;

  const IMPORT_COMMAND = "import { Menu } from 'sud-ui';";

  const whenToUse = [
    "계층형 메뉴 구조가 필요할 때",
    "아코디언 또는 팝오버 형태로 하위 메뉴를 표시하고 싶을 때",
    "메뉴 항목의 선택 상태를 관리해야 할 때",
    "수평 또는 수직으로 메뉴를 배치하고 싶을 때"
  ];

  const items = [
    {
      key: "home",
      label: "Home",
      onClick: () => console.log("Home clicked")
    },
    {
      key: "components",
      label: "Components",
      children: [
        {
          key: "button",
          label: "Button",
          onClick: () => console.log("Button clicked")
        },
        {
          key: "input",
          label: "Input",
          onClick: () => console.log("Input clicked")
        }
      ]
    },
    {
      key: "about",
      label: "About",
      onClick: () => console.log("About clicked")
    }
  ];

  const groupItems = [
    {
      key: "general",
      title: "General",
      mode: "group",
      children: [
        { key: "button", label: "Button" },
        { key: "icon", label: "Icon" }
      ]
    },
    {
      key: "layout",
      title: "Layout",
      mode: "group",
      children: [
        { key: "header", label: "Header" },
        { key: "footer", label: "Footer" }
      ]
    }
  ];

  const examples = [
    {
      title: "기본 사용",
      render: (
        <>
          <Menu items={items} />
        </>
      ),
      description: "기본적인 메뉴 사용 방법입니다.",
      jscode: `import React from 'react';
import { Menu } from 'sud-ui';

const BasicMenu = () => {
  const items = [
    {
      key: "home",
      label: "Home",
      onClick: () => console.log("Home clicked")
    },
    {
      key: "components",
      label: "Components",
      children: [
        {
          key: "button",
          label: "Button",
          onClick: () => console.log("Button clicked")
        },
        {
          key: "input",
          label: "Input",
          onClick: () => console.log("Input clicked")
        }
      ]
    },
    {
      key: "about",
      label: "About",
      onClick: () => console.log("About clicked")
    }
  ];

  return <Menu items={items} />;
};

export default BasicMenu;`,
      tscode: `import React from 'react';
import { Menu } from 'sud-ui';

interface MenuItem {
  key: string;
  label: string;
  onClick?: () => void;
  children?: MenuItem[];
}

const BasicMenu: React.FC = () => {
  const items: MenuItem[] = [
    {
      key: "home",
      label: "Home",
      onClick: () => console.log("Home clicked")
    },
    {
      key: "components",
      label: "Components",
      children: [
        {
          key: "button",
          label: "Button",
          onClick: () => console.log("Button clicked")
        },
        {
          key: "input",
          label: "Input",
          onClick: () => console.log("Input clicked")
        }
      ]
    },
    {
      key: "about",
      label: "About",
      onClick: () => console.log("About clicked")
    }
  ];

  return <Menu items={items} />;
};

export default BasicMenu;`
    },
    {
      title: "팝오버 메뉴",
      render: (
        <>
          <Menu items={items} expandType="popover" />
        </>
      ),
      description: "하위 메뉴를 팝오버 형태로 표시합니다.",
      jscode: `import React from 'react';
import { Menu } from 'sud-ui';

const PopoverMenu = () => {
  const items = [
    {
      key: "home",
      label: "Home",
      onClick: () => console.log("Home clicked")
    },
    {
      key: "components",
      label: "Components",
      children: [
        {
          key: "button",
          label: "Button",
          onClick: () => console.log("Button clicked")
        },
        {
          key: "input",
          label: "Input",
          onClick: () => console.log("Input clicked")
        }
      ]
    },
    {
      key: "about",
      label: "About",
      onClick: () => console.log("About clicked")
    }
  ];

  return <Menu items={items} expandType="popover" />;
};

export default PopoverMenu;`,
      tscode: `import React from 'react';
import { Menu } from 'sud-ui';

interface MenuItem {
  key: string;
  label: string;
  onClick?: () => void;
  children?: MenuItem[];
}

const PopoverMenu: React.FC = () => {
  const items: MenuItem[] = [
    {
      key: "home",
      label: "Home",
      onClick: () => console.log("Home clicked")
    },
    {
      key: "components",
      label: "Components",
      children: [
        {
          key: "button",
          label: "Button",
          onClick: () => console.log("Button clicked")
        },
        {
          key: "input",
          label: "Input",
          onClick: () => console.log("Input clicked")
        }
      ]
    },
    {
      key: "about",
      label: "About",
      onClick: () => console.log("About clicked")
    }
  ];

  return <Menu items={items} expandType="popover" />;
};

export default PopoverMenu;`
    },
    {
      title: "수평 팝오버 메뉴",
      render: (
        <>
          <Menu items={items} expandType="popover" horizontal />
        </>
      ),
      description:
        "메뉴를 수평으로 배치하고 하위 메뉴를 팝오버 형태로 표시합니다.",
      jscode: `import React from 'react';
import { Menu } from 'sud-ui';

const HorizontalPopoverMenu = () => {
  const items = [
    {
      key: "home",
      label: "Home",
      onClick: () => console.log("Home clicked")
    },
    {
      key: "components",
      label: "Components",
      children: [
        {
          key: "button",
          label: "Button",
          onClick: () => console.log("Button clicked")
        },
        {
          key: "input",
          label: "Input",
          onClick: () => console.log("Input clicked")
        }
      ]
    },
    {
      key: "about",
      label: "About",
      onClick: () => console.log("About clicked")
    }
  ];

  return <Menu items={items} expandType="popover" horizontal />;
};

export default HorizontalPopoverMenu;`,
      tscode: `import React from 'react';
import { Menu } from 'sud-ui';

interface MenuItem {
  key: string;
  label: string;
  onClick?: () => void;
  children?: MenuItem[];
}

const HorizontalPopoverMenu: React.FC = () => {
  const items: MenuItem[] = [
    {
      key: "home",
      label: "Home",
      onClick: () => console.log("Home clicked")
    },
    {
      key: "components",
      label: "Components",
      children: [
        {
          key: "button",
          label: "Button",
          onClick: () => console.log("Button clicked")
        },
        {
          key: "input",
          label: "Input",
          onClick: () => console.log("Input clicked")
        }
      ]
    },
    {
      key: "about",
      label: "About",
      onClick: () => console.log("About clicked")
    }
  ];

  return <Menu items={items} expandType="popover" horizontal />;
};

export default HorizontalPopoverMenu;`
    },
    {
      title: "그룹 메뉴",
      render: (
        <>
          <Menu items={groupItems} expandType="accordion" />
        </>
      ),
      description: "메뉴 항목을 그룹으로 구분하여 표시합니다.",
      jscode: `import React from 'react';
import { Menu } from 'sud-ui';

const GroupMenu = () => {
  const items = [
    {
      key: "general",
      title: "General",
      mode: "group",
      children: [
        { key: "button", label: "Button" },
        { key: "icon", label: "Icon" }
      ]
    },
    {
      key: "layout",
      title: "Layout",
      mode: "group",
      children: [
        { key: "header", label: "Header" },
        { key: "footer", label: "Footer" }
      ]
    }
  ];

  return <Menu items={items} expandType="accordion" />;
};

export default GroupMenu;`,
      tscode: `import React from 'react';
import { Menu } from 'sud-ui';

interface MenuItem {
  key: string;
  label: string;
  title?: string;
  mode?: 'group';
  children?: MenuItem[];
}

const GroupMenu: React.FC = () => {
  const items: MenuItem[] = [
    {
      key: "general",
      title: "General",
      mode: "group",
      children: [
        { key: "button", label: "Button" },
        { key: "icon", label: "Icon" }
      ]
    },
    {
      key: "layout",
      title: "Layout",
      mode: "group",
      children: [
        { key: "header", label: "Header" },
        { key: "footer", label: "Footer" }
      ]
    }
  ];

  return <Menu items={items} expandType="accordion" />;
};

export default GroupMenu;`
    },
    {
      title: "색상 커스텀",
      description: "메뉴 항목의 색상을 커스텀할 수 있습니다.",
      render: (
        <>
          <Menu
            items={items}
            colorType="sub"
            selectedColor="purple"
            selectedTextColor="white"
            hoverColor="yellow"
            hoverTextColor="black"
          />
        </>
      ),
      jscode: `import React from 'react';
import { Menu } from 'sud-ui';

const CustomColorMenu = () => {
  const items = [
    {
      key: "home",
      label: "Home",
      onClick: () => console.log("Home clicked")
    },
    {
      key: "components",
      label: "Components",
      children: [
        {
          key: "button",
          label: "Button",
          onClick: () => console.log("Button clicked")
        },
        {
          key: "input",
          label: "Input",
          onClick: () => console.log("Input clicked")
        }
      ]
    },
    {
      key: "about",
      label: "About",
      onClick: () => console.log("About clicked")
    }
  ];

  return (
    <Menu
      items={items}
      colorType="sub"
      selectedColor="purple"
      selectedTextColor="white"
      hoverColor="yellow"
      hoverTextColor="black"
    />
  );
};

export default CustomColorMenu;`,
      tscode: `import React from 'react';
import { Menu } from 'sud-ui';

interface MenuItem {
  key: string;
  label: string;
  onClick?: () => void;
  children?: MenuItem[];
}

const CustomColorMenu: React.FC = () => {
  const items: MenuItem[] = [
    {
      key: "home",
      label: "Home",
      onClick: () => console.log("Home clicked")
    },
    {
      key: "components",
      label: "Components",
      children: [
        {
          key: "button",
          label: "Button",
          onClick: () => console.log("Button clicked")
        },
        {
          key: "input",
          label: "Input",
          onClick: () => console.log("Input clicked")
        }
      ]
    },
    {
      key: "about",
      label: "About",
      onClick: () => console.log("About clicked")
    }
  ];

  return (
    <Menu
      items={items}
      colorType="sub"
      selectedColor="purple"
      selectedTextColor="white"
      hoverColor="yellow"
      hoverTextColor="black"
    />
  );
};

export default CustomColorMenu;`
    },
    {
      title: "구분선",
      description: "메뉴 항목 사이에 구분선을 표시합니다.",
      render: (
        <>
          <Menu items={items} divider />
        </>
      ),
      jscode: `import React from 'react';
import { Menu } from 'sud-ui';

const DividerMenu = () => {
  const items = [
    {
      key: "home",
      label: "Home",
      onClick: () => console.log("Home clicked")
    },
    {
      key: "components",
      label: "Components",
      children: [
        {
          key: "button",
          label: "Button",
          onClick: () => console.log("Button clicked")
        },
        {
          key: "input",
          label: "Input",
          onClick: () => console.log("Input clicked")
        }
      ]
    },
    {
      key: "about",
      label: "About",
      onClick: () => console.log("About clicked")
    }
  ];

  return <Menu items={items} divider />;
};

export default DividerMenu;`,
      tscode: `import React from 'react';
import { Menu } from 'sud-ui';

interface MenuItem {
  key: string;
  label: string;
  onClick?: () => void;
  children?: MenuItem[];
}

const DividerMenu: React.FC = () => {
  const items: MenuItem[] = [
    {
      key: "home",
      label: "Home",
      onClick: () => console.log("Home clicked")
    },
    {
      key: "components",
      label: "Components",
      children: [
        {
          key: "button",
          label: "Button",
          onClick: () => console.log("Button clicked")
        },
        {
          key: "input",
          label: "Input",
          onClick: () => console.log("Input clicked")
        }
      ]
    },
    {
      key: "about",
      label: "About",
      onClick: () => console.log("About clicked")
    }
  ];

  return <Menu items={items} divider />;
};

export default DividerMenu;`
    }
  ];

  const howToUseTableData = [
    {
      key: "items",
      name: "items",
      description:
        "메뉴 항목 목록. 각 항목은 { key: string, label: ReactNode, onClick?: () => void, children?: MenuItem[] } 형태로 구성됩니다.",
      type: "MenuItem[]",
      default: "[]"
    },
    {
      key: "selectedKey",
      name: "selectedKey",
      description: "현재 선택된 메뉴 항목의 key",
      type: "string",
      default: ""
    },
    {
      key: "defaultSelectedKey",
      name: "defaultSelectedKey",
      description: "초기 선택된 메뉴 항목의 key",
      type: "string",
      default: ""
    },
    {
      key: "onSelect",
      name: "onSelect",
      description: "메뉴 항목 선택 시 호출되는 함수",
      type: "(key: string) => void",
      default: ""
    },
    {
      key: "expandType",
      name: "expandType",
      description: "하위 메뉴 확장 방식",
      type: (
        <>
          <Tag>accordion</Tag> ｜ <Tag>popover</Tag>
        </>
      ),
      default: <Tag>accordion</Tag>
    },
    {
      key: "horizontal",
      name: "horizontal",
      description:
        "메뉴를 수평으로 배치할지 여부 (expandType이 'popover'일 때만 동작)",
      type: "boolean",
      default: "false"
    },
    {
      key: "selectedColor",
      name: "selectedColor",
      description: "선택된 메뉴 항목의 배경색",
      type: "string",
      default: ""
    },
    {
      key: "selectedTextColor",
      name: "selectedTextColor",
      description: "선택된 메뉴 항목의 텍스트 색상",
      type: "string",
      default: ""
    },
    {
      key: "hoverColor",
      name: "hoverColor",
      description: "호버 시 메뉴 항목의 배경색",
      type: "string",
      default: ""
    },
    {
      key: "hoverTextColor",
      name: "hoverTextColor",
      description: "호버 시 메뉴 항목의 텍스트 색상",
      type: "string",
      default: ""
    },
    {
      key: "divider",
      name: "divider",
      description: "메뉴 항목 사이에 구분선을 표시할지 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "dividerColor",
      name: "dividerColor",
      description: "구분선의 색상",
      type: "string",
      default: ""
    },
    {
      key: "colorType",
      name: "colorType",
      description: "메뉴의 색상 테마",
      type: (
        <>
          <Tag>default</Tag> ｜ <Tag>sub</Tag> ｜ <Tag>primary</Tag> ｜{" "}
          <Tag>secondary</Tag> ｜ <Tag>success</Tag> ｜ <Tag>warning</Tag> ｜{" "}
          <Tag>danger</Tag> ｜ <Tag>info</Tag> ｜ <Tag>text</Tag>
        </>
      ),
      default: <Tag>default</Tag>
    },
    {
      key: "background",
      name: "background",
      description: "메뉴의 배경색",
      type: "string",
      default: ""
    },
    {
      key: "color",
      name: "color",
      description: "메뉴의 텍스트 색상",
      type: "string",
      default: ""
    },
    {
      key: "border",
      name: "border",
      description: "메뉴의 테두리 표시 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "borderColor",
      name: "borderColor",
      description: "메뉴의 테두리 색상",
      type: "string",
      default: ""
    },
    {
      key: "borderType",
      name: "borderType",
      description: "메뉴의 테두리 스타일",
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
      description: "메뉴의 테두리 두께",
      type: "number",
      default: "1"
    },
    {
      key: "shape",
      name: "shape",
      description: "메뉴의 모양",
      type: (
        <>
          <Tag>rounded</Tag> ｜ <Tag>square</Tag>
        </>
      ),
      default: <Tag>rounded</Tag>
    },
    {
      key: "shadow",
      name: "shadow",
      description: "메뉴의 그림자 효과",
      type: (
        <>
          <Tag>none</Tag> ｜ <Tag>sm</Tag> ｜ <Tag>md</Tag> ｜ <Tag>lg</Tag> ｜{" "}
          <Tag>xl</Tag>
        </>
      ),
      default: <Tag>sm</Tag>
    },
    {
      key: "placement",
      name: "placement",
      description: "팝오버 메뉴의 위치 (expandType이 'popover'일 때만 동작)",
      type: "string[]",
      default: "['bottom', 'right']"
    },
    {
      key: "className",
      name: "className",
      description: "추가 클래스명",
      type: "string",
      default: ""
    },
    {
      key: "style",
      name: "style",
      description: "추가 스타일",
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
    />
  );
}
