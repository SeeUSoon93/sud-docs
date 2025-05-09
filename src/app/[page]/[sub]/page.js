"use client";
import { useParams } from "next/navigation";

// css 페이지
import Color from "../../components/pageComponents/cssPage/Color";
import Font from "../../components/pageComponents/cssPage/Font";

// 아이콘 페이지
import Icon from "../../components/pageComponents/iconPage/Icon";

export default function Sub() {
  const { page, sub } = useParams();

  console.log("dd");

  switch (page) {
    case "css":
      switch (sub) {
        case "color":
          return <Color />;
        case "font":
          return <Font />;
        default:
          return <div className="pd-20">{`[${page}] > [${sub}] 컨텐츠`}</div>;
      }
    case "component":
      switch (sub) {
        case "icons":
          return <Icon />;
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
