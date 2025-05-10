export const itemsList = {
  start: [{ key: "start", label: "시작하기" }],

  css: [
    { key: "color", label: "color" },
    { key: "font", label: "font" },
    { key: "animation", label: "animation" },
    { key: "className", label: "className" }
  ],
  component: [
    {
      key: "component-overview",
      label: "Component 개요"
    },

    {
      key: "layout",
      title: "Layout",
      mode: "group",
      children: [
        { key: "content", label: "Content" },
        { key: "footer", label: "Footer" },
        { key: "header", label: "Header" },
        { key: "layout", label: "Layout" },
        { key: "sider", label: "Sider" }
      ]
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
        { key: "form", label: "Form" },
        { key: "input", label: "Input" },
        { key: "inputotp", label: "InputOTP" },
        { key: "textarea", label: "TextArea" },
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
        { key: "popconfirm", label: "Pop Confirm" },
        { key: "popover", label: "Popover" },
        { key: "progress", label: "Progress" },
        { key: "spinner", label: "Spin" },
        { key: "toast", label: "Toast" },
        { key: "tooltip", label: "Tooltip" }
      ]
    }
  ],
  icons: [{ key: "icons", label: "icons" }]
};
