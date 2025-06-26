import Settings from '@/unifiedComponents/Settings'
import { useRouter } from 'next/router'
import React from 'react'

const settings = () => {

  const { id } = useRouter().query

  return (
    <div>
        <Settings />
    </div>
  )
}

export default settings