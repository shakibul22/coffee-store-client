import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Coffees = ({ coffee }) => {
    const {_id, name, quantity, taste, suplier, details, photo, catagory } = coffee;

    const handleDelete=_id=>{
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-store-server-nu.vercel.app/coffee/${_id}`,{
                    method:'DELETE',
                    
                })
                .then(res=>res.json())
                .then(data=>{console.log(data)
                    if(data.deletedCount>0){
                        Swal.fire(
                            'Deleted!',
                            'Your Coffee has been deleted.',
                            'success'
                          )
                    }
                
                })
            
            }
          })
    }
    return (
        <div className="card card-side flex flex-col md:flex-row  shadow-xl p-4  ">
            <figure><img src={photo} alt="Coffee" /></figure>
            <div className=" flex  w-full justify-between">
            <div>
            <h2 className="card-title">Name:{name}</h2>
                <p>Suplier Name: {suplier}</p>
                <p>Taste: {taste}</p>
                <p>Catagory: {catagory}</p>
                <p>Quantity: {quantity}</p>
                <p>Details: {details}</p>
            </div>
            <div className="card-actions justify-end p-3 ">
                <div className="btn-group btn-group-vertical space-y-3 ">
                    <button className="btn btn-active btn-md"><FaEye/> </button>
                    
                    <Link to={`updateCoffee/${_id}`}><button className="btn bg-slate-200 text-xl btn-md"><MdEdit/> </button></Link>
                    <button onClick={()=>handleDelete(_id)} className="btn bg-orange-500 text-xl btn-md"><MdDelete/> </button>
                     
                </div>
            </div>
            </div>
        </div>
    );
};

export default Coffees;