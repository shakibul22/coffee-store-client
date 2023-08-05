import Swal from 'sweetalert2';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const suplier = form.suplier.value;
        const taste = form.taste.value;
        const catagory = form.catagory.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, quantity, taste, suplier, catagory, details, photo }
        fetch('https://coffee-store-server-nu.vercel.app/coffee', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
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
        <div className="bg-[url('https://res.cloudinary.com/drhtv8dr4/image/upload/v1691244461/11_kcmbnj.png')] md:p-[100px] bg-cover bg-no-repeat">
            <Link to='/' className='text-2xl font-serif flex items-center gap-2 p-3 text-yellow-950'><RiLogoutCircleLine className='text-3xl'/> Back Home</Link>
            <div className="bg-[url('https://res.cloudinary.com/drhtv8dr4/image/upload/v1691188114/10_hvi4ld.png')] bg-contain p-8">
            <h3 className="text-3xl text-center font-extrabold mb-5 text-yellow-950">Add Coffee</h3>
            {/* form coffee row */}
            <form onSubmit={handleAddCoffee}>
                <div className="flex mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-yellow-950">Coffee Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='name' placeholder="Coffee name" className="input input-bordered bg-slate-50 w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-3">
                        <label className="label">
                            <span className="label-text text-yellow-950">Available Quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="quantity" placeholder="available quantity" className="input input-bordered bg-slate-50 w-full" />
                        </label>
                    </div>
                </div>

                <div className="flex mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-yellow-950">Suplier Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='suplier' placeholder="Suplier Name" className="input input-bordered bg-slate-50 w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-3">
                        <label className="label">
                            <span className="label-text text-yellow-950">Taste</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="taste" placeholder="Taste" className="input input-bordered bg-slate-50 w-full" />
                        </label>
                    </div>
                </div>

                <div className="flex mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-yellow-950">Catagory</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='catagory' placeholder="Catagory" className="input input-bordered bg-slate-50 w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-3">
                        <label className="label">
                            <span className="label-text text-yellow-950">Details</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="details" placeholder="Details" className="input input-bordered bg-slate-50 w-full" />
                        </label>
                    </div>
                </div>


                {/* form Photo row */}

                <div className="w-full mb-5">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text text-yellow-950">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered bg-slate-50 w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value='Add Coffee' className="btn btn-block btn-active bg-orange-200 text-yellow-950 text-2xl " />
            </form>

            </div>


        </div>
    );
};

export default AddCoffee;