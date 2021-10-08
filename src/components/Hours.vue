<template>
    <div class="hours_container">
        <div class="hours">
            <h1 id="res">RESTAURANT <span id="the_hours">HOURS</span></h1>
            <div class="takeout_hour_box">
                <div class="delivery">
                    <h2 class="headers">DELIVERY</h2>
                    <div class="line"></div>
                    <p class="times">Sun-Th, 9:30am-10pm</p>
                    <p>Fri-Sat, 9:30am-11:30pm</p>
                </div>
                <div class="happyhour">
                    <h2 class="headers">HAPPY HOUR</h2>
                    <div class="line"></div>
                    <p class="times">Mon-Fri, 2pm-4:42pm</p>
                </div>
            </div>
            <div class="lunch-dinner">
                <h2 class="headers">LUNCH & DINNER</h2>
                <div class="ld_line"></div>
                <p class="times">Sun-Th, 10am-10pm</p>
                <p class="times">Fri-Sat, 10am-11pm</p>
                <p class="times">Lunch available until 2pm</p>
            </div>
        </div>
        <div class="hours_pic">
                <img src="../assets/views.jpg" alt="views">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Hours',
}
</script>

<style scoped>
    .hours_container{
        display: flex;
        width: 100%;
        padding-bottom: 30px;
    }
    .hours{
        width: 50%;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    .hours_pic{
        width: 50%;
        margin-top: 70px;
    }
    .hours_pic img{
        border-radius: 20px;
    }
    .takeout_hour_box{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .line{
        margin-left: 70px;
        width: 50%;
        height: 3px;
        background-color: #ff8914
    }
    .delivery, .happyhour{
        margin-top: 0px;
        font-size: 20px;
        width: 40%;
        border: 2px solid #ff8914;
        padding: 10px;
        border-radius: 10px;
        background-color: rgba(233, 233, 233, 0.548);
    }
    #res{
        font-size: 45px;
        align-self: flex-start;
        margin-bottom: 20px;
    }
    #the_hours{
        color: #ff8914;
    }
    .headers{
        margin: 10px;
    }
    .times{
        margin-top: 10px;
    }
    .lunch-dinner{
        font-size: 20px;
        width: 80%;
        height: 190px;
        margin: 20px 0px 0px 50px;
        border: 2px solid #ff8914;
        padding: 10px;
        border-radius: 10px;
        background-color: rgba(233, 233, 233, 0.548);
    }
    .ld_line{
        margin-left: 130px;
        width: 50%;
        height: 3px;
        background-color: #ff8914
    }
    @media screen and (max-width: 768px) {
        .hours{
            margin: 0px 100px 0px 20px
        }
        .delivery{
            width: 250px;
            margin: 15px;
        }
    }
</style>