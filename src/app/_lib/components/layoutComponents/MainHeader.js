"use client";

import { Image, Menu, Typography, Button, Divider, Card, Div } from "sud-ui";
import { useRouter } from "next/navigation";
import {
  EnglishKorean,
  KoreanEnglish,
  MenuHamburger,
  MoonFill,
  SunFill
} from "sud-icons";
import { useDarkMode } from "../../context/darkModeContext";
import { useLang } from "../../context/langContext";

export default function MainHeader({
  setSelectHeadMenu,
  setSelectSiderMenu,
  isMobile,
  onMenuClick
}) {
  const router = useRouter();
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const { lang, setLang } = useLang();

  const handleMenuClick = (key) => {
    const [page, sub] = key.split("/");

    setSelectHeadMenu(page);
    if (sub) {
      setSelectSiderMenu(sub);
      router.push(`/${page}/${sub}`);
    } else {
      router.push(`/${page}`);
    }
  };

  const items = [
    {
      key: "start",
      label: lang === "ko" ? "시작하기" : "Start"
    },
    {
      key: "css",
      label: lang === "ko" ? "CSS" : "CSS",
      children: [
        { key: "color", label: lang === "ko" ? "색상" : "Color" },
        { key: "font", label: lang === "ko" ? "폰트" : "Font" },
        { key: "animation", label: lang === "ko" ? "애니메이션" : "Animation" },
        { key: "className", label: lang === "ko" ? "클래스명" : "ClassName" }
      ]
    },
    {
      key: "component",
      label: lang === "ko" ? "컴포넌트" : "Component"
    },
    {
      key: "icons",
      label: lang === "ko" ? "아이콘" : "Icons"
    }
  ];

  const mapMenuItems = (items, parentPath = "") => {
    return items.map((item) => {
      const path = parentPath ? `${parentPath}/${item.key}` : item.key;
      const newItem = {
        ...item,
        onClick: () => handleMenuClick(path)
      };
      if (item.children) {
        newItem.children = mapMenuItems(item.children, item.key);
      }
      return newItem;
    });
  };

  return (
    <>
      {!isMobile ? (
        <div className="flex jus-bet w-100 h-100 item-cen">
          {/* 로고 */}
          <div
            className="flex jus-cen item-cen gap-15"
            onClick={() => router.push("/")}
            style={{ cursor: "pointer" }}
          >
            <Image
              src="/sud-logo.svg"
              alt="logo"
              width={120}
              preview={false}
              mask={null}
            />
            <Typography as="h1" className="fs-16" pretendard="T">
              Soon UI Design
            </Typography>
          </div>
          {/* 메뉴 */}
          <Div className="flex gap-10 item-cen">
            <Menu
              items={mapMenuItems(items)}
              horizontal={true}
              expandType="popover"
              border
            />

            <Button
              shadow="none"
              icon={lang === "ko" ? <EnglishKorean /> : <KoreanEnglish />}
              onClick={() => setLang(lang === "ko" ? "en" : "ko")}
            >
              {lang === "ko" ? "A" : "가"}
            </Button>
            <Button
              shadow="none"
              icon={isDarkMode ? <SunFill /> : <MoonFill />}
              onClick={() => setIsDarkMode(!isDarkMode)}
            />
          </Div>
        </div>
      ) : (
        <div className="flex flex-col w-100 h-100 item-cen jus-cen">
          <div className="flex jus-bet w-100 item-cen">
            <Button
              icon={<MenuHamburger size={20} />}
              onClick={onMenuClick}
              colorType="text"
              size="large"
            />
            {/* 로고 */}
            <div
              className="flex jus-cen item-cen gap-15 "
              onClick={() => router.push("/")}
              style={{ cursor: "pointer" }}
            >
              <Image
                src="/sud-logo.svg"
                alt="logo"
                width={80}
                preview={false}
                mask={null}
              />
            </div>
            <Button
              icon={<MenuHamburger size={20} />}
              disabled
              color="transparent"
              background="transparent"
              border={false}
              shadow="none"
            />
          </div>
          <Divider />
          <Menu
            items={mapMenuItems(items)}
            horizontal={true}
            expandType="popover"
          />
        </div>
      )}
    </>
  );
}
