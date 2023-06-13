import Mock from "mockjs";

Mock.mock(/^\/api\.php\/cms\/slide\/gid\/\d+\/num\/\d+$/, "get", {
  code: 1,
  "rowtotal|2-10": 1,
  "data|2-10": [
    {
      "id|+1": 1,
      acode: "cn",
      gid: "1",
      pic: "@image('1920x680', '#000', '#fff', 'random Image')",
      wappic: "@image('375x240', '#000', '#fff', 'random Image')",
      link: "@url('http')",
      title: "@ctitle",
      subtitle: "@ctitle",
      description: "@cparagraph(3,7)",
      sorting: "255",
      create_user: "admin",
      update_user: "admin",
      create_time: "@now",
      update_time: "@now",
      status: "1",
    },
  ],
});
