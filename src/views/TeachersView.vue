<template>
  <div class="px-5">
    <nav class="flex justify-between px-5">
      <h1 class="font-extrabold py-4 text-2xl text-[#303972]">O'qituvchilar</h1>

      <div class="flex items-center gap-8 py-4 text-[#A098AE]">
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
            <h3 class="text-[#303972] font-medium">Ochilov . M</h3>
            <p>Admin</p>
          </div>
          <div class="bg-[#C1BBEB] p-6 rounded-full ml-2"></div>
        </div>
      </div>
    </nav>

    <div class="flex justify-between px-5">
      <form>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            class="block w-full p-2 pl-10 text-sm focus:outline-none border border-gray-300 rounded-full bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Izlash"
            required
          />
        </div>
      </form>
      <button
        @click="Toggle"
        class="bg-[#4D44B5] pt-1 pb-2 px-20 text-white font-extrabold text-2xl cursor-pointer rounded-full"
      >
        +
      </button>
    </div>

    <div class="flex flex-wrap mt-5 text-[#A098AE]">
      <div
        class="mx-auto flex flex-col border bg-white justify-center w-[17rem] m-5 leading-[4rem] shadow-md py-10"
        v-for="i in list"
        :key="i.id"
      >
        <div class="flex mx-auto pl-5">
          <img
            class="w-32 h-32 border bg-[#C1BBEB] rounded-full"
            src="https://img.freepik.com/premium-vector/young-black-man-face-with-beard-male-portrait-avatar-flat-style-front-view_497399-251.jpg?w=2000"
            alt="img"
          />
          <i class="bx bx-dots-horizontal-rounded cursor-pointer text-2xl"></i>
        </div>
        <div class="text-center">
          <h1 class="text-xl font-medium text-[#303972]">
            <span>{{ i.name }}</span> <span>{{ i.surname }}</span>
          </h1>
          <p>{{ i.subject }}</p>
        </div>
        <div class="mx-auto text-2xl text-white">
          <i class="bx bxs-phone p-3 cursor-pointer mr-5 bg-blue-500 rounded-full"></i>
          <i class="bx bx-envelope p-3 cursor-pointer bg-blue-500 rounded-full"></i>
        </div>
      </div>
    </div>

    <div class="float-right py-5 mb-20 items-center pr-5">
      <div>
        <ul class="inline-flex items-center -space-x-px text-[#A098AE]">
          <li>
            <p><i class="bx bxs-left-arrow cursor-pointer"></i></p>
          </li>
          <li>
            <p
              :class="{ 'bg-blue-700 text-white': pgnumber == 1 }"
              class="py-1 px-3 border-2 border-[#A098AE] cursor-pointer rounded-full mx-2"
              @click="Page(1)"
            >
              1
            </p>
          </li>
          <li>
            <p
              :class="{ 'bg-blue-700 text-white': pgnumber == 2 }"
              class="py-1 px-3 border-2 border-[#A098AE] cursor-pointer rounded-full mx-2"
              @click="Page(2)"
            >
              2
            </p>
          </li>
          <li>
            <p
              :class="{ 'bg-blue-700 text-white': pgnumber == 3 }"
              class="py-1 px-3 border-2 border-[#A098AE] cursor-pointer rounded-full mx-2"
              @click="Page(3)"
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
    <div
      tabindex="-1"
      aria-hidden="true"
      :class="{ hidden: modalToggle }"
      class="flex justify-center items-center bg-[#80808066] absolute z-50 w-full my-auto mx-auto md:inset-0 min-h-full"
    >
      <div class="relative w-full max-w-5xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-start bg-[#4D44B5] justify-between p-3 border-b rounded-t-lg dark:border-gray-600"
          >
            <h3 class="text-xl font-semibold px-5 text-white">O'quvchi ma'lumotlari</h3>
            <button class="text-3xl text-white">
              <i @click="Toggle" class="bx bx-x font-extrabold"></i>
            </button>
          </div>
          <!-- Modal body -->.
          <form @submit.prevent>
            <div class="flex px-5">
              <div class="w-full flex flex-wrap px-10">
                <div class="w-1/2">
                  <label class="text-[#303972] text-lg font-medium" for="name">Ism *</label><br />
                  <input
                    class="border-2 rounded-md p-2 w-[90%] my-5 border-gray-300"
                    id="name"
                    type="text"
                    placeholder="Jahon"
                    v-model="add.name"
                    required
                  />
                </div>
                <div class="w-1/2">
                  <label class="text-[#303972] text-lg font-medium" for="surname">Sharifi *</label
                  ><br />
                  <input
                    class="border-2 rounded-md p-2 w-[90%] my-5 border-gray-300"
                    id="surname"
                    type="text"
                    placeholder="Jalilov"
                    v-model="add.surname"
                    required
                  />
                </div>
                <div class="w-1/2">
                  <label class="text-[#303972] text-lg font-medium" for="login">Login *</label
                  ><br />
                  <input
                    class="border-2 rounded-md p-2 w-[90%] my-5 border-gray-300"
                    id="login"
                    type="text"
                    placeholder="username"
                    v-model="add.login"
                    required
                  />
                </div>
                <div class="w-1/2">
                  <label class="text-[#303972] text-lg font-medium" for="password">Parol *</label
                  ><br />
                  <input
                    class="border-2 rounded-md p-2 w-[90%] my-5 border-gray-300"
                    id="password"
                    type="text"
                    placeholder="***************"
                    v-model="add.password"
                    required
                  />
                </div>
                <div class="w-1/2">
                  <label class="text-[#303972] text-lg font-medium" for="login">Ma'lumot *</label
                  ><br />
                  <textarea
                    class="border-2 h-36 rounded-md p-2 w-[90%] my-5 text-xs border-gray-300"
                    id="login"
                    minlength="100"
                    maxlength="2000"
                    cols="10"
                    rows="6"
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    v-model="add.describe"
                  />
                  <p class="float-right pr-12"><span>0</span>/<span>2000</span></p>
                </div>

                <div>
                  <label for="file" class="cursor-pointer w-1/2 text-[#303972] text-lg font-medium"
                    >Rasm *</label
                  ><br /><br />
                  <input
                    type="file"
                    id="file"
                    ref="fileInput"
                    class="hidden"
                    @change="onFileSelected"
                  />
                  <label for="file">
                    <div
                      class="flex justify-center items-center text-center w-36 h-36 border-2 border-dashed"
                    >
                      <img
                        :src="imageUrl"
                        alt=""
                        class="w-36 h-36"
                        :class="{ hidden: !imageUrl }"
                      />
                      <div :class="{ hidden: imageUrl }">
                        <p class="p-2">
                          Faylni tanlash uchun sudrab olib tashlang yoki shu yerni bosing
                        </p>
                      </div>
                    </div>
                  </label>
                </div>
                <div class="w-1/2">
                  <label class="text-[#303972] text-lg font-medium" for="birthday"
                    >Tug'ilgan sana *</label
                  ><br />
                  <input
                    class="border-2 rounded-md p-2 w-[90%] my-5 border-gray-300"
                    id="birthday"
                    type="text"
                    placeholder="24 Februari 1997"
                    v-model="add.birthday"
                    required
                  />
                </div>
                <div class="w-1/2">
                  <label class="text-[#303972] text-lg font-medium" for="subject">Fan nomi *</label
                  ><br />
                  <input
                    class="border-2 rounded-md p-2 w-[90%] my-5 border-gray-300"
                    id="subject"
                    type="text"
                    placeholder="Guruhni tanlang"
                    v-model="add.subject"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="p-5 text-end border-t border-gray-200 dark:border-gray-600">
              <input
                type="submit"
                value="SAQLASH"
                @click="create"
                class="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              />
            </div>
          </form>
          <!-- Modal footer -->
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { useTeacher } from '../stores/teachers'
const store = useTeacher()

const add = reactive({
  id: Date.now(),
  name: '',
  surname: '',
  login: '',
  parol: '',
  describe: '',
  birthday: '',
  subject: ''
})

const create = () => {
  const user = {
    id: Date.now(),
    fullname: add.name + ' ' + add.surname,
    login: add.login,
    parol: add.parol,
    describe: add.describe,
    img: add.image,
    birthday: add.birthday,
    subject: add.subject
  }

  store.news(user)
  Toggle()
  add.name = ''
  add.surname = ''
  add.login = ''
  add.parol = ''
  add.describe = ''
  add.birthday = ''
  add.subject = ''
  imageUrl = ''
}

const modalToggle = ref(true)
const imageFile = ref(null)
const imageUrl = ref(null)

const start = ref(0)
const end = ref(8)
const pgnumber = ref(1)

function Toggle() {
  modalToggle.value = !modalToggle.value
}

const list = computed(() => {
  return store.List.slice(start.value, end.value)
})

function Page(val) {
  pgnumber.value = val
  console.log(val)
  start.value = val * 8 - 8
  end.value = val * 8
}

function onFileSelected(e) {
  imageFile.value = e.target.files[0] // Fayl tanlangan paytda fayl obyekti saqlanadi
  imageUrl.value = URL.createObjectURL(imageFile.value) // Faylni URL-ga aylantirish
}
</script>
  
<style></style>