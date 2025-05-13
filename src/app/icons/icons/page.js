"use client";

import { useState } from "react";
import * as Icons from "sud-icons";
import { Button, Input, Segmented, Typography, Tag } from "sud-ui";
import { useMobile } from "../../_lib/context/mobileContext";
import {
  InstallCommand,
  MainTitle,
  SubTitleAndDescription
} from "../../_lib/components/common/render";
import {
  handleInstallCopy,
  handleSearch,
  handleSegmentChange
} from "../../_lib/utils/utils";

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

  return (
    <div className="flex flex-col gap-40 pd-20 w-100">
      <MainTitle
        title={"아이콘 (Icon)"}
        description={"Soon UI Design 아이콘 팩입니다."}
      />

      <SubTitleAndDescription
        title={"사용하기전에"}
        description={
          <>
            Soon UI Design 아이콘 팩을 사용하려면
            <Tag>sud-icons</Tag> 패키지를 설치해야 합니다.
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
        title={"아이콘 목록"}
        etc={
          <div className="flex flex-col gap-20">
            <div className="flex gap-10 flex-col">
              <Segmented
                value={selected}
                onChange={(value) => handleSegmentChange(value, setSelected)}
                options={segments}
              />
              <Input
                size="sm"
                placeholder="아이콘 이름을 검색하세요."
                afterIcon={<Icons.Search size={20} />}
                style={{ flex: 1 }}
                value={search}
                onChange={(e) => handleSearch(e, setSearch)}
              />
            </div>
            {/* 아이콘 목록 렌더링 */}
            <div
              className="grid gap-30 item-cen jus-cen"
              style={{
                gridTemplateColumns: isMobile
                  ? "repeat(3, 1fr)"
                  : "repeat(5, 1fr)"
              }}
            >
              {filteredIcons.map(({ name, Component }) => (
                <div key={name} className="flex flex-col item-cen gap-10">
                  <Button
                    className="pd-25"
                    icon={<Component size="30" />}
                    colorType="default"
                    onClick={() =>
                      handleInstallCopy(`import {${name}} from "sud-icons";`)
                    }
                    style={{ padding: 25 }}
                  />
                  <Typography as="span" size={`${isMobile ? "sm" : "base"}`}>
                    {name}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        }
      />
    </div>
  );
}
