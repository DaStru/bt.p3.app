<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>
          <img src="/images/Harmony.png" alt="">
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="flex flex-col h-full items-center justify-center">
          <div class="">
              <img class="object-contain h-[300px] w-[300px] rounded-[300px]" :src="store.sounds[store.currentSoundIndex].thumbnail">
          </div>
          <div class="song-info">
              <h2 class="song-name">{{ store.sounds[store.currentSoundIndex].name }}</h2>
              <h5 class="song-interpret">{{ store.sounds[store.currentSoundIndex].interpret }}</h5>
          </div>
          <div class="flex flex-col w-3/4">
            <div class="flex justify-between" >
                <span>{{ store.currentSoundTimeDisplayed }}</span>
                <span>{{ store.currentSoundDurationDisplayed }}</span>
            </div>
            <input class="relative" id="musicPlayerProgress" type="range" :max="Math.ceil(store.currentSoundDuration)" v-model="store.currentSoundTime" />
          </div>
          <div class="play-buttons flex items-center">
              <ion-icon class="h-10 w-10 control-icon" :icon="ioniconsPlaySkipBackOutline" @click="store.soundPrevious(); Play()"/>
              <ion-icon class="h-10 w-10 control-icon" id="play" :icon="ioniconsPlayOutline" @click="store.soundPlay(); Play()"/>
              <ion-icon class="h-10 w-10 control-icon" id="pause" :icon="ioniconsPauseOutline" @click="store.soundPause(); Pause()"/>
              <ion-icon class="h-10 w-10 control-icon" :icon="ioniconsPlaySkipForwardOutline" @click="store.soundNext(); Play()"/>
          </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
    import { usePiniaStore } from '@/stores/piniaStore'
    const store = usePiniaStore();

    store.soundPreload()

    const play = document.getElementById('play');
    const pause = document.getElementById('pause');

    function Play() {
      document.getElementById('play').style.display = 'none';
      document.getElementById('pause').style.display = 'inline-flex';
    }

    function Pause() {
      document.getElementById('play').style.display = 'inline-flex';
      document.getElementById('pause').style.display = 'none';
    }
</script>

