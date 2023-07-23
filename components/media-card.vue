<template>
    <div class="flex flex-col w-full rounded-md">
        <div class="ml-2">
            <h4>
                {{ title }}
            </h4>
        </div>
        <div class="mx-3">
            <slot/>
        </div>
        <div v-if="content.length > 0" class="mx-2">
            {{ content }}
        </div>
        <div v-if="buttonText.length > 0" class="flex justify-end m-2 cursor-pointer">
            {{ buttonText }} ➞
        </div>
    </div>
</template>

<script setup>

defineProps({
    title: String,
    content: {
        type: String,
        default: ""
    },
    imageLink: {
        type: String,
        default: ""
    },
    buttonText: {
        type: String,
        default: ""
    }
})

</script>