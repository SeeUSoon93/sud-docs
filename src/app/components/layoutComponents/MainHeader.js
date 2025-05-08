"use client";

import { Image, Menu, Typography, Button, Divider } from "sud-ui";
import { useRouter } from "next/navigation";
import { MenuHamburger } from "sud-icons";

export default function MainHeader({
  setSelectHeadMenu,
  setSelectSiderMenu,
  isMobile,
  onMenuClick
}) {
  const router = useRouter();

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
      label: "시작하기"
    },
    {
      key: "css",
      label: "CSS",
      children: [
        { key: "color", label: "색상" },
        { key: "font", label: "폰트" },
        { key: "animation", label: "애니메이션" },
        { key: "etc", label: "나머지" }
      ]
    },
    {
      key: "component",
      label: "컴포넌트"
    },
    {
      key: "icons",
      label: "아이콘"
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
          <Menu
            items={mapMenuItems(items)}
            horizontal={true}
            expandType="popover"
          />
        </div>
      ) : (
        <div className="flex flex-col w-100 h-100 item-cen">
          <div className="flex jus-bet w-100 item-cen">
            <Button
              icon={<MenuHamburger size={20} />}
              onClick={onMenuClick}
              colorType="text"
              size="large"
            />
            {/* 로고 */}
            <div
              className="flex jus-cen item-cen gap-15"
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
          <div className="w-100 h-100 item-cen jus-cen">
            <Menu
              items={mapMenuItems(items)}
              horizontal={true}
              expandType="popover"
            />
          </div>
        </div>
      )}
    </>
  );
}
