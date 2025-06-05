"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { useLang } from "../../_lib/context/langContext";
import { Card, Image, Upload, Tag, Typography, toast } from "sud-ui";
import { useState } from "react";
import { Upload as UploadIcon } from "sud-icons";
import {
  borderTypeTags,
  shadowTypeTags,
  shapeTypeTags
} from "../../_lib/components/common/defaultType";
export default function ImagePage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();

  const name = "Image";
  const description = (
    <>
      {lang === "ko"
        ? "이미지를 표시할 수 있는 컴포넌트입니다."
        : "The component for displaying images."}
    </>
  );

  const IMPORT_COMMAND = "import { Image } from 'sud-ui';";

  const whenToUse = [
    lang === "ko" ? "이미지를 표시할 때" : "When displaying images."
  ];

  const [image, setImage] = useState(
    "https://avatars.githubusercontent.com/u/139225353?v=4"
  );

  const examples = [
    {
      title: "Basic Usage",
      description: lang === "ko" ? "기본적인 사용 방법입니다." : "Basic usage.",
      render: (
        <Image src="https://avatars.githubusercontent.com/u/139225353?v=4" />
      ),
      jscode: `import { Image } from "sud-ui";

export default function App() {
  return (
    <div>
      <Image src="https://avatars.githubusercontent.com/u/139225353?v=4" />
    </div>
  );
}`,
      tscode: `import { Image } from "sud-ui";
import type { ReactNode } from "react";

export default function App(): ReactNode {
  return (
    <div>
      <Image src="https://avatars.githubusercontent.com/u/139225353?v=4" />
    </div>
  );
}`
    },
    {
      title: "Mask Customization",
      description:
        lang === "ko"
          ? "마스크 커스터마이징 예제입니다."
          : "Mask customization example.",
      render: (
        <Upload
          ext={["jpg", "png", "gif", "jpeg"]}
          onChange={(file) => {
            setImage(URL.createObjectURL(file));
          }}
          showUploadList={false}
        >
          <Image
            src={image}
            shape="circle"
            mask={
              <div className="flex flex-col item-cen jus-cen gap-10">
                <UploadIcon size="30" />
                <Typography>Upload</Typography>
              </div>
            }
            preview={false}
          />
        </Upload>
      ),
      jscode: `import { Image, Upload, Typography } from "sud-ui";
import { Upload as UploadIcon } from "sud-icons";
import { useState } from "react";

export default function App() {
  const [image, setImage] = useState("https://example.com/image.jpg");

  return (
    <div>
      <Upload
        ext={["jpg", "png", "gif", "jpeg"]}
        onChange={(file) => {
          setImage(URL.createObjectURL(file));
        }}
        showUploadList={false}
      >
        <Image
          src={image}
          shape="circle"
          mask={
            <div className="flex flex-col item-cen jus-cen gap-10">
              <UploadIcon size="30" />
              <Typography>Upload</Typography>
            </div>
          }
          preview={false}
        />
      </Upload>
    </div>
  );
}`,
      tscode: `import { Image, Upload, Typography } from "sud-ui";
import { Upload as UploadIcon } from "sud-icons";
import { useState } from "react";
import type { ReactNode } from "react";

export default function App(): ReactNode {
  const [image, setImage] = useState("https://example.com/image.jpg");

  return (
    <div>
      <Upload
        ext={["jpg", "png", "gif", "jpeg"]}
        onChange={(file) => {
          setImage(URL.createObjectURL(file));
        }}
        showUploadList={false}
      >
        <Image
          src={image}
          shape="circle"
          mask={
            <div className="flex flex-col item-cen jus-cen gap-10">
              <UploadIcon size="30" />
              <Typography>Upload</Typography>
            </div>
          }
          preview={false}
        />
      </Upload>
    </div>
  );
}`
    },
    {
      title: "OnClick",
      description:
        lang === "ko" ? "클릭 이벤트 예제입니다." : "Click event example.",
      render: (
        <Image
          src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHcLiw%2FbtslpXo69qa%2F6BO7EpmX3dKHtKDbGHb680%2Fimg.jpg"
          preview={false}
          mask={null}
          onClick={() => {
            toast.success("Hello Pikachu!");
          }}
          ratio="1/1"
        />
      ),
      jscode: `import { Image, toast } from "sud-ui";

export default function App() {
  return (
    <div>
      <Image
        src="https://example.com/pikachu.jpg"
        preview={false}
        mask={null}
        onClick={() => {
          toast.success("Hello Pikachu!");
        }}
        ratio="1/1"
      />
    </div>
  );
}`,
      tscode: `import { Image, toast } from "sud-ui";
import type { ReactNode } from "react";

export default function App(): ReactNode {
  return (
    <div>
      <Image
        src="https://example.com/pikachu.jpg"
        preview={false}
        mask={null}
        onClick={() => {
          toast.success("Hello Pikachu!");
        }}
        ratio="1/1"
      />
    </div>
  );
}`
    },
    {
      title: "Customize",
      description:
        lang === "ko" ? "커스터마이징 예제입니다." : "Customize example.",
      render: (
        <Image
          src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fp3c77%2FbtrquiJjf7h%2FTLD6iZKikP4puk8HbcoPn1%2Fimg.jpg"
          width="100%"
          shadow="md"
          shape="rounded"
          borderColor="navy"
          borderType="dashed"
          borderWeight="3"
        />
      ),
      jscode: `import { Image } from "sud-ui";

export default function App() {
  return (
    <div>
      <Image
        src="https://example.com/image.jpg"
        width="100%"
        shadow="md"
        shape="rounded"
        borderColor="navy"
        borderType="dashed"
        borderWeight="3"
      />
    </div>
  );
}`,
      tscode: `import { Image } from "sud-ui";
import type { ReactNode } from "react";

export default function App(): ReactNode {
  return (
    <div>
      <Image
        src="https://example.com/image.jpg"
        width="100%"
        shadow="md"
        shape="rounded"
        borderColor="navy"
        borderType="dashed"
        borderWeight="3"
      />
    </div>
  );
}`
    }
  ];

  const howToUseTableData = [
    {
      key: "src",
      name: "src",
      description: lang === "ko" ? "이미지 소스 URL" : "Image source URL",
      type: "string",
      default: "-"
    },
    {
      key: "alt",
      name: "alt",
      description:
        lang === "ko" ? "이미지 대체 텍스트" : "Alternative text for the image",
      type: "string",
      default: "-"
    },
    {
      key: "width",
      name: "width",
      description: lang === "ko" ? "이미지 너비" : "Width of the image",
      type: "number | string",
      default: "200"
    },
    {
      key: "height",
      name: "height",
      description: lang === "ko" ? "이미지 높이" : "Height of the image",
      type: "number | string",
      default: "-"
    },
    {
      key: "loading",
      name: "loading",
      description:
        lang === "ko" ? "이미지 로딩 방식" : "Image loading behavior",
      type: "string",
      default: '"lazy"'
    },
    {
      key: "mask",
      name: "mask",
      description:
        lang === "ko" ? "호버 시 표시될 마스크" : "Mask to show on hover",
      type: "ReactNode",
      default: "기본 마스크 (PhotoFill 아이콘 + '미리보기' 텍스트)"
    },
    {
      key: "preview",
      name: "preview",
      description:
        lang === "ko"
          ? "미리보기 기능 활성화 여부"
          : "Whether to enable preview functionality",
      type: "boolean",
      default: "true"
    },
    {
      key: "onClick",
      name: "onClick",
      description: lang === "ko" ? "클릭 이벤트 핸들러" : "Click event handler",
      type: "function",
      default: "-"
    },
    {
      key: "ratio",
      name: "ratio",
      description:
        lang === "ko"
          ? "이미지 비율 (예: '16/9')"
          : "Image ratio (e.g., '16/9')",
      type: "string",
      default: "-"
    },
    {
      key: "shape",
      name: "shape",
      description: lang === "ko" ? "이미지 모양" : "Shape of the image",
      type: <>{shapeTypeTags}</>,
      default: <Tag>square</Tag>
    },
    {
      key: "shadow",
      name: "shadow",
      description: lang === "ko" ? "그림자 스타일" : "Shadow style",
      type: <>{shadowTypeTags}</>,
      default: <Tag>none</Tag>
    },
    {
      key: "borderColor",
      name: "borderColor",
      description:
        lang === "ko"
          ? "테두리 색상(palette값 또는 HEX code)"
          : "Border color (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "borderType",
      name: "borderType",
      description: lang === "ko" ? "테두리 스타일" : "Border style",
      type: <>{borderTypeTags}</>,
      default: <Tag>solid</Tag>
    },
    {
      key: "borderWeight",
      name: "borderWeight",
      description: lang === "ko" ? "테두리 두께" : "Border weight",
      type: "string",
      default: '"1"'
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
      description: lang === "ko" ? "추가 스타일" : "Additional styles",
      type: "CSSProperties",
      default: "{}"
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
