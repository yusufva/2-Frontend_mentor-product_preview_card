import React from 'react'

export default function Card() {
  return (
    
    <div className=' w-80 h-90% bg-white flex gap-0 rounded-lg'>
        <div className=' flex-auto grid-rows-2 '>
            <aside>
                <img src='image-product-mobile.jpg' className=' rounded-t-lg ' alt='Gabrielle Essence Eau De Parfum' />
            </aside>
            <div className='grid-rows-4 gap-0 mx-6'>
              <br />
                <article>
                    <h1 className=' font-montserrat font-medium text-base mt-3 text-[#6c7289] '>P E R F U M E</h1>
                    <h2 className=' font-fraunces font-bold text-3xl mt-5'>Gabrielle Essence Eau De Parfum</h2>
                    <p className=' font-montserrat font-medium text-[14px] mt-5 text-[#6c7289] '>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of Chanel</p>
                    <div className='columns-2'>
                      <h2 className=' font-fraunces font-bold text-3xl mt-5 text-[#3c8067] '>$149.99</h2><br /><h3 className=' line-through text-[#6c7289] text-sm mt-1'>$169.99</h3>
                    </div>

                </article>
                <button className=' btn btn-darkCyan w-[272px] my-4 rounded-5xl inline-flex items-center justify-center '>
                  <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z" fill="#FFF"/></svg>
                  <span className='ml-3 my-1'>Add to Cart</span>
                </button>
            </div>
            </div>
            
        
    </div>
    
  )
}
