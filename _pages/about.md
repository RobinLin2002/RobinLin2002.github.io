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

I received my B.S. degree from The Chinese University of Hong Kong, Shenzhen, and my master's degree in Artificial Intelligence from the Department of Mathematics at The University of Hong Kong.

Starting from September 2026, I will pursue my Ph.D. at The Hong Kong Polytechnic University under the supervision of [Prof. Xingyi Yang](https://adamdad.github.io/) in the Department of Data Science and Artificial Intelligence.

My research interests include multimodal large language models, diffusion models, and generative AI. I am particularly interested in building reliable and data-efficient multimodal systems for visual understanding, generation, and interaction with the physical world.

I previously worked as an intern at SenseTime Research, where I focused on multimodal low-level vision models.


我本科毕业于香港中文大学（深圳），并于香港大学数学系获得人工智能方向的硕士学位。

自 2026 年 9 月起，我将赴香港理工大学攻读博士学位，师从香港理工大学数据科学与人工智能学系的 [阳行意教授](https://adamdad.github.io/)。

我的研究兴趣包括多模态大语言模型、扩散模型以及生成式人工智能。我尤其关注如何构建可靠且数据高效的多模态系统，用于视觉理解、内容生成以及与物理世界的交互。

此前，我曾在商汤科技研究院实习，主要从事多模态低层视觉模型相关研究。

# 🔥 News
- *2026.02*: &nbsp;🎉🎉 DRDD(First Author) was accepted by CVPR-2026.
- *2025.12*: &nbsp;💼💼 Started working Uni-Lens at Sensetime Technology.
- *2025.11*: &nbsp;🎉🎉 ARRA was accpeted by AAAI-2025(**oral**).
- *2025.11*: &nbsp;🎉🎉 One collaborated paper was accpeted by IEEE Transactions on Geoscience and Remote Sensing.
- *2024.10*: &nbsp;🎉🎉 MLLM-Bench was accepted by NAACL-2025.

# 📝 Publications & Pre-prints

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR2026</div><img src='images/second_page.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Decoupled Residual Denoising Diffusion Models for Unified and Data Efficient Image-to-Image Translation](https://arxiv.org/abs/2606.01048)

**<span style="color: #2E86C1;">Ziyue Lin</span>**, Jiahe Hou, Hongyu Xia, Xinrui Xie, Feifei Wang, Yuyin Zhou, Wei Wang, Jiawei Liu†, Liangqiong Qu†
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

[**Project**](https://arxiv.org/html/2503.07334v1) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
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
- *2024.09 - 2026.06* (expected)*, pursuing master in The University of Hong Kong, major in Artificial Intelligence 
- *2020.09 - 2024.06*, achieved Bachelor of Science in The Chinese University of Hong Kong, Shenzhen, major in Data Science and big data technology

