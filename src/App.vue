<template>
  <div >
    <appHeader />
    <div id="appContent">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import appHeader from '@/components/appHeader';

export default {
  components: {
    appHeader
  }
};
</script>

