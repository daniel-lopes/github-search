import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBriefcase, faArchive, faMapMarkerAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faBriefcase, faStar, faArchive, faMapMarkerAlt, faUserFriends);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
