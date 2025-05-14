"use client";
import { Typography, Avatar, Card, Tooltip, Carousel, Image } from "sud-ui";
import { useMobile } from "./_lib/context/mobileContext";
import { overViewData } from "./component/component-overview/overViewData";
import { useDarkMode } from "./_lib/context/darkModeContext";
import { LogoSud } from "sud-icons";
import { InstallCommand } from "./_lib/components/common/render";
import { handleInstallCopy } from "./_lib/utils/utils";

const INSTALL_COMMAND = `npm install sud-ui sud-icons`;
export default function Home() {
  const { isMobile } = useMobile();
  const { isDarkMode } = useDarkMode();

  const allComponents = overViewData.reduce((acc, category) => {
    return [...acc, ...category.children];
  }, []);

  const renderItems = allComponents.map((component) => (
    <Card
      key={component.name}
      className="hover-bounce-big"
      style={{ width: "100%" }}
      title={
        <Typography as="div" gmarket="Medium" size="lg" className="ta-cen">
          {component.name}
        </Typography>
      }
      divider
      background={"mint-1"}
    >
      <div
        className={`flex flex-col jus-cen pd-20 h-px-300 w-100 ${
          !component.item && "item-cen"
        }`}
      >
        {component.item ? (
          component.item
        ) : (
          <Image src={component.img} preview={false} mask={null} />
        )}
      </div>
    </Card>
  ));

  return (
    <div className="flex flex-col item-cen w-100 pd-y-150">
      <div className="flex flex-col item-cen z-1 w-100 pd-x-20">
        <Typography
          as="h1"
          suite="H"
          className="ta-cen"
          style={{ fontSize: isMobile ? "30px" : "50px" }}
        >
          Soon UI Design
        </Typography>
        <Typography
          as="h2"
          code
          className="ta-cen"
          style={{ fontSize: isMobile ? "50px" : "70px" }}
        >
          0.1.3
        </Typography>

        <div className="mg-t-50">
          <Tooltip
            placement="top"
            content={
              <div className="flex flex-col item-cen pd-20 gap-10">
                <Typography
                  as="p"
                  className="ta-cen"
                  size="lg"
                  style={{ wordBreak: "keep-all" }}
                >
                  디자이너와 개발자가 더 쉽고 빠르게
                  <br /> 제품을 만들 수 있도록 돕는
                  <br />
                </Typography>
                <Typography as="p" pretendard="B" className="ta-cen" size="2xl">
                  React UI 라이브러리
                </Typography>
                <LogoSud size={50} />
              </div>
            }
          >
            <Avatar size="xl" className="hover-bounce-big" colorType="mint" />
          </Tooltip>
        </div>
      </div>
      <Carousel
        className="mg-t-40"
        items={renderItems}
        effectType="overlap"
        itemCount={5}
        itemWidthRatio={isMobile ? 0.8 : 0.32}
        autoPlay={true}
        autoPlayInterval={2000}
        height="500px"
      />

      <div className="mg-t-40 flex flex-col gap-20 min-w-50">
        <Typography
          as="h1"
          suite="H"
          className="ta-cen"
          style={{ fontSize: isMobile ? "30px" : "50px" }}
        >
          Start Using SUD
        </Typography>
        <InstallCommand
          command={INSTALL_COMMAND}
          onClick={() => handleInstallCopy(INSTALL_COMMAND)}
        />
      </div>
    </div>
  );
}
