<template>
    <div class="container">
        <img id="midpic" src="../assets/midpic.jpeg" alt="food on table">
        <div class="about_text">
            <h1>Sammy's Way</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cumque quia voluptates aliquam perspiciatis eum quidem perferendis in rem! Ratione, voluptas? <img id='textpic' src="../assets/seafoodpic.jpg" alt="">Eum delectus expedita totam quae hic distinctio ullam nisi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit magni exercitationem maiores. Dolore facilis excepturi veritatis sit tenetur error, harum at eaque atque! Magni cumque, velit sunt possimus illo quae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde voluptatum debitis quo enim eos dolores, impedit sint nemo quas praesentium maxime, vero beatae. Repellendus facere esse, nesciunt sequi mollitia officiis.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About',
}

</script>
<style scoped>
    .container{
        display: flex;
        padding: 70px;
        transition: all 1s ease 0s;
        border-bottom: 10px solid #ff8914;
    }
    #midpic{
        margin-top: 50px;
        width: 675px;
        height: 400px;
    }
    .about_text{
        display: flex;
        text-align: left;
        flex-direction: column;
        padding: 0px 50px;
        margin: 0px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    .about_text h1{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        align-self: center;
    }
    #textpic{
        padding: 15px;
        width: 50%;
        float: right;
    }
    
</style>
