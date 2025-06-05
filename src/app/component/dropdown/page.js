"use client";
import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { useLang } from "../../_lib/context/langContext";
import { Button, Dropdown, Tag } from "sud-ui";
import { AngleDown, AngleLeft, AngleRight, AngleUp } from "sud-icons";
import { tagRender } from "../../_lib/components/common/render";
import {
  borderTypeTags,
  defaultColorTypeTags,
  shadowTypeTags,
  shapeTypeTags
} from "../../_lib/components/common/defaultType";

export default function DrawerPage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();

  const name = lang === "ko" ? "드롭다운" : "Dropdown";
  const description =
    lang === "ko" ? (
      <>드롭다운 목록을 표시할 수 있습니다.</>
    ) : (
      <>You can display a dropdown list.</>
    );

  const IMPORT_COMMAND = "import { Dropdown } from 'sud-ui';";

  const whenToUse =
    lang === "ko"
      ? [
          "사용자가 선택할 수 있는 옵션 목록을 표시할 때",
          "공간을 효율적으로 사용하면서 여러 옵션을 제공해야 할 때",
          "메뉴, 필터, 정렬 등의 기능을 구현할 때",
          "사용자 인터페이스에서 추가 작업이나 옵션을 제공할 때",
          "폼이나 설정에서 여러 선택지를 제공할 때"
        ]
      : [
          "When you need to display a list of options that users can select.",
          "When you need to provide multiple options efficiently while conserving space.",
          "When implementing features like menus, filters, or sorting.",
          "When providing additional actions or options in the user interface.",
          "When offering multiple choices in forms or settings."
        ];

  const basicItems = [
    {
      key: "menu1",
      label: "Menu 1",
      onClick: () => console.log("Menu 1 clicked")
    },
    {
      key: "menu2",
      label: "Menu 2",
      onClick: () => console.log("Menu 2 clicked")
    },
    {
      key: "menu3",
      label: "Menu 3",
      onClick: () => console.log("Menu 3 clicked")
    }
  ];

  const placementItems = [
    {
      placement: "top",
      icon: <AngleUp size={16} />
    },
    {
      placement: "bottom",
      icon: <AngleDown size={16} />
    },
    {
      placement: "left",
      icon: <AngleLeft size={16} />
    },
    {
      placement: "right",
      icon: <AngleRight size={16} />
    }
  ];

  const examples = [
    {
      title: "Basic Usage",
      render: (
        <div>
          <Dropdown items={basicItems}>
            <Button icon={<AngleDown size={16} />} iconPosition="right">
              Hover me!
            </Button>
          </Dropdown>
        </div>
      ),
      description: lang === "ko" ? "기본적인 사용 방법입니다." : "Basic usage.",
      jscode: `import { Dropdown, Button } from "sud-ui";
import { AngleDown } from "sud-icons";

const items = [
  {
    key: "menu1",
    label: "Menu 1",
    onClick: () => console.log("Menu 1 clicked")
  },
  {
    key: "menu2",
    label: "Menu 2",
    onClick: () => console.log("Menu 2 clicked")
  }
];

export default function Example() {
  return (
    <Dropdown items={items}>
      <Button icon={<AngleDown size={16} />} iconPosition="right">
        Hover me!
      </Button>
    </Dropdown>
  );
}`,
      tscode: `import { Dropdown, Button } from "sud-ui";
import { AngleDown } from "sud-icons";

interface MenuItem {
  key: string;
  label: string;
  onClick: () => void;
}

const items: MenuItem[] = [
  {
    key: "menu1",
    label: "Menu 1",
    onClick: () => console.log("Menu 1 clicked")
  },
  {
    key: "menu2",
    label: "Menu 2",
    onClick: () => console.log("Menu 2 clicked")
  }
];

export default function Example() {
  return (
    <Dropdown items={items}>
      <Button icon={<AngleDown size={16} />} iconPosition="right">
        Hover me!
      </Button>
    </Dropdown>
  );
}`
    },
    {
      title: "Trigger",
      render: (
        <div className="flex flex-col gap-20">
          <div>
            <Dropdown items={basicItems} trigger="click">
              <Button icon={<AngleDown size={16} />} iconPosition="right">
                Click me!
              </Button>
            </Dropdown>
          </div>
          <div>
            <Dropdown items={basicItems} trigger="contextMenu">
              <Button icon={<AngleDown size={16} />} iconPosition="right">
                Right Click me!
              </Button>
            </Dropdown>
          </div>
        </div>
      ),
      description:
        lang === "ko"
          ? "드롭다운의 트리거를 설정할 수 있습니다."
          : "You can set the trigger for the dropdown.",
      jscode: `import { Dropdown, Button } from "sud-ui";
import { AngleDown } from "sud-icons";

const items = [
  {
    key: "menu1",
    label: "Menu 1",
    onClick: () => console.log("Menu 1 clicked")
  },
  {
    key: "menu2",
    label: "Menu 2",
    onClick: () => console.log("Menu 2 clicked")
  }
];

export default function Example() {
  return (
    <div className="flex flex-col gap-20">
      <div>
        <Dropdown items={items} trigger="click">
          <Button icon={<AngleDown size={16} />} iconPosition="right">
            Click me!
          </Button>
        </Dropdown>
      </div>
      <div>
        <Dropdown items={items} trigger="contextMenu">
          <Button icon={<AngleDown size={16} />} iconPosition="right">
            Right Click me!
          </Button>
        </Dropdown>
      </div>
    </div>
  );
}`,
      tscode: `import { Dropdown, Button } from "sud-ui";
import { AngleDown } from "sud-icons";

interface MenuItem {
  key: string;
  label: string;
  onClick: () => void;
}

const items: MenuItem[] = [
  {
    key: "menu1",
    label: "Menu 1",
    onClick: () => console.log("Menu 1 clicked")
  },
  {
    key: "menu2",
    label: "Menu 2",
    onClick: () => console.log("Menu 2 clicked")
  }
];

export default function Example() {
  return (
    <div className="flex flex-col gap-20">
      <div>
        <Dropdown items={items} trigger="click">
          <Button icon={<AngleDown size={16} />} iconPosition="right">
            Click me!
          </Button>
        </Dropdown>
      </div>
      <div>
        <Dropdown items={items} trigger="contextMenu">
          <Button icon={<AngleDown size={16} />} iconPosition="right">
            Right Click me!
          </Button>
        </Dropdown>
      </div>
    </div>
  );
}`
    },
    {
      title: "Disabled",
      render: <div></div>,
      description:
        lang === "ko"
          ? "드롭다운을 비활성화할 수 있습니다."
          : "You can disable the dropdown.",
      render: (
        <div>
          <Dropdown items={basicItems} disabled>
            <Button
              icon={<AngleDown size={16} />}
              iconPosition="right"
              disabled
            >
              Disabled
            </Button>
          </Dropdown>
        </div>
      ),
      jscode: `import { Dropdown, Button } from "sud-ui";
import { AngleDown } from "sud-icons";

const items = [
  {
    key: "menu1",
    label: "Menu 1",
    onClick: () => console.log("Menu 1 clicked")
  },
  {
    key: "menu2",
    label: "Menu 2",
    onClick: () => console.log("Menu 2 clicked")
  }
];

export default function Example() {
  return (
    <div>
      <Dropdown items={items} disabled>
        <Button icon={<AngleDown size={16} />} iconPosition="right" disabled>
          Disabled
        </Button>
      </Dropdown>
    </div>
  );
}`,
      tscode: `import { Dropdown, Button } from "sud-ui";
import { AngleDown } from "sud-icons";

interface MenuItem {
  key: string;
  label: string;
  onClick: () => void;
}

const items: MenuItem[] = [
  {
    key: "menu1",
    label: "Menu 1",
    onClick: () => console.log("Menu 1 clicked")
  },
  {
    key: "menu2",
    label: "Menu 2",
    onClick: () => console.log("Menu 2 clicked")
  }
];

export default function Example() {
  return (
    <div>
      <Dropdown items={items} disabled>
        <Button icon={<AngleDown size={16} />} iconPosition="right" disabled>
          Disabled
        </Button>
      </Dropdown>
    </div>
  );
}`
    },

    {
      title: "Color Customization",
      render: (
        <div style={{ display: "flex", gap: "8px" }}>
          <Dropdown items={basicItems} colorType="default">
            <Button icon={<AngleDown size={16} />} iconPosition="right">
              Default
            </Button>
          </Dropdown>
          <Dropdown items={basicItems} colorType="primary">
            <Button
              colorType="primary"
              icon={<AngleDown size={16} />}
              iconPosition="right"
            >
              Primary
            </Button>
          </Dropdown>
        </div>
      ),
      description:
        lang === "ko"
          ? "드롭다운의 색상을 커스텀할 수 있습니다."
          : "You can customize the color of the dropdown.",
      jscode: `import { Dropdown, Button } from "sud-ui";
import { AngleDown } from "sud-icons";

const items = [
  {
    key: "menu1",
    label: "Menu 1",
    onClick: () => console.log("Menu 1 clicked")
  },
  {
    key: "menu2",
    label: "Menu 2",
    onClick: () => console.log("Menu 2 clicked")
  }
];

export default function Example() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Dropdown items={items} colorType="default">
        <Button icon={<AngleDown size={16} />} iconPosition="right">
          Default
        </Button>
      </Dropdown>
      <Dropdown items={items} colorType="primary">
        <Button icon={<AngleDown size={16} />} iconPosition="right" colorType="primary">
          Primary
        </Button>
      </Dropdown>
    </div>
  );
}`,
      tscode: `import { Dropdown, Button } from "sud-ui";
import { AngleDown } from "sud-icons";

interface MenuItem {
  key: string;
  label: string;
  onClick: () => void;
}

const items: MenuItem[] = [
  {
    key: "menu1",
    label: "Menu 1",
    onClick: () => console.log("Menu 1 clicked")
  },
  {
    key: "menu2",
    label: "Menu 2",
    onClick: () => console.log("Menu 2 clicked")
  }
];

export default function Example() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Dropdown items={items} colorType="default">
        <Button icon={<AngleDown size={16} />} iconPosition="right">
          Default
        </Button>
      </Dropdown>
      <Dropdown items={items} colorType="primary">
        <Button icon={<AngleDown size={16} />} iconPosition="right" colorType="primary">
          Primary
        </Button>
      </Dropdown>
    </div>
  );
}`
    },
    {
      title: "Placement",
      render: (
        <div style={{ display: "flex", gap: "8px" }}>
          {placementItems.map((item) => (
            <Dropdown
              key={item.placement}
              items={basicItems}
              popupPlacement={item.placement}
            >
              <Button icon={item.icon} iconPosition="right">
                {item.placement}
              </Button>
            </Dropdown>
          ))}
        </div>
      ),
      description:
        lang === "ko"
          ? "popupPlacement prop으로 드롭다운 메뉴의 위치를 지정할 수 있습니다."
          : "You can specify the position of the dropdown menu using the popupPlacement prop.",
      jscode: `import { Dropdown, Button } from "sud-ui";
import { AngleDown, AngleUp, AngleLeft, AngleRight } from "sud-icons";

const items = [
  {
    key: "menu1",
    label: "Menu 1",
    onClick: () => console.log("Menu 1 clicked")
  },
  {
    key: "menu2",
    label: "Menu 2",
    onClick: () => console.log("Menu 2 clicked")
  }
];

const placementItems = [
  {
    placement: "top",
    icon: <AngleUp size={16} />
  },
  {
    placement: "bottom",
    icon: <AngleDown size={16} />
  },
  {
    placement: "left",
    icon: <AngleLeft size={16} />
  },
  {
    placement: "right",
    icon: <AngleRight size={16} />
  }
];

export default function Example() {
  return (
    <div style={{ display: "flex", gap: "8px" }}>
      {placementItems.map((item) => (
        <Dropdown
          key={item.placement}
          items={items}
          popupPlacement={item.placement}
        >
          <Button icon={item.icon} iconPosition="right">
            {item.placement}
          </Button>
        </Dropdown>
      ))}
    </div>
  );
}`,
      tscode: `import { Dropdown, Button } from "sud-ui";
import { AngleDown, AngleUp, AngleLeft, AngleRight } from "sud-icons";

interface MenuItem {
  key: string;
  label: string;
  onClick: () => void;
}

const items: MenuItem[] = [
  {
    key: "menu1",
    label: "Menu 1",
    onClick: () => console.log("Menu 1 clicked")
  },
  {
    key: "menu2",
    label: "Menu 2",
    onClick: () => console.log("Menu 2 clicked")
  }
];

interface PlacementItem {
  placement: "top" | "bottom" | "left" | "right";
  icon: React.ReactNode;
}

const placementItems: PlacementItem[] = [
  {
    placement: "top",
    icon: <AngleUp size={16} />
  },
  {
    placement: "bottom",
    icon: <AngleDown size={16} />
  },
  {
    placement: "left",
    icon: <AngleLeft size={16} />
  },
  {
    placement: "right",
    icon: <AngleRight size={16} />
  }
];

export default function Example() {
  return (
    <div style={{ display: "flex", gap: "8px" }}>
      {placementItems.map((item) => (
        <Dropdown
          key={item.placement}
          items={items}
          popupPlacement={item.placement}
        >
          <Button icon={item.icon} iconPosition="right">
            {item.placement}
          </Button>
        </Dropdown>
      ))}
    </div>
  );
}`
    }
  ];

  const howToUseTableData = [
    {
      key: "children",
      name: "children*",
      description:
        lang === "ko"
          ? "드롭다운을 트리거하는 요소 (PopupBase)"
          : "Element that triggers the dropdown (PopupBase)",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "title",
      name: "title",
      description:
        lang === "ko"
          ? "드롭다운 메뉴의 제목 (PopupBase)"
          : "Title of the dropdown menu (PopupBase)",
      type: "string",
      default: "-"
    },
    {
      key: "trigger",
      name: "trigger",
      description:
        lang === "ko"
          ? "드롭다운을 여는 방식 (PopupBase)"
          : "How to open the dropdown (PopupBase)",
      type: <>{tagRender(["hover", "click", "contextMenu"])}</>,
      default: <Tag>hover</Tag>
    },
    {
      key: "open",
      name: "open",
      description:
        lang === "ko"
          ? "드롭다운의 열림 상태 (PopupBase, 제어용)"
          : "Open state of the dropdown (PopupBase, controlled)",
      type: "boolean",
      default: "-"
    },
    {
      key: "defaultOpen",
      name: "defaultOpen",
      description:
        lang === "ko"
          ? "드롭다운의 기본 열림 상태 (PopupBase)"
          : "Default open state of the dropdown (PopupBase)",
      type: "boolean",
      default: "false"
    },
    {
      key: "onOpenChange",
      name: "onOpenChange",
      description:
        lang === "ko"
          ? "드롭다운 열림 상태 변경 시 호출되는 콜백 (PopupBase)"
          : "Callback called when dropdown open state changes (PopupBase)",
      type: "(open: boolean) => void",
      default: "-"
    },
    {
      key: "closeOnClick",
      name: "closeOnClick",
      description:
        lang === "ko"
          ? "메뉴 항목 클릭 시 드롭다운 닫기 여부 (PopupBase)"
          : "Whether to close dropdown when menu item is clicked (PopupBase)",
      type: "boolean",
      default: "false"
    },
    {
      key: "disabled",
      name: "disabled",
      description:
        lang === "ko"
          ? "드롭다운 비활성화 여부 (PopupBase)"
          : "Whether to disable the dropdown (PopupBase)",
      type: "boolean",
      default: "false"
    },
    {
      key: "items",
      name: "items",
      description:
        lang === "ko"
          ? "드롭다운 메뉴 항목 배열 (Menu)"
          : "Array of dropdown menu items (Menu)",
      type: "Array<MenuItem>",
      default: "[]"
    },
    {
      key: "expandType",
      name: "expandType",
      description:
        lang === "ko" ? "메뉴 확장 방식 (Menu)" : "Menu expansion type (Menu)",
      type: <>{tagRender(["popover", "accordion"])}</>,
      default: <Tag>popover</Tag>
    },
    {
      key: "popupPlacement",
      name: "popupPlacement",
      description:
        lang === "ko"
          ? "드롭다운 팝업의 위치 (PopupBase)"
          : "Position of the dropdown popup (PopupBase)",
      type: <>{tagRender(["top", "bottom", "right", "left"])}</>,
      default: <Tag>bottom</Tag>
    },
    {
      key: "placement",
      name: "placement",
      description:
        lang === "ko"
          ? "메뉴의 위치 배열 (Menu)"
          : "Array of menu positions (Menu)",
      type: (
        <>
          [{tagRender(["top", "bottom", "right", "left"])},{" "}
          {tagRender(["top", "bottom", "right", "left"])}]
        </>
      ),
      default: (
        <>
          [<Tag>right</Tag>, <Tag>right</Tag>]
        </>
      )
    },
    {
      key: "colorType",
      name: "colorType",
      description:
        lang === "ko"
          ? "색상 타입 (PopupBase, Menu)"
          : "Color type (PopupBase, Menu)",
      type: <>{defaultColorTypeTags}</>,
      default: <Tag>default</Tag>
    },
    {
      key: "background",
      name: "background",
      description:
        lang === "ko"
          ? "배경색 (PopupBase)(palette값 또는 HEX code)"
          : "Background color (PopupBase)(palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "color",
      name: "color",
      description:
        lang === "ko"
          ? "텍스트 색상 (PopupBase)(palette값 또는 HEX code)"
          : "Text color (PopupBase)(palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "border",
      name: "border",
      description:
        lang === "ko"
          ? "테두리 표시 여부 (PopupBase)"
          : "Whether to show border (PopupBase)",
      type: "boolean",
      default: "true"
    },
    {
      key: "borderColor",
      name: "borderColor",
      description:
        lang === "ko"
          ? "테두리 색상 (PopupBase)(palette값 또는 HEX code)"
          : "Border color (PopupBase)(palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "borderType",
      name: "borderType",
      description:
        lang === "ko"
          ? "테두리 스타일 (PopupBase)"
          : "Border style (PopupBase)",
      type: <>{borderTypeTags}</>,
      default: <Tag>solid</Tag>
    },
    {
      key: "borderWeight",
      name: "borderWeight",
      description:
        lang === "ko" ? "테두리 두께 (PopupBase)" : "Border weight (PopupBase)",
      type: "number",
      default: "1"
    },
    {
      key: "shape",
      name: "shape",
      description:
        lang === "ko" ? "모서리 형태 (PopupBase)" : "Corner shape (PopupBase)",
      type: <>{shapeTypeTags}</>,
      default: <Tag>rounded</Tag>
    },
    {
      key: "shadow",
      name: "shadow",
      description:
        lang === "ko" ? "그림자 크기 (PopupBase)" : "Shadow size (PopupBase)",
      type: <>{shadowTypeTags}</>,
      default: <Tag>sm</Tag>
    },
    {
      key: "className",
      name: "className",
      description:
        lang === "ko"
          ? "추가 클래스명 (PopupBase)"
          : "Additional class name (PopupBase)",
      type: "string",
      default: "-"
    },
    {
      key: "style",
      name: "style",
      description:
        lang === "ko"
          ? "추가 스타일 (PopupBase)"
          : "Additional style (PopupBase)",
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
