"use client";
import { useParams } from "next/navigation";

// css 페이지
import Color from "../../components/pageComponents/cssPage/Color";
import Font from "../../components/pageComponents/cssPage/Font";
import Animation from "../../components/pageComponents/cssPage/Animation";
import ClassName from "../../components/pageComponents/cssPage/className";

// 아이콘 페이지
import Icon from "../../components/pageComponents/iconPage/Icon";

// 컴포넌트 페이지
import ComponentOverview from "../../components/pageComponents/componentPage/ComponentOverview";

export default function Sub() {
  const { page, sub } = useParams();

  switch (page) {
    case "css":
      switch (sub) {
        case "color":
          return <Color />;
        case "font":
          return <Font />;
        case "animation":
          return <Animation />;
        case "className":
          return <ClassName />;
        default:
          return <div className="pd-20">{`[${page}] > [${sub}] 컨텐츠`}</div>;
      }
    case "component":
      switch (sub) {
        case "component-overview":
          return <ComponentOverview />;
        default:
          return <div className="pd-20">{`[${page}] > [${sub}] 컨텐츠`}</div>;
      }
    case "icons":
      switch (sub) {
        case "icons":
          return <Icon />;
        default:
          return <div className="pd-20">{`[${page}] > [${sub}] 컨텐츠`}</div>;
      }
    default:
      return <div className="pd-20">{`[${page}] > [${sub}] 컨텐츠`}</div>;
  }
}
