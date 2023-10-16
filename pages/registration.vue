<template lang="pug">
.container 
    h3 Your Student ID
    h2 23-A-00045   


    transition(name="fade" mode="out-in")

        .form-container(v-if="step == 1" key="1")
            span.label Basic Information Details
            
            .flex-row
                .form-group
                    label First Name
                    input(type="text" placeholder="Juan")
                .form-group
                    label Middle Name
                    input(type="text" placeholder="Juan")
                .form-group
                    label Last Name
                    input(type="text" placeholder="Juan")
                .form-group
                    label Suffix
                    input.short(type="text" placeholder="Jr")

        .form-container(v-if="step == 2" key="2")
            span.label Program Enrolled
            
            .flex-row
                .form-group
                    label College
                    //- input(type="text" placeholder="Juan")
                    select(name="college")
                        option College 1
                        option College 2
                        option College 3
                        option College 4
                        option College 5
                        option College 6
                        option College 7
                        option College 8
                .form-group
                    label Degree Program
                    //- input(type="text" placeholder="Juan")
                    select(name="course")
                        option Program 1
                        option Program 2
                        option Program 3
                        option Program 4
                        option Program 5
                        option Program 6
                        option Program 7
                        option Program 8
                .form-group
                    label Major
                    select(name="major")
                        option Major 1
                        option Major 2
                        option Major 3
                        option Major 4
                        option Major 5
                        option Major 6
                        option Major 7
                        option Major 8

        .form-container(v-if="step == 3" key="3")
            span.label Submit Attachment
            
            .flex-row
                .form-group
                    label Student Copy
                    input(type="text" readonly v-model="sc_filename" placeholder="Attach File" @click="$refs.student_copy.click()")
                    input(type="file" style="display: none" accept="image/*,pdf" ref="student_copy" @change="processSCData()")
                .form-group
                    label ID Picture
                    input(type="text" readonly v-model="ip_filename" placeholder="Attach File" @click="$refs.id_picture.click()")
                    input(type="file" style="display: none" accept="image/*" ref="id_picture" @change="processIPData()")
            .flex-row
                .form-group
                    label Medical Requirements
                    input(type="text" readonly v-model="mr_filename" placeholder="Attach File" @click="$refs.medical_requirements.click()")
                    input(type="file" style="display: none" accept="image/*,pdf" ref="medical_requirements" @change="processMRData()")
                .form-group
                    label Waiver
                    input(type="text" readonly v-model="w_filename" placeholder="Attach File" @click="$refs.waiver.click()")
                    input(type="file" style="display: none" accept="image/*,pdf" ref="waiver" @change="processWData()")

    .dflex 
        a.button(href='#!' @click="goBackStep()" v-if="step > 1") Back
        nuxt-link.button(to='/dashboard' v-if="step == 3") CONFIRM AND SAVE DATA
        a.button(href='#!' @click="nextStep()" v-if="step != 3") CONTINUE
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
    max-width: 900px;
    padding: 20px;
    border-radius: 16px;
    position: relative;
    margin: 15px 0;

    span.label {
        position: absolute;
        top: -15px;
        padding: 5px 10px ;
        left: 0;
        background-color: #F0F0F0;
        font-size: 16px;
        margin: 0 20px;
        color: #3f3f3f;
    }

    .flex-row {
        display: flex;
        flex-direction: row;
        justify-content: center;

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