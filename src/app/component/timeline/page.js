"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { useLang } from "../../_lib/context/langContext";
import { Card, Radio, Tag, Timeline } from "sud-ui";
import { tagRender } from "../../_lib/components/common/render";

import {
  LogoDocker,
  LogoFastAPI,
  LogoMongoDB,
  LogoNextjs,
  LogoSud
} from "sud-icons";
import { useState } from "react";

export default function TimelinePage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();

  const name = "Timeline";
  const description = (
    <>
      {lang === "ko"
        ? "수직 시간 순서 표시 컴포넌트입니다."
        : "The component for displaying a vertical timeline."}
    </>
  );

  const IMPORT_COMMAND = "import { Timeline } from 'sud-ui';";

  const whenToUse =
    lang === "ko"
      ? [
          "일련의 데이터를 수직 시간 순서로 표시할 때 사용합니다.",
          "데이터 흐름을 시각화할 때 사용합니다."
        ]
      : [
          "Use when displaying a series of data in a vertical timeline.",
          "Use when visualizing data flow."
        ];

  const modeOptions = [
    { label: "left", value: "left" },
    { label: "right", value: "right" },
    { label: "alternate", value: "alternate" }
  ];
  const [mode, setMode] = useState("left");

  const examples = [
    {
      title: "Basic Usage",
      description: lang === "ko" ? "기본적인 사용 방법입니다." : "Basic usage.",
      render: (
        <Timeline
          items={[
            {
              key: "1",
              content: "[2025-03-13] Soon UI Design Planning"
            },
            {
              key: "2",
              content: "[2025-03-25] sud-icons Design 50 icons"
            },
            {
              key: "3",
              content: "[2025-04-16] Theme System Draft"
            },
            {
              key: "4",
              content: "[2025-04-24] sud-ui First Phase Completion"
            },
            {
              key: "5",
              content: "[2025-05-11] Start docs page development"
            }
          ]}
        />
      ),
      jscode: `import { Timeline } from "sud-ui";

export default function App() {
  return (
    <Timeline
      items={[
        {
          key: "1",
          content: "[2025-03-13] Soon UI Design Planning"
        },
        {
          key: "2",
          content: "[2025-03-25] sud-icons Design 50 icons"
        },
        {
          key: "3",
          content: "[2025-04-16] Theme System Draft"
        },
        {
          key: "4",
          content: "[2025-04-24] sud-ui First Phase Completion"
        },
        {
          key: "5",
          content: "[2025-05-11] Start docs page development"
        }
      ]}
    />
  )
}`,
      tscode: `import { Timeline } from "sud-ui";
import React from "react";

export default function App(): React.ReactElement {
  return (
    <Timeline
      items={[
        {
          key: "1",
          content: "[2025-03-13] Soon UI Design Planning"
        },
        {
          key: "2",
          content: "[2025-03-25] sud-icons Design 50 icons"
        },
        {
          key: "3",
          content: "[2025-04-16] Theme System Draft"
        },
        {
          key: "4",
          content: "[2025-04-24] sud-ui First Phase Completion"
        },
        {
          key: "5",
          content: "[2025-05-11] Start docs page development"
        }
      ]}
    />
  )
}`
    },
    {
      title: "Use Label",
      description:
        lang === "ko" ? "레이블을 사용한 사용 방법입니다." : "Use label.",
      render: (
        <Timeline
          items={[
            {
              key: "1",
              label: "2025-05-07",
              content: "Soon UI Design Npm Package Release"
            },
            {
              key: "2",
              label: "2025-05-20",
              content: "Start English translation of docs page"
            },
            {
              key: "3",
              label: "2025-05-27",
              content: "Add mobile version to docs page"
            },
            {
              key: "4",
              label: "2025-06-05",
              content: "Bulk update of common props types for components"
            }
          ]}
        />
      ),
      jscode: `import { Timeline } from "sud-ui";

export default function App() {
  return (
    <Timeline
      items={[
        {
          key: "1",
          label: "2025-05-07",
          content: "Soon UI Design Npm Package Release"
        },
        {
          key: "2",
          label: "2025-05-20",
          content: "Start English translation of docs page"
        },
        {
          key: "3",
          label: "2025-05-27",
          content: "Add mobile version to docs page"
        },
        {
          key: "4",
          label: "2025-06-05",
          content: "Bulk update of common props types for components"
        }
      ]}
    />
  )
}`,
      tscode: `import { Timeline } from "sud-ui";
import React from "react";

export default function App(): React.ReactElement {
  return (
    <Timeline
      items={[
        {
          key: "1",
          label: "2025-05-07",
          content: "Soon UI Design Npm Package Release"
        },
        {
          key: "2",
          label: "2025-05-20",
          content: "Start English translation of docs page"
        },
        {
          key: "3",
          label: "2025-05-27",
          content: "Add mobile version to docs page"
        },
        {
          key: "4",
          label: "2025-06-05",
          content: "Bulk update of common props types for components"
        }
      ]}
    />
  )
}`
    },
    {
      title: "Mode",
      description:
        lang === "ko"
          ? "모드를 변경할 수 있습니다."
          : "You can change the mode.",
      render: (
        <div className="flex flex-col gap-20">
          <Card style={{ width: "100%" }} shadow="none" colorType="sub">
            <div className="flex jus-cen">
              <Radio.Group
                direction="horizontal"
                options={modeOptions}
                value={mode}
                onChange={setMode}
              />
            </div>
          </Card>
          <Timeline
            mode={mode}
            items={[
              {
                key: "1",
                content: "[2025-05-07] Soon UI Design Npm Package Release"
              },
              {
                key: "2",
                content: "[2025-05-20] Start English translation of docs page"
              },
              {
                key: "3",
                content: "[2025-05-27] Add mobile version to docs page"
              },
              {
                key: "4",
                content:
                  "[2025-06-05] Bulk update of common props types for components"
              }
            ]}
          />
        </div>
      ),
      jscode: `import { Timeline, Card, Radio } from "sud-ui";
import { useState } from "react";

export default function App() {
  const [mode, setMode] = useState("left");
  const modeOptions = [
    { label: "left", value: "left" },
    { label: "right", value: "right" },
    { label: "alternate", value: "alternate" }
  ];

  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen">
          <Radio.Group
            direction="horizontal"
            options={modeOptions}
            value={mode}
            onChange={setMode}
          />
        </div>
      </Card>
      <Timeline
        mode={mode}
        items={[
          {
            key: "1",
            content: "[2025-05-07] Soon UI Design Npm Package Release"
          },
          {
            key: "2",
            content: "[2025-05-20] Start English translation of docs page"
          },
          {
            key: "3",
            content: "[2025-05-27] Add mobile version to docs page"
          },
          {
            key: "4",
            content: "[2025-06-05] Bulk update of common props types for components"
          }
        ]}
      />
    </div>
  )
}`,
      tscode: `import { Timeline, Card, Radio } from "sud-ui";
import React, { useState } from "react";

export default function App(): React.ReactElement {
  const [mode, setMode] = useState("left");
  const modeOptions = [
    { label: "left", value: "left" },
    { label: "right", value: "right" },
    { label: "alternate", value: "alternate" }
  ];

  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen">
          <Radio.Group
            direction="horizontal"
            options={modeOptions}
            value={mode}
            onChange={setMode}
          />
        </div>
      </Card>
      <Timeline
        mode={mode}
        items={[
          {
            key: "1",
            content: "[2025-05-07] Soon UI Design Npm Package Release"
          },
          {
            key: "2",
            content: "[2025-05-20] Start English translation of docs page"
          },
          {
            key: "3",
            content: "[2025-05-27] Add mobile version to docs page"
          },
          {
            key: "4",
            content: "[2025-06-05] Bulk update of common props types for components"
          }
        ]}
      />
    </div>
  )
}`
    },
    {
      title: "Custom Dot",
      description:
        lang === "ko"
          ? "도트를 커스텀할 수 있습니다."
          : "You can customize the dot.",
      render: (
        <Timeline
          items={[
            {
              key: "1",
              dot: <LogoNextjs />,
              content:
                "Next.js is a React framework for building server-side rendered (SSR) web applications."
            },
            {
              key: "2",
              dot: <LogoFastAPI />,
              content:
                "FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.8+."
            },
            {
              key: "3",
              dot: <LogoMongoDB />,
              content:
                "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas."
            },
            {
              key: "4",
              dot: <LogoDocker />,
              content:
                "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers."
            },
            {
              key: "5",
              dot: <LogoSud />,
              content:
                "Sud-ui is a React UI library that provides a set of components for building web applications."
            }
          ]}
        />
      ),
      jscode: `import { Timeline } from "sud-ui";
import { LogoNextjs, LogoFastAPI, LogoMongoDB, LogoDocker, LogoSud } from "sud-icons";

export default function App() {
  return (
    <Timeline
      items={[
        {
          key: "1",
          dot: <LogoNextjs />,
          content: "Next.js is a React framework for building server-side rendered (SSR) web applications."
        },
        {
          key: "2",
          dot: <LogoFastAPI />,
          content: "FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.8+."
        },
        {
          key: "3",
          dot: <LogoMongoDB />,
          content: "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas."
        },
        {
          key: "4",
          dot: <LogoDocker />,
          content: "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers."
        },
        {
          key: "5",
          dot: <LogoSud />,
          content: "Sud-ui is a React UI library that provides a set of components for building web applications."
        }
      ]}
    />
  )
}`,
      tscode: `import { Timeline } from "sud-ui";
import { LogoNextjs, LogoFastAPI, LogoMongoDB, LogoDocker, LogoSud } from "sud-icons";
import React from "react";

export default function App(): React.ReactElement {
  return (
    <Timeline
      items={[
        {
          key: "1",
          dot: <LogoNextjs />,
          content: "Next.js is a React framework for building server-side rendered (SSR) web applications."
        },
        {
          key: "2",
          dot: <LogoFastAPI />,
          content: "FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.8+."
        },
        {
          key: "3",
          dot: <LogoMongoDB />,
          content: "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas."
        },
        {
          key: "4",
          dot: <LogoDocker />,
          content: "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers."
        },
        {
          key: "5",
          dot: <LogoSud />,
          content: "Sud-ui is a React UI library that provides a set of components for building web applications."
        }
      ]}
    />
  )
}`
    },
    {
      title: "Custom Dot Color",
      description:
        lang === "ko"
          ? "도트 색상을 커스텀할 수 있습니다."
          : "You can customize the dot.",
      render: (
        <Timeline
          mode="alternate"
          items={[
            {
              key: "1",
              color: "blue",
              content:
                "Blue represents trust, loyalty, and stability in design systems."
            },
            {
              key: "2",
              color: "volcano",
              content:
                "Volcano color is often used to indicate warnings or important alerts."
            },
            {
              key: "3",
              color: "forest",
              content:
                "Forest green symbolizes growth, harmony, and environmental awareness."
            },
            {
              key: "4",
              color: "orange",
              content:
                "Orange color is often used to indicate warmth, energy, and creativity."
            }
          ]}
        />
      ),
      jscode: `import { Timeline } from "sud-ui";

export default function App() {
  return (
    <Timeline
      mode="alternate"
      items={[
        {
          key: "1",
          color: "blue",
          content: "Blue represents trust, loyalty, and stability in design systems."
        },
        {
          key: "2",
          color: "volcano",
          content: "Volcano color is often used to indicate warnings or important alerts."
        },
        {
          key: "3",
          color: "forest",
          content: "Forest green symbolizes growth, harmony, and environmental awareness."
        },
        {
          key: "4",
          color: "orange",
          content: "Orange color is often used to indicate warmth, energy, and creativity."
        }
      ]}
    />
  )
}`,
      tscode: `import { Timeline } from "sud-ui";
import React from "react";

export default function App(): React.ReactElement {
  return (
    <Timeline
      mode="alternate"
      items={[
        {
          key: "1",
          color: "blue",
          content: "Blue represents trust, loyalty, and stability in design systems."
        },
        {
          key: "2",
          color: "volcano",
          content: "Volcano color is often used to indicate warnings or important alerts."
        },
        {
          key: "3",
          color: "forest",
          content: "Forest green symbolizes growth, harmony, and environmental awareness."
        },
        {
          key: "4",
          color: "orange",
          content: "Orange color is often used to indicate warmth, energy, and creativity."
        }
      ]}
    />
  )
}`
    }
  ];

  const howToUseTableData = [
    {
      key: "items",
      name: "items",
      description:
        lang === "ko" ? "타임라인 아이템 배열" : "Timeline items array",
      type: "TimelineItem[]",
      default: "[]"
    },
    {
      key: "mode",
      name: "mode",
      description: lang === "ko" ? "타임라인 모드" : "Timeline mode",
      type: <>{tagRender(["left", "right", "alternate"])}</>,
      default: <Tag>left</Tag>
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
      description: lang === "ko" ? "추가 스타일" : "Additional style",
      type: "CSSProperties",
      default: "{}"
    }
  ];

  const groupTableData = [
    {
      key: "key",
      name: "key",
      description:
        lang === "ko" ? "아이템의 고유 키" : "Unique key of the item",
      type: "string | number",
      default: "-"
    },
    {
      key: "label",
      name: "label",
      description: lang === "ko" ? "아이템 레이블" : "Item label",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "content",
      name: "content",
      description: lang === "ko" ? "아이템 내용" : "Item content",
      type: "ReactNode | ReactNode[]",
      default: "-"
    },
    {
      key: "dot",
      name: "dot",
      description: lang === "ko" ? "아이템 도트 아이콘" : "Item dot icon",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "color",
      name: "color",
      description:
        lang === "ko"
          ? "아이템 색상(palette값 또는 HEX code)"
          : "Item color (palette value or HEX code)",
      type: "string",
      default: "cerulean"
    },
    {
      key: "className",
      name: "className",
      description: lang === "ko" ? "아이템 클래스명" : "Item class name",
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
        howToUseTableData,
        groupTableData,
        group: "TimelineItem"
      }}
      grid={true}
      isMobile={isMobile}
    />
  );
}
