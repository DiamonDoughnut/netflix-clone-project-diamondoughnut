import SWR from 'swr'

import fetcher from '@/lib/fetcher'
import useSWR from 'swr'

//this prevents need of Redux by fetching data state, but won't reload new state if 'data' already exists

const useCurrentUser = () => {
    const {
        data,
        error,
        isLoading,
        mutate
    } = useSWR('/api/current', fetcher);

    return {
        data,
        error,
        isLoading,
        mutate
    }
}

export default useCurrentUser;