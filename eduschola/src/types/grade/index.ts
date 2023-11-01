export type GradeIT = {
    grade_id: string;
    grade_name: string;
    grade_description: string;
    staff: string; // Many-to-One relationship with Staff model (Teacher)
    student: string; // Many-to-One relationship with Student model
    course: string; // Many-to-One relationship with Course model
  }