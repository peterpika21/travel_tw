import { defineConfig } from 'vite';
import viteSvgIcons from 'vite-plugin-svg-icons';
import path from 'path'; // ts如果报错 npm i @types/node -D
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteSvgIcons({
      // 配置路劲在你的src里的svg存放文件
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}/`
    }
  }
});
