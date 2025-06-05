"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { useLang } from "../../_lib/context/langContext";
import { Card, Input, List, Pagination, Radio, Tag, Typography } from "sud-ui";
import React, { useState } from "react";
import { tagRender } from "../../_lib/components/common/render";

export default function PaginationPage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();
  const name = "Pagination";
  const description =
    lang === "ko" ? (
      <>긴 목록을 페이지네이션 형태로 나누어 보여주는 컴포넌트입니다.</>
    ) : (
      <>A component that displays a long list in a paginated form.</>
    );

  const IMPORT_COMMAND = "import { Pagination } from 'sud-ui';";

  const whenToUse =
    lang === "ko"
      ? [
          "긴 목록을 페이지네이션 형태로 나누어 보여주고 싶을 때.",
          "페이지를 나누어 데이터를 탐색할 때."
        ]
      : [
          "When you want to display a long list in a paginated form.",
          "When you want to explore data by dividing pages."
        ];

  const [align, setAlign] = useState("left");
  const [pageSize, setPageSize] = useState(10);
  const [maxVisibleButtons, setMaxVisibleButtons] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const alignOptions = [
    { label: "left", value: "left" },
    { label: "center", value: "center" },
    { label: "right", value: "right" }
  ];

  const examples = [
    {
      title: "Basic Usage",
      description: lang === "ko" ? "기본적인 사용 방법입니다." : "Basic usage.",
      render: (
        <>
          <Pagination total={50} />
        </>
      ),
      jscode: `import React from 'react';
import { Pagination } from 'sud-ui';

const BasicPagination = () => {
  return <Pagination total={50} />;
};

export default BasicPagination;`,
      tscode: `import React from 'react';
import { Pagination } from 'sud-ui';

const BasicPagination: React.FC = () => {
  return <Pagination total={50} />;
};

export default BasicPagination;`
    },
    {
      title: "Align",
      description:
        lang === "ko"
          ? "페이지네이션의 정렬 위치를 설정할 수 있습니다."
          : "You can set the alignment of the pagination.",
      render: (
        <div className="flex flex-col gap-20">
          <Card style={{ width: "100%" }} shadow="none" colorType="sub">
            <div className="flex jus-cen">
              <Radio.Group
                direction="horizontal"
                options={alignOptions}
                value={align}
                onChange={setAlign}
              />
            </div>
          </Card>
          <Pagination align={align} total={50} />
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Pagination, Radio, Card } from 'sud-ui';

const AlignPagination = () => {
  const [align, setAlign] = useState('left');
  
  const alignOptions = [
    { label: 'left', value: 'left' },
    { label: 'center', value: 'center' },
    { label: 'right', value: 'right' }
  ];

  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen">
          <Radio.Group
            direction="horizontal"
            options={alignOptions}
            value={align}
            onChange={setAlign}
          />
        </div>
      </Card>
      <Pagination align={align} total={50} />
    </div>
  );
};

export default AlignPagination;`,
      tscode: `import React, { useState } from 'react';
import { Pagination, Radio, Card } from 'sud-ui';

type AlignType = 'left' | 'center' | 'right';

const AlignPagination: React.FC = () => {
  const [align, setAlign] = useState<AlignType>('left');
  
  const alignOptions = [
    { label: 'left', value: 'left' },
    { label: 'center', value: 'center' },
    { label: 'right', value: 'right' }
  ];

  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen">
          <Radio.Group
            direction="horizontal"
            options={alignOptions}
            value={align}
            onChange={setAlign}
          />
        </div>
      </Card>
      <Pagination align={align} total={50} />
    </div>
  );
};

export default AlignPagination;`
    },
    {
      title: "Item Count",
      description:
        lang === "ko"
          ? "한 페이지에 표시할 아이템 수를 설정할 수 있습니다."
          : "You can set the number of items to display per page.",
      render: (
        <div className="flex flex-col gap-20">
          <Card style={{ width: "100%" }} shadow="none" colorType="sub">
            <div className="flex jus-cen">
              <Input
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
                type="number"
                min={1}
                max={100}
                placeholder="Number of items per page"
              />
            </div>
          </Card>
          <Card style={{ width: "100%" }} shadow="none">
            <List
              dataSource={Array.from(
                { length: 1000 },
                (_, i) => `Item ${i + 1}`
              ).slice((currentPage - 1) * pageSize, currentPage * pageSize)}
              split={true}
              gap={8}
            />
          </Card>
          <div className="flex flex-col gap-20">
            <Pagination
              total={1000}
              pageSize={pageSize}
              defaultCurrent={currentPage}
              onChange={setCurrentPage}
              showPrevNext={true}
              showFirstLast={true}
              maxVisibleButtons={5}
              align="center"
            />
          </div>
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Pagination, Input, Card, List } from 'sud-ui';

const PageSizePagination = () => {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen">
          <Input
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            type="number"
            min={1}
            max={100}
            placeholder="Number of items per page"
          />
        </div>
      </Card>
      <Card style={{ width: "100%" }} shadow="none">
        <List
          dataSource={Array.from(
            { length: 1000 },
            (_, i) => \`Item \${i + 1}\`
          ).slice((currentPage - 1) * pageSize, currentPage * pageSize)}
          split={true}
          gap={8}
        />
      </Card>
      <Pagination
        total={1000}
        pageSize={pageSize}
        defaultCurrent={currentPage}
        onChange={setCurrentPage}
        showPrevNext={true}
        showFirstLast={true}
        maxVisibleButtons={5}
        align="center"
      />
    </div>
  );
};

export default PageSizePagination;`,
      tscode: `import React, { useState } from 'react';
import { Pagination, Input, Card, List } from 'sud-ui';

const PageSizePagination: React.FC = () => {
  const [pageSize, setPageSize] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen">
          <Input
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            type="number"
            min={1}
            max={100}
            placeholder="Number of items per page"
          />
        </div>
      </Card>
      <Card style={{ width: "100%" }} shadow="none">
        <List
          dataSource={Array.from(
            { length: 1000 },
            (_, i) => \`Item \${i + 1}\`
          ).slice((currentPage - 1) * pageSize, currentPage * pageSize)}
          split={true}
          gap={8}
        />
      </Card>
      <Pagination
        total={1000}
        pageSize={pageSize}
        defaultCurrent={currentPage}
        onChange={setCurrentPage}
        showPrevNext={true}
        showFirstLast={true}
        maxVisibleButtons={5}
        align="center"
      />
    </div>
  );
};

export default PageSizePagination;`
    },
    {
      title: "Color Customization",
      description:
        lang === "ko"
          ? "페이지네이션의 색상을 커스텀할 수 있습니다."
          : "You can customize the color of the pagination.",
      render: (
        <div className="flex flex-col gap-40 w-100">
          <div className="flex flex-col gap-20 w-100">
            <Typography pretendard="SB">
              Customize Current Page Button
            </Typography>
            <Pagination
              total={50}
              activeStyle={{
                colorType: "warning",
                shadow: "md"
              }}
            />
          </div>
          <div className="flex flex-col gap-20 w-100">
            <Typography pretendard="SB">Customize All Buttons</Typography>
            <Pagination
              total={50}
              defaultStyle={{
                colorType: "text",
                shadow: "none"
              }}
              activeStyle={{
                colorType: "default",
                borderColor: "blue",
                shadow: "none"
              }}
            />
          </div>
        </div>
      ),
      jscode: `import React from 'react';
import { Pagination, Typography } from 'sud-ui';

const CustomStylePagination = () => {
  return (
    <div className="flex flex-col gap-40 w-100">
      <div className="flex flex-col gap-20 w-100">
        <Typography pretendard="SB">
          Customize Current Page Button
        </Typography>
        <Pagination
          total={50}
          activeStyle={{
            colorType: "warning",
            shadow: "md"
          }}
        />
      </div>
      <div className="flex flex-col gap-20 w-100">
        <Typography pretendard="SB">Customize All Buttons</Typography>
        <Pagination
          total={50}
          defaultStyle={{
            colorType: "text",
            shadow: "none"
          }}
          activeStyle={{
            colorType: "default",
            borderColor: "blue",
            shadow: "none"
          }}
        />
      </div>
    </div>
  );
};

export default CustomStylePagination;`,
      tscode: `import React from 'react';
import { Pagination, Typography } from 'sud-ui';

const CustomStylePagination: React.FC = () => {
  return (
    <div className="flex flex-col gap-40 w-100">
      <div className="flex flex-col gap-20 w-100">
        <Typography pretendard="SB">
          Customize Current Page Button
        </Typography>
        <Pagination
          total={50}
          activeStyle={{
            colorType: "warning",
            shadow: "md"
          }}
        />
      </div>
      <div className="flex flex-col gap-20 w-100">
        <Typography pretendard="SB">Customize All Buttons</Typography>
        <Pagination
          total={50}
          defaultStyle={{
            colorType: "text",
            shadow: "none"
          }}
          activeStyle={{
            colorType: "default",
            borderColor: "blue",
            shadow: "none"
          }}
        />
      </div>
    </div>
  );
};

export default CustomStylePagination;`
    },
    {
      title: "Max Visible Buttons",
      description:
        lang === "ko"
          ? "maxVisibleButtons prop을 사용하여 한 번에 표시할 페이지 버튼의 수를 설정할 수 있습니다."
          : "You can set the number of page buttons to display at once using the maxVisibleButtons prop.",
      render: (
        <div className="flex flex-col gap-40 w-100">
          <Card style={{ width: "100%" }} shadow="none" colorType="sub">
            <div className="flex jus-cen">
              <Input
                value={maxVisibleButtons}
                onChange={(e) => setMaxVisibleButtons(Number(e.target.value))}
                type="number"
                min={1}
                max={100}
              />
            </div>
            <Pagination total={100} maxVisibleButtons={maxVisibleButtons} />
          </Card>
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Pagination, Input, Card } from 'sud-ui';

const MaxVisiblePagination = () => {
  const [maxVisibleButtons, setMaxVisibleButtons] = useState(5);

  return (
    <div className="flex flex-col gap-40 w-100">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen">
          <Input
            value={maxVisibleButtons}
            onChange={(e) => setMaxVisibleButtons(Number(e.target.value))}
            type="number"
            min={1}
            max={100}
          />
        </div>
        <Pagination total={100} maxVisibleButtons={maxVisibleButtons} />
      </Card>
    </div>
  );
};

export default MaxVisiblePagination;`,
      tscode: `import React, { useState } from 'react';
import { Pagination, Input, Card } from 'sud-ui';

const MaxVisiblePagination: React.FC = () => {
  const [maxVisibleButtons, setMaxVisibleButtons] = useState<number>(5);

  return (
    <div className="flex flex-col gap-40 w-100">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen">
          <Input
            value={maxVisibleButtons}
            onChange={(e) => setMaxVisibleButtons(Number(e.target.value))}
            type="number"
            min={1}
            max={100}
          />
        </div>
        <Pagination total={100} maxVisibleButtons={maxVisibleButtons} />
      </Card>
    </div>
  );
};

export default MaxVisiblePagination;`
    }
  ];

  const howToUseTableData = [
    {
      key: "current",
      name: "current",
      description: lang === "ko" ? "현재 페이지 번호" : "Current page number",
      type: "number",
      default: "1"
    },
    {
      key: "defaultCurrent",
      name: "defaultCurrent",
      description: lang === "ko" ? "초기 페이지 번호" : "Initial page number",
      type: "number",
      default: "1"
    },
    {
      key: "total",
      name: "total",
      description: lang === "ko" ? "전체 아이템 수" : "Total number of items",
      type: "number",
      default: "0"
    },
    {
      key: "align",
      name: "align",
      description:
        lang === "ko" ? "페이지네이션 정렬 위치" : "Pagination alignment",
      type: <>{tagRender(["left", "center", "right"])}</>,
      default: <Tag>left</Tag>
    },
    {
      key: "pageSize",
      name: "pageSize",
      description:
        lang === "ko"
          ? "한 페이지에 표시할 아이템 수"
          : "Number of items per page",
      type: "number",
      default: "10"
    },
    {
      key: "onChange",
      name: "onChange",
      description:
        lang === "ko"
          ? "페이지 변경 시 호출되는 콜백 함수"
          : "Callback function called when the page changes",
      type: "(page: number) => void",
      default: "-"
    },
    {
      key: "showPrevNext",
      name: "showPrevNext",
      description:
        lang === "ko"
          ? "이전/다음 페이지 버튼 표시 여부"
          : "Display previous/next page buttons",
      type: "boolean",
      default: "true"
    },
    {
      key: "showFirstLast",
      name: "showFirstLast",
      description:
        lang === "ko"
          ? "첫 페이지/마지막 페이지 버튼 표시 여부"
          : "Display first/last page buttons",
      type: "boolean",
      default: "true"
    },
    {
      key: "maxVisibleButtons",
      name: "maxVisibleButtons",
      description:
        lang === "ko"
          ? "한 번에 표시할 최대 페이지 버튼 수"
          : "Maximum number of page buttons to display at once",
      type: "number",
      default: "5"
    },
    {
      key: "activeStyle",
      name: "activeStyle",
      description:
        lang === "ko"
          ? "현재 페이지 버튼의 스타일"
          : "Style of the current page button",
      type: "object",
      default: "{ colorType: 'primary', shadow: 'sm', ...ButtonProps }"
    },
    {
      key: "defaultStyle",
      name: "defaultStyle",
      description:
        lang === "ko"
          ? "기본 페이지 버튼의 스타일"
          : "Style of the default page button",
      type: "object",
      default: "{ colorType: 'default', shadow: 'sm', ...ButtonProps }"
    },
    {
      key: "style",
      name: "style",
      description: lang === "ko" ? "컨테이너 스타일" : "Container style",
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
