import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 文章集合
// 关键字段 date：作者手动填写的「完稿时间」，可设为任意过去日期。
// 列表与详情统一按此字段排序、展示（体现思考印记），与实际上传日无关。
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

// 项目集合
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    role: z.string().optional(),
    tech: z.array(z.string()).default([]),
    links: z
      .object({
        repo: z.string().optional(),
        demo: z.string().optional(),
      })
      .optional(),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

export const collections = { articles, projects };
