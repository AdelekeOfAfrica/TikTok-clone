<script setup>
const props = defineProps(['errorType']);
const {errorType} =toRefs(props);

let error = ref('');
watch (() => errorType.value, () => {
    if(errorType.value =='caption'){
        error.value = 'Maximum of 150 Characters';
    } else if(errorType.value =='bio'){
        error.value = 'Maximum of  80 Characters';
    } else if(errorType.value =='file'){
        error.value  = 'Unsupported file use .mp4 instead';
    } else{
        error.value = '';
    }
})
</script>

<template>
    <div class="w-[100%] relative flex justify-center">
        <div :class="errorType ? 'visible' : 'invisible'" class=" absolute  top-6 z-50 mx-auto bg-black bg-opacity-70 text-white px-14 py-3 rounded-sm">
            {{error}}
        </div>
    </div>
</template>