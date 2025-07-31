<script setup lang="ts">
import createStudioEditor from '@grapesjs/studio-sdk';
import { canvasAbsoluteMode } from '@grapesjs/studio-sdk-plugins';
import '@grapesjs/studio-sdk/dist/style.css';

const editorEl = ref(null);

onMounted(() => {
  createStudioEditor({
    root: editorEl.value,
    plugins: [
      canvasAbsoluteMode
    ],
    devices: {
      default: [
        { id: 'desktop', name: 'Desktop', width: '' }
      ]
    },
    project: {
      default: {
        pages: [
          {
            name: 'Presentation',
            component: `
              <div style="position: relative; width: 800px; height: 500px; margin: 70px auto 0; background: linear-gradient(135deg, #f5f7fa, #c3cfe2); color: #1a1a1a; border-radius: 12px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); overflow: hidden;">
                <div style="position: absolute; top: 0; left: 550px; width: 300px; height: 100%; background-color: #baccec; transform: skewX(-12deg)"></div>
  
                <h1 style="position: absolute; top: 40px; left: 40px; font-size: 50px; margin: 0; font-weight: 700;">
                  Absolute Mode
                </h1>
  
                <p style="position: absolute; top: 135px; left: 40px; font-size: 22px; max-width: 450px; line-height: 1.5; color: #333;">
                  Enable free positioning for your elements — perfect for fixed layouts like presentations, business cards, or print-ready designs.
                </p>
  
                <ul data-gjs-type="text" style="position: absolute; top: 290px; left: 40px; font-size: 18px; line-height: 2; list-style: none; padding: 0;">
                  <li>🎯 Drag & place elements anywhere</li>
                  <li>🧲 Smart snapping & axis locking</li>
                  <li>⚙️ You custom logic</li>
                </ul>
  
                <div style="position: absolute; left: 540px; top: 100px; width: 200px; height: 200px; background: rgba(255, 255, 255, 0.3); border-radius: 20px; backdrop-filter: blur(10px); box-shadow: 0 8px 24px rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: center; font-size: 80px;">
                  📐
                </div>
  
                <div style="position: absolute; top: 405px; left: 590px; font-size: 14px; color: #555;">
                  Studio SDK · GrapesJS
                </div>
            </div>
  
            <style>
              body {
                position: relative;
                background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
                font-family: system-ui;
                overflow: hidden;
              }
            </style>
            `,
          }
        ]
      }
    },
  });
});
</script>

<template>
  <div class="cnt">
    <div class="cnt-nav">SDK example Nuxt</div>
    <div class="cnt-body">
      <div class="editor" ref="editorEl"></div>
    </div>
  </div>
</template>

<style>
.cnt {
  display: flex;
  flex-direction: column;
  height: 100dvh;
}
.cnt-nav {
  padding: 10px;
  background-color: #020420;
  color: #00dc82;
}
.cnt-body {
  flex-grow: 1;
}
.editor {
  height: 100%;
}
</style>