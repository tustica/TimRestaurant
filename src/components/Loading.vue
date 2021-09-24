<template>
    <div :class="{loader: true, fadeout: !isLoading}">
        <fulfilling-square-spinner
            :animation-duration="2000"
            :size="75"
            :color="'#f5f5f5'"
        />
    </div>
</template>

<script>
import {FulfillingSquareSpinner} from 'epic-spinners'

export default {
    name: 'Loader',
    props:{isLoading: Boolean},
    components: {
        FulfillingSquareSpinner,
    },
}
</script>


<style scoped>
    .loader {
        width: 100%;
        height: 100vh;
        margin: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        animation-name: color;
        animation-duration: 2s;
        animation-iteration-count: infinite;
    }
    @keyframes color {
    0% {
    background-color: #222;
    }
    50% {
    background-color: #1f447e;
        }
    100% {
    background-color: #222;
        }     
    }

    .fadeout {
        animation: fadeout 3s forwards;
    }

    @keyframes fadeout {
        to {
            opacity: 0;
            visibility: hidden;
    }
}

</style>