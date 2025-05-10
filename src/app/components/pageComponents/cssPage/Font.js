import { useMobile } from "../../../context/mobileContext";
import { Card, Table, Typography } from "sud-ui";
import {
  FONT_DATA,
  fontColumns,
  fontTableData,
  mobileFontTableData,
  getFontName
} from "./data/fontData";

export default function Font() {
  const { isMobile } = useMobile();

  return (
    <div className="flex flex-col gap-40 pd-20 w-100">
      <div className="flex flex-col gap-20">
        <Typography as="h1" gmarket="Medium" size="3xl">
          폰트 (Font)
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
          Soon UI Design에서는{" "}
          <b>"Pretendard", "Gmarket Sans", "SUITE", "IntelOneMono-Medium"</b>
          4가지 폰트를 사용합니다.
          <br />
          Typography 컴포넌트에서 폰트를 선택할 수 있습니다.
        </Typography>

        {isMobile ? (
          <div className="flex flex-col gap-20">
            {FONT_DATA.map(({ font }) => (
              <Table
                key={font}
                columns={[
                  {
                    key: "weight",
                    title: fontColumns.find((col) => col.key === font).title,
                    dataIndex: "weight"
                  }
                ]}
                dataSource={mobileFontTableData[font]}
              />
            ))}
          </div>
        ) : (
          <Table columns={fontColumns} dataSource={fontTableData} />
        )}

        <Typography
          as="span"
          pretendard="R"
          size="base"
          style={{
            whiteSpace: "pre-wrap",
            wordBreak: "keep-all"
          }}
        >
          Typography 컴포넌트의 속성 중 code 값을 true로 설정하면
          IntelOneMono-Medium폰트가 사용됩니다.
          <br />
          그외에 폰트는 폰트 이름을 속성으로 사용하고 그 값을 이용하여 weight를
          설정할 수 있습니다.
        </Typography>

        <div className="flex flex-col gap-10">
          <Card width="100%">
            {FONT_DATA.map(({ font, weights }) => (
              <div key={font} className="flex flex-col gap-5">
                {weights.map((weight) => (
                  <Typography
                    key={`${font}-${weight}`}
                    size="xl"
                    {...{ [font]: weight }}
                  >
                    {`${getFontName(font)}-${weight}`}
                  </Typography>
                ))}
              </div>
            ))}
            <Typography size="xl" code>
              IntelOneMono-Medium
            </Typography>
            <Card colorType="sub" border={false} shadow="none" width="100%">
              <Typography
                as="code"
                code
                size="base"
                style={{
                  display: "block",
                  whiteSpace: "pre",
                  overflowX: "auto",
                  padding: "16px"
                }}
              >
                {FONT_DATA.map(({ font, weights }) =>
                  weights
                    .map(
                      (weight) =>
                        `<Typography ${font}="${weight}">${getFontName(
                          font
                        )}-${weight}</Typography>`
                    )
                    .join("\n")
                ).join("\n")}
                <Typography code>IntelOneMono-Medium</Typography>
              </Typography>
            </Card>
          </Card>
        </div>
      </div>
    </div>
  );
}
