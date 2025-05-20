"use client";

import Frame from "../Frame";
import { useMobile } from "../../_lib/context/mobileContext";
import { Tag, Radio, Card, Select, Button } from "sud-ui";

import React, { useState } from "react";
import { Search, TriangleDown } from "sud-icons";

export default function SelectPage() {
  const { isMobile } = useMobile();
  const [size, setSize] = useState("md");
  const [value, setValue] = useState("");
  const [sizeValue, setSizeValue] = useState("");
  const [disabledValue, setDisabledValue] = useState("");
  const [readOnlyValue, setReadOnlyValue] = useState("");
  const [clearableValue, setClearableValue] = useState("");
  const [labelValue, setLabelValue] = useState("");
  const [underlineValue, setUnderlineValue] = useState("");
  const [errorValue, setErrorValue] = useState("");
  const [shape, setShape] = useState("rounded");
  const [colorValue, setColorValue] = useState("");
  const [shapeValue, setShapeValue] = useState("");
  const [iconValue, setIconValue] = useState("");
  const [multiValue, setMultiValue] = useState("");

  const name = "Select";
  const description = <>선택사항을 드롭다운으로 보여주는 메뉴입니다.</>;

  const IMPORT_COMMAND = "import { Select } from 'sud-ui';";

  const whenToUse = [
    "선택 옵션이 많을 때",
    "선택 옵션이 길어질 때",
    "입력과 선택이 필요한 경우"
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
      label: "옵션 1",
      value: "option1"
    },
    {
      label: "옵션 2",
      value: "option2"
    },
    {
      label: "옵션 3",
      value: "option3"
    }
  ];

  const examples = [
    {
      title: "Basic Usage",
      description: "기본적인 Select 컴포넌트입니다.",
      render: (
        <>
          <Select
            options={options}
            value={value}
            onChange={(e) => setValue(e)}
            placeholder="옵션을 선택해주세요."
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';

const BasicSelect = () => {
  const [value, setValue] = useState("");

  const options = [
    { label: '옵션 1', value: 'option1' },
    { label: '옵션 2', value: 'option2' },
    { label: '옵션 3', value: 'option3' }
  ];

  return (
    <Select
          options={options}
      value={value}
      onChange={(e) => setValue(e)}
      placeholder="옵션을 선택해주세요."
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
    { label: '옵션 1', value: 'option1' },
    { label: '옵션 2', value: 'option2' },
    { label: '옵션 3', value: 'option3' }
  ];

  return (
    <Select
          options={options}
      value={value}
      onChange={(e) => setValue(e)}
      placeholder="옵션을 선택해주세요."
    />
  );
};

export default BasicSelect;`
    },
    {
      title: "Size",
      description: "Select 의 크기를 설정할 수 있습니다.",
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
            placeholder={`${size} 크기의 Select 입니다.`}
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
    { label: '옵션 1', value: 'option1' },
    { label: '옵션 2', value: 'option2' },
    { label: '옵션 3', value: 'option3' }
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
        placeholder={\`\${size} 크기의 Select 입니다.\`}
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
    { label: '옵션 1', value: 'option1' },
    { label: '옵션 2', value: 'option2' },
    { label: '옵션 3', value: 'option3' }
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
        placeholder={\`\${size} 크기의 Select 입니다.\`}
      />
    </div>
  );
};

export default SizeSelect;`
    },
    {
      title: "Disabled",
      description: "disabled 속성을 추가하면 입력 필드가 비활성화됩니다.",
      render: (
        <>
          <Select
            options={options}
            value={disabledValue}
            onChange={(e) => setDisabledValue(e)}
            disabled
            placeholder="비활성화된 Select 입니다."
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
      placeholder="비활성화된 Select 입니다."
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
      placeholder="비활성화된 Select 입니다."
    />
  );
};

export default DisabledSelect;`
    },
    {
      title: "Read Only",
      description:
        "readOnly 속성을 추가하면 입력 필드가 읽기 전용으로 변경됩니다.",
      render: (
        <>
          <Select
            options={options}
            value={readOnlyValue}
            onChange={(e) => setReadOnlyValue(e)}
            readOnly
            placeholder="읽기 전용 Select 입니다."
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
      placeholder="읽기 전용 Select 입니다."
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
      placeholder="읽기 전용 Select 입니다."
    />
  );
};

export default ReadOnlySelect;`
    },
    {
      title: "Searchable",
      description:
        "Searchable 속성을 추가하면 입력 필드에 검색 기능을 추가할 수 있습니다.",
      render: (
        <Select
          options={options}
          searchable
          placeholder="검색 기능을 추가한 Select 입니다."
        />
      ),
      jscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';

const SearchableSelect = () => {
  const [value, setValue] = useState("");

  const options = [
    { label: "옵션 1", value: "option1" },
    { label: "옵션 2", value: "option2" },
    { label: "옵션 3", value: "option3" }
  ];

  return (
    <Select
      options={options}
      searchable
      placeholder="검색 기능을 추가한 Select 입니다."
    />
  );
};

export default SearchableSelect;`,
      tscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';

const SearchableSelect: React.FC = () => {
  const [value, setValue] = useState("");

  const options: Option[] = [
    { label: "옵션 1", value: "option1" },
    { label: "옵션 2", value: "option2" },
    { label: "옵션 3", value: "option3" }
  ];

  return (
    <Select
          options={options}
      searchable
      placeholder="검색 기능을 추가한 Select 입니다."
    />
  );
};

export default SearchableSelect;`
    },
    {
      title: "Clearable",
      description:
        "clearable 속성을 추가하면 입력 필드의 값을 지울 수 있습니다.",
      render: (
        <>
          <Select
            options={options}
            value={clearableValue}
            onChange={(e) => setClearableValue(e)}
            clearable
            placeholder="clearable 속성을 추가한 Select 입니다."
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';

const ClearableSelect = () => {
  const [value, setValue] = useState("지워보세요!");

  return (
    <Select
          options={options}
      value={value}
      onChange={(e) => setValue(e)}
      clearable
      placeholder="clearable 속성을 추가한 Select 입니다."
    />
  );
};

export default ClearableSelect;`,
      tscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';

const ClearableSelect: React.FC = () => {
  const [value, setValue] = useState("지워보세요!");

  return (
    <Select
          options={options}
      value={value}
      onChange={(e) => setValue(e)}
      clearable
      placeholder="clearable 속성을 추가한 Select 입니다."
    />
  );
};

export default ClearableSelect;`
    },
    {
      title: "Label",
      description:
        "label 속성을 추가하면 입력 필드의 라벨을 설정할 수 있습니다.",
      render: (
        <>
          <Select
            options={options}
            value={labelValue}
            onChange={(e) => setLabelValue(e)}
            label="name"
            placeholder="label 속성을 추가한 Select 입니다."
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';

const LabelSelect = () => {
  const [value, setValue] = useState("");

  return (
    <Select
          options={options}
      value={value}
      onChange={(e) => setValue(e)}
      label="name"
      placeholder="label 속성을 추가한 Select 입니다."
    />
  );
};

export default LabelSelect;`,
      tscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';

const LabelSelect: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Select
          options={options}
      value={value}
      onChange={(e) => setValue(e)}
      label="name"
      placeholder="label 속성을 추가한 Select 입니다."
    />
  );
};

export default LabelSelect;`
    },
    {
      title: "Underline",
      description: "밑줄 스타일의 입력 필드입니다.",
      render: (
        <>
          <Select
            value={underlineValue}
            onChange={(e) => setUnderlineValue(e)}
            underline
            options={options}
            shadow="none"
            placeholder="밑줄 스타일의 Select 입니다."
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';

const UnderlineSelect = () => {
  const [value, setValue] = useState("");

  return (
    <Select
          options={options}
      value={value}
      onChange={(e) => setValue(e)}
      underline
      placeholder="밑줄 스타일의 Select 입니다."
    />
  );
};

export default UnderlineSelect;`,
      tscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';

const UnderlineSelect: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Select
          options={options}
      value={value}
      onChange={(e) => setValue(e)}
      underline
      placeholder="밑줄 스타일의 Select 입니다."
    />
  );
};

export default UnderlineSelect;`
    },
    {
      title: "Error State",
      description: "에러 상태와 메시지를 표시할 수 있습니다.",
      render: (
        <>
          <Select
            options={options}
            value={errorValue}
            onChange={(e) => setErrorValue(e)}
            error={errorValue.length > 0}
            errorText="에러 메시지가 표시됩니다."
            placeholder="에러 상태의 Select 입니다."
          />
        </>
      ),
      jscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';

const ErrorSelect = () => {
  const [value, setValue] = useState("");

  return (
    <Select
          options={options}
      value={value}
      onChange={(e) => setValue(e)}
      error={value.length > 0}
      errorText="에러 메시지가 표시됩니다."
      placeholder="에러 상태의 Select 입니다."
    />
  );
};

export default ErrorSelect;`,
      tscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';

const ErrorSelect: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Select
          options={options}
      value={value}
      onChange={(e) => setValue(e)}
      error={value.length > 0}
      errorText="에러 메시지가 표시됩니다."
      placeholder="에러 상태의 Select 입니다."
    />
  );
};

export default ErrorSelect;`
    },
    {
      title: "Shape",
      description: "입력 필드의 모서리 모양을 설정할 수 있습니다.",
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
            placeholder={`${shape} 모양의 Select 입니다.`}
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
        placeholder={\`\${shape} 모양의 Select 입니다.\`}
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
        placeholder={\`\${shape} 모양의 Select 입니다.\`}
      />
    </div>
  );
};

export default ShapeSelect;`
    },
    {
      title: "Color Customization",
      description: "입력 필드의 색상을 커스텀할 수 있습니다.",
      render: (
        <Select
          options={options}
          placeholder="textColor를 입력하세요"
          value={colorValue}
          onChange={(e) => setColorValue(e)}
          color={"orange-8"}
          background={"orange-1"}
          borderColor={"orange-8"}
        />
      ),
      jscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';

const CustomColorSelect = () => {
  const [value, setValue] = useState("");

  return (
    <Select
          options={options}
      placeholder="textColor를 입력하세요"
      value={value}
      onChange={(e) => setValue(e)}
      color="orange-8"
      background="orange-1"
      borderColor="orange-8"
    />
  );
};

export default CustomColorSelect;`,
      tscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';

const CustomColorSelect: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Select
          options={options}
      placeholder="textColor를 입력하세요"
      value={value}
      onChange={(e) => setValue(e)}
      color="orange-8"
      background="orange-1"
      borderColor="orange-8"
    />
  );
};

export default CustomColorSelect;`
    },
    {
      title: "Custom Icon",
      description: "입력 필드의 앞뒤 아이콘을 커스텀할 수 있습니다.",
      render: (
        <Select
          options={options}
          placeholder="textColor를 입력하세요"
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
    { label: "옵션 1", value: "option1" },
    { label: "옵션 2", value: "option2" },
    { label: "옵션 3", value: "option3" }
  ];

  return (
    <Select
      options={options}
      placeholder="textColor를 입력하세요"
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
    { label: "옵션 1", value: "option1" },
    { label: "옵션 2", value: "option2" },
    { label: "옵션 3", value: "option3" }
  ];

  return (
    <Select
      options={options}
      placeholder="textColor를 입력하세요"
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
      description: "다중 선택 모드를 사용할 수 있습니다.",
      render: (
        <Select
          options={options}
          placeholder="textColor를 입력하세요"
          value={multiValue}
          onChange={(e) => setMultiValue(e)}
          multiMode
        />
      ),
      jscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';

const MultiModeSelect = () => {
  const [value, setValue] = useState([]);

  const options = [
    { label: "옵션 1", value: "option1" },
    { label: "옵션 2", value: "option2" },
    { label: "옵션 3", value: "option3" }
  ];

  return (
    <Select
      options={options}
      placeholder="textColor를 입력하세요"
      value={value}
      onChange={(e) => setValue(e)}
      multiMode
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
    { label: "옵션 1", value: "option1" },
    { label: "옵션 2", value: "option2" },
    { label: "옵션 3", value: "option3" }
  ];

  return (
    <Select
      options={options}
      placeholder="textColor를 입력하세요"
      value={value}
      onChange={(e) => setValue(e)}
      multiMode
    />
  );
};

export default MultiModeSelect;`
    },
    {
      title: "Multi Mode Custom",
      description: "다중 선택 모드를 사용할 수 있습니다.",
      render: (
        <Select
          options={options}
          placeholder="textColor를 입력하세요"
          value={multiValue}
          onChange={(e) => setMultiValue(e)}
          multiMode
          showSelectedCount
          tagColorType="sky"
        />
      ),
      jscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';

const MultiModeCustomSelect = () => {
  const [value, setValue] = useState([]);

  const options = [
    { label: "옵션 1", value: "option1" },
    { label: "옵션 2", value: "option2" },
    { label: "옵션 3", value: "option3" }
  ];

  return (
    <Select
      options={options}
      placeholder="textColor를 입력하세요"
      value={value}
      onChange={(e) => setValue(e)}
      multiMode
      showSelectedCount
      tagColorType="sky"
    />
  );
};

export default MultiModeCustomSelect;`,
      tscode: `import React, { useState } from 'react';
import { Select } from 'sud-ui';

interface Option {
  label: string;
  value: string;
}

const MultiModeCustomSelect: React.FC = () => {
  const [value, setValue] = useState<string[]>([]);

  const options: Option[] = [
    { label: "옵션 1", value: "option1" },
    { label: "옵션 2", value: "option2" },
    { label: "옵션 3", value: "option3" }
  ];

  return (
    <Select
      options={options}
      placeholder="textColor를 입력하세요"
      value={value}
      onChange={(e) => setValue(e)}
      multiMode
      showSelectedCount
      tagColorType="sky"
    />
  );
};

export default MultiModeCustomSelect;`
    }
  ];
  const howToUseTableData = [
    {
      key: "value",
      name: "value",
      description: "선택된 값 (multiMode일 경우 배열)",
      type: "string | string[]",
      default: "null"
    },
    {
      key: "onChange",
      name: "onChange",
      description: "값이 변경될 때 호출되는 함수",
      type: "(value: string | string[]) => void",
      default: "() => {}"
    },
    {
      key: "placeholder",
      name: "placeholder",
      description: "아무것도 선택되지 않았을 때 표시되는 텍스트",
      type: "string",
      default: "'선택하세요'"
    },
    {
      key: "options",
      name: "options",
      description: "선택 가능한 옵션 목록",
      type: "Array<{label: string, value: string}>",
      default: "[]"
    },
    {
      key: "size",
      name: "size",
      description: "Select 컴포넌트의 크기",
      type: (
        <>
          <Tag>sm</Tag> ｜ <Tag>md</Tag> ｜ <Tag>lg</Tag>
        </>
      ),
      default: <Tag>md</Tag>
    },
    {
      key: "shape",
      name: "shape",
      description: "Select 컴포넌트의 모서리 모양",
      type: (
        <>
          <Tag>rounded</Tag> ｜ <Tag>square</Tag> ｜ <Tag>capsule</Tag>
        </>
      ),
      default: <Tag>rounded</Tag>
    },
    {
      key: "disabled",
      name: "disabled",
      description: "Select 컴포넌트 비활성화 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "readOnly",
      name: "readOnly",
      description: "읽기 전용 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "clearable",
      name: "clearable",
      description: "선택한 값을 지울 수 있는 버튼 표시 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "label",
      name: "label",
      description: "Select 컴포넌트의 라벨",
      type: "string | ReactNode",
      default: "-"
    },
    {
      key: "underline",
      name: "underline",
      description: "밑줄 스타일 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "error",
      name: "error",
      description: "에러 상태 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "errorText",
      name: "errorText",
      description: "에러 메시지",
      type: "string",
      default: "-"
    },
    {
      key: "beforeIcon",
      name: "beforeIcon",
      description: "Select 컴포넌트에 표시될 아이콘",
      type: "ReactNode",
      default: "<AngleDown size={16} />"
    },
    {
      key: "shadow",
      name: "shadow",
      description: "그림자 크기",
      type: (
        <>
          <Tag>none</Tag> ｜ <Tag>sm</Tag> ｜ <Tag>md</Tag> ｜ <Tag>lg</Tag> ｜{" "}
          <Tag>xl</Tag>
        </>
      ),
      default: <Tag>sm</Tag>
    },
    {
      key: "multiMode",
      name: "multiMode",
      description: "다중 선택 모드 활성화 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "showSelectedCount",
      name: "showSelectedCount",
      description: "다중 선택 모드에서 선택된 항목 수 표시 여부",
      type: "boolean",
      default: "false"
    },
    {
      key: "Searchable",
      name: "Searchable",
      description: "검색 기능 사용 여부",
      type: "boolean",
      default: "true"
    },
    {
      key: "tagColorType",
      name: "tagColorType",
      description: "다중 선택 모드에서 태그의 색상 타입",
      type: "string",
      default: "'default'"
    },
    {
      key: "colorType",
      name: "colorType",
      description: "Select 컴포넌트의 색상 타입",
      type: "string",
      default: "'default'"
    },
    {
      key: "background",
      name: "background",
      description: "배경색",
      type: "string",
      default: "-"
    },
    {
      key: "color",
      name: "color",
      description: "텍스트 색상",
      type: "string",
      default: "-"
    },
    {
      key: "border",
      name: "border",
      description: "테두리 표시 여부",
      type: "boolean",
      default: "true"
    },
    {
      key: "borderColor",
      name: "borderColor",
      description: "테두리 색상",
      type: "string",
      default: "-"
    },
    {
      key: "borderType",
      name: "borderType",
      description: "테두리 스타일",
      type: (
        <>
          <Tag>solid</Tag> ｜ <Tag>dashed</Tag> ｜ <Tag>dotted</Tag>
        </>
      ),
      default: <Tag>solid</Tag>
    },
    {
      key: "borderWeight",
      name: "borderWeight",
      description: "테두리 두께",
      type: "number",
      default: "1"
    },
    {
      key: "dropdownStyle",
      name: "dropdownStyle",
      description: "드롭다운 메뉴의 추가 스타일",
      type: "React.CSSProperties",
      default: "{}"
    },
    {
      key: "className",
      name: "className",
      description: "추가 클래스명",
      type: "string",
      default: '""'
    },
    {
      key: "style",
      name: "style",
      description: "추가 스타일",
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
