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

        allLowerCaseNoCaps(str) {
            return str.split(' ').join('').toLowerCase()
          },

          setBackUrl(url) {
            this.isBackUrl = url
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

    },
    async getRandomUsers(type) {
        let res = await $axios.get(`/api/get-random-users`)
  
        if (type === 'suggested') {
          this.suggested = res.data.suggested
        }
  
        if (type === 'following') {
          this.following = res.data.following
        }
      },

    updateSideMenuImage(array, user) {
        for (let i = 0; i < array.length; i++) {
          const res = array[i];
          if (res.id == user.id) {
              res.image = user.image
          }
        }
      },
  
      async getAllUsersAndPosts() {
        let res = await $axios.get('/api/home')
        this.posts = res.data
      },
    
      },
      persist:true
    
  })