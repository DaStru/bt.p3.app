<template>

    <Bar :options="chartOptions" :data="chartData" />

</template>

<script setup>

import { Bar } from 'vue-chartjs'

import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = {
    labels: ["MO", "DI", "MI", "DO", "FR", "SA", "SO"],
    datasets: [
        {
            data: [2, 0, 4, 1, 2, 1, 0],
            borderRadius: Number.MAX_VALUE
        }
    ]
}

const chartOptions = {
    scales: {
        x: {
            grid: {
            display: false
            }
        },
    },
    animation: false,
    plugins: {
        legend: {
        display: false
        },
        tooltip: {
        enabled: false
        }
    }
}
</script>