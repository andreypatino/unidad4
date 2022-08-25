import { background } from 'csx';
import { style } from 'typestyle';

  export const containerbody = style({
    display:'flex',
    flexDirection : 'column',
  
    
  });
  export const colpage = style({
    position: 'absolute',
    width: '579px',
    left: '0px',
    marginTop: '7px',
    $nest: {
      '@media only screen and (max-width: 1341px)': {
        marginTop: '7px',
        minHeight: '50vh',
        order: -4
      },
      '@media only screen and (max-width: 356px)': {
        fontSize: '38px'
      }
    }

  });

  export const colform = style({
    
  });

  export const formcss = style({
    display:'flex',
    flexDirection:'column',
    padding:'0px',
    gap:'5px',
    position:'absolute',
    width:'442px',
    height:'320px',
    left:'950px',
    top:'312px'

  });

  export const titlelanding = style({
    fontFamily: '"Poppins-bold", sans-serif;',
    fontWeight: '700',
    fontSize: '37px',
    lineHeight: '40px'
  })

  export const textlanding = style({
    fontFamily: '"Poppins-bold", sans-serif;',
    width:'250px',
    height:'48px',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '24px',
    color:'#555F83',
    flex:'none',
    flexGrow:'0',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: '0.03em',
  })

  export const buttonCA = style({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '8px',
    gap: '10px',
    background:'#FFFFFF',
    textDecoration: 'none',
    color:'black',
    boxShadow:'0px 4px 4px rgba(173, 186, 230, 0.4);',
    borderRadius:'8px',
    $nest:{
      '&:hover': {
        textDecoration: 'none',
        boxShadow:'0 0 11px rgba(33,33,33,.2); '
      },
    }

  })

  export const iconVectorcss = style({
    position: 'absolute',
    left: '9.17%',
    right: '9.17%',
    top:'9.17%',
    bottom: '9.17%',
  })

  export const planding = style({
    fontFamily: '"Poppins-bold", sans-serif;',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '21px',
    marginTop: '15px'
  })
  
