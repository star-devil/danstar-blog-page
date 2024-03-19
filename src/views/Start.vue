<!--
 * @Author: wangqiaoling
 * @Date: 2024-03-18 21:12:38
 * @LastEditTime: 2024-03-19 22:30:43
 * @LastEditors: wangqiaoling
 * @Description: 开始页面
-->
<script setup lang="ts">
import { renderIcon } from "@utils/renderIcon";
import {
  DocumentText as BookIcon,
  ChevronDown,
  DocumentTextOutline,
  OpenOutline,
  ReaderOutline,
  RemoveCircleOutline,
  ShapesOutline,
  StarOutline,
} from "@vicons/ionicons5";

const options = [
  {
    label: "收藏",
    value: "collect",
    icon: renderIcon(StarOutline),
  },
  {
    label: "移除记录",
    value: "remove",
    icon: renderIcon(RemoveCircleOutline),
  },
  {
    label: "用浏览器打开",
    value: "openBlank",
    icon: renderIcon(OpenOutline),
  },
];

const addDocOptions = [
  {
    label: "新建文档",
    key: "document",
    icon: renderIcon(DocumentTextOutline),
  },
  {
    label: "新建表格",
    key: "excel",
    icon: renderIcon(ReaderOutline),
  },
  {
    label: "新建画板",
    key: "draw",
    icon: renderIcon(ShapesOutline),
  },
];
function handleSelect(key: string | number) {
  console.log(key);
}
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
                <n-dropdown
                  :options="options"
                  trigger="click"
                  placement="bottom-start"
                >
                  <n-text class="more-action" quaternary> ... </n-text>
                </n-dropdown>
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
                <n-dropdown
                  :options="options"
                  trigger="click"
                  placement="bottom-start"
                >
                  <n-text quaternary> ... </n-text>
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
