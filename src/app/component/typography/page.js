"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { useLang } from "../../_lib/context/langContext";
import { Card, Input, Segmented, Tag, Typography } from "sud-ui";
import { tagRender } from "../../_lib/components/common/render";
import {
  fontSizeTypeTags,
  fontWeightTypeTags,
  gmarketTypeTags,
  pretendardTypeTags,
  suiteTypeTags
} from "../../_lib/components/common/defaultType";

import { useEffect, useState } from "react";
import { weightData } from "../../css/font/data/fontData";

export default function TypographyPage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();

  const name = "Typography";
  const description = (
    <>
      {lang === "ko"
        ? "기본적인 텍스트 표시 컴포넌트입니다."
        : "The component for displaying basic text."}
    </>
  );

  const IMPORT_COMMAND = "import { Timeline } from 'sud-ui';";

  const whenToUse =
    lang === "ko"
      ? ["기본적인 텍스트 표시 컴포넌트입니다."]
      : ["Use when displaying basic text."];

  const [font, setFont] = useState("pretendard");
  const [weight, setWeight] = useState(weightData[font][0].value);
  const [size, setSize] = useState("3xl");
  const [color, setColor] = useState("");

  const sizeData = [
    { label: "xs", value: "xs" },
    { label: "sm", value: "sm" },
    { label: "base", value: "base" },
    { label: "lg", value: "lg" },
    { label: "xl", value: "xl" },
    { label: "2xl", value: "2xl" },
    { label: "3xl", value: "3xl" },
    { label: "4xl", value: "4xl" }
  ];

  useEffect(() => {
    setWeight(weightData[font][0].value);
  }, [font]);

  const examples = [
    {
      title: "Basic Usage",
      description: lang === "ko" ? "기본적인 사용 방법입니다." : "Basic usage.",
      render: (
        <div className="flex flex-col gap-10 item-cen jus-cen">
          <Card style={{ width: "100%" }} shadow="none">
            <div className="flex flex-col gap-10">
              <Segmented
                block
                options={[
                  { label: "Pretendard", value: "pretendard" },
                  { label: "Gmarket Sans", value: "gmarket" },
                  { label: "SUITE", value: "suite" },
                  { label: "IntelOneMono-Medium", value: "intelone" }
                ]}
                value={font}
                onChange={(value) => setFont(value)}
              />
              <Segmented
                block
                options={weightData[font]}
                value={weight}
                onChange={(value) => setWeight(value)}
              />
              <Segmented
                block
                options={sizeData}
                value={size}
                onChange={(value) => setSize(value)}
              />
              <Input
                style={{ width: "100%" }}
                shadow="none"
                placeholder="Enter text color(palette value or HEX code. ex: #000000, forest, orange...)"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
          </Card>
          <div className="flex flex-col jus-cen item-cen gap-10">
            {font === "intelone" ? (
              <Typography as="p" size={size} code color={color}>
                The quick brown fox jumps over the lazy dog
              </Typography>
            ) : (
              <Typography
                as="p"
                size={size}
                {...{ [font]: weight }}
                color={color}
              >
                {lang === "ko"
                  ? "다람쥐 헌 쳇바퀴에 타고파"
                  : "The quick brown fox jumps over the lazy dog"}
              </Typography>
            )}
          </div>
        </div>
      ),
      jscode: `import { Typography, Card, Segmented, Input } from "sud-ui";
import { useState, useEffect } from "react";

const weightData = {
  pretendard: [
    { label: "T", value: "T" },
    { label: "EL", value: "EL" },
    { label: "L", value: "L" },
    { label: "R", value: "R" },
    { label: "M", value: "M" },
    { label: "SB", value: "SB" },
    { label: "B", value: "B" },
    { label: "Black", value: "Black" }
  ],
  gmarket: [
    { label: "Light", value: "Light" },
    { label: "Medium", value: "Medium" },
    { label: "Bold", value: "Bold" }
  ],
  suite: [
    { label: "L", value: "L" },
    { label: "R", value: "R" },
    { label: "M", value: "M" },
    { label: "SM", value: "SM" },
    { label: "B", value: "B" },
    { label: "H", value: "H" }
  ],
  intelone: [{ label: "Medium", value: "Medium" }]
};

const sizeData = [
  { label: "xs", value: "xs" },
  { label: "sm", value: "sm" },
  { label: "base", value: "base" },
  { label: "lg", value: "lg" },
  { label: "xl", value: "xl" },
  { label: "2xl", value: "2xl" },
  { label: "3xl", value: "3xl" },
  { label: "4xl", value: "4xl" }
];

export default function App() {
  const [font, setFont] = useState("pretendard");
  const [weight, setWeight] = useState(weightData[font][0].value);
  const [size, setSize] = useState("3xl");
  const [color, setColor] = useState("");

  useEffect(() => {
    setWeight(weightData[font][0].value);
  }, [font]);

  return (
    <div className="flex flex-col gap-10 item-cen jus-cen">
      <Card style={{ width: "100%" }} shadow="none">
        <div className="flex flex-col gap-10">
          <Segmented
            block
            options={[
              { label: "Pretendard", value: "pretendard" },
              { label: "Gmarket Sans", value: "gmarket" },
              { label: "SUITE", value: "suite" },
              { label: "IntelOneMono-Medium", value: "intelone" }
            ]}
            value={font}
            onChange={(value) => setFont(value)}
          />
          <Segmented
            block
            options={weightData[font]}
            value={weight}
            onChange={(value) => setWeight(value)}
          />
          <Segmented
            block
            options={sizeData}
            value={size}
            onChange={(value) => setSize(value)}
          />
          <Input
            style={{ width: "100%" }}
            shadow="none"
            placeholder="Enter text color(palette value or HEX code. ex: #000000, forest, orange...)"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
      </Card>
      <div className="flex flex-col jus-cen item-cen gap-10">
        {font === "intelone" ? (
          <Typography as="p" size={size} code color={color}>
            The quick brown fox jumps over the lazy dog
          </Typography>
        ) : (
          <Typography as="p" size={size} {...{ [font]: weight }} color={color}>
            The quick brown fox jumps over the lazy dog
          </Typography>
        )}
      </div>
    </div>
  )
}`,
      tscode: `import { Typography, Card, Segmented, Input } from "sud-ui";
import React, { useState, useEffect } from "react";

interface WeightOption {
  label: string;
  value: string;
}

interface WeightData {
  [key: string]: WeightOption[];
}

const weightData: WeightData = {
  pretendard: [
    { label: "T", value: "T" },
    { label: "EL", value: "EL" },
    { label: "L", value: "L" },
    { label: "R", value: "R" },
    { label: "M", value: "M" },
    { label: "SB", value: "SB" },
    { label: "B", value: "B" },
    { label: "Black", value: "Black" }
  ],
  gmarket: [
    { label: "Light", value: "Light" },
    { label: "Medium", value: "Medium" },
    { label: "Bold", value: "Bold" }
  ],
  suite: [
    { label: "L", value: "L" },
    { label: "R", value: "R" },
    { label: "M", value: "M" },
    { label: "SM", value: "SM" },
    { label: "B", value: "B" },
    { label: "H", value: "H" }
  ],
  intelone: [{ label: "Medium", value: "Medium" }]
};

const sizeData = [
  { label: "xs", value: "xs" },
  { label: "sm", value: "sm" },
  { label: "base", value: "base" },
  { label: "lg", value: "lg" },
  { label: "xl", value: "xl" },
  { label: "2xl", value: "2xl" },
  { label: "3xl", value: "3xl" },
  { label: "4xl", value: "4xl" }
];

export default function App(): React.ReactElement {
  const [font, setFont] = useState<string>("pretendard");
  const [weight, setWeight] = useState<string>(weightData[font][0].value);
  const [size, setSize] = useState<string>("3xl");
  const [color, setColor] = useState<string>("");

  useEffect(() => {
    setWeight(weightData[font][0].value);
  }, [font]);

  return (
    <div className="flex flex-col gap-10 item-cen jus-cen">
      <Card style={{ width: "100%" }} shadow="none">
        <div className="flex flex-col gap-10">
          <Segmented
            block
            options={[
              { label: "Pretendard", value: "pretendard" },
              { label: "Gmarket Sans", value: "gmarket" },
              { label: "SUITE", value: "suite" },
              { label: "IntelOneMono-Medium", value: "intelone" }
            ]}
            value={font}
            onChange={(value) => setFont(value)}
          />
          <Segmented
            block
            options={weightData[font]}
            value={weight}
            onChange={(value) => setWeight(value)}
          />
          <Segmented
            block
            options={sizeData}
            value={size}
            onChange={(value) => setSize(value)}
          />
          <Input
            style={{ width: "100%" }}
            shadow="none"
            placeholder="Enter text color(palette value or HEX code. ex: #000000, forest, orange...)"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
      </Card>
      <div className="flex flex-col jus-cen item-cen gap-10">
        {font === "intelone" ? (
          <Typography as="p" size={size} code color={color}>
            The quick brown fox jumps over the lazy dog
          </Typography>
        ) : (
          <Typography as="p" size={size} {...{ [font]: weight }} color={color}>
            The quick brown fox jumps over the lazy dog
          </Typography>
        )}
      </div>
    </div>
  )
}`
    }
  ];

  const howToUseTableData = [
    {
      key: "children",
      name: "children",
      description: lang === "ko" ? "텍스트 내용" : "Text content",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "pretendard",
      name: "pretendard",
      description:
        lang === "ko" ? "Pretendard 폰트 두께" : "Pretendard font weight",
      type: pretendardTypeTags,
      default: <Tag>R</Tag>
    },
    {
      key: "gmarket",
      name: "gmarket",
      description: lang === "ko" ? "Gmarket 폰트 두께" : "Gmarket font weight",
      type: gmarketTypeTags,
      default: "-"
    },
    {
      key: "suite",
      name: "suite",
      description: lang === "ko" ? "SUITE 폰트 두께" : "SUITE font weight",
      type: suiteTypeTags,
      default: "-"
    },
    {
      key: "code",
      name: "code",
      description:
        lang === "ko" ? "코드 폰트 사용 여부" : "Whether to use code font",
      type: "boolean",
      default: "false"
    },
    {
      key: "fontFamily",
      name: "fontFamily",
      description: lang === "ko" ? "커스텀 폰트 패밀리" : "Custom font family",
      type: "string",
      default: "-"
    },
    {
      key: "size",
      name: "size",
      description: lang === "ko" ? "폰트 크기" : "Font size",
      type: fontSizeTypeTags,
      default: <Tag>base</Tag>
    },
    {
      key: "weight",
      name: "weight",
      description: lang === "ko" ? "폰트 두께" : "Font weight",
      type: fontWeightTypeTags,
      default: <Tag>normal</Tag>
    },
    {
      key: "as",
      name: "as",
      description:
        lang === "ko" ? "렌더링할 HTML 요소" : "HTML element to render",
      type: <>{tagRender(["span", "p", "h1", "h2", "h3", "h4", "h5", "h6"])}</>,
      default: <Tag>span</Tag>
    },
    {
      key: "color",
      name: "color",
      description:
        lang === "ko"
          ? "텍스트 색상(palette값 또는 HEX code)"
          : "Text color (palette value or HEX code)",
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
      grid={false}
      isMobile={isMobile}
    />
  );
}
