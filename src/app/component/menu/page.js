"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { useLang } from "../../_lib/context/langContext";
import { Menu, Tag } from "sud-ui";
import { tagRender } from "../../_lib/components/common/render";
import {
  borderTypeTags,
  defaultColorTypeTags,
  shadowTypeTags,
  shapeTypeTags
} from "../../_lib/components/common/defaultType";

export default function MenuPage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();

  const name = "Menu";
  const description =
    lang === "ko" ? (
      <>메뉴 목록을 표시하고 선택할 수 있습니다.</>
    ) : (
      <>Display a list of menus and select them.</>
    );

  const IMPORT_COMMAND = "import { Menu } from 'sud-ui';";

  const whenToUse =
    lang === "ko"
      ? [
          "계층형 메뉴 구조가 필요할 때",
          "아코디언 또는 팝오버 형태로 하위 메뉴를 표시하고 싶을 때",
          "메뉴 항목의 선택 상태를 관리해야 할 때",
          "수평 또는 수직으로 메뉴를 배치하고 싶을 때"
        ]
      : [
          "When you need a hierarchical menu structure",
          "When you want to display submenus in accordion or popover form",
          "When you need to manage the selection state of menu items",
          "When you want to arrange menus horizontally or vertically"
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
      title: "Basic Usage",
      render: (
        <>
          <Menu items={items} />
        </>
      ),
      description: lang === "ko" ? "기본적인 사용 방법입니다." : "Basic usage.",
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
      title: "Popover",
      render: (
        <>
          <Menu items={items} expandType="popover" border />
        </>
      ),
      description:
        lang === "ko"
          ? "하위 메뉴를 팝오버 형태로 표시합니다."
          : "Display submenus in popover form.",
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

  return <Menu items={items} expandType="popover" border />;
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

  return <Menu items={items} expandType="popover" border />;
};

export default PopoverMenu;`
    },
    {
      title: "Horizontal",
      render: (
        <>
          <Menu items={items} expandType="popover" horizontal border />
        </>
      ),
      description:
        lang === "ko"
          ? "메뉴를 수평으로 배치하고 하위 메뉴를 팝오버 형태로 표시합니다."
          : "Display submenus in popover form horizontally.",
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

  return <Menu items={items} expandType="popover" horizontal border />;
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

  return <Menu items={items} expandType="popover" horizontal border />;
};

export default HorizontalPopoverMenu;`
    },
    {
      title: "Group",
      render: (
        <>
          <Menu items={groupItems} />
        </>
      ),
      description:
        lang === "ko"
          ? "메뉴 항목을 그룹으로 구분하여 표시합니다."
          : "Display menu items in groups.",
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

  return <Menu items={items} />;
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

  return <Menu items={items} />;
};

export default GroupMenu;`
    },
    {
      title: "Color Customization",
      description:
        lang === "ko"
          ? "메뉴의 색상을 커스텀할 수 있습니다."
          : "You can customize the color of the menu.",
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
      title: "Divider",
      description:
        lang === "ko"
          ? "메뉴 항목 사이에 구분선을 표시합니다."
          : "Display a divider between menu items.",
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
        lang === "ko"
          ? "메뉴 항목 목록. 각 항목은 { key: string, label: ReactNode, onClick?: () => void, children?: MenuItem[] } 형태로 구성됩니다."
          : "List of menu items. Each item is structured as { key: string, label: ReactNode, onClick?: () => void, children?: MenuItem[] }.",
      type: "MenuItem[]",
      default: "[]"
    },
    {
      key: "selectedKey",
      name: "selectedKey",
      description:
        lang === "ko"
          ? "현재 선택된 메뉴 항목의 key"
          : "Key of the currently selected menu item",
      type: "string",
      default: "-"
    },
    {
      key: "defaultSelectedKey",
      name: "defaultSelectedKey",
      description:
        lang === "ko"
          ? "초기 선택된 메뉴 항목의 key"
          : "Key of the initially selected menu item",
      type: "string",
      default: "-"
    },
    {
      key: "onSelect",
      name: "onSelect",
      description:
        lang === "ko"
          ? "메뉴 항목 선택 시 호출되는 함수"
          : "Function called when a menu item is selected",
      type: "(key: string) => void",
      default: "-"
    },
    {
      key: "expandType",
      name: "expandType",
      description:
        lang === "ko" ? "하위 메뉴 확장 방식" : "Submenu expansion type",
      type: <>{tagRender(["accordion", "popover"])}</>,
      default: <Tag>accordion</Tag>
    },
    {
      key: "horizontal",
      name: "horizontal",
      description:
        lang === "ko"
          ? "메뉴를 수평으로 배치할지 여부 (expandType이 'popover'일 때만 동작)"
          : "Whether to arrange the menu horizontally (only works when expandType is 'popover')",
      type: "boolean",
      default: "false"
    },
    {
      key: "selectedColor",
      name: "selectedColor",
      description:
        lang === "ko"
          ? "선택된 메뉴 항목의 배경색(palette값 또는 HEX code)"
          : "Background color of the selected menu item (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "selectedTextColor",
      name: "selectedTextColor",
      description:
        lang === "ko"
          ? "선택된 메뉴 항목의 텍스트 색상(palette값 또는 HEX code)"
          : "Text color of the selected menu item (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "hoverColor",
      name: "hoverColor",
      description:
        lang === "ko"
          ? "호버 시 메뉴 항목의 배경색(palette값 또는 HEX code)"
          : "Background color of the menu item on hover (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "hoverTextColor",
      name: "hoverTextColor",
      description:
        lang === "ko"
          ? "호버 시 메뉴 항목의 텍스트 색상(palette값 또는 HEX code)"
          : "Text color of the menu item on hover (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "divider",
      name: "divider",
      description:
        lang === "ko"
          ? "메뉴 항목 사이에 구분선을 표시할지 여부"
          : "Whether to display a divider between menu items",
      type: "boolean",
      default: "false"
    },
    {
      key: "dividerColor",
      name: "dividerColor",
      description:
        lang === "ko"
          ? "구분선의 색상(palette값 또는 HEX code)"
          : "Color of the divider (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "colorType",
      name: "colorType",
      description:
        lang === "ko" ? "메뉴의 색상 테마" : "Color theme of the menu",
      type: <>{defaultColorTypeTags}</>,
      default: <Tag>default</Tag>
    },
    {
      key: "background",
      name: "background",
      description:
        lang === "ko"
          ? "메뉴의 배경색(palette값 또는 HEX code)"
          : "Background color of the menu (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "color",
      name: "color",
      description:
        lang === "ko"
          ? "메뉴의 텍스트 색상(palette값 또는 HEX code)"
          : "Text color of the menu (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "border",
      name: "border",
      description:
        lang === "ko"
          ? "메뉴의 테두리 표시 여부"
          : "Whether to show the menu border",
      type: "boolean",
      default: "false"
    },
    {
      key: "borderColor",
      name: "borderColor",
      description:
        lang === "ko"
          ? "메뉴의 테두리 색상(palette값 또는 HEX code)"
          : "Border color of the menu (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "borderType",
      name: "borderType",
      description:
        lang === "ko" ? "메뉴의 테두리 스타일" : "Border style of the menu",
      type: <>{borderTypeTags}</>,
      default: <Tag>solid</Tag>
    },
    {
      key: "borderWeight",
      name: "borderWeight",
      description:
        lang === "ko" ? "메뉴의 테두리 두께" : "Border weight of the menu",
      type: "number",
      default: "1"
    },
    {
      key: "shape",
      name: "shape",
      description: lang === "ko" ? "메뉴의 모양" : "Shape of the menu",
      type: <>{shapeTypeTags}</>,
      default: <Tag>rounded</Tag>
    },
    {
      key: "shadow",
      name: "shadow",
      description:
        lang === "ko" ? "메뉴의 그림자 효과" : "Shadow effect of the menu",
      type: <>{shadowTypeTags}</>,
      default: <Tag>sm</Tag>
    },
    {
      key: "placement",
      name: "placement",
      description:
        lang === "ko"
          ? "팝오버 메뉴의 위치 (expandType이 'popover'일 때만 동작)"
          : "Position of the popover menu (only works when expandType is 'popover')",
      type: (
        <>
          [{tagRender(["top", "bottom", "left", "right"])},{" "}
          {tagRender(["top", "bottom", "left", "right"])}]
        </>
      ),
      default: <Tag>['bottom', 'right']</Tag>
    },
    {
      key: "className",
      name: "className",
      description: lang === "ko" ? "추가 클래스명" : "Additional class name",
      type: "string",
      default: "-"
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
    />
  );
}
