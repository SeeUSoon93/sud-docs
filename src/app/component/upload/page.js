"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import {
  Tag,
  Radio,
  Card,
  Upload,
  Button,
  Typography,
  Avatar,
  Image,
  DotSpinner
} from "sud-ui";

import React, { useState } from "react";
import {
  CloudUpload,
  Plus,
  TrashOutline,
  Upload as UploadIcon
} from "sud-icons";

export default function UploadPage() {
  const { isMobile } = useMobile();

  const name = "Upload";
  const description = <>파일 업로드 컴포넌트입니다.</>;

  const IMPORT_COMMAND = "import { Upload } from 'sud-ui';";

  const whenToUse = [
    "하나 이상의 파일을 업로드할 때.",
    "드래그 앤 드롭 방식으로 파일을 업로드할 때."
  ];

  const [listType, setListType] = useState("text");
  const [isDragging, setIsDragging] = useState(false);
  const [hasProfile, setHasProfile] = useState(false);
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingImg, setLoadingImg] = useState(null);
  const [fileList, setFileList] = useState([]);

  const handleLoading = (img) => {
    setLoadingImg(null);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setLoadingImg(URL.createObjectURL(img));
    }, 3000);
  };

  const listTypeOptions = [
    { label: "text", value: "text" },
    { label: "thumbnail", value: "thumbnail" },
    { label: "card", value: "card" },
    { label: "none", value: "none" }
  ];

  const examples = [
    {
      title: "Basic Usage",
      description:
        "기본적인 파일 업로드 컴포넌트입니다. 단일 파일을 업로드할 수 있습니다.",
      jscode: `<Upload>
  <Button icon={<UploadIcon size={16} />}>파일 업로드</Button>
</Upload>`,
      tscode: `<Upload>
  <Button icon={<UploadIcon size={16} />}>파일 업로드</Button>
</Upload>`,
      render: (
        <Upload>
          <Button icon={<UploadIcon size={16} />}>파일 업로드</Button>
        </Upload>
      )
    },
    {
      title: "Multiple Files",
      description:
        "여러 파일을 동시에 업로드할 수 있습니다. maxCount 속성을 통해 최대 업로드 가능한 파일 개수를 제한할 수 있습니다.",
      jscode: `<Upload multiple maxCount={3}>
  <Button icon={<UploadIcon size={16} />}>여러 파일 업로드</Button>
</Upload>`,
      tscode: `<Upload multiple maxCount={3}>
  <Button icon={<UploadIcon size={16} />}>여러 파일 업로드</Button>
</Upload>`,
      render: (
        <Upload multiple maxCount={3}>
          <Button icon={<UploadIcon size={16} />}>여러 파일 업로드</Button>
        </Upload>
      )
    },
    {
      title: "Accept Specific File Types",
      description:
        "ext 속성을 사용하여 특정 파일 형식만 업로드할 수 있습니다. 지원하지 않는 파일 형식은 업로드가 제한됩니다.",
      jscode: `<Upload multiple ext={["png", "jpg"]}>
  <Button icon={<UploadIcon size={16} />}>특정 파일 형식 업로드</Button>
</Upload>`,
      tscode: `<Upload multiple ext={["png", "jpg"]}>
  <Button icon={<UploadIcon size={16} />}>특정 파일 형식 업로드</Button>
</Upload>`,
      render: (
        <Upload multiple ext={["png", "jpg"]}>
          <Button icon={<UploadIcon size={16} />}>특정 파일 형식 업로드</Button>
        </Upload>
      )
    },
    {
      title: "File Size Limit",
      description:
        "maxFileSize 속성을 통해 업로드 가능한 파일의 최대 크기를 제한할 수 있습니다. 제한된 크기를 초과하는 파일은 업로드가 제한됩니다.",
      jscode: `<Upload multiple maxFileSize={1024 * 1024 * 5}>
  <Button icon={<UploadIcon size={16} />}>파일 크기 제한</Button>
</Upload>`,
      tscode: `<Upload multiple maxFileSize={1024 * 1024 * 5}>
  <Button icon={<UploadIcon size={16} />}>파일 크기 제한</Button>
</Upload>`,
      render: (
        <Upload multiple maxFileSize={1024 * 1024 * 5}>
          <Button icon={<UploadIcon size={16} />}>파일 크기 제한</Button>
        </Upload>
      )
    },
    {
      title: "Disabled",
      description:
        "disabled 속성을 통해 업로드 컴포넌트를 비활성화할 수 있습니다. 비활성화 상태에서는 파일 업로드가 불가능합니다.",
      jscode: `<Upload disabled>
  <Button icon={<UploadIcon size={16} />} disabled>
    비활성화
  </Button>
</Upload>`,
      tscode: `<Upload disabled>
  <Button icon={<UploadIcon size={16} />} disabled>
    비활성화
  </Button>
</Upload>`,
      render: (
        <Upload disabled>
          <Button icon={<UploadIcon size={16} />} disabled>
            비활성화
          </Button>
        </Upload>
      )
    },
    {
      title: "List Type",
      description:
        "listType 속성을 통해 업로드된 파일 목록의 표시 방식을 설정할 수 있습니다. text, thumbnail, card, none 중 선택 가능합니다.",
      jscode: `<Upload
  listType="text"
  multiple
  listDirection="column"
>
  <Button icon={<UploadIcon size={16} />}>파일 업로드</Button>
</Upload>`,
      tscode: `<Upload
  listType="text"
  multiple
  listDirection="column"
>
  <Button icon={<UploadIcon size={16} />}>파일 업로드</Button>
</Upload>`,
      render: (
        <div className="flex flex-col gap-20">
          <Card style={{ width: "100%" }} shadow="none" colorType="sub">
            <div className="flex jus-cen w-100">
              <Radio.Group
                options={listTypeOptions}
                direction="horizontal"
                value={listType}
                onChange={setListType}
              />
            </div>
          </Card>
          <Upload
            listType={listType}
            multiple
            listDirection={listType === "card" ? "row" : "column"}
          >
            <Button icon={<UploadIcon size={16} />}>파일 업로드</Button>
          </Upload>
        </div>
      )
    },
    {
      title: "Drag & Drop",
      description:
        "drag 속성을 통해 드래그 앤 드롭 방식으로 파일을 업로드할 수 있습니다. 파일을 드래그하여 영역에 드롭하면 자동으로 업로드됩니다.",
      jscode: `<Upload
  listType="text"
  drag
  onDrag={(isDrag) => {
    setIsDragging(isDrag);
  }}
>
  <Card
    style={{ width: "100%" }}
    shadow="none"
    borderType="dashed"
    borderWeight={2}
    borderColor={isDragging ? "sky-6" : "cool-gray-3"}
    background={isDragging ? "sky-2" : "cool-gray-1"}
    color={isDragging ? "sky-8" : "cool-gray-7"}
  >
    <div className="flex flex-col gap-10 jus-cen item-cen">
      <Typography suite="H" size="lg">
        Drag & Drop
      </Typography>
      <Typography color="cool-gray-5">
        드래그 앤 드롭 방식으로 파일을 업로드할 수 있습니다.
      </Typography>
    </div>
  </Card>
</Upload>`,
      tscode: `<Upload
  listType="text"
  drag
  onDrag={(isDrag: boolean) => {
    setIsDragging(isDrag);
  }}
>
  <Card
    style={{ width: "100%" }}
    shadow="none"
    borderType="dashed"
    borderWeight={2}
    borderColor={isDragging ? "sky-6" : "cool-gray-3"}
    background={isDragging ? "sky-2" : "cool-gray-1"}
    color={isDragging ? "sky-8" : "cool-gray-7"}
  >
    <div className="flex flex-col gap-10 jus-cen item-cen">
      <Typography suite="H" size="lg">
        Drag & Drop
      </Typography>
      <Typography color="cool-gray-5">
        드래그 앤 드롭 방식으로 파일을 업로드할 수 있습니다.
      </Typography>
    </div>
  </Card>
</Upload>`,
      render: (
        <div className="flex flex-col gap-20">
          <Upload
            listType={listType}
            drag
            onDrag={(isDrag) => {
              setIsDragging(isDrag);
            }}
          >
            <Card
              style={{ width: "100%" }}
              shadow="none"
              borderType="dashed"
              borderWeight={2}
              borderColor={isDragging ? "sky-6" : "cool-gray-3"}
              background={isDragging ? "sky-2" : "cool-gray-1"}
              color={isDragging ? "sky-8" : "cool-gray-7"}
            >
              <div className="flex flex-col gap-10 jus-cen item-cen">
                <Typography suite="H" size="lg">
                  Drag & Drop
                </Typography>
                <Typography color="cool-gray-5">
                  드래그 앤 드롭 방식으로 파일을 업로드할 수 있습니다.
                </Typography>
              </div>
            </Card>
          </Upload>
        </div>
      )
    },
    {
      title: "Custom Upload",
      description:
        "프로필 사진 업로드를 위한 커스텀 예제입니다. 이미지 업로드 시 미리보기를 제공하고, 업로드 전/후의 상태를 구분하여 표시합니다.",
      jscode: `<Upload
  listType="none"
  onChange={(img) => {
    if (img) {
      setHasProfile(true);
      setProfile(URL.createObjectURL(img));
    } else {
      setHasProfile(false);
      setProfile(null);
    }
  }}
>
  {hasProfile ? (
    <Image
      shape="circle"
      src={profile}
      alt="profile"
      width={150}
      height={150}
      preview={false}
      mask={
        <div className="flex flex-col gap-10 jus-cen item-cen ta-cen">
          <Typography>Profile Update</Typography>
        </div>
      }
    />
  ) : (
    <Card
      shadow="none"
      borderType="dashed"
      borderWeight={2}
      background="cool-gray-1"
      shape="circle"
      width={150}
      height={150}
      className="jus-cen item-cen"
    >
      <div className="flex flex-col gap-10 jus-cen item-cen pd-10">
        <Plus />
        <Typography>Upload</Typography>
      </div>
    </Card>
  )}
</Upload>`,
      tscode: `<Upload
  listType="none"
  onChange={(img: File | null) => {
    if (img) {
      setHasProfile(true);
      setProfile(URL.createObjectURL(img));
    } else {
      setHasProfile(false);
      setProfile(null);
    }
  }}
>
  {hasProfile ? (
    <Image
      shape="circle"
      src={profile}
      alt="profile"
      width={150}
      height={150}
      preview={false}
      mask={
        <div className="flex flex-col gap-10 jus-cen item-cen ta-cen">
          <Typography>Profile Update</Typography>
        </div>
      }
    />
  ) : (
    <Card
      shadow="none"
      borderType="dashed"
      borderWeight={2}
      background="cool-gray-1"
      shape="circle"
      width={150}
      height={150}
      className="jus-cen item-cen"
    >
      <div className="flex flex-col gap-10 jus-cen item-cen pd-10">
        <Plus />
        <Typography>Upload</Typography>
      </div>
    </Card>
  )}
</Upload>`,
      render: (
        <Upload
          listType="none"
          onChange={(img) => {
            if (img) {
              setHasProfile(true);
              setProfile(URL.createObjectURL(img));
            } else {
              setHasProfile(false);
              setProfile(null);
            }
          }}
        >
          {hasProfile ? (
            <Image
              shape="circle"
              src={profile}
              alt="profile"
              width={150}
              height={150}
              preview={false}
              mask={
                <div className="flex flex-col gap-10 jus-cen item-cen ta-cen">
                  <Typography>Profile Update</Typography>
                </div>
              }
            />
          ) : (
            <Card
              shadow="none"
              borderType="dashed"
              borderWeight={2}
              background="cool-gray-1"
              shape="circle"
              width={150}
              height={150}
              className="jus-cen item-cen"
            >
              <div className="flex flex-col gap-10 jus-cen item-cen pd-10">
                <Plus />
                <Typography>Upload</Typography>
              </div>
            </Card>
          )}
        </Upload>
      )
    },
    {
      title: "Loading",
      description:
        "파일 업로드 중 로딩 상태를 표시하는 예제입니다. 업로드 진행 중에는 로딩 스피너가 표시되고, 완료 후에는 업로드된 이미지가 표시됩니다.",
      jscode: `<Upload
  listType="none"
  onChange={(img) => {
    handleLoading(img);
  }}
>
  {loadingImg ? (
    <Image
      shape="rounded"
      src={loadingImg}
      alt="profile"
      width={150}
      height={150}
      preview={false}
      mask={
        <div className="flex flex-col gap-10 jus-cen item-cen ta-cen">
          <Typography>Profile Update</Typography>
        </div>
      }
    />
  ) : (
    <Card
      shadow="none"
      borderType="dashed"
      borderWeight={2}
      background="cool-gray-1"
      width={150}
      height={150}
      className="jus-cen item-cen"
    >
      <div className="flex flex-col gap-10 jus-cen item-cen">
        {isLoading ? (
          <DotSpinner text="Uploading..." />
        ) : (
          <>
            <Plus />
            <Typography>Upload</Typography>
          </>
        )}
      </div>
    </Card>
  )}
</Upload>`,
      tscode: `<Upload
  listType="none"
  onChange={(img: File | null) => {
    handleLoading(img);
  }}
>
  {loadingImg ? (
    <Image
      shape="rounded"
      src={loadingImg}
      alt="profile"
      width={150}
      height={150}
      preview={false}
      mask={
        <div className="flex flex-col gap-10 jus-cen item-cen ta-cen">
          <Typography>Profile Update</Typography>
        </div>
      }
    />
  ) : (
    <Card
      shadow="none"
      borderType="dashed"
      borderWeight={2}
      background="cool-gray-1"
      width={150}
      height={150}
      className="jus-cen item-cen"
    >
      <div className="flex flex-col gap-10 jus-cen item-cen">
        {isLoading ? (
          <DotSpinner text="Uploading..." />
        ) : (
          <>
            <Plus />
            <Typography>Upload</Typography>
          </>
        )}
      </div>
    </Card>
  )}
</Upload>`,
      render: (
        <Upload
          listType="none"
          onChange={(img) => {
            handleLoading(img);
          }}
        >
          {loadingImg ? (
            <Image
              shape="rounded"
              src={loadingImg}
              alt="profile"
              width={150}
              height={150}
              preview={false}
              mask={
                <div className="flex flex-col gap-10 jus-cen item-cen ta-cen">
                  <Typography>Profile Update</Typography>
                </div>
              }
            />
          ) : (
            <Card
              shadow="none"
              borderType="dashed"
              borderWeight={2}
              background="cool-gray-1"
              width={150}
              height={150}
              className="jus-cen item-cen"
            >
              <div className="flex flex-col gap-10 jus-cen item-cen">
                {isLoading ? (
                  <DotSpinner text="Uploading..." />
                ) : (
                  <>
                    <Plus />
                    <Typography>Upload</Typography>
                  </>
                )}
              </div>
            </Card>
          )}
        </Upload>
      )
    },
    {
      title: "File List",
      description:
        "업로드된 파일 목록을 커스텀하게 표시하는 예제입니다. 파일 이름, 크기 정보를 표시하고 개별 파일 삭제 기능을 제공합니다.",
      jscode: `<Upload
  listType="none"
  onChange={(files) => {
    setFileList(files);
  }}
  multiple
>
  <Button icon={<UploadIcon size={16} />}>파일 업로드</Button>
</Upload>
<div className="flex flex-col gap-10 w-100">
  {fileList.map((file, index) => (
    <Card
      key={\`\${file.name}-\${index}\`}
      shadow="none"
      colorType="sub"
      className="flex jus-bet item-cen pd-10"
    >
      <div className="flex flex-col gap-5">
        <Typography>{file.name}</Typography>
        <Typography size="sm" color="cool-gray-5">
          {(file.size / 1024).toFixed(2)} KB
        </Typography>
      </div>
      <Button
        icon={<TrashOutline size={16} />}
        colorType="danger"
        onClick={() => {
          setFileList(fileList.filter((f) => f.name !== file.name));
        }}
      >
        삭제
      </Button>
    </Card>
  ))}
</div>`,
      tscode: `<Upload
  listType="none"
  onChange={(files: File[]) => {
    setFileList(files);
  }}
  multiple
>
  <Button icon={<UploadIcon size={16} />}>파일 업로드</Button>
</Upload>
<div className="flex flex-col gap-10 w-100">
  {fileList.map((file, index) => (
    <Card
      key={\`\${file.name}-\${index}\`}
      shadow="none"
      colorType="sub"
      className="flex jus-bet item-cen pd-10"
    >
      <div className="flex flex-col gap-5">
        <Typography>{file.name}</Typography>
        <Typography size="sm" color="cool-gray-5">
          {(file.size / 1024).toFixed(2)} KB
        </Typography>
      </div>
      <Button
        icon={<TrashOutline size={16} />}
        colorType="danger"
        onClick={() => {
          setFileList(fileList.filter((f) => f.name !== file.name));
        }}
      >
        삭제
      </Button>
    </Card>
  ))}
</div>`,
      render: (
        <div className="flex flex-col gap-20">
          <Upload
            listType="none"
            onChange={(files) => {
              setFileList(files);
            }}
            multiple
          >
            <Button icon={<UploadIcon size={16} />}>파일 업로드</Button>
          </Upload>
          <div className="flex flex-col gap-10 w-100">
            {fileList.map((file, index) => (
              <Card
                key={`${file.name}-${index}`}
                shadow="none"
                colorType="sub"
                className="flex jus-bet item-cen pd-10"
              >
                <div className="flex flex-col gap-5">
                  <Typography>{file.name}</Typography>
                  <Typography size="sm" color="cool-gray-5">
                    {(file.size / 1024).toFixed(2)} KB
                  </Typography>
                </div>
                <Button
                  icon={<TrashOutline size={16} />}
                  colorType="danger"
                  onClick={() => {
                    setFileList(fileList.filter((f) => f.name !== file.name));
                  }}
                >
                  삭제
                </Button>
              </Card>
            ))}
          </div>
        </div>
      )
    }
  ];
  const howToUseTableData = [
    {
      key: "listType",
      name: "listType",
      description: "파일 목록 표시 타입",
      type: (
        <>
          <Tag>text</Tag> ｜ <Tag>thumbnail</Tag> ｜ <Tag>card</Tag> ｜{" "}
          <Tag>none</Tag>
        </>
      ),
      default: <Tag>text</Tag>
    },
    {
      key: "ext",
      name: "ext",
      description: "허용할 파일 확장자",
      type: "string[]",
      default: "-"
    },
    {
      key: "multiple",
      name: "multiple",
      description: "다중 파일 업로드 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "maxCount",
      name: "maxCount",
      description: "최대 파일 개수",
      type: "number",
      default: "-"
    },
    {
      key: "maxFileSize",
      name: "maxFileSize",
      description: "최대 파일 크기 (bytes)",
      type: "number",
      default: "-"
    },
    {
      key: "disabled",
      name: "disabled",
      description: "비활성화 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "fileList",
      name: "fileList",
      description: "파일 목록",
      type: "File[]",
      default: "[]"
    },
    {
      key: "showUploadList",
      name: "showUploadList",
      description: "파일 목록 표시 여부",
      type: "boolean",
      default: "true"
    },
    {
      key: "onChange",
      name: "onChange",
      description: "파일 변경 시 호출되는 함수",
      type: "(files: File | File[]) => void",
      default: "() => {}"
    },
    {
      key: "onRemove",
      name: "onRemove",
      description: "파일 제거 시 호출되는 함수",
      type: "(files: File[]) => void",
      default: "-"
    },
    {
      key: "onDrag",
      name: "onDrag",
      description: "드래그 상태 변경 시 호출되는 함수",
      type: "(isDragging: boolean) => void",
      default: "-"
    },
    {
      key: "listColorType",
      name: "listColorType",
      description: "파일 목록 색상 타입",
      type: "string",
      default: "default"
    },
    {
      key: "listErrorColorType",
      name: "listErrorColorType",
      description: "파일 목록 에러 색상 타입",
      type: "string",
      default: "red"
    },
    {
      key: "listHoverColorType",
      name: "listHoverColorType",
      description: "파일 목록 호버 색상 타입",
      type: "string",
      default: "sky"
    },
    {
      key: "listDeleteColorType",
      name: "listDeleteColorType",
      description: "파일 목록 삭제 색상 타입",
      type: "string",
      default: "coral"
    },
    {
      key: "listDirection",
      name: "listDirection",
      description: "파일 목록 방향",
      type: (
        <>
          <Tag>row</Tag> ｜ <Tag>column</Tag>
        </>
      ),
      default: <Tag>column</Tag>
    },
    {
      key: "thumbnailSize",
      name: "thumbnailSize",
      description: "썸네일 크기",
      type: "number",
      default: "50"
    },
    {
      key: "cardSize",
      name: "cardSize",
      description: "카드 크기",
      type: "number",
      default: "200"
    },
    {
      key: "drag",
      name: "drag",
      description: "드래그 앤 드롭 활성화 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "className",
      name: "className",
      description: "추가 클래스명",
      type: "string",
      default: '""'
    },
    {
      key: "ariaLabel",
      name: "ariaLabel",
      description: "ARIA 라벨",
      type: "string",
      default: "-"
    },
    {
      key: "role",
      name: "role",
      description: "ARIA 역할",
      type: "string",
      default: "button"
    }
  ];

  return (
    <Frame
      component={{
        name,
        description,
        IMPORT_COMMAND,
        whenToUse,
        examples,
        howToUseTableData
      }}
      grid={true}
      isMobile={isMobile}
    />
  );
}
