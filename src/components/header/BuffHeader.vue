<template>
  <div class="buff-header">
    <div class="header-user-info">
      <b-avatar class="mr-3"></b-avatar>
      <span>{{ authorName }}</span>
    </div>
  </div>
</template>

<script>

import Buff from '../../domain/Buff'
import { BuffUtils } from '../../domain/BuffUtils'

export default {
  name: 'BuffHeader',
  components: {

  },
  props: {
    currentBuff: Buff
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