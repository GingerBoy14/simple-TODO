import { useEffect, useMemo, useState } from 'react'
import { usePrevious } from 'hooks'

const getWidth = () =>
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight

function useHeightDifference() {
  // save current window width in the state object
  let [width, setWidth] = useState(getWidth())
  const prevHeight = usePrevious(width)
  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    // timeoutId for debounce mechanism
    let timeoutId = null
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId)
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => setWidth(getWidth()), 150)
    }
    // set resize listener
    window.addEventListener('resize', resizeListener)

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener)
    }
  }, [])
  return useMemo(() => width - prevHeight, [width, prevHeight])
}

export default useHeightDifference
