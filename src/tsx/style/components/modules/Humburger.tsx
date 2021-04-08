// // Burger.styled.js

export const hamburger: any = {
  '& .button': {
    position: 'absolute',
    top: '20px',
    right: '15px',
    height: '10px',
    width: '27px',
    display: 'inline-block',
    textDecoration: 'none',
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    border: 'none',
    backgroundColor: 'transparent',
    zIndex: 200
  },
  '& .hamburger': {
    outline: 'none',
    WebkitTransition: 'all .3s ease-in-out',
    transition: 'all .3s ease-in-out'
  },

  '& .hamburgerLine': {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: 'auto',
    width: '27px',
    height: '0.25rem',
    borderRadius: '0.25rem',
    backgroundColor: '#ffffff',
    WebkitTransition: 'inherit',
    transition: 'inherit'
  },
  '& .hamburgerLine::before': {
    position: 'absolute',
    display: 'block',
    width: '100%',
    height: '100%',
    borderRadius: '0.25rem',
    backgroundColor: '#ffffff',
    content: "''",
    WebkitTransition: 'inherit',
    transition: 'inherit',
    top: '-8px'
  },
  '& .hamburgerLine::after': {
    position: 'absolute',
    display: 'block',
    width: '100%',
    height: '100%',
    borderRadius: '0.25rem',
    backgroundColor: '#ffffff',
    content: "''",
    WebkitTransition: 'inherit',
    transition: 'inherit',
    top: '8px'
  },
  "& .hamburger[aria-expanded='true']": {
    '& .hamburgerLine': {
      backgroundColor: 'transparent'
    },
    '& .hamburgerLine::before': {
      top: 0,
      backgroundColor: '#ffffff',
      WebkitTransform: 'rotate(45deg)',
      msTransform: 'rotate(45deg)',
      transform: 'rotate(45deg)'
    },
    '& .hamburgerLine::after': {
      top: 0,
      backgroundColor: '#ffffff',
      WebkitTransform: 'rotate(-45deg)',
      msTransform: 'rotate(-45deg)',
      transform: 'rotate(-45deg)'
    }
  },
  '& .visuallyHidden': {
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px',
    height: '1px',
    overflow: 'hidden',
    border: 0,
    padding: 0,
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    margin: '-1px'
  }
}
