export interface ActionLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavItem extends ActionLink {
  hasDropdown?: boolean;
}

export interface ProductMenuItem {
  title: string;
  description: string;
  href: string;
  badge: string;
}

export interface FooterColumn {
  title: string;
  links: ActionLink[];
}

export interface SocialLink extends ActionLink {
  platform: "linkedin" | "x" | "youtube";
}

export interface Person {
  name: string;
  role: string;
  company?: string;
}

export interface Quote extends Person {
  quote: string;
}

export interface SocialProof extends Person {
  handle: string;
  text: string;
  date: string;
  likes: string;
}

export interface BlogPostSummary {
  title: string;
  excerpt: string;
  authors: string[];
  date: string;
  href: string;
  type: "blog" | "updates" | "press";
  isExternal: boolean;
}

export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period: string;
  cta: ActionLink;
  secondaryCta?: ActionLink;
  features: string[];
  highlighted: boolean;
}

export interface ResourceCard {
  title: string;
  description: string;
  href: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TemplateSection {
  title: string;
  content: string;
}

export interface MeetingTemplate {
  label: string;
  title: string;
  subtitle: string;
  sections: TemplateSection[];
}

export interface SiteContent {
  brand: {
    name: string;
    legalName: string;
    language: string;
    tagline: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  navigation: {
    items: NavItem[];
    productMenu: ProductMenuItem[];
  };
  footer: {
    ctaTitle: string;
    ctaDescription: string;
    ctaLinks: ActionLink[];
    columns: FooterColumn[];
    socialLinks: SocialLink[];
    legalLinks: ActionLink[];
    note: string;
    copyright: string;
  };
  home: {
    hero: {
      announcement: {
        label: string;
        href: string;
        ctaLabel: string;
      };
      title: string;
      description: string;
      primaryCta: ActionLink;
      secondaryCta: ActionLink;
      demo: {
        meetingLabel: string;
        statPills: string[];
        rawNotesLabel: string;
        rawNotes: string[];
        enhancedLabel: string;
        enhancedSections: Array<{
          title: string;
          description: string;
        }>;
      };
    };
    howItWorks: {
      title: string;
      steps: Array<{
        index: string;
        title: string;
        description: string;
        windowTitle: string;
        windowLabel: string;
        summaryTitle?: string;
        summaryDescription?: string;
        helperText?: string;
        platforms?: string[];
      }>;
    };
    record: {
      title: string;
      description: string;
      items: string[];
      quote: Quote;
    };
    memory: {
      title: string;
      description: string;
      shareOptions: string[];
      noteSections: Array<{
        title: string;
        bullets: string[];
      }>;
    };
    takeaction: {
      title: string;
      description: string;
      actionOptions: string[];
      actionSections: Array<{
        title: string;
        bullets: string[];
      }>;
    };
    calendar: {
      title: string;
      description: string;
      actionItems: string[];
      contextTitle: string;
      contextItems: string[];
      contextCtaLabel: string;
      quote: Quote;
    };
    templates: {
      title: string;
      description: string;
      tabs: MeetingTemplate[];
      defaultTab: string;
    };
    testimonials: {
      title: string;
      socialHeading: string;
      featured: Quote[];
      social: SocialProof[];
    };
  };
  pricing: {
    title: string;
    description: string;
    plans: PricingPlan[];
    notePrefix: string;
    noteText: string;
    noteLink: ActionLink;
    testimonial: {
      quote: string;
      person: Person;
      href: string;
      hrefLabel: string;
    };
    resourcesTitle: string;
    resources: ResourceCard[];
  };
  faq: {
    title: string;
    items: FaqItem[];
  };
  blog: {
    title: string;
    filters: Array<{
      label: string;
      value: "all" | "blog" | "updates" | "press";
    }>;
    posts: BlogPostSummary[];
  };
}

export const siteContent: SiteContent = {
  brand: {
    name: "Alens",
    legalName: "Alens, Inc.",
    language: "zh-CN",
    tagline: "AI meeting workspace for focused teams.",
  },
  seo: {
    title: "Alens | AI Meeting Workspace",
    description:
      "Alens helps teams capture meetings, organize context, and turn conversations into action without adding extra overhead.",
    keywords: [
      "AI meeting notes",
      "meeting workspace",
      "team knowledge",
      "meeting assistant",
      "note automation",
    ],
  },
  navigation: {
    items: [
      { label: "Features", href: "/", hasDropdown: true },
      { label: "Pricing", href: "/pricing" },
      { label: "Blog", href: "/blog" },
      { label: "Customers", href: "#" },
      { label: "Download", href: "#" },
    ],
    productMenu: [
      {
        title: "Workspace",
        description: "Capture calls, notes, and follow-ups in one place.",
        href: "/",
        badge: "W",
      },
      {
        title: "Chat",
        description: "Ask questions across meetings and team context.",
        href: "#",
        badge: "C",
      },
      {
        title: "Mobile",
        description: "Review notes and highlights on the go.",
        href: "#",
        badge: "M",
      },
    ],
  },
  footer: {
    ctaTitle: "让 AI 加入团队，成为项目推进的加速器",
    ctaDescription:
      "ALens 自动沉淀协作经验、追踪待办事项、预警流程风险，让团队从繁琐的跟进中解脱出来，专注创造价值。",
    ctaLinks: [
      { label: "抢先体验", href: "#" },
      { label: "联系我们", href: "#" },
    ],
    columns: [
      {
        title: "Product",
        links: [
          { label: "Overview", href: "/" },
          { label: "Pricing", href: "/pricing" },
          { label: "Templates", href: "#" },
          { label: "Integrations", href: "#" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "#" },
          { label: "Careers", href: "#" },
          { label: "Contact", href: "#" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Blog", href: "/blog" },
          { label: "Security", href: "#" },
          { label: "Help Center", href: "#" },
        ],
      },
      {
        title: "Developers",
        links: [
          { label: "API", href: "#" },
          { label: "Changelog", href: "#" },
          { label: "Status", href: "#" },
        ],
      },
    ],
    socialLinks: [
      { label: "LinkedIn", href: "#", platform: "linkedin" },
      { label: "X", href: "#", platform: "x" },
      { label: "YouTube", href: "#", platform: "youtube" },
    ],
    legalLinks: [
      { label: "Terms", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Security", href: "#" },
    ],
    note: "Built for teams that want cleaner context and faster follow-through.",
    copyright: "© Alens, Inc. 2026",
  },
  home: {
    hero: {
      announcement: {
        label: "给多线程团队的 AI 项目管家",
        href: "/blog",
        ctaLabel: "See updates",
      },
      title: "让团队专注创造 让 AI 推动协作、沉淀经验、优化流程",
      description:
        "ALens 把碎片化信息沉淀成经验，把冗余协作变成可追踪、可复用、可推进的项目流程。",
      primaryCta: { label: "抢先体验", href: "#" },
      secondaryCta: { label: "了解更多", href: "#" },
      demo: {
        meetingLabel: "Intro call: Northstar",
        statPills: ["Team of 100", "US"],
        rawNotesLabel: "Your notes + transcript",
        rawNotes: [
          "Northstar overview",
          "100 employees, hiring 20 more this quarter",
          "Operations split between San Francisco and Austin",
        ],
        enhancedLabel: "AI enhanced",
        enhancedSections: [
          {
            title: "Company snapshot",
            description:
              "Series B company with a distributed operating team and an active hiring plan for Q3.",
          },
          {
            title: "Current pain points",
            description:
              "Manual updates, fragmented context, and a workflow that still depends on copying notes into other tools.",
          },
          {
            title: "Immediate needs",
            description:
              "Shared follow-ups, clean summaries, and a simple way to surface decisions after every meeting.",
          },
        ],
      },
    },
    howItWorks: {
      title: "ALens 如何融入人类团队的协作",
      steps: [
        {
          index: "01",
          title: "ALens 有耳朵和眼睛，能进入正在发生的工作流",
          description:
            "ALens 装在 U 盘里，并自带录音能力。无论是线下沟通中的录音转录，还是群聊、邮件里的协作信息，它都能持续接住项目过程中的关键信息。",
          windowTitle: "工作流信息接入中",
          windowLabel: "录音 / 转写 / 协作信息",
        },
        {
          index: "02",
          title: "ALens 有大脑，能在过程中构建项目记忆",
          description:
            "ALens 会整理项目推进中的问题、反馈、决策和处理结果，把阶段产出沉淀成项目记忆，并在后续推进时主动召回经验、给出建议。",
          windowTitle: "项目记忆构建中",
          windowLabel: "问题 / 反馈 / 决策",
          summaryTitle: "阶段记忆已沉淀",
          summaryDescription:
            "自动整理关键问题、反馈与处理结果，形成可复用的项目记忆。",
          helperText: "后续推进时可主动召回经验并给出建议。",
        },
        {
          index: "03",
          title: "ALens 会行动，像项目管理者一样推动执行和决策",
          description:
            "ALens 不只记录信息，还能在接入 IM 和邮箱后绑定干系人、跟进事项、催办动作，并基于完整上下文提供建议，推动项目持续向前。",
          windowTitle: "项目推进助手",
          windowLabel: "催办 / 协同 / 建议",
          platforms: ["IM", "邮箱", "干系人", "催办", "建议"],
        },
      ],
    },
    record: {
      title: "直接参与群聊和会议，无感留存碎片化信息",
      description:
        "会议沟通一键录制转写，群聊内容自动整理归档，项目资产快速关联，让分散在各处的过程信息自然留存。",
      items: ["Zoom", "Google Meet", "Webex", "Slack", "Microsoft Teams"],
      quote: {
        quote:
          "Alens became part of our weekly operating rhythm almost immediately. It cut down the noise after every meeting.",
        name: "Maya Patel",
        role: "Head of Product",
        company: "Northstar",
      },
    },
    memory: {
      title: "沉淀全局记忆，让团队拥有第二大脑",
      description:
        "基于目标和流程积累经验，新项目自动召回相关记忆给出决策建议，帮团队规避重复踩坑，让工作持续复利。",
      shareOptions: [
        "Public link",
        "#customer-feedback",
        "Email recap",
        "CRM record",
        "Project update",
        "Candidate notes",
        "1:1 notes",
        "#meeting-notes",
      ],
      noteSections: [
        {
          title: "Northstar overview",
          bullets: [
            "100 employees with active hiring in sales and support",
            "Operations split between San Francisco and Austin",
          ],
        },
        {
          title: "Current process",
          bullets: [
            "Manual updates after every call",
            "Too many handoffs between notes, CRM, and project tools",
            "Decision history is hard to recover later",
          ],
        },
        {
          title: "Immediate requirements",
          bullets: [
            "Better visibility into follow-ups",
            "Cleaner information sharing across teams",
          ],
        },
      ],
    },
    calendar: {
      title: "一张全景日历，替代复杂项目图表",
      description:
        "告别甘特图、协作表和会议纪要的分散管理。用全景日历统一承载进度状态、协作关系、过程资产和历史经验，掌控完整项目生命周期。",
      actionItems: [
        "Write a follow-up email",
        "List action items",
        "What is their budget?",
        "Summarize open questions",
        "What objections came up?",
        "Who owns the next step?",
        "Pull a project summary",
        "Draft the weekly update",
        "Highlight risks",
        "Build a handoff note",
        "Create a short recap",
      ],
      contextTitle: "Northstar overview",
      contextItems: [
        "100-person team with active hiring plans",
        "Distributed operations across two offices",
        "Needs faster, more reliable post-meeting follow-through",
      ],
      contextCtaLabel: "Ask Alens anything",
      quote: {
        quote:
          "The payoff is how quickly we can get from a conversation to something the rest of the team can actually use.",
        name: "Dina Cross",
        role: "Operations Lead",
        company: "Northstar",
      },
    },
    takeaction: {
      title: "不只记录，更主动推动和执行",
      description:
        "基于项目上下文识别关键事项，主动预警流程风险、督促干系人履约；依据流程准则完成成果验收，产出标准化交付文档。",
      actionOptions: [
        "提醒负责人",
        "同步干系人",
        "生成跟进邮件",
        "整理会议结论",
        "标记项目风险",
        "建议下一步",
        "追踪承诺事项",
        "更新项目状态",
      ],
      actionSections: [
        {
          title: "识别下一步",
          bullets: [
            "从会议、群聊和邮件中识别待办事项",
            "把事项关联到对应项目和负责人",
          ],
        },
        {
          title: "推动协作",
          bullets: [
            "在 IM 和邮箱中提醒相关干系人",
            "根据项目阶段催办关键动作",
          ],
        },
        {
          title: "辅助决策",
          bullets: [
            "基于完整上下文提示风险和阻塞",
            "为下一次沟通生成推进建议",
          ],
        },
      ],
    },
    templates: {
      title: "适合多线程项目推进的真实工作场景",
      description:
        "当一个人同时推进多个项目、客户、产品或案件时，ALens 会帮助团队接住过程信息、沉淀经验，并持续推动下一步行动。",
      defaultTab: "创业团队",
      tabs: [
        {
          label: "创业团队",
          title: "创始人同时推进产品、融资和客户拓展",
          subtitle:
            "内部产品研发、外部投资人沟通和客户对接常常同时发生，ALens 帮助创始人把每条线的进展、反馈和下一步行动放回同一个项目视图。",
          sections: [
            { title: "产品研发", content: "记录需求讨论、版本决策和研发阻塞。" },
            { title: "投资人沟通", content: "沉淀每次反馈、关注点和后续材料。" },
            { title: "客户拓展", content: "追踪客户问题、承诺事项和下一次跟进。" },
            { title: "团队协作", content: "提醒相关成员处理关键任务。" },
            { title: "复盘记忆", content: "把阶段经验沉淀为后续项目的参考。" },
          ],
        },
        {
          label: "快消产品",
          title: "产品经理并行管理多个 SKU 的完整生命周期",
          subtitle:
            "从需求策划、供应链沟通、生产排期到上线反馈，每个 SKU 都有大量过程信息。ALens 帮助产品经理把分散沟通和任务串成可追溯链路。",
          sections: [
            { title: "需求策划", content: "记录市场洞察、卖点和产品定义。" },
            { title: "生产协同", content: "同步供应商沟通、打样反馈和排期变化。" },
            { title: "上线准备", content: "追踪物料、渠道、定价和库存事项。" },
            { title: "风险提醒", content: "识别延期、返工和跨团队阻塞。" },
            { title: "经验复用", content: "沉淀每个 SKU 的问题和处理方式。" },
          ],
        },
        {
          label: "B2B 销售",
          title: "客户经理同时跟进多个客户项目",
          subtitle:
            "B2B 客户推进周期长、干系人多、信息分散。ALens 帮助客户经理记住每个客户的需求、异议、决策链和承诺事项。",
          sections: [
            { title: "客户需求", content: "整理痛点、预算、优先级和采购目标。" },
            { title: "干系人关系", content: "记录使用方、决策方和影响者。" },
            { title: "跟进事项", content: "追踪报价、方案、合同和技术支持。" },
            { title: "异议处理", content: "沉淀客户顾虑和过往回应方式。" },
            { title: "下一步建议", content: "基于历史沟通提醒最佳推进动作。" },
          ],
        },
        {
          label: "律师案件",
          title: "律师并行处理多起案件和客户沟通",
          subtitle:
            "案件推进依赖大量事实、材料、时间线和沟通记录。ALens 帮助律师把关键事实、证据材料、客户反馈和待办事项持续归档。",
          sections: [
            { title: "案件事实", content: "沉淀时间线、争议点和关键证据。" },
            { title: "客户沟通", content: "记录客户反馈、补充材料和确认事项。" },
            { title: "材料准备", content: "追踪文书、证据、合同和提交节点。" },
            { title: "风险提示", content: "提醒期限、缺失材料和未确认信息。" },
            { title: "案件复用", content: "复盘相似案件的策略和处理经验。" },
          ],
        },
        {
          label: "达人 Agency",
          title: "达人 agency 同步推进多个营销计划",
          subtitle:
            "从品牌需求、达人筛选、内容脚本、排期发布到效果复盘，每个营销计划都有大量协作节点。ALens 帮助团队统一管理多项目进度。",
          sections: [
            { title: "品牌需求", content: "记录 brief、目标人群、预算和交付标准。" },
            { title: "达人协作", content: "追踪达人名单、报价、档期和确认状态。" },
            { title: "内容执行", content: "同步脚本、拍摄、修改和发布节点。" },
            { title: "项目推进", content: "提醒内部同事和外部合作方完成动作。" },
            { title: "复盘沉淀", content: "整理投放结果、合作表现和下次优化建议。" },
          ],
        },
      ],
    },
    testimonials: {
      title: "Built for teams that need clarity after every conversation",
      socialHeading: "What early teams are saying",
      featured: [
        {
          quote:
            "Alens made our project and customer meetings far easier to revisit. The summary quality is strong enough that the team actually relies on it.",
          name: "Maya Patel",
          role: "Head of Product",
          company: "Northstar",
        },
        {
          quote:
            "We stopped losing decisions in long meeting threads. That alone made it worth rolling out to the whole team.",
          name: "Leo Martin",
          role: "Founder",
          company: "Driftline",
        },
      ],
      social: [
        {
          name: "Erin Cho",
          handle: "erincho",
          role: "Operator",
          company: "Northstar",
          text:
            "The best part is not the transcript. It is the speed from meeting to usable team context.",
          date: "Jun 20, 2026",
          likes: "556",
        },
        {
          name: "Sam Rivas",
          handle: "samrivas",
          role: "Founder",
          company: "Ledgerly",
          text:
            "We now review project meetings in minutes instead of trying to reconstruct what happened from scattered notes.",
          date: "Jan 8, 2026",
          likes: "1.6K",
        },
        {
          name: "Tess Morgan",
          handle: "tessmorgan",
          role: "Product lead",
          company: "Looplane",
          text:
            "It gave our team a much cleaner handoff between customer conversations and product decisions.",
          date: "Apr 3, 2026",
          likes: "364",
        },
      ],
    },
  },
  pricing: {
    title: "Pricing that scales with the team",
    description:
      "Start small, prove the workflow, and upgrade only when you need broader collaboration or admin controls.",
    plans: [
      {
        name: "Starter",
        description: "Best for trying the workflow with a small team.",
        price: "$0",
        period: "per user per month",
        cta: { label: "Start free", href: "#" },
        features: [
          "AI meeting notes",
          "Limited meeting history",
          "Search across recent meetings",
          "Shared folders",
          "Basic templates",
          "Multi-language support",
        ],
        highlighted: false,
      },
      {
        name: "Team",
        description: "Best for individual operators and growing teams.",
        price: "$16",
        period: "per user per month",
        cta: { label: "Start team plan", href: "#" },
        features: [
          "Everything in Starter",
          "Unlimited notes and history",
          "Advanced AI answers",
          "CRM, docs, and chat integrations",
          "Centralized billing",
          "Custom workflows and templates",
          "API access",
        ],
        highlighted: true,
      },
      {
        name: "Enterprise",
        description: "Best for larger teams with admin and security needs.",
        price: "$39",
        period: "per user per month",
        cta: { label: "Talk to sales", href: "#" },
        secondaryCta: { label: "Request overview", href: "#" },
        features: [
          "Everything in Team",
          "SSO and domain controls",
          "Advanced permissions",
          "Workspace-level retention",
          "Priority support",
          "Usage analytics",
          "Admin API access",
        ],
        highlighted: false,
      },
    ],
    notePrefix: "ALENS CARES",
    noteText: "1.5% of every paid subscription is reserved for team education and tooling grants through",
    noteLink: { label: "our partner fund", href: "#" },
    testimonial: {
      quote:
        "\"As we scaled our operating cadence, we needed a way to keep decisions visible without slowing the team down. Alens gave us that layer of clarity.\"",
      person: {
        name: "Nora Bell",
        role: "COO",
        company: "Rivet",
      },
      href: "#",
      hrefLabel: "Read the customer story",
    },
    resourcesTitle: "Resources",
    resources: [
      {
        title: "Security",
        description: "How we think about privacy, access, and team controls.",
        href: "#",
      },
      {
        title: "Policies",
        description: "The core product, billing, and usage policies in one place.",
        href: "#",
      },
      {
        title: "FAQs",
        description: "Answers to common questions about rollout and adoption.",
        href: "#",
      },
    ],
  },
  faq: {
    title: "Things worth knowing",
    items: [
      {
        question: "What changes between Team and Enterprise?",
        answer:
          "Enterprise adds admin controls, broader permissions, SSO, retention controls, and higher-touch support for larger organizations.",
      },
      {
        question: "Can we control who sees shared notes?",
        answer:
          "Yes. Shared folders, workspace settings, and permission layers can be used to decide how broadly notes are visible.",
      },
      {
        question: "Which tools does Alens integrate with?",
        answer:
          "The product is designed to fit into your existing workflow with docs, chat, CRM, and internal knowledge tools.",
      },
      {
        question: "Do you use our data to train models?",
        answer:
          "No. Customer content is not used for public model training, and workspace policies can be configured for stricter handling.",
      },
      {
        question: "Is SSO available?",
        answer:
          "Yes. SSO is available on Enterprise plans for teams that need centralized identity and access management.",
      },
      {
        question: "How do you support rollouts across a larger company?",
        answer:
          "We support phased rollout, admin onboarding, and workspace-level settings so teams can adopt the product with minimal disruption.",
      },
    ],
  },
  blog: {
    title: "Blog",
    filters: [
      { label: "All", value: "all" },
      { label: "Blog", value: "blog" },
      { label: "Updates", value: "updates" },
      { label: "Press", value: "press" },
    ],
    posts: [
      {
        title: "Designing a meeting workspace that teams actually use",
        excerpt:
          "What we learned while turning meeting notes from a personal artifact into shared operating context.",
        authors: ["Ava", "Liam"],
        date: "May 6",
        href: "#",
        type: "blog",
        isExternal: false,
      },
      {
        title: "Why follow-up speed matters more than meeting length",
        excerpt:
          "The hidden cost of slow recap loops, and how tighter meeting workflows change team velocity.",
        authors: ["Nina"],
        date: "April 27",
        href: "#",
        type: "blog",
        isExternal: false,
      },
      {
        title: "A cleaner shared notes workflow is live",
        excerpt:
          "New updates to team sharing, structured recaps, and reusable templates across common meeting types.",
        authors: ["Kai"],
        date: "April 21",
        href: "#",
        type: "updates",
        isExternal: false,
      },
      {
        title: "Alens is now available for broader team pilots",
        excerpt:
          "What changed in the product, what we are testing next, and how early teams can get involved.",
        authors: ["Mila"],
        date: "March 25",
        href: "#",
        type: "updates",
        isExternal: false,
      },
      {
        title: "How product teams are rebuilding meeting hygiene",
        excerpt:
          "A third-party look at the shift from passive transcripts to active, structured meeting workspaces.",
        authors: ["Work Journal"],
        date: "February 26",
        href: "https://example.com",
        type: "press",
        isExternal: true,
      },
      {
        title: "What we changed in the latest homepage cleanup",
        excerpt:
          "A practical note on simplifying the site structure so content can evolve faster than the layout.",
        authors: ["Aria"],
        date: "February 9",
        href: "#",
        type: "blog",
        isExternal: false,
      },
    ],
  },
};
