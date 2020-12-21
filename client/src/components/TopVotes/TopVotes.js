import React, { useEffect, useState } from 'react';
import { getTopVotes } from '../../utils/apiHelper';
import './TopVotes.css';

function TopVotes() {
  const [upVotes, setUpVotes] = useState([]);
  const [downVotes, setDownVotes] = useState([]);

  useEffect(() => {
    async function fetchTopVotes() {
      const { topUpVotes, topDownVotes } = await getTopVotes();
      setUpVotes(topUpVotes);
      setDownVotes(topDownVotes);
    }
    fetchTopVotes();
  }, []);

  return (
    <div className="TopVotes">
      <h3>Most Upvoted Movies</h3>
      <ul>
        {upVotes.map(m => <li key={m._id}>{m.title} - {m.upVote} / {m.downVote}</li>)}
      </ul>

      <h3>Most Downvoted Movies</h3>
      <ul>
        {downVotes.map(m => <li key={m._id}>{m.title} - {m.upVote} / {m.downVote}</li>)}
      </ul>
    </div>
  )
}

export default TopVotes;