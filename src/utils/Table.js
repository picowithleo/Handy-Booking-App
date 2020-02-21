import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
} from 'react'
import { Virtuoso } from 'react-virtuoso'
import { TaskCard } from '../components/browse_tasks/TaskCards'
import LoadingSpinner from '../img/icons/LoadingSpinner.svg'

const GenerateItem = index => {
  return <TaskCard user={(index)} index={index} />
}

export default () => {
  const [total, setTotal] = useState(0)
  const items = useRef([])
  const loading = useRef(false)

  // the setTimeout below simulates a network request.
  // In the real world, you can fetch data from a service.
  // the setTotal call will trigger a refresh for the list,
  // so make sure you call it last
  const loadMore = useCallback(() => {
    if (loading.current) {
      return
    }
    loading.current = true

    setTimeout(() => {
      for (let index = total; index < total + total + 20; index++) {
        items.current = [...items.current, index]
      }
      loading.current = false
      setTotal(items.current.length)
    }, 1000)
  }, [])

  useEffect(() => {
    loadMore()
  }, [])

  return (
    <Virtuoso
      style={{ width: '350px', height: '780px' }}
      overscan={10}
      totalCount={total}
      item={GenerateItem}
      endReached={() => loadMore()}
      footer={() => {
        return (
          <div style={{ textAlign: 'center' }}>
            <img src={LoadingSpinner} alt='LoadingSpinner'/>
          </div>
        )
      }}
    />
  )
}