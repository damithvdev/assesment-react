import React from "react";
import { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Select } from "@material-ui/core";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ProductSelector = (props) => {
  const [penguine, setPenguine] = useState({
    name: "Penguine-ears",
    quantity: 1,
    type: "units",
  });
  const [penguineQuantity, setPenguineQuantity] = useState(1);
  const onQuantityTypeChange = (e) => {
    setPenguine({ ...penguine, type: e.target.value });
  };
  const onProductTypeChange = (e) => {
    console.log(e.target.value);
    setPenguine({ ...penguine, name: e.target.value });
  };
  const onPenguineQuantityChange = (e) => {
    console.log(e.target.value);
    setPenguineQuantity(e.target.value);

    setPenguine({ ...penguine, quantity: e.target.value });
  };

  const onAddPenguineItem = () => {
    console.log(penguine);
    props.onAddPenguine(penguine);
  };

  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper className={classes.Paper}>
          <div className="row">
        
            <FormControl variant="filled" className={classes.formControl}>
            <InputLabel htmlFor="filled-age-native-simple">Product</InputLabel>
            <Select native onChange={onProductTypeChange} >
                {props.productCat.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </Select>
            </FormControl>
              

            <Grid item xs={3}>
              <label>
                <input
                  type="number"
                  value={penguineQuantity}
                  onChange={onPenguineQuantityChange}
                />
              </label>
            </Grid>

            <Grid item xs={3}>
              <select onChange={onQuantityTypeChange}>
                {props.filterData.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
            </Grid>

            <Button
              variant="contained"
              onClick={onAddPenguineItem}
              color="primary"
            >
              ADD
            </Button>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProductSelector;
