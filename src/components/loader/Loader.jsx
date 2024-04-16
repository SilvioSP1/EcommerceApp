import React from 'react'
import { LineWave } from 'react-loader-spinner'

const Loader = () => {
  return (
    <LineWave
        visible={true}
        height="100"
        width="100"S
        color="#4fa94d"
        ariaLabel="line-wave-loading"
        wrapperStyle={{}}
        wrapperClass=""
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
        />
  )
}

export default Loader