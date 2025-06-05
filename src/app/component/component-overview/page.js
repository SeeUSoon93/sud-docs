"use client";

import { useState } from "react";
import { useMobile } from "../../_lib/context/mobileContext";
import { Card, Typography, Input, Tag, Image, Table } from "sud-ui";
import { Search } from "sud-icons";
import { overViewData } from "./overViewData";
import { useDarkMode } from "../../_lib/context/darkModeContext";
import {
  InstallCommand,
  MainTitle,
  SubTitleAndDescription
} from "../../_lib/components/common/render";
import { handleInstallCopy, handleSearch } from "../../_lib/utils/utils";
import { useRouter } from "next/navigation";
import { useLang } from "../../_lib/context/langContext";
export default function ComponentOverview() {
  const { isMobile } = useMobile();
  const router = useRouter();
  const INSTALL_COMMAND = "npm install sud-ui";
  const [search, setSearch] = useState("");
  const { lang } = useLang();
  const { isDarkMode } = useDarkMode();

  const filteredData = overViewData
    .map((category) => ({
      ...category,
      children: category.children.filter((child) =>
        child.name.toLowerCase().includes(search.toLowerCase())
      )
    }))
    .filter((category) => category.children.length > 0);

  const handleCardClick = (link) => {
    router.push(link);
  };
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

  const howToUseTableData = [
    {
      name: "Button",
      description: "버튼 컴포넌트",
      type: "Button",
      default: "Button"
    }
  ];

  return (
    <div className="flex flex-col gap-40 pd-20 w-100">
      <MainTitle
        title={lang === "ko" ? "컴포넌트 개요" : "Component Overview"}
        description={
          <>
            {lang === "ko" ? (
              <>
                Soon UI Design에서는 웹 애플리케이션을 쉽고 빠르게 개발할 수
                있도록 다양한 UI 컴포넌트를 제공합니다.
              </>
            ) : (
              <>
                Soon UI Design provides various UI components to help you
                develop web applications easily and quickly.
              </>
            )}
          </>
        }
      />

      <SubTitleAndDescription
        title={lang === "ko" ? "사용하기전에" : "Before Using"}
        description={
          <>
            {lang === "ko" ? (
              <>
                Soon UI Design 컴포넌트를 사용하려면 <Tag>sud-ui</Tag> 패키지를
                설치해야 합니다.
              </>
            ) : (
              <>
                To use Soon UI Design components, you need to install the{" "}
                <Tag>sud-ui</Tag> package.
              </>
            )}
          </>
        }
        etc={
          <InstallCommand
            command={INSTALL_COMMAND}
            onClick={() => handleInstallCopy(INSTALL_COMMAND)}
          />
        }
      />
      {/* <SubTitleAndDescription
        title={lang === "ko" ? "기본 Props" : "Basic Props"}
        description={
          <>
            {lang === "ko"
              ? "자주 사용되는 props를 정리한 표입니다. 컴포넌트별로 값이 조금씩 상이할 수 있습니다."
              : "A table of frequently used props. The values may slightly differ for each component."}
          </>
        }
        etc={
          isMobile ? (
            <div className="flex flex-col gap-20">
              {howToUseTableData.map((prop) => (
                <Table
                  key={prop.key}
                  columns={mobileColumn(prop)}
                  dataSource={mobileDataSource(prop)}
                />
              ))}
            </div>
          ) : (
            <Table columns={tableColumn} dataSource={howToUseTableData} />
          )
        }
      /> */}

      <SubTitleAndDescription
        title={lang === "ko" ? "Component 종류" : "Component Types"}
        etc={
          <div className="flex flex-col gap-20">
            <Input
              size="sm"
              placeholder={
                lang === "ko"
                  ? "컴포넌트 이름을 검색하세요."
                  : "Search component name"
              }
              afterIcon={<Search size={20} />}
              style={{ width: "100%" }}
              value={search}
              onChange={(e) => handleSearch(e, setSearch)}
            />
            <div className="flex flex-col gap-40">
              {filteredData.map((item) => (
                <div key={item.category} className="flex flex-col gap-10">
                  <Typography as="p" gmarket="Medium" size="base">
                    {item.category}
                  </Typography>
                  <div
                    className={`grid ${isMobile ? "col-1" : "col-3"} gap-20`}
                  >
                    {item.children.map((child) => (
                      <Card
                        key={child.name}
                        className="hover-shadow-6 cursor-pointer"
                        style={{ width: "100%" }}
                        title={
                          <Typography as="span" pretendard="SB" size="sm">
                            {child.name}
                          </Typography>
                        }
                        divider
                        onClick={() => handleCardClick(child.link)}
                        background={"mint-1"}
                      >
                        <div
                          className={`flex flex-col jus-cen pd-20 h-px-250 w-100  ${
                            !child.item && "item-cen"
                          }`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          {child.item ? (
                            child.item
                          ) : (
                            <Image
                              src={child.img}
                              preview={false}
                              mask={null}
                            />
                          )}
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
      />
    </div>
  );
}
