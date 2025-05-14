import { Tag } from "sud-ui";

export const animationExamples = [
  {
    title: "Flash",
    description: (
      <>
        <Tag>sud-hover-[1-10]</Tag> 클래스를 사용하여 밝기가 잠시 변하는 효과를
        적용할 수 있습니다.
      </>
    ),
    className: "sud-hover-",
    jscode: `import { Card, Avatar, Radio, Typography } from "sud-ui";
import { useState } from "react";

function FlashExample() {
  const [selectedStage, setSelectedStage] = useState(4);

  return (
    <div className="flex flex-col gap-10 item-cen jus-cen">
      <Card
        style={{ width: "100%" }}
        shadow="none"
        title={
          <div className="flex jus-cen">
            <Typography pretendard="B" size="lg">
              단계 선택
            </Typography>
          </div>
        }
      >
        <Radio.Group
          value={selectedStage}
          onChange={setSelectedStage}
          cols={5}
          direction="horizontal"
          options={Array.from({ length: 10 }, (_, index) => ({
            value: index + 1,
            label: \`\${index + 1}\`
          }))}
        />
      </Card>
      <div className="flex flex-col item-cen jus-cen pd-20 gap-10">
        <div
          className={\`sud-hover-\${selectedStage}\`}
          style={{ borderRadius: "50%" }}
        >
          <Avatar />
        </div>
        <Typography as="p" pretendard="B" size="lg">
          Hover me!
        </Typography>
      </div>
    </div>
  );
}`,
    tscode: `import { Card, Avatar, Radio, Typography } from "sud-ui";
import { useState } from "react";

const FlashExample: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState(4);

  return (
    <div className="flex flex-col gap-10 item-cen jus-cen">
      <Card
        style={{ width: "100%" }}
        shadow="none"
        title={
          <div className="flex jus-cen">
            <Typography pretendard="B" size="lg">
              단계 선택
            </Typography>
          </div>
        }
      >
        <Radio.Group
          value={selectedStage}
          onChange={setSelectedStage}
          cols={5}
          direction="horizontal"
          options={Array.from({ length: 10 }, (_, index) => ({
            value: index + 1,
            label: \`\${index + 1}\`
          }))}
        />
      </Card>
      <div className="flex flex-col item-cen jus-cen pd-20 gap-10">
        <div
          className={\`sud-hover-\${selectedStage}\`}
          style={{ borderRadius: "50%" }}
        >
          <Avatar />
        </div>
        <Typography as="p" pretendard="B" size="lg">
          Hover me!
        </Typography>
      </div>
    </div>
  );
};`
  },
  {
    title: "Scale",
    description: (
      <>
        <Tag>hover-scale-[1-10]</Tag> 클래스를 사용하여 호버 시 크기 변화를
        적용할 수 있습니다.
      </>
    ),
    className: "hover-scale-",
    jscode: `import { Card, Avatar, Radio, Typography } from "sud-ui";
import { useState } from "react";

function ScaleExample() {
  const [selectedStage, setSelectedStage] = useState(4);

  return (
    <div className="flex flex-col gap-10 item-cen jus-cen">
      <Card
        style={{ width: "100%" }}
        shadow="none"
        title={
          <div className="flex jus-cen">
            <Typography pretendard="B" size="lg">
              단계 선택
            </Typography>
          </div>
        }
      >
        <Radio.Group
          value={selectedStage}
          onChange={setSelectedStage}
          cols={5}
          direction="horizontal"
          options={Array.from({ length: 10 }, (_, index) => ({
            value: index + 1,
            label: \`\${index + 1}\`
          }))}
        />
      </Card>
      <div className="flex flex-col item-cen jus-cen pd-20 gap-10">
        <div
          className={\`hover-scale-\${selectedStage}\`}
          style={{ borderRadius: "50%" }}
        >
          <Avatar />
        </div>
        <Typography as="p" pretendard="B" size="lg">
          Hover me!
        </Typography>
      </div>
    </div>
  );
}`,
    tscode: `import { Card, Avatar, Radio, Typography } from "sud-ui";
import { useState } from "react";

const ScaleExample: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState(4);

  return (
    <div className="flex flex-col gap-10 item-cen jus-cen">
      <Card
        style={{ width: "100%" }}
        shadow="none"
        title={
          <div className="flex jus-cen">
            <Typography pretendard="B" size="lg">
              단계 선택
            </Typography>
          </div>
        }
      >
        <Radio.Group
          value={selectedStage}
          onChange={setSelectedStage}
          cols={5}
          direction="horizontal"
          options={Array.from({ length: 10 }, (_, index) => ({
            value: index + 1,
            label: \`\${index + 1}\`
          }))}
        />
      </Card>
      <div className="flex flex-col item-cen jus-cen pd-20 gap-10">
        <div
          className={\`hover-scale-\${selectedStage}\`}
          style={{ borderRadius: "50%" }}
        >
          <Avatar />
        </div>
        <Typography as="p" pretendard="B" size="lg">
          Hover me!
        </Typography>
      </div>
    </div>
  );
};`
  },
  {
    title: "Pulse",
    description: (
      <>
        <Tag>hover-pulse-[1-10]</Tag> 클래스를 사용하여 호버 시 펄스 효과를
        적용할 수 있습니다.
      </>
    ),
    className: "hover-pulse-",
    jscode: `import { Card, Avatar, Radio, Typography } from "sud-ui";
import { useState } from "react";

function PulseExample() {
  const [selectedStage, setSelectedStage] = useState(4);

  return (
    <div className="flex flex-col gap-10 item-cen jus-cen">
      <Card
        style={{ width: "100%" }}
        shadow="none"
        title={
          <div className="flex jus-cen">
            <Typography pretendard="B" size="lg">
              단계 선택
            </Typography>
          </div>
        }
      >
        <Radio.Group
          value={selectedStage}
          onChange={setSelectedStage}
          cols={5}
          direction="horizontal"
          options={Array.from({ length: 10 }, (_, index) => ({
            value: index + 1,
            label: \`\${index + 1}\`
          }))}
        />
      </Card>
      <div className="flex flex-col item-cen jus-cen pd-20 gap-10">
        <div
          className={\`hover-pulse-\${selectedStage}\`}
          style={{ borderRadius: "50%" }}
        >
          <Avatar />
        </div>
        <Typography as="p" pretendard="B" size="lg">
          Hover me!
        </Typography>
      </div>
    </div>
  );
}`,
    tscode: `import { Card, Avatar, Radio, Typography } from "sud-ui";
import { useState } from "react";

const PulseExample: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState(4);

  return (
    <div className="flex flex-col gap-10 item-cen jus-cen">
      <Card
        style={{ width: "100%" }}
        shadow="none"
        title={
          <div className="flex jus-cen">
            <Typography pretendard="B" size="lg">
              단계 선택
            </Typography>
          </div>
        }
      >
        <Radio.Group
          value={selectedStage}
          onChange={setSelectedStage}
          cols={5}
          direction="horizontal"
          options={Array.from({ length: 10 }, (_, index) => ({
            value: index + 1,
            label: \`\${index + 1}\`
          }))}
        />
      </Card>
      <div className="flex flex-col item-cen jus-cen pd-20 gap-10">
        <div
          className={\`hover-pulse-\${selectedStage}\`}
          style={{ borderRadius: "50%" }}
        >
          <Avatar />
        </div>
        <Typography as="p" pretendard="B" size="lg">
          Hover me!
        </Typography>
      </div>
    </div>
  );
};`
  },
  {
    title: "Bounce",
    description: (
      <>
        <Tag>hover-bounce-[1-10]</Tag>클래스를 사용하여 호버 시 위아래로 튀는
        효과를 적용할 수 있습니다.
      </>
    ),
    className: "hover-bounce-",
    jscode: `import { Card, Avatar, Radio, Typography } from "sud-ui";
import { useState } from "react";

function BounceExample() {
  const [selectedStage, setSelectedStage] = useState(4);

  return (
    <div className="flex flex-col gap-10 item-cen jus-cen">
      <Card
        style={{ width: "100%" }}
        shadow="none"
        title={
          <div className="flex jus-cen">
            <Typography pretendard="B" size="lg">
              단계 선택
            </Typography>
          </div>
        }
      >
        <Radio.Group
          value={selectedStage}
          onChange={setSelectedStage}
          cols={5}
          direction="horizontal"
          options={Array.from({ length: 10 }, (_, index) => ({
            value: index + 1,
            label: \`\${index + 1}\`
          }))}
        />
      </Card>
      <div className="flex flex-col item-cen jus-cen pd-20 gap-10">
        <div
          className={\`hover-bounce-\${selectedStage}\`}
          style={{ borderRadius: "50%" }}
        >
          <Avatar />
        </div>
        <Typography as="p" pretendard="B" size="lg">
          Hover me!
        </Typography>
      </div>
    </div>
  );
}`,
    tscode: `import { Card, Avatar, Radio, Typography } from "sud-ui";
import { useState } from "react";

const BounceExample: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState(4);

  return (
    <div className="flex flex-col gap-10 item-cen jus-cen">
      <Card
        style={{ width: "100%" }}
        shadow="none"
        title={
          <div className="flex jus-cen">
            <Typography pretendard="B" size="lg">
              단계 선택
            </Typography>
          </div>
        }
      >
        <Radio.Group
          value={selectedStage}
          onChange={setSelectedStage}
          cols={5}
          direction="horizontal"
          options={Array.from({ length: 10 }, (_, index) => ({
            value: index + 1,
            label: \`\${index + 1}\`
          }))}
        />
      </Card>
      <div className="flex flex-col item-cen jus-cen pd-20 gap-10">
        <div
          className={\`hover-bounce-\${selectedStage}\`}
          style={{ borderRadius: "50%" }}
        >
          <Avatar />
        </div>
        <Typography as="p" pretendard="B" size="lg">
          Hover me!
        </Typography>
      </div>
    </div>
  );
};`
  },
  {
    title: "Shake",
    description: (
      <>
        <Tag>hover-shake-[1-10]</Tag>클래스를 사용하여 호버 시 좌우로 흔들리는
        효과를 적용할 수 있습니다.
      </>
    ),
    className: "hover-shake-",
    jscode: `import { Card, Avatar, Radio, Typography } from "sud-ui";
import { useState } from "react";

function ShakeExample() {
  const [selectedStage, setSelectedStage] = useState(4);

  return (
    <div className="flex flex-col gap-10 item-cen jus-cen">
      <Card
        style={{ width: "100%" }}
        shadow="none"
        title={
          <div className="flex jus-cen">
            <Typography pretendard="B" size="lg">
              단계 선택
            </Typography>
          </div>
        }
      >
        <Radio.Group
          value={selectedStage}
          onChange={setSelectedStage}
          cols={5}
          direction="horizontal"
          options={Array.from({ length: 10 }, (_, index) => ({
            value: index + 1,
            label: \`\${index + 1}\`
          }))}
        />
      </Card>
      <div className="flex flex-col item-cen jus-cen pd-20 gap-10">
        <div
          className={\`hover-shake-\${selectedStage}\`}
          style={{ borderRadius: "50%" }}
        >
          <Avatar />
        </div>
        <Typography as="p" pretendard="B" size="lg">
          Hover me!
        </Typography>
      </div>
    </div>
  );
}`,
    tscode: `import { Card, Avatar, Radio, Typography } from "sud-ui";
import { useState } from "react";

const ShakeExample: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState(4);

  return (
    <div className="flex flex-col gap-10 item-cen jus-cen">
      <Card
        style={{ width: "100%" }}
        shadow="none"
        title={
          <div className="flex jus-cen">
            <Typography pretendard="B" size="lg">
              단계 선택
            </Typography>
          </div>
        }
      >
        <Radio.Group
          value={selectedStage}
          onChange={setSelectedStage}
          cols={5}
          direction="horizontal"
          options={Array.from({ length: 10 }, (_, index) => ({
            value: index + 1,
            label: \`\${index + 1}\`
          }))}
        />
      </Card>
      <div className="flex flex-col item-cen jus-cen pd-20 gap-10">
        <div
          className={\`hover-shake-\${selectedStage}\`}
          style={{ borderRadius: "50%" }}
        >
          <Avatar />
        </div>
        <Typography as="p" pretendard="B" size="lg">
          Hover me!
        </Typography>
      </div>
    </div>
  );
};`
  },
  {
    title: "Shadow",
    description: (
      <>
        <Tag>hover-shadow-[1-10]</Tag>클래스를 사용하여 호버 시 그림자 효과를
        적용할 수 있습니다.
      </>
    ),
    className: "hover-shadow-",
    jscode: `import { Card, Avatar, Radio, Typography } from "sud-ui";
import { useState } from "react";

function ShadowExample() {
  const [selectedStage, setSelectedStage] = useState(4);

  return (
    <div className="flex flex-col gap-10 item-cen jus-cen">
      <Card
        style={{ width: "100%" }}
        shadow="none"
        title={
          <div className="flex jus-cen">
            <Typography pretendard="B" size="lg">
              단계 선택
            </Typography>
          </div>
        }
      >
        <Radio.Group
          value={selectedStage}
          onChange={setSelectedStage}
          cols={5}
          direction="horizontal"
          options={Array.from({ length: 10 }, (_, index) => ({
            value: index + 1,
            label: \`\${index + 1}\`
          }))}
        />
      </Card>
      <div className="flex flex-col item-cen jus-cen pd-20 gap-10">
        <div
          className={\`hover-shadow-\${selectedStage}\`}
          style={{ borderRadius: "50%" }}
        >
          <Avatar />
        </div>
        <Typography as="p" pretendard="B" size="lg">
          Hover me!
        </Typography>
      </div>
    </div>
  );
}`,
    tscode: `import { Card, Avatar, Radio, Typography } from "sud-ui";
import { useState } from "react";

const ShadowExample: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState(4);

  return (
    <div className="flex flex-col gap-10 item-cen jus-cen">
      <Card
        style={{ width: "100%" }}
        shadow="none"
        title={
          <div className="flex jus-cen">
            <Typography pretendard="B" size="lg">
              단계 선택
            </Typography>
          </div>
        }
      >
        <Radio.Group
          value={selectedStage}
          onChange={setSelectedStage}
          cols={5}
          direction="horizontal"
          options={Array.from({ length: 10 }, (_, index) => ({
            value: index + 1,
            label: \`\${index + 1}\`
          }))}
        />
      </Card>
      <div className="flex flex-col item-cen jus-cen pd-20 gap-10">
        <div
          className={\`hover-shadow-\${selectedStage}\`}
          style={{ borderRadius: "50%" }}
        >
          <Avatar />
        </div>
        <Typography as="p" pretendard="B" size="lg">
          Hover me!
        </Typography>
      </div>
    </div>
  );
};`
  }
];
