export type Comment = {
  id: string | undefined;
  color: string;
  content: string;
};

export type Note = {
  id: string;
  title: string;
  comments: Comment[];
};
