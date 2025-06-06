import { useState } from "react";
import {
  CodeBlock,
  ExampleBlock,
  InstallCommand,
  MainTitle,
  SubTitle,
  SubTitleAndDescription
} from "../_lib/components/common/render";
import { CircleOutline, ErrorCircleOutline } from "sud-icons";
import { Table, Typography } from "sud-ui";

export default function Frame({ component, isMobile, grid, lang }) {
  const [selected, setSelected] = useState("javascript");

  const mobileColumn = (prop) => {
    return [
      {
        title: lang === "ko" ? prop.name : prop.name,
        dataIndex: "name",
        key: "name",
        col: 2
      },
      {
        title: lang === "ko" ? "내용" : "Content",
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
        name: lang === "ko" ? "설명" : "Description",
        value: prop.description
      },
      {
        key: "type",
        name: lang === "ko" ? "타입" : "Type",
        value: prop.type
      },
      {
        key: "default",
        name: lang === "ko" ? "기본값" : "Default",
        value: prop.default
      }
    ];
  };

  const tableColumn = [
    {
      title: lang === "ko" ? "속성 이름" : "Property Name",
      dataIndex: "name",
      key: "name",
      col: 3,
      align: "center"
    },
    {
      title: lang === "ko" ? "설명" : "Description",
      dataIndex: "description",
      key: "description",
      col: 5,
      align: "center"
    },
    {
      title: lang === "ko" ? "타입" : "Type",
      dataIndex: "type",
      key: "type",
      col: 5,
      align: "center"
    },
    {
      title: lang === "ko" ? "기본값" : "Default",
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
          title={lang === "ko" ? "사용 시 주의사항" : "Cautions"}
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
          title={lang === "ko" ? "사용할 때" : "When to use"}
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
      {component.preset && (
        <div className="flex flex-col gap-10">
          <SubTitle title={lang === "ko" ? "사전 설정" : "Preset"} />
          <Typography
            as="div"
            pretendard="R"
            size="base"
            style={{
              whiteSpace: "pre-wrap",
              wordBreak: "keep-all"
            }}
          >
            {component.preset.description}
          </Typography>
          <CodeBlock code={component.preset.command} />
        </div>
      )}

      {/* 예제 */}
      <SubTitleAndDescription
        title={lang === "ko" ? "사용예제" : "Examples"}
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
        title={lang === "ko" ? "사용 방법" : "How to use"}
        description={
          <>
            {lang === "ko"
              ? "컴포넌트의 props를 설정하는 방법입니다."
              : "How to set the component's props."}
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
      {/* 그룹 사용방법 */}
      {component.group && component.groupTableData && (
        <SubTitleAndDescription
          title={null}
          description={component.group}
          etc={
            isMobile ? (
              <div className="flex flex-col gap-20">
                {component.groupTableData.map((prop) => (
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
                dataSource={component.groupTableData}
              />
            )
          }
        />
      )}
    </div>
  );
}
