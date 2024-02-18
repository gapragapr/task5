import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAppParam } from '../../../store/slices/appParams'

const DropDownMenu = () => {
    const {defaultRegion} = useSelector(state => state.appParams)
    const [selectedRegion, setSelectedRegion] = useState(defaultRegion)
    const dispatch = useDispatch()

    const hiddenMenu = useRef()

    useEffect(() => {
        dispatch(setAppParam({param: 'region', value: selectedRegion}))
    }, [selectedRegion])

    const regionList = {
        ru: 'Russian',
        en: 'English',
        fr: 'French'
    }

    const onClickRegionsDDHandker = (e) => {
        hiddenMenu.current.classList.toggle('hidden')
    }

    const clickRegionItemHandler = (index) => {
        setSelectedRegion(Object.keys(regionList)[index])
    }


    return (
        <div className='flex items-center'>
        <p>Regions: </p>
        <div onClick={onClickRegionsDDHandker} className='relative ml-3 px-3 py-1 box-border cursor-pointer bg-white rounded-md'>
            {regionList[selectedRegion]}
            <div ref={hiddenMenu} className='hidden absolute top-7 left-0 px-3 bg-inherit py-1 box-border'>
                {Object.keys(regionList).map((region, index) => {
                    if (region !== selectedRegion) {
                        return <p className='pt-1' onClick={() => clickRegionItemHandler(index)} key={index} >{Object.values(regionList)[index]}</p>
                    }
                })}
            </div>
        </div>
    </div>
    )
}

export default DropDownMenu