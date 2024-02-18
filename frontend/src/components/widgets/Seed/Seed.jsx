import React, { useEffect, useState } from 'react'
import Input from '../../shared/Input/Input'
import Button from '../../shared/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { setAppParam } from '../../../store/slices/appParams'

const Seed = () => {
    const {seed} = useSelector(state => state.appParams)
    const [seedValue, setSeedValue] = useState(seed)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setAppParam({param: 'seed', value: Number(seedValue)}))
    }, [seedValue])

    const onChangeText = (e) => {
        setSeedValue(e.target.value)
    }

    const onClickButton = (e) => {
        setSeedValue(Math.floor(Math.random() * 1000))
    }

    return (
      <div>
        <Input onChange={onChangeText} value={seedValue} />
        <Button onClick={onClickButton}>Random</Button>
      </div>
  )
}

export default Seed