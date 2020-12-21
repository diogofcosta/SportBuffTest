import './style/base.scss';

import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import BuffOverlay from './components/BuffOverlay.vue';
import CircularCountDownTimer from 'vue-circular-count-down-timer';

Vue.use(CircularCountDownTimer);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false

export namespace SportBuffLib {
  export async function start(videoId: string): Promise<void> {
    const videoPlayerElement = document.getElementById(videoId);

    if (!videoPlayerElement) {
      // TODO: should this be an error? How should we give the info to the dev?
      console.error('Video player element not found!');
      return;
    }

    console.log('Video player found! Lets do some magic!');

    const videoParentNode = videoPlayerElement.parentElement;

    const outerWrapper = document.createElement('div');
    outerWrapper.classList.add('sportbuff-video-outer-wrapper');

    const innerWrapper = document.createElement('div');
    innerWrapper.classList.add('sportbuff-video-inner-wrapper');

    const videoOverlayContent = document.createElement('div');
    videoOverlayContent.classList.add('video-overlay-content');

    const appRoot = document.createElement('div');
    appRoot.id = 'sport-buff-app';
    videoOverlayContent.appendChild(appRoot);

    innerWrapper.appendChild(videoOverlayContent);
    innerWrapper.appendChild(videoPlayerElement);

    outerWrapper.appendChild(innerWrapper);

    videoParentNode && videoParentNode.appendChild(outerWrapper);

    // render the rest of the app using Vue
    new Vue({
      el: '#sport-buff-app',
      template: '<BuffOverlay/>',
      render: h => h(BuffOverlay)
    })
  }
}