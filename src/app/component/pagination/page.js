"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Pagination, Dropdown, Tag, Typography } from "sud-ui";
import { AngleDown, HomeOutline, TriangleRight } from "sud-icons";
import React from "react";

export default function PaginationPage() {
  const { isMobile } = useMobile();
  const [current, setCurrent] = React.useState(1);

  const name = "Pagination";
  const description = (
    <>긴 목록을 페이지네이션 형태로 나누어 보여주는 컴포넌트입니다.</>
  );

  const IMPORT_COMMAND = "import { Pagination } from 'sud-ui';";

  const whenToUse = [
    "긴 목록을 페이지네이션 형태로 나누어 보여주고 싶을 때.",
    "페이지를 나누어 데이터를 탐색할 때."
  ];

  const examples = [
    {
      title: "기본 사용",
      description: "기본적인 사용 방법입니다.",
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

const BasicPagination = () => {
  return <Pagination total={50} />;
};

export default BasicPagination;`
    },
    {
      title: "위치 정렬",
      description:
        "페이지네이션의 위치를 왼쪽, 가운데, 오른쪽으로 정렬할 수 있습니다.",
      render: (
        <div className="flex flex-col gap-40 w-100">
          <div className="flex flex-col gap-20 w-100">
            <Typography pretendard="SB">왼쪽 정렬 (기본값)</Typography>
            <Pagination total={50} align="left" />
          </div>
          <div className="flex flex-col gap-20 w-100">
            <Typography pretendard="SB">가운데 정렬</Typography>
            <Pagination total={50} align="center" />
          </div>
          <div className="flex flex-col gap-20 w-100">
            <Typography pretendard="SB">오른쪽 정렬</Typography>
            <Pagination total={50} align="right" />
          </div>
        </div>
      ),
      jscode: `import React from 'react';
import { Pagination, Typography } from 'sud-ui';

const AlignPagination = () => {
  return (
    <div className="flex flex-col gap-40 w-100">
      <div className="flex flex-col gap-20 w-100">
        <Typography pretendard="SB">왼쪽 정렬 (기본값)</Typography>
        <Pagination total={50} align="left" />
      </div>
      <div className="flex flex-col gap-20 w-100">
        <Typography pretendard="SB">가운데 정렬</Typography>
        <Pagination total={50} align="center" />
      </div>
      <div className="flex flex-col gap-20 w-100">
        <Typography pretendard="SB">오른쪽 정렬</Typography>
        <Pagination total={50} align="right" />
      </div>
    </div>
  );
};

export default AlignPagination;`,
      tscode: `import React from 'react';
import { Pagination, Typography } from 'sud-ui';

const AlignPagination = () => {
  return (
    <div className="flex flex-col gap-40 w-100">
      <div className="flex flex-col gap-20 w-100">
        <Typography pretendard="SB">왼쪽 정렬 (기본값)</Typography>
        <Pagination total={50} align="left" />
      </div>
      <div className="flex flex-col gap-20 w-100">
        <Typography pretendard="SB">가운데 정렬</Typography>
        <Pagination total={50} align="center" />
      </div>
      <div className="flex flex-col gap-20 w-100">
        <Typography pretendard="SB">오른쪽 정렬</Typography>
        <Pagination total={50} align="right" />
      </div>
    </div>
  );
};

export default AlignPagination;`
    },
    {
      title: "한 페이지에 표시할 아이템 수",
      description:
        "pageSize prop을 사용하여 한 페이지에 표시할 아이템 수를 설정할 수 있습니다.",
      render: (
        <div className="flex flex-col gap-40 w-100">
          <div className="flex flex-col gap-20 w-100">
            <Typography pretendard="SB">기본값 (10개)</Typography>
            <Pagination total={50} />
          </div>
          <div className="flex flex-col gap-20 w-100">
            <Typography pretendard="SB">5개씩 표시</Typography>
            <Pagination total={50} pageSize={5} />
          </div>
        </div>
      ),
      jscode: `import React from 'react';
import { Pagination, Typography } from 'sud-ui';

const PageSizePagination = () => {
  return (
    <div className="flex flex-col gap-40 w-100">
      <div className="flex flex-col gap-20 w-100">
        <Typography pretendard="SB">기본값 (10개)</Typography>
        <Pagination total={50} />
      </div>
      <div className="flex flex-col gap-20 w-100">
        <Typography pretendard="SB">5개씩 표시</Typography>
        <Pagination total={50} pageSize={5} />
      </div>
    </div>
  );
};

export default PageSizePagination;`,
      tscode: `import React from 'react';
import { Pagination, Typography } from 'sud-ui';

const PageSizePagination = () => {
  return (
    <div className="flex flex-col gap-40 w-100">
      <div className="flex flex-col gap-20 w-100">
        <Typography pretendard="SB">기본값 (10개)</Typography>
        <Pagination total={50} />
      </div>
      <div className="flex flex-col gap-20 w-100">
        <Typography pretendard="SB">5개씩 표시</Typography>
        <Pagination total={50} pageSize={5} />
      </div>
    </div>
  );
};

export default PageSizePagination;`
    },
    {
      title: "이전/다음 버튼 표시",
      description:
        "showPrevNext prop을 사용하여 이전/다음 페이지 버튼의 표시 여부를 설정할 수 있습니다.",
      render: (
        <div className="flex flex-col gap-40 w-100">
          <div className="flex flex-col gap-20 w-100">
            <Typography pretendard="SB">
              이전/다음 버튼 표시 (기본값)
            </Typography>
            <Pagination total={50} showPrevNext={true} />
          </div>
          <div className="flex flex-col gap-20 w-100">
            <Typography pretendard="SB">이전/다음 버튼 숨김</Typography>
            <Pagination total={50} showPrevNext={false} />
          </div>
        </div>
      ),
      jscode: `import React from 'react';
import { Pagination, Typography } from 'sud-ui';

const PrevNextPagination = () => {
  return (
    <div className="flex flex-col gap-40 w-100">
      <div className="flex flex-col gap-20 w-100">
        <Typography pretendard="SB">이전/다음 버튼 표시 (기본값)</Typography>
        <Pagination total={50} showPrevNext={true} />
      </div>
      <div className="flex flex-col gap-20 w-100">
        <Typography pretendard="SB">이전/다음 버튼 숨김</Typography>
        <Pagination total={50} showPrevNext={false} />
      </div>
    </div>
  );
};

export default PrevNextPagination;`,
      tscode: `import React from 'react';
import { Pagination, Typography } from 'sud-ui';

const PrevNextPagination = () => {
  return (
    <div className="flex flex-col gap-40 w-100">
      <div className="flex flex-col gap-20 w-100">
        <Typography pretendard="SB">이전/다음 버튼 표시 (기본값)</Typography>
        <Pagination total={50} showPrevNext={true} />
      </div>
      <div className="flex flex-col gap-20 w-100">
        <Typography pretendard="SB">이전/다음 버튼 숨김</Typography>
        <Pagination total={50} showPrevNext={false} />
      </div>
    </div>
  );
};

export default PrevNextPagination;`
    },
    {
      title: "첫 페이지/마지막 페이지 버튼 표시",
      description:
        "showFirstLast prop을 사용하여 첫 페이지/마지막 페이지 버튼의 표시 여부를 설정할 수 있습니다.",
      render: (
        <div className="flex flex-col gap-40 w-100">
          <div className="flex flex-col gap-20 w-100">
            <Typography pretendard="SB">
              첫/마지막 버튼 표시 (기본값)
            </Typography>
            <Pagination total={50} showFirstLast={true} />
          </div>
          <div className="flex flex-col gap-20 w-100">
            <Typography pretendard="SB">첫/마지막 버튼 숨김</Typography>
            <Pagination total={50} showFirstLast={false} />
          </div>
        </div>
      ),
      jscode: `import React from 'react';
import { Pagination, Typography } from 'sud-ui';

const FirstLastPagination = () => {
  return (
    <div className="flex flex-col gap-40 w-100">
      <div className="flex flex-col gap-20 w-100">
        <Typography pretendard="SB">첫/마지막 버튼 표시 (기본값)</Typography>
        <Pagination total={50} showFirstLast={true} />
      </div>
      <div className="flex flex-col gap-20 w-100">
        <Typography pretendard="SB">첫/마지막 버튼 숨김</Typography>
        <Pagination total={50} showFirstLast={false} />
      </div>
    </div>
  );
};

export default FirstLastPagination;`,
      tscode: `import React from 'react';
import { Pagination, Typography } from 'sud-ui';

const FirstLastPagination = () => {
  return (
    <div className="flex flex-col gap-40 w-100">
      <div className="flex flex-col gap-20 w-100">
        <Typography pretendard="SB">첫/마지막 버튼 표시 (기본값)</Typography>
        <Pagination total={50} showFirstLast={true} />
      </div>
      <div className="flex flex-col gap-20 w-100">
        <Typography pretendard="SB">첫/마지막 버튼 숨김</Typography>
        <Pagination total={50} showFirstLast={false} />
      </div>
    </div>
  );
};

export default FirstLastPagination;`
    },
    {
      title: "표시할 버튼 수",
      description:
        "maxVisibleButtons prop을 사용하여 한 번에 표시할 페이지 버튼의 수를 설정할 수 있습니다.",
      render: (
        <div className="flex flex-col gap-40 w-100">
          <div className="flex flex-col gap-20 w-100">
            <Typography pretendard="SB">기본값 (5개)</Typography>
            <Pagination total={100} maxVisibleButtons={5} />
          </div>
          <div className="flex flex-col gap-20 w-100">
            <Typography pretendard="SB">3개 표시</Typography>
            <Pagination total={100} maxVisibleButtons={3} />
          </div>
          <div className="flex flex-col gap-20 w-100">
            <Typography pretendard="SB">7개 표시</Typography>
            <Pagination total={100} maxVisibleButtons={7} />
          </div>
        </div>
      ),
      jscode: `import React from 'react';
import { Pagination, Typography } from 'sud-ui';

const MaxVisiblePagination = () => {
  return (
    <div className="flex flex-col gap-40 w-100">
      <div className="flex flex-col gap-20 w-100">
        <Typography pretendard="SB">기본값 (5개)</Typography>
        <Pagination total={100} maxVisibleButtons={5} />
      </div>
      <div className="flex flex-col gap-20 w-100">
        <Typography pretendard="SB">3개 표시</Typography>
        <Pagination total={100} maxVisibleButtons={3} />
      </div>
      <div className="flex flex-col gap-20 w-100">
        <Typography pretendard="SB">7개 표시</Typography>
        <Pagination total={100} maxVisibleButtons={7} />
      </div>
    </div>
  );
};

export default MaxVisiblePagination;`,
      tscode: `import React from 'react';
import { Pagination, Typography } from 'sud-ui';

const MaxVisiblePagination = () => {
  return (
    <div className="flex flex-col gap-40 w-100">
      <div className="flex flex-col gap-20 w-100">
        <Typography pretendard="SB">기본값 (5개)</Typography>
        <Pagination total={100} maxVisibleButtons={5} />
      </div>
      <div className="flex flex-col gap-20 w-100">
        <Typography pretendard="SB">3개 표시</Typography>
        <Pagination total={100} maxVisibleButtons={3} />
      </div>
      <div className="flex flex-col gap-20 w-100">
        <Typography pretendard="SB">7개 표시</Typography>
        <Pagination total={100} maxVisibleButtons={7} />
      </div>
    </div>
  );
};

export default MaxVisiblePagination;`
    },
    {
      title: "버튼 커스텀",
      description:
        "activeStyle, defaultStyle prop을 사용하여 버튼의 스타일을 커스터마이징할 수 있습니다.",
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

export default CustomStylePagination;`
    }
  ];

  const howToUseTableData = [
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
