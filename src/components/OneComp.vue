<template>
    <div class="flex items-center px-6 py-4 space-x-8 border-b-2 border-gray-200 relative">
        <img src="\src\photos\ableton-hallmark.ef5355379032.svg" alt="">
        <ul class="hidden lg:flex items-center space-x-6">
            <li class="font-medium"><a href="">Live</a></li>
            <li class="font-medium"><a href="">Push</a></li>
            <li class="font-medium"><a href="">Note</a></li>
            <li class="font-medium"><a href="">Link</a></li>
            <li class="font-medium"><a href="">Shop</a></li>
            <li class="font-medium"><a href="">Packs</a></li>
            <li class="font-medium"><a href="">Help</a></li>
            <li class="text-[#ff764d]"><a href="">More+</a></li>
        </ul>
        <button @click="toggleClass" class="text-xl lg:hidden font-bold">Menu</button>
    </div>

    <ul class="flex items-center px-6 py-4 space-x-4">
        <li class="text-sm font-medium text-[#ff764d]">About</li>
        <li class="text-sm font-medium">Jobs</li>
        <li class="text-sm font-medium">Apprenticeships</li>
    </ul>
    <div :class="{ 'trans': isClass }"
        class="z-20 absolute top-14 left-0 bg-blue-800 text-white w-full px-6 translate-y-[-130%] transition-transform duration-300 ease-in-out lg:hidden">
        <ul class="text-xl w-full font-bold list-none space-y-6">
            <li><a href="">Live</a></li>
            <li><a href="">Push</a></li>
            <li><a href="">Note</a></li>
            <li><a href="">Link</a></li>
            <li><a href="">Shop</a></li>
            <li><a href="">Packs</a></li>
            <li><a href="">Help</a></li>
            <li><a href="">Try Live for Free</a></li>
            <li class="text-sm"><a href="">Log in or register</a></li>
        </ul>
        <section class="py-4">
            <h3 class="text-xl font-bold mb-2">More on Ableton.com:</h3>
            <ul class="text-sm font-semibold list-none w-full space-y-3">
                <li><a href="">Blog</a></li>
                <li><a href="">Ableton for the Classroom</a></li>
                <li><a href="">Ableton for the Colleges and University</a></li>
                <li><a href="">Certified Training</a></li>
                <li class="text-[#FF764D]"><a href="">About Abletion</a></li>
                <li><a href="">Jobs</a></li>
                <li><a href="">Apprenticeships</a></li>
            </ul>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isClass: false
        }
    },
    methods: {
        toggleClass() {
            this.isClass = !this.isClass
        }
    }
}
</script>


<style scoped>
* {
    font-family: futura-pt, Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.trans {
    transform: translateY(0) !important;
}
</style>