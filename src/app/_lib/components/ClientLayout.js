"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MobileProvider, useMobile } from "../context/mobileContext";
import { DarkModeProvider, useDarkMode } from "../context/darkModeContext";
import { LangProvider, useLang } from "../context/langContext";
import {
  Layout,
  Sider,
  Content,
  Footer,
  Header,
  SoonUIDesign,
  Typography,
  FloatButton,
  Div
} from "sud-ui";
import "sud-ui/dist/index.css";

import MainHeader from "./layoutComponents/MainHeader";
import MainSider from "./layoutComponents/MainSider";
import {
  EnglishKorean,
  KoreanEnglish,
  MoonFill,
  SettingOutline,
  SunFill
} from "sud-icons";
import { LoadingPage } from "./LoadingPage";

function LayoutContent({ children }) {
  const pathname = usePathname();
  const { isMobile } = useMobile();
  const [isSiderOpen, setIsSiderOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [selectHeadMenu, setSelectHeadMenu] = useState("");
  const [selectSiderMenu, setSelectSiderMenu] = useState("");

  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const { lang, setLang } = useLang();
  const isHome = pathname === "/";

  useEffect(() => {
    if (pathname) {
      const [_, headMenu, siderMenu] = pathname.split("/");
      if (headMenu) {
        setSelectHeadMenu(headMenu);
        if (siderMenu) {
          setSelectSiderMenu(siderMenu);
        }
      }
    }
  }, [pathname]);

  // 페이지 전환 감지
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <SoonUIDesign isDarkMode={isDarkMode}>
      {isLoading && <LoadingPage />}
      {isMobile ? (
        <Layout siderPosition="below-header">
          {/* 헤더 */}
          <Header
            height={isMobile ? 110 : 60}
            className="pd-l-15 pd-r-15"
            border={false}
            shadow="sm"
          >
            <MainHeader
              setSelectHeadMenu={setSelectHeadMenu}
              setSelectSiderMenu={setSelectSiderMenu}
              isMobile={isMobile}
              onMenuClick={() => setIsSiderOpen(!isSiderOpen)}
            />
          </Header>

          {/* 사이더: 모바일에서만 오픈 시 렌더 */}
          {isSiderOpen && (
            <Sider width="100%" className="pd-10">
              <MainSider
                selectHeadMenu={selectHeadMenu}
                selectSiderMenu={selectSiderMenu}
                setSelectSiderMenu={setSelectSiderMenu}
                setIsSiderOpen={setIsSiderOpen}
                isMobile={isMobile}
              />
            </Sider>
          )}

          {/* 컨텐츠 */}
          <Content className={isHome ? "pd-0" : "pd-20"}>{children}</Content>

          {/* 푸터 */}
          <Footer
            className="jus-cen item-cen fs-12"
            height="30"
            border={false}
            colorType="secondary"
          >
            <Typography as="span" pretendard="L" size="xs">
              All rights reserved &copy; 2025 SeeUSoon93
            </Typography>
          </Footer>
        </Layout>
      ) : (
        <Layout siderPosition="below-header">
          {/* 헤더 */}
          <Header
            height={isMobile ? 110 : 60}
            className="pd-l-15 pd-r-15"
            border={false}
            shadow="sm"
          >
            <MainHeader
              setSelectHeadMenu={setSelectHeadMenu}
              setSelectSiderMenu={setSelectSiderMenu}
              isMobile={isMobile}
              onMenuClick={() => setIsSiderOpen(!isSiderOpen)}
            />
          </Header>

          {/* 사이더*/}
          <Sider width={isHome ? 0 : 270} className={isHome ? "pd-0" : "pd-10"}>
            {!isHome && (
              <MainSider
                selectHeadMenu={selectHeadMenu}
                selectSiderMenu={selectSiderMenu}
                setSelectSiderMenu={setSelectSiderMenu}
                setIsSiderOpen={setIsSiderOpen}
                isMobile={isMobile}
              />
            )}
          </Sider>

          {/* 컨텐츠 */}
          <Content className={isHome ? "pd-0" : "pd-20"}>{children}</Content>

          {/* 푸터 */}
          <Footer
            className="jus-cen item-cen fs-12"
            height="30"
            border={false}
            colorType="secondary"
          >
            <Typography as="span" pretendard="L" size="xs">
              All rights reserved &copy; 2025 SeeUSoon93
            </Typography>
          </Footer>
        </Layout>
      )}
      <FloatButton
        className="hover-pulse-2 hover-shadow-8"
        colorType="orchid"
        border={false}
        icon={<SettingOutline />}
        size="xl"
        actions={[
          {
            icon: isDarkMode ? (
              <Div color="gold-8" children={<SunFill />} />
            ) : (
              <Div color="cool-gray-8" children={<MoonFill />} />
            ),
            onClick: () => setIsDarkMode(!isDarkMode)
          },
          {
            icon: (
              <Div
                color="forest-8"
                children={lang === "ko" ? <KoreanEnglish /> : <EnglishKorean />}
              />
            ),
            onClick: () => setLang(lang === "ko" ? "en" : "ko")
          }
        ]}
      />
    </SoonUIDesign>
  );
}

export default function ClientLayout({ children }) {
  return (
    <MobileProvider>
      <DarkModeProvider>
        <LangProvider>
          <LayoutContent>{children}</LayoutContent>
        </LangProvider>
      </DarkModeProvider>
    </MobileProvider>
  );
}
