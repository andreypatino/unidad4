import { style } from 'typestyle';

  export const contentheader = style({
    padding: '0.75rem 2.5rem',
    boxShadow: '0 0.25rem 0.25rem 0 rgba(173, 186, 230, 0.4)',
    position: 'relative',
    columnCount : '2',
    background: 'white'
  });

  export const logobocc = style({
    backgroundRepeat : 'no-repeat',
    backgroundSize : '100% 100%',
    width: '10.1875rem',
    height: '2.0625re',
    
    $nest: {
      '@media only screen and (max-width: 320px)': {
        textAlign: 'left',
        padding: '0.75rem 5.1875rem'
      }
    }
  });

  export const logoavalcss = style({
    float:'left',
    marginLeft: '34rem'
  })

  export const navbarCarr = style({
    backgroundColor: '#1565c0 !important'
  })

  export const textCarr = style({
    color: 'white'
  })