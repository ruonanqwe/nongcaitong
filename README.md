# 农财通 (NongCaiTong)

农财通是一个专注于服务农业产业链的综合性金融科技平台，致力于为农户、农业企业和金融机构搭建高效、透明的金融服务桥梁。

## 项目愿景

打造中国领先的农业产业链金融服务平台，通过科技创新助力乡村振兴。

## 核心功能模块

- **农户金融服务**
  - 贷款申请与管理
  - 信用评估系统
  - 还款计划管理
  - 农户档案管理

- **企业服务平台**
  - 供应链金融
  - 订单融资
  - 仓单质押
  - 企业信用评级

- **金融机构合作**
  - 风险评估模型
  - 贷后管理系统
  - 农业项目评估
  - 数据分析报表

- **农业资讯中心**
  - 政策解读
  - 市场行情
  - 种植指导
  - 天气预报

## 技术栈

- **前端框架**: Next.js 14
- **UI 组件**: 
  - Radix UI
  - Tailwind CSS
  - Framer Motion
- **状态管理**: React Hook Form
- **数据可视化**: Recharts
- **类型检查**: TypeScript
- **其他工具**: 
  - date-fns (日期处理)
  - zod (数据验证)
  - sonner (通知提示)

## 系统特性

- 现代化的响应式界面设计
- 完整的主题支持（明/暗模式）
- 丰富的 UI 组件库
- 专业的数据可视化展示
- 严格的表单验证和处理
- 完善的数据安全机制
- 高性能的实时数据处理
- 多终端适配支持

## 开始使用

1. 克隆项目
```bash
git clone [repository-url]
```

2. 安装依赖
```bash
npm install
```

3. 环境配置
- 复制 `.env.example` 到 `.env.local`
- 配置必要的环境变量

4. 运行开发服务器
```bash
npm run dev
```

5. 构建生产版本
```bash
npm run build
```

6. 启动生产服务器
```bash
npm start
```

## 开发命令

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm start` - 启动生产服务器
- `npm run lint` - 运行代码检查
- `npm run test` - 运行测试用例

## 项目结构

```
agriculture-finance-app/
├── app/                    # 应用主要页面
│   ├── (auth)/            # 认证相关页面（路由组）
│   │   ├── login/         # 登录页面
│   │   ├── register/      # 注册页面
│   │   └── forgot/        # 密码找回
│   ├── (dashboard)/       # 控制台页面（路由组）
│   │   ├── overview/      # 总览页面
│   │   ├── analytics/     # 数据分析
│   │   └── settings/      # 系统设置
│   ├── loans/             # 贷款业务页面
│   │   ├── apply/         # 贷款申请
│   │   ├── review/        # 审核管理
│   │   └── repayment/     # 还款管理
│   ├── profile/           # 用户档案页面
│   └── layout.tsx         # 布局组件
├── components/            # 可复用组件
│   ├── ui/               # UI基础组件
│   │   ├── button/       # 按钮组件
│   │   ├── card/         # 卡片组件
│   │   ├── dialog/       # 对话框组件
│   │   └── form/         # 表单控件
│   ├── business/         # 业务组件
│   │   ├── loan-card/    # 贷款卡片
│   │   ├── user-info/    # 用户信息
│   │   └── stats/        # 统计组件
│   ├── forms/            # 表单组件
│   │   ├── loan-form/    # 贷款表单
│   │   └── profile-form/ # 档案表单
│   └── charts/           # 图表组件
│       ├── bar-chart/    # 柱状图
│       └── line-chart/   # 折线图
├── hooks/                # 自定义 React Hooks
│   ├── use-auth.ts      # 认证相关
│   ├── use-form.ts      # 表单相关
│   └── use-api.ts       # API 相关
├── lib/                 # 工具函数和配置
│   ├── api/            # API 接口
│   │   ├── auth.ts    # 认证接口
│   │   ├── loan.ts    # 贷款接口
│   │   └── user.ts    # 用户接口
│   ├── utils/         # 工具函数
│   │   ├── format.ts  # 格式化
│   │   ├── validate.ts# 验证
│   │   └── helper.ts  # 辅助函数
│   └── constants/     # 常量定义
│       ├── api.ts     # API常量
│       └── config.ts  # 配置常量
├── public/            # 静态资源
│   ├── images/       # 图片资源
│   ├── icons/        # 图标资源
│   └── fonts/        # 字体资源
├── styles/           # 样式文件
│   ├── globals.css   # 全局样式
│   └── themes/       # 主题文件
├── types/            # 类型定义
│   ├── api.ts        # API类型
│   └── common.ts     # 通用类型
├── config/           # 配置文件
│   ├── site.ts       # 站点配置
│   └── theme.ts      # 主题配置
├── .env.example      # 环境变量示例
├── .gitignore        # Git忽略文件
├── next.config.mjs   # Next.js配置
├── package.json      # 项目依赖
├── postcss.config.js # PostCSS配置
├── tailwind.config.ts# Tailwind配置
└── tsconfig.json     # TypeScript配置
```

## 环境要求

- Node.js 18+ 
- npm 9+
- 现代浏览器支持

## 安全说明

- 所有API请求都需要进行身份验证
- 敏感数据传输采用加密方式
- 定期进行安全审计和更新
- 符合金融行业数据安全标准

## 贡献指南

1. Fork 项目
2. 创建特性分支
3. 提交变更
4. 推送到分支
5. 创建 Pull Request

## 版本历史

- v0.1.0 - 初始版本
  - 基础功能框架搭建
  - 核心模块开发

## 许可证

[MIT License](LICENSE)

## 联系方式

- 项目维护团队：[小海]
- 技术支持：[support@example.com]
- 官方网站：[website-url] 