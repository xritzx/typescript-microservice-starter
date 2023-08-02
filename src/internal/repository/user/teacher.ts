import { User } from "../../../domains/user/user";

export class TeacherRepository implements User.TeacherRepository{
    async getTeachersBySubjectId(subjectId: string): Promise<User.Teacher[]> {
        return [] as User.Teacher[];
    }
    async getById(id: number): Promise<User.Teacher> {
       const Teacher = {
            id: 1,
            name: "John Doe",
            email: "jodn@gmail.com",
            address: "Bangalore",
            phone: "1234567890",
            avatar: "https://www.google.com",
            schoolId: 'kiksa9s9j13',
            subjects: [],
            qualification: "B.Tech",
            yearOfExperience: 5,        
       }
       return Teacher as User.Teacher;
    }
    async getByEmail(email: string): Promise<User.User> {
        const Teacher = {
            id: 1,
            name: "John Doe",
            email: "jodn@gmail.com",
            address: "Bangalore",
            phone: "1234567890",
            avatar: "https://www.google.com",
            schoolId: 'kiksa9s9j13',
            subjects: [],
            qualification: "B.Tech",
            yearOfExperience: 5,        
       }
       return Teacher as User.Teacher;
    }

}