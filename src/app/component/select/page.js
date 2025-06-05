"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { useLang } from "../../_lib/context/langContext";
import { Tag, Radio, Card, Select } from "sud-ui";

import React, { useState } from "react";
import { Search, TriangleDown } from "sud-icons";
import { tagRender } from "../../_lib/components/common/render";
import {
  borderTypeTags,
  defaultColorTypeTags,
  shadowTypeTags,
  shapeTypeTags
} from "../../_lib/components/common/defaultType";

export default function SelectPage() {
  const { isMobile } = useMobile();
  const { lang } = useLang();
  const [size, setSize] = useState("md");
  const [value, setValue] = useState("");
  const [sizeValue, setSizeValue] = useState("");
  const [disabledValue, setDisabledValue] = useState("");
  const [readOnlyValue, setReadOnlyValue] = useState("");
  const [clearableValue, setClearableValue] = useState("Try to Clear!");
  const [labelValue, setLabelValue] = useState("");
  const [underlineValue, setUnderlineValue] = useState("");
  const [errorValue, setErrorValue] = useState("");
  const [shape, setShape] = useState("rounded");
  const [colorValue, setColorValue] = useState("cool-gray");
  const [shapeValue, setShapeValue] = useState("");
  const [iconValue, setIconValue] = useState("");
  const [multiValue, setMultiValue] = useState("");

  const name = "Select";
  const description = (
    <>
      {lang === "ko"
        ? "선택사항을 드롭다운으로 보여주는 메뉴입니다."
        : "A menu that shows a dropdown of selectable options."}
    </>
  );

  const IMPORT_COMMAND = "import { Select } from 'sud-ui';";

  const whenToUse =
    lang === "ko"
      ? [
          "선택 옵션이 많을 때",
          "선택 옵션이 길어질 때",
          "입력과 선택이 필요한 경우"
        ]
      : [
          "When there are many select options.",
          "When the select options are long.",
          "When input and select are needed."
        ];

  const sizeOptions = [
    {
      label: "sm",
      value: "sm"
    },
    {
      label: "md",
      value: "md"
    },
    {
      label: "lg",
      value: "lg"
    }
  ];

  const shapeOptions = [
    {
      label: "rounded",
      value: "rounded"
    },
    {
      label: "square",
      value: "square"
    },
    {
      label: "capsule",
      value: "capsule"
    }
  ];

  const options = [
    {
      label: "Option 1",
      value: "option1"
    },
    {
      label: "Option 2",
      value: "option2"
    },
    {
      label: "Option 3",
      value: "option3"
    }
  ];

  const colorOptions = [
    {
      label: "cool-gray",
      value: "cool-gray"
    },
    {
      label: "forest",
      value: "forest"
    },
    {
      label: "volcano",
      value: "volcano"
    },
    {
      label: "gold",
      value: "gold"
    },
    {
      label: "cerulean",
      value: "cerulean"
    }
  ];

  const examples = [
    {
      title: "Basic Usage",
      description: lang === "ko" ? "기본적인 사용 방법입니다." : "Basic usage.",
      render: (
        <>
          <Select
            options={options}
            value={value}
            onChange={(e) => setValue(e)}
            placeholder="Select an option."
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';

const BasicSelect = () => {
  const [value, setValue] = useState("");

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ];

  return (
    <Select
      options={options}
      value={value}
      onChange={(e) => setValue(e)}
      placeholder="Select an option."
    />
  );
};

export default BasicSelect;`,
      tscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';

interface Option {
  label: string;
  value: string;
}

const BasicSelect: React.FC = () => {
  const [value, setValue] = useState<string>("");

  const options: Option[] = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ];

  return (
    <Select
      options={options}
      value={value}
      onChange={(e) => setValue(e)}
      placeholder="Select an option."
    />
  );
};

export default BasicSelect;`
    },
    {
      title: "Size",
      description:
        lang === "ko"
          ? "Select 의 크기를 설정할 수 있습니다."
          : "Can set the size of the Select.",
      render: (
        <div className="flex flex-col gap-20">
          <Card style={{ width: "100%" }} shadow="none" colorType="sub">
            <div className="flex jus-cen w-100">
              <Radio.Group
                options={sizeOptions}
                direction="horizontal"
                value={size}
                onChange={setSize}
              />
            </div>
          </Card>
          <Select
            size={size}
            value={sizeValue}
            onChange={(e) => setSizeValue(e)}
            options={options}
            placeholder={`${size} size Select.`}
          />
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Select, Radio, Card } from 'sud-ui';

const SizeSelect = () => {
  const [size, setSize] = useState('md');
  const [value, setValue] = useState('');
  
  const sizeOptions = [
    { label: 'sm', value: 'sm' },
    { label: 'md', value: 'md' },
    { label: 'lg', value: 'lg' }
  ];

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ];

  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen w-100">
          <Radio.Group
            options={sizeOptions}
            direction="horizontal"
            value={size}
            onChange={setSize}
          />
        </div>
      </Card>
      <Select
          options={options}
        size={size}
        value={value}
        onChange={(e) => setValue(e)}
        options={options}
        placeholder={\`\${size} size Select.\`}
      />
    </div>
  );
};

export default SizeSelect;`,
      tscode: `import React, { useState } from 'react';
import { Select, Radio, Card } from 'sud-ui';

interface SizeOption {
  label: string;
  value: string;
}

const SizeSelect: React.FC = () => {
  const [size, setSize] = useState<string>('md');
  const [value, setValue] = useState<string>('');
  
  const sizeOptions: SizeOption[] = [
    { label: 'sm', value: 'sm' },
    { label: 'md', value: 'md' },
    { label: 'lg', value: 'lg' }
  ];

  const options: SizeOption[] = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ];

  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen w-100">
          <Radio.Group
            options={sizeOptions}
            direction="horizontal"
            value={size}
            onChange={setSize}
          />
        </div>
      </Card>
      <Select
          options={options}
        size={size}
        value={value}
        onChange={(e) => setValue(e)}
        options={options}
        placeholder={\`\${size} size Select.\`}
      />
    </div>
  );
};

export default SizeSelect;`
    },
    {
      title: "Disabled",
      description:
        lang === "ko"
          ? "disabled 속성을 추가하면 입력 필드가 비활성화됩니다."
          : "Can add the disabled property to make the input field inactive.",
      render: (
        <>
          <Select
            options={options}
            value={disabledValue}
            onChange={(e) => setDisabledValue(e)}
            disabled
            placeholder="Disabled Select."
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';

const DisabledSelect = () => {
  const [value, setValue] = useState("");

  return (
    <Select
      options={options}
      value={value}
      onChange={(e) => setValue(e)}
      disabled
      placeholder="Disabled Select."
    />
  );
};

export default DisabledSelect;`,
      tscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';

const DisabledSelect: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Select
      options={options}
      value={value}
      onChange={(e) => setValue(e)}
      disabled
      placeholder="Disabled Select."
    />
  );
};

export default DisabledSelect;`
    },
    {
      title: "Read Only",
      description:
        lang === "ko"
          ? "readOnly 속성을 추가하면 입력 필드가 읽기 전용으로 변경됩니다."
          : "Can add the readOnly property to make the input field read-only.",
      render: (
        <>
          <Select
            options={options}
            value={readOnlyValue}
            onChange={(e) => setReadOnlyValue(e)}
            readOnly
            placeholder="Read Only Select."
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';

const ReadOnlySelect = () => {
  const [value, setValue] = useState("");

  return (
    <Select
      options={options}
      value={value}
      onChange={(e) => setValue(e)}
      readOnly
      placeholder="Read Only Select."
    />
  );
};

export default ReadOnlySelect;`,
      tscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';

const ReadOnlySelect: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Select
      options={options}
      value={value}
      onChange={(e) => setValue(e)}
      readOnly
      placeholder="Read Only Select."
    />
  );
};

export default ReadOnlySelect;`
    },
    {
      title: "Searchable",
      description:
        lang === "ko"
          ? "Searchable 속성을 추가하면 입력 필드에 검색 기능을 추가할 수 있습니다."
          : "Can add the searchable property to add a search function to the input field.",
      render: (
        <Select options={options} searchable placeholder="Searchable Select." />
      ),
      jscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';

const SearchableSelect = () => {
  const [value, setValue] = useState("");

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" }
  ];

  return (
    <Select options={options} searchable placeholder="Searchable Select." />
  );
};

export default SearchableSelect;`,
      tscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';

const SearchableSelect: React.FC = () => {
  const [value, setValue] = useState("");

  const options: Option[] = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" }
  ];

  return (
    <Select options={options} searchable placeholder="Searchable Select." />
  );
};

export default SearchableSelect;`
    },
    {
      title: "Clearable",
      description:
        lang === "ko"
          ? "clearable 속성을 추가하면 입력 필드의 값을 지울 수 있습니다."
          : "Can add the clearable property to clear the value of the input field.",
      render: (
        <>
          <Select
            options={options}
            value={clearableValue}
            onChange={(e) => setClearableValue(e)}
            clearable
            placeholder="Clearable Select."
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';

const ClearableSelect = () => {
  const [value, setValue] = useState("Try to Clear!");

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" }
  ];

  return (
    <Select
      options={options}
      value={value}
      onChange={(e) => setValue(e)}
      clearable
      placeholder="Clearable Select."
    />
  );
};

export default ClearableSelect;`,
      tscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';

const ClearableSelect: React.FC = () => {
  const [value, setValue] = useState("Try to Clear!");

  const options: Option[] = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" }
  ];

  return (
    <Select
          options={options}
      value={value}
      onChange={(e) => setValue(e)}
      clearable
      placeholder="Clearable Select."
    />
  );
};

export default ClearableSelect;`
    },
    {
      title: "Label",
      description:
        lang === "ko"
          ? "label 속성을 추가하면 입력 필드의 라벨을 설정할 수 있습니다."
          : "Can add the label property to set the label of the input field.",
      render: (
        <>
          <Select
            options={options}
            value={labelValue}
            onChange={(e) => setLabelValue(e)}
            label="name"
            placeholder="Label Select."
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';

const LabelSelect = () => {
  const [value, setValue] = useState("");

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" }
  ];

  return (
    <Select
      options={options}
      value={value}
      onChange={(e) => setValue(e)}
      label="name"
      placeholder="Label Select."
    />
  );
};

export default LabelSelect;`,
      tscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';

const LabelSelect: React.FC = () => {
  const [value, setValue] = useState("");

  const options: Option[] = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" }
  ];

  return (
    <Select
      options={options}
      value={value}
      onChange={(e) => setValue(e)}
      label="name"
      placeholder="Label Select."
    />
  );
};

export default LabelSelect;`
    },
    {
      title: "Underline",
      description:
        lang === "ko"
          ? "밑줄 스타일의 입력 필드입니다."
          : "An input field with a line style.",
      render: (
        <>
          <Select
            value={underlineValue}
            onChange={(e) => setUnderlineValue(e)}
            underline
            options={options}
            shadow="none"
            placeholder="Underline Select."
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';

const UnderlineSelect = () => {
  const [value, setValue] = useState("");

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" }
  ];

  return (
    <Select
      options={options}
      value={value}
      onChange={(e) => setValue(e)}
      underline
      placeholder="Underline Select."
    />
  );
};

export default UnderlineSelect;`,
      tscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';

const UnderlineSelect: React.FC = () => {
  const [value, setValue] = useState("");

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" }
  ];

  return (
    <Select
      options={options}
      value={value}
      onChange={(e) => setValue(e)}
      underline
      placeholder="Underline Select."
    />
  );
};

export default UnderlineSelect;`
    },
    {
      title: "Error State",
      description:
        lang === "ko"
          ? "에러 상태와 메시지를 표시할 수 있습니다."
          : "Can display an error state and message.",
      render: (
        <>
          <Select
            options={options}
            value={errorValue}
            onChange={(e) => setErrorValue(e)}
            error={errorValue.length > 0}
            errorText="Error Message."
            placeholder="Error State Select."
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';

const ErrorSelect = () => {
  const [value, setValue] = useState("");

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" }
  ];

  return (
    <Select
      options={options}
      value={value}
      onChange={(e) => setValue(e)}
      error={value.length > 0}
      errorText="Error Message."
      placeholder="Error State Select."
    />
  );
};

export default ErrorSelect;`,
      tscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';

const ErrorSelect: React.FC = () => {
  const [value, setValue] = useState("");

  const options: Option[] = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" }
  ];

  return (
    <Select
      options={options}
      value={value}
      onChange={(e) => setValue(e)}
      error={value.length > 0}
      errorText="Error Message."
      placeholder="Error State Select."
    />
  );
};

export default ErrorSelect;`
    },
    {
      title: "Shape",
      description:
        lang === "ko"
          ? "입력 필드의 모서리 모양을 설정할 수 있습니다."
          : "Can set the shape of the input field.",
      render: (
        <div className="flex flex-col gap-20">
          <Card style={{ width: "100%" }} shadow="none" colorType="sub">
            <div className="flex jus-cen w-100">
              <Radio.Group
                options={shapeOptions}
                direction="horizontal"
                value={shape}
                onChange={setShape}
              />
            </div>
          </Card>
          <Select
            options={options}
            shape={shape}
            value={shapeValue}
            onChange={(e) => setShapeValue(e)}
            placeholder={`${shape} shape Select.`}
          />
        </div>
      ),
      jscode: `import React, { useState } from 'react';
import { Select, Radio, Card } from 'sud-ui';

const ShapeSelect = () => {
  const [shape, setShape] = useState('rounded');
  const [shapeValue, setShapeValue] = useState('');
  
  const shapeOptions = [
    { label: 'rounded', value: 'rounded' },
    { label: 'square', value: 'square' },
    { label: 'capsule', value: 'capsule' }
  ];

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" }
  ];

  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen w-100">
          <Radio.Group
            options={shapeOptions}
            direction="horizontal"
            value={shape}
            onChange={setShape}
          />
        </div>
      </Card>
      <Select
        options={options}
        shape={shape}
        value={shapeValue}
        onChange={(e) => setShapeValue(e)}
        placeholder={\`\${shape} shape Select.\`}
      />
    </div>
  );
};

export default ShapeSelect;`,
      tscode: `import React, { useState } from 'react';
import { Select, Radio, Card } from 'sud-ui';

interface ShapeOption {
  label: string;
  value: string;
}

const ShapeSelect: React.FC = () => {
  const [shape, setShape] = useState<string>('rounded');
  const [shapeValue, setShapeValue] = useState<string>('');
  
  const shapeOptions: ShapeOption[] = [
    { label: 'rounded', value: 'rounded' },
    { label: 'square', value: 'square' },
    { label: 'capsule', value: 'capsule' }
  ];

  const options: Option[] = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" }
  ];

  return (
    <div className="flex flex-col gap-20">
      <Card style={{ width: "100%" }} shadow="none" colorType="sub">
        <div className="flex jus-cen w-100">
          <Radio.Group
            options={shapeOptions}
            direction="horizontal"
            value={shape}
            onChange={setShape}
          />
        </div>
      </Card>
      <Select
        options={options}
        shape={shape}
        value={shapeValue}
        onChange={(e) => setShapeValue(e)}
        placeholder={\`\${shape} shape Select.\`}
      />
    </div>
  );
};

export default ShapeSelect;`
    },
    {
      title: "Color Customization",
      description:
        lang === "ko"
          ? "입력 필드의 색상을 커스텀할 수 있습니다."
          : "Can customize the color of the input field.",
      render: (
        <Select
          options={colorOptions}
          placeholder="Color Customization Select."
          value={colorValue}
          onChange={(e) => setColorValue(e)}
          color={`${colorValue}-8`}
          background={`${colorValue}-1`}
          borderColor={`${colorValue}-6`}
        />
      ),
      jscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';

const CustomColorSelect = () => {
  const [value, setValue] = useState("cool-gray");

  const options = [
    { label: "cool-gray", value: "cool-gray" },
    { label: "forest", value: "forest" },
    { label: "volcano", value: "volcano" },
    { label: "gold", value: "gold" },
    { label: "cerulean", value: "cerulean" }
  ];

  return (
    <Select
      options={options}
      placeholder="Color Customization Select."
      value={value}
      onChange={(e) => setValue(e)}
      color={\`\${colorValue}-8\`}
      background={\`\${colorValue}-1\`}
      borderColor={\`\${colorValue}-8\`}
    />
  );
};

export default CustomColorSelect;`,
      tscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';

const CustomColorSelect: React.FC = () => {
  const [value, setValue] = useState("cool-gray");

  const options = [
    { label: "cool-gray", value: "cool-gray" },
    { label: "forest", value: "forest" },
    { label: "volcano", value: "volcano" },
    { label: "gold", value: "gold" },
    { label: "cerulean", value: "cerulean" }
  ];

  return (
    <Select
      options={options}
      placeholder="Color Customization Select."
      value={value}
      onChange={(e) => setValue(e)}
      color={\`\${colorValue}-8\`}
      background={\`\${colorValue}-1\`}
      borderColor={\`\${colorValue}-8\`}
    />
  );
};

export default CustomColorSelect;`
    },
    {
      title: "Custom Icon",
      description:
        lang === "ko"
          ? "입력 필드의 앞뒤 아이콘을 커스텀할 수 있습니다."
          : "Can customize the icons before and after the input field.",
      render: (
        <Select
          options={options}
          placeholder="Icon Customization Select."
          value={iconValue}
          onChange={(e) => setIconValue(e)}
          afterIcon={<Search />}
          beforeIcon={<TriangleDown />}
        />
      ),
      jscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';
import { Search, TriangleDown } from 'sud-icons';

const CustomIconSelect = () => {
  const [value, setValue] = useState("");

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" }
  ];

  return (
    <Select
      options={options}
      placeholder="Icon Customization Select."
      value={value}
      onChange={(e) => setValue(e)}
      afterIcon={<Search />}
      beforeIcon={<TriangleDown />}
    />
  );
};

export default CustomIconSelect;`,
      tscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';
import { Search, TriangleDown } from 'sud-icons';

interface Option {
  label: string;
  value: string;
}

const CustomIconSelect: React.FC = () => {
  const [value, setValue] = useState<string>("");

  const options: Option[] = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" }
  ];

  return (
    <Select
      options={options}
      placeholder="Icon Customization Select."
      value={value}
      onChange={(e) => setValue(e)}
      afterIcon={<Search />}
      beforeIcon={<TriangleDown />}
    />
  );
};

export default CustomIconSelect;`
    },
    {
      title: "Multi Mode",
      description:
        lang === "ko"
          ? "다중 선택 모드를 사용할 수 있습니다."
          : "Can use the multi-select mode.",
      render: (
        <Select
          options={options}
          placeholder="Multi Mode Select."
          value={multiValue}
          onChange={(e) => setMultiValue(e)}
          multiMode
          tagColorType="sky"
        />
      ),
      jscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';

const MultiModeSelect = () => {
  const [value, setValue] = useState([]);

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" }
  ];

  return (
    <Select
      options={options}
      placeholder="Multi Mode Select."
      value={value}
      onChange={(e) => setValue(e)}
      multiMode
      tagColorType="sky"
    />
  );
};

export default MultiModeSelect;`,
      tscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';

interface Option {
  label: string;
  value: string;
}

const MultiModeSelect: React.FC = () => {
  const [value, setValue] = useState<string[]>([]);

  const options: Option[] = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" }
  ];

  return (
    <Select
      options={options}
      placeholder="Multi Mode Select."
      value={value}
      onChange={(e) => setValue(e)}
      multiMode
      tagColorType="sky"
    />
  );
};

export default MultiModeSelect;`
    }
  ];
  const howToUseTableData = [
    {
      key: "value",
      name: "value",
      description:
        lang === "ko"
          ? "선택된 값 (multiMode일 경우 배열)"
          : "Selected value (array if multiMode).",
      type: "string | string[]",
      default: "-"
    },
    {
      key: "onChange",
      name: "onChange",
      description:
        lang === "ko"
          ? "값이 변경될 때 호출되는 함수"
          : "Function called when the value changes.",
      type: "(value: string | string[]) => void",
      default: "() => {}"
    },
    {
      key: "placeholder",
      name: "placeholder",
      description:
        lang === "ko"
          ? "아무것도 선택되지 않았을 때 표시되는 텍스트"
          : "Text displayed when nothing is selected.",
      type: "string",
      default: "'선택하세요'"
    },
    {
      key: "options",
      name: "options",
      description:
        lang === "ko" ? "선택 가능한 옵션 목록" : "List of selectable options.",
      type: "Array<{label: string, value: string}>",
      default: "[]"
    },
    {
      key: "size",
      name: "size",
      description:
        lang === "ko"
          ? "Select 컴포넌트의 크기"
          : "Size of the Select component.",
      type: <>{tagRender(["sm", "md", "lg"])}</>,
      default: <Tag>md</Tag>
    },
    {
      key: "shape",
      name: "shape",
      description:
        lang === "ko"
          ? "Select 컴포넌트의 모서리 모양"
          : "Shape of the Select component.",
      type: <>{shapeTypeTags}</>,
      default: <Tag>rounded</Tag>
    },
    {
      key: "disabled",
      name: "disabled",
      description:
        lang === "ko"
          ? "Select 컴포넌트 비활성화 여부"
          : "Disabled state of the Select component.",
      type: "boolean",
      default: "false"
    },
    {
      key: "readOnly",
      name: "readOnly",
      description:
        lang === "ko"
          ? "읽기 전용 여부"
          : "Read-only state of the Select component.",
      type: "boolean",
      default: "false"
    },
    {
      key: "clearable",
      name: "clearable",
      description:
        lang === "ko"
          ? "선택한 값을 지울 수 있는 버튼 표시 여부"
          : "Display a button to clear the selected value.",
      type: "boolean",
      default: "false"
    },
    {
      key: "label",
      name: "label",
      description:
        lang === "ko"
          ? "Select 컴포넌트의 라벨"
          : "Label of the Select component.",
      type: "string | ReactNode",
      default: "-"
    },
    {
      key: "underline",
      name: "underline",
      description:
        lang === "ko"
          ? "밑줄 스타일 여부"
          : "Underline style of the Select component.",
      type: "boolean",
      default: "false"
    },
    {
      key: "error",
      name: "error",
      description:
        lang === "ko"
          ? "에러 상태 여부"
          : "Error state of the Select component.",
      type: "boolean",
      default: "false"
    },
    {
      key: "errorText",
      name: "errorText",
      description:
        lang === "ko"
          ? "에러 메시지"
          : "Error message of the Select component.",
      type: "string",
      default: "-"
    },
    {
      key: "beforeIcon",
      name: "beforeIcon",
      description:
        lang === "ko"
          ? "Select 컴포넌트에 표시될 아이콘"
          : "Icon displayed in the Select component.",
      type: "ReactNode",
      default: "<AngleDown size={16} />"
    },
    {
      key: "shadow",
      name: "shadow",
      description:
        lang === "ko" ? "그림자 크기" : "Shadow size of the Select component.",
      type: <>{shadowTypeTags}</>,
      default: <Tag>sm</Tag>
    },
    {
      key: "multiMode",
      name: "multiMode",
      description:
        lang === "ko"
          ? "다중 선택 모드 활성화 여부"
          : "Enable multi-select mode.",
      type: "boolean",
      default: "false"
    },
    {
      key: "showSelectedCount",
      name: "showSelectedCount",
      description:
        lang === "ko"
          ? "다중 선택 모드에서 선택된 항목 수 표시 여부"
          : "Display the number of selected items in multi-select mode.",
      type: "boolean",
      default: "false"
    },
    {
      key: "Searchable",
      name: "Searchable",
      description:
        lang === "ko" ? "검색 기능 사용 여부" : "Enable search functionality.",
      type: "boolean",
      default: "true"
    },
    {
      key: "tagColorType",
      name: "tagColorType",
      description:
        lang === "ko"
          ? "다중 선택 모드에서 태그의 색상 타입"
          : "Color type of the tag in multi-select mode.",
      type: <>{defaultColorTypeTags}</>,
      default: <Tag>default</Tag>
    },
    {
      key: "colorType",
      name: "colorType",
      description:
        lang === "ko"
          ? "Select 컴포넌트의 색상 타입"
          : "Color type of the Select component.",
      type: <>{defaultColorTypeTags}</>,
      default: <Tag>default</Tag>
    },
    {
      key: "background",
      name: "background",
      description:
        lang === "ko"
          ? "배경색(palette값 또는 HEX code)"
          : "Background color (palette value or HEX code).",
      type: "string",
      default: "-"
    },
    {
      key: "color",
      name: "color",
      description:
        lang === "ko"
          ? "텍스트 색상(palette값 또는 HEX code)"
          : "Text color (palette value or HEX code).",
      type: "string",
      default: "-"
    },
    {
      key: "border",
      name: "border",
      description: lang === "ko" ? "테두리 표시 여부" : "Display the border.",
      type: "boolean",
      default: "true"
    },
    {
      key: "borderColor",
      name: "borderColor",
      description:
        lang === "ko"
          ? "테두리 색상(palette값 또는 HEX code)"
          : "Border color (palette value or HEX code).",
      type: "string",
      default: "-"
    },
    {
      key: "borderType",
      name: "borderType",
      description: lang === "ko" ? "테두리 스타일" : "Border style.",
      type: <>{borderTypeTags}</>,
      default: <Tag>solid</Tag>
    },
    {
      key: "borderWeight",
      name: "borderWeight",
      description: lang === "ko" ? "테두리 두께" : "Border weight.",
      type: "number",
      default: "1"
    },
    {
      key: "dropdownStyle",
      name: "dropdownStyle",
      description:
        lang === "ko"
          ? "드롭다운 메뉴의 추가 스타일"
          : "Additional styles for the dropdown menu.",
      type: "React.CSSProperties",
      default: "{}"
    },
    {
      key: "className",
      name: "className",
      description: lang === "ko" ? "추가 클래스명" : "Additional class name.",
      type: "string",
      default: "-"
    },
    {
      key: "style",
      name: "style",
      description: lang === "ko" ? "추가 스타일" : "Additional styles.",
      type: "React.CSSProperties",
      default: "{}"
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
