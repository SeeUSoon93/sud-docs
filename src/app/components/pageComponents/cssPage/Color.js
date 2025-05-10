import { useMobile } from "../../../context/mobileContext";
import { Button, Card, Segmented, Table, Tag, Typography } from "sud-ui";
import { colors, colorPalettes } from "../../../constants/colors";
import { useState } from "react";
import { jsCode, tsCode } from "./data/colorExampleCode";
import { LogoGithub } from "sud-icons";

export default function Color() {
  const { isMobile } = useMobile();

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
            {colorInfo.description}
          </Typography>
        </div>
        <div className="flex flex-col gap-2">
          {Array.from({ length: levels }, (_, i) => i + 1).map((num) => (
            <Card
              key={`${colorName}-${num}`}
              background={colors[colorName][num]}
              style={{ width: "100%", textAlign: "center" }}
              shadow="none"
              shape="square"
              border={false}
            >
              <div className="flex jus-bet item-cen">
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
  const handleSegmentChange = (value) => {
    setSelected(value);
  };
  const options = [
    { label: "javascript", value: "javascript" },
    { label: "typescript", value: "typescript" }
  ];

  return (
    <div className="flex flex-col gap-40 pd-20 w-100">
      <div className="flex flex-col gap-10">
        <Typography as="h1" gmarket="Medium" size="3xl">
          색상 (Color)
        </Typography>
        <Typography
          as="span"
          pretendard="R"
          size="base"
          style={{
            whiteSpace: "pre-wrap",
            wordBreak: "keep-all"
          }}
        >
          Soon UI Design 색상 시스템은{" "}
          <b>디자인 일관성과 커스터마이징의 유연성</b>을 만족시키기 위해
          설계되었습니다.
          <br /> 총 28종의 색상군과 1~10단계의 명도 시스템을 바탕으로,{" "}
          <b>토큰 기반 설계</b>를 적용하여 디자인 시스템을 구성합니다.
          <br />
          <br />각 색상은
          <Tag
            colorType="red"
            style={{ display: "inline-block", margin: "0 4px" }}
          >
            red-6
          </Tag>
          <Tag
            colorType="blue"
            style={{ display: "inline-block", margin: "0 4px" }}
          >
            blue-3
          </Tag>
          <Tag
            colorType="forest"
            style={{ display: "inline-block", margin: "0 4px" }}
          >
            forest-5
          </Tag>
          와 같이 색상군과 명도 단계를 통해 표현됩니다.
        </Typography>
      </div>

      <div className="flex flex-col gap-10">
        <Typography as="h2" gmarket="Medium" size="xl">
          색상 시스템
        </Typography>
        <Typography
          as="div"
          pretendard="R"
          size="span"
          style={{
            whiteSpace: "pre-wrap",
            wordBreak: "keep-all"
          }}
        >
          색상 시스템은 3개의 계층구조로 나뉩니다.
        </Typography>
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
              BasePalette: "색상군별로 정의된 1~10단계의 명도 팔레트",
              ComponentPalette: "컴포넌트별 기본 색상 매핑",
              SemanticToken:
                "의미 기반 색상 (danger, warning, info, success)을 특정 색상군에 연결해 상태 표현에 활용"
            }
          ]}
        />
      </div>

      <div className="flex flex-col gap-10">
        <Typography as="h2" gmarket="Medium" size="xl">
          기본 팔레트(Base Palette)
        </Typography>
        {colorGroups.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className={`grid ${isMobile ? "col-1" : "col-3"} gap-20`}
          >
            {group.map((colorName) => renderColorPalette(colorName))}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-10">
        <Typography as="h2" gmarket="Medium" size="xl">
          테마 커스텀(Theme Customization)
        </Typography>
        <Typography as="span" pretendard="R" size="base">
          SoonUIDesign 컴포넌트에서 제공하는 테마 기능을 사용하여 커스텀 테마를
          적용할 수 있습니다.
          <br />
          Base Palette와 Component Palette를 커스텀 테마에 적용할 수 있습니다.
        </Typography>
        <Tag className="mg-20" colorType="sky" style={{ cursor: "pointer" }}>
          <a
            className="flex gap-10 item-cen"
            href="https://github.com/SeeUSoon93/sud-docs/tree/master/src/app/sourceCode/theme"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoGithub />
            View Theme Source Code
          </a>
        </Tag>
        <Segmented
          value={selected}
          onChange={handleSegmentChange}
          options={options}
        />
        <Card
          colorType="sub"
          border={false}
          shadow="none"
          width="100%"
          height="500px"
          style={{ overflow: "auto" }}
        >
          <Typography
            as="code"
            code
            style={{
              display: "block",
              whiteSpace: "pre",
              overflowX: "auto",
              padding: "16px",
              lineHeight: "1.6"
            }}
          >
            {selected === "javascript" ? jsCode : tsCode}
          </Typography>
        </Card>
      </div>
    </div>
  );
}
