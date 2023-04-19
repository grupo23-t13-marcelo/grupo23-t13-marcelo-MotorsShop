import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Ads } from "./ads.entities";


@Entity('gallery')
class Gallery {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    file_name: string

    @ManyToOne((type) => Ads, ad => ad.gallery, {onDelete: "CASCADE"})
    ad: Ads
}

export {Gallery}