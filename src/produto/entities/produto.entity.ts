import { IsNotEmpty, IsNumber } from "class-validator"
import { Categoria } from "src/categoria/entities/categoria.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"


@Entity({name: "tb_produtos"})
export class Produto {

    @PrimaryGeneratedColumn()    
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    nome: string

    @Column()
    foto: string

    @IsNumber({maxDecimalPlaces: 2})
    @IsNotEmpty()
    @Column({ type: "decimal", precision: 10, scale: 2 })  
    preco: number
    
    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria

}