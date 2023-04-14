import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Ads } from "./ads.entities";


@Entity('gallery')
class Gallery {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    file_name: string

    @ManyToOne(() => Ads, ad => ad.gallery)
    ad: Ads
}

export {Gallery}