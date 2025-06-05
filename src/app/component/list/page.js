"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { useLang } from "../../_lib/context/langContext";
import { Card, List } from "sud-ui";

export default function ListPage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();

  const name = "List";
  const description = (
    <>
      {lang === "ko"
        ? "여러 항목을 나열할 수 있는 컴포넌트입니다."
        : "The component for displaying lists."}
    </>
  );

  const IMPORT_COMMAND = "import { List } from 'sud-ui';";

  const whenToUse = [
    lang === "ko" ? "여러 항목을 나열할 때" : "When displaying lists."
  ];
  const dataFive = Array.from({ length: 5 }, (_, i) => `Item ${i + 1}`);
  const dataTwenty = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

  const dataLarge = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);

  const examples = [
    {
      title: "Basic Usage",
      description: lang === "ko" ? "기본적인 사용 방법입니다." : "Basic usage.",
      render: (
        <Card style={{ width: "100%" }}>
          <List dataSource={dataFive} />
        </Card>
      ),
      jscode: `import { Card, List } from "sud-ui";

export default function App() {
  const data = Array.from({ length: 20 }, (_, i) => \`\Item \${i + 1}\`);

  return (
    <Card style={{ width: "100%" }}>
      <List dataSource={data} />
    </Card>
  );
}`,
      tscode: `import { Card, List } from "sud-ui";
import type { ReactNode } from "react";

export default function App(): ReactNode {
  const data = Array.from({ length: 20 }, (_, i) => \`\Item \${i + 1}\`);

  return (
    <Card style={{ width: "100%" }}>
      <List dataSource={data} />
    </Card>
  );
}`
    },
    {
      title: "Pagination",
      description:
        lang === "ko"
          ? "기본적인 페이지네이션 사용법입니다."
          : "Basic pagination usage.",
      render: (
        <Card style={{ width: "100%" }}>
          <div className="flex jus-cen item-cen">
            <List
              dataSource={dataTwenty}
              pagination={{
                pageSize: 4,
                current: 1,
                align: "center"
              }}
            />
          </div>
        </Card>
      ),
      jscode: `import { Card, List } from "sud-ui";

export default function App() {
  const data = Array.from({ length: 20 }, (_, i) => \`\Item \${i + 1}\`);

  return (
    <Card style={{ width: "100%" }}>
      <List dataSource={data} pagination={{ pageSize: 4, current: 1, align: "center" }} />
    </Card>
  );
}`,
      tscode: `import { Card, List } from "sud-ui";
import type { ReactNode } from "react";

export default function App(): ReactNode {
  const data = Array.from({ length: 20 }, (_, i) => \`\Item \${i + 1}\`);

  return (
    <Card style={{ width: "100%" }}>
      <List
        dataSource={data}
        pagination={{ pageSize: 4, current: 1, align: "center" }}
      />
    </Card>
  );
}`
    },
    {
      title: "Virtual Scroll",
      description:
        lang === "ko" ? "가상 스크롤 사용법입니다." : "Virtual scroll usage.",
      render: (
        <Card style={{ width: "100%" }}>
          <div className="flex jus-cen item-cen" style={{ height: 300 }}>
            <List
              dataSource={dataLarge}
              virtualScroll={true}
              style={{ height: "100%" }}
            />
          </div>
        </Card>
      ),
      jscode: `import { Card, List } from "sud-ui";

export default function App() {
  const data = Array.from({ length: 1000 }, (_, i) => \`\Item \${i + 1}\`);

  return (
    <Card style={{ width: "100%", height: 400 }}>
      <List 
        dataSource={data} 
        virtualScroll={true}
        itemHeight={40}
        overscanCount={5}
        style={{ height: "100%" }}
      />
    </Card>
  );
}`,
      tscode: `import { Card, List } from "sud-ui";
import type { ReactNode } from "react";

export default function App(): ReactNode {
  const data = Array.from({ length: 1000 }, (_, i) => \`\Item \${i + 1}\`);

  return (
    <Card style={{ width: "100%", height: 400 }}>
      <List 
        dataSource={data} 
        virtualScroll={true}
        itemHeight={40}
        overscanCount={5}
        style={{ height: "100%" }}
      />
    </Card>
  );
}`
    },
    {
      title: "Loading",
      description:
        lang === "ko"
          ? "로딩 상태를 표시할 수 있습니다."
          : "You can display the loading state.",
      render: (
        <Card style={{ width: "100%" }}>
          <div className="flex jus-cen item-cen">
            <List dataSource={dataFive} loading={true} />
          </div>
        </Card>
      ),
      jscode: `import { Card, List } from "sud-ui";

export default function App() {
  const data = Array.from({ length: 5 }, (_, i) => \`\Item \${i + 1}\`);

  return (
    <Card style={{ width: "100%" }}>
      <List dataSource={data} loading={true} />
    </Card>
  );
}`,
      tscode: `import { Card, List } from "sud-ui";
import type { ReactNode } from "react";

export default function App(): ReactNode {
  const data = Array.from({ length: 5 }, (_, i) => \`\Item \${i + 1}\`);

  return (
    <Card style={{ width: "100%" }}>
      <List dataSource={data} loading={true} />
    </Card>
  );
}`
    },
    {
      title: "Empty",
      description:
        lang === "ko"
          ? "데이터가 없을 때 표시할 수 있습니다."
          : "You can display the loading state.",
      render: (
        <Card style={{ width: "100%" }}>
          <div className="flex jus-cen item-cen">
            <List dataSource={[]} />
          </div>
        </Card>
      ),
      jscode: `import { Card, List } from "sud-ui";

export default function App() {
  const data = [];

  return (
    <Card style={{ width: "100%" }}>
      <List dataSource={data} />
    </Card>
  );
}`,
      tscode: `import { Card, List } from "sud-ui";
import type { ReactNode } from "react";

export default function App(): ReactNode {
  const data = [];

  return (
    <Card style={{ width: "100%" }}>
      <List dataSource={data} />
    </Card>
  );
}`
    }
  ];

  const howToUseTableData = [
    {
      key: "dataSource",
      name: "dataSource",
      description:
        lang === "ko"
          ? "리스트에 표시할 데이터 배열"
          : "Array of data to display in the list",
      type: "ReactNode[]",
      default: "[]"
    },
    {
      key: "pagination",
      name: "pagination",
      description:
        lang === "ko"
          ? "페이지네이션 설정 (boolean 또는 상세 설정 객체)"
          : "Pagination configuration (boolean or detailed config object)",
      type: "boolean | ListPaginationProps",
      default: "false"
    },
    {
      key: "gap",
      name: "gap",
      description:
        lang === "ko" ? "리스트 아이템 간의 간격" : "Gap between list items",
      type: "number",
      default: "8"
    },
    {
      key: "split",
      name: "split",
      description:
        lang === "ko"
          ? "아이템 사이에 구분선 표시 여부"
          : "Whether to show dividers between items",
      type: "boolean",
      default: "true"
    },
    {
      key: "loading",
      name: "loading",
      description:
        lang === "ko" ? "로딩 상태 표시 여부" : "Whether to show loading state",
      type: "boolean",
      default: "false"
    },
    {
      key: "emptyText",
      name: "emptyText",
      description:
        lang === "ko"
          ? "데이터가 없을 때 표시할 텍스트"
          : "Text to display when there is no data",
      type: "string",
      default: '"No Data"'
    },
    {
      key: "className",
      name: "className",
      description:
        lang === "ko"
          ? "컨테이너에 적용할 추가 클래스명"
          : "Additional class name for the container",
      type: "string",
      default: "undefined"
    },
    {
      key: "style",
      name: "style",
      description:
        lang === "ko" ? "컨테이너에 적용할 스타일" : "Style for the container",
      type: "React.CSSProperties",
      default: "{}"
    },
    {
      key: "itemStyle",
      name: "itemStyle",
      description:
        lang === "ko" ? "각 아이템에 적용할 스타일" : "Style for each item",
      type: "React.CSSProperties",
      default: "{}"
    },
    {
      key: "listStyle",
      name: "listStyle",
      description:
        lang === "ko"
          ? "리스트 컨텐츠 영역에 적용할 스타일"
          : "Style for the list content area",
      type: "React.CSSProperties",
      default: "{}"
    },
    {
      key: "virtualScroll",
      name: "virtualScroll",
      description:
        lang === "ko"
          ? "가상 스크롤 사용 여부"
          : "Whether to use virtual scrolling",
      type: "boolean",
      default: "false"
    },
    {
      key: "itemHeight",
      name: "itemHeight",
      description:
        lang === "ko"
          ? "가상 스크롤에서 사용할 아이템 높이"
          : "Item height for virtual scrolling",
      type: "number",
      default: "40"
    },
    {
      key: "overscanCount",
      name: "overscanCount",
      description:
        lang === "ko"
          ? "가상 스크롤에서 미리 렌더링할 아이템 수"
          : "Number of items to pre-render in virtual scrolling",
      type: "number",
      default: "5"
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
