<template>
  <div class="buff-question">
    <b-avatar class="mr-3"></b-avatar>
    <span>{{ answerTitle }}</span>
  </div>
</template>

<script>
import { BuffUtils } from "../../domain/BuffUtils";

export default {
  name: 'BuffAnswerComponent',
  data () {
    return {

    }
  },
  props: {
    answer: Object
  },
  methods: {

  },
  mounted () {
    console.log('mounted buffAnswer');
  },
  computed: {
    answerTitle: function () {
      return BuffUtils.getBuffAnswerTitle(this.answer);
    },
    answerIcon: function () {
      return BuffUtils.getBuffAnswerIcon(this.answer);
    }
  }
}
</script>


<style>

</style>