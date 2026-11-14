import React from 'react'

function Portfolio({totalValue,changePercent}) {
  const isPositive = changePercent >= 0;
  return (
    <div className="bg-surface-900 border border-surface-700 rounded-xl p-5 flex flex-col justify-between">
      {/* Top Label & Icon */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
          Portfolio Value
        </span>
        <div className="p-2 bg-trade-accent/10 text-trade-accent rounded-lg">
          <Wallet className="w-4 h-4" />
        </div>
      </div>

      {/* Main Dollar Amount & Percentage Badge */}
      <div className="mt-4 flex items-baseline gap-3">
        <h2 className="text-2xl md:text-3xl font-bold font-mono text-white">
          ${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </h2>

        <span
          className={`px-2 py-0.5 rounded text-xs font-mono font-semibold ${
            isPositive
              ? 'bg-trade-buy/15 text-trade-buy'
              : 'bg-trade-sell/15 text-trade-sell'
          }`}
        >
          {isPositive ? '+' : ''}
          {changePercent.toFixed(2)}%
        </span>
      </div>
    </div>
  );
}
export default Portfolio
