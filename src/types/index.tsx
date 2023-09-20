export type Comment = {
  id: string | undefined;
  color: string;
  content: string;
};

export type Note = {
  id: string | undefined;
  title: string;
  comments: Comment[];
};
