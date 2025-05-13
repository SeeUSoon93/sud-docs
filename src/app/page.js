"use client";
import { Typography, Avatar, Card, Tooltip, Carousel, Image } from "sud-ui";
import { useMobile } from "./_lib/context/mobileContext";
import { overViewData } from "./component/component-overview/overViewData";
import { useDarkMode } from "./_lib/context/darkModeContext";

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
        <Typography as="div" pretendard="SB" size="lg" className="ta-cen">
          {component.name}
        </Typography>
      }
      divider
      background={isDarkMode ? "mint-9" : "mint-1"}
    >
      <div className="flex flex-col juc-cen item-cen pd-t-10 pd-b-20">
        <Image
          src={component.img}
          style={{
            height: "100%"
          }}
          preview={false}
          mask={null}
        />
      </div>
    </Card>
  ));

  return (
    <div className="flex flex-col item-cen w-100">
      <div className="flex flex-col item-cen mg-t-80 z-1 w-100 pd-x-20">
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
              <div className="flex flex-col item-cen pd-20">
                <Typography
                  as="p"
                  className="ta-cen"
                  size="lg"
                  style={{ wordBreak: "keep-all" }}
                >
                  디자이너와 개발자가 더 쉽고 빠르게 제품을 만들 수 있도록 돕는
                  React UI 라이브러리
                </Typography>
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
        itemWidthRatio={0.32}
        autoPlay={true}
        autoPlayInterval={2000}
      />
    </div>
  );
}
