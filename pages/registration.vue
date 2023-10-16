<template lang="pug">
.container 
    h3 Your Student ID
    h2 {{ $store.state.userStorage.studentId }}

    .errors(v-if="errors.length")
        a.close-btn(href="#!" @click="errors = []") [X]
        h2 Errors:
        ul
            li(v-for="error in errors" :key="error") {{ error }}

    transition(name="fade" mode="out-in")

        .form-container(v-if="step == 1" key="1")
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

        .form-container(v-if="step == 2" key="2")
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

        .form-container(v-if="step == 3" key="3")
            span.label Submit Attachment
            
            .flex-row
                .form-group
                    label Student Copy
                    input(type="text" readonly style="cursor: pointer" v-model="sc_filename" placeholder="Attach File" @click="$refs.student_copy.click()")
                    input(type="file" style="display: none" accept="image/*,pdf" ref="student_copy" @change="processSCData()")
                .form-group
                    label ID Picture
                    input(type="text" readonly style="cursor: pointer" v-model="ip_filename" placeholder="Attach File" @click="$refs.id_picture.click()")
                    input(type="file" style="display: none" accept="image/*" ref="id_picture" @change="processIPData()")
            .flex-row
                .form-group
                    label Medical Requirements
                    input(type="text" readonly style="cursor: pointer" v-model="mr_filename" placeholder="Attach File" @click="$refs.medical_requirements.click()")
                    input(type="file" style="display: none" accept="image/*,pdf" ref="medical_requirements" @change="processMRData()")
                .form-group
                    label Waiver
                    input(type="text" readonly style="cursor: pointer" v-model="w_filename" placeholder="Attach File" @click="$refs.waiver.click()")
                    input(type="file" style="display: none" accept="image/*,pdf" ref="waiver" @change="processWData()")

    .dflex 
        a.button(href='#!' @click="goBackStep()" v-if="step > 1") Back
        a.button(href='#!' @click="register()" v-if="step == 3") CONFIRM AND SAVE DATA
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
    

    .errors {
        background-color: rgb(226, 41, 41);
        padding: 20px;
        width: 100%;
        max-width: 850px;
        border-radius: 16px;
        margin: 20px 15px;

        a.close-btn {
            float: right;
            color: white;
            display: inline-block;
            cursor: pointer;
        }

        h2 {
            text-align: left;
            width: 100%;
            font-size: 20px;
            color: white;
            margin: 0;
        }

        ul {
            margin-left: 30px;
            color: white;
        }
    }


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
        flex-wrap: wrap;

        .form-group {

            margin: 25px;

            input, label {
                display: block;
            }

            flex: 0 0 calc(25% - 50px);

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


@media only screen and (max-width: 769px) {

    .container {
        /* display: none; */
        padding: 30px;
    }

    .flex-row {
        flex-wrap: wrap;
    }
    .form-group {
        flex: 0 0 calc(50% - 50px) !important;
        margin: 5px 25px !important;
    }
}

@media only screen and (max-width: 769px) {

.container {
    /* display: none; */
    padding: 25px;
}

.form-container {
    padding: 20px 10px !important;
}

.flex-row {
    flex-wrap: wrap;
}
.form-group {
    flex: 0 0 calc(100% - 50px) !important;
    margin: 5px 0 !important;

    input {
        width: calc(100% - 25px) !important;
    }
}

.dflex {
    flex-wrap: wrap;
    padding: 15px; 
    flex-direction: column !important;

    a.button {
        display: block;
        text-align: center;
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



        errors: [],


        first_name: '',
        middle_name: '',
        last_name: '',
        suffix: '',
        program_enrolled: '',
        college: '',
        degree_program: '',
        major: '',
        contact_number: '',
        email: '',
        sex: '',
        semester: '',
        year_level: '',
        school_year: '',



        programs: [],
        colleges: [],
        majors: [],


    }
},



mounted() {
      this.$axios.post('/SSAAM/API-Services/Course/GetRequest', {
        request: "GET_PROGRAM"
      }).then(data => {
        const results = data.data.Result;

        this.programs = results;
        console.log(results);
      }).catch(err => {
        console.error(err);
      })
      this.$axios.post('/SSAAM/API-Services/Course/GetRequest', {
        request: "GET_COLLEGE"
      }).then(data => {
        const results = data.data.Result;

        this.colleges = results;
        console.log(results);
      }).catch(err => {
        console.error(err);
      })
      this.$axios.post('/SSAAM/API-Services/Course/GetRequest', {
        request: "GET_MAJOR"
      }).then(data => {
        const results = data.data.Result;

        this.majors = results;
        console.log(results);
      }).catch(err => {
        console.error(err);
      })
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

    async register() {

        const errors = [];
    
        if (this.first_name == "") errors.push('First name field is empty')
        if (this.middle_name == "") errors.push('Middle name field is empty')
        if (this.last_name == "") errors.push('Last name field is empty')
        // if (this.suffix == "") errors.push('Suffix name field is empty')
        if (this.contact_number == "") errors.push('Contact number field is empty')
        if (this.email == "") errors.push('Email field is empty')
        if (this.sex == "") errors.push('Sex field is empty')
        if (this.program_enrolled == "") errors.push('Program Enrolled field is empty')
        if (this.college == "") errors.push('College field is empty')
        if (this.major === "") errors.push('Major field is empty')
        if (this.semester == "") errors.push('Semester field is empty')
        if (this.year_level == "") errors.push('Year Level field is empty')
        if (this.school_year == "") errors.push('Year Level field is empty')
        if (this.sc_filename == "") errors.push('Student Copy is empty')
        if (this.ip_filename == "") errors.push('ID Picture is empty')
        // if (this.mr_filename == "") errors.push('Medical Requirements is empty')
        // if (this.w_filename == "") errors.push('Waiver is empty')

        if (errors.length > 0) {
            this.errors = errors;
            return;
        }


        let response; 
        try {
            const data = {
            student_id: this.$store.state.userStorage.studentId,
            fullname: {
                    firstname: this.first_name,
                    middlename: this.middle_name,
                    lastname: this.last_name,
                    suffix: this.suffix,
                },
                sex: this.sex,
                program_enroll: {
                    year_level: this.year_level,
                    college: this.college,
                    program: this.program_enrolled,
                    major: this.major,
                    other: {
                        semester: this.semester,    
                        school_year: this.school_year,
                    },
                },
                contact_no: this.contact_number,
                email_address: this.email,
                profile: await this.toDataURL(this.$refs.id_picture.files[0])
                
                
                // sex: this.sex;
            }
            console.log(data);
            response = await this.$axios.post('/SSAAM/API-Services/StudentAccount/Update', data);
            
            if (response.data.Result) {

                this.$store.commit('userStorage/setLoginSession', {
                    studentId: response.data.Result[0].student_id,
                    name: response.data.Result[0].fullname,
                })
                this.$router.push('/dashboard');
            } else {
                console.error(response.data);
                alert('error');
            }

        } catch (error) {
            console.error('ERROR IN SENDING: ', error);
        }

        this.$axios.post('API-Services/Attachment/Insert', {
            student_id: '23-A-00045',
            attachment_description: {
                file_type: 'student_copy',
            },
            attachment_data: this.toDataURL(this.$refs.student_copy.files[0])
                
                // sex: this.sex;
        }).then(data => {
            console.log('STUDENT_COPY SUCCESS', data)
        })

        if (this.medical_requirements) {
            this.$axios.post('API-Services/Attachment/Insert', {
                student_id: '23-A-00045',
                attachment_description: {
                    status: 'eh?'
                },
                attachment_data: this.toDataURL(this.$refs.medical_requirements.files[0])
                    
                    // sex: this.sex;
            }).then(data => {
                console.log('MEDICAL_REQUIREMENT SUCCESS', data)
            })
        }

        if (this.waiver) {
            this.$axios.post('API-Services/Attachment/Insert', {
                student_id: '23-A-00045',
                attachment_description: {
                    status: 'eh?'
                },
                attachment_data: this.toDataURL(this.$refs.waiver.files[0])
                    
                    // sex: this.sex;
            }).then(data => {
                console.log('WAIVER SUCCESS', data)
            })
        }


    },

    toDataURL(image) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
        })
    }
}
}

</script>