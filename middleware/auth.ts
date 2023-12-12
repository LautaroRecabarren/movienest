import { useRouter } from 'vue-router'

export default function () {
    const router = useRouter()

    if (process.client && !window.localStorage.getItem('auth')) {
        router.push('/')
    }
}