<template>
    <div class="learn-card">
        <a :href="ytlink">
            <div class="flex flex-col card">
                <div class="last-played flex flex-row justify-between items-center">
                    <div class="learn-text" style="font-weight: bold;">
                        <div class="flex items-center">
                            {{ lessonName }}
                        </div>
                    </div>

                    <div v-if="type === 'check'" style="font-size: 45px; margin: 0 5px;">
                        ✅
                    </div>
                    <div v-if="type === 'play'">
                        <div class="play-button flex">
                            <div class="arrow-right"></div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </a>
    </div>
</template>

<script setup>

defineProps({
    lessonName: String,
    type: {
        String,
        default: "play"
    },
    ytlink: String
})
</script>