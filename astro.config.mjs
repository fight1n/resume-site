import { defineConfig } from 'astro/config';

// 部署到 GitHub Pages 时请按实际情况修改：
// 1) 用户页（https://<用户名>.github.io）：把 site 改成你的地址，base 保持注释。
// 2) 项目页（https://<用户名>.github.io/<仓库名>）：site 改成上面的地址，
//    并取消 base 注释，把 'your-repo-name' 换成你的仓库名。
export default defineConfig({
  // 项目页（仓库名 resume-site）部署地址
  site: 'https://fight1n.github.io',
  // 项目页（仓库名 resume-site）必须设置 base，否则部署后 CSS/JS 会 404
  base: '/resume-site/',
  output: 'static',
  trailingSlash: 'always',
});
