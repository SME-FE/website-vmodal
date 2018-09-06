<template>
  <div></div>
</template>

<script>
import log from 'sme-log';
const ilog = log();
const eggs = [
  `Sorry for my pool English, It's great that if you can help with improving the docs ~`,
  `=。  = 大家好，我是咋咋会，这是你们没有玩过的船新版本，是凶地就来砍我`,
]

export default {
  mounted() {
    const rand = Math.ceil(Math.random() * eggs.length)
    ilog(eggs[rand % eggs.length])
  }
}
</script>