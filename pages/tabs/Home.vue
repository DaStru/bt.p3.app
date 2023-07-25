<script setup>
import { ref } from 'vue'

function openPopUp(id) {
  helper.style.display = 'inline-flex';
  let helperText = '';
  if (id === 'lastWeek') {
    helperText = 'Auf Basis unserer analysierten Daten erfolgt ein Vergleich zwischen den Siutationen in denen dein Hund Stress ausgesetzt ist und wann du ihn mit geeigneter Musik beruight hast. Nutze die App weiterhin aktiv, um dir Änderungen zwischen den einzelnen Kalenderwochen anzeigen lassen zu können.'
  } else if (id === 'favoriteSongs') {
    helperText = 'Basierend auf deiner Historie deiner zu letzt gehörten Songs, haben wir dir die am meist gehörtetsten zusammengetragen. Viel Spaß!'
  } else {
    helperText = 'Für diesen Abschnitt kann keine Hilfe angezeigt werden.'
  }
  helper.firstChild.firstChild.textContent = helperText;
}
</script>

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
      <div class="flex flex-col justify-start items-center gap-5 mx-5">
       <h1 class="welcome-msg">Hallo, <span style="font-weight: bold; color: #4a2400">Marlen & Balu!</span>🤗</h1>
        <div class="w-11/12">
          <div class="tab-heading flex flex-row align-middle">
            <div class="heading-text">
              Rückblick der letzten Woche
            </div>
            <div class="help-button" id="lastWeek" @click="openPopUp('lastWeek')">?</div>
          </div>
          <div class="flex flex-col card">
            <media-card class="bar-chart" title="Stressige Situationen">
              <bar-chart/>
              <div class="card-text">
                Balu war in der vergangenen Woche einigen stressigen Situationen ausgesetzt. Um ihn zukünftig zu beruhigen, hast du ingesamt acht mal einen Sound abgespielt - in sieben davon konntest du ihn beruhigen.
              </div>
            </media-card>
          </div>

        </div>

        <div class="w-11/12">
          <div class="tab-heading flex flex-row align-middle">
            <div class="heading-text">
              Zuletzt gespielter Sound
            </div>
          </div>
          <router-link to="music">
          <div class="flex flex-col card">
            <div class="last-played flex flex-row justify-between">
              <img src="/images/sleeping_dog.jpg" alt="" class="play-image-s">
              <div class="played-text">
                <div class="played-interpret">
                  Relaxmydog
                </div>
                <div class="played-song-name">
                  Peaceful Relaxation Music
                </div>
              </div>
              <div class="play-button flex">
                <div class="arrow-right"></div>
              </div>
            </div>
          </div>
          </router-link>
        </div>

        <div class="w-11/12">
          <div class="tab-heading flex flex-row align-middle">
            <div class="heading-text">
              Balu's Lieblingssongs
            </div>
            <div class="help-button" id="lastWeek" @click="openPopUp('favoriteSongs')">?</div>
          </div>
          <div class="flex flex-col gap-4 card">
            <div class="card-text ranking-text">
              <ol>
                <li>1. Peaceful Relaxation Music</li>
                <li>2. Camine Calmness</li>
                <li>3. Paws and Harmony</li>
                <li>4. Zen Woofs</li>
                <li>5. Pawfect Peace</li>
              </ol>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </ion-content>
  </ion-page>
</template>