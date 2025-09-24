import { useState, useEffect } from 'react'


export default function useLocalStorage(key, initialValue) {
const [state, setState] = useState(() => {
try {
const value = localStorage.getItem(key)
return value ? JSON.parse(value) : initialValue
} catch (err) {
console.error(err)
return initialValue
}
})


useEffect(() => {
try {
localStorage.setItem(key, JSON.stringify(state))
} catch (err) {
console.error(err)
}
}, [key, state])


return [state, setState]
}