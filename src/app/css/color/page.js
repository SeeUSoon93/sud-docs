"use client";
import { useMobile } from "../../_lib/context/mobileContext";
import { useLang } from "../../_lib/context/langContext";
import { Card, Table, Tag, Typography, toast } from "sud-ui";
import { colors, colorPalettes } from "../../_lib/constants/colors";
import { useState } from "react";
import { jsCode, tsCode } from "./data/colorExampleCode";
import { LogoGithub } from "sud-icons";
import {
  CodeSegment,
  MainTitle,
  SubTitleAndDescription
} from "../../_lib/components/common/render";

export default function Color() {
  const { isMobile } = useMobile();
  const { lang } = useLang();
  const renderColorPalette = (colorName) => {
    const colorInfo = colorPalettes[colorName];
    const levels = 10;

    return (
      <div key={colorName} className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <Typography as="h3" gmarket="Medium" size="base">
            {colorInfo.name}
          </Typography>
          <Typography as="span" pretendard="R" size="sm" color="neutral-7">
            {lang === "ko"
              ? colorInfo.description.ko
              : colorInfo.description.en}
          </Typography>
        </div>
        <div className="flex flex-col gap-2">
          {Array.from({ length: levels }, (_, i) => i + 1).map((num) => (
            <Card
              key={`${colorName}-${num}`}
              background={colors[colorName][num]}
              style={{ width: "100%", textAlign: "center", cursor: "pointer" }}
              shadow="none"
              shape="square"
              border={false}
            >
              <div
                className="flex jus-bet item-cen"
                onClick={() => {
                  navigator.clipboard.writeText(colors[colorName][num]);
                  toast.success(lang === "ko" ? "복사되었습니다." : "Copied.");
                }}
              >
                <Typography
                  as="span"
                  size="xs"
                  gmarket="Medium"
                  color={num <= 5 ? "neutral-10" : "neutral-1"}
                >
                  {colorName}-{num}
                </Typography>
                <Typography
                  as="span"
                  size="xs"
                  pretendard="R"
                  color={num <= 5 ? "neutral-10" : "neutral-1"}
                >
                  {colors[colorName][num]}
                </Typography>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  const colorGroups = Object.keys(colorPalettes).reduce((acc, color, index) => {
    const groupIndex = Math.floor(index / 3);
    if (!acc[groupIndex]) acc[groupIndex] = [];
    acc[groupIndex].push(color);
    return acc;
  }, []);

  const [selected, setSelected] = useState("javascript");

  return (
    <div className="flex flex-col gap-40 pd-20 w-100">
      <MainTitle
        title={lang === "ko" ? "색상" : "Color"}
        description={
          <>
            {lang === "ko" ? (
              <>
                Soon UI Design 색상 시스템은{" "}
                <b>디자인 일관성과 커스터마이징의 유연성</b>을 만족시키기 위해
                설계되었습니다.
                <br /> 총 28종의 색상군과 1~10단계의 명도 시스템을 바탕으로,{" "}
                <b>토큰 기반 설계</b>를 적용하여 디자인 시스템을 구성합니다.
                <br />
                <br />각 색상은 <Tag colorType="red">red-6</Tag>{" "}
                <Tag colorType="blue">blue-3</Tag>{" "}
                <Tag colorType="forest">forest-5</Tag> 와 같이 색상군과 명도
                단계를 통해 표현됩니다.
                <br />
                <br />
                컴포넌트의 props 중 <Tag>color</Tag> <Tag>background</Tag>{" "}
                <Tag>borderColor</Tag> 등에 색상이름을 사용하여 색상지정이
                가능합니다.
              </>
            ) : (
              <>
                The Soon UI Design color system is designed to satisfy{" "}
                <b>design consistency and customization flexibility</b>.
                <br /> Based on 28 color groups and a brightness system with 10
                levels, <b>token-based design</b> is applied to construct the
                design system.
                <br />
                <br />
                Each color is expressed through color groups and brightness
                levels, such as <Tag colorType="red">red-6</Tag>{" "}
                <Tag colorType="blue">blue-3</Tag>{" "}
                <Tag colorType="forest">forest-5</Tag>.
                <br />
                <br />
                Colors can be specified by using color names in component props
                such as <Tag>color</Tag> <Tag>background</Tag>{" "}
                <Tag>borderColor</Tag>.
              </>
            )}
          </>
        }
      />
      <SubTitleAndDescription
        title={lang === "ko" ? "색상 시스템" : "Color System"}
        description={
          <>
            {lang === "ko" ? (
              <>색상 시스템은 3개의 계층구조로 나뉩니다.</>
            ) : (
              <>
                The color system is divided into three hierarchical structures.
              </>
            )}
          </>
        }
        etc={
          <Table
            columns={[
              {
                key: "BasePalette",
                title: "Base Palette",
                dataIndex: "BasePalette",
                align: "center"
              },
              {
                key: "ComponentPalette",
                title: "Component Palette",
                dataIndex: "ComponentPalette",
                align: "center"
              },
              {
                key: "SemanticToken",
                title: "Semantic Token",
                dataIndex: "SemanticToken",
                align: "center"
              }
            ]}
            dataSource={[
              {
                key: 1,
                BasePalette:
                  lang === "ko"
                    ? "색상군별로 정의된 1~10단계의 명도 팔레트"
                    : "Color palettes with 1-10 brightness levels defined for each color group",
                ComponentPalette:
                  lang === "ko"
                    ? "컴포넌트별 기본 색상 매핑"
                    : "Default color mapping for each component",
                SemanticToken:
                  lang === "ko"
                    ? "의미 기반 색상 (danger, warning, info, success)을 특정 색상군에 연결해 상태 표현에 활용"
                    : "Links semantic colors (danger, warning, info, success) to specific color groups for state representation"
              }
            ]}
          />
        }
      />

      <SubTitleAndDescription
        title={lang === "ko" ? "기본 팔레트" : "Base Palette"}
        etc={colorGroups.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className={`grid ${isMobile ? "col-1" : "col-3"} gap-20`}
          >
            {group.map((colorName) => renderColorPalette(colorName))}
          </div>
        ))}
      />

      <SubTitleAndDescription
        title={lang === "ko" ? "테마 커스텀" : "Theme Customization"}
        description={
          <>
            {lang === "ko" ? (
              <>
                SoonUIDesign 컴포넌트에서 제공하는 테마 기능을 사용하여 커스텀
                테마를 적용할 수 있습니다.
                <br />
                Base Palette와 Component Palette를 커스텀 테마에 적용할 수
                있습니다.
              </>
            ) : (
              <>
                Use the theme feature provided by SoonUIDesign components to
                apply custom themes.
                <br />
                You can customize both the Base Palette and Component Palette in
                your theme.
              </>
            )}
          </>
        }
        etc={
          <div className="flex flex-col gap-20">
            <Tag colorType="sky" style={{ cursor: "pointer" }}>
              <a
                className="flex gap-10 item-cen"
                href="https://github.com/SeeUSoon93/sud-docs/tree/master/src/app/_lib/sourceCode/theme"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LogoGithub />
                View Theme Source Code
              </a>
            </Tag>
            <CodeSegment
              select={selected}
              setSelected={setSelected}
              code={selected === "javascript" ? jsCode : tsCode}
            />
          </div>
        }
      />
    </div>
  );
}
