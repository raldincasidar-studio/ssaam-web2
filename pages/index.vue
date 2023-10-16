<template lang="pug">
.container 
  h2 Welcome to 
  img.ssaam-logo(src="/ssaam_logo.png")
  p JRMSU Students’ School Activity and Attendance Management
  nuxt-link.button(to='/get-started') Get Started


  .credits 
    img(src="/creatives.png")
    span Developed by: CCS-SG Creatives Commitee
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #F0F0F0;
  min-height: 100vh;
  background: url('/bg.png') no-repeat center center;
  background-size: cover;
  position: relative;

  .credits {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    padding: 10px;

    img {
      width: 100%;
      max-width: 110px;
    }

    span {
      display: block;
      font-weight: bold;
      font-size: 15px;
      opacity: 0.5;
    }
  }
  
  
  h2 {
    font-size: 20px;
    text-align: center;
    color: #213555;
    font-weight: `normal`;
  }

  img.ssaam-logo {
    width: 100%;
    max-width: 600px;
    margin: -30px 0;
    
  }

  p {
    text-align: center;
    margin: 35px 0;
    margin-top: -45px;
    opacity: 0.7;
    font-weight: bold;
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
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
