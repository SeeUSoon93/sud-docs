"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Tag, Slider, Card, Radio, Switch } from "sud-ui";

import React, { useState } from "react";
import { Check, Close } from "sud-icons";

export default function SwitchPage() {
  const { isMobile } = useMobile();
  const [size, setSize] = useState("sm");
  const [basicChecked, setBasicChecked] = useState(false);
  const [disabledChecked, setDisabledChecked] = useState(true);
  const [sizeChecked, setSizeChecked] = useState(true);
  const [colorChecked, setColorChecked] = useState(true);
  const [colorTypeChecked, setColorTypeChecked] = useState(true);
  const [textChecked, setTextChecked] = useState(false);
  const [iconChecked, setIconChecked] = useState(false);
  const [thumbColorChecked, setThumbColorChecked] = useState(false);
  const [thumbIconChecked, setThumbIconChecked] = useState(false);

  const name = "Switch";
  const description = <>두 가지 상태를 전환할 수 있는 스위치 컴포넌트입니다.</>;

  const IMPORT_COMMAND = "import { Switch } from 'sud-ui';";

  const whenToUse = ["두 가지 상태를 전환할 때"];

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
      description: "기본적인 사용방법입니다.",
      render: (
        <>
          <Switch checked={basicChecked} onChange={setBasicChecked} />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Switch } from 'sud-ui';

const BasicSwitch = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <Switch 
        checked={checked} 
        onChange={setChecked}
      />
    </div>
  );
};

export default BasicSwitch;`,
      tscode: `import React, { useState } from 'react';
import { Switch } from 'sud-ui';

const BasicSwitch: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div>
      <Switch 
        checked={checked} 
        onChange={setChecked}
      />
    </div>
  );
};

export default BasicSwitch;`
    },
    {
      title: "Size",
      description: "스위치의 크기를 설정할 수 있습니다.",
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
          <div>
            <Switch
              size={size}
              checked={sizeChecked}
              onChange={setSizeChecked}
            />
          </div>
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Switch, Radio, Card } from 'sud-ui';

const SizeSwitch = () => {
  const [checked, setChecked] = useState(false);
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
      <div>
        <Switch
          size={size}
          checked={checked}
          onChange={setChecked}
        />
      </div>
    </div>
  );
};

export default SizeSwitch;`,
      tscode: `import React, { useState } from 'react';
import { Switch, Radio, Card } from 'sud-ui';

const SizeSwitch: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);
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
      <div>
        <Switch
          size={size}
          checked={checked}
          onChange={setChecked}
        />
      </div>
    </div>
  );
};

export default SizeSwitch;`
    },
    {
      title: "Disabled",
      description: "비활성화 상태의 스위치입니다.",
      render: (
        <>
          <Switch
            checked={disabledChecked}
            onChange={setDisabledChecked}
            disabled
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Switch } from 'sud-ui';

const DisabledSwitch = () => {
  const [checked, setChecked] = useState(true);

  return (
    <div>
      <Switch 
        checked={checked} 
        onChange={setChecked}
        disabled
      />
    </div>
  );
};

export default DisabledSwitch;`,
      tscode: `import React, { useState } from 'react';
import { Switch } from 'sud-ui';

const DisabledSwitch: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(true);

  return (
    <div>
      <Switch 
        checked={checked} 
        onChange={setChecked}
        disabled
      />
    </div>
  );
};

export default DisabledSwitch;`
    },
    {
      title: "Color Customization",
      description: "스위치의 색상을 커스텀할 수 있습니다.",
      render: (
        <div className="flex flex-col gap-20">
          <Switch
            checked={colorChecked}
            onChange={setColorChecked}
            onColor="forest-5"
            offColor="forest-3"
          />
          <Switch
            checked={colorTypeChecked}
            onChange={setColorTypeChecked}
            colorType="secondary"
          />
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Switch } from 'sud-ui';

const ColorSwitch = () => {
  const [checked, setChecked] = useState(true);

  return (
    <div className="flex flex-col gap-20">
      <Switch
        checked={checked}
        onChange={setChecked}
        onColor="forest-5"
        offColor="forest-3"
      />
      <Switch
        checked={checked}
        onChange={setChecked}
        colorType="secondary"
      />
    </div>
  );
};

export default ColorSwitch;`,
      tscode: `import React, { useState } from 'react';
import { Switch } from 'sud-ui';

const ColorSwitch: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(true);

  return (
    <div className="flex flex-col gap-20">
      <Switch
        checked={checked}
        onChange={setChecked}
        onColor="forest-5"
        offColor="forest-3"
      />
      <Switch
        checked={checked}
        onChange={setChecked}
        colorType="secondary"
      />
    </div>
  );
};

export default ColorSwitch;`
    },
    {
      title: "With Text & Icon",
      description: "스위치의 텍스트와 아이콘을 커스텀할 수 있습니다.",
      render: (
        <div className="flex flex-col gap-20">
          <Switch
            checked={textChecked}
            onChange={setTextChecked}
            onText="On"
            offText="Off"
          />
          <Switch
            checked={iconChecked}
            onChange={setIconChecked}
            onText={<Check size={14} />}
            offText={<Close size={14} />}
          />
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Switch } from 'sud-ui';
import { Check, Close } from 'sud-icons';

const TextIconSwitch = () => {
  const [textChecked, setTextChecked] = useState(false);
  const [iconChecked, setIconChecked] = useState(false);

  return (
    <div className="flex flex-col gap-20">
      <Switch
        checked={textChecked}
        onChange={setTextChecked}
        onText="On"
        offText="Off"
      />
      <Switch
        checked={iconChecked}
        onChange={setIconChecked}
        onText={<Check size={14} />}
        offText={<Close size={14} />}
      />
    </div>
  );
};

export default TextIconSwitch;`,
      tscode: `import React, { useState } from 'react';
import { Switch } from 'sud-ui';
import { Check, Close } from 'sud-icons';

const TextIconSwitch: React.FC = () => {
  const [textChecked, setTextChecked] = useState<boolean>(false);
  const [iconChecked, setIconChecked] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-20">
      <Switch
        checked={textChecked}
        onChange={setTextChecked}
        onText="On"
        offText="Off"
      />
      <Switch
        checked={iconChecked}
        onChange={setIconChecked}
        onText={<Check size={14} />}
        offText={<Close size={14} />}
      />
    </div>
  );
};

export default TextIconSwitch;`
    },
    {
      title: "Thumb Customization",
      description: "스위치의 썸네일을 커스텀할 수 있습니다.",
      render: (
        <div className="flex flex-col gap-20">
          <Switch
            checked={thumbColorChecked}
            onChange={setThumbColorChecked}
            thumbColor="sky-3"
          />
          <Switch
            checked={thumbIconChecked}
            onChange={setThumbIconChecked}
            onIcon={<Check size={14} />}
            offIcon={<Close size={14} />}
          />
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Switch } from 'sud-ui';
import { Check, Close } from 'sud-icons';

const ThumbSwitch = () => {
  const [thumbColorChecked, setThumbColorChecked] = useState(false);
  const [thumbIconChecked, setThumbIconChecked] = useState(false);

  return (
    <div className="flex flex-col gap-20">
      <Switch
        checked={thumbColorChecked}
        onChange={setThumbColorChecked}
        thumbColor="sky-3"
      />
      <Switch
        checked={thumbIconChecked}
        onChange={setThumbIconChecked}
        onIcon={<Check size={14} />}
        offIcon={<Close size={14} />}
      />
    </div>
  );
};

export default ThumbSwitch;`,
      tscode: `import React, { useState } from 'react';
import { Switch } from 'sud-ui';
import { Check, Close } from 'sud-icons';

const ThumbSwitch: React.FC = () => {
  const [thumbColorChecked, setThumbColorChecked] = useState<boolean>(false);
  const [thumbIconChecked, setThumbIconChecked] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-20">
      <Switch
        checked={thumbColorChecked}
        onChange={setThumbColorChecked}
        thumbColor="sky-3"
      />
      <Switch
        checked={thumbIconChecked}
        onChange={setThumbIconChecked}
        onIcon={<Check size={14} />}
        offIcon={<Close size={14} />}
      />
    </div>
  );
};

export default ThumbSwitch;`
    }
  ];

  const howToUseTableData = [
    {
      key: "checked",
      name: "checked",
      description: "스위치의 현재 상태 (제어 컴포넌트)",
      type: "boolean",
      default: "false"
    },
    {
      key: "defaultChecked",
      name: "defaultChecked",
      description: "스위치의 초기 상태 (비제어 컴포넌트)",
      type: "boolean",
      default: "false"
    },
    {
      key: "onChange",
      name: "onChange",
      description: "상태가 변경될 때 호출되는 함수",
      type: "(checked: boolean) => void",
      default: "() => {}"
    },
    {
      key: "disabled",
      name: "disabled",
      description: "비활성화 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "onColor",
      name: "onColor",
      description: "켜진 상태의 배경색",
      type: "string",
      default: "-"
    },
    {
      key: "offColor",
      name: "offColor",
      description: "꺼진 상태의 배경색",
      type: "string",
      default: "-"
    },
    {
      key: "onText",
      name: "onText",
      description: "켜진 상태의 텍스트",
      type: "string",
      default: "-"
    },
    {
      key: "offText",
      name: "offText",
      description: "꺼진 상태의 텍스트",
      type: "string",
      default: "-"
    },
    {
      key: "onIcon",
      name: "onIcon",
      description: "켜진 상태의 아이콘",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "offIcon",
      name: "offIcon",
      description: "꺼진 상태의 아이콘",
      type: "ReactNode",
      default: "-"
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
      key: "size",
      name: "size",
      description: "스위치의 크기",
      type: (
        <>
          <Tag>sm</Tag> ｜ <Tag>md</Tag> ｜ <Tag>lg</Tag>
        </>
      ),
      default: <Tag>md</Tag>
    },
    {
      key: "colorType",
      name: "colorType",
      description: "스위치의 색상 타입",
      type: (
        <>
          <Tag>primary</Tag> ｜ <Tag>secondary</Tag> ｜ <Tag>success</Tag> ｜{" "}
          <Tag>warning</Tag> ｜ <Tag>error</Tag>
        </>
      ),
      default: <Tag>primary</Tag>
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
