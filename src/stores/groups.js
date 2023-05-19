import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGroup = defineStore('group', () => {
    const group = ref([])
    group.value = [
        {
            id: 1,
            title: "Engineer",
            class: "Class VII A",
            image: 'https://tovanidesign.com/wp-content/uploads/2019/02/C-_Users_Chrystina_Dropbox_tovani-design_size-examples-of-portraits_for-web_1-1-aspect-ratio-prints-at-square-for-social-media-for-web-photo-by-chrysti-tovani.jpg'
        },
        {
            id: 2,
            title: "Software Engineer",
            class: "Class VII B",
            image: 'https://tovanidesign.com/wp-content/uploads/2019/02/C-_Users_Chrystina_Dropbox_tovani-design_size-examples-of-portraits_for-web_1-1-aspect-ratio-prints-at-square-for-social-media-for-web-photo-by-chrysti-tovani.jpg'
        },
        {
            id: 3,
            title: "Web Developer",
            class: "Class VII A",
            image: 'https://tovanidesign.com/wp-content/uploads/2019/02/C-_Users_Chrystina_Dropbox_tovani-design_size-examples-of-portraits_for-web_1-1-aspect-ratio-prints-at-square-for-social-media-for-web-photo-by-chrysti-tovani.jpg'
        },
        {
            id: 4,
            title: "IOS",
            class: "Class VII C",
            image: 'https://tovanidesign.com/wp-content/uploads/2019/02/C-_Users_Chrystina_Dropbox_tovani-design_size-examples-of-portraits_for-web_1-1-aspect-ratio-prints-at-square-for-social-media-for-web-photo-by-chrysti-tovani.jpg'
        },
        {
            id: 5,
            title: "Web Application",
            class: "Class VII B",
            image: 'https://tovanidesign.com/wp-content/uploads/2019/02/C-_Users_Chrystina_Dropbox_tovani-design_size-examples-of-portraits_for-web_1-1-aspect-ratio-prints-at-square-for-social-media-for-web-photo-by-chrysti-tovani.jpg'
        },
    ]

    const news = (create) => {
        group.value.push(create);
    }

    const List = computed(() => group.value)


    return { List, news }
})