import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStudent = defineStore('student', () => {
    const student = ref([])
    student.value = [
        {
            id: 1,
            name: "John",
            surname: "Doe",
            group: "223",
            stage: 'Freelance',
            createdAt: '2023-04-05',
            email: 'johndoe@gmail.com',
            login: 'john doe',
            idnumber: '1234',
            birthday: '1989-02-02'
        },
        {
            id: 2,
            name: "John",
            surname: "Doe",
            group: "223",
            stage: 'Freelance',
            createdAt: '2023-04-05',
            email: 'johndoe@gmail.com',
            login: 'john doe',
            idnumber: '1234',
            birthday: '1989-02-02'

        },
        {
            id: 3,
            name: "John",
            surname: "Doe",
            group: "223",
            stage: 'Freelance',
            createdAt: '2023-04-05',
            email: 'johndoe@gmail.com',
            login: 'john doe',
            idnumber: '1234',
            birthday: '1989-02-02'

        },
        {
            id: 4,
            name: "John",
            surname: "Doe",
            group: "223",
            stage: 'Freelance',
            createdAt: '2023-04-05',
            email: 'johndoe@gmail.com',
            login: 'john doe',
            idnumber: '1234',
            birthday: '1989-02-02'

        },
        {
            id: 5,
            name: "John",
            surname: "Doe",
            group: "223",
            stage: 'Freelance',
            createdAt: '2023-04-05',
            email: 'johndoe@gmail.com',
            login: 'john doe',
            idnumber: '1234',
            birthday: '1989-02-02'

        },
        {
            id: 6,
            name: "John",
            surname: "Doe",
            group: "223",
            stage: 'Freelance',
            createdAt: '2023-04-05',
            email: 'johndoe@gmail.com',
            login: 'john doe',
            idnumber: '1234',
            birthday: '1989-02-02'
        },
        {
            id: 7,
            name: "John",
            surname: "Doe",
            group: "223",
            stage: 'Freelance',
            createdAt: '2023-04-05',
            email: 'johndoe@gmail.com',
            login: 'john doe',
            idnumber: '1234',
            birthday: '1989-02-02'
        },
        {
            id: 8,
            name: "John",
            surname: "Doe",
            group: "223",
            stage: 'Freelance',
            createdAt: '2023-04-05',
            email: 'johndoe@gmail.com',
            login: 'john doe',
            idnumber: '1234',
            birthday: '1989-02-02'
        },
    ]

    const news = (create) => {
        student.value.push(create);
    }

    const lengthList = student.value.length

    const remove = (id) => {
        for (let i in student.value) {
            if (id == student.value[i].id) {
                student.value.splice(i, 1);
            }
        }
    }

    const edit = (id, edit) => {
        for (let i in student.value) {
            if (id == student.value[i].id) {
                student.value[i] = edit
            }
        }
    }

    const List = computed(() => student.value)


    return { List, news, remove, edit, lengthList }
})