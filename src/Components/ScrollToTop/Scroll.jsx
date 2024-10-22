import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
function Scroll() {
  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 5px 8px'
  };
  return (
    <ScrollToTop
      smooth
      component={<img src="images/arrow.svg" style={{ width: '30px' }} />}
      style={styles}
    />
  );
}

export default Scroll;
