// // const path = require('path')
// // const glob = require('glob')
// import PrimeVue from 'primevue/config'
// import Avatar from 'primevue/avatar'
// import Card from 'primevue/card'
// import Editor from 'primevue/editor'
// import Button from 'primevue/button'
// import Column from 'primevue/column'
// import Chip from 'primevue/chip'
// import ConfirmPopup from 'primevue/confirmpopup'
// import DataTable from 'primevue/datatable'
// import Dialog from 'primevue/dialog'
// import Dropdown from 'primevue/dropdown'
// import InputText from 'primevue/inputtext'
// import InputNumber from 'primevue/inputnumber'
// import SelectButton from 'primevue/selectbutton'
// import FileUpload from 'primevue/fileupload'
// import Textarea from 'primevue/textarea'
// import Toast from 'primevue/toast'
// // import ToastService from 'primevue/toastservice'
// // import { createTestingPinia } from '@pinia/testing'
// import ToastService from '@/test-utils/toast-service'
// import InputSwitch from 'primevue/inputswitch'
// import Panel from 'primevue/panel'
// import Paginator from 'primevue/paginator'
// import MultiSelect from 'primevue/multiselect'
// import { createTestingPinia } from '@pinia/testing'
// import ConfirmationService from 'primevue/confirmationservice'
//
// import { config } from '@vue/test-utils'
// import { PrimeVueOptions } from '@/utils/primevue'
// import Menu from 'primevue/menu'
// import Toolbar from 'primevue/toolbar'
// import Badge from 'primevue/badge'
// import Divider from 'primevue/divider'
// import TabPanel from 'primevue/tabpanel'
// import Calendar from 'primevue/calendar'
// import Fieldset from 'primevue/fieldset'
// import Checkbox from 'primevue/checkbox'
// import TabView from 'primevue/tabview'
// import Tag from 'primevue/tag'
// import AutoComplete from 'primevue/autocomplete'
// import ConfirmDialog from 'primevue/confirmdialog'
// import OverlayPanel from 'primevue/overlaypanel'
// import Ripple from 'primevue/ripple'
// import Message from 'primevue/message'
// import Tooltip from 'primevue/tooltip'
// import Timeline from 'primevue/timeline'
// import Password from 'primevue/password'
// import Image from 'primevue/image'
// import Tree from 'primevue/tree'
// import Slider from 'primevue/slider'
// import ErrorsDialog from '@/components/common/ErrorsDialog.vue'
// import EditBtn from '@/components/common/EditBtn.vue'
// import DelBtn from '@/components/common/DelBtn.vue'
// import CommonToolbar from '@/components/common/Toolbar.vue'
// import ZoomableImage from '@/components/common/ZoomableImage.vue'
// import Chart from '@/test-utils/Chart.vue'
// import CableService from '@/test-utils/cable-service'
// import RadioButton from 'primevue/radiobutton'
// import Qrcode from 'qrcode.vue'
// // import Barcode from '@/test-utils/Barcode.vue'
// import Barcode from '@/components/common/Barcode.vue'
// const NuxtLink = {
//   template: '<a><slot></slot></a>',
// }
// config.global.components = {
//   Avatar,
//   Button,
//   Card,
//   Column,
//   Chip,
//   ConfirmPopup,
//   DataTable,
//   Dialog,
//   Dropdown,
//   Editor,
//   InputText,
//   InputNumber,
//   SelectButton,
//   Textarea,
//   Menu,
//   Toolbar,
//   Badge,
//   Fa: NuxtLink,
//   'router-link': NuxtLink,
//   Divider,
//   TabPanel,
//   Calendar,
//   Fieldset,
//   Checkbox,
//   TabView,
//   Tag,
//   Paginator,
//   MultiSelect,
//   FileUpload,
//   AutoComplete,
//   ConfirmDialog,
//   InputSwitch,
//   Panel,
//   Toast,
//   Slider,
//   OverlayPanel,
//   Message,
//   NuxtLink,
//   Timeline,
//   Password,
//   ErrorsDialog,
//   Image,
//   Chart,
//   EditBtn,
//   DelBtn,
//   RadioButton,
//   Qrcode,
//   CommonToolbar,
//   ZoomableImage,
//   Barcode,
//   Tree,
// }
// config.global.directives = {
//   ripple: Ripple,
//   tooltip: Tooltip,
// }
//
// config.global.plugins = [[PrimeVue, PrimeVueOptions], ToastService, ConfirmationService, CableService] //, createTestingPinia()];
//
// HTMLCanvasElement.prototype.getContext = () => undefined
// window.HTMLElement.prototype.scrollIntoView = () => undefined
// // jest.spyOn(Date, 'now').mockImplementation(() => 1487076708000)
// // glob.sync(path.join(__dirname, './src/components/**/*.vue')).forEach((file) => {
// //   const name = file.match(/(\w*)\.vue$/)[1]
// //   console.log(name);
//
// //   Vue.component(name, require(file).default)
// // })
