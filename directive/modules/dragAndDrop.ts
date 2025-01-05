interface DraggableElement extends HTMLElement {
  isMouseDown?: boolean
  scrollLeft: number
  startX: number
}
// 滚轮事件
const onWheel = (e: any) => {
  const delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail))
  const target = e.currentTarget as DraggableElement | null
  if (target) target.scrollLeft -= delta * 450
  e.preventDefault()
}
// 鼠标按下事件
const onMouseDown = (el: DraggableElement) => (e: any) => {
  el.isMouseDown = true
  el.startX = e.clientX
  el.scrollLeft = e.currentTarget.scrollLeft
}
// 鼠标移出事件
const onMouseUpOrLeave = (el: DraggableElement) => () => {
  el.isMouseDown = false
}
// 鼠标移动事件
const onMouseMove = (el: DraggableElement) => (e: MouseEvent) => {
  if (el.isMouseDown) {
    const moveX = e.clientX
    const target = e.currentTarget as DraggableElement
    const scrollX = moveX - el.startX
    if (target) {
      target.scrollLeft = el.scrollLeft - scrollX
      el.scrollLeft = target.scrollLeft
      el.startX = e.clientX
    }
  }
}
export default {
  created(el: DraggableElement) {
    el.startX = 0
    el.isMouseDown = false
    el.scrollLeft = 0
    el.style.setProperty('user-select', 'none')
  },
  mounted(el: DraggableElement) {
    el.addEventListener('mousedown', onMouseDown(el) as EventListener)
    el.addEventListener('wheel', onWheel as EventListener)
    el.addEventListener('mouseup', onMouseUpOrLeave(el) as EventListener)
    el.addEventListener('mouseleave', onMouseUpOrLeave(el) as EventListener)
    el.addEventListener('mousemove', onMouseMove(el) as EventListener)
  },
  unmounted(el: DraggableElement) {
    el.removeEventListener('mousedown', onMouseDown(el) as EventListener)
    el.removeEventListener('wheel', onWheel as EventListener)
    el.removeEventListener('mouseup', onMouseUpOrLeave(el) as EventListener)
    el.removeEventListener('mouseleave', onMouseUpOrLeave(el) as EventListener)
    el.removeEventListener('mousemove', onMouseMove(el) as EventListener)
  },
}
