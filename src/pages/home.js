import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updatePrices } from '../redux/cryptoSlice'
import CryptoTable from '../components/CryptoTable'

export default function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    const iv = setInterval(() => dispatch(updatePrices()), 1500)
    return () => clearInterval(iv)
  }, [dispatch])

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Crypto Tracker</h1>
      <CryptoTable />
    </main>
  )
}
