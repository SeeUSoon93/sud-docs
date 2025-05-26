"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { itemsList } from "../_lib/components/layoutData/menuMap";
import { getRedirectPath } from "../_lib/utils/menuUtils";

export default function IconsRedirectPage() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const menuItems = itemsList("component", "ko"); // 기본값으로 한국어 설정
    const redirectPath = getRedirectPath(pathname, menuItems);
    if (redirectPath) {
      router.replace(redirectPath);
    }
  }, [router, pathname]);

  return null;
}
