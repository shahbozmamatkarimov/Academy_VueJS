<template>
  <div class="px-5">
    <nav class="flex justify-between">
      <h1 class="font-extrabold py-4 text-2xl text-[#303972]">Students</h1>

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
            <h3 class="text-[#303972] font-bold">Ochilov . M</h3>
            <p>Admin</p>
          </div>
          <div class="bg-[#C1BBEB] p-6 rounded-full ml-2"></div>
        </div>
      </div>
    </nav>
    <div class="flex justify-between">
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
    <table class="min-w-full mt-12">
      <thead class="bg-[#F9FAFB] border-b text-[#8A92A6]">
        <tr>
          <th scope="col" class="text-sm font-medium pl-6 py-4 text-left">
            <div class="flex items-center mr-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" y="0.5" width="19" height="19" rx="5.5" fill="#F5F7FF" />
                <path
                  d="M14.6673 6.5L8.25065 12.9167L5.33398 10"
                  stroke="#000AFF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <rect x="0.5" y="0.5" width="19" height="19" rx="5.5" stroke="#000AFF" />
              </svg>
            </div>
          </th>
          <th scope="col" class="text-sm font-medium py-4 text-left">
            I . O . F <i class="bx bx-down-arrow-alt ml-5"></i>
          </th>
          <th scope="col" class="text-sm font-medium py-4 text-left">
            Guruh raqami <i class="bx bx-down-arrow-alt ml-5"></i>
          </th>
          <th scope="col" class="text-sm font-medium py-4 text-left">
            Bosqich <i class="bx bx-down-arrow-alt ml-5"></i>
          </th>
          <th scope="col" class="text-sm font-medium py-4 text-left">
            qo'shilgan sana <i class="bx bx-down-arrow-alt ml-5"></i>
          </th>
          <th scope="col" class="text-sm font-medium py-4 text-left">
            ID raqami <i class="bx bx-down-arrow-alt ml-5"></i>
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b" v-for="i in list" :key="i">
          <td class="px-6 py-4 whitespace-nowrap rounded-md text-sm font-medium">
            <input type="checkbox" class="w-5 h-5 rounded-md" />
          </td>
          <td class="text-sm font-bold py-6 whitespace-nowrap">
            <div class="flex">
              <img
                class="w-10 h-10 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT72Uz03ApvOW6KNnQNCTlahJaeRH1ZaHaT-B5FldV9_i4mCwYmjHLQdQBci1_r35ohEps&usqp=CAU"
                alt="img"
              />
              <div class="ml-2">
                <h1 class="font-bold">{{ i.name }} {{ i.surname }}</h1>
                <p class="text-[#667085] font-semibold">{{ i.email }}</p>
              </div>
            </div>
          </td>
          <td class="text-sm font-bold py-6 whitespace-nowrap">{{ i.group }}</td>
          <td class="text-sm font-bold py-6 whitespace-nowrap">Freelance</td>
          <td class="text-sm font-bold py-6 whitespace-nowrap">{{ i.createdAt }}</td>
          <td class="text-sm font-bold py-6 whitespace-nowrap">{{ i.idnumber }}</td>
          <td class="text-sm text-gray-400 py-4 whitespace-nowrap">
            <i @click="deleteToggle(i.id)" class="bx bx-trash text-xl cursor-pointer"></i>
            <i @click="editToggle(i.id)" class="bx bx-pencil cursor-pointer text-xl pl-5"></i>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="bg-white border-b py-6 flex items-center justify-between px-9">
      <button class="text-sm font-bold border-2 p-2 rounded-lg" @click="PageDown()">avvalgisi</button>
      <p class="text-sm font-semibold">sahifa {{ start+1 }} dan {{ end }}</p >
      <button class="text-sm font-bold border-2 p-2 rounded-lg float-right" @click="PageUp()">keyingisi</button>
    </div>

    <div
      id="defaultModal"
      tabindex="-1"
      aria-hidden="true"
      :class="{ hidden: modalToggle }"
      class="flex justify-center items-center bg-[#808080ac] absolute z-50 w-full my-auto mx-auto md:inset-0 min-h-full"
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
          <form @submit.prevent="create">
            <div class="flex p-5">
              <div>
                <label for="file" class="cursor-pointer text-[#303972] text-lg font-bold"
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
                    class="flex justify-center items-center text-center w-52 h-52 border-2 border-dashed"
                  >
                    <img :src="imageUrl" alt="" class="w-52 h-52" :class="{ hidden: !imageUrl }" />
                    <div :class="{ hidden: imageUrl }">
                      <p class="p-2">
                        Faylni tanlash uchun sudrab olib tashlang yoki shu yerni bosing
                      </p>
                    </div>
                  </div>
                </label>
              </div>
              <div class="w-full flex flex-wrap px-10">
                <div class="w-1/2">
                  <label class="text-[#303972] text-lg font-bold" for="name">Ism *</label><br />
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
                  <label class="text-[#303972] text-lg font-bold" for="surname">Sharif *</label
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
                  <label class="text-[#303972] text-lg font-bold" for="birthday"
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
                  <label class="text-[#303972] text-lg font-bold" for="group"
                    >Guruhini tanlang *</label
                  ><br />
                  <input
                    class="border-2 rounded-md p-2 w-[90%] my-5 border-gray-300"
                    id="group"
                    type="text"
                    placeholder="Guruhni tanlang"
                    v-model="add.group"
                    required
                  />
                </div>
                <div class="w-1/2">
                  <label class="text-[#303972] text-lg font-bold" for="login">Login *</label><br />
                  <input
                    class="border-2 rounded-md p-2 w-[90%] my-5 border-gray-300"
                    id="login"
                    type="text"
                    placeholder="login"
                    v-model="add.login"
                    required
                  />
                </div>
                <div class="w-1/2">
                  <label class="text-[#303972] text-lg font-bold" for="password">Parol *</label
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
              </div>
            </div>
            <div class="p-5 text-end border-t border-gray-200 dark:border-gray-600">
              <input
                type="submit"
                value="QO'SHISH"
                class="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              />
            </div>
          </form>
          <!-- Modal footer -->
        </div>
      </div>
    </div>

    <div
      tabindex="-1"
      aria-hidden="true"
      :class="{ hidden: modalEdit }"
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
              <i @click="editToggle" class="bx bx-x font-extrabold"></i>
            </button>
          </div>
          <!-- Modal body -->.
          <form @submit.prevent>
            <div class="flex p-5">
              <div>
                <label for="file" class="cursor-pointer text-[#303972] text-lg font-bold"
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
                    class="flex justify-center items-center text-center w-52 h-52 border-2 border-dashed"
                  >
                    <img :src="imageUrl" alt="" class="w-52 h-52" :class="{ hidden: !imageUrl }" />
                    <div :class="{ hidden: imageUrl }">
                      <p class="p-2">
                        Faylni tanlash uchun sudrab olib tashlang yoki shu yerni bosing
                      </p>
                    </div>
                  </div>
                </label>
              </div>
              <div class="w-full flex flex-wrap px-10">
                <div class="w-1/2">
                  <label class="text-[#303972] text-lg font-bold" for="name">Ism *</label><br />
                  <input
                    class="border-2 rounded-md p-2 w-[90%] my-5 border-gray-300"
                    id="name"
                    type="text"
                    v-model="add.name"
                    placeholder="Jahon"
                  />
                </div>
                <div class="w-1/2">
                  <label class="text-[#303972] text-lg font-bold" for="surname">Sharif *</label
                  ><br />
                  <input
                    class="border-2 rounded-md p-2 w-[90%] my-5 border-gray-300"
                    id="surname"
                    type="text"
                    v-model="add.surname"
                    placeholder="Jalilov"
                  />
                </div>
                <div class="w-1/2">
                  <label class="text-[#303972] text-lg font-bold" for="birthday"
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
                  <label class="text-[#303972] text-lg font-bold" for="group"
                    >Guruhini tanlang *</label
                  ><br />
                  <input
                    class="border-2 rounded-md p-2 w-[90%] my-5 border-gray-300"
                    id="group"
                    type="text"
                    placeholder="Guruhni tanlang"
                    v-model="add.group"
                    required
                  />
                </div>
                <div class="w-1/2">
                  <label class="text-[#303972] text-lg font-bold" for="login">Login *</label><br />
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
                  <label class="text-[#303972] text-lg font-bold" for="password">Parol *</label
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
              </div>
            </div>
            <div class="p-5 text-end border-t border-gray-200 dark:border-gray-600">
              <input
                type="submit"
                value="SAQLASH"
                @click="editStudent"
                class="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              />
            </div>
          </form>
          <!-- Modal footer -->
        </div>
      </div>
    </div>

    <div
      tabindex="-1"
      aria-hidden="true"
      :class="{ hidden: modalDelete }"
      class="flex justify-center items-center bg-[#80808066] absolute z-50 w-full my-auto mx-auto md:inset-0 min-h-full"
    >
      <div class="relative w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button class="text-3xl text-gray-500 float-right p-2">
            <i @click="deleteToggle" class="bx bx-x font-extrabold"></i>
          </button>
          <div class="p-6 text-center">
            <svg
              aria-hidden="true"
              class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Haqiqatan ham bu o'quvchini o'chirib tashlamoqchimisiz?
            </h3>
            <button
              data-modal-hide="popup-modal"
              type="button"
              @click="removeStudent"
              class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-16"
            >
              Ha
            </button>
            <button
              data-modal-hide="popup-modal"
              type="button"
              @click="deleteToggle"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Yo'q
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { useStudent } from '../stores/students'

const start = ref(0)
const end = ref(5)

const store = useStudent()
const list = computed(() => {
  return store.List.slice(start.value, end.value)
})

function PageUp(){
  if (end.value > store.lengthList){
    return
  }
  start.value += 5
  end.value += 5
}

function PageDown(){
  if (start.value == 0){
    return
  }
  start.value -= 5
  end.value -= 5
}

const modalToggle = ref(true)
const modalEdit = ref(true)
const modalDelete = ref(true)
const imageFile = ref(null)
const imageUrl = ref(null)

const add = reactive({
  id: list.length,
  name: '',
  surname: '',
  stage: 'Freelance',
  createdAt: Date(),
  idnumber: '1234',
  email: 'email@gmail.com',
  birthday: '',
  group: '',
  login: '',
  password: '',
  image: ''
})

const create = () => {
  const user = {
    id: Date.now(),
    name: add.name,
    surname: add.surname,
    group: add.group,
    stage: 'Freelance',
    createdAt: Date.now(),
    email: add.name + add.surname + '@gmail.com',
    image: imageUrl,
    login: add.login,
    password: add.password,
    birthday: add.birthday
  }

  store.news(user)
  add.name = ''
  add.surname = ''
  add.birthday = ''
  add.group = ''
  add.login = ''
  add.password = ''
  imageUrl = ''
  Toggle()
}

const editStudent = () => {
  const user = {
    id: Date.now(),
    name: add.name,
    surname: add.surname,
    group: add.group,
    stage: 'Freelance',
    createdAt: Date.now(),
    email: add.name + add.surname + '@gmail.com',
    image: imageUrl,
    login: add.login,
    idnumber: add.password,
    birthday: add.birthday
  }

  let id = localStorage.getItem('editId')
  store.edit(id, user)
  editToggle()
  add.name = ''
  add.surname = ''
  add.birthday = ''
  add.group = ''
  add.login = ''
  add.password = ''
  imageUrl = ''
  console.log('hello')
}

const removeStudent = () => {
  let id = localStorage.getItem('id')
  store.remove(id)
  deleteToggle()
}

function Toggle() {
  modalToggle.value = !modalToggle.value
}

function editToggle(id) {
  if (id) {
    localStorage.setItem('editId', id)
    for (let i in list.value) {
      if (id == list.value[i].id) {
        this.add.name = list.value[i].name
        this.add.surname = list.value[i].surname
        this.add.birthday = list.value[i].birthday
        this.add.group = list.value[i].group
        this.add.login = list.value[i].login
        this.add.password = list.value[i].idnumber
        break
      }
    }
  }
  modalEdit.value = !modalEdit.value
}

function deleteToggle(val) {
  if (val) {
    localStorage.setItem('id', val)
  }
  modalDelete.value = !modalDelete.value
}

function onFileSelected(e) {
  imageFile.value = e.target.files[0] // Fayl tanlangan paytda fayl obyekti saqlanadi
  imageUrl.value = URL.createObjectURL(imageFile.value) // Faylni URL-ga aylantirish
}
</script>

<style>
</style>