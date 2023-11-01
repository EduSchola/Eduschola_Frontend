export type AnnouncementIT = {
    announcement_id: string;
    title: string;
    content: string;
    date: Date;
    course: string; // Many-to-One relationship with Course model (optional)
    is_school_wide: boolean;
  }