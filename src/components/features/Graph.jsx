// DetailedChartComponent.jsx
import React from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

const GraphComponent = () => {
  return (
    <div className="w-full max-w-md mx-auto p-4 bg-gray-800 rounded-lg">
      <h2 className="text-center text-lg text-white mb-4">SOL Price Chart</h2>
      <div className="w-full h-80">
        <TradingViewWidget
          symbol="BINANCE:SOLUSDT" // You can change this to any trading pair you want
          theme={Themes.DARK}
          interval="15"
          locale="en"
          autosize
          hide_top_toolbar={false}
          save_image={false}
          enable_publishing={false}
          hide_legend={false}
          withdateranges={true}
        />
      </div>
    </div>
  );
};

export default GraphComponent;
