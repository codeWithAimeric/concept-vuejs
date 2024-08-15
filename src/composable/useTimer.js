import {onMounted, ref, onUnmounted} from 'vue'
export const useTimer = (initial = 0) => {

    const time = ref(initial);

    let timer; 
    onMounted(() => {
        timer = setInterval(() => {
            time.value++
        }, 1000)
    })
    onUnmounted(() => {
        clearInterval(timer)
    })

    return {
        time, 
        reset() {
            clearInterval(timer)
            time.value = 0
            timer = setInterval(() => {
                time.value++
            }, 1000)
        }
    };
}