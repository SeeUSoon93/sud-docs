import { useState } from "react";
import { Search } from "sud-icons";
import * as Icons from "sud-icons";
import { Button, Card, Input, Segmented, toast, Typography, Tag } from "sud-ui";
import { useMobile } from "../../../context/mobileContext";

export default function Icon() {
  const { isMobile } = useMobile();
  const INSTALL_COMMAND = "npm install sud-icons";
  const segments = [
    { label: "All", value: "All" },
    { label: "Filled", value: "Filled" },
    { label: "Outlined", value: "Outlined" },
    { label: "Logo", value: "Logo" }
  ];

  const [selected, setSelected] = useState("All");
  const [search, setSearch] = useState("");

  const iconList = Object.entries(Icons)
    .filter(([name]) => name !== "Button" && name !== "default")
    .map(([name, Component]) => ({ name, Component }));

  const filteredIcons = iconList.filter(({ name }) => {
    const searchMatch = name.toLowerCase().includes(search.toLowerCase());
    if (!searchMatch) return false;

    const filters = {
      Filled: name.includes("Fill"),
      Logo: name.includes("Logo") && !name.includes("Logout"),
      Outlined:
        (!name.includes("Fill") && !name.includes("Logo")) ||
        name.includes("Logout"),
      All: true
    };

    return filters[selected];
  });

  const handleCopy = (text, message) => {
    navigator.clipboard.writeText(text);
    toast.success(message);
  };

  const handleSegmentChange = (value) => {
    setSelected(value);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleInstallCopy = () => {
    handleCopy(INSTALL_COMMAND, "복사 완료");
  };

  const handleIconCopy = (name) => {
    handleCopy(`import {${name}} from "sud-icons";`, `${name} 복사 완료`);
  };

  return (
    <div className="flex flex-col gap-40 pd-20 w-100">
      <div className="flex flex-col gap-10">
        <Typography as="h1" gmarket="Medium" size="3xl">
          아이콘(Icon)
        </Typography>
        <Typography as="p" pretendard="R" size="base">
          Soon UI Design 아이콘 팩입니다.
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
          Soon UI Design 아이콘 팩을 사용하려면{" "}
          <Tag style={{ display: "inline-block" }}>sud-icons</Tag> 패키지를
          설치해야 합니다.
        </Typography>

        <Card
          colorType="sub"
          border={false}
          shadow="none"
          width={"100%"}
          className="flex flex-row cursor-pointer"
        >
          <div className="flex jus-bet item-cen" onClick={handleInstallCopy}>
            <Typography as="code" code size="lg">
              {INSTALL_COMMAND}
            </Typography>
          </div>
        </Card>
      </div>

      <div className="flex flex-col gap-20 ">
        <Typography as="h2" gmarket="Medium" size="xl">
          아이콘 목록
        </Typography>
        <div className="flex gap-10 flex-col">
          <Segmented
            value={selected}
            onChange={handleSegmentChange}
            options={segments}
          />
          <Input
            size="sm"
            placeholder="아이콘 이름을 검색하세요."
            afterIcon={<Search size={20} />}
            style={{ flex: 1 }}
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        <div
          className="grid gap-30 item-cen jus-cen"
          style={{
            gridTemplateColumns: isMobile ? "repeat(3, 1fr)" : "repeat(5, 1fr)"
          }}
        >
          {filteredIcons.map(({ name, Component }) => (
            <div key={name} className="flex flex-col item-cen gap-10">
              <Button
                className="pd-25"
                icon={<Component size="30" />}
                colorType="default"
                onClick={() => handleIconCopy(name)}
                style={{ padding: 25 }}
              />
              <Typography as="span" size={`${isMobile ? "sm" : "base"}`}>
                {name}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
