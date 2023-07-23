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
    
    <div class="flex flex-col gap-5 mx-5">
        <router-link to="/hub">← Zurück zum Hub</router-link>
        <div class="card" style="padding: 10px;">
            <h4>4/7 Lernziele erreicht</h4>
            <ion-progress-bar :value="4/7"/>
        </div>
        <h3>Lerneinheiten</h3>
        <learn-card lessonName="6 Übungen die du JEDEN TAG mit deinem Hund machen solltest!" type="check" ytlink="https://www.youtube.com/watch?v=CKp1uUAzAMI&pp=ygUVeW91dHViZSBodW5kZXJ0cmFpbmVy"></learn-card>
        <learn-card lessonName="3 sinnvolle Hundetricks für den Alltag" type="check" ytlink="https://www.youtube.com/watch?v=VdE1ixwT4ss&pp=ygUVeW91dHViZSBodW5kZXJ0cmFpbmVy"></learn-card>
        <learn-card lessonName="Hund zieht an der Leine, nichts hilft? Das macht fast jeder falsch!" type="check" ytlink="https://www.youtube.com/watch?v=36ER2V1-YnU"></learn-card>
        <learn-card lessonName="Der perfekte Rückruf für deinen Hund" type="play" ytlink="https://www.youtube.com/watch?v=bkv5njoGeso"></learn-card>
        <learn-card lessonName="Warum dein NEIN nicht funktioniert" type="play" ytlink="https://www.youtube.com/watch?v=l8Oxkf6ZJ6Q"></learn-card>
        <learn-card lessonName="Richtig SPIELEN mit dem Hund! Wieso das EXTREM wichtig ist!" type="play" ytlink="Richtig SPIELEN mit dem Hund! Wieso das EXTREM wichtig ist!"></learn-card>
        <learn-card lessonName="Dem Hund konsequent Grenzen aufzeigen" type="play" ytlink="Dem Hund konsequent Grenzen aufzeigen"></learn-card>
    </div>
    <br>
    </ion-content>
    </ion-page>
</template>

<script setup>

</script>
