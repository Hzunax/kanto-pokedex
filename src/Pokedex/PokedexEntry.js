import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Transition } from "../components/Transition";

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
          <DialogContentText id="dialog-img">
            <img id="pokemon-sprite" src={pokemon?.sprites?.front_default} alt={pokemon?.name} />
          </DialogContentText>
          <DialogContentText id="dialog-description">
            <span>Height: {pokemon?.height} </span>
            <span>Weight: {pokemon?.weight}</span>
          </DialogContentText>
          <ul>
            {pokemon?.moves?.filter(
              move => move.version_group_details.some(
                detail => (detail.version_group.name === 'firered-leafgreen' && detail.level_learned_at > 0)
              ))
              .filter(move => move.version_group_details.length > 0)
              .sort((a, b) => a.version_group_details[0].level_learned_at - b.version_group_details[0].level_learned_at)
              .map(move => <li key={move.move.name}>{move.move.name} @ lvl {move.version_group_details[0].level_learned_at}</li>)
            }
          </ul>
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
