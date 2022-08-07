import {MovieItem} from './MovieItem.js';

export const MoviesList = ( {movies}) => (
    <section>
        <ul>
            {movies.map(m => <MovieItem title={m.title} />)}
        </ul>
    </section>
);