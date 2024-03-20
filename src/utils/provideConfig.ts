/*
 * @Author: wangqiaoling
 * @Date: 2023-11-10 13:11:32
 * @LastEditTime: 2024-03-20 22:41:52
 * @LastEditors: wangqiaoling
 * @Description: 提供一些配置方法
 */
/** 全局配置 */
export function getContainer(triggerNode: HTMLElement) {
  return triggerNode;
}
/** 获取assets静态资源 */
export const getAssetsFile = (url: string) => {
  return new URL(`../assets/${url}`, import.meta.url).href;
};

/** 处理时间以显示不同的格式 */
export function formatTime(inputTime: string): void | string {
  const inputDate = new Date(inputTime);
  const currentTime = new Date();
  const diffTime = (currentTime.getTime() - inputDate.getTime()) / (1000 * 60); // 计算时间差（分钟）
  const isCurrentYear = inputDate.getFullYear() === currentTime.getFullYear();

  const time = inputDate.toLocaleTimeString("zh-CN", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });
  if (diffTime < 0) return "error";
  // 最近1分钟的显示
  if (isCurrentYear && diffTime < 1) {
    return "刚刚";
  }

  // 最近10分钟的显示
  if (isCurrentYear && diffTime < 10) {
    return `${diffTime.toLocaleString("zh-CN", {
      maximumFractionDigits: 0,
    })}分钟前`;
  }

  // 最近两天显示
  if (isCurrentYear && inputDate.getDate() === currentTime.getDate() - 1) {
    return `昨天 ${time}`;
  } else if (diffTime < 1440) {
    // 小于一天
    return `今天 ${time}`;
  }

  // 今年除最近两天的显示
  if (isCurrentYear) {
    return inputDate
      .toLocaleString("zh-CN", {
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })
      .replace(/\//g, "-");
  }

  // 今年以前的显示
  if (inputDate.getFullYear() < currentTime.getFullYear()) {
    return inputDate
      .toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/\//g, "-");
  }
}
