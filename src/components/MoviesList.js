import {MovieItem} from './MovieItem.js';

export const MoviesList = ( {movies}) => (
    <section>
        <ul>
            {movies.map(m => <MovieItem id={m.id} title={m.title}/>)}
        </ul>
    </section>
);