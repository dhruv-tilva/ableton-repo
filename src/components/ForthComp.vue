<template>
    <div class="flex items-center">
        <div id="firstDiv"
            class="w-[58.3333vw] h-[75vw] bg-[#b6ffc0] flex flex-col space-y-6 py-5 px-6 md:px-16 md:py-16 md:space-y-16 lg:px-28 lg:py-28 xl:px-36 xl:py-36 xl:space-y-28">
            <img class="w-24 h-24" src="\src\photos\pexels-photo-14528190.jpeg" alt="">
            <img class="w-24 h-24" src="\src\photos\pexels-photo-1485894.jpeg" alt="">
        </div>
        <div id="secondDiv" class="w-[41.66667vw] h-[41.66667vw] relative right-8">
            <img class="w-40 h-32" src="\src\photos\pexels-photo-1797161.jpeg" alt="">
        </div>
    </div>
</template>

<style scoped>
@media screen and (min-width: 370px) {
    #firstDiv img {
        width: 120px;
        height: 120px;
    }

    #secondDiv img {
        width: 180px;
        height: 160px;
    }
}

@media screen and (min-width: 420px) {
    #secondDiv {
        right: 60px;
    }
}

@media screen and (min-width: 768px) {
    #firstDiv img {
        width: 250px;
        height: 250px;
    }

    #secondDiv img {
        width: 300px;
        height: 300px;
    }
}

@media screen and (min-width: 1024px) {
    #firstDiv img {
        width: 400px;
        height: 400px;
    }

    #secondDiv img {
        width: 400px;
        height: 400px;
    }
}

@media screen and (min-width: 1300px) {
    #firstDiv img {
        width: 500px;
        height: 500px;
    }

    #secondDiv img {
        width: 600px;
        height: 600px;
    }

    #secondDiv {
        right: 130px;
    }
}
</style>