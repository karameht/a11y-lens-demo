# 🔍 A11yLens Demo

> Interactive playground for **real-time accessibility testing** in React

**[🚀 Try it live →](https://lens.karameht.com)**

This demo showcases [A11yLens](https://www.npmjs.com/package/@karameht/a11y-lens) in action - a developer tool that brings accessibility testing directly into your React development workflow.

## What You'll See

- ✅ **Real-time accessibility scanning** powered by axe-core
- 🎯 **Impact-based violation prioritization** (Critical → Serious → Moderate)
- 🔍 **Element highlighting** - click to find problematic elements instantly
- 📊 **Issues vs Passed tabs** for complete overview
- 🌙 **Developer-friendly dark theme**

## Demo Content

This demo intentionally contains **40+ accessibility violations** to showcase A11yLens capabilities:

- **Critical Issues**: Missing alt text, unlabeled forms, empty buttons
- **Serious Issues**: Poor color contrast, non-descriptive links
- **Moderate Issues**: Broken heading hierarchy, missing landmarks

## Want to Use A11yLens in Your Project?

```bash
npm install @karameht/a11y-lens
```

```jsx
import { A11yLens } from "@karameht/a11y-lens";

function App() {
  return (
    <div>
      {/* Your app */}
      <A11yLens />
    </div>
  );
}
```

## Resources

- 📦 **NPM Package**: [@karameht/a11y-lens](https://www.npmjs.com/package/@karameht/a11y-lens)
- 📖 **Documentation**: [GitHub Repository](https://github.com/karameht/a11y-lens)
- 🐛 **Issues**: [Report bugs](https://github.com/karameht/a11y-lens/issues)

## Local Development

```bash
git clone https://github.com/karameht/a11y-lens-demo.git
cd a11y-lens-demo
npm install
npm run dev
```

## Framework Support

A11yLens works with all modern React setups:

- ✅ **Vite** (this demo)
- ✅ **Next.js**
- ✅ **Remix**
- ✅ **Astro**

---

**Built with ❤️ by [karameht](https://karameht.com)**

_Accessibility testing – one component away._
