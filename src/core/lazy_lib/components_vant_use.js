
/* eslint-disable */
/**
 * 该文件是为了按需加载，剔除掉了一些不需要的框架组件。
 * 减少了编译支持库包大小
 *
 * 当需要更多组件依赖时，在该文件加入即可
 */
import Vue from 'vue'
// vant
import {
  DatetimePicker,
  Popup,
  Field,
  Tabbar, 
  TabbarItem,
  CellGroup,
  Button,
  Tab,
  Tabs,
  Toast,
  Grid, GridItem,
  Cell,
  Icon,
  Panel,
  List,
  ActionSheet,
  Image,
  Switch,
  Sticky,
  Search,
  ImagePreview,
  Uploader,
  SwitchCell,
  Dialog,
  Area,
  Row, Col,
  Checkbox, CheckboxGroup
} from 'vant'
Vue.use(DatetimePicker)
Vue.use(Popup)
Vue.use(Field)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Button).use(CellGroup)
.use(Tab).use(Tabs)
.use(Toast)
.use(Grid)
.use(GridItem)
.use(Cell).use(Row).use(Col)
.use(Icon).use(Search)
.use(Panel).use(List).use(ActionSheet)
.use(Image).use(Switch).use(Sticky).use(ImagePreview)
.use(Uploader).use(SwitchCell)
.use(Dialog).use(Area)
.use(Checkbox).use(CheckboxGroup)


Vue.prototype.$toast = Toast
Vue.prototype.$dialog = Dialog