import { defineConfig, loadEnv } from 'vite';
import viteSvgIcons from 'vite-plugin-svg-icons';
import path from 'path'; // ts如果报错 npm i @types/node -D
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default (ctx: any) => {
  process.env = { ...process.env, ...loadEnv(ctx.mode, process.cwd()) };

  return defineConfig({
    plugins: [
      vue(),
      viteSvgIcons({
        // 配置路劲在你的src里的svg存放文件
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]'
      })
    ],
    base: process.env.VITE_BASE, // 對應github倉庫名稱
    resolve: {
      alias: {
        '@': `${path.resolve(__dirname, 'src')}/`
      }
    }
  });
};
