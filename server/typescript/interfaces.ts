export interface IUser {
    _id?: any;
    firstName?: string;
    lastName?: string;
    username?: string;
    email?: string;
    password?: string;
    avatar?: string;
    loggedIn?: boolean;
    lastLogin?: number;
    save: (data: any) => {};
}
