<template>
    <div class="header">
        <div class="fixed_header" id="nav">
            <img id="milkfish" src="../assets/milkfish.png" alt="">
            <img id = "sammy" src="../assets/sammy-seafood.png" alt="">
            <ul class="nav-links">
                <li @click="scrollAbout()" href="">About</li>
                <li @click="scrollHours()" href="">Hours</li>
                <li @click="reserveSpot()">Make a Reservation</li>
                <li @click="directions()">Directions</li>
                
            </ul>
            <button id="contact" >Contact</button>
        </div>
    </div>
</template>

<script>

import store from '@/store.js'

export default {
    name: 'Header',
    data(){
        return store.state
    },
    methods: {
        directions(){
            window.scroll({top: 1730, behavior:'smooth'})
        },
        reserveSpot(){
            store.makeReservation()
            var pic = document.querySelector('.sibling')
            pic.setAttribute("style", "filter:brightness(50%)")
            window.scroll({top: 0, behavior:'smooth'})
        },
        scrollAbout(){
            window.scrollTo({top: document.querySelector('#about').scrollHeight, behavior: 'smooth'})
        },
        
        scrollHours(){
            window.scroll({top: 1157, behavior:'smooth'})
        }
    },
    mounted() {
        this.$nextTick(function(){
            window.addEventListener("scroll", function(){
                var navbar = document.getElementById("nav");
                var nav_classes = navbar.classList;
                var fish = document.getElementById("milkfish")
                var fish_classes = fish.classList;
                console.log('daja')
                if(document.documentElement.scrollTop >= 200) {
                    if (nav_classes.contains("shrink") === false) {
                            nav_classes.toggle("shrink");
                            fish_classes.toggle("shrink")
                    }
                }
                else {
                    if (nav_classes.contains("shrink") === true) {
                        nav_classes.toggle("shrink");
                        fish_classes.toggle("shrink")
                    }
        
                }
        })
        })
    },
}
</script>

<style lang='scss' scoped>
    $tablet: 768px;
    .header{
        width: 100%;
        height: 150px;
        background-color: rgb(241, 241, 241);
        box-shadow: 0px 3px 5px rgb(179, 179, 179);
        
    }
    .fixed_header.shrink {
        height: 100px;
        transition: all .8s ease 0s ;
    }
    .fixed_header{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position:fixed; /* fixing the position */
        left:0;           /* top left corner should start at leftmost spot */
        top:0;            /* top left corner should start at topmost spot */
        width:100vw;      /* I was confused on vh and vw until now haha */
        z-index:200;  /* z index so other content scrolls underneath */
        height:150px;
        background-color: rgb(241, 241, 241);
        box-shadow: 0px 3px 5px rgb(179, 179, 179);
        transition: all .5s ease 0s;
    }
    #menu_icon{
        width: 35px;
        height: 35px;
        margin-right: 20px;
    }
    h1{
        font-family: 'Libre Baskerville';
        font-size: 40px;
        color: rgb(90, 90, 90);
        margin-left: 20px;
    }
    #milkfish {
        width: 135px;
        margin: 0px;
        transform: rotate(-45deg);
        transition: all .5s ease 0s;
        cursor: pointer;
        margin-left: 20px;
        }
    #milkfish:hover {
        transform: rotate(0deg);
        width: 110px;
        margin-right: 25px;
    }
    #milkfish.shrink {
        margin-right: 45px;
        width: 90px;
        transform: rotate(-90deg);
        transition: all .5s ease 0s;
    }
    #sammy{
        width: 450px;
    }
    .nav-links {
        list-style: none;
    }

    .nav-links li{
        display: inline-block;
        padding: 0px 20px;
    }
    .nav-links li{
        text-decoration: none;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 20px;
        color: rgb(95, 95, 95);
        transition: all 0.5s ease 0s ;
    }
    .nav-links li:hover{
        color: rgb(97, 86, 192);
        cursor: pointer;
    }

    #contact{
        color: white;
        font-size: 18px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: #f58b20;
        margin-left: 50px;
        padding: 10px 20px;
        border: none;
        border-radius: 100px;
        transition: all 0.5s ease 0s ;
    }
    #contact:hover{
        cursor: pointer;
        background-color: blue;
    }
    @media screen and (max-width:$tablet) {
        .header, .fixed_header{
            width: 100%;
            height: 80px;
        }
        #milkfish{
            width: 90px;
        }
        #sammy{
            width: 300px;
        }
    }
</style>