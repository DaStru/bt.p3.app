<script setup>
import { ref } from 'vue'

function openPopUp(id) {
  helper.style.display = 'inline-flex';
  let helperText = '';
  if (id === 'studyCorner') {
    helperText = 'Bilde dich weiter in dem du unser Lernangebot nutzt. Wir bringen dir in Form von Lernvideos und unterschiedlichen Lerneinheiten bei, wie du insbesondere die Sounds optimal einsetzen kannst. Darüber hinaus hast du die Möglichkeit viel mehr über deinen Vierbeiner Freund zu lernen um eure Bindung zu stärken.'
  } else if (id === 'blog') {
    helperText = 'Du hast zu wenig Zeit, aber möchtest immer auf dem aktuellen Stand sein und alle News mitbekommen? Wir bereiten dir die aktuellsten Themen der gesamten Hundewelt für dich auf!'
  } else {
    helperText = 'Für diesen Abschnitt exisitiert kann keine Hilfe angezeigt werden.'
  }
  console.log(id);
  helper.firstChild.firstChild.textContent = helperText;
}
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>
          <img src="../../public/images/Harmony.png" alt="">
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="flex flex-col justify-start items-center gap-5 mx-5">
        <div class="w-11/12">
          <div class="tab-heading flex flex-row align-middle">
            <div class="heading-text">
              Dein Lernfortschritt
            </div>
          </div>
          
          <div class="flex flex-col card">
            <router-link to="learn">
            <media-card title="Übung: Calm your buddy" buttonText="Lernen fortsetzen">
              4/7 Lernziele erreicht
              <ion-progress-bar :value="4/7" />
            </media-card>
          </router-link>
          </div>
        </div>


        <div class="w-11/12">
          <div class="tab-heading flex flex-row align-middle">
            <div class="heading-text">
              Study Corner
            </div>
            <div class="help-button" id="lastWeek" @click="openPopUp('studyCorner')">?</div>
          </div>
          <div class="flex flex-col card">
            <router-link to="learn">
            <basic-card title="Pawfect Learning" content="Lerne mit Hilfe von Videos mehr über deinen Vierbeiner 😊🐶" buttonText="Zur Bibliothek"/>
            </router-link>
          </div>
        </div>

        <div class="w-11/12">
          <div class="tab-heading flex flex-row align-middle">
            <div class="heading-text">
              Blog
            </div>
            <div class="help-button" id="lastWeek" @click="openPopUp('blog')">?</div>
          </div>
          <div class="flex flex-col gap-4 card basic-card">
            <router-link to="/blog1">
            <basic-card title="Wie beeinflusst Musik das Verhalten deines Hundes?" imageLink="images/dog_training.jpg" content="Musik ist eine Kunstform, die uns Menschen seit Jahrtausenden begleitet und vielfältige ..." buttonText="Weiterlesen"/>
            </router-link>
          </div>
          <div class="flex flex-col gap-4 card basic-card">
            <router-link to="/blog2">
            <basic-card title="Wie kann ich einen Hund mit Musik konditionieren?" imageLink="images/dog_training2.jpg" content="Die Konditionierung von Hunden ist eine bewährte Methode, um gewünschtes ..." buttonText="Weiterlesen"/>
            </router-link>
          </div>
          <div class="flex flex-col gap-4 card basic-card">
            <router-link to="/blog3">
            <basic-card title="Wie reagiere ich in Situationen, in denen mein Hund gestresst ist, am besten?" imageLink="images/dog_win.jpg" content="Hunde sind wie wir Menschen empfindsame Lebewesen und können in bestimmten ..." buttonText="Weiterlesen"/>
            </router-link>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>