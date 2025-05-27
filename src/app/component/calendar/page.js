"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { useLang } from "../../_lib/context/langContext";
import { Tag, Calendar } from "sud-ui";

export default function BadgePage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();

  const name = "Calendar";
  const description = (
    <>{lang === "ko" ? "달력 컴포넌트입니다." : "The calendar component."}</>
  );

  const IMPORT_COMMAND = "import { Calendar } from 'sud-ui';";

  const whenToUse = [
    lang === "ko"
      ? "알림, 카운트, 표시 등 데이터의 개수를 표시할 때"
      : "When displaying the number of data such as notifications, counts, and displays."
  ];

  const items = [
    {
      key: "1",
      date: "2025-05-21",
      content: "[14:00] - Weekly Meeting"
    },
    {
      key: "2",
      date: "2025-05-21",
      content: "[15:00] - Code Review"
    }
  ];
  const examples = [
    {
      title: "Basic Usage",
      description: lang === "ko" ? "기본적인 사용 방법입니다." : "Basic usage.",
      render: <Calendar />,
      jscode: `import React from 'react';
import { Calendar } from 'sud-ui';

const CalendarBasic = () => {
  return <Calendar />;
};

export default CalendarBasic;`,
      tscode: `import React from 'react';
import { Calendar } from 'sud-ui';

const CalendarBasic: React.FC = () => {
  return <Calendar />;
};

export default CalendarBasic;`
    },
    {
      title: "View Control",
      description:
        lang === "ko"
          ? "뷰 컨트롤 표시 여부를 설정합니다."
          : "Set the view control display.",
      render: <Calendar viewControl={true} items={items} />,
      jscode: `import React from 'react';
import { Calendar } from 'sud-ui';

interface CalendarItem {
  key: string;
  date: string;
  content: string;
}

const items: CalendarItem[] = [
  {
    key: "1",
    date: "2025-05-21",
    content: "[14:00] - Weekly Meeting"
  },
  {
    key: "2",
    date: "2025-05-21",
    content: "[15:00] - Code Review"
  }
];

const ViewControl = () => {
  return <Calendar viewControl={true} items={items}/>;
};

export default ViewControl;`,
      tscode: `import React from 'react';
import { Calendar } from 'sud-ui';

interface CalendarItem {
  key: string;
  date: string;
  content: string;
}

const items: CalendarItem[] = [
  {
    key: "1",
    date: "2025-05-21",
    content: "[14:00] - Weekly Meeting"
  },
  {
    key: "2",
    date: "2025-05-21",
    content: "[15:00] - Code Review"
  }
];

const ViewControl: React.FC = () => {
  return <Calendar viewControl={true} items={items} />;
};

export default ViewControl;`
    },
    {
      title: "Date Control",
      description:
        lang === "ko"
          ? "날짜 컨트롤 표시 여부를 설정합니다."
          : "Set the date control display.",
      render: <Calendar viewControl={true} dateControl={true} items={items} />,
      jscode: `import React from 'react';
import { Calendar } from 'sud-ui';

const DateControl = () => {
  return <Calendar viewControl={true} dateControl={true} items={items}/>;
};

export default DateControl;`,
      tscode: `import React from 'react';
import { Calendar } from 'sud-ui';

const DateControl: React.FC = () => {
  return <Calendar viewControl={true} dateControl={true} items={items} />;
};

export default DateControl;`
    },
    {
      title: "Range",
      description:
        lang === "ko"
          ? "날짜 범위 선택 모드를 설정합니다."
          : "Set the date range selection mode.",
      render: <Calendar range />,
      jscode: `import React from 'react';
import { Calendar } from 'sud-ui';

const Range = () => {
  return <Calendar range />;
};

export default Range;`,
      tscode: `import React from 'react';
import { Calendar } from 'sud-ui';

const Range: React.FC = () => {
  return <Calendar range />;
};

export default Range;`
    },
    {
      title: "Color Custom",
      description:
        lang === "ko" ? "색상 커스텀을 합니다." : "Set the color custom.",
      render: <Calendar colorType="gold" hoverBackground="sky-1" />,
      jscode: `import React from 'react';
import { Calendar } from 'sud-ui';

const ColorCustom = () => {
  return <Calendar colorType="gold" hoverBackground="sky-1" />;
};

export default ColorCustom;`,
      tscode: `import React from 'react';
import { Calendar } from 'sud-ui';

const ColorCustom: React.FC = () => {
  return <Calendar colorType="gold" hoverBackground="sky-1" />;
};

export default ColorCustom;`
    },
    {
      title: "Locale",
      description: lang === "ko" ? "언어 설정을 합니다." : "Set the locale.",
      render: <Calendar locale="ko" viewControl dateControl />,
      jscode: `import React from 'react';
import { Calendar } from 'sud-ui';

const Locale = () => {
  return <Calendar locale="ko" viewControl dateControl />;
};

export default Locale;`,
      tscode: `import React from 'react';
import { Calendar } from 'sud-ui';

const Locale: React.FC = () => {
  return <Calendar locale="ko" viewControl dateControl />;
};

export default Locale;`
    },
    {
      title: "Mini View",
      description:
        lang === "ko"
          ? "미니 뷰 모드를 설정합니다."
          : "Set the mini view mode.",
      render: (
        <div style={{ width: "300px" }}>
          <Calendar size="miniView" />
        </div>
      ),
      jscode: `import React from 'react';
import { Calendar } from 'sud-ui';

const MiniView = () => {
  return (
    <div style={{ width: "300px" }}>
      <Calendar size="miniView" />
    </div>
  );
};

export default MiniView;`,
      tscode: `import React from 'react';
import { Calendar } from 'sud-ui';

const MiniView: React.FC = () => {
  return (
    <div style={{ width: "300px" }}>
      <Calendar size="miniView" />
    </div>
  );
};

export default MiniView;`
    }
  ];

  const howToUseTableData = [
    {
      key: "value",
      name: "value",
      description: lang === "ko" ? "선택된 날짜" : "Selected date",
      type: "Date",
      default: "-"
    },
    {
      key: "onChange",
      name: "onChange",
      description:
        lang === "ko"
          ? "날짜 선택 시 호출되는 콜백 함수"
          : "Callback function called when a date is selected",
      type: "(date: Date | { startDate: Date, endDate: Date }) => void",
      default: "() => {}"
    },
    {
      key: "items",
      name: "items",
      description:
        lang === "ko"
          ? "달력에 표시할 아이템 배열"
          : "Array of items to display in the calendar",
      type: "Array<{ key: string, date: string, content: string, colorType?: string, itemProps?: any }>",
      default: "[]"
    },
    {
      key: "view",
      name: "view",
      description: lang === "ko" ? "달력 뷰 타입" : "Calendar view type",
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
      description:
        lang === "ko" ? "뷰 컨트롤 표시 여부" : "View control display",
      type: "boolean",
      default: "false"
    },
    {
      key: "dateControl",
      name: "dateControl",
      description:
        lang === "ko" ? "날짜 컨트롤 표시 여부" : "Date control display",
      type: "boolean",
      default: "false"
    },
    {
      key: "headerRender",
      name: "headerRender",
      description:
        lang === "ko" ? "헤더 커스텀 렌더링" : "Custom header rendering",
      type: "React.ReactNode",
      default: "-"
    },
    {
      key: "viewControlRender",
      name: "viewControlRender",
      description:
        lang === "ko"
          ? "뷰 컨트롤 커스텀 렌더링"
          : "Custom view control rendering",
      type: "React.ReactNode",
      default: "-"
    },
    {
      key: "dateControlRender",
      name: "dateControlRender",
      description:
        lang === "ko"
          ? "날짜 컨트롤 커스텀 렌더링"
          : "Custom date control rendering",
      type: "React.ReactNode",
      default: "-"
    },
    {
      key: "locale",
      name: "locale",
      description:
        lang === "ko" ? "달력 언어 설정" : "Calendar language setting",
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
      description: lang === "ko" ? "달력 색상 타입" : "Calendar color type",
      type: "string",
      default: <Tag>sky</Tag>
    },
    {
      key: "background",
      name: "background",
      description: lang === "ko" ? "배경색" : "Background color",
      type: "string",
      default: "-"
    },
    {
      key: "hoverBackground",
      name: "hoverBackground",
      description: lang === "ko" ? "호버 시 배경색" : "Hover background color",
      type: "string",
      default: "-"
    },
    {
      key: "color",
      name: "color",
      description: lang === "ko" ? "텍스트 색상" : "Text color",
      type: "string",
      default: "-"
    },
    {
      key: "border",
      name: "border",
      description: lang === "ko" ? "테두리 표시 여부" : "Border display",
      type: "boolean",
      default: "true"
    },
    {
      key: "borderColor",
      name: "borderColor",
      description: lang === "ko" ? "테두리 색상" : "Border color",
      type: "string",
      default: "-"
    },
    {
      key: "borderType",
      name: "borderType",
      description: lang === "ko" ? "테두리 스타일" : "Border style",
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
      description: lang === "ko" ? "테두리 두께" : "Border weight",
      type: "number",
      default: "1"
    },
    {
      key: "width",
      name: "width",
      description: lang === "ko" ? "달력 너비" : "Calendar width",
      type: "string | number",
      default: "100%"
    },
    {
      key: "height",
      name: "height",
      description: lang === "ko" ? "달력 높이" : "Calendar height",
      type: "string | number",
      default: "100%"
    },
    {
      key: "className",
      name: "className",
      description: lang === "ko" ? "추가 클래스명" : "Additional class name",
      type: "string",
      default: '""'
    },
    {
      key: "range",
      name: "range",
      description:
        lang === "ko" ? "날짜 범위 선택 모드" : "Date range selection mode",
      type: "boolean",
      default: "false"
    },
    {
      key: "startDate",
      name: "startDate",
      description:
        lang === "ko"
          ? "범위 선택 시작 날짜"
          : "Start date for range selection",
      type: "Date",
      default: "-"
    },
    {
      key: "endDate",
      name: "endDate",
      description:
        lang === "ko" ? "범위 선택 종료 날짜" : "End date for range selection",
      type: "Date",
      default: "-"
    },
    {
      key: "size",
      name: "size",
      description: lang === "ko" ? "달력 크기" : "Calendar size",
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
      description: lang === "ko" ? "추가 스타일" : "Additional style",
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
      grid={false}
      isMobile={isMobile}
    />
  );
}
