# Awesome Prompt - AI 提示词教学网站

一个优雅的 Vue 3 教学网站，专注于教授用户如何编写有效的 AI 提示词。

## 🎯 项目特色

- **第一性原则教学**：从底层逻辑理解 AI 提示词的本质
- **优雅的设计**：采用 Apple/Notion 风格，简洁典雅
- **响应式设计**：完美适配桌面端和移动端
- **深色模式**：支持浅色/深色主题切换
- **实用导向**：提供可直接使用的模板和示例

## 🚀 技术栈

- **前端框架**：Vue 3 (Composition API)
- **路由管理**：Vue Router 4
- **样式框架**：Tailwind CSS
- **构建工具**：Vite
- **开发语言**：JavaScript

## 📁 项目结构

```
awsome-prompt/
├── public/                 # 静态资源
├── src/
│   ├── assets/            # 资源文件
│   │   └── styles/        # 样式文件
│   ├── components/        # 组件
│   │   ├── ui/           # 通用 UI 组件
│   │   ├── layout/       # 布局组件
│   │   └── tutorial/     # 教程相关组件
│   ├── views/            # 页面组件
│   ├── data/             # 数据文件
│   ├── utils/            # 工具函数
│   ├── App.vue           # 根组件
│   └── main.js           # 入口文件
├── index.html            # HTML 模板
├── package.json          # 依赖配置
├── tailwind.config.js    # Tailwind 配置
└── vite.config.js        # Vite 配置
```

## 🛠️ 安装和运行

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 📚 功能模块

### 1. 首页
- 网站理念介绍
- 第一性原则说明
- 学习价值展示

### 2. 教程中心
- 分类筛选（基础、分析、高级、创意、应用）
- 难度筛选（初级、中级、高级）
- 教程卡片展示

### 3. 教程详情
- 完整的教程内容
- Prompt 模板
- 第一性原则解析
- 实际示例
- 实用技巧

### 4. 示例库
- 各种应用场景的 Prompt 示例
- 输入输出对比
- 一键复制功能

### 5. 关于页面
- 团队介绍
- 联系方式
- 反馈渠道

## 🎨 设计特色

### 视觉风格
- **简洁典雅**：采用大量留白，突出内容
- **现代感**：使用渐变色彩和圆角设计
- **一致性**：统一的设计语言和交互模式

### 交互体验
- **流畅过渡**：轻微的动画效果
- **响应式**：完美适配各种设备
- **无障碍**：良好的键盘导航支持

### 深色模式
- **自动检测**：根据系统偏好自动切换
- **手动切换**：支持用户手动切换主题
- **持久化**：记住用户的主题选择

## 🔧 自定义配置

### Tailwind CSS 配置

项目使用自定义的 Tailwind 配置，包括：

- 自定义颜色主题
- 响应式断点
- 动画效果
- 深色模式支持

### 组件系统

项目采用模块化的组件设计：

- **UI 组件**：可复用的基础组件
- **布局组件**：页面结构组件
- **业务组件**：特定功能的组件

## 📝 内容管理

教程内容存储在 `src/data/tutorials.js` 中，采用结构化的数据格式：

```javascript
{
  id: 'unique-id',
  title: '教程标题',
  description: '教程描述',
  category: '分类',
  difficulty: '难度',
  duration: '学习时长',
  icon: '图标',
  content: {
    introduction: '介绍内容',
    template: 'Prompt 模板',
    explanation: ['第一性原则解析'],
    examples: [示例数组],
    tips: ['实用技巧']
  }
}
```

## 🚀 部署

### 静态部署

构建后的文件可以直接部署到任何静态文件服务器：

```bash
npm run build
```

生成的 `dist` 目录包含所有静态文件。

### 推荐部署平台

- **Vercel**：零配置部署
- **Netlify**：自动部署
- **GitHub Pages**：免费托管
- **阿里云 OSS**：国内访问

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系我们

- 邮箱：hello@awesomeprompt.com
- GitHub：[@awesomeprompt](https://github.com/awesomeprompt)

---

**Awesome Prompt** - 让每个人都能掌握 AI 提示词的艺术 🚀 