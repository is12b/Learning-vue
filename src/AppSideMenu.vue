<template>
  <PanelMenu :model="menuItems">
</template>

<script>
import {PrimeIcons} from 'primevue/api';

export default {
  name: 'SideMenu',
  data() {
    return {
      menuItems: [
        {
          key: '0',
          label: 'Project',
          icon: PrimeIcons.FOLDER,
        },
      ],
    };
  },
};
</script>

<style></style>
