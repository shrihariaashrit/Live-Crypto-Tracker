import React, { useState } from "react";

export default function CreateCard({values})
{
    const [selectedOption , setOption] = useState("");
    const dollar_values = ["current_price", "market_cap", "fully_diluted_valuation", "total_volume", "high_24h", "low_24h", "price_change_24h", "market_cap_change_24h"]; 

    return(
      <>
        <div className="cards">
          <img src={values.image}></img>
          <div className="name">{values.name}</div>
          <div className="price">${values.current_price}</div>

          <select name="bitcoin-data" className="coin-data-select" onChange={(a)=>{setOption(a.target.value)}}>
            <option>Select to Display</option>
            <option value="symbol">Symbol</option>
            <option value="market_cap">Market Cap</option>
            <option value="market_cap_rank">Market Cap Rank</option>
            <option value="fully_diluted_valuation">
              Fully Diluted Valuation
            </option>
            <option value="total_volume">Total Volume</option>
            <option value="high_24h">24h High</option>
            <option value="low_24h">24h Low</option>
            <option value="price_change_24h">Price Change (24h)</option>
            <option value="price_change_percentage_24h">
              Price Change % (24h)
            </option>
            <option value="market_cap_change_24h">
              Market Cap Change (24h)
            </option>
            <option value="market_cap_change_percentage_24h">
              Market Cap Change % (24h)
            </option>
          </select>

          <div className="others" id="opq1">
            {
                selectedOption ?
                    dollar_values.includes(selectedOption) ?
                        "$"+values[selectedOption] : values[selectedOption]
                    :""
            }
          </div>
        </div>
      </>
    );
}