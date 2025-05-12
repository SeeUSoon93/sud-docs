"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Breadcrumb, Dropdown, Typography } from "sud-ui";
import { AngleDown, HomeOutline, TriangleRight } from "sud-icons";
export default function BreadcrumbPage() {
  const { isMobile } = useMobile();

  const name = "Breadcrumb";
  const description = (
    <>
      계층구조 내에서 현재 위치를 표시합니다. 또한 계층 구조에서 상위 단계로
      이동할 수 있습니다.
    </>
  );

  const IMPORT_COMMAND = "import { Breadcrumb } from 'sud-ui';";

  const whenToUse = [
    "계층 구조가 두 개 이상인 경우.",
    "사용자에게 현재 위치를 표시하고 싶을 때.",
    "상위 단계로 이동할 수 있는 버튼을 제공할 때."
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
      title: "기본 사용",
      render: (
        <>
          <Breadcrumb items={items} />
        </>
      ),
      description: "기본적인 사용 방법입니다.",
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
      title: "Icon 사용",
      render: (
        <>
          <Breadcrumb items={itemsWithIcon} />
        </>
      ),
      description: "Menu에 Icon을 사용할 수 있습니다.",
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
      title: "Separator 변형",
      render: (
        <>
          <Breadcrumb items={items} separator="/" />
        </>
      ),
      description: "Separator를 변형하여 사용할 수 있습니다.",
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
      title: "Separator 변형-ICON",
      render: (
        <>
          <Breadcrumb
            items={itemsWithIcon}
            separator={<TriangleRight size={16} />}
          />
        </>
      ),
      description: "Separator를 변형하여 사용할 수 있습니다.",
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
      title: "Dropdown 사용",
      render: (
        <>
          <Breadcrumb items={itemWithDropdown} />
        </>
      ),
      description: "Dropdown을 사용하여 하위 메뉴를 표시할 수 있습니다.",
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
      title: "커스텀 스타일",
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
        "linkStyle, separatorStyle, itemStyle을 통해 각 요소의 스타일을 커스텀할 수 있습니다.",
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
  return (
    <Frame
      component={{ name, description, IMPORT_COMMAND, whenToUse, examples }}
      grid={true}
      isMobile={isMobile}
    />
  );
}
