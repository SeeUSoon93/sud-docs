import { useMobile } from "../../../context/mobileContext";
import { Typography, Card, Avatar, Tag } from "sud-ui";
import { animationExamples } from "./data/animationData";

export default function Animation() {
  const { isMobile } = useMobile();

  return (
    <div className="flex flex-col gap-40 pd-20 w-100">
      <div className="flex flex-col gap-20">
        <Typography as="h1" gmarket="Medium" size="3xl">
          애니메이션 (Animation)
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
          Soon UI Design에서는 <b>className</b>을 이용하여 적용할 수 있는 간단한
          Hover-Animation 몇가지를 제공합니다.
          <br />
          className으로 Hover-Animation을 사용하기 위해서는 아래처럼 css 파일을
          불러와야 합니다.
        </Typography>
        <Card colorType="sub" border={false} shadow="none" width="100%">
          <Typography
            as="code"
            code
            size="base"
            style={{
              display: "block",
              whiteSpace: "pre",
              overflowX: "auto",
              padding: "16px"
            }}
          >
            {`import "sud-ui/dist/style.css";`}
          </Typography>
        </Card>
      </div>

      <div className="flex flex-col gap-20">
        <Typography as="h2" gmarket="Medium" size="2xl">
          애니메이션 종류
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
          <Tag style={{ display: "inline-block", margin: "0 4px" }}>
            hover-transition-fast
          </Tag>
          <Tag style={{ display: "inline-block", margin: "0 4px" }}>
            hover-transition-normal
          </Tag>
          <Tag style={{ display: "inline-block", margin: "0 4px" }}>
            hover-transition-slow
          </Tag>
          클래스를 함께 사용하여 호버 시 전환 속도를 조절할 수 있습니다.
        </Typography>
        <div className={`grid ${isMobile ? "col-1" : "col-2"} gap-20`}>
          {animationExamples.map((example, index) => (
            <Card key={index} title={example.title} width="100%">
              <div className="flex flex-col gap-20">
                <Card shadow="none" width="100%">
                  <div className="flex flex-col item-cen pd-20">
                    <div className={example.className} style={example.style}>
                      <Avatar />
                    </div>
                  </div>
                </Card>
                <Typography>{example.description}</Typography>
                <Card colorType="sub" border={false} shadow="none" width="100%">
                  <Typography
                    as="code"
                    code
                    size="base"
                    style={{
                      display: "block",
                      whiteSpace: "pre",
                      overflowX: "auto",
                      padding: "16px"
                    }}
                  >
                    {`<div className="${example.className}"${
                      example.style
                        ? ` style={${JSON.stringify(example.style)}}`
                        : ""
                    }>
  <Avatar />
</div>`}
                  </Typography>
                </Card>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
