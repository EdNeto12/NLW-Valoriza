import { Entity, PrimaryColumn, Column, CreateDateColumn,UpdateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { tag } from "./Tag";
import { User } from "./User";



@Entity("compliments")
class Compliment {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_sender: string;

    @JoinColumn({name: "user_sender"})
    @ManyToOne(() => User)
    userSender: User

    @Column()
    user_receiver: string;

    @JoinColumn({name: "user_receiver"})
    @ManyToOne(() => User)
    userReceiver: User

    @Column()
    tag_id: string;

    @JoinColumn({name: "tag_id"})
    @ManyToOne(() => tag)
    tag: tag;

    @Column()
    message: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { Compliment };