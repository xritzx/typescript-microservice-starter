import { User } from "../../../domains/user/user";

export class StudentRepository implements User.StudentRepository{
    async getStudentsByClass(standard: number, section: string): Promise<User.Student[]> {
        return [] as User.Student[];
    }
    async getById(id: number): Promise<User.Student> {
       const student = {
            id: 1,
            name: "John Doe",
            email: "jodn@gmail.com",
            address: "Bangalore",
            phone: "1234567890",
            avatar: "https://www.google.com",
            standard: 10,
            section: "A",
            rollNumber: 1,
            schoolId: 'kiksa9s9j13'
       }
       return student as User.Student;
    }
    async getByEmail(email: string): Promise<User.User> {
        const student = {
            id: 1,
            name: "John Doe",
            email: "jodn@gmail.com",
            address: "Bangalore",
            phone: "1234567890",
            avatar: "https://www.google.com",
            standard: 10,
            section: "A",
            rollNumber: 1,
            schoolId: 'kiksa9s9j13'
       }
       return student as User.Student;
    }

}