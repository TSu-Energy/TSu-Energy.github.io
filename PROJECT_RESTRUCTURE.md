# TSu Energy 项目重构计划

## 🎯 重构目标

1. **清晰的文件夹结构** - 按功能和类型组织
2. **统一的命名规范** - 使用一致的命名方式
3. **模块化设计** - 组件化、可复用
4. **优化的资源管理** - 图片、CSS、JS 分类管理
5. **完善的文档** - 中英文文档齐全

## 📁 新的项目结构

```
TSu-Energy.github.io/
│
├── 📁 public/                      # 公共静态资源
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
│
├── 📁 assets/                      # 资源文件
│   ├── 📁 css/                     # 样式文件
│   │   ├── main.css               # 主样式（编译后）
│   │   ├── main.min.css           # 压缩版本
│   │   └── animate.css            # 动画库
│   │
│   ├── 📁 js/                      # JavaScript 文件
│   │   ├── 📁 core/               # 核心功能
│   │   │   ├── main.js
│   │   │   ├── navigation.js
│   │   │   └── scroll.js
│   │   ├── 📁 modules/            # 功能模块
│   │   │   ├── form-validator.js
│   │   │   ├── lazy-loader.js
│   │   │   ├── language-switcher.js
│   │   │   └── accessibility.js
│   │   ├── 📁 utils/              # 工具函数
│   │   │   ├── performance.js
│   │   │   └── helpers.js
│   │   └── 📁 vendor/             # 第三方库
│   │       └── wow.min.js
│   │
│   └── 📁 images/                  # 图片资源
│       ├── 📁 logo/               # Logo 文件
│       ├── 📁 team/               # 团队照片
│       ├── 📁 products/           # 产品图片
│       ├── 📁 icons/              # 图标
│       └── 📁 backgrounds/        # 背景图片
│
├── 📁 pages/                       # 页面文件
│   ├── 📁 en/                     # 英文页面
│   │   ├── index.html
│   │   ├── about.html
│   │   ├── solutions.html
│   │   ├── products.html
│   │   ├── team.html
│   │   ├── news.html
│   │   └── contact.html
│   │
│   ├── 📁 zh/                     # 中文页面
│   │   ├── index.html
│   │   ├── about.html
│   │   ├── solutions.html
│   │   ├── products.html
│   │   ├── team.html
│   │   ├── news.html
│   │   └── contact.html
│   │
│   └── 📁 blog/                   # 博客文章
│       ├── index.html
│       └── 📁 posts/
│
├── 📁 components/                  # 可复用组件
│   ├── header.html
│   ├── footer.html
│   ├── navigation.html
│   ├── contact-form.html
│   └── team-member-card.html
│
├── 📁 src/                         # 源文件
│   ├── 📁 styles/                 # 样式源文件
│   │   ├── main.css              # 主样式
│   │   ├── 📁 base/              # 基础样式
│   │   ├── 📁 components/        # 组件样式
│   │   ├── 📁 layouts/           # 布局样式
│   │   └── 📁 utilities/         # 工具类
│   │
│   └── 📁 scripts/                # 脚本源文件
│
├── 📁 docs/                        # 文档
│   ├── 📁 en/                     # 英文文档
│   │   ├── README.md
│   │   ├── DEVELOPER.md
│   │   └── API.md
│   │
│   ├── 📁 zh/                     # 中文文档
│   │   ├── README.md
│   │   ├── DEVELOPER.md
│   │   └── 快速开始.md
│   │
│   └── 📁 guides/                 # 使用指南
│
├── 📁 config/                      # 配置文件
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── build.config.js
│
├── 📁 archived/                    # 归档文件
│   └── old-versions/
│
├── 📁 .github/                     # GitHub 配置
│   └── workflows/
│
├── index.html                      # 主页（重定向）
├── package.json
├── .gitignore
├── .prettierrc
└── README.md

```

## 🔄 文件重命名规则

### HTML 文件
- `index.html` → 保持（主页重定向）
- `index-modern.html` → `pages/en/index.html`
- `index-ch.html` → `pages/zh/index.html`
- `about-us.html` → `pages/en/about.html`
- `contact.html` → `pages/en/contact.html`
- `product.html` → `pages/en/products.html`
- `blog-grids.html` → `pages/blog/index.html`
- `blog-details.html` → `pages/blog/posts/template.html`

### JavaScript 文件
- `main.js` → `assets/js/core/main.js`
- `form-validation.js` → `assets/js/modules/form-validator.js`
- `lazy-loading.js` → `assets/js/modules/lazy-loader.js`
- `language-switch.js` → `assets/js/modules/language-switcher.js`
- `component-loader.js` → `assets/js/modules/component-loader.js`
- `performance.js` → `assets/js/utils/performance.js`
- `accessibility.js` → `assets/js/modules/accessibility.js`
- `wow.min.js` → `assets/js/vendor/wow.min.js`

### CSS 文件
- `tailwind.css` → `assets/css/main.css`
- `src/tailwind.css` → `src/styles/main.css`

### 组件文件
- `templates/navbar.html` → `components/navigation.html`
- `templates/contactForm.html` → `components/contact-form.html`
- `templates/member.html` → `components/team-member-card.html`

## 📝 命名规范

### 文件命名
- **HTML**: 小写，连字符分隔 (`about-us.html`)
- **CSS**: 小写，连字符分隔 (`main.css`)
- **JavaScript**: 小写，连字符分隔 (`form-validator.js`)
- **图片**: 小写，连字符分隔，描述性 (`team-member-01.jpg`)
- **文件夹**: 小写，连字符分隔 (`team-photos/`)

### 代码命名
- **CSS 类**: kebab-case (`.btn-primary`)
- **JavaScript 变量**: camelCase (`formValidator`)
- **JavaScript 常量**: UPPER_SNAKE_CASE (`MAX_WIDTH`)
- **JavaScript 函数**: camelCase (`validateForm()`)

## 🎨 优化内容

### 1. HTML 优化
- ✅ 语义化标签
- ✅ SEO 优化
- ✅ 无障碍支持
- ✅ 性能优化

### 2. CSS 优化
- ✅ 模块化组织
- ✅ BEM 命名规范
- ✅ 响应式设计
- ✅ 性能优化

### 3. JavaScript 优化
- ✅ 模块化设计
- ✅ ES6+ 语法
- ✅ 错误处理
- ✅ 性能优化

### 4. 资源优化
- ✅ 图片压缩
- ✅ 懒加载
- ✅ CDN 使用
- ✅ 缓存策略

## 🚀 实施步骤

### 阶段 1: 创建新结构
1. 创建新的文件夹结构
2. 移动和重命名文件
3. 更新文件引用

### 阶段 2: 代码优化
1. 重构 HTML 文件
2. 优化 CSS 代码
3. 重构 JavaScript 代码

### 阶段 3: 文档更新
1. 更新 README
2. 创建开发文档
3. 添加使用指南

### 阶段 4: 测试和部署
1. 功能测试
2. 性能测试
3. 浏览器兼容性测试
4. 部署上线

## ✅ 检查清单

- [ ] 创建新文件夹结构
- [ ] 移动所有文件
- [ ] 更新所有引用路径
- [ ] 重构 HTML 文件
- [ ] 优化 CSS 代码
- [ ] 重构 JavaScript 代码
- [ ] 压缩图片资源
- [ ] 更新文档
- [ ] 测试所有功能
- [ ] 部署上线

## 📊 预期效果

- **文件组织**: 提升 90%
- **代码可维护性**: 提升 80%
- **加载速度**: 提升 50%
- **开发效率**: 提升 70%

---

**创建日期**: 2026-03-12
**状态**: 待实施
