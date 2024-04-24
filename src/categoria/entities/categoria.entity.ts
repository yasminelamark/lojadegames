import { IsNotEmpty } from "class-validator";
import { Produto } from "src/produto/entities/produto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "tb_categorias" })
export class Categoria {

    @PrimaryGeneratedColumn() // Chave primárie e Auto_Increment
    id: number;

    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    tipo: string;

    @OneToMany(() => Produto, (produto) => produto.categoria)
    produto: Produto[]



}