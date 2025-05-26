"use client";

import { useMobile } from "../../_lib/context/mobileContext";
import { useLang } from "../../_lib/context/langContext";
import { Typography, Card, Input, toast } from "sud-ui";
import { classNameExamples } from "./data/classNameData";
import { useState } from "react";
import {
  ExampleBlock,
  InstallCommand,
  MainTitle,
  SubTitleAndDescription
} from "../../_lib/components/common/render";

export default function ClassName() {
  const { isMobile } = useMobile();
  const { lang } = useLang();
  const [search, setSearch] = useState("");

  const filteredExamples = classNameExamples.filter(
    (example) =>
      example.title.includes(search) ||
      (example.descriptionText && example.descriptionText.includes(search)) ||
      example.sample.includes(search)
  );

  return (
    <div className="flex flex-col gap-40 pd-20 w-100">
      <MainTitle
        title={"className"}
        description={
          <>
            {lang === "ko" ? (
              <>
                Soon UI Design에서는 <b>className</b>을 이용하여 css스타일을
                적용할 수 있습니다.
                <br />
                className으로 css스타일을 적용하기 위해서는 아래처럼 css 파일을
                불러와야 합니다.
              </>
            ) : (
              <>
                In Soon UI Design, you can apply CSS styles using{" "}
                <b>className</b>.
                <br />
                To apply CSS styles with className, you need to import the CSS
                file as shown below.
              </>
            )}
          </>
        }
        etc={<InstallCommand command="import 'sud-ui/dist/style.css';" />}
      />

      <SubTitleAndDescription
        title={lang === "ko" ? "className 규칙" : "className Rules"}
        description={
          <>
            {lang === "ko" ? (
              <>
                Soon UI Design에서는 <b>className</b>을 이용하여 css스타일을
                적용할 수 있습니다.
                <br />
                <br />
              </>
            ) : (
              <>
                In Soon UI Design, you can apply CSS styles using{" "}
                <b>className</b>.
                <br />
                <br />
              </>
            )}
          </>
        }
        search={
          <Input
            placeholder={
              lang === "ko" ? "검색어를 입력해주세요." : "Enter search term"
            }
            value={search}
            style={{ width: "100%" }}
            onChange={(e) => setSearch(e.target.value)}
          />
        }
        etc={filteredExamples.map((example, index) => (
          <ExampleBlock
            key={index}
            description={example.description}
            render={
              <Typography as="p" pretendard="B" size="lg">
                {example.title}
              </Typography>
            }
            code={example.sample}
          />
        ))}
        grid={true}
        isMobile={isMobile}
      />
    </div>
  );
}
