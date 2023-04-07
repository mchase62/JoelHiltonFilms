import React from 'react';
import styles from './blah.module.css';

function TopBanner(props: any) {
  return (
    <>
      <div className="col-2">
        <h1>Welcome to Joel Hilton's Film Collection</h1>
        <img src="./JoelHiltonHeadshot.jpg" alt="Joel's Face" />
      </div>
      <div className="row">
        <div className="col align-self-center text">
          <h1 className={styles.h1}>{props.saying}</h1>
        </div>
      </div>
    </>
  );
}

export default TopBanner;

//<div className="col-2">
//<img src="./JoelHiltonHeadshot.jpg" alt="Joel's Face" />
//</div>
