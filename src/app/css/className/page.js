"use client";

import { useMobile } from "../../_lib/context/mobileContext";
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
            Soon UI Design에서는 <b>className</b>을 이용하여 css스타일을 적용할
            수 있습니다.
            <br />
            className으로 css스타일을 적용하기 위해서는 아래처럼 css 파일을
            불러와야 합니다.
          </>
        }
        etc={<InstallCommand command="import 'sud-ui/dist/style.css';" />}
      />

      <SubTitleAndDescription
        title={"className 규칙"}
        description={
          <>
            Soon UI Design에서는 <b>className</b>을 이용하여 css스타일을 적용할
            수 있습니다.
            <br />
            <br />
          </>
        }
        search={
          <Input
            placeholder="검색어를 입력해주세요."
            value={search}
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
      />
    </div>
  );
}
