"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Button, Drawer, Dropdown, Tag } from "sud-ui";
import { useState } from "react";
import { AngleDown, AngleLeft, AngleRight, AngleUp } from "sud-icons";

export default function DrawerPage() {
  const { isMobile } = useMobile();
  const [open, setOpen] = useState(false);

  const name = "Dropdown";
  const description = <>드롭다운 컴포넌트입니다.</>;

  const IMPORT_COMMAND = "import { Dropdown } from 'sud-ui';";

  const whenToUse = [
    "사용자가 선택할 수 있는 옵션 목록을 표시할 때",
    "공간을 효율적으로 사용하면서 여러 옵션을 제공해야 할 때",
    "메뉴, 필터, 정렬 등의 기능을 구현할 때",
    "폼에서 선택형 입력이 필요할 때"
  ];

  const basicItems = [
    {
      key: "menu1",
      label: "메뉴 1",
      onClick: () => console.log("메뉴 1 클릭")
    },
    {
      key: "menu2",
      label: "메뉴 2",
      onClick: () => console.log("메뉴 2 클릭")
    },
    {
      key: "menu3",
      label: "메뉴 3",
      onClick: () => console.log("메뉴 3 클릭")
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
      title: "기본 사용",
      render: (
        <div>
          <Dropdown items={basicItems}>
            <Button icon={<AngleDown size={16} />} iconPosition="right">
              Hover me!
            </Button>
          </Dropdown>
        </div>
      ),
      description:
        "기본적인 드롭다운 사용 방법입니다. hover 시 메뉴가 표시됩니다.",
      jscode: `import { Dropdown, Button } from "sud-ui";
import { AngleDown } from "sud-icons";

const items = [
  {
    key: "menu1",
    label: "메뉴 1",
    onClick: () => console.log("메뉴 1 클릭")
  },
  {
    key: "menu2",
    label: "메뉴 2",
    onClick: () => console.log("메뉴 2 클릭")
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
    label: "메뉴 1",
    onClick: () => console.log("메뉴 1 클릭")
  },
  {
    key: "menu2",
    label: "메뉴 2",
    onClick: () => console.log("메뉴 2 클릭")
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
      title: "Click 트리거",
      render: (
        <div>
          <Dropdown items={basicItems} trigger="click">
            <Button icon={<AngleDown size={16} />} iconPosition="right">
              Click me!
            </Button>
          </Dropdown>
        </div>
      ),
      description:
        "trigger prop으로 드롭다운을 여는 방식을 변경할 수 있습니다.",
      jscode: `import { Dropdown, Button } from "sud-ui";
import { AngleDown } from "sud-icons";

const items = [
  {
    key: "menu1",
    label: "메뉴 1",
    onClick: () => console.log("메뉴 1 클릭")
  },
  {
    key: "menu2",
    label: "메뉴 2",
    onClick: () => console.log("메뉴 2 클릭")
  }
];

export default function Example() {
  return (
    <Dropdown items={items} trigger="click">
      <Button icon={<AngleDown size={16} />} iconPosition="right">
        Click me!
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
    label: "메뉴 1",
    onClick: () => console.log("메뉴 1 클릭")
  },
  {
    key: "menu2",
    label: "메뉴 2",
    onClick: () => console.log("메뉴 2 클릭")
  }
];

export default function Example() {
  return (
    <Dropdown items={items} trigger="click">
      <Button icon={<AngleDown size={16} />} iconPosition="right">
        Click me!
      </Button>
    </Dropdown>
  );
}`
    },
    {
      title: "ContextMenu 트리거",
      render: (
        <div>
          <Dropdown items={basicItems} trigger="contextMenu">
            <Button icon={<AngleDown size={16} />} iconPosition="right">
              Right Click me!
            </Button>
          </Dropdown>
        </div>
      ),
      description: "우클릭으로 드롭다운을 열 수 있습니다.",
      jscode: `import { Dropdown, Button } from "sud-ui";
import { AngleDown } from "sud-icons";

const items = [
  {
    key: "menu1",
    label: "메뉴 1",
    onClick: () => console.log("메뉴 1 클릭")
  },
  {
    key: "menu2",
    label: "메뉴 2",
    onClick: () => console.log("메뉴 2 클릭")
  }
];

export default function Example() {
  return (
    <Dropdown items={items} trigger="contextMenu">
      <Button icon={<AngleDown size={16} />} iconPosition="right">
        Right Click me!
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
    label: "메뉴 1",
    onClick: () => console.log("메뉴 1 클릭")
  },
  {
    key: "menu2",
    label: "메뉴 2",
    onClick: () => console.log("메뉴 2 클릭")
  }
];

export default function Example() {
  return (
    <Dropdown items={items} trigger="contextMenu">
      <Button icon={<AngleDown size={16} />} iconPosition="right">
        Right Click me!
      </Button>
    </Dropdown>
  );
}`
    },

    {
      title: "색상 타입",
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
        "colorType prop으로 드롭다운의 색상 스타일을 변경할 수 있습니다.",
      jscode: `import { Dropdown, Button } from "sud-ui";
import { AngleDown } from "sud-icons";

const items = [
  {
    key: "menu1",
    label: "메뉴 1",
    onClick: () => console.log("메뉴 1 클릭")
  },
  {
    key: "menu2",
    label: "메뉴 2",
    onClick: () => console.log("메뉴 2 클릭")
  }
];

export default function Example() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Dropdown items={items} colorType="default">
        <Button icon={<AngleDown size={16} />} iconPosition="right" >
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
    label: "메뉴 1",
    onClick: () => console.log("메뉴 1 클릭")
  },
  {
    key: "menu2",
    label: "메뉴 2",
    onClick: () => console.log("메뉴 2 클릭")
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
        "popupPlacement prop으로 드롭다운 메뉴의 위치를 지정할 수 있습니다.",
      jscode: `import { Dropdown, Button } from "sud-ui";
import { AngleDown, AngleUp, AngleLeft, AngleRight } from "sud-icons";

const items = [
  {
    key: "menu1",
    label: "메뉴 1",
    onClick: () => console.log("메뉴 1 클릭")
  },
  {
    key: "menu2",
    label: "메뉴 2",
    onClick: () => console.log("메뉴 2 클릭")
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
    label: "메뉴 1",
    onClick: () => console.log("메뉴 1 클릭")
  },
  {
    key: "menu2",
    label: "메뉴 2",
    onClick: () => console.log("메뉴 2 클릭")
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
    <div style={{ display: 'flex', gap: '8px' }}>
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
      description: "드롭다운을 트리거하는 요소 (PopupBase)",
      type: "ReactNode",
      default: ""
    },
    {
      key: "title",
      name: "title",
      description: "드롭다운 메뉴의 제목 (PopupBase)",
      type: "string",
      default: ""
    },
    {
      key: "trigger",
      name: "trigger",
      description: "드롭다운을 여는 방식 (PopupBase)",
      type: (
        <>
          <Tag>hover</Tag> ｜ <Tag>click</Tag> ｜ <Tag>contextMenu</Tag>
        </>
      ),
      default: <Tag>hover</Tag>
    },
    {
      key: "open",
      name: "open",
      description: "드롭다운의 열림 상태 (PopupBase, 제어용)",
      type: "boolean",
      default: ""
    },
    {
      key: "defaultOpen",
      name: "defaultOpen",
      description: "드롭다운의 기본 열림 상태 (PopupBase)",
      type: "boolean",
      default: "false"
    },
    {
      key: "onOpenChange",
      name: "onOpenChange",
      description: "드롭다운 열림 상태 변경 시 호출되는 콜백 (PopupBase)",
      type: "(open: boolean) => void",
      default: ""
    },
    {
      key: "closeOnClick",
      name: "closeOnClick",
      description: "메뉴 항목 클릭 시 드롭다운 닫기 여부 (PopupBase)",
      type: "boolean",
      default: "false"
    },
    {
      key: "disabled",
      name: "disabled",
      description: "드롭다운 비활성화 여부 (PopupBase)",
      type: "boolean",
      default: "false"
    },
    {
      key: "items",
      name: "items",
      description: "드롭다운 메뉴 항목 배열 (Menu)",
      type: "Array<MenuItem>",
      default: "[]"
    },
    {
      key: "expandType",
      name: "expandType",
      description: "메뉴 확장 방식 (Menu)",
      type: (
        <>
          <Tag>popover</Tag> ｜ <Tag>dropdown</Tag>
        </>
      ),
      default: <Tag>popover</Tag>
    },
    {
      key: "popupPlacement",
      name: "popupPlacement",
      description: "드롭다운 팝업의 위치 (PopupBase)",
      type: (
        <>
          <Tag>top</Tag> ｜ <Tag>bottom</Tag> ｜ <Tag>right</Tag> ｜{" "}
          <Tag>left</Tag>
        </>
      ),
      default: <Tag>bottom</Tag>
    },
    {
      key: "placement",
      name: "placement",
      description: "메뉴의 위치 배열 (Menu)",
      type: (
        <>
          [<Tag>top</Tag> ｜ <Tag>bottom</Tag> ｜ <Tag>right</Tag> ｜{" "}
          <Tag>left</Tag>,<br /> <Tag>top</Tag> ｜ <Tag>bottom</Tag> ｜{" "}
          <Tag>right</Tag> ｜ <Tag>left</Tag>]
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
      description: "색상 타입 (PopupBase, Menu)",
      type: (
        <>
          <Tag>default</Tag> ｜ <Tag>primary</Tag> ｜ <Tag>secondary</Tag> ｜{" "}
          <Tag>success</Tag> ｜ <Tag>warning</Tag> ｜ <Tag>danger</Tag> ｜{" "}
          <Tag>info</Tag> ｜ <Tag>text</Tag>
        </>
      ),
      default: <Tag>default</Tag>
    },
    {
      key: "background",
      name: "background",
      description: "배경색 (PopupBase)",
      type: "string",
      default: ""
    },
    {
      key: "color",
      name: "color",
      description: "텍스트 색상 (PopupBase)",
      type: "string",
      default: ""
    },
    {
      key: "border",
      name: "border",
      description: "테두리 표시 여부 (PopupBase)",
      type: "boolean",
      default: "true"
    },
    {
      key: "borderColor",
      name: "borderColor",
      description: "테두리 색상 (PopupBase)",
      type: "string",
      default: ""
    },
    {
      key: "borderType",
      name: "borderType",
      description: "테두리 스타일 (PopupBase)",
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
      description: "테두리 두께 (PopupBase)",
      type: "number",
      default: "1"
    },
    {
      key: "shape",
      name: "shape",
      description: "모서리 형태 (PopupBase)",
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
      description: "그림자 크기 (PopupBase)",
      type: (
        <>
          <Tag>none</Tag> ｜ <Tag>sm</Tag> ｜ <Tag>md</Tag> ｜ <Tag>lg</Tag> ｜{" "}
          <Tag>xl</Tag>
        </>
      ),
      default: <Tag>sm</Tag>
    },
    {
      key: "className",
      name: "className",
      description: "추가 클래스명 (PopupBase)",
      type: "string",
      default: ""
    },
    {
      key: "style",
      name: "style",
      description: "추가 스타일 (PopupBase)",
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
