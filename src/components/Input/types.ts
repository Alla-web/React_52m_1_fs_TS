export interface InputProps {
    id?: string,
    name: string,
    type?: 'text' | 'email' | 'password' | 'telefon' | 'url' | 'number',
    placeholder?: string,
    label?: string
}