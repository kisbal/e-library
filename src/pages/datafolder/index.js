import React from 'react'
import { useParams } from 'react-router-dom'

function DataFolder() {
    let {site} = useParams()
  return (
    <div>{site}</div>
    // <div>data</div>
  )
}

export default DataFolder