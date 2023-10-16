<template lang="pug">
    .container 
        h3 Welcome!
        h2 Raldin C. Disomimba 
    

        .form-container
            span.label Action
            
            .flex-row
                    a.button-link(href="#!") View Information
                    nuxt-link.button-link(to="/") Logout
                    
        .form-container
            span.label QR Code
            .qrcode-center
                .d-flex-center
                    qr-code(text="Text to encode" size="200" bg-color="#F0F0F0" color="#213555")

                h3 23-A-00045
                h2 Raldin C. Disomimba

                a.button-link(href="#!") Logout


    </template>
                
<style scoped>



.fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #F0F0F0;
    min-height: 100vh;
    padding: 20px 15px;
    
    .dflex {
        display: flex;
        margin-top: 30px;

        a {
            margin: 10px;
        }
    }
    
    h2 {
    font-size: 45px;
    text-align: center;
    color: #213555;
    font-weight: bold;
    margin-bottom: 80px;
    }
    
    h3 {
    font-size: 20px;
    text-align: center;
    color: #213555;
    font-weight: normal;
    }


    .form-container {
    border: 1px solid #DADADA;
    width: 100%;
    max-width: 700px;
    padding: 20px;
    border-radius: 16px;
    position: relative;
    margin: 15px 0;

    span.label {
        position: absolute;
        top: -15px;
        padding: 5px 10px ;
        left: 50%;
        background-color: #F0F0F0;
        font-size: 16px;
        margin: 0 20px;
        margin-left: -50%;
        color: #3f3f3f;
    }

    .flex-row {
        display: flex;
        flex-direction: row;
        justify-content: center;


        

        .button-link {
            text-decoration: none;
            font-weight: bold;
            text-transform: uppercase;
            color: #213555;
            border: 2px solid #e3e3e3;
            padding: 10px 25px;
            display: inline-block;
            border-radius: 999999999999px;
            margin: 10px;
        }
        
        .form-group {

            margin: 25px;

            input, label {
                display: block;
            }

            width: 25%;

            label {
                margin: 10px 0;
                /* text-align: center; */
                font-size: 15px;
                opacity: 0.8;
            }
    
            input, select {
                border-radius: 13px;
                border: 2px solid #B0B0B0;
                background-color: #DADADA;
                font-size: 16px;
                padding: 10px 12px;
                width: 100%;
                /* text-align: center; */
                transition: all .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                /* font-weight: bold; */
                color: #213555;
                text-transform: uppercase;
            }
    
            input:focus,
            select:focus {
                border-color: #213555;
            }
        }
    }
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



    


    .qrcode-center {
        text-align: center;

        .d-flex-center {
            display: flex;
            justify-content: center;
            direction: columns;
        }



        h3 {
            font-size: 17px;
            font-weight: normal;
            margin: 15px;
            margin-top: 40px;
        }

        h2 {
            font-size: 25px;
            margin: 15px;
        }



        .button-link {
            text-decoration: none;
            font-weight: bold;
            text-transform: uppercase;
            color: #213555;
            border: 2px solid #e3e3e3;
            padding: 10px 25px;
            display: inline-block;
            border-radius: 999999999999px;
            margin: 10px;
        }
    }

}
</style>
                
<script>
export default {
data() {
    return {
        step: 1,
        sc_filename: '',
        ip_filename: '',
        mr_filename: '',
        w_filename: '',
    }
},

methods: {
    nextStep() {
        this.step = this.step + 1;
    },
    goBackStep() {
        this.step = this.step - 1;
    },

    processSCData() {

        const file = this.$refs.student_copy.files[0];

        if (file) {
            this.sc_filename = file.name;
        } else {
            this.sc_filename = '';
        }

    },

    processSCData() {

        const file = this.$refs.student_copy.files[0];

        if (file) {
            this.sc_filename = file.name;
        } else {
            this.sc_filename = '';
        }

    },

    processIPData() {

        const file = this.$refs.id_picture.files[0];

        if (file) {
            this.ip_filename = file.name;
        } else {
            this.ip_filename = '';
        }

    },

    processMRData() {

        const file = this.$refs.medical_requirements.files[0];

        if (file) {
            this.mr_filename = file.name;
        } else {
            this.mr_filename = '';
        }

    },

    processWData() {

        const file = this.$refs.waiver.files[0];

        if (file) {
            this.w_filename = file.name;
        } else {
            this.w_filename = '';
        }

    },
},

}
</script>