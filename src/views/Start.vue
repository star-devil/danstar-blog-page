<!--
 * @Author: wangqiaoling
 * @Date: 2024-03-18 21:12:38
 * @LastEditTime: 2024-03-18 22:10:39
 * @LastEditors: wangqiaoling
 * @Description: 开始页面
-->
<script setup lang="ts">
import { DocumentText as BookIcon } from "@vicons/ionicons5";
const value = ref("collect");
const options = [
  {
    label: "收藏",
    value: "collect",
  },
  {
    label: "移除记录",
    value: "remove",
  },
  {
    label: "用浏览器打开",
    value: "openBlank",
  },
];
</script>

<template>
  <div class="start-handle-content mb-5">
    <n-h2>开始</n-h2>
    <n-flex justify="space-between">
      <n-card title="新建文档" size="small" hoverable>
        文档、表格、画板、数据表
      </n-card>
      <n-card title="新建知识库" size="small" hoverable>
        使用知识库整理知识
      </n-card>
    </n-flex>
  </div>
  <div class="blogs-list-content">
    <n-h3>文档</n-h3>
    <div class="list-wrap">
      <n-list hoverable clickable>
        <n-list-item>
          <n-thing>
            <n-grid x-gap="12" :cols="24">
              <n-gi :span="10">
                <n-space>
                  <n-icon size="20">
                    <BookIcon />
                  </n-icon>
                  <n-text>个人博客开发计划</n-text>
                </n-space>
              </n-gi>
              <n-gi :span="7">
                <n-text>汪汪/初步攻略</n-text>
              </n-gi>
              <n-gi :span="4">
                <n-text>2024-03-18</n-text>
              </n-gi>
              <n-gi :span="3" align="right">
                <n-popselect
                  v-model:value="value"
                  :options="options"
                  trigger="click"
                >
                  <n-text class="more-action" quaternary> ... </n-text>
                </n-popselect>
              </n-gi>
            </n-grid>
          </n-thing>
        </n-list-item>
        <n-list-item>
          <n-thing>
            <n-grid x-gap="12" :cols="24">
              <n-gi :span="10">
                <n-space>
                  <n-icon size="20">
                    <BookIcon />
                  </n-icon>
                  <n-text
                    >2024.02.27｜星期二｜
                    每天总有很多新想法，没办法专注做事，怎么破？</n-text
                  >
                </n-space>
              </n-gi>
              <n-gi :span="7">
                <n-text>汪汪/初步攻略</n-text>
              </n-gi>
              <n-gi :span="4">
                <n-text>2024-03-18</n-text>
              </n-gi>
              <n-gi :span="3" align="right">
                <n-popselect
                  v-model:value="value"
                  :options="options"
                  trigger="click"
                >
                  <n-text class="more-action" quaternary> ... </n-text>
                </n-popselect>
              </n-gi>
            </n-grid>
          </n-thing>
        </n-list-item>
      </n-list>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.n-card {
  max-width: 49%;
}
</style>
