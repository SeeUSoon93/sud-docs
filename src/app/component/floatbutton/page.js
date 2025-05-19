"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Tag, Radio, Button, Card, Divider, Input, FloatButton } from "sud-ui";

import React, { useState } from "react";
import {
  AngleLeft,
  AngleUp,
  Chat,
  CircleFill,
  Close,
  CopyOutline,
  MailOutline,
  Minus,
  UserOutline
} from "sud-icons";

export default function FloatButtonPage() {
  const { isMobile } = useMobile();

  const name = "FloatButton";
  const description = <>페이지 위에 고정되어 있는 버튼 컴포넌트입니다.</>;

  const IMPORT_COMMAND = "import { FloatButton } from 'sud-ui';";

  const whenToUse = [
    "사이트의 글로벌 기능을 제공할 때",
    "어떤 페이지에서든 볼 수 있는 버튼이 필요할 때"
  ];

  const examples = [
    {
      title: "Basic Usage",
      description: "기본적인 사용법입니다.",
      render: (
        <div className="flex flex-col gap-20 jus-cen item-cen">
          <Card
            style={{ width: "100%", height: "300px", position: "relative" }}
            shadow="none"
            title={
              <div className="flex jus-bet item-cen">
                <div className="flex item-cen gap-10">
                  <CircleFill color="red" size={10} />
                  <CircleFill color="skyblue" size={10} />
                  <CircleFill color="orange" size={10} />
                </div>
                <div className="flex item-cen gap-10">
                  <Minus size={10} />
                  <CopyOutline size={10} style={{ rotate: "90deg" }} />
                  <Close size={10} />
                </div>
              </div>
            }
            divider
          >
            <FloatButton icon={<Chat />} isExample />
          </Card>
        </div>
      ),
      jscode: `import React from "react";
import { FloatButton } from "sud-ui";
import { Chat } from "sud-icons";

export default function Example() {
  return (
    <>
      <FloatButton icon={<Chat />} />
    </>
  );
}`,
      tscode: `import React from "react";
import { FloatButton } from "sud-ui";
import { Chat } from "sud-icons";

export default function Example(): JSX.Element {
  return (
    <>
      <FloatButton icon={<Chat />} />
    </>
  );
}`
    },
    {
      title: "Shape",
      description: "버튼의 모양을 설정합니다.",
      render: (
        <div className="flex flex-col gap-20 jus-cen item-cen">
          <Card
            style={{ width: "100%", height: "300px", position: "relative" }}
            shadow="none"
            title={
              <div className="flex jus-bet item-cen">
                <div className="flex item-cen gap-10">
                  <CircleFill color="red" size={10} />
                  <CircleFill color="skyblue" size={10} />
                  <CircleFill color="orange" size={10} />
                </div>
                <div className="flex item-cen gap-10">
                  <Minus size={10} />
                  <CopyOutline size={10} style={{ rotate: "90deg" }} />
                  <Close size={10} />
                </div>
              </div>
            }
            divider
          >
            <FloatButton
              icon={<Chat />}
              shape="rounded"
              style={{ marginRight: "0px" }}
              isExample
            />
            <FloatButton
              icon={<Chat />}
              shape="square"
              style={{ marginRight: "60px" }}
              isExample
            />
            <FloatButton
              icon={<Chat />}
              shape="circle"
              style={{ marginRight: "120px" }}
              isExample
            />
          </Card>
        </div>
      ),
      jscode: `import React from "react";
import { FloatButton } from "sud-ui";
import { Chat } from "sud-icons";

export default function Example() {
  return (
    <>
      <FloatButton 
        icon={<Chat />} 
        shape="rounded" 
        style={{ right: 24 }}
      />
      <FloatButton 
        icon={<Chat />} 
        shape="square" 
        style={{ right: 84 }}
      />
      <FloatButton 
        icon={<Chat />} 
        shape="circle" 
        style={{ right: 124 }}
      />
    </>
  );
}`,
      tscode: `import React from "react";
import { FloatButton } from "sud-ui";
import { Chat } from "sud-icons";

export default function Example(): JSX.Element {
  return (
    <>
      <FloatButton 
        icon={<Chat />} 
        shape="rounded" 
        style={{ right: 24 }}
      />
      <FloatButton 
        icon={<Chat />} 
        shape="square" 
        style={{ right: 84 }}
      />
      <FloatButton 
        icon={<Chat />} 
        shape="circle" 
        style={{ right: 124 }}
      />
    </>
  );
}`
    },
    {
      title: "Placement",
      description: "버튼의 위치를 설정합니다.",
      render: (
        <div className="flex flex-col gap-20 jus-cen item-cen">
          <Card
            style={{ width: "100%", height: "300px", position: "relative" }}
            shadow="none"
            title={
              <div className="flex jus-bet item-cen">
                <div className="flex item-cen gap-10">
                  <CircleFill color="red" size={10} />
                  <CircleFill color="skyblue" size={10} />
                  <CircleFill color="orange" size={10} />
                </div>
                <div className="flex item-cen gap-10">
                  <Minus size={10} />
                  <CopyOutline size={10} style={{ rotate: "90deg" }} />
                  <Close size={10} />
                </div>
              </div>
            }
            divider
          >
            <FloatButton
              icon={<Chat />}
              placement="top-left"
              isExample
              style={{ marginTop: "40px" }}
            />
            <FloatButton
              icon={<Chat />}
              placement="top-center"
              isExample
              style={{ marginTop: "40px" }}
            />
            <FloatButton
              icon={<Chat />}
              placement="top-right"
              isExample
              style={{ marginTop: "40px" }}
            />
            <FloatButton icon={<Chat />} placement="bottom-left" isExample />
            <FloatButton icon={<Chat />} placement="bottom-center" isExample />
            <FloatButton icon={<Chat />} placement="bottom-right" isExample />
          </Card>
        </div>
      ),
      jscode: `import React from "react";
import { FloatButton } from "sud-ui";
import { Chat } from "sud-icons";

export default function Example() {
  return (
    <>
      <FloatButton 
        icon={<Chat />} 
        placement="top-left"
      />
      <FloatButton 
        icon={<Chat />} 
        placement="top-center"
      />
      <FloatButton 
        icon={<Chat />} 
        placement="top-right"
      />
      <FloatButton 
        icon={<Chat />} 
        placement="bottom-left"
      />
      <FloatButton 
        icon={<Chat />} 
        placement="bottom-center"
      />
      <FloatButton 
        icon={<Chat />} 
        placement="bottom-right"
      />
    </>
  );
}`,
      tscode: `import React from "react";
import { FloatButton } from "sud-ui";
import { Chat } from "sud-icons";

export default function Example(): JSX.Element {
  return (
    <>
      <FloatButton 
        icon={<Chat />} 
        placement="top-left"
      />
      <FloatButton 
        icon={<Chat />} 
        placement="top-center"
      />
      <FloatButton 
        icon={<Chat />} 
        placement="top-right"
      />
      <FloatButton 
        icon={<Chat />} 
        placement="bottom-left"
      />
      <FloatButton 
        icon={<Chat />} 
        placement="bottom-center"
      />
      <FloatButton 
        icon={<Chat />} 
        placement="bottom-right"
      />
    </>
  );
}`
    },
    {
      title: "Extended Button",
      description: "확장 버튼을 사용할 수 있습니다.",
      render: (
        <div className="flex flex-col gap-20 jus-cen item-cen">
          <Card
            style={{ width: "100%", height: "300px", position: "relative" }}
            shadow="none"
            title={
              <div className="flex jus-bet item-cen">
                <div className="flex item-cen gap-10">
                  <CircleFill color="red" size={10} />
                  <CircleFill color="skyblue" size={10} />
                  <CircleFill color="orange" size={10} />
                </div>
                <div className="flex item-cen gap-10">
                  <Minus size={10} />
                  <CopyOutline size={10} style={{ rotate: "90deg" }} />
                  <Close size={10} />
                </div>
              </div>
            }
            divider
          >
            <FloatButton
              icon={<UserOutline />}
              isExample
              actions={[
                {
                  icon: <MailOutline />,
                  onClick: () => {}
                },
                {
                  icon: <Chat />,
                  onClick: () => {}
                }
              ]}
            />
          </Card>
        </div>
      ),
      jscode: `import React from "react";
import { FloatButton } from "sud-ui";
import { UserOutline, MailOutline, Chat } from "sud-icons";

export default function Example() {
  return (
    <>
      <FloatButton 
        icon={<UserOutline />}
        actions={[
          {
            icon: <MailOutline />,
            onClick: () => {}
          },
          {
            icon: <Chat />,
            onClick: () => {}
          }
        ]}
      />
    </>
  );
}`,
      tscode: `import React from "react";
import { FloatButton } from "sud-ui";
import { UserOutline, MailOutline, Chat } from "sud-icons";

export default function Example(): JSX.Element {
  return (
    <>
      <FloatButton 
        icon={<UserOutline />}
        actions={[
          {
            icon: <MailOutline />,
            onClick: () => {}
          },
          {
            icon: <Chat />,
            onClick: () => {}
          }
        ]}
      />
    </>
  );
}`
    },
    {
      title: "Extended Button Direction",
      description: "확장 버튼의 방향을 설정합니다.",
      render: (
        <div className="flex flex-col gap-20 jus-cen item-cen">
          <Card
            style={{ width: "100%", height: "300px", position: "relative" }}
            shadow="none"
            title={
              <div className="flex jus-bet item-cen">
                <div className="flex item-cen gap-10">
                  <CircleFill color="red" size={10} />
                  <CircleFill color="skyblue" size={10} />
                  <CircleFill color="orange" size={10} />
                </div>
                <div className="flex item-cen gap-10">
                  <Minus size={10} />
                  <CopyOutline size={10} style={{ rotate: "90deg" }} />
                  <Close size={10} />
                </div>
              </div>
            }
            divider
          >
            <FloatButton
              icon={<AngleLeft />}
              isExample
              direction="left"
              actions={[
                {
                  icon: <MailOutline />,
                  onClick: () => {}
                },
                {
                  icon: <Chat />,
                  onClick: () => {}
                }
              ]}
            />
          </Card>
        </div>
      ),
      jscode: `import React from "react";
import { FloatButton } from "sud-ui";
import { AngleLeft, MailOutline, Chat } from "sud-icons";

export default function Example() {
  return (
    <>
      <FloatButton 
        icon={<AngleLeft />}
        direction="left"
        actions={[
          {
            icon: <MailOutline />,
            onClick: () => {}
          },
          {
            icon: <Chat />,
            onClick: () => {}
          }
        ]}
      />
    </>
  );
}`,
      tscode: `import React from "react";
import { FloatButton } from "sud-ui";
import { AngleLeft, MailOutline, Chat } from "sud-icons";

export default function Example(): JSX.Element {
  return (
    <>
      <FloatButton 
        icon={<AngleLeft />}
        direction="left"
        actions={[
          {
            icon: <MailOutline />,
            onClick: () => {}
          },
          {
            icon: <Chat />,
            onClick: () => {}
          }
        ]}
      />
    </>
  );
}`
    }
  ];
  const howToUseTableData = [
    {
      key: "icon",
      name: "icon",
      description: "버튼에 표시할 아이콘",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "onClick",
      name: "onClick",
      description: "클릭 이벤트 핸들러",
      type: "(event: React.MouseEvent) => void",
      default: "-"
    },
    {
      key: "actions",
      name: "actions",
      description: "확장 버튼 목록",
      type: "Array<ButtonProps>",
      default: "[]"
    },
    {
      key: "placement",
      name: "placement",
      description: "버튼의 위치",
      type: (
        <>
          <Tag>bottom-right</Tag> ｜ <Tag>bottom-left</Tag> ｜{" "}
          <Tag>bottom-center</Tag> ｜ <Tag>top-right</Tag> ｜{" "}
          <Tag>top-left</Tag> ｜ <Tag>top-center</Tag> ｜ <Tag>left-center</Tag>{" "}
          ｜ <Tag>right-center</Tag>
        </>
      ),
      default: <Tag>bottom-right</Tag>
    },
    {
      key: "direction",
      name: "direction",
      description: "확장 버튼 방향",
      type: (
        <>
          <Tag>up</Tag> ｜ <Tag>down</Tag> ｜ <Tag>left</Tag> ｜{" "}
          <Tag>right</Tag>
        </>
      ),
      default: "-"
    },

    {
      key: "shape",
      name: "shape",
      description: "버튼의 모양",
      type: (
        <>
          <Tag>circle</Tag> ｜ <Tag>rounded</Tag> ｜ <Tag>square</Tag>
        </>
      ),
      default: <Tag>circle</Tag>
    },
    {
      key: "colorType",
      name: "colorType",
      description: "버튼의 색상 타입",
      type: (
        <>
          <Tag>default</Tag> ｜ <Tag>primary</Tag> ｜ <Tag>secondary</Tag> ｜{" "}
          <Tag>success</Tag> ｜ <Tag>warning</Tag> ｜ <Tag>danger</Tag> ｜{" "}
          <Tag>info</Tag> ｜ <Tag>ghost</Tag> ｜ <Tag>text</Tag>
        </>
      ),
      default: <Tag>primary</Tag>
    },
    {
      key: "background",
      name: "background",
      description: "버튼의 배경색",
      type: "string",
      default: "-"
    },
    {
      key: "color",
      name: "color",
      description: "버튼의 텍스트 색상",
      type: "string",
      default: "-"
    },
    {
      key: "border",
      name: "border",
      description: "테두리 표시 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "borderColor",
      name: "borderColor",
      description: "버튼의 테두리 색상",
      type: "string",
      default: "-"
    },
    {
      key: "borderType",
      name: "borderType",
      description: "버튼의 테두리 스타일",
      type: "string",
      default: "solid"
    },
    {
      key: "borderWeight",
      name: "borderWeight",
      description: "버튼의 테두리 두께",
      type: "number",
      default: "1"
    },
    {
      key: "disabled",
      name: "disabled",
      description: "버튼 비활성화 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "shadow",
      name: "shadow",
      description: "버튼의 그림자 효과",
      type: (
        <>
          <Tag>none</Tag> ｜ <Tag>sm</Tag> ｜ <Tag>md</Tag> ｜ <Tag>lg</Tag>
        </>
      ),
      default: <Tag>md</Tag>
    },
    {
      key: "subColorType",
      name: "subColorType",
      description: "확장 버튼의 기본 색상 타입",
      type: (
        <>
          <Tag>default</Tag> ｜ <Tag>primary</Tag> ｜ <Tag>secondary</Tag> ｜{" "}
          <Tag>success</Tag> ｜ <Tag>warning</Tag> ｜ <Tag>danger</Tag> ｜{" "}
          <Tag>info</Tag> ｜ <Tag>ghost</Tag> ｜ <Tag>text</Tag>
        </>
      ),
      default: <Tag>default</Tag>
    },
    {
      key: "size",
      name: "size",
      description: "버튼의 크기",
      type: (
        <>
          <Tag>xs</Tag> ｜ <Tag>sm</Tag> ｜ <Tag>md</Tag> ｜ <Tag>lg</Tag> ｜{" "}
          <Tag>xl</Tag>
        </>
      ),
      default: <Tag>md</Tag>
    },
    {
      key: "style",
      name: "style",
      description: "추가 스타일",
      type: "CSSProperties",
      default: "{}"
    },
    {
      key: "ariaLabel",
      name: "ariaLabel",
      description: "ARIA 라벨",
      type: "string",
      default: "-"
    },
    {
      key: "ariaPressed",
      name: "ariaPressed",
      description: "ARIA pressed 상태",
      type: "boolean",
      default: "-"
    },
    {
      key: "ariaExpanded",
      name: "ariaExpanded",
      description: "ARIA expanded 상태",
      type: "boolean",
      default: "-"
    },
    {
      key: "ariaControls",
      name: "ariaControls",
      description: "ARIA controls 속성",
      type: "string",
      default: "-"
    },
    {
      key: "role",
      name: "role",
      description: "ARIA 역할",
      type: "string",
      default: "button"
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
