import "./sideContainer.css";
import { Category } from "../../features/category/Category";


export const SideContainer = () => {

    return (
        <div className= 'sideContainer'>
                <h3>Subreddits</h3>
            <Category />
      </div>
    );


};