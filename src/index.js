import VueClientPagination from './components/VueClientPagination.vue'

// Exportación de los componentes individualmente
export { VueClientPagination }

// Instalación de la librería como un plugin
export function install(Vue) {
  Vue.component('VueClientPagination', VueClientPagination)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use({ install })
}

// Exportación de la librería como plugin
export default { install: install }
