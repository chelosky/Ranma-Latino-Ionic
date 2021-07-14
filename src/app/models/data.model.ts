import { Chapter } from './chapter.model';
import { Movie } from './movie.modal';
import { Ova } from './ova.modal';
export interface Data{
    chapters?: Chapter[];
    movies?: Movie[];
    ovas?: Ova[];
}