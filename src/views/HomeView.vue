<!--
 * @Author: wangqiaoling
 * @Date: 2023-11-13 11:14:56
 * @LastEditTime: 2024-03-19 21:54:11
 * @LastEditors: wangqiaoling
 * @Description: 个人工作台
-->
<script setup lang="ts">
import { renderIcon } from "@utils/renderIcon";
import {
  BookOutline as BookIcon,
  HomeOutline as HomeIcon,
} from "@vicons/ionicons5";
import type { MenuOption } from "naive-ui";

const router = useRouter();
const menuSiderStyle = {
  padding: "15px 10px",
  background: "#fafafa",
};
const menuOptions: MenuOption[] = [
  {
    label: "开始",
    key: "Start",
    icon: renderIcon(HomeIcon),
  },
  {
    label: "收藏",
    key: "Collect",
    icon: renderIcon(BookIcon),
  },
];
const isCollapsed = ref(false);
function collapsedChanged(v: boolean) {
  isCollapsed.value = v;
}

const currentMenu = ref("Start");
function gotoPage(key: string) {
  currentMenu.value = key;
  router.push({ name: key });
}
</script>

<template>
  <n-layout has-sider>
    <n-layout-sider
      collapse-mode="width"
      :collapsed-width="48"
      :width="240"
      show-trigger="arrow-circle"
      :content-style="menuSiderStyle"
      bordered
      class="h-screen"
      @update:collapsed="(v: boolean) => collapsedChanged(v)"
    >
      <div class="info-title-content mb-5">
        <n-flex justify="space-between" :wrap="false">
          <n-space align="center" :wrap="false">
            <n-avatar round size="small" src="/vite.svg" />
            <n-h4 class="m-0">Danstar</n-h4>
          </n-space>
          <n-space>
            <n-avatar
              round
              size="small"
              src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
            />
          </n-space>
        </n-flex>
      </div>
      <div class="menu-content">
        <n-menu
          :collapsed-width="30"
          :collapsed-icon-size="16"
          :options="menuOptions"
          :value="currentMenu"
          @update:value="(v: string) => gotoPage(v)"
        />
      </div>
    </n-layout-sider>
    <n-layout-content content-style="padding: 24px;">
      <router-view></router-view>
    </n-layout-content>
  </n-layout>
</template>

<style lang="scss" scoped></style>
