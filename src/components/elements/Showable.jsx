import React from 'react'

const Showable = ({error, children}) => {
  if(error){
    return(
      <div>
        {children}
      </div>
    )
  }

  return(
    <div hidden>
      {children}
    </div>
  )

  // Why did this not work
  // return(
  //   <div style={{display: `#{ error ? visible : hidden }` }} >
  //     {children}
  //   </div>
  // )

}

export default Showable