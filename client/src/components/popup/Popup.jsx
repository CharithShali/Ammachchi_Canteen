import React from 'react'
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core';
import Controls from "../button/Controls";
import CloseIcon from '@material-ui/icons/Close';
import Background from "../helpers/Background";
import darkGreyBg from "../../images/dark-grey-bg.png";

const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(10)
    },
    dialogTitle: {
        paddingRight: '0px'
    }
}))
 
const Popup = props => {

    const { title, children, openPopup, setOpenPopup } = props;
    const classes = useStyles();

  return (
    <Background url={darkGreyBg}>
    <Dialog open={openPopup} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
            <DialogTitle className={classes.dialogTitle}>
                <div style={{ display: 'flex' }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    <Controls.ActionButton
                        color="secondary"
                        onClick={()=>{setOpenPopup(false)}}>
                        <CloseIcon />
                    </Controls.ActionButton>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    </Background>
  );
};
 
export default Popup;