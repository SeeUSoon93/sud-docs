"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { useLang } from "../../_lib/context/langContext";
import { Card, Radio, Tag, toast } from "sud-ui";
import { tagRender } from "../../_lib/components/common/render";
import {
  borderTypeTags,
  shadowTypeTags,
  shapeTypeTags,
  tagColorTypeTags
} from "../../_lib/components/common/defaultType";
import { Close, LogoAdobeIllustrator, LogoAdobePhotoshop } from "sud-icons";
import { useState } from "react";

export default function TagPage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();

  const name = "Tag";
  const description = (
    <>
      {lang === "ko"
        ? "표시와 분류를 위한 태그 컴포넌트입니다."
        : "The component for displaying and classifying."}
    </>
  );

  const IMPORT_COMMAND = "import { Tag } from 'sud-ui';";

  const whenToUse =
    lang === "ko"
      ? ["속성별로 태그를 지정할 때 사용합니다.", "분류할 때 사용합니다."]
      : ["When specifying tags by property.", "When classifying."];

  const [shape, setShape] = useState("rounded");
  const shapeOptions = [
    { label: "rounded", value: "rounded" },
    { label: "square", value: "square" },
    { label: "circle", value: "circle" },
    { label: "capsule", value: "capsule" }
  ];
  const [shadow, setShadow] = useState("none");
  const shadowOptions = [
    { label: "none", value: "none" },
    { label: "sm", value: "sm" },
    { label: "md", value: "md" },
    { label: "lg", value: "lg" }
  ];
  const [size, setSize] = useState("sm");
  const sizeOptions = [
    { label: "sm", value: "sm" },
    { label: "md", value: "md" },
    { label: "lg", value: "lg" }
  ];

  const examples = [
    {
      title: "Basic Usage",
      description: lang === "ko" ? "기본적인 사용 방법입니다." : "Basic usage.",
      render: (
        <div className="flex flex-wra gap-10">
          <Tag>default</Tag>
        </div>
      ),
      jscode: `import { Tag } from "sud-ui";

export default function App() {
  return (
    <div>
      <Tag>default</Tag>
    </div>   
  )
}`,
      tscode: `import { Tag } from "sud-ui";
import React from "react";

export default function App(): React.ReactElement {
  return (
    <div>
      <Tag>default</Tag>
    </div>   
  )
}`
    },
    {
      title: "Color Type",
      description:
        lang === "ko"
          ? "태그 색상 타입을 지정합니다."
          : "Specify the tag color type.",
      render: (
        <div className="flex flex-wra gap-10">
          <Tag colorType="sky">sky</Tag>
          <Tag colorType="blue">blue</Tag>
          <Tag colorType="forest">forest</Tag>
          <Tag colorType="gold">gold</Tag>
          <Tag colorType="red">red</Tag>
        </div>
      ),
      jscode: `import { Tag } from "sud-ui";

export default function App() {
  return (
    <div>
      <Tag colorType="sky">sky</Tag>
      <Tag colorType="blue">blue</Tag>
      <Tag colorType="forest">forest</Tag>
      <Tag colorType="gold">gold</Tag>
      <Tag colorType="red">red</Tag>
    </div>   
  )
}`,
      tscode: `import { Tag } from "sud-ui";
import React from "react";

export default function App(): React.ReactElement {
  return (
    <div>
      <Tag colorType="sky">sky</Tag>
      <Tag colorType="blue">blue</Tag>
      <Tag colorType="forest">forest</Tag>
      <Tag colorType="gold">gold</Tag>
      <Tag colorType="red">red</Tag>
    </div>   
  )
}`
    },
    {
      title: "Custom Color",
      description:
        lang === "ko"
          ? "태그 색상을 직접 지정합니다."
          : "Specify the tag color directly.",
      render: (
        <div className="flex flex-wra gap-10">
          <Tag background="blue-7" color="gold-3">
            blue / gold
          </Tag>
          <Tag background="volcano-7" color="forest-2">
            volcano / forest
          </Tag>
        </div>
      ),
      jscode: `import { Tag } from "sud-ui";

export default function App() {
  return (
    <div>
      <Tag background="blue-7" color="gold-3">
        blue / gold
      </Tag>
      <Tag background="volcano-7" color="forest-2">
        volcano / forest
      </Tag>
    </div>   
  )
}`,
      tscode: `import { Tag } from "sud-ui";
import React from "react";

export default function App(): React.ReactElement {
  return (
    <div>
      <Tag background="blue-7" color="gold-3">
        blue / gold
      </Tag>
      <Tag background="volcano-7" color="forest-2">
        volcano / forest
      </Tag>
    </div>   
  )
}`
    },
    {
      title: "Custom Border Style",
      description:
        lang === "ko"
          ? "태그 테두리 스타일을 직접 지정합니다."
          : "Specify the tag border style directly.",
      render: (
        <div className="flex flex-wra gap-10">
          <Tag borderType="dashed" borderWeight="2" borderColor="blue-3">
            dashed
          </Tag>
          <Tag borderType="dotted" borderWeight="3" borderColor="cool-gray-5">
            dotted
          </Tag>
        </div>
      ),
      jscode: `import { Tag } from "sud-ui";

export default function App() {
  return (
    <div>
      <Tag borderType="dashed" borderWeight="2" borderColor="blue-3">
        dashed
      </Tag>
      <Tag borderType="dotted" borderWeight="3" borderColor="cool-gray-5">
        dotted
      </Tag>
    </div>   
  )
}`,
      tscode: `import { Tag } from "sud-ui";
import React from "react";

export default function App(): React.ReactElement {
  return (
    <div>
      <Tag borderType="dashed" borderWeight="2" borderColor="blue-3">
        dashed
      </Tag>
      <Tag borderType="dotted" borderWeight="3" borderColor="cool-gray-5">
        dotted
      </Tag>
    </div>   
  )
}`
    },
    {
      title: "Closeable",
      description:
        lang === "ko"
          ? "태그 닫기 버튼을 표시합니다."
          : "Display the tag close button.",
      render: (
        <Tag
          closeable
          onClose={() => {
            toast.success("closed");
          }}
        >
          closeable
        </Tag>
      ),
      jscode: `import { Tag, toast } from "sud-ui";

export default function App() {
  return (
    <Tag
      closeable
      onClose={() => {
        toast.success("closed");
      }}
    >
      closeable
    </Tag>
  )
}`,
      tscode: `import { Tag, toast } from "sud-ui";
import React from "react";

export default function App(): React.ReactElement {
  return (
    <Tag
      closeable
      onClose={() => {
        toast.success("closed");
      }}
    >
      closeable
    </Tag>
  )
}`
    },
    {
      title: "With Icon",
      description:
        lang === "ko" ? "태그 아이콘을 표시합니다." : "Display the tag icon.",
      render: (
        <div className="flex flex-col flex-wra gap-10">
          <Tag icon={<LogoAdobeIllustrator />}>My Illustrator Skill Lv.5</Tag>
          <Tag icon={<LogoAdobePhotoshop />} iconPosition="right">
            My Photoshop Skill Lv.4
          </Tag>
        </div>
      ),
      jscode: `import { Tag } from "sud-ui";
import { LogoAdobeIllustrator, LogoAdobePhotoshop } from "sud-icons";

export default function App() {
  return (
    <div>
      <Tag icon={<LogoAdobeIllustrator />}>My Illustrator Skill Lv.5</Tag>
      <Tag icon={<LogoAdobePhotoshop />} iconPosition="right">
        My Photoshop Skill Lv.4
      </Tag>
    </div>   
  )
}`,
      tscode: `import { Tag } from "sud-ui";
import { LogoAdobeIllustrator, LogoAdobePhotoshop } from "sud-icons";
import React from "react";

export default function App(): React.ReactElement {
  return (
    <div>
      <Tag icon={<LogoAdobeIllustrator />}>My Illustrator Skill Lv.5</Tag>
      <Tag icon={<LogoAdobePhotoshop />} iconPosition="right">
        My Photoshop Skill Lv.4
      </Tag>
    </div>   
  )
}`
    },
    {
      title: "Shape",
      description:
        lang === "ko" ? "태그 모양을 지정합니다." : "Specify the tag shape.",
      render: (
        <div className="flex flex-col gap-20">
          <Card style={{ width: "100%" }} shadow="none" colorType="sub">
            <div className="flex jus-cen">
              <Radio.Group
                direction="horizontal"
                options={shapeOptions}
                value={shape}
                onChange={setShape}
              />
            </div>
          </Card>
          <Tag shape={shape}>Shape Tag</Tag>
        </div>
      ),
      jscode: `import { Tag, Card, Radio } from "sud-ui";
import { useState } from "react";

export default function App() {
  const [shape, setShape] = useState("rounded");
  const shapeOptions = [
    { label: "rounded", value: "rounded" },
    { label: "square", value: "square" },
    { label: "circle", value: "circle" },
    { label: "capsule", value: "capsule" }
  ];

  return (
    <div>
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen">
          <Radio.Group
            direction="horizontal"
            options={shapeOptions}
            value={shape}
            onChange={setShape}
          />
        </div>
      </Card>
      <Tag shape={shape}>Shape Tag</Tag>
    </div>   
  )
}`,
      tscode: `import { Tag, Card, Radio } from "sud-ui";
import { useState } from "react";
import React from "react";

export default function App(): React.ReactElement {
  const [shape, setShape] = useState<"rounded" | "square" | "circle" | "capsule">("rounded");
  const shapeOptions = [
    { label: "rounded", value: "rounded" },
    { label: "square", value: "square" },
    { label: "circle", value: "circle" },
    { label: "capsule", value: "capsule" }
  ];

  return (
    <div>
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen">
          <Radio.Group
            direction="horizontal"
            options={shapeOptions}
            value={shape}
            onChange={setShape}
          />
        </div>
      </Card>
      <Tag shape={shape}>Shape Tag</Tag>
    </div>   
  )
}`
    },
    {
      title: "Shadow",
      description:
        lang === "ko" ? "태그 그림자를 지정합니다." : "Specify the tag shadow.",
      render: (
        <div className="flex flex-col gap-20">
          <Card style={{ width: "100%" }} shadow="none" colorType="sub">
            <div className="flex jus-cen">
              <Radio.Group
                direction="horizontal"
                options={shadowOptions}
                value={shadow}
                onChange={setShadow}
              />
            </div>
          </Card>
          <Tag shadow={shadow}>Shadow Tag</Tag>
        </div>
      ),
      jscode: `import { Tag, Card, Radio } from "sud-ui";
import { useState } from "react";

export default function App() {
  const [shadow, setShadow] = useState("none");
  const shadowOptions = [
    { label: "none", value: "none" },
    { label: "sm", value: "sm" },
    { label: "md", value: "md" },
    { label: "lg", value: "lg" }
  ];

  return (
    <div>
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen">
          <Radio.Group
            direction="horizontal"
            options={shadowOptions}
            value={shadow}
            onChange={setShadow}
          />
        </div>
      </Card>
      <Tag shadow={shadow}>Shadow Tag</Tag>
    </div>   
  )
}`,
      tscode: `import { Tag, Card, Radio } from "sud-ui";
import { useState } from "react";
import React from "react";

export default function App(): React.ReactElement {
  const [shadow, setShadow] = useState<"none" | "sm" | "md" | "lg">("none");
  const shadowOptions = [
    { label: "none", value: "none" },
    { label: "sm", value: "sm" },
    { label: "md", value: "md" },
    { label: "lg", value: "lg" }
  ];

  return (
    <div>
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen">
          <Radio.Group
            direction="horizontal"
            options={shadowOptions}
            value={shadow}
            onChange={setShadow}
          />
        </div>
      </Card>
      <Tag shadow={shadow}>Shadow Tag</Tag>
    </div>   
  )
}`
    },
    {
      title: "Size",
      description:
        lang === "ko" ? "태그 크기를 지정합니다." : "Specify the tag size.",
      render: (
        <div className="flex flex-col gap-20">
          <Card style={{ width: "100%" }} shadow="none" colorType="sub">
            <div className="flex jus-cen">
              <Radio.Group
                direction="horizontal"
                options={sizeOptions}
                value={size}
                onChange={setSize}
              />
            </div>
          </Card>
          <Tag size={size}>Size Tag</Tag>
        </div>
      ),
      jscode: `import { Tag, Card, Radio } from "sud-ui";
import { useState } from "react";

export default function App() {
  const [size, setSize] = useState("sm");
  const sizeOptions = [
    { label: "sm", value: "sm" },
    { label: "md", value: "md" },
    { label: "lg", value: "lg" }
  ];

  return (
    <div>
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen">
          <Radio.Group
            direction="horizontal"
            options={sizeOptions}
            value={size}
            onChange={setSize}
          />
        </div>
      </Card>
      <Tag size={size}>Size Tag</Tag>
    </div>   
  )
}`,
      tscode: `import { Tag, Card, Radio } from "sud-ui";
import { useState } from "react";
import React from "react";

export default function App(): React.ReactElement {
  const [size, setSize] = useState<"sm" | "md" | "lg">("sm");
  const sizeOptions = [
    { label: "sm", value: "sm" },
    { label: "md", value: "md" },
    { label: "lg", value: "lg" }
  ];

  return (
    <div>
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen">
          <Radio.Group
            direction="horizontal"
            options={sizeOptions}
            value={size}
            onChange={setSize}
          />
        </div>
      </Card>
      <Tag size={size}>Size Tag</Tag>
    </div>   
  )
}`
    }
  ];

  const howToUseTableData = [
    {
      key: "children",
      name: "children",
      description: lang === "ko" ? "태그 내용" : "Tag content",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "colorType",
      name: "colorType",
      description: lang === "ko" ? "태그 색상 타입" : "Tag color type",
      type: <>{tagColorTypeTags}</>,
      default: <Tag>default</Tag>
    },
    {
      key: "background",
      name: "background",
      description:
        lang === "ko"
          ? "태그 배경색(palette값 또는 HEX code)"
          : "Tag background color (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "color",
      name: "color",
      description:
        lang === "ko"
          ? "태그 텍스트 색상(palette값 또는 HEX code)"
          : "Tag text color (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "borderColor",
      name: "borderColor",
      description:
        lang === "ko"
          ? "태그 테두리 색상(palette값 또는 HEX code)"
          : "Tag border color (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "borderType",
      name: "borderType",
      description: lang === "ko" ? "태그 테두리 스타일" : "Tag border style",
      type: <>{borderTypeTags}</>,
      default: <Tag>solid</Tag>
    },
    {
      key: "borderWeight",
      name: "borderWeight",
      description: lang === "ko" ? "태그 테두리 두께" : "Tag border weight",
      type: "string | number",
      default: "1"
    },
    {
      key: "className",
      name: "className",
      description: lang === "ko" ? "추가 클래스명" : "Additional class name",
      type: "string",
      default: "-"
    },
    {
      key: "closeable",
      name: "closeable",
      description:
        lang === "ko" ? "닫기 버튼 표시 여부" : "Whether to show close button",
      type: "boolean",
      default: "false"
    },
    {
      key: "onClose",
      name: "onClose",
      description:
        lang === "ko"
          ? "닫기 버튼 클릭 시 호출되는 콜백"
          : "Callback when close button is clicked",
      type: "() => void",
      default: "() => {}"
    },
    {
      key: "icon",
      name: "icon",
      description: lang === "ko" ? "태그 아이콘" : "Tag icon",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "iconPosition",
      name: "iconPosition",
      description: lang === "ko" ? "아이콘 위치" : "Icon position",
      type: <>{tagRender(["left", "right"])}</>,
      default: <Tag>left</Tag>
    },
    {
      key: "shape",
      name: "shape",
      description: lang === "ko" ? "태그 모양" : "Tag shape",
      type: <>{shapeTypeTags}</>,
      default: <Tag>rounded</Tag>
    },
    {
      key: "shadow",
      name: "shadow",
      description: lang === "ko" ? "태그 그림자" : "Tag shadow",
      type: <>{shadowTypeTags}</>,
      default: <Tag>none</Tag>
    },
    {
      key: "border",
      name: "border",
      description:
        lang === "ko" ? "태그 테두리 표시 여부" : "Whether to show tag border",
      type: "boolean",
      default: "true"
    },
    {
      key: "size",
      name: "size",
      description: lang === "ko" ? "태그 크기" : "Tag size",
      type: <>{tagRender(["sm", "md", "lg"])}</>,
      default: <Tag>sm</Tag>
    },
    {
      key: "style",
      name: "style",
      description: lang === "ko" ? "추가 스타일" : "Additional style",
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
