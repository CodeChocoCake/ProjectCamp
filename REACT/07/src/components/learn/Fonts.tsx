const Fonts = () => {
    return (
        <>
            <div className="flex flex-col align-middle items-center">
                <div className="w-2/3 bg-gray-900 p-4 m-6 rounded-xl break-keep">
                    <h1 className="text-1xl font-medium m-6 text-center">
                        If you need to use a one-off color value that doesn’t
                        make sense to include in your theme,
                        <br />
                        <a className="border-b-2 border-red-400 text-white ">
                            Fonts Component
                        </a>
                        , use square brackets to generate a property on the fly
                        using any arbitrary value.
                    </h1>
                </div>
                <div className="leading-10 text-lg">
                    <p className="malang text-center ">
                        말랑말랑 말랑말랑 말랑말랑
                    </p>
                    <p className="jeju text-center ">
                        제주 돌담체 <span className="text-orange-400">젲</span>
                        젷젶줓젴줗
                    </p>
                </div>
            </div>
        </>
    );
};
export default Fonts;
