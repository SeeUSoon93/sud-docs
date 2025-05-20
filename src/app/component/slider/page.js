"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Tag, Slider, Card, Divider, Typography, Radio } from "sud-ui";

import React, { useState } from "react";

export default function SelectPage() {
  const { isMobile } = useMobile();
  const [size, setSize] = useState("md");
  const [value, setValue] = useState(0);
  const [minmaxValue, setMinmaxValue] = useState(0);
  const [minmaxVisibleValue, setMinmaxVisibleValue] = useState(0);
  const [stepValue, setStepValue] = useState(1);
  const [verticalValue, setVerticalValue] = useState(0);
  const [markValue, setMarkValue] = useState(0);
  const [sizeValue, setSizeValue] = useState("md");
  const [thumbSizeValue, setThumbSizeValue] = useState(0);
  const [fillValue, setFillValue] = useState(0);
  const [disabledValue, setDisabledValue] = useState(0);
  const [colorValue, setColorValue] = useState(0);

  const name = "Slider";
  const description = (
    <>범위 내의 입력 값을 조절할 수 있는 슬라이더 컴포넌트입니다.</>
  );

  const IMPORT_COMMAND = "import { Select } from 'sud-ui';";

  const whenToUse = ["범위 내의 입력 값을 조절할 때"];

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

  const shapeOptions = [
    {
      label: "rounded",
      value: "rounded"
    },
    {
      label: "square",
      value: "square"
    },
    {
      label: "capsule",
      value: "capsule"
    }
  ];

  const examples = [
    {
      title: "Basic Usage",
      description: "기본적인 사용방법입니다.",
      render: (
        <div className="flex item-cen jus-bet">
          <Slider value={value} onChange={(e) => setValue(e)} width="80%" />
          <Typography>현재 값 : {value}</Typography>
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
      <div>현재 값 : {value}</div>
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
      <div>현재 값 : {value}</div>
    </div>
  );
};

export default BasicSlider;`
    },
    {
      title: "Step",
      description: "값 변경 단위를 설정할 수 있습니다.",
      render: (
        <div className="flex item-cen jus-bet">
          <Slider
            value={stepValue}
            onChange={(e) => setStepValue(e)}
            width="80%"
            step={10}
          />
          <Typography>현재 값 : {stepValue}</Typography>
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
      <div>현재 값 : {value}</div>
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
      <div>현재 값 : {value}</div>
    </div>
  );
};

export default StepSlider;`
    },
    {
      title: "min & max Usage",
      description: "최소값과 최대값을 설정할 수 있습니다.",
      render: (
        <div className="flex item-cen jus-bet">
          <Slider
            value={minmaxValue}
            onChange={(e) => setMinmaxValue(e)}
            width="80%"
            min={0}
            max={40}
          />
          <Typography>현재 값 : {minmaxValue}</Typography>
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
      <div>현재 값 : {value}</div>
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
      <div>현재 값 : {value}</div>
    </div>
  );
};

export default MinMaxSlider;`
    },
    {
      title: "minMaxVisible",
      description: "최소/최대값 표시 여부를 설정할 수 있습니다.",
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
          <Typography>현재 값 : {minmaxVisibleValue}</Typography>
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
      <div>현재 값 : {value}</div>
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
      <div>현재 값 : {value}</div>
    </div>
  );
};

export default MinMaxVisibleSlider;`
    },
    {
      title: "mark",
      description: "값의 단위를 설정할 수 있습니다.",
      render: (
        <div className="flex item-cen jus-bet">
          <Slider
            value={markValue}
            onChange={(e) => setMarkValue(e)}
            width="80%"
            minMaxVisible={true}
            min={0}
            max={100}
            mark="%"
          />
          <Typography>현재 값 : {markValue}%</Typography>
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Slider } from 'sud-ui';

const MarkSlider = () => {
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
        mark="%"
      />
      <div>현재 값 : {value}%</div>
    </div>
  );
};

export default MarkSlider;`,
      tscode: `import React, { useState } from 'react';
import { Slider } from 'sud-ui';

const MarkSlider: React.FC = () => {
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
        mark="%"
      />
      <div>현재 값 : {value}%</div>
    </div>
  );
};

export default MarkSlider;`
    },
    {
      title: "Size",
      description: "슬라이더의 크기를 설정할 수 있습니다.",
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
      description: "슬라이더를 비활성화 할 수 있습니다.",
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
      description: "슬라이더의 채워진 영역 표시 여부를 설정할 수 있습니다.",
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
      description: "슬라이더의 썸네일 크기를 설정할 수 있습니다.",
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
      description: "슬라이더의 색상을 설정할 수 있습니다.",
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
      description: "수직 방향 슬라이더 여부를 설정할 수 있습니다.",
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
          <Typography>현재 값 : {verticalValue}</Typography>
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
      <Typography>현재 값 : {value}</Typography>
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
      <Typography>현재 값 : {value}</Typography>
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
      description: "슬라이더의 현재 값",
      type: "number",
      default: "0"
    },
    {
      key: "onChange",
      name: "onChange",
      description: "값이 변경될 때 호출되는 함수",
      type: "(value: number) => void",
      default: "() => {}"
    },
    {
      key: "min",
      name: "min",
      description: "최소값",
      type: "number",
      default: "0"
    },
    {
      key: "max",
      name: "max",
      description: "최대값",
      type: "number",
      default: "100"
    },
    {
      key: "step",
      name: "step",
      description: "값 변경 단위",
      type: "number",
      default: "1"
    },
    {
      key: "vertical",
      name: "vertical",
      description: "수직 방향 슬라이더 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "disabled",
      name: "disabled",
      description: "비활성화 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "size",
      name: "size",
      description: "슬라이더의 크기",
      type: (
        <>
          <Tag>sm</Tag> ｜ <Tag>md</Tag> ｜ <Tag>lg</Tag>
        </>
      ),
      default: <Tag>sm</Tag>
    },
    {
      key: "width",
      name: "width",
      description: "슬라이더의 너비 (수평 방향일 때)",
      type: "number | string",
      default: "-"
    },
    {
      key: "height",
      name: "height",
      description: "슬라이더의 높이 (수직 방향일 때)",
      type: "number | string",
      default: "-"
    },
    {
      key: "minMaxVisible",
      name: "minMaxVisible",
      description: "최소/최대값 표시 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "colorType",
      name: "colorType",
      description: "슬라이더의 색상 타입",
      type: (
        <>
          <Tag>primary</Tag> ｜ <Tag>secondary</Tag> ｜ <Tag>success</Tag> ｜{" "}
          <Tag>warning</Tag> ｜ <Tag>error</Tag>
        </>
      ),
      default: <Tag>primary</Tag>
    },
    {
      key: "mark",
      name: "mark",
      description: "값 뒤에 표시될 단위 (예: %, px 등)",
      type: "string",
      default: "''"
    },
    {
      key: "background",
      name: "background",
      description: "배경색",
      type: "string",
      default: "-"
    },
    {
      key: "trackColor",
      name: "trackColor",
      description: "트랙 색상",
      type: "string",
      default: "-"
    },
    {
      key: "fill",
      name: "fill",
      description: "채워진 영역 표시 여부",
      type: "boolean",
      default: "true"
    },
    {
      key: "shadow",
      name: "shadow",
      description: "그림자 크기",
      type: (
        <>
          <Tag>none</Tag> ｜ <Tag>sm</Tag> ｜ <Tag>md</Tag> ｜ <Tag>lg</Tag> ｜{" "}
          <Tag>xl</Tag>
        </>
      ),
      default: <Tag>md</Tag>
    },
    {
      key: "border",
      name: "border",
      description: "테두리 표시 여부",
      type: "boolean",
      default: "true"
    },
    {
      key: "borderType",
      name: "borderType",
      description: "테두리 스타일",
      type: (
        <>
          <Tag>solid</Tag> ｜ <Tag>dashed</Tag> ｜ <Tag>dotted</Tag>
        </>
      ),
      default: <Tag>solid</Tag>
    },
    {
      key: "borderWeight",
      name: "borderWeight",
      description: "테두리 두께",
      type: "number",
      default: "1"
    },
    {
      key: "borderColor",
      name: "borderColor",
      description: "테두리 색상",
      type: "string",
      default: "-"
    },
    {
      key: "thumbSize",
      name: "thumbSize",
      description: "썸네일 크기",
      type: "number",
      default: "-"
    },
    {
      key: "thumbBorder",
      name: "thumbBorder",
      description: "썸네일 테두리 표시 여부",
      type: "boolean",
      default: "true"
    },
    {
      key: "popupClassName",
      name: "popupClassName",
      description: "팝업의 클래스명",
      type: "string",
      default: "''"
    },
    {
      key: "popupStyle",
      name: "popupStyle",
      description: "팝업의 스타일",
      type: "React.CSSProperties",
      default: "{}"
    },
    {
      key: "popupProps",
      name: "popupProps",
      description: "팝업 속성",
      type: "PopupBaseProps",
      default: "{}"
    },
    {
      key: "id",
      name: "id",
      description: "고유 ID",
      type: "string",
      default: "-"
    },
    {
      key: "ariaLabel",
      name: "ariaLabel",
      description: "접근성 레이블",
      type: "string",
      default: "-"
    },
    {
      key: "ariaValueText",
      name: "ariaValueText",
      description: "접근성 값 텍스트",
      type: "string",
      default: "-"
    },
    {
      key: "className",
      name: "className",
      description: "추가 클래스명",
      type: "string",
      default: '""'
    },
    {
      key: "style",
      name: "style",
      description: "추가 스타일",
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
    />
  );
}
