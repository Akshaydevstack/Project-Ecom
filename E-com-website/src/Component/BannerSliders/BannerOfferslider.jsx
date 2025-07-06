import React from 'react'

export default function BannerOfferslider() {
  return (
    <div className="bg-yellow-400 py-1 sticky top-0 z-10">
      <div className="animate-marquee whitespace-nowrap py-2 text-black font-semibold text-sm">
        🎉 <span className="text-red-500">Summer Sale!</span> Up to{" "}
        <span className="underline">30% OFF</span> on smartphones 📱 +{" "}
        <span className="text-green-600">No Cost EMI</span>
        &nbsp;&nbsp;&nbsp; 🎉{" "}
        <span className="text-red-500">Summer Sale!</span> Up to{" "}
        <span className="underline">30% OFF</span> on smartphones 📱 +{" "}
        <span className="text-green-600">No Cost EMI</span>
      </div>
    </div>
  )
}
