<template>
  <main class="flex">
    <section class="w-[74.5%] p-5 max-h-screen  overflow-y-scroll">
      <Nav>
        <slot>Dashboard</slot>
      </Nav>
      <div>
        <div class="flex mt-5 p-5 bg-white shadow rounded-2xl">
          <div class="flex w-1/4 px-14 py-4 text-[#A098AE]">
            <div>
              <i
                class="bx bx-male-female rounded-full p-3 px-4 bg-[#4D44B5] text-white text-2xl"
              ></i>
            </div>
            <div class="px-5">
              <h1 class="text-xl">O'quvchilar</h1>
              <p class="text-xl font-bold text-[#303972]">932</p>
            </div>
          </div>
          <div class="flex w-1/4 px-14 py-4 text-[#A098AE]">
            <div>
              <i
                class="bx bxs-user-circle rounded-full p-3 px-4 bg-[#FB7D5B] text-white text-2xl"
              ></i>
            </div>
            <div class="px-5">
              <h1 class="text-xl">O'qituvchilar</h1>
              <p class="text-xl font-bold text-[#303972]">754</p>
            </div>
          </div>
          <div class="flex w-1/4 px-14 py-4 text-[#A098AE]">
            <div>
              <i class="bx bxs-group rounded-full p-3 px-4 bg-[#FCC43E] text-white text-2xl"></i>
            </div>
            <div class="px-5">
              <h1 class="text-xl">Guruhlar</h1>
              <p class="text-xl font-bold text-[#303972]">40</p>
            </div>
          </div>
          <div class="flex w-1/4 px-14 py-4 text-[#A098AE]">
            <div>
              <i
                class="bx bxs-book-bookmark rounded-full p-3 px-4 bg-[#303972] text-white text-2xl"
              ></i>
            </div>
            <div class="px-5">
              <h1 class="text-xl">Fanlar</h1>
              <p class="text-xl font-bold text-[#303972]">16</p>
            </div>
          </div>
        </div>
        <div class="px-10 shadow bg-white my-5 rounded-2xl">
          <h1 class="font-bold text-2xl text-[#303972] py-5">O'qituvchilar:</h1>
          <div>
            <div class="flex flex-col overflow-hidden bg-white">
              <div class="overflow-x-auto sm:-mx-6">
                <div class="inline-block min-w-full sm:px-6 lg:px-6">
                  <div class="overflow-hidden">
                    <table class="min-w-full">
                      <tbody>
                        <tr v-for="i in list" :key="i.id">
                          <td class="py-4">
                            <svg
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect width="48" height="48" rx="24" fill="#C1BBEB" />
                            </svg>
                          </td>
                          <td class="text-[#303972] font-bold py-4 whitespace-nowrap">
                            {{ i.fullname }}
                          </td>
                          <td class="text-[#4D44B5] font-bold px-6 py-4 whitespace-nowrap">
                            {{ i.userid }}
                          </td>
                          <td class="text-[#303972] font-bold px-6 py-4 whitespace-nowrap flex">
                            <div>
                              <i
                                class="bx bx-user text-white text-xl rounded-full py-2 px-3 bg-[#FB7D5B]"
                              ></i>
                            </div>
                            <div class="pl-5">
                              <p class="text-[#A098AE] font-medium">Class</p>
                              <p class="font-bold">{{i.class}}</p>
                            </div>
                          </td>
                          <td class="text-[#303972] font-bold px-6 py-4 whitespace-nowrap">
                            {{i.hour}} soat
                          </td>
                          <td class="text-[#303972] font-light px-6 py-4 whitespace-nowrap">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_6_400)">
                                <path
                                  d="M23 19H18.93C18.6648 19 18.4104 18.8946 18.2229 18.7071C18.0354 18.5196 17.93 18.2652 17.93 18V15H6V18C6 18.2652 5.89464 18.5196 5.70711 18.7071C5.51957 18.8946 5.26522 19 5 19H1C0.734784 19 0.48043 18.8946 0.292893 18.7071C0.105357 18.5196 0 18.2652 0 18V8C0 7.20435 0.31607 6.44129 0.87868 5.87868C1.44129 5.31607 2.20435 5 3 5H21C21.7956 5 22.5587 5.31607 23.1213 5.87868C23.6839 6.44129 24 7.20435 24 8V18C24 18.2652 23.8946 18.5196 23.7071 18.7071C23.5196 18.8946 23.2652 19 23 19ZM19.93 17H22V8C22.0015 7.86827 21.9766 7.73757 21.9269 7.61558C21.8771 7.49359 21.8035 7.38276 21.7104 7.28961C21.6172 7.19646 21.5064 7.12285 21.3844 7.07312C21.2624 7.02339 21.1317 6.99853 21 7H3C2.86827 6.99853 2.73757 7.02339 2.61558 7.07312C2.49359 7.12285 2.38276 7.19646 2.28961 7.28961C2.19646 7.38276 2.12285 7.49359 2.07312 7.61558C2.02339 7.73757 1.99853 7.86827 2 8V17H4V14C4 13.7348 4.10536 13.4804 4.29289 13.2929C4.48043 13.1054 4.73478 13 5 13H18.93C19.1952 13 19.4496 13.1054 19.6371 13.2929C19.8246 13.4804 19.93 13.7348 19.93 14V17Z"
                                  fill="#A098AE"
                                />
                                <path
                                  d="M18.9331 7H5.00012C4.73491 7 4.48055 6.89464 4.29302 6.70711C4.10548 6.51957 4.00012 6.26522 4.00012 6V1C4.00012 0.734784 4.10548 0.48043 4.29302 0.292893C4.48055 0.105357 4.73491 0 5.00012 0L18.9331 0C19.1983 0 19.4527 0.105357 19.6402 0.292893C19.8278 0.48043 19.9331 0.734784 19.9331 1V6C19.9331 6.26522 19.8278 6.51957 19.6402 6.70711C19.4527 6.89464 19.1983 7 18.9331 7ZM6.00012 5H17.9331V2H6.00012V5ZM17.0331 24H6.90012C6.13099 24 5.39337 23.6945 4.84951 23.1506C4.30566 22.6068 4.00012 21.8691 4.00012 21.1V14C4.00012 13.7348 4.10548 13.4804 4.29302 13.2929C4.48055 13.1054 4.73491 13 5.00012 13H18.9301C19.1953 13 19.4497 13.1054 19.6372 13.2929C19.8248 13.4804 19.9301 13.7348 19.9301 14V21.1C19.9301 21.8686 19.625 22.6058 19.0818 23.1495C18.5386 23.6933 17.8017 23.9992 17.0331 24ZM6.00012 15V21.1C6.00012 21.3387 6.09494 21.5676 6.26373 21.7364C6.43251 21.9052 6.66143 22 6.90012 22H17.0331C17.2718 22 17.5007 21.9052 17.6695 21.7364C17.8383 21.5676 17.9331 21.3387 17.9331 21.1V15H6.00012ZM20.0001 10H19.0001C18.7349 10 18.4806 9.89464 18.293 9.70711C18.1055 9.51957 18.0001 9.26522 18.0001 9C18.0001 8.73478 18.1055 8.48043 18.293 8.29289C18.4806 8.10536 18.7349 8 19.0001 8H20.0001C20.2653 8 20.5197 8.10536 20.7072 8.29289C20.8948 8.48043 21.0001 8.73478 21.0001 9C21.0001 9.26522 20.8948 9.51957 20.7072 9.70711C20.5197 9.89464 20.2653 10 20.0001 10Z"
                                  fill="#A098AE"
                                />
                                <path
                                  d="M14.9999 18H8.99988C8.73466 18 8.48031 17.8946 8.29277 17.7071C8.10523 17.5196 7.99988 17.2652 7.99988 17C7.99988 16.7348 8.10523 16.4804 8.29277 16.2929C8.48031 16.1054 8.73466 16 8.99988 16H14.9999C15.2651 16 15.5194 16.1054 15.707 16.2929C15.8945 16.4804 15.9999 16.7348 15.9999 17C15.9999 17.2652 15.8945 17.5196 15.707 17.7071C15.5194 17.8946 15.2651 18 14.9999 18ZM11.9999 21H8.99988C8.73466 21 8.48031 20.8946 8.29277 20.7071C8.10523 20.5196 7.99988 20.2652 7.99988 20C7.99988 19.7348 8.10523 19.4804 8.29277 19.2929C8.48031 19.1054 8.73466 19 8.99988 19H11.9999C12.2651 19 12.5194 19.1054 12.707 19.2929C12.8945 19.4804 12.9999 19.7348 12.9999 20C12.9999 20.2652 12.8945 20.5196 12.707 20.7071C12.5194 20.8946 12.2651 21 11.9999 21Z"
                                  fill="#A098AE"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_6_400">
                                  <rect width="24" height="24" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap font-medium">
                            <svg
                              width="24"
                              height="6"
                              viewBox="0 0 24 6"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                fill="#A098AE"
                              />
                            </svg>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="flex justify-between py-5 items-center">
                      <div>
                        <p><span>{{ start+1 }}</span>-<span>{{ end }}</span> dan <span> {{ store.lengthList }}</span> ta</p>
                      </div>
                      <div>
                        <ul class="inline-flex items-center -space-x-px text-[#A098AE]">
                          <li>
                            <p><i class="bx bxs-left-arrow cursor-pointer"></i></p>
                          </li>
                          <li>
                            <p @click="Page(1)"
                              class="py-1 px-3 border-2 border-[#A098AE] cursor-pointer rounded-full mx-2"
                              :class="{'bg-blue-500 text-white': pgnumber==1}"
                            >
                              1
                            </p>
                          </li>
                          <li>
                            <p @click="Page(2)"
                              class="py-1 px-3 border-2 border-[#A098AE] cursor-pointer rounded-full mx-2"
                              :class="{'bg-blue-500 text-white': pgnumber==2}"
                            >
                              2
                            </p>
                          </li>
                          <li>
                            <p @click="Page(3)"
                              class="py-1 px-3 border-2 border-[#A098AE] cursor-pointer rounded-full mx-2"
                              :class="{'bg-blue-700 text-white': pgnumber==3}"
                            >
                              3
                            </p>
                          </li>
                          <li>
                            <p><i class="bx bxs-right-arrow cursor-pointer"></i></p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <aside class="bg-white max-h-screen pr-9 px-8 overflow-y-scroll">
      <div class="flex gap-8 py-10 text-[#A098AE]">
        <div class="flex">
          <div>
            <i class="bx bx-bell cursor-pointer text-2xl"></i>
          </div>
          <span class="p-1 rounded-full h-2 bg-[#4D44B5]"></span>
        </div>
        <div>
          <i class="bx bx-cog cursor-pointer text-2xl"></i>
        </div>
        <div class="flex">
          <div class="text-center">
            <h3 class="text-[#303972] font-bold">Ochilov . M</h3>
            <p>Admin</p>
          </div>
          <div class="bg-[#C1BBEB] p-6 rounded-full ml-2"></div>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-[#4D44B5]">Guruhlar</h1>
        <p class="bg-[#4D44B5] pt-1 pb-2 px-3 cursor-pointer text-white font-extrabold text-2xl rounded-full">+</p>
      </div>
      <div class="flex flex-col justify-between py-10">
        <table class="min-w-full">
          <tbody>
            <tr v-for="i in list2" :key="i.id">
              <td class="whitespace-nowrap text-sm py-1 font-medium">
                <div class="bg-[#C1BBEB] px-4 py-5 rounded-full"></div>
              </td>
              <td class="text-sm py-2 font-light whitespace-nowrap pl-1">
                <p class="text-[#303972] font-bold">{{ i.title }}</p>
                <p class="text-[#A098AE]">{{i.class}}</p>
              </td>
              <td class="text-sm py-1 font-light whitespace-nowrap float-right">
                <i
                  class="bx bx-envelope cursor-pointer text-[#A098AE] py-2 px-3 text-2xl border-2 rounded-full"
                ></i>
              </td>
            </tr>
          </tbody>
        </table>
        <button class="text-[#4D44B5] bg-gray-300 font-bold rounded-full my-2 py-3">Barchasi</button>
      </div>
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-[#4D44B5]">Xabarlar</h1>
      </div>
      <div class="flex flex-col justify-between py-10 text-[#A098AE]">
        <table class="min-w-full">
          <tbody>
            <tr v-for="(i, id) in [1, 2, 3, 4, 5]" :key="id">
              <td class="whitespace-nowrap text-sm py-2 font-medium">
                <div class="bg-[#C1BBEB] py-5 px-5 rounded-full"></div>
              </td>
              <td class="text-sm py-2 font-light whitespace-nowrap pl-2">
                <p class="text-[#303972] font-bold">Salimjon Sheraliyev</p>
                <p class="whitespace-nowrap overflow-hidden text-ellipsis w-40">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, sit!</p>
              </td>
              <td class="text-xs py-2 font-light whitespace-nowrap float-right">
                <p>12:45 PM</p>
              </td>
            </tr>
          </tbody>
        </table>
        <button class="text-[#4D44B5] bg-gray-300 font-bold rounded-full py-4 my-2">Barchasi</button>
      </div>
    </aside>
  </main>
</template>
<script setup>
import { Nav } from '../components'
import { ref, onMounted, computed } from 'vue'
import { useTeacherList } from '../stores/teachersLists'
import { useGroup } from '../stores/groups'

const start = ref(0)
const end = ref(5)
const pgnumber = ref(1)

const store = useTeacherList()
const store2 = useGroup()

const list = computed(() => {
  return store.List.slice(start.value, end.value)
})

function Page(val){
  // if (end.value > store.lengthList){
  //   return
  // }
  // if (start.value < 0){
  //   return
  // }
  pgnumber.value = val
  start.value = val*5-5
  end.value = val*5
}

const list2 = computed(() => {
  return store2.List
})
</script>
<style></style>