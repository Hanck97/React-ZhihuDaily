/*
 * @Author: Hancock 
 * @Date: 2017-11-28 14:33:35 
*/
import React from 'react'


class Header extends React.Component{
      constructor(props,context){
        super(props, context);
      }

      goBack = () =>{
        history.back();
      }

      render(){
          const { title, handleLeftClick, leftContent, type } = this.props;
          return(
              <div className={`header ${type === 'fixed' ? 'fixed-header':''}`}>
                <div className='left-content'
                     onClick={handleLeftClick ? handleLeftClick :this.goBack} 
                    >{leftContent}
                </div>

                <div className='center-content'><span>{title}</span></div>
                <div className='right-content'></div>
             
             
              </div>

          )

      }
}


export default Header;