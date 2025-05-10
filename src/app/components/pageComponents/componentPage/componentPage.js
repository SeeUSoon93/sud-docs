import { useState, useEffect } from "react";
import { useMobile } from "../../../context/mobileContext";
import {
  Card,
  Typography,
  toast,
  DotSpinner,
  Divider,
  Tabs,
  Collapse
} from "sud-ui";
import { componentData } from "./data/componentData";
import { ErrorCircleOutline, CodeBoxOutline } from "sud-icons";

export default function ComponentPage({ sub }) {
  const { isMobile } = useMobile();
  const [component, setComponent] = useState(null);
  const [activeTab, setActiveTab] = useState("javascript");

  useEffect(() => {
    const component = componentData.find((c) => c.key === sub);
    setComponent(component);
  }, [sub]);

  if (!component) {
    return (
      <div className="flex w-100 h-100 jus-cen item-cen">
        <DotSpinner size="70" />
      </div>
    );
  }

  const handleCopy = (text, message) => {
    navigator.clipboard.writeText(text);
    toast.success(message);
  };
  const handleInstallCopy = () => {
    handleCopy(component.IMPORT_COMMAND, "복사 완료");
  };

  return (
    <div className="flex flex-col gap-40 pd-20 w-100">
      <div className="flex flex-col gap-20">
        <Typography as="h1" gmarket="Medium" size="3xl">
          {component.name}
        </Typography>
        <Typography
          as="span"
          pretendard="R"
          size="base"
          style={{
            whiteSpace: "pre-wrap",
            wordBreak: "keep-all"
          }}
        >
          {component.description}
        </Typography>
        <Card
          colorType="sub"
          border={false}
          shadow="none"
          width={"100%"}
          className="flex flex-row"
        >
          <div
            className="flex jus-bet item-cen cursor-pointer"
            onClick={handleInstallCopy}
          >
            <Typography as="code" code size="lg">
              {component.IMPORT_COMMAND}
            </Typography>
          </div>
        </Card>
      </div>

      <div className="flex flex-col gap-10">
        <Typography as="h2" gmarket="Medium" size="xl">
          사용 시 주의사항
        </Typography>
        <div className="flex flex-col gap-10">
          {component.cautions.map((caution, index) => (
            <div key={index} className="flex flex-row gap-5 item-cen">
              <Typography
                as="div"
                color="red-4"
                className="flex jus-cen item-cen"
              >
                <ErrorCircleOutline size="16" />
              </Typography>
              <Typography
                as="p"
                pretendard="R"
                style={{
                  whiteSpace: "pre-wrap",
                  wordBreak: "keep-all"
                }}
              >
                {caution}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <Typography as="h2" gmarket="Medium" size="xl">
          사용예제
        </Typography>
        <div className="flex flex-col gap-10">
          {component.examples.map((example, index) => (
            <Card key={index} shadow="none" style={{ width: "100%" }}>
              <div
                className="flex flex-col gap-10"
                style={{ width: "100%", height: "100%" }}
              >
                {/* 렌더링 */}
                <div style={{ width: "100%", height: "500px" }}>
                  {example.render}
                </div>
                <Divider content={example.title} />
                <Typography as="p" pretendard="R" size="base">
                  {example.des}
                </Typography>
                {example.jsCode && example.tsCode && (
                  <Collapse
                    items={[
                      {
                        key: "code",
                        label: (
                          <Typography
                            as="div"
                            code
                            className="flex gap-5 item-cen"
                          >
                            <CodeBoxOutline /> View Code
                          </Typography>
                        ),
                        children: (
                          <Tabs
                            value={activeTab}
                            onChange={(key) => setActiveTab(key)}
                          >
                            <Tabs.TabPane
                              tabKey="javascript"
                              label="JavaScript"
                            >
                              <Card
                                colorType="sub"
                                border={false}
                                shadow="none"
                                width="100%"
                              >
                                <Typography
                                  as="code"
                                  code
                                  size="base"
                                  style={{
                                    display: "block",
                                    whiteSpace: "pre",
                                    overflowX: "auto",
                                    padding: "16px",
                                    cursor: "pointer"
                                  }}
                                  onClick={() => {
                                    navigator.clipboard.writeText(
                                      example.jsCode
                                    );
                                    toast.success("복사되었습니다.");
                                  }}
                                >
                                  {example.jsCode}
                                </Typography>
                              </Card>
                            </Tabs.TabPane>

                            <Tabs.TabPane
                              tabKey="typescript"
                              label="TypeScript"
                            >
                              <Card
                                colorType="sub"
                                border={false}
                                shadow="none"
                                width="100%"
                              >
                                <Typography
                                  as="code"
                                  code
                                  size="base"
                                  style={{
                                    display: "block",
                                    whiteSpace: "pre",
                                    overflowX: "auto",
                                    padding: "16px",
                                    cursor: "pointer"
                                  }}
                                  onClick={() => {
                                    navigator.clipboard.writeText(
                                      example.tsCode
                                    );
                                    toast.success("복사되었습니다.");
                                  }}
                                >
                                  {example.tsCode}
                                </Typography>
                              </Card>
                            </Tabs.TabPane>
                          </Tabs>
                        )
                      }
                    ]}
                  />
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
