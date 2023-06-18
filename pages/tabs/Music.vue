<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Harmony</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="flex flex-col bg-slate-200 h-full items-center">
          <div class="">
              <img class="object-contain h-[300px] w-[300px] rounded-[300px]" :src="store.sounds[store.currentSoundIndex].thumbnail">
          </div>
          <div>
              <h3>{{ store.sounds[store.currentSoundIndex].name }}</h3>
          </div>
          <div class="flex">
              <ion-icon class="h-10 w-10" :icon="ioniconsPlayOutline" @click="store.soundPlay()"/>
              <ion-icon class="h-10 w-10" :icon="ioniconsPauseOutline" @click="store.soundPause()"/>
              <ion-icon class="h-10 w-10" :icon="ioniconsPlaySkipBackOutline" @click="store.soundPrevious()"/>
              <ion-icon class="h-10 w-10" :icon="ioniconsPlaySkipForwardOutline" @click="store.soundNext()"/>
          </div>
          <div class="flex flex-col w-3/4">
            <input class="relative" id="musicPlayerProgress" type="range" :max="Math.ceil(store.currentSoundDuration)" v-model="store.currentSoundTime" />
            <div class="flex justify-between" >
                <span>{{ store.currentSoundTime }}</span>
                <span>{{ store.currentSoundDuration }}</span>
            </div>
          </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
    import { usePiniaStore } from '@/stores/piniaStore'
    const store = usePiniaStore();

    store.soundPreload()
</script>