import React from 'react'

export default function Cards() {
  return (
    <div>
      <div className="flex justify-center space-x-4 p-4">
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img
      src="https://placehold.co/300x200"
      alt="Environmental Impact"
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold">Calculate Footprint</h3>
      <p className="text-zinc-600">
        Identify key factors: energy, transportation, food, waste, and consumption, and what you can
        do to neutralize carbon emission.
      </p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        To Calculate
      </button>
    </div>
  </div>

  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img src="https://placehold.co/300x200" alt="Reduce Waste" className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold">Reduce</h3>
      <p className="text-zinc-600">
        Reduce energy usage at home by turning off lights, using energy-efficient appliances, and
        insulating your home.
      </p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        To Know More
      </button>
    </div>
  </div>

  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img
      src="https://placehold.co/300x200"
      alt="Environmental Measures"
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold">Measures</h3>
      <p className="text-zinc-600">
        Use renewable energy, recycle, plant trees, use public transport, buy local products, and
        limit water usage.
      </p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        To Know More
      </button>
    </div>
  </div>
</div>
    </div>
  )
}
