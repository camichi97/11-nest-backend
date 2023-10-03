import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema() //el esquema
export class User {

    _id?: string;

    @Prop({required: true})
    name: string;

    @Prop({unique: true, required: true})
    email: string;

    @Prop({minlength: 6})
    password?: string;

    @Prop({default: true})
    isActive: boolean;

    @Prop({type: [String], default: ['user']})
    roles: string[];
}

export const UserSchema = SchemaFactory.createForClass(User); //para que la base de datos pueda recibir el esquema