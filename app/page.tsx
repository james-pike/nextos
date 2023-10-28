import NavbarCTA from './components/header'

export default function Home() {
  return (
    
<main className="flex min-h-screen flex-col items-center justify-between p-0">
     <NavbarCTA></NavbarCTA>
   
     <section className="min-h-screen max-h-screen mt-14 w-full bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/coast-house-view.jpg')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply">
  <div className="relative flex flex-col justify-center items-center min-h-screen text-white">
    <div className="text-center">
      <h1 className="text-5xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 leading-tight -mt-24"> 
        We Invest In The Worlds Potential!
      </h1>
      <p className="text-xl lg:text-xl xl:text-2xl font-light text-gray-400 mb-6"> 
        Roasted Fresh, Vitamin Infused, Packaged Daily & Delivered Fresh.
      </p>
      <button
        className="inline-flex items-center py-3 px-6 text-lg font-medium text-white bg-blue-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-900 dark:bg-primary-700 dark:hover:bg-primary-800 dark:focus:ring-primary-900 rounded-lg mt-4">
        Get A Free Quote!
        <svg
          className="ml-2 -mr-1 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
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
