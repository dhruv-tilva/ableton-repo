<template>
    <div class="relative">
        <div class="w-[66.66667vw] h-[58.3333vw] bg-[#D5B3FF] absolute top-0 left-[16.66667vw] z-0"></div>
        <img id="firstImg" class="inline-block w-[33.33333vw] h-[25vw] ml-[8.33333vw] relative z-[1] top-[32px]"
            src="\src\photos\pexels-photo-1109541.webp" alt="">
        <img id="secondImg" class="inline-block relative w-[39.66667vw] h-[41.66667vw] ml-[16.66667vw] top-[30px]"
            src="\src\photos\pexels-photo-3183150.jpeg" alt="">
    </div>
</template>

<style scoped>
@media screen and (min-width: 420px) {
    #firstImg {
        top: 37px;
    }

    #secondImg {
        top: 37px;
    }
}

@media screen and (min-width: 640px) {
    #firstImg {
        top: 60px;
    }

    #secondImg {
        top: 55px;
    }
}

@media screen and (min-width: 768px) {
    #firstImg {
        top: 70px;
    }

    #secondImg {
        top: 65px;
    }
}

@media screen and (min-width: 1024px) {
    #firstImg {
        top: 90px;
    }

    #secondImg {
        top: 90px;
    }
}

@media screen and (min-width: 1300px) {
    #firstImg {
        top: 120px;
    }

    #secondImg {
        top: 120px;
    }
}

@media screen and (min-width: 1500px) {
    #firstImg {
        top: 140px;
    }

    #secondImg {
        top: 120px;
    }
}
</style>