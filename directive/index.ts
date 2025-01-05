import type { App } from 'vue'
import tableAutoScroll from './modules/tableAutoScroll'
import dragAndDrop from './modules/dragAndDrop'
const directives: Record<string, any> = {
  tableAutoScroll,
  dragAndDrop,
}
/**
 * @function 批量注册指令
 * @param app vue 实例对象
 */
export const install = (app: App): void => {
  Object.keys(directives).forEach((key) => {
    app.directive(key, directives[key]) // 将每个directive注册到app中
  })
}
