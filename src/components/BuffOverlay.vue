<template>
  <div id="app" class="buff-overlay">
    <template v-if="currentBuff">
      <BuffHeader :current-buff="currentBuff"></BuffHeader>
      <BuffQuestion :current-buff="currentBuff"></BuffQuestion>
      <BuffAnswers :buffAnswers="currentBuff.getAnswers"></BuffAnswers>
    </template>
  </div>
</template>

<script>
import BuffHeader from './header/BuffHeader.vue';
import BuffQuestion from './question/BuffQuestion.vue';
import BuffAnswers from './answer/BuffAnswersWrapper.vue';

import BuffControllerFactory from '../controller/Buff/BuffControllerFactory.ts'

export default {
  name: 'BuffOverlay',
  components: {
    BuffHeader,
    BuffQuestion,
    BuffAnswers
  },
  data () {
    return {
      currentBuff: null
    }
  },
  mounted () {
    console.log('MOUNTED BUFF OVERLAY!');
    const buffController = BuffControllerFactory.create();

    buffController.getBuff(1)
        .then((buff) => {
          console.log('olha que fixe! esta aqui o buff!', buff);
          this.currentBuff = buff;
        });
  }
}
</script>


<style>

</style>