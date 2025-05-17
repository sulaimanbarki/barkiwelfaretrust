import '../css/app.css'
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    return pages[`./Pages/${name}.vue`]
  },
  title: title => title ? `${title} - Barki Welfare Society` : 'Barki Welfare Society',
  setup({ el, App, props, plugin }) {
    const app = createApp({ render: () => h(App, props) })

    // ✅ Register global $can() helper
    app.config.globalProperties.$can = (permission) => {
      return props.initialPage.props.auth?.can?.[permission] ?? false
    }

    app.use(plugin).mount(el)
  },
})
