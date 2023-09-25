export default function Komentar () {
    return (
        <>
        
            <div className="pt-7 pb-7 mt-3 w-full ">
                <div className="lg:w-1/3 m-auto bg-primary dark:text-white dark:bg-black">
                <p className="font-bold px-4 pt-3 text-xl text-center lg:text-2xl mb-7">
                    Ayo berikan saran kalian 👇
                </p>
                    <div className="flex justify-center">
                        <div className="px-4 py-4">
                            <p className="font-semibold text-lg lg:text-x pb-4">
                            Nama :
                            </p>
                            <input type="text" className="w-72 h-7 dark:bg-footer2"/>

                            <p className="font-semibold text-lg lg:text-x py-4">
                            Kritik dan saran :
                            </p>
                            <textarea className="w-72 h-32 dark:bg-footer2"></textarea> <br />
                            <button className="px-4 py-2 bg-green-900 hover:bg-green-500 dark:bg-green-500 text-white dark:hover:bg-green-900 mt-4">Kirim</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}