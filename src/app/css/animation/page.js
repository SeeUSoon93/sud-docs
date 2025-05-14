"use client";

import { useMobile } from "../../_lib/context/mobileContext";
import { Typography, Card, Avatar, Tag, toast, Radio } from "sud-ui";
import { animationExamples } from "./data/animationData";
import {
  InstallCommand,
  MainTitle,
  SubTitleAndDescription,
  ExampleBlock
} from "../../_lib/components/common/render";
import { useState } from "react";
export default function Animation() {
  const { isMobile } = useMobile();

  const [selected, setSelected] = useState("javascript");
  const [selectedStage, setSelectedStage] = useState(1);

  return (
    <div className="flex flex-col gap-40 pd-20 w-100">
      <MainTitle
        title={"애니메이션 (Animation)"}
        description={
          <>
            Soon UI Design에서는 <b>className</b>을 이용하여 적용할 수 있는
            간단한 Hover-Animation 몇가지를 제공합니다.
            <br />
            className으로 Hover-Animation을 사용하기 위해서는 아래처럼 css
            파일을 불러와야 합니다.
          </>
        }
        etc={<InstallCommand command="import 'sud-ui/dist/style.css';" />}
      />
      <SubTitleAndDescription
        title={"애니메이션 종류"}
        description={
          <>
            각 효과별 class이름 뒤에 숫자를 붙여 강도를 조절할 수 있습니다.
            <br />
            예) <Tag>hover-scale-[1-10]</Tag>
          </>
        }
        etc={animationExamples.map((example, index) => (
          <ExampleBlock
            key={index}
            title={example.title}
            render={
              <>
                <Card
                  style={{ width: "100%" }}
                  shadow="none"
                  title={
                    <div className="flex jus-cen">
                      <Typography pretendard="B" size="lg">
                        단계 선택
                      </Typography>
                    </div>
                  }
                >
                  <Radio.Group
                    value={selectedStage}
                    onChange={setSelectedStage}
                    cols={5}
                    direction="horizontal"
                    options={Array.from({ length: 10 }, (_, index) => ({
                      value: index + 1,
                      label: `${index + 1}`
                    }))}
                  />
                </Card>
                <div className="flex flex-col item-cen jus-cen pd-20 gap-10">
                  <div
                    className={`${example.className}${selectedStage}`}
                    style={{ borderRadius: "50%", ...example.style }}
                  >
                    <Avatar />
                  </div>
                  <Typography as="p" pretendard="B" size="lg">
                    Hover me!
                  </Typography>
                </div>
              </>
            }
            description={example.description}
            code={selected === "javascript" ? example.jscode : example.tscode}
            select={selected}
            setSelected={setSelected}
          />
        ))}
        grid={true}
        isMobile={isMobile}
      />
    </div>
  );
}
