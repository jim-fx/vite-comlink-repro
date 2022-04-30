# Repro for vite-comlink-issue

**Description**
Everything works fine during dev mode, but during bundling something fails, causing the build process to fail.

# Steps:
```bash
git clone https://github.com/jim-fx/vite-comlink-repro

cd vite-comlink-repro

(npm/pnpm/yarn) install

(npm/pnpm/yarn) build
```

# Error Log:
```bash
> vite-comlink-repro@0.0.0 build /Projects/vite-comlink-repro
> tsc && vite build

vite v2.9.6 building for production...
✓ 0 modules transformed.
✓ 2 modules transformed.
[vite:worker-import-meta-url] Could not resolve entry module (src/____:com_link:./worker).
file: /Projects/vite-comlink-repro/src/main.ts
error during build:
Error: Could not resolve entry module (src/____:com_link:./worker).
    at error (/Projects/vite-comlink-repro/node_modules/.pnpm/rollup@2.71.1/node_modules/rollup/dist/shared/rollup.js:198:30)
    at ModuleLoader.loadEntryModule (/Projects/vite-comlink-repro/node_modules/.pnpm/rollup@2.71.1/node_modules/rollup/dist/shared/rollup.js:22491:20)
    at async Promise.all (index 0)
 ELIFECYCLE  Command failed with exit code 1.
```
