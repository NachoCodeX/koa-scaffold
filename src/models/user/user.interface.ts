import { Document } from 'mongoose'

export interface IUserModel {
    avatar?: string,
    email: string,
    password: string,
    firstname: string,
    lastname: string,
    gender: string,
    isActive?: boolean,
}

export interface IUserDocument extends Document, IUserModel {
    comparePassword: (password: string) => boolean,
    fullname?: string
}