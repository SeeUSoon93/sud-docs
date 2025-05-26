"use client";

import { Tag } from "sud-ui";
import { useMobile } from "../../_lib/context/mobileContext";
import { useLang } from "../../_lib/context/langContext";
import {
  InstallCommand,
  MainTitle,
  SubTitleAndDescription
} from "../../_lib/components/common/render";
import { handleInstallCopy } from "../../_lib/utils/utils";

export default function Start() {
  const { isMobile } = useMobile();
  const { lang } = useLang();
  const INSTALL_COMMAND = "npm install sud-ui";

  return (
    <div className="flex flex-col gap-40 pd-20 w-100">
      <MainTitle
        title={lang === "ko" ? " 시작하기" : "Start"}
        description={
          lang === "ko"
            ? "Soon UI Design 시작하기 페이지입니다."
            : "Start page for Soon UI Design."
        }
      />
      <SubTitleAndDescription
        title={lang === "ko" ? "사용하기전에" : "Before using"}
        description={
          <>
            {lang === "ko" ? (
              <>
                Soon UI Design UI라이브러리를 사용하려면
                <Tag style={{ display: "inline-block", margin: "0 4px" }}>
                  sud-ui
                </Tag>
                패키지를 설치해야 합니다.
              </>
            ) : (
              <>
                To use the Soon UI Design UI library, you need to install the{" "}
                <Tag>sud-ui</Tag> package.
              </>
            )}
          </>
        }
        etc={
          <InstallCommand
            command={INSTALL_COMMAND}
            onClick={() => handleInstallCopy(INSTALL_COMMAND, lang)}
          />
        }
      />
    </div>
  );
}
