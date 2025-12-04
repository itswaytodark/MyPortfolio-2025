import TextPressure from "./TextPressure"

const welcome = () => {
  return (
    <section id="welcome">
        {/* <p className="text-3xl font-thin">HEY I'M ARYAN WELCOME TO MY</p>
        <h1 className="mt-7 italic text-6xl font-Georama">MACFOLIO</h1> */}

        <TextPressure text="ARYAN Gohil " italic={false} textColor="#ffffff" minFontSize={60}/>
        <div className="mt-2">
        <TextPressure text="PORTFOLIO." italic={true} textColor="#ffffff" minFontSize={50} width={true}/>
        </div>
    </section>
  )
}

export default welcome