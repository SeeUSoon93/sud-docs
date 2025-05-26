"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { useLang } from "../../_lib/context/langContext";
import { Tag, Card, FloatButton } from "sud-ui";

import {
  AngleLeft,
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
  const { lang } = useLang();

  const name = "FloatButton";
  const description =
    lang === "ko" ? (
      <>페이지 위에 고정되어 있는 버튼 컴포넌트입니다.</>
    ) : (
      <>A component that is fixed to the top of the page.</>
    );

  const IMPORT_COMMAND = "import { FloatButton } from 'sud-ui';";

  const whenToUse =
    lang === "ko"
      ? [
          "사이트의 글로벌 기능을 제공할 때",
          "어떤 페이지에서든 볼 수 있는 버튼이 필요할 때"
        ]
      : [
          "When providing a global feature of a site",
          "When a button that can be seen on any page is needed"
        ];

  const examples = [
    {
      title: "Basic Usage",
      description: lang === "ko" ? "기본적인 사용 방법입니다." : "Basic usage.",
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
      description:
        lang === "ko"
          ? "버튼의 모양을 설정합니다."
          : "Set the shape of the button.",
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
      description:
        lang === "ko"
          ? "버튼의 위치를 설정합니다."
          : "Set the position of the button.",
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
      description:
        lang === "ko"
          ? "확장 버튼을 사용할 수 있습니다."
          : "You can use the extended button.",
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
      description:
        lang === "ko"
          ? "확장 버튼의 방향을 설정합니다."
          : "Set the direction of the extended button.",
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
      description:
        lang === "ko"
          ? "버튼에 표시할 아이콘"
          : "The icon to display on the button.",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "onClick",
      name: "onClick",
      description:
        lang === "ko" ? "클릭 이벤트 핸들러" : "The click event handler.",
      type: "(event: React.MouseEvent) => void",
      default: "-"
    },
    {
      key: "actions",
      name: "actions",
      description:
        lang === "ko" ? "확장 버튼 목록" : "The list of extended buttons.",
      type: "Array<ButtonProps>",
      default: "[]"
    },
    {
      key: "placement",
      name: "placement",
      description:
        lang === "ko" ? "버튼의 위치" : "The position of the button.",
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
      description:
        lang === "ko"
          ? "확장 버튼 방향"
          : "The direction of the extended button.",
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
      description: lang === "ko" ? "버튼의 모양" : "The shape of the button.",
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
      description:
        lang === "ko" ? "버튼의 색상 타입" : "The color type of the button.",
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
      description:
        lang === "ko" ? "버튼의 배경색" : "The background color of the button.",
      type: "string",
      default: "-"
    },
    {
      key: "color",
      name: "color",
      description:
        lang === "ko" ? "버튼의 텍스트 색상" : "The text color of the button.",
      type: "string",
      default: "-"
    },
    {
      key: "border",
      name: "border",
      description:
        lang === "ko" ? "테두리 표시 여부" : "Whether to display the border.",
      type: "boolean",
      default: "false"
    },
    {
      key: "borderColor",
      name: "borderColor",
      description:
        lang === "ko"
          ? "버튼의 테두리 색상"
          : "The border color of the button.",
      type: "string",
      default: "-"
    },
    {
      key: "borderType",
      name: "borderType",
      description:
        lang === "ko"
          ? "버튼의 테두리 스타일"
          : "The border style of the button.",
      type: "string",
      default: "solid"
    },
    {
      key: "borderWeight",
      name: "borderWeight",
      description:
        lang === "ko"
          ? "버튼의 테두리 두께"
          : "The border weight of the button.",
      type: "number",
      default: "1"
    },
    {
      key: "disabled",
      name: "disabled",
      description:
        lang === "ko"
          ? "버튼 비활성화 여부"
          : "Whether the button is disabled.",
      type: "boolean",
      default: "false"
    },
    {
      key: "shadow",
      name: "shadow",
      description:
        lang === "ko"
          ? "버튼의 그림자 효과"
          : "The shadow effect of the button.",
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
      description:
        lang === "ko"
          ? "확장 버튼의 기본 색상 타입"
          : "The default color type of the extended button.",
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
      description: lang === "ko" ? "버튼의 크기" : "The size of the button.",
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
      description: lang === "ko" ? "추가 스타일" : "Additional style.",
      type: "CSSProperties",
      default: "{}"
    },
    {
      key: "ariaLabel",
      name: "ariaLabel",
      description: lang === "ko" ? "ARIA 라벨" : "ARIA label.",
      type: "string",
      default: "-"
    },
    {
      key: "ariaPressed",
      name: "ariaPressed",
      description: lang === "ko" ? "ARIA pressed 상태" : "ARIA pressed state.",
      type: "boolean",
      default: "-"
    },
    {
      key: "ariaExpanded",
      name: "ariaExpanded",
      description:
        lang === "ko" ? "ARIA expanded 상태" : "ARIA expanded state.",
      type: "boolean",
      default: "-"
    },
    {
      key: "ariaControls",
      name: "ariaControls",
      description:
        lang === "ko" ? "ARIA controls 속성" : "ARIA controls attribute.",
      type: "string",
      default: "-"
    },
    {
      key: "role",
      name: "role",
      description: lang === "ko" ? "ARIA 역할" : "ARIA role.",
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
