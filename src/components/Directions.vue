<template>
    <div id="map_container">
        <div>
            <h2 id="find_way">Find your way to us!</h2>

            <label>
            <gmap-autocomplete @place_changed="initMarker"></gmap-autocomplete>

            <button @click="addLocationMarker">Add</button>
            </label>
            <br/>
    </div>
    <br>
    <gmap-map id="gmap"
        :zoom="14"    
        :center="center"
        >
        <gmap-marker
        :key="index"
        v-for="(m, index) in locationMarkers"
        :position="m.position"
        @click="center=m.position"
        ></gmap-marker>
    </gmap-map>
    </div>
</template>

<script>
export default {
    name: "Directions",
    data() {
    return {
        center: { 
        lat: 39.7837304,
        lng: -100.4458825
        },
        locationMarkers: [],
        locPlaces: [],
        existingPlace: null
    };
    },

    mounted() {
    this.locateGeoLocation();
},

    methods: {
    initMarker(loc) {
        this.existingPlace = loc;
    },
    addLocationMarker() {
        if (this.existingPlace) {
        const marker = {
            lat: this.existingPlace.geometry.location.lat(),
            lng: this.existingPlace.geometry.location.lng()
        };
        this.locationMarkers.push({ position: marker });
        this.locPlaces.push(this.existingPlace);
        this.center = marker;
        this.existingPlace = null;
        }
    },
    locateGeoLocation: function() {
    navigator.geolocation.getCurrentPosition(res => {
        this.center = {
            lat: res.coords.latitude,
            lng: res.coords.longitude
        };
        });
    }
    }
};
</script>
<style scoped>
    #gmap{
        width:75%;  
        height: 600px;
    }
    #map_container{
        display: flex;
        flex-direction: column;
        align-items: center;
        border-top: 10px solid #ff8914;
        margin-bottom: 20px;
    }
    #find_way{
        font-size: 35px;
    }
</style>