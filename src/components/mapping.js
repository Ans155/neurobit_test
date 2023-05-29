import React from 'react';
import Button from '@material-ui/core/Button';
const MappingComponent = ({array, c_name, onBackClick, stepperColor}) => {

  array=JSON.parse(array);
  console.log(array[0].primary);
  // const numbers = [0,1, 2, 3, 4, 5, 6, 7 ,8 ,9];
  const linestyle ={
    position: 'relative',
    width: '0px',
    left: '250px',
    top: '0px',
    //height:`${array.length * 52 + 52}px`,
    border: '1px solid #EBEBEB',
    height: `${array.length * 52 + 52}px`,
    //marginTop:'20px',
    //marginBottom:'40px',

  }
  const linestyle2 ={
    position: 'absolute',
    width: '0px',
    left: '550px',
    top: '0px',
    //height:`${array.length * 52 + 52}px`,
    border: '1px solid #EBEBEB',
    height: `${array.length * 52 + 52}px`,
    //marginTop:'20px',
    //marginBottom:'40px',

  }
  const linestyle3 ={
    position: 'absolute',
    width: '0px',
    left: '820px',
    top: '0px',
    //height:`${array.length * 52 + 52}px`,
    border: '1px solid #EBEBEB',
    height: `${array.length * 52 + 52}px`,
    //marginTop:'20px',
    //marginBottom:'40px',

  }
  const componentStyle = {
    position: 'relative',
    width: '1148px',
    left: '350px',
    top: '290px',
    borderRadius: '5px 5px 0px 0px',
    height: `${array.length * 52 + 52}px`,
    background: `#FFFFFF`,
    //marginTop:'20px',
    marginBottom:'40px',
    
    //transition: 'height 0.3s ease-in-out',
  };
    const componentStyle1 = {
        position: 'absolute',
        width: '1148px',
        left: '350px',
        top: '230px',
        height:'50px', 
        background: '#E5F3FF',
        borderRadius: '3px',
        marginBottom:'20px',
      };
     const count = array.length; 
  return (
    <>
    <div>
    <div style={componentStyle1}>
     <span style={{position:'absolute', left:'45px', top:'15px', fontStyle: 'normal',
fontWeight:'500',
fontSize: '14px'}}>
      Channel
     </span>
     <span style={{position:'absolute', left:'320px', top:'15px', fontStyle: 'normal',
fontWeight:'500',
fontSize: '14px'}}>
      Primary Channel
     </span>
     <span style={{position:'absolute', left:'620px', top:'15px', fontStyle: 'normal',
fontWeight:'500',
fontSize: '14px'}}>
      Reference Channel
     </span>
      </div>
    <div style={componentStyle}>
        
        <div style={linestyle}></div>
        <div style={linestyle2}> </div>
        <div style={linestyle3}></div>
        {/* <div style={{position:'absolute',left:'370px',top:'22px'}}>
        
        {array[0].primary}
        </div> */}
        <div style={{position:'absolute', top:'20px', left:'40px', fontWeight:'500'}}>
          {c_name}
        </div>
        <Button 
      variant="contained"
      color="default"
      onClick={onBackClick}
      disabled={stepperColor === 3}
      style={{position:'absolute',top:'20px',left:'900px', background:'#FFFFFF', border: '1px solid blue', opacity: stepperColor=== 3 ? '0.2' : '1'}}
      >
        <span style={{color:'blue', textTransform: 'none'}}>
        Edit Channel
        </span>
        
      </Button>
        <div>
          {Array.from({ length: count }, (_, index) => (

            <div>
              <div style={{position:'absolute',left:'370px',top:`${index *52 + 22}px`}}>
        
              {array[index].primary===""?
              (
                <>
                {
                  (index===0) ? (
                    ('')

                  ) : (
                    <>
                    <div>
                    {
                      (index===1) ? (
                        <>
                        <span style={{position:'absolute', left:'-370px', top:'-30px',color:'#EBEBEB',fontSize:'20px'}}>
                        ___________________________________________________________________
                      </span>
                        <div style={{position:'absolute', top:'5px', left:'-330px', color:'#8A8A8A', fontWeight:'500'}}>
                       Backup Channels
                     </div>
                        </>
                        
                      ) : (
                        <span style={{position:'absolute', left:'-120px', top:'-30px',color:'#EBEBEB',fontSize:'20px'}}>
                    ___________________________________
                  </span>
                      )
                    }
                    </div>
                    
                     </>
                  )
                }
                
                <span style={{color: index===0 ? '' : '#8A8A8A', fontWeight:'500'}}>
                  Not Selected
                </span>
                </>
              ):(
                <>
                {
                  (index===0) ? (
                    ('')

                  ) : (
                    <div>
                    {
                      (index===1) ? (
                        <>
                        <span style={{position:'absolute', left:'-370px', top:'-30px',color:'#EBEBEB',fontSize:'20px'}}>
                        ___________________________________________________________________
                      </span>
                      <div style={{position:'absolute', top:'5px', left:'-330px', color:'#8A8A8A', fontWeight:'500'}}>
                       Backup Channels
                     </div>
                     </>
                      ) : (
                        <span style={{position:'absolute', left:'-120px', top:'-30px',color:'#EBEBEB',fontSize:'20px'}}>
                    ___________________________________
                  </span>
                      )
                    }
                    </div>
                  )
                }
                <span style={{color: index===0 ? '' : '#8A8A8A', fontWeight:'500'}}>
                  {array[index].primary}
                </span>
               
                </>
              )}
              </div>
              <div style={{position:'absolute',left:'650px',top:`${index *52 + 22}px`}}>
        
              {array[index].reference===""?
              (
                <>
                {
                  (index===0) ? (
                    ('')

                  ) : (
                    
                    <span style={{position:'absolute', left:'-120px', top:'-30px',color:'#EBEBEB',fontSize:'20px'}}>
                    ___________________________________
                  </span>
                  )
                }
                <span style={{color: index===0 ? '' : '#8A8A8A', fontWeight:'500'}}>
                  {index===0 ?(
                    ('N/A')
                  ) : ('NULL')}
                </span>
                </>
              ):(
                <>
                {
                  (index===0) ? (
                    ('')

                  ) : (
                    <span style={{position:'absolute', left:'-120px', top:'-30px',color:'#EBEBEB',fontSize:'20px'}}>
                    ___________________________________
                  </span>
                  )
                }
                <span style={{color: index===0 ? '' : '#8A8A8A', fontWeight:'500'}}>
                  {array[index].reference}
                </span>
                </>
              )}
              </div>
              </div>
          ))}
    </div>

        
            

        
    </div>
    </div>
    </>
  );
};

export default MappingComponent;