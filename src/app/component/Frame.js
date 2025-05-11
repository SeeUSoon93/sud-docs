import { useState } from "react";
import {
  ExampleBlock,
  InstallCommand,
  MainTitle,
  SubTitleAndDescription
} from "../_lib/components/common/render";
import { ErrorCircleOutline } from "sud-icons";
import { Avatar, Card, Typography } from "sud-ui";

export default function Frame({ component, isMobile }) {
  const [selected, setSelected] = useState("javascript");

  return (
    <div className="flex flex-col gap-40 pd-20 w-100">
      {/*  헤더 */}
      <MainTitle
        title={component.name}
        description={component.description}
        etc={<InstallCommand command={component.IMPORT_COMMAND} />}
      />

      {/* 사용주의 사항 */}
      <SubTitleAndDescription
        title={"사용 시 주의사항"}
        etc={component.cautions.map((caution, index) => (
          <div key={index} className="flex flex-row gap-5 item-cen">
            <Typography
              as="div"
              color="red-4"
              className="flex jus-cen item-cen"
            >
              <ErrorCircleOutline size="16" />
            </Typography>
            <Typography
              as="p"
              pretendard="R"
              style={{
                whiteSpace: "pre-wrap",
                wordBreak: "keep-all"
              }}
            >
              {caution}
            </Typography>
          </div>
        ))}
      />

      {/* 예제 */}
      <SubTitleAndDescription
        title={"사용예제"}
        etc={component.examples.map((example, index) => (
          <ExampleBlock
            key={index}
            title={example.title}
            render={example.render}
            description={example.description}
            code={selected === "javascript" ? example.jscode : example.tscode}
            select={selected}
            setSelected={setSelected}
          />
        ))}
      />
    </div>
  );
}
