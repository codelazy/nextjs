import Link from 'next/link'
import Head from 'next/head'
import SiteLayout from '../components/SiteLayout'

const Index = () => (
  <div >
    <Head>
      <title>Homepage App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {/* START  ::  TAGLINE */}
    <div className="max-w-6xl mx-auto mt-8 px-8">
      <h1 className="text-left">
        <span className="block text-5xl font-bold leading-none">
          Shorten URL, <span className="font-color-orange">unscripted.</span>
        </span>
        
        <span className="mt-4 block text-xl text-gray-600 leading-tight">
          Say goodbye to cryptic URL and start sharing straight to the point!
        </span>
        
      </h1>
    </div>
    {/* END  ::  TAGLINE */}

    {/* START  ::  3 EASY STEPS */}
    <div>
      <div className="mt-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="inline-block text-4xl font-bold leading-none"> 3 Easy Steps:</h2>
        </div>
      </div>

      <div className="mt-8 bg-orange-500 py-8">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex mb-4">
            <div className="w-3/6">
              <div className="mb-3">
                <h3 className="mr-2 inline-block w-12 h-12 rounded-full bg-black text-white text-center text-3xl font-bold">1</h3>
                <p className="inline-block ">Input your company name</p>
              </div>
              <div className="relative flex">
                <div className="w-3/6">
                  <input aria-label="companyName" name="companyName" type="text" required className="appearance-none rounded relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-lg rounded-b-lg rounded-tr-none rounded-br-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Username" />
                </div> 
                <div className="w-3/6">
                  {/* START  ::  DROPDOWN BOX */}
                  <div className="relative">
                    <select className="appearance-none rounded relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-lg rounded-b-lg rounded-tl-none rounded-bl-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" >
                      <option>sales.today</option>
                      <option>esales.today</option>
                      <option>fsales.today</option>
                    </select>
                    <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                        <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </span>
                  </div>
                  {/* END  :: DROPDOWN BOX */}

                </div>
              </div>
            </div>
            
            <div class="w-3/6 ml-12">
              <div className="mb-3">
                <h3 className="mr-2 inline-block w-12 h-12 rounded-full bg-black text-white text-center text-3xl font-bold">2</h3>
                <p className="inline-block ">Link to redirect</p>
              </div>
              <div className="relative flex">
                <div className="w-full">
                <textarea aria-label="description" rows="4" name="description" className="w-full appearance-none rounded relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-lg rounded-b-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Description" ></textarea>
                  
                </div>
                
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="mb-3">
              <h3 className="mr-2 inline-block w-12 h-12 rounded-full bg-black text-white text-center text-3xl font-bold">3</h3>
              <p className="inline-block ">Desciption</p>
            </div>
            <div className="relative flex">
              <div className="w-4/6">
                <input aria-label="link" name="link" type="text" required className="appearance-none rounded relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-lg rounded-b-lg rounded-tr-none rounded-br-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="URL Link" />
              </div>
              <div className="w-2/6">
                <button type="submit" className="border border-black group relative w-full justify-center py-3 px-3  text-sm leading-5 font-medium font-medium bg-black hover:bg-orange-500 text-white font-bold  rounded rounded-t-lg rounded-b-lg rounded-tl-none rounded-bl-none focus:outline-none focus:border-white-700 focus:shadow-outline-indigo active:bg-white-700 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                  Generate URL
                </button>
              </div> 
            </div>
          </div>
          <div className="w-full mt-6">
            <div className="flex w-full bg-white rounded-lg border py-3 px-3"> 
            
              <div  className="new-url">https://john.sales.today</div>
              <div className="copy-text text-right bold">COPY</div>
            </div>
          </div> 
        </div>
      </div>

    </div>
    
  </div>
)

Index.layout = SiteLayout

export default Index
