import { useState } from "react";
import {
  ExampleBlock,
  InstallCommand,
  MainTitle,
  SubTitleAndDescription
} from "../_lib/components/common/render";
import { CircleOutline, ErrorCircleOutline } from "sud-icons";
import { Avatar, Card, Table, Typography } from "sud-ui";

export default function Frame({ component, isMobile, grid }) {
  const [selected, setSelected] = useState("javascript");

  const mobileColumn = (prop) => {
    return [
      {
        title: prop.name,
        dataIndex: "name",
        key: "name",
        col: 2
      },
      {
        title: "내용",
        dataIndex: "value",
        key: "value",
        col: 3
      }
    ];
  };

  const mobileDataSource = (prop) => {
    return [
      {
        key: "description",
        name: "설명",
        value: prop.description
      },
      {
        key: "type",
        name: "타입",
        value: prop.type
      },
      {
        key: "default",
        name: "기본값",
        value: prop.default
      }
    ];
  };

  const tableColumn = [
    {
      title: "속성 이름",
      dataIndex: "name",
      key: "name",
      col: 3,
      align: "center"
    },
    {
      title: "설명",
      dataIndex: "description",
      key: "description",
      col: 5,
      align: "center"
    },
    {
      title: "타입",
      dataIndex: "type",
      key: "type",
      col: 5,
      align: "center"
    },
    {
      title: "기본값",
      dataIndex: "default",
      key: "default",
      col: 2,
      align: "center"
    }
  ];

  return (
    <div className="flex flex-col gap-40 pd-20 w-100">
      {/*  헤더 */}
      <MainTitle
        title={component.name}
        description={component.description}
        etc={<InstallCommand command={component.IMPORT_COMMAND} />}
      />

      {/* 사용주의 사항 */}
      {component.cautions && (
        <SubTitleAndDescription
          title={"사용 시 주의사항"}
          etc={component.cautions.map((caution, index) => (
            <div key={index} className="flex flex-row gap-5 item-cen">
              <Typography
                as="div"
                color="red-4"
                className="flex jus-cen item-cen"
              >
                <ErrorCircleOutline size="16" />
              </Typography>
              <Typography
                as="p"
                pretendard="R"
                style={{
                  whiteSpace: "pre-wrap",
                  wordBreak: "keep-all"
                }}
              >
                {caution}
              </Typography>
            </div>
          ))}
        />
      )}

      {/* 언제 사용하는지 */}
      {component.whenToUse && (
        <SubTitleAndDescription
          title={"사용할 때"}
          etc={component.whenToUse.map((whenToUse, index) => (
            <div key={index} className="flex flex-row gap-5 item-cen">
              <Typography
                as="div"
                color="blue-4"
                className="flex jus-cen item-cen"
              >
                <CircleOutline size="16" />
              </Typography>
              <Typography
                as="p"
                pretendard="R"
                style={{
                  whiteSpace: "pre-wrap",
                  wordBreak: "keep-all"
                }}
              >
                {whenToUse}
              </Typography>
            </div>
          ))}
        />
      )}

      {/* 예제 */}
      <SubTitleAndDescription
        title={"사용예제"}
        etc={component.examples.map((example, index) => (
          <ExampleBlock
            key={index}
            title={example.title}
            render={example.render}
            description={example.description}
            code={selected === "javascript" ? example.jscode : example.tscode}
            select={selected}
            setSelected={setSelected}
          />
        ))}
        grid={grid}
        isMobile={isMobile}
      />

      {/* 사용방법 */}
      <SubTitleAndDescription
        title={"사용 방법"}
        description={
          <>
            컴포넌트의 props를 설정하는 방법입니다.
            <br />
            *은 필수 속성입니다.
          </>
        }
        etc={
          isMobile ? (
            <div className="flex flex-col gap-20">
              {component.howToUseTableData.map((prop) => (
                <Table
                  key={prop.key}
                  columns={mobileColumn(prop)}
                  dataSource={mobileDataSource(prop)}
                />
              ))}
            </div>
          ) : (
            <Table
              columns={tableColumn}
              dataSource={component.howToUseTableData}
            />
          )
        }
      />
    </div>
  );
}
