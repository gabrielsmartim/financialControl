import { Category } from "../types/Category";

export const categories: Category = {
    food: {title: 'Alimentação', color: '#0077FF', expense: true},
    rent: {title: 'Aluguel', color: '#FF4839', expense: true},
    salary: {title: 'Salário', color: '#64B83C', expense: false},
    ligth: {title: 'Luz', color: '#FFBC1C', expense: true},
    water: {title: 'Água', color: '#FFBC1C', expense: true},
    others: {title: 'Outros', color: '#B70CFF', expense: true}
};