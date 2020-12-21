<template>
  <div class="buff-question">
    <div class="header-user-info" style="display: flex">
      <p>{{ currentBuff.getQuestion }}</p>
      <div>
        <circular-count-down-timer
        :initial-value="currentBuff.getDuration"
        :steps="400"
        @finish="questionTimeFinished">
        </circular-count-down-timer>
      </div>
    </div>
  </div>
</template>

<script>
import Buff from '../../domain/Buff'
import { BuffUtils } from '../../domain/BuffUtils'

export default {
  name: 'BuffQuestion',
  data () {
    return {
      durationLeft: 0
    }
  },
  props: {
    currentBuff: Buff
  },
  methods: {
    questionTimeFinished: () => {
      console.log('HEY HEY TIME IS UP! STOP ANSWERING');
    }
  },
  mounted () {
    console.log('mounted buffheader');
    console.log('props', this.currentBuff);
  },
  computed: {
    authorName: function () {
      return BuffUtils.getAuthorName(this.currentBuff.getAuthor);
    },
    authorIcon: function () {
      return BuffUtils.getAuthorIcon(this.currentBuff.getAuthor);
    }
  }
}
</script>


<style>

</style>