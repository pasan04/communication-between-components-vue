import { createApp } from 'vue'
import App from './App.vue'
import ChildComponent from './components/ChildComponent';

const app = createApp(App)
app.component('child-component', ChildComponent);

app.mount('#app');
