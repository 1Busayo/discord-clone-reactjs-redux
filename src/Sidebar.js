import React from 'react';
import "./Sidebar.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';

function Sidebar() {
    return (
        <div class="sidebar">
           
            <div className="sidebar__top">
                <h3>Samuel Fanimokun</h3>
                <ExpandMoreIcon />
  </div>
  <div className="sidebar__channels">
      <div className="sidebar__channelsHeader">
          <div className="sideabr__header">
              <ExpandMoreIcon />
              <h4>Text Channels</h4>
          </div>

<AddIcon className="sidebar__addChannel" />
          
      </div>
  </div>
        </div>
    )
}

export default Sidebar