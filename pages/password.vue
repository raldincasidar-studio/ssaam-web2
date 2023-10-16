<template lang="pug">
.container 
    h3 Welcome back
    h2(style="text-transform: uppercase") {{ $store.state.userStorage.studentId }}


    .form 
        label Your Last Name
        input(type="password" v-model="password")

    button.button(@click="loginTest()" :disabled="isLoading") {{ isLoading ? 'Loading ...' : 'LOGIN' }}
</template>
        
        <style scoped>
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          background-color: #F0F0F0;
          min-height: 100vh;
          
          
          h2 {
            font-size: 45px;
            text-align: center;
            color: #213555;
            font-weight: bold;
          }
          
          h3 {
            font-size: 20px;
            text-align: center;
            color: #213555;
            font-weight: normal;
          }
        
          img {
            width: 100%;
            max-width: 300px;
            margin: -20px 0;
            
          }
        
          p {
            text-align: center;
            margin: 35px 0;
            margin-top: -20px;
            opacity: 0.7;
          }
    
          .form {
            flex-direction: column;
            width: 100%;
            max-width: 500px;
            margin: 20px 0;
    
            input, label {
                display: block;
            }
    
            label {
                margin: 15px 0;
                text-align: center;
                font-size: 17px;
                opacity: 0.8;
            }
    
            input {
                border-radius: 13px;
                border: 3px solid #B0B0B0;
                background-color: #DADADA;
                font-size: 17px;
                padding: 10px 15px;
                width: 100%;
                text-align: center;
                transition: all .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                font-weight: bold;
                color: #213555;
                text-transform: uppercase;
            }
    
            input:focus {
                border-color: #213555;
            }
          }
        
          .button {
            border-radius: 9999999px;
            padding: 15px 40px;
            font-size: 17px;
            color: #213555;
            background-color: #E5D283;
            border: 0;
            border-bottom: 5px solid #213555;
            text-decoration: none;
            display: inline-block;
            font-weight: bold;
            text-transform: uppercase;
            margin-top: 30px;
            transition: all .3s cubic-bezier(0.075, 0.82, 0.165, 1);
          }
        
          .button:active {
            border-bottom: 0;
            border-right: 0;
            margin-top: 35px;
          }

          .button:disabled {
            border-bottom: 0;
            border-right: 0;
            margin-top: 35px;
            background-color: grey;
          }
        }
        </style>
        
        <script>
        export default {
          data() {
            return {
              password: '',
              isLoading: false,
            }
          },

          methods: {

            loginTest: function() {


              this.isLoading = true;
              this.$axios.post('/SSAAM/API-Services/StudentAccount/Login', {
                student_id: this.$store.state.userStorage.studentId,
                password: this.password
              }).then(response => {
                
                if (response.data.Result[0].fullname) {
                  this.$store.commit('userStorage/setLoginSession', {
                      studentId: response.data.Result[0].student_id,
                      name: response.data.Result[0].fullname,
                  })
                  this.$router.push('/dashboard');
                }
                else {
                  this.password = '';
                  alert('Incorrect Password');
                }

                this.isLoading = false;
                
              }).catch(err => {
                console.error(err);
              })

            }

          },
        }
        
        </script>