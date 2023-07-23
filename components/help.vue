<script setup>
import { ref } from 'vue'

function closePopUp() {
  document.getElementById('helper').style.display = 'none';
}
</script>

<template>
    <div class="help-placer flex justify-around" id="helper">
        <div class="help-frame">
            <div id="help-text">

            </div>
            <div class="help-closer" @click="closePopUp">
                Schließen
            </div>
        </div>
    </div>
</template>