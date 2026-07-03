import React from 'react'

function Partida({j}) {
  return (
    <div className="cont-partida">
        {j.time1} x {j.time2}
    </div>
  )
}

export default Partida