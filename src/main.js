import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faBriefcase,
  faArchive,
  faMapMarkerAlt,
  faUserFriends,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import router from './router'

library.add(
  faBriefcase,
  faStar,
  faArchive,
  faMapMarkerAlt,
  faUserFriends,
  faSearch
);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
