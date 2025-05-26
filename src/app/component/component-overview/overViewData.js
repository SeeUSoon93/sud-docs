import * as sudUi from "sud-ui";
import * as sudIcon from "sud-icons";

export const overViewData = [
  {
    category: "Layout",
    children: [
      {
        name: "Layout",
        img: "/componentOverview/layout.png",
        link: "/component/layout",
        item: (
          <div className="w-100 h-100 rad-15 overflow-hidden z-0">
            <sudUi.Layout>
              <sudUi.Header
                className="flex jus-cen item-cen"
                background="blue-3"
                color="white-10"
                border={false}
                height="20%"
              >
                Header
              </sudUi.Header>
              <sudUi.Sider
                className="flex jus-cen item-cen"
                width="30%"
                background="blue-5"
                color="white-10"
                border={false}
              >
                Sider
              </sudUi.Sider>
              <sudUi.Content className="flex jus-cen item-cen">
                content
              </sudUi.Content>
              <sudUi.Footer
                className="flex jus-cen item-cen"
                background="blue-3"
                color="white-10"
                border={false}
                height="10%"
              >
                Footer
              </sudUi.Footer>
            </sudUi.Layout>
          </div>
        )
      }
    ]
  },
  {
    category: "Navigation",
    children: [
      {
        name: "Breadcrumb",
        img: "/componentOverview/breadcrumb.png",
        link: "/component/breadcrumb",
        item: (
          <div className="flex flex-col gap-10 item-cen jus-cen w-100">
            <sudUi.Card shadow="none" border={false}>
              <sudUi.Breadcrumb
                items={[
                  { label: <sudIcon.HomeOutline />, link: "/" },
                  { label: "Component", link: "/component" },
                  { label: "Breadcrumb" }
                ]}
              />
            </sudUi.Card>
          </div>
        )
      },
      {
        name: "Collapse",
        img: "/componentOverview/collapse.png",
        link: "/component/collapse",
        item: (
          <sudUi.Collapse
            openKeys={["base-1"]}
            items={[
              {
                key: "base-1",
                label: "I'm a Python Developer",
                children: (
                  <div className="flex flex-row item-cen gap-10">
                    <sudUi.Typography code>I Love Python.</sudUi.Typography>
                    <sudUi.Avatar
                      style={{ width: 30, height: 30 }}
                      background="yellow-7"
                    />
                    <sudIcon.HeartFill color="red" />
                    <sudIcon.LogoPython />
                  </div>
                )
              },
              {
                key: "base-2",
                label: "I'm a JavaScript Developer",
                children: "I love JavaScript"
              }
            ]}
          />
        )
      },
      {
        name: "Drawer",
        img: "/componentOverview/drawer.png",
        link: "/component/drawer",
        item: (
          <div
            className="flex item-cen jus-cen w-100 rad-15 overflow-hidden relative"
            style={{ height: "300px" }}
          >
            <sudUi.Card
              background="black-5"
              shape="square"
              shadow="none"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0
              }}
            />
            <sudUi.Card
              variant="drawer"
              isDrawer
              title="Drawer Title"
              divider
              style={{
                width: "60%",
                height: "100%",
                position: "absolute",
                right: 0,
                top: 0
              }}
            >
              <div className="flex flex-col gap-10">
                <sudUi.Typography>Drawer Content</sudUi.Typography>
                <sudUi.Button colorType="primary">Action Button</sudUi.Button>
              </div>
            </sudUi.Card>
          </div>
        )
      },
      {
        name: "Dropdown",
        img: "/componentOverview/dropdown.png",
        link: "/component/dropdown",
        item: (
          <div className="flex gap-10 item-cen jus-cen w-100">
            <sudUi.Card
              title={
                <div className="flex item-cen jus-cen">
                  <sudUi.Dropdown
                    items={[
                      {
                        key: "menu1",
                        label: "메뉴 1"
                      },
                      {
                        key: "menu2",
                        label: "메뉴 2"
                      },
                      {
                        key: "menu3",
                        label: "메뉴 3"
                      }
                    ]}
                  >
                    <sudUi.Button colorType="warning">Hover me!</sudUi.Button>
                  </sudUi.Dropdown>
                </div>
              }
            >
              <sudUi.Typography color="transparent">
                transparent Content hahahaha
                <br />
                transparent Content hahahaha
                <br />
                transparent Content hahahaha
              </sudUi.Typography>
            </sudUi.Card>
          </div>
        )
      },
      {
        name: "Menu",
        img: "/componentOverview/menu.png",
        link: "/component/menu",
        item: (
          <div className="flex flex-col gap-10 item-cen jus-cen w-100">
            <sudUi.Menu
              items={[
                {
                  key: "general",
                  title: "General",
                  mode: "group",
                  children: [
                    { key: "button", label: "Button" },
                    { key: "icon", label: "Icon" }
                  ]
                },
                {
                  key: "layout",
                  title: "Layout",
                  mode: "group",
                  children: [{ key: "header", label: "Header" }]
                }
              ]}
            />
          </div>
        )
      },
      {
        name: "Pagination",
        img: "/componentOverview/pagination.png",
        link: "/component/pagination",
        item: (
          <div className="flex jus-cen item-cen gap-10">
            <sudUi.Pagination total={50} pageSize={10} current={1} />
          </div>
        )
      },
      {
        name: "Segmented",
        img: "/componentOverview/segmented.png",
        link: "/component/segmented",
        item: (
          <div className="flex jus-cen item-cen gap-10">
            <sudUi.Segmented
              value={2}
              options={[
                { label: "python", value: 1 },
                { label: "javascript", value: 2 }
              ]}
            />
          </div>
        )
      },
      {
        name: "Tabs",
        img: "/componentOverview/tabs.png",
        link: "/component/tabs",
        item: (
          <div className="flex jus-cen item-cen gap-10">
            <sudUi.Tabs value="buttons">
              <sudUi.Tabs.TabPane tabKey="buttons" label={<sudIcon.LogoSud />}>
                View Docs Page
              </sudUi.Tabs.TabPane>
              <sudUi.Tabs.TabPane
                tabKey="layout"
                label={<sudIcon.LogoGithub />}
              />
            </sudUi.Tabs>
          </div>
        )
      }
    ]
  },
  {
    category: "Input",
    children: [
      {
        name: "Input",
        img: "/componentOverview/input.png",
        link: "/component/input",
        item: (
          <div className="flex jus-cen">
            <sudUi.Input placeholder="Hello SeeUSoon93" />
          </div>
        )
      },
      {
        name: "InputOTP",
        img: "/componentOverview/inputOTP.png",
        link: "/component/inputOTP",
        item: (
          <div className="flex jus-cen item-cen">
            <sudUi.Input.OTP value={"123456"} password />
          </div>
        )
      },
      {
        name: "TextArea",
        img: "/componentOverview/textarea.png",
        link: "/component/textarea",
        item: (
          <div className="flex jus-cen item-cen">
            <sudUi.Input.Textarea placeholder="Hello SeeUSoon93" />
          </div>
        )
      },
      {
        name: "Upload",
        img: "/componentOverview/upload.png",
        link: "/component/upload",
        item: (
          <div className="flex jus-cen item-cen">
            <sudUi.Upload>
              <sudUi.Button icon={<sudIcon.Upload />} colorType="primary">
                Upload
              </sudUi.Button>
            </sudUi.Upload>
          </div>
        )
      }
    ]
  },
  {
    category: "Select",
    children: [
      {
        name: "Button",
        img: "/componentOverview/button.png",
        link: "/component/button",
        item: (
          <div className="flex flex-col gap-10 jus-cen item-cen">
            <sudUi.Button colorType="primary">Hello</sudUi.Button>
            <sudUi.Button colorType="success">SeeUSoon93</sudUi.Button>
            <sudUi.Button colorType="warning">SUD</sudUi.Button>
          </div>
        )
      },
      {
        name: "Checkbox",
        img: "/componentOverview/checkbox.png",
        link: "/component/checkbox",
        item: (
          <div className="flex flex-col gap-10 jus-cen item-cen">
            <sudUi.Checkbox.Group
              direction="horizontal"
              layout="grid"
              cols={2}
              value={["b", "c"]}
              options={[
                { value: "a", label: <sudUi.Avatar sample="1" /> },
                { value: "b", label: <sudUi.Avatar sample="2" /> },
                { value: "c", label: <sudUi.Avatar sample="3" /> },
                { value: "d", label: <sudUi.Avatar sample="4" /> }
              ]}
            />
          </div>
        )
      },
      {
        name: "ColorPicker",
        img: "/componentOverview/colorPicker.png",
        link: "/component/colorPicker"
      },
      {
        name: "DatePicker",
        img: "/componentOverview/datePicker.png",
        link: "/component/datePicker",
        item: (
          <div className="flex jus-cen item-cen">
            <sudUi.DatePicker placeholder="Select Date" />
          </div>
        )
      },
      {
        name: "FloatButton",
        img: "/componentOverview/floatButton.png",
        link: "/component/floatButton",
        item: (
          <div className="flex jus-cen item-cen gap-20">
            <sudUi.Button
              colorType="primary"
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                padding: 30
              }}
            >
              <sudIcon.DocumentOutline />
            </sudUi.Button>
            <sudUi.Button
              shape="circle"
              colorType="default"
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                padding: 30
              }}
            >
              <sudIcon.Chat />
            </sudUi.Button>
            <sudUi.Button
              shape="circle"
              colorType="warning"
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                padding: 30
              }}
            >
              <sudIcon.CodeBoxOutline />
            </sudUi.Button>
          </div>
        )
      },
      {
        name: "Radio",
        img: "/componentOverview/radio.png",
        link: "/component/radio",
        item: (
          <div className="flex jus-cen item-cen">
            <sudUi.Radio.Group
              value={2}
              direction="horizontal"
              options={[
                { value: 1, label: <sudIcon.LogoGithubCopilot size="50" /> },
                { value: 2, label: <sudIcon.LogoOpenAI size="50" /> },
                { value: 3, label: <sudIcon.LogoDeepseek size="50" /> }
              ]}
            />
          </div>
        )
      },
      {
        name: "Rate",
        img: "/componentOverview/rate.png",
        link: "/component/rate",
        item: (
          <div className="flex jus-cen item-cen">
            <sudUi.Rate value={3.5} />
          </div>
        )
      },
      {
        name: "Select",
        img: "/componentOverview/select.png",
        link: "/component/select",
        item: (
          <div className="flex jus-cen item-cen">
            <sudUi.Select placeholder="Select" />
          </div>
        )
      },
      {
        name: "Slider",
        img: "/componentOverview/slider.png",
        link: "/component/slider",
        item: (
          <div className="flex jus-cen item-cen">
            <sudUi.Slider value={60} />
          </div>
        )
      },
      {
        name: "Switch",
        img: "/componentOverview/switch.png",
        link: "/component/switch",
        item: (
          <div className="flex jus-cen item-cen">
            <sudUi.Switch checked={true} />
          </div>
        )
      },
      {
        name: "TimePicker",
        img: "/componentOverview/timePicker.png",
        link: "/component/timePicker",
        item: (
          <div className="flex jus-cen item-cen">
            <sudUi.TimePicker placeholder="Select Time" />
          </div>
        )
      }
    ]
  },
  {
    category: "Display",
    children: [
      {
        name: "Avatar",
        img: "/componentOverview/avatar.png",
        link: "/component/avatar",
        item: (
          <div className="flex flex-col gap-10 item-cen jus-cen">
            <div className="flex gap-10">
              <sudUi.Avatar sample="1" background="blue-4" />
              <sudUi.Avatar sample="2" background="red-4" />
            </div>
            <div className="flex gap-10">
              <sudUi.Avatar sample="3" background="green-4" />
              <sudUi.Avatar sample="4" background="yellow-4" />
              <sudUi.Avatar sample="5" background="purple-4" />
            </div>
          </div>
        )
      },
      {
        name: "Badge",
        img: "/componentOverview/badge.png",
        link: "/component/badge",
        item: (
          <div className="flex flex-col gap-10 item-cen jus-cen">
            <sudUi.Badge count={10}>
              <sudUi.Avatar background="blue-4" shape="rounded" />
            </sudUi.Badge>
          </div>
        )
      },
      {
        name: "Calendar",
        img: "/componentOverview/calendar.png",
        link: "/component/calendar",
        item: (
          <div className="flex flex-col gap-10 item-cen jus-cen">
            <sudUi.Card>
              <sudUi.Calendar size="miniView" />
            </sudUi.Card>
          </div>
        )
      },
      {
        name: "Card",
        img: "/componentOverview/card.png",
        link: "/component/card",
        item: (
          <div className="flex flex-col gap-10 item-cen jus-cen">
            <sudUi.Card title="Card" divider>
              <div className="flex flex-col gap-10">
                <sudUi.Typography>Hi, Im SeeUSoon93</sudUi.Typography>
                <div className="flex flex-row gap-10 item-cen">
                  <sudUi.Avatar />
                  <sudUi.Card
                    border={false}
                    shadow="none"
                    colorType="sub"
                    color={"transparent"}
                  >
                    asdasdasdsadasdaa
                    <br />
                    <br />
                    <br />
                  </sudUi.Card>
                </div>
              </div>
            </sudUi.Card>
          </div>
        )
      },
      {
        name: "Carousel",
        img: "/componentOverview/carousel.png",
        link: "/component/carousel"
      },
      {
        name: "Divider",
        img: "/componentOverview/divider.png",
        link: "/component/divider"
      },
      {
        name: "Empty",
        img: "/componentOverview/empty.png",
        link: "/component/empty",
        item: (
          <div className="flex flex-col gap-10 item-cen jus-cen w-100">
            <sudUi.Card shadow="none" border={false} style={{ width: "100%" }}>
              <sudUi.Empty />
            </sudUi.Card>
          </div>
        )
      },
      {
        name: "Image",
        img: "/componentOverview/image.png",
        link: "/component/image",
        item: (
          <div className="flex flex-col gap-10 item-cen jus-cen">
            <sudIcon.PhotoFill size={100} />
          </div>
        )
      },
      {
        name: "List",
        img: "/componentOverview/list.png",
        link: "/component/list"
      },
      {
        name: "Table",
        img: "/componentOverview/table.png",
        link: "/component/table"
      },
      {
        name: "Tag",
        img: "/componentOverview/tag.png",
        link: "/component/tag",
        item: (
          <div className="grid col-3 gap-10 item-cen jus-cen">
            <sudUi.Tag colorType="red">Tag</sudUi.Tag>
            <sudUi.Tag colorType="purple">Tag</sudUi.Tag>
            <sudUi.Tag colorType="green">Tag</sudUi.Tag>
            <sudUi.Tag colorType="yellow">Tag</sudUi.Tag>
            <sudUi.Tag colorType="orange">Tag</sudUi.Tag>
            <sudUi.Tag colorType="blue">Tag</sudUi.Tag>
          </div>
        )
      },
      {
        name: "Timeline",
        img: "/componentOverview/timeline.png",
        link: "/component/timeline",
        item: (
          <div className="flex flex-col gap-10 item-cen jus-cen w-100">
            <sudUi.Card shadow="none" border={false} style={{ width: "100%" }}>
              <sudUi.Timeline
                items={[
                  { content: "I'm a python developer" },
                  { content: "But I need to learn javascript" },
                  { content: "So I Make a sud-ui" }
                ]}
              />
            </sudUi.Card>
          </div>
        )
      },
      {
        name: "Typography",
        img: "/componentOverview/typography.png",
        link: "/component/typography",
        item: (
          <div className="flex flex-col gap-10 item-cen jus-cen w-100">
            <sudUi.Card shadow="none" border={false}>
              <sudUi.Typography as="h1" size="4xl">
                Abc
              </sudUi.Typography>
              <sudUi.Typography as="h1" size="4xl">
                가나다
              </sudUi.Typography>
            </sudUi.Card>
          </div>
        )
      }
    ]
  },
  {
    category: "Feedback",
    children: [
      {
        name: "Modal",
        img: "/componentOverview/modal.png",
        link: "/component/modal",
        item: (
          <div className="flex flex-col gap-10 item-cen jus-cen w-100">
            <sudUi.Card
              shadow="none"
              border={false}
              background="black-5"
              style={{ width: "100%", height: "100%" }}
            >
              <div className="flex jus-cen item-cen">
                <sudUi.Card
                  title="Modal"
                  variant="modal"
                  divider
                  footer={
                    <div className="grid col-2 gap-20 pd-x-30">
                      <sudUi.Button
                        colorType="primary"
                        onClick={() =>
                          sudUi.toast.info(
                            "Thank you! but, Click the link below"
                          )
                        }
                      >
                        start
                      </sudUi.Button>
                      <sudUi.Button colorType="default">Cancel</sudUi.Button>
                    </div>
                  }
                >
                  <div className="flex flex-col gap-10 item-cen">
                    <sudIcon.LogoGithub size={40} />
                    <sudUi.Typography>
                      <sudUi.Typography code size="base">
                        <a href="https://github.com/SeeUSoon93" target="_blank">
                          https://github.com/SeeUSoon93
                        </a>
                      </sudUi.Typography>
                    </sudUi.Typography>
                  </div>
                </sudUi.Card>
              </div>
            </sudUi.Card>
          </div>
        )
      },
      {
        name: "Notification",
        img: "/componentOverview/notification.png",
        link: "/component/notification",
        item: (
          <div
            className="flex item-cen jus-cen w-100 rad-15 overflow-hidden relative"
            style={{ height: "300px" }}
          >
            <sudUi.Card
              background="black-5"
              shape="square"
              shadow="none"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0
              }}
            />
            <sudUi.Card
              variant="Notification"
              title="Notification"
              style={{
                width: "60%",
                position: "absolute",
                right: 10,
                top: 10
              }}
            >
              <div className="flex flex-col gap-10">
                <sudUi.Typography>Notification Content</sudUi.Typography>
              </div>
            </sudUi.Card>
          </div>
        )
      },
      {
        name: "Popconfirm",
        img: "/componentOverview/popconfirm.png",
        link: "/component/popconfirm",
        item: (
          <div className="flex flex-col gap-10 item-cen jus-cen w-100">
            <sudUi.PopConfirm
              content={
                <sudUi.Typography code size="lg">
                  Are you sure?
                </sudUi.Typography>
              }
            >
              <sudUi.Button background="volcano-2" color={"volcano-8"}>
                npm install sud-ui
              </sudUi.Button>
            </sudUi.PopConfirm>
          </div>
        )
      },
      {
        name: "Popover",
        img: "/componentOverview/popover.png",
        link: "/component/popover",
        item: (
          <div className="flex flex-col gap-10 item-cen jus-cen w-100">
            <sudUi.Popover content="Hello SeeUSoon93" placement="top">
              <sudUi.Button colorType="primary">Hover me!</sudUi.Button>
            </sudUi.Popover>
          </div>
        )
      },
      {
        name: "Progress",
        img: "/componentOverview/progress.png",
        link: "/component/progress",
        item: (
          <div className="flex flex-col gap-10 item-cen jus-cen w-100">
            <sudUi.Progress type="dashboard" value={70} />
          </div>
        )
      },
      {
        name: "Spin",
        img: "/componentOverview/spin.png",
        link: "/component/spin",
        item: (
          <div className="flex flex-col gap-10 item-cen jus-cen w-100">
            <sudUi.DotSpinner size={70} />
          </div>
        )
      },
      {
        name: "Toast",
        img: "/componentOverview/toast.png",
        link: "/component/toast",
        item: (
          <div className="flex flex-col gap-10 item-cen jus-cen w-100">
            <sudUi.Card>
              <div className="flex flex-row item-cen gap-10">
                <sudIcon.CheckCircleFill /> Hello SeeUSoon93
              </div>
            </sudUi.Card>
          </div>
        )
      },
      {
        name: "Tooltip",
        img: "/componentOverview/tooltip.png",
        link: "/component/tooltip",
        item: (
          <div className="flex flex-col gap-10 item-cen jus-cen w-100">
            <sudUi.Tooltip content="Hello SeeUSoon93" placement="top">
              <sudUi.Button colorType="primary">Hover me!</sudUi.Button>
            </sudUi.Tooltip>
          </div>
        )
      }
    ]
  }
];
