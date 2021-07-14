import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        backgroundColor: 'lavender',
        height: '70vh',
    },
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      fontSize: '70px',
      fontFamily: 'Georgia-Bold',
      fontWeight: '500',
      color: 'white',
    },
    bodyText: {
      fontFamily: "Georgia-Bold",
      color: 'white',
      fontSize: '28px',
    },
    genresContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    textContainer: {
      display: 'flex',
      flexDirection: 'column',
      height: '40vh',
      
    },
    topMargin: {
      marginTop: '100px',
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardText:{
      fontSize: '20px',
    },
    cardLandscapeImage:{
      paddingTop: '56.25%' // 16:9
    },
    cardPortraitImage:{
      paddingTop: '100%'
    },
    cardContent: {
      flexGrow: 1,
    },
    image: {
      height: '55vh',

    },
    button: {
      color: 'black',
      background: 'linear-gradient(90deg, #b88ef0, #55fccf)',
      boxShadow: '0 15px 14px rgb(0 42 177 /12%)',
      height: '45px',
      marginTop: '5px',
    },
    discoverMoreButton: {
      color: 'black',
      background: 'linear-gradient(90deg, #b88ef0, #55fccf)',
      boxShadow: '0 15px 14px rgb(0 42 177 /12%)',
      marginTop: '12px',
    },
    body: {
      paddingTop: '75px',
      paddingBottom: '75px',
      paddingRight: '10%',
      paddingLeft: '10%'
    },
    heading: {
        fontSize: '180%', 
        fontWeight: '500',
    },
    carouselBody: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '500px',
        borderRadius: 0
    },
    defaultSidePadding: {
        paddingRight: '10%',
        paddingLeft: '10%'
    },
    smallSidePadding: {
        paddingRight: '5%',
        paddingLeft: '5%'
    },
    bottomPadding: {
        paddingBottom: "75px"
    }
    


  }));

export default useStyles;