import { Fragment, useState } from "react";
import SectionTitle from "../../../../Component/Shared Component/SectionTitle/SectionTitle";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { axiosPublic } from "../../../../API/AxiosPublic/AxiosPublic";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
import { ImgUpload } from "../../../../API/ImgUpload/ImgUpload";

const people = [
    { name: 'dessert' },
    { name: 'soup' },
    { name: 'drinks' },
    { name: 'salad' },
    { name: 'pizza' },
    { name: 'popular' },
]

const UpdateItem = () => {
    // console.log(item.length)
    const location = useLocation()
    // console.log(location)
    const item = location?.state
    const { category, name, price, recipe, _id } = item
    const [selected, setSelected] = useState({ name: category })


    const handleUpdateItem = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const category = selected.name;
        const price = parseFloat(form.price.value);
        const recipe = form.recipe.value;
        const imgbb = form.image.files[0]
        const image = await ImgUpload(imgbb)


        // Make the update request with updated data
        if (image.success) {
            const menu = { name, category, price, recipe, image: image.data.display_url }
            await axiosPublic.patch(`/menu/admin/${_id}`, menu)
                .then(res => {
                    console.log(res.data);
                    if (res.data.modifiedCount > 0) {
                        // refetch()
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} is now updated.`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                }).catch(error => {
                    // Handle error
                    console.error("Error updating item:", error);
                });
        }

    }
    return (
        <div>
            <SectionTitle heading={'Update Item'} subHeading={'Are you want update?'}></SectionTitle>
            <div className="bg-slate-300 p-14">
                <form className="grid md:grid-cols-2 gap-10" onSubmit={handleUpdateItem}>
                    <div className="flex flex-col space-y-4">
                        <label htmlFor="">Name</label>
                        <input type="text" name="name" defaultValue={name} placeholder="name" className="input border-[1px] h-12" />
                    </div>

                    <div className="flex flex-col space-y-4">
                        <label htmlFor="">Image Url</label>
                        <input type="file" name="image" placeholder="" className="input border-[1px] h-12"  required/>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <label htmlFor="">Category</label>
                        <div className="top-16 w-full">
                            <Listbox value={selected} onChange={setSelected}>
                                <div className="relative mt-1">
                                    <Listbox.Button className="relative w-full cursor-default rounded-lg h-12 bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                        <span className="block truncate">{selected.name}</span>
                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                            <ChevronUpDownIcon
                                                className="h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </Listbox.Button>
                                    <Transition
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                            {people.map((person, personIdx) => (
                                                <Listbox.Option
                                                    key={personIdx}
                                                    className={({ active }) =>
                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                        }`
                                                    }
                                                    value={person}
                                                >
                                                    {({ selected }) => (
                                                        <>
                                                            <span
                                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                    }`}
                                                            >
                                                                {person.name}
                                                            </span>
                                                            {selected ? (
                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                </span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </Listbox>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <label htmlFor="">Price</label>
                        <input type="text" name="price" defaultValue={price} placeholder="price" className="input border-[1px] h-12" />
                    </div>
                    <div className="flex flex-col space-y-4 col-span-2">
                        <label htmlFor="">Recipe Details</label>
                        <textarea type="text" name="recipe" defaultValue={recipe} placeholder="recipe details" className="input border-[1px] h-32"></textarea>
                    </div>
                    <div className="flex  col-span-2">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default UpdateItem;