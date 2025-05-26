"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Tag, Radio, Button, Card, Divider, Input, Typography } from "sud-ui";

import React, { useState } from "react";
import {
  Chat,
  EditFill,
  EditOutline,
  Link,
  SettingOutline,
  ShareOutline
} from "sud-icons";

export default function CardPage() {
  const { isMobile } = useMobile();

  const name = "Card";
  const description = <>데이터를 표시하는 컨테이너입니다.</>;

  const IMPORT_COMMAND = "import { Card } from 'sud-ui';";

  const whenToUse = ["데이터를 표시할 때"];
  const [colorType, setColorType] = useState("default");
  const colorTypeOptions = [
    {
      label: "default",
      value: "default"
    },
    {
      label: "sub",
      value: "sub"
    },
    {
      label: "primary",
      value: "primary"
    },
    {
      label: "secondary",
      value: "secondary"
    },
    {
      label: "success",
      value: "success"
    },
    {
      label: "warning",
      value: "warning"
    },
    {
      label: "danger",
      value: "danger"
    },
    {
      label: "info",
      value: "info"
    },
    {
      label: "ghost",
      value: "ghost"
    },
    {
      label: "text",
      value: "text"
    }
  ];

  const [size, setSize] = useState("md");
  const sizeOptions = [
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
    }
  ];

  const examples = [
    {
      title: "Basic Usage",
      description: "기본적인 사용방법입니다.",
      render: (
        <Card title="Card Title" footer="Card Footer" divider width="100%">
          <div className="flex flex-col gap-10">
            <Typography>Card Content</Typography>
            <Typography>Card Content</Typography>
            <Typography>Card Content</Typography>
          </div>
        </Card>
      ),
      jscode: `import React from "react";
import { Card, Typography } from "sud-ui";

export default function Example() {
  
  return (
    <Card title="Card Title" footer="Card Footer" divider width="100%">
      <div className="flex flex-col gap-10">
        <Typography>Card Content</Typography>
        <Typography>Card Content</Typography>
        <Typography>Card Content</Typography>
      </div>
    </Card>
  );
}`,
      tscode: `import React from "react";
import { Card, Typography } from "sud-ui";

export default function Example() {
  return (
    <Card title="Card Title" footer="Card Footer" divider width="100%">
      <div className="flex flex-col gap-10">
        <Typography>Card Content</Typography>
        <Typography>Card Content</Typography>
      </div>
    </Card>
  );
}`
    },
    {
      title: "Thumbnail Card",
      description: "",
      render: (
        <Card
          className="hover-shadow-5"
          divider
          shadow="none"
          thumb="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcsmbTA%2FbtslvwjyeVU%2FutP5zUeRQOLtrAIjOkmcY0%2Fimg.jpg"
          thumbHeight="300px"
          footer={
            <a
              className="flex flex-row gap-5 jus-cen item-cen"
              href="https://soonart.tistory.com/entry/%EB%82%99%EC%84%9C-%EC%9D%BC%EC%83%81-%EA%B7%B8%EB%A6%BC"
              target="_blank"
            >
              <Link size="14" />
              <Typography suite="EB">soonart.tistory.com</Typography>
            </a>
          }
        />
      ),
      jscode: ``,
      tscode: ``
    },
    {
      title: "Footer custom",
      description: "",
      render: (
        <Card
          divider
          shadow="none"
          footer={
            <div className="flex jus-bet item-cen">
              <Divider vertical />
              <Button colorType="text">
                <EditOutline />
              </Button>
              <Divider vertical height="30px" />
              <Button colorType="text">
                <SettingOutline />
              </Button>
              <Divider vertical height="30px" />
              <Button colorType="text">
                <ShareOutline />
              </Button>
              <Divider vertical />
            </div>
          }
        >
          <Typography size="lg">안녕하세요.</Typography>
          <Typography size="lg">저는 그래픽 디자이너입니다.</Typography>
          <Typography size="lg">
            JAVA(Spring Boot)와 Python(FastAPI)로 웹 개발을 시작했다가,
            <br />
            프론트엔드 개발자를 따로 두기 어려워 Vue, React, Next.js도 직접
            사용하게 되었습니다.
          </Typography>
          <Typography size="lg">
            원래 디자이너였기 때문에 디자인 부분이 많이 신경쓰이는데, 웹
            디자인은 경험도 없고 매번 새로 디자인하기 어려워서 이 라이브러리를
            만들게 되었습니다.
          </Typography>
          <Typography size="lg">
            React, Next.js는 사용해본지 몇 달 되지 않았고 제 기준대로 만든거라
            많이 부족할 수 있습니다.
          </Typography>
        </Card>
      ),
      jscode: ``,
      tscode: ``
    }
  ];

  const howToUseTableData = [
    {
      key: "title",
      name: "title",
      description: "카드의 제목",
      type: "string | ReactNode",
      default: "-"
    },
    {
      key: "children",
      name: "children",
      description: "카드의 내용",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "footer",
      name: "footer",
      description: "카드의 푸터",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "thumb",
      name: "thumb",
      description: "카드의 썸네일",
      type: "string | ReactNode",
      default: "-"
    },
    {
      key: "colorType",
      name: "colorType",
      description: "카드의 색상 타입",
      type: "string",
      default: "default"
    },
    {
      key: "background",
      name: "background",
      description: "카드의 배경색",
      type: "string",
      default: "-"
    },
    {
      key: "color",
      name: "color",
      description: "카드의 텍스트 색상",
      type: "string",
      default: "-"
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
      description: "카드의 테두리 색상",
      type: "string",
      default: "-"
    },
    {
      key: "borderType",
      name: "borderType",
      description: "카드의 테두리 스타일",
      type: "string",
      default: "solid"
    },
    {
      key: "borderWeight",
      name: "borderWeight",
      description: "카드의 테두리 두께",
      type: "number",
      default: "1"
    },
    {
      key: "shape",
      name: "shape",
      description: "카드의 모양",
      type: "string",
      default: "rounded"
    },
    {
      key: "shadow",
      name: "shadow",
      description: "카드의 그림자 효과",
      type: "string",
      default: "sm"
    },
    {
      key: "width",
      name: "width",
      description: "카드의 너비",
      type: "string | number",
      default: "fit-content"
    },
    {
      key: "height",
      name: "height",
      description: "카드의 높이",
      type: "string | number",
      default: "fit-content"
    },
    {
      key: "thumbHeight",
      name: "thumbHeight",
      description: "썸네일의 높이",
      type: "string | number",
      default: "auto"
    },
    {
      key: "className",
      name: "className",
      description: "추가 클래스명",
      type: "string",
      default: '""'
    },
    {
      key: "style",
      name: "style",
      description: "추가 스타일",
      type: "CSSProperties",
      default: "{}"
    },
    {
      key: "variant",
      name: "variant",
      description: "카드의 변형 타입",
      type: (
        <>
          <Tag>card</Tag> ｜ <Tag>drawer</Tag> ｜ <Tag>modal</Tag> ｜{" "}
          <Tag>notification</Tag> ｜ <Tag>toast</Tag>
        </>
      ),
      default: "card"
    },
    {
      key: "divider",
      name: "divider",
      description: "구분선 표시 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "isDrawer",
      name: "isDrawer",
      description: "서랍형 카드 여부",
      type: "boolean",
      default: "false"
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
