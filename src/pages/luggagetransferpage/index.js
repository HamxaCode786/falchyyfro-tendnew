import React from 'react'
import Luggageform from '../../components/luggagetransferform/luggagetransferform'
import Footerabove from '../../components/footerabove/footerabove'
import Caraouselluggage from '../../components/caraousel/carouselluggage'
import Luggageautoscrollcards from '../../components/luggagetransferform/luggageautoscrollcards'

const index = () => {
  return (
    <div>
      
      <Caraouselluggage />
      <Luggageautoscrollcards />
      <Luggageform />
      <Footerabove />

    </div>
  )
}

export default index
