import { useCallback, useRef } from 'react'

const useRefCallback = (callback) => {
  const ref = useRef(null)
  const setRef = useCallback((node) => {
    if (node !== null && callback) {
      callback(node)
    }
    ref.current = node
  }, [])
  return [ref, setRef]
}

export default useRefCallback
