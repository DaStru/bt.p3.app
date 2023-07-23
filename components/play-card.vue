<template>
    <div class="music-playcard">
        <router-link to="/music">
            <div class="flex flex-col card">
                <div class="last-played flex flex-row justify-between">
                    <img :src="imgLink" alt="" class="play-image-s">
                    <div class="played-text">
                        <div class="played-interpret">
                            {{ interpret }}
                        </div>
                        <div class="played-song-name">
                            {{ songName }}
                        </div>
                    </div>
                    <div class="play-button flex">
                        <div class="arrow-right"></div>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script setup>

defineProps({
    interpret: String,
    songName: String,
    imgLink: String
})

</script>
