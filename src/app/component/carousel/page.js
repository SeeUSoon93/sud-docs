"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { useLang } from "../../_lib/context/langContext";
import { Card, Avatar, Carousel, Radio, Tag } from "sud-ui";
import { useState } from "react";
import { TriangleLeft, TriangleRight } from "sud-icons";
import { tagRender } from "../../_lib/components/common/render";

export default function CardPage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();

  const name = "Carousel";
  const description = (
    <>
      {lang === "ko"
        ? "이미지 슬라이드를 구현할 수 있는 컴포넌트입니다."
        : "The component for implementing image slides."}
    </>
  );

  const IMPORT_COMMAND = "import { Carousel } from 'sud-ui';";

  const whenToUse = [
    lang === "ko"
      ? "이미지 슬라이드를 구현할 때"
      : "When implementing image slides."
  ];

  const [effectType, setEffectType] = useState("fade");
  const effectTypeOptions = [
    { label: "fade", value: "fade" },
    { label: "slide", value: "slide" },
    { label: "scale", value: "scale" },
    { label: "stack", value: "stack" }
  ];

  const renderItems = Array.from({ length: 5 }, (_, index) => (
    <Card key={index} width="100%">
      <div className="flex jus-cen item-cen">
        <Avatar sample={index + 1} size="xl" />
      </div>
    </Card>
  ));

  const examples = [
    {
      title: "Basic Usage",
      description: lang === "ko" ? "기본적인 사용 방법입니다." : "Basic usage.",
      render: <Carousel items={renderItems} />,
      jscode: `import React from "react";
import { Carousel, Card, Avatar } from "sud-ui";

export default function Example() {
  const renderItems = Array.from({ length: 5 }, (_, index) => (
    <Card key={index} width="100%">
      <div className="flex jus-cen item-cen">
        <Avatar sample={index + 1} size="xl" />
      </div>
    </Card>
  ));

  return (
    <Carousel 
      items={renderItems}
      itemWidthRatio={0.8}
      itemCount={1}
      autoPlay={true}
      autoPlayInterval={3000}
      effectType="fade"
    />
  );
}`,
      tscode: `import React from "react";
import { Carousel, Card, Avatar } from "sud-ui";

interface CarouselItem {
  key: number;
  content: React.ReactNode;
}

export default function Example(): React.ReactElement {
  const renderItems: CarouselItem[] = Array.from({ length: 5 }, (_, index) => ({
    key: index,
    content: (
      <Card key={index} width="100%">
        <div className="flex jus-cen item-cen">
          <Avatar sample={index + 1} size="xl" />
        </div>
      </Card>
    )
  }));

  return (
    <Carousel 
      items={renderItems.map(item => item.content)}
      itemWidthRatio={0.8}
      itemCount={1}
      autoPlay={true}
      autoPlayInterval={3000}
      effectType="fade"
    />
  );
}`
    },
    {
      title: "Autoplay",
      description:
        lang === "ko"
          ? "자동 재생 여부를 설정합니다. 기본값은 false입니다."
          : "Set the autoplay option. The default value is false.",
      render: (
        <Carousel items={renderItems} autoPlay={true} autoPlayInterval={1000} />
      ),
      jscode: `import React from "react";
import { Carousel, Card, Avatar } from "sud-ui";

export default function Example() {
  const renderItems = Array.from({ length: 5 }, (_, index) => (
    <Card key={index} width="100%">
      <div className="flex jus-cen item-cen">
        <Avatar sample={index + 1} size="xl" />
      </div>
    </Card>
  ));

  return (
    <Carousel 
      items={renderItems}
      autoPlay={true}
      autoPlayInterval={1000}  // 1초마다 자동 재생
    />
  );
}`,
      tscode: `import React from "react";
import { Carousel, Card, Avatar } from "sud-ui";

interface CarouselItem {
  key: number;
  content: React.ReactNode;
}

export default function Example(): React.ReactElement {
  const renderItems: CarouselItem[] = Array.from({ length: 5 }, (_, index) => ({
    key: index,
    content: (
      <Card key={index} width="100%">
        <div className="flex jus-cen item-cen">
          <Avatar sample={index + 1} size="xl" />
        </div>
      </Card>
    )
  }));

  return (
    <Carousel 
      items={renderItems.map(item => item.content)}
      autoPlay={true}
      autoPlayInterval={1000}  // 1초마다 자동 재생
    />
  );
}`
    },
    {
      title: "Effect Type",
      description:
        lang === "ko" ? "효과 타입을 설정합니다." : "Set the effect type.",
      render: (
        <div className="flex flex-col gap-20 jus-cen item-cen">
          <Card style={{ width: "100%" }} shadow="none" colorType="sub">
            <div className="flex jus-cen">
              <Radio.Group
                options={effectTypeOptions}
                direction="horizontal"
                value={effectType}
                onChange={setEffectType}
              />
            </div>
          </Card>
          <Carousel items={renderItems} effectType={effectType} />
        </div>
      ),
      jscode: `import React, { useState } from "react";
import { Carousel, Card, Avatar, Radio } from "sud-ui";

export default function Example() {
  const [effectType, setEffectType] = useState("fade");
  const effectTypeOptions = [
    { label: "fade", value: "fade" },
    { label: "slide", value: "slide" },
    { label: "scale", value: "scale" },
    { label: "stack", value: "stack" }
  ];

  const renderItems = Array.from({ length: 5 }, (_, index) => (
    <Card key={index} width="100%">
      <div className="flex jus-cen item-cen">
        <Avatar sample={index + 1} size="xl" />
      </div>
    </Card>
  ));

  return (
    <div className="flex flex-col gap-20 jus-cen item-cen">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen">
          <Radio.Group
            options={effectTypeOptions}
            direction="horizontal"
            value={effectType}
            onChange={setEffectType}
          />
        </div>
      </Card>
      <Carousel items={renderItems} effectType={effectType} />
    </div>
  );
}`,
      tscode: `import React, { useState } from "react";
import { Carousel, Card, Avatar, Radio } from "sud-ui";

interface CarouselItem {
  key: number;
  content: React.ReactNode;
}

interface EffectTypeOption {
  label: string;
  value: "fade" | "slide" | "scale" | "stack";
}

export default function Example(): React.ReactElement {
  const [effectType, setEffectType] = useState<EffectTypeOption["value"]>("fade");
  const effectTypeOptions: EffectTypeOption[] = [
    { label: "fade", value: "fade" },
    { label: "slide", value: "slide" },
    { label: "scale", value: "scale" },
    { label: "stack", value: "stack" }
  ];

  const renderItems: CarouselItem[] = Array.from({ length: 5 }, (_, index) => ({
    key: index,
    content: (
      <Card key={index} width="100%">
        <div className="flex jus-cen item-cen">
          <Avatar sample={index + 1} size="xl" />
        </div>
      </Card>
    )
  }));

  return (
    <div className="flex flex-col gap-20 jus-cen item-cen">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen">
          <Radio.Group
            options={effectTypeOptions}
            direction="horizontal"
            value={effectType}
            onChange={setEffectType}
          />
        </div>
      </Card>
      <Carousel items={renderItems.map(item => item.content)} effectType={effectType} />
    </div>
  );
}`
    },
    {
      title: "Effect Type-Overlap",
      description:
        lang === "ko"
          ? "효과 타입 중 오버랩 효과입니다. 해당 효과는 itemCount, itemWidthRatio, scaleRatio, opacityRatio 옵션을 사용하여 오버랩 효과를 구현합니다."
          : "The overlap effect is one of the effect types. This effect uses the itemCount, itemWidthRatio, scaleRatio, opacityRatio options to implement the overlap effect.",
      render: (
        <Carousel
          items={renderItems}
          effectType="overlap"
          itemCount={5}
          itemWidthRatio={0.4}
          scaleRatio={0.2}
          opacityRatio={0.3}
        />
      ),
      jscode: `import React from "react";
import { Carousel, Card, Avatar } from "sud-ui";

export default function Example() {
  const renderItems = Array.from({ length: 5 }, (_, index) => (
    <div className="flex jus-cen item-cen">
      <Card key={index} width="100%">
        <div className="flex jus-cen item-cen">
          <Avatar sample={index + 1} size="xl" />
        </div>
      </Card>
    </div>
  ));

  return (
    <Carousel 
      items={renderItems}
      effectType="overlap"
      itemCount={5}
      itemWidthRatio={0.4}
      scaleRatio={0.2}
      opacityRatio={0.3}
    />
  );
}`,
      tscode: `import React from "react";
import { Carousel, Card, Avatar } from "sud-ui";

interface CarouselItem {
  key: number;
  content: React.ReactNode;
}

export default function Example(): React.ReactElement {
  const renderItems: CarouselItem[] = Array.from({ length: 5 }, (_, index) => ({
    key: index,
    content: (
      <div className="flex jus-cen item-cen">
        <Card key={index} width="100%">
          <div className="flex jus-cen item-cen">
            <Avatar sample={index + 1} size="xl" />
          </div>
        </Card>
      </div>
    )
  }));

  return (
    <Carousel 
      items={renderItems.map(item => item.content)}
      effectType="overlap"
      itemCount={5}
      itemWidthRatio={0.4}
      scaleRatio={0.2}
      opacityRatio={0.3} 
    />
  );
}`
    },
    {
      title: "Button Customization",
      description:
        lang === "ko"
          ? "버튼을 커스텀할 수 있습니다."
          : "Customize the button.",
      render: (
        <Carousel
          items={renderItems}
          leftBtnIcon={<TriangleLeft size={30} />}
          rightBtnIcon={<TriangleRight size={30} />}
        />
      ),
      jscode: `import React from "react";
import { Carousel, Card, Avatar } from "sud-ui";
import { TriangleLeft, TriangleRight } from "sud-icons";

export default function Example() {
  const renderItems = Array.from({ length: 5 }, (_, index) => (
    <Card key={index} width="100%">
      <div className="flex jus-cen item-cen">
        <Avatar sample={index + 1} size="xl" />
      </div>
    </Card>
  ));

  return (
    <Carousel 
      items={renderItems}
      leftBtnIcon={<TriangleLeft size={30} />}
      rightBtnIcon={<TriangleRight size={30} />}
    />
  );
}`,
      tscode: `import React from "react";
import { Carousel, Card, Avatar } from "sud-ui";
import { TriangleLeft, TriangleRight } from "sud-icons";

interface CarouselItem {
  key: number;
  content: React.ReactNode;
}

export default function Example(): React.ReactElement {
  const renderItems: CarouselItem[] = Array.from({ length: 5 }, (_, index) => ({
    key: index,
    content: (
      <Card key={index} width="100%">
        <div className="flex jus-cen item-cen">
          <Avatar sample={index + 1} size="xl" />
        </div>
      </Card>
    )
  }));

  return (
    <Carousel 
      items={renderItems.map(item => item.content)}
      leftBtnIcon={<TriangleLeft size={30} />}
      rightBtnIcon={<TriangleRight size={30} />}
    />
  );
}`
    },
    {
      title: "Drag",
      description:
        lang === "ko"
          ? "드래그로 슬라이드 넘기기 활성화 여부"
          : "Whether to enable drag to slide",
      render: <Carousel items={renderItems} drag={false} />,
      jscode: `import React from "react";
import { Carousel, Card, Avatar } from "sud-ui";

export default function Example() {
  const renderItems = Array.from({ length: 5 }, (_, index) => (
    <Card key={index} width="100%">
      <div className="flex jus-cen item-cen">
        <Avatar sample={index + 1} size="xl" />
      </div>
    </Card>
  ));

  return (
    <Carousel items={renderItems} drag={false} />
  );
}`,
      tscode: `import React from "react";
import { Carousel, Card, Avatar } from "sud-ui";

interface CarouselItem {
  key: number;
  content: React.ReactNode;
}

export default function Example(): React.ReactElement {
  const renderItems: CarouselItem[] = Array.from({ length: 5 }, (_, index) => ({
    key: index,
    content: (
      <Card key={index} width="100%">
        <div className="flex jus-cen item-cen">
          <Avatar sample={index + 1} size="xl" />
        </div>
      </Card>
    )
  }));

  return (
    <Carousel 
      items={renderItems.map(item => item.content)}
      drag={false}
    />
  );
}`
    }
  ];

  const howToUseTableData = [
    {
      key: "items",
      name: "items",
      description:
        lang === "ko"
          ? "캐러셀에 표시할 아이템 배열"
          : "Array of items to display in carousel",
      type: "ReactNode[]",
      default: "[]"
    },
    {
      key: "itemWidthRatio",
      name: "itemWidthRatio",
      description:
        lang === "ko"
          ? "아이템의 너비 비율 (0~1)"
          : "Width ratio of item (0~1)",
      type: "number",
      default: "0.8"
    },
    {
      key: "itemCount",
      name: "itemCount",
      description:
        lang === "ko"
          ? "한 번에 표시할 아이템 수"
          : "Number of items to show at once",
      type: "number",
      default: "1"
    },
    {
      key: "autoPlay",
      name: "autoPlay",
      description: lang === "ko" ? "자동 재생 여부" : "Whether to auto play",
      type: "boolean",
      default: "false"
    },
    {
      key: "autoPlayInterval",
      name: "autoPlayInterval",
      description:
        lang === "ko"
          ? "자동 재생 간격 (ms)"
          : "Auto play interval in milliseconds",
      type: "number",
      default: "3000"
    },
    {
      key: "scaleRatio",
      name: "scaleRatio",
      description:
        lang === "ko"
          ? "아이템 크기 변화 비율"
          : "Scale ratio for item size change",
      type: "number",
      default: "0.2"
    },
    {
      key: "opacityRatio",
      name: "opacityRatio",
      description:
        lang === "ko"
          ? "아이템 투명도 변화 비율"
          : "Opacity ratio for item transparency change",
      type: "number",
      default: "0.1"
    },
    {
      key: "width",
      name: "width",
      description: lang === "ko" ? "캐러셀의 너비" : "Width of carousel",
      type: "string | number",
      default: "100%"
    },
    {
      key: "height",
      name: "height",
      description: lang === "ko" ? "캐러셀의 높이" : "Height of carousel",
      type: "string | number",
      default: "auto"
    },
    {
      key: "className",
      name: "className",
      description: lang === "ko" ? "추가 클래스명" : "Additional class name",
      type: "string",
      default: "-"
    },
    {
      key: "drag",
      name: "drag",
      description:
        lang === "ko"
          ? "드래그로 슬라이드 넘기기 활성화 여부"
          : "Whether to enable drag to slide",
      type: "boolean",
      default: "true"
    },
    {
      key: "style",
      name: "style",
      description: lang === "ko" ? "추가 스타일" : "Additional style",
      type: "CSSProperties",
      default: "{}"
    },
    {
      key: "navBtn",
      name: "navBtn",
      description:
        lang === "ko"
          ? "네비게이션 버튼 표시 여부"
          : "Whether to show navigation buttons",
      type: "boolean",
      default: "true"
    },
    {
      key: "leftBtnIcon",
      name: "leftBtnIcon",
      description: lang === "ko" ? "왼쪽 버튼 아이콘" : "Left button icon",
      type: "ReactNode",
      default: "<AngleLeft size={30} />"
    },
    {
      key: "rightBtnIcon",
      name: "rightBtnIcon",
      description: lang === "ko" ? "오른쪽 버튼 아이콘" : "Right button icon",
      type: "ReactNode",
      default: "<AngleRight size={30} />"
    },
    {
      key: "effectType",
      name: "effectType",
      description: lang === "ko" ? "전환 효과 타입" : "Transition effect type.",
      type: <>{tagRender(["overlap", "fade", "slide", "scale", "stack"])}</>,
      default: <Tag>fade</Tag>
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
