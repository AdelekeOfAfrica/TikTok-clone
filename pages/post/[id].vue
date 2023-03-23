<script setup>

const route = useRoute();
const router = useRouter();

let video = ref(null);
let isLoaded = ref(false);
let comment=ref(null);
let inputFocused = ref(false);

onMounted(()=>{ //if video is not empty fetch url //
    isLoaded.value = true;
    video.value.play(); 
  //  video.value.addEventListener('loadeddata', (e)=>{//
    //    if(e.target){//
      //      setTimeout(()=>{//
        //        isLoaded.value = true//
          //  }, 500)//
       // }//
    //})//
    
})

onBeforeUnmount(() =>{
    video.value.pause()
    video.value.currentTime = 0 
    video.value.src = ''
})

watch(()=>isLoaded.value, ()=>{
    if (isLoaded.value){
        setTimeout(()=> video.value.play(), 500)
    }
})

</script>

<template>
    <div id="postPage" class="fixed lg:flex justify-between z-50 top-0 left-0 w-full h-full bg-block lg:overflow-hidden overflow-auto">
        <div class="lg:w-[calc(100%-540px)] h-full relative">
            <NuxtLink class="absolute z-20 m-5 rounded-full bg-gray-700 p-1.5 hover:bg-gray-500">
                <Icon name="material-symbols:close" color="#ffffff" size="27" />
            </NuxtLink>

            <div v-if="true">
            <button :disabled="!isLoaded" @click="$event =>loopThroughPostsup()" class="absolute z-20 right-4 top-4 flex items-center justify-center rounded-full bg-gray-700 p-1.5 hover:bg-gray-800">
                <Icon name="mdi:chevron-up" size="30" color="#ffffff" />
            </button>

            <button :disabled="!isLoaded" @click="$event =>loopThroughPostsdown()" class="absolute z-20 right-4 top-20 flex items-center justify-center rounded-full bg-gray-700 p-1.5 hover:bg-gray-800">
                <Icon name="mdi:chevron-down" size="30" color="#ffffff" />
            </button>
            </div>

            <img class="absolute top-[18px] left-[70px] rounded-full lg:mx-0 mx-auto" width="45" src="@/assets/images/tiktok-small.png" />
            <video v-if="true" class="absolute object-cover w-full my-auto z-[-1] h-screen" src="/Reeds.mp4" />
            
            <div v-if="!isLoaded" class="flex items-center justify-center bg-black bg-opacity-70 h-screen lg:min-w-[480px]">
            <Icon class="animate-spin ml-1" name="mingcute:loading-line" size="100" color="#ffffff" />
            </div>

            <div class="bg-black bg-opacity-70 lg:min-w-[480px]">
                <video v-if="true" ref="video" loop muted class="h-screen mx-auto" src="/Reeds.mp4" />
            </div>
        </div>

        <div id="InfoSection" v-if="true" class="lg:max-w-[550px] relative w-full h-full bg-white">
            <div class="py-7" />
            <div class="flex  items-center justify-between px-8">
                <div class="flex items-center">
                    <NuxtLink href="/">
                    <img class="rounded-full lg:mx-0 mx-auto" width="40" src="https://picsum.photos/id/8/300/320" />
                    </NuxtLink>

                    <div clas="ml-3 pt-0.5">
                        <div class="text-[17px] font-semibold">
                            Username
                        </div>
                        <div class="text-13[px] -mt-5 font-light">
                            Username
                            <span class="relative -top-[2px] text-[30px] pr-0.5">.</span>
                            <span class="font-medium">Date Here</span>
                        </div>
                    </div>
                </div>

                <Icon v-if="true" @click="$event=>deletePost()" class="cursor-pointer" name="material-symbols:delete-outline-sharp" size="25" />
            </div>

            <div class="px-8 mt-4 text-sm">This is the Post text</div>

            <div class="px-8 mt-4 text-sm font-bold ">
                <Icon name="mdi:music" size="17" />
                Original sound - Username
            </div>

            <div class="flex items-center px-8 mt-8">
                <div class="pb-4 text-center flex items-center">
                    <button class="rounded-full bg-gray-200 p-2 cursor-pointer">
                        <Icon name="mdi:heart" size="25" />
                    </button>
                    <span class="text-xs pl-2 pr-4 text-gray-800 font-semibold">1234</span>
                </div>

                 <div class="pb-4 text-center flex items-center">
                    <div class="rounded-full bg-gray-200 p-2 cursor-pointer">
                        <Icon name="bx:bxs-message-rounded-dots" size="25" />
                    </div>
                    <span class="text-xs pl-2 pr-4 text-gray-800 font-semibold">1234</span>
                </div>
            </div>

            <div id="comments" class="bg-[#f8f8f8] z-0  w-full h-[calc(100%-273px)] border-t-2 overflow-auto">
                <div class="pt-2">
                    <div v-if="false" class="text-center mt-6 text-xl text-gray-500"> No Comments...</div>

                    <div v-else class="flex items-center justify-between px-8 mt-4">
                        <div class="flex items-center relative w-full">
                            <NuxtLink to="/">
                                <img class="absolute top-0 rounded-full lg:mx-0 mx-auto" width="40" src="https://picsum.photos/id/8/300/320" />
                            </NuxtLink>
                            
                            
                            <div class="ml-14 pt-0.5 w-full">
                                <div class="text-[18px] font-semibold flex items-center justify-between">
                                    Username
                                    <Icon v-if="true" @click="$event=>deleteComment()" class="cursor-pointer" name="material-symbols:delete-outline-sharp" size="25" />
                                </div>

                                <div class="text-[15px] font-light">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mb-28" />
                </div>

                <div id="create Comment" v-if="true" class="absolute flex items-center justify-between bottom-0 bg-white h-[85px] lg:max-w-[550px] w-full py-5 px-8 border-t-2">
                    <div :class="inputFocused ? 'border-2  border-gray-400' :'border-2 border-[#f1f1f2]'" class="bg-[#f1f1f2] flex items-center rounded-lg w-full lg:max-w-[420px]">
                        <input v-model="comment" @focus="$event=>inputFocused = true" @blur="$event =>inputFocused = false"
                        class="bg-[#f1f1f2] text-[14px] focus:outline-none w-full lg:max-w-[420px] p-2 rounded-lg" type="text" placeholder="add comment ...">
                    </div>
                    <button :disabled="!comment" @click="$event =>addComment()" :class="comment ? 'text-[#f02c56] cursor-pointer' :'text-gray-400'"
                    class ="font-semibold text-sm ml-5 pr-1">Post</button>
                </div>
            </div>
        </div>
    </div>
</template>

