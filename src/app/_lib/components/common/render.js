import {
  Button,
  Card,
  Collapse,
  Divider,
  Segmented,
  Tag,
  Typography
} from "sud-ui";
import { handleInstallCopy } from "../../utils/utils";
import { CodeBoxOutline, DocumentOutline } from "sud-icons";
import React, { useState } from "react";
import { useDarkMode } from "../../context/darkModeContext";
import { useLang } from "../../context/langContext";

export const MainTitle = ({ title, description, etc }) => {
  return (
    <div className="flex flex-col gap-10">
      <Typography as="h1" gmarket="Medium" size="3xl">
        {title}
      </Typography>
      {description && (
        <Typography as="div" pretendard="R" size="base">
          {description}
        </Typography>
      )}
      {etc && etc}
    </div>
  );
};

export const SubTitleAndDescription = ({
  title,
  description,
  search,
  etc,
  grid = false,
  isMobile
}) => {
  const useColumnLayout = grid && !isMobile;

  const childrenArray = React.Children.toArray(etc);

  // 2열로 나누기
  const columns = useColumnLayout ? [[], []] : [childrenArray];
  if (useColumnLayout) {
    childrenArray.forEach((child, index) => {
      columns[index % 2].push(child);
    });
  }

  return (
    <div className="flex flex-col gap-10">
      <Typography as="h2" gmarket="Medium" size="xl">
        {title}
      </Typography>
      {description && (
        <Typography
          as="div"
          pretendard="R"
          size="base"
          style={{
            whiteSpace: "pre-wrap",
            wordBreak: "keep-all"
          }}
        >
          {description}
        </Typography>
      )}
      {search && search}
      {etc && (
        <div
          className={`${
            useColumnLayout ? "flex" : "flex flex-col"
          } gap-20 w-100`}
        >
          {columns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="flex flex-col gap-20"
              style={{
                flex: "0 0 calc(50% - 10px)",
                minWidth: 0
              }}
            >
              {column.map((child, index) => (
                <div key={index} className="w-100">
                  {child}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const SubTitle = ({ title }) => {
  return (
    <Typography as="h2" gmarket="Medium" size="xl">
      {title}
    </Typography>
  );
};

export const InstallCommand = ({ command }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isDarkMode } = useDarkMode();
  const { lang } = useLang();
  return (
    <Card
      colorType="sub"
      border={false}
      shadow="none"
      width={"100%"}
      className="flex flex-row cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex item-cen w-100 pd-10"
        onClick={() => handleInstallCopy(command, lang)}
      >
        <Typography as="code" code size="lg">
          {command}
        </Typography>
      </div>
      {isHovered && (
        <div
          className="flex flex-row gap-5 item-cen absolute rad-10 pd-10"
          style={{
            top: "10px",
            right: "10px",
            background: isDarkMode ? "black" : "white"
          }}
          onClick={() => handleInstallCopy(command, lang)}
        >
          <DocumentOutline size={16} /> Copy
        </div>
      )}
    </Card>
  );
};

export const CodeBlock = ({ code }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      colorType="sub"
      border={false}
      shadow="none"
      width="100%"
      style={{ maxHeight: "600px", overflow: "auto" }}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Typography
        as="code"
        code
        style={{
          display: "block",
          whiteSpace: "pre",
          overflowX: "auto",
          padding: "16px",
          lineHeight: "1.6",
          cursor: "pointer"
        }}
        onClick={() => handleInstallCopy(code, lang)}
      >
        {code}
      </Typography>
      {isHovered && (
        <div
          className="flex flex-row gap-5 item-cen absolute rad-10 pd-10 cursor-pointer"
          style={{
            top: "10px",
            right: "10px",
            background: "white"
          }}
          onClick={() => handleInstallCopy(code, lang)}
        >
          <DocumentOutline size={16} /> Copy
        </div>
      )}
    </Card>
  );
};

export const CodeSegment = ({
  select = null,
  setSelected = null,
  code,
  options = [
    {
      label: "javascript",
      value: "javascript"
    },
    {
      label: "typescript",
      value: "typescript"
    }
  ]
}) => {
  return (
    <div className="flex flex-col gap-10">
      {select && setSelected && (
        <Segmented
          value={select}
          onChange={(key) => setSelected(key)}
          options={options}
          block
        />
      )}
      <CodeBlock code={code} />
    </div>
  );
};

export const ExampleBlock = ({
  render,
  title,
  description,
  code,
  select,
  setSelected
}) => {
  return (
    <Card shadow="none" style={{ width: "100%", height: "100%" }}>
      <div
        className="flex flex-col gap-15"
        style={{ width: "100%", height: "100%" }}
      >
        {/* 렌더링 */}
        <div style={{ width: "100%" }}>{render}</div>
        {title && (
          <Divider
            content={
              <Typography as="div" gmarket="medium" size="lg">
                {title}
              </Typography>
            }
          />
        )}
        {description && (
          <Typography as="div" pretendard="R" size="base">
            {description}
          </Typography>
        )}
        {code && (
          <Collapse
            headerColorType="info"
            border={false}
            items={[
              {
                key: "code",
                label: (
                  <Typography as="div" code className="flex gap-5 item-cen">
                    <CodeBoxOutline /> View Code
                  </Typography>
                ),
                children: (
                  <CodeSegment
                    select={select}
                    setSelected={setSelected}
                    code={code}
                  />
                )
              }
            ]}
          />
        )}
      </div>
    </Card>
  );
};

export const tagRender = (tags) => (
  <>
    {tags.map((tag, index) => (
      <React.Fragment key={tag}>
        <Tag>{tag}</Tag>
        {index < tags.length - 1 && " | "}
      </React.Fragment>
    ))}
  </>
);
