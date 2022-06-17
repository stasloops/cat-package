import { PackagingProps } from '../../type/packaging'
import PackagingItem from '../PackagingItem/PackagingItem'
import './Packaging.scss'

const Packaging = () => {
    const packaging: PackagingProps[] = [
        { id: 1, weight: 0.5, title: 'с фуа-гра', portions: '10', mouse: '1', disabled: false },
        { id: 2, weight: 2, title: 'с рыбой', portions: '40', mouse: '2', disabled: false },
        { id: 3, weight: 5, title: 'с курой', portions: '100', mouse: '5', disabled: true },
    ]
    return (
        <main className='packaging'>
            <div className='packaging__container'>
                {
                    packaging.map((item, id) => (
                        <PackagingItem item={item} key={id} />
                    ))
                }
            </div>
        </main>
    )
}

export default Packaging