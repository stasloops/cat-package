import React, { FC, useState } from 'react'
import { PackagingProps } from '../../type/packaging'
import './PackagingItem.scss'

type PackagingItemProps = {
    item: PackagingProps
}

const PackagingItem: FC<PackagingItemProps> = ({ item }) => {
    const [activePackaging, setActivePackaging] = useState<boolean>(false)

    const opacityStyle = {
        opacity: 0.5
    }

    const toggleActivePackaging = () => {
        setActivePackaging(!activePackaging)
    }


    return (
        <div className='packaging__item'>
            <div onClick={() => toggleActivePackaging()} style={{ border: item.disabled ? '3px solid #b3b3b3' : activePackaging ? '3px solid #E52E7A' : '' }} className='packaging__item-content'>
                <span style={{ backgroundColor: item.disabled ? '#b3b3b3' : activePackaging ? '#E52E7A' : '' }} className='packaging__item-border'></span>
                <p className='packaging__item-description'>Сказочное заморское яство</p>
                <h2 style={item.disabled ? opacityStyle : undefined} className='packaging__item-title'>Нямушка</h2>
                <h3 style={item.disabled ? opacityStyle : undefined} className='packaging__item-title__description'>{item.title}</h3>
                <p className='packaging__item-description packaging__item-stock'>{item.portions} порций <br /> {item.mouse === '1' ? ' мышь ' : item.mouse + ' мышей '} в подарок</p>
                <span style={{ backgroundColor: item.disabled ? '#b3b3b3' : activePackaging ? '#E52E7A' : '' }} className='packaging__item-weight'>{item.weight}<br />кг</span>
                <img style={item.disabled ? opacityStyle : undefined} src='img/Photo.png' className='packaging__item-cat' />
            </div>
            <p className='packaging__item-text'>
                {item.disabled ?
                    <span className='yellow'>Печалька, с курой закончилась</span>
                    :
                    activePackaging ? 'Головы щучьи с чесноком да свежайшая семгушка'
                        :
                        <span>
                            Чего сидишь? Порадуй котэ,   
                            <span
                                className='blue'
                                onClick={() => toggleActivePackaging()}
                            >
                                купи
                            </span>
                        </span>
                }
            </p>
        </div>
    )
}

export default PackagingItem