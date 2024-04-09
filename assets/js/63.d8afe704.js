(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{397:function(s,t,a){"use strict";a.r(t);var e=a(4),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h4",{attrs:{id:"原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[s._v("#")]),s._v(" 原因")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("关联生成的强制约束问题,在删除的时候回检查表之间的关联关系,从而导致无法删除.")])]),s._v(" "),t("li",[t("p",[s._v("表A的数据被表B关联使用了,这个时候删除表A,就会报错.")])])]),s._v(" "),t("h4",{attrs:{id:"解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[s._v("#")]),s._v(" 解决")]),s._v(" "),t("ul",[t("li",[s._v("先关闭外键约束,执行删除操作,然后再开启外键约束")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" SET foreign_key_checks "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" // 先设置外键约束检查关闭\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" drop table mytable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" // 删除数据,表或者视图\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" SET foreign_key_checks "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" // 开启外键约束检查,以保持表结构完整性\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);