<template>
  <v-container class="fill-height">
    <v-card>
      <v-card-title> Title </v-card-title>
      <v-card-text> texto {{ count }} </v-card-text>
      <v-card-actions>
        <v-btn @click="increment">Increment</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useAppStore } from "@/store/users";

export default {
  methods: {
    ...mapActions(useAppStore, ["increment"]),
  },
  computed: {
    ...mapState(useAppStore, ["count"]),
  },
};
</script>
