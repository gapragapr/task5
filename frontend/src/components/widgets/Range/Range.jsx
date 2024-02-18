import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setAppParam } from '../../../store/slices/appParams'

import Input from '../../shared/Input/Input'

const Range = () => {
    const [rangeValue, setRangeValue] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setAppParam({param: 'mistakesCount', value: Number(rangeValue)}))
    }, [rangeValue])

    const onChangeRange = (e) => {
        setRangeValue(e.target.value)
    }

    const onChangeText = (e) => {
        setRangeValue(e.target.value)
    }

    return (
      <div className='flex'>
        <p className='flex items-center'>Errors: <input className='ml-3 mr-3' min={0} max={100} value={rangeValue || 0} type={'range'} onChange={onChangeRange}/></p>
        <Input value={rangeValue} type={'text'} onChange={onChangeText} />
      </div>
    )
}

export default Range