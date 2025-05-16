"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Card, Input, List, Pagination, Radio, Tag, Typography } from "sud-ui";
import React, { useState } from "react";

export default function PaginationPage() {
  const { isMobile } = useMobile();

  const name = "Pagination";
  const description = (
    <>긴 목록을 페이지네이션 형태로 나누어 보여주는 컴포넌트입니다.</>
  );

  const IMPORT_COMMAND = "import { Pagination } from 'sud-ui';";

  const whenToUse = [
    "긴 목록을 페이지네이션 형태로 나누어 보여주고 싶을 때.",
    "페이지를 나누어 데이터를 탐색할 때."
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
      description: "기본적인 페이지네이션 컴포넌트입니다.",
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
      title: "Size",
      description: "페이지네이션의 크기를 설정할 수 있습니다.",
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
      title: "Shape",
      description: "페이지네이션의 모양을 설정할 수 있습니다.",
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
                placeholder="페이지당 아이템 수"
              />
            </div>
          </Card>
          <Card style={{ width: "100%" }} shadow="none">
            <List
              dataSource={Array.from(
                { length: 1000 },
                (_, i) => `아이템 ${i + 1}`
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
            placeholder="페이지당 아이템 수"
          />
        </div>
      </Card>
      <Card style={{ width: "100%" }} shadow="none">
        <List
          dataSource={Array.from(
            { length: 1000 },
            (_, i) => \`아이템 \${i + 1}\`
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
            placeholder="페이지당 아이템 수"
          />
        </div>
      </Card>
      <Card style={{ width: "100%" }} shadow="none">
        <List
          dataSource={Array.from(
            { length: 1000 },
            (_, i) => \`아이템 \${i + 1}\`
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
      description: "페이지네이션의 색상을 커스텀할 수 있습니다.",
      render: (
        <div className="flex flex-col gap-40 w-100">
          <div className="flex flex-col gap-20 w-100">
            <Typography pretendard="SB">현재 페이지 버튼 커스텀</Typography>
            <Pagination
              total={50}
              activeStyle={{
                colorType: "warning",
                shadow: "md"
              }}
            />
          </div>
          <div className="flex flex-col gap-20 w-100">
            <Typography pretendard="SB">전체 버튼 커스텀</Typography>
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
        <Typography pretendard="SB">현재 페이지 버튼 커스텀</Typography>
        <Pagination
          total={50}
          activeStyle={{
            colorType: "warning",
            shadow: "md"
          }}
        />
      </div>
      <div className="flex flex-col gap-20 w-100">
        <Typography pretendard="SB">전체 버튼 커스텀</Typography>
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
        <Typography pretendard="SB">현재 페이지 버튼 커스텀</Typography>
        <Pagination
          total={50}
          activeStyle={{
            colorType: "warning",
            shadow: "md"
          }}
        />
      </div>
      <div className="flex flex-col gap-20 w-100">
        <Typography pretendard="SB">전체 버튼 커스텀</Typography>
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
      title: "표시할 버튼 수",
      description:
        "maxVisibleButtons prop을 사용하여 한 번에 표시할 페이지 버튼의 수를 설정할 수 있습니다.",
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
      description: "현재 페이지 번호",
      type: "number",
      default: "1"
    },
    {
      key: "defaultCurrent",
      name: "defaultCurrent",
      description: "초기 페이지 번호",
      type: "number",
      default: "1"
    },
    {
      key: "total",
      name: "total *",
      description: "전체 아이템 수",
      type: "number",
      default: "0"
    },
    {
      key: "align",
      name: "align",
      description: "페이지네이션 정렬 위치",
      type: (
        <>
          <Tag>left</Tag> ｜ <Tag>center</Tag> ｜ <Tag>right</Tag>
        </>
      ),
      default: <Tag>left</Tag>
    },
    {
      key: "pageSize",
      name: "pageSize",
      description: "한 페이지에 표시할 아이템 수",
      type: "number",
      default: "10"
    },
    {
      key: "onChange",
      name: "onChange",
      description: "페이지 변경 시 호출되는 콜백 함수",
      type: "(page: number) => void",
      default: "undefined"
    },
    {
      key: "showPrevNext",
      name: "showPrevNext",
      description: "이전/다음 페이지 버튼 표시 여부",
      type: "boolean",
      default: "true"
    },
    {
      key: "showFirstLast",
      name: "showFirstLast",
      description: "첫 페이지/마지막 페이지 버튼 표시 여부",
      type: "boolean",
      default: "true"
    },
    {
      key: "maxVisibleButtons",
      name: "maxVisibleButtons",
      description: "한 번에 표시할 최대 페이지 버튼 수",
      type: "number",
      default: "5"
    },
    {
      key: "activeStyle",
      name: "activeStyle",
      description: "현재 페이지 버튼의 스타일",
      type: "object",
      default: "{ colorType: 'primary', shadow: 'sm', ...ButtonProps }"
    },
    {
      key: "defaultStyle",
      name: "defaultStyle",
      description: "기본 페이지 버튼의 스타일",
      type: "object",
      default: "{ colorType: 'default', shadow: 'sm', ...ButtonProps }"
    },
    {
      key: "style",
      name: "style",
      description: "컨테이너 스타일",
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
