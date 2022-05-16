import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Swal from 'sweetalert2'

const BookingModal = ({ treatment, date, setTreatment }) => {
    const [user] = useAuthState(auth);
    const { _id, name, slots } = treatment
    const formattedDate = format(date, 'PP')
    const handleBooking = event => {
        event.preventDefault()
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value

        }

        fetch("http://localhost:5000/booking", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data =>
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Booking Successfull',
                    showConfirmButton: false,
                    timer: 1500
                }))
        setTreatment(null);

    }
    console.log(user)
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary">Booking For: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" disabled value={user?.displayName} class="input input-bordered w-full max-w-xs" />
                        <input name='email' type="email" disabled value={user?.email} class="input input-bordered w-full max-w-xs" />
                        <input name='phone' type="number" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="submit" placeholder="Type here" class="btn btn-secondary input input-bordered w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;