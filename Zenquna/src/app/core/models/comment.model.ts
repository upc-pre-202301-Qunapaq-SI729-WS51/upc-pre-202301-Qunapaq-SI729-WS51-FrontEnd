import { Donor } from './donor.model';
import { Post } from './post.model';

export interface Comment {
  id: number;
  donor: Donor;
  post: Post;
  content: string;
  date: string;
}
