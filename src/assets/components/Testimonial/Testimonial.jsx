import virgula from '../../../../public/virgula.svg'

const Testimonial = () =>{

    const depoimentos = [
        {
            name: 'Client Name .',
            product: 'Product Designer',
            description: 's simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the'
        }
        
    ]


    return( 
        <div className='w-[397px] border-l-2 border-t-2 border-x-white-100 rounded-3xl text-white-100/60 flex items-center justify-center py-8 px-6'>{depoimentos.map((depoimento) => (
            <div className='gap-6 flex flex-col' key={depoimento}>
                <div className='flex justify-between'>
                    <div className='flex gap-3'>
                        <div className='bg-gray-200 w-12 h-12 rounded-full'></div>
                        <div>
                            <p>{depoimento.name}</p>
                            <p className='text-xs'>{depoimento.product}</p>
                        </div>
                        
                    </div>
                    <img src={virgula} alt="" />
                </div>
                <div>
                    <p className='text-sm'>{depoimento.description}</p>
                </div>

            </div>
        )
        )}

        </div>
    )
}

export default Testimonial