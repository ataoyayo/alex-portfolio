export type Locale = "en" | "zh";

export const locales: Locale[] = ["en", "zh"];

export const languageLabel: Record<Locale, string> = {
  en: "EN",
  zh: "中文"
};

export const homeContent = {
  en: {
    badge: "A Tao",
    nav: {
      experience: "Experience",
      caseStudy: "Case Study",
      projects: "Projects",
      skills: "Skills",
      about: "About",
      contact: "Contact"
    },
    hero: {
      title: "A Tao",
      titleLines: ["A Tao"],
      description: "Gaming Marketing · Community · Creator Operations",
      supporting: "Gaming, content, creator collaboration and AI-driven projects.",
      issue: "PORTFOLIO / 2026",
      primaryCta: "View Experience",
      secondaryCta: "View Projects"
    },
    experienceTitle: "Experience.",
    experienceSubtitle: "Hands-on experience across gaming community operations, creator collaboration and international media projects.",
    caseStudyTitle: "Featured Case Study.",
    caseStudySubtitle: "An independent analysis completed during my Lilith Games internship, based on public game content and clearly labelled player-side estimates.",
    projectsTitle: "Selected Projects.",
    projectsSubtitle: "Independent content, AI product and workflow projects that show how I turn an idea into a usable output.",
    proofTitle: "Proof Strip",
    proofItems: [
      "0-to-1 AI Workflow",
      "GPT-to-Codex Prototyping",
      "Short-form Content Practice",
      "Media & Communication Background"
    ],
    skillsTitle: "Skills.",
    skillsSubtitle: "A concise view of the capabilities I use across gaming, content and AI-assisted work.",
    aboutTitle: "About / Background.",
    aboutBody: "Master of Management (Communication) candidate at Massey University, with experience across gaming community operations, content, creator collaboration and AI projects. Based between China and New Zealand, working in Mandarin and English.",
    footer: {
      name: "A Tao",
      line: "Open to opportunities in gaming marketing, creator operations, community and global publishing.",
      closing: "China · New Zealand · Remote",
      linkedin: "LinkedIn ↗",
      github: "GitHub ↗",
      email: "Email ↗"
    }
  },
  zh: {
    badge: "阿涛",
    nav: {
      experience: "经历",
      caseStudy: "案例",
      projects: "项目",
      skills: "技能",
      about: "关于",
      contact: "联系"
    },
    hero: {
      title: "阿涛",
      titleLines: ["阿涛"],
      description: "游戏营销 · 社区运营 · 创作者运营",
      supporting: "聚焦游戏、内容、创作者协作与 AI 驱动项目。",
      issue: "个人作品集 / 2026",
      primaryCta: "查看经历",
      secondaryCta: "查看项目"
    },
    experienceTitle: "经历。",
    experienceSubtitle: "涵盖游戏社区运营、创作者协作与国际新闻内容项目的实践经历。",
    caseStudyTitle: "重点案例。",
    caseStudySubtitle: "在莉莉丝实习期间完成的独立分析，基于公开游戏内容，并对玩家侧测算进行明确标注。",
    projectsTitle: "精选项目。",
    projectsSubtitle: "通过独立内容、AI 产品和工作流项目，展示我如何把想法转化为可使用的产出。",
    proofTitle: "能力证据条",
    proofItems: ["0-1 AI 工作流", "GPT-to-Codex 原型搭建", "短视频内容实践", "媒体与传播背景"],
    skillsTitle: "技能。",
    skillsSubtitle: "快速了解我在游戏、内容和 AI 协作中的核心能力。",
    aboutTitle: "关于 / 背景。",
    aboutBody: "新西兰梅西大学管理学（传播方向）硕士在读，拥有游戏社区运营、内容、创作者协作和 AI 项目经验。往返于中国与新西兰，可使用中英文工作。",
    footer: {
      name: "A Tao",
      line: "正在寻找游戏营销、创作者运营、社区运营与全球发行方向的机会。",
      closing: "中国 · 新西兰 · 远程",
      linkedin: "LinkedIn ↗",
      github: "GitHub ↗",
      email: "Email ↗"
    }
  }
} as const;

export const projects = [
  {
    slug: "codex-projects",
    size: "large",
    previewType: {
      en: "CareerFit and Medical Diet product prototypes",
      zh: "CareerFit 与 Medical Diet 产品原型"
    },
    title: {
      en: "CareerFit & Medical Diet AI Products",
      zh: "CareerFit 与 Medical Diet AI 产品原型"
    },
    summary: {
      en: "Two 0-to-1 AI-assisted product prototypes for career support and diet-restriction management, covering user needs, feature planning, MVP design, implementation, and iteration.",
      zh: "围绕求职辅助与饮食限制管理两类真实场景，完成用户需求分析、功能规划、MVP 设计、原型搭建与迭代。"
    },
    detailSubtitle: {
      en: "From user needs and product decisions to working AI-assisted prototypes.",
      zh: "从用户需求与产品决策，到可运行的 AI 辅助产品原型。"
    },
    meta: {
      en: ["AI Product", "0-to-1 Prototyping", "2026"],
      zh: ["AI 产品", "0-1 原型搭建", "2026"]
    }
  },
  {
    slug: "ai-short-form-video-workflow",
    size: "normal",
    previewType: {
      en: "A Tao to GPT to Coze workflow",
      zh: "A Tao 到 GPT 到 Coze 工作流"
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
    slug: "tiki-boom",
    size: "normal",
    previewType: {
      en: "Street interview content collage",
      zh: "街访内容项目拼贴"
    },
    title: {
      en: "Content Growth & Influencer Marketing",
      zh: "内容增长与达人营销"
    },
    summary: {
      en: "A five-month short-form content project covering format development, creator screening, outreach, scheduling, collaboration terms, publishing and performance iteration.",
      zh: "一项持续 5 个月的短视频内容项目，涵盖栏目形式、达人筛选、邀约沟通、档期协调、合作条件、发布与数据迭代。"
    },
    detailSubtitle: {
      en: "Short-form content growth, creator collaboration and performance-led iteration.",
      zh: "短视频内容增长、达人协作与数据驱动迭代。"
    },
    meta: {
      en: ["Content Growth", "Influencer Marketing", "2024"],
      zh: ["内容增长", "达人营销", "2024"]
    },
    homeMeta: {
      en: ["~250 Videos / 5 Months", "3 KOLs + 20 KOCs", "2024"],
      zh: ["约 250 条视频 / 5 个月", "3 位 KOL + 20 位 KOC", "2024"]
    }
  }
] as const;

export const experiences = [
  {
    company: {
      en: "Lilith Games",
      zh: "莉莉丝游戏"
    },
    role: {
      en: "Community Operations Intern · Xiaobingbing Legend (Classic Server)",
      zh: "社区运营实习生 ·《小冰冰传奇》怀旧服"
    },
    time: {
      en: "Jun 2026 – Sep 2026",
      zh: "2026.06–2026.09"
    },
    logo: "LG",
    logoSrc: "/media/logo-lilith-games.png",
    caseStudySlug: "anniversary-version-monetization-analysis",
    bullets: {
      en: [
        {
          text: "Supported daily community operations across official forums and player groups, producing version guides, event announcements and developer Q&A content around major updates.",
          emphasis: null
        },
        {
          text: "Supported creator/KOL collaboration across Bilibili and Douyin through screening, brief communication and publishing follow-up; community campaigns reached 5,000+ total participations and contributed to a 20% increase in new community registrations during the version period.",
          emphasis: "5,000+ total participations"
        },
        {
          text: "Segmented players into five groups by spending depth and progression, and tracked community activity, campaign participation and monetization feedback to support post-campaign analysis.",
          emphasis: "five groups"
        }
      ],
      zh: [
        { text: "支持官方社区与玩家群的日常运营，围绕重要版本更新产出版本攻略、活动预告与开发者问答内容。", emphasis: null },
        { text: "协助 B 站、抖音游戏 KOL 合作，参与达人筛选、Brief 沟通与发布跟进；社区活动总参与人次超 5,000，版本期间新增社区注册用户增长 20%。", emphasis: "超 5,000" },
        { text: "按付费深度与养成进度将玩家梳理为五类，并跟踪社区活跃、活动参与和付费反馈，支持活动后复盘。", emphasis: "五类" }
      ]
    }
  },
  {
    company: {
      en: "Cover News",
      zh: "封面新闻"
    },
    role: {
      en: "Operations Intern",
      zh: "运营实习生"
    },
    time: {
      en: "Nov 2025 – Mar 2026",
      zh: "2025.11–2026.03"
    },
    logo: "CN",
    logoSrc: "/media/logo-cover-news.png",
    bullets: {
      en: [
        {
          text: "Supported 20+ international news live broadcasts, remote interviews and media projects through content checks, process follow-up and cross-team coordination.",
          emphasis: "20+ international news"
        },
        {
          text: "Produced and edited short-form video content; top-performing content reached 78K+ views.",
          emphasis: "78K+ views"
        },
        {
          text: "Used ChatGPT and Kimi for initial information extraction and structured summaries, followed by manual verification.",
          emphasis: null
        }
      ],
      zh: [
        { text: "通过内容核对、流程跟进和跨团队协调，支持 20+ 场国际新闻直播、远程连线与媒体项目。", emphasis: "20+ 场" },
        { text: "制作并剪辑短视频内容，单条内容最高获得 7.8 万+播放。", emphasis: "7.8 万+播放" },
        { text: "使用 ChatGPT 和 Kimi 进行初步信息提取与结构化摘要，再完成人工核验。", emphasis: null }
      ]
    }
  }
] as const;

export const skillGroups = [
  {
    title: { en: "Gaming & Marketing", zh: "游戏与营销" },
    items: {
      en: ["Community Operations", "Influencer/KOL Collaboration", "Campaign Execution", "User Segmentation", "Performance Analysis"],
      zh: ["社区运营", "达人 / KOL 协作", "活动执行", "用户分层", "数据复盘"]
    }
  },
  {
    title: { en: "Content", zh: "内容" },
    items: { en: ["Content Strategy", "Short-form Video", "Copywriting", "Video Editing"], zh: ["内容策略", "短视频", "文案写作", "视频剪辑"] }
  },
  {
    title: { en: "Platforms", zh: "平台" },
    items: { en: ["Bilibili", "Douyin", "WeChat"], zh: ["B 站", "抖音", "微信"] }
  },
  {
    title: { en: "Data & AI", zh: "数据与 AI" },
    items: { en: ["Excel", "SQL (Basic)", "AI-assisted Research", "Workflow Design"], zh: ["Excel", "SQL（基础）", "AI 辅助研究", "工作流设计"] }
  }
] as const;

export const featuredCaseStudy = {
  slug: "anniversary-version-monetization-analysis",
  previewType: { en: "Independent commercial analysis", zh: "独立商业化分析" },
  title: { en: "Anniversary Version Monetization Analysis", zh: "周年庆版本商业化拆解" },
  subtitle: { en: "Xiaobingbing Legend Classic Server", zh: "《小冰冰传奇》怀旧服" },
  label: { en: "Independent analysis completed during internship", zh: "实习期间完成的独立分析" },
  finding: { en: "Short-term hero monetization + long-term progression monetization", zh: "短期新英雄付费 + 长期养成付费" },
  cta: { en: "View Case Study →", zh: "查看完整案例 →" },
  meta: { en: ["Game Monetization", "Player Segmentation", "2026"], zh: ["游戏商业化", "用户分层", "2026"] }
} as const;

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
      en: "CareerFit & Medical Diet AI Products",
      zh: "CareerFit 与 Medical Diet AI 产品原型"
    },
    type: {
      en: "Career support and diet-management prototypes ↗",
      zh: "求职辅助与饮食管理产品原型 ↗"
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
  "anniversary-version-monetization-analysis": {
    sections: {
      en: [
        {
          title: "Overview",
          body: "This independent case study examines how an anniversary version connected a new long-term progression system, a limited-cycle hero and short-cycle activities. It was completed during my Lilith Games internship and is presented as my own analysis, not as an official Lilith internal report."
        },
        {
          title: "Business Question",
          body: "How can one version balance engagement, monetization and resource circulation while serving players with different progression goals and resource coverage?"
        },
        {
          title: "Version Structure",
          cards: [
            ["Long-term progression", "The Scepter system and Divine Realm Maze create cross-version progression and sustained resource demand."],
            ["Short-term hero monetization", "The anniversary hero Roshan concentrates acquisition, repeat-pull and star-up demand within the hero cycle."],
            ["Engagement & circulation", "Short-cycle modes and events maintain participation, supply regular resources and create resource conversion or consumption points."]
          ]
        },
        {
          title: "Player Segmentation",
          cards: [
            ["F2P", "Selectively acquires priority heroes across versions and advances Scepters over a longer horizon."],
            ["Monthly Pass", "Can generally cover baseline hero acquisition, then prioritises one core progression target."],
            ["Monthly Pass + Battle Pass", "Retains more flexibility after baseline acquisition for star-ups, Scepters or the next cycle."],
            ["Mid-spender", "Moves beyond acquisition into star-ups and multiple core Scepter targets."],
            ["High-spender", "Selectively develops high-star heroes and several high-value progression targets."],
            ["Whale", "Pursues full collection, full progression and the version’s supply ceiling."]
          ]
        },
        {
          title: "Monetization Structure",
          cards: [
            ["Short-term", "Hero launch → acquisition → repeat pulls → star upgrades"],
            ["Long-term", "Free progression → resource gap → paid acceleration → progression milestones"]
          ]
        },
        {
          title: "Commercial Loop",
          flow: ["Trigger", "Amplifier", "Validation"]
        },
        {
          title: "Key Findings",
          points: [
            "The version combines short-term hero monetization with long-term progression monetization.",
            "Roshan concentrates current-cycle acquisition and star-up demand; Scepters extend progression and resource consumption across versions.",
            "New hero and progression goals trigger demand, resource gaps and product ladders amplify it, and PVP, ranking and visible rewards validate the investment."
          ]
        },
        {
          title: "Recommendations",
          points: [
            "Make 3-star acquisition usable, position 4-star as the clearest value step, and retain 5-star as a high-investment goal.",
            "Use low-price random exploration to serve trial-oriented payers, while keeping deterministic products for players who want assured progression.",
            "Proposed concepts: an RMB 18 random exploration pack, an RMB 388 single-hero stage pack and an RMB 688 two-hero stage pack. These are user recommendations, not live products.",
            "Maintain continuity after high-value limited packs through staged recharge rewards, added progression resources and visible milestone feedback."
          ]
        },
        {
          title: "Reflection",
          body: "Monetization is not only about selling bundles; it connects player goals, resource gaps, progression milestones and product ladders."
        },
        {
          title: "Source Notes",
          points: [
            "The approximate 21-day hero cycle and free-resource coverage figures are community-sourced/player-reported estimates, not official fixed outputs.",
            "The 3,000+ key sample, average key consumption and first-launch key coverage are player-side statistics and estimates.",
            "All RMB 18 / 388 / 688 product concepts are proposed optimisation ideas and were not presented as launched products."
          ]
        }
      ],
      zh: [
        {
          title: "概览",
          body: "这份独立案例研究周年庆版本如何连接长期养成系统、限时英雄与短周期活动。报告在莉莉丝游戏实习期间完成，代表个人分析，不是莉莉丝官方内部报告。"
        },
        {
          title: "商业问题",
          body: "一个版本如何同时平衡活跃、付费与资源循环，并承接不同养成目标和资源覆盖能力的玩家？"
        },
        {
          title: "版本结构",
          cards: [
            ["长期养成", "神杖系统与神域迷宫建立跨版本养成，延长资源需求。"],
            ["短期英雄付费", "周年英雄肉山在新英雄周期内集中承接获取、重复抽取与升星需求。"],
            ["活跃与循环", "短周期玩法与活动维持参与，补充常规资源，并建立资源转换或消耗入口。"]
          ]
        },
        {
          title: "玩家分层",
          cards: [
            ["0 氪", "跨版本选择性获取核心英雄，长周期推进神杖。"],
            ["月卡", "基本覆盖基础英雄获取，再优先推进一个核心养成目标。"],
            ["月卡 + 战令", "完成基础获取后，对升星、神杖或下一版本具有更高灵活度。"],
            ["中 R", "从英雄获取进入升星与多个核心神杖目标。"],
            ["大 R", "选择性深养高星英雄与多个高价值养成目标。"],
            ["超 R", "追求全收集、全养成与版本资源供给上限。"]
          ]
        },
        {
          title: "商业化结构",
          cards: [
            ["短期", "新英雄上线 → 获取 → 重复抽取 → 升星"],
            ["长期", "免费推进 → 资源缺口 → 付费加速 → 养成里程碑"]
          ]
        },
        {
          title: "商业化闭环",
          flow: ["触发", "放大", "验证"]
        },
        {
          title: "核心发现",
          points: [
            "版本形成「短期新英雄付费 + 长期养成付费」的双层结构。",
            "肉山集中承接当期获取与升星需求；神杖将养成与资源消耗延长至跨版本周期。",
            "新英雄与新养成目标触发需求，资源缺口和商品梯度放大投入，PVP、排名与外显反馈验证价值。"
          ]
        },
        {
          title: "建议",
          points: [
            "保证三星具备实际使用价值，将四星设为更清晰的主要付费提档，五星保留为高投入目标。",
            "以低价随机探索承接尝试型付费，同时保留确定性商品承接明确养成需求。",
            "提案概念：18 元随机探索礼包、388 元单英雄阶段礼包与 688 元双英雄阶段礼包。这些是个人建议，并非已上线商品。",
            "在高价值限购结束后，以阶段累充、附加养成资源与可见里程碑反馈维持高付费承接连续性。"
          ]
        },
        {
          title: "反思",
          body: "商业化不只是销售礼包，而是连接玩家目标、资源缺口、养成里程碑与商品梯度。"
        },
        {
          title: "数据口径",
          points: [
            "约 21 天英雄周期与免费资源覆盖数据来自社区 / 玩家侧测算，不是官方固定产出。",
            "3000+ 秘钥样本、平均秘钥消耗与首发资源覆盖为玩家侧统计与推算。",
            "18 / 388 / 688 元商品均为商业化优化提案，不是已上线商品。"
          ]
        }
      ]
    }
  },
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
          body: "This project set presents two 0-to-1 AI-assisted product prototypes: CareerFit AI Assistant for career support and Medical Diet Restriction Demo for diet-restriction management. Both projects move from user scenarios and requirement analysis to feature planning, MVP design, implementation, and iterative validation."
        },
        {
          title: "Collaboration Model",
          body: "A repeated DEFINE, DECIDE, BUILD, and REVIEW loop connects human judgement, model reasoning, and implementation."
        },
        {
          title: "Prototype Demos",
          cards: [
            ["CareerFit AI Assistant", "An AI-assisted career product prototype that matches job requirements with relevant personal experiences, supporting resume optimisation, interview preparation, and portfolio content selection."],
            ["Medical Diet Restriction Record Demo", "A public beta web prototype for recording meals and estimating nutrition intake under user-entered medical diet restrictions."],
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
          body: "这一组项目重点展示两个从 0 到 1 搭建的 AI 辅助产品原型：面向求职场景的 CareerFit AI Assistant，以及面向饮食限制管理场景的 Medical Diet Restriction Demo。两个项目均从用户场景与需求分析出发，推进功能规划、MVP 设计、原型实现与迭代验证。"
        },
        {
          title: "协作模型",
          body: "通过定义、决策、搭建与审查的持续闭环，连接人的判断、模型推理与实现工具。"
        },
        {
          title: "原型演示",
          cards: [
            ["CareerFit AI Assistant", "面向求职用户的 AI 辅助产品原型，将岗位要求与个人经历进行匹配，用于支持简历优化、面试准备和作品集内容选择。"],
            ["医嘱限制饮食记录与营养估算 Demo", "一个 public beta Web 原型工具，帮助用户在主动录入医生或营养师饮食限制后，记录食材、菜品、用油和家庭分食情况，并估算核心营养素摄入。"],
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
          title: "Growth Thinking",
          subtitle: "How repeated publishing and feedback shaped the content strategy.",
          principles: [
            ["Strong content starts with a clear audience.", "Content performance depends not only on production quality, but also on a clear understanding of the audience. Audience definition, account positioning, and communication goals shape the topics, interview questions, and presentation style that follow."],
            ["Every post is a content experiment.", "Each post tests a content hypothesis. Viewing performance, audience interaction, and topic response help reveal which directions deserve further investment, rather than treating publication as the end of the process."],
            ["Growth comes from learning, not guessing.", "Content growth should not depend on an occasional viral result. It comes from repeatedly analysing feedback, adjusting content direction, and refining presentation, so each release informs the next content decision."]
          ]
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
          title: "增长思考",
          subtitle: "这个内容项目如何在持续发布与反馈中形成增长判断。",
          principles: [
            ["好的内容，始于明确的受众。", "内容表现不仅取决于制作质量，更取决于是否理解目标受众。明确受众、内容定位和账号目标，是后续选题、采访问题和表达方式的前提。"],
            ["每一次发布，都是一次内容实验。", "每一次内容发布都是一次假设验证。通过观察播放表现、互动反馈和话题反应，判断哪些方向值得继续投入，而不是把发布当作内容流程的终点。"],
            ["增长来自持续学习，而不是不断猜测。", "内容增长并不依赖偶然爆款，而是依靠持续分析反馈、调整内容方向和优化表达方式。每一次发布都应成为下一轮内容策略的依据。"]
          ]
        }
      ]
    }
  }
} as const;
