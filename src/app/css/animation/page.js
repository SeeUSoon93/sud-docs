"use client";

import { useMobile } from "../../_lib/context/mobileContext";
import { Typography, Card, Avatar, Tag, toast } from "sud-ui";
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
          </>
        }
      />
      <div className={`grid ${isMobile ? "col-1" : "col-2"} gap-20`}>
        {animationExamples.map((example, index) => (
          <ExampleBlock
            key={index}
            title={example.title}
            render={
              <>
                <div className="flex flex-col item-cen pd-20">
                  <div className={example.className} style={example.style}>
                    <Avatar />
                  </div>
                </div>
              </>
            }
            description={example.description}
            code={selected === "javascript" ? example.jscode : example.tscode}
            select={selected}
            setSelected={setSelected}
          />
        ))}
      </div>
    </div>
  );
}
