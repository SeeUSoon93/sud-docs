"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Tag, Card, Avatar, Badge, Radio, Input, Typography } from "sud-ui";

import React, { useState } from "react";
import { useLang } from "../../_lib/context/langContext";

export default function BadgePage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();
  const [size, setSize] = useState("sm");
  const [sizeNumber, setSizeNumber] = useState(20);
  const [shape, setShape] = useState("circle");

  const name = "Badge";
  const description = (
    <>
      {lang === "ko" ? (
        <>표시되는 데이터의 개수를 표시하는 배지 컴포넌트입니다.</>
      ) : (
        <>A component that displays the count of data being shown.</>
      )}
    </>
  );

  const IMPORT_COMMAND = "import { Badge } from 'sud-ui';";

  const whenToUse =
    lang === "ko"
      ? ["알림, 카운트, 표시 등 데이터의 개수를 표시할 때"]
      : ["When displaying counts for notifications, counters, or indicators"];

  const sizeOptions = [
    {
      label: "xs",
      value: "xs"
    },
    {
      label: "sm",
      value: "sm"
    },
    {
      label: "md",
      value: "md"
    },
    {
      label: "lg",
      value: "lg"
    },
    {
      label: "xl",
      value: "xl"
    }
  ];

  const shapeOptions = [
    {
      label: "circle",
      value: "circle"
    },
    {
      label: "square",
      value: "square"
    },
    {
      label: "rounded",
      value: "rounded"
    }
  ];

  const examples = [
    {
      title: "Basic Usage",
      description:
        lang === "ko" ? "기본적인 사용방법입니다." : "Basic usage example.",
      render: (
        <div className="flex gap-20">
          <Badge count={10}>
            <Avatar shape="rounded" />
          </Badge>
          <Badge dot>
            <Avatar shape="rounded" />
          </Badge>
        </div>
      ),
      jscode: `import React from 'react';
import { Badge, Avatar } from 'sud-ui';

const BasicBadge = () => {
  return (
    <div className="flex gap-20">
      <Badge count={10}>
        <Avatar shape="rounded" />
      </Badge>
      <Badge dot>
        <Avatar shape="rounded" />
      </Badge>
    </div>
  );
};

export default BasicBadge;`,
      tscode: `import React from 'react';
import { Badge, Avatar } from 'sud-ui';

const BasicBadge: React.FC = () => {
  return (
    <div className="flex gap-20">
      <Badge count={10}>
        <Avatar shape="rounded" />
      </Badge>
      <Badge dot>
        <Avatar shape="rounded" />
      </Badge>
    </div>
  );
};

export default BasicBadge;`
    },
    {
      title: "Size",
      description:
        lang === "ko"
          ? "배지의 크기를 설정할 수 있습니다."
          : "You can set the size of the badge.",
      render: (
        <div className="flex flex-col gap-20">
          <Card style={{ width: "100%" }} shadow="none" colorType="sub">
            <div className="flex flex-col item-cen jus-cen gap-20">
              <Radio.Group
                options={sizeOptions}
                direction="horizontal"
                value={size}
                onChange={setSize}
              />
              <Input
                value={sizeNumber}
                size="sm"
                type="number"
                onChange={(e) => setSizeNumber(Number(e.target.value) || 0)}
                placeholder="숫자로 입력"
              />
            </div>
          </Card>
          <div className="flex gap-10">
            <Card style={{ width: "100%" }} shadow="none">
              <div className="flex flex-col item-cen jus-cen gap-10">
                <Badge count={size} size={size}>
                  <Avatar />
                </Badge>
                <Typography>size Map</Typography>
              </div>
            </Card>
            <Card style={{ width: "100%" }} shadow="none">
              <div className="flex flex-col item-cen jus-cen gap-10">
                <Badge count={sizeNumber} size={sizeNumber}>
                  <Avatar />
                </Badge>
                <Typography>size Number</Typography>
              </div>
            </Card>
          </div>
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Badge, Avatar, Radio, Card, Input, Typography } from 'sud-ui';

const SizeBadge = () => {
  const [size, setSize] = useState('sm');
  const [sizeNumber, setSizeNumber] = useState(20);

  const sizeOptions = [
    { label: 'xs', value: 'xs' },
    { label: 'sm', value: 'sm' },
    { label: 'md', value: 'md' },
    { label: 'lg', value: 'lg' },
    { label: 'xl', value: 'xl' }
  ];

  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex flex-col item-cen jus-cen gap-20">
          <Radio.Group
            options={sizeOptions}
            direction="horizontal"
            value={size}
            onChange={setSize}
          />
          <Input
            value={sizeNumber}
            size="sm"
            type="number"
            onChange={(e) => setSizeNumber(Number(e.target.value) || 0)}
            placeholder="숫자로 입력"
          />
        </div>
      </Card>
      <div className="flex gap-10">
        <Card style={{ width: "100%" }} shadow="none">
          <div className="flex flex-col item-cen jus-cen gap-10">
            <Badge count={size} size={size}>
              <Avatar />
            </Badge>
            <Typography>size Map</Typography>
          </div>
        </Card>
        <Card style={{ width: "100%" }} shadow="none">
          <div className="flex flex-col item-cen jus-cen gap-10">
            <Badge count={sizeNumber} size={sizeNumber}>
              <Avatar />
            </Badge>
            <Typography>size Number</Typography>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SizeBadge;`,
      tscode: `import React, { useState } from 'react';
import { Badge, Avatar, Radio, Card, Input, Typography } from 'sud-ui';

const SizeBadge: React.FC = () => {
  const [size, setSize] = useState<'xs' | 'sm' | 'md' | 'lg' | 'xl'>('sm');
  const [sizeNumber, setSizeNumber] = useState<number>(20);

  const sizeOptions = [
    { label: 'xs', value: 'xs' },
    { label: 'sm', value: 'sm' },
    { label: 'md', value: 'md' },
    { label: 'lg', value: 'lg' },
    { label: 'xl', value: 'xl' }
  ];

  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex flex-col item-cen jus-cen gap-20">
          <Radio.Group
            options={sizeOptions}
            direction="horizontal"
            value={size}
            onChange={setSize}
          />
          <Input
            value={sizeNumber}
            size="sm"
            type="number"
            onChange={(e) => setSizeNumber(Number(e.target.value) || 0)}
            placeholder="숫자로 입력"
          />
        </div>
      </Card>
      <div className="flex gap-10">
        <Card style={{ width: "100%" }} shadow="none">
          <div className="flex flex-col item-cen jus-cen gap-10">
            <Badge count={size} size={size}>
              <Avatar />
            </Badge>
            <Typography>size Map</Typography>
          </div>
        </Card>
        <Card style={{ width: "100%" }} shadow="none">
          <div className="flex flex-col item-cen jus-cen gap-10">
            <Badge count={sizeNumber} size={sizeNumber}>
              <Avatar />
            </Badge>
            <Typography>size Number</Typography>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SizeBadge;`
    },
    {
      title: "Shape",
      description:
        lang === "ko"
          ? "뱃지의 모양을 설정할 수 있습니다."
          : "You can set the shape of the badge.",
      render: (
        <div className="flex flex-col gap-20">
          <Card style={{ width: "100%" }} shadow="none" colorType="sub">
            <div className="flex jus-cen w-100">
              <Radio.Group
                options={shapeOptions}
                direction="horizontal"
                value={shape}
                onChange={setShape}
              />
            </div>
          </Card>
          <div>
            <Badge count={10} shape={shape}>
              <Avatar />
            </Badge>
          </div>
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Badge, Avatar, Radio, Card } from 'sud-ui';

const ShapeBadge = () => {
  const [shape, setShape] = useState('circle');

  const shapeOptions = [
    { label: 'circle', value: 'circle' },
    { label: 'square', value: 'square' },
    { label: 'rounded', value: 'rounded' }
  ];

  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen w-100">
          <Radio.Group
            options={shapeOptions}
            direction="horizontal"
            value={shape}
            onChange={setShape}
          />
        </div>
      </Card>
      <div>
        <Badge count={10} shape={shape}>
          <Avatar />
        </Badge>
      </div>
    </div>
  );
};

export default ShapeBadge;`,
      tscode: `import React, { useState } from 'react';
import { Badge, Avatar, Radio, Card } from 'sud-ui';

const ShapeBadge: React.FC = () => {
  const [shape, setShape] = useState<'circle' | 'square' | 'rounded'>('circle');

  const shapeOptions = [
    { label: 'circle', value: 'circle' },
    { label: 'square', value: 'square' },
    { label: 'rounded', value: 'rounded' }
  ];

  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen w-100">
          <Radio.Group
            options={shapeOptions}
            direction="horizontal"
            value={shape}
            onChange={setShape}
          />
        </div>
      </Card>
      <div>
        <Badge count={10} shape={shape}>
          <Avatar />
        </Badge>
      </div>
    </div>
  );
};

export default ShapeBadge;`
    },
    {
      title: "Label Mode",
      description:
        lang === "ko"
          ? "라벨 모드를 활성화할 수 있습니다."
          : "You can enable label mode.",
      render: (
        <Badge label count={"Label Mode"}>
          <Avatar shape="rounded" />
        </Badge>
      ),
      jscode: `import React from 'react';
import { Badge, Avatar } from 'sud-ui';

const LabelModeBadge = () => {
  return (
    <Badge label count={"Label Mode"}>
      <Avatar shape="rounded" />
    </Badge>
  );
};

export default LabelModeBadge;`,
      tscode: `import React from 'react';
import { Badge, Avatar } from 'sud-ui';

const LabelModeBadge: React.FC = () => {
  return (
    <Badge label count={"Label Mode"}>
      <Avatar shape="rounded" />
    </Badge>
  );
};

export default LabelModeBadge;`
    },
    {
      title: "Show Zero",
      description:
        lang === "ko" ? "count가 0일 때도 표시" : "Show when count is zero",
      render: (
        <div className="flex gap-20">
          <Badge showZero count={0}>
            <Avatar shape="rounded" />
          </Badge>

          <Badge count={0}>
            <Avatar shape="rounded" />
          </Badge>
        </div>
      ),
      jscode: `import React from 'react';
import { Badge, Avatar } from 'sud-ui';

const ShowZeroBadge = () => {
  return (
    <div className="flex gap-20">
      <Badge showZero count={0}>
        <Avatar shape="rounded" />
      </Badge>

      <Badge count={0}>
        <Avatar shape="rounded" />
      </Badge>
    </div>
  );
};

export default ShowZeroBadge;`,
      tscode: `import React from 'react';
import { Badge, Avatar } from 'sud-ui';

const ShowZeroBadge: React.FC = () => {
  return (
    <div className="flex gap-20">
      <Badge showZero count={0}>
        <Avatar shape="rounded" />
      </Badge>

      <Badge count={0}>
        <Avatar shape="rounded" />
      </Badge>
    </div>
  );
};

export default ShowZeroBadge;`
    },
    {
      title: "Color Type",
      description:
        lang === "ko"
          ? "배지의 색상 타입을 설정할 수 있습니다."
          : "You can set the color type of the badge.",
      render: (
        <Badge colorType="purple" count={15}>
          <Avatar shape="rounded" />
        </Badge>
      ),
      jscode: `import React from 'react';
import { Badge, Avatar } from 'sud-ui';

const ColorTypeBadge = () => {
  return (
    <Badge colorType="purple" count={15}>
      <Avatar shape="rounded" />
    </Badge>
  );
};

export default ColorTypeBadge;`,
      tscode: `import React from 'react';
import { Badge, Avatar } from 'sud-ui';

const ColorTypeBadge: React.FC = () => {
  return (
    <Badge colorType="purple" count={15}>
      <Avatar shape="rounded" />
    </Badge>
  );
};

export default ColorTypeBadge;`
    },
    {
      title: "Max",
      description:
        lang === "ko"
          ? "최대 표시 숫자를 설정할 수 있습니다."
          : "You can set the maximum display number.",
      render: (
        <Badge max={10} count={15}>
          <Avatar shape="rounded" />
        </Badge>
      ),
      jscode: `import React from 'react';
import { Badge, Avatar } from 'sud-ui';

const MaxBadge = () => {
  return (
    <Badge max={10} count={15}>
      <Avatar shape="rounded" />
    </Badge>
  );
};

export default MaxBadge;`,
      tscode: `import React from 'react';
import { Badge, Avatar } from 'sud-ui';

const MaxBadge: React.FC = () => {
  return (
    <Badge max={10} count={15}>
      <Avatar shape="rounded" />
    </Badge>
  );
};

export default MaxBadge;`
    }
  ];

  const howToUseTableData = [
    {
      key: "count",
      name: "count",
      description: lang === "ko" ? "표시할 숫자" : "Number to display",
      type: "number",
      default: "-"
    },
    {
      key: "max",
      name: "max",
      description:
        lang === "ko"
          ? "최대 표시 숫자 (초과시 max+ 표시)"
          : "Maximum display number (shows max+ when exceeded)",
      type: "number",
      default: "-"
    },
    {
      key: "dot",
      name: "dot",
      description:
        lang === "ko"
          ? "숫자 대신 점으로 표시"
          : "Display as a dot instead of a number",
      type: "boolean",
      default: "false"
    },
    {
      key: "showZero",
      name: "showZero",
      description:
        lang === "ko" ? "count가 0일 때도 표시" : "Show when count is zero",
      type: "boolean",
      default: "false"
    },
    {
      key: "position",
      name: "position",
      description: lang === "ko" ? "배지의 위치" : "Position of the badge",
      type: (
        <>
          <Tag>top-right</Tag> ｜ <Tag>top-left</Tag> ｜ <Tag>bottom-right</Tag>{" "}
          ｜ <Tag>bottom-left</Tag>
        </>
      ),
      default: <Tag>top-right</Tag>
    },
    {
      key: "size",
      name: "size",
      description: lang === "ko" ? "배지의 크기" : "Size of the badge",
      type: (
        <>
          <Tag>xs</Tag> ｜ <Tag>sm</Tag> ｜ <Tag>md</Tag> ｜ <Tag>lg</Tag> ｜{" "}
          <Tag>xl</Tag> ｜ <Tag>number</Tag>
        </>
      ),
      default: <Tag>sm</Tag>
    },
    {
      key: "offsetRatio",
      name: "offsetRatio",
      description:
        lang === "ko"
          ? "배지의 위치 오프셋 비율 (0~1 사이의 값)"
          : "Offset ratio of badge position (value between 0 and 1)",
      type: "number",
      default: "0.25"
    },
    {
      key: "label",
      name: "label",
      description: lang === "ko" ? "라벨 모드 활성화" : "Enable label mode",
      type: "boolean",
      default: "false"
    },
    {
      key: "shape",
      name: "shape",
      description: lang === "ko" ? "배지의 모양" : "Shape of the badge",
      type: (
        <>
          <Tag>circle</Tag> ｜ <Tag>square</Tag> ｜ <Tag>rounded</Tag>
        </>
      ),
      default: <Tag>circle</Tag>
    },
    {
      key: "colorType",
      name: "colorType",
      description:
        lang === "ko" ? "배지의 색상 타입" : "Color type of the badge",
      type: "string",
      default: <Tag>red</Tag>
    },
    {
      key: "background",
      name: "background",
      description:
        lang === "ko" ? "배지의 배경색" : "Background color of the badge",
      type: "string",
      default: "-"
    },
    {
      key: "color",
      name: "color",
      description:
        lang === "ko" ? "배지의 텍스트 색상" : "Text color of the badge",
      type: "string",
      default: "-"
    },
    {
      key: "border",
      name: "border",
      description:
        lang === "ko" ? "테두리 표시 여부" : "Whether to show border",
      type: "boolean",
      default: "false"
    },
    {
      key: "borderColor",
      name: "borderColor",
      description: lang === "ko" ? "테두리 색상" : "Border color",
      type: "string",
      default: "-"
    },
    {
      key: "borderType",
      name: "borderType",
      description: lang === "ko" ? "테두리 스타일" : "Border style",
      type: (
        <>
          <Tag>solid</Tag> ｜ <Tag>dashed</Tag> ｜ <Tag>dotted</Tag>
        </>
      ),
      default: <Tag>solid</Tag>
    },
    {
      key: "borderWeight",
      name: "borderWeight",
      description: lang === "ko" ? "테두리 두께" : "Border weight",
      type: "number",
      default: "1"
    },
    {
      key: "shadow",
      name: "shadow",
      description: lang === "ko" ? "그림자 크기" : "Shadow size",
      type: (
        <>
          <Tag>none</Tag> ｜ <Tag>sm</Tag> ｜ <Tag>md</Tag> ｜ <Tag>lg</Tag>
        </>
      ),
      default: <Tag>none</Tag>
    },
    {
      key: "className",
      name: "className",
      description: lang === "ko" ? "추가 클래스명" : "Additional class name",
      type: "string",
      default: '""'
    },
    {
      key: "style",
      name: "style",
      description: lang === "ko" ? "추가 스타일" : "Additional style",
      type: "React.CSSProperties",
      default: "{}"
    },
    {
      key: "aria-label",
      name: "aria-label",
      description: lang === "ko" ? "접근성 레이블" : "Accessibility label",
      type: "string",
      default: "-"
    }
  ];

  const groupTableData = [
    {
      key: "avatars",
      name: "avatars",
      description: "아바타 배열",
      type: "Array<AvatarProps>",
      default: "[]"
    },
    {
      key: "max",
      name: "max",
      description: "최대 표시 개수",
      type: "number",
      default: "3"
    },
    {
      key: "size",
      name: "size",
      description: "아바타의 크기",
      type: (
        <>
          <Tag>xs</Tag> ｜ <Tag>sm</Tag> ｜ <Tag>md</Tag> ｜ <Tag>lg</Tag> ｜{" "}
          <Tag>xl</Tag>
        </>
      ),
      default: <Tag>md</Tag>
    },
    {
      key: "shape",
      name: "shape",
      description: "아바타의 모양",
      type: (
        <>
          <Tag>circle</Tag> ｜ <Tag>square</Tag> ｜ <Tag>rounded</Tag>
        </>
      ),
      default: <Tag>circle</Tag>
    },
    {
      key: "colorType",
      name: "colorType",
      description: "아바타의 색상 타입",
      type: "string",
      default: <Tag>default</Tag>
    },
    {
      key: "background",
      name: "background",
      description: "배경색",
      type: "string",
      default: "-"
    },
    {
      key: "color",
      name: "color",
      description: "텍스트 색상",
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
      description: "테두리 색상",
      type: "string",
      default: "-"
    },
    {
      key: "borderType",
      name: "borderType",
      description: "테두리 스타일",
      type: (
        <>
          <Tag>solid</Tag> ｜ <Tag>dashed</Tag> ｜ <Tag>dotted</Tag>
        </>
      ),
      default: <Tag>solid</Tag>
    },
    {
      key: "borderWeight",
      name: "borderWeight",
      description: "테두리 두께",
      type: "number",
      default: "1"
    },
    {
      key: "shadow",
      name: "shadow",
      description: "그림자 크기",
      type: (
        <>
          <Tag>none</Tag> ｜ <Tag>sm</Tag> ｜ <Tag>md</Tag> ｜ <Tag>lg</Tag>
        </>
      ),
      default: <Tag>none</Tag>
    },
    {
      key: "className",
      name: "className",
      description: "추가 클래스명",
      type: "string",
      default: '""'
    },
    {
      key: "style",
      name: "style",
      description: "추가 스타일",
      type: "React.CSSProperties",
      default: "{}"
    },
    {
      key: "zIndexStart",
      name: "zIndexStart",
      description: "z-index 시작 값",
      type: "number",
      default: "10"
    },
    {
      key: "gap",
      name: "gap",
      description: "아바타 간의 간격 (0~1 사이의 값)",
      type: "number",
      default: "0.6"
    },
    {
      key: "aria-label",
      name: "aria-label",
      description: "접근성 레이블",
      type: "string",
      default: "아바타 그룹"
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
        groupTableData
      }}
      grid={true}
      isMobile={isMobile}
      lang={lang}
    />
  );
}
