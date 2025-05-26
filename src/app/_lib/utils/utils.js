import { toast } from "sud-ui";

/**
 * 설치 명령어를 클립보드에 복사합니다.
 * @param {string} command - 복사할 설치 명령어
 */
export const handleInstallCopy = (command, lang) => {
  navigator.clipboard.writeText(command);
  toast.success(lang === "ko" ? "복사되었습니다." : "Copied.");
};

export const handleSearch = (e, setSearch) => {
  setSearch(e.target.value);
};

export const handleSegmentChange = (value, setSelected) => {
  setSelected(value);
};
