export const fontExampleCode = {
  javascript: `import { Card, Segmented, Typography } from "sud-ui";
import { useState } from "react";

// 폰트 두께 데이터 정의
const weightData = {
  pretendard: [
    { label: "T", value: "T" },
    { label: "EL", value: "EL" },
    { label: "L", value: "L" },
    { label: "R", value: "R" },
    { label: "M", value: "M" },
    { label: "SB", value: "SB" },
    { label: "B", value: "B" },
    { label: "Black", value: "Black" }
  ],
  gmarket: [
    { label: "Light", value: "Light" },
    { label: "Medium", value: "Medium" },
    { label: "Bold", value: "Bold" }
  ],
  suite: [
    { label: "L", value: "L" },
    { label: "R", value: "R" },
    { label: "M", value: "M" },
    { label: "SM", value: "SM" },
    { label: "B", value: "B" },
    { label: "H", value: "H" }
  ],
  intelone: [
    { label: "Medium", value: "Medium" }
  ]
};

function FontExample() {
  const [font, setFont] = useState("pretendard");
  const [weight, setWeight] = useState("R");

  return (
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
  );
}`,

  typescript: `import { Card, Segmented, Typography } from "sud-ui";
import { useState } from "react";

// 폰트 두께 데이터 정의
const weightData = {
  pretendard: [
    { label: "T", value: "T" },
    { label: "EL", value: "EL" },
    { label: "L", value: "L" },
    { label: "R", value: "R" },
    { label: "M", value: "M" },
    { label: "SB", value: "SB" },
    { label: "B", value: "B" },
    { label: "Black", value: "Black" }
  ],
  gmarket: [
    { label: "Light", value: "Light" },
    { label: "Medium", value: "Medium" },
    { label: "Bold", value: "Bold" }
  ],
  suite: [
    { label: "L", value: "L" },
    { label: "R", value: "R" },
    { label: "M", value: "M" },
    { label: "SM", value: "SM" },
    { label: "B", value: "B" },
    { label: "H", value: "H" }
  ],
  intelone: [
    { label: "Medium", value: "Medium" }
  ]
};

const FontExample: React.FC = () => {
  const [font, setFont] = useState("pretendard");
  const [weight, setWeight] = useState("R");

  return (
    <div className="flex flex-col gap-10 item-cen jus-cen">
      <Segmented
        options={[
          { label: "Pretendard", value: "pretendard" },
          { label: "Gmarket Sans", value: "gmarket" },
          { label: "SUITE", value: "suite" },
          { label: "IntelOneMono-Medium", value: "intelone" }
        ]}
        value={font}
        onChange={(value: string) => setFont(value)}
      />
      <Segmented
        options={weightData[font]}
        value={weight}
        onChange={(value: string) => setWeight(value)}
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
  );
};`
};
