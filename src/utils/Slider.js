import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
    margin: "auto"
  }
}));

function PriceSlider(props) {
  const { priceRange, setPriceRange } = props;

  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setPriceRange(newValue);
  };
  return (
    <div className={classes.root}>
      <Slider
        value={priceRange}
        defaultValue={9999}
        onChange={handleChange}
        marks={priceMarks}
        min={5}
        max={9999}
        step={5}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}

const marks = [
  {
    value: 0,
    label: "5km"
  },
  {
    value: 100,
    label: "100+km"
  }
];

function DisabledRangeSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        disabled
        defaultValue={50}
        aria-labelledby="discrete-slider-small-steps"
        step={5}
        marks={marks}
        min={5}
        max={100}
        valueLabelDisplay="on"
      />
    </div>
  );
}

function RangeSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        defaultValue={50}
        aria-labelledby="discrete-slider-small-steps"
        step={5}
        marks={marks}
        min={5}
        max={100}
        valueLabelDisplay="on"
      />
    </div>
  );
}

const priceMarks = [
  {
    value: 5,
    label: "$5"
  },
  {
    value: 9999,
    label: "$9,999"
  }
];

function valuetext(value) {
  return `$${value}`;
}

export { DisabledRangeSlider, RangeSlider, PriceSlider };
