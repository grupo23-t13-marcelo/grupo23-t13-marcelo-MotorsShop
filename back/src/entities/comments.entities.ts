import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Ads } from "./ads.entities";
import { User } from "./users.entities";

@Entity("comments")
class Comments {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @ManyToOne(() => Ads, (ad) => ad.comments)
    ad: Ads

    @ManyToOne(() => User, (user) => user.comments)
    user: User

    @CreateDateColumn({ type: 'date' })
    createdAt: Date

    @Column({ type: 'varchar', length: '400' })
    content: string
}

export { Comments }