import { RiLogoutCircleLine, RiLogoutCircleRLine } from 'react-icons/ri';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee=useLoaderData();
    console.log(coffee);
    const {_id, name, quantity, taste, suplier, details, photo, catagory } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const suplier = form.suplier.value;
        const taste = form.taste.value;
        const catagory = form.catagory.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = { name, quantity, taste, suplier, catagory, details, photo }
        fetch(`https://coffee-store-server-nu.vercel.app/coffee/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Coffee Added Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            })

    }
    return (
        <div className="bg-[url('https://res.cloudinary.com/drhtv8dr4/image/upload/v1691244461/11_kcmbnj.png')] md:p-[100px] bg-cover bg-no-repeat ">
         <Link to='/' className='text-2xl font-serif flex items-center gap-2 p-3 text-yellow-950'> <RiLogoutCircleLine className='text-3xl'/>  Back Home</Link>
            <div className="bg-[url('https://res.cloudinary.com/drhtv8dr4/image/upload/v1691188114/10_hvi4ld.png')] bg-contain p-8">
            <h3 className="text-3xl text-center font-extrabold mb-5 text-yellow-950">Update existing Coffee Details</h3>
            <p className='text-center text-lg'> It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <form onSubmit={handleUpdateCoffee}>
                <div className="flex mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text   text-yellow-950 text-xl">Coffee Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='name' defaultValue={name} placeholder="Coffee name" className="input input-bordered bg-slate-50 w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-3">
                        <label className="label">
                            <span className="label-text  text-yellow-950 text-xl">Available Quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="quantity" defaultValue={quantity} placeholder="available quantity" className="input input-bordered bg-slate-50 w-full" />
                        </label>
                    </div>
                </div>

                <div className="flex mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text  text-yellow-950 text-xl">Suplier Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='suplier' defaultValue={suplier} placeholder="Suplier Name" className="input input-bordered bg-slate-50 w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-3">
                        <label className="label">
                            <span className="label-text  text-yellow-950 text-xl">Taste</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="input input-bordered bg-slate-50 w-full" />
                        </label>
                    </div>
                </div>

                <div className="flex mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text  text-yellow-950 text-xl">Catagory</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='catagory' defaultValue={catagory} placeholder="Catagory" className="input input-bordered bg-slate-50 w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-3">
                        <label className="label">
                            <span className="label-text  text-yellow-950 text-xl">Details</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered bg-slate-50 w-full" />
                        </label>
                    </div>
                </div>


                {/* form Photo row */}

                <div className="w-full mb-5">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text  text-yellow-950 text-xl">Photo URL</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name='photo' defaultValue={photo} placeholder="Photo URL" className="input input-bordered bg-slate-50 w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value='Update Coffee Details' className="btn btn-block btn-active text-yellow-950 bg-orange-300  text-xl " />
            </form>



        </div>
        </div>
    );
    
};

export default UpdateCoffee;