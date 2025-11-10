export function IntroSection() {
    return (
        <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2">
                <p className="leading-relaxed">
                    I am a young professional with a passion for web
                    technologies, cloud services and information security.
                    Seeking positions that match skills &#38; experience,
                    allowing for professional growth and impactful
                    contributions to modern software projects. I consider
                    myself to be a flexible and adaptable individual who
                    finds joy in learning about new cultures, working with
                    people from diverse backgrounds and contributing from my
                    own experiences to the communities that welcome me.
                </p>
                <br />

            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
                <img
                    src="https://s3.eu-central-1.amazonaws.com/storage-diegocisneros.dev/images/profilePic.jpg"
                    alt="website profile"
                    className="h-[300px] lg:h-[400px] w-auto rounded-xl outline-double outline-[#007EA7] shadow-lg"
                />
            </div>
        </div>
    )
}
