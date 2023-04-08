export type UserState = {
    email: string,
    password: number,
    name: string,
    lastName: string,
    age: number,
    country: string,
    city: string,
    street: string
}

export interface FormProps {
    userData: UserState,
    setUserData: (data: UserState) => void
}