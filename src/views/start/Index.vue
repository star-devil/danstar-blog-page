<!--
 * @Author: wangqiaoling
 * @Date: 2024-03-18 21:12:38
 * @LastEditTime: 2024-03-20 21:16:12
 * @LastEditors: wangqiaoling
 * @Description: 开始页面
-->
<script setup lang="ts">
import { formatTime } from "@utils/provideConfig";
import { DocumentText as BookIcon, ChevronDown } from "@vicons/ionicons5";
import { useStartBlog } from "./index";

const { addDocOptions, moreHandlerOptions, handleSelect, articleList } =
  useStartBlog();
</script>

<template>
  <div class="start-handle-content mb-5">
    <n-h2>开始</n-h2>
    <n-flex justify="space-between">
      <n-dropdown
        trigger="hover"
        :options="addDocOptions"
        placement="bottom-start"
        size="large"
        @select="handleSelect"
        class="w-40"
      >
        <n-card title="📝 新建文档" size="small" hoverable>
          文档、表格、画板、数据表
          <template #header-extra>
            <n-icon size="14">
              <ChevronDown />
            </n-icon>
          </template>
        </n-card>
      </n-dropdown>

      <n-card title="📚 新建知识库" size="small" hoverable>
        使用知识库整理知识
      </n-card>
    </n-flex>
  </div>
  <div class="blogs-list-content">
    <n-h3>文档</n-h3>
    <div class="list-wrap">
      <n-list hoverable clickable>
        <n-list-item v-for="item in articleList" :key="item.id">
          <n-thing>
            <n-grid x-gap="12" :cols="24">
              <n-gi :span="10">
                <n-space>
                  <n-icon size="20">
                    <BookIcon />
                  </n-icon>
                  <n-text>{{ item.title }}</n-text>
                </n-space>
              </n-gi>
              <n-gi :span="7">
                <n-text>{{ item.author }}/{{ item.knowledgeBase }}</n-text>
              </n-gi>
              <n-gi :span="4">
                <n-text>{{ formatTime(item.updateTime) }}</n-text>
              </n-gi>
              <n-gi :span="3" align="right">
                <n-dropdown
                  :options="moreHandlerOptions"
                  trigger="click"
                  placement="bottom-start"
                >
                  <n-text class="more-action" quaternary> ... </n-text>
                </n-dropdown>
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
