import {defineStore} from 'pinia';
import {useUserStore} from './user';
import axios from '../plugins/axios';

const $axios = axios().provide.axios

export const useGeneralStore = defineStore('general', {
    state: () => ({ 
        isLoginOpen:false,
        isEditProfileOpen:false,
        selectedPost:null,
        ids:null,
        isBackUrl:"/",
        posts:null,
        suggested:null,
        following:null

     }),
    
    actions: {
        bodySwitch(val) {
            if (val) {
                document.body.style.overflow = 'hidden';
                return
            }
            document.body.style.overflow ='visible';
        },

    async hasSessionExpired () {

        await $axios.interceptors.response.use((response) => {
            //call was successfull
            return response;
        }, (error) => {
            switch (error.response.status) {
                case 401: //not logged in 
                case 419: // session expired
                case 503:// down for maintainance 

                // bounce the user to the login screen  with aredirect back 
                useUSerStore().resetUser() 
                window.location.href="/";
                break;
                case 500:
                    alert('oops, something went wrong, the team has been notified');
                    break;

                default:
                    //allow individual request to handle other errors
                return Promise.reject(error);
            }
        })

    }
    
      },
      persist:true
    
  })