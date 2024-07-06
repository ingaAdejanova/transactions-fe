import { useState, useEffect, useCallback, useMemo } from 'react'
import { fetchData } from '../api/api'

export type PaginationOptions = {
  url: string
  limit?: number
  filters?: { [key: string]: string }
}

export type PaginationResult<T> = {
  items: T[]
  hasMore: boolean
  isLoading: boolean
  error: string | null
  loadMoreItems: () => void
}

export type FetchResponse<T> = {
  data: T[]
  meta: { total: number }
}

export const useFetchPagination = <T>({ url, limit = 10, filters = {} }: PaginationOptions): PaginationResult<T> => {
  const [items, setItems] = useState<T[]>([])
  const [hasMore, setHasMore] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState<number>(1)

  const stableFilters = useMemo(() => filters, [JSON.stringify(filters)])

  const fetchDataAndSetState = useCallback(
    async (page: number, filters: { [key: string]: string }) => {
      setIsLoading(true)
      try {
        const response = await fetchData<FetchResponse<T>>({
          url,
          params: { limit, offset: (page - 1) * limit, ...filters },
        })
        const { data, meta } = response

        setItems((prevItems) => (page === 1 ? data : [...prevItems, ...data]))
        setHasMore(page * limit < meta.total)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error fetching data')
      } finally {
        setIsLoading(false)
      }
    },
    [url, limit],
  )

  useEffect(() => {
    setItems([])
    setPage(1)
    setHasMore(true)
  }, [url, stableFilters])

  useEffect(() => {
    fetchDataAndSetState(page, stableFilters)
  }, [page, stableFilters, fetchDataAndSetState])

  const loadMoreItems = useCallback(() => {
    setPage((prevPage) => prevPage + 1)
  }, [])

  return {
    items,
    hasMore,
    isLoading,
    error,
    loadMoreItems,
  }
}
