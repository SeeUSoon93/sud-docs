"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { useLang } from "../../_lib/context/langContext";
import { Tag, ColorPicker, Button, Card, Typography } from "sud-ui";

import React, { useState } from "react";
import { tagRender } from "../../_lib/components/common/render";

export default function ColorPickerPage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();

  const name = "ColorPicker";
  const description = (
    <>
      {lang === "ko"
        ? "색상을 선택할 수 있는 컴포넌트입니다."
        : "A component that allows you to select a color."}
    </>
  );
  const IMPORT_COMMAND = "import { ColorPicker } from 'sud-ui';";

  const whenToUse = [
    lang === "ko" ? "색상을 선택할 때" : "When you need to select a color."
  ];

  const [basicOpen, setBasicOpen] = useState(false);
  const [customTriggerOpen, setCustomTriggerOpen] = useState(false);
  const [customTriggerColor, setCustomTriggerColor] = useState("#1677FF");
  const [colorFormatOpen, setColorFormatOpen] = useState(false);
  const [hexColor, setHexColor] = useState("#1677FF");
  const [hsbColor, setHsbColor] = useState({ h: 220, s: 100, b: 100 });
  const [rgbColor, setRgbColor] = useState({ r: 22, g: 119, b: 255 });

  const examples = [
    {
      title: "Basic Usage",
      description: lang === "ko" ? "기본적인 사용 방법입니다." : "Basic usage.",
      render: (
        <>
          <ColorPicker open={basicOpen} setOpen={setBasicOpen} />
        </>
      ),
      jscode: `import React, { useState } from "react";
import { ColorPicker } from "sud-ui";

export default function Example() {
  const [basicOpen, setBasicOpen] = useState(false);

  return <ColorPicker open={basicOpen} setOpen={setBasicOpen} />;
}`,
      tscode: `import React, { useState } from "react";
import { ColorPicker } from "sud-ui";

export default function Example(): JSX.Element {
  const [basicOpen, setBasicOpen] = useState(false);
  
  return <ColorPicker open={basicOpen} setOpen={setBasicOpen} />;
}`
    },
    {
      title: "Custom Trigger",
      description:
        lang === "ko"
          ? "커스텀 트리거를 사용할 수 있습니다."
          : "You can use a custom trigger.",
      render: (
        <>
          <ColorPicker
            open={customTriggerOpen}
            setOpen={setCustomTriggerOpen}
            color={customTriggerColor}
            onChange={(color) => setCustomTriggerColor(color.hex)}
          >
            <Button>
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <Card
                  background={customTriggerColor}
                  style={{ width: 32, height: 32 }}
                />
                <Typography>{customTriggerColor}</Typography>
              </div>
            </Button>
          </ColorPicker>
        </>
      ),
      jscode: `import React, { useState } from "react";
import { ColorPicker, Button, Card, Typography } from "sud-ui";

export default function Example() {
  const [customTriggerOpen, setCustomTriggerOpen] = useState(false);
  const [customTriggerColor, setCustomTriggerColor] = useState("#1677FF");

  return (
    <ColorPicker
      open={customTriggerOpen}
      setOpen={setCustomTriggerOpen}
      color={customTriggerColor}
      onChange={(color) => setCustomTriggerColor(color.hex)}
    >
      <Button>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Card
            background={customTriggerColor}
            style={{ width: 32, height: 32 }}
          />
          <Typography>{customTriggerColor}</Typography>
        </div>
      </Button>
    </ColorPicker>
  );
}`,
      tscode: `import React, { useState } from "react";
import { ColorPicker, Button, Card, Typography } from "sud-ui";

export default function Example(): JSX.Element {
  const [customTriggerOpen, setCustomTriggerOpen] = useState(false);
  const [customTriggerColor, setCustomTriggerColor] = useState("#1677FF");

  return (
    <ColorPicker
      open={customTriggerOpen}
      setOpen={setCustomTriggerOpen}
      color={customTriggerColor}
      onChange={(color) => setCustomTriggerColor(color.hex)}
    >
      <Button>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Card
            background={customTriggerColor}
            style={{ width: 32, height: 32 }}
          />
          <Typography>{customTriggerColor}</Typography>
        </div>
      </Button>
    </ColorPicker>
  );
}`
    },
    {
      title: "Color Format",
      description:
        lang === "ko"
          ? "색상 포맷을 선택할 수 있습니다."
          : "You can select a color format.",
      render: (
        <div className="flex gap-10">
          <ColorPicker
            open={colorFormatOpen}
            setOpen={setColorFormatOpen}
            color={hexColor}
            onChange={(color) => {
              setHexColor(color.hex);
              setHsbColor(color.hsb);
              setRgbColor(color.rgb);
            }}
          />
          <Card>
            <div className="flex gap-10">
              <Typography pretendard="SB">HEX |</Typography>
              <Typography>{hexColor}</Typography>
            </div>
            <div className="flex gap-10">
              <Typography pretendard="SB">HSB |</Typography>
              <Typography>
                H:{hsbColor.h} S:{hsbColor.s} B:{hsbColor.b}
              </Typography>
            </div>
            <div className="flex gap-10">
              <Typography pretendard="SB">RGB |</Typography>
              <Typography>
                R:{rgbColor.r} G:{rgbColor.g} B:{rgbColor.b}
              </Typography>
            </div>
          </Card>
        </div>
      ),
      jscode: `import React, { useState } from "react";
import { ColorPicker, Card, Typography } from "sud-ui";

export default function Example() {
  const [colorFormatOpen, setColorFormatOpen] = useState(false);
  const [hexColor, setHexColor] = useState("#1677FF");
  const [hsbColor, setHsbColor] = useState({ h: 220, s: 100, b: 100 });
  const [rgbColor, setRgbColor] = useState({ r: 22, g: 119, b: 255 });

  return (
    <div className="flex gap-10">
      <ColorPicker
        open={colorFormatOpen}
        setOpen={setColorFormatOpen}
        color={hexColor}
        onChange={(color) => {
          setHexColor(color.hex);
          setHsbColor(color.hsb);
          setRgbColor(color.rgb);
        }}
      />
      <Card>
        <div className="flex gap-10">
          <Typography pretendard="SB">HEX |</Typography>
          <Typography>{hexColor}</Typography>
        </div>
        <div className="flex gap-10">
          <Typography pretendard="SB">HSB |</Typography>
          <Typography>
            H:{hsbColor.h} S:{hsbColor.s} B:{hsbColor.b}
          </Typography>
        </div>
        <div className="flex gap-10">
          <Typography pretendard="SB">RGB |</Typography>
          <Typography>
            R:{rgbColor.r} G:{rgbColor.g} B:{rgbColor.b}
          </Typography>
        </div>
      </Card>
    </div>
  );
}`,
      tscode: `import React, { useState } from "react";
import { ColorPicker, Card, Typography } from "sud-ui";

interface HsbColor {
  h: number;
  s: number;
  b: number;
}

interface RgbColor {
  r: number;
  g: number;
  b: number;
}

export default function Example(): JSX.Element {
  const [colorFormatOpen, setColorFormatOpen] = useState(false);
  const [hexColor, setHexColor] = useState("#1677FF");
  const [hsbColor, setHsbColor] = useState<HsbColor>({ h: 220, s: 100, b: 100 });
  const [rgbColor, setRgbColor] = useState<RgbColor>({ r: 22, g: 119, b: 255 });

  return (
    <div className="flex gap-10">
      <ColorPicker
        open={colorFormatOpen}
        setOpen={setColorFormatOpen}
        color={hexColor}
        onChange={(color) => {
          setHexColor(color.hex);
          setHsbColor(color.hsb);
          setRgbColor(color.rgb);
        }}
      />
      <Card>
        <div className="flex gap-10">
          <Typography pretendard="SB">HEX |</Typography>
          <Typography>{hexColor}</Typography>
        </div>
        <div className="flex gap-10">
          <Typography pretendard="SB">HSB |</Typography>
          <Typography>
            H:{hsbColor.h} S:{hsbColor.s} B:{hsbColor.b}
          </Typography>
        </div>
        <div className="flex gap-10">
          <Typography pretendard="SB">RGB |</Typography>
          <Typography>
            R:{rgbColor.r} G:{rgbColor.g} B:{rgbColor.b}
          </Typography>
        </div>
      </Card>
    </div>
  );
}`
    }
  ];
  const howToUseTableData = [
    {
      key: "color",
      name: "color",
      description:
        lang === "ko"
          ? "선택된 색상 값(palette값 또는 HEX code)"
          : "The selected color value (palette value or HEX code).",
      type: "string",
      default: "#1677FF"
    },
    {
      key: "onChange",
      name: "onChange",
      description:
        lang === "ko"
          ? "색상이 변경될 때 호출되는 함수(color 객체 반환)"
          : "The function called when the color changes (returns a color object).",
      type: "(color: { hex: string, rgb: { r: number, g: number, b: number }, hsb: { h: number, s: number, b: number }, alpha: number }) => void",
      default: "-"
    },
    {
      key: "open",
      name: "open",
      description:
        lang === "ko"
          ? "컬러피커의 열림 상태"
          : "The open state of the color picker.",
      type: "boolean",
      default: "false"
    },
    {
      key: "setOpen",
      name: "setOpen",
      description:
        lang === "ko"
          ? "컬러피커의 열림 상태를 변경하는 함수"
          : "The function to change the open state of the color picker.",
      type: "(open: boolean) => void",
      default: "() => {}"
    },
    {
      key: "children",
      name: "children",
      description:
        lang === "ko"
          ? "컬러피커의 커스텀 트리거 요소"
          : "The custom trigger element of the color picker.",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "trigger",
      name: "trigger",
      description:
        lang === "ko"
          ? "컬러피커를 여는 트리거 방식"
          : "The trigger method to open the color picker.",
      type: <>{tagRender(["click", "hover", "contextMenu"])}</>,
      default: <Tag>click</Tag>
    },
    {
      key: "placement",
      name: "placement",
      description:
        lang === "ko" ? "컬러피커의 위치" : "The position of the color picker.",
      type: <>{tagRender(["top", "bottom", "left", "right"])}</>,
      default: <Tag>bottom</Tag>
    },
    {
      key: "size",
      name: "size",
      description:
        lang === "ko" ? "컬러피커의 크기" : "The size of the color picker.",
      type: <>{tagRender(["sm", "md", "lg"])}</>,
      default: <Tag>sm</Tag>
    },
    {
      key: "style",
      name: "style",
      description: lang === "ko" ? "추가 스타일" : "Additional style.",
      type: "CSSProperties",
      default: "{ padding: 5 }"
    },
    {
      key: "className",
      name: "className",
      description: lang === "ko" ? "추가 클래스명" : "Additional class name.",
      type: "string",
      default: "-"
    },
    {
      key: "popConfirmProps",
      name: "popConfirmProps",
      description:
        lang === "ko"
          ? "PopConfirm 컴포넌트에 전달되는 props"
          : "The props passed to the PopConfirm component.",
      type: "object",
      default: "{}"
    },
    {
      key: "selectProps",
      name: "selectProps",
      description:
        lang === "ko"
          ? "Select 컴포넌트에 전달되는 props"
          : "The props passed to the Select component.",
      type: "object",
      default: "{}"
    },
    {
      key: "inputProps",
      name: "inputProps",
      description:
        lang === "ko"
          ? "Input 컴포넌트에 전달되는 props"
          : "The props passed to the Input component.",
      type: "object",
      default: "{}"
    },
    {
      key: "sliderProps",
      name: "sliderProps",
      description:
        lang === "ko"
          ? "Slider 컴포넌트에 전달되는 props"
          : "The props passed to the Slider component.",
      type: "object",
      default: "{}"
    },
    {
      key: "cardProps",
      name: "cardProps",
      description:
        lang === "ko"
          ? "Card 컴포넌트에 전달되는 props"
          : "The props passed to the Card component.",
      type: "object",
      default: "{}"
    },
    {
      key: "buttonProps",
      name: "buttonProps",
      description:
        lang === "ko"
          ? "Button 컴포넌트에 전달되는 props"
          : "The props passed to the Button component.",
      type: "object",
      default: "{}"
    },
    {
      key: "rest",
      name: "rest",
      description:
        lang === "ko" ? "추가 HTML 속성" : "Additional HTML attributes.",
      type: "HTMLAttributes",
      default: "-"
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
    />
  );
}
