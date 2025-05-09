import { useMobile } from "@/app/context/mobileContext";
import { Link } from "sud-icons";
import { Card, Table, Typography } from "sud-ui";

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
        <Table
          columns={[
            {
              key: "pretendard",
              title: (
                <Typography className="flex item-center gap-5">
                  Pretendard
                  <a
                    href="https://cactus.tistory.com/306"
                    target="_blank"
                    style={{ color: "blue" }}
                  >
                    <Link size={14} />
                  </a>
                </Typography>
              ),
              dataIndex: "pretendard"
            },
            {
              key: "gmarketSans",
              title: (
                <Typography className="flex item-center gap-5">
                  Gmarket Sans
                  <a
                    href="https://corp.gmarket.com/fonts/"
                    target="_blank"
                    style={{ color: "blue" }}
                  >
                    <Link size={14} />
                  </a>
                </Typography>
              ),
              dataIndex: "gmarketSans"
            },
            {
              key: "suite",
              title: (
                <Typography className="flex item-center gap-5">
                  SUITE
                  <a
                    href="https://sun.fo/suite/"
                    target="_blank"
                    style={{ color: "blue" }}
                  >
                    <Link size={14} />
                  </a>
                </Typography>
              ),
              dataIndex: "suite"
            }
          ]}
          dataSource={[
            {
              key: 1,
              pretendard: "T < EL < L < R < M < SB < B < Black",
              gmarketSans: "Light < Medium < Bold",
              suite: "L < R < M < SM < B < EB < H"
            }
          ]}
        />
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
            <Typography size="xl" pretendard="T">
              Pretendard-T
            </Typography>
            <Typography size="xl" pretendard="EL">
              Pretendard-EL
            </Typography>
            <Typography size="xl" pretendard="L">
              Pretendard-L
            </Typography>
            <Typography size="xl" pretendard="R">
              Pretendard-R
            </Typography>
            <Typography size="xl" pretendard="M">
              Pretendard-M
            </Typography>
            <Typography size="xl" pretendard="SB">
              Pretendard-SB
            </Typography>
            <Typography size="xl" pretendard="B">
              Pretendard-B
            </Typography>
            <Typography size="xl" pretendard="Black">
              Pretendard-Black
            </Typography>

            <Typography size="xl" suite="L">
              SUITE-L
            </Typography>
            <Typography size="xl" suite="R">
              SUITE-R
            </Typography>
            <Typography size="xl" suite="M">
              SUITE-M
            </Typography>
            <Typography size="xl" suite="SM">
              SUITE-SM
            </Typography>
            <Typography size="xl" suite="B">
              SUITE-B
            </Typography>
            <Typography size="xl" suite="H">
              SUITE-H
            </Typography>
            <Typography size="xl" gmarket="Light">
              Gmarket-Light
            </Typography>
            <Typography size="xl" gmarket="Medium">
              Gmarket-Medium
            </Typography>
            <Typography size="xl" gmarket="Bold">
              Gmarket-Bold
            </Typography>
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
                {`<Typography  pretendard="T">Pretendard-T</Typography>
<Typography pretendard="EL">Pretendard-EL</Typography>
<Typography pretendard="L">Pretendard-L</Typography>
<Typography pretendard="R">Pretendard-R</Typography>
<Typography pretendard="M">Pretendard-M</Typography>
<Typography pretendard="SB">Pretendard-SB</Typography>
<Typography pretendard="B">Pretendard-B</Typography>
<Typography pretendard="Black">Pretendard-Black</Typography>
<Typography suite="L">SUITE-L</Typography>
<Typography suite="R">SUITE-R</Typography>
<Typography suite="M">SUITE-M</Typography>
<Typography suite="SM">SUITE-SM</Typography>
<Typography suite="B">SUITE-B</Typography>
<Typography suite="H">SUITE-H</Typography>
<Typography gmarket="Light">Gmarket-Light</Typography>
<Typography gmarket="Medium">Gmarket-Medium</Typography>
<Typography gmarket="Bold">Gmarket-Bold</Typography>
<Typography code>IntelOneMono-Medium</Typography>
`}
              </Typography>
            </Card>
          </Card>
        </div>
      </div>
    </div>
  );
}
