import { FaTrashAlt } from "react-icons/fa";
import { FaPenFancy } from "react-icons/fa";

const Table = ({ data, setData }) => {

    function remove (index){
        let newDtat =[...data];
        newDtat.splice(index,1);
        setData(newDtat);
    }
    function edit (index){
        let newName = prompt("Enter your Name");
        let newFamily = prompt("Enter your Family");
        let newEmail = prompt("Enter your Email");
        let newPhone = prompt("Enter your Phone");

        let user = {
            name : newName,
            family : newFamily,
            email : newEmail,
            phone : newPhone,
        }

        let newDtat =[...data];
        newDtat.splice(index,1,user);
        setData(newDtat);
    }
    return (

        <table className="table">
            <thead>
                <tr>
                    <th scope="col" className="text-center"><FaTrashAlt /></th>
                    <th scope="col" className="text-center"><FaPenFancy /></th>
                    <th scope="col" className="text-center">#</th>
                    <th scope="col" className="text-center">نام</th>
                    <th scope="col" className="text-center">نام خانوادگی</th>
                    <th scope="col" className="text-center">ایمیل</th>
                    <th scope="col" className="text-center">تلفن</th>
                </tr>
            </thead>
            <tbody id="tbody">

                {
                    data.map((item,index) => (

                        <tr>
                        <td scope="col" className="text-center" onClick={() => remove(index)}><FaTrashAlt /></td>
                        <td scope="col" className="text-center" onClick={() => edit(index)}><FaPenFancy /></td>
                        <td scope="col" className="text-center">{index}</td>
                        <td scope="col" className="text-center">{item.name}</td>
                        <td scope="col" className="text-center">{item.family}</td>
                        <td scope="col" className="text-center">{item.email}</td>
                        <td scope="col" className="text-center">{item.phone}</td>
                    </tr>

                    ))
                }

            </tbody>
        </table>

    )
}

export default Table;