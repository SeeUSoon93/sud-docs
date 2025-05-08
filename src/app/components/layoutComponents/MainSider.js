"use client";

import { Menu } from "sud-ui";
import { useRouter } from "next/navigation";
import { itemsList } from "../layoutData/menuMap";

export default function MainSider({
  selectHeadMenu,
  selectSiderMenu,
  setSelectSiderMenu
}) {
  const router = useRouter();

  return (
    <div className="h-100 w-100">
      <Menu
        type="default"
        selectedTextColor="info"
        selectedKey={selectSiderMenu} // ✅ 이걸로 항상 최신 sub 반영
        items={itemsList[selectHeadMenu] || []}
        onSelect={(key) => {
          setSelectSiderMenu(key);
          router.push(`/${selectHeadMenu}/${key}`);
        }}
      />
    </div>
  );
}
