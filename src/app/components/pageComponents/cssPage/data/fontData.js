import { Link } from "sud-icons";
import { Typography } from "sud-ui";

export const FONT_DATA = [
  {
    font: "pretendard",
    weights: ["T", "EL", "L", "R", "M", "SB", "B", "Black"]
  },
  { font: "suite", weights: ["L", "R", "M", "SM", "B", "H"] },
  { font: "gmarket", weights: ["Light", "Medium", "Bold"] }
];

export const FONT_LINKS = {
  pretendard: "https://cactus.tistory.com/306",
  gmarket: "https://corp.gmarket.com/fonts/",
  suite: "https://sun.fo/suite/"
};

export const getFontName = (font) => {
  switch (font) {
    case "pretendard":
      return "Pretendard";
    case "suite":
      return "SUITE";
    case "gmarket":
      return "Gmarket Sans";
    default:
      return "";
  }
};

const createFontColumn = (font) => ({
  key: font,
  title: (
    <div className="flex flex-row gap-5 item-cen">
      <Typography className="flex item-center gap-5">
        {getFontName(font)}
      </Typography>
      <Typography color="indigo-5">
        <a href={FONT_LINKS[font]} target="_blank">
          <Link size={12} />
        </a>
      </Typography>
    </div>
  ),
  dataIndex: font
});

export const fontColumns = [
  createFontColumn("pretendard"),
  createFontColumn("gmarket"),
  createFontColumn("suite")
];

export const fontTableData = [
  {
    key: 1,
    pretendard: "T < EL < L < R < M < SB < B < Black",
    gmarket: "Light < Medium < Bold",
    suite: "L < R < M < SM < B < EB < H"
  }
];

export const mobileFontTableData = {
  pretendard: [{ key: 1, weight: "T < EL < L < R < M < SB < B < Black" }],
  gmarket: [{ key: 1, weight: "Light < Medium < Bold" }],
  suite: [{ key: 1, weight: "L < R < M < SM < B < EB < H" }]
};
