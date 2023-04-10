import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("ads")
class Ads {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 100})
    brand: string

    @Column({length: 100})
    model: string

    @Column({length: 4})
    year: string

    @Column({length: 100})
    fuel: string

    @Column()
    mileage: number

    @Column({length: 20})
    color: string

    @Column({length: 50})
    fipe_table_price : string

    @Column({length: 50})
    price: string

    @Column()
    description: string

    @Column()
    cover_image: string

    @Column({default: true})
    is_activated : boolean
}


export {Ads}