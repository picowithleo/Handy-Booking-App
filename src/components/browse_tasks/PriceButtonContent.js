import React from "react";
import { PriceSlider } from "../../utils/Slider";
import "../../css/browse_tasks/PriceButton.css";

const PriceButtonContent = props => {
  return (
    <div class="container-fluid py-6">

        
        <div class="tab-content" role="tablist">
          <div>
            <h4>TASK PRICE</h4>
            <div className="RangeSlider">
            <PriceSlider />
            </div>
          </div>
        </div>
      </div>    
  );
};

export default PriceButtonContent;