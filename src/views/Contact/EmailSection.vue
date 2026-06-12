<script setup>
import IntroText from '@/components/shared/IntroText.vue';
import PrimaryIconBox from '@/components/shared/PrimaryIconBox.vue';
import { ClockIcon, CommandLineIcon, EnvelopeOpenIcon, LinkIcon, MapPinIcon, ShareIcon, UsersIcon } from '@heroicons/vue/16/solid';
import { reactive } from 'vue';
const form = reactive({
  username: "",
  email: "",
  subject: "",
  message: "",
})
</script>
<template>
  <section class="px-4 sm:px-8 md:px-12 py-24">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[150px] gap-8">
      <div
        class=" px-4 py-8 row-span-3 col-span-1 md:col-span-2 lg:col-span-2 rounded bg-gray-200/80 dark:bg-neutral-800/90">
        <form action="" class="space-y-8">
          <div class=" block md:flex justify-between space-y-8 md:space-y-0 md:space-x-8 ">
            <div class="block md:w-[50%] space-y-1 px-8">
              <label for="username" class="text-xs sm:text-sm uppercase">Your Name</label>
              <input type="text" name="username" placeholder="Jonh Doe" id="username" required v-model="form.username"
                class="block w-full rounded focus:outline-none focus:border-b border-cyan-600 dark:border-cyan-400 py-2 px-3 text-sm md:text-md dark:bg-black/90 placeholder:text-xs tracking-wider">
            </div>
            <div class="block md:w-[50%] space-y-1 px-8">
              <label for="email" class="text-xs sm:text-sm uppercase">Your Email</label>
              <input type="email" name="email" placeholder="jonh@gmail.com" id="email" required v-model="form.email"
                class="block w-full rounded focus:outline-none focus:border-b border-cyan-600 dark:border-cyan-400 py-2 px-3 text-sm md:text-md dark:bg-black/90 placeholder:text-xs tracking-wider">
            </div>
          </div>
          <div class="block space-y-1 px-8">
            <label for="subject" class="text-xs sm:text-sm uppercase">Subject</label>
            <input type="text" name="subject" placeholder="Project..." id="subject" required v-model="form.subject"
              class="block w-full rounded focus:outline-none focus:border-b border-cyan-600 dark:border-cyan-400 py-2 px-3 text-sm md:text-md dark:bg-black/90 placeholder:text-xs tracking-wider">
          </div>
          <div class="block space-y-1 px-8">
            <label for="subject" class="text-xs sm:text-sm uppercase">Your Message</label>
            <textarea name="subject" id="subject" minlength="20"
              placeholder="Tell me about your project goal and timelines" required v-model="form.message"
              class="block w-full h-24 rounded resize-none focus:outline-none focus:border-b border-cyan-600 dark:border-cyan-400 py-2 px-3 text-sm md:text-md dark:bg-black/90 placeholder:text-xs tracking-wider">
            </textarea>
          </div>
          <div class="px-8">
            <button type="submit" class="uppercase text-sm md:text-md lg:text-base border w-fit
                                        px-3 py-2 rounded-sm  font-bold text-black/90 hover:bg-cyan-700
                                        hover:border-cyan-700 hover:text-white transition-colors duration-300 bg-cyan-600 dark:text-white 
                                        dark:bg-cyan-400 border-cyan-600 dark:border-cyan-400
                                        dark:hover:bg-cyan-300 dark:hover:border-cyan-300 dark:hover:text-black"
              @click="() => {
                console.log(form.username)
              }">
              SendMessage
            </button>
          </div>

        </form>
      </div>
      <div
        class=" rounded flex flex-col px-4 py-8 row-span-2 col-span-1 md:col-span-1 lg:col-span-1  bg-gray-200/80 dark:bg-neutral-800/90">
        <IntroText text="Contact Details" class="font-bold pb-3 h-fit" />
        <div class="flex-1 flex flex-col justify-between py-4">
          <div class="block">
            <div class="flex justify-start items-start py-1 space-x-3">
              <PrimaryIconBox :icon="EnvelopeOpenIcon" default-size="w-4 h-4" />
              <div>
                <h1 class="uppercase text-xs font-light tracking-wider text-black dark:text-white">Email</h1>
                <h1 class="text-xs md:text-sm dark:text-white text-black">sokcheachhun317@gmail.com</h1>
              </div>
            </div>
          </div>
          <div class="block">
            <div class="flex justify-start items-start py-1 space-x-3">
              <PrimaryIconBox :icon="MapPinIcon" default-size="w-4 h-4" />
              <div>
                <h1 class="uppercase text-xs font-light tracking-wider text-black dark:text-white">Address</h1>
                <h1 class="text-xs md:text-sm dark:text-white text-black">sokcheachhun317@gmail.com</h1>
              </div>
            </div>
          </div>
          <div class="block">
            <div class="flex justify-start items-start py-1 space-x-3">
              <PrimaryIconBox :icon="ClockIcon" default-size="w-4 h-4" />
              <div>
                <h1 class="uppercase text-xs font-light tracking-wider text-black dark:text-white">Availability</h1>
                <h1 class="text-xs md:text-sm dark:text-white text-black">24/7 Availability. Monday - Sunday</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class=" rounded px-4 py-8 lg:col-span-1 row-span-1 md:row-span-2 lg:row-span-1 bg-gray-200/80 dark:bg-neutral-800/90">
        <IntroText text="Let's Connect" class="font-bold pb-3 h-fit" />
        <div class="flex items-center justify-between space-x-3 pt-4 pe-20 lg:pe-18">
          <PrimaryIconBox :icon="ShareIcon" />
          <PrimaryIconBox :icon="LinkIcon" />
          <PrimaryIconBox :icon="CommandLineIcon" />
          <PrimaryIconBox :icon="UsersIcon" />
        </div>
      </div>
    </div>
  </section>
</template>