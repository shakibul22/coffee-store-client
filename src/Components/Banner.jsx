import React from 'react';

const Banner = () => {
    return (
        <div className="bg-[url('https://res.cloudinary.com/drhtv8dr4/image/upload/v1691185163/3_gglddq.png')]">
        <div className="hero w-full h-[155px]  md:h-[485px]   bg-[url('https://res.cloudinary.com/drhtv8dr4/image/upload/v1691185163/3_gglddq.png')] bg-contain bg-center bg-no-repeat">

<div className='ml-[5%] md:ml-[45%] w-full md:w-1/2'>
    <h1 className="text-sm md:text-5xl font-semibold">Would you like a Cup of Delicious Coffee?</h1>
    <p className="py-2 md:py-6  text-xs md:text-xl ">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
    <p className="bg-yellow-500 text-yellow-950 p-2 btn btn-sm md:btn-md btn-outline">Learn More</p>
</div>

</div>


            <div className="bg-orange-50 grid grid-cols-1 md:grid-cols-4   px-2 md:px-[100px] lg:px-[80px] ">
            
                    <div className="card-body">
                    <img className='w-20' src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1691188237/1_qu9fsi.png" alt="aroma" />
                        <h2 className="font-serif text-md md:text-lg lg:text-l ">Awesome Aroma</h2>
                        <p className='text-xs'>You will definitely be a fan of the design & aroma of your coffee</p>
                       
                    </div>
               
                    
                    <div className="card-body">
                    <img className='w-20' src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1691188309/2_ixih81.png" alt="quality" />
                        <h2 className="font-serif text-md md:text-lg lg:text-xl">High Quality</h2>
                        <p className='text-xs'>We served the coffee to you maintaining the best quality</p>
                        
                    </div>
             
         
                    <div className="card-body">
                 <img className='w-20' src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1691188319/3_ajrovb.png" alt="grades" />
                        <h2 className="font-serif text-md md:text-lg lg:text-xl">Pure Grades</h2>
                        <p className='text-xs'>The coffee is made of the green coffee beans which you will love</p>
                       
                    </div>
            
                    <div className="card-body">
                <img className='w-20' src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1691188327/4_yqf44e.png" alt="roasting" />
                        <h2 className="font-serif text-md md:text-lg lg:text-xl">Proper Rosting</h2>
                        <p className='text-xs'>Your coffee is brewed by first roasting the green coffee beans</p>
                     
                    </div>
                </div>
            </div>
     
    );
};

export default Banner;