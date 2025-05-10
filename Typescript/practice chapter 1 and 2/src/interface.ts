{
    // Interface (An interface in TypeScript is a way to define the structure of an object. It specifies what properties an object should have and what types those properties are)

    // Basic Example
    interface IUser {
        id: string;
        name: string,
        contact: string,
    }

    const user1: IUser = {
        id: "552",
        name: "Mr. Bean",
        contact: "2738604",
    }

    // Extends Interface
    interface IUserRole extends IUser {
        role: string,
    }

    const user2: IUserRole = {
        id: "552",
        name: "Mr. Bean",
        contact: "2738604",
        role: "admin",
        merit: 1,
    }

    // Interface Merging
    interface IUserRole {
        merit: number,
    } 
}