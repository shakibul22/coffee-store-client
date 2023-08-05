import { Link, useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Coffees from './Coffees';

const PopularCoffee = () => {
    const [coffees, setCoffees] = useState([]); // Initialize coffees as an empty array
    console.log(coffees);

    useEffect(() => {
        fetch('https://coffee-store-server-nu.vercel.app/coffee')
            .then(res => res.json())
            .then(data => setCoffees(data))
            .catch(error => console.error('Error fetching coffee data:', error));
    }, []);

    return (
        <div className='bg-orange-50'>
            <div className='text-center font-serif pt-5 md:pt-16'>
            <h2 className=''>--sip & savor--</h2>
            <h1 className='text-center text-3xl text-yellow-950 mb-4'>Our Popular Products</h1>
            <Link to='/addCoffee'><button className='btn btn-outline text-slate-500 btn-sm'>Add a Coffee</button></Link>
            </div>

            <div className="grid md:grid-cols-2 gap-3 p-4 md:px-16 bg-[url('https://res.cloudinary.com/drhtv8dr4/image/upload/v1691244431/1_ecorzs.png')] bg-no-repeat bg-contain ">
                {coffees.map(coffee => (
                    <Coffees key={coffee._id} coffee={coffee}></Coffees>
                ))}
            </div>

        </div>
    );
};

export default PopularCoffee;
