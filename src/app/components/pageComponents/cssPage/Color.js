import { useMobile } from "@/app/context/mobileContext";
import { Table, Tag, Typography } from "sud-ui";

export default function Color() {
  const { isMobile } = useMobile();

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
    </div>
  );
}
