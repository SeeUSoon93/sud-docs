"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { useLang } from "../../_lib/context/langContext";
import {
  Tag,
  Radio,
  Card,
  Upload,
  Button,
  Typography,
  Image,
  DotSpinner
} from "sud-ui";

import React, { useState } from "react";
import { Plus, TrashOutline, Upload as UploadIcon } from "sud-icons";
import { tagRender } from "../../_lib/components/common/render";
import { tagColorTypeTags } from "../../_lib/components/common/defaultType";

export default function UploadPage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();

  const name = "Upload";
  const description = (
    <>
      {lang === "ko"
        ? "파일 업로드 컴포넌트입니다."
        : "The file upload component."}
    </>
  );

  const IMPORT_COMMAND = "import { Upload } from 'sud-ui';";

  const whenToUse =
    lang === "ko"
      ? [
          "하나 이상의 파일을 업로드할 때.",
          "드래그 앤 드롭 방식으로 파일을 업로드할 때."
        ]
      : [
          "When uploading one or more files.",
          "When uploading files using the drag and drop method."
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
      description: lang === "ko" ? "기본적인 사용 방법입니다." : "Basic usage.",
      jscode: `<Upload>
  <Button icon={<UploadIcon size={16} />}>File Upload</Button>
</Upload>`,
      tscode: `<Upload>
  <Button icon={<UploadIcon size={16} />}>File Upload</Button>
</Upload>`,
      render: (
        <Upload>
          <Button icon={<UploadIcon size={16} />}>File Upload</Button>
        </Upload>
      )
    },
    {
      title: "Multiple Files",
      description:
        lang === "ko"
          ? "여러 파일을 동시에 업로드할 수 있습니다. maxCount 속성을 통해 최대 업로드 가능한 파일 개수를 제한할 수 있습니다."
          : "You can upload multiple files at the same time. You can limit the maximum number of files that can be uploaded using the maxCount property.",
      jscode: `<Upload multiple maxCount={3}>
  <Button icon={<UploadIcon size={16} />}>Multiple File Upload</Button>
</Upload>`,
      tscode: `<Upload multiple maxCount={3}>
  <Button icon={<UploadIcon size={16} />}>Multiple File Upload</Button>
</Upload>`,
      render: (
        <Upload multiple maxCount={3}>
          <Button icon={<UploadIcon size={16} />}>Multiple File Upload</Button>
        </Upload>
      )
    },
    {
      title: "Accept Specific File Types",
      description:
        lang === "ko"
          ? "ext 속성을 사용하여 특정 파일 형식만 업로드할 수 있습니다. 지원하지 않는 파일 형식은 업로드가 제한됩니다."
          : "You can upload only specific file types using the ext property. Unsupported file types are not allowed.",
      jscode: `<Upload multiple ext={["png", "jpg"]}>
  <Button icon={<UploadIcon size={16} />}>Specific File Type Upload</Button>
</Upload>`,
      tscode: `<Upload multiple ext={["png", "jpg"]}>
  <Button icon={<UploadIcon size={16} />}>Specific File Type Upload</Button>
</Upload>`,
      render: (
        <Upload multiple ext={["png", "jpg"]}>
          <Button icon={<UploadIcon size={16} />}>
            Specific File Type Upload
          </Button>
        </Upload>
      )
    },
    {
      title: "File Size Limit",
      description:
        lang === "ko"
          ? "maxFileSize 속성을 통해 업로드 가능한 파일의 최대 크기를 제한할 수 있습니다. 제한된 크기를 초과하는 파일은 업로드가 제한됩니다."
          : "You can limit the maximum file size that can be uploaded using the maxFileSize property. Files exceeding the restricted size are not allowed.",
      jscode: `<Upload multiple maxFileSize={1024 * 1024 * 5}>
  <Button icon={<UploadIcon size={16} />}>File Size Limit</Button>
</Upload>`,
      tscode: `<Upload multiple maxFileSize={1024 * 1024 * 5}>
  <Button icon={<UploadIcon size={16} />}>File Size Limit</Button>
</Upload>`,
      render: (
        <Upload multiple maxFileSize={1024 * 1024 * 5}>
          <Button icon={<UploadIcon size={16} />}>File Size Limit</Button>
        </Upload>
      )
    },
    {
      title: "Disabled",
      description:
        lang === "ko"
          ? "disabled 속성을 통해 업로드 컴포넌트를 비활성화할 수 있습니다. 비활성화 상태에서는 파일 업로드가 불가능합니다."
          : "You can disable the upload component using the disabled property. In the disabled state, file upload is not possible.",
      jscode: `<Upload disabled>
  <Button icon={<UploadIcon size={16} />} disabled>
    Disabled
  </Button>
</Upload>`,
      tscode: `<Upload disabled>
  <Button icon={<UploadIcon size={16} />} disabled>
    Disabled
  </Button>
</Upload>`,
      render: (
        <Upload disabled>
          <Button icon={<UploadIcon size={16} />} disabled>
            Disabled
          </Button>
        </Upload>
      )
    },
    {
      title: "List Type",
      description:
        lang === "ko"
          ? "listType 속성을 통해 업로드된 파일 목록의 표시 방식을 설정할 수 있습니다. text, thumbnail, card, none 중 선택 가능합니다."
          : "You can set the display method of the uploaded file list using the listType property. You can select from text, thumbnail, card, or none.",
      jscode: `<Upload
  listType="text"
  multiple
  listDirection="column"
>
  <Button icon={<UploadIcon size={16} />}>File Upload</Button>
</Upload>`,
      tscode: `<Upload
  listType="text"
  multiple
  listDirection="column"
>
  <Button icon={<UploadIcon size={16} />}>File Upload</Button>
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
            <Button icon={<UploadIcon size={16} />}>File Upload</Button>
          </Upload>
        </div>
      )
    },
    {
      title: "Drag & Drop",
      description:
        lang === "ko"
          ? "drag 속성을 통해 드래그 앤 드롭 방식으로 파일을 업로드 할 수 있습니다. 파일을 드래그하여 영역에 드롭하면 자동으로 업로드됩니다."
          : "You can upload files using the drag and drop method by setting the drag property. When you drag and drop a file into the area, it will be automatically uploaded.",
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
        You can upload files using the drag and drop method.
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
        You can upload files using the drag and drop method.
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
                  You can upload files using the drag and drop method.
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
        lang === "ko"
          ? "프로필 사진 업로드를 위한 커스텀 예제입니다. 이미지 업로드 시 미리보기를 제공하고, 업로드 전/후의 상태를 구분하여 표시합니다."
          : "This is a custom example for uploading a profile picture. When uploading an image, it provides a preview and displays the state before and after uploading.",
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
        lang === "ko"
          ? "파일 업로드 중 로딩 상태를 표시하는 예제입니다. 업로드 진행 중에는 로딩 스피너가 표시되고, 완료 후에는 업로드된 이미지가 표시됩니다."
          : "This is an example of displaying a loading state during file upload. When uploading, the loading spinner is displayed, and after completion, the uploaded image is displayed.",
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
      title: "File List Customization",
      description:
        lang === "ko"
          ? "업로드된 파일 목록을 커스텀하게 표시하는 예제입니다. 파일 이름, 크기 정보를 표시하고 개별 파일 삭제 기능을 제공합니다."
          : "This is an example of customizing the uploaded file list. It displays the file name, size information, and provides a feature to delete individual files.",
      jscode: `<Upload
  listType="none"
  onChange={(files) => {
    setFileList(files);
  }}
  multiple
>
  <Button icon={<UploadIcon size={16} />}>File Upload</Button>
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
        Delete
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
  <Button icon={<UploadIcon size={16} />}>File Upload</Button>
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
        Delete
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
            <Button icon={<UploadIcon size={16} />}>File Upload</Button>
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
                  Delete
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
      description:
        lang === "ko" ? "파일 목록 표시 타입" : "File List Display Type",
      type: tagRender(["text", "thumbnail", "card", "none"]),
      default: <Tag>text</Tag>
    },
    {
      key: "ext",
      name: "ext",
      description:
        lang === "ko" ? "허용할 파일 확장자" : "Allowed File Extensions",
      type: "string[]",
      default: "-"
    },
    {
      key: "multiple",
      name: "multiple",
      description:
        lang === "ko" ? "다중 파일 업로드 여부" : "Multiple File Upload",
      type: "boolean",
      default: "false"
    },
    {
      key: "maxCount",
      name: "maxCount",
      description: lang === "ko" ? "최대 파일 개수" : "Maximum File Count",
      type: "number",
      default: "-"
    },
    {
      key: "maxFileSize",
      name: "maxFileSize",
      description:
        lang === "ko" ? "최대 파일 크기 (bytes)" : "Maximum File Size (bytes)",
      type: "number",
      default: "-"
    },
    {
      key: "disabled",
      name: "disabled",
      description: lang === "ko" ? "비활성화 여부" : "Disabled",
      type: "boolean",
      default: "false"
    },
    {
      key: "fileList",
      name: "fileList",
      description: lang === "ko" ? "파일 목록" : "File List",
      type: "File[]",
      default: "[]"
    },
    {
      key: "showUploadList",
      name: "showUploadList",
      description: lang === "ko" ? "파일 목록 표시 여부" : "Show File List",
      type: "boolean",
      default: "true"
    },
    {
      key: "onChange",
      name: "onChange",
      description:
        lang === "ko"
          ? "파일 변경 시 호출되는 함수"
          : "Function called when the file changes",
      type: "(files: File | File[]) => void",
      default: "() => {}"
    },
    {
      key: "onRemove",
      name: "onRemove",
      description:
        lang === "ko"
          ? "파일 제거 시 호출되는 함수"
          : "Function called when the file is removed",
      type: "(files: File[]) => void",
      default: "-"
    },
    {
      key: "onDrag",
      name: "onDrag",
      description:
        lang === "ko"
          ? "드래그 상태 변경 시 호출되는 함수"
          : "Function called when the drag state changes",
      type: "(isDragging: boolean) => void",
      default: "-"
    },
    {
      key: "listColorType",
      name: "listColorType",
      description:
        lang === "ko" ? "파일 목록 색상 타입" : "File List Color Type",
      type: tagColorTypeTags,
      default: <Tag>default</Tag>
    },
    {
      key: "listErrorColorType",
      name: "listErrorColorType",
      description:
        lang === "ko"
          ? "파일 목록 에러 색상 타입"
          : "File List Error Color Type",
      type: lang === "ko" ? "위와 동일" : "Same as above",
      default: <Tag>red</Tag>
    },
    {
      key: "listHoverColorType",
      name: "listHoverColorType",
      description:
        lang === "ko"
          ? "파일 목록 호버 색상 타입"
          : "File List Hover Color Type",
      type: lang === "ko" ? "위와 동일" : "Same as above",
      default: <Tag>sky</Tag>
    },
    {
      key: "listDeleteColorType",
      name: "listDeleteColorType",
      description:
        lang === "ko"
          ? "파일 목록 삭제 색상 타입"
          : "File List Delete Color Type",
      type: lang === "ko" ? "위와 동일" : "Same as above",
      default: <Tag>coral</Tag>
    },
    {
      key: "listDirection",
      name: "listDirection",
      description: lang === "ko" ? "파일 목록 방향" : "File List Direction",
      type: tagRender(["row", "column"]),
      default: <Tag>column</Tag>
    },
    {
      key: "thumbnailSize",
      name: "thumbnailSize",
      description: lang === "ko" ? "썸네일 크기" : "Thumbnail Size",
      type: "number",
      default: "50"
    },
    {
      key: "cardSize",
      name: "cardSize",
      description: lang === "ko" ? "카드 크기" : "Card Size",
      type: "number",
      default: "200"
    },
    {
      key: "drag",
      name: "drag",
      description:
        lang === "ko"
          ? "드래그 앤 드롭 활성화 여부"
          : "Drag and Drop Activation",
      type: "boolean",
      default: "false"
    },
    {
      key: "className",
      name: "className",
      description: lang === "ko" ? "추가 클래스명" : "Additional Class Name",
      type: "string",
      default: '""'
    },
    {
      key: "ariaLabel",
      name: "ariaLabel",
      description: lang === "ko" ? "ARIA 라벨" : "ARIA Label",
      type: "string",
      default: "-"
    },
    {
      key: "role",
      name: "role",
      description: lang === "ko" ? "ARIA 역할" : "ARIA Role",
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
      lang={lang}
    />
  );
}
