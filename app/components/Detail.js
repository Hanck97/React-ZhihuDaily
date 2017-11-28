/*
 * @Author: Hancock 
 * @Date: 2017-11-28 14:58:57 
*/
import React from 'react'

const Detail = ({HTMLContent}) => {
    return(
        <div dangerouslySetInnerHTML={HTMLContent}></div>
    )

}

export default Detail;