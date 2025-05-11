"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Tag } from "sud-ui";
import * as sud from "sud-ui";
import { LogoSud } from "sud-icons";
export default function Layout() {
  const { isMobile } = useMobile();

  const name = "Layout";
  const description = (
    <>
      웹 애플리케이션의 레이아웃을 구성하는 컴포넌트입니다. Header, Sider,
      Content, Footer 컴포넌트를 조합하여 다양한 레이아웃을 구성할 수 있습니다.
      <br />
      <Tag style={{ display: "inline-block", margin: "0 4px" }}>Layout</Tag>
      <Tag style={{ display: "inline-block", margin: "0 4px" }}>Header</Tag>
      <Tag style={{ display: "inline-block", margin: "0 4px" }}>Sider</Tag>
      <Tag style={{ display: "inline-block", margin: "0 4px" }}>Content</Tag>
      <Tag style={{ display: "inline-block", margin: "0 4px" }}>Footer</Tag>
      컴포넌트와 함께 사용합니다.
      <br />
      <br />
      Layout 컴포넌트는 자동으로 화면 전체를 차지하며, 내부 컴포넌트들의 크기에
      따라 Content 영역이 자동으로 조절됩니다. Sider의 위치는 siderPosition
      prop을 통해 조절할 수 있습니다.
    </>
  );
  const IMPORT_COMMAND = `import { Layout, Header, Sider, Content, Footer } from "sud-ui";`;

  const cautions = [
    "Header, Sider, Content, Footer 컴포넌트는 반드시 Layout 컴포넌트 내부에 위치해야 합니다.",
    "Layout 내부에 다른 Layout을 중첩하여 사용할 수 있습니다.",
    "Sider의 위치는 'above-header' 또는 'below-header'로 설정할 수 있습니다.",
    "각 컴포넌트의 크기는 자동으로 계산되며, Content 영역이 나머지 공간을 채웁니다."
  ];

  const examples = [
    {
      title: "기본 레이아웃",
      description: "기본적인 레이아웃 구성입니다.",
      render: (
        <div
          className={`grid col-2 gap-20`}
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
              Content
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
              Content
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
              Content
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
              Content
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
      description: "Header, Content, Footer 컴포넌트를 사용한 레이아웃입니다.",

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
      <Content className="flex flex-col jus-cen item-cen gap-10">
        <Avatar />
        <Typography as="span" size="base" pretendard="B">
          Hello World!
        </Typography>
      </Content>
      <Footer
        className="flex jus-cen item-cen"
        colorType="info"
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
      <Content className="flex flex-col jus-cen item-cen gap-10">
        <Avatar />
        <Typography as="span" size="base" pretendard="B">
          Hello World!
        </Typography>
      </Content>
      <Footer
        className="flex jus-cen item-cen"
        colorType="info"
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
            <sud.Content className="flex flex-col jus-cen item-cen gap-10">
              <sud.Avatar />
              <sud.Typography as="span" size="base" pretendard="B">
                Hello World!
              </sud.Typography>
            </sud.Content>
            <sud.Footer
              className="flex jus-cen item-cen"
              colorType="info"
              border={false}
              height="40px"
            >
              All rights reserved &copy; 2025 SeeUSoon93
            </sud.Footer>
          </sud.Layout>
        </div>
      )
    }
  ];

  return (
    <Frame
      component={{ name, description, IMPORT_COMMAND, cautions, examples }}
      isMobile={isMobile}
    />
  );
}
