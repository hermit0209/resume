var skills = {
  html5: 90,
  css3: 95,
  js: 60,
  jquery: 70,
  svg: 60,
  canvas: 60,
  vue: 15,
  rwd: 80,
  git: 30,
  npmScript:50
};
const Total = 100;

for (const skill in skills) {
  const Percentage = skills[skill];
  const PercentageTemplate = `${Percentage}%`;
  document.querySelector(`.${skill} .inner-bar`).style.width = PercentageTemplate;
}

var list = {
  en: 65,
  // jp: 35,
  uxui: 75,
  ps: 65,
  illu: 70,
  gh: 70,
  threeD: 85,
};
var circle = document.querySelector("circle");
const r = circle.getAttribute("r");
const rate = Math.PI * 2 * r;

for (const unit in list) {
  const Percentage = list[unit];
  var dash = document.createAttribute("stroke-dasharray");
  // var offset = document.createAttribute("stroke-dashoffset");
  var content = document.createAttribute("data-content");
  dash.value = (Percentage/100) * rate + "," +1000;
  // offset.value = 0;
  content.value = Percentage + "%";
  // console.log(dash.value);
  document.querySelector(`.${unit} .bar`).setAttributeNode(dash);
  // document.querySelector(`.${unit} .bar`).setAttributeNode(offset);
  document.querySelector(`.${unit} span`).setAttributeNode(content);
}

const about = document.getElementById("about");
about.innerHTML = `嗨!你好。我叫張紀為,喜歡自學和研究新技術。<br>
對設計和幾何和網路技術很有興趣,<br>
平常除了練習寫程式的技巧外,<br>
也會增進電腦科學的各種知識,
以及鍛鍊UX/UI的敏感度.<br>
熱愛電影,還有茶跟騎單車<br>
目前熱衷符號和語言學的前端學習者`;

const study_title = document.querySelector("#study > h6");
study_title.innerHTML = `Major: Industrial Design`;
const study_unit = document.querySelector("#study > p");
study_unit.innerHTML = `Chung Hua University <span>Set 2010 ~ Jun 2015</span>`;
const study_detail = document.querySelector("#study > em");
study_detail.innerHTML = `
Field of study:<br>
Develop concepts and designs for manufactured products.<br>
Drawing skills.<br>
Model Making.<br>
Prototyping and testing.<br>
3D software.`;



const cycle_title = document.querySelector("#cycle > h6");
cycle_title.innerHTML = `Cycle workshop technician`;
const cycle_unit = document.querySelector("#cycle > p");
cycle_unit.innerHTML = `Decathlon Taiwan <span>2014/11~2016/06</span>`;
const cycle_content = document.querySelector("#cycle > em");
cycle_content.innerHTML = `Maintain and repair bicycle
customize produsts`;

const image_group_title = document.querySelector("#image_group > h6");
image_group_title.innerHTML = `形象小組 (part-time)`;
const image_group_unit = document.querySelector("#image_group > p");
image_group_unit.innerHTML = `中華工設 <span>2013/03~2014/06</span>`;
const image_group_content = document.querySelector("#image_group > em");
image_group_content.innerHTML = `工業設計周邊商品,海報,酷卡,DM`;

const art_fun_title = document.querySelector("#art_fun > h6");
art_fun_title.innerHTML = `Art for fun (part-time)`;
const art_fun_unit = document.querySelector("#art_fun > p");
art_fun_unit.innerHTML = `中華工設 <span>2012/09~2013/12</span>`;
const art_fun_content = document.querySelector("#art_fun > em");
art_fun_content.innerHTML = `Scottie Huang 作品搭建,維護,海報,建模`;

const learn_php_title = document.querySelector("#learn_php > h6");
learn_php_title.innerHTML = `Information System Training Program: PHP&MySQL`;
const learn_php_unit = document.querySelector("#learn_php > p");
learn_php_unit.innerHTML = `National Taiwan University <span> Jul 2014~ Oct 2014</span>`;

const learn_js_title = document.querySelector("#learn_js > h6");
learn_js_title.innerHTML = `Information System Training Program: Javascript`;
const learn_js_unit = document.querySelector("#learn_js > p");
learn_js_unit.innerHTML = `National Taiwan University <span> Jul 2014~ Oct 2014</span>`;