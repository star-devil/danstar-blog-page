/*
 * @Author: wangqiaoling
 * @Date: 2024-03-12 21:31:28
 * @LastEditTime: 2024-03-12 21:31:36
 * @LastEditors: wangqiaoling
 * @Description: 渲染图标
 */
import { NIcon } from "naive-ui";
export function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
