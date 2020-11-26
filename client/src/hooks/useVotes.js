import { useState } from 'react';
import { getMovieVotes, createMovieVotes, upVote, downVote } from '../utils/apiHelper';

export default function useVotes() {
  const [upVotes, setUpVotes] = useState(0);
  const [downVotes, setDownVotes] = useState(0);

  const fetchVotes = async (id) => {
    try {
      const result = await getMovieVotes(id);
      setUpVotes(result.upVote);
      setDownVotes(result.downVote);
    } catch (e) {
      // Add movie votes in mongo db if it does not exist
      await createVotes(id);
    }
  }

  const createVotes = async (id) => {
    const result = await createMovieVotes(id);
    setUpVotes(0);
    setDownVotes(0);
  };

  const addUpVote = async (id) => {
    const result = await upVote(id);
    setUpVotes(prevVote => prevVote + 1);
  }

  const addDownVote = async (id) => {
    const result = await downVote(id);
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