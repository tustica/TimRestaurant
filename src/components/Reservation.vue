<template> 
    <div class="reservation">
        <div class="reservation_form">
            <h1>Make a Reservation!</h1>
            <div class="line"></div>
            <div class="name">
                <input placeholder="Name" type="text" id="name_text">
            </div>
            <div class="time">
                <select name="Date" id="datepicker">
                    <option value selected disabled>Time</option>
                    <option value="11">11:00AM</option>
                    <option value="12">12:00AM</option>
                    <option value="1">1:00PM</option>
                    <option value="2">2:00PM</option>
                    <option value="3">3:00PM</option>
                    <option value="4">4:00PM</option>
                    <option value="5">5:00PM</option>
                    <option value="6">6:00PM</option>
                    <option value="7">7:00PM</option>
                    <option value="8">8:00PM</option>
                    <option value="9">9:00PM</option>
                    <option value="10">10:00PM</option>
                </select>
            </div>
            <div class="num_people">
                <select name="num_people" id="people">
                    <option value selected disabled>Number of People</option>
                    <option value="1">1</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                    <option value="2">4</option>
                    <option value="3">5</option>
                    <option value="4">6</option>
                    <option value="5">7</option>
                    <option value="6">8</option>
                    <option value="7">9</option>
                </select>
            </div>
            <button @click="reserve()" id="find_table">Reserve Table</button>
            <transition name="fade"><p id="reserve_complete" v-if="reserved">Thanks! We'll see you soon.</p></transition>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Reservation',
    methods: {
        reserve(){
            this.reserved = true
        }
    },
    data(){
        return {
            reserved: false
        }
    }
}
</script>

<style scoped>
.reservation{
    position: absolute;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
h1{
    margin:10px
}

#name_text{
    margin: 15px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    width: 210px;
    height: 30px;
}
#datepicker{
    margin: 15px;
    color: grey;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    width: 215px;
    height: 30px;
}
#people{
    margin: 15px;
    color: grey;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    width: 215px;
    height: 30px;
}
.reservation_form{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 0px;
    font-size: 20px;
    width: 70%;
    height: 350px;
    border: 2px solid #ff8914;
    padding: 20px;
    border-radius: 10px;
    background-color: rgba(233, 233, 233, 0.705);
}
#find_table{
    color: white;
    font-size: 22px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #ff8914;
    padding: 10px 30px;
    border: none;
    border-radius: 100px;
    cursor: pointer;
}
.line{
    width: 50%;
    height: 3px;
    background-color: #ff8914
}
#reserve_complete{
    color: green;
    margin: 5px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
@media screen and (max-width:768px) {
    .reservation{
        left: -20px;
    }
}
</style>
