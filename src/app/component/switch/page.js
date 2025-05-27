"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { useLang } from "../../_lib/context/langContext";
import { Tag, Card, Radio, Switch } from "sud-ui";

import React, { useState } from "react";
import { Check, Close } from "sud-icons";

export default function SwitchPage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();
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
  const description = (
    <>
      {lang === "ko"
        ? "두 가지 상태를 전환할 수 있는 스위치 컴포넌트입니다."
        : "The switch component that can switch between two states."}
    </>
  );

  const IMPORT_COMMAND = "import { Switch } from 'sud-ui';";

  const whenToUse =
    lang === "ko"
      ? ["두 가지 상태를 전환할 때"]
      : ["When you need to switch between two states."];

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
      description:
        lang === "ko"
          ? "스위치의 크기를 설정할 수 있습니다."
          : "You can set the size of the switch.",
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
      description:
        lang === "ko"
          ? "비활성화 상태의 스위치입니다."
          : "The disabled switch.",
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
      description:
        lang === "ko"
          ? "스위치의 색상을 커스텀할 수 있습니다."
          : "You can customize the color of the switch.",
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
      description:
        lang === "ko"
          ? "스위치의 텍스트와 아이콘을 커스텀할 수 있습니다."
          : "You can customize the text and icon of the switch.",
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
      description:
        lang === "ko"
          ? "스위치의 썸네일을 커스텀할 수 있습니다."
          : "You can customize the thumbnail of the switch.",
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
      description:
        lang === "ko"
          ? "스위치의 현재 상태 (제어 컴포넌트)"
          : "The current state of the switch (controlled component)",
      type: "boolean",
      default: "false"
    },
    {
      key: "defaultChecked",
      name: "defaultChecked",
      description:
        lang === "ko"
          ? "스위치의 초기 상태 (비제어 컴포넌트)"
          : "The initial state of the switch (uncontrolled component)",
      type: "boolean",
      default: "false"
    },
    {
      key: "onChange",
      name: "onChange",
      description:
        lang === "ko"
          ? "상태가 변경될 때 호출되는 함수"
          : "The function called when the state changes",
      type: "(checked: boolean) => void",
      default: "() => {}"
    },
    {
      key: "disabled",
      name: "disabled",
      description:
        lang === "ko" ? "비활성화 여부" : "The disabled state of the switch",
      type: "boolean",
      default: "false"
    },
    {
      key: "onColor",
      name: "onColor",
      description:
        lang === "ko"
          ? "켜진 상태의 배경색"
          : "The background color of the on state",
      type: "string",
      default: "-"
    },
    {
      key: "offColor",
      name: "offColor",
      description:
        lang === "ko"
          ? "꺼진 상태의 배경색"
          : "The background color of the off state",
      type: "string",
      default: "-"
    },
    {
      key: "onText",
      name: "onText",
      description:
        lang === "ko" ? "켜진 상태의 텍스트" : "The text of the on state",
      type: "string",
      default: "-"
    },
    {
      key: "offText",
      name: "offText",
      description:
        lang === "ko" ? "꺼진 상태의 텍스트" : "The text of the off state",
      type: "string",
      default: "-"
    },
    {
      key: "onIcon",
      name: "onIcon",
      description:
        lang === "ko" ? "켜진 상태의 아이콘" : "The icon of the on state",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "offIcon",
      name: "offIcon",
      description:
        lang === "ko" ? "꺼진 상태의 아이콘" : "The icon of the off state",
      type: "ReactNode",
      default: "-"
    },
    {
      key: "shadow",
      name: "shadow",
      description: lang === "ko" ? "그림자 크기" : "The size of the shadow",
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
      description: lang === "ko" ? "스위치의 크기" : "The size of the switch",
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
      description:
        lang === "ko" ? "스위치의 색상 타입" : "The color type of the switch",
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
      description: lang === "ko" ? "추가 클래스명" : "Additional class name",
      type: "string",
      default: '""'
    },
    {
      key: "style",
      name: "style",
      description: lang === "ko" ? "추가 스타일" : "Additional styles",
      type: "React.CSSProperties",
      default: "{}"
    },
    {
      key: "id",
      name: "id",
      description: lang === "ko" ? "고유 ID" : "The unique ID",
      type: "string",
      default: "-"
    },
    {
      key: "ariaLabel",
      name: "ariaLabel",
      description: lang === "ko" ? "접근성 레이블" : "The accessibility label",
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
