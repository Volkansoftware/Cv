import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
    /*list style position*/
    colorGreen: {
        color: '#1D8246',
        textDecorationColor: 'white',
        fontWeight: 'bold'
    },
    title: {
        textAlign: 'center',
        fontSize: '35px',
        color: '#535353',
    },
    links: {
        textAlign: 'center',
        fontSize: '17px',
        color: '#535353'
    },

    block: {
        display: 'block',
        marginTop: '10px'
    },
    container: {
        width: '80%',
        marginLeft: '75px',

    },
    secondTitle: {
        fontSize: '25px',
        fontWeight: 'bold'
    },
    date: {
        color: '#535353',
        fontWeight: 'bold'
    },
    colorGray: {
        color: '#535353'
    },
    listStyle: {
        listStyleType: 'disclosure-closed'
    },
    summary: {
        marginBottom: '35px'
    },
    flex: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    flag: {
        width: "23px",
        marginLeft: "10px",

    },
    pointer: {
        cursor: 'pointer'
    }


}))