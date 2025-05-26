"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Tag, Calendar, toast } from "sud-ui";

import React, { useEffect, useState } from "react";

export default function BadgePage() {
  const { isMobile } = useMobile();

  useEffect(() => {
    setTimeout(() => {
      toast.danger("현재 Calendar 컴포넌트는 수정중에 있습니다!");
    }, 1000);
  }, []);

  const name = "Calendar";
  const description = <>달력 컴포넌트입니다.</>;

  const IMPORT_COMMAND = "import { Calendar } from 'sud-ui';";

  const whenToUse = ["알림, 카운트, 표시 등 데이터의 개수를 표시할 때"];

  const items = [
    {
      key: "1",
      date: "2025-05-21",
      content: "[14:00] 주간 회의"
    },
    {
      key: "2",
      date: "2025-05-21",
      content: "[15:00] 코드 리뷰"
    }
  ];
  const examples = [
    {
      title: "Basic Usage",
      description: "기본적인 사용방법입니다.",
      render: <Calendar />,
      jscode: `import React from 'react';
import { Calendar } from 'sud-ui';

const BasicUsage = () => {
  return <Calendar />;
};

export default BasicUsage;`,
      tscode: ``
    },
    {
      title: "View Control",
      description: "뷰 컨트롤 표시 여부를 설정합니다.",
      render: <Calendar viewControl={true} items={items} />,
      jscode: `import React from 'react';
import { Calendar } from 'sud-ui';

const BasicUsage = () => {
  return <Calendar viewControl={true}/>;
};

export default BasicUsage;`,
      tscode: ``
    },
    {
      title: "Date Control",
      description: "날짜 컨트롤 표시 여부를 설정합니다.",
      render: <Calendar viewControl={true} dateControl={true} items={items} />,
      jscode: `import React from 'react';
import { Calendar } from 'sud-ui';

const BasicUsage = () => {
  return <Calendar dateControl={true}/>;
};

export default BasicUsage;`,
      tscode: ``
    },
    {
      title: "Range",
      description: "날짜 범위 선택 모드를 설정합니다.",
      render: <Calendar range items={items} />,
      jscode: `import React from 'react';
import { Calendar } from 'sud-ui';

const BasicUsage = () => {
  return <Calendar dateControl={true}/>;
};

export default BasicUsage;`,
      tscode: ``
    },
    {
      title: "Mini View",
      description: "미니 뷰 모드를 설정합니다.",
      render: (
        <div style={{ width: "300px" }}>
          <Calendar size="miniView" />
        </div>
      ),
      jscode: `import React from 'react';
import { Calendar } from 'sud-ui';

const BasicUsage = () => {
  return <Calendar size="miniView"/>;
};

export default BasicUsage;`,
      tscode: ``
    }
  ];

  const howToUseTableData = [
    {
      key: "value",
      name: "value",
      description: "선택된 날짜",
      type: "Date",
      default: "-"
    },
    {
      key: "onChange",
      name: "onChange",
      description: "날짜 선택 시 호출되는 콜백 함수",
      type: "(date: Date | { startDate: Date, endDate: Date }) => void",
      default: "() => {}"
    },
    {
      key: "items",
      name: "items",
      description: "달력에 표시할 아이템 배열",
      type: "Array<{ key: string, date: string, content: string, colorType?: string, itemProps?: any }>",
      default: "[]"
    },
    {
      key: "view",
      name: "view",
      description: "달력 뷰 타입",
      type: (
        <>
          <Tag>daily</Tag> ｜ <Tag>month</Tag> ｜ <Tag>year</Tag>
        </>
      ),
      default: <Tag>month</Tag>
    },
    {
      key: "viewControl",
      name: "viewControl",
      description: "뷰 컨트롤 표시 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "dateControl",
      name: "dateControl",
      description: "날짜 컨트롤 표시 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "headerRender",
      name: "headerRender",
      description: "헤더 커스텀 렌더링",
      type: "React.ReactNode",
      default: "-"
    },
    {
      key: "viewControlRender",
      name: "viewControlRender",
      description: "뷰 컨트롤 커스텀 렌더링",
      type: "React.ReactNode",
      default: "-"
    },
    {
      key: "dateControlRender",
      name: "dateControlRender",
      description: "날짜 컨트롤 커스텀 렌더링",
      type: "React.ReactNode",
      default: "-"
    },
    {
      key: "locale",
      name: "locale",
      description: "달력 언어 설정",
      type: (
        <>
          <Tag>en</Tag> ｜ <Tag>ko</Tag>
        </>
      ),
      default: <Tag>en</Tag>
    },
    {
      key: "colorType",
      name: "colorType",
      description: "달력 색상 타입",
      type: "string",
      default: <Tag>sky</Tag>
    },
    {
      key: "hoverColorType",
      name: "hoverColorType",
      description: "호버 시 색상 타입",
      type: "string",
      default: <Tag>hovered</Tag>
    },
    {
      key: "background",
      name: "background",
      description: "배경색",
      type: "string",
      default: "-"
    },
    {
      key: "hoverBackground",
      name: "hoverBackground",
      description: "호버 시 배경색",
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
      default: "true"
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
      key: "width",
      name: "width",
      description: "달력 너비",
      type: "string | number",
      default: "100%"
    },
    {
      key: "height",
      name: "height",
      description: "달력 높이",
      type: "string | number",
      default: "100%"
    },
    {
      key: "className",
      name: "className",
      description: "추가 클래스명",
      type: "string",
      default: '""'
    },
    {
      key: "range",
      name: "range",
      description: "날짜 범위 선택 모드",
      type: "boolean",
      default: "false"
    },
    {
      key: "startDate",
      name: "startDate",
      description: "범위 선택 시작 날짜",
      type: "Date",
      default: "-"
    },
    {
      key: "endDate",
      name: "endDate",
      description: "범위 선택 종료 날짜",
      type: "Date",
      default: "-"
    },
    {
      key: "size",
      name: "size",
      description: "달력 크기",
      type: (
        <>
          <Tag>lg</Tag> ｜ <Tag>md</Tag> ｜ <Tag>sm</Tag> ｜ <Tag>miniView</Tag>
        </>
      ),
      default: <Tag>md</Tag>
    },
    {
      key: "style",
      name: "style",
      description: "추가 스타일",
      type: "React.CSSProperties",
      default: "{}"
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
      grid={false}
      isMobile={isMobile}
    />
  );
}
