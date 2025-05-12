"use client";

import { useState } from "react";
import { useMobile } from "../../_lib/context/mobileContext";
import { Card, Typography, Input, Tag, Image } from "sud-ui";
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
export default function ComponentOverview() {
  const { isMobile } = useMobile();
  const router = useRouter();
  const INSTALL_COMMAND = "npm install sud-ui";
  const [search, setSearch] = useState("");
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

  return (
    <div className="flex flex-col gap-40 pd-20 w-100">
      <MainTitle
        title={"Component Overview"}
        description={
          <>
            Soon UI Design에서는 웹 애플리케이션을 쉽고 빠르게 개발할 수 있도록
            다양한 UI 컴포넌트를 제공합니다.
          </>
        }
      />

      <SubTitleAndDescription
        title={"사용하기전에"}
        description={
          <>
            Soon UI Design 컴포넌트를 사용하려면 <Tag>sud-ui</Tag> 패키지를
            설치해야 합니다.
          </>
        }
        etc={
          <InstallCommand
            command={INSTALL_COMMAND}
            onClick={() => handleInstallCopy(INSTALL_COMMAND)}
          />
        }
      />
      <SubTitleAndDescription
        title={"Component 종류"}
        etc={
          <div className="flex flex-col gap-20">
            <Input
              size="sm"
              placeholder="컴포넌트 이름을 검색하세요."
              afterIcon={<Search size={20} />}
              style={{ flex: 1 }}
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
                        className="hover-bounce-big"
                        style={{ width: "100%" }}
                        title={
                          <Typography as="span" pretendard="SB" size="sm">
                            {child.name}
                          </Typography>
                        }
                        divider
                        onClick={() => handleCardClick(child.link)}
                      >
                        <div className="flex flex-col juc-cen item-cen pd-t-10 pd-b-20">
                          <Image
                            src={child.img}
                            style={{
                              height: "100%",
                              filter: isDarkMode ? "invert(1)" : "none"
                            }}
                            preview={false}
                            mask={null}
                          />
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
