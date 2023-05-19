import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { PlayCircleOutline } from '@material-ui/icons';
import CreditCardIcon from '@material-ui/icons/CreditCard';

const useStyles = makeStyles(() => ({
    side: {
        position: 'fixed',
      width: '250px',
      height: '100vh',
      left: '0px',
      top: '0px',
      background: 'linear-gradient(180deg, #04273A 0%, rgba(3, 23, 35, 0.96) 100%)',
      padding: '20px',
      color: '#FFF',
    },
    line: {
        position: 'absolute',
        width: '230px',
        height: '0px',
        left: '32px',
        top: '90px',
        border: '2.19868px solid #4F4F4F',
        textAlign: 'center',
        marginBottom: '25px',
      },
    box: {
        boxSizing: 'border-box',
        position: 'absolute',
        width: '14402px',
        height: '5410px',
        border: '33px solid #000000',
      },
    companyName: {
        fontFamily: 'DM Sans',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '28px',
        marginTop: '15px',
        marginBottom: '50px',
        lineHeight: '36px',
        textAlign: 'center',
    },
    dashboard: {
        width: '93px',
        height: '23px',
        fontFamily: 'DM Sans',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '18px',
        lineHeight: '23px',
        //textAlign: 'center',
    },
    option: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '18px',
      marginBottom: '25px',
      cursor: 'pointer',
    },
    optionIcon: {
      marginRight: '10px',
    },
    belowCount: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px',
      gap: '8px',

      position: 'absolute',
      width: '160px',
      height: '75px',
      left: '22px',
      top: '520px',

      background: '#02354F',
/* Shadow-2 */

      boxShadow: '0px 3px 20px 4px rgba(0, 0, 0, 0.04)',
      borderRadius: '4px',
    }
  }));

const SideComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.side}>
      <div className={classes.companyName}>React Test</div>
      <div className={classes.line}></div>
      {/* {<div className={classes.box}></div>} */}
      <div className={classes.option}>
        <DashboardIcon className={classes.optionIcon} />
        Dashboard
      </div>
      <div className={classes.option}>
      <PlayCircleOutline className={classes.optionIcon} />
        Montages
      </div>
      <div className={classes.option}>
        <CreditCardIcon className={classes.optionIcon} />
        Credits
      </div>
      <div className={classes.belowCount}>
        <span style={{fontSize: '27px'}}>
          1650
        </span>
        <span style={{fontSize: '16px'}}>
          Total Credits available
        </span>
      </div>
    </div>
  );
};

export default SideComponent;
