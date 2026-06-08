import { createI18n } from "vue-i18n";
import zhCN from "./source/zh-CN.json";
import enUS from "./en-US.json";
import zhTW from "./zh-TW.json";
import lzh from "./lzh.json";

const i18n = createI18n({
  locale: "zh-CN",
  fallbackLocale: "en-US",
  messages: {
    "zh-CN": zhCN,
    "en-US": enUS,
    "zh-TW": zhTW,
    "lzh": lzh,
  },
});

export default i18n;