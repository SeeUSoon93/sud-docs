"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { useLang } from "../../_lib/context/langContext";
import { Tag, Table, Rate, Typography } from "sud-ui";
import { LogoJava, LogoJavascript, LogoPython } from "sud-icons";
import * as Icons from "sud-icons";
import { tagRender } from "../../_lib/components/common/render";
import {
  borderTypeTags,
  defaultColorTypeTags,
  shadowTypeTags,
  shapeTypeTags
} from "../../_lib/components/common/defaultType";

export default function TablePage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();

  const name = "Table";
  const description = (
    <>
      {lang === "ko"
        ? "데이터를 테이블 형식으로 표시할 수 있는 컴포넌트입니다."
        : "The component for displaying data in a table format."}
    </>
  );

  const IMPORT_COMMAND = "import { Table } from 'sud-ui';";

  const whenToUse = [
    lang === "ko"
      ? "데이터를 테이블 형식으로 표시할 때"
      : "When displaying data in a table format."
  ];

  const basicColumns = [
    {
      key: "icon",
      title: "icon",
      description: "icon",
      align: "center",
      col: 1
    },
    {
      key: "name",
      title: "name",
      description: "name",
      align: "center",
      col: 1,
      render: (value) => <Typography code>{value}</Typography>
    },
    {
      key: "rate",
      title: "rate",
      description: "rate",
      align: "center",
      col: 2,
      render: (value) => <Rate value={value} disabled />
    },
    {
      key: "description",
      title: "description",
      description: "description",
      align: "center",
      col: 3,
      render: (value) => (
        <Typography as="div" style={{ textAlign: "left" }}>
          {value}
        </Typography>
      )
    }
  ];

  const basicDataSource = [
    {
      icon: <LogoJava size={50} />,
      name: "Java",
      rate: 5,
      description:
        "Java is an object-oriented programming language known for its platform independence and strong type system."
    },
    {
      icon: <LogoPython size={50} />,
      name: "Python",
      rate: 5,
      description:
        "Python is a high-level programming language with clean and readable syntax, widely used in data science and AI fields."
    },
    {
      icon: <LogoJavascript size={50} />,
      name: "JavaScript",
      rate: 5,
      description:
        "JavaScript is a scripting language that runs in web browsers, used for both frontend and backend (Node.js) development."
    }
  ];
  const sortedColumns = [
    {
      key: "icon",
      title: "icon",
      description: "icon",
      align: "center",
      col: 1
    },
    {
      key: "name",
      title: "name",
      description: "name",
      align: "center",
      col: 1,
      sorter: true,
      render: (value) => <Typography code>{value}</Typography>
    },
    {
      key: "rate",
      title: "rate",
      description: "rate",
      align: "center",
      col: 2,
      render: (value) => <Rate value={value} disabled />
    },
    {
      key: "description",
      title: "description",
      description: "description",
      align: "center",
      col: 3,
      render: (value) => (
        <Typography as="div" style={{ textAlign: "left" }}>
          {value}
        </Typography>
      )
    }
  ];

  const largeColumns = [
    {
      key: "icon",
      title: "icon",
      description: "icon",
      align: "center"
    },
    {
      key: "name",
      title: "name",
      description: "name",
      align: "center"
    }
  ];
  const largeDataSource = [
    ...Object.entries(Icons).map(([name, Component]) => ({
      icon: <Component size={30} />,
      name: name
    }))
  ];

  const examples = [
    {
      title: "Basic Usage",
      description: lang === "ko" ? "기본적인 사용 방법입니다." : "Basic usage.",
      render: <Table columns={basicColumns} dataSource={basicDataSource} />,
      jscode: `import { Table, Typography, Rate } from "sud-ui";
import { LogoJava, LogoPython, LogoJavascript } from "sud-icons";

export default function App() {
  const columns = [
    {
      key: "icon",
      title: "icon",
      description: "icon",
      align: "center",
      col: 1
    },
    {
      key: "name",
      title: "name",
      description: "name",
      align: "center",
      col: 1
    },
    {
      key: "rate",
      title: "rate",
      description: "rate",
      align: "center",
      col: 2
    },
    {
      key: "description",
      title: "description",
      description: "description",
      align: "center",
      col: 3
    }
  ]

  const dataSource = [
    {
      icon: <LogoJava size={50} />,
      name: "Java",
      rate: 5,
      description: "Java is an object-oriented programming language known for its platform independence and strong type system."
    },
    {
      icon: <LogoPython size={50} />,
      name: "Python",
      rate: 5,
      description: "Python is a high-level programming language with clean and readable syntax, widely used in data science and AI fields."
    },
    {
      icon: <LogoJavascript size={50} />,
      name: "JavaScript",
      rate: 5,
      description: "JavaScript is a scripting language that runs in web browsers, used for both frontend and backend (Node.js) development."
    }
  ]
  
  return (
    <div>
      <Table columns={columns} dataSource={dataSource} />
    </div>   
  )
}`,
      tscode: `import { Table, Typography, Rate } from "sud-ui";
import { LogoJava, LogoPython, LogoJavascript } from "sud-icons";
import React, { ReactNode } from "react";

interface TableColumn {
  key: string;
  title: string;
  description: string;
  align?: 'left' | 'center' | 'right';
  col?: number;
  render?: (value: any, record: any, index: number) => ReactNode;
}

interface TableData {
  icon: ReactNode;
  name: string;
  rate: number;
  description: string;
}

export default function App() {
  const columns: TableColumn[] = [
    {
      key: "icon",
      title: "icon",
      description: "icon",
      align: "center",
      col: 1
    },
    {
      key: "name",
      title: "name",
      description: "name",
      align: "center",
      col: 1
    },
    {
      key: "rate",
      title: "rate",
      description: "rate",
      align: "center",
      col: 2
    },
    {
      key: "description",
      title: "description",
      description: "description",
      align: "center",
      col: 3
    }
  ]

  const dataSource: TableData[] = [
    {
      icon: <LogoJava size={50} />,
      name: "Java",
      rate: 5,
      description: "Java is an object-oriented programming language known for its platform independence and strong type system."
    },
    {
      icon: <LogoPython size={50} />,
      name: "Python",
      rate: 5,
      description: "Python is a high-level programming language with clean and readable syntax, widely used in data science and AI fields."
    },
    {
      icon: <LogoJavascript size={50} />,
      name: "JavaScript",
      rate: 5,
      description: "JavaScript is a scripting language that runs in web browsers, used for both frontend and backend (Node.js) development."
    }
  ]
  
  return (
    <div>
      <Table columns={columns} dataSource={dataSource} />
    </div>   
  )
}`
    },
    {
      title: "Sorted",
      description:
        lang === "ko"
          ? "정렬할 컬럼을 지정할 수 있습니다."
          : "You can specify the column to sort.",
      render: <Table columns={sortedColumns} dataSource={basicDataSource} />,
      jscode: ``,
      tscode: ``
    },
    {
      title: "Pagination",
      description:
        lang === "ko"
          ? "페이지네이션을 설정할 수 있습니다."
          : "You can set pagination.",
      render: (
        <Table
          columns={largeColumns}
          dataSource={largeDataSource}
          pagination={{ pageSize: 5, align: "center" }}
        />
      ),
      jscode: ``,
      tscode: ``
    },
    {
      title: "Style Customization",
      description:
        lang === "ko"
          ? "테이블 스타일을 커스텀할 수 있습니다."
          : "You can customize the table color.",
      render: (
        <Table
          columns={basicColumns}
          dataSource={basicDataSource}
          colorType="mint"
          borderColor="mint-2"
          borderType="dashed"
          borderWeight={2}
        />
      ),
      jscode: ``,
      tscode: ``
    }
  ];

  const howToUseTableData = [
    {
      key: "columns",
      name: "columns",
      description:
        lang === "ko"
          ? "테이블의 컬럼 설정 배열"
          : "Array of column configurations",
      type: "TableColumn[]",
      default: "[]"
    },
    {
      key: "dataSource",
      name: "dataSource",
      description:
        lang === "ko"
          ? "테이블에 표시할 데이터 배열"
          : "Array of data to display in the table",
      type: "any[]",
      default: "[]"
    },
    {
      key: "rowKey",
      name: "rowKey",
      description:
        lang === "ko"
          ? "각 행의 고유 키를 지정하는 필드명 또는 함수"
          : "Field name or function to specify unique key for each row",
      type: "string | ((record: any) => string)",
      default: "key"
    },
    {
      key: "size",
      name: "size",
      description: lang === "ko" ? "테이블 크기" : "Table size",
      type: <>{tagRender(["sm", "md", "lg"])}</>,
      default: <Tag>md</Tag>
    },
    {
      key: "colorType",
      name: "colorType",
      description: lang === "ko" ? "테이블 색상 타입" : "Table color type",
      type: <>{defaultColorTypeTags}</>,
      default: <Tag>sub</Tag>
    },
    {
      key: "shape",
      name: "shape",
      description: lang === "ko" ? "테이블 모서리 모양" : "Table corner shape",
      type: <>{shapeTypeTags}</>,
      default: <Tag>rounded</Tag>
    },
    {
      key: "shadow",
      name: "shadow",
      description: lang === "ko" ? "테이블 그림자" : "Table shadow",
      type: <>{shadowTypeTags}</>,
      default: <Tag>none</Tag>
    },
    {
      key: "border",
      name: "border",
      description:
        lang === "ko"
          ? "테이블 테두리 표시 여부"
          : "Whether to show table border",
      type: "boolean",
      default: "true"
    },
    {
      key: "borderColor",
      name: "borderColor",
      description:
        lang === "ko"
          ? "테이블 테두리 색상(palette값 또는 HEX code)"
          : "Table border color (palette value or HEX code)",
      type: "string",
      default: "-"
    },
    {
      key: "borderType",
      name: "borderType",
      description:
        lang === "ko" ? "테이블 테두리 스타일" : "Table border style",
      type: <>{borderTypeTags}</>,
      default: <Tag>solid</Tag>
    },
    {
      key: "borderWeight",
      name: "borderWeight",
      description: lang === "ko" ? "테이블 테두리 두께" : "Table border weight",
      type: "number",
      default: "1"
    },
    {
      key: "pagination",
      name: "pagination",
      description:
        lang === "ko"
          ? "페이지네이션 설정 (boolean 또는 상세 설정 객체)"
          : "Pagination configuration (boolean or detailed config object)",
      type: "boolean | TablePaginationProps",
      default: "false"
    },
    {
      key: "onChange",
      name: "onChange",
      description:
        lang === "ko"
          ? "테이블 상태 변경 시 호출되는 콜백 함수"
          : "Callback function called when table state changes",
      type: "(pagination: any, filters: any, sorter: any) => void",
      default: "-"
    },
    {
      key: "emptyText",
      name: "emptyText",
      description:
        lang === "ko"
          ? "데이터가 없을 때 표시할 텍스트"
          : "Text to display when there is no data",
      type: "string",
      default: '"데이터가 없습니다"'
    },
    {
      key: "className",
      name: "className",
      description:
        lang === "ko" ? "테이블의 클래스명" : "Class name for the table",
      type: "string",
      default: "-"
    },
    {
      key: "headerClassName",
      name: "headerClassName",
      description:
        lang === "ko"
          ? "테이블 헤더의 클래스명"
          : "Class name for the table header",
      type: "string",
      default: "-"
    },
    {
      key: "bodyClassName",
      name: "bodyClassName",
      description:
        lang === "ko"
          ? "테이블 본문의 클래스명"
          : "Class name for the table body",
      type: "string",
      default: "-"
    },
    {
      key: "width",
      name: "width",
      description: lang === "ko" ? "테이블 너비" : "Table width",
      type: "string",
      default: "100%"
    },
    {
      key: "height",
      name: "height",
      description: lang === "ko" ? "테이블 높이" : "Table height",
      type: "string",
      default: "auto"
    },
    {
      key: "style",
      name: "style",
      description: lang === "ko" ? "테이블 스타일" : "Table style",
      type: "CSSProperties",
      default: "{}"
    }
  ];

  const groupTableData = [
    {
      key: "key",
      name: "key",
      description:
        lang === "ko" ? "컬럼의 고유 키" : "Unique key for the column",
      type: "string",
      default: "-"
    },
    {
      key: "title",
      name: "title",
      description: lang === "ko" ? "컬럼의 제목" : "Title of the column",
      type: "string | ReactNode",
      default: "-"
    },
    {
      key: "align",
      name: "align",
      description:
        lang === "ko" ? "컬럼의 정렬 방식" : "Alignment of the column",
      type: <>{tagRender(["left", "center", "right"])}</>,
      default: <Tag>left</Tag>
    },
    {
      key: "col",
      name: "col",
      description:
        lang === "ko" ? "컬럼의 너비 비율" : "Width ratio of the column",
      type: "number",
      default: "1"
    },
    {
      key: "width",
      name: "width",
      description:
        lang === "ko" ? "컬럼의 고정 너비" : "Fixed width of the column",
      type: "string | number",
      default: "-"
    },
    {
      key: "render",
      name: "render",
      description:
        lang === "ko"
          ? "컬럼의 렌더링 함수"
          : "Rendering function for the column",
      type: "(value: any, record: any, index: number) => ReactNode",
      default: "-"
    },
    {
      key: "sorter",
      name: "sorter",
      description:
        lang === "ko"
          ? "정렬 함수 또는 정렬 가능 여부"
          : "Sorting function or sortable flag",
      type: "boolean | ((a: any, b: any) => number)",
      default: "false"
    },
    {
      key: "className",
      name: "className",
      description:
        lang === "ko" ? "컬럼의 클래스명" : "Class name for the column",
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
        howToUseTableData,
        group: "columns",
        groupTableData
      }}
      grid={false}
      isMobile={isMobile}
    />
  );
}
