import React from 'react'
import { useSelector } from 'react-redux'
import { selectAssets } from '../redux/cryptoSlice'
import styles from '../styles/CryptoTable.module.css'

const format = (n) => n.toLocaleString()

export default function CryptoTable() {
  const assets = useSelector(selectAssets)

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th></th>
            <th>#</th><th>Name</th><th>Price</th>
            <th>1h %</th><th>24h %</th><th>7d %</th>
            <th>Market Cap</th><th>Volume (24h)</th><th>Supply</th>
            <th>Last 7 days</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((coin, i) => (
            <tr key={coin.id}>
              <td className='star-icon'>☆</td>
              <td>{i + 1}</td>
              <td>
                <img src={coin.image} alt={coin.name} width={20} /> {coin.name} {coin.symbol}
              </td>
              <td>${format(coin.price)}</td>
              <td className={coin.change1h >= 0 ? styles.green : styles.red}>{coin.change1h}%</td>
              <td className={coin.change24h >= 0 ? styles.green : styles.red}>{coin.change24h}%</td>
              <td className={coin.change7d >= 0 ? styles.green : styles.red}>{coin.change7d}%</td>
              <td>${format(coin.marketCap)}</td>
              <td>${format(coin.volume24h)}</td>
              <td>{coin.supply} {coin.symbol}</td>
              <td>
              {coin.change7d >= 0 ?
                <svg xmlns="http://www.w3.org/2000/svg" width="106" height="33" viewBox="0 0 106 33" fill="none">
                  <path d="M102.994 8.46666H105V33L1 33V11.4536L4.00877 18.9203L5.20413 21.9069H6.60551L9.40827 18.9203L11.3702 21.907L17.256 21.9072L20.339 18.9204L22.0207 14.4396L24.4683 16.6803L26.6747 18.9203L27.3638 22.3333L28.7651 21.9069H30.4858L33.6952 11.4536L34.6981 14.4403L36.3028 11.4536L37.5063 16.6803L40.7156 7.72028L42.5209 11.4536H45.9308L49.5413 3.98696L51.7477 7.72028L54.6535 5.48L58.194 11.4533L60.4704 1L62.1179 11.4533L73.1072 15.9333L74.5113 12.9466H75.9153L79.1247 8.46666H82.334L83.5375 12.9466L88.3515 3.98666L90.3574 15.9333L91.3603 11.4533H93.5667L95.5726 1L97.5784 9.95999L98.5813 5.48H101.189L102.994 8.46666Z" fill="url(#paint0_linear_2132_4599)" fillOpacity="0.16"></path>
                  <path d="M105 8.4667H102.994L101.189 5.48004H98.5813L97.5784 9.96003L95.5726 1.00004L93.5667 11.4534H91.3603L90.3574 15.9333L88.3515 3.9867L83.5375 12.9467L82.334 8.4667H79.1247L75.9153 12.9467H74.5113L73.1072 15.9333L62.1179 11.4534L60.4704 1.00004L58.194 11.4534L54.6535 5.48004L51.7477 7.72032L49.5413 3.987L45.9308 11.4536H42.5209L40.7156 7.72032L37.5063 16.6803L36.3028 11.4536L34.6981 14.4403L33.6952 11.4536L30.4858 21.907H28.7651L27.3638 22.3334L26.6747 18.9203L24.4683 16.6803L22.0206 14.4396L20.339 18.9204L17.256 21.9073L11.3702 21.907L9.40827 18.9203L6.60551 21.907H5.20414L4.00877 18.9203L1 11.4536" stroke="#66C87B" strokeLinecap="round"></path>
                  <defs>
                    <linearGradient id="paint0_linear_2132_4599" x1="53" y1="33" x2="53" y2="1" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#77B900" stopOpacity="0"></stop>
                      <stop offset="0.809892" stopColor="#77B900"></stop>
                    </linearGradient>
                  </defs>
                </svg> :
                <svg xmlns="http://www.w3.org/2000/svg" width="106" height="33" viewBox="0 0 106 33" fill="none">
                  <path d="M3.00584 8.46666H1L1 33L105 33V11.4536L101.991 18.9203L100.796 21.9069H99.3945L96.5917 18.9203L94.6298 21.907L88.744 21.9072L85.661 18.9204L83.9793 14.4396L81.5317 16.6803L79.3253 18.9203L78.6362 22.3333L77.2349 21.9069H75.5142L72.3048 11.4536L71.3019 14.4403L69.6972 11.4536L68.4937 16.6803L65.2844 7.72028L63.4791 11.4536H60.0692L56.4587 3.98696L54.2523 7.72028L51.3465 5.48L47.806 11.4533L45.5296 1L43.8821 11.4533L32.8928 15.9333L31.4887 12.9466H30.0847L26.8753 8.46666H23.666L22.4625 12.9466L17.6485 3.98666L15.6426 15.9333L14.6397 11.4533H12.4333L10.4274 1L8.4216 9.95999L7.41868 5.48H4.81109L3.00584 8.46666Z" fill="url(#paint0_linear_2133_4687)" fillOpacity="0.16"></path>
                  <path d="M1 8.4667H3.00584L4.81109 5.48004H7.41868L8.4216 9.96003L10.4274 1.00004L12.4333 11.4534H14.6397L15.6426 15.9333L17.6485 3.9867L22.4625 12.9467L23.666 8.4667H26.8753L30.0847 12.9467H31.4887L32.8928 15.9333L43.8821 11.4534L45.5296 1.00004L47.806 11.4534L51.3465 5.48004L54.2523 7.72032L56.4587 3.987L60.0692 11.4536H63.4791L65.2844 7.72032L68.4937 16.6803L69.6972 11.4536L71.3019 14.4403L72.3048 11.4536L75.5142 21.907H77.2349L78.6362 22.3334L79.3253 18.9203L81.5317 16.6803L83.9794 14.4396L85.661 18.9204L88.744 21.9073L94.6298 21.907L96.5917 18.9203L99.3945 21.907H100.796L101.991 18.9203L105 11.4536" stroke="#ED544E" strokeLinecap="round"></path>
                  <defs>
                    <linearGradient id="paint0_linear_2133_4687" x1="53" y1="33" x2="53" y2="1" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#ED544E" stopOpacity="0"></stop>
                      <stop offset="0.809892" stopColor="#ED544E"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
