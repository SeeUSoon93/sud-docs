"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Tag, Avatar, ColorPicker, Button, Card, Typography } from "sud-ui";

import React, { useState } from "react";

export default function ColorPickerPage() {
  const { isMobile } = useMobile();

  const name = "ColorPicker";
  const description = <>색상을 선택할 수 있는 컴포넌트입니다.</>;

  const IMPORT_COMMAND = "import { ColorPicker } from 'sud-ui';";

  const whenToUse = ["색상을 선택할 때"];

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
      description: "기본적인 버튼 컴포넌트입니다.",
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
      description: "커스텀 트리거를 사용할 수 있습니다.",
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
      description: "색상 포맷을 선택할 수 있습니다.",
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
      description: "선택된 색상 값",
      type: "string",
      default: "#1677FF"
    },
    {
      key: "onChange",
      name: "onChange",
      description: "색상이 변경될 때 호출되는 함수",
      type: "(color: { hex: string, rgb: { r: number, g: number, b: number }, hsb: { h: number, s: number, b: number }, alpha: number }) => void",
      default: "-"
    },
    {
      key: "open",
      name: "open",
      description: "컬러피커의 열림 상태",
      type: "boolean",
      default: "false"
    },
    {
      key: "setOpen",
      name: "setOpen",
      description: "컬러피커의 열림 상태를 변경하는 함수",
      type: "(open: boolean) => void",
      default: "() => {}"
    },
    {
      key: "children",
      name: "children",
      description: "컬러피커의 커스텀 트리거 요소",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "trigger",
      name: "trigger",
      description: "컬러피커를 여는 트리거 방식",
      type: "string",
      default: "click"
    },
    {
      key: "placement",
      name: "placement",
      description: "컬러피커의 위치",
      type: "string",
      default: "bottom"
    },
    {
      key: "size",
      name: "size",
      description: "컬러피커의 크기",
      type: (
        <>
          <Tag>sm</Tag> ｜ <Tag>md</Tag> ｜ <Tag>lg</Tag>
        </>
      ),
      default: "sm"
    },
    {
      key: "style",
      name: "style",
      description: "추가 스타일",
      type: "CSSProperties",
      default: "{ padding: 5 }"
    },
    {
      key: "className",
      name: "className",
      description: "추가 클래스명",
      type: "string",
      default: '""'
    },
    {
      key: "popConfirmProps",
      name: "popConfirmProps",
      description: "PopConfirm 컴포넌트에 전달되는 props",
      type: "object",
      default: "{}"
    },
    {
      key: "selectProps",
      name: "selectProps",
      description: "Select 컴포넌트에 전달되는 props",
      type: "object",
      default: "{}"
    },
    {
      key: "inputProps",
      name: "inputProps",
      description: "Input 컴포넌트에 전달되는 props",
      type: "object",
      default: "{}"
    },
    {
      key: "sliderProps",
      name: "sliderProps",
      description: "Slider 컴포넌트에 전달되는 props",
      type: "object",
      default: "{}"
    },
    {
      key: "cardProps",
      name: "cardProps",
      description: "Card 컴포넌트에 전달되는 props",
      type: "object",
      default: "{}"
    },
    {
      key: "buttonProps",
      name: "buttonProps",
      description: "Button 컴포넌트에 전달되는 props",
      type: "object",
      default: "{}"
    },
    {
      key: "rest",
      name: "rest",
      description: "추가 HTML 속성",
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
