import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';

function OrderConfirmContainer() {
    const { width, height } = useWindowSize();
    function getRandomSixDigit(): number {
        return Math.floor(Math.random() * 900000) + 100000;
    }

    const number = getRandomSixDigit()

    return (
        <div className='w-full min-h-[85vh] !mt-[60px] flex flex-col justify-center items-center gap-6 p-4'>
            <div className='flex flex-col justify-center items-center p-4 w-full max-w-md text-center max-[450px]:w-[90%]'>
                <h2 className='text-2xl font-semibold'>Order Placed Successfully!!!</h2>
                <img
                    src='https://png.pngtree.com/png-clipart/20240510/original/pngtree-confetti-cone-party-popper-celebration-cartoon-style-png-image_15053080.png'
                    className='h-36 mt-2'
                    alt="Confetti"
                />
                <Confetti width={width} height={height} />
                <p className='text-[#333232] text-lg mt-2'>
                    Hurray!!! Your order is confirmed. The order ID is <b>#{number}</b>. Save the order ID for further communication.
                </p>
            </div>
            <div className="p-4 w-full max-w-3xl overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300 text-[#333232]">
        <thead>
            <tr className="bg-gray-100 font-bold text-lg text-center">
                <th className="border border-gray-300 px-8 py-3 min-w-[220px]">Email</th>
                <th className="border border-gray-300 px-8 py-3 min-w-[180px]">Contact Us</th>
                <th className="border border-gray-300 px-8 py-3 min-w-[320px]">Address</th>
            </tr>
        </thead>
        <tbody>
            <tr className="text-center">
                <td className="border border-gray-300 px-8 py-3">john.doe@example.com</td>
                <td className="border border-gray-300 px-8 py-3">+123456789</td>
                <td className="border border-gray-300 px-8 py-3">
                    42, 14th Main, 15th Cross, Sector 4, opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore 560034
                </td>
            </tr>
        </tbody>
    </table>
</div>

    

            <button className='mb-12 text-white bg-[#3371B5] h-[35px] w-[200px] rounded-md hover:cursor-pointer hover:bg-[#78a1cc] transition-all'>
                Continue Shopping
            </button>
        </div>
    );
}

export default OrderConfirmContainer;
