<script setup>

</script>

<template>
  <ion-page>
    <help></help>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/home">
          <ion-icon :icon="ioniconsHomeOutline" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="music" href="/music">
          <ion-icon :icon="ioniconsMusicalNotesOutline" />
          <ion-label>Musik</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="playlist" href="/playlist">
          <ion-icon :icon="ioniconsListOutline" />
          <ion-label>Bibliothek</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="hub" href="/hub">
          <ion-icon :icon="ioniconsLibraryOutline" />
          <ion-label>Hub</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>

</template>

<style lang="css">
@import '../assets/css/style.css';
</style>