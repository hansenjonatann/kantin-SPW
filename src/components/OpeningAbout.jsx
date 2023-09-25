export default function OpeningAbout() {
    return (
        <>
            <div className=" dark:bg-black dark:text-white lg:mt-10 pb-8">
                <p className="font-bold text-xl text-center lg:text-2xl py-6">
                    About Pages<br />
                </p>
                <div className="py-4 px-2 w-4/5 text-center lg:w-1/2 bg-primary2 dark:bg-footer2 m-auto shadow-xl rounded-lg">
                    <p className="font-semibold text-base lg:text-lgpb-2">
                        Web ini dikembangkan oleh Jamaludin Hanif ( FrontEnd Dev )
                    </p>
                    <p className="font-semibold text-base lg:text-lg">
                        Visit My web Portofolio : <br />
                        <span className="text-center">👇👇👇</span> <br />
                        <a href="https://jamaludinhanif.github.io/portofolio-hanif/">
                            <span className="px-3 py-1 hover:bg-black hover:text-white">Klik</span>
                        </a>
                    </p>
                </div>
            </div>
        
        </>
    )
}