export const itemsList = (selectHeadMenu, lang) => {
  if (selectHeadMenu === "start") {
    return {
      start: [{ key: "start", label: lang === "ko" ? "시작하기" : "Start" }]
    };
  } else if (selectHeadMenu === "css") {
    return {
      css: [
        { key: "color", label: lang === "ko" ? "색상" : "Color" },
        { key: "font", label: lang === "ko" ? "폰트" : "Font" },
        { key: "animation", label: lang === "ko" ? "애니메이션" : "Animation" },
        { key: "className", label: lang === "ko" ? "클래스명" : "ClassName" }
      ]
    };
  } else if (selectHeadMenu === "component") {
    return {
      component: [
        {
          key: "component-overview",
          label: lang === "ko" ? "컴포넌트 개요" : "Component Overview"
        },

        {
          key: "layout",
          title: "Layout",
          mode: "group",
          children: [{ key: "layout", label: "Layout" }]
        },
        {
          key: "navigation",
          title: "Navigation",
          mode: "group",
          children: [
            { key: "breadcrumb", label: "Breadcrumb" },
            { key: "collapse", label: "Collapse" },
            { key: "drawer", label: "Drawer" },
            { key: "dropdown", label: "Dropdown" },
            { key: "menu", label: "Menu" },
            { key: "pagination", label: "Pagination" },
            { key: "segmented", label: "Segmented" },
            { key: "tabs", label: "Tabs" }
          ]
        },
        {
          key: "input",
          title: "Input",
          mode: "group",
          children: [
            { key: "input", label: "Input" },
            { key: "otp", label: "OTP" },
            { key: "textarea", label: "Textarea" },
            { key: "upload", label: "Upload" }
          ]
        },
        {
          key: "select",
          title: "Select",
          mode: "group",
          children: [
            { key: "button", label: "Button" },
            { key: "checkbox", label: "Checkbox" },
            { key: "colorpicker", label: "ColorPicker" },
            { key: "datepicker", label: "DatePicker" },
            { key: "floatbutton", label: "FloatButton" },
            { key: "radio", label: "Radio" },
            { key: "rate", label: "Rate" },
            { key: "select", label: "Select" },
            { key: "slider", label: "Slider" },
            { key: "switch", label: "Switch" },
            { key: "timepicker", label: "TimePicker" }
          ]
        },
        {
          key: "display",
          title: "Display",
          mode: "group",
          children: [
            { key: "avatar", label: "Avatar" },
            { key: "badge", label: "Badge" },
            { key: "calendar", label: "Calendar" },
            { key: "card", label: "Card" },
            { key: "carousel", label: "Carousel" },
            { key: "divider", label: "Divider" },
            { key: "empty", label: "Empty" },
            { key: "image", label: "Image" },
            { key: "list", label: "List" },
            { key: "table", label: "Table" },
            { key: "tag", label: "Tag" },
            { key: "timeline", label: "Timeline" },
            { key: "typography", label: "Typography" }
          ]
        },
        {
          key: "feedback",
          title: "Feedback",
          mode: "group",
          children: [
            { key: "modal", label: "Modal" },
            { key: "notification", label: "Notification" },
            { key: "popconfirm", label: "PopConfirm" },
            { key: "popover", label: "Popover" },
            { key: "progress", label: "Progress" },
            { key: "spinner", label: "Spin" },
            { key: "toast", label: "Toast" },
            { key: "tooltip", label: "Tooltip" }
          ]
        }
      ]
    };
  } else if (selectHeadMenu === "icons") {
    return {
      icons: [{ key: "icons", label: lang === "ko" ? "아이콘" : "Icons" }]
    };
  }
};
