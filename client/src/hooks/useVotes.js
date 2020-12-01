import { useState, useCallback } from 'react';
import { getMovieVotes, createMovieVotes, upVote, downVote } from '../utils/apiHelper';

/**
 * This custom hook is used to keep track of a movie's upvotes and downvotes
 */

export default function useVotes() {
  const [upVotes, setUpVotes] = useState(0);
  const [downVotes, setDownVotes] = useState(0);

  /**
   * Fetches the votes for a given movie and initializes vote state.
   * Also creates the movie in the database if it doesn't exist.
   *
   * @param {Object} movie - Fetched movie object from OMDB
   */

  const fetchVotes = useCallback(async (movie) => {
    try {
      const result = await getMovieVotes(movie.id);
      setUpVotes(result.upVote);
      setDownVotes(result.downVote);
    } catch (e) {
      // Movie does not exist
      await createVotes(movie);
    }
  }, []);

  /**
   * Creates the entry for a movie in the database.
   *
   * @param {String} id
   * @param {String} title
   */

  const createVotes = async ({ id, title }) => {
    await createMovieVotes(id, title);
    setUpVotes(0);
    setDownVotes(0);
  };

  const addUpVote = async (id) => {
    await upVote(id);
    setUpVotes(prevVote => prevVote + 1);
  }

  const addDownVote = async (id) => {
    await downVote(id);
    setDownVotes(prevVote => prevVote + 1);
  }

  return {
    upVotes,
    downVotes,
    fetchVotes,
    addUpVote,
    addDownVote
  };
}