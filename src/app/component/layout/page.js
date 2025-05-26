"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { useLang } from "../../_lib/context/langContext";
import { Tag } from "sud-ui";
import * as sud from "sud-ui";
import { LogoSud } from "sud-icons";
import { useState } from "react";

export default function Layout() {
  const { isMobile } = useMobile();
  const { lang } = useLang();
  const name = "Layout";
  const description = (
    <>
      {lang === "ko" ? (
        <>
          웹 애플리케이션의 레이아웃을 구성하는 컴포넌트입니다. Header, Sider,
          Content, Footer 컴포넌트를 조합하여 다양한 레이아웃을 구성할 수
          있습니다.
          <br />
          <Tag>Layout</Tag> <Tag>Header</Tag> <Tag>Sider</Tag>{" "}
          <Tag>Content</Tag> <Tag>Footer</Tag> 컴포넌트와 함께 사용합니다.
          <br />
          <br />
          Layout 컴포넌트는 자동으로 화면 전체를 차지하며, 내부 컴포넌트들의
          크기에 따라 Content 영역이 자동으로 조절됩니다. Sider의 위치는
          siderPosition prop을 통해 조절할 수 있습니다.
        </>
      ) : (
        <>
          A component for structuring web application layouts. You can create
          various layouts by combining Header, Sider, Content, and Footer
          components.
          <br />
          Used together with <Tag>Layout</Tag> <Tag>Header</Tag>{" "}
          <Tag>Sider</Tag> <Tag>Content</Tag> <Tag>Footer</Tag> components.
          <br />
          <br />
          The Layout component automatically occupies the full screen, and the
          Content area adjusts automatically based on the size of internal
          components. The Sider position can be controlled through the
          siderPosition prop.
        </>
      )}
    </>
  );
  const IMPORT_COMMAND = `import { Layout, Header, Sider, Content, Footer } from "sud-ui";`;

  const cautions =
    lang === "ko"
      ? [
          "Header, Sider, Content, Footer 컴포넌트는 반드시 Layout 컴포넌트 내부에 위치해야 합니다.",
          "Layout 내부에 다른 Layout을 중첩하여 사용할 수 있습니다.",
          "Sider의 위치는 'above-header' 또는 'below-header'로 설정할 수 있습니다.",
          "각 컴포넌트의 크기는 자동으로 계산되며, Content 영역이 나머지 공간을 채웁니다."
        ]
      : [
          "Header, Sider, Content, and Footer components must be placed inside the Layout component.",
          "You can nest another Layout inside the Layout component.",
          "The Sider position can be set to either 'above-header' or 'below-header'.",
          "The size of each component is calculated automatically, and the Content area fills the remaining space."
        ];

  const examples = [
    {
      title: "Basic Layout",
      description:
        lang === "ko"
          ? "기본적인 레이아웃 구성입니다."
          : "Basic layout structure.",
      render: (
        <div
          className={`grid ${isMobile ? "col-1" : "col-2"} gap-20`}
          style={{ width: "100%", height: "70vh" }}
        >
          <sud.Layout>
            <sud.Header
              className="flex jus-cen item-cen"
              background="blue-4"
              color="white-10"
              border={false}
              height="20%"
            >
              Header
            </sud.Header>
            <sud.Sider
              className="flex jus-cen item-cen"
              width="30%"
              background="blue-5"
              color="white-10"
              border={false}
            >
              Sider
            </sud.Sider>
            <sud.Content
              className="flex jus-cen item-cen"
              background="blue-6"
              color="white-10"
            >
              content
            </sud.Content>
            <sud.Footer
              className="flex jus-cen item-cen"
              background="blue-4"
              color="white-10"
              border={false}
              height="20%"
            >
              Footer
            </sud.Footer>
          </sud.Layout>
          <sud.Layout siderPosition="above-header">
            <sud.Header
              className="flex jus-cen item-cen"
              background="blue-4"
              color="white-10"
              border={false}
              height="20%"
            >
              Header
            </sud.Header>
            <sud.Sider
              className="flex jus-cen item-cen"
              width="30%"
              background="blue-5"
              color="white-10"
              border={false}
            >
              Sider
            </sud.Sider>
            <sud.Content
              className="flex jus-cen item-cen"
              background="blue-6"
              color="white-10"
            >
              content
            </sud.Content>
            <sud.Footer
              className="flex jus-cen item-cen"
              background="blue-4"
              color="white-10"
              border={false}
              height="20%"
            >
              Footer
            </sud.Footer>
          </sud.Layout>
          <sud.Layout>
            <sud.Sider
              className="flex jus-cen item-cen"
              width="30%"
              background="blue-5"
              color="white-10"
              border={false}
            >
              Sider
            </sud.Sider>
            <sud.Content
              className="flex jus-cen item-cen"
              background="blue-6"
              color="white-10"
            >
              content
            </sud.Content>
          </sud.Layout>
          <sud.Layout>
            <sud.Header
              className="flex jus-cen item-cen"
              background="blue-4"
              color="white-10"
              border={false}
              height="20%"
            >
              Header
            </sud.Header>
            <sud.Content
              className="flex jus-cen item-cen"
              background="blue-6"
              color="white-10"
            >
              content
            </sud.Content>
            <sud.Footer
              className="flex jus-cen item-cen"
              background="blue-4"
              color="white-10"
              border={false}
              height="20%"
            >
              Footer
            </sud.Footer>
          </sud.Layout>
        </div>
      )
    },
    {
      title: "Header-Content-Footer",
      description:
        lang === "ko"
          ? "Header, Content, Footer 컴포넌트를 사용한 레이아웃입니다."
          : "Layout using Header, Content, and Footer components.",
      jscode: `import React from 'react';
import { Layout, Header, Content, Footer, Avatar, Typography } from 'sud-ui';
import { LogoSud } from 'sud-ui';

const BasicLayout = () => {
  return (
    <Layout>
      <Header
        className="flex jus-cen item-cen"
        colorType="sub"
        shadow="sm"
        border={false}
      >
        <LogoSud /> Soon UI Design
      </Header>
      <Content className="flex flex-col jus-cen item-cen gap-10" background="sky-1">
        <Avatar />
        <Typography as="span" size="base" pretendard="B">
          Hello World!
        </Typography>
      </Content>
      <Footer
        className="flex jus-cen item-cen"
        colorType="sub"
        border={false}
        height="40px"
      >
        All rights reserved &copy; 2025 SeeUSoon93
      </Footer>
    </Layout>
  );
};

export default BasicLayout;`,
      tscode: `import React from 'react';
import { Layout, Header, Content, Footer, Avatar, Typography } from 'sud-ui';
import { LogoSud } from 'sud-ui';

const BasicLayout: React.FC = () => {
  return (
    <Layout>
      <Header
        className="flex jus-cen item-cen"
        colorType="sub"
        shadow="sm"
        border={false}
      >
        <LogoSud /> Soon UI Design
      </Header>
      <Content className="flex flex-col jus-cen item-cen gap-10" background="sky-1">
        <Avatar />
        <Typography as="span" size="base" pretendard="B">
          Hello World!
        </Typography>
      </Content>
      <Footer
        className="flex jus-cen item-cen"
        colorType="sub"
        border={false}
        height="40px"
      >
        All rights reserved &copy; 2025 SeeUSoon93
      </Footer>
    </Layout>
  );
};

export default BasicLayout;`,
      render: (
        <div style={{ width: "100%", height: "50vh" }}>
          <sud.Layout siderPosition="above-header">
            <sud.Header
              className="flex jus-cen item-cen"
              colorType="sub"
              shadow="sm"
              border={false}
            >
              <LogoSud /> Soon UI Design
            </sud.Header>
            <sud.Content
              className="flex flex-col jus-cen item-cen gap-10"
              background="sky-1"
            >
              <sud.Avatar />
              <sud.Typography as="span" size="base" pretendard="B">
                Hello World!
              </sud.Typography>
            </sud.Content>
            <sud.Footer
              className="flex jus-cen item-cen ta-cen"
              colorType="sub"
              border={false}
              height="40px"
            >
              All rights reserved &copy; 2025 SeeUSoon93
            </sud.Footer>
          </sud.Layout>
        </div>
      )
    },
    {
      title: "Above-Header-Sider-Content",
      description:
        lang === "ko"
          ? "Above-Header-Sider-Content 레이아웃입니다."
          : "Above-Header-Sider-Content layout.",
      render: (
        <div style={{ width: "100%", height: "50vh" }}>
          {(() => {
            const [selectedMenu, setSelectedMenu] = useState("");

            const menuItems = [
              {
                key: "dashboard",
                label: "Dashboard",
                children: [
                  { key: "overview", label: "Overview" },
                  { key: "analytics", label: "Analytics" }
                ]
              },
              {
                key: "management",
                label: "Management",
                children: [
                  { key: "users", label: "Users" },
                  { key: "settings", label: "Settings" }
                ]
              }
            ];

            const findLabel = (items, targetKey) => {
              for (const item of items) {
                if (item.key === targetKey) return item.label;
                if (item.children) {
                  const childLabel = findLabel(item.children, targetKey);
                  if (childLabel) return childLabel;
                }
              }
              return null;
            };

            const handleMenuSelect = (key) => {
              const label = findLabel(menuItems, key);
              setSelectedMenu(label || "");
            };

            return (
              <sud.Layout siderPosition="above-header">
                <sud.Header
                  className="flex jus-cen item-cen"
                  colorType="sub"
                  shadow="sm"
                  border={false}
                >
                  <LogoSud /> Soon UI Design
                </sud.Header>
                <sud.Sider
                  className="flex pd-l-5 pd-r-10"
                  width="object-fit"
                  border={false}
                  colorType="sub"
                  shadow="sm"
                >
                  <sud.Menu
                    items={menuItems}
                    expandType="accordion"
                    colorType="sub"
                    onSelect={handleMenuSelect}
                  />
                </sud.Sider>
                <sud.Content
                  className="flex jus-cen item-cen"
                  background="sky-1"
                >
                  {selectedMenu
                    ? `${selectedMenu} selected`
                    : "Please select a menu"}
                </sud.Content>
              </sud.Layout>
            );
          })()}
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Layout, Header, Sider, Content, Menu } from 'sud-ui';
import { LogoSud } from 'sud-icons';

const AboveHeaderSiderContent = () => {
  const [selectedMenu, setSelectedMenu] = useState("");

  const menuItems = [
    {
      key: "dashboard",
      label: "Dashboard",
      children: [
        { key: "overview", label: "Overview" },
        { key: "analytics", label: "Analytics" }
      ]
    },
    {
      key: "management",
      label: "Management",
      children: [
        { key: "users", label: "Users" },
        { key: "settings", label: "Settings" }
      ]
    }
  ];

  const findLabel = (items, targetKey) => {
    for (const item of items) {
      if (item.key === targetKey) return item.label;
      if (item.children) {
        const childLabel = findLabel(item.children, targetKey);
        if (childLabel) return childLabel;
      }
    }
    return null;
  };

  const handleMenuSelect = (key) => {
    const label = findLabel(menuItems, key);
    setSelectedMenu(label || "");
  };

  return (
    <Layout siderPosition="above-header">
      <Header
        className="flex jus-cen item-cen"
        colorType="sub"
        shadow="sm"
        border={false}
      >
        <LogoSud /> Soon UI Design
      </Header>
      <Sider
        className="flex pd-l-5 pd-r-10"
        width="object-fit"
        border={false}
        colorType="sub"
        shadow="sm"
      >
        <Menu
          items={menuItems}
          expandType="accordion"
          colorType="sub"
          onSelect={handleMenuSelect}
        />
      </Sider>
      <Content
        className="flex jus-cen item-cen"
        background="sky-1"
      >
        {selectedMenu ? \`\${selectedMenu} selected\` : "Please select a menu"}
      </Content>
    </Layout>
  );
};

export default AboveHeaderSiderContent;`,
      tscode: `import React, { useState } from 'react';
import { Layout, Header, Sider, Content, Menu } from 'sud-ui';
import { LogoSud } from 'sud-icons';

interface MenuItem {
  key: string;
  label: string;
  children?: MenuItem[];
}

const AboveHeaderSiderContent: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("");

  const menuItems: MenuItem[] = [
    {
      key: "dashboard",
      label: "Dashboard",
      children: [
        { key: "overview", label: "Overview" },
        { key: "analytics", label: "Analytics" }
      ]
    },
    {
      key: "management",
      label: "Management",
      children: [
        { key: "users", label: "Users" },
        { key: "settings", label: "Settings" }
      ]
    }
  ];

  const findLabel = (items: MenuItem[], targetKey: string): string | null => {
    for (const item of items) {
      if (item.key === targetKey) return item.label;
      if (item.children) {
        const childLabel = findLabel(item.children, targetKey);
        if (childLabel) return childLabel;
      }
    }
    return null;
  };

  const handleMenuSelect = (key: string): void => {
    const label = findLabel(menuItems, key);
    setSelectedMenu(label || "");
  };

  return (
    <Layout siderPosition="above-header">
      <Header
        className="flex jus-cen item-cen"
        colorType="sub"
        shadow="sm"
        border={false}
      >
        <LogoSud /> Soon UI Design
      </Header>
      <Sider
        className="flex pd-l-5 pd-r-10"
        width="object-fit"
        border={false}
        colorType="sub"
        shadow="sm"
      >
        <Menu
          items={menuItems}
          expandType="accordion"
          colorType="sub"
          onSelect={handleMenuSelect}
        />
      </Sider>
      <Content
        className="flex jus-cen item-cen"
        background="sky-1"
      >
        {selectedMenu ? \`\${selectedMenu} selected\` : "Please select a menu"}
      </Content>
    </Layout>
  );
};

export default AboveHeaderSiderContent;`
    },
    {
      title: "Nested-Layout",
      description:
        lang === "ko"
          ? "Layout 컴포넌트를 Content 안에 중첩하여 사용하는 예제입니다."
          : "Example of nesting a Layout component inside Content.",
      render: (
        <div style={{ width: "100%", height: "50vh" }}>
          <sud.Layout>
            <sud.Header
              className="flex jus-cen item-cen"
              colorType="sub"
              shadow="sm"
              border={false}
            >
              <LogoSud /> Soon UI Design
            </sud.Header>
            <sud.Sider
              className="flex pd-l-5 pd-r-10"
              width="270"
              colorType="sub"
              shadow="sm"
              border={false}
            >
              <sud.Menu
                items={[
                  { key: "dashboard", label: "Dashboard" },
                  { key: "users", label: "Users" },
                  { key: "settings", label: "Settings" }
                ]}
                colorType="sub"
              />
            </sud.Sider>
            <sud.Content>
              <sud.Layout>
                <sud.Header
                  className="flex jus-cen item-cen"
                  colorType="primary"
                  shadow="sm"
                  border={false}
                  height={60}
                >
                  Sub Header
                </sud.Header>
                <sud.Content
                  className="flex jus-cen item-cen"
                  background="sky-1"
                >
                  Nested Layout Content
                </sud.Content>
              </sud.Layout>
            </sud.Content>
          </sud.Layout>
        </div>
      ),
      jscode: `import React from 'react';
import { Layout, Header, Sider, Content, Menu } from 'sud-ui';
import { LogoSud } from 'sud-icons';

const NestedLayout = () => {
  return (
    <Layout>
      <Header
        className="flex jus-cen item-cen"
        colorType="sub"
        shadow="sm"
        border={false}
      >
        <LogoSud /> Soon UI Design
      </Header>
      <Sider
        className="flex pd-l-5 pd-r-10"
        width="270"
        colorType="sub"
        shadow="sm"
        border={false}
      >
        <Menu
          items={[
            { key: "dashboard", label: "Dashboard" },
            { key: "users", label: "Users" },
            { key: "settings", label: "Settings" }
          ]}
          colorType="sub"
        />
      </Sider>
      <Content>
        <Layout>
          <Header
            className="flex jus-cen item-cen"
            colorType="primary"
            shadow="sm"
            border={false}
            height="60"
          >
            Sub Header
          </Header>
          <Content className="flex jus-cen item-cen">
            Nested Layout Content
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default NestedLayout;`,
      tscode: `import React from 'react';
import { Layout, Header, Sider, Content, Menu } from 'sud-ui';
import { LogoSud } from 'sud-icons';

interface MenuItem {
  key: string;
  label: string;
}

const NestedLayout: React.FC = () => {
  const menuItems: MenuItem[] = [
    { key: "dashboard", label: "Dashboard" },
    { key: "users", label: "Users" },
    { key: "settings", label: "Settings" }
  ];

  return (
    <Layout>
      <Header
        className="flex jus-cen item-cen"
        colorType="sub"
        shadow="sm"
        border={false}
      >
        <LogoSud /> Soon UI Design
      </Header>
      <Sider
        className="flex pd-l-5 pd-r-10"
        width="270"
        colorType="sub"
        shadow="sm"
        border={false}
      >
        <Menu
          items={menuItems}
          colorType="sub"
        />
      </Sider>
      <Content>
        <Layout>
          <Header
            className="flex jus-cen item-cen"
            colorType="primary"
            shadow="sm"
            border={false}
            height="60"
          >
            Sub Header
          </Header>
          <Content className="flex jus-cen item-cen">
            Nested Layout Content
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default NestedLayout;`
    },
    {
      title: "Sider-Content",
      description:
        lang === "ko"
          ? "Sider와 Content만 있는 간단한 레이아웃입니다."
          : "Simple layout with only Sider and Content.",
      render: (
        <div style={{ width: "100%", height: "50vh" }}>
          {(() => {
            const [selectedMenu, setSelectedMenu] = useState("");

            const menuItems = [
              { key: "dashboard", label: "Dashboard" },
              { key: "users", label: "Users" },
              { key: "settings", label: "Settings" }
            ];

            const handleMenuSelect = (key) => {
              const selected = menuItems.find((item) => item.key === key);
              setSelectedMenu(selected?.label || "");
            };

            return (
              <sud.Layout>
                <sud.Sider
                  className="flex pd-l-5 pd-r-10"
                  width="270"
                  colorType="sub"
                  shadow="sm"
                  border={false}
                >
                  <sud.Menu
                    items={menuItems}
                    colorType="sub"
                    onSelect={handleMenuSelect}
                  />
                </sud.Sider>
                <sud.Content
                  className="flex jus-cen item-cen"
                  background="sky-1"
                >
                  {selectedMenu
                    ? `${selectedMenu} page`
                    : "Please select a menu"}
                </sud.Content>
              </sud.Layout>
            );
          })()}
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Layout, Sider, Content, Menu } from 'sud-ui';

const SiderContentLayout = () => {
  const [selectedMenu, setSelectedMenu] = useState("");

  const menuItems = [
    { key: "dashboard", label: "Dashboard" },
    { key: "users", label: "Users" },
    { key: "settings", label: "Settings" }
  ];

  const handleMenuSelect = (key) => {
    const selected = menuItems.find(item => item.key === key);
    setSelectedMenu(selected?.label || "");
  };

  return (
    <Layout>
      <Sider
        className="flex pd-l-5 pd-r-10"
        width="270"
        colorType="sub"
        shadow="sm"
        border={false}
      >
        <Menu
          items={menuItems}
          colorType="sub"
          onSelect={handleMenuSelect}
        />
      </Sider>
      <Content className="flex jus-cen item-cen" background="sky-1">
        {selectedMenu ? \`\${selectedMenu} page\` : "Please select a menu"}
      </Content>
    </Layout>
  );
};

export default SiderContentLayout;`,
      tscode: `import React, { useState } from 'react';
import { Layout, Sider, Content, Menu } from 'sud-ui';

interface MenuItem {
  key: string;
  label: string;
}

const SiderContentLayout: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("");

  const menuItems: MenuItem[] = [
    { key: "dashboard", label: "Dashboard" },
    { key: "users", label: "Users" },
    { key: "settings", label: "Settings" }
  ];

  const handleMenuSelect = (key: string): void => {
    const selected = menuItems.find(item => item.key === key);
    setSelectedMenu(selected?.label || "");
  };

  return (
    <Layout>
      <Sider
        className="flex pd-l-5 pd-r-10"
        width="270"
        colorType="sub"
        shadow="sm"
        border={false}
      >
        <Menu
          items={menuItems}
          colorType="sub"
          onSelect={handleMenuSelect}
        />
      </Sider>
      <Content className="flex jus-cen item-cen" background="sky-1">
        {selectedMenu ? \`\${selectedMenu} page\` : "Please select a menu"}
      </Content>
    </Layout>
  );
};

export default SiderContentLayout;`
    }
  ];

  return (
    <Frame
      component={{ name, description, IMPORT_COMMAND, cautions, examples }}
      isMobile={isMobile}
      lang={lang}
    />
  );
}
