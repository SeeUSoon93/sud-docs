"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import {
  Pagination,
  Dropdown,
  Tag,
  Typography,
  Segmented,
  Avatar
} from "sud-ui";
import {
  AngleDown,
  HomeOutline,
  MoonOutline,
  SunOutline,
  TriangleRight
} from "sud-icons";
import React from "react";

export default function SegmentedPage() {
  const { isMobile } = useMobile();
  const [basicSelected, setBasicSelected] = React.useState("home");
  const [iconSelected, setIconSelected] = React.useState("light");
  const [avatarSelected, setAvatarSelected] = React.useState(1);

  const name = "Segmented";
  const description = (
    <>
      여러 옵션을 표시하고 사용자가 단일 옵션을 선택할 수 있는 컴포넌트입니다.
    </>
  );

  const IMPORT_COMMAND = "import { Segmented } from 'sud-ui';";

  const whenToUse = [
    "여러 옵션을 표시하고 사용자가 단일 옵션을 선택할 때.",
    "옵션을 선택하여 조건을 충족하는 데이터를 필터링할 때."
  ];

  const basicItems = [
    {
      value: "home",
      label: "Home"
    },
    {
      value: "components",
      label: "Components"
    },
    {
      value: "css",
      label: "CSS"
    },
    {
      value: "icons",
      label: "Icons"
    }
  ];

  const handleBasicSelected = (value) => {
    setBasicSelected(value);
  };

  const examples = [
    {
      title: "기본 사용",
      description: "기본적인 사용 방법입니다.",
      render: (
        <>
          <Segmented
            options={basicItems}
            value={basicSelected}
            onChange={handleBasicSelected}
          />
        </>
      ),
      jscode: `import React from 'react';
import { Segmented } from 'sud-ui';

const BasicSegmented = () => {
  const [selected, setSelected] = React.useState('home');
  
  const options = [
    { value: 'home', label: 'Home' },
    { value: 'components', label: 'Components' },
    { value: 'css', label: 'CSS' },
    { value: 'icons', label: 'Icons' }
  ];

  const handleChange = (value) => {
    setSelected(value);
  };

  return (
    <Segmented 
      options={options}
      value={selected}
      onChange={handleChange}
    />
  );
};

export default BasicSegmented;`,
      tscode: `import React from 'react';
import { Segmented } from 'sud-ui';

const BasicSegmented: React.FC = () => {
  const [selected, setSelected] = React.useState<string>('home');
  
  const options = [
    { value: 'home', label: 'Home' },
    { value: 'components', label: 'Components' },
    { value: 'css', label: 'CSS' },
    { value: 'icons', label: 'Icons' }
  ];

  const handleChange = (value: string) => {
    setSelected(value);
  };

  return (
    <Segmented 
      options={options}
      value={selected}
      onChange={handleChange}
    />
  );
};

export default BasicSegmented;`
    },
    {
      title: "모양 변경",
      description:
        "shape 속성을 사용하여 Segmented의 모양을 변경할 수 있습니다.",
      render: (
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-10">
            <Typography pretendard="SB">rounded</Typography>
            <Segmented
              options={basicItems}
              value={basicSelected}
              onChange={handleBasicSelected}
              shape="rounded"
            />
          </div>
          <div className="flex flex-col gap-10">
            <Typography pretendard="SB">square</Typography>
            <Segmented
              options={basicItems}
              value={basicSelected}
              onChange={handleBasicSelected}
              shape="square"
            />
          </div>
          <div className="flex flex-col gap-10">
            <Typography pretendard="SB">capsule</Typography>
            <Segmented
              options={basicItems}
              value={basicSelected}
              onChange={handleBasicSelected}
              shape="capsule"
            />
          </div>
        </div>
      )
    },
    {
      title: "Block",
      description:
        "block 속성을 사용하여 Segmented가 컨테이너의 전체 너비를 차지하도록 할 수 있습니다.",
      render: (
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-10">
            <Typography pretendard="SB">{"block={false} (기본값)"}</Typography>
            <Segmented
              options={basicItems}
              value={basicSelected}
              onChange={handleBasicSelected}
            />
          </div>
          <div className="flex flex-col gap-10">
            <Typography pretendard="SB">{"block={true}"}</Typography>
            <Segmented
              options={basicItems}
              value={basicSelected}
              onChange={handleBasicSelected}
              block
            />
          </div>
        </div>
      )
    },
    {
      title: "Disabled",
      description:
        "disabled 속성을 사용하여 Segmented를 비활성화할 수 있습니다.",
      render: (
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-10">
            <Typography pretendard="SB">전체 disabled</Typography>
            <Segmented
              options={basicItems}
              value={basicSelected}
              onChange={handleBasicSelected}
              disabled
            />
          </div>
          <div className="flex flex-col gap-10">
            <Typography pretendard="SB">일부 disabled</Typography>
            <Segmented
              options={[
                { value: "home", label: "Home" },
                { value: "components", label: "Components", disabled: true },
                { value: "css", label: "CSS" },
                { value: "icons", label: "Icons" }
              ]}
              value={basicSelected}
              onChange={handleBasicSelected}
            />
          </div>
        </div>
      )
    },
    {
      title: "아이콘만 사용",
      description: "label에 아이콘만 사용할 수 있습니다.",
      render: (
        <Segmented
          options={[
            { value: "light", label: <SunOutline /> },
            { value: "dark", label: <MoonOutline /> }
          ]}
          value={iconSelected}
          onChange={setIconSelected}
        />
      )
    },
    {
      title: "label 커스텀",
      description: "label에 아이콘만 사용할 수 있습니다.",
      render: (
        <Segmented
          options={Array.from({ length: 5 }, (_, index) => ({
            value: index + 1,
            label: (
              <div className="flex flex-col item-cen gap-10">
                <Avatar size="sm" sample={index + 1} />
                <Typography>Sample {index + 1}</Typography>
              </div>
            )
          }))}
          value={avatarSelected}
          onChange={setAvatarSelected}
        />
      )
    },
    {
      title: "사이즈별",
      description:
        "size 속성을 사용하여 Segmented의 크기를 변경할 수 있습니다.",
      render: (
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-10">
            <Typography pretendard="SB">sm</Typography>
            <Segmented
              options={basicItems}
              value={basicSelected}
              onChange={handleBasicSelected}
              size="sm"
            />
          </div>
          <div className="flex flex-col gap-10">
            <Typography pretendard="SB">md</Typography>
            <Segmented
              options={basicItems}
              value={basicSelected}
              onChange={handleBasicSelected}
              size="md"
            />
          </div>
          <div className="flex flex-col gap-10">
            <Typography pretendard="SB">lg</Typography>
            <Segmented
              options={basicItems}
              value={basicSelected}
              onChange={handleBasicSelected}
              size="lg"
            />
          </div>
        </div>
      )
    },
    {
      title: "색상 변경",
      description:
        "colorType 속성을 사용하여 Segmented의 색상을 변경할 수 있습니다.",
      render: (
        <Segmented
          options={basicItems}
          value={basicSelected}
          onChange={handleBasicSelected}
          colorType="primary"
        />
      )
    }
  ];

  const howToUseTableData = [
    {
      key: "options",
      name: "options *",
      description: "선택 옵션 배열",
      type: "Array<{ value: string | number, label: string, disabled?: boolean }>",
      default: "[]"
    },
    {
      key: "value",
      name: "value",
      description: "현재 선택된 값",
      type: "string | number",
      default: "undefined"
    },
    {
      key: "onChange",
      name: "onChange",
      description: "값 변경 시 호출되는 콜백 함수",
      type: "(value: string | number) => void",
      default: "undefined"
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
      description: "크기",
      type: (
        <>
          <Tag>sm</Tag> ｜ <Tag>md</Tag> ｜ <Tag>lg</Tag>
        </>
      ),
      default: <Tag>md</Tag>
    },
    {
      key: "block",
      name: "block",
      description: "전체 너비 사용 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "colorType",
      name: "colorType",
      description: "색상 타입",
      type: (
        <>
          <Tag>default</Tag> ｜ <Tag>primary</Tag> ｜ <Tag>success</Tag> ｜{" "}
          <Tag>warning</Tag> ｜ <Tag>danger</Tag>
        </>
      ),
      default: <Tag>default</Tag>
    },
    {
      key: "shape",
      name: "shape",
      description: "모양",
      type: (
        <>
          <Tag>rounded</Tag> ｜ <Tag>square</Tag> ｜ <Tag>circle</Tag>
        </>
      ),
      default: <Tag>rounded</Tag>
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
