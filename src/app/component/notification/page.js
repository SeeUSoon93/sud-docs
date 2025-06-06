"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import {
  Button,
  Div,
  Input,
  Modal,
  notification,
  Tag,
  Typography
} from "sud-ui";
import { useState } from "react";
import { useLang } from "../../_lib/context/langContext";
import {
  borderTypeTags,
  defaultColorTypeTags,
  shadowTypeTags,
  shapeTypeTags
} from "../../_lib/components/common/defaultType";
import { tagRender } from "../../_lib/components/common/render";
import { TriangleDown, TriangleUp } from "sud-icons";

export default function NotificationPage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();
  const name = "Notification";
  const description =
    lang === "ko" ? (
      <>알림 컴포넌트입니다.</>
    ) : (
      <>A component that displays notifications.</>
    );

  const IMPORT_COMMAND = "import { Notification } from 'sud-ui';";

  const whenToUse =
    lang === "ko"
      ? [
          "메세지보다 복잡한 알림을 표시할 때",
          "애플리케이션에서 알림을 푸시할 때"
        ]
      : [
          "When you need to display content without navigating to a new page and the user needs to interact with it.",
          "When displaying new content on top of the current page.",
          "When displaying a confirmation dialog or warning message."
        ];

  const handleBasicOpen = () => {
    notification.open({
      title: "Notification",
      message: "This is a notification"
    });
  };

  const handleFooterOpen = () => {
    notification.open({
      title: "Notification",
      message: "This is a notification",
      footer: <Button colorType="primary">Click me</Button>
    });
  };

  const handleDurationOpen = () => {
    notification.open({
      title: "Notification",
      message: "This is a notification",
      duration: 500
    });
  };

  const handlePositionOpen = (position) => {
    notification.open({
      title: "Notification",
      message: "This is a notification",
      position
    });
  };

  const [color, setColor] = useState("");

  const handleStyleCustomizationOpen = () => {
    notification.open({
      title: "Notification",
      message: "This is a notification",
      duration: false,
      colorType: color
    });
  };
  const position = [
    {
      title: "Top Left",
      position: "top-left",
      icon: <TriangleUp size="16" style={{ transform: "rotate(-45deg)" }} />
    },
    {
      title: "Top Center",
      position: "top-center",
      icon: <TriangleUp size="16" style={{ transform: "rotate(0deg)" }} />
    },
    {
      title: "Top Right",
      position: "top-right",
      icon: <TriangleUp size="16" style={{ transform: "rotate(45deg)" }} />
    },
    {
      title: "Bottom Left",
      position: "bottom-left",
      icon: <TriangleDown size="16" style={{ transform: "rotate(45deg)" }} />
    },
    {
      title: "Bottom Center",
      position: "bottom-center",
      icon: <TriangleDown size="16" style={{ transform: "rotate(0deg)" }} />
    },
    {
      title: "Bottom Right",
      position: "bottom-right",
      icon: <TriangleDown size="16" style={{ transform: "rotate(-45deg)" }} />
    }
  ];

  const preset = {
    description:
      lang === "ko"
        ? 'Notification을 사용하기 위해서는 Root Layout에 "<NotificationRoot />"를 포함해야 합니다.'
        : 'To use Notification, you need to include "<NotificationRoot />" in your Root Layout.',
    command: `# 1. Using SoonUIDesign Component
## The SoonUIDesign.jsx component file is written as follows.
## You can use theme system, Toast, and Notification all at once without adding them separately.
"use client";

import { ThemeProvider } from "../theme/ThemeContext";
import { ToastRoot } from "./feedback/ToastRoot";
import { NotificationRoot } from "./feedback/NotificationRoot";

export const SoonUIDesign = ({ children, theme, darkTheme, isDarkMode }) => {
  return (
    <ThemeProvider theme={theme} darkTheme={darkTheme} isDarkMode={isDarkMode}>
      {children}
      <ToastRoot />
      <NotificationRoot />
    </ThemeProvider>
  );
};

## Include the SoonUIDesign component in your Root Layout as follows:
"use client";

import { SoonUIDesign } from "sud-ui";

export default function ClientLayout({ children }) {
  return (
    <SoonUIDesign>
      {children}
    </SoonUIDesign>
  );
}

################################################

# 2. Adding Only NotificationRoot
"use client";

import { NotificationRoot } from "sud-ui";

export default function ClientLayout({ children }) {
  return (
    <>
      {children}
      <NotificationRoot />
    </>
  );
}`
  };

  const examples = [
    {
      title: "Basic Usage",
      render: (
        <Button colorType="primary" onClick={handleBasicOpen}>
          Open Basic Notification
        </Button>
      ),
      description: lang === "ko" ? "기본적인 사용방법입니다." : "Basic usage.",
      jscode: `import { notification, Button } from "sud-ui";

export default function Example() {
  const handleOpen = () => {
    notification.open({
      title: "Notification",
      message: "This is a notification"
    });
  };

  return (
    <Button colorType="primary" onClick={handleOpen}>
      Open Notification
    </Button>        
  );
}`,
      tscode: `import { notification, Button } from "sud-ui";
import type { NotificationOptions } from "sud-ui";

export default function Example() {
  const handleOpen = () => {
    const options: NotificationOptions = {
      title: "Notification",
      message: "This is a notification"
    };
    notification.open(options);
  };

  return (
    <Button colorType="primary" onClick={handleOpen}>
      Open Notification
    </Button>
  );
}`
    },
    {
      title: "With Footer",
      description:
        lang === "ko"
          ? "푸터를 포함한 알림입니다."
          : "Notification with footer.",
      render: (
        <Button colorType="primary" onClick={handleFooterOpen}>
          Open Footer Notification
        </Button>
      ),
      jscode: `import { notification, Button } from "sud-ui";

export default function Example() {
  const handleOpen = () => {
    notification.open({
      title: "Notification",
      message: "This is a notification",
      footer: <Button colorType="primary">Click me</Button>
    });
  };

  return (
    <Button colorType="primary" onClick={handleOpen}>
      Open Footer Notification
    </Button>
  );
}`,
      tscode: `import { notification, Button } from "sud-ui";
import type { NotificationOptions } from "sud-ui";

export default function Example() {
  const handleOpen = () => {
    const options: NotificationOptions = {
      title: "Notification",
      message: "This is a notification",
      footer: <Button colorType="primary">Click me</Button>
    };
    notification.open(options);
  };

  return (
    <Button colorType="primary" onClick={handleOpen}>
      Open Footer Notification
    </Button>
  );
}`
    },
    {
      title: "Duration Setting",
      description:
        lang === "ko"
          ? "지속 시간을 설정한 알림입니다."
          : "Notification with duration.",
      render: (
        <div>
          <Button colorType="primary" onClick={handleDurationOpen}>
            Open Duration Notification
          </Button>
        </div>
      ),
      jscode: `import { notification, Button } from "sud-ui";

export default function Example() {
  const handleOpen = () => {
    notification.open({
      title: "Notification",
      message: "This is a notification",
      duration: 500 // 0.5초 후 자동으로 닫힘
    });
  };

  return (
    <Button colorType="primary" onClick={handleOpen}>
      Open Duration Notification
    </Button>
  );
}`,
      tscode: `import { notification, Button } from "sud-ui";
import type { NotificationOptions } from "sud-ui";

export default function Example() {
  const handleOpen = () => {
    const options: NotificationOptions = {
      title: "Notification",
      message: "This is a notification",
      duration: 500 // 0.5초 후 자동으로 닫힘
    };
    notification.open(options);
  };

  return (
    <Button colorType="primary" onClick={handleOpen}>
      Open Duration Notification
    </Button>
  );
}`
    },
    {
      title: "Set Position",
      description:
        lang === "ko"
          ? "위치를 설정한 알림입니다."
          : "Notification with position.",
      render: (
        <div className="grid col-3 gap-20">
          {position.map((item) => (
            <Button
              colorType="primary"
              key={item.position}
              icon={item.icon}
              onClick={() => handlePositionOpen(item.position)}
            >
              {item.title}
            </Button>
          ))}
        </div>
      ),
      jscode: `import { notification, Button } from "sud-ui";
import { TriangleUp, TriangleDown } from "sud-icons";

export default function Example() {
  const position = [
    {
      title: "Top Left",
      position: "top-left",
      icon: <TriangleUp size="16" style={{ transform: "rotate(-45deg)" }} />
    },
    {
      title: "Top Center",
      position: "top-center",
      icon: <TriangleUp size="16" style={{ transform: "rotate(0deg)" }} />
    },
    {
      title: "Top Right",
      position: "top-right",
      icon: <TriangleUp size="16" style={{ transform: "rotate(45deg)" }} />
    },
    {
      title: "Bottom Left",
      position: "bottom-left",
      icon: <TriangleDown size="16" style={{ transform: "rotate(45deg)" }} />
    },
    {
      title: "Bottom Center",
      position: "bottom-center",
      icon: <TriangleDown size="16" style={{ transform: "rotate(0deg)" }} />
    },
    {
      title: "Bottom Right",
      position: "bottom-right",
      icon: <TriangleDown size="16" style={{ transform: "rotate(-45deg)" }} />
    }
  ];

  const handleOpen = (position) => {
    notification.open({
      title: "Notification",
      message: "This is a notification",
      position
    });
  };

  return (
    <div className="grid col-3 gap-20">
      {position.map((item) => (
        <Button
          colorType="primary"
          key={item.position}
          icon={item.icon}
          onClick={() => handleOpen(item.position)}
        >
          {item.title}
        </Button>
      ))}
    </div>
  );
}`,
      tscode: `import { notification, Button } from "sud-ui";
import type { NotificationOptions } from "sud-ui";
import { TriangleUp, TriangleDown } from "sud-icons";

type Position = "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";

interface PositionItem {
  title: string;
  position: Position;
  icon: JSX.Element;
}

export default function Example() {
  const position: PositionItem[] = [
    {
      title: "Top Left",
      position: "top-left",
      icon: <TriangleUp size="16" style={{ transform: "rotate(-45deg)" }} />
    },
    {
      title: "Top Center",
      position: "top-center",
      icon: <TriangleUp size="16" style={{ transform: "rotate(0deg)" }} />
    },
    {
      title: "Top Right",
      position: "top-right",
      icon: <TriangleUp size="16" style={{ transform: "rotate(45deg)" }} />
    },
    {
      title: "Bottom Left",
      position: "bottom-left",
      icon: <TriangleDown size="16" style={{ transform: "rotate(45deg)" }} />
    },
    {
      title: "Bottom Center",
      position: "bottom-center",
      icon: <TriangleDown size="16" style={{ transform: "rotate(0deg)" }} />
    },
    {
      title: "Bottom Right",
      position: "bottom-right",
      icon: <TriangleDown size="16" style={{ transform: "rotate(-45deg)" }} />
    }
  ];

  const handleOpen = (position: Position) => {
    const options: NotificationOptions = {
      title: "Notification",
      message: "This is a notification",
      position
    };
    notification.open(options);
  };

  return (
    <div className="grid col-3 gap-20">
      {position.map((item) => (
        <Button
          colorType="primary"
          key={item.position}
          icon={item.icon}
          onClick={() => handleOpen(item.position)}
        >
          {item.title}
        </Button>
      ))}
    </div>
  );
}`
    },
    {
      title: "Style Customization",
      description:
        lang === "ko"
          ? "스타일을 커스텀할 수 있습니다."
          : "You can customize the style.",
      render: (
        <div className="flex flex-col gap-20">
          <Input
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="Enter color type"
          />
          <div>
            <Button colorType="primary" onClick={handleStyleCustomizationOpen}>
              Open Style Customization Notification
            </Button>
          </div>
        </div>
      ),
      jscode: `import { notification, Button, Input } from "sud-ui";
import { useState } from "react";

export default function Example() {
  const [color, setColor] = useState("");

  const handleOpen = () => {
    notification.open({
      title: "Notification",
      message: "This is a notification",
      duration: false,
      colorType: color
    });
  };

  return (
    <div className="flex flex-col gap-20">
      <Input
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Enter color type"
      />
      <div>
        <Button colorType="primary" onClick={handleOpen}>
          Open Style Customization Notification
        </Button>
      </div>
    </div>
  );
}`,
      tscode: `import { notification, Button, Input } from "sud-ui";
import type { NotificationOptions } from "sud-ui";
import { useState } from "react";

export default function Example() {
  const [color, setColor] = useState<string>("");

  const handleOpen = () => {
    const options: NotificationOptions = {
      title: "Notification",
      message: "This is a notification",
      duration: false,
      colorType: color
    };
    notification.open(options);
  };

  return (
    <div className="flex flex-col gap-20">
      <Input
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Enter color type"
      />
      <div>
        <Button colorType="primary" onClick={handleOpen}>
          Open Style Customization Notification
        </Button>
      </div>
    </div>
  );
}`
    }
  ];

  const howToUseTableData = [
    {
      key: "title",
      name: "title",
      description:
        lang === "ko" ? "알림 제목" : "The title of the notification",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "message",
      name: "message",
      description:
        lang === "ko" ? "알림 메시지" : "The message of the notification",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "footer",
      name: "footer",
      description:
        lang === "ko" ? "알림 푸터" : "The footer of the notification",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "duration",
      name: "duration",
      description:
        lang === "ko"
          ? "알림 지속 시간 (밀리초, false로 설정 시 자동으로 닫히지 않음)"
          : "Duration of the notification in milliseconds (false to prevent auto-close)",
      type: "number | false",
      default: "3000"
    },
    {
      key: "position",
      name: "position",
      description:
        lang === "ko" ? "알림 위치" : "The position of the notification",
      type: tagRender([
        "top-left",
        "top-center",
        "top-right",
        "bottom-left",
        "bottom-center",
        "bottom-right"
      ]),
      default: <Tag>"top-right"</Tag>
    },
    {
      key: "onClose",
      name: "onClose",
      description:
        lang === "ko"
          ? "알림이 닫힐 때 실행될 콜백 함수"
          : "Callback function when notification is closed",
      type: "() => void",
      default: "-"
    },
    {
      key: "width",
      name: "width",
      description:
        lang === "ko" ? "알림 너비" : "The width of the notification",
      type: "number",
      default: "320"
    },
    {
      key: "colorType",
      name: "colorType",
      description: lang === "ko" ? "색상 타입" : "The color type",
      type: defaultColorTypeTags,
      default: <Tag>default</Tag>
    },
    {
      key: "color",
      name: "color",
      description:
        lang === "ko"
          ? "텍스트 색상(palette값 또는 HEX code)"
          : "The text color (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "background",
      name: "background",
      description:
        lang === "ko"
          ? "배경 색상(palette값 또는 HEX code)"
          : "The background color (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "border",
      name: "border",
      description:
        lang === "ko" ? "테두리 표시 여부" : "The display of the border",
      type: "boolean",
      default: "false"
    },
    {
      key: "borderType",
      name: "borderType",
      description: lang === "ko" ? "테두리 스타일" : "The border style",
      type: borderTypeTags,
      default: <Tag>solid</Tag>
    },
    {
      key: "borderColor",
      name: "borderColor",
      description:
        lang === "ko"
          ? "테두리 색상(palette값 또는 HEX code)"
          : "The border color (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "borderWeight",
      name: "borderWeight",
      description: lang === "ko" ? "테두리 두께" : "The border weight",
      type: "number",
      default: "1"
    },
    {
      key: "shape",
      name: "shape",
      description: lang === "ko" ? "모서리 형태" : "The shape of the corners",
      type: shapeTypeTags,
      default: <Tag>rounded</Tag>
    },
    {
      key: "shadow",
      name: "shadow",
      description: lang === "ko" ? "그림자 크기" : "The size of the shadow",
      type: shadowTypeTags,
      default: <Tag>md</Tag>
    }
  ];

  return (
    <Frame
      component={{
        name,
        description,
        IMPORT_COMMAND,
        whenToUse,
        preset,
        examples,
        howToUseTableData
      }}
      grid={true}
      isMobile={isMobile}
      lang={lang}
    />
  );
}
