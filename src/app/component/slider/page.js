"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { useLang } from "../../_lib/context/langContext";
import { Tag, Slider, Card, Typography, Radio } from "sud-ui";

import React, { useState } from "react";
import { tagRender } from "../../_lib/components/common/render";
import {
  borderTypeTags,
  defaultColorTypeTags,
  shadowTypeTags
} from "../../_lib/components/common/defaultType";

export default function SelectPage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();
  const [size, setSize] = useState("md");
  const [value, setValue] = useState(0);
  const [minmaxValue, setMinmaxValue] = useState(0);
  const [minmaxVisibleValue, setMinmaxVisibleValue] = useState(0);
  const [stepValue, setStepValue] = useState(1);
  const [verticalValue, setVerticalValue] = useState(0);
  const [unitValue, setunitValue] = useState(0);
  const [sizeValue, setSizeValue] = useState("md");
  const [thumbSizeValue, setThumbSizeValue] = useState(0);
  const [fillValue, setFillValue] = useState(0);
  const [disabledValue, setDisabledValue] = useState(0);
  const [colorValue, setColorValue] = useState(0);

  const name = "Slider";
  const description = (
    <>
      {lang === "ko"
        ? "범위 내의 입력 값을 조절할 수 있는 슬라이더 컴포넌트입니다."
        : "Slider component that allows you to adjust input values within a range."}
    </>
  );

  const IMPORT_COMMAND = "import { Select } from 'sud-ui';";

  const whenToUse =
    lang === "ko"
      ? ["범위 내의 입력 값을 조절할 때"]
      : ["When you need to adjust input values within a range."];

  const sizeOptions = [
    {
      label: "sm",
      value: "sm"
    },
    {
      label: "md",
      value: "md"
    },
    {
      label: "lg",
      value: "lg"
    }
  ];

  const examples = [
    {
      title: "Basic Usage",
      description: lang === "ko" ? "기본적인 사용 방법입니다." : "Basic usage.",
      render: (
        <div className="flex item-cen jus-bet">
          <Slider value={value} onChange={(e) => setValue(e)} width="80%" />
          <Typography>Value : {value}</Typography>
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Slider } from 'sud-ui';

const BasicSlider = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <Slider 
        value={value} 
        onChange={(e) => setValue(e)} 
        width="80%" 
      />
      <div>Value : {value}</div>
    </div>
  );
};

export default BasicSlider;`,
      tscode: `import React, { useState } from 'react';
import { Slider } from 'sud-ui';

const BasicSlider: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <div>
      <Slider 
        value={value} 
        onChange={(e) => setValue(e)} 
        width="80%" 
      />
      <div>Value : {value}</div>
    </div>
  );
};

export default BasicSlider;`
    },
    {
      title: "Step",
      description:
        lang === "ko"
          ? "값 변경 단위를 설정할 수 있습니다."
          : "You can set the value change step.",
      render: (
        <div className="flex item-cen jus-bet">
          <Slider
            value={stepValue}
            onChange={(e) => setStepValue(e)}
            width="80%"
            step={10}
          />
          <Typography>Value : {stepValue}</Typography>
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Slider } from 'sud-ui';

const StepSlider = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <Slider 
        value={value} 
        onChange={(e) => setValue(e)} 
        width="80%"
        step={10}
      />
      <div>Value : {value}</div>
    </div>
  );
};

export default StepSlider;`,
      tscode: `import React, { useState } from 'react';
import { Slider } from 'sud-ui';

const StepSlider: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <div>
      <Slider 
        value={value} 
        onChange={(e) => setValue(e)} 
        width="80%"
        step={10}
      />
      <div>Value : {value}</div>
    </div>
  );
};

export default StepSlider;`
    },
    {
      title: "min & max Usage",
      description:
        lang === "ko"
          ? "최소값과 최대값을 설정할 수 있습니다."
          : "You can set the minimum and maximum values.",
      render: (
        <div className="flex item-cen jus-bet">
          <Slider
            value={minmaxValue}
            onChange={(e) => setMinmaxValue(e)}
            width="80%"
            min={0}
            max={40}
          />
          <Typography>Value : {minmaxValue}</Typography>
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Slider } from 'sud-ui';

const MinMaxSlider = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <Slider 
        value={value} 
        onChange={(e) => setValue(e)} 
        width="80%"
        min={0}
        max={40}
      />
      <div>Value : {value}</div>
    </div>
  );
};

export default MinMaxSlider;`,
      tscode: `import React, { useState } from 'react';
import { Slider } from 'sud-ui';

const MinMaxSlider: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <div>
      <Slider 
        value={value} 
        onChange={(e) => setValue(e)} 
        width="80%"
        min={0}
        max={40}
      />
      <div>Value : {value}</div>
    </div>
  );
};

export default MinMaxSlider;`
    },
    {
      title: "minMaxVisible",
      description:
        lang === "ko"
          ? "최소/최대값 표시 여부를 설정할 수 있습니다."
          : "You can set the minimum/maximum value display.",
      render: (
        <div className="flex item-cen jus-bet">
          <Slider
            value={minmaxVisibleValue}
            onChange={(e) => setMinmaxVisibleValue(e)}
            width="80%"
            minMaxVisible={true}
            min={0}
            max={100}
          />
          <Typography>Value : {minmaxVisibleValue}</Typography>
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Slider } from 'sud-ui';

const MinMaxVisibleSlider = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <Slider 
        value={value} 
        onChange={(e) => setValue(e)} 
        width="80%"
        minMaxVisible={true}
        min={0}
        max={100}
      />
      <div>Value : {value}</div>
    </div>
  );
};

export default MinMaxVisibleSlider;`,
      tscode: `import React, { useState } from 'react';
import { Slider } from 'sud-ui';

const MinMaxVisibleSlider: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <div>
      <Slider 
        value={value} 
        onChange={(e) => setValue(e)} 
        width="80%"
        minMaxVisible={true}
        min={0}
        max={100}
      />
      <div>Value : {value}</div>
    </div>
  );
};

export default MinMaxVisibleSlider;`
    },
    {
      title: "Unit",
      description:
        lang === "ko"
          ? "값의 단위를 설정할 수 있습니다."
          : "You can set the value unit.",
      render: (
        <div className="flex item-cen jus-bet">
          <Slider
            value={unitValue}
            onChange={(e) => setunitValue(e)}
            width="80%"
            minMaxVisible={true}
            min={0}
            max={100}
            unit="%"
          />
          <Typography>Value : {unitValue}%</Typography>
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Slider } from 'sud-ui';

const unitSlider = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <Slider 
        value={value} 
        onChange={(e) => setValue(e)} 
        width="80%"
        minMaxVisible={true}
        min={0}
        max={100}
        unit="%"
      />
      <div>Value : {value}%</div>
    </div>
  );
};

export default unitSlider;`,
      tscode: `import React, { useState } from 'react';
import { Slider } from 'sud-ui';

const unitSlider: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <div>
      <Slider 
        value={value} 
        onChange={(e) => setValue(e)} 
        width="80%"
        minMaxVisible={true}
        min={0}
        max={100}
        unit="%"
      />
      <div>Value : {value}%</div>
    </div>
  );
};

export default unitSlider;`
    },
    {
      title: "Size",
      description:
        lang === "ko"
          ? "슬라이더의 크기를 설정할 수 있습니다."
          : "You can set the slider size.",
      render: (
        <div className="flex flex-col gap-20">
          <Card style={{ width: "100%" }} shadow="none" colorType="sub">
            <div className="flex jus-cen w-100">
              <Radio.Group
                options={sizeOptions}
                direction="horizontal"
                value={size}
                onChange={setSize}
              />
            </div>
          </Card>
          <Slider
            size={size}
            value={sizeValue}
            onChange={(e) => setSizeValue(e)}
          />
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Slider, Radio, Card } from 'sud-ui';

const SizeSlider = () => {
  const [value, setValue] = useState(0);
  const [size, setSize] = useState('md');

  const sizeOptions = [
    { label: 'sm', value: 'sm' },
    { label: 'md', value: 'md' },
    { label: 'lg', value: 'lg' }
  ];

  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen w-100">
          <Radio.Group
            options={sizeOptions}
            direction="horizontal"
            value={size}
            onChange={setSize}
          />
        </div>
      </Card>
      <Slider
        size={size}
        value={value}
        onChange={(e) => setValue(e)}
      />
    </div>
  );
};

export default SizeSlider;`,
      tscode: `import React, { useState } from 'react';
import { Slider, Radio, Card } from 'sud-ui';

const SizeSlider: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');

  const sizeOptions = [
    { label: 'sm', value: 'sm' },
    { label: 'md', value: 'md' },
    { label: 'lg', value: 'lg' }
  ];

  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen w-100">
          <Radio.Group
            options={sizeOptions}
            direction="horizontal"
            value={size}
            onChange={setSize}
          />
        </div>
      </Card>
      <Slider
        size={size}
        value={value}
        onChange={(e) => setValue(e)}
      />
    </div>
  );
};

export default SizeSlider;`
    },
    {
      title: "Disabled",
      description:
        lang === "ko"
          ? "슬라이더를 비활성화 할 수 있습니다."
          : "You can disable the slider.",
      render: (
        <Slider
          value={disabledValue}
          onChange={(e) => setDisabledValue(e)}
          disabled={true}
        />
      ),
      jscode: `import React, { useState } from 'react';
import { Slider } from 'sud-ui';

const DisabledSlider = () => {
  const [value, setValue] = useState(0);

  return (
    <Slider
      value={value}
      onChange={(e) => setValue(e)}
      disabled={true}
    />
  );
};

export default DisabledSlider;`,
      tscode: `import React, { useState } from 'react';
import { Slider } from 'sud-ui';

const DisabledSlider: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <Slider
      value={value}
      onChange={(e) => setValue(e)}
      disabled={true}
    />
  );
};

export default DisabledSlider;`
    },
    {
      title: "Fill",
      description:
        lang === "ko"
          ? "슬라이더의 채워진 영역 표시 여부를 설정할 수 있습니다."
          : "You can set the filled area display.",
      render: (
        <Slider
          value={fillValue}
          onChange={(e) => setFillValue(e)}
          fill={false}
        />
      ),
      jscode: `import React, { useState } from 'react';
import { Slider } from 'sud-ui';

const FillSlider = () => {
  const [value, setValue] = useState(0);

  return (
    <Slider
      value={value}
      onChange={(e) => setValue(e)}
      fill={false}
    />
  );
};

export default FillSlider;`,
      tscode: `import React, { useState } from 'react';
import { Slider } from 'sud-ui';

const FillSlider: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <Slider
      value={value}
      onChange={(e) => setValue(e)}
      fill={false}
    />
  );
};

export default FillSlider;`
    },
    {
      title: "ThumbSize",
      description:
        lang === "ko"
          ? "슬라이더의 썸네일 크기를 설정할 수 있습니다."
          : "You can set the slider thumbnail size.",
      render: (
        <Slider
          value={thumbSizeValue}
          onChange={(e) => setThumbSizeValue(e)}
          thumbSize={20}
        />
      ),
      jscode: `import React, { useState } from 'react';
import { Slider } from 'sud-ui';

const ThumbSizeSlider = () => {
  const [value, setValue] = useState(0);

  return (
    <Slider
      value={value}
      onChange={(e) => setValue(e)}
      thumbSize={20}
    />
  );
};

export default ThumbSizeSlider;`,
      tscode: `import React, { useState } from 'react';
import { Slider } from 'sud-ui';

const ThumbSizeSlider: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <Slider
      value={value}
      onChange={(e) => setValue(e)}
      thumbSize={20}
    />
  );
};

export default ThumbSizeSlider;`
    },
    {
      title: "Color Customization",
      description:
        lang === "ko"
          ? "슬라이더의 색상을 설정할 수 있습니다."
          : "You can set the slider color.",
      render: (
        <Slider
          value={colorValue}
          onChange={(e) => setColorValue(e)}
          trackColor="red-2"
          background="green"
          popupProps={{ background: "black-9", color: "white-9" }}
        />
      ),
      jscode: `import React, { useState } from 'react';
import { Slider } from 'sud-ui';

const ColorSlider = () => {
  const [value, setValue] = useState(0);

  return (
    <Slider
      value={value}
      onChange={(e) => setValue(e)}
      trackColor="red-2"
      background="green"
      popupProps={{ background: "black-9", color: "white-9" }}
    />
  );
};

export default ColorSlider;`,
      tscode: `import React, { useState } from 'react';
import { Slider } from 'sud-ui';

const ColorSlider: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <Slider
      value={value}
      onChange={(e) => setValue(e)}
      trackColor="red-2"
      background="green"
      popupProps={{ background: "black-9", color: "white-9" }}
    />
  );
};

export default ColorSlider;`
    },
    {
      title: "Vertical",
      description:
        lang === "ko"
          ? "수직 방향 슬라이더 여부를 설정할 수 있습니다."
          : "You can set the vertical slider.",
      render: (
        <div className="grid col-3">
          <Slider
            value={verticalValue}
            onChange={(e) => setVerticalValue(e)}
            vertical={true}
          />
          <Slider
            value={verticalValue}
            onChange={(e) => setVerticalValue(e)}
            vertical={true}
            minMaxVisible={true}
          />
          <Typography>Value : {verticalValue}</Typography>
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Slider, Typography } from 'sud-ui';

const VerticalSlider = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="grid col-3">
      <Slider
        value={value}
        onChange={(e) => setValue(e)}
        vertical={true}
      />
      <Slider
        value={value}
        onChange={(e) => setValue(e)}
        vertical={true}
        minMaxVisible={true}
      />
      <Typography>Value : {value}</Typography>
    </div>
  );
};

export default VerticalSlider;`,
      tscode: `import React, { useState } from 'react';
import { Slider, Typography } from 'sud-ui';

const VerticalSlider: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <div className="grid col-3">
      <Slider
        value={value}
        onChange={(e) => setValue(e)}
        vertical={true}
      />
      <Slider
        value={value}
        onChange={(e) => setValue(e)}
        vertical={true}
        minMaxVisible={true}
      />
      <Typography>Value : {value}</Typography>
    </div>
  );
};

export default VerticalSlider;`
    }
  ];

  const howToUseTableData = [
    {
      key: "value",
      name: "value",
      description:
        lang === "ko" ? "슬라이더의 Value" : "The value of the slider.",
      type: "number",
      default: "0"
    },
    {
      key: "onChange",
      name: "onChange",
      description:
        lang === "ko"
          ? "값이 변경될 때 호출되는 함수"
          : "The function called when the value changes.",
      type: "(value: number) => void",
      default: "() => {}"
    },
    {
      key: "min",
      name: "min",
      description: lang === "ko" ? "최소값" : "The minimum value.",
      type: "number",
      default: "0"
    },
    {
      key: "max",
      name: "max",
      description: lang === "ko" ? "최대값" : "The maximum value.",
      type: "number",
      default: "100"
    },
    {
      key: "step",
      name: "step",
      description: lang === "ko" ? "값 변경 단위" : "The value change unit.",
      type: "number",
      default: "1"
    },
    {
      key: "vertical",
      name: "vertical",
      description:
        lang === "ko" ? "수직 방향 슬라이더 여부" : "The vertical slider.",
      type: "boolean",
      default: "false"
    },
    {
      key: "disabled",
      name: "disabled",
      description: lang === "ko" ? "비활성화 여부" : "The disabled state.",
      type: "boolean",
      default: "false"
    },
    {
      key: "size",
      name: "size",
      description:
        lang === "ko" ? "슬라이더의 크기" : "The size of the slider.",
      type: <>{tagRender(["sm", "md", "lg"])}</>,
      default: <Tag>sm</Tag>
    },
    {
      key: "width",
      name: "width",
      description:
        lang === "ko"
          ? "슬라이더의 너비 (수평 방향일 때)"
          : "The width of the slider (when horizontal).",
      type: "number | string",
      default: "-"
    },
    {
      key: "height",
      name: "height",
      description:
        lang === "ko"
          ? "슬라이더의 높이 (수직 방향일 때)"
          : "The height of the slider (when vertical).",
      type: "number | string",
      default: "-"
    },
    {
      key: "minMaxVisible",
      name: "minMaxVisible",
      description:
        lang === "ko"
          ? "최소/최대값 표시 여부"
          : "The minimum/maximum value display.",
      type: "boolean",
      default: "false"
    },
    {
      key: "colorType",
      name: "colorType",
      description:
        lang === "ko"
          ? "슬라이더의 색상 타입"
          : "The color type of the slider.",
      type: <>{defaultColorTypeTags}</>,
      default: <Tag>primary</Tag>
    },
    {
      key: "unit",
      name: "unit",
      description:
        lang === "ko"
          ? "값 뒤에 표시될 단위 (예: %, px 등)"
          : "The unit displayed after the value (e.g., %, px, etc.).",
      type: "string",
      default: "-"
    },
    {
      key: "background",
      name: "background",
      description:
        lang === "ko"
          ? "배경색(palette값 또는 HEX code)"
          : "The background color (palette value or HEX code).",
      type: "string",
      default: "-"
    },
    {
      key: "trackColor",
      name: "trackColor",
      description:
        lang === "ko"
          ? "트랙 색상(palette값 또는 HEX code)"
          : "The track color (palette value or HEX code).",
      type: "string",
      default: "-"
    },
    {
      key: "fill",
      name: "fill",
      description:
        lang === "ko" ? "채워진 영역 표시 여부" : "The filled area display.",
      type: "boolean",
      default: "true"
    },
    {
      key: "shadow",
      name: "shadow",
      description: lang === "ko" ? "그림자 크기" : "The shadow size.",
      type: <>{shadowTypeTags}</>,
      default: <Tag>md</Tag>
    },
    {
      key: "border",
      name: "border",
      description: lang === "ko" ? "테두리 표시 여부" : "The border display.",
      type: "boolean",
      default: "true"
    },
    {
      key: "borderType",
      name: "borderType",
      description: lang === "ko" ? "테두리 스타일" : "The border style.",
      type: <>{borderTypeTags}</>,
      default: <Tag>solid</Tag>
    },
    {
      key: "borderWeight",
      name: "borderWeight",
      description: lang === "ko" ? "테두리 두께" : "The border weight.",
      type: "number",
      default: "1"
    },
    {
      key: "borderColor",
      name: "borderColor",
      description:
        lang === "ko"
          ? "테두리 색상(palette값 또는 HEX code)"
          : "The border color (palette value or HEX code).",
      type: "string",
      default: "-"
    },
    {
      key: "thumbSize",
      name: "thumbSize",
      description: lang === "ko" ? "썸네일 크기" : "The thumbnail size.",
      type: "number",
      default: "-"
    },
    {
      key: "thumbBorder",
      name: "thumbBorder",
      description:
        lang === "ko"
          ? "썸네일 테두리 표시 여부"
          : "The thumbnail border display.",
      type: "boolean",
      default: "true"
    },
    {
      key: "popupClassName",
      name: "popupClassName",
      description: lang === "ko" ? "팝업의 클래스명" : "The popup class name.",
      type: "string",
      default: "-"
    },
    {
      key: "popupStyle",
      name: "popupStyle",
      description: lang === "ko" ? "팝업의 스타일" : "The popup style.",
      type: "React.CSSProperties",
      default: "{}"
    },
    {
      key: "popupProps",
      name: "popupProps",
      description: lang === "ko" ? "팝업 속성" : "The popup properties.",
      type: "PopupBaseProps",
      default: "{}"
    },
    {
      key: "id",
      name: "id",
      description: lang === "ko" ? "고유 ID" : "The unique ID.",
      type: "string",
      default: "-"
    },
    {
      key: "ariaLabel",
      name: "ariaLabel",
      description: lang === "ko" ? "접근성 레이블" : "The accessibility label.",
      type: "string",
      default: "-"
    },
    {
      key: "ariaValueText",
      name: "ariaValueText",
      description:
        lang === "ko" ? "접근성 값 텍스트" : "The accessibility value text.",
      type: "string",
      default: "-"
    },
    {
      key: "className",
      name: "className",
      description:
        lang === "ko" ? "추가 클래스명" : "The additional class name.",
      type: "string",
      default: "-"
    },
    {
      key: "style",
      name: "style",
      description: lang === "ko" ? "추가 스타일" : "The additional styles.",
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
