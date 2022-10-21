import { User } from "./user";
import { Movie } from "./movie";

export type Review = {
    id: number;
    text: string;
    user: User;
    movie: Movie;
};
