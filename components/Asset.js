import React from 'react'
import { Line } from 'react-chartjs-2'

const styles = {
  wrapper: ' bg-[#f0f0f0] flex justify-between p-5  hover:bg-white duration-300',
  container: 'bg-white flex flex-col text-black items-center justify-center',
  name: 'font-bold',
  chart: 'w-36 h-full',
  price: 'flex flex-col text-black',
  percent: 'text-green-400',
}

const Asset = ({ coin, price }) => {
  const randomNumber = () => {
    let data = []
    for (let i = 0; i < 9; i++) {
      let randomNum = Math.floor(Math.random() * 100)
      data = [...data, randomNum]
    }
    return data
  }

  const setGraphColor = () => {
    if (coin.change < 0) {
      return '#ef4b09'
    } else {
      return '#00ff1a'
    }
  }

  const data = {
    labels: ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    datasets: [
      {
        fill: false,
        lineTension: 0.01,
        backgroundColor: setGraphColor(),
        borderColor: setGraphColor(),
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: setGraphColor(),
        pointBackgroundColor: setGraphColor(),
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: setGraphColor(),
        pointHoverBorderColor: setGraphColor(),
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: randomNumber(),
      },
    ],
  }

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.name}>{coin.symbol}</div>
      </div>
      <div>
        <div className={styles.chart}>
          <Line data={data} options={options} width={400} height={150} />
        </div>
      </div>
      <div className={styles.price}>
        <div>{price}</div>
        <div
          className={styles.percent}
          style={{ color: coin.change < 0 ? '#ef4b09' : 'green' }}
        >
          {coin.change}%
        </div>
      </div>
    </div>
  )
}

export default Asset