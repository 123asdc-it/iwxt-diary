---
title: "注意力之间：MiTA论文交互导读"
date: "2026-11-01"
status: "published"
tags:
  - 论文阅读
  - 注意力机制
  - 交互教程
summary: "从token、向量、Transformer与KV Cache学起，用分步图与数值实验理解MiTA，读懂方法、成本与证据范围。"
cover: "uploads/covers/75fdfca0d8d5f948eb66b92e5ced4f198304cb0cf9001eb4bb41f3049b6319f2.png"
coverFocusX: 50
createdAt: "2026-10-31T20:22:00Z"
updatedAt: "2026-11-02T04:09:34Z"
---

[打开《MiTA注意力 · 论文交互教程》 →](../../tutorials/mita-attention/)

这份教程对应Wen等的 [Mixture-of-Top-k Attention: Efficient Attention via Scalable Fast Weights](https://arxiv.org/abs/2602.01219v6)，固定阅读v6（2026年9月27日）。

先看一次标准Q/K/V计算，再把attention理解为输入依赖的fast-weight网络，随后分解压缩、路由与可复用专家。8个手工构造的token可以逐步查看landmark平均池化、全局打分、top-k候选、共享value、query路由，以及最终的联合softmax。

可以切换query、调整m和k，查看两部分权重怎样共同加到1，并与同一组向量的dense输出比较。另有相似度打分计数器，明确计入候选探测；计数不等于GPU耗时，向量输出差距也不是模型准确率。

实验证据单独列出视觉分类、分割、LRA与合成长序列吞吐的设置和结果。源码与论文公式的共享温度差别、直接替换与微调的区别，以及保留共享项时不保证严格恢复dense的算术反例，都放在最后一章供继续核对。

页面使用深绿与纸色、桌面20px和手机18px正文，包含8道自测，可以下载单文件离线使用。本页没有运行论文训练或性能复现。

[查看全部交互教程与学习工具 →](../../tutorials/)

新增从零开始的22个概念：从token、向量、点积、Q/K/V与softmax，到Transformer、生成、KV Cache，再接入MiTA。每点配分步图与自问；原六步实验增加数据流图，方法总图可直接进入对应步骤。
