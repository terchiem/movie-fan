import React, { useEffect, useState } from 'react';
import { getTopVotes } from '../../utils/apiHelper';
import './TopVotes.css';

import TopVotesItem from '../TopVotesItem/TopVotesItem';

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
        {upVotes.map(m => <TopVotesItem key={m._id} movie={m} />)}
      </ul>

      <h3>Most Downvoted Movies</h3>
      <ul>
        {downVotes.map(m => <TopVotesItem key={m._id} movie={m} />)}
      </ul>
    </div>
  )
}

export default TopVotes;