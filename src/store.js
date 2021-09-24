export default {
    state: {
        reserving: false
    },
    makeReservation(){
        this.state.reserving = true
        console.log(this.state.reserving)
    }
}