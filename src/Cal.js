export const Cal = (data) => {
    //safe eval
    try { // eslint-disable-next-line
      return( new Function ( 'return ( ' + data +' ) ' )) (); 
    }
    catch(error) {
      return '';
    }
  }



 