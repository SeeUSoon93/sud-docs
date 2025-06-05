"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { useLang } from "../../_lib/context/langContext";
import { Card, Divider, Radio, Tag, Typography } from "sud-ui";
import { useState } from "react";
import { tagRender } from "../../_lib/components/common/render";
import { borderTypeTags } from "../../_lib/components/common/defaultType";
export default function CardPage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();

  const name = "Divider";
  const description = (
    <>
      {lang === "ko"
        ? "구분선을 구현할 수 있는 컴포넌트입니다."
        : "The component for implementing dividers."}
    </>
  );

  const IMPORT_COMMAND = "import { Divider } from 'sud-ui';";

  const whenToUse = [
    lang === "ko" ? "구분선을 구현할 때" : "When implementing dividers."
  ];

  const [align, setAlign] = useState("center");
  const [verticalAlign, setVerticalAlign] = useState("center");
  const alignOptions = [
    {
      label: "left",
      value: "left"
    },
    {
      label: "center",
      value: "center"
    },
    {
      label: "right",
      value: "right"
    }
  ];
  const verticalAlignOptions = [
    {
      label: "top",
      value: "top"
    },
    {
      label: "center",
      value: "center"
    },
    {
      label: "bottom",
      value: "bottom"
    }
  ];

  const examples = [
    {
      title: "Basic Usage",
      description: lang === "ko" ? "기본적인 사용 방법입니다." : "Basic usage.",
      render: (
        <div className="flex flex-col jus-cen item-cen">
          <Typography as="span">Top Content</Typography>
          <Divider />
          <Typography as="span">Bottom Content</Typography>
        </div>
      ),
      jscode: `import { Divider, Typography } from "sud-ui";

export default function App() {
  return (
    <div className="flex flex-col jus-cen item-cen">
      <Typography as="span">Top Content</Typography>
      <Divider />
      <Typography as="span">Bottom Content</Typography>
    </div>
  );
}`,
      tscode: `import { Divider, Typography } from "sud-ui";
import type { ReactNode } from "react";

export default function App(): ReactNode {
  return (
    <div className="flex flex-col jus-cen item-cen">
      <Typography as="span">Top Content</Typography>
      <Divider />
      <Typography as="span">Bottom Content</Typography>
    </div>
  );
}`
    },
    {
      title: "Vertical Usage",
      description:
        lang === "ko"
          ? "수직 구분선 사용 방법입니다."
          : "Vertical divider usage.",
      render: (
        <div className="flex jus-cen item-cen">
          <Typography as="span">Left Content</Typography>
          <Divider vertical />
          <Typography as="span">Right Content</Typography>
        </div>
      ),
      jscode: `import { Divider, Typography } from "sud-ui";

export default function App() {
  return (
    <div className="flex jus-cen item-cen">
      <Typography as="span">Left Content</Typography>
      <Divider vertical />
      <Typography as="span">Right Content</Typography>
    </div>
  );
}`,
      tscode: `import { Divider, Typography } from "sud-ui";
import type { ReactNode } from "react";

export default function App(): ReactNode {
  return (
    <div className="flex jus-cen item-cen">
      <Typography as="span">Left Content</Typography>
      <Divider vertical />
      <Typography as="span">Right Content</Typography>
    </div>
  );
}`
    },
    {
      title: "Content Usage",
      description:
        lang === "ko"
          ? "구분선 중앙에 표시할 내용을 지정할 수 있습니다."
          : "You can specify the content to display in the center of the divider.",
      render: (
        <div className="flex flex-col jus-cen item-cen">
          <div className="flex jus-cen item-cen">
            <Typography as="span">Top Left Content</Typography>
            <Divider vertical content="Divider" height="10em" />
            <Typography as="span">Top Right Content</Typography>
          </div>
          <Divider content="This is Divider" />
          <div className="flex jus-cen item-cen">
            <Typography as="span">Bottom Content</Typography>
          </div>
        </div>
      ),
      jscode: `import { Divider, Typography } from "sud-ui";

export default function App() {
  return (
    <div className="flex flex-col jus-cen item-cen">
      <div className="flex jus-cen item-cen">
        <Typography as="span">Top Left Content</Typography>
        <Divider vertical content="Divider" height="10em" />
        <Typography as="span">Top Right Content</Typography>
      </div>
      <Divider content="This is Divider" />
      <div className="flex jus-cen item-cen">
        <Typography as="span">Bottom Content</Typography>
      </div>
    </div>
  );
}`,
      tscode: `import { Divider, Typography } from "sud-ui";
import type { ReactNode } from "react";

export default function App(): ReactNode {
  return (
    <div className="flex flex-col jus-cen item-cen">
      <div className="flex jus-cen item-cen">
        <Typography as="span">Top Left Content</Typography>
        <Divider vertical content="Divider" height="10em" />
        <Typography as="span">Top Right Content</Typography>
      </div>
      <Divider content="This is Divider" />
      <div className="flex jus-cen item-cen">
        <Typography as="span">Bottom Content</Typography>
      </div>
    </div>
  );
}`
    },
    {
      title: "Horizontal Align",
      description:
        lang === "ko"
          ? "구분선 정렬 방식을 지정할 수 있습니다."
          : "You can specify the alignment of the divider.",
      render: (
        <div className="flex flex-col gap-20 jus-cen item-cen">
          <Card style={{ width: "100%" }} shadow="none" colorType="sub">
            <div className="flex jus-cen">
              <Radio.Group
                options={alignOptions}
                direction="horizontal"
                value={align}
                onChange={setAlign}
              />
            </div>
          </Card>
          <Divider content="This is Divider" align={align} />
          <div className="flex jus-cen item-cen">
            <Typography as="span">Content</Typography>
          </div>
        </div>
      ),
      jscode: `import { Divider, Typography, Card, Radio } from "sud-ui";
import { useState } from "react";

export default function App() {
  const [align, setAlign] = useState("center");
  const alignOptions = [
    { label: "left", value: "left" },
    { label: "center", value: "center" },
    { label: "right", value: "right" }
  ];

  return (
    <div className="flex flex-col gap-20 jus-cen item-cen">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen">
          <Radio.Group
            options={alignOptions}
            direction="horizontal"
            value={align}
            onChange={setAlign}
          />
        </div>
      </Card>
      <Divider content="This is Divider" align={align} />
      <div className="flex jus-cen item-cen">
        <Typography as="span">Content</Typography>
      </div>
    </div>
  );
}`,
      tscode: `import { Divider, Typography, Card, Radio } from "sud-ui";
import { useState } from "react";
import type { ReactNode } from "react";

type AlignType = "left" | "center" | "right";

interface AlignOption {
  label: AlignType;
  value: AlignType;
}

export default function App(): ReactNode {
  const [align, setAlign] = useState<AlignType>("center");
  const alignOptions: AlignOption[] = [
    { label: "left", value: "left" },
    { label: "center", value: "center" },
    { label: "right", value: "right" }
  ];

  return (
    <div className="flex flex-col gap-20 jus-cen item-cen">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen">
          <Radio.Group
            options={alignOptions}
            direction="horizontal"
            value={align}
            onChange={setAlign}
          />
        </div>
      </Card>
      <Divider content="This is Divider" align={align} />
      <div className="flex jus-cen item-cen">
        <Typography as="span">Content</Typography>
      </div>
    </div>
  );
}`
    },
    {
      title: "Vertical Align",
      description:
        lang === "ko"
          ? "수직 구분선 정렬 방식을 지정할 수 있습니다."
          : "You can specify the alignment of the vertical divider.",
      render: (
        <div className="flex flex-col gap-20 jus-cen item-cen">
          <Card style={{ width: "100%" }} shadow="none" colorType="sub">
            <div className="flex jus-cen">
              <Radio.Group
                options={verticalAlignOptions}
                direction="horizontal"
                value={verticalAlign}
                onChange={setVerticalAlign}
              />
            </div>
          </Card>
          <div className="flex jus-cen item-cen">
            <Typography as="span">Content</Typography>
            <Divider
              vertical
              content="This"
              align={verticalAlign}
              height="5em"
            />
            <Typography as="span">Content</Typography>
          </div>
        </div>
      ),
      jscode: `import { Divider, Typography, Card, Radio } from "sud-ui";
import { useState } from "react";

export default function App() {
  const [verticalAlign, setVerticalAlign] = useState("center");
  const verticalAlignOptions = [
    { label: "top", value: "top" },
    { label: "center", value: "center" },
    { label: "bottom", value: "bottom" }
  ];

  return (
    <div className="flex flex-col gap-20 jus-cen item-cen">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen">
          <Radio.Group
            options={verticalAlignOptions}
            direction="horizontal"
            value={verticalAlign}
            onChange={setVerticalAlign}
          />
        </div>
      </Card>
      <div className="flex jus-cen item-cen">
        <Typography as="span">Content</Typography>
        <Divider
          vertical
          content="This"
          align={verticalAlign}
          height="5em"
        />
        <Typography as="span">Content</Typography>
      </div>
    </div>
  );
}`,
      tscode: `import { Divider, Typography, Card, Radio } from "sud-ui";
import { useState } from "react";
import type { ReactNode } from "react";

type VerticalAlignType = "top" | "center" | "bottom";

interface VerticalAlignOption {
  label: VerticalAlignType;
  value: VerticalAlignType;
}

export default function App(): ReactNode {
  const [verticalAlign, setVerticalAlign] = useState<VerticalAlignType>("center");
  const verticalAlignOptions: VerticalAlignOption[] = [
    { label: "top", value: "top" },
    { label: "center", value: "center" },
    { label: "bottom", value: "bottom" }
  ];

  return (
    <div className="flex flex-col gap-20 jus-cen item-cen">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen">
          <Radio.Group
            options={verticalAlignOptions}
            direction="horizontal"
            value={verticalAlign}
            onChange={setVerticalAlign}
          />
        </div>
      </Card>
      <div className="flex jus-cen item-cen">
        <Typography as="span">Content</Typography>
        <Divider
          vertical
          content="This"
          align={verticalAlign}
          height="5em"
        />
        <Typography as="span">Content</Typography>
      </div>
    </div>
  );
}`
    },
    {
      title: "Customization",
      description:
        lang === "ko"
          ? "구분선 스타일을 지정할 수 있습니다."
          : "You can specify the style of the divider.",
      render: (
        <div className="flex flex-col jus-cen item-cen">
          <div className="flex jus-cen item-cen">
            <Typography as="span">Top Left Content</Typography>
            <Divider
              vertical
              content="Divider"
              height="10em"
              borderType="dashed"
              borderWeight={2}
              borderColor="forest-4"
              color="forest-4"
            />
            <Typography as="span">Top Right Content</Typography>
          </div>
          <Divider content="This is Divider" color="red-6" borderColor="gold" />
          <div className="flex jus-cen item-cen">
            <Typography as="span">Bottom Content</Typography>
          </div>
        </div>
      ),
      jscode: `import { Divider, Typography } from "sud-ui";

export default function App() {
  return (
    <div className="flex flex-col jus-cen item-cen">
      <div className="flex jus-cen item-cen">
        <Typography as="span">Top Left Content</Typography>
        <Divider
          vertical
          content="Divider"
          height="10em"
          borderType="dashed"
          borderWeight={2}
          borderColor="forest-4"
          color="forest-4"
        />
        <Typography as="span">Top Right Content</Typography>
      </div>
      <Divider content="This is Divider" color="red-6" borderColor="gold" />
      <div className="flex jus-cen item-cen">
        <Typography as="span">Bottom Content</Typography>
      </div>
    </div>
  );
}`,
      tscode: `import { Divider, Typography } from "sud-ui";
import type { ReactNode } from "react";

export default function App(): ReactNode {
  return (
    <div className="flex flex-col jus-cen item-cen">
      <div className="flex jus-cen item-cen">
        <Typography as="span">Top Left Content</Typography>
        <Divider
          vertical
          content="Divider"
          height="10em"
          borderType="dashed"
          borderWeight={2}
          borderColor="forest-4"
          color="forest-4"
        />
        <Typography as="span">Top Right Content</Typography>
      </div>
      <Divider content="This is Divider" color="red-6" borderColor="gold" />
      <div className="flex jus-cen item-cen">
        <Typography as="span">Bottom Content</Typography>
      </div>
    </div>
  );
}`
    }
  ];

  const howToUseTableData = [
    {
      key: "content",
      name: "content",
      description:
        lang === "ko"
          ? "구분선 중앙에 표시할 내용"
          : "Content to display in the center of divider",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "align",
      name: "align",
      description:
        lang === "ko"
          ? "내용 정렬 방식 (left, center, right)"
          : "Content alignment (left, center, right)",
      type: <>{tagRender(["left", "center", "right"])}</>,
      default: <Tag>center</Tag>
    },
    {
      key: "borderWeight",
      name: "borderWeight",
      description: lang === "ko" ? "구분선 두께" : "Border weight of divider",
      type: "number",
      default: "1"
    },
    {
      key: "borderType",
      name: "borderType",
      description: lang === "ko" ? "구분선 스타일" : "Border style",
      type: <>{borderTypeTags}</>,
      default: <Tag>solid</Tag>
    },
    {
      key: "color",
      name: "color",
      description:
        lang === "ko"
          ? "내용 색상(palette값 또는 HEX code)"
          : "Content color (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "borderColor",
      name: "borderColor",
      description:
        lang === "ko"
          ? "구분선 색상(palette값 또는 HEX code)"
          : "Border color (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "width",
      name: "width",
      description: lang === "ko" ? "구분선 너비" : "Width of divider",
      type: "string | number",
      default: "100%"
    },
    {
      key: "height",
      name: "height",
      description: lang === "ko" ? "구분선 높이" : "Height of divider",
      type: "string | number",
      default: "2em"
    },
    {
      key: "vertical",
      name: "vertical",
      description:
        lang === "ko" ? "수직 구분선 여부" : "Whether to show vertical divider",
      type: "boolean",
      default: "false"
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
