import React, { useEffect, useState } from 'react';
import { getTopVotes } from '../../utils/apiHelper';
import './TopVotes.css';

import TopVotesItem from '../TopVotesItem/TopVotesItem';
import LoadSpinner from '../LoadSpinner/LoadSpinner';

function TopVotes() {
  const [upVotes, setUpVotes] = useState([]);
  const [downVotes, setDownVotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTopVotes() {
      const { topUpVotes, topDownVotes } = await getTopVotes();
      setUpVotes(topUpVotes);
      setDownVotes(topDownVotes);
      setLoading(false);
    }
    fetchTopVotes();
  }, []);

  if (loading) return <LoadSpinner />;

  return (
    <div className="TopVotes">
      <div className="TopVotes-group">
        <h3>Most Upvoted Movies</h3>
        <ul>
          {upVotes.map(m => <TopVotesItem key={m._id} movie={m} />)}
        </ul>
      </div>

      <div className="TopVotes-group">
        <h3>Most Downvoted Movies</h3>
        <ul>
          {downVotes.map(m => <TopVotesItem key={m._id} movie={m} />)}
        </ul>
      </div>
    </div>
  )
}

export default TopVotes;