export type StudentIT = {
    student_id: string;
    user: string; // One-to-One relationship with User model
    date_of_birth: Date;
    phone_number: string;
    address: string;
    parent: string; // Foreign Key relationship with Parent model
    school: string; // Many-to-One relationship with School model
  }