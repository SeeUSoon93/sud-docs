"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import {
  Tag,
  Card,
  Radio,
  Switch,
  Avatar,
  Typography,
  Input,
  Divider
} from "sud-ui";

import React, { useState } from "react";
import { UserFill } from "sud-icons";

export default function SwitchPage() {
  const { isMobile } = useMobile();
  const [size, setSize] = useState("sm");
  const [sizeNumber, setSizeNumber] = useState(20);
  const [shape, setShape] = useState("circle");

  const name = "Avatar";
  const description = (
    <>사용자나 사물을 표현하는데 사용되는 아바타 컴포넌트입니다.</>
  );

  const IMPORT_COMMAND = "import { Avatar } from 'sud-ui';";

  const whenToUse = ["사용자나 사물을 이미지, 아이콘, 문자로 표현할 때"];

  const sizeOptions = [
    {
      label: "xs",
      value: "xs"
    },
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
    },
    {
      label: "xl",
      value: "xl"
    }
  ];

  const shapeOptions = [
    {
      label: "circle",
      value: "circle"
    },
    {
      label: "square",
      value: "square"
    },
    {
      label: "rounded",
      value: "rounded"
    }
  ];

  const avatars = [
    {
      src: "김군순"
    },
    {
      src: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbgj9MS%2FbtsJ1MiAERm%2FPthqAHXunCXpgiXhECOgQ0%2Fimg.png",
      colorType: "blue"
    },
    {
      src: "이순신",
      colorType: "red"
    },
    {
      sample: 1
    },
    {
      sample: 2
    },
    {
      sample: 3
    },
    {
      sample: 4
    }
  ];

  const examples = [
    {
      title: "Basic Usage",
      description: "기본적인 사용방법입니다.",
      render: (
        <div className="flex gap-20 flex-wra">
          <Avatar />
          <Avatar src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbgj9MS%2FbtsJ1MiAERm%2FPthqAHXunCXpgiXhECOgQ0%2Fimg.png" />
        </div>
      ),
      jscode: `import React from 'react';
import { Avatar } from 'sud-ui';

const BasicAvatar = () => {
  return (
    <div className="flex gap-20">
      <Avatar />
      <Avatar src="https://example.com/image.jpg" />
    </div>
  );
};

export default BasicAvatar;`,
      tscode: `import React from 'react';
import { Avatar } from 'sud-ui';

const BasicAvatar: React.FC = () => {
  return (
    <div className="flex gap-20">
      <Avatar />
      <Avatar src="https://example.com/image.jpg" />
    </div>
  );
};

export default BasicAvatar;`
    },
    {
      title: "Size",
      description: "아바타의 크기를 설정할 수 있습니다.",
      render: (
        <div className="flex flex-col gap-20">
          <Card style={{ width: "100%" }} shadow="none" colorType="sub">
            <div className="flex flex-col item-cen jus-cen gap-20">
              <Radio.Group
                options={sizeOptions}
                direction="horizontal"
                value={size}
                onChange={setSize}
              />
              <Input
                value={sizeNumber}
                size="sm"
                type="number"
                onChange={(e) => setSizeNumber(Number(e.target.value) || 0)}
                placeholder="숫자로 입력"
              />
            </div>
          </Card>
          <div className="flex gap-10">
            <Card style={{ width: "100%" }} shadow="none">
              <div className="flex flex-col item-cen jus-cen gap-10">
                <Avatar size={size} />
                <Typography>size Map</Typography>
              </div>
            </Card>
            <Card style={{ width: "100%" }} shadow="none">
              <div className="flex flex-col item-cen jus-cen gap-10">
                <Avatar size={sizeNumber} />
                <Typography>size Number</Typography>
              </div>
            </Card>
          </div>
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Avatar, Radio, Card, Input, Typography } from 'sud-ui';

const SizeAvatar = () => {
  const [size, setSize] = useState('md');
  const [sizeNumber, setSizeNumber] = useState(20);

  const sizeOptions = [
    { label: 'xs', value: 'xs' },
    { label: 'sm', value: 'sm' },
    { label: 'md', value: 'md' },
    { label: 'lg', value: 'lg' },
    { label: 'xl', value: 'xl' }
  ];

  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex flex-col item-cen jus-cen gap-20">
          <Radio.Group
            options={sizeOptions}
            direction="horizontal"
            value={size}
            onChange={setSize}
          />
          <Input
            value={sizeNumber}
            size="sm"
            type="number"
            onChange={(e) => setSizeNumber(Number(e.target.value) || 0)}
            placeholder="숫자로 입력"
          />
        </div>
      </Card>
      <div className="flex gap-10">
        <Card style={{ width: "100%" }} shadow="none">
          <div className="flex flex-col item-cen jus-cen gap-10">
            <Avatar size={size} />
            <Typography>size Map</Typography>
          </div>
        </Card>
        <Card style={{ width: "100%" }} shadow="none">
          <div className="flex flex-col item-cen jus-cen gap-10">
            <Avatar size={sizeNumber} />
            <Typography>size Number</Typography>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SizeAvatar;`,
      tscode: `import React, { useState } from 'react';
import { Avatar, Radio, Card, Input, Typography } from 'sud-ui';

const SizeAvatar: React.FC = () => {
  const [size, setSize] = useState<'xs' | 'sm' | 'md' | 'lg' | 'xl'>('md');
  const [sizeNumber, setSizeNumber] = useState<number>(20);

  const sizeOptions = [
    { label: 'xs', value: 'xs' },
    { label: 'sm', value: 'sm' },
    { label: 'md', value: 'md' },
    { label: 'lg', value: 'lg' },
    { label: 'xl', value: 'xl' }
  ];

  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex flex-col item-cen jus-cen gap-20">
          <Radio.Group
            options={sizeOptions}
            direction="horizontal"
            value={size}
            onChange={setSize}
          />
          <Input
            value={sizeNumber}
            size="sm"
            type="number"
            onChange={(e) => setSizeNumber(Number(e.target.value) || 0)}
            placeholder="숫자로 입력"
          />
        </div>
      </Card>
      <div className="flex gap-10">
        <Card style={{ width: "100%" }} shadow="none">
          <div className="flex flex-col item-cen jus-cen gap-10">
            <Avatar size={size} />
            <Typography>size Map</Typography>
          </div>
        </Card>
        <Card style={{ width: "100%" }} shadow="none">
          <div className="flex flex-col item-cen jus-cen gap-10">
            <Avatar size={sizeNumber} />
            <Typography>size Number</Typography>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SizeAvatar;`
    },
    {
      title: "Shape",
      description: "아바타의 모양을 설정할 수 있습니다.",
      render: (
        <div className="flex flex-col gap-20">
          <Card style={{ width: "100%" }} shadow="none" colorType="sub">
            <div className="flex jus-cen w-100">
              <Radio.Group
                options={shapeOptions}
                direction="horizontal"
                value={shape}
                onChange={setShape}
              />
            </div>
          </Card>
          <div>
            <Avatar shape={shape} />
          </div>
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Avatar, Radio, Card } from 'sud-ui';

const ShapeAvatar = () => {
  const [shape, setShape] = useState('circle');

  const shapeOptions = [
    { label: 'circle', value: 'circle' },
    { label: 'square', value: 'square' },
    { label: 'rounded', value: 'rounded' }
  ];

  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen w-100">
          <Radio.Group
            options={shapeOptions}
            direction="horizontal"
            value={shape}
            onChange={setShape}
          />
        </div>
      </Card>
      <div>
        <Avatar shape={shape} />
      </div>
    </div>
  );
};

export default ShapeAvatar;`,
      tscode: `import React, { useState } from 'react';
import { Avatar, Radio, Card } from 'sud-ui';

const ShapeAvatar: React.FC = () => {
  const [shape, setShape] = useState<'circle' | 'square' | 'rounded'>('circle');

  const shapeOptions = [
    { label: 'circle', value: 'circle' },
    { label: 'square', value: 'square' },
    { label: 'rounded', value: 'rounded' }
  ];

  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen w-100">
          <Radio.Group
            options={shapeOptions}
            direction="horizontal"
            value={shape}
            onChange={setShape}
          />
        </div>
      </Card>
      <div>
        <Avatar shape={shape} />
      </div>
    </div>
  );
};

export default ShapeAvatar;`
    },
    {
      title: "Color Custom",
      description: "아바타의 색을 설정할 수 있습니다.",
      render: (
        <div className="flex gap-20 flex-wrap">
          <Avatar colorType="lime" />
          <Avatar background="forest-5" />
          <Avatar borderColor="coral-5" border />
        </div>
      ),
      jscode: `import React from 'react';
import { Avatar } from 'sud-ui';

const ColorAvatar = () => {
  return (
    <div className="flex gap-20">
      <Avatar colorType="lime" />
      <Avatar background="forest-5" />
      <Avatar borderColor="coral-5" border />
    </div>
  );
};

export default ColorAvatar;`,
      tscode: `import React from 'react';
import { Avatar } from 'sud-ui';

const ColorAvatar: React.FC = () => {
  return (
    <div className="flex gap-20">
      <Avatar colorType="lime" />
      <Avatar background="forest-5" />
      <Avatar borderColor="coral-5" border />
    </div>
  );
};

export default ColorAvatar;`
    },
    {
      title: "Sample Image",
      description: "아바타의 샘플 이미지를 설정할 수 있습니다.",
      render: (
        <div className="flex gap-20 flex-wrap">
          {Array.from({ length: 5 }).map((_, index) => (
            <Avatar key={index} sample={index + 1} />
          ))}
        </div>
      ),
      jscode: `import React from 'react';
import { Avatar } from 'sud-ui';

const SampleAvatar = () => {
  return (
    <div className="flex gap-20">
      {Array.from({ length: 5 }).map((_, index) => (
        <Avatar key={index} sample={index + 1} />
      ))}
    </div>
  );
};

export default SampleAvatar;`,
      tscode: `import React from 'react';
import { Avatar } from 'sud-ui';

const SampleAvatar: React.FC = () => {
  return (
    <div className="flex gap-20">
      {Array.from({ length: 5 }).map((_, index) => (
        <Avatar key={index} sample={index + 1} />
      ))}
    </div>
  );
};

export default SampleAvatar;`
    },
    {
      title: "Text & Icon",
      description: "아바타의 텍스트와 아이콘을 설정할 수 있습니다.",
      render: (
        <div className="flex gap-20 flex-wrap">
          <Avatar src="김군순" />
          <Avatar src="SeeUSoon" colorType="blue" />
          <Avatar src={<UserFill />} colorType="volcano" />
        </div>
      ),
      jscode: `import React from 'react';
import { Avatar } from 'sud-ui';
import { UserFill } from 'sud-icons';

const TextIconAvatar = () => {
  return (
    <div className="flex gap-20">
      <Avatar src="김군순" />
      <Avatar src="SeeUSoon" colorType="blue" />
      <Avatar src={<UserFill />} colorType="volcano" />
    </div>
  );
};

export default TextIconAvatar;`,
      tscode: `import React from 'react';
import { Avatar } from 'sud-ui';
import { UserFill } from 'sud-icons';

const TextIconAvatar: React.FC = () => {
  return (
    <div className="flex gap-20">
      <Avatar src="김군순" />
      <Avatar src="SeeUSoon" colorType="blue" />
      <Avatar src={<UserFill />} colorType="volcano" />
    </div>
  );
};

export default TextIconAvatar;`
    },
    {
      title: "Group",
      description: "아바타의 그룹을 설정할 수 있습니다.",
      render: (
        <div className="flex flex-col gap-20">
          <Avatar.Group max={3} gap={0.3} avatars={avatars} />
          <Avatar.Group max={3} gap={0.8} avatars={avatars} />
        </div>
      ),
      jscode: `import React from 'react';
import { Avatar } from 'sud-ui';

const GroupAvatar = () => {
  const avatars = [
    { src: "김군순" },
    { src: "https://example.com/image.jpg", colorType: "blue" },
    { src: "이순신", colorType: "red" },
    { sample: 1 },
    { sample: 2 },
    { sample: 3 },
    { sample: 4 }
  ];

  return (
    <div className="flex flex-col gap-20">
      <Avatar.Group max={3} gap={0.3} avatars={avatars} />
      <Avatar.Group max={3} gap={0.8} avatars={avatars} />
    </div>
  );
};

export default GroupAvatar;`,
      tscode: `import React from 'react';
import { Avatar } from 'sud-ui';

const GroupAvatar: React.FC = () => {
  const avatars = [
    { src: "김군순" },
    { src: "https://example.com/image.jpg", colorType: "blue" },
    { src: "이순신", colorType: "red" },
    { sample: 1 },
    { sample: 2 },
    { sample: 3 },
    { sample: 4 }
  ];

  return (
    <div className="flex flex-col gap-20">
      <Avatar.Group max={3} gap={0.3} avatars={avatars} />
      <Avatar.Group max={3} gap={0.8} avatars={avatars} />
    </div>
  );
};

export default GroupAvatar;`
    }
  ];

  const howToUseTableData = [
    {
      key: "src",
      name: "src",
      description: "아바타 이미지의 URL 또는 ReactNode",
      type: "string | ReactNode",
      default: "-"
    },
    {
      key: "sample",
      name: "sample",
      description: "샘플 이미지 번호 (1-5)",
      type: "number",
      default: "1"
    },
    {
      key: "alt",
      name: "alt",
      description: "이미지 대체 텍스트",
      type: "string",
      default: "avatar"
    },
    {
      key: "size",
      name: "size",
      description: "아바타의 크기",
      type: (
        <>
          <Tag>xs</Tag> ｜ <Tag>sm</Tag> ｜ <Tag>md</Tag> ｜ <Tag>lg</Tag> ｜{" "}
          <Tag>xl</Tag>
        </>
      ),
      default: <Tag>md</Tag>
    },
    {
      key: "shape",
      name: "shape",
      description: "아바타의 모양",
      type: (
        <>
          <Tag>circle</Tag> ｜ <Tag>square</Tag> ｜ <Tag>rounded</Tag>
        </>
      ),
      default: <Tag>circle</Tag>
    },
    {
      key: "colorType",
      name: "colorType",
      description: "아바타의 색상 타입",
      type: "string",
      default: <Tag>default</Tag>
    },
    {
      key: "background",
      name: "background",
      description: "배경색",
      type: "string",
      default: "-"
    },
    {
      key: "color",
      name: "color",
      description: "텍스트 색상",
      type: "string",
      default: "-"
    },
    {
      key: "border",
      name: "border",
      description: "테두리 표시 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "borderColor",
      name: "borderColor",
      description: "테두리 색상",
      type: "string",
      default: "-"
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
      key: "shadow",
      name: "shadow",
      description: "그림자 크기",
      type: (
        <>
          <Tag>none</Tag> ｜ <Tag>sm</Tag> ｜ <Tag>md</Tag> ｜ <Tag>lg</Tag>
        </>
      ),
      default: <Tag>none</Tag>
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
      key: "onClick",
      name: "onClick",
      description: "클릭 이벤트 핸들러",
      type: "() => void",
      default: "-"
    },
    {
      key: "onKeyDown",
      name: "onKeyDown",
      description: "키보드 이벤트 핸들러",
      type: "(e: KeyboardEvent) => void",
      default: "-"
    },
    {
      key: "tabIndex",
      name: "tabIndex",
      description: "탭 인덱스",
      type: "number",
      default: "0"
    }
  ];

  const groupTableData = [
    {
      key: "avatars",
      name: "avatars",
      description: "아바타 배열",
      type: "Array<AvatarProps>",
      default: "[]"
    },
    {
      key: "max",
      name: "max",
      description: "최대 표시 개수",
      type: "number",
      default: "3"
    },
    {
      key: "size",
      name: "size",
      description: "아바타의 크기",
      type: (
        <>
          <Tag>xs</Tag> ｜ <Tag>sm</Tag> ｜ <Tag>md</Tag> ｜ <Tag>lg</Tag> ｜{" "}
          <Tag>xl</Tag>
        </>
      ),
      default: <Tag>md</Tag>
    },
    {
      key: "shape",
      name: "shape",
      description: "아바타의 모양",
      type: (
        <>
          <Tag>circle</Tag> ｜ <Tag>square</Tag> ｜ <Tag>rounded</Tag>
        </>
      ),
      default: <Tag>circle</Tag>
    },
    {
      key: "colorType",
      name: "colorType",
      description: "아바타의 색상 타입",
      type: "string",
      default: <Tag>default</Tag>
    },
    {
      key: "background",
      name: "background",
      description: "배경색",
      type: "string",
      default: "-"
    },
    {
      key: "color",
      name: "color",
      description: "텍스트 색상",
      type: "string",
      default: "-"
    },
    {
      key: "border",
      name: "border",
      description: "테두리 표시 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "borderColor",
      name: "borderColor",
      description: "테두리 색상",
      type: "string",
      default: "-"
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
      key: "shadow",
      name: "shadow",
      description: "그림자 크기",
      type: (
        <>
          <Tag>none</Tag> ｜ <Tag>sm</Tag> ｜ <Tag>md</Tag> ｜ <Tag>lg</Tag>
        </>
      ),
      default: <Tag>none</Tag>
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
      key: "zIndexStart",
      name: "zIndexStart",
      description: "z-index 시작 값",
      type: "number",
      default: "10"
    },
    {
      key: "gap",
      name: "gap",
      description: "아바타 간의 간격 (0~1 사이의 값)",
      type: "number",
      default: "0.6"
    },
    {
      key: "aria-label",
      name: "aria-label",
      description: "접근성 레이블",
      type: "string",
      default: "아바타 그룹"
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
        howToUseTableData,
        groupTableData
      }}
      grid={true}
      isMobile={isMobile}
    />
  );
}
