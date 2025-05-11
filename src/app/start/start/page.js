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

export default function Start() {
  const { isMobile } = useMobile();
  const INSTALL_COMMAND = "npm install sud-ui";

  return (
    <div className="flex flex-col gap-40 pd-20 w-100">
      <MainTitle
        title={" 시작하기"}
        description={"Soon UI Design 시작하기 페이지입니다."}
      />
      <SubTitleAndDescription
        title={"사용하기전에"}
        description={
          <>
            Soon UI Design UI라이브러리를 사용하려면
            <Tag style={{ display: "inline-block", margin: "0 4px" }}>
              sud-ui
            </Tag>
            패키지를 설치해야 합니다.
          </>
        }
        etc={
          <InstallCommand
            command={INSTALL_COMMAND}
            onClick={() => handleInstallCopy(INSTALL_COMMAND)}
          />
        }
      />
    </div>
  );
}
