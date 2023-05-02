import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./users.entities";
import { Gallery } from "./gallery.entities";
import { Comments } from "./comments.entities";


@Entity("ads")
class Ads {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 100 })
    brand: string

    @Column({ length: 100 })
    model: string

    @Column({ length: 4 })
    year: string

    @Column({ length: 100 })
    fuel: string

    @Column()
    mileage: number

    @Column({ length: 20 })
    color: string

    @Column({ length: 50 })
    fipe_table_price: string

    @Column({ length: 50 })
    price: string

    @Column()
    description: string

    @Column()
    cover_image: string

    @Column({ default: true })
    is_activated: boolean

    @OneToMany(() => Gallery, gallery => gallery.ad)
    gallery: Gallery[]

    @OneToMany(() => Comments, (comments) => comments.ad)
    comments: Comments[]

    @ManyToOne(() => User, (user) => user.ads)
    @JoinColumn({ name: "user_id" })
    user: User;
}


export { Ads }