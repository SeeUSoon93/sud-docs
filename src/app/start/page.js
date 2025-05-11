"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { itemsList } from "../_lib/components/layoutData/menuMap";
import { getRedirectPath } from "../_lib/utils/menuUtils";

export default function IconsRedirectPage() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const redirectPath = getRedirectPath(pathname, itemsList);
    if (redirectPath) {
      router.replace(redirectPath);
    }
  }, [router, pathname]);

  return null;
}
