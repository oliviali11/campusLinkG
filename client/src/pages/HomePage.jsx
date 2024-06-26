import React from 'react'
import ScrollablePhoto from '../components/ScrollablePhoto'

const HomePage = () => {
  return (
    <>
    <div className="text-center">
  <h1 className="text-3xl pt-6 text-green-800 font-bold font-gaegu">
    Rideshare with 5Cers, connect with peers, plan transportation and events with ease
  </h1>
  <h2 className="text-3xl text-green-800 font-bold font-gaegu">
    All in one platform leveraging efficient communication and powerful AI trip assistant
  </h2>
</div>
<div className="flex justify-center pt-10 font-gaegu text-2xl">
  <a href="/login" className="btn navlink">Login Here</a>
</div>

    <ScrollablePhoto/>
    </>
  )
}

export default HomePage