import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

// CSS
import './counter.css'
const Counter = ({ end, duration = 5, prefix = '', suffix = '' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Start the counter only once
    threshold: 0.1, // Adjust this value to control when the counter starts
  })

  return (
    <div className="counter font40 weight800" ref={ref}>
      {inView ? (
        <CountUp
          start={0}
          end={end}
          duration={duration}
          prefix={prefix}
          suffix={suffix}
          separator=","
        />
      ) : (
        '0'
      )}
    </div>
  )
}

export default Counter
