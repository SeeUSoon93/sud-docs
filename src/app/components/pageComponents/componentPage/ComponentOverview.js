import { useState } from "react";
import { useMobile } from "../../../context/mobileContext";
import { Card, Typography, toast, Button, Input, Tag, Image } from "sud-ui";
import { Search } from "sud-icons";
import { overViewData } from "./data/overViewData";
import { useDarkMode } from "../../../context/darkModeContext";

export default function ComponentOverview() {
  const { isMobile } = useMobile();
  const INSTALL_COMMAND = "npm install sud-ui";
  const [search, setSearch] = useState("");
  const { isDarkMode } = useDarkMode();

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleCopy = (text, message) => {
    navigator.clipboard.writeText(text);
    toast.success(message);
  };
  const handleInstallCopy = () => {
    handleCopy(INSTALL_COMMAND, "복사 완료");
  };

  const filteredData = overViewData
    .map((category) => ({
      ...category,
      children: category.children.filter((child) =>
        child.name.toLowerCase().includes(search.toLowerCase())
      )
    }))
    .filter((category) => category.children.length > 0);

  return (
    <div className="flex flex-col gap-40 pd-20 w-100">
      <div className="flex flex-col gap-20">
        <Typography as="h1" gmarket="Medium" size="3xl">
          Component Overview
        </Typography>
        <Typography
          as="span"
          pretendard="R"
          size="base"
          style={{
            whiteSpace: "pre-wrap",
            wordBreak: "keep-all"
          }}
        >
          Soon UI Design에서는 웹 애플리케이션을 쉽고 빠르게 개발할 수 있도록
          다양한 UI 컴포넌트를 제공합니다.
        </Typography>
      </div>

      <div className="flex flex-col gap-10">
        <Typography as="h2" gmarket="Medium" size="xl">
          사용하기전에
        </Typography>
        <Typography
          as="p"
          pretendard="R"
          size="base"
          style={{
            whiteSpace: "pre-wrap",
            wordBreak: "keep-all"
          }}
        >
          Soon UI Design 컴포넌트를 사용하려면{" "}
          <Tag style={{ display: "inline-block" }}>sud-ui</Tag> 패키지를
          설치해야 합니다.
        </Typography>
        <Card
          colorType="sub"
          border={false}
          shadow="none"
          width={"100%"}
          className="flex flex-row"
        >
          <div
            className="flex jus-bet item-cen cursor-pointer"
            onClick={handleInstallCopy}
          >
            <Typography as="code" code size="lg">
              {INSTALL_COMMAND}
            </Typography>
          </div>
        </Card>
      </div>
      <div className="flex flex-col gap-20">
        <Typography as="h2" gmarket="Medium" size="xl">
          Component 종류
        </Typography>
        <Input
          size="sm"
          placeholder="컴포넌트 이름을 검색하세요."
          afterIcon={<Search size={20} />}
          style={{ flex: 1 }}
          value={search}
          onChange={handleSearchChange}
        />
        <div className="flex flex-col gap-40">
          {filteredData.map((item) => (
            <div key={item.category} className="flex flex-col gap-10">
              <Typography as="p" gmarket="Medium" size="base">
                {item.category}
              </Typography>
              <div className={`grid ${isMobile ? "col-1" : "col-3"} gap-10`}>
                {item.children.map((child) => (
                  <a href={child.link} key={child.name}>
                    <Card
                      className="hover-shadow"
                      style={{ width: "100%" }}
                      title={
                        <Typography as="span" pretendard="SB" size="sm">
                          {child.name}
                        </Typography>
                      }
                      divider
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
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
