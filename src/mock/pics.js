import Mock from "mockjs";

Mock.mock(/^\/api\.php\/cms\/pics\/id\/\d+$/, "get", {
  code: 1,
  "rowtotal|2-10": 1,
  "data|2-10": ["@image('300x200', '#000', '#fff', 'random Image')"],
});
