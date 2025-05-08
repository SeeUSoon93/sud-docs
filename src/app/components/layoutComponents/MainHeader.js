"use client";

import { Image, Menu, Typography } from "sud-ui";
import { useRouter } from "next/navigation";

export default function MainHeader({ setSelectHeadMenu, setSelectSiderMenu }) {
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
        className="flex"
      />
    </div>
  );
}
