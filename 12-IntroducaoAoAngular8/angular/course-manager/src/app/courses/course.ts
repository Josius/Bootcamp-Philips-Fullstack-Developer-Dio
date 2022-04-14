// Se declarar como na aula, como uma variável sem atribuição, ele não funciona; podemos ou atribuir um valor, ou colocar '!' entre o nome da variável e os dois pontos
export class Course {
    id!: number;
    name!: string;
    imageUrl!: string;
    price!: number;
    code!: string;
    duration!: number;
    rating!: number;
    releaseDate!: string;
    description!: string;
}