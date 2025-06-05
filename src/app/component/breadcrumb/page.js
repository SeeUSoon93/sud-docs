"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Breadcrumb, Dropdown, Tag, Typography } from "sud-ui";
import { AngleDown, HomeOutline, TriangleRight } from "sud-icons";
import { useLang } from "../../_lib/context/langContext";
import { fontSizeTypeTags } from "../../_lib/components/common/defaultType";

export default function BreadcrumbPage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();

  const name = "Breadcrumb";
  const description = (
    <>
      {lang === "ko" ? (
        <>
          계층구조 내에서 현재 위치를 표시합니다. 또한 계층 구조에서 상위 단계로
          이동할 수 있습니다.
        </>
      ) : (
        <>
          Displays the current location within a hierarchical structure. It also
          allows navigation to higher levels in the hierarchy.
        </>
      )}
    </>
  );

  const IMPORT_COMMAND = "import { Breadcrumb } from 'sud-ui';";

  const whenToUse =
    lang === "ko"
      ? [
          "계층 구조가 두 개 이상인 경우.",
          "사용자에게 현재 위치를 표시하고 싶을 때.",
          "상위 단계로 이동할 수 있는 버튼을 제공할 때."
        ]
      : [
          "When there are two or more levels in the hierarchy.",
          "When you want to show users their current location.",
          "When you need to provide navigation to higher levels."
        ];

  const items = [
    { label: "Home", href: "/" },
    { label: "Component", href: "/component" },
    { label: "Breadcrumb" }
  ];

  const itemsWithIcon = [
    { label: <HomeOutline />, href: "/" },
    { label: "Component", href: "/component" },
    { label: "Breadcrumb" }
  ];

  const itemWithDropdown = [
    { label: "Home", href: "/" },
    { label: "Component", href: "/component" },
    {
      label: (
        <Dropdown
          items={[
            {
              key: "breadcrumb",
              label: "Breadcrumb",
              onClick: () => (window.location.href = "/component/breadcrumb")
            },
            {
              key: "dropdown",
              label: "Dropdown",
              onClick: () => (window.location.href = "/component/dropdown")
            }
          ]}
        >
          <Typography className="flex item-cen gap-5" as="div" pretendard="SB">
            Select
            <AngleDown size={16} />
          </Typography>
        </Dropdown>
      )
    }
  ];

  const examples = [
    {
      title: "Basic Usage",
      render: (
        <>
          <Breadcrumb items={items} />
        </>
      ),
      description:
        lang === "ko" ? "기본적인 사용 방법입니다." : "Basic usage example.",
      jscode: `import React from 'react';
import { Breadcrumb } from 'sud-ui';

const BasicBreadcrumb = () => {
  const items = [
    { label: "Home", href: "/" },
    { label: "Component", href: "/component" },
    { label: "Breadcrumb" }
  ];

  return <Breadcrumb items={items} />;
};

export default BasicBreadcrumb;`,
      tscode: `import React from 'react';
import { Breadcrumb } from 'sud-ui';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const BasicBreadcrumb: React.FC = () => {
  const items: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Component", href: "/component" },
    { label: "Breadcrumb" }
  ];

  return <Breadcrumb items={items} />;
};

export default BasicBreadcrumb;`
    },
    {
      title: "With Icon",
      render: (
        <>
          <Breadcrumb items={itemsWithIcon} />
        </>
      ),
      description:
        lang === "ko"
          ? "Menu에 Icon을 사용할 수 있습니다."
          : "You can use icons in the menu.",
      jscode: `import React from 'react';
import { Breadcrumb } from 'sud-ui';
import { HomeOutline } from 'sud-icons';

const IconBreadcrumb = () => {
  const items = [
    { label: <HomeOutline />, href: "/" },
    { label: "Component", href: "/component" },
    { label: "Breadcrumb" }
  ];

  return <Breadcrumb items={items} />;
};

export default IconBreadcrumb;`,
      tscode: `import React from 'react';
import { Breadcrumb } from 'sud-ui';
import { HomeOutline } from 'sud-icons';

interface BreadcrumbItem {
  label: string | React.ReactNode;
  href?: string;
}

const IconBreadcrumb: React.FC = () => {
  const items: BreadcrumbItem[] = [
    { label: <HomeOutline />, href: "/" },
    { label: "Component", href: "/component" },
    { label: "Breadcrumb" }
  ];

  return <Breadcrumb items={items} />;
};

export default IconBreadcrumb;`
    },
    {
      title: "Custom Separator",
      render: (
        <>
          <Breadcrumb items={items} separator="/" />
        </>
      ),
      description:
        lang === "ko"
          ? "Separator를 변형하여 사용할 수 있습니다."
          : "You can customize the separator.",
      jscode: `import React from 'react';
import { Breadcrumb } from 'sud-ui';

const CustomSeparatorBreadcrumb = () => {
  const items = [
    { label: "Home", href: "/" },
    { label: "Component", href: "/component" },
    { label: "Breadcrumb" }
  ];

  return <Breadcrumb items={items} separator="/" />;
};

export default CustomSeparatorBreadcrumb;`,
      tscode: `import React from 'react';
import { Breadcrumb } from 'sud-ui';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const CustomSeparatorBreadcrumb: React.FC = () => {
  const items: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Component", href: "/component" },
    { label: "Breadcrumb" }
  ];

  return <Breadcrumb items={items} separator="/" />;
};

export default CustomSeparatorBreadcrumb;`
    },
    {
      title: "Icon Separator",
      render: (
        <>
          <Breadcrumb
            items={itemsWithIcon}
            separator={<TriangleRight size={16} />}
          />
        </>
      ),
      description:
        lang === "ko"
          ? "Separator를 변형하여 사용할 수 있습니다."
          : "You can use an icon as a separator.",
      jscode: `import React from 'react';
import { Breadcrumb } from 'sud-ui';
import { HomeOutline, TriangleRight } from 'sud-icons';

const IconSeparatorBreadcrumb = () => {
  const items = [
    { label: <HomeOutline />, href: "/" },
    { label: "Component", href: "/component" },
    { label: "Breadcrumb" }
  ];

  return (
    <Breadcrumb
      items={items}
      separator={<TriangleRight size={16} />}
    />
  );
};

export default IconSeparatorBreadcrumb;`,
      tscode: `import React from 'react';
import { Breadcrumb } from 'sud-ui';
import { HomeOutline, TriangleRight } from 'sud-icons';

interface BreadcrumbItem {
  label: string | React.ReactNode;
  href?: string;
}

const IconSeparatorBreadcrumb: React.FC = () => {
  const items: BreadcrumbItem[] = [
    { label: <HomeOutline />, href: "/" },
    { label: "Component", href: "/component" },
    { label: "Breadcrumb" }
  ];

  return (
    <Breadcrumb
      items={items}
      separator={<TriangleRight size={16} />}
    />
  );
};

export default IconSeparatorBreadcrumb;`
    },
    {
      title: "With Dropdown",
      render: (
        <>
          <Breadcrumb items={itemWithDropdown} />
        </>
      ),
      description:
        lang === "ko"
          ? "Dropdown을 사용하여 하위 메뉴를 표시할 수 있습니다."
          : "You can display sub-menus using a dropdown.",
      jscode: `import React from 'react';
import { Breadcrumb, Dropdown, Typography } from 'sud-ui';
import { AngleDown } from 'sud-icons';

const DropdownBreadcrumb = () => {
  const items = [
    { label: "Home", href: "/" },
    { label: "Component", href: "/component" },
    {
      label: (
        <Dropdown
          items={[
            {
              key: "breadcrumb",
              label: "Breadcrumb",
              onClick: () => (window.location.href = "/component/breadcrumb")
            },
            {
              key: "dropdown",
              label: "Dropdown",
              onClick: () => (window.location.href = "/component/dropdown")
            }
          ]}
        >
          <Typography className="flex item-cen gap-5" as="div" pretendard="SB">
            Select
            <AngleDown size={16} />
          </Typography>
        </Dropdown>
      )
    }
  ];

  return <Breadcrumb items={items} />;
};

export default DropdownBreadcrumb;`,
      tscode: `import React from 'react';
import { Breadcrumb, Dropdown, Typography } from 'sud-ui';
import { AngleDown } from 'sud-icons';

interface BreadcrumbItem {
  label: string | React.ReactNode;
  href?: string;
}

interface DropdownItem {
  key: string;
  label: string;
  onClick: () => void;
}

const DropdownBreadcrumb: React.FC = () => {
  const items: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Component", href: "/component" },
    {
      label: (
        <Dropdown
          items={[
            {
              key: "breadcrumb",
              label: "Breadcrumb",
              onClick: () => (window.location.href = "/component/breadcrumb")
            },
            {
              key: "dropdown",
              label: "Dropdown",
              onClick: () => (window.location.href = "/component/dropdown")
            }
          ]}
        >
          <Typography className="flex item-cen gap-5" as="div" pretendard="SB">
            Select
            <AngleDown size={16} />
          </Typography>
        </Dropdown>
      )
    }
  ];

  return <Breadcrumb items={items} />;
};

export default DropdownBreadcrumb;`
    },
    {
      title: "Custom Style",
      render: (
        <>
          <Breadcrumb
            items={items}
            linkStyle={{ color: "#1677ff", fontWeight: "bold" }}
            separatorStyle={{ color: "#ff4d4f" }}
            itemStyle={{
              background: "#f5f5f5",
              borderRadius: "4px",
              padding: "2px 6px",
              margin: "0 4px"
            }}
          />
        </>
      ),
      description:
        lang === "ko"
          ? "linkStyle, separatorStyle, itemStyle을 통해 각 요소의 스타일을 커스텀할 수 있습니다."
          : "You can customize the style of each element using linkStyle, separatorStyle, and itemStyle.",
      jscode: `import React from 'react';
import { Breadcrumb } from 'sud-ui';

const CustomStyleBreadcrumb = () => {
  const items = [
    { label: "Home", href: "/" },
    { label: "Component", href: "/component" },
    { label: "Breadcrumb" }
  ];

  return (
    <Breadcrumb
      items={items}
      linkStyle={{ color: "#1677ff", fontWeight: "bold" }}
      separatorStyle={{ color: "#ff4d4f" }}
      itemStyle={{ 
        background: "#f5f5f5", 
        borderRadius: "4px", 
        padding: "2px 6px",
        margin: "0 4px"
      }}
    />
  );
};

export default CustomStyleBreadcrumb;`,
      tscode: `import React from 'react';
import { Breadcrumb } from 'sud-ui';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface CustomStyles {
  color?: string;
  fontWeight?: string | number;
  background?: string;
  borderRadius?: string;
  padding?: string;
  margin?: string;
}

const CustomStyleBreadcrumb: React.FC = () => {
  const items: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Component", href: "/component" },
    { label: "Breadcrumb" }
  ];

  return (
    <Breadcrumb
      items={items}
      linkStyle={{ color: "#1677ff", fontWeight: "bold" }}
      separatorStyle={{ color: "#ff4d4f" }}
      itemStyle={{ 
        background: "#f5f5f5", 
        borderRadius: "4px", 
        padding: "2px 6px",
        margin: "0 4px"
      }}
    />
  );
};

export default CustomStyleBreadcrumb;`
    }
  ];

  const howToUseTableData = [
    {
      key: "items",
      name: "items",
      description:
        lang === "ko"
          ? "브레드크럼 항목 목록. 각 항목은 { label: ReactNode, href?: string } 형태로 구성됩니다."
          : "List of breadcrumb items. Each item is structured as { label: ReactNode, href?: string }.",
      type: "BreadcrumbItem[]",
      default: "-"
    },
    {
      key: "separator",
      name: "separator",
      description:
        lang === "ko" ? "항목 사이의 구분자" : "Separator between items",
      type: "ReactNode",
      default: "'>'"
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
      description: lang === "ko" ? "컨테이너 스타일" : "Container style",
      type: "React.CSSProperties",
      default: "-"
    },
    {
      key: "separatorStyle",
      name: "separatorStyle",
      description: lang === "ko" ? "구분자 스타일" : "Separator style",
      type: "React.CSSProperties",
      default: "-"
    },
    {
      key: "linkStyle",
      name: "linkStyle",
      description: lang === "ko" ? "링크 스타일" : "Link style",
      type: "React.CSSProperties",
      default: "-"
    },
    {
      key: "itemStyle",
      name: "itemStyle",
      description: lang === "ko" ? "항목 스타일" : "Item style",
      type: "React.CSSProperties",
      default: "-"
    },
    {
      key: "listStyle",
      name: "listStyle",
      description: lang === "ko" ? "목록 스타일" : "List style",
      type: "React.CSSProperties",
      default: "-"
    },
    {
      key: "size",
      name: "size",
      description: lang === "ko" ? "텍스트 크기" : "Text size",
      type: <>{fontSizeTypeTags}</>,
      default: <Tag>base</Tag>
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
