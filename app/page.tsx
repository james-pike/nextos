import NavbarCTA from './components/header'

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
     <NavbarCTA></NavbarCTA>


     <section className="min-h-screen max-h-screen mt-14 w-full bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/coast-house-view.jpg')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply ">
    <div className="relative py-8 px-4 mx-auto max-w-screen-xl text-white lg:py-16 z-1">
        <div className="mb-6 max-w-screen-lg lg:mb-0">
            <h1 className="mt-8 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">We invest in the worlds potential</h1>
            <p className="mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl">The need for energy is universal. Thats why Flowbite scientists and engineers are pioneering new research and pursuing new technologies to reduce emissions while creating more efficient fuels. Were committed to responsibly meeting the worlds energy needs.</p>
            <a href="#" className="inline-flex items-center py-3 px-5 font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-900 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Learn more about the plan
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div> 
          
    </div>
</section>



<section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <div className="grid grid-cols-2 gap-2">
            <a href="#" className="p-8 col-span-2 text-left h-96 bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/bmw-ix.png')] bg-no-repeat bg-cover bg-center bg-gray-500 bg-blend-multiply hover:bg-blend-normal">
                <h2 className="mb-5 max-w-xl text-5xl font-extrabold tracking-tight leading-tight text-white">Enjoy nature sustainable travel in the BMW iX</h2>
                <button type="button" className="inline-flex items-center px-4 py-2.5 font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700">
                    Show more
                </button>
            </a>
            <a href="#" className="p-8 col-span-2 md:col-span-1 text-left h-96 bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/bmw-m4.png')] bg-no-repeat bg-cover bg-center bg-gray-500 bg-blend-multiply hover:bg-blend-normal">
                <h2 className="mb-5 max-w-xl text-4xl font-extrabold tracking-tight leading-tight text-white">Enjoy nature sustainable travel in the BMW iX</h2>
                <button type="button" className="inline-flex items-center px-4 py-2.5 font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700">
                    Show more
                </button>
            </a>                
            <a href="#" className="p-8 col-span-2 md:col-span-1 text-left h-96 bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/bmw-m6.png')] bg-no-repeat bg-cover bg-center bg-gray-500 bg-blend-multiply hover:bg-blend-normal">
                <h2 className="mb-5 max-w-xl text-4xl font-extrabold tracking-tight leading-tight text-white">Enjoy nature sustainable travel in the BMW iX</h2>
                <button type="button" className="inline-flex items-center px-4 py-2.5 font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700">
                    Show more
                </button>
            </a>
        </div>
    </div>
</section>


    </main>
  )
}
