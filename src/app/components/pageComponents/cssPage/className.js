import { useMobile } from "../../../context/mobileContext";
import { Typography, Card, Input, toast } from "sud-ui";
import { classNameExamples } from "./data/classNameData";
import { useState } from "react";

export default function ClassName() {
  const { isMobile } = useMobile();
  const [search, setSearch] = useState("");

  const filteredExamples = classNameExamples.filter(
    (example) =>
      example.title.includes(search) ||
      (example.descriptionText && example.descriptionText.includes(search)) ||
      example.sample.includes(search)
  );

  return (
    <div className="flex flex-col gap-40 pd-20 w-100">
      <div className="flex flex-col gap-20">
        <Typography as="h1" gmarket="Medium" size="3xl">
          className
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
          Soon UI Design에서는 <b>className</b>을 이용하여 css스타일을 적용할 수
          있습니다.
          <br />
          className으로 css스타일을 적용하기 위해서는 아래처럼 css 파일을
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
              padding: "16px",
              cursor: "pointer"
            }}
            onClick={() => {
              navigator.clipboard.writeText("import 'sud-ui/dist/style.css';");
              toast.success("복사되었습니다.");
            }}
          >
            {`import "sud-ui/dist/style.css";`}
          </Typography>
        </Card>
      </div>
      <div className="flex flex-col gap-20">
        <Typography as="h2" gmarket="Medium" size="2xl">
          className 규칙
        </Typography>
        <Input
          placeholder="검색어를 입력해주세요."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className={`grid ${isMobile ? "col-1" : "col-2"} gap-20`}>
          {filteredExamples.map((example, index) => (
            <Card key={index} title={example.title} width="100%">
              <div className="flex flex-col gap-20">
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {example.description}
                </div>
                <Card
                  colorType="sub"
                  border={false}
                  shadow="none"
                  width="100%"
                  style={{ height: "200px", overflow: "auto" }}
                >
                  <Typography
                    as="code"
                    code
                    size="base"
                    style={{
                      display: "block",
                      whiteSpace: "pre",
                      overflowX: "auto",
                      padding: "16px",
                      cursor: "pointer"
                    }}
                    onClick={() => {
                      navigator.clipboard.writeText(example.sample);
                      toast.success("복사되었습니다.");
                    }}
                  >
                    {example.sample}
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
