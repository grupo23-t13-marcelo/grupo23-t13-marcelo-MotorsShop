import { hashSync } from "bcryptjs";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

enum UserType{
    Anunciante = 'anunciante',
    Comprador = 'comprador',
}

@Entity("users")
class User{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({unique: true})
    email: string;

    @Column({unique: true, length: 11})
    cpf: string;

    @Column()
    cell_phone: string;

    @Column({type: 'date'})
    birthdate: Date;

    @Column({type: 'text', length: 400})
    description: string;

    @Column({select: false})
    password: string;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        this.password = hashSync(this.password, 10);
    }

    @Column({type: "enum", enum: UserType})
    type: UserType;

    @Column({nullable: true})
    profile_picture: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;

    @Column({type: 'boolean', default: true})
    is_active: boolean;

}

export {User}