import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTeacher = defineStore('teacher', () => {
  const teacher = ref([])
  teacher.value = [
    {
      id: 1,
      name: "Asilbek",
      surname: "Abudullayev",
      login: "aslibek123",
      parol: "aslibek123",
      describe: "Hello world Hello world Hello world Hello world Hello world v Hello world v Hello worldv Hello worldvHello world",
      birthday: "12/12/12",
      subject: "Mathematics",
    },
    {
      id: 2,
      name: "Shavkatjon",
      surname: "Salimboyev",
      login: "aslibek123",
      parol: "aslibek123",
      describe: "Hello world Hello world Hello world Hello world Hello world v Hello world v Hello worldv Hello worldvHello world",
      birthday: "12/12/12",
      subject: "Art",
    },
    {
      id: 3,
      name: "Mirzayev",
      surname: "Mirg'ulom",
      login: "aslibek123",
      parol: "aslibek123",
      describe: "Hello world Hello world Hello world Hello world Hello world v Hello world v Hello worldv Hello worldvHello world",
      birthday: "12/12/12",
      subject: "Phisics",
    },
    {
      id: 4,
      name: "Mirzayev",
      surname: "Mirg'ulom",
      login: "aslibek123",
      parol: "aslibek123",
      describe: "Hello world Hello world Hello world Hello world Hello world v Hello world v Hello worldv Hello worldvHello world",
      birthday: "12/12/12",
      subject: "Phisics",
    },
    {
      id: 2,
      name: "Mirzayev",
      surname: "Mirg'ulom",
      login: "aslibek123",
      parol: "aslibek123",
      describe: "Hello world Hello world Hello world Hello world Hello world v Hello world v Hello worldv Hello worldvHello world",
      birthday: "12/12/12",
      subject: "Phisics",
    },
    {
      id: 6,
      name: "Mirzayev",
      surname: "Mirg'ulom",
      login: "aslibek123",
      parol: "aslibek123",
      describe: "Hello world Hello world Hello world Hello world Hello world v Hello world v Hello worldv Hello worldvHello world",
      birthday: "12/12/12",
      subject: "Phisics",
    },
    {
      id: 7,
      name: "Mirzayev",
      surname: "Mirza",
      login: "aslibek123",
      parol: "aslibek123",
      describe: "Hello world Hello world Hello world Hello world Hello world v Hello world v Hello worldv Hello worldvHello world",
      birthday: "12/12/12",
      subject: "Phisics",
    },
    {
      id: 9,
      name: "Akbar",
      surname: "Ali",
      login: "aslibek123",
      parol: "aslibek123",
      describe: "Hello world Hello world Hello world Hello world Hello world v Hello world v Hello worldv Hello worldvHello world",
      birthday: "12/12/12",
      subject: "Phisics",
    },
    {
      id: 1,
      name: "Asilbek",
      surname: "Abudullayev",
      login: "aslibek123",
      parol: "aslibek123",
      describe: "Hello world Hello world Hello world Hello world Hello world v Hello world v Hello worldv Hello worldvHello world",
      birthday: "12/12/12",
      subject: "Mathematics",
    },
    {
      id: 2,
      name: "Abdurahimov",
      surname: "Abdurahim",
      login: "aslibek123",
      parol: "aslibek123",
      describe: "Hello world Hello world Hello world Hello world Hello world v Hello world v Hello worldv Hello worldvHello world",
      birthday: "12/12/12",
      subject: "Art",
    },
    {
      id: 3,
      name: "Halimov",
      surname: "Halim",
      login: "aslibek123",
      parol: "aslibek123",
      describe: "Hello world Hello world Hello world Hello world Hello world v Hello world v Hello worldv Hello worldvHello world",
      birthday: "12/12/12",
      subject: "Phisics",
    },
    {
      id: 4,
      name: "Isimov",
      surname: "Ism",
      login: "aslibek123",
      parol: "aslibek123",
      describe: "Hello world Hello world Hello world Hello world Hello world v Hello world v Hello worldv Hello worldvHello world",
      birthday: "12/12/12",
      subject: "Phisics",
    },
    {
      id: 2,
      name: "Addoshov",
      surname: "Addosh",
      login: "aslibek123",
      parol: "aslibek123",
      describe: "Hello world Hello world Hello world Hello world Hello world v Hello world v Hello worldv Hello worldvHello world",
      birthday: "12/12/12",
      subject: "Phisics",
    },
    {
      id: 6,
      name: "Karimov",
      surname: "Karim",
      login: "aslibek123",
      parol: "aslibek123",
      describe: "Hello world Hello world Hello world Hello world Hello world v Hello world v Hello worldv Hello worldvHello world",
      birthday: "12/12/12",
      subject: "Phisics",
    },
    {
      id: 7,
      name: "Salimov",
      surname: "Salim",
      login: "aslibek123",
      parol: "aslibek123",
      describe: "Hello world Hello world Hello world Hello world Hello world v Hello world v Hello worldv Hello worldvHello world",
      birthday: "12/12/12",
      subject: "Phisics",
    },
    {
      id: 9,
      name: "Alimov",
      surname: "Alima",
      login: "aslibek123",
      parol: "aslibek123",
      describe: "Hello world Hello world Hello world Hello world Hello world v Hello world v Hello worldv Hello worldvHello world",
      birthday: "12/12/12",
      subject: "Phisics",
    },
    {
      id: 1,
      name: "Akbar",
      surname: "Akbarov",
      login: "aslibek123",
      parol: "aslibek123",
      describe: "Hello world Hello world Hello world Hello world Hello world v Hello world v Hello worldv Hello worldvHello world",
      birthday: "12/12/12",
      subject: "Mathematics",
    },
    {
      id: 2,
      name: "Shavkatjon",
      surname: "Salimboyev",
      login: "aslibek123",
      parol: "aslibek123",
      describe: "Hello world Hello world Hello world Hello world Hello world v Hello world v Hello worldv Hello worldvHello world",
      birthday: "12/12/12",
      subject: "Art",
    },
    {
      id: 3,
      name: "G'ulomov",
      surname: "G'ulom",
      login: "aslibek123",
      parol: "aslibek123",
      describe: "Hello world Hello world Hello world Hello world Hello world v Hello world v Hello worldv Hello worldvHello world",
      birthday: "12/12/12",
      subject: "Phisics",
    },
    {
      id: 4,
      name: "Alisherov",
      surname: "Alisher",
      login: "aslibek123",
      parol: "aslibek123",
      describe: "Hello world Hello world Hello world Hello world Hello world v Hello world v Hello worldv Hello worldvHello world",
      birthday: "12/12/12",
      subject: "Phisics",
    }
  ]

  const news = (create) => {
    teacher.value.push(create);
  }

  const remove = (id) => {
    for (let i in teacher.value) {
      if (id == teacher.value[i].id) {
        teacher.value.splice(i, 1);
      }
    }
  }

  const edit = (id, edit) => {
    for (let i in teacher.value) {
      if (id == teacher.value[i].id) {
        teacher.value[i] = edit
      }
    }
  }

  const List = computed(() => teacher.value)

  return { List, news, remove, edit }
})