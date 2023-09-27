import {Post} from '../../features/post/Post' ;
import "./mainContainer.css";
import { useState } from 'react';






export const MainContainer = () => {
    const [hasReachedLimit, setHasReachedLimit] = useState(false);
    return (
        <div className= 'mainContainer'>
          {{hasReachedLimit} ? (
        <div className='limitReachedMessage'>
          You've reached the daily requests! Come back later please.
        </div>
      ) : (
        <Post />
      )}
        </div>
    );


};