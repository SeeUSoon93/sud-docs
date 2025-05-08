"use client";
import { useParams } from "next/navigation";
import Icon from "../../components/pageComponents/iconPage/Icon";
export default function Sub() {
  const { page, sub } = useParams();

  if (sub === "icons") {
    return <Icon />;
  } else {
    return <div className="pd-20">{`[${page}] > [${sub}] 컨텐츠`}</div>;
  }
}
