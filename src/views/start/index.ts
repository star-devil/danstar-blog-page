/*
 * @Author: wangqiaoling
 * @Date: 2024-03-20 20:50:56
 * @LastEditTime: 2024-03-20 22:40:42
 * @LastEditors: wangqiaoling
 * @Description: 开始新博客页面
 */
import { ArticleItem } from "@api/type";
import { renderIcon } from "@utils/renderIcon";
import {
  DocumentTextOutline,
  OpenOutline,
  ReaderOutline,
  RemoveCircleOutline,
  ShapesOutline,
  StarOutline,
} from "@vicons/ionicons5";
export function useStartBlog() {
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
  const moreHandlerOptions = [
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
  function handleSelect(key: string | number) {
    console.log(key);
  }
  /** 文章列表 */
  const articleList = ref<ArticleItem[]>([
    {
      id: "1",
      title: "个人博客开发计划",
      author: "汪汪",
      knowledgeBase: "初步攻略",
      createTime: "2024-03-18 20:50:56",
      updateTime: "2024-03-19 08:45:00",
    },
    {
      id: "2",
      title: "2024.02.27｜星期二｜每天总有很多新想法，没办法专注做事，怎么破？",
      author: "汪汪",
      knowledgeBase: "初步攻略",
      createTime: "2024-03-18 13:45:12",
      updateTime: "2024-03-18 13:45:12",
    },
    {
      id: "3",
      title: "2024.02.28｜星期三｜每天总有很多新想法，没办法专注做事，怎么破？",
      author: "汪汪",
      knowledgeBase: "初步攻略",
      createTime: "2024-03-18 13:45:12",
      updateTime: "2023-03-19 12:10:00",
    },
    {
      id: "4",
      title: "2024.03.01｜星期四｜每天总有很多新想法，没办法专注做事，怎么破？",
      author: "汪汪",
      knowledgeBase: "初步攻略",
      createTime: "2024-03-18 13:45:12",
      updateTime: "2024-03-20 22:40:00",
    },
    {
      id: "5",
      title: "2024.03.02｜星期五｜每天总有很多新想法，没办法专注做事，怎么破？",
      author: "汪汪",
      knowledgeBase: "初步攻略",
      createTime: "2024-03-18 13:45:12",
      updateTime: "2024-03-20 22:35:00",
    },
    {
      id: "6",
      title: "2024.03.03｜星期六｜每天总有很多新想法，没办法专注做事，怎么破？",
      author: "汪汪",
      knowledgeBase: "初步攻略",
      createTime: "2024-03-18 13:45:12",
      updateTime: "2024-03-20 22:25:12",
    },
  ]);
  return {
    addDocOptions,
    moreHandlerOptions,
    handleSelect,
    articleList,
  };
}
