"use client";
import { useMobile } from "../../_lib/context/mobileContext";
import { Card, Segmented, Table, Typography } from "sud-ui";
import {
  FONT_DATA,
  fontColumns,
  fontTableData,
  mobileFontTableData,
  weightData
} from "./data/fontData";
import { fontExampleCode } from "./data/code";
import { ExampleBlock, MainTitle } from "../../_lib/components/common/render";
import { useEffect, useState } from "react";

export default function Font() {
  const { isMobile } = useMobile();

  const [font, setFont] = useState("pretendard");
  const [weight, setWeight] = useState(weightData[font][0].value);
  const [selected, setSelected] = useState("javascript");

  useEffect(() => {
    setWeight(weightData[font][0].value);
  }, [font]);

  return (
    <div className="flex flex-col gap-40 pd-20 w-100">
      <MainTitle
        title={"폰트 (Font)"}
        description={
          <>
            Soon UI Design에서는{" "}
            <b>"Pretendard", "Gmarket Sans", "SUITE", "IntelOneMono-Medium"</b>
            4가지 폰트를 사용합니다.
            <br />
            Typography 컴포넌트에서 폰트를 선택할 수 있습니다.
            <br />
            <br />
            Typography 컴포넌트의 속성 중 code 값을 true로 설정하면
            IntelOneMono-Medium폰트가 사용됩니다.
            <br />
            그외에 폰트는 폰트 이름을 속성으로 사용하고 그 값을 이용하여
            weight를 설정할 수 있습니다.
            <br />
            <br />
          </>
        }
        etc={
          isMobile ? (
            <div className="flex flex-col gap-20">
              {FONT_DATA.map(({ font }) => (
                <Table
                  key={font}
                  columns={[
                    {
                      key: "weight",
                      title: fontColumns.find((col) => col.key === font).title,
                      dataIndex: "weight"
                    }
                  ]}
                  dataSource={mobileFontTableData[font]}
                />
              ))}
            </div>
          ) : (
            <Table columns={fontColumns} dataSource={fontTableData} />
          )
        }
      />

      <div className="flex flex-col gap-10">
        <ExampleBlock
          render={
            <div className="flex flex-col gap-10 item-cen jus-cen">
              <Segmented
                options={[
                  { label: "Pretendard", value: "pretendard" },
                  { label: "Gmarket Sans", value: "gmarket" },
                  { label: "SUITE", value: "suite" },
                  { label: "IntelOneMono-Medium", value: "intelone" }
                ]}
                value={font}
                onChange={(value) => setFont(value)}
              />
              <Segmented
                options={weightData[font]}
                value={weight}
                onChange={(value) => setWeight(value)}
              />
              <Card style={{ width: "100%" }}>
                <div className="flex flex-col jus-cen item-cen gap-10">
                  {font === "intelone" ? (
                    <Typography size="3xl" code>
                      I want to ride on a squirrel wheel
                    </Typography>
                  ) : (
                    <Typography size="3xl" {...{ [font]: weight }}>
                      다람쥐 헌 쳇바퀴에 타고파
                    </Typography>
                  )}
                </div>
              </Card>
            </div>
          }
          title="폰트 사용 예제"
          select={selected}
          setSelected={setSelected}
          code={
            selected === "javascript"
              ? fontExampleCode.javascript
              : fontExampleCode.typescript
          }
        />
      </div>
    </div>
  );
}
