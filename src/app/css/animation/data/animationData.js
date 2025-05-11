import { Tag } from "sud-ui";

export const animationExamples = [
  {
    title: "Flash",
    description: (
      <>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          sud-hover
        </Tag>
        클래스를 사용하여 밝기가 잠시 변하는 효과를 적용할 수 있습니다.
      </>
    ),
    className: "sud-hover",
    jscode: `import { Card, Avatar } from "sud-ui";

function FlashExample() {
  return (
    <div className="flex flex-col gap-10 item-cen jus-cen">
      <Card style={{ width: "100%" }}>
        <div className="flex flex-col item-cen pd-20">
          <div className="sud-hover">
            <Avatar />
          </div>
        </div>
      </Card>
    </div>
  );
}`,
    tscode: `import { Card, Avatar } from "sud-ui";

const FlashExample: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 item-cen jus-cen">
      <Card style={{ width: "100%" }}>
        <div className="flex flex-col item-cen pd-20">
          <div className="sud-hover">
            <Avatar />
          </div>
        </div>
      </Card>
    </div>
  );
};`
  },
  {
    title: "Scale",
    description: (
      <>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          hover-scale-95
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          hover-scale-100
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          hover-scale-105
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          hover-scale-110
        </Tag>
        클래스를 사용하여 호버 시 크기 변화를 적용할 수 있습니다.
      </>
    ),
    className: "hover-scale-105",
    jscode: `import { Card, Avatar } from "sud-ui";

function ScaleExample() {
  return (
    <div className="flex flex-col gap-10 item-cen jus-cen">
      <Card style={{ width: "100%" }}>
        <div className="flex flex-col item-cen pd-20">
          <div className="hover-scale-105">
            <Avatar />
          </div>
        </div>
      </Card>
    </div>
  );
}`,
    tscode: `import { Card, Avatar } from "sud-ui";

const ScaleExample: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 item-cen jus-cen">
      <Card style={{ width: "100%" }}>
        <div className="flex flex-col item-cen pd-20">
          <div className="hover-scale-105">
            <Avatar />
          </div>
        </div>
      </Card>
    </div>
  );
};`
  },
  {
    title: "Bounce",
    description: (
      <>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          hover-bounce
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          hover-bounce-small
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          hover-bounce-big
        </Tag>
        클래스를 사용하여 호버 시 위아래로 튀는 효과를 적용할 수 있습니다.
      </>
    ),
    className: "hover-bounce",
    jscode: `import { Card, Avatar } from "sud-ui";

function BounceExample() {
  return (
    <div className="flex flex-col gap-10 item-cen jus-cen">
      <Card style={{ width: "100%" }}>
        <div className="flex flex-col item-cen pd-20">
          <div className="hover-bounce">
            <Avatar />
          </div>
        </div>
      </Card>
    </div>
  );
}`,
    tscode: `import { Card, Avatar } from "sud-ui";

const BounceExample: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 item-cen jus-cen">
      <Card style={{ width: "100%" }}>
        <div className="flex flex-col item-cen pd-20">
          <div className="hover-bounce">
            <Avatar />
          </div>
        </div>
      </Card>
    </div>
  );
};`
  },
  {
    title: "Shake",
    description: (
      <>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          hover-shake
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          hover-shake-small
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          hover-shake-big
        </Tag>
        클래스를 사용하여 호버 시 좌우로 흔들리는 효과를 적용할 수 있습니다.
      </>
    ),
    className: "hover-shake",
    jscode: `import { Card, Avatar } from "sud-ui";

function ShakeExample() {
  return (
    <div className="flex flex-col gap-10 item-cen jus-cen">
      <Card style={{ width: "100%" }}>
        <div className="flex flex-col item-cen pd-20">
          <div className="hover-shake">
            <Avatar />
          </div>
        </div>
      </Card>
    </div>
  );
}`,
    tscode: `import { Card, Avatar } from "sud-ui";

const ShakeExample: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 item-cen jus-cen">
      <Card style={{ width: "100%" }}>
        <div className="flex flex-col item-cen pd-20">
          <div className="hover-shake">
            <Avatar />
          </div>
        </div>
      </Card>
    </div>
  );
};`
  },
  {
    title: "Shadow",
    description: (
      <>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          hover-shadow-sm
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          hover-shadow-md
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          hover-shadow-lg
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          hover-shadow-light
        </Tag>
        <Tag style={{ display: "inline-block", margin: "0 4px" }}>
          hover-shadow-heavy
        </Tag>
        클래스를 사용하여 호버 시 그림자 효과를 적용할 수 있습니다.
      </>
    ),
    className: "hover-shadow-md",
    jscode: `import { Card, Avatar } from "sud-ui";

function ShadowExample() {
  return (
    <div className="flex flex-col gap-10 item-cen jus-cen">
      <Card style={{ width: "100%" }}>
        <div className="flex flex-col item-cen pd-20">
          <div className="hover-shadow-md">
            <Avatar />
          </div>
        </div>
      </Card>
    </div>
  );
}`,
    tscode: `import { Card, Avatar } from "sud-ui";

const ShadowExample: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 item-cen jus-cen">
      <Card style={{ width: "100%" }}>
        <div className="flex flex-col item-cen pd-20">
          <div className="hover-shadow-md">
            <Avatar />
          </div>
        </div>
      </Card>
    </div>
  );
};`
  }
];
