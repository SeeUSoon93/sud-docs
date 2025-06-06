"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { useLang } from "../../_lib/context/langContext";
import {
  Button,
  Card,
  Divider,
  Typography,
  Timeline,
  Avatar,
  Tag,
  Div
} from "sud-ui";

import {
  EditOutline,
  Link,
  LogoGithub,
  SettingOutline,
  ShareOutline
} from "sud-icons";
import {
  borderTypeTags,
  defaultColorTypeTags,
  shadowTypeTags,
  shapeTypeTags
} from "../../_lib/components/common/defaultType";

export default function CardPage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();

  const name = "Card";
  const description = (
    <>
      {lang === "ko"
        ? "데이터를 표시하는 컨테이너입니다."
        : "The container for displaying data."}
    </>
  );

  const IMPORT_COMMAND = "import { Card } from 'sud-ui';";

  const whenToUse = [
    lang === "ko" ? "데이터를 표시할 때" : "When displaying data."
  ];

  const examples = [
    {
      title: "Basic Usage",
      description: lang === "ko" ? "기본적인 사용 방법입니다." : "Basic usage.",
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

export default function Example(): JSX.Element {
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

interface CardProps {
  title?: string;
  footer?: string;
  divider?: boolean;
  width?: string | number;
}

export default function Example(): JSX.Element {
  return (
    <Card title="Card Title" footer="Card Footer" divider width="100%">
      <div className="flex flex-col gap-10">
        <Typography>Card Content</Typography>
        <Typography>Card Content</Typography>
        <Typography>Card Content</Typography>
      </div>
    </Card>
  );
}`
    },
    {
      title: "Thumbnail Card",
      description: lang === "ko" ? "썸네일 카드입니다." : "Thumbnail card.",
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
      jscode: `import React from "react";
import { Card, Typography } from "sud-ui";
import { Link } from "sud-icons";

export default function Example(): JSX.Element {
  return (
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
  );
}`,
      tscode: `import React from "react";
import { Card, Typography } from "sud-ui";
import { Link } from "sud-icons";

interface ThumbnailCardProps {
  className?: string;
  divider?: boolean;
  shadow?: string;
  thumb?: string;
  thumbHeight?: string | number;
  footer?: React.ReactNode;
}

export default function Example(): JSX.Element {
  return (
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
          rel="noopener noreferrer"
        >
          <Link size={14} />
          <Typography suite="EB">soonart.tistory.com</Typography>
        </a>
      }
    />
  );
}`
    },
    {
      title: "Footer custom",
      description:
        lang === "ko" ? "푸터를 커스텀할 수 있습니다." : "Custom footer.",
      render: (
        <Card
          divider
          shadow="none"
          style={{
            width: "100%"
          }}
          footer={
            <div className="flex jus-bet item-cen">
              <Divider vertical borderColor="transparent" />
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
              <Divider vertical borderColor="transparent" />
            </div>
          }
        >
          <Timeline
            items={[
              {
                content: (
                  <div className="flex flex-col gap-5">
                    <Typography suite="EB">2024</Typography>
                    <div className="flex gap-5">
                      <Typography suite="B">01.</Typography>
                      <Typography size="sm">
                        Started backend web development with FastAPI.
                      </Typography>
                    </div>
                    <div className="flex gap-5">
                      <Typography suite="B">06.</Typography>
                      <Typography size="sm">
                        Explored frontend development with React.
                      </Typography>
                    </div>
                    <div className="flex gap-5">
                      <Typography suite="B">07.</Typography>
                      <Typography size="sm">
                        Adopted MongoDB as the primary database.
                      </Typography>
                    </div>
                    <div className="flex gap-5">
                      <Typography suite="B">12.</Typography>
                      <Typography size="sm">
                        Began containerizing applications using Docker.
                      </Typography>
                    </div>
                  </div>
                )
              },
              {
                content: (
                  <div className="flex flex-col gap-5">
                    <Typography suite="EB">2025</Typography>
                    <div className="flex gap-5">
                      <Typography suite="B">01.</Typography>
                      <Typography size="sm">
                        Adopted Next.js as the main frontend framework.
                      </Typography>
                    </div>
                    <div className="flex gap-5">
                      <Typography suite="B">04.</Typography>
                      <Typography size="sm">
                        Started developing the 'Sud-ui' & 'Sud-icons' library.
                      </Typography>
                    </div>
                  </div>
                )
              }
            ]}
          />
        </Card>
      ),
      jscode: `import React from "react";
import { Card, Typography, Divider, Button, Timeline } from "sud-ui";
import { EditOutline, SettingOutline, ShareOutline } from "sud-icons";

interface TimelineItem {
  content: React.ReactNode;
}

interface CustomCardProps {
  divider?: boolean;
  shadow?: string;
  style?: React.CSSProperties;
  footer?: React.ReactNode;
}

export default function Example(): JSX.Element {
  const timelineItems: TimelineItem[] = [
    {
      content: (
        <div className="flex flex-col gap-5">
          <Typography suite="EB">2024</Typography>
          <div className="flex gap-5">
            <Typography suite="B">01.</Typography>
            <Typography size="sm">
              Started backend web development with FastAPI.
            </Typography>
          </div>
          <div className="flex gap-5">
            <Typography suite="B">06.</Typography>
            <Typography size="sm">
              Explored frontend development with React.
            </Typography>
          </div>
          <div className="flex gap-5">
            <Typography suite="B">07.</Typography>
            <Typography size="sm">
              Adopted MongoDB as the primary database.
            </Typography>
          </div>
          <div className="flex gap-5">
            <Typography suite="B">12.</Typography>
            <Typography size="sm">
              Began containerizing applications using Docker.
            </Typography>
          </div>
        </div>
      )
    },
    {
      content: (
        <div className="flex flex-col gap-5">
          <Typography suite="EB">2025</Typography>
          <div className="flex gap-5">
            <Typography suite="B">01.</Typography>
            <Typography size="sm">
              Adopted Next.js as the main frontend framework.
            </Typography>
          </div>
          <div className="flex gap-5">
            <Typography suite="B">04.</Typography>
            <Typography size="sm">
              Started developing the 'Sud-ui' & 'Sud-icons' library.
            </Typography>
          </div>
        </div>
      )
    }
  ];

  return (
    <Card
      divider
      shadow="none"
      style={{
        width: "100%"
      }}
      footer={
        <div className="flex jus-bet item-cen">
          <Divider vertical borderColor="transparent" />
          <Button colorType="text">
            <EditOutline />
          </Button>
          <Divider vertical height={30} />
          <Button colorType="text">
            <SettingOutline />
          </Button>
          <Divider vertical height={30} />
          <Button colorType="text">
            <ShareOutline />
          </Button>
          <Divider vertical borderColor="transparent" />
        </div>
      }
    >
      <Timeline items={timelineItems} />
    </Card>
  );
}`,
      tscode: `import React from "react";
import { Card, Typography, Divider, Button, Timeline } from "sud-ui";
import { EditOutline, SettingOutline, ShareOutline } from "sud-icons";

interface TimelineItem {
  content: React.ReactNode;
}

interface CustomCardProps {
  divider?: boolean;
  shadow?: string;
  style?: React.CSSProperties;
  footer?: React.ReactNode;
}

export default function Example(): JSX.Element {
  const timelineItems: TimelineItem[] = [
    {
      content: (
        <div className="flex flex-col gap-5">
          <Typography suite="EB">2024</Typography>
          <div className="flex gap-5">
            <Typography suite="B">01.</Typography>
            <Typography size="sm">
              Started backend web development with FastAPI.
            </Typography>
          </div>
          <div className="flex gap-5">
            <Typography suite="B">06.</Typography>
            <Typography size="sm">
              Explored frontend development with React.
            </Typography>
          </div>
          <div className="flex gap-5">
            <Typography suite="B">07.</Typography>
            <Typography size="sm">
              Adopted MongoDB as the primary database.
            </Typography>
          </div>
          <div className="flex gap-5">
            <Typography suite="B">12.</Typography>
            <Typography size="sm">
              Began containerizing applications using Docker.
            </Typography>
          </div>
        </div>
      )
    },
    {
      content: (
        <div className="flex flex-col gap-5">
          <Typography suite="EB">2025</Typography>
          <div className="flex gap-5">
            <Typography suite="B">01.</Typography>
            <Typography size="sm">
              Adopted Next.js as the main frontend framework.
            </Typography>
          </div>
          <div className="flex gap-5">
            <Typography suite="B">04.</Typography>
            <Typography size="sm">
              Started developing the 'Sud-ui' & 'Sud-icons' library.
            </Typography>
          </div>
        </div>
      )
    }
  ];

  return (
    <Card
      divider
      shadow="none"
      style={{
        width: "100%"
      }}
      footer={
        <div className="flex jus-bet item-cen">
          <Divider vertical borderColor="transparent" />
          <Button colorType="text">
            <EditOutline />
          </Button>
          <Divider vertical height={30} />
          <Button colorType="text">
            <SettingOutline />
          </Button>
          <Divider vertical height={30} />
          <Button colorType="text">
            <ShareOutline />
          </Button>
          <Divider vertical borderColor="transparent" />
        </div>
      }
    >
      <Timeline items={timelineItems} />
    </Card>
  );
}`
    },
    {
      title: "Custom Card",
      description: lang === "ko" ? "커스텀 카드입니다." : "Custom card.",
      render: (
        <Card
          colorType="gold"
          borderType="dashed"
          borderWeight={2}
          borderColor="red"
          style={{
            width: "100%"
          }}
        >
          <div className="flex gap-10">
            <Avatar colorType="orange" size="lg" />
            <div className="flex flex-col gap-5">
              <Typography suite="EB" size="2xl">
                SeeUSoon
              </Typography>
              <Typography color="black-10">
                Hello I'm SeeUSoon.
                <br />
                I'm Web Developer.
              </Typography>

              <Tag>
                <a
                  href="https://github.com/SeeUSoon93"
                  target="_blank"
                  className="flex flex-row gap-5 item-cen"
                >
                  <LogoGithub size="14" />
                  <Typography suite="EB">github.com/SeeUSoon93</Typography>
                </a>
              </Tag>
            </div>
          </div>
        </Card>
      ),
      jscode: `import React from "react";
import { Card, Typography, Avatar, Tag } from "sud-ui";
import { LogoGithub } from "sud-icons";

export default function Example() {
  return (
    <Card
      colorType="gold"
      borderType="dashed"
      borderWeight={2}
      borderColor="red"
      style={{
        width: "100%"
      }}
    >
      <div className="flex gap-10">
        <Avatar colorType="orange" size="lg" />
        <div className="flex flex-col gap-5">
          <Typography suite="EB" size="2xl">
            SeeUSoon
          </Typography>
          <Typography color="black-10">
            Hello I'm SeeUSoon.
            <br />
            I'm Web Developer.
          </Typography>

          <Tag>
            <a
              href="https://github.com/SeeUSoon93"
              target="_blank"
              className="flex flex-row gap-5 item-cen"
            >
              <LogoGithub size="14" />
              <Typography suite="EB">github.com/SeeUSoon93</Typography>
            </a>
          </Tag>
        </div>
      </div>
    </Card>
  );
}`,
      tscode: `import React from "react";
import { Card, Typography, Avatar, Tag } from "sud-ui";
import { LogoGithub } from "sud-icons";

export default function Example() {
  return (
    <Card
      colorType="gold"
      borderType="dashed"
      borderWeight={2}
      borderColor="red"
      style={{
        width: "100%"
      }}
    >
      <div className="flex gap-10">
        <Avatar colorType="orange" size="lg" />
        <div className="flex flex-col gap-5">
          <Typography suite="EB" size="2xl">
            SeeUSoon
          </Typography>
          <Typography color="black-10">
            Hello I'm SeeUSoon.
            <br />
            I'm Web Developer.
          </Typography>

          <Tag>
            <a
              href="https://github.com/SeeUSoon93"
              target="_blank"
              className="flex flex-row gap-5 item-cen"
            >
              <LogoGithub size={14} />
              <Typography suite="EB">github.com/SeeUSoon93</Typography>
            </a>
          </Tag>
        </div>
      </div>
    </Card>
  );
}`
    }
  ];

  const howToUseTableData = [
    {
      key: "title",
      name: "title",
      description: lang === "ko" ? "카드의 제목" : "Card title.",
      type: "string | ReactNode",
      default: "-"
    },
    {
      key: "children",
      name: "children",
      description: lang === "ko" ? "카드의 내용" : "Card content.",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "footer",
      name: "footer",
      description: lang === "ko" ? "카드의 푸터" : "Card footer.",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "thumb",
      name: "thumb",
      description: lang === "ko" ? "카드의 썸네일" : "Card thumbnail.",
      type: "string | ReactNode",
      default: "-"
    },
    {
      key: "colorType",
      name: "colorType",
      description: lang === "ko" ? "카드의 색상 타입" : "Card color type.",
      type: <>{defaultColorTypeTags}</>,
      default: <Tag>default</Tag>
    },
    {
      key: "background",
      name: "background",
      description:
        lang === "ko"
          ? "카드의 배경색(palette값 또는 HEX code)"
          : "Card background(palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "color",
      name: "color",
      description:
        lang === "ko"
          ? "카드의 텍스트 색상(palette값 또는 HEX code)"
          : "Card text color(palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "border",
      name: "border",
      description: lang === "ko" ? "테두리 표시 여부" : "Show border.",
      type: "boolean",
      default: "true"
    },
    {
      key: "borderColor",
      name: "borderColor",
      description:
        lang === "ko"
          ? "카드의 테두리 색상(palette값 또는 HEX code)"
          : "Card border color(palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "borderType",
      name: "borderType",
      description:
        lang === "ko" ? "카드의 테두리 스타일" : "Card border style.",
      type: <>{borderTypeTags}</>,
      default: <Tag>solid</Tag>
    },
    {
      key: "borderWeight",
      name: "borderWeight",
      description: lang === "ko" ? "카드의 테두리 두께" : "Card border weight.",
      type: "number",
      default: "1"
    },
    {
      key: "shape",
      name: "shape",
      description: lang === "ko" ? "카드의 모양" : "Card shape.",
      type: <>{shapeTypeTags}</>,
      default: <Tag>rounded</Tag>
    },
    {
      key: "shadow",
      name: "shadow",
      description: lang === "ko" ? "카드의 그림자 효과" : "Card shadow effect.",
      type: <>{shadowTypeTags}</>,
      default: <Tag>sm</Tag>
    },
    {
      key: "width",
      name: "width",
      description: lang === "ko" ? "카드의 너비" : "Card width.",
      type: "string | number",
      default: "fit-content"
    },
    {
      key: "height",
      name: "height",
      description: lang === "ko" ? "카드의 높이" : "Card height.",
      type: "string | number",
      default: "fit-content"
    },
    {
      key: "thumbHeight",
      name: "thumbHeight",
      description: lang === "ko" ? "썸네일의 높이" : "Thumbnail height.",
      type: "string | number",
      default: "auto"
    },
    {
      key: "className",
      name: "className",
      description: lang === "ko" ? "추가 클래스명" : "Additional class name.",
      type: "string",
      default: "-"
    },
    {
      key: "style",
      name: "style",
      description: lang === "ko" ? "추가 스타일" : "Additional style.",
      type: "CSSProperties",
      default: "{}"
    },
    {
      key: "divider",
      name: "divider",
      description: lang === "ko" ? "구분선 표시 여부" : "Show divider.",
      type: "boolean",
      default: "false"
    },
    {
      key: "dividerColor",
      name: "dividerColor",
      description:
        lang === "ko"
          ? "구분선 색상(palette값 또는 HEX code)"
          : "The color of the divider (palette value or HEX code)",
      type: "string",
      default: "-"
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
