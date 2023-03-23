<script setup>
let name = ref(null)
let email =ref(null)
let confirmPassword = ref(null)
let password = ref(null)
let errors = ref(null)
 
</script>

<template>
    <div class="text-center text-[28px] mb-4 font-bold"> Sign Up</div>
    
    <div class="px-6 pb-2">
        <TextInput placeholder="Full Name"
         v-model:input="name" 
         inputType="text" 
         :autoFocus="true" 
         error="" />
        <span v-if="error" class="text-red-300 text-[14px] font-semibold">{{ error }}</span>
    </div>

    <div class="px-6 pb-2">
        <TextInput placeholder="Email Address"
         v-model:input="email" 
         inputType="email" 
         :autoFocus="true" 
         error="" />
        <span v-if="error" class="text-red-300 text-[14px] font-semibold">{{ error }}</span>
    </div>

    <div class="px-6 pb-2">
        <TextInput placeholder=" Password"
         v-model:input="password" 
         inputType="password" 
         :autoFocus="true" 
         error="" />
        <span v-if="error" class="text-red-300 text-[14px] font-semibold">{{ error }}</span>
    </div>
 
    <div class="px-6 pb-2 ">
        <TextInput placeholder="Confirm Password" v-model:input="confirmPassword" inputType="password" />
        <span v-if="error" class="text-red-300 text-[14px] font-semibold">{{ error }}</span>
    </div>

    <div class="px-6 text-[12px] text-gray-600"> Forgot Password ? </div>

    <div class="px-6 pb-2 mt-6">
        <button :disabled="(!name||!email || !password || !confirmPassword)"
        :class="(!name||!email || !password || !confirmPassword) ? 'bg-gray-200' : 'bg-[#f02c56]'"
        @click="$event =>register()"
        class="w-full text-[17px] font-semibold text-white py-3 rounded-sm">Sign Up</button>
    </div>
</template>