export const state = () => ({
    counter: 0,
    studentId: '',
    loginSession: {}
})


export const mutations = {
    increment(state) {
        state.counter++
    },
    setStudentId(state, value) {
        state.studentId = value
    },
    setLoginSession(state, value) {
        state.loginSession = value
    },
}