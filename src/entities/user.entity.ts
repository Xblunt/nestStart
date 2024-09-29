import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    id_key: string;

    @Column()
    index: number;

    @Column()
    isActive: boolean;

    @Column()
    age: number;

    @Column()
    name: string;
}

