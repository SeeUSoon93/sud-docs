"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Tag, Progress, DotSpinner, Button } from "sud-ui";
import { useLang } from "../../_lib/context/langContext";
import { tagRender } from "../../_lib/components/common/render";
import { tagColorTypeTags } from "../../_lib/components/common/defaultType";
import React, { useState } from "react";
import { CheckCircleFill, MoodSmileFill, XMarkCircleFill } from "sud-icons";

export default function ProgressPage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();
  const name = "Progress";
  const description =
    lang === "ko" ? (
      <>진행 상태를 표시하는 프로그레스 컴포넌트입니다.</>
    ) : (
      <>A component that displays a progress state.</>
    );

  const IMPORT_COMMAND = "import { Progress } from 'sud-ui';";

  const whenToUse =
    lang === "ko"
      ? ["페이지 또는 데이터의 진행 상태를 표시할 때"]
      : ["When you need to display the progress state of a page or data."];

  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState(0);
  const handleLoading = () => {
    setIsLoading(true);
    setValue(0);
    const interval = setInterval(() => {
      setValue((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
  };

  const examples = [
    {
      title: "Bar Type Usage",
      description:
        lang === "ko"
          ? "막대형 프로그레스 사용 예시입니다."
          : "Example of using bar type progress.",
      render: (
        <div className="flex flex-col jus-cen gap-20">
          <Progress value={50} max={100} unit="percent" />
          <Progress value={20} max={100} unit="%" colorType="forest" />
          <Progress value={70} max={100} colorType="orange" />
        </div>
      ),
      jscode: `import { Progress } from "sud-ui";

export default function App() {
  return (
    <div className="flex flex-col jus-cen gap-20">
      <Progress value={50} max={100} unit="percent" />
      <Progress value={20} max={100} unit="%" colorType="forest" />
      <Progress value={70} max={100} colorType="orange" />
    </div>
  );
}`,
      tscode: `import { Progress } from "sud-ui";
import React from "react";

export default function App(): React.ReactElement {
  return (
    <div className="flex flex-col jus-cen gap-20">
      <Progress value={50} max={100} unit="percent" />
      <Progress value={20} max={100} unit="%" colorType="forest" />
      <Progress value={70} max={100} colorType="orange" />
    </div>
  );
}`
    },
    {
      title: "Circle Type Usage",
      description:
        lang === "ko"
          ? "원형 프로그레스 사용 예시입니다."
          : "Example of using circle type progress.",
      render: (
        <div className="flex jus-cen gap-20">
          <Progress type="circle" value={50} max={100} unit="percent" />
          <Progress
            type="circle"
            value={20}
            max={100}
            unit="%"
            colorType="forest"
          />
          <Progress type="circle" value={70} max={100} colorType="orange" />
        </div>
      ),
      jscode: `import { Progress } from "sud-ui";

export default function App() {
  return (
    <div className="flex jus-cen gap-20">
      <Progress type="circle" value={50} max={100} unit="percent" />
      <Progress
        type="circle"
        value={20}
        max={100}
        unit="%"
        colorType="forest"
      />
      <Progress type="circle" value={70} max={100} colorType="orange" />
    </div>
  );
}`,
      tscode: `import { Progress } from "sud-ui";
import React from "react";

export default function App(): React.ReactElement {
  return (
    <div className="flex jus-cen gap-20">
      <Progress type="circle" value={50} max={100} unit="percent" />
      <Progress
        type="circle"
        value={20}
        max={100}
        unit="%"
        colorType="forest"
      />
      <Progress type="circle" value={70} max={100} colorType="orange" />
    </div>
  );
}`
    },
    {
      title: "Dashboard Type Usage",
      description:
        lang === "ko"
          ? "대시보드 프로그레스 사용 예시입니다."
          : "Example of using dashboard type progress.",
      render: (
        <div className="flex jus-cen gap-20">
          <Progress type="dashboard" value={50} max={100} unit="percent" />
          <Progress
            type="dashboard"
            value={20}
            max={100}
            unit="%"
            colorType="forest"
          />
          <Progress type="dashboard" value={70} max={100} colorType="orange" />
        </div>
      ),
      jscode: `import { Progress } from "sud-ui";

export default function App() {
  return (
    <div className="flex jus-cen gap-20">
      <Progress type="dashboard" value={50} max={100} unit="percent" />
      <Progress
        type="dashboard"
        value={20}
        max={100}
        unit="%"
        colorType="forest"
      />
      <Progress type="dashboard" value={70} max={100} colorType="orange" />
    </div>
  );
}`,
      tscode: `import { Progress } from "sud-ui";
import React from "react";

export default function App(): React.ReactElement {
  return (
    <div className="flex jus-cen gap-20">
      <Progress type="dashboard" value={50} max={100} unit="percent" />
      <Progress
        type="dashboard"
        value={20}
        max={100}
        unit="%"
        colorType="forest"
      />
      <Progress type="dashboard" value={70} max={100} colorType="orange" />
    </div>
  );
}`
    },
    {
      title: "Bar Type Text Position",
      description:
        lang === "ko"
          ? "막대형 프로그레스 텍스트 위치 사용 예시입니다."
          : "Example of using bar type progress text position.",
      render: (
        <div className="flex flex-col jus-cen gap-20">
          <Progress value={50} max={100} valuePosition="inside-start" />
          <Progress
            value={50}
            max={100}
            colorType="rose"
            valuePosition="outside-left"
          />
          <Progress
            value={20}
            max={100}
            colorType="forest"
            valuePosition="inside-center"
          />
          <Progress
            value={70}
            max={100}
            colorType="orange"
            valuePosition="inside-end"
          />
          <Progress
            value={70}
            max={100}
            colorType="cool-gray"
            valuePosition="outside-right"
          />
        </div>
      ),
      jscode: `import { Progress } from "sud-ui";

export default function App() {
  return (
    <div className="flex flex-col jus-cen gap-20">
      <Progress value={50} max={100} valuePosition="inside-start" />
      <Progress
        value={50}
        max={100}
        colorType="rose"
        valuePosition="outside-left"
      />
      <Progress
        value={20}
        max={100}
        colorType="forest"
        valuePosition="inside-center"
      />
      <Progress
        value={70}
        max={100}
        colorType="orange"
        valuePosition="inside-end"
      />
      <Progress
        value={70}
        max={100}
        colorType="cool-gray"
        valuePosition="outside-right"
      />
    </div>
  );
}`,
      tscode: `import { Progress } from "sud-ui";
import React from "react";

export default function App(): React.ReactElement {
  return (
    <div className="flex flex-col jus-cen gap-20">
      <Progress value={50} max={100} valuePosition="inside-start" />
      <Progress
        value={50}
        max={100}
        colorType="rose"
        valuePosition="outside-left"
      />
      <Progress
        value={20}
        max={100}
        colorType="forest"
        valuePosition="inside-center"
      />
      <Progress
        value={70}
        max={100}
        colorType="orange"
        valuePosition="inside-end"
      />
      <Progress
        value={70}
        max={100}
        colorType="cool-gray"
        valuePosition="outside-right"
      />
    </div>
  );
}`
    },
    {
      title: "View Text Option",
      description:
        lang === "ko"
          ? "텍스트 표시 여부를 설정합니다."
          : "Set whether to display text.",
      render: (
        <div className="flex flex-col item-cen jus-cen gap-20">
          <div className="flex item-cen jus-cen gap-20">
            <Progress type="circle" value={50} max={100} showText={false} />
            <Progress type="dashboard" value={20} max={100} showText={false} />
          </div>
          <Progress value={50} max={100} showText={false} />
        </div>
      ),
      jscode: `import { Progress } from "sud-ui";

export default function App() {
  return (
    <div className="flex flex-col item-cen jus-cen gap-20">
      <div className="flex item-cen jus-cen gap-20">
        <Progress type="circle" value={50} max={100} showText={false} />
        <Progress type="dashboard" value={20} max={100} showText={false} />
      </div>
      <Progress value={50} max={100} showText={false} />
    </div>
  );
}`,
      tscode: `import { Progress } from "sud-ui";
import React from "react";

export default function App(): React.ReactElement {
  return (
    <div className="flex flex-col item-cen jus-cen gap-20">
      <div className="flex item-cen jus-cen gap-20">
        <Progress type="circle" value={50} max={100} showText={false} />
        <Progress type="dashboard" value={20} max={100} showText={false} />
      </div>
      <Progress value={50} max={100} showText={false} />
    </div>
  );
}`
    },
    {
      title: "Full & Not Full Icon",
      description:
        lang === "ko"
          ? "최대값 도달 & 미달 시 표시할 아이콘을 설정합니다."
          : "Set icons to display when the value reaches maximum or not.",
      render: (
        <div className="flex flex-col item-cen jus-cen gap-20">
          <div className="flex item-cen jus-cen gap-20">
            <Progress
              type="circle"
              value={100}
              max={100}
              iconWhenFull={<CheckCircleFill />}
            />
            <Progress
              type="dashboard"
              value={20}
              max={100}
              colorType="red"
              iconWhenNotFull={<XMarkCircleFill />}
            />
          </div>
          <Progress value={100} max={100} iconWhenFull={<MoodSmileFill />} />
          <Progress
            value={100}
            max={100}
            valuePosition="outside-right"
            iconWhenFull={<CheckCircleFill />}
          />
        </div>
      ),
      jscode: `import { Progress } from "sud-ui";
import { CheckCircleFill, MoodSmileFill, XMarkCircleFill } from "sud-icons";

export default function App() {
  return (
    <div className="flex flex-col item-cen jus-cen gap-20">
      <div className="flex item-cen jus-cen gap-20">
        <Progress
          type="circle"
          value={100}
          max={100}
          iconWhenFull={<CheckCircleFill />}
        />
        <Progress
          type="dashboard"
          value={20}
          max={100}
          colorType="red"
          iconWhenNotFull={<XMarkCircleFill />}
        />
      </div>
      <Progress value={100} max={100} iconWhenFull={<MoodSmileFill />} />
      <Progress
        value={100}
        max={100}
        valuePosition="outside-right"
        iconWhenFull={<CheckCircleFill />}
      />
    </div>
  );
}`,
      tscode: `import { Progress } from "sud-ui";
import { CheckCircleFill, MoodSmileFill, XMarkCircleFill } from "sud-icons";
import React from "react";

export default function App(): React.ReactElement {
  return (
    <div className="flex flex-col item-cen jus-cen gap-20">
      <div className="flex item-cen jus-cen gap-20">
        <Progress
          type="circle"
          value={100}
          max={100}
          iconWhenFull={<CheckCircleFill />}
        />
        <Progress
          type="dashboard"
          value={20}
          max={100}
          colorType="red"
          iconWhenNotFull={<XMarkCircleFill />}
        />
      </div>
      <Progress value={100} max={100} iconWhenFull={<MoodSmileFill />} />
      <Progress
        value={100}
        max={100}
        valuePosition="outside-right"
        iconWhenFull={<CheckCircleFill />}
      />
    </div>
  );
}`
    },
    {
      title: "State Progress",
      description:
        lang === "ko"
          ? "상태 프로그레스 사용 예시입니다."
          : "Example of using state progress.",
      render: (
        <div className="flex flex-col item-cen jus-cen gap-20">
          {isLoading ? (
            <>
              <DotSpinner />
              <div className="flex flex-col item-cen jus-cen gap-20">
                <div className="flex item-cen jus-cen gap-20">
                  <Progress
                    type="circle"
                    value={value}
                    iconWhenFull={<CheckCircleFill />}
                  />
                  <Progress
                    type="dashboard"
                    value={value}
                    iconWhenFull={<CheckCircleFill />}
                  />
                </div>
                <Progress value={value} iconWhenFull={<CheckCircleFill />} />
              </div>
            </>
          ) : (
            <Button onClick={handleLoading}>Start Loading</Button>
          )}
        </div>
      ),
      jscode: `import { Progress, DotSpinner, Button } from "sud-ui";
import { CheckCircleFill } from "sud-icons";
import { useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState(0);

  const handleLoading = () => {
    setIsLoading(true);
    setValue(0);
    const interval = setInterval(() => {
      setValue((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
  };

  return (
    <div className="flex flex-col item-cen jus-cen gap-20">
      {isLoading ? (
        <>
          <DotSpinner />
          <div className="flex flex-col item-cen jus-cen gap-20">
            <div className="flex item-cen jus-cen gap-20">
              <Progress
                type="circle"
                value={value}
                iconWhenFull={<CheckCircleFill />}
              />
              <Progress
                type="dashboard"
                value={value}
                iconWhenFull={<CheckCircleFill />}
              />
            </div>
            <Progress value={value} iconWhenFull={<CheckCircleFill />} />
          </div>
        </>
      ) : (
        <Button onClick={handleLoading}>Start Loading</Button>
      )}
    </div>
  );
}`,
      tscode: `import { Progress, DotSpinner, Button } from "sud-ui";
import { CheckCircleFill } from "sud-icons";
import React, { useState, Dispatch, SetStateAction } from "react";

export default function App(): React.ReactElement {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [value, setValue] = useState<number>(0);

  const handleLoading = (): void => {
    setIsLoading(true);
    setValue(0);
    const interval = setInterval((): void => {
      setValue((prev: number): number => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout((): void => {
            setIsLoading(false);
          }, 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
  };

  return (
    <div className="flex flex-col item-cen jus-cen gap-20">
      {isLoading ? (
        <>
          <DotSpinner />
          <div className="flex flex-col item-cen jus-cen gap-20">
            <div className="flex item-cen jus-cen gap-20">
              <Progress
                type="circle"
                value={value}
                iconWhenFull={<CheckCircleFill />}
              />
              <Progress
                type="dashboard"
                value={value}
                iconWhenFull={<CheckCircleFill />}
              />
            </div>
            <Progress value={value} iconWhenFull={<CheckCircleFill />} />
          </div>
        </>
      ) : (
        <Button onClick={handleLoading}>Start Loading</Button>
      )}
    </div>
  );
}`
    }
  ];

  const howToUseTableData = [
    {
      key: "type",
      name: "type",
      description: lang === "ko" ? "프로그레스 타입" : "Type of progress",
      type: tagRender(["bar", "circle", "dashboard"]),
      default: <Tag>bar</Tag>
    },
    {
      key: "value",
      name: "value",
      description: lang === "ko" ? "현재 값" : "Current value",
      type: "number",
      default: "0"
    },
    {
      key: "max",
      name: "max",
      description: lang === "ko" ? "최대 값" : "Maximum value",
      type: "number",
      default: "100"
    },
    {
      key: "unit",
      name: "unit",
      description: lang === "ko" ? "값 단위" : "Unit of value",
      type: "string",
      default: "-"
    },
    {
      key: "showText",
      name: "showText",
      description: lang === "ko" ? "텍스트 표시 여부" : "Whether to show text",
      type: "boolean",
      default: "true"
    },
    {
      key: "iconWhenFull",
      name: "iconWhenFull",
      description:
        lang === "ko"
          ? "최대값 도달 시 표시할 아이콘"
          : "Icon to show when value reaches maximum",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "iconWhenNotFull",
      name: "iconWhenNotFull",
      description:
        lang === "ko"
          ? "최대값 미달 시 표시할 아이콘"
          : "Icon to show when value is not maximum",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "colorType",
      name: "colorType",
      description:
        lang === "ko" ? "프로그레스 색상 타입" : "Color type of progress",
      type: tagColorTypeTags,
      default: <Tag>cerulean</Tag>
    },
    {
      key: "backgroundColor",
      name: "backgroundColor",
      description:
        lang === "ko"
          ? "배경색(palette값 또는 HEX code)"
          : "Background color (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "color",
      name: "color",
      description:
        lang === "ko"
          ? "프로그레스 색상(palette값 또는 HEX code)"
          : "Progress color (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "valuePosition",
      name: "valuePosition",
      description: lang === "ko" ? "값 위치" : "Position of value",
      type: tagRender([
        "inside-start",
        "inside-center",
        "inside-end",
        "outside-left",
        "outside-right"
      ]),
      default: <Tag>inside-end</Tag>
    },
    {
      key: "size",
      name: "size",
      description: lang === "ko" ? "크기" : "Size",
      type: tagRender(["sm", "md", "lg"]),
      default: <Tag>md</Tag>
    },
    {
      key: "fontSize",
      name: "fontSize",
      description: lang === "ko" ? "글자 크기" : "Font size",
      type: "number",
      default: "-"
    },
    {
      key: "className",
      name: "className",
      description: lang === "ko" ? "추가 클래스명" : "Additional class name",
      type: "string",
      default: "-"
    },
    {
      key: "style",
      name: "style",
      description: lang === "ko" ? "추가 스타일" : "Additional styles",
      type: "React.CSSProperties",
      default: "{}"
    }
  ];

  return (
    <Frame
      component={{
        name,
        description,
        IMPORT_COMMAND,
        whenToUse,
        examples,
        howToUseTableData
      }}
      grid={true}
      isMobile={isMobile}
      lang={lang}
    />
  );
}
