<template lang="pug">
.container 
    h3 Welcome!
    h2 {{ $store.state.userStorage?.loginSession?.name.firstname }} {{ $store.state.userStorage.loginSession?.name.middlename }} {{ $store.state.userStorage.loginSession?.name.lastname }} {{ $store.state.userStorage.loginSession?.name.suffix }}


    .form-container
        span.label Action
        
        .flex-row
                a.button-link(href="#!") View Information
                a.button-link(href="#!") Upload Attachment
                a.button-link(href="#!") Update Information
                a.button-link(href="#!" @click="logOut()") Logout
                
    .form-container
        span.label QR Code
        .qrcode-center
            .d-flex-center
                qr-code(:text="$store.state.userStorage.loginSession?.studentId || 'ERROR'" :size="200" bg-color="#F0F0F0" color="#213555")

            h3 {{ $store.state.userStorage.loginSession?.studentId }}
            h2 {{ $store.state.userStorage.loginSession?.name.firstname }} {{ $store.state.userStorage.loginSession?.name.middlename }} {{ $store.state.userStorage.loginSession?.name.lastname }} {{ $store.state.userStorage.loginSession?.name.suffix }}

            a.button-link(href="#!" @click="logOut()") Logout
                
    .form-container
        span.label Upload Attachment

        table.attachments 
            tr
                td #[span.blocks ID Picture] #[span.tag(class="waiting") WAITING]
                td(style="text-align: center") 
                    button.button-link(href="#!" @click="$refs.id_picture.click()" :disabled="id_picture_loading") {{ id_picture_loading ? 'UPLOADING ...' : 'UPLOAD FILE' }}
                    input(style="display: none" type="file" accept="image/*" ref="id_picture" @change="updateIDPicture()")
            //- tr
            //-     td #[span.blocks Waiver] #[span.tag(class="waiting") WAITING]
            //-     td(style="text-align: center") 
            //-         a.button-link(href="#!" @click="logOut()") UPLOAD FILE
            //- tr
            //-     td #[span.blocks Medical Certificate] #[span.tag(class="waiting") WAITING]
            //-     td(style="text-align: center") 
            //-         a.button-link(href="#!" @click="logOut()") UPLOAD FILE
            //- tr
            //-     td #[span.blocks Profile Picture] #[span.tag(class="waiting") WAITING]
            //-     td(style="text-align: center") 
            //-         a.button-link(href="#!" @click="logOut()") UPLOAD FILE

            //-         transition(name="fade" mode="out-in")

    .form-container
        span.label Basic Information Details
        
        .flex-row
            .form-group
                label First Name
                input(type="text" placeholder="Juan" v-model="first_name")
            .form-group
                label Middle Name
                input(type="text" placeholder="Ponce" v-model="middle_name")
            .form-group
                label Last Name
                input(type="text" placeholder="Luna" v-model="last_name")
            .form-group
                label Suffix
                input.short(type="text" placeholder="Jr" v-model="suffix")
        .flex-row
            .form-group
                label Contact Number
                input(type="text" placeholder="+639517955767" v-model="contact_number")
            .form-group
                label Email Address
                input(type="text" placeholder="juan@gmail.com" v-model="email")
            .form-group
                label Sex
                //- input(type="text" placeholder="Juan")
                select(name="sex" v-model="sex")
                    option(disabled) -- Select --
                    option(value="Male") Male
                    option(value="Female") Female

    .form-container
        span.label Program Enrolled

        .flex-row 
            .form-group
                label Semester
                select(name="semester" v-model="semester")
                    option(value="First Semester") First Semester
                    option(value="Second Semester") Second Semester
            .form-group
                label School Year
                //- input(type="text" placeholder="2023" v-model="year_level")
                select(name="semester" v-model="school_year")
                    option(value="2023-2024") 2023-2024
            .form-group
                label Year Level
                //- input(type="text" placeholder="2023" v-model="year_level")
                select(name="semester" v-model="year_level")
                    option(value="1st Year") 1st Year
                    option(value="2nd Year") 2nd Year
                    option(value="3rd Year") 3rd Year
                    option(value="4th Year") 4th Year
                    option(value="5th Year") 5th Year

        
        .flex-row
            .form-group
                label College
                //- input(type="text" placeholder="Juan")
                select(name="college" v-model="college")
                    option(:value="college.college_code" v-for="college in colleges" :key="college.college_code") {{ college.college_description }}
                    //- option(value="College 2") College 2
                    //- option(value="College 3") College 3
                    //- option(value="College 4") College 4
                    //- option(value="College 5") College 5
                    //- option(value="College 6") College 6
                    //- option(value="College 7") College 7
                    //- option(value="College 8") College 8
            .form-group
                label Degree Program
                //- input(type="text" placeholder="Juan")
                select(name="course" v-model="program_enrolled")
                    option(:value="program.program_code" v-for="program in programs" :key="program.program_code") {{ program.program_description }}
                    //- option(value="Program 2") Program 2
                    //- option(value="Program 3") Program 3
                    //- option(value="Program 4") Program 4
                    //- option(value="Program 5") Program 5
                    //- option(value="Program 6") Program 6
                    //- option(value="Program 7") Program 7
                    //- option(value="Program 8") Program 8
            .form-group
                label Major
                select(name="major" v-model="major")
                    option(:value="major.major_code" v-for="major in majors" :key="major.major_code") {{ major.major_description }}
                    //- option(value="Major 3") Major 3
                    //- option(value="Major 4") Major 4
                    //- option(value="Major 5") Major 5
                    //- option(value="Major 6") Major 6
                    //- option(value="Major 7") Major 7
                    //- option(value="Major 8") Major 8

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
    text-transform: uppercase;
    }
    
    h3 {
    font-size: 20px;
    text-align: center;
    color: #213555;
    font-weight: normal;
    text-transform: uppercase;
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
        flex-wrap: wrap;


        

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
            border-bottom: 5px solid #e3e3e3;
            transition: all .3s cubic-bezier(0.075, 0.82, 0.165, 1);

            &:active {
                border-bottom: 2px solid #e3e3e3;
                margin-top: 13px;
            }
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
            border-bottom: 5px solid #e3e3e3;
            transition: all .3s cubic-bezier(0.075, 0.82, 0.165, 1);

            &:active {
                border-bottom: 2px solid #e3e3e3;
                margin-top: 13px;
            }
        }
    }

}

table.attachments {
    width: 100%;
    border-collapse: collapse;
    
    tr td {
        border: 1px solid #e3e3e3;
        padding: 10px;

        span.tag {
            background-color: red;
            color: white;
            padding: 5px 13px;
            border-radius: 99999px;
            font-size: 0.7rem;
            margin: 10px;
            display: inline-block;

            &.waiting {
                background-color: rgb(225, 185, 29);
            }

            &.aproved {
                background-color: rgb(50, 208, 35);
            }

            &.declined {
                background-color: rgb(200, 42, 42);
            }
        }

        .button-link {
            text-decoration: none;
            font-weight: bold;
            font-size: 15px;
            text-transform: uppercase;
            color: #213555;
            border: 2px solid #e3e3e3;
            padding: 10px 25px;
            display: inline-block;
            border-radius: 999999999999px;
            border-bottom: 5px solid #e3e3e3;
            transition: all .3s cubic-bezier(0.075, 0.82, 0.165, 1);

            &:active {
                border-bottom: 2px solid #e3e3e3;
                margin-top: 3px;
            }
        }
    }
}

@media only screen and (max-width: 769px) {

    .container {
        /* display: none; */
        padding: 30px;

        & > h3 {
            font-size: 16px !important;

        }

        & > h2 {
            font-size: 30px;
        }
    }
}

@media only screen and (max-width: 481px) {
    .flex-row {
        flex-wrap: wrap;
    }

    table.attachments {
    
            tr td {

            span.blocks {
                display: block;
                margin-left: 0;
            }

            span.tag {
                
                margin: 5px;
                margin-left: 0;
            }
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
        id_picture_loading: false,
    }
},

async mounted() {

    let response;
    try {
            response = await this.$axios.post('/SSAAM/API-Services/Attachment/GetAttachmentRecord', {
                request: "ALL",
                    
                    // sex: this.sex;
            })
        } catch (error) {
            alert('Error 1001! Contact Department Head');
            console.log(error);
            return;
        }

        console.log(response);

},

methods: {

    toDataURL(image) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
        })
    },

    async updateIDPicture() {
        
        const file = this.$refs.id_picture.files[0];
        
        if (!file) {
            alert('Error: File invalid. Not uploaded')
        }

        this.id_picture_loading = true;

        let response;

        try {
            response = await this.$axios.post('/SSAAM/API-Services/Attachment/Insert', {
                student_id: this.$store.state.userStorage.loginSession?.studentId,
                attachment_description: {
                    file_type: "waiver",
                },
                attachment_data: this.toDataURL(file)
                    
                    // sex: this.sex;
            })
        } catch (error) {
            alert('Error 1001! Contact Department Head');
            console.log(error);
            this.id_picture_loading = false;
            return;
        }

        console.log(response);
        this.id_picture_loading = false;


    },



    nextStep() {
        this.step = this.step + 1;
    },
    goBackStep() {
        this.step = this.step - 1;
    },

    logOut(){
        this.$store.commit('userStorage/setLoginSession', {});
        this.$router.replace('/');
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