"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

import {
  Layout,
  Sider,
  Content,
  Footer,
  Header,
  SoonUIDesign,
  Typography
} from "sud-ui";
import "sud-ui/dist/index.css";

import MainHeader from "./layoutComponents/MainHeader";
import MainSider from "./layoutComponents/MainSider";

import { itemsList } from "./layoutData/menuMap";

export default function ClientLayout({ children }) {
  const params = useParams();
  const router = useRouter();

  const [selectHeadMenu, setSelectHeadMenu] = useState("");
  const [selectSiderMenu, setSelectSiderMenu] = useState("");

  useEffect(() => {
    console.log("params:", params);
    console.log("itemsList:", itemsList);
    console.log("current page items:", itemsList[params.page]);

    if (params.page) {
      setSelectHeadMenu(params.page);
    }

    if (params.sub) {
      setSelectSiderMenu(params.sub);
    }

    // /[page]만 있을 경우 → 자동 redirect
    if (params.page && !params.sub) {
      const firstSub = getFirstSubKey(itemsList[params.page]);
      console.log("firstSub:", firstSub);
      if (firstSub) {
        router.replace(`/${params.page}/${firstSub}`);
        setSelectSiderMenu(firstSub);
      }
    }
  }, [params.page, params.sub]);

  const isHome = !params.page;

  return (
    <SoonUIDesign isDarkMode={false}>
      <Layout siderPosition="below-header">
        {/* 헤더 */}
        <Header
          height="60"
          className="pd-l-15 pd-r-15"
          border={false}
          shadow="sm"
        >
          <MainHeader
            setSelectHeadMenu={setSelectHeadMenu}
            setSelectSiderMenu={setSelectSiderMenu}
          />
        </Header>
        {/* 사이더*/}
        <Sider width={isHome ? 0 : 270} className={isHome ? "pd-0" : "pd-10"}>
          {!isHome && (
            <MainSider
              selectHeadMenu={selectHeadMenu}
              selectSiderMenu={selectSiderMenu}
              setSelectSiderMenu={setSelectSiderMenu}
            />
          )}
        </Sider>

        {/* 컨텐츠 */}
        <Content>{children}</Content>

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
    </SoonUIDesign>
  );
}
function getFirstSubKey(items) {
  if (!items) return null;
  for (const item of items) {
    if (item.children?.length > 0) return item.children[0].key;
    if (item.key) return item.key;
  }
  return null;
}
