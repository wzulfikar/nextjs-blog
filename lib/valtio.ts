import { proxy, useSnapshot } from 'valtio'

const greetings = [
    "Hello!",
    "Bonjour!",
    "Salut!",
    "Hola!",
    "Nǐ hǎo!",
    "Ciao!",
]

const defaultGreeting = greetings[0]

export const state = proxy({ greeting: defaultGreeting })

export const useGreeting = () => {
    const snap = useSnapshot(state)
    return {
        shuffle: () => {
            const randomInt = Math.floor(Math.random() * greetings.length)
            state.greeting = greetings[randomInt]
        },
        greeting: snap.greeting
    }
}