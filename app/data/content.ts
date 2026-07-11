export type Locale = "en" | "zh";

export const locales: Locale[] = ["en", "zh"];

export const languageLabel: Record<Locale, string> = {
  en: "EN",
  zh: "中文"
};

export const homeContent = {
  en: {
    badge: "Alex",
    nav: {
      projects: "Projects",
      experience: "Experience",
      contact: "Contact"
    },
    hero: {
      title: "Hi there, I’m Alex.",
      titleLines: ["Hi there,", "I’m Alex."],
      description: "Communication projects, content experiments, media practice, and AI workflows.",
      university: "Massey University",
      degree: "Master of Management — Communication ↗",
      issue: "PORTFOLIO / 2026",
      topics: "COMMUNICATION · CONTENT · AI",
      cta: "View projects"
    },
    projectsTitle: "Selected Projects.",
    projectsSubtitle: "Three project directions that show how I turn ideas, media practice, and AI collaboration into concrete outputs.",
    proofTitle: "Proof Strip",
    proofItems: [
      "0-to-1 AI Workflow",
      "GPT-to-Codex Prototyping",
      "Short-form Content Practice",
      "Media & Communication Background"
    ],
    experienceTitle: "Experience.",
    whatTitle: "What I Did.",
    footer: {
      name: "alex-portfolio/",
      line: "Built with GPT, Codex, and personal project practice.",
      closing: "More projects coming.",
      linkedin: "LinkedIn ↗",
      email: "Email ↗"
    }
  },
  zh: {
    badge: "阿涛",
    nav: {
      projects: "项目",
      experience: "经历",
      contact: "联系"
    },
    hero: {
      title: "你好，我是阿涛。",
      titleLines: ["你好，", "我是阿涛。"],
      description: "传播项目、内容、媒体实践与 AI 工作流。",
      university: "梅西大学",
      degree: "传播硕士 ↗",
      issue: "个人作品集 / 2026",
      topics: "传播 · 内容 · AI",
      cta: "查看项目"
    },
    projectsTitle: "精选项目。",
    projectsSubtitle: "三个方向展示我如何把想法、媒体实践与 AI 协作转化为具体作品。",
    proofTitle: "能力证据条",
    proofItems: ["0-1 AI 工作流", "GPT-to-Codex 原型搭建", "短视频内容实践", "媒体与传播背景"],
    experienceTitle: "经历。",
    whatTitle: "成果。",
    footer: {
      name: "atao-portfolio/",
      line: "由 GPT 共同决策、Codex 辅助搭建，并基于个人项目实践完成。",
      closing: "更多项目持续更新。",
      linkedin: "LinkedIn ↗",
      email: "Email ↗"
    }
  }
} as const;

export const projects = [
  {
    slug: "ai-short-form-video-workflow",
    size: "large",
    previewType: {
      en: "Alex to GPT to Coze workflow",
      zh: "Alex 到 GPT 到 Coze 工作流"
    },
    title: {
      en: "AI Short-form Video Workflow",
      zh: "AI 短视频自动化工作流"
    },
    summary: {
      en: "A repeatable workflow for turning brand inputs into short-form video concepts, scripts, visual prompts, and publishable video outputs.",
      zh: "一套将品牌输入转化为短视频选题、脚本、视觉提示词和可发布视频产出的自动化工作流。"
    },
    detailSubtitle: {
      en: "From brand input to publishable video output.",
      zh: "从品牌输入到可发布视频产出。"
    },
    meta: {
      en: ["AI Workflow", "Short-form Video", "2026"],
      zh: ["AI 工作流", "短视频", "2026"]
    }
  },
  {
    slug: "codex-projects",
    size: "normal",
    previewType: {
      en: "Alex, GPT and Codex collaboration loop",
      zh: "Alex、GPT 与 Codex 协作闭环"
    },
    title: {
      en: "Codex Projects",
      zh: "Codex 项目"
    },
    summary: {
      en: "Lightweight prototypes built by turning GPT-based project decisions into actionable Codex instructions.",
      zh: "通过 GPT 澄清想法、共同决策，再将方案转化为 Codex 指令，完成轻量产品原型搭建。"
    },
    detailSubtitle: {
      en: "From GPT-based decisions to Codex-built prototypes.",
      zh: "从 GPT 共同决策到 Codex 原型搭建。"
    },
    meta: {
      en: ["GPT-to-Codex", "Prototype Builds", "2026"],
      zh: ["GPT-to-Codex", "原型搭建", "2026"]
    }
  },
  {
    slug: "tiki-boom",
    size: "normal",
    previewType: {
      en: "Street interview content collage",
      zh: "街访内容项目拼贴"
    },
    title: {
      en: "TIKI BOOM Street Interview Project",
      zh: "TIKI BOOM 街头采访内容项目"
    },
    summary: {
      en: "A nightlife short-form content project covering topic design, KOL/guest screening, interview execution, editing, publishing, and the featured “藏夜” case.",
      zh: "围绕酒吧夜间场景展开的短视频内容实践，涵盖话题设计、KOL/嘉宾筛选、采访执行、剪辑发布与「藏夜」经典案例。"
    },
    detailSubtitle: {
      en: "Nightlife content practice, guest collaboration, and the featured “藏夜” case.",
      zh: "夜生活场景下的内容实践、嘉宾协作与「藏夜」经典案例。"
    },
    meta: {
      en: ["Short-form Content", "Street Interview", "2024 / 2025"],
      zh: ["短视频内容", "街头采访", "2024 / 2025"]
    },
    homeMeta: {
      en: ["Short-form Content", "Street Interview", "2024"],
      zh: ["短视频内容", "街头采访", "2024"]
    }
  }
] as const;

export const experiences = [
  {
    company: {
      en: "Cover News",
      zh: "封面新闻"
    },
    role: {
      en: "International News & Content Intern",
      zh: "国际新闻与内容执行实习"
    },
    time: {
      en: "Nov 2025 – Feb 2026",
      zh: "2025.11–2026.02"
    },
    logo: "CN",
    logoSrc: "/media/logo-cover-news.png",
    bullets: {
      en: [
        {
          text: "Monitored overseas news trends, screened story leads, and assessed communication value.",
          emphasis: null
        },
        {
          text: "Prepared and executed international news livestreams and related events, producing supporting video content.",
          emphasis: null
        },
        {
          text: "Built a four-factor lead evaluation framework, improving lead screening efficiency by approximately 40%.",
          emphasis: "improving lead screening efficiency by approximately 40%"
        }
      ],
      zh: [
        { text: "监测海外热点，筛选新闻线索并评估传播价值。", emphasis: null },
        { text: "筹备并执行国际新闻直播及相关活动，完成视频内容制作。", emphasis: null },
        {
          text: "搭建四维度线索研判框架，提升约 40% 新闻线索筛选效率。",
          emphasis: "提升约 40% 新闻线索筛选效率"
        }
      ]
    }
  },
  {
    company: {
      en: "Sichuan Radio & Television",
      zh: "四川广播电视台"
    },
    role: {
      en: "Production Intern",
      zh: "编导实习"
    },
    time: {
      en: "2023",
      zh: "2023"
    },
    logo: "SRT",
    logoSrc: "/media/logo-sichuan-tv.png",
    bullets: {
      en: [
        {
          text: "Organized program materials, processed interview scripts, and maintained zero subtitle review errors.",
          emphasis: "zero subtitle review errors"
        },
        {
          text: "Coordinated field-production communication, advanced content preparation, and conducted basic risk checks.",
          emphasis: null
        },
        {
          text: "Followed content production and pre-publication review workflows with zero process errors in assigned tasks.",
          emphasis: "zero process errors in assigned tasks"
        }
      ],
      zh: [
        { text: "整合节目素材，处理采访稿并完成 0 差错字幕审核。", emphasis: "0 差错字幕审核" },
        { text: "对接外采沟通，推进内容制作并执行基础风险检查。", emphasis: null },
        {
          text: "跟进内容生产与发布前审核流程，实现基础流程 0 失误。",
          emphasis: "基础流程 0 失误"
        }
      ]
    }
  }
] as const;

export const whatIDid = [
  {
    name: {
      en: "AI Short-form Video Workflow",
      zh: "AI 短视频自动化工作流"
    },
    type: {
      en: "Workflow and video output showcase ↗",
      zh: "工作流与视频输出展示 ↗"
    },
    year: "2026"
  },
  {
    name: {
      en: "Codex Projects",
      zh: "Codex 项目合集"
    },
    type: {
      en: "Lightweight prototypes and project builds ↗",
      zh: "轻量产品原型与项目搭建 ↗"
    },
    year: "2026"
  },
  {
    name: {
      en: "TIKI BOOM Content Review",
      zh: "TIKI BOOM 内容项目复盘"
    },
    type: {
      en: "Street-interview content and the “藏夜” case ↗",
      zh: "街访短视频与「藏夜」案例 ↗"
    },
    year: "2024"
  },
  {
    name: {
      en: "Media Content Practice",
      zh: "媒体内容实践"
    },
    type: {
      en: "Cover News / Sichuan Radio & Television experience",
      zh: "封面新闻 / 四川广播电视台相关经历"
    },
    year: "2023 / 2025"
  }
] as const;

export const detailContent = {
  "ai-short-form-video-workflow": {
    sections: {
      en: [
        {
          title: "Overview",
          body: "This project presents an AI-powered short-form video workflow that turns brand information, product selling points, or content directions into video concepts, scripts, visual prompts, video outputs, and publishing copy."
        },
        {
          title: "Workflow Demo",
          body: "A short MP4 demo shows the workflow running from node execution to generated prompts and output."
        },
        {
          title: "Workflow Architecture",
          body: "Four connected stages show how human decisions, model reasoning, and workflow automation move from an initial brief to publishing and iteration."
        },
        {
          title: "Output Examples",
          body: "The current evidence includes prompt-generation output and a successful image-generation result from the workflow."
        },
        {
          title: "Example Case",
          body: "The showcased run demonstrates how a brand input moves through reusable prompts, image generation, and workflow output."
        },
        {
          title: "What This Shows",
          points: [
            "0-to-1 workflow building: I built a short-form video production workflow from the ground up, turning an account idea into runnable automation steps.",
            "Account planning with GPT: I used GPT to clarify the account direction, content themes, target audience, and repeatable video formats before turning those decisions into workflow structure.",
            "Reusable model prompt design: I worked with GPT to translate content ideas into reusable model prompts for scripts, visual prompts, and video outputs.",
            "No-code-background AI collaboration: With no prior coding background, I worked with GPT to discuss required logic, generate code, understand what each part was doing, and adjust it based on workflow needs.",
            "Video production pipeline thinking: I connected topic generation, scripting, visual prompting, and video output into a repeatable short-form video production process."
          ]
        },
        {
          title: "Design Thinking",
          subtitle: "How this workflow evolved through iteration.",
          principles: [
            ["Human decisions remain central.", "AI can generate scripts, prompts, and video outputs, but account positioning, content direction, and final quality judgement still require human decisions. The workflow therefore keeps human checkpoints instead of pursuing full automation."],
            ["Modular workflows are easier to maintain.", "Many tasks initially sat inside a single GPT conversation. They were later separated into input, decision, production, and publishing-and-iteration stages, allowing each part to be adjusted or replaced independently."],
            ["Automation should reduce repetition, not replace thinking.", "The purpose of the workflow is not to automate creative judgement. It is to move repetitive and standardised execution to models and workflow tools, while people retain responsibility for direction and quality."]
          ]
        }
      ],
      zh: [
        {
          title: "项目概览",
          body: "这个项目展示了一套 AI 短视频自动化工作流：通过输入品牌信息、产品卖点或内容方向，工作流自动生成短视频选题、脚本、画面提示词，并进一步连接到视频产出与发布文案。"
        },
        {
          title: "工作流演示",
          body: "短 MP4 demo 展示了工作流从节点运行到提示词与结果产出的过程。"
        },
        {
          title: "自动化工作流架构",
          body: "四个连续阶段展示人工判断、模型协作与工作流执行如何从初始输入推进到发布与迭代。"
        },
        {
          title: "输出示例",
          body: "当前证据包括工作流中的提示词生成输出与图像生成成功结果。"
        },
        {
          title: "案例示例",
          body: "页面中的实际运行案例展示了品牌输入如何经过可复用提示词、图像生成和工作流输出。"
        },
        {
          title: "能力体现",
          points: [
            "0-1 工作流搭建：从账号想法出发，将短视频生产流程拆解为可运行的自动化节点，而不是只停留在单次 AI 生成。",
            "账号规划与内容判断：通过 GPT 沟通账号定位、内容方向、目标受众和可复用视频形式，再将讨论结果转化为工作流结构。",
            "大模型提示词设计：将内容想法转化为可复用的大模型提示词，使脚本、画面提示词和视频输出更稳定。",
            "无代码背景下的 AI 协作搭建：在 0 代码经验基础上，根据实际需求与 GPT 协商代码逻辑，逐步生成、理解、调整并测试代码。",
            "视频生产流程意识：把选题、脚本、视觉提示词和视频产出连接成完整链路，形成可重复使用的视频内容生产方式。"
          ]
        },
        {
          title: "设计思考",
          subtitle: "这个工作流是如何在迭代中形成的。",
          principles: [
            ["人的判断仍然是流程核心", "AI 能够生成脚本、提示词和视频输出，但账号定位、内容方向和最终质量判断仍需要由人完成。因此，工作流没有追求完全自动化，而是保留关键的人工作业节点。"],
            ["模块化比长对话更容易维护", "早期很多任务集中在一次 GPT 对话中，后续逐渐拆分为输入、决策、生成和发布迭代四个阶段。模块化后，每一阶段都能单独调整，也更方便替换模型、Prompt 或工作流节点。"],
            ["自动化减少重复执行，而不是替代思考", "这个工作流的目标不是让 AI 代替创意判断，而是把高频、重复、标准化的执行任务交给模型和工作流，让人把注意力放在方向、质量和最终决策上。"]
          ]
        }
      ]
    }
  },
  "codex-projects": {
    sections: {
      en: [
        {
          title: "Overview",
          body: "This project set shows how I use GPT to clarify ideas, make project decisions, and turn those decisions into actionable Codex instructions for building lightweight prototypes and portfolio materials."
        },
        {
          title: "Collaboration Model",
          body: "A repeated DEFINE, DECIDE, BUILD, and REVIEW loop connects human judgement, model reasoning, and implementation."
        },
        {
          title: "Prototype Demos",
          cards: [
            ["Medical Diet Restriction Record Demo", "A public beta web prototype for recording meals and estimating nutrition intake under user-entered medical diet restrictions."],
            ["Job Matching Tool", "A lightweight career-support tool that matches job requirements with relevant personal experiences for resume editing, interview preparation, and portfolio content selection."],
            ["LUMA Coffee PR Materials", "A PR and social media campaign package for a Wellington pilot launch, including campaign framing, audience thinking, local market observation, and PR execution materials."],
            ["Portfolio Website", "This portfolio website itself is also a result of GPT-based decision-making and Codex-based implementation, showing the full process from positioning and structure to visual direction and page building."]
          ]
        },
        {
          title: "Instruction Examples",
          body: "Specific GPT decision and Codex instruction screenshots are not published in this version. The implemented prototypes and interface states serve as the current execution evidence."
        },
        {
          title: "What This Shows",
          points: [
            "Requirement clarification: Turning rough ideas into clear product functions.",
            "Project decision-making: Deciding which features to build first and which ones to postpone.",
            "AI collaboration: Using GPT for discussion and decisions, then using Codex for implementation.",
            "Instruction design: Turning decisions into clear and actionable Codex tasks.",
            "Prototype delivery: Turning ideas into lightweight products that are clickable, interactive, and result-driven."
          ]
        },
        {
          title: "Design Thinking",
          subtitle: "Principles behind the GPT–Codex collaboration process.",
          principles: [
            ["AI implements, humans define.", "The most important decisions happen before coding begins: what problem is being solved, who it is for, and what success should look like. Codex can accelerate implementation, but these definitions must come from human judgement."],
            ["Better prompts begin with better understanding.", "Initial requirements are rarely complete. Testing exposes new needs, which then reshape the product logic, interaction design, and the instructions given to Codex. A prompt is not a one-time input, but a temporary expression of the current understanding."],
            ["Human judgement remains the final layer.", "Models can suggest options and Codex can implement them, but the final decisions about usefulness, clarity, quality, and product direction remain human responsibilities."]
          ]
        }
      ],
      zh: [
        {
          title: "项目概览",
          body: "这一组项目展示了我如何在实际项目中使用 GPT 澄清想法、共同决策，并将确定后的方案转化为 Codex 可执行指令，最终完成轻量产品原型和作品材料的搭建。"
        },
        {
          title: "协作模型",
          body: "通过定义、决策、搭建与审查的持续闭环，连接人的判断、模型推理与实现工具。"
        },
        {
          title: "原型演示",
          cards: [
            ["医嘱限制饮食记录与营养估算 Demo", "一个 public beta Web 原型工具，帮助用户在主动录入医生或营养师饮食限制后，记录食材、菜品、用油和家庭分食情况，并估算核心营养素摄入。"],
            ["工作经历匹配工具", "一个将岗位要求与个人经历进行匹配的轻量求职辅助工具，用于辅助简历修改、面试准备和作品集内容选择。"],
            ["LUMA Coffee PR Materials", "一组围绕惠灵顿试点上市场景整理的 PR 与社交媒体传播材料，包含 campaign framing、目标受众、本地观察和 PR 执行材料。"],
            ["作品集网站本身", "这个作品集网站本身也是 GPT 共同决策与 Codex 执行搭建的结果，用来展示从定位、结构、视觉到页面实现的完整协作流程。"]
          ]
        },
        {
          title: "指令示例",
          body: "本版本暂未公开具体的 GPT 决策与 Codex 指令截图，当前以已完成的原型、界面状态和项目材料作为执行证据。"
        },
        {
          title: "能力体现",
          points: ["需求澄清：把模糊想法整理成明确功能。", "项目判断：决定哪些功能先做，哪些功能暂缓。", "AI 协作：用 GPT 做讨论与决策，用 Codex 执行搭建。", "指令设计：将方案转化为清晰、可执行的 Codex 任务。", "原型落地：把想法做成可点击、可交互、有结果的轻量产品。"]
        },
        {
          title: "设计思考",
          subtitle: "GPT–Codex 协作过程背后的设计原则。",
          principles: [
            ["AI 负责实现，人负责定义问题。", "真正重要的决策发生在写代码之前：要解决什么问题、服务谁，以及什么结果才算成功。Codex 可以加速实现，但这些定义必须来自人的判断。"],
            ["更好的 Prompt，始于对需求更深入的理解。", "初始需求通常并不完整。实际测试会暴露新的问题，再推动产品逻辑、交互设计和 Codex 指令持续调整。Prompt 不是一次写完的输入，而是当前需求理解的阶段性表达。"],
            ["最终判断始终属于人。", "模型可以提出方案，Codex 可以完成实现，但关于实用性、清晰度、质量和产品方向的最终取舍，始终需要由人完成。"]
          ]
        }
      ]
    }
  },
  "tiki-boom": {
    sections: {
      en: [
        {
          title: "Overview",
          body: "This is an early bar-based street interview short-form content project. The remaining evidence comes from archived screenshots, CapCut drafts, and personal project review notes because the original account is no longer active or accessible."
        },
        {
          title: "Content Strategy",
          body: "The content mechanism used semi-anonymous expression, story-driven prompts, secrets, social gossip, and a simple bar incentive to reduce interview pressure and make participation easier."
        },
        {
          title: "Execution Workflow",
          flow: ["Topics", "Guest screening", "Interview", "Editing", "Captions & posting", "Metrics", "Iterate"]
        },
        {
          title: "Results & Takeaways",
          body: "The project is presented as a personal content practice record rather than a verified commercial campaign. It shows approximately five months of execution, 200+ videos, and a 170K+ max-view archived result."
        },
        {
          title: "What This Shows",
          points: ["Early short-form content execution", "Topic design for nightlife scenes", "Guest screening and on-site communication", "Editing and publishing awareness", "Basic content performance review"]
        },
        {
          title: "Reflection",
          body: "This page should stay modest and evidence-led because the project is early and remaining materials are limited."
        }
      ],
      zh: [
        {
          title: "项目概览",
          body: "这是一个围绕酒吧场景展开的早期街访短视频内容项目。由于原账号目前已不再活跃或不可访问，页面中的证据主要来自留存截图、剪映草稿和个人项目复盘记录。"
        },
        {
          title: "内容策略",
          body: "项目内容机制围绕半匿名表达、故事性话题、秘密/八卦型提问和酒吧场景激励展开，用更低压力的表达方式提高嘉宾参与意愿。"
        },
        {
          title: "执行流程",
          flow: ["选题设计", "嘉宾筛选", "现场采访", "剪辑", "字幕与发布", "数据观察", "复盘迭代"]
        },
        {
          title: "结果与复盘",
          body: "这个项目作为个人内容实践记录展示，而不是已验证的商业投放案例。它保留了约 5 个月执行、200+ 条视频和 170K+ 单条最高播放的项目证据。"
        },
        {
          title: "能力体现",
          points: ["早期短视频内容执行", "夜生活场景下的话题设计", "嘉宾筛选与现场沟通", "剪辑发布意识", "基础内容数据观察"]
        },
        {
          title: "复盘",
          body: "这个页面会保持轻量和克制，不把早期项目包装成成熟商业投放案例。"
        }
      ]
    }
  }
} as const;
