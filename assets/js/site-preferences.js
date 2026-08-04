(function () {
  "use strict";

  var root = document.documentElement;
  var languageButton = document.getElementById("language-toggle");
  var themeButton = document.getElementById("theme-toggle");

  var translations = {
    zh: {
      affiliation: "香港理工大学数据科学与人工智能系",
      highlight: "香港理工大学数据科学与人工智能系博士一年级学生",
      intro: "我致力于构建可靠且数据高效的多模态系统，用于视觉理解、内容生成以及与物理世界的交互。",
      interests: "研究兴趣",
      interestItems: ["多模态大语言模型", "生成式人工智能", "扩散模型", "计算机视觉", "高效学习"],
      contact: ["邮箱", "谷歌学术", "GitHub", "ORCID", "个人简历"],
      headings: ["关于我", "研究速览", "新闻", "代表性论文", "教育与经历"],
      about: [
        "你好，我是林子越。自 2026 年 9 月起，我将在<a href=\"https://www.polyu.edu.hk/dsai/\">香港理工大学数据科学与人工智能系（DSAI）</a>攻读博士学位，导师为<a href=\"https://adamdad.github.io/\"><strong>阳行意教授</strong></a>。",
        "我在香港大学数学系获得人工智能硕士学位，并在香港中文大学（深圳）获得理学学士学位。我曾在商汤科技研究院从事多模态低层视觉模型研究。",
        "我的研究涵盖<strong>多模态大语言模型</strong>、<strong>生成式人工智能</strong>和<strong>计算机视觉</strong>，尤其关注构建可靠且数据高效的系统，以理解、生成并与视觉世界交互。"
      ],
      research: [["多模态智能", "构建连接语言与丰富视觉信号的模型。"], ["生成式人工智能", "从人类意图中生成可控且连贯的视觉内容。"], ["高效学习", "以更少的数据与算力学习可靠表征。"], ["视觉理解", "理解复杂场景与物理世界。"]],
      news: ["<strong>DRDD</strong>（本人一作）被 CVPR 2026 接收。", "开始在商汤科技研究院参与 Uni-Lens 项目。", "<strong>ARRA</strong> 被 AAAI 2026 接收为 Oral。", "<strong>MLLM-Bench</strong> 被 NAACL 2025 接收。"],
      publicationDescriptions: ["将扩散过程解耦为随机域对齐与确定性语义映射，实现统一且数据高效的图像翻译。", "为视觉语言模型的隐私保护联邦微调提供标准化评测基准与工具集。", "通过自回归表征对齐，在不改变架构的前提下提升文本生成图像的全局一致性。", "以成对比较方式评测 21 个主流多模态大语言模型，揭示其多样化能力。"],
      publicationLinks: ["论文", "项目"],
      experience: ["数据科学与人工智能博士", "人工智能硕士", "数据科学与大数据技术理学学士", "研究实习生 · 多模态低层视觉"],
      nav: ["关于", "新闻", "研究", "论文", "经历", "简历", "个人"],
      footer: "次访问",
      backTop: "返回顶部 ↑"
    }
  };

  function setText(selector, text) {
    var node = document.querySelector(selector);
    if (node) node.textContent = text;
  }

  function setMany(selector, values, html) {
    document.querySelectorAll(selector).forEach(function (node, index) {
      if (values[index] == null) return;
      if (html) node.innerHTML = values[index]; else node.textContent = values[index];
    });
  }

  function setLanguage(language) {
    var zh = language === "zh";
    root.lang = zh ? "zh-CN" : "en";
    root.dataset.language = language;
    localStorage.setItem("ziyue-language", language);
    if (languageButton) {
      languageButton.textContent = zh ? "EN" : "中文";
      languageButton.setAttribute("aria-label", zh ? "Switch to English" : "切换到中文");
    }
    if (!zh) { window.location.reload(); return; }

    var t = translations.zh;
    setText(".hero__affiliation", t.affiliation);
    setText(".hero__highlight", t.highlight);
    setText(".hero__intro", t.intro);
    setText(".hero__aside h2", t.interests);
    setMany(".hero__aside li", t.interestItems);
    document.querySelectorAll(".hero__links a").forEach(function (node, i) {
      var badge = node.querySelector("span"); if (badge && t.contact[i]) node.innerHTML = badge.outerHTML + t.contact[i];
    });
    setMany(".content-section .section-label h2", t.headings);
    setMany(".about-copy p", t.about, true);
    document.querySelectorAll(".research-card").forEach(function (node, i) {
      if (!t.research[i]) return;
      var title = node.querySelector("h3"); if (title) title.textContent = t.research[i][0];
      var copy = node.querySelector("p"); if (copy) copy.textContent = t.research[i][1];
    });
    setMany(".timeline__item p", t.news, true);
    document.querySelectorAll(".publication").forEach(function (node, i) {
      var paragraphs = node.querySelectorAll(".publication__copy > p:not(.authors)");
      if (paragraphs[0] && t.publicationDescriptions[i]) paragraphs[0].textContent = t.publicationDescriptions[i];
      node.querySelectorAll(".publication__links a").forEach(function (link, j) { if (t.publicationLinks[j]) link.textContent = t.publicationLinks[j]; });
    });
    setMany(".experience-grid article p", t.experience);
    document.querySelectorAll(".visible-links > .masthead__menu-item:not(.masthead__menu-home-item) > a").forEach(function (node, i) { if (t.nav[i]) node.textContent = t.nav[i]; });
    setText(".site-footer > a", t.backTop);

    var personal = {
      "personal-kicker": "离开书桌以后",
      "personal-title": "好奇<br>与热爱",
      "personal-intro": "我喜欢小说，中国诗歌，历史，竞技体育，电子游戏，桌面游戏，电影，旅行，流行音乐，和一切能带来美好与爱的事物。",
      "personal-switch": "← 学术主页",
      "personal-heading": "反复回到的事物",
      "personal-subheading": "关于故事、游戏与惊喜的持续索引。",
      "personal-fiction-title": "小说",
      "personal-fiction-copy": "虚构的世界，锋利的句子，以及书页中安静而鲜活的人生。",
      "personal-poetry-title": "中国诗歌",
      "personal-poetry-copy": "古典诗句会随着季节与心境，生长出新的意义。",
      "personal-history-title": "历史",
      "personal-history-copy": "漫长的人类记录：观念、地域、偶然性与记忆。",
      "personal-sports-title": "竞技体育",
      "personal-sports-copy": "胶着比赛的张力、训练的技艺，以及共同相信的时刻。",
      "personal-videogames-title": "电子游戏",
      "personal-videogames-copy": "可以探索的系统、可以栖居的故事，以及为玩乐而建构的世界。",
      "personal-boardgames-title": "桌面游戏",
      "personal-boardgames-copy": "一张桌子、几条规则，与朋友一起度过更好的夜晚。",
      "personal-film-title": "电影与旅行",
      "personal-film-copy": "萦绕不去的影像、令人惊喜的城市，以及抵达陌生之处的快乐。",
      "personal-music-title": "流行音乐",
      "personal-music-copy": "通勤、深夜、庆祝，以及一切间隙里的歌。",
      "personal-love-title": "美好与爱",
      "personal-love-copy": "提醒自己，为惊奇、善意与快乐留出位置。"
    };
    document.querySelectorAll("[data-personal-page] [data-i18n]").forEach(function (node) {
      var value = personal[node.dataset.i18n];
      if (value == null) return;
      if (node.dataset.i18n === "personal-title") node.innerHTML = value; else node.textContent = value;
    });

    var personalOverrides = {
      "personal-kicker": "离开书桌以后",
      "personal-title": "好奇<br>与热爱",
      "personal-intro": "我喜欢小说，中国诗歌，历史，竞技体育，电子游戏，桌面游戏，电影，旅行，流行音乐，和一切能带来美好与爱的事物。",
      "personal-intro-copy": "我喜欢小说，中国诗歌，历史，竞技体育，电子游戏，桌面游戏，电影，旅行，流行音乐，和一切能带来美好与爱的事物。",
      "personal-switch": "← 学术主页",
      "personal-heading": "个人",
      "personal-interests-heading": "兴趣",
      "personal-subheading": "关于故事、游戏与惊喜的持续索引。",
      "personal-fiction-title": "小说",
      "personal-fiction-copy": "虚构的世界，锋利的句子，以及书页中安静而鲜活的人生。",
      "personal-poetry-title": "中国诗歌",
      "personal-poetry-copy": "古典诗句会随着季节与心境，生长出新的意义。",
      "personal-history-title": "历史",
      "personal-history-copy": "漫长的人类记录：观念、地域、偶然性与记忆。",
      "personal-sports-title": "竞技体育",
      "personal-sports-copy": "胶着比赛的张力、训练的技艺，以及共同相信的时刻。",
      "personal-games-title": "游戏",
      "personal-games-copy": "电子游戏与桌面游戏：可以探索的系统、可以栖居的故事，以及和朋友一起度过的夜晚。",
      "personal-film-title": "电影",
      "personal-film-copy": "萦绕不去的影像、表演与故事，在银幕暗下之后依然停留。",
      "personal-travel-title": "旅行",
      "personal-travel-copy": "新的城市、漫长的步行，以及抵达陌生之处的快乐。",
      "personal-music-title": "流行音乐",
      "personal-music-copy": "通勤、深夜、庆祝，以及一切间隙里的歌。",
      "personal-love-title": "美好与爱",
      "personal-love-copy": "提醒自己，为惊奇、善意与快乐留出位置。",
      "personal-blogs-heading": "博客",
      "personal-blogs-status": "即将开始",
      "personal-blogs-title": "笔记、阅读与旅途",
      "personal-blogs-copy": "在这里写下关于书、游戏、电影、旅行，以及值得记住的小事。"
    };
    document.querySelectorAll("[data-personal-page] [data-i18n]").forEach(function (node) {
      var value = personalOverrides[node.dataset.i18n];
      if (value == null) return;
      if (node.dataset.i18n === "personal-title") node.innerHTML = value; else node.textContent = value;
    });
  }

  function setTheme(theme) {
    root.dataset.theme = theme;
    localStorage.setItem("ziyue-theme", theme);
    if (themeButton) {
      themeButton.textContent = theme === "dark" ? "☀" : "☾";
      themeButton.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    }
  }

  var savedLanguage = localStorage.getItem("ziyue-language") || "en";
  var savedTheme = localStorage.getItem("ziyue-theme") || "light";
  setTheme(savedTheme);
  if (savedLanguage === "zh") setLanguage("zh");

  if (languageButton) languageButton.addEventListener("click", function () { setLanguage(root.dataset.language === "zh" ? "en" : "zh"); });
  if (themeButton) themeButton.addEventListener("click", function () { setTheme(root.dataset.theme === "dark" ? "light" : "dark"); });
})();
