import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
const OfferSlider = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 3000)
                }
                slider.on("created", () => {
                    // slider.container.addEventListener("mouseover", () => {
                    //     mouseOver = true
                    //     clearNextTimeout()
                    // })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )
    return (
        <div className="mt-2 mx-auto w-full">
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1"><img src="https://www.startech.com.bd/image/cache/catalog/home/geyser-home-banner-982x500.webp" className="w-full" alt="" /></div>
                <div className="keen-slider__slide number-slide1"><img src="https://www.startech.com.bd/image/cache/catalog/home/gadget-fest-home-banner-2024-982x500.webp" className="w-full" alt="" /></div>
                <div className="keen-slider__slide number-slide1"><img src="https://www.startech.com.bd/image/cache/catalog/home/banner/winter-desktop-deal-web-banner-982x500.webp" className="w-full" alt="" /></div>


            </div>
        </div>
    );
};

export default OfferSlider;