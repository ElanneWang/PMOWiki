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
      title: "鐩存帴鍙備笌缇よ亰鍜屼細璁紝鏃犳劅鐣欏瓨纰庣墖鍖栦俊鎭?,
      description:
        "浼氳娌熼€氫竴閿綍鍒惰浆鍐欙紝缇よ亰鍐呭鑷姩鏁寸悊褰掓。锛岄」鐩祫浜у揩閫熷叧鑱斻€傝鍒嗘暎鍦ㄥ悇澶勭殑闅愭€х煡璇嗚嚜鐒剁暀瀛樸€?,
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
      title: "娌夋穩鍏ㄥ眬璁板繂锛岃鍥㈤槦鎷ユ湁绗簩澶ц剳",
      description:
        "涓嶆鐣欏瓨淇℃伅锛屼篃鍦ㄥ熀浜庣洰鏍囧拰娴佺▼绉疮缁忛獙銆傛柊椤圭洰鑷姩鍙洖鐩稿叧璁板繂缁欏嚭鍐崇瓥寤鸿锛屽府鍥㈤槦瑙勯伩閲嶅韪╁潙锛岃宸ヤ綔鎸佺画澶嶅埄銆?",
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
      title: "涓€寮犲叏鏅棩鍘嗭紝鏇夸唬澶嶆潅椤圭洰绠＄悊鍥捐〃",
      description:
        "鍛婂埆鐢樼壒鍥俱€佸崗浣滆〃銆佷細璁邯瑕佺殑鍒嗘暎绠＄悊銆傜敤鍏ㄦ櫙鏃ュ巻缁熶竴鎵胯浇杩涘害鐘舵€併€佸崗浣滃叧绯汇€佽繃绋嬭祫浜с€佸巻鍙茬粡楠岋紝鎺屾帶瀹屾暣椤圭洰鐢熷懡鍛ㄦ湡.",
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
    templates: {
      title: "Use templates that match the meeting",
      description:
        "Start from a repeatable structure for interviews, standups, planning, and customer calls so notes stay consistent across the team.",
      defaultTab: "User interview",
      tabs: [
        {
          label: "Customer discovery",
          title: "Northstar - Customer discovery",
          subtitle: "Today 5:05 PM 路 Jim, Michaela +5",
          sections: [
            { title: "Goals and motivations", content: "" },
            { title: "Pain points", content: "" },
            { title: "Current workflow", content: "" },
            { title: "What stood out", content: "" },
            { title: "Next actions", content: "" },
          ],
        },
        {
          label: "1 on 1",
          title: "1:1 with Sarah",
          subtitle: "Yesterday 3:00 PM 路 Alex",
          sections: [
            { title: "Updates", content: "" },
            { title: "Blockers", content: "" },
            { title: "Next steps", content: "" },
          ],
        },
        {
          label: "User interview",
          title: "Northstar - User interview",
          subtitle: "Today 5:05 PM 路 Jim, Michaela +5",
          sections: [
            { title: "Goals and motivations", content: "" },
            { title: "Pain points", content: "" },
            { title: "Current solutions", content: "" },
            { title: "User reactions", content: "" },
            { title: "Feature requests", content: "" },
          ],
        },
        {
          label: "Pitch",
          title: "Pitch - Series A",
          subtitle: "Yesterday 2:00 PM 路 Team",
          sections: [
            { title: "Problem", content: "" },
            { title: "Solution", content: "" },
            { title: "Market", content: "" },
            { title: "Competition", content: "" },
          ],
        },
        {
          label: "Standup",
          title: "Daily standup",
          subtitle: "Today 9:30 AM 路 Team",
          sections: [
            { title: "Yesterday", content: "" },
            { title: "Today", content: "" },
            { title: "Blockers", content: "" },
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
