import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Transition } from "./Transition";

const PokedexEntry = ({ pokemon, open, handleClose }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Dialog
        open={open}
        fullScreen={fullScreen}
        scroll={"paper"}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle id="dialog-title">
          #{pokemon?.id} {pokemon?.name}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            <img id="pokemon-sprite" src={pokemon?.sprites?.front_default} alt={pokemon?.name} />
            <p>
              <span>Height: {pokemon?.height} </span>
              <span>Weight: {pokemon?.weight}</span>
            </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PokedexEntry;
