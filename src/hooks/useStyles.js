import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  colorful: {
    backgroundColor: '#26418f',
    border: 0,
    borderRadius: 3,
    color: 'white !important',
    height: 48,
    padding: '0 30px',
    '&:hover': {
      backgroundColor: '#5c6bc0',
    },
    '&:action': {
      backgroundColor: '#26418f',
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  loader: {
    borderRadius: '50%',
    width: '3em',
    height: '3em',
    fontSize: '10px',
    position: 'relative',
    textIndent: '-9999em',
    borderTop: '0.4em solid rgba(255, 255, 255, 0.2)',
    borderRight: '0.4em solid rgba(255, 255, 255, 0.2)',
    borderBottom: '0.4em solid rgba(255, 255, 255, 0.2)',
    borderLeft: '0.4em solid #ffffff',
    transform: 'translateZ(0)',
    animation: '$circularLoad 1.1s infinite linear',
    '&:after': {
      borderRadius: '50%',
      width: '3em',
      height: '3em',
    }
  },
  "@keyframes circularLoad": {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  }
}));
