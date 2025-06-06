"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Button, Div, Modal, Tag, Typography } from "sud-ui";
import { useState } from "react";
import { useLang } from "../../_lib/context/langContext";
import {
  borderTypeTags,
  defaultColorTypeTags,
  shadowTypeTags,
  shapeTypeTags
} from "../../_lib/components/common/defaultType";

export default function ModalPage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();
  const name = "Modal";
  const description =
    lang === "ko" ? (
      <>가장 상단에 표시되는 모달 컴포넌트입니다.</>
    ) : (
      <>A component that appears at the top of the screen.</>
    );

  const IMPORT_COMMAND = "import { Modal } from 'sud-ui';";

  const whenToUse =
    lang === "ko"
      ? [
          "새로운 페이지로 넘어가지 않고 사용자가 상호작용해야하는 경우",
          "현재 페이지 위에 새로운 콘텐츠를 표시할 때",
          "확인 대화 상자 또는 경고 메시지를 표시할 때"
        ]
      : [
          "When you need to display content without navigating to a new page and the user needs to interact with it.",
          "When displaying new content on top of the current page.",
          "When displaying a confirmation dialog or warning message."
        ];

  const [openBasic, setOpenBasic] = useState(false);
  const [openWidth, setOpenWidth] = useState(false);
  const [openShape, setOpenShape] = useState(false);
  const [openCustom, setOpenCustom] = useState(false);

  const examples = [
    {
      title: "Basic Usage",
      render: (
        <div>
          <Button colorType="primary" onClick={() => setOpenBasic(true)}>
            Open Modal
          </Button>
          <Modal
            open={openBasic}
            onClose={() => setOpenBasic(false)}
            title={"Modal"}
          >
            <div>Modal Content</div>
          </Modal>
        </div>
      ),
      description: lang === "ko" ? "기본적인 사용방법입니다." : "Basic usage.",
      jscode: `import { useState } from "react";
import { Modal, Button } from "sud-ui";

export default function Example() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button colorType="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Modal"
      >
        <div>Modal Content</div>
      </Modal>
    </div>
  );
}`,
      tscode: `import { useState } from "react";
import { Modal, Button } from "sud-ui";

export default function Example() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <Button colorType="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Modal"
      >
        <div>Modal Content</div>
      </Modal>
    </div>
  );
}`
    },
    {
      title: "With Footer",
      description:
        lang === "ko"
          ? "모달의 하단에 푸터를 표시할 수 있습니다."
          : "You can display a footer at the bottom of the modal.",
      render: (
        <div>
          <Button colorType="primary" onClick={() => setOpenWidth(true)}>
            Open Modal
          </Button>
          <Modal
            open={openWidth}
            onClose={() => setOpenWidth(false)}
            title={"Modal"}
            footer={
              <div className="flex gap-10 item-cen jus-cen">
                <Button
                  className="w-px-90"
                  colorType="primary"
                  size="md"
                  onClick={() => setOpenWidth(false)}
                >
                  Ok
                </Button>
                <Button
                  className="w-px-90"
                  colorType="danger"
                  size="md"
                  onClick={() => setOpenWidth(false)}
                >
                  Cancel
                </Button>
              </div>
            }
          >
            <div>With Footer Modal</div>
          </Modal>
        </div>
      ),
      jscode: `import { useState } from "react";
import { Modal, Button } from "sud-ui";

export default function Example() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button colorType="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Modal"
        footer={
          <div className="flex gap-10 item-cen jus-cen">
            <Button
              className="w-px-90"
              colorType="primary"
              size="md"
              onClick={() => setOpen(false)}
            >
              Ok
            </Button>
            <Button
              className="w-px-90"
              colorType="danger"
              size="md"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </div>
        }
      >
        <div>With Footer Modal</div>
      </Modal>
    </div>
  );
}`,
      tscode: `import { useState } from "react";
import { Modal, Button } from "sud-ui";

export default function Example() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <Button colorType="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Modal"
        footer={
          <div className="flex gap-10 item-cen jus-cen">
            <Button
              className="w-px-90"
              colorType="primary"
              size="md"
              onClick={() => setOpen(false)}
            >
              Ok
            </Button>
            <Button
              className="w-px-90"
              colorType="danger"
              size="md"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </div>
        }
      >
        <div>With Footer Modal</div>
      </Modal>
    </div>
  );
}`
    },
    {
      title: "Use Divider",
      render: (
        <div>
          <Button colorType="primary" onClick={() => setOpenShape(true)}>
            Open Modal
          </Button>
          <Modal
            open={openShape}
            onClose={() => setOpenShape(false)}
            title={"Modal"}
            divider={true}
            footer={
              <div className="flex gap-10 item-cen jus-cen">
                <Button
                  colorType="primary"
                  size="md"
                  onClick={() => setOpenShape(false)}
                >
                  Ok
                </Button>
              </div>
            }
          >
            <div>
              <Typography as="h2" size="lg">
                Use Divider Modal
              </Typography>
              <Typography as="p" size="md">
                With Title && Footer
              </Typography>
            </div>
          </Modal>
        </div>
      ),
      description:
        lang === "ko"
          ? "타이틀과 푸터 사이에 구분선을 표시할 수 있습니다."
          : "You can display a divider between the title and footer.",
      jscode: `import { useState } from "react";
import { Modal, Button, Typography } from "sud-ui";

export default function Example() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button colorType="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Modal"
        divider={true}
        footer={
          <div className="flex gap-10 item-cen jus-cen">
            <Button
              colorType="primary"
              size="md"
              onClick={() => setOpen(false)}
            >
              Ok
            </Button>
          </div>
        }
      >
        <div>
          <Typography as="h2" size="lg">
            Use Divider Modal
          </Typography>
          <Typography as="p" size="md">
            With Title && Footer
          </Typography>
        </div>
      </Modal>
    </div>
  );
}`,
      tscode: `import { useState } from "react";
import { Modal, Button, Typography } from "sud-ui";

export default function Example() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <Button colorType="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Modal"
        divider={true}
        footer={
          <div className="flex gap-10 item-cen jus-cen">
            <Button
              colorType="primary"
              size="md"
              onClick={() => setOpen(false)}
            >
              Ok
            </Button>
          </div>
        }
      >
        <div>
          <Typography as="h2" size="lg">
            Use Divider Modal
          </Typography>
          <Typography as="p" size="md">
            With Title && Footer
          </Typography>
        </div>
      </Modal>
    </div>
  );
}`
    },
    {
      title: "Custom Modal",
      description:
        lang === "ko"
          ? "모달의 색상, 테두리, 모서리, 그림자 등을 커스텀할 수 있습니다."
          : "You can customize the color, border, shape, shadow, etc. of the modal.",
      render: (
        <div>
          <Button colorType="primary" onClick={() => setOpenCustom(true)}>
            Open Modal
          </Button>
          <Modal
            open={openCustom}
            onClose={() => setOpenCustom(false)}
            colorType="mint"
            color="navy-7"
            title={"Custom Modal"}
            divider={true}
            dividerColor="gold-1"
            borderType="dashed"
            borderWeight={3}
            shape="square"
            footer={
              <div className="flex gap-10 item-cen jus-cen">
                <Button
                  colorType="forest"
                  size="md"
                  onClick={() => setOpenCustom(false)}
                >
                  Ok
                </Button>
              </div>
            }
          >
            <Div color="cool-gray-8">
              <Typography as="h2">Custom Modal</Typography>
              <Typography as="p">With Title && Footer</Typography>
            </Div>
          </Modal>
        </div>
      ),
      jscode: `import { useState } from "react";
import { Modal, Button, Typography, Div } from "sud-ui";

export default function Example() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button colorType="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        colorType="mint"
        color="navy-7"
        title="Custom Modal"
        divider={true}
        dividerColor="gold-1"
        borderType="dashed"
        borderWeight={3}
        shape="square"
        footer={
          <div className="flex gap-10 item-cen jus-cen">
            <Button
              colorType="forest"
              size="md"
              onClick={() => setOpen(false)}
            >
              Ok
            </Button>
          </div>
        }
      >
        <Div color="cool-gray-8">
          <Typography as="h2">Custom Modal</Typography>
          <Typography as="p">With Title && Footer</Typography>
        </Div>
      </Modal>
    </div>
  );
}`,
      tscode: `import { useState } from "react";
import { Modal, Button, Typography, Div } from "sud-ui";

export default function Example() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <Button colorType="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        colorType="mint"
        color="navy-7"
        title="Custom Modal"
        divider={true}
        dividerColor="gold-1"
        borderType="dashed"
        borderWeight={3}
        shape="square"
        footer={
          <div className="flex gap-10 item-cen jus-cen">
            <Button
              colorType="forest"
              size="md"
              onClick={() => setOpen(false)}
            >
              Ok
            </Button>
          </div>
        }
      >
        <Div color="cool-gray-8">
          <Typography as="h2">Custom Modal</Typography>
          <Typography as="p">With Title && Footer</Typography>
        </Div>
      </Modal>
    </div>
  );
}`
    }
  ];

  const howToUseTableData = [
    {
      key: "open",
      name: "open",
      description:
        lang === "ko"
          ? "모달의 열림/닫힘 상태"
          : "The open/close state of the modal",
      type: "boolean",
      default: "false"
    },
    {
      key: "onClose",
      name: "onClose",
      description:
        lang === "ko"
          ? "모달을 닫는 콜백 함수"
          : "The callback function to close the modal",
      type: "() => void",
      default: "-"
    },
    {
      key: "onEsc",
      name: "onEsc",
      description:
        lang === "ko"
          ? "ESC 키로 모달 닫기 활성화 여부"
          : "Whether to enable closing the modal with ESC key",
      type: "boolean",
      default: "true"
    },
    {
      key: "title",
      name: "title",
      description:
        lang === "ko"
          ? "모달 상단에 표시되는 제목"
          : "The title displayed at the top of the modal",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "children",
      name: "children",
      description:
        lang === "ko"
          ? "모달 내부에 표시할 내용"
          : "The content to display inside the modal",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "footer",
      name: "footer",
      description:
        lang === "ko"
          ? "모달 하단에 표시할 내용"
          : "The content to display at the bottom of the modal",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "colorType",
      name: "colorType",
      description: lang === "ko" ? "색상 타입" : "The color type",
      type: <>{defaultColorTypeTags}</>,
      default: <Tag>default</Tag>
    },
    {
      key: "background",
      name: "background",
      description:
        lang === "ko"
          ? "모달 배경색(palette값 또는 HEX code)"
          : "The background color of the modal (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "color",
      name: "color",
      description:
        lang === "ko"
          ? "모달 텍스트 색상(palette값 또는 HEX code)"
          : "The text color of the modal (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "border",
      name: "border",
      description:
        lang === "ko" ? "테두리 표시 여부" : "Whether to display a border",
      type: "boolean",
      default: "true"
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
      key: "borderType",
      name: "borderType",
      description: lang === "ko" ? "테두리 스타일" : "The border style",
      type: <>{borderTypeTags}</>,
      default: <Tag>solid</Tag>
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
      type: <>{shapeTypeTags}</>,
      default: <Tag>rounded</Tag>
    },
    {
      key: "shadow",
      name: "shadow",
      description: lang === "ko" ? "그림자 크기" : "The size of the shadow",
      type: <>{shadowTypeTags}</>,
      default: <Tag>lg</Tag>
    },
    {
      key: "width",
      name: "width",
      description:
        lang === "ko"
          ? "모달의 너비 (px 또는 %)"
          : "The width of the modal (px or %)",
      type: "number | string",
      default: "480"
    },
    {
      key: "height",
      name: "height",
      description:
        lang === "ko"
          ? "모달의 높이 (px 또는 %)"
          : "The height of the modal (px or %)",
      type: "number | string",
      default: "-"
    },
    {
      key: "divider",
      name: "divider",
      description:
        lang === "ko"
          ? "타이틀/푸터 구분선 표시 여부"
          : "Whether to display a divider between the title/footer",
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
      type: "React.CSSProperties",
      default: "{}"
    },
    {
      key: "ariaLabel",
      name: "ariaLabel",
      description: lang === "ko" ? "접근성 레이블" : "Accessibility label",
      type: "string",
      default: "-"
    },
    {
      key: "ariaDescribedby",
      name: "ariaDescribedby",
      description:
        lang === "ko" ? "접근성 설명 ID" : "Accessibility description ID",
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
