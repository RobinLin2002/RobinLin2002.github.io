---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I received my B.S. from The Chinese University of Hong Kong, Shenzhen. I am currently pursuing a master's degree in the Department of Mathematics at The University of Hong Kong, with a major in Artificial Intelligence. **I am currently seeking PhD positions for 2026 Fall.**

My research interests include computer vision, image restoration, and data-centric AI. This is my personal CV: [Ziyue Lin's Curriculum Vitae](../assets/林子越_个人中英文简历.pdf)

I am very fortunate to be advised by [Prof.Liangqiong Qu](https://liangqiong.github.io/) from [School of Computing and Data Science](https://www.cds.hku.hk/), The University of Hong Kong. I am also currently working in Sensetime Technology.

我本科毕业于香港中文大学（深圳），目前在香港大学数学系攻读人工智能方向的硕士学位，并计划申请2026年秋季入学的博士项目。

我的研究兴趣和经历包括1. 多模态大模型的理解与生成 2.基于扩散模型的图像修复。这是我的个人简历：[简历](../assets/林子越_个人中英文简历.pdf)

我非常荣幸能获得香港大学计算与数据科学学院屈靓琼教授的指导，我目前还在商汤科技有限公司实习，负责研发多模态low-level大模型。
# 🔥 News
- *2025.04*: &nbsp;🎉🎉 Two papers are submitted to ECCV-2026.
- *2026.02*: &nbsp;🎉🎉 DRDD(First Author) was accepted by CVPR-2025.
- *2025.12*: &nbsp;🎉🎉 Started working at Sensetime Technology.
- *2025.11*: &nbsp;🎉🎉 ARRA was accpeted by AAAI-2025(**oral**).
- *2025.11*: &nbsp;🎉🎉 One collaborated paper was accpeted by IEEE Transactions on Geoscience and Remote Sensing.
- *2024.10*: &nbsp;🎉🎉 MLLM-Bench was accepted by NAACL-2025.
- *2024.09*: &nbsp;🎉🎉 Started research in HKU-HealthAI Lab.

# 📝 Publications & Pre-prints

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR2026</div><img src='images/DRDD.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Decoupled Residual Denoising Diffusion Models for Unified and Data Efficient Image-to-Image Translation](Paper is coming soon.)

**Ziyue Lin**, Jiahe Hou, Hongyu Xia, Xinrui Xie, Feifei Wang, Yuyin Zhou, Wei Wang, Jiawei Liu†, Liangqiong Qu†
[**Project**]() <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- DRDD decouples the diffusion process into two independent stages: stochastic noise diffusion for domain alignment and deterministic residual diffusion for semantic mapping, enhancing both unified translation quality and data efficiency.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Submitted to ECCV 2026</div><img src='images/FedVLMBench.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[FedVLMBench: Benchmarking Federated Fine-Tuning of Vision-Language Models](https://www.arxiv.org/pdf/2506.09638)

Weiying Zheng, **Ziyue Lin**, Pengxin Guo, Yuyin Zhou, Feifei Wang, Liangqiong Qu

[**Project**](https://github.com/Arise-zwy/FedVLMBench) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- Our work provides essential tools, datasets, and empirical guidance for the research community, offering a standardized platform to advance privacy-preserving, federated training of multimodal foundation models.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2026(Oral)</div><img src='images/ARRA.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">


[Unleashing the Potential of Large Language Models for Text-to-Image Generation through Autoregressive Representation Alignment]([https://example.com](https://arxiv.org/pdf/2503.07334))

Xing Xie, Jiawei Liu, **Ziyue Lin**, Huijie Fan, Zhi Han, Yandong Tang, Liangqiong Qu

[**Project**](https://arxiv.org/abs/2503.07334) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- We present Autoregressive Representation Alignment (ARRA), a new training framework that unlocks global-coherent text-to-image generation in autoregressive LLMs without architectural changes.
</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NAACL 2025</div><img src='images/MLLM-Bench.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">



[MLLM-Bench, Evaluating Multi-modal LLMs using GPT-4V](https://aclanthology.org/2025.naacl-long.256.pdf)

Wentao Ge∗, Shunian Chen∗, Guiming Hardy Chen*, Nuo Chen, Junying Chen, Zhihong Chen†, Wenya Xie, Shuo Yan, Chenghao Zhu, **Ziyue Lin**, Dingjie Song, Xidong Wang, Anningzhe Gao, Zhiyi Zhang, Jianquan Li, Xiang Wan, Benyou Wang†
    


[**Project**](https://github.com/FreedomIntelligence/MLLM-Bench) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- We benchmark 21 popular MLLMs in a pairwise-comparison fashion, showing diverse performance across models.
</div>
</div>



# 📖 Educations
- *2024.09 - 2025.07* (now)*, pursuing master in The University of Hong Kong, major in Artificial Intelligence 
- *2020.09 - 2024.06*, achieved Bachelor of Science in The Chinese University of Hong Kong, Shenzhen, major in Data Science and big data technology

