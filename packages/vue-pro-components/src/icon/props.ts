import type { ExtractDefaultPropTypes } from "vue";



export const props = {
  // 图标前缀 
  iconPrefix: {
    type: String,
    default: 'icon-'
  },

  // 图标名称, 与前缀拼接起来就对应一个完整的 class
  icon: {
    type: String,
    required: true,
  },
  // 图标大小 
  size: {
    type: [Number, String],
    default: 14
  },
  // 图标颜色
  color: {
    type: String,
  }
}

export type IconFrontProps = ExtractDefaultPropTypes<typeof props>
