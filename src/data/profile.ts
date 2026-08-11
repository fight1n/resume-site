export interface SocialLink {
  label: string;
  url: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  summary: string;
  skills: string[];
  socials: SocialLink[];
}

// ⚠️ 把下面的占位信息替换成你的真实简历资料即可。
export const profile: Profile = {
  name: '汤灿',
  title: '求职中',
  tagline: '用代码把想法变成产品，关注体验细节与工程效率。',
  location: '中国 · 江苏',
  email: '1725414770@qq.com',
  summary:
    '这里放一段自我介绍（占位，请替换）：我是一名前端工程师，熟悉 TypeScript / React / Vue 等主流技术栈，' +
    '做过数据可视化、组件库与性能优化相关的工作，习惯把复杂问题拆成可落地的小步骤。' +
    '希望加入一家重视产品与工程质量的团队，持续打磨技术与协作能力。',
  skills: [
    'TypeScript',
    'React',
    'Vue 3',
    'Node.js',
    'Astro',
    'Web 性能优化',
    '数据可视化',
  ],
  socials: [
    { label: 'GitHub', url: 'https://github.com/fight1n' },
    { label: '邮箱', url: 'mailto:1725414770@qq.com' },
    { label: '文章', url: '/articles/' },
    { label: '项目', url: '/projects/' },
  ],
};
