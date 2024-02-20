import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function DetailPost() {

    const { id } = useParams()
    const [detail, setDetail] = useState([])

  return (
    <div>DetailPost</div>
  )
}
