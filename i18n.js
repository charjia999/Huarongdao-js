const I18N = {
  zh: {
    title: "华容道",
    steps: "步数",
    level: "第 {n} 关",
    undo: "回退",
    reset: "重置",
    select: "选关",
    win: "胜利！共 {n} 步"
  },
  en: {
    title: "Huarong Dao",
    steps: "Steps",
    level: "Level {n}",
    undo: "Undo",
    reset: "Reset",
    select: "Select Level",
    win: "Victory! {n} steps"
  }
};

let LANG = localStorage.getItem("lang") || "zh";

function t(key, vars = {}) {
  let str = I18N[LANG][key] || key;

  for (let k in vars) {
    str = str.replace(`{${k}}`, vars[k]);
  }

  return str;
}

function setLang(lang) {
  LANG = lang;
  localStorage.setItem("lang", lang);
  renderText();   // defined in game.js
}
