"use client";

import { Menu } from "sud-ui";
import { useRouter } from "next/navigation";
import { useLang } from "../../context/langContext";
import { itemsList } from "../layoutData/menuMap";
import { useEffect, useState } from "react";

export default function MainSider({
  selectHeadMenu,
  selectSiderMenu,
  setSelectSiderMenu,
  setIsSiderOpen,
  isMobile
}) {
  const router = useRouter();
  const { lang } = useLang();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const menuItems = itemsList(selectHeadMenu, lang);
    setItems(menuItems ? menuItems[selectHeadMenu] || [] : []);
  }, [selectHeadMenu, lang]);

  return (
    <div className="h-100 w-100">
      <Menu
        type="default"
        selectedTextColor="info"
        selectedKey={selectSiderMenu} // ✅ 이걸로 항상 최신 sub 반영
        items={items}
        onSelect={(key) => {
          setSelectSiderMenu(key);
          router.push(`/${selectHeadMenu}/${key}`);
          if (isMobile) {
            setIsSiderOpen(false);
          }
        }}
      />
    </div>
  );
}
