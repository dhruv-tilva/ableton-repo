<template>
  <one-comp></one-comp>
  <second-comp></second-comp>
  <third-comp></third-comp>
  <forth-comp></forth-comp>
  <fifth-comp></fifth-comp>
  <sixth-comp></sixth-comp>
  <seven-comp></seven-comp>
  <footer-comp></footer-comp>
</template>

<script>
import OneComp from './components/OneComp.vue';
import SecondComp from "./components/SecondComp.vue";
import ThirdComp from "./components/ThirdComp.vue";
import ForthComp from "./components/ForthComp.vue"
import FifthComp from './components/FifthComp.vue';
import SixthComp from "./components/SixthComp.vue"
import SevenComp from "./components/SevenComp.vue"
import FooterComp from './components/FooterComp.vue'
export default {
  components: { OneComp, SecondComp, ThirdComp, ForthComp, FifthComp, SixthComp, SevenComp, FooterComp }
}
</script>