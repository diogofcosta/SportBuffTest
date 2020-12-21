<template>
  <div class="buff-questions">
    <BuffAnswerComponent
        v-for="currentAnswer in buffAnswers"
        :answer="currentAnswer"
        :key="currentAnswer.id">
    </BuffAnswerComponent>
  </div>
</template>

<script>
import BuffAnswerComponent from "./BuffAnswerComponent.vue";

export default {
  name: 'BuffAnswersWrapper',
  components: { BuffAnswerComponent },
  data () {
    return {

    }
  },
  props: {
    buffAnswers: {
      type: Array,
      required: true
    }
  },
  methods: {

  },
  mounted () {
    console.log('mounted buffAnswersWrapper');
  },
}
</script>


<style>

</style>