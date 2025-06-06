"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Button, toast, Tag } from "sud-ui";
import { useLang } from "../../_lib/context/langContext";
import { tagRender } from "../../_lib/components/common/render";
import { LogoSud } from "sud-icons";

export default function ToastPage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();
  const name = "Toast";
  const description =
    lang === "ko" ? (
      <>토스트 메시지 컴포넌트입니다.</>
    ) : (
      <>A component that displays toast messages.</>
    );

  const IMPORT_COMMAND = "import { Notification } from 'sud-ui';";

  const whenToUse =
    lang === "ko"
      ? ["성공, 오류 등의 피드백을 표시할 때", "가벼운 메시지를 표시할 때"]
      : [
          "When you need to display content without navigating to a new page and the user needs to interact with it.",
          "When displaying new content on top of the current page.",
          "When displaying a confirmation dialog or warning message."
        ];

  const handleBasicOpen = () => {
    toast.success("This is a toast message");
  };
  const type = ["success", "danger", "info", "warning"];
  const handleTypeOpen = (type) => () => {
    toast[type](`This is a ${type} message`);
  };

  const handleDurationOpen = () => {
    toast.success("This Message will be shown for 1 seconds", {
      duration: 1000
    });
  };

  const handleIconOpen = () => {
    toast.success("Soon UI Design Library", {
      icon: <LogoSud />
    });
  };

  const preset = {
    description:
      lang === "ko"
        ? 'Toast를 사용하기 위해서는 Root Layout에 "<ToastRoot />"를 포함해야 합니다.'
        : 'To use Toast, you need to include "<ToastRoot />" in your Root Layout.',
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

# 2. Adding Only ToastRoot
"use client";

import { ToastRoot } from "sud-ui";

export default function ClientLayout({ children }) {
  return (
    <>
      {children}
      <ToastRoot />
    </>
  );
}`
  };

  const examples = [
    {
      title: "Basic Usage",
      render: <Button onClick={handleBasicOpen}>Open Basic Toast</Button>,
      description: lang === "ko" ? "기본적인 사용방법입니다." : "Basic usage.",
      jscode: `import { toast, Button } from "sud-ui";

export default function Example() {
  const handleOpen = () => {
    toast.success("This is a toast message");
  };

  return (
    <Button onClick={handleOpen}>
      Open Basic Toast
    </Button>        
  );
}`,
      tscode: `import { toast, Button } from "sud-ui";
import type { ToastType } from "sud-ui";

export default function Example() {
  const handleOpen = () => {
    toast.success("This is a toast message");
  };

  return (
    <Button onClick={handleOpen}>
      Open Basic Toast
    </Button>
  );
}`
    },
    {
      title: "Various Types",
      render: (
        <div className="flex flex-wra gap-10">
          {type.map((t) => (
            <Button key={t} onClick={handleTypeOpen(t)}>
              {t}
            </Button>
          ))}
        </div>
      ),
      description:
        lang === "ko"
          ? "다양한 타입의 토스트 메시지를 표시합니다."
          : "Display various types of toast messages.",
      jscode: `import { toast, Button } from "sud-ui";

export default function Example() {
  const type = ["success", "danger", "info", "warning"];

  const handleOpen = (type) => () => {
    toast[type](\`This is a \${type} message\`);
  };

  return (
    <div className="flex flex-wrap gap-10">
      {type.map((t) => (
        <Button key={t} onClick={handleOpen(t)}>
          {t}
        </Button>
      ))}
    </div>
  );
}`,
      tscode: `import { toast, Button } from "sud-ui";
import type { ToastType } from "sud-ui";

export default function Example() {
  const type: ToastType[] = ["success", "danger", "info", "warning"];

  const handleOpen = (type: ToastType) => () => {
    toast[type](\`This is a \${type} message\`);
  };

  return (
    <div className="flex flex-wrap gap-10">
      {type.map((t) => (
        <Button key={t} onClick={handleOpen(t)}>
          {t}
        </Button>
      ))}
    </div>
  );
}`
    },
    {
      title: "Duration",
      render: <Button onClick={handleDurationOpen}>Duration 1 seconds</Button>,
      description:
        lang === "ko"
          ? "지속 시간을 설정합니다."
          : "Set the duration of the toast message.",
      jscode: `import { toast, Button } from "sud-ui";

export default function Example() {
  const handleOpen = () => {
    toast.success("This Message will be shown for 1 seconds", {
      duration: 1000
    });
  };

  return (
    <Button onClick={handleOpen}>
      Duration 1 seconds
    </Button>
  );
}`,
      tscode: `import { toast, Button } from "sud-ui";
import type { ToastOptions } from "sud-ui";

export default function Example() {
  const handleOpen = () => {
    const options: ToastOptions = {
      duration: 1000
    };
    toast.success("This Message will be shown for 1 seconds", options);
  };

  return (
    <Button onClick={handleOpen}>
      Duration 1 seconds
    </Button>
  );
}`
    },
    {
      title: "Icon Custom",
      render: <Button onClick={handleIconOpen}>Icon Custom</Button>,
      description:
        lang === "ko"
          ? "커스텀 아이콘을 설정합니다."
          : "Set the custom icon of the toast message.",
      jscode: `import { toast, Button } from "sud-ui";
import { LogoSud } from "sud-icons";

export default function Example() {
  const handleOpen = () => {
    toast.success("Soon UI Design Library", {
      icon: <LogoSud />
    });
  };

  return (
    <Button onClick={handleOpen}>
      Icon Custom
    </Button>
  );
}`,
      tscode: `import { toast, Button } from "sud-ui";
import type { ToastOptions } from "sud-ui";
import { LogoSud } from "sud-icons";

export default function Example() {
  const handleOpen = () => {
    const options: ToastOptions = {
      icon: <LogoSud />
    };
    toast.success("Soon UI Design Library", options);
  };

  return (
    <Button onClick={handleOpen}>
      Icon Custom
    </Button>
  );
}`
    }
  ];

  const howToUseTableData = [
    {
      key: "type",
      name: "type",
      description: lang === "ko" ? "토스트 타입" : "The type of toast",
      type: tagRender(["success", "danger", "info", "warning"]),
      default: <Tag>"info"</Tag>
    },
    {
      key: "message",
      name: "message",
      description: lang === "ko" ? "토스트 메시지" : "The message of toast",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "duration",
      name: "duration",
      description:
        lang === "ko"
          ? "토스트 지속 시간 (밀리초)"
          : "Duration of toast in milliseconds",
      type: "number",
      default: "3000"
    },
    {
      key: "icon",
      name: "icon",
      description:
        lang === "ko"
          ? "커스텀 아이콘 (기본 아이콘 대신 사용)"
          : "Custom icon (replaces default icon)",
      type: "ReactNode",
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
